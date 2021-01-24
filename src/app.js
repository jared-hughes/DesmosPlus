import fs from 'fs';
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import DesmosPlusLexer from './DesmosPlusLexer.js';
import DesmosPlusParser from './DesmosPlusParser.js';
import Visitor from './Visitor.js';

function compileToDesmos(desmosPlusString) {
  // currently just compiles to an intermediate state
  let chars = new InputStream(desmosPlusString, true);
  let lexer = new DesmosPlusLexer(chars);
  let tokens  = new CommonTokenStream(lexer);
  let parser = new DesmosPlusParser(tokens);

  // specify "program" is the root node
  let tree = parser.program();
  let visitor = new Visitor();
  return JSON.stringify(visitor.visitProgram(tree))
}

const filename = process.argv[2]
console.log(`> compile to Desmos: ${filename}\n`)
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }
  console.log(compileToDesmos(data))
})
