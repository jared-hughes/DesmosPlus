import fs from 'fs';
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import DesmosPlusLexer from './DesmosPlusLexer.js';
import DesmosPlusParser from './DesmosPlusParser.js';
import ParseTreeVisitor from './ParseTreeVisitor.js';
import ASTVisitor from './ASTVisitor.js'

function compileToDesmos(desmosPlusString) {
  // currently just compiles to an intermediate state
  const chars = new InputStream(desmosPlusString, true);
  const lexer = new DesmosPlusLexer(chars);
  const tokens  = new CommonTokenStream(lexer);
  const parser = new DesmosPlusParser(tokens);

  // specify "program" is the root node
  const tree = parser.program()
  const ast = new ParseTreeVisitor().visitProgram(tree)
  const desmos = new ASTVisitor().visitProgram(ast)
  return JSON.stringify(desmos)
}

const filename = process.argv[2]
console.log(`> compile to Desmos: ${filename}\n`)
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    return console.error(err)
  }
  compileToDesmos(data)
})
