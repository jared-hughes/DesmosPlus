export default class VariableType {
  constructor(type, numWrapped=0, isParametricType=false) {
    if (numWrapped < 0) {
      throw `Type cannot be wrapped ${numWrapped} times`
    }
    this.type = type;
    this.numWrapped = numWrapped;
    if (isParametricType) {
      this.isParametricType = true
    }
  }

  wrapped() {
    return new VariableType(this.type, this.numWrapped+1, this.isParametricType)
  }

  unwrapped() {
    return new VariableType(this.type, this.numWrapped-1, this.isParametricType)
  }

  toString() {
    return '['.repeat(this.numWrapped) + this.type + ']'.repeat(this.numWrapped)
  }

  equalsType(other) {
    return this.numWrapped == other.numWrapped && this.type == other.type
  }

  matchesType(other, scope) {
    // returns true iff `other` is the same or more general type as `this`
    return (
      this.numWrapped == other.numWrapped
      && (
        this.type == other.type
        || other === scope.visitor.types.Any
        || other.isParametricType
      )
    )
  }
}
