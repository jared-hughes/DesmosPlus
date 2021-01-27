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
  constructor(ctx, funcName, args) {
    super(ctx)
    this.funcName = funcName
    this.args = args
  }

  getType(scope) {
    if (scope.funcChain.includes(this.funcName)) {
      this.throw(`Function ${this.varName} cannot be defined in terms of itself`)
    }
    const alts = scope.visitor.functions[this.funcName]
    if (alts === undefined) {
      this.throw(`Function ${this.funcName} is not defined`)
    }
    const argTypes = this.args.map(e => e.getType(scope))
    const validAlts = alts.map(alt => ({
      definition: alt,
      localTypeParams: satisfyAlternative(alt, this.args, scope),
    })).filter(e => e.localTypeParams)
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
        newLocalVars[definition.args[i].variable] = {
          expr: this.args[i],
          // type: unknown
        }
      }
      return definition.expr.getType(
        new ScopeContext(
          scope.visitor,
          [],
          [...scope.funcChain, this.funcName],
          newLocalVars
        )
      )
    } else {
      const result = definition.resultType;
      return localTypeParams[result] ?? result
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
}

export class ObjectInstance extends LanguageElement {
  constructor(ctx, objectName, fields) {
    super(ctx)
    this.objectName = objectName
    this.fields = fields
  }

  getType(scope) {
    // TODO: check if fields have data of right type
    // TODO: handle incomplete fields, e.g. Metadata (default to null; optional types)
    return scope.visitor.types[this.objectName]
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
}

export class NumberLiteral extends LanguageElement {
  constructor(ctx, value) {
    super(ctx)
    this.value = value
  }

  getType(scope) {
    return scope.visitor.types.Num
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
    // TODO: function typeSatisfies to handle Any
    if (!this.entries.every(e => e.getType(scope) == type)) {
      this.throw("All entries of a list must have the same type")
    }
    return type.wrapped()
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
}
