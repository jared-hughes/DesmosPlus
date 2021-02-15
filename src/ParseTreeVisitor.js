import antlr4 from 'antlr4';
import DesmosPlusLexer from './DesmosPlusLexer.js';
import DesmosPlusParser from './DesmosPlusParser.js';
import DesmosPlusParserVisitor from './DesmosPlusParserVisitor.js'
import VariableType from './VariableType.js'
import ObjectType from './ObjectType.js'
import * as Expr from './exprs.js'

// compiles ANTLR parse tree to AST
export default class ParseTreeVisitor extends DesmosPlusParserVisitor {
	// helpers
  funcApplication(name, ctx, isUnary) {
    if (isUnary === undefined) {
      isUnary = false;
    }
    const args =
      isUnary
      ? [this.visit(ctx.mathExpr())]
      : ctx.mathExpr().map(e => this.visit(e))
    return new Expr.FunctionApplication(ctx, name, args)
  }

  getFuncName(op) {
    switch (op.type) {
      case DesmosPlusLexer.Add:
        return '_add'
      case DesmosPlusLexer.Subtract:
        return '_sub'
      case DesmosPlusLexer.Multiply:
        return '_mul'
      case DesmosPlusLexer.Divide:
        return '_div'
      case DesmosPlusLexer.Modulus:
        return 'mod'
      case DesmosPlusLexer.GreaterThanOrEqual:
        return '_geq'
      case DesmosPlusLexer.GreaterThan:
        return '_gt'
      case DesmosPlusLexer.LessThanOrEqual:
        return '_leq'
      case DesmosPlusLexer.LessThan:
        return '_lt'
      case DesmosPlusLexer.Equals:
        return '_eq'
      case DesmosPlusLexer.NotEquals:
        return '_neq'
    }
  }

  // visitors for each node type
	visitProgram(ctx) {
    // slice to remove the EOF token
	  return ctx.statement().map(e => this.visit(e))
	}

  visitStatement(ctx) {
    return this.visit(ctx.children[0])
  }

	visitFolderStatement(ctx) {
	  return {
      statement: 'folder',
      name: this.visit(ctx.name),
      metadata: this.visit(ctx.optionalMetadata()),
      statements: ctx.nestableStatement().map(e => this.visit(e))
    }
	}

  visitLetStatement(ctx) {
    return {
      statement: 'let',
      variable: this.visit(ctx.identifier()),
      expr: this.visit(ctx.mathExpr()),
      metadata: this.visit(ctx.optionalMetadata())
    }
  }

	visitConstStatement(ctx) {
    return {
      statement: 'const',
      variable: this.visit(ctx.identifier()),
      expr: this.visit(ctx.mathExpr())
    }
	}

	visitDefStatement(ctx) {
    return {
      statement: 'def',
      funcName: this.visit(ctx.identifier()),
      funcArguments: this.visit(ctx.functionDefinitionArguments()),
      expr: this.visit(ctx.mathExpr()),
      isInline: ctx.optionalInline !== null,
    }
	}

	visitNoteStatement(ctx) {
	  return {
      statement: 'note',
      expr: this.visit(ctx.mathExpr())
    }
	}

	visitShowStatement(ctx) {
    return {
      statement: 'show',
      expr: this.visit(ctx.mathExpr()),
      metadata: this.visit(ctx.optionalMetadata())
    }
	}

	visitParametricStatement(ctx) {
    return {
      statement: 'parametric',
      expr: this.visit(ctx.mathExpr()),
      assignment: this.visit(ctx.assignment()),
      metadata: this.visit(ctx.optionalMetadata())
    }
	}

	visitSimulationStatement(ctx) {
    return {
      statement: 'simulation',
      fps: this.visit(ctx.fps),
      assignments: this.visit(ctx.assignmentList())
    }
	}

	visitTableStatement(ctx) {
    return {
      statement: 'table',
      xlist: ctx.xlist
        ? this.visit(ctx.xlist)
        : {
          type: 'List',
          entries: []
        },
      ylists: ctx.tableLine().map(e => this.visit(e))
    }
	}

	visitTypeDeclarationStatement(ctx) {
    return {
      statement: 'type',
      name: this.visit(ctx.name),
      definition: new ObjectType(ctx.name, this.visit(ctx.typedefInside()))
    }
	}

  visitTypedefInside(ctx) {
    return ctx.typedefBranch().map(e => this.visit(e))
  }

  visitTypedefBranch(ctx) {
    return {
      fieldName: this.visit(ctx.identifier()),
      type: this.visit(ctx.vartype()),
    }
  }

  visitVartypeIdentifier(ctx) {
    return new VariableType(this.visit(ctx.identifier()), 0);
  }

  visitVartypeNested(ctx) {
    return this.visit(ctx.vartype()).wrapped()
  }

  visitAssignment(ctx) {
    return {
      assignmentVar: ctx.variableReference().identifier().getText(),
      assignmentInterval: this.visit(ctx.mathExpr(0))
    }
  }

  visitAssignmentList(ctx) {
    return {
      assignments: ctx.assignment().map(e => this.visit(e))
    }
  }

	visitTableLine(ctx) {
    return {
      expr: this.visit(ctx.mathExpr()),
      metadata: this.visit(ctx.optionalMetadata())
    }
	}

	visitOptionalMetadata(ctx) {
    const expr = ctx.mathExpr();
	  return expr
      ? this.visit(expr)
      : new Expr.ObjectInstance(ctx, 'Metadata', [])
	}

	visitParenthesizedExpression(ctx) {
	  return this.visit(ctx.mathExpr(0))
	}

	visitAdditiveExpression(ctx) {
	  return this.funcApplication(this.getFuncName(ctx.op), ctx)
	}

	visitComparisonChainExpression(ctx) {
    // TODO: convert to `_and` chain
    // Despite the name, ComparisonChain only has a left and right expression,
    // where the right expression may be another ComparisonChain
    const funcName = this.getFuncName(ctx.op)
    const left = this.visit(ctx.left)
    const right = this.visit(ctx.right)
    if (ctx.left instanceof DesmosPlusParser.ComparisonChainExpressionContext) {
      // This branch is for when the left part of the comparison
      // is also a comparison. We want `a<b<c` → `a<b and b<c`, not `a<(b<c)`.
      // TODO semantically, these are not function applications,
      // so they should not be considered as such in LanguageElement
      return new Expr.FunctionApplication(
        ctx,
        '_and',
        [
          left,
          new Expr.FunctionApplication(
            ctx,
            funcName,
            [
              // Either _and(..., a<b) or a<b
              left.args[1].args ? left.args[1].args[1] : left.args[1],
              right
            ]
          )
        ]
      )
    } else {
      return new Expr.FunctionApplication(
        ctx,
        funcName,
        [left, right],
      )
    }
	}

	visitPowerExpression(ctx) {
	  return this.funcApplication('_pow', ctx)
	}

	visitLiteralExpression(ctx) {
	  return this.visit(ctx.children[0]);
	}

	visitNotExpression(ctx) {
	  return this.funcApplication('_not', ctx, true);
	}

	visitVariableExpression(ctx) {
	  return new Expr.VariableExpression(
      ctx,
      this.visit(ctx.identifier())
    )
	}

	visitOrExpression(ctx) {
	  return this.funcApplication('_or', ctx);
	}

	visitListIndexExpression(ctx) {
	  return this.funcApplication('_get', ctx)
	}

	visitFunctionExpression(ctx) {
	  return new Expr.FunctionApplication(
      ctx,
      this.visit(ctx.identifier()),
      this.visit(ctx.functionArguments())
    )
	}

	visitAndExpression(ctx) {
	  return this.funcApplication('_and', ctx);
	}

	visitUnaryMinusExpression(ctx) {
    return this.funcApplication('_neg', ctx, true);
	}

	visitPiecewiseExpression(ctx) {
	  return new Expr.PiecewiseExpression(
      ctx,
      ctx.piecewiseBranch().map(e => this.visit(e))
    )
	}

	visitUnaryPlusExpression(ctx) {
	  return this.funcApplication('_pos', ctx, true);
	}

  visitObjectAccessExpression(ctx) {
    // may want to chain this like with comparisons to ease execution?
    return new Expr.ObjectAccessExpression(
      ctx,
      this.visit(ctx.mathExpr()),
      this.visit(ctx.identifier())
    )
  }

	visitMultiplicativeExpression(ctx) {
	  return this.funcApplication(this.getFuncName(ctx.op), ctx)
	}

	visitFunctionArguments(ctx) {
	  return ctx.mathExpr().map(e => this.visit(e))
	}

	visitFunctionDefinitionPart(ctx) {
    return {
      variable: this.visit(ctx.variable),
      type: ctx.type ? this.visit(ctx.type) : null
    }
	}

	visitFunctionDefinitionArguments(ctx) {
	  return ctx.functionDefinitionPart().map(e => this.visit(e));
	}

	visitVariableReference(ctx) {
	  return this.visit(ctx.identifier());
	}

  visitIdentifier(ctx) {
    return ctx.getText();
  }

  visitLiteral(ctx) {
    return this.visit(ctx.children[0]);
  }

  visitNumberLiteral(ctx) {
    return new Expr.NumberLiteral(ctx, ctx.getText())
  }

  visitStringLiteral(ctx) {
    return new Expr.StringLiteral(ctx, ctx.getText().slice(1,-1))
  }

  visitListLiteral(ctx) {
    return new Expr.ListLiteral(ctx, ctx.mathExpr().map(e => this.visit(e)))
  }

  visitPointLiteral(ctx) {
    return this.funcApplication('Point', ctx)
  }

  visitTermedRangeListLiteral(ctx) {
    return this.funcApplication('rangeTerm', ctx)
  }

  visitSteppedRangeListLiteral(ctx) {
    return this.funcApplication('rangeStep', ctx)
  }

  visitIntervalLiteral(ctx) {
    return this.funcApplication('Interval', ctx)
  }

	visitPiecewiseBranch(ctx) {
	  return {
      condition: this.visit(ctx.condition),
      value: this.visit(ctx.value),
    }
	}

	visitObjectBranch(ctx) {
    return {
      field: this.visit(ctx.identifier()),
      value: this.visit(ctx.mathExpr(0) || ctx.assignmentList(0))
    }
	}

  visitObjectInside(ctx) {
    return ctx.objectBranch().map(e => this.visit(e))
  }

  visitObjectLiteral(ctx) {
    let id = ctx.identifier();
    return new Expr.ObjectInstance(
      ctx,
      id ? this.visit(id) : 'Metadata',
      this.visit(ctx.objectInside(0))
    )
  }
}
