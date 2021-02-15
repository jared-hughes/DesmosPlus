parser grammar DesmosPlusParser;

options { tokenVocab = DesmosPlusLexer; }

program
   : statement* EOF
   ;

statement
   : nestableStatement
   | folderStatement
   ;

folderStatement
   : 'folder' name=mathExpr optionalMetadata ',' '[' nestableStatement* ']'
   ;

nestableStatement
   : 'let' identifier '=' mathExpr optionalMetadata # LetStatement
   | 'const' identifier '=' mathExpr # ConstStatement
   | 'def' identifier optionalInline='*'? functionDefinitionArguments '=' (mathExpr | 'default') # DefStatement
   | 'note' mathExpr # NoteStatement
   | 'show' mathExpr optionalMetadata # ShowStatement
   | 'parametric' mathExpr ',' assignment optionalMetadata # ParametricStatement
   | 'simulation' fps=mathExpr ',' assignmentList # SimulationStatement
   | 'table' xlist=mathExpr? '[' (tableLine ';')* tableLine? ']' # TableStatement
   | 'type' name=identifier '@{' typedefInside '}' # TypeDeclarationStatement
   ;

assignment
   : variableReference '<-' mathExpr
   ;

assignmentList
   : '[' (assignment ',')* assignment? ']'
   ;

tableLine
   : mathExpr optionalMetadata
   ;

optionalMetadata
   : (',' mathExpr)?
   ;

// The `#`s are labels for the listener
mathExpr
   : mathExpr '.' identifier # ObjectAccessExpression
   | mathExpr '[' mathExpr ']' # ListIndexExpression
   | identifier functionArguments # FunctionExpression
   | op='+' mathExpr # UnaryPlusExpression
   | op='-' mathExpr # UnaryMinusExpression
   | op='not' mathExpr # NotExpression
   | < assoc = right > mathExpr '^' mathExpr # PowerExpression
   | mathExpr op=('*' | '/' | '%') mathExpr # MultiplicativeExpression
   | mathExpr op=('+' | '-') mathExpr # AdditiveExpression
   | left=mathExpr op=('>=' | '>' | '<=' | '<' | '==' | '!=') right=mathExpr # ComparisonChainExpression
   | mathExpr 'and' mathExpr # AndExpression
   | mathExpr 'or' mathExpr # OrExpression
   | identifier # VariableExpression
   | literal # LiteralExpression
   | '{' piecewiseBranch (',' piecewiseBranch)* ','? '}' # PiecewiseExpression
   | '(' mathExpr ')' # ParenthesizedExpression
   ;

functionArguments
   : '(' (mathExpr ',')* mathExpr? ')'
   ;

functionDefinitionPart
   : variable=identifier (':' type=vartype)?
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
   : numberLiteral
   | stringLiteral
   | listLiteral
   | rangeListLiteral
   | intervalLiteral
   | objectLiteral
   | pointLiteral
   ;

numberLiteral
   : NumberLiteral
   ;

stringLiteral
   : StringLiteral
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
   : '[' mathExpr ':' mathExpr ']'
   | '[' mathExpr ':' mathExpr ':' mathExpr ']'
   ;

piecewiseBranch
   : condition=mathExpr ':' value=mathExpr
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

vartype
   : identifier # VartypeIdentifier
   | '[' vartype ']' #VartypeNested
   ;

typedefBranch
   : identifier ':' vartype
   ;

typedefInside
   : typedefBranch (',' typedefBranch)* ','?
   ;
