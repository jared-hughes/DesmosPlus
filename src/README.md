# Development Instructions

## To change/test the grammar:

Antlr installation at https://github.com/antlr/antlr4/blob/master/doc/getting-started.md

JavaScript compilation:
- `antlr4 -no-visitor -no-listener -Dlanguage=JavaScript DesmosPlusLexer.g4 DesmosPlusParser.g4 && rm DesmosPlus*.{interp,tokens}`

Java compilation + grun (testing syntax):
- Compile: `antlr4 DesmosPlusLexer.g4 DesmosPlusParser.g4 && javac -target 1.7 -source 1.7 DesmosPlus*.java`
- Test single: `grun DesmosPlus program examples/letStatement.desp -gui`
- Test all: `grun DesmosPlus program examples/*.desp`
- Clean: `rm DesmosPlus*.{interp,java,class,tokens}`

Java quick test + grun + clean single
- `( cd src && antlr4 DesmosPlusLexer.g4 DesmosPlusParser.g4 && javac -target 1.7 -source 1.7 DesmosPlus*.java && grun DesmosPlus program examples/letStatement.desp -gui && rm DesmosPlus*.{interp,java,class,tokens} )`

Initial format of `DesmosPlusParser.g4`: `( cd ~/Antlr4Formatter; ./formatFile.sh ~/DesmosPlus/src/DesmosPlusParser.g4; )` (git cloned https://github.com/antlr/Antlr4Formatter)
