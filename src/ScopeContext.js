export default class ScopeContext {
  constructor(visitor, varChain, funcChain, localVars) {
    this.visitor = visitor;
    this.varChain = varChain;
    this.funcChain = funcChain;
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
