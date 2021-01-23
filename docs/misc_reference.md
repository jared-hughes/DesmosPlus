# Desmos Reference / Inspirations

- This page is just for my scribbles

## On `ans_{n}`

`ans_{n}` is a trick I discovered recently wherein you can use e.g `ans_{2}` to refer to the result of the 2nd expression in Desmos. This wreaks havoc with the principles of "order doesn't matter" and is considered a glitch, so it should not be used in DesmosPlus.

## On automatic vectorization

By "automatic vectorization," I mean operations on lists such as `A+B` being converted to `[A[1]+ B[1], ..., A[n]+ B[n]`. This should always be performed such that the result of an operator is the most sensible of those types.

The complaints in the Desmos community have been about calling functions of lists. `f(a, b) = a+b` behaves as expected, but some other situations do not (I can't come up with an example off the top of my head). In DesmosPlus, lists are a first-class data type, so there is no global list index, and lists can be properly passed to functions

Also, there should be a way to map over a list. This could be done just by making functions a type as well, so you can pass functions to functions. Most obvious is the `map` function, but I suppose `sum`/`prod`/`int` functions (instead of special syntax) can be defined in terms of `map` if functions are first class. Observe:

```js
sum(func, lo, hi) == total(map(func, [lo...hi]))
// want to define `product` builtin. Defined in desmos as prod(list) = \Product_{i=1}^{length(list)}{list[i]}
prod(func, lo, hi) == product(map(func, [lo...hi]))
integral :: (func:Num, lo:Num, hi:Num) -> Num
```

## Reserved Identifiers?

```js
x
y
t
r
theta

// built-ins:
e
pi
tau
total
median
quantile
clamp
... (other builtin/Standard Library functions)
```

## Desmos reference

Desmos data types (reference `core/math/types`): `Any, Number, Bool, Point, Distribution, ListOfAny, ListOfNumber, ListOfBool, ListOfPoint, ListOfDistribution, EmptyList, ErrorType, SeedType, RGBColor, ListOfColor`.

In Desmos:

- All elements of a list must have the same type
- undefined counts as a Number
- `ListOfBool` cannot be save to a variable; it is just used for intermediate calculations such as `A>0` in the piecewise `{A>0: 3,0}`

## Some Stuff for reference:

- Operator Names

    ```
    define('main/mathquill-operators', ["require", "exports", "config"], function(require, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getAutoOperators = t.getAutoCommands = void 0;
        var n = ["exp|exponent ln|natural-log log", "total length mean median quantile quartile nCr nPr stats", "stdev|standard-deviation stddev|standard-deviation", "stdDev|standard-deviation stdevp|standard-deviation-population", "stddevp|standard-deviation-population stdDevP|standard-deviation-population mad var|variance", "varp|variance-population variance cov|co-variance corr|correlation spearman", "lcm mcm gcd mcd gcf mod ceil|ceiling floor round abs|absolute-value min max sign|signum signum sgn", "sin|sine cos|cosine tan|tangent csc|co-secant sec|secant cot|co-tangent", "sinh|hyperbolic-sine cosh|hyperbolic-cosine tanh|hyperbolic-tangent csch|hyperbolic-co-secant", "sech|hyperbolic-secant coth|hyperbolic-co-tangent", "arcsin|arc-sine arccos|arc-cosine arctan|arc-tangent arccsc|arc-co-secant arcsec|arc-secant", "arccot|arc-co-tangent", "arcsinh|hyperbolic-arc-sine arccosh|hyperbolic-arc-cosine arctanh|hyperbolic-arc-co-tangent", "arccsch|hyperbolic-arc-co-secant arcsech|hyperbolic-arc-secant", "arccoth|hyperbolic-arc-co-tangent", "arsinh|hyperbolic-ar-sine arcosh|hyperbolic-ar-cosine artanh|hyperbolic-ar-co-tangent", "arcsch|hyperbolic-ar-co-secant arsech|hyperbolic-ar-secant", "arcoth|hyperbolic-ar-co-tangent", "polygon", "distance midpoint", "sort shuffle join", "erf|error-function", "TTest|t-test ttest|t-test TScore|t-score tscore|t-score", "iTTest|independent-t-test ittest|independent-t-test IndependentTTest", "TScore|t-score Tscore|t-score tscore|t-score", "normaldist|normal-distribution tdist|t-distribution poissondist|poisson-distribution", "binomialdist|binomial-distribution", "uniformdist|uniform-distribution", "pdf cdf random inverseCdf inversecdf", "histogram dotplot boxplot", "pdf cdf", "rgb hsv"].join(" ")
          , o = ["det|determinant", "inv|inverse", "transpose", "rref|reduced-row-echelon-form", "trace"].join(" ");
        n += " " + o,
        e.get("3d") && (n += " cube sphere cone dodecahedron octahedron tetrahedron");
        var r = "alpha beta sqrt theta phi pi tau nthroot cbrt sum prod int ans percent infinity infty";
        t.getAutoCommands = function(t) {
            return t && t.disallowFrac ? r : r + " frac"
        }
        ,
        t.getAutoOperators = function(t) {
            return n
        }
    });
    ```

- core/math/parsenode/*

    ```
    define('core/math/parsenode/base', ['require', 'pjs', 'core/math/functions', 'core/math/parser/input-span', 'core/math/policy'], function(require) {
    define('core/math/parsenode/error', ['require', 'pjs', './base'], function(require) {
    define('core/math/parsenode/expression', ['require', 'pjs', './base', 'core/math/errormsg', 'core/math/types'], function(require) {
    define('core/math/parsenode/scalarexpression', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/expressionTypes', ['require', 'pjs', './scalarexpression'], function(require) {
    define('core/math/parsenode/constant', ['require', 'pjs', './scalarexpression', 'core/math/maybe-rational', 'core/math/types'], function(require) {
    define('core/math/parsenode/mixednumber', ['require', 'pjs', './constant'], function(require) {
    define('core/math/parsenode/identifier', ['require', 'pjs', './expression', 'core/lib/label', 'core/math/parser/input-span'], function(require) {
    define('core/math/parsenode/ans', ['require', 'pjs', './identifier'], function(require) {
    define('core/math/parsenode/freevariable', ['require', 'pjs', './scalarexpression'], function(require) {
    define('core/math/parsenode/dummyindex', ['require', 'pjs', './freevariable'], function(require) {
    define('core/math/parsenode/list', ['require', 'pjs', './expression', 'core/math/types'], function(require) {
    define('core/math/parsenode/range', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/broadcast', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/listaccess', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/dotaccess', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/dotaccessexponent', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/orderedpair', ['require', 'pjs', './scalarexpression'], function(require) {
    define('core/math/parsenode/movablepoint', ['require', 'pjs', './orderedpair'], function(require) {
    define('core/math/parsenode/orderedpairaccess', ['require', 'pjs', './scalarexpression'], function(require) {
    define('core/math/parsenode/polygon', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/basecomparator', ['require', 'pjs', './scalarexpression', './expressionTypes', 'core/math/comparators', 'core/math/functions'], function(require) {
    define('core/math/parsenode/comparator', ['require', 'core/math/parsenode/basecomparator'], function(require) {
    define('core/math/parsenode/doubleinequality', ['require', 'pjs', './base', 'core/math/comparators', './comparator'], function(require) {
    define('core/math/parsenode/repeatedoperator', ['require', 'pjs', './scalarexpression', './dummyindex'], function(require) {
    define('core/math/parsenode/sum', ['require', 'pjs', './repeatedoperator'], function(require) {
    define('core/math/parsenode/product', ['require', 'pjs', './repeatedoperator'], function(require) {
    define('core/math/parsenode/integral', ['require', 'pjs', './scalarexpression', './dummyindex', 'core/math/builtin'], function(require) {
    define('core/math/parsenode/functioncall', ['require', 'pjs', './expression', './identifier'], function(require) {
    define('core/math/parsenode/seededfunctioncall', ['require', 'pjs', './functioncall'], function(require) {
    define('core/math/parsenode/functionexponent', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/functionfactorial', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/prime', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/piecewise', ['require', 'pjs', './scalarexpression', './constant', 'core/math/maybe-rational'], function(require) {
    define('core/math/parsenode/derivative', ['require', 'pjs', './scalarexpression', './identifier'], function(require) {
    define('core/math/parsenode/nativefunction', ['require', 'pjs', './scalarexpression', 'core/math/functions'], function(require) {
    define('core/math/parsenode/typedfunction', ['require', 'pjs', './nativefunction'], function(require) {
    define('core/math/parsenode/trigfunction', ['require', 'pjs', './nativefunction', './expressionTypes', 'core/math/errormsg'], function(require) {
    define('core/math/parsenode/inversetrigfunction', ['require', 'pjs', './nativefunction', './expressionTypes'], function(require) {
    define('core/math/parsenode/distribution', ['require', 'pjs', './scalarexpression', 'core/math/errormsg'], function(require) {
    define('core/math/parsenode/reducerfunction', ['require', 'pjs', './expression', 'core/math/functions', 'core/math/errormsg', './distribution', 'core/math/types'], function(require) {
    define('core/math/parsenode/doublereducerfunction', ['require', 'pjs', './expression', 'core/math/functions', 'core/math/errormsg'], function(require) {
    define('core/math/parsenode/parametrizedreducerfunction', ['require', 'pjs', './expression', 'core/math/functions', 'core/math/errormsg', './distribution', 'core/math/types'], function(require) {
    define('core/math/parsenode/toplevelfunction', ['require', 'pjs', './nativefunction', 'core/math/errormsg'], function(require) {
    define('core/math/parsenode/builtinfunction', ['require', 'core/math/parsenode/nativefunction', 'core/math/parsenode/typedfunction', 'core/math/parsenode/trigfunction', 'core/math/parsenode/inversetrigfunction', 'core/math/parsenode/reducerfunction', 'core/math/parsenode/doublereducerfunction', 'core/math/parsenode/parametrizedreducerfunction', 'core/math/parsenode/distribution', 'core/math/parsenode/toplevelfunction', 'core/math/types', 'core/math/maybe-rational', 'core/math/parsenode/constant'], function(require) {
    define('core/math/parsenode/histogram', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/object3d', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/dotplot', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/boxplot', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/ttest', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/independent-ttest', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/stats', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/equation', ['require', './base', 'pjs', './expressionTypes', 'core/math/parsenode/comparator'], function(require) {
    define('core/math/parsenode/assignment', ['require', './base', './equation', './identifier', 'pjs'], function(require) {
    define('core/math/parsenode/functiondefinition', ['require', 'pjs', './base', 'core/math/errormsg', './equation', './identifier', './functioncall'], function(require) {
    define('core/math/parsenode/optimizedregression', ['require', 'pjs', './base'], function(require) {
    define('core/math/parsenode/regression', ['require', 'pjs', './base', 'core/math/distance', 'core/math/builtin', 'core/lib/label', 'core/math/errormsg', './error', './optimizedregression', './list', './functioncall', './identifier', './constant', './freevariable', './expressionTypes', 'core/math/types', 'core/math/least-squares', 'core/math/reparameterization'], function(require) {
    define('core/math/parsenode/image', ['require', 'pjs', './base'], function(require) {
    define('core/math/parsenode/simulation', ['require', 'pjs', './base'], function(require) {
    define('core/math/parsenode/slider', ['require', 'pjs', './assignment', './identifier'], function(require) {
    define('core/math/parsenode/table', ['require', 'pjs', './base'], function(require) {
    define('core/math/parsenode/tablecolumn', ['require', 'pjs', './base', './list', './constant', './identifier'], function(require) {
    define('core/math/parsenode/solvedequation', ['require', 'pjs', './base'], function(require) {
    define('core/math/parsenode/seed', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/extendseed', ['require', 'pjs', './expression'], function(require) {
    define('core/math/parsenode/rgbcolor', ['require', 'pjs', './scalarexpression'], function(require) {
    ```

- rest of core/math/*

    ```
    define('core/math/distance', ["require", "exports"], function(require, s) {
    define('core/math/mathshim', ["require", "exports"], function(require, r) {
    define('core/math/poi', ["require", "exports", "core/math/distance"], function(require, i, m) {
    define('core/math/quadrature', ['require', 'core/math/mathshim', 'core/math/poi'], function(require) {
    define('core/math/tofraction', ["require", "exports"], function(require, e) {
    define('core/math/builtin', ["require", "exports", "core/lib/md5", "core/vendor/d3-color", "core/math/quadrature", "core/math/mathshim", "core/math/mathshim", "core/math/distance", "core/math/tofraction", "core/math/poi"], function(require, l, t, o, r, M, n, e, a, f) {
    define('core/math/rational-arithmetic-sequence', ['require', 'core/math/distance', 'core/math/builtin'], function(require) {
    define('core/math/functions', ["require", "exports", "core/math/builtin"], function(require, e, r) {
    define('core/math/parser/input-span', ["require", "exports"], function(require, n) {
    define('core/math/policy', ["require", "exports"], function(require, e) {
    define('core/math/types', ["require", "exports", "core/lib/worker-i18n"], function(require, t, r) {
    define('core/math/maybe-rational', ["require", "exports", "core/math/builtin"], function(require, t, i) {
    define('core/math/comparators', ["require", "exports"], function(require, e) {
    define('core/math/qr', ["require", "exports"], function(require, r) {
    define('core/math/least-squares', ["require", "exports", "numeric", "core/math/distance", "./qr"], function(require, r, N, v, G) {
    define('core/math/parser/char-codes', ["require", "exports"], function(require, e) {
    **define('core/math/parser/latex-lexer', ["require", "exports", "./char-codes", "./input-span"], function(require, e, o, p) {
    define('core/math/parser/latex-node', ["require", "exports"], function(require, r) {
    define('core/math/parser/latex-parser', ["require", "exports", "./latex-lexer", "./input-span", "./latex-node"], function(require, e, v, o, f) {**
    define('core/math/parser/command-aliases', ["require", "exports", "./char-codes"], function(require, e, s) {
    define('core/math/parser/surface-node', ["require", "exports", "./command-aliases"], function(require, n, t) {
    define('core/math/parser/surface-node-error', ["require", "exports"], function(require, n) {
    define('core/math/parser/expression-token-tables', ["require", "exports"], function(require, e) {
    define('core/math/parser/expression-lexer', ["require", "exports", "./expression-token-tables", "./input-span", "./input-span", "./surface-node"], function(require, e, E, I, n, d) {
    define('core/math/parser/precspec', ["require", "exports", "./expression-token-tables"], function(require, e, o) {
    define('core/math/parser/expression-parser', ["require", "exports", "core/math/errormsg", "tslib", "./surface-node", "./surface-node-error", "./input-span", "./expression-lexer", "./precspec"], function(require, e, z, a, H, K, p, Q, r) {
    define('core/math/inverses', [], function() {
    define('core/math/parser/lower', ["require", "exports", "core/math/inverses", "core/math/errormsg", "tslib", "./input-span", "./surface-node", "../maybe-rational"], function(require, e, m, V, a, X, Y, Z) {
    define('core/math/baseparser', ["require", "exports", "core/math/errormsg", "parsenodes", "core/math/parser/latex-parser", "core/math/parser/expression-parser", "core/math/parser/lower"], function(require, r, f, m, v, g, h) {
    define('core/math/sliders', ["require", "exports"], function(require, e) {
    define('core/math/features/getConcreteTree', ['require', 'parsenodes', 'core/math/errormsg', 'core/math/types', 'core/lib/label', 'core/math/builtin', 'core/math/distance', 'core/math/maybe-rational', 'core/math/rational-arithmetic-sequence', 'core/math/sliders'], function(require) {
    define('core/math/features/getValueType', ['require', 'parsenodes', 'core/math/types'], function(require) {
    define('core/math/features/typeCheck', ['require', 'parsenodes', 'core/math/types', 'core/math/errormsg'], function(require) {
    define('core/math/features/repr', ['require', 'parsenodes'], function(require) {
    define('core/math/features/scalarEvalExpression', ['require', 'parsenodes', 'core/math/functions'], function(require) {
    define('core/math/reconstitute-node', ['require', 'parsenodes', 'core/math/types'], function(require) {
    define('core/math/features/constantcollapsedcopy', ['require', 'parsenodes', 'core/math/reconstitute-node', 'core/math/maybe-rational', 'core/math/errormsg'], function(require) {
    define('core/math/features/polynomialorder', ['require', 'parsenodes'], function(require) {
    define('core/math/features/polynomialcoefficients', ['require', 'parsenodes', 'core/math/maybe-rational'], function(require) {
    define('core/math/features/extractconditions', ['require', 'parsenodes'], function(require) {
    define('core/math/features/piecewiseDependsOn', ['require', 'parsenodes'], function(require) {
    define('core/math/domaintypes', ["require", "exports"], function(require, t) {
    define('core/math/features/bounddomain', ['require', 'parsenodes', 'core/math/builtinframe', 'core/math/domaintypes', 'core/math/comparators', 'core/math/maybe-rational', 'core/math/policy'], function(require) {
    define('core/math/features/substitute', ['require', 'parsenodes'], function(require) {
    define('core/math/features/isImplicit', ['require', 'parsenodes'], function(require) {
    define('core/math/workerconfig', [], function() {
    define('core/math/features/solve', ['require', 'core/math/baseparser', 'parsenodes', 'core/math/errormsg', 'core/math/builtinframe', 'core/math/workerconfig', 'core/math/maybe-rational', 'core/math/policy'], function(require) {
    define('core/math/distribution-spec', ["require", "exports", "core/math/baseparser", "tslib"], function(require, d, i, l) {
    define('core/math/evaluationstate', ["require", "exports", "core/vendor/d3-color", "parsenodes", "./errormsg", "core/types/graphmode", "core/lib/label", "core/math/distribution-spec", "./types"], function(require, e, h, b, _, y, E, S, V) {
    define('core/math/statementanalysis', ['require', 'core/math/evaluationstate', 'pjs', 'core/types/graphmode', 'core/math/workerconfig'], function(require) {
    define('core/math/expression-types', ["require", "exports"], function(require, T) {
    define('core/math/features/analyzeScientific', ['require', 'parsenodes', 'core/math/statementanalysis', 'core/math/errormsg', 'core/math/builtinframe'], function(require) {
    define('core/math/features/getgraphmode', ['require', 'parsenodes', 'core/types/graphmode', 'core/lib/dragmode', 'core/lib/dragmode', 'core/math/types'], function(require) {
    define('core/math/features/getgraphinfo', ['require', 'parsenodes', 'core/math/builtinframe', 'core/math/domaintypes', 'core/math/policy', 'core/lib/color-helpers'], function(require) {
    define('core/math/features/getMoveStrategy', ['require', 'parsenodes', 'core/math/types', 'core/math/maybe-rational', 'core/math/builtinframe', 'core/math/functions'], function(require) {
    define('core/math/features/getDefaultDragMode', ['require', 'parsenodes', 'core/lib/dragmode'], function(require) {
    define('core/math/features/tableinfo', ['require', 'parsenodes', 'core/math/types', 'core/lib/label', 'core/math/distribution-spec'], function(require) {
    define('core/math/features/tableerror', ['require', 'parsenodes', 'core/lib/worker-i18n'], function(require) {
    define('core/math/curve-accumulator', ["require", "exports", "core/math/distance"], function(require, t, h) {
    define('core/math/implicit-plotter', ["require", "exports", "core/math/distance", "./curve-accumulator"], function(require, e, v, a) {
    define('core/math/poi-finding-accumulator', ["require", "exports", "core/math/workerconfig", "tslib", "./curve-accumulator", "./poi"], function(require, e, t, i, r, o) {
    define('core/math/plotter', ["require", "exports", "tslib", "core/math/distance", "./poi", "./implicit-plotter", "./curve-accumulator", "./poi-finding-accumulator", "core/types/graphmode", "./domaintypes"], function(require, e, t, F, v, b, o, a, k, w) {
    define('core/math/cdf-branches', ["require", "exports", "tslib", "core/lib/deepCopy", "core/math/plotter", "core/math/domaintypes", "core/types/styles"], function(require, e, b, p, y, v, u) {
    define('core/math/copy-defined-pois', ["require", "exports"], function(require, e) {
    define('core/math/features/graph', ["require", "exports", "parsenodes", "core/math/comparators", "tslib", "core/math/builtin", "core/math/plotter", "core/types/graphmode", "core/lib/dragmode", "core/math/expression-types", "core/math/cdf-branches", "core/math/copy-defined-pois", "core/math/distribution-spec", "core/graphing-calc/json/expression", "core/types/opacity", "core/lib/color-helpers", "core/types/styles", "core/math/types", "core/types/point-size"], function(require, e, v, b, F, w, z, _, G, O, W, B, Y, L, y, R, S, x, M) {
    define('core/math/features/elementAt', ['require', 'parsenodes', 'core/math/builtinframe'], function(require) {
    **define('core/math/features/printLatex', ['require', 'parsenodes', 'core/lib/label', 'core/lib/number-to-latex'], function(require) {**
    define('core/math/features/statistics', ['require', 'parsenodes', 'core/math/maybe-rational'], function(require) {
    define('core/math/features/getExpressionType', ['require', 'parsenodes', 'core/types/graphmode', 'core/math/expression-types', 'core/math/types'], function(require) {
    define('core/math/features/findLinearSubset', ['require', 'parsenodes', 'core/math/maybe-rational'], function(require) {
    define('core/math/features/deriveRegressionRestrictions', ['require', 'parsenodes', 'core/math/types', 'core/math/domaintypes'], function(require) {
    define('core/math/features/reparameterizeRegression', ['require', 'parsenodes', 'core/math/types'], function(require) {
    define('core/math/policyGraphing', ["require", "exports", "./builtinframe", "core/types/graphmode"], function(require, t, r, n) {
    define('core/math/interpolatedlabel', ["require", "exports", "parsenodes", "core/lib/label", "./policy", "core/math/types"], function(require, e, p, r, f, c) {
    define('core/math/poi-type', ["require", "exports"], function(require, E) {
    define('core/math/finddependencyorder', ['require', 'core/math/builtinframe', 'underscore'], function(require) {
    define('core/math/findIntersections', ['require', 'core/types/graphmode', './plotter', 'parsenodes', 'core/math/distance'], function(require) {
    define('core/math/policyFourFunction', ["require", "exports"], function(require, e) {
    define('core/math/policyScientific', ["require", "exports"], function(require, e) {
    define('core/math/getCLSymbolMap', ["require", "exports", "underscore", "core/lib/label"], function(require, e, g, y) {
    define('core/math/context', ["require", "exports", "parser", "parsenodes", "./finddependencyorder", "./errormsg", "./workerconfig", "./findIntersections", "core/vendor/d3-color", "./policyFourFunction", "./policyScientific", "./policyGraphing", "./frameFourFunction", "./frameScientific", "./frameSingleExpressionScientific", "./frameGraphing", "tslib", "underscore", "./plotter", "core/types/graphmode", "./interpolatedlabel", "./expression-types", "./getCLSymbolMap", "./distribution-spec", "./maybe-rational", "core/lib/number-to-latex", "core/lib/label", "./functions", "core/types/line-width", "core/types/point-opacity", "core/types/point-size", "./evaluationstate", "core/math/types"], function(require, e, J, t, P, z, i, a, s, r, n, o, l, p, d, u, H, c, h, O, K, E, f, Q, m, W, j, v, y, g, _, T, q) {
    define('core/math/recttransformation', ["require", "exports"], function(require, t) {
    define('core/math/tree-queries/count-numbers', ["require", "exports"], function(require, e) {
    define('core/mathtools', ["require", "exports", "parser", "core/math/builtinframe", "parsenodes", "tslib", "core/math/context", "core/cl-calculator", "core/math/parser/latex-parser", "core/math/parser/expression-parser", "core/math/tree-queries/count-numbers", "core/lib/color-helpers", "core/math/policyGraphing", "core/math/policyScientific", "core/math/policyFourFunction", "./math/parser/surface-node-error", "core/lib/label", "core/graphing-calc/diffs/calculate-diff", "core/graphing-calc/diffs/apply-diff", "core/graphing-calc/migrate-state", "core/math/types", "core/graphing-calc/translation/translator", "./math/parser/input-span"], function(require, i, a, e, r, n, t, o, c, l, p, s, u, f, g, m, b, y, h, d, L, x, P) {
    define('core/math/conics', ['require', 'numeric', 'core/math/distance', 'core/math/qr'], function(require) {
    ```
