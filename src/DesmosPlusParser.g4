parser grammar DesmosPlusParser;


options { tokenVocab = DesmosPlusLexer; }
program
   : (statement)*
   ;

statement
   : nestableStatement
   | folderStatement
   ;

nestableStatement
   : letStatement
   | constStatement
   | defStatement
   | noteStatement
   | sliderStatement
   | showStatement
   | parametricStatement
   | simulationStatement
   | tableStatement
   | typeDeclarationStatement
   ;

letStatement
   : 'let' identifier '=' mathExpr
   ;

constStatement
   : 'const' identifier '=' mathExpr
   ;

defStatement
   : 'def' identifier functionDefinitionArguments '=' mathExpr
   ;

noteStatement
   : 'note' mathExpr
   ;

sliderStatement
   : 'slider' assignment optionalMetadata
   ;

showStatement
   : 'show' mathExpr optionalMetadata
   ;

parametricStatement
   : 'parametric' mathExpr ',' assignment optionalMetadata
   ;

simulationStatement
   : 'simulation' mathExpr ',' assignmentList
   ;

assignment
   : variableReference '<-' mathExpr
   ;

assignmentList
   : '[' (assignment ',')* assignment? ']'
   ;

tableStatement
   : 'table' mathExpr? '[' (tableLine ';')* tableLine? ']'
   ;

tableLine
   : mathExpr optionalMetadata
   ;

folderStatement
   : 'folder' mathExpr optionalMetadata ',' '[' nestableStatement* ']'
   ;

optionalMetadata
   : (',' mathExpr)?
   ;

typeDeclarationStatement
   : 'type' identifier '@{' objectInside '}'
   ;

// The `#`s are labels for the listener
mathExpr
   : mathExpr '.' identifier # ObjectAccessExpression
   | mathExpr '[' mathExpr ']' # ArrayIndexExpression
   | identifier functionArguments # FunctionExpression
   | '+' mathExpr # UnaryPlusExpression
   | '-' mathExpr # UnaryMinusExpression
   | '!' mathExpr # NotExpression
   | < assoc = right > mathExpr '^' mathExpr # PowerExpression
   | mathExpr ('*' | '/' | '%') mathExpr # MultiplicativeExpression
   | mathExpr ('+' | '-') mathExpr # AdditiveExpression
   // TODO: make comparison chains flat? Maybe ref. Python example grammar
   // (https://github.com/antlr/grammars-v4/blob/master/python/python3-js/Python3.g4) or handle in listener
   | mathExpr (('>=' | '>' | '<=' | '<' | '==' | '!=') mathExpr)+ # ComparisonChainExpression
   | mathExpr '&&' mathExpr # AndExpression
   | mathExpr '||' mathExpr # OrExpression
   | identifier # IdentifierExpression
   | literal # LiteralExpression
   | '{' piecewiseBranch (',' piecewiseBranch)* ','? '}' # PiecewiseExpression
   | '(' mathExpr ')' # ParenthesizedExpression
   ;

functionArguments
   : '(' (mathExpr ',')* mathExpr ')'
   ;

functionDefinitionPart
   : identifier (':' identifier)?
   ;

functionDefinitionArguments
   : '(' (functionDefinitionPart ',')* functionDefinitionPart ')'
   ;

variableReference
   : '$' identifier
   ;

identifier
   : Identifier
   ;

literal
   : NumberLiteral
   | StringLiteral
   | listLiteral
   | rangeListLiteral
   | intervalLiteral
   | objectLiteral
   | pointLiteral
   ;

listLiteral
   : '[' (mathExpr ',')* mathExpr? ']'
   ;

pointLiteral
   : '(' mathExpr ',' mathExpr ')'
   ;

rangeListLiteral
   : '[' mathExpr (',' mathExpr)? ','? '...' ','? mathExpr ']' # TermedRangeListLiteral
   | '[' mathExpr ','? '...' ','? mathExpr ':' mathExpr ']' # SteppedRangeListLiteral
   ;

intervalLiteral
   : '[' mathExpr ':' mathExpr ']' # ContinuousIntervalLiteral
   | '[' mathExpr ':' mathExpr ':' mathExpr ']' # SteppedIntervalLiteral
   ;

piecewiseBranch
   : mathExpr ':' mathExpr
   ;

// assignmentList needed for onClick
objectBranch
   : identifier ':' (mathExpr | assignmentList)
   ;

objectInside
   : objectBranch (',' objectBranch)* ','?
   ;

objectLiteral
   : identifier? '@{' objectInside '}'
   ;
