# DesmosPlus

## ⚠ This repository is archived. See instead [DesModder's text mode](https://github.com/DesModder/DesModder)

Write less. Say more. DesmosPlus is a text-based language that compiles to Desmos graphs.

The main objective of the language is to make all code easier to use and remove repetitive actions.

Examples:
- If you want to recreate the physics formulae in [https://www.desmos.com/calculator/uutnykxaiu](https://www.desmos.com/calculator/uutnykxaiu), you don't need to copy-paste the gravitation equations many times; you can just declare a function that takes lists and returns the net force.
- If you want to make a 3D engine, you don't have to keep track of three lists of x, y, and z: you can just use a list of Point3D
- If you want to write a ton of `polygon` s like [https://www.desmos.com/calculator/br3mu4hqxc](https://www.desmos.com/calculator/br3mu4hqxc), you can map a `show polygon` over a list (with compile-time length)

The language is in active development, and development is proceeding here at [http://github.com/jared-hughes/DesmosPlus](http://github.com/jared-hughes/DesmosPlus).

## Design philosophy

- Everything possible in Desmos should be possible in DesmosPlus as well at similar or better convenience.
- It should be easy for a human to translate Desmos graphs to DesmosPlus; hence, DesmosPlus syntax should be as similar as possible to Desmos while still maintaining convenience
- DesmosPlus is not a strict superset of the Desmos syntax. DesmosPlus does not make an attempt to handle LaTeX expressions, but I think there's TeX to text converters if you want to paste expressions from existing graphs.
- Compiling DesmosPlus code may not always produce idiomatic Desmos code. The compiled output will, in most cases, be readable Desmos code, but this is not guaranteed.
- DesmosPlus is a functional language like normal web Desmos; variables are generally immutable, and the order of statements does not affect execution.

## Reference

To see official, correct examples of DesmosPlus syntax, see the [examples](src/examples).

See [ARCHITECTURE.md](ARCHITECTURE.md) for an overview of the code.

To see a somewhat-complete guide of the language (also a language spec to some degree, evolving until initial release), read:

  - [Syntax](docs/syntax.md)
  - [Types](docs/types.md)
  - [Statements](docs/statements.md)
  - [Standard Library](docs/standard_library.md)

## Progress Timeline

Current progress to 0.1 release (custom types and feature parity with Desmos):

- Language design: 80% (100% = includes all features of desktop Desmos)
- Lexing and Parsing: 80% (100% = can parse all of that)
- Visitor and Execution: 25% (100% = can reproduce any glitchless Desmos graph in DesmosPlus)

## Comparison With Desmos

### Advantages

- Split functions and expressions across multiple lines
- Use long variable names without subscripts
- Custom data types
- First-class booleans
- Recursive functions (limited)
- Lists can be passed into functions
- ... more!

### Disadvantages

- Need to compile
- Not (fully) implemented (or designed)

## Contributing

Contributions are welcome. Feel free to send pull requests or open issues!

Some quick notes for development:

For syntax development:

- I'm using `language-antlr4` Atom package for syntax highlighting.
- https://github.com/antlr/Antlr4Formatter to format `.g4` code
-

## TODOs / Random ideas

### Short-term

- Scope should be stored in construction of an Expr instead of passed down through the ENTIRE chain
- Use proper type inference and allow for Any type
- Allow for `f(a)=2*a` and `a=f(1)` to be compatible
- Reduce confusion between `(FunctionExpression).args` and `(FunctionExpression).resolvedDefinition.args` be renaming the latter to `.argVariables`
- Store local variables in a stack instead of `localVars`/`globalVars`
- typeclasses with increasing specificity to automatically define `_add(Any, Any)` (add similar) by adding corresponding terms, but can be overridden by defining `_add(MyType, MyType)`
- Enforce capital/lowercase conventions? Otherwise need some check to prevent collisions like `def Fun(x)=x^2` and `type Fun@{x:1}`
- Some `throw`s don't have line nums
- bugs, bugs, bugs
- Maybe make `graph` a synonym for `show`? May complicate things though
- Graphing polar functions: should these just be parametrics?
- Should `Num` be changed to `Float`? Maybe `Num` should be a synonym for `Float`?
- `/* ... */` multiline comments desired?
  - would both be viable? ;)
- regression syntax (along with a way to get regression parameters and other generated values such as the R^2 value?).
  - Prefer to use `~` but could also use `==`
  - The hard decision is how to capture the output. Maybe `[$a, $b, $r2] ← Regress(y1==a*x1+b)` or something
- Add absolute value with pipes `|expr|`
- Add factorial with bang `!`
- How to determine default colors?
- Add tuple type? Do we even need to have `Point` as a primitive?
- `_get([Any], [Num])`
- Reversal inferencing like `__rmul__` in python. So you only need to define `_mul(a:Num, z:Complex)` to allow executing both `5*Complex(1,2)` and `Complex(1,2)*5`


### Medium-term

- unused variables warning
- clearer error messages
  - `"Piecewise conditions must have type Bool"` → specific condition that lacks type `Bool`
  - point to error in desp code. Should be simple with `ctx.line` and `ctx.col`
- Enum type? To represent e.g `lineStyle`∊`["DASHED", "DOTTED", "SOLID"]`
- Syntax for summations/products/integrals
- default fields in custom types (e.g. default `step: 1` for `Interval`s)
- Provide a way to set the name of the graph or other graph metadata like axes, random seed, degrees/radians, etc.
  - choose a slider/simulation to start playing on initial graph load
- multiline strings (helpful for folder descriptions)
- map `block`s over const arrays, at least to get a list of polygons
- allow statement types/other special tokens as field names? Javascript allows `a = {function: 1}; a.function` and it shouldn't be too hard to work into the parser?
- string interpolation syntax ... or maybe just `show` function and `concat`
- string escape sequences. Main ones being `\n` and `\t` for `note` formatting but also `\"`
- Vectorization syntax, e.g. `[1,2]+[3,4]==_add([1,2], [3,4])` while `[1,2]+/[3,4] == [_add(1,2), _add(3,4)]` or maybe `[1,2]+.[3,4] == [_add(1,2), _add(3,4)]`
  - This could be handled with `map` + `zip`
- Operations on `Interval`s
- Need to make `x`, `y`, `t`, etc. reserved in some way?
  - Do not remove the ability to have `x` as a custom type field
  - Do not remove the ability to have `x` as a function argument
  - Do remove the ability to `let x=...` and `const x=...`, etc.
- Can't do arithmetic on `VariableReference`s and other types. Can these be taken up to a `FullExpr` rule?
- Unicode synonyms `≤≥≠×÷∨∧≡←` maybe.
- Some general format to allowing casting `Num` to `Complex`?

### Long-term

- Allow for DesmosPlus packages (e.g. 3D/complex libraries, root-finding libraries)
- `show [Point]` should have metadata option to enable bezier curve fitting;)
- 2D arrays??
- Option to embolden notes
- Make a slider of points to avoid needing several variables
- images lol
- Allow nested folders and prepend something to folder name on Desmos export
- errors for incorrect identifiers include fuzzy matching "Maybe you meant ____"

### Random Notes

- If a list is defined in a table column, it need not be defined in its own `let` block
