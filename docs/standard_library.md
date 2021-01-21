# Standard Library

Think of the standard library as a collection of functions and types that are not necessary for DesmosPlus to run, but they give the default definitions from Desmos itself. What follows are the type signatures for the standard library (TODO: change to new syntax):

(ref [https://www.desmos.com/calculator/x6lc5amuac](https://www.desmos.com/calculator/x6lc5amuac))

```js
_add :: (Num, Num) -> Num
_add :: (Point, Point) -> Point
... etc ... (TODO)

exp :: Num -> Num
ln :: Num -> Num
total :: [Num] -> Num
length :: [A] -> Num
mean :: [Num] -> Num
median :: [Num] -> Num
quantile :: ([Num], Num) -> Num
quartile :: ([Num], Num) -> Num
nCr :: (Num, Num) -> Num
nPr :: (Num, Num) -> Num
stdev :: [Num] -> Num
stdevp :: [Num] -> Num
mad :: [Num] -> Num
var :: [Num] -> Num
varp :: [Num] -> Num
cov :: ([Num], [Num]) -> Num
corr :: ([Num], [Num]) -> Num
spearman :: ([Num], [Num]) -> Num
lcm :: (Num, Num) -> Num
gcd :: (Num, Num) -> Num
mod :: (Num, Num) -> Num
ceil :: Num -> Num
floor :: Num -> Num
round :: Num -> Num
abs :: Num -> Num
min :: [Num] -> Num
max :: [Num] -> Num
sign :: Num -> Num

[
	sin, cos, tan, csc, sec, cot, sinh,
	cosh, tanh, csch, sech, coth, arcsin,
	arccos, arctan, arccsc, arcsec, arccot,
	arcsinh, arccosh, arctanh, arcsch, arcoth
] :: Num -> Num
arctan :: (Num, Num) -> Num

distance :: (Point, Point) -> Num
sort :: [Num] -> Num
sort :: ([a], [Num]) -> [a]
shuffle :: [a] -> [a]
shuffle :: ([a], Num) -> [a]

-- this binary definition of join will have to suffice for now
join :: ([a], [a]) -> [a]
join :: ([a], a) -> [a]
join :: (a, [a]) -> [a]
join :: (a, a) -> [a]

erf :: Num -> Num
tscore :: [Num] -> Num

random :: () -> Num
random :: (Num) -> [Num]
random :: (Num, Num) -> [Num]

-- also include other forms of creating each dist, e.g. no stdev for normal
normaldist :: (Num, Num) -> Dist
tdist :: Num -> Dist
poissondist :: Num -> Dist
binomialdist :: (Num, Num) -> Dist
uniformdist :: (Num, Num) -> Dist

pdf :: (Dist, Num) -> Num
cdf :: (Dist, Num) -> Num

random :: Dist -> Num
random :: (Dist, Num) -> [Num]
random :: (Dist, Num, Num) -> [Num]

rgb :: (Num, Num, Num) -> Color
hsv :: (Num, Num, Num) -> Color

sqrt :: Num -> Num
cbrt :: Num -> Num
nthroot :: (Num, Num) -> Num

e :: Num
pi :: Num
tau :: Num
```
