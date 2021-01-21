# Block types

Desmos execution is completely simultaneous, with the exception of simulations/clickable objects. By necessity, DesmosPlus follows a similar pattern as well.

## `let` (let declarations)

Define variables with the `let` keyword. Note that each variable can only be defined once, in contrast to imperative languages like JavaScript. Hence, `let a=3` means that `a` is and always will be defined as `3`. Note the exception of `clickableObjects` discussed in the Mutability section below.

```js
DesmosPlus:
let result = 5+6
let a = 3

Desmos:
let r_{esult} = 5+6
let a = 3
```

### Mutability

The only way to mutate (change) the value of a variable as a program runs is through `clickableObjects`:  simulations or buttons. and only to single values. Hence `a <- 5` sets `a` to `5`, while `a <- b` sets `a` to the *current value* of `b`.

Suppose we defined `let b=1` and `let c=b`. Then `b <- 5` sets `b` to `5`; `c` is defined to be `b`, so `c` would now evaluate to `5` as well.

## `def` (Function Definitions)

Functions are defined with the `def` keyword.

- All functions are pure - simply take a few inputs and return a single output

```js
DesmosPlus:
def f(x) = x^2
def g(x) = f(x+1)

Desmos:
f(x) = x^{2}
g(x) = f(x+1)
```

## `note`

These are for comments that end up visible in the Desmos output. May be useful for describing the code for people who cannot see the DesmosPlus code; maybe they are just looking at the compiled graph.

```js
note "Weight `b` with 2 because middle values affect the result more"
let result = a + 2*b + c
```

##  `const`

Suppose you want to draw a bunch of `polygon`s. These must each be on their own line, so the number of polygons must be known at compile-time. The keyword `const` replaces `let` when you want to tell the compiler that the following variable is actually a constant

```js
// valid:
const numPolygons = 10

// invalid (a is not const):
let a = 5
const numPolygons2 = 2*a

// valid:
const b = 5
const numPolygons3 = 2*b

// valid:
const numVertices = 36
def f(x) = floor(x/3)
const numPolygons4 = f(numVertices)
```

## `slider`: sliders

```js
// slider for a that can range from 1 to 11
slider a <- [1:11]
// slider for b that can range from
slider b <- [1:11:2]
```

## `show`: for when you want to show something

Syntax: `show expression` or `show expression, metadata`

- Behavior depends on expression's value, most of which is handled by Desmos, not DesmosPlus
    - Expressions with `x` and/or `y` such as `y==x+1` can be seen as normal expressions with 1-2 free variables
- unsure about polars — maybe these can be implemented as free variables as well

```js
// let's get these out of the way
def f(x) = x^2
def g(x,y) = x^2*y + y^2*x

// Num: no behavior
show 5

// Num with 1 free variable: plot y=[expr]
show x+2
show f(x)
show g(x,3)

// Bool with 1 or 2 free variables: plot solution nsapce
show y == x+1
show 0 < x
show x == f(y)

// Point: plot a point
show (2,f(2))

// [Point]: plot the points, possibly with connecting lines segments or fill
show [(0,0),(1,2),(2,5)]
show [(0,0),(-1,2),(-2,5)], @{lines: true}
// fill: true is implemented with a `polygon` statement
// because I thought a `polygon` keyword would be too clunky
show [(0,0),(1,-2),(2,-5)], @{fill: true}

// Distribution: show the distribution
show normaldist(5, 2)
```

`show` declarations can be styled with `Metadata`:

```js
show f(x), @{
	color: BLUE,
  lineOpacity: 0.8,
	lineWidth: 2,
	lineStyle: DASHED
}

let bigPointStyle = @{
	pointSize: 100,
	pointOpacity: 1
}

show (2,5), bigPointStyle
```

## `parametric`: For when you want to show something that's actually a parametric

Syntax: `parametric expr1, expr2` or `parametric expr1, expr2, metadata`

- `expr1` should be of type `Point` or `[Point]` and should have free variable `t` (I haven't come up with a good syntax for allowing change from `t` to other parametrization variables, and I see no need to)
- `expr2` should be of type `ContinuousRange`

```js
parametric (t, 3*t), [0:5]

// draw a circle of radius 2
parametric 2*(cos(t), sin(t)), [0:2*pi], @{color: RED}
```

## `simulation`

Syntax: `simulation expr1, [SemicolonSepList<identifier "<-" expr>]`

- expr1 is fps and should be of type `Num`

```js
simulation 30, [
  b <- 6;
  x1 <- x1 + 2;
]
```

## `table`

Syntax: `table [SemicolonSepList<(expr | expr "," metadata)>]`

- Note that Desmos requires the first column to not be defined anywhere else in the document

```js
table [
  [1...8];
  list1, @{pointSize:3, color:RED};
  [2,2,3,3,4,4,5,5];
	list2
]
```

## `folder`

Syntax: `folder name metadata? [ <back to top level exprs *except* folders> ]`

- Valid metadata
    - `hidden`: are graphs inside this folder visible?
    - `collapsed`: duh
    - `secret`: Is this secret from students?

`name` should be a compile-time constant of type `String``

```js
folder "Constants" @{hidden: true} [
  let a = 1
  let b = 2
  let phi = (1+sqrt(5))/2
]

const exprName = "Expressions"

folder exprName [
  let d = a+b
  let e = b+c
	show y==d*x^2
]
```

## `image`

- not going to think about images for a while
