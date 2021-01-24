import antlr4 from 'antlr4';
import DesmosPlusLexer from './DesmosPlusLexer.js';
import DesmosPlusParser from './DesmosPlusParser.js';
import DesmosPlusParserVisitor from './DesmosPlusParserVisitor.js'

export default class Visitor extends DesmosPlusParserVisitor {
	// helpers
  funcApplication(name, ctx, isUnary) {
    if (isUnary === undefined) {
      isUnary = false;
    }
    const args =
      isUnary
      ? this.visit(ctx.mathExpr())
      : ctx.mathExpr().map(e => this.visit(e))
    return {
      func: name,
      args: args
    }
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
	  return this.visitChildren(ctx);
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
      expr: this.visit(ctx.mathExpr())
    }
	  return this.visitChildren(ctx);
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
	  return this.visitChildren(ctx);
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
	  return this.visitChildren(ctx);
	}

	visitTypeDeclarationStatement(ctx) {
    return {
      statement: 'type',
      name: this.visit(ctx.name),
      definition: this.visit(ctx.objectInside())
    }
	  return this.visitChildren(ctx);
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
      : {
        objectName: 'Metadata',
        fields: []
      };
	}

	visitParenthesizedExpression(ctx) {
	  return this.visit(ctx.mathExpr(0))
	}

	visitAdditiveExpression(ctx) {
	  return this.funcApplication(this.getFuncName(ctx.op), ctx)
	}

	visitComparisonChainExpression(ctx) {
    // Despite the name, ComparisonChain only has a left and right expression,
    // where the right expression may be another ComparisonChain
    const ccec = DesmosPlusParser.ComparisonChainExpressionContext;
    const left = this.visit(ctx.left)
    const right = this.visit(ctx.right)
    const funcName = this.getFuncName(ctx.op)
    let comparisons;
    if (left.comparisons) {
      // This branch is for when the right part of the comparison
      // is also a comparison. We want `a<b<c` → `a<b and b<c`, not `a<(b<c)`.
      comparisons = [
        ...left.comparisons,
        {
          func: funcName,
          args: [
            left.comparisons[left.comparisons.length-1].args[1],
            right
          ]
        }
      ]
    } else {
      comparisons = [
        {
          func: funcName,
          args: [left, right]
        }
      ]
    }
	  return { comparisons }
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
	  return {
      variable: this.visit(ctx.identifier())
    };
	}

	visitOrExpression(ctx) {
	  return this.funcApplication('_or', ctx);
	}

	visitListIndexExpression(ctx) {
	  return this.funcApplication('_get', ctx)
	}

	visitFunctionExpression(ctx) {
	  return {
      func: this.visit(ctx.identifier()),
      args: this.visit(ctx.functionArguments())
    }
	}

	visitAndExpression(ctx) {
	  return this.funcApplication('_and', ctx);
	}

	visitUnaryMinusExpression(ctx) {
    return this.funcApplication('_neg', ctx, true);
	}

	visitPiecewiseExpression(ctx) {
	  return {
      branches: ctx.piecewiseBranch().map(e => this.visit(e))
    }
	}

	visitUnaryPlusExpression(ctx) {
	  return this.funcApplication('_pos', ctx, true);
	}

  visitObjectAccessExpression(ctx) {
    // may want to chain this like with comparisons to ease execution
    return {
      object: this.visit(ctx.mathExpr()),
      identifier: this.visit(ctx.identifier())
    }
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
      type: ctx.type ? this.visit(ctx.type) : 'Any'
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
    return {
      type: 'Num',
      content: ctx.getText()
    }
  }

  visitStringLiteral(ctx) {
    return {
      type: 'String',
      content: ctx.getText().slice(1,-1)
    }
  }

  visitListLiteral(ctx) {
    return {
      type: 'List',
      entries: ctx.mathExpr().map(e => this.visit(e))
    }
  }

  visitPointLiteral(ctx) {
    return this.funcApplication('Point', ctx)
  }

  visitTermedRangeListLiteral(ctx) {
    return this.funcApplication('_rangeTerm', ctx)
  }

  visitSteppedRangeListLiteral(ctx) {
    return this.funcApplication('_rangeStep', ctx)
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
    return {
      objectName: id ? this.visit(id) : 'Metadata',
      fields: this.visit(ctx.objectInside(0))
    }
  }

}
