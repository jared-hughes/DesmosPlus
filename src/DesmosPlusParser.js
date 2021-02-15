// Generated from DesmosPlusParser.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DesmosPlusParserVisitor from './DesmosPlusParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00031\u0191\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0007\u0002",
    "<\n\u0002\f\u0002\u000e\u0002?\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003E\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004M\n\u0004\f\u0004",
    "\u000e\u0004P\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005b\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005{\n\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005\u0081\n\u0005\f\u0005\u000e\u0005\u0084",
    "\u000b\u0005\u0003\u0005\u0005\u0005\u0087\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005\u0090\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u009a\n",
    "\u0007\f\u0007\u000e\u0007\u009d\u000b\u0007\u0003\u0007\u0005\u0007",
    "\u00a0\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0005\t\u00a9\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u00bb\n\n\f\n\u000e\n\u00be\u000b\n\u0003",
    "\n\u0005\n\u00c1\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0005\n\u00c9\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0007\n\u00e5\n\n\f\n\u000e\n\u00e8\u000b\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00ee\n\u000b\f\u000b\u000e",
    "\u000b\u00f1\u000b\u000b\u0003\u000b\u0005\u000b\u00f4\n\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0005\f\u00fb\n\f\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0007\r\u0101\n\r\f\r\u000e\r\u0104\u000b\r",
    "\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u0115\n\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0007\u0013\u011f\n\u0013\f\u0013\u000e\u0013\u0122\u000b\u0013",
    "\u0003\u0013\u0005\u0013\u0125\n\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0133\n\u0015",
    "\u0003\u0015\u0005\u0015\u0136\n\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u013a\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u0142\n\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u0146\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u014d\n\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u015d\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018",
    "\u0167\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u016c",
    "\n\u0019\f\u0019\u000e\u0019\u016f\u000b\u0019\u0003\u0019\u0005\u0019",
    "\u0172\n\u0019\u0003\u001a\u0005\u001a\u0175\n\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0005\u001b\u0180\n\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d",
    "\u0189\n\u001d\f\u001d\u000e\u001d\u018c\u000b\u001d\u0003\u001d\u0005",
    "\u001d\u018f\n\u001d\u0003\u001d\u0002\u0003\u0012\u001e\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468\u0002\u0005\u0003\u0002$&\u0003\u0002\"#\u0003\u0002(",
    "-\u0002\u01b1\u0002=\u0003\u0002\u0002\u0002\u0004D\u0003\u0002\u0002",
    "\u0002\u0006F\u0003\u0002\u0002\u0002\b\u008f\u0003\u0002\u0002\u0002",
    "\n\u0091\u0003\u0002\u0002\u0002\f\u0095\u0003\u0002\u0002\u0002\u000e",
    "\u00a3\u0003\u0002\u0002\u0002\u0010\u00a8\u0003\u0002\u0002\u0002\u0012",
    "\u00c8\u0003\u0002\u0002\u0002\u0014\u00e9\u0003\u0002\u0002\u0002\u0016",
    "\u00f7\u0003\u0002\u0002\u0002\u0018\u00fc\u0003\u0002\u0002\u0002\u001a",
    "\u0108\u0003\u0002\u0002\u0002\u001c\u010b\u0003\u0002\u0002\u0002\u001e",
    "\u0114\u0003\u0002\u0002\u0002 \u0116\u0003\u0002\u0002\u0002\"\u0118",
    "\u0003\u0002\u0002\u0002$\u011a\u0003\u0002\u0002\u0002&\u0128\u0003",
    "\u0002\u0002\u0002(\u014c\u0003\u0002\u0002\u0002*\u015c\u0003\u0002",
    "\u0002\u0002,\u015e\u0003\u0002\u0002\u0002.\u0162\u0003\u0002\u0002",
    "\u00020\u0168\u0003\u0002\u0002\u00022\u0174\u0003\u0002\u0002\u0002",
    "4\u017f\u0003\u0002\u0002\u00026\u0181\u0003\u0002\u0002\u00028\u0185",
    "\u0003\u0002\u0002\u0002:<\u0005\u0004\u0003\u0002;:\u0003\u0002\u0002",
    "\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002",
    "\u0002\u0002>@\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@A\u0007",
    "\u0002\u0002\u0003A\u0003\u0003\u0002\u0002\u0002BE\u0005\b\u0005\u0002",
    "CE\u0005\u0006\u0004\u0002DB\u0003\u0002\u0002\u0002DC\u0003\u0002\u0002",
    "\u0002E\u0005\u0003\u0002\u0002\u0002FG\u0007\u000e\u0002\u0002GH\u0005",
    "\u0012\n\u0002HI\u0005\u0010\t\u0002IJ\u0007\u001a\u0002\u0002JN\u0007",
    "\u0014\u0002\u0002KM\u0005\b\u0005\u0002LK\u0003\u0002\u0002\u0002M",
    "P\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002",
    "\u0002OQ\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u0007\u0015",
    "\u0002\u0002R\u0007\u0003\u0002\u0002\u0002ST\u0007\u0006\u0002\u0002",
    "TU\u0005\u001c\u000f\u0002UV\u0007 \u0002\u0002VW\u0005\u0012\n\u0002",
    "WX\u0005\u0010\t\u0002X\u0090\u0003\u0002\u0002\u0002YZ\u0007\t\u0002",
    "\u0002Z[\u0005\u001c\u000f\u0002[\\\u0007 \u0002\u0002\\]\u0005\u0012",
    "\n\u0002]\u0090\u0003\u0002\u0002\u0002^_\u0007\u0007\u0002\u0002_a",
    "\u0005\u001c\u000f\u0002`b\u0007$\u0002\u0002a`\u0003\u0002\u0002\u0002",
    "ab\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0005\u0018\r",
    "\u0002de\u0007 \u0002\u0002ef\u0005\u0012\n\u0002f\u0090\u0003\u0002",
    "\u0002\u0002gh\u0007\b\u0002\u0002h\u0090\u0005\u0012\n\u0002ij\u0007",
    "\n\u0002\u0002jk\u0005\u0012\n\u0002kl\u0005\u0010\t\u0002l\u0090\u0003",
    "\u0002\u0002\u0002mn\u0007\u000b\u0002\u0002no\u0005\u0012\n\u0002o",
    "p\u0007\u001a\u0002\u0002pq\u0005\n\u0006\u0002qr\u0005\u0010\t\u0002",
    "r\u0090\u0003\u0002\u0002\u0002st\u0007\f\u0002\u0002tu\u0005\u0012",
    "\n\u0002uv\u0007\u001a\u0002\u0002vw\u0005\f\u0007\u0002w\u0090\u0003",
    "\u0002\u0002\u0002xz\u0007\r\u0002\u0002y{\u0005\u0012\n\u0002zy\u0003",
    "\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002",
    "|\u0082\u0007\u0014\u0002\u0002}~\u0005\u000e\b\u0002~\u007f\u0007\u001b",
    "\u0002\u0002\u007f\u0081\u0003\u0002\u0002\u0002\u0080}\u0003\u0002",
    "\u0002\u0002\u0081\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002",
    "\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0085\u0087\u0005\u000e",
    "\b\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0090\u0007\u0015",
    "\u0002\u0002\u0089\u008a\u0007\u000f\u0002\u0002\u008a\u008b\u0005\u001c",
    "\u000f\u0002\u008b\u008c\u0007\u001f\u0002\u0002\u008c\u008d\u00058",
    "\u001d\u0002\u008d\u008e\u0007\u0017\u0002\u0002\u008e\u0090\u0003\u0002",
    "\u0002\u0002\u008fS\u0003\u0002\u0002\u0002\u008fY\u0003\u0002\u0002",
    "\u0002\u008f^\u0003\u0002\u0002\u0002\u008fg\u0003\u0002\u0002\u0002",
    "\u008fi\u0003\u0002\u0002\u0002\u008fm\u0003\u0002\u0002\u0002\u008f",
    "s\u0003\u0002\u0002\u0002\u008fx\u0003\u0002\u0002\u0002\u008f\u0089",
    "\u0003\u0002\u0002\u0002\u0090\t\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0005\u001a\u000e\u0002\u0092\u0093\u0007!\u0002\u0002\u0093\u0094",
    "\u0005\u0012\n\u0002\u0094\u000b\u0003\u0002\u0002\u0002\u0095\u009b",
    "\u0007\u0014\u0002\u0002\u0096\u0097\u0005\n\u0006\u0002\u0097\u0098",
    "\u0007\u001a\u0002\u0002\u0098\u009a\u0003\u0002\u0002\u0002\u0099\u0096",
    "\u0003\u0002\u0002\u0002\u009a\u009d\u0003\u0002\u0002\u0002\u009b\u0099",
    "\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009f",
    "\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009e\u00a0",
    "\u0005\n\u0006\u0002\u009f\u009e\u0003\u0002\u0002\u0002\u009f\u00a0",
    "\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a2",
    "\u0007\u0015\u0002\u0002\u00a2\r\u0003\u0002\u0002\u0002\u00a3\u00a4",
    "\u0005\u0012\n\u0002\u00a4\u00a5\u0005\u0010\t\u0002\u00a5\u000f\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\u0007\u001a\u0002\u0002\u00a7\u00a9\u0005",
    "\u0012\n\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003",
    "\u0002\u0002\u0002\u00a9\u0011\u0003\u0002\u0002\u0002\u00aa\u00ab\b",
    "\n\u0001\u0002\u00ab\u00ac\u0005\u001c\u000f\u0002\u00ac\u00ad\u0005",
    "\u0014\u000b\u0002\u00ad\u00c9\u0003\u0002\u0002\u0002\u00ae\u00af\u0007",
    "\"\u0002\u0002\u00af\u00c9\u0005\u0012\n\u000f\u00b0\u00b1\u0007#\u0002",
    "\u0002\u00b1\u00c9\u0005\u0012\n\u000e\u00b2\u00b3\u0007.\u0002\u0002",
    "\u00b3\u00c9\u0005\u0012\n\r\u00b4\u00c9\u0005\u001c\u000f\u0002\u00b5",
    "\u00c9\u0005\u001e\u0010\u0002\u00b6\u00b7\u0007\u0016\u0002\u0002\u00b7",
    "\u00bc\u0005,\u0017\u0002\u00b8\u00b9\u0007\u001a\u0002\u0002\u00b9",
    "\u00bb\u0005,\u0017\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb",
    "\u00be\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc",
    "\u00bd\u0003\u0002\u0002\u0002\u00bd\u00c0\u0003\u0002\u0002\u0002\u00be",
    "\u00bc\u0003\u0002\u0002\u0002\u00bf\u00c1\u0007\u001a\u0002\u0002\u00c0",
    "\u00bf\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1",
    "\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007\u0017\u0002\u0002\u00c3",
    "\u00c9\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007\u0012\u0002\u0002\u00c5",
    "\u00c6\u0005\u0012\n\u0002\u00c6\u00c7\u0007\u0013\u0002\u0002\u00c7",
    "\u00c9\u0003\u0002\u0002\u0002\u00c8\u00aa\u0003\u0002\u0002\u0002\u00c8",
    "\u00ae\u0003\u0002\u0002\u0002\u00c8\u00b0\u0003\u0002\u0002\u0002\u00c8",
    "\u00b2\u0003\u0002\u0002\u0002\u00c8\u00b4\u0003\u0002\u0002\u0002\u00c8",
    "\u00b5\u0003\u0002\u0002\u0002\u00c8\u00b6\u0003\u0002\u0002\u0002\u00c8",
    "\u00c4\u0003\u0002\u0002\u0002\u00c9\u00e6\u0003\u0002\u0002\u0002\u00ca",
    "\u00cb\f\f\u0002\u0002\u00cb\u00cc\u0007\'\u0002\u0002\u00cc\u00e5\u0005",
    "\u0012\n\f\u00cd\u00ce\f\u000b\u0002\u0002\u00ce\u00cf\t\u0002\u0002",
    "\u0002\u00cf\u00e5\u0005\u0012\n\f\u00d0\u00d1\f\n\u0002\u0002\u00d1",
    "\u00d2\t\u0003\u0002\u0002\u00d2\u00e5\u0005\u0012\n\u000b\u00d3\u00d4",
    "\f\t\u0002\u0002\u00d4\u00d5\t\u0004\u0002\u0002\u00d5\u00e5\u0005\u0012",
    "\n\n\u00d6\u00d7\f\b\u0002\u0002\u00d7\u00d8\u0007/\u0002\u0002\u00d8",
    "\u00e5\u0005\u0012\n\t\u00d9\u00da\f\u0007\u0002\u0002\u00da\u00db\u0007",
    "0\u0002\u0002\u00db\u00e5\u0005\u0012\n\b\u00dc\u00dd\f\u0012\u0002",
    "\u0002\u00dd\u00de\u0007\u001c\u0002\u0002\u00de\u00e5\u0005\u001c\u000f",
    "\u0002\u00df\u00e0\f\u0011\u0002\u0002\u00e0\u00e1\u0007\u0014\u0002",
    "\u0002\u00e1\u00e2\u0005\u0012\n\u0002\u00e2\u00e3\u0007\u0015\u0002",
    "\u0002\u00e3\u00e5\u0003\u0002\u0002\u0002\u00e4\u00ca\u0003\u0002\u0002",
    "\u0002\u00e4\u00cd\u0003\u0002\u0002\u0002\u00e4\u00d0\u0003\u0002\u0002",
    "\u0002\u00e4\u00d3\u0003\u0002\u0002\u0002\u00e4\u00d6\u0003\u0002\u0002",
    "\u0002\u00e4\u00d9\u0003\u0002\u0002\u0002\u00e4\u00dc\u0003\u0002\u0002",
    "\u0002\u00e4\u00df\u0003\u0002\u0002\u0002\u00e5\u00e8\u0003\u0002\u0002",
    "\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002",
    "\u0002\u00e7\u0013\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002",
    "\u0002\u00e9\u00ef\u0007\u0012\u0002\u0002\u00ea\u00eb\u0005\u0012\n",
    "\u0002\u00eb\u00ec\u0007\u001a\u0002\u0002\u00ec\u00ee\u0003\u0002\u0002",
    "\u0002\u00ed\u00ea\u0003\u0002\u0002\u0002\u00ee\u00f1\u0003\u0002\u0002",
    "\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002",
    "\u0002\u00f0\u00f3\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002",
    "\u0002\u00f2\u00f4\u0005\u0012\n\u0002\u00f3\u00f2\u0003\u0002\u0002",
    "\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002",
    "\u0002\u00f5\u00f6\u0007\u0013\u0002\u0002\u00f6\u0015\u0003\u0002\u0002",
    "\u0002\u00f7\u00fa\u0005\u001c\u000f\u0002\u00f8\u00f9\u0007\u0018\u0002",
    "\u0002\u00f9\u00fb\u00054\u001b\u0002\u00fa\u00f8\u0003\u0002\u0002",
    "\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u0017\u0003\u0002\u0002",
    "\u0002\u00fc\u0102\u0007\u0012\u0002\u0002\u00fd\u00fe\u0005\u0016\f",
    "\u0002\u00fe\u00ff\u0007\u001a\u0002\u0002\u00ff\u0101\u0003\u0002\u0002",
    "\u0002\u0100\u00fd\u0003\u0002\u0002\u0002\u0101\u0104\u0003\u0002\u0002",
    "\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002",
    "\u0002\u0103\u0105\u0003\u0002\u0002\u0002\u0104\u0102\u0003\u0002\u0002",
    "\u0002\u0105\u0106\u0005\u0016\f\u0002\u0106\u0107\u0007\u0013\u0002",
    "\u0002\u0107\u0019\u0003\u0002\u0002\u0002\u0108\u0109\u0007\u001d\u0002",
    "\u0002\u0109\u010a\u0005\u001c\u000f\u0002\u010a\u001b\u0003\u0002\u0002",
    "\u0002\u010b\u010c\u00071\u0002\u0002\u010c\u001d\u0003\u0002\u0002",
    "\u0002\u010d\u0115\u0005 \u0011\u0002\u010e\u0115\u0005\"\u0012\u0002",
    "\u010f\u0115\u0005$\u0013\u0002\u0110\u0115\u0005(\u0015\u0002\u0111",
    "\u0115\u0005*\u0016\u0002\u0112\u0115\u00052\u001a\u0002\u0113\u0115",
    "\u0005&\u0014\u0002\u0114\u010d\u0003\u0002\u0002\u0002\u0114\u010e",
    "\u0003\u0002\u0002\u0002\u0114\u010f\u0003\u0002\u0002\u0002\u0114\u0110",
    "\u0003\u0002\u0002\u0002\u0114\u0111\u0003\u0002\u0002\u0002\u0114\u0112",
    "\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u0115\u001f",
    "\u0003\u0002\u0002\u0002\u0116\u0117\u0007\u0003\u0002\u0002\u0117!",
    "\u0003\u0002\u0002\u0002\u0118\u0119\u0007\u0005\u0002\u0002\u0119#",
    "\u0003\u0002\u0002\u0002\u011a\u0120\u0007\u0014\u0002\u0002\u011b\u011c",
    "\u0005\u0012\n\u0002\u011c\u011d\u0007\u001a\u0002\u0002\u011d\u011f",
    "\u0003\u0002\u0002\u0002\u011e\u011b\u0003\u0002\u0002\u0002\u011f\u0122",
    "\u0003\u0002\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u0121",
    "\u0003\u0002\u0002\u0002\u0121\u0124\u0003\u0002\u0002\u0002\u0122\u0120",
    "\u0003\u0002\u0002\u0002\u0123\u0125\u0005\u0012\n\u0002\u0124\u0123",
    "\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125\u0126",
    "\u0003\u0002\u0002\u0002\u0126\u0127\u0007\u0015\u0002\u0002\u0127%",
    "\u0003\u0002\u0002\u0002\u0128\u0129\u0007\u0012\u0002\u0002\u0129\u012a",
    "\u0005\u0012\n\u0002\u012a\u012b\u0007\u001a\u0002\u0002\u012b\u012c",
    "\u0005\u0012\n\u0002\u012c\u012d\u0007\u0013\u0002\u0002\u012d\'\u0003",
    "\u0002\u0002\u0002\u012e\u012f\u0007\u0014\u0002\u0002\u012f\u0132\u0005",
    "\u0012\n\u0002\u0130\u0131\u0007\u001a\u0002\u0002\u0131\u0133\u0005",
    "\u0012\n\u0002\u0132\u0130\u0003\u0002\u0002\u0002\u0132\u0133\u0003",
    "\u0002\u0002\u0002\u0133\u0135\u0003\u0002\u0002\u0002\u0134\u0136\u0007",
    "\u001a\u0002\u0002\u0135\u0134\u0003\u0002\u0002\u0002\u0135\u0136\u0003",
    "\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u0139\u0007",
    "\u0004\u0002\u0002\u0138\u013a\u0007\u001a\u0002\u0002\u0139\u0138\u0003",
    "\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a\u013b\u0003",
    "\u0002\u0002\u0002\u013b\u013c\u0005\u0012\n\u0002\u013c\u013d\u0007",
    "\u0015\u0002\u0002\u013d\u014d\u0003\u0002\u0002\u0002\u013e\u013f\u0007",
    "\u0014\u0002\u0002\u013f\u0141\u0005\u0012\n\u0002\u0140\u0142\u0007",
    "\u001a\u0002\u0002\u0141\u0140\u0003\u0002\u0002\u0002\u0141\u0142\u0003",
    "\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0143\u0145\u0007",
    "\u0004\u0002\u0002\u0144\u0146\u0007\u001a\u0002\u0002\u0145\u0144\u0003",
    "\u0002\u0002\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0147\u0003",
    "\u0002\u0002\u0002\u0147\u0148\u0005\u0012\n\u0002\u0148\u0149\u0007",
    "\u0018\u0002\u0002\u0149\u014a\u0005\u0012\n\u0002\u014a\u014b\u0007",
    "\u0015\u0002\u0002\u014b\u014d\u0003\u0002\u0002\u0002\u014c\u012e\u0003",
    "\u0002\u0002\u0002\u014c\u013e\u0003\u0002\u0002\u0002\u014d)\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u0007\u0014\u0002\u0002\u014f\u0150\u0005",
    "\u0012\n\u0002\u0150\u0151\u0007\u0018\u0002\u0002\u0151\u0152\u0005",
    "\u0012\n\u0002\u0152\u0153\u0007\u0015\u0002\u0002\u0153\u015d\u0003",
    "\u0002\u0002\u0002\u0154\u0155\u0007\u0014\u0002\u0002\u0155\u0156\u0005",
    "\u0012\n\u0002\u0156\u0157\u0007\u0018\u0002\u0002\u0157\u0158\u0005",
    "\u0012\n\u0002\u0158\u0159\u0007\u0018\u0002\u0002\u0159\u015a\u0005",
    "\u0012\n\u0002\u015a\u015b\u0007\u0015\u0002\u0002\u015b\u015d\u0003",
    "\u0002\u0002\u0002\u015c\u014e\u0003\u0002\u0002\u0002\u015c\u0154\u0003",
    "\u0002\u0002\u0002\u015d+\u0003\u0002\u0002\u0002\u015e\u015f\u0005",
    "\u0012\n\u0002\u015f\u0160\u0007\u0018\u0002\u0002\u0160\u0161\u0005",
    "\u0012\n\u0002\u0161-\u0003\u0002\u0002\u0002\u0162\u0163\u0005\u001c",
    "\u000f\u0002\u0163\u0166\u0007\u0018\u0002\u0002\u0164\u0167\u0005\u0012",
    "\n\u0002\u0165\u0167\u0005\f\u0007\u0002\u0166\u0164\u0003\u0002\u0002",
    "\u0002\u0166\u0165\u0003\u0002\u0002\u0002\u0167/\u0003\u0002\u0002",
    "\u0002\u0168\u016d\u0005.\u0018\u0002\u0169\u016a\u0007\u001a\u0002",
    "\u0002\u016a\u016c\u0005.\u0018\u0002\u016b\u0169\u0003\u0002\u0002",
    "\u0002\u016c\u016f\u0003\u0002\u0002\u0002\u016d\u016b\u0003\u0002\u0002",
    "\u0002\u016d\u016e\u0003\u0002\u0002\u0002\u016e\u0171\u0003\u0002\u0002",
    "\u0002\u016f\u016d\u0003\u0002\u0002\u0002\u0170\u0172\u0007\u001a\u0002",
    "\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0171\u0172\u0003\u0002\u0002",
    "\u0002\u01721\u0003\u0002\u0002\u0002\u0173\u0175\u0005\u001c\u000f",
    "\u0002\u0174\u0173\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002\u0002",
    "\u0002\u0175\u0176\u0003\u0002\u0002\u0002\u0176\u0177\u0007\u001f\u0002",
    "\u0002\u0177\u0178\u00050\u0019\u0002\u0178\u0179\u0007\u0017\u0002",
    "\u0002\u01793\u0003\u0002\u0002\u0002\u017a\u0180\u0005\u001c\u000f",
    "\u0002\u017b\u017c\u0007\u0014\u0002\u0002\u017c\u017d\u00054\u001b",
    "\u0002\u017d\u017e\u0007\u0015\u0002\u0002\u017e\u0180\u0003\u0002\u0002",
    "\u0002\u017f\u017a\u0003\u0002\u0002\u0002\u017f\u017b\u0003\u0002\u0002",
    "\u0002\u01805\u0003\u0002\u0002\u0002\u0181\u0182\u0005\u001c\u000f",
    "\u0002\u0182\u0183\u0007\u0018\u0002\u0002\u0183\u0184\u00054\u001b",
    "\u0002\u01847\u0003\u0002\u0002\u0002\u0185\u018a\u00056\u001c\u0002",
    "\u0186\u0187\u0007\u001a\u0002\u0002\u0187\u0189\u00056\u001c\u0002",
    "\u0188\u0186\u0003\u0002\u0002\u0002\u0189\u018c\u0003\u0002\u0002\u0002",
    "\u018a\u0188\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002\u0002\u0002",
    "\u018b\u018e\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002",
    "\u018d\u018f\u0007\u001a\u0002\u0002\u018e\u018d\u0003\u0002\u0002\u0002",
    "\u018e\u018f\u0003\u0002\u0002\u0002\u018f9\u0003\u0002\u0002\u0002",
    "\'=DNaz\u0082\u0086\u008f\u009b\u009f\u00a8\u00bc\u00c0\u00c8\u00e4",
    "\u00e6\u00ef\u00f3\u00fa\u0102\u0114\u0120\u0124\u0132\u0135\u0139\u0141",
    "\u0145\u014c\u015c\u0166\u016d\u0171\u0174\u017f\u018a\u018e"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DesmosPlusParser extends antlr4.Parser {

    static grammarFileName = "DesmosPlusParser.g4";
    static literalNames = [ null, null, "'...'", null, "'let'", "'def'", 
                            "'note'", "'const'", "'show'", "'parametric'", 
                            "'simulation'", "'table'", "'folder'", "'type'", 
                            null, null, "'('", "')'", "'['", "']'", "'{'", 
                            "'}'", "':'", "'::'", "','", "';'", "'.'", "'$'", 
                            "'?'", "'@{'", "'='", "'<-'", "'+'", "'-'", 
                            "'*'", "'/'", "'%'", "'^'", "'>='", "'>'", "'<='", 
                            "'<'", "'=='", "'!='", "'not'", "'and'", "'or'" ];
    static symbolicNames = [ null, "NumberLiteral", "Ellipsis", "StringLiteral", 
                             "Let", "Def", "Note", "Const", "Show", "Parametric", 
                             "Simulation", "Table", "Folder", "Type", "SingleLineComment", 
                             "Whitespace", "OpenParen", "CloseParen", "OpenBracket", 
                             "CloseBracket", "OpenBrace", "CloseBrace", 
                             "Colon", "DoubleColon", "Comma", "Semicolon", 
                             "Dot", "DollarSign", "QuestionMark", "ObjectOpen", 
                             "Define", "Assign", "Add", "Subtract", "Multiply", 
                             "Divide", "Modulus", "Power", "GreaterThanOrEqual", 
                             "GreaterThan", "LessThanOrEqual", "LessThan", 
                             "Equals", "NotEquals", "Not", "And", "Or", 
                             "Identifier" ];
    static ruleNames = [ "program", "statement", "folderStatement", "nestableStatement", 
                         "assignment", "assignmentList", "tableLine", "optionalMetadata", 
                         "mathExpr", "functionArguments", "functionDefinitionPart", 
                         "functionDefinitionArguments", "variableReference", 
                         "identifier", "literal", "numberLiteral", "stringLiteral", 
                         "listLiteral", "pointLiteral", "rangeListLiteral", 
                         "intervalLiteral", "piecewiseBranch", "objectBranch", 
                         "objectInside", "objectLiteral", "vartype", "typedefBranch", 
                         "typedefInside" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DesmosPlusParser.ruleNames;
        this.literalNames = DesmosPlusParser.literalNames;
        this.symbolicNames = DesmosPlusParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.mathExpr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    mathExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 10);
    		case 1:
    			return this.precpred(this._ctx, 9);
    		case 2:
    			return this.precpred(this._ctx, 8);
    		case 3:
    			return this.precpred(this._ctx, 7);
    		case 4:
    			return this.precpred(this._ctx, 6);
    		case 5:
    			return this.precpred(this._ctx, 5);
    		case 6:
    			return this.precpred(this._ctx, 16);
    		case 7:
    			return this.precpred(this._ctx, 15);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DesmosPlusParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DesmosPlusParser.Let) | (1 << DesmosPlusParser.Def) | (1 << DesmosPlusParser.Note) | (1 << DesmosPlusParser.Const) | (1 << DesmosPlusParser.Show) | (1 << DesmosPlusParser.Parametric) | (1 << DesmosPlusParser.Simulation) | (1 << DesmosPlusParser.Table) | (1 << DesmosPlusParser.Folder) | (1 << DesmosPlusParser.Type))) !== 0)) {
	            this.state = 56;
	            this.statement();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this.match(DesmosPlusParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DesmosPlusParser.RULE_statement);
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DesmosPlusParser.Let:
	        case DesmosPlusParser.Def:
	        case DesmosPlusParser.Note:
	        case DesmosPlusParser.Const:
	        case DesmosPlusParser.Show:
	        case DesmosPlusParser.Parametric:
	        case DesmosPlusParser.Simulation:
	        case DesmosPlusParser.Table:
	        case DesmosPlusParser.Type:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.nestableStatement();
	            break;
	        case DesmosPlusParser.Folder:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.folderStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	folderStatement() {
	    let localctx = new FolderStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DesmosPlusParser.RULE_folderStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(DesmosPlusParser.Folder);
	        this.state = 69;
	        localctx.name = this.mathExpr(0);
	        this.state = 70;
	        this.optionalMetadata();
	        this.state = 71;
	        this.match(DesmosPlusParser.Comma);
	        this.state = 72;
	        this.match(DesmosPlusParser.OpenBracket);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DesmosPlusParser.Let) | (1 << DesmosPlusParser.Def) | (1 << DesmosPlusParser.Note) | (1 << DesmosPlusParser.Const) | (1 << DesmosPlusParser.Show) | (1 << DesmosPlusParser.Parametric) | (1 << DesmosPlusParser.Simulation) | (1 << DesmosPlusParser.Table) | (1 << DesmosPlusParser.Type))) !== 0)) {
	            this.state = 73;
	            this.nestableStatement();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
	        this.match(DesmosPlusParser.CloseBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nestableStatement() {
	    let localctx = new NestableStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DesmosPlusParser.RULE_nestableStatement);
	    var _la = 0; // Token type
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DesmosPlusParser.Let:
	            localctx = new LetStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this.match(DesmosPlusParser.Let);
	            this.state = 82;
	            this.identifier();
	            this.state = 83;
	            this.match(DesmosPlusParser.Define);
	            this.state = 84;
	            this.mathExpr(0);
	            this.state = 85;
	            this.optionalMetadata();
	            break;
	        case DesmosPlusParser.Const:
	            localctx = new ConstStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.match(DesmosPlusParser.Const);
	            this.state = 88;
	            this.identifier();
	            this.state = 89;
	            this.match(DesmosPlusParser.Define);
	            this.state = 90;
	            this.mathExpr(0);
	            break;
	        case DesmosPlusParser.Def:
	            localctx = new DefStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.match(DesmosPlusParser.Def);
	            this.state = 93;
	            this.identifier();
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Multiply) {
	                this.state = 94;
	                localctx.optionalInline = this.match(DesmosPlusParser.Multiply);
	            }

	            this.state = 97;
	            this.functionDefinitionArguments();
	            this.state = 98;
	            this.match(DesmosPlusParser.Define);
	            this.state = 99;
	            this.mathExpr(0);
	            break;
	        case DesmosPlusParser.Note:
	            localctx = new NoteStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 101;
	            this.match(DesmosPlusParser.Note);
	            this.state = 102;
	            this.mathExpr(0);
	            break;
	        case DesmosPlusParser.Show:
	            localctx = new ShowStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 103;
	            this.match(DesmosPlusParser.Show);
	            this.state = 104;
	            this.mathExpr(0);
	            this.state = 105;
	            this.optionalMetadata();
	            break;
	        case DesmosPlusParser.Parametric:
	            localctx = new ParametricStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 107;
	            this.match(DesmosPlusParser.Parametric);
	            this.state = 108;
	            this.mathExpr(0);
	            this.state = 109;
	            this.match(DesmosPlusParser.Comma);
	            this.state = 110;
	            this.assignment();
	            this.state = 111;
	            this.optionalMetadata();
	            break;
	        case DesmosPlusParser.Simulation:
	            localctx = new SimulationStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 113;
	            this.match(DesmosPlusParser.Simulation);
	            this.state = 114;
	            localctx.fps = this.mathExpr(0);
	            this.state = 115;
	            this.match(DesmosPlusParser.Comma);
	            this.state = 116;
	            this.assignmentList();
	            break;
	        case DesmosPlusParser.Table:
	            localctx = new TableStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 118;
	            this.match(DesmosPlusParser.Table);
	            this.state = 120;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 119;
	                localctx.xlist = this.mathExpr(0);

	            }
	            this.state = 122;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 128;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 123;
	                    this.tableLine();
	                    this.state = 124;
	                    this.match(DesmosPlusParser.Semicolon); 
	                }
	                this.state = 130;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	            }

	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DesmosPlusParser.NumberLiteral) | (1 << DesmosPlusParser.StringLiteral) | (1 << DesmosPlusParser.OpenParen) | (1 << DesmosPlusParser.OpenBracket) | (1 << DesmosPlusParser.OpenBrace) | (1 << DesmosPlusParser.ObjectOpen))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (DesmosPlusParser.Add - 32)) | (1 << (DesmosPlusParser.Subtract - 32)) | (1 << (DesmosPlusParser.Not - 32)) | (1 << (DesmosPlusParser.Identifier - 32)))) !== 0)) {
	                this.state = 131;
	                this.tableLine();
	            }

	            this.state = 134;
	            this.match(DesmosPlusParser.CloseBracket);
	            break;
	        case DesmosPlusParser.Type:
	            localctx = new TypeDeclarationStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 135;
	            this.match(DesmosPlusParser.Type);
	            this.state = 136;
	            localctx.name = this.identifier();
	            this.state = 137;
	            this.match(DesmosPlusParser.ObjectOpen);
	            this.state = 138;
	            this.typedefInside();
	            this.state = 139;
	            this.match(DesmosPlusParser.CloseBrace);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DesmosPlusParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.variableReference();
	        this.state = 144;
	        this.match(DesmosPlusParser.Assign);
	        this.state = 145;
	        this.mathExpr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentList() {
	    let localctx = new AssignmentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DesmosPlusParser.RULE_assignmentList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(DesmosPlusParser.OpenBracket);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 148;
	                this.assignment();
	                this.state = 149;
	                this.match(DesmosPlusParser.Comma); 
	            }
	            this.state = 155;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DesmosPlusParser.DollarSign) {
	            this.state = 156;
	            this.assignment();
	        }

	        this.state = 159;
	        this.match(DesmosPlusParser.CloseBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tableLine() {
	    let localctx = new TableLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DesmosPlusParser.RULE_tableLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.mathExpr(0);
	        this.state = 162;
	        this.optionalMetadata();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionalMetadata() {
	    let localctx = new OptionalMetadataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DesmosPlusParser.RULE_optionalMetadata);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 164;
	            this.match(DesmosPlusParser.Comma);
	            this.state = 165;
	            this.mathExpr(0);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	mathExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MathExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, DesmosPlusParser.RULE_mathExpr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 169;
	            this.identifier();
	            this.state = 170;
	            this.functionArguments();
	            break;

	        case 2:
	            localctx = new UnaryPlusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 172;
	            localctx.op = this.match(DesmosPlusParser.Add);
	            this.state = 173;
	            this.mathExpr(13);
	            break;

	        case 3:
	            localctx = new UnaryMinusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 174;
	            localctx.op = this.match(DesmosPlusParser.Subtract);
	            this.state = 175;
	            this.mathExpr(12);
	            break;

	        case 4:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 176;
	            localctx.op = this.match(DesmosPlusParser.Not);
	            this.state = 177;
	            this.mathExpr(11);
	            break;

	        case 5:
	            localctx = new VariableExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 178;
	            this.identifier();
	            break;

	        case 6:
	            localctx = new LiteralExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 179;
	            this.literal();
	            break;

	        case 7:
	            localctx = new PiecewiseExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 180;
	            this.match(DesmosPlusParser.OpenBrace);
	            this.state = 181;
	            this.piecewiseBranch();
	            this.state = 186;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 182;
	                    this.match(DesmosPlusParser.Comma);
	                    this.state = 183;
	                    this.piecewiseBranch(); 
	                }
	                this.state = 188;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	            }

	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 189;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 192;
	            this.match(DesmosPlusParser.CloseBrace);
	            break;

	        case 8:
	            localctx = new ParenthesizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 194;
	            this.match(DesmosPlusParser.OpenParen);
	            this.state = 195;
	            this.mathExpr(0);
	            this.state = 196;
	            this.match(DesmosPlusParser.CloseParen);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 228;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 226;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 200;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 201;
	                    this.match(DesmosPlusParser.Power);
	                    this.state = 202;
	                    this.mathExpr(10);
	                    break;

	                case 2:
	                    localctx = new MultiplicativeExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 203;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 204;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (DesmosPlusParser.Multiply - 34)) | (1 << (DesmosPlusParser.Divide - 34)) | (1 << (DesmosPlusParser.Modulus - 34)))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 205;
	                    this.mathExpr(10);
	                    break;

	                case 3:
	                    localctx = new AdditiveExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 206;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 207;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===DesmosPlusParser.Add || _la===DesmosPlusParser.Subtract)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 208;
	                    this.mathExpr(9);
	                    break;

	                case 4:
	                    localctx = new ComparisonChainExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 209;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 210;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (DesmosPlusParser.GreaterThanOrEqual - 38)) | (1 << (DesmosPlusParser.GreaterThan - 38)) | (1 << (DesmosPlusParser.LessThanOrEqual - 38)) | (1 << (DesmosPlusParser.LessThan - 38)) | (1 << (DesmosPlusParser.Equals - 38)) | (1 << (DesmosPlusParser.NotEquals - 38)))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 211;
	                    localctx.right = this.mathExpr(8);
	                    break;

	                case 5:
	                    localctx = new AndExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 212;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 213;
	                    this.match(DesmosPlusParser.And);
	                    this.state = 214;
	                    this.mathExpr(7);
	                    break;

	                case 6:
	                    localctx = new OrExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 215;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 216;
	                    this.match(DesmosPlusParser.Or);
	                    this.state = 217;
	                    this.mathExpr(6);
	                    break;

	                case 7:
	                    localctx = new ObjectAccessExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 218;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 219;
	                    this.match(DesmosPlusParser.Dot);
	                    this.state = 220;
	                    this.identifier();
	                    break;

	                case 8:
	                    localctx = new ListIndexExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 222;
	                    this.match(DesmosPlusParser.OpenBracket);
	                    this.state = 223;
	                    this.mathExpr(0);
	                    this.state = 224;
	                    this.match(DesmosPlusParser.CloseBracket);
	                    break;

	                } 
	            }
	            this.state = 230;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	functionArguments() {
	    let localctx = new FunctionArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DesmosPlusParser.RULE_functionArguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(DesmosPlusParser.OpenParen);
	        this.state = 237;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 232;
	                this.mathExpr(0);
	                this.state = 233;
	                this.match(DesmosPlusParser.Comma); 
	            }
	            this.state = 239;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DesmosPlusParser.NumberLiteral) | (1 << DesmosPlusParser.StringLiteral) | (1 << DesmosPlusParser.OpenParen) | (1 << DesmosPlusParser.OpenBracket) | (1 << DesmosPlusParser.OpenBrace) | (1 << DesmosPlusParser.ObjectOpen))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (DesmosPlusParser.Add - 32)) | (1 << (DesmosPlusParser.Subtract - 32)) | (1 << (DesmosPlusParser.Not - 32)) | (1 << (DesmosPlusParser.Identifier - 32)))) !== 0)) {
	            this.state = 240;
	            this.mathExpr(0);
	        }

	        this.state = 243;
	        this.match(DesmosPlusParser.CloseParen);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDefinitionPart() {
	    let localctx = new FunctionDefinitionPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DesmosPlusParser.RULE_functionDefinitionPart);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        localctx.variable = this.identifier();
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DesmosPlusParser.Colon) {
	            this.state = 246;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 247;
	            localctx.type = this.vartype();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDefinitionArguments() {
	    let localctx = new FunctionDefinitionArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DesmosPlusParser.RULE_functionDefinitionArguments);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(DesmosPlusParser.OpenParen);
	        this.state = 256;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 251;
	                this.functionDefinitionPart();
	                this.state = 252;
	                this.match(DesmosPlusParser.Comma); 
	            }
	            this.state = 258;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 259;
	        this.functionDefinitionPart();
	        this.state = 260;
	        this.match(DesmosPlusParser.CloseParen);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableReference() {
	    let localctx = new VariableReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DesmosPlusParser.RULE_variableReference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(DesmosPlusParser.DollarSign);
	        this.state = 263;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DesmosPlusParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(DesmosPlusParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DesmosPlusParser.RULE_literal);
	    try {
	        this.state = 274;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 267;
	            this.numberLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 268;
	            this.stringLiteral();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 269;
	            this.listLiteral();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 270;
	            this.rangeListLiteral();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 271;
	            this.intervalLiteral();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 272;
	            this.objectLiteral();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 273;
	            this.pointLiteral();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numberLiteral() {
	    let localctx = new NumberLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DesmosPlusParser.RULE_numberLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(DesmosPlusParser.NumberLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringLiteral() {
	    let localctx = new StringLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DesmosPlusParser.RULE_stringLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.match(DesmosPlusParser.StringLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listLiteral() {
	    let localctx = new ListLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DesmosPlusParser.RULE_listLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(DesmosPlusParser.OpenBracket);
	        this.state = 286;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 281;
	                this.mathExpr(0);
	                this.state = 282;
	                this.match(DesmosPlusParser.Comma); 
	            }
	            this.state = 288;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DesmosPlusParser.NumberLiteral) | (1 << DesmosPlusParser.StringLiteral) | (1 << DesmosPlusParser.OpenParen) | (1 << DesmosPlusParser.OpenBracket) | (1 << DesmosPlusParser.OpenBrace) | (1 << DesmosPlusParser.ObjectOpen))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (DesmosPlusParser.Add - 32)) | (1 << (DesmosPlusParser.Subtract - 32)) | (1 << (DesmosPlusParser.Not - 32)) | (1 << (DesmosPlusParser.Identifier - 32)))) !== 0)) {
	            this.state = 289;
	            this.mathExpr(0);
	        }

	        this.state = 292;
	        this.match(DesmosPlusParser.CloseBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pointLiteral() {
	    let localctx = new PointLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DesmosPlusParser.RULE_pointLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.match(DesmosPlusParser.OpenParen);
	        this.state = 295;
	        this.mathExpr(0);
	        this.state = 296;
	        this.match(DesmosPlusParser.Comma);
	        this.state = 297;
	        this.mathExpr(0);
	        this.state = 298;
	        this.match(DesmosPlusParser.CloseParen);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rangeListLiteral() {
	    let localctx = new RangeListLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DesmosPlusParser.RULE_rangeListLiteral);
	    var _la = 0; // Token type
	    try {
	        this.state = 330;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TermedRangeListLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 300;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 301;
	            this.mathExpr(0);
	            this.state = 304;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	            if(la_===1) {
	                this.state = 302;
	                this.match(DesmosPlusParser.Comma);
	                this.state = 303;
	                this.mathExpr(0);

	            }
	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 306;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 309;
	            this.match(DesmosPlusParser.Ellipsis);
	            this.state = 311;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 310;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 313;
	            this.mathExpr(0);
	            this.state = 314;
	            this.match(DesmosPlusParser.CloseBracket);
	            break;

	        case 2:
	            localctx = new SteppedRangeListLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 316;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 317;
	            this.mathExpr(0);
	            this.state = 319;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 318;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 321;
	            this.match(DesmosPlusParser.Ellipsis);
	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 322;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 325;
	            this.mathExpr(0);
	            this.state = 326;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 327;
	            this.mathExpr(0);
	            this.state = 328;
	            this.match(DesmosPlusParser.CloseBracket);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intervalLiteral() {
	    let localctx = new IntervalLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DesmosPlusParser.RULE_intervalLiteral);
	    try {
	        this.state = 346;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 332;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 333;
	            this.mathExpr(0);
	            this.state = 334;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 335;
	            this.mathExpr(0);
	            this.state = 336;
	            this.match(DesmosPlusParser.CloseBracket);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 338;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 339;
	            this.mathExpr(0);
	            this.state = 340;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 341;
	            this.mathExpr(0);
	            this.state = 342;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 343;
	            this.mathExpr(0);
	            this.state = 344;
	            this.match(DesmosPlusParser.CloseBracket);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	piecewiseBranch() {
	    let localctx = new PiecewiseBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, DesmosPlusParser.RULE_piecewiseBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        localctx.condition = this.mathExpr(0);
	        this.state = 349;
	        this.match(DesmosPlusParser.Colon);
	        this.state = 350;
	        localctx.value = this.mathExpr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectBranch() {
	    let localctx = new ObjectBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DesmosPlusParser.RULE_objectBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.identifier();
	        this.state = 353;
	        this.match(DesmosPlusParser.Colon);
	        this.state = 356;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 354;
	            this.mathExpr(0);
	            break;

	        case 2:
	            this.state = 355;
	            this.assignmentList();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectInside() {
	    let localctx = new ObjectInsideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, DesmosPlusParser.RULE_objectInside);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.objectBranch();
	        this.state = 363;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 359;
	                this.match(DesmosPlusParser.Comma);
	                this.state = 360;
	                this.objectBranch(); 
	            }
	            this.state = 365;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
	        }

	        this.state = 367;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DesmosPlusParser.Comma) {
	            this.state = 366;
	            this.match(DesmosPlusParser.Comma);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectLiteral() {
	    let localctx = new ObjectLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, DesmosPlusParser.RULE_objectLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DesmosPlusParser.Identifier) {
	            this.state = 369;
	            this.identifier();
	        }

	        this.state = 372;
	        this.match(DesmosPlusParser.ObjectOpen);
	        this.state = 373;
	        this.objectInside();
	        this.state = 374;
	        this.match(DesmosPlusParser.CloseBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vartype() {
	    let localctx = new VartypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, DesmosPlusParser.RULE_vartype);
	    try {
	        this.state = 381;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DesmosPlusParser.Identifier:
	            localctx = new VartypeIdentifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 376;
	            this.identifier();
	            break;
	        case DesmosPlusParser.OpenBracket:
	            localctx = new VartypeNestedContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 377;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 378;
	            this.vartype();
	            this.state = 379;
	            this.match(DesmosPlusParser.CloseBracket);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typedefBranch() {
	    let localctx = new TypedefBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, DesmosPlusParser.RULE_typedefBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
	        this.identifier();
	        this.state = 384;
	        this.match(DesmosPlusParser.Colon);
	        this.state = 385;
	        this.vartype();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typedefInside() {
	    let localctx = new TypedefInsideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, DesmosPlusParser.RULE_typedefInside);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.typedefBranch();
	        this.state = 392;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 388;
	                this.match(DesmosPlusParser.Comma);
	                this.state = 389;
	                this.typedefBranch(); 
	            }
	            this.state = 394;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
	        }

	        this.state = 396;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DesmosPlusParser.Comma) {
	            this.state = 395;
	            this.match(DesmosPlusParser.Comma);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DesmosPlusParser.EOF = antlr4.Token.EOF;
DesmosPlusParser.NumberLiteral = 1;
DesmosPlusParser.Ellipsis = 2;
DesmosPlusParser.StringLiteral = 3;
DesmosPlusParser.Let = 4;
DesmosPlusParser.Def = 5;
DesmosPlusParser.Note = 6;
DesmosPlusParser.Const = 7;
DesmosPlusParser.Show = 8;
DesmosPlusParser.Parametric = 9;
DesmosPlusParser.Simulation = 10;
DesmosPlusParser.Table = 11;
DesmosPlusParser.Folder = 12;
DesmosPlusParser.Type = 13;
DesmosPlusParser.SingleLineComment = 14;
DesmosPlusParser.Whitespace = 15;
DesmosPlusParser.OpenParen = 16;
DesmosPlusParser.CloseParen = 17;
DesmosPlusParser.OpenBracket = 18;
DesmosPlusParser.CloseBracket = 19;
DesmosPlusParser.OpenBrace = 20;
DesmosPlusParser.CloseBrace = 21;
DesmosPlusParser.Colon = 22;
DesmosPlusParser.DoubleColon = 23;
DesmosPlusParser.Comma = 24;
DesmosPlusParser.Semicolon = 25;
DesmosPlusParser.Dot = 26;
DesmosPlusParser.DollarSign = 27;
DesmosPlusParser.QuestionMark = 28;
DesmosPlusParser.ObjectOpen = 29;
DesmosPlusParser.Define = 30;
DesmosPlusParser.Assign = 31;
DesmosPlusParser.Add = 32;
DesmosPlusParser.Subtract = 33;
DesmosPlusParser.Multiply = 34;
DesmosPlusParser.Divide = 35;
DesmosPlusParser.Modulus = 36;
DesmosPlusParser.Power = 37;
DesmosPlusParser.GreaterThanOrEqual = 38;
DesmosPlusParser.GreaterThan = 39;
DesmosPlusParser.LessThanOrEqual = 40;
DesmosPlusParser.LessThan = 41;
DesmosPlusParser.Equals = 42;
DesmosPlusParser.NotEquals = 43;
DesmosPlusParser.Not = 44;
DesmosPlusParser.And = 45;
DesmosPlusParser.Or = 46;
DesmosPlusParser.Identifier = 47;

DesmosPlusParser.RULE_program = 0;
DesmosPlusParser.RULE_statement = 1;
DesmosPlusParser.RULE_folderStatement = 2;
DesmosPlusParser.RULE_nestableStatement = 3;
DesmosPlusParser.RULE_assignment = 4;
DesmosPlusParser.RULE_assignmentList = 5;
DesmosPlusParser.RULE_tableLine = 6;
DesmosPlusParser.RULE_optionalMetadata = 7;
DesmosPlusParser.RULE_mathExpr = 8;
DesmosPlusParser.RULE_functionArguments = 9;
DesmosPlusParser.RULE_functionDefinitionPart = 10;
DesmosPlusParser.RULE_functionDefinitionArguments = 11;
DesmosPlusParser.RULE_variableReference = 12;
DesmosPlusParser.RULE_identifier = 13;
DesmosPlusParser.RULE_literal = 14;
DesmosPlusParser.RULE_numberLiteral = 15;
DesmosPlusParser.RULE_stringLiteral = 16;
DesmosPlusParser.RULE_listLiteral = 17;
DesmosPlusParser.RULE_pointLiteral = 18;
DesmosPlusParser.RULE_rangeListLiteral = 19;
DesmosPlusParser.RULE_intervalLiteral = 20;
DesmosPlusParser.RULE_piecewiseBranch = 21;
DesmosPlusParser.RULE_objectBranch = 22;
DesmosPlusParser.RULE_objectInside = 23;
DesmosPlusParser.RULE_objectLiteral = 24;
DesmosPlusParser.RULE_vartype = 25;
DesmosPlusParser.RULE_typedefBranch = 26;
DesmosPlusParser.RULE_typedefInside = 27;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_program;
    }

	EOF() {
	    return this.getToken(DesmosPlusParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_statement;
    }

	nestableStatement() {
	    return this.getTypedRuleContext(NestableStatementContext,0);
	};

	folderStatement() {
	    return this.getTypedRuleContext(FolderStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FolderStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_folderStatement;
        this.name = null; // MathExprContext
    }

	Folder() {
	    return this.getToken(DesmosPlusParser.Folder, 0);
	};

	optionalMetadata() {
	    return this.getTypedRuleContext(OptionalMetadataContext,0);
	};

	Comma() {
	    return this.getToken(DesmosPlusParser.Comma, 0);
	};

	OpenBracket() {
	    return this.getToken(DesmosPlusParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(DesmosPlusParser.CloseBracket, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	nestableStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NestableStatementContext);
	    } else {
	        return this.getTypedRuleContext(NestableStatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitFolderStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NestableStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_nestableStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SimulationStatementContext extends NestableStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.fps = null; // MathExprContext;
        super.copyFrom(ctx);
    }

	Simulation() {
	    return this.getToken(DesmosPlusParser.Simulation, 0);
	};

	Comma() {
	    return this.getToken(DesmosPlusParser.Comma, 0);
	};

	assignmentList() {
	    return this.getTypedRuleContext(AssignmentListContext,0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitSimulationStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.SimulationStatementContext = SimulationStatementContext;

class ConstStatementContext extends NestableStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Const() {
	    return this.getToken(DesmosPlusParser.Const, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Define() {
	    return this.getToken(DesmosPlusParser.Define, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitConstStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.ConstStatementContext = ConstStatementContext;

class TypeDeclarationStatementContext extends NestableStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null; // IdentifierContext;
        super.copyFrom(ctx);
    }

	Type() {
	    return this.getToken(DesmosPlusParser.Type, 0);
	};

	ObjectOpen() {
	    return this.getToken(DesmosPlusParser.ObjectOpen, 0);
	};

	typedefInside() {
	    return this.getTypedRuleContext(TypedefInsideContext,0);
	};

	CloseBrace() {
	    return this.getToken(DesmosPlusParser.CloseBrace, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitTypeDeclarationStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.TypeDeclarationStatementContext = TypeDeclarationStatementContext;

class TableStatementContext extends NestableStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.xlist = null; // MathExprContext;
        super.copyFrom(ctx);
    }

	Table() {
	    return this.getToken(DesmosPlusParser.Table, 0);
	};

	OpenBracket() {
	    return this.getToken(DesmosPlusParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(DesmosPlusParser.CloseBracket, 0);
	};

	tableLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TableLineContext);
	    } else {
	        return this.getTypedRuleContext(TableLineContext,i);
	    }
	};

	Semicolon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Semicolon);
	    } else {
	        return this.getToken(DesmosPlusParser.Semicolon, i);
	    }
	};


	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitTableStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.TableStatementContext = TableStatementContext;

class NoteStatementContext extends NestableStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Note() {
	    return this.getToken(DesmosPlusParser.Note, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitNoteStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.NoteStatementContext = NoteStatementContext;

class LetStatementContext extends NestableStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Let() {
	    return this.getToken(DesmosPlusParser.Let, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Define() {
	    return this.getToken(DesmosPlusParser.Define, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	optionalMetadata() {
	    return this.getTypedRuleContext(OptionalMetadataContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitLetStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.LetStatementContext = LetStatementContext;

class DefStatementContext extends NestableStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.optionalInline = null; // Token;
        super.copyFrom(ctx);
    }

	Def() {
	    return this.getToken(DesmosPlusParser.Def, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	functionDefinitionArguments() {
	    return this.getTypedRuleContext(FunctionDefinitionArgumentsContext,0);
	};

	Define() {
	    return this.getToken(DesmosPlusParser.Define, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	Multiply() {
	    return this.getToken(DesmosPlusParser.Multiply, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitDefStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.DefStatementContext = DefStatementContext;

class ParametricStatementContext extends NestableStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Parametric() {
	    return this.getToken(DesmosPlusParser.Parametric, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	Comma() {
	    return this.getToken(DesmosPlusParser.Comma, 0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	optionalMetadata() {
	    return this.getTypedRuleContext(OptionalMetadataContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitParametricStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.ParametricStatementContext = ParametricStatementContext;

class ShowStatementContext extends NestableStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Show() {
	    return this.getToken(DesmosPlusParser.Show, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	optionalMetadata() {
	    return this.getTypedRuleContext(OptionalMetadataContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitShowStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.ShowStatementContext = ShowStatementContext;

class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_assignment;
    }

	variableReference() {
	    return this.getTypedRuleContext(VariableReferenceContext,0);
	};

	Assign() {
	    return this.getToken(DesmosPlusParser.Assign, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_assignmentList;
    }

	OpenBracket() {
	    return this.getToken(DesmosPlusParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(DesmosPlusParser.CloseBracket, 0);
	};

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Comma);
	    } else {
	        return this.getToken(DesmosPlusParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitAssignmentList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TableLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_tableLine;
    }

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	optionalMetadata() {
	    return this.getTypedRuleContext(OptionalMetadataContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitTableLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OptionalMetadataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_optionalMetadata;
    }

	Comma() {
	    return this.getToken(DesmosPlusParser.Comma, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitOptionalMetadata(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MathExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_mathExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParenthesizedExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OpenParen() {
	    return this.getToken(DesmosPlusParser.OpenParen, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	CloseParen() {
	    return this.getToken(DesmosPlusParser.CloseParen, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitParenthesizedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

class AdditiveExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Add() {
	    return this.getToken(DesmosPlusParser.Add, 0);
	};

	Subtract() {
	    return this.getToken(DesmosPlusParser.Subtract, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.AdditiveExpressionContext = AdditiveExpressionContext;

class ComparisonChainExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MathExprContext;
        this.op = null; // Token;
        this.right = null; // MathExprContext;
        super.copyFrom(ctx);
    }

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	GreaterThanOrEqual() {
	    return this.getToken(DesmosPlusParser.GreaterThanOrEqual, 0);
	};

	GreaterThan() {
	    return this.getToken(DesmosPlusParser.GreaterThan, 0);
	};

	LessThanOrEqual() {
	    return this.getToken(DesmosPlusParser.LessThanOrEqual, 0);
	};

	LessThan() {
	    return this.getToken(DesmosPlusParser.LessThan, 0);
	};

	Equals() {
	    return this.getToken(DesmosPlusParser.Equals, 0);
	};

	NotEquals() {
	    return this.getToken(DesmosPlusParser.NotEquals, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitComparisonChainExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.ComparisonChainExpressionContext = ComparisonChainExpressionContext;

class PowerExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Power() {
	    return this.getToken(DesmosPlusParser.Power, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitPowerExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.PowerExpressionContext = PowerExpressionContext;

class LiteralExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.LiteralExpressionContext = LiteralExpressionContext;

class NotExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	Not() {
	    return this.getToken(DesmosPlusParser.Not, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.NotExpressionContext = NotExpressionContext;

class VariableExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitVariableExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.VariableExpressionContext = VariableExpressionContext;

class OrExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Or() {
	    return this.getToken(DesmosPlusParser.Or, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.OrExpressionContext = OrExpressionContext;

class FunctionExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.FunctionExpressionContext = FunctionExpressionContext;

class AndExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	And() {
	    return this.getToken(DesmosPlusParser.And, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.AndExpressionContext = AndExpressionContext;

class UnaryMinusExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	Subtract() {
	    return this.getToken(DesmosPlusParser.Subtract, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitUnaryMinusExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

class PiecewiseExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OpenBrace() {
	    return this.getToken(DesmosPlusParser.OpenBrace, 0);
	};

	piecewiseBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PiecewiseBranchContext);
	    } else {
	        return this.getTypedRuleContext(PiecewiseBranchContext,i);
	    }
	};

	CloseBrace() {
	    return this.getToken(DesmosPlusParser.CloseBrace, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Comma);
	    } else {
	        return this.getToken(DesmosPlusParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitPiecewiseExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.PiecewiseExpressionContext = PiecewiseExpressionContext;

class UnaryPlusExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	Add() {
	    return this.getToken(DesmosPlusParser.Add, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitUnaryPlusExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.UnaryPlusExpressionContext = UnaryPlusExpressionContext;

class ListIndexExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	OpenBracket() {
	    return this.getToken(DesmosPlusParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(DesmosPlusParser.CloseBracket, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitListIndexExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.ListIndexExpressionContext = ListIndexExpressionContext;

class ObjectAccessExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	Dot() {
	    return this.getToken(DesmosPlusParser.Dot, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitObjectAccessExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.ObjectAccessExpressionContext = ObjectAccessExpressionContext;

class MultiplicativeExpressionContext extends MathExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Multiply() {
	    return this.getToken(DesmosPlusParser.Multiply, 0);
	};

	Divide() {
	    return this.getToken(DesmosPlusParser.Divide, 0);
	};

	Modulus() {
	    return this.getToken(DesmosPlusParser.Modulus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

class FunctionArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_functionArguments;
    }

	OpenParen() {
	    return this.getToken(DesmosPlusParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(DesmosPlusParser.CloseParen, 0);
	};

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Comma);
	    } else {
	        return this.getToken(DesmosPlusParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitFunctionArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDefinitionPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_functionDefinitionPart;
        this.variable = null; // IdentifierContext
        this.type = null; // VartypeContext
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Colon() {
	    return this.getToken(DesmosPlusParser.Colon, 0);
	};

	vartype() {
	    return this.getTypedRuleContext(VartypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitFunctionDefinitionPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDefinitionArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_functionDefinitionArguments;
    }

	OpenParen() {
	    return this.getToken(DesmosPlusParser.OpenParen, 0);
	};

	functionDefinitionPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDefinitionPartContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDefinitionPartContext,i);
	    }
	};

	CloseParen() {
	    return this.getToken(DesmosPlusParser.CloseParen, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Comma);
	    } else {
	        return this.getToken(DesmosPlusParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitFunctionDefinitionArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_variableReference;
    }

	DollarSign() {
	    return this.getToken(DesmosPlusParser.DollarSign, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitVariableReference(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_identifier;
    }

	Identifier() {
	    return this.getToken(DesmosPlusParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_literal;
    }

	numberLiteral() {
	    return this.getTypedRuleContext(NumberLiteralContext,0);
	};

	stringLiteral() {
	    return this.getTypedRuleContext(StringLiteralContext,0);
	};

	listLiteral() {
	    return this.getTypedRuleContext(ListLiteralContext,0);
	};

	rangeListLiteral() {
	    return this.getTypedRuleContext(RangeListLiteralContext,0);
	};

	intervalLiteral() {
	    return this.getTypedRuleContext(IntervalLiteralContext,0);
	};

	objectLiteral() {
	    return this.getTypedRuleContext(ObjectLiteralContext,0);
	};

	pointLiteral() {
	    return this.getTypedRuleContext(PointLiteralContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_numberLiteral;
    }

	NumberLiteral() {
	    return this.getToken(DesmosPlusParser.NumberLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitNumberLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_stringLiteral;
    }

	StringLiteral() {
	    return this.getToken(DesmosPlusParser.StringLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitStringLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_listLiteral;
    }

	OpenBracket() {
	    return this.getToken(DesmosPlusParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(DesmosPlusParser.CloseBracket, 0);
	};

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Comma);
	    } else {
	        return this.getToken(DesmosPlusParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitListLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PointLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_pointLiteral;
    }

	OpenParen() {
	    return this.getToken(DesmosPlusParser.OpenParen, 0);
	};

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Comma() {
	    return this.getToken(DesmosPlusParser.Comma, 0);
	};

	CloseParen() {
	    return this.getToken(DesmosPlusParser.CloseParen, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitPointLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeListLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_rangeListLiteral;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TermedRangeListLiteralContext extends RangeListLiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OpenBracket() {
	    return this.getToken(DesmosPlusParser.OpenBracket, 0);
	};

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Ellipsis() {
	    return this.getToken(DesmosPlusParser.Ellipsis, 0);
	};

	CloseBracket() {
	    return this.getToken(DesmosPlusParser.CloseBracket, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Comma);
	    } else {
	        return this.getToken(DesmosPlusParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitTermedRangeListLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.TermedRangeListLiteralContext = TermedRangeListLiteralContext;

class SteppedRangeListLiteralContext extends RangeListLiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OpenBracket() {
	    return this.getToken(DesmosPlusParser.OpenBracket, 0);
	};

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Ellipsis() {
	    return this.getToken(DesmosPlusParser.Ellipsis, 0);
	};

	Colon() {
	    return this.getToken(DesmosPlusParser.Colon, 0);
	};

	CloseBracket() {
	    return this.getToken(DesmosPlusParser.CloseBracket, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Comma);
	    } else {
	        return this.getToken(DesmosPlusParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitSteppedRangeListLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.SteppedRangeListLiteralContext = SteppedRangeListLiteralContext;

class IntervalLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_intervalLiteral;
    }

	OpenBracket() {
	    return this.getToken(DesmosPlusParser.OpenBracket, 0);
	};

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	Colon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Colon);
	    } else {
	        return this.getToken(DesmosPlusParser.Colon, i);
	    }
	};


	CloseBracket() {
	    return this.getToken(DesmosPlusParser.CloseBracket, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitIntervalLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PiecewiseBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_piecewiseBranch;
        this.condition = null; // MathExprContext
        this.value = null; // MathExprContext
    }

	Colon() {
	    return this.getToken(DesmosPlusParser.Colon, 0);
	};

	mathExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExprContext);
	    } else {
	        return this.getTypedRuleContext(MathExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitPiecewiseBranch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_objectBranch;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Colon() {
	    return this.getToken(DesmosPlusParser.Colon, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	assignmentList() {
	    return this.getTypedRuleContext(AssignmentListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitObjectBranch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectInsideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_objectInside;
    }

	objectBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectBranchContext);
	    } else {
	        return this.getTypedRuleContext(ObjectBranchContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Comma);
	    } else {
	        return this.getToken(DesmosPlusParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitObjectInside(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_objectLiteral;
    }

	ObjectOpen() {
	    return this.getToken(DesmosPlusParser.ObjectOpen, 0);
	};

	objectInside() {
	    return this.getTypedRuleContext(ObjectInsideContext,0);
	};

	CloseBrace() {
	    return this.getToken(DesmosPlusParser.CloseBrace, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitObjectLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VartypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_vartype;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class VartypeNestedContext extends VartypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OpenBracket() {
	    return this.getToken(DesmosPlusParser.OpenBracket, 0);
	};

	vartype() {
	    return this.getTypedRuleContext(VartypeContext,0);
	};

	CloseBracket() {
	    return this.getToken(DesmosPlusParser.CloseBracket, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitVartypeNested(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.VartypeNestedContext = VartypeNestedContext;

class VartypeIdentifierContext extends VartypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitVartypeIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DesmosPlusParser.VartypeIdentifierContext = VartypeIdentifierContext;

class TypedefBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_typedefBranch;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Colon() {
	    return this.getToken(DesmosPlusParser.Colon, 0);
	};

	vartype() {
	    return this.getTypedRuleContext(VartypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitTypedefBranch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypedefInsideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesmosPlusParser.RULE_typedefInside;
    }

	typedefBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypedefBranchContext);
	    } else {
	        return this.getTypedRuleContext(TypedefBranchContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesmosPlusParser.Comma);
	    } else {
	        return this.getToken(DesmosPlusParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DesmosPlusParserVisitor ) {
	        return visitor.visitTypedefInside(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DesmosPlusParser.ProgramContext = ProgramContext; 
DesmosPlusParser.StatementContext = StatementContext; 
DesmosPlusParser.FolderStatementContext = FolderStatementContext; 
DesmosPlusParser.NestableStatementContext = NestableStatementContext; 
DesmosPlusParser.AssignmentContext = AssignmentContext; 
DesmosPlusParser.AssignmentListContext = AssignmentListContext; 
DesmosPlusParser.TableLineContext = TableLineContext; 
DesmosPlusParser.OptionalMetadataContext = OptionalMetadataContext; 
DesmosPlusParser.MathExprContext = MathExprContext; 
DesmosPlusParser.FunctionArgumentsContext = FunctionArgumentsContext; 
DesmosPlusParser.FunctionDefinitionPartContext = FunctionDefinitionPartContext; 
DesmosPlusParser.FunctionDefinitionArgumentsContext = FunctionDefinitionArgumentsContext; 
DesmosPlusParser.VariableReferenceContext = VariableReferenceContext; 
DesmosPlusParser.IdentifierContext = IdentifierContext; 
DesmosPlusParser.LiteralContext = LiteralContext; 
DesmosPlusParser.NumberLiteralContext = NumberLiteralContext; 
DesmosPlusParser.StringLiteralContext = StringLiteralContext; 
DesmosPlusParser.ListLiteralContext = ListLiteralContext; 
DesmosPlusParser.PointLiteralContext = PointLiteralContext; 
DesmosPlusParser.RangeListLiteralContext = RangeListLiteralContext; 
DesmosPlusParser.IntervalLiteralContext = IntervalLiteralContext; 
DesmosPlusParser.PiecewiseBranchContext = PiecewiseBranchContext; 
DesmosPlusParser.ObjectBranchContext = ObjectBranchContext; 
DesmosPlusParser.ObjectInsideContext = ObjectInsideContext; 
DesmosPlusParser.ObjectLiteralContext = ObjectLiteralContext; 
DesmosPlusParser.VartypeContext = VartypeContext; 
DesmosPlusParser.TypedefBranchContext = TypedefBranchContext; 
DesmosPlusParser.TypedefInsideContext = TypedefInsideContext; 
