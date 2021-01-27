import VariableType from './VariableType.js'

export default class ObjectType extends VariableType {
  constructor(type, fields, numWrapped=0) {
    super(type, numWrapped, false)
    this.fields = fields
    this.fieldTypes = {}
    fields.map(({fieldName, type}) => {
      this.fieldTypes[fieldName] = type
    })
  }

  wrapped() {
    return new ObjectType(this.type, this.fields, this.numWrapped+1)
  }

  unwrapped() {
    return new ObjectType(this.type, this.fields, this.numWrapped-1)
  }

  getMemberType(fieldName, ctx) {
    return this.fieldTypes[fieldName]
  }
}
