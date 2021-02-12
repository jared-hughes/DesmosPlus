const BUILTIN = '__builtin'
import VariableType from './VariableType.js'
import ObjectType from './ObjectType.js'

const Num = new VariableType('Num')
const String = new VariableType('String')
const Bool = new VariableType('Bool')
// TODO: allow dot access from these
const Interval = new VariableType('Interval')

const Any = new VariableType('Any')
const ParamA = new VariableType('a', 0, true)

export const primitiveTypes = {
  Any, Num, String, Bool//, Interval
}

const Point = new ObjectType('Point', [
  {
    fieldName: 'x',
    type: Num,
  },
  {
    fieldName: 'y',
    type: Num,
  },
])

const Color = new ObjectType('Color', [
  {
    fieldName: 'r',
    type: Num,
  },
  {
    fieldName: 'g',
    type: Num,
  },
  {
    fieldName: 'b',
    type: Num,
  },
])

function typedef(objectType) {
  return {
    name: objectType.type,
    definition: objectType
  }
}

export const types = [
  Point, Color
].map(typedef)

export const vars = {
  e: {
    expr: BUILTIN,
    type: Num,
    customLatex: 'e',
  },
  pi: {
    expr: BUILTIN,
    type: Num,
    customLatex: '\\pi',
  },
  tau: {
    expr: BUILTIN,
    type: Num,
    customLatex: '\\tau',
  },
  true: {
    expr: BUILTIN,
    type: Bool,
    customLatex: '1',
  },
  false: {
    expr: BUILTIN,
    type: Bool,
    customLatex: '0',
  },
}

vars.otherwise = vars.true

function binop(c) {
  // TODO: handle operator precedence so (1+2)*3 needs parens but not 1+2*3
  return ([l,r]) => `\\left(${l}${c}${r}\\right)`
}

function ineq(c) {
  return ([l,r]) => `\\left{${l}${c}${r}:1,0\\right}`
}

function prefix(c) {
  return ([a]) => `(${c}${a})`
}

export const functions = [
  ['_add', [Num, Num], Num, binop('+')],
  ['_add', [Point, Point], Point, binop('+')],
  ['_sub', [Num, Num], Num, binop('-')],
  ['_sub', [Point, Point], Point, binop('-')],
  ['_mul', [Num, Num], Num, binop('\\cdot')],
  ['_mul', [Num, Point], Point, binop('\\cdot')],
  ['_mul', [Point, Num], Point, binop('\\cdot')],
  ['_div', [Num, Num], Num, ([l,r]) => `\\frac{${l}}{${r}}`],
  ['_div', [Point, Num], Point, ([l,r]) => `\\frac{${l}}{${r}}`],
  ['mod', [Num, Num], Num, true],
  ['_geq', [Num, Num], Bool, ineq('\\geq')],
  ['_gt', [Num, Num], Bool, ineq('>')],
  ['_leq', [Num, Num], Bool, ineq('\\leq')],
  ['_lt', [Num, Num], Bool, ineq('<')],
  ['_neq', [Num, Num], Bool, ([l,r]) => `\\left{${l}=${r}:0,1\\right}`],
  ['_eq', [Num, Num], Bool, ineq('=')],
  ['_pow', [Num, Num], Num, ([l,r]) => `${l}^{${r}}`],
  ['_not', [Bool], Bool, prefix('1-')],
  ['_and', [Bool, Bool], Bool, binop('\\cdot')],
  ['_or', [Bool, Bool], Bool, ([l,r]) => `\\operatorname{sign}(${l}+${r})`],
  ['_get', [ParamA.wrapped(), Num], ParamA, ([l,r]) => `${l}\\left[${r}\\right]`],
  ['_neg', [Num], Num, prefix('-')],
  ['_neg', [Point], Point, prefix('-')],
  ['_pos', [Num], Num, prefix('+')],
  ['_pos', [Point], Point, prefix('+')],
// two-Num is step=1
  ['rangeTerm', [Num, Num], Num.wrapped(), ([l,r]) => `\\left[${l}...${r}\\right]`],
  ['rangeTerm', [Num, Num, Num], Num.wrapped(), ([l,t,r]) => `\\left[${l},${t}...${r}\\right]`],
  ['rangeStep', [Num, Num, Num], Num.wrapped(), ([l,r,s]) => `\\left[${l},${l}+${s}...${r}\\right]`],
  ['Interval', [Num, Num], Interval],
  ['Interval', [Num, Num, Num], Interval],
  ['atan', [Num], Num, true],
  ['atan', [Num, Num], Num, true],
  ['cos', [Num], Num, true],
  ['sin', [Num], Num, true],
  ['sqrt', [Num], Num, ([e]) => `\\sqrt{${e}}`],
  ['rgb', [Num, Num, Num], Color, true],
  ['hsv', [Num, Num, Num], Color, true],
  // TODO: finish filling in these builtins
]
