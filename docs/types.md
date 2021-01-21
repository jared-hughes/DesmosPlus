# Data Types

DesmosPlus is strongly typed (everything must have a type, no ambiguity) by necessity. For example, Desmos allows `mean` to be applied to lists of numbers but not lists of points, but we want DesmosPlus to handle the `mean` of a list of points (represents e.g. center of mass). So we would see different compilation results:

```js
DesmosPlus:
let A = [2,3,5]
let avg = mean(A)
let B = [(0,1),(2,2),(3,5)]
let avgPoint = mean(B)

Desmos:
A = [2,3,5]
a_{vg} = mean(A)
B = [(0,1),(2,2),(3,5)]
a_{vgPoint} = (mean(B.x), mean(B.y))
```

The type system for DesmosPlus can be seen pretty much as a subset of Haskell's type system, where types usually do not need to be thought of at all. Apparently this is just a [Hindley-Milner type system](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system), which according to Wikipedia has the nice properties of "completeness and its ability to infer the most general type of a given program without programmer-supplied type annotations or other hints" — so this means you never have to say the type of a variable; they can be inferred in 100% of cases.

 - not sure if the HM type system handles polymorphic types of function arguments more than substitution (type parameters)

## Primitive Types

- `Num`: Desmos Builtin
- `Point`: Desmos Builtin (Equivalent to a custom data type `{x:Num, y:Num}`)
- `[a]`: read "list of `a`", e.g. `[Num]` is a list of numbers
  - Use `list[i]` to get the `i`-th element of the list.
  - Desmos can only handle, by default, lists of numbers and lists of points; anything more must be worked around in compilation
  - Desmos uses 1-indexing. While I am opposed to 1-indexing in general, there would be much
- `Bool`: compiled as `1` and `0` in Desmos
- `Color`: Desmos builtin (Equivalent to a custom data type `{r:Num, g:Num, b:Num}`)
- `Metadata`: The styling of main blocks (Equivalent to a custom data type `{lineWidth:Num, color:Color, ...}`)
- `Distribution`: Desmos builtin. `normaldist(μ, σ)`, etc.
- `Interval`:
  - `[1:5]` for interval from 1 to 5.
  - Equivalent to custom data type `{lo:Num, hi:Num}`
- `Slice`:
  - Alternative method for constructing lists of `Num`s. Also the only way to require a
  - `[1...9]` for integers from 1 to 5, inclusive. (also OK: `[1,...,9]`) (not OK: `[1,...9]`, `[1...,9]`)
  - `[1,3...9]` for odd integers from 1 to 5, inclusive  (also OK: `[1,3,...,9]`) (not OK: `[1,3,5,...,9]`)
  - Alternative syntax (intended for use in sliders, where `Interval`s are common too):
    - `[1:5:1]` for `[1...5]`
    - `[1:5:2]` for `[1,3...5]`
  - Equivalent to custom data type `{lo:Num, hi:Num, step:Num}`
  - e.g. you can pass an `Interval` to a parametric
- `String`: used as a `const` in notes and folder titles. Also used in labels

## `null`

In Desmos, "undefined" is a "number" always. To avoid the confusion between terms, `null` in DesmosPlus represents an undefined value of any type, so a list of numbers can include `null`, and a list of points can also include `null`.

Allowing varaibles to be `null` in all cases can mess with the type system, so that is why we have optional types, E.g `Num` can be `1`, `4.5`, but not `null`, while `Num?` can be `1`, `4.5`, or `null`. (In Haskell: `Maybe a`)

## Type Inference

In most (all?) cases, types can be inferred from context. There is only one number type, so that is easy as well.

```js
// The compiler can infer that a is a list of points
let a = [(1,2),(3,4)]
// Infer that b is a point
let b = mean(a)
// f has only one definition (it is not overloaded), so there is no need to
//   specify the type. Each type is defined as `Any` by default
def f(x,y) = x+2*y
// Infer that c is the sum of a point and a point, i.e. a point
let c = f(b, (2,2))
// f is flexible. Its arguments can
let d = f(2, 3)
```

## Type Annotations (TODO: refine)

Sometimes variable types are ambiguous, such as with empty lists. Type annotations are needed in this case to determine the type:

- See TODOs section. Are these the only places types are ambiguous?

```js
// Don't know the type of c. Could be a list of numbers or a list of points
// so we must declare the type (here, c is a list of numbers)
let c::[Num] = []
// There is another way to declare types, spread across two lines
d::[Num]
let d = []
```

Functions are a little more complicated (TODO -- functions as first-class types)

A function can be defined in different ways depending on the input types. This is called overloading a function. When a function is overloaded, its argument types need to be explicitly stated, and the function is termed "polymorphic".

For example, if you were defining multiplication of your own complex class

For example, the built-in function `atan` can take either one number and return a number, or it can take [two numbers](https://en.wikipedia.org/wiki/Atan2) and return a number.

```js
// mathematics omitted
def myAtan(x) = (...)
def myAtan(x, y) = (...)
```

## Custom Types

While DesmosPlus comes with many data types, you may often need to define your own. Custom data types are like structs/dataclasses in other languages

Define types with `type Name@{field1: Type, field2: Type, ...}`, and use types with `let a = Name@{field1: value, field2: value, ...}`.

This is done with the following syntax:

```js
// define the type
// note that types are conventionally expressed with a capital first letter
type Complex@{real: Num, imag: Num}

// most clear way to construct a custom type
// z1 == 2+3i
let z1 = Complex@{real: 2, imag: 3}

// you can also also fill in variables in order
// z2 == 1+2i
let z2 = Complex(1, 2)

// you can define your own constructors
// Note: in normal code, these should be placed close to the typedef
def Complex(x) = Complex@{real: x, imag: 0}

// you can override operators
// e.g. _add, _sub, _mul, _div, _pow, _get (for lists)
def _add(x:Complex, y:Complex) =
	Complex@{
		real: x.real+y.real,
		imag: x.imag+y+imag
	}

def _sub(x:Complex, y:Complex) =
	Complex@{
		real: x.real-y.real,
		imag: x.imag-y+imag
	}

// you can define your own functions
def magnitude(x:Complex) = sqrt(x.real^2 + y.real^2)

// you can overload built-in functions (sample with any other type)
distance(x:Complex, y:Complex) = magnitude(x-y)
```


## Metadata

`Metadata` is a special type, often serving as the optional last argument of keyword expressions. You can omit `Metadata` before `Metadata@` in usage. For many purposes, they can be thought of as a custom type defined as follows:

```js
type Metadata@{
	color: Color,
	lineWidth: Num,
	lineOpacity: Num,
	...
}

def _add(x:Metadata, y:Metadata) =
	Metadata @{
		color: {y.color!=null: y.color, otherwise: x.color},
		lineWidth: {y.color!=null: y.color, otherwise: x.color},
	}
```

Later metadatas are overwritten by earlier metadatas when added together. Observe:

```js
// graphs y=f(x) in line color BLUE and line Width 2
show y=f(x), {color:BLUE,lineWidth:2}

// graphs y=f(x) in line color BLUE and line Width 5
show y=f(x), {color:BLUE,lineWidth:2}+{lineWidth:5}

s1::Metadata = @{color:BLUE, lineWidth:2}
s2 = @{lineWidth:5}

// graphs y=f(x) in line color BLUE and line Width 5
show y=f(x), s1+s2
```
