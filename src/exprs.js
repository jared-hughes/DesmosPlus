import ScopeContext from './ScopeContext.js'
import LanguageElement from './LanguageElement.js'

// NEXT UP: Parametric types, class FunctionAlternative,
// FunctionAlternative.prototype.isSatisfiedBy(arglist)
// typeclasses/interfaces → subclassing

function satisfyAlternative(alternative, args, scope) {
  // returns false if does not satisfy, object localTypeParams if does satisfy
  if (alternative.args.length != args.length) {
    return false
  }
  let localTypeParams = {}
  for (let i=0; i<args.length; i++) {
    const expectedTypeGeneral = alternative.args[i].type
    let expectedType = localTypeParams[expectedTypeGeneral] ?? expectedTypeGeneral
    let foundType = args[i].getType(scope)
    if (!foundType.matchesType(expectedType, scope)) {
      return false
    }
    if (expectedType.isParametricType) {
      while (expectedType.numWrapped > 0) {
        expectedType = expectedType.unwrapped();
        foundType = foundType.unwrapped();
      }
      localTypeParams[expectedType.type] = foundType
    }
  }
  // always truthy
  return localTypeParams
}

export class FunctionApplication extends LanguageElement {
  constructor(ctx, funcName, args, resolvedDefinition) {
    super(ctx)
    this.funcName = funcName
    this.args = args
    this.resolvedDefinition = resolvedDefinition
  }

  getType(scope) {
    // TODO: split this function, reduce side effects, etc. This is 60+ lines of spaghet

    const alts = scope.visitor.functions[this.funcName]
    if (alts === undefined) {
      this.throw(`Function ${this.funcName} is not defined`)
    }
    const argTypes = this.args.map(e => e.getType(scope))
    const satisfiedAlts = alts.map(alt => ({
      definition: alt,
      localTypeParams: satisfyAlternative(alt, this.args, scope),
    }))
    const validAlts = satisfiedAlts.filter(e => e.localTypeParams)
    if (validAlts.length > 1) {
      this.throw(`More than one alternative for ${this.funcName}(${argTypes.join(', ')})`)
    }
    if (validAlts.length == 0) {
      this.throw(`No satisfying alternative for ${this.funcName}(${argTypes.join(', ')})`)
    }
    const { definition, localTypeParams } = validAlts[0]


    if (definition.resultType === undefined) {
      let newLocalVars = {};
      for (let i=0; i<this.args.length; i++) {
        const arg = definition.args[i];
        newLocalVars[arg.variable] = {
          expr: this.args[i],
          fieldsLatex: scope.visitor.getFieldsLatex(
            arg.type,
            arg.variable,
          ),
          type: arg.type,
        }
      }
      definition.localVars = newLocalVars
      definition.resultType = definition.expr.getType(
        new ScopeContext(
          scope.visitor,
          [],
          [...scope.funcChain, definition],
          newLocalVars
        )
      )
    }

    definition.fieldsLatex = scope.visitor.getFieldsLatex(
      definition.resultType,
      this.funcName + (1+satisfiedAlts.indexOf(validAlts[0])),
    )
    this.resolvedDefinition = definition;

    // need to compare definitions because a function *can* be defined in terms
    // of an (overloaded) function with the same name
    if (scope.funcChain.includes(this.resolvedDefinition)) {
      this.throw(`Function ${this.funcName} cannot be defined in terms of itself`)
    }

    const usedFunctions = scope.visitor.usedFunctions
    usedFunctions[this.funcName] = usedFunctions[this.funcName] || []
    usedFunctions[this.funcName].push(this.resolvedDefinition)

    const result = definition.resultType;
    return localTypeParams[result] ?? result
  }

  split(scope, fromType, member) {
    if (this.resolvedDefinition.resultType === fromType) {
      if (this.resolvedDefinition.isPassthrough) {
        // this is a function like in z=Complex(2,3), just split to zReal=2 and zImag=3
        // instead of definining ComplexReal(a,b)=a and ComplexImag(a,b)=b, etc.
        return this.args[this.resolvedDefinition.args.map(e => e.variable).indexOf(member)]
      } else {
        return new FunctionApplication(
          this.ctx,
          this.resolvedDefinition.fieldsLatex[member],
          // TODO maybe? split args into `Num`s only, then flatten
          this.args,
          // TODO maybe? split resolvedDefinition to accept split/flattened `Num`s
          {
            ...this.resolvedDefinition,
            latexName: this.resolvedDefinition.fieldsLatex[member],
            // args: ...,
          }
        )
      }

    } else {
      // TODO: this is where you handle custom types when not needing to split
      return {
        ...this,
        funcName: this.funcName + "_latextodo"
      };
    }
  }

  toLatex(scope) {
    let values = []
    for (let arg of this.args) {
      const objectType = arg.getType(scope);
      if (objectType.fields) {
        values.push(
          ...objectType.fields.map(
            field => arg.split(scope, objectType, field.fieldName).toLatex(scope)
          )
        )
      } else {
        values.push(arg.toLatex(scope))
      }
    }
    // _add in definition of add(z1:Complex, z2:Complex) is getting an undefined resolvedDefinition
    if (this.resolvedDefinition.customEval) {
      return this.resolvedDefinition.customEval(values)
    } else {
      return this.resolvedDefinition.latexName + '\\left(' + values.join(',') + '\\right)'
    }
  }
}

export class ObjectAccessExpression extends LanguageElement {
  constructor(ctx, object, identifier) {
    super(ctx)
    this.object = object
    this.identifier = identifier
  }

  getType(scope) {
    const objectType = this.object.getType(scope)
    return objectType.getMemberType(this.identifier, scope)
  }

  split(scope, fromType, member) {
    if (fromType === undefined) {
      return this.object.split(scope, this.object.getType(scope), this.identifier)
    } else {
      this.throw(`Can't access nested member ${member} within ${this.identifier}`)
    }
  }

  toLatex(scope) {
    return this.split(scope).toLatex(scope)
  }
}

export class ObjectInstance extends LanguageElement {
  constructor(ctx, objectName, fields) {
    super(ctx)
    this.objectName = objectName
    this.fields = fields
  }

  getType(scope) {
    const types = scope.visitor.types[this.objectName]

    // check if fields have data of right type
    const correctFields = this.fields.map(
      field => field.value.getType(scope).matchesType(types.fieldTypes[field.field])
    )
    const i = correctFields.indexOf(false);
    if (i >= 0) {
      const mismatchField = this.fields[i]
      this.throw(
        `Type mismatch: field ${mismatchField.field} is type ${mismatchField.value.getType(scope)}`
        + ` but should be ${types.fieldTypes[mismatchField.field]}`
      )
    }
    return types
  }

  split(scope, fromType, member) {
    // TODO: handle incomplete fields, e.g. Metadata (default to null; optional types)
    if (this.getType(scope) == fromType) {
      return this.fields.find(e => e.field == member).value
    } else {
      return this.fields.map(e => ({
        ...e,
        value: e.value.split(scope, fromType, member)
      }))
    }
  }
}

export class VariableExpression extends LanguageElement {
  constructor(ctx, varName) {
    super(ctx)
    this.varName = varName
  }

  getType(scope) {
    if (scope.varChain.includes(this.varName)) {
      this.throw(`Variable ${this.varName} cannot be defined in terms of itself`)
    }
    const variable = scope.getVariable(this.varName)
    if (variable.type === undefined) {
      return variable.expr.getType(
        new ScopeContext(
          scope.visitor,
          [...scope.varChain, this.varName],
          scope.funcChain,
          scope.localVars,
        )
      )
    } else {
      return variable.type
    }
  }

  split(scope, fromType, member) {
    const myType = this.getType(scope)
    if (myType === fromType) {
      const variable = scope.getVariable(this.varName)
      let expr = new VariableExpression(this.ctx, this.varName)
      expr.toLatex = scope => variable.fieldsLatex[member];
      return expr;
    } else {
      this.throw(`Must be able to split to ${member} but failed on ${this.varName}`)
    }
  }

  toLatex(scope) {
    const variable = scope.getVariable(this.varName)
    if (variable.customLatex) {
      return variable.customLatex
    } else {
      return variable.fieldsLatex
    }
  }
}

export class NumberLiteral extends LanguageElement {
  constructor(ctx, value) {
    super(ctx)
    this.value = value
  }

  getType(scope) {
    return scope.visitor.types.Num
  }

  split(scope, fromType, member) {
    return this
  }

  toLatex(scope) {
    return this.value
  }
}

export class StringLiteral extends LanguageElement {
  constructor(ctx, value) {
    super(ctx)
    this.value = value
  }

  getType(scope) {
    return scope.visitor.types.String
  }

  split(scope, fromType, member) {
    return this
  }
}

export class ListLiteral extends LanguageElement {
  constructor(ctx, entries) {
    super(ctx)
    this.entries = entries
  }

  getType(scope) {
    if (this.entries.length === 0) {
      return scope.visitor.types.Any
    }
    const type = this.entries[0].getType(scope)
    if (!this.entries.every(e => e.getType(scope) == type)) {
      this.throw("All entries of a list must have the same type")
    }
    return type.wrapped()
  }

  split(scope, fromType, member) {
    return new ListLiteral(
      this.ctx,
      this.entries.map(e => (
        e.split(scope, fromType, member)
      ))
    )
  }

  toLatex(scope) {
    return '\\left[' + this.entries.map(e => e.toLatex(scope)).join(',') + '\\right]'
  }
}

export class PiecewiseExpression extends LanguageElement {
  constructor(ctx, branches) {
    super(ctx)
    if (branches.length === 0) {
      this.throw("Piecewise cannot be empty")
    }
    this.branches = branches
  }

  getType(scope) {
    if (!this.branches.every(e => e.condition.getType(scope) == scope.visitor.types.Bool)) {
      this.throw("Piecewise conditions must have type Bool")
    }
    const type = this.branches[0].value.getType(scope)
    if (!this.branches.every(e => e.value.getType(scope) == type)) {
      this.throw("All branches of a piecewise must have the same type")
    }
    return type
  }

  split(scope, fromType, member) {
    return new PiecewiseExpression(
      this.ctx,
      this.branches.map(branch => ({
        ...branch,
        value: branch.value.split(scope, fromType, member)
      }))
    )
  }

  toLatex(scope) {
    return '\\left{' + this.branches.map(e => (
      e.condition.toLatex(scope) + '=1'
      + ':'
      + e.value.toLatex(scope)
    )).join(',') + '\\right}'
  }
}
