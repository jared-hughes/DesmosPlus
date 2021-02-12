# Project Architecture

The point of this document is to explain, in big-picture terms, the tooling and compilation process.

## Tooling

The project is built with JavaScript and npm. Usually, these would not be the best tools for similar projects, but Desmos is browser-based, and I am planning to allow direct editing of DesmosPlus code directly within the same browser window as a Desmos Calculator instance.

All code is in `src/`, which also contains development instructions in its README.

## Compiling

Compilers in general are complex so that programmers' lives can be simple. This holds true with the DesmosPlus compiler as well. I will describe the compiling process from raw file to higher abstractions to a Desmos program.

### DesmosPlus code

All DesmosPlus code is contained within a `.desp` file. This is just a plaintext file consisting of strings of characters. Not too exciting.

### Lexing and Parsing

We stand on the shoulders of giants for parsing, specifically the ANTLR library. The `Lexer.g4` file defines a lexer (tokenizer) grammar, and it gets compiled to the `Lexer.js` file, which can convert the `.desp` file to a string of tokens such as `type`, `Complex`, `=`. Similarly `Parser.g4` defines the parser grammar, and `Parser.js` converts this string of tokens to a parse tree.

The `ParseTreeVisitor.js` code converts the parse tree (which contains extraneous tokens such as `=` in a `let` statement) into an abstract syntax tree (AST), pretty much cleaning up the raw ANTLR classes (commonly referenced as `ctx`) into a simple JS object (the AST).

### Using the AST

In `ASTVisitor.js` (main object is commonly referenced as `visitor`), we take the final steps and produce the Desmos code itself through a series of steps:

1. Flatten the program by taking expressions out of folders
2. Determine the global types, global functions, and global variables defined through `type`, `def`, `let`, and `const`. This really just stores the values and puts them in an object for lookup by name.
3. Determine the types of every variable. This is where most of the heavy lifting occurs: type inference, overloaded operator disambiguation, and more. This unfortunately currently comes with many side effects, so every expression needs its type checked via `.getType()` to compute valuable properties such as the latex identifier for variables. Most errors are thrown in this step as types mismatch, functions are ambiguous, etc.
4. Generate the Desmos expressions object. This should be easier, with most of the hard work done in the previous step. This is really just passing along the previously-computed properties in the format that Desmos expects. The main difficulty here is computing the latex string of expressions, but that is primarily handled in `exprs.js`.
