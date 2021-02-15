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

  getLocalVars(scope, tempDefinition) {
    let localVars = {};
    const definition = this.resolvedDefinition || tempDefinition
    for (let i=0; i<definition.args.length; i++) {
      const arg = definition.args[i];
      const variable = {
        expr: this.args[i],
        type: arg.type,
        isInline: definition.isInline,
      }
      variable.fieldsLatex = scope.visitor.getFieldsLatex(
        arg.type,
        arg.variable,
      )
      localVars[arg.variable] = variable
    }
    return localVars;
  }

  getScope(scope, tempDefinition) {
    return scope.withLocalVars(
      this.getLocalVars(scope, tempDefinition),
      (this.resolvedDefinition || tempDefinition).isInline,
    )
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
      definition.resultType = definition.expr.getType(
        this.getScope(scope, definition).withAddedFunc(definition)
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

  split(_scope, fromType, member) {
    const scope = this.getScope(_scope);
    if (this.resolvedDefinition.resultType === fromType) {
      if (this.resolvedDefinition.isPassthrough) {
        // this is a function like in z=Complex(2,3), just split to zReal=2 and zImag=3
        // instead of definining ComplexReal(a,b)=a and ComplexImag(a,b)=b, etc.
        return this.args[this.resolvedDefinition.args.map(e => e.variable).indexOf(member)]
      } else {
        const name = this.resolvedDefinition.fieldsLatex[member]
        return new FunctionApplication(
          this.ctx,
          this.resolvedDefinition.fieldsLatex[member],
          this.args,
          {
            args: this.resolvedDefinition.args,
            expr: this.resolvedDefinition.expr.split(scope, fromType, member),
            fieldsLatex: name, // It's a Num, not an object
            isInline: this.resolvedDefinition.isInline,
            latexName: name,
            name: this.resolvedDefinition.name,
            resultType: this.resolvedDefinition.resultType.fieldTypes[member],
          }
        )
      }

    } else {
      // TODO: this is where you handle custom types when not needing to split
      // Can this situation even occur?
      return {
        ...this,
        funcName: this.funcName + "_latextodo"
      };
    }
  }

  toLatex(_scope) {
    const scope = this.getScope(_scope)
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

    if (this.resolvedDefinition.customEval) {
      return this.resolvedDefinition.customEval(values)
    } else if (this.resolvedDefinition.isInline) {
      return this.resolvedDefinition.expr.toLatex(scope)
    } else {
      return this.resolvedDefinition.latexName + '\\left(' + values.join(',') + '\\right)'
    }
  }
}

export class DefaultFunction extends LanguageElement {
  constructor(ctx, innerFunc, argVariables) {
    super(ctx)
    // TODO: handle defaulting wrapped
    // TODO: expand to work for arguments with different types (one Num, one not, etc),
    // for example `def _add(a:Num, z:Complex) = default`
    const objectType = argVariables.find(arg => arg.type.type != 'Num').type
    if (objectType === undefined) {
      this.throw(`Can only generate default functions if an object argument is present`)
    } else if (
      !argVariables.every(arg => (
        arg.type.type == 'Num'
        || arg.type.equalsType(objectType))
      )
    ) {
      this.throw(`Can only generate default functions if all arguments are the same type`)
    } else if (objectType.numWrapped > 0) {
      this.throw(`Cannot default wrapped variables (yet)`)
    }
    // now must have two arguments of the same type
    this.objectType = objectType
    this.innerFunc = innerFunc
    this.argVariables = argVariables
  }

  resolvedDefinition(scope) {
    const typeName = this.objectType.type
    const objectType = scope.visitor.types[typeName]
    return new ObjectInstance(
      this.ctx,
      typeName, // HERE
      objectType.fields.map(({fieldName}) => ({
        field: fieldName,
        value: new FunctionApplication(
          this.ctx,
          this.innerFunc,
          this.argVariables.map(({variable, type}) => {
            const varExpr = new VariableExpression(
              this.ctx,
              variable
            )
            if (type.type == 'Num') {
              return varExpr
            } else {
              return new ObjectAccessExpression(this.ctx, varExpr, fieldName)
            }
          })
        )
      }))
    )
  }

  getType(scope) {
    this.resolvedDefinition = this.resolvedDefinition(scope)
    // should return just this.objectType
    // but need to call getType for side effects
    return this.resolvedDefinition.getType(scope)
  }

  split(scope, fromType, member) {
    return this.resolvedDefinition.split(scope, fromType, member)
  }

  toLatex(scope) {
    return this.split(scope).toLatex(scope)
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
      return variable.expr.getType(scope.withAddedVar(this.varName))
    } else {
      return variable.type
    }
  }

  split(scope, fromType, member) {
    const myType = this.getType(scope)
    if (myType === fromType) {
      const variable = scope.getVariable(this.varName)
      if (this.varName in scope.localVars && variable.isInline) {
        return variable.expr.split(scope, fromType, member)
      } else {
        let expr = new VariableExpression(this.ctx, this.varName)
        expr.toLatex = scope => variable.fieldsLatex[member];
        return expr;
      }
    } else {
      this.throw(`Must be able to split to ${member} but failed on ${this.varName}`)
    }
  }

  toLatex(scope) {
    const variable = scope.getVariable(this.varName)
    if (variable.customLatex) {
      return variable.customLatex
    } else {
      if (variable.isInline) {
        return variable.expr.toLatex(scope.withLocalVars({}, false))
      } else {
        return variable.fieldsLatex
      }
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
