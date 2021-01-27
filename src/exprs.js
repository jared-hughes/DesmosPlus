import ScopeContext from './ScopeContext.js'
import LanguageElement from './LanguageElement.js'

// NEXT UP: Parametric types, class FunctionAlternative,
// FunctionAlternative.prototype.isSatisfiedBy(arglist)
// typeclasses/interfaces → subclassing

function satisfyAlternative(alternative, args, ctx) {
  // returns false if does not satisfy, object localTypeParams if does satisfy
  if (alternative.args.length != args.length) {
    return false
  }
  let localTypeParams = {}
  for (let i=0; i<args.length; i++) {
    const expectedTypeGeneral = alternative.args[i].type
    let expectedType = localTypeParams[expectedTypeGeneral] ?? expectedTypeGeneral
    let foundType = args[i].getType(ctx)
    if (!foundType.matchesType(expectedType, ctx)) {
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

  getType(ctx) {
    if (ctx.funcChain.includes(this.funcName)) {
      this.throw(`Function ${this.varName} cannot be defined in terms of itself`)
    }
    const alts = ctx.visitor.functions[this.funcName]
    if (alts === undefined) {
      this.throw(`Function ${this.funcName} is not defined`)
    }
    const argTypes = this.args.map(e => e.getType(ctx))
    const validAlts = alts.map(alt => ({
      definition: alt,
      localTypeParams: satisfyAlternative(alt, this.args, ctx),
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
          ctx.visitor,
          [],
          [...ctx.funcChain, this.funcName],
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

  getType(ctx) {
    const objectType = this.object.getType(ctx)
    return objectType.getMemberType(this.identifier, ctx)
  }
}

export class ObjectInstance extends LanguageElement {
  constructor(ctx, objectName, fields) {
    super(ctx)
    this.objectName = objectName
    this.fields = fields
  }

  getType(ctx) {
    // TODO: check if fields have data of right type
    // TODO: handle incomplete fields, e.g. Metadata (default to null; optional types)
    return ctx.visitor.types[this.objectName]
  }
}

export class VariableExpression extends LanguageElement {
  constructor(ctx, varName) {
    super(ctx)
    this.varName = varName
  }

  getType(ctx) {
    if (ctx.varChain.includes(this.varName)) {
      this.throw(`Variable ${this.varName} cannot be defined in terms of itself`)
    }
    const variable = ctx.getVariable(this.varName)
    if (variable.type === undefined) {
      return variable.expr.getType(
        new ScopeContext(
          ctx.visitor,
          [...ctx.varChain, this.varName],
          ctx.funcChain,
          ctx.localVars,
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

  getType(ctx) {
    return ctx.visitor.types.Num
  }
}

export class StringLiteral extends LanguageElement {
  constructor(ctx, value) {
    super(ctx)
    this.value = value
  }

  getType(ctx) {
    return ctx.visitor.types.String
  }
}

export class ListLiteral extends LanguageElement {
  constructor(ctx, entries) {
    super(ctx)
    this.entries = entries
  }

  getType(ctx) {
    if (this.entries.length === 0) {
      return ctx.visitor.types.Any
    }
    const type = this.entries[0].getType(ctx)
    // TODO: function typeSatisfies to handle Any
    if (!this.entries.every(e => e.getType(ctx) == type)) {
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

  getType(ctx) {
    if (!this.branches.every(e => e.condition.getType(ctx) == ctx.visitor.types.Bool)) {
      this.throw("Piecewise conditions must have type Bool")
    }
    const type = this.branches[0].value.getType(ctx)
    if (!this.branches.every(e => e.value.getType(ctx) == type)) {
      this.throw("All branches of a piecewise must have the same type")
    }
    return type
  }
}
