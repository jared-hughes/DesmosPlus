// Generated from DesmosPlusLexer.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00021\u0128\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0007\u0004l\n\u0004\f\u0004\u000e\u0004o\u000b\u0004",
    "\u0003\u0004\u0005\u0004r\n\u0004\u0003\u0004\u0003\u0004\u0006\u0004",
    "v\n\u0004\r\u0004\u000e\u0004w\u0005\u0004z\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0007\u0006\u0082",
    "\n\u0006\f\u0006\u000e\u0006\u0085\u000b\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00cd\n\u0011\f\u0011\u000e",
    "\u0011\u00d0\u000b\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 ",
    "\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003",
    ")\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003+\u0003,\u0003,\u0003",
    "-\u0003-\u0003-\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003",
    "0\u00030\u00030\u00030\u00031\u00031\u00031\u00032\u00032\u00072\u0124",
    "\n2\f2\u000e2\u0127\u000b2\u0002\u00023\u0003\u0002\u0005\u0002\u0007",
    "\u0003\t\u0004\u000b\u0005\r\u0006\u000f\u0007\u0011\b\u0013\t\u0015",
    "\n\u0017\u000b\u0019\f\u001b\r\u001d\u000e\u001f\u000f!\u0010#\u0011",
    "%\u0012\'\u0013)\u0014+\u0015-\u0016/\u00171\u00183\u00195\u001a7\u001b",
    "9\u001c;\u001d=\u001e?\u001fA C!E\"G#I$K%M&O\'Q(S)U*W+Y,[-]._/a0c1\u0003",
    "\u0002\t\u0003\u00022;\u0003\u00023;\u0006\u0002\f\f\u000f\u000f$$^",
    "^\u0004\u0002\f\f\u000f\u000f\u0005\u0002\u000b\u000f\"\"\u00a2\u00a2",
    "\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0002\u012c\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002",
    "G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003",
    "\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002",
    "\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002",
    "\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002",
    "\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002",
    "]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003",
    "\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0003e\u0003\u0002",
    "\u0002\u0002\u0005g\u0003\u0002\u0002\u0002\u0007q\u0003\u0002\u0002",
    "\u0002\t{\u0003\u0002\u0002\u0002\u000b\u007f\u0003\u0002\u0002\u0002",
    "\r\u0088\u0003\u0002\u0002\u0002\u000f\u008c\u0003\u0002\u0002\u0002",
    "\u0011\u0090\u0003\u0002\u0002\u0002\u0013\u0095\u0003\u0002\u0002\u0002",
    "\u0015\u009b\u0003\u0002\u0002\u0002\u0017\u00a0\u0003\u0002\u0002\u0002",
    "\u0019\u00ab\u0003\u0002\u0002\u0002\u001b\u00b6\u0003\u0002\u0002\u0002",
    "\u001d\u00bc\u0003\u0002\u0002\u0002\u001f\u00c3\u0003\u0002\u0002\u0002",
    "!\u00c8\u0003\u0002\u0002\u0002#\u00d3\u0003\u0002\u0002\u0002%\u00d7",
    "\u0003\u0002\u0002\u0002\'\u00d9\u0003\u0002\u0002\u0002)\u00db\u0003",
    "\u0002\u0002\u0002+\u00dd\u0003\u0002\u0002\u0002-\u00df\u0003\u0002",
    "\u0002\u0002/\u00e1\u0003\u0002\u0002\u00021\u00e3\u0003\u0002\u0002",
    "\u00023\u00e5\u0003\u0002\u0002\u00025\u00e8\u0003\u0002\u0002\u0002",
    "7\u00ea\u0003\u0002\u0002\u00029\u00ec\u0003\u0002\u0002\u0002;\u00ee",
    "\u0003\u0002\u0002\u0002=\u00f0\u0003\u0002\u0002\u0002?\u00f2\u0003",
    "\u0002\u0002\u0002A\u00f5\u0003\u0002\u0002\u0002C\u00f7\u0003\u0002",
    "\u0002\u0002E\u00fa\u0003\u0002\u0002\u0002G\u00fc\u0003\u0002\u0002",
    "\u0002I\u00fe\u0003\u0002\u0002\u0002K\u0100\u0003\u0002\u0002\u0002",
    "M\u0102\u0003\u0002\u0002\u0002O\u0104\u0003\u0002\u0002\u0002Q\u0106",
    "\u0003\u0002\u0002\u0002S\u0109\u0003\u0002\u0002\u0002U\u010b\u0003",
    "\u0002\u0002\u0002W\u010e\u0003\u0002\u0002\u0002Y\u0110\u0003\u0002",
    "\u0002\u0002[\u0113\u0003\u0002\u0002\u0002]\u0116\u0003\u0002\u0002",
    "\u0002_\u011a\u0003\u0002\u0002\u0002a\u011e\u0003\u0002\u0002\u0002",
    "c\u0121\u0003\u0002\u0002\u0002ef\t\u0002\u0002\u0002f\u0004\u0003\u0002",
    "\u0002\u0002gh\t\u0003\u0002\u0002h\u0006\u0003\u0002\u0002\u0002im",
    "\u0005\u0005\u0003\u0002jl\u0005\u0003\u0002\u0002kj\u0003\u0002\u0002",
    "\u0002lo\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002",
    "\u0002\u0002nr\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002pr\u0007",
    "2\u0002\u0002qi\u0003\u0002\u0002\u0002qp\u0003\u0002\u0002\u0002ry",
    "\u0003\u0002\u0002\u0002su\u00070\u0002\u0002tv\u0005\u0003\u0002\u0002",
    "ut\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002",
    "\u0002wx\u0003\u0002\u0002\u0002xz\u0003\u0002\u0002\u0002ys\u0003\u0002",
    "\u0002\u0002yz\u0003\u0002\u0002\u0002z\b\u0003\u0002\u0002\u0002{|",
    "\u00070\u0002\u0002|}\u00070\u0002\u0002}~\u00070\u0002\u0002~\n\u0003",
    "\u0002\u0002\u0002\u007f\u0083\u0007$\u0002\u0002\u0080\u0082\n\u0004",
    "\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0082\u0085\u0003\u0002",
    "\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002",
    "\u0002\u0002\u0084\u0086\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0007$\u0002\u0002\u0087\f\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007n\u0002\u0002\u0089\u008a\u0007g\u0002\u0002",
    "\u008a\u008b\u0007v\u0002\u0002\u008b\u000e\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0007f\u0002\u0002\u008d\u008e\u0007g\u0002\u0002\u008e",
    "\u008f\u0007h\u0002\u0002\u008f\u0010\u0003\u0002\u0002\u0002\u0090",
    "\u0091\u0007p\u0002\u0002\u0091\u0092\u0007q\u0002\u0002\u0092\u0093",
    "\u0007v\u0002\u0002\u0093\u0094\u0007g\u0002\u0002\u0094\u0012\u0003",
    "\u0002\u0002\u0002\u0095\u0096\u0007e\u0002\u0002\u0096\u0097\u0007",
    "q\u0002\u0002\u0097\u0098\u0007p\u0002\u0002\u0098\u0099\u0007u\u0002",
    "\u0002\u0099\u009a\u0007v\u0002\u0002\u009a\u0014\u0003\u0002\u0002",
    "\u0002\u009b\u009c\u0007u\u0002\u0002\u009c\u009d\u0007j\u0002\u0002",
    "\u009d\u009e\u0007q\u0002\u0002\u009e\u009f\u0007y\u0002\u0002\u009f",
    "\u0016\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007r\u0002\u0002\u00a1",
    "\u00a2\u0007c\u0002\u0002\u00a2\u00a3\u0007t\u0002\u0002\u00a3\u00a4",
    "\u0007c\u0002\u0002\u00a4\u00a5\u0007o\u0002\u0002\u00a5\u00a6\u0007",
    "g\u0002\u0002\u00a6\u00a7\u0007v\u0002\u0002\u00a7\u00a8\u0007t\u0002",
    "\u0002\u00a8\u00a9\u0007k\u0002\u0002\u00a9\u00aa\u0007e\u0002\u0002",
    "\u00aa\u0018\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007u\u0002\u0002",
    "\u00ac\u00ad\u0007k\u0002\u0002\u00ad\u00ae\u0007o\u0002\u0002\u00ae",
    "\u00af\u0007w\u0002\u0002\u00af\u00b0\u0007n\u0002\u0002\u00b0\u00b1",
    "\u0007c\u0002\u0002\u00b1\u00b2\u0007v\u0002\u0002\u00b2\u00b3\u0007",
    "k\u0002\u0002\u00b3\u00b4\u0007q\u0002\u0002\u00b4\u00b5\u0007p\u0002",
    "\u0002\u00b5\u001a\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007v\u0002",
    "\u0002\u00b7\u00b8\u0007c\u0002\u0002\u00b8\u00b9\u0007d\u0002\u0002",
    "\u00b9\u00ba\u0007n\u0002\u0002\u00ba\u00bb\u0007g\u0002\u0002\u00bb",
    "\u001c\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007h\u0002\u0002\u00bd",
    "\u00be\u0007q\u0002\u0002\u00be\u00bf\u0007n\u0002\u0002\u00bf\u00c0",
    "\u0007f\u0002\u0002\u00c0\u00c1\u0007g\u0002\u0002\u00c1\u00c2\u0007",
    "t\u0002\u0002\u00c2\u001e\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007",
    "v\u0002\u0002\u00c4\u00c5\u0007{\u0002\u0002\u00c5\u00c6\u0007r\u0002",
    "\u0002\u00c6\u00c7\u0007g\u0002\u0002\u00c7 \u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u00071\u0002\u0002\u00c9\u00ca\u00071\u0002\u0002\u00ca",
    "\u00ce\u0003\u0002\u0002\u0002\u00cb\u00cd\n\u0005\u0002\u0002\u00cc",
    "\u00cb\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002\u0002\u00ce",
    "\u00cc\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf",
    "\u00d1\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1",
    "\u00d2\b\u0011\u0002\u0002\u00d2\"\u0003\u0002\u0002\u0002\u00d3\u00d4",
    "\t\u0006\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d6",
    "\b\u0012\u0002\u0002\u00d6$\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007",
    "*\u0002\u0002\u00d8&\u0003\u0002\u0002\u0002\u00d9\u00da\u0007+\u0002",
    "\u0002\u00da(\u0003\u0002\u0002\u0002\u00db\u00dc\u0007]\u0002\u0002",
    "\u00dc*\u0003\u0002\u0002\u0002\u00dd\u00de\u0007_\u0002\u0002\u00de",
    ",\u0003\u0002\u0002\u0002\u00df\u00e0\u0007}\u0002\u0002\u00e0.\u0003",
    "\u0002\u0002\u0002\u00e1\u00e2\u0007\u007f\u0002\u0002\u00e20\u0003",
    "\u0002\u0002\u0002\u00e3\u00e4\u0007<\u0002\u0002\u00e42\u0003\u0002",
    "\u0002\u0002\u00e5\u00e6\u0007<\u0002\u0002\u00e6\u00e7\u0007<\u0002",
    "\u0002\u00e74\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007.\u0002\u0002",
    "\u00e96\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007=\u0002\u0002\u00eb",
    "8\u0003\u0002\u0002\u0002\u00ec\u00ed\u00070\u0002\u0002\u00ed:\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0007&\u0002\u0002\u00ef<\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0007A\u0002\u0002\u00f1>\u0003\u0002\u0002",
    "\u0002\u00f2\u00f3\u0007B\u0002\u0002\u00f3\u00f4\u0007}\u0002\u0002",
    "\u00f4@\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007?\u0002\u0002\u00f6",
    "B\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007>\u0002\u0002\u00f8\u00f9",
    "\u0007/\u0002\u0002\u00f9D\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007",
    "-\u0002\u0002\u00fbF\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007/\u0002",
    "\u0002\u00fdH\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007,\u0002\u0002",
    "\u00ffJ\u0003\u0002\u0002\u0002\u0100\u0101\u00071\u0002\u0002\u0101",
    "L\u0003\u0002\u0002\u0002\u0102\u0103\u0007\'\u0002\u0002\u0103N\u0003",
    "\u0002\u0002\u0002\u0104\u0105\u0007`\u0002\u0002\u0105P\u0003\u0002",
    "\u0002\u0002\u0106\u0107\u0007@\u0002\u0002\u0107\u0108\u0007?\u0002",
    "\u0002\u0108R\u0003\u0002\u0002\u0002\u0109\u010a\u0007@\u0002\u0002",
    "\u010aT\u0003\u0002\u0002\u0002\u010b\u010c\u0007>\u0002\u0002\u010c",
    "\u010d\u0007?\u0002\u0002\u010dV\u0003\u0002\u0002\u0002\u010e\u010f",
    "\u0007>\u0002\u0002\u010fX\u0003\u0002\u0002\u0002\u0110\u0111\u0007",
    "?\u0002\u0002\u0111\u0112\u0007?\u0002\u0002\u0112Z\u0003\u0002\u0002",
    "\u0002\u0113\u0114\u0007#\u0002\u0002\u0114\u0115\u0007?\u0002\u0002",
    "\u0115\\\u0003\u0002\u0002\u0002\u0116\u0117\u0007p\u0002\u0002\u0117",
    "\u0118\u0007q\u0002\u0002\u0118\u0119\u0007v\u0002\u0002\u0119^\u0003",
    "\u0002\u0002\u0002\u011a\u011b\u0007c\u0002\u0002\u011b\u011c\u0007",
    "p\u0002\u0002\u011c\u011d\u0007f\u0002\u0002\u011d`\u0003\u0002\u0002",
    "\u0002\u011e\u011f\u0007q\u0002\u0002\u011f\u0120\u0007t\u0002\u0002",
    "\u0120b\u0003\u0002\u0002\u0002\u0121\u0125\t\u0007\u0002\u0002\u0122",
    "\u0124\t\b\u0002\u0002\u0123\u0122\u0003\u0002\u0002\u0002\u0124\u0127",
    "\u0003\u0002\u0002\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0125\u0126",
    "\u0003\u0002\u0002\u0002\u0126d\u0003\u0002\u0002\u0002\u0127\u0125",
    "\u0003\u0002\u0002\u0002\n\u0002mqwy\u0083\u00ce\u0125\u0003\b\u0002",
    "\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class DesmosPlusLexer extends antlr4.Lexer {

    static grammarFileName = "DesmosPlusLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'...'", null, "'let'", "'def'", "'note'", 
                         "'const'", "'show'", "'parametric'", "'simulation'", 
                         "'table'", "'folder'", "'type'", null, null, "'('", 
                         "')'", "'['", "']'", "'{'", "'}'", "':'", "'::'", 
                         "','", "';'", "'.'", "'$'", "'?'", "'@{'", "'='", 
                         "'<-'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", 
                         "'>='", "'>'", "'<='", "'<'", "'=='", "'!='", "'not'", 
                         "'and'", "'or'" ];
	static symbolicNames = [ null, "NumberLiteral", "Ellipsis", "StringLiteral", 
                          "Let", "Def", "Note", "Const", "Show", "Parametric", 
                          "Simulation", "Table", "Folder", "Type", "SingleLineComment", 
                          "Whitespace", "OpenParen", "CloseParen", "OpenBracket", 
                          "CloseBracket", "OpenBrace", "CloseBrace", "Colon", 
                          "DoubleColon", "Comma", "Semicolon", "Dot", "DollarSign", 
                          "QuestionMark", "ObjectOpen", "Define", "Assign", 
                          "Add", "Subtract", "Multiply", "Divide", "Modulus", 
                          "Power", "GreaterThanOrEqual", "GreaterThan", 
                          "LessThanOrEqual", "LessThan", "Equals", "NotEquals", 
                          "Not", "And", "Or", "Identifier" ];
	static ruleNames = [ "Digit", "NonzeroDigit", "NumberLiteral", "Ellipsis", 
                      "StringLiteral", "Let", "Def", "Note", "Const", "Show", 
                      "Parametric", "Simulation", "Table", "Folder", "Type", 
                      "SingleLineComment", "Whitespace", "OpenParen", "CloseParen", 
                      "OpenBracket", "CloseBracket", "OpenBrace", "CloseBrace", 
                      "Colon", "DoubleColon", "Comma", "Semicolon", "Dot", 
                      "DollarSign", "QuestionMark", "ObjectOpen", "Define", 
                      "Assign", "Add", "Subtract", "Multiply", "Divide", 
                      "Modulus", "Power", "GreaterThanOrEqual", "GreaterThan", 
                      "LessThanOrEqual", "LessThan", "Equals", "NotEquals", 
                      "Not", "And", "Or", "Identifier" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

DesmosPlusLexer.EOF = antlr4.Token.EOF;
DesmosPlusLexer.NumberLiteral = 1;
DesmosPlusLexer.Ellipsis = 2;
DesmosPlusLexer.StringLiteral = 3;
DesmosPlusLexer.Let = 4;
DesmosPlusLexer.Def = 5;
DesmosPlusLexer.Note = 6;
DesmosPlusLexer.Const = 7;
DesmosPlusLexer.Show = 8;
DesmosPlusLexer.Parametric = 9;
DesmosPlusLexer.Simulation = 10;
DesmosPlusLexer.Table = 11;
DesmosPlusLexer.Folder = 12;
DesmosPlusLexer.Type = 13;
DesmosPlusLexer.SingleLineComment = 14;
DesmosPlusLexer.Whitespace = 15;
DesmosPlusLexer.OpenParen = 16;
DesmosPlusLexer.CloseParen = 17;
DesmosPlusLexer.OpenBracket = 18;
DesmosPlusLexer.CloseBracket = 19;
DesmosPlusLexer.OpenBrace = 20;
DesmosPlusLexer.CloseBrace = 21;
DesmosPlusLexer.Colon = 22;
DesmosPlusLexer.DoubleColon = 23;
DesmosPlusLexer.Comma = 24;
DesmosPlusLexer.Semicolon = 25;
DesmosPlusLexer.Dot = 26;
DesmosPlusLexer.DollarSign = 27;
DesmosPlusLexer.QuestionMark = 28;
DesmosPlusLexer.ObjectOpen = 29;
DesmosPlusLexer.Define = 30;
DesmosPlusLexer.Assign = 31;
DesmosPlusLexer.Add = 32;
DesmosPlusLexer.Subtract = 33;
DesmosPlusLexer.Multiply = 34;
DesmosPlusLexer.Divide = 35;
DesmosPlusLexer.Modulus = 36;
DesmosPlusLexer.Power = 37;
DesmosPlusLexer.GreaterThanOrEqual = 38;
DesmosPlusLexer.GreaterThan = 39;
DesmosPlusLexer.LessThanOrEqual = 40;
DesmosPlusLexer.LessThan = 41;
DesmosPlusLexer.Equals = 42;
DesmosPlusLexer.NotEquals = 43;
DesmosPlusLexer.Not = 44;
DesmosPlusLexer.And = 45;
DesmosPlusLexer.Or = 46;
DesmosPlusLexer.Identifier = 47;


