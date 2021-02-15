lexer grammar DesmosPlusLexer;

// Numbers
fragment Digit:               [0-9];
fragment NonzeroDigit:        [1-9];

NumberLiteral
   : (NonzeroDigit Digit* | '0') ('.' Digit+)?
   ;

// Lists
Ellipsis:                     '...';

StringLiteral
   : '"' (~ ["\r\n\\]*) '"'
   ;

Let:                          'let';
Def:                          'def';
Note:                         'note';
Const:                        'const';
Show:                         'show';
Parametric:                   'parametric';
Simulation:                   'simulation';
Table:                        'table';
Folder:                       'folder';
Type:                         'type';

Default:                      'default';

SingleLineComment
   : '//' ~ [\r\n]* -> skip
   ;

Whitespace
   : [ \t\r\n\u000B\f\u00A0] -> skip
   ;

// Punctuation
OpenParen:                    '(';
CloseParen:                   ')';
OpenBracket:                  '[';
CloseBracket:                 ']';
OpenBrace:                    '{';
CloseBrace:                   '}';
Colon:                        ':';
DoubleColon:                  '::';
Comma:                        ',';
Semicolon:                    ';';
Dot:                          '.';
DollarSign:                   '$';
QuestionMark:                 '?';
ObjectOpen:                   '@{';
Define:                       '=';
Assign:                       '<-';

// Math Operators
Add:                          '+';
Subtract:                     '-';
Multiply:                     '*';
Divide:                       '/';
Modulus:                      '%';
Power:                        '^';

// Relational Operators
GreaterThanOrEqual:           '>=';
GreaterThan:                  '>';
LessThanOrEqual:              '<=';
LessThan:                     '<';
Equals:                       '==';
NotEquals:                    '!=';

// Boolean Operators
Not:                          'not';
And:                          'and';
Or:                           'or';

// Identifiers last so they have lower precedence than `not` and friends
Identifier
   : [a-zA-Z_] [a-zA-Z0-9_]*
   ;
