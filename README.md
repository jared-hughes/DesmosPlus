# DesmosPlus

Write less. Say more. DesmosPlus is a text-based language that compiles to Desmos graphs.

The main objective of the language is to make all code easier to use and remove repetitive actions.

Examples:
- If you want to recreate the physics formulae in [https://www.desmos.com/calculator/uutnykxaiu](https://www.desmos.com/calculator/uutnykxaiu), you don't need to copy-paste the gravitation equations many times; you can just declare a function that takes lists and returns the net force.
- If you want to make a 3D engine, you don't have to keep track of three lists of x, y, and z: you can just use a list of Point3D
- If you want to write a ton of `polygon` s like [https://www.desmos.com/calculator/br3mu4hqxc](https://www.desmos.com/calculator/br3mu4hqxc), you can map a `show polygon` over a list (with compile-time length)

The language is in active development, and development is proceeding here at [http://github.com/jared-hughes/DesmosPlus](http://github.com/jared-hughes/DesmosPlus).

## Design philosophy

- Everything possible in Desmos should be possible in DesmosPlus as well at equal or better convenience.
- DesmosPlus is a functional language like normal web Desmos; variables are generally immutable, and the order of statements does not affect execution.
- DesmosPlus is not a strict superset of the Desmos syntax. DesmosPlus does not make an attempt to handle LaTeX expressions, but I think there's TeX to text converters if you want to paste expressions from existing graphs.
- Compiling DesmosPlus code may not always produce idiomatic Desmos code. The compiled output will, in most cases, be readable Desmos code, but this is not guaranteed.

## Reference

To see examples of DesmosPlus syntax, see [examples](docs/examples.md)

To see a full guide of the language (essentially a language spec, evolving until initial release), read:

  - [Syntax](docs/syntax.md)
  - [Types](docs/types.md)
  - [Block Types](docs/block_types.md)
  - [Standard Library](docs/standard_library.md)

## Progress Timeline

Current progress to 0.1 release (feature parity with Desmos):

- Language design: 70% (100% = includes all features of desktop Desmos)
- Lexing and Parsing: 0% (100% = can parse all of that)
- Execution: 0% (100% = can reproduce any glitchless Desmos graph in DesmosPlus)

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
- Not (yet) created

## TODOs / Random ideas

- Allow for DesmosPlus packages (e.g. 3D libraries, root-finding libraries) (TODO)
- Enum type? To represent e.g `lineStyle`∊`["DASHED", "DOTTED", "SOLID"]`
- Maybe make `graph` a synonym for `show`? May complicate things though
- Graphing polar functions: should these just be parametrics? (with syntactic sugar ofc lol)
- `show [Point]` should have metadata option to enable bezier curve fitting;)
- Should `Num` be changed to `Float`? Maybe `Num` should be a synonym for `Float`?
- 2D arrays?? (TODO)
- Syntax for summations/products/integrals (TODO)
- Option to embolden notes
- custom type default argument (sugar)
- Wishlist: want to add slider of points to avoid needing several variable
- Provide a way to set the name of the graph or other graph metadata like axes
- `/* ... */` multiline comments
- multiline strings
- rename `Metadata` to `Style`?
- clickableObjects as Metadata?
- should block types be types usable for variables as well? I feel like we need `Num -> Polygon` at least.
- Maybe chained polymorphic functions could cause issues https://stackoverflow.com/a/45029756/7481517
