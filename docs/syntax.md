# Syntax

Until the syntax is implemented, using JavaScript syntax highlighting works decently well in many contexts. If it doesn't look good, you can try C highlighting or no highlighting at all.

## Identifiers

There is no need to require variable identifiers with subscripts like `P_{list}` as in Desmos. We can use normal `[a-zA-Z_][a-zA-Z0-9_]*` identifiers common in programming languages

```js
DesmosPlus | Desmos
    result | r_{esult}
         a | a
      age3 | a_{ge3}
      posx | p_{osx}
     p_osx | p_{osx1}
     pos_x | p_{osx2}
```

By convention, identifiers starting with a lowercase letter (e.g. `age`) are variables or functions; identifiers starting with a capital letter (e.g. `Point`) are types; identifiers starting with a single underscore (e.g. `_add`) are internal functions.

## Comments

Use `//` for DesmosPlus comments. These are completely ignored by DesmosPlus until the end of the line.

```js
// Initial state
let x0 = 1
let y0 = 2
```

## Math expressions

Like in Desmos, much of the computation revolves around math expressions: bits of code that evaluate to a value. This includes identifiers and constants grouped together with operators, function applications, and piecewises.

List of operators:

- `+-*/^`
- `%`: `mod`
- `!=`, `==`: not equal, equals
- `<`, `<=`, `>=`, `>`: less than, less than or equal to, greater than or equal to, greater than
  - `a < b < c <= d` works as expected (equivalent to `a<b && b<c && c<=d`), same as in Python
- `!`, `&&`, `||`: boolean not, and, or

```js
DesmosPlus:
def f(x) = (x^2+1)/x
let expr1 = -(1+f(5))+3*f(6)
let expr2 = f(expr1)/expr1
let expr3 = expr1 > 0
let expr4 = {expr3: f(1), otherwise: 0}

Desmos:
f(x) = \frac{x^{2}+1}{x}
e_{xpr1} = -(1+f(5))+3\cdot f(6)
e_{xpr2} = \frac{f(e_{xpr1})}{e_{xpr1}}
e_{xpr3} = {e_{xpr1} > 0: 1, 0}
e_{xpr4} = {e_{xpr3}=1: f(1), 1>0: 0}
```

### Piecewises

These correspond directly to piecewise expressions in Desmos. However, the introduction of the boolean data type opens up a few possibilities.

```js
DesmosPlus:
let v = 12
let a = {
  v < 0: -1/v,
  v == 0: 0,
	// To ease parsing, a default clause needs to be written with an
	// "otherwise" or "true" branch. If omitted, the default value is "undefined"
	// Inspired by Haskell, otherwise is defined to be otherwise==true==(1>0)
  otherwise: 1/v,
}
def isOdd(x) = mod(x, 2) == 1
let isMultipleOfThree = mod(v, 3) == 0
let b = {
	isOdd(v): 1,
	// execution proceeds from top down with only one result, so
  // b==6 only if v is a multiple of 2 and 3, i.e. a multiple of 6
	isMultipleOfThree: 6,
	otherwise: 0
}
// Yes, the above is just syntactic sugar
let c = Piecewise([i_{sOdd}(v), isMultipleOfThree, true], [1, 6, 0])

Desmos:
v = 12
a = {v < 0: -\frac{1}{v}, v=0: 0, 1>0: 1/v}
i_{sOdd}(x) = {mod(x,2)=1: 1, 0}
i_{sMultipleOfThree} = {mod(v, 3)=0: 1, 0}
b = {i_{sOdd}(v)=1: 1, i_{sMultipleOfThree}, 1>0: 0}
c = {i_{sOdd}(v)=1: 1, i_{sMultipleOfThree}, 1>0: 0}
```

### Numbers

Just write a float number to use it in an expression, e.g. `4.5` or `3`.

### Lists

Use `[expr, expr, expr]` to define a list with 3 elements

Alternative method for constructing lists of `Num`s: (range syntax)
- `[1...9]` for integers from 1 to 5, inclusive. (also OK: `[1,...,9]`) (not OK: `[1,...9]`, `[1...,9]`)
  - special cases to this syntax `[a...b]`. If `b<a`, then this is equivalent to `[a...b:-1]`,
    so `[5...2]` gives `[5,4,3,2]`.
- `[1...9:2]` for odd integers from `1` to `9`, inclusive
- `[1,3...9]` for odd integers from `1` to `9`, inclusive  (also OK: `[1,3,...,9]`) (not OK: `[1,3,5,...,9]`)

### Variables

- Any variable can be used in an expression, e.g. `x` or `count`
- `true` and `false` are predefined `Boolean`s
- `e` `pi` and `tau` are predefined numbers

### Function Application

`f(a,b,c)`. Not much more to say

### Free Variables

The number of "Free variables" of an expression is the number of identifiers not defined elsewhere. This is relevant when graphing expressions via `show`.

This means that lambda expressions (like from Haskell/Python/Java) are unnecessary. If `a` is not defined anywhere, then `2*a+1` can be seem as equivalent to `lambda a: 2*a+1` in certain contexts:

  - `show a==b` sees that the expression `a==b` has two free variables and graphs it as if it is `y=x` in Desmos.
