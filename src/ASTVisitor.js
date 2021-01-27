// compiles AST to Desmos state
import ScopeContext from './ScopeContext.js'
import * as Builtins from './builtins.js'

export default class ASTVisitor {
  constructor() {
    this.maxFolderId = 0
    this.types = Builtins.primitiveTypes
    this.globalVars = Builtins.vars
    this.functions = Builtins.functions
    Builtins.types.map(t => this.addType(t))
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
    console.log(this.globalVars)
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
    // add type
    this.types[stmt.name] = stmt.definition
    // add default functions
    this.functions[stmt.name] = [
      {
        args: (
          Object.entries(stmt.definition.fieldTypes)
          .map(([fieldName, type]) => ({
            variable: fieldName,
            type: type,
          }))
        ),
        resultType: stmt.definition
      }
    ]
  }

  addFunction(stmt) {
    this.functions[stmt.funcName] = this.functions[stmt.funcName] || []
    this.functions[stmt.funcName].push({
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
      // resultType to be filled in during this.determineTypes
    })
  }

  addVariable(stmt) {
    console.log("add", stmt.variable)
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
    for (const stmt of this.program) {
      if (stmt.statement == 'type') {
        this.addType(stmt)
      } else if (stmt.statement == 'let' || stmt.statement == 'const') {
        this.addVariable(stmt)
      }
    }
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
          new ScopeContext(this, [varName], [], {})
        )
      }
    }
  }
}
