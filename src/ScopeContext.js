export default class ScopeContext {
  constructor(visitor, varChain, funcChain, localVars) {
    // considering flatting out visitor
    this.visitor = visitor;
    // used for cycle detection only
    this.varChain = varChain;
    // used for cycle detection only
    this.funcChain = funcChain;
    // all localVars contained in the scope
    // May want to include a scope hierarchy instead (local, more local, more more local)
    this.localVars = localVars;
  }

  getVariable(varName) {
    // TODO: nested block scoping if necessary
    if (this.localVars[varName] !== undefined) {
      return this.localVars[varName]
    } else if (this.visitor.globalVars[varName] !== undefined) {
      return this.visitor.globalVars[varName]
    } else {
      console.error("local", this.localVars)
      throw `Variable ${varName} not defined in this scope`
      // TODO: handle free variables somehow
      // FreeVariables are always `Num`s
      // return new FreeVariable(varName)
    }
  }
}
