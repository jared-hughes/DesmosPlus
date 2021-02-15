// compiles AST to Desmos state
import ScopeContext from './ScopeContext.js'
import * as Builtins from './builtins.js'
import IdentifierGenerator from './IdentifierGenerator.js'

export default class ASTVisitor {
  constructor() {
    this.maxFolderId = 0
    this.types = Builtins.primitiveTypes
    this.globalVars = Builtins.vars
    this.idGenerator = new IdentifierGenerator()
    this.functions = {}
    this.usedFunctions = {}
  }

  visitProgram(program) {
    this.program = program
    // Flatten program to a list of all statements
    this.expandFolders()
    // Generate this.{types,functions,globalVars}:
    // separate lists tracking types, functions, and variables
    this.determineGlobals()
    // Determine the types of every variable
    this.determineTypes()
    // Convert function and variable expressions to those only involving
    // Desmos primitive types
    this.generateDesmos()
  }

  expandFolders() {
    let progOut = []
    for (const stmt of this.program) {
      if (stmt.statement === 'folder') {
        this.maxFolderId += 1
        const folderId = `folder_${this.maxFolderId}`
        progOut.push({
          statement: 'folder',
          id: folderId,
          name: stmt.name,
          metadata: stmt.metadata,
        }, ...stmt.statements.map(e => ({
          ...e,
          folderId: folderId
        })))
      } else {
        progOut.push(stmt)
      }
    }
    this.program = progOut
  }

  addType(stmt) {
    // TODO: leverage addRawFunction to get defaults for if the function is already defined
    // e.g. Complex(x:Num)=Complex@{cos(x),sin(x)} before this function is called
    // add type
    this.types[stmt.name] = stmt.definition
    // add default functions for the type
    this.functions[stmt.name] = [
      {
        args: (
          Object.entries(stmt.definition.fieldTypes)
          .map(([fieldName, type]) => ({
            variable: fieldName,
            type: type,
          }))
        ),
        resultType: stmt.definition,
        isPassthrough: true,
      }
    ]
  }

  addRawFunction(func) {
    this.functions[func.name] = this.functions[func.name] || []
    this.functions[func.name].push({
      ...func,
      // TODO: pushing out identifier twice for same function.
      // search in this file for idGenerator.nextIdentifier:
      // should be in getFieldsLatex
      latexName: func.latexName ?? this.idGenerator.nextIdentifier(func.name),
    })
  }

  addFunction(stmt) {
    this.addRawFunction({
      name: stmt.funcName,
      args: stmt.funcArguments.map(e => {
        let type = this.types[e.type]
        if (e.type == null) {
          type = this.types.Any
        }
        if (type === undefined) {
          throw `Type ${e.type} is not defined`
        }
        return {
          ...e,
          type: type
        }
      }),
      expr: stmt.expr,
      isInline: stmt.isInline,
      // resultType to be filled in during this.determineTypes
    })
  }

  addVariable(stmt) {
    if (this.globalVars[stmt.variable] !== undefined) {
      throw `Variable ${stmt.variable} is already defined`
    }
    // TODO: mark 'const' vs 'let' from stmt.statment
    this.globalVars[stmt.variable] = {
      expr: stmt.expr,
      // type to be filled in during this.determineTypes
    }
  }

  determineGlobals() {
    // builtin types
    Builtins.types.map(t => this.addType(t))
    // builtin functions
    for (const [name, args, resultType, customEval] of Builtins.functions) {
      let func = {
        name,
        args: args.map((t, i) => ({
            type: t,
            // name doesn't matter, but may need to be distinct for different i
            variable: "__builtinarg_" + i,
          })),
        resultType,
      }
      func.isInline = true;
      if (customEval === true) {
        func.latexName = `\\operatorname{${name}}`;
        func.customEval = L => `${func.latexName}\\left(${L.join(',')}\\right)`
      } else {
        // TODO: func.expr = ?
        func.customEval = customEval
      }
      this.addRawFunction(func)
    }
    // typedefs and variables from this program
    for (const stmt of this.program) {
      if (stmt.statement == 'type') {
        this.addType(stmt)
      } else if (stmt.statement == 'let' || stmt.statement == 'const') {
        this.addVariable(stmt)
      }
    }
    // functions from this program
    // needs to be after because function definitions depend on types
    for (const stmt of this.program) {
      if (stmt.statement == 'def') {
        this.addFunction(stmt)
      }
    }
  }

  determineTypes() {
    // this.functions
    // this.globalVars
    for (const varName in this.globalVars) {
      let variable = this.globalVars[varName]
      if (variable.type === undefined) {
        variable.type = variable.expr.getType(
          new ScopeContext(this, [varName], [], {}, false)
        )
        variable.fieldsLatex = this.getFieldsLatex(variable.type, varName);
      }
    }
  }

  getFieldsLatex(type, prefix) {
    if (type.fieldTypes) {
      let fieldsLatex = {}
      for (const {fieldName} of type.fields) {
        fieldsLatex[fieldName] = this.idGenerator.nextIdentifier(prefix + fieldName)
      }
      return fieldsLatex
    } else {
      // It's a Num, not an object
      return this.idGenerator.nextIdentifier(prefix)
    }
  }

  assignmentExpression(variable, scope, expr, fromType, field, latexName) {
    let latex;
    if (field) {
      // TODO: change variable name to latex
      latex = latexName + '=' + expr.split(scope, fromType, field).toLatex(scope)
    } else {
      latex = variable + '=' + expr.toLatex(scope)
    }
    return {
      type: 'expression',
      id: null, // TODO,
      latex: latex
    }
  }

  generateLet(stmt) {
    const objectType = this.globalVars[stmt.variable].type
    const scope = new ScopeContext(this, [stmt.variable], [], {}, false)
    if (objectType.fields) {
      return objectType.fields.map(
        field => this.assignmentExpression(
          stmt.variable, scope, stmt.expr, objectType, field.fieldName,
          this.globalVars[stmt.variable].fieldsLatex[field.fieldName]
        )
      )
    } else {
      return [this.assignmentExpression(stmt.variable, scope, stmt.expr)]
    }
  }

  generateDef(stmt) {
    // If a function is not used, it is not output (hence the `??`)
    const functionsDefinedHere = (this.usedFunctions[stmt.funcName] ?? [])
      .filter(func => func.expr && func.expr.line === stmt.expr.line && func.expr.col === stmt.expr.col)

    let out = []
    let alreadyAddedFuncs = new Set()
    for (let func of functionsDefinedHere) {
      if (func.isInline || alreadyAddedFuncs.has(func)) {
        continue;
      }
      alreadyAddedFuncs.add(func)
      const resultType = func.resultType
      const outerScope = new ScopeContext(this, [], [stmt.funcName], {}, false)
      let localVars = {}
      func.args.map(({variable, type}) => {
        localVars[variable] = {
          type,
          fieldsLatex: this.getFieldsLatex(type, variable),
        }
      })
      const scope = outerScope.withLocalVars(localVars)
      // Get args as a list of Num-typed variables
      let argsFlat = []
      for (let arg of func.args) {
        const objectType = arg.type;
        const variable = localVars[arg.variable]
        if (objectType.fields) {
          argsFlat.push(
            ...variable.type.fields.map(
              ({fieldName}) => variable.fieldsLatex[fieldName]
            )
          )
        } else {
          argsFlat.push(variable.fieldsLatex)
        }
      }
      let values;
      // TODO: treat def's as an `expr` that you can .split(...) on
      // because there's excessive code duplication in splitting
      if (resultType.fields) {
        values = resultType.fields.map(
          field => ({
            expr: func.expr.split(scope, resultType, field.fieldName),
            latexName: func.fieldsLatex[field.fieldName],
          })
        )
      } else {
        // function result is a Num
        values = [
          {
            expr: func.expr,
            latexName: func.latexName,
          }
        ]
      }
      out.push(...values.map(val => (
        this.assignmentExpression(
          val.latexName + `\\left(${argsFlat.join(',')}\\right)`,
          scope, val.expr
        )
      )))
    }
    return out
  }

  generateDesmos() {
    // TODO: map local vars?

    let desmosExpressions = []
    this.program.map(stmt => {
      if (stmt.statement == 'let') {
        // TODO: const?
        desmosExpressions.push(...this.generateLet(stmt));
      } else if (stmt.statement == 'def') {
        desmosExpressions.push(...this.generateDef(stmt));
      }
    })
    console.log(desmosExpressions)
  }
}
