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
  },
  pi: {
    expr: BUILTIN,
    type: Num,
  },
  tau: {
    expr: BUILTIN,
    type: Num,
  },
  true: {
    expr: BUILTIN,
    type: Bool,
  },
  false: {
    expr: BUILTIN,
    type: Bool,
  },
}

vars.otherwise = vars.true

function branch(args, result) {
  return {
    // TODO: ESLint the code. Spent far too long debugging to find out that
    // I forgot to parenthesize the output of this arrow function,
    // so JS thought this was a statement `t` with label `type`
    args: args.map(t => ({type: t})),
    expr: BUILTIN,
    resultType: result
  }
}


export const functions = {
  _add: [
    branch([Num, Num], Num),
    // branch([Point, Point], Point),
  ],
  _sub: [
    branch([Num, Num], Num),
    // branch([Point, Point], Point),
  ],
  _mul: [
    branch([Num, Num], Num),
    // branch([Num, Point], Point),
    // branch([Point, Num], Point),
  ],
  _div: [
    branch([Num, Num], Num),
    // branch([Point, Num], Point),
  ],
  mod: [branch([Num, Num], Num)],
  _geq: [branch([Num, Num], Bool)],
  _gt: [branch([Num, Num], Bool)],
  _leq: [branch([Num, Num], Bool)],
  _lt: [branch([Num, Num], Bool)],
  _neq: [branch([Num, Num], Bool)],
  _eq: [branch([Num, Num], Bool)],
  _pow: [branch([Num, Num], Num)],
  _not: [branch([Bool], Bool)],
  _and: [branch([Bool, Bool], Bool)],
  _or: [branch([Bool, Bool], Bool)],
  _get: [branch([ParamA.wrapped(), Num], ParamA)],
  _neg: [
    branch([Num], Num),
    // branch([Point], Point),
  ],
  _pos: [
    branch([Num], Num),
    // branch([Point], Point),
  ],
  rangeTerm: [
    // two-Num is step=1
    branch([Num, Num], Num.wrapped()),
    branch([Num, Num, Num], Num.wrapped()),
  ],
  rangeStep: [branch([Num, Num, Num], Num.wrapped())],
  Interval: [
    branch([Num, Num], Interval),
    branch([Num, Num, Num], Interval),
  ],
  atan: [
    branch([Num], Num),
    branch([Num, Num], Num),
  ],
  cos: [branch([Num], Num)],
  sqrt: [branch([Num], Num)],
  rgb: [branch([Num, Num, Num], Color)],
  hsv: [branch([Num, Num, Num], Color)],
  // TODO: wrap up these builtins, ref /docs/standard_library.md
}
