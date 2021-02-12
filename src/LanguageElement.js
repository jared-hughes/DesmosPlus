export default class LanguageElement {
  constructor(ctx) {
    this.ctx = ctx;
    // ctx here is an ANTLR parser context
    this.line = ctx.start.line;
    this.col = ctx.start.column;
  }

  throw(error) {
    console.error(this)
    throw `${this.line}:${this.col}\n${error}`
  }
}
