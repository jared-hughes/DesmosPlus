// Generated from DesmosPlusParser.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DesmosPlusParserVisitor from './DesmosPlusParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00031\u0169\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0007",
    "\u00025\n\u0002\f\u0002\u000e\u00028\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003@\n\u0003",
    "\f\u0003\u000e\u0003C\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "k\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "q\n\u0004\f\u0004\u000e\u0004t\u000b\u0004\u0003\u0004\u0005\u0004w",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004\u0080\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006\u008a\n\u0006\f\u0006\u000e\u0006\u008d\u000b\u0006",
    "\u0003\u0006\u0005\u0006\u0090\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005\b\u0099\n\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00ab\n\t",
    "\f\t\u000e\t\u00ae\u000b\t\u0003\t\u0005\t\u00b1\n\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00b9\n\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00d5\n\t\f\t\u000e",
    "\t\u00d8\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00de\n\n\f",
    "\n\u000e\n\u00e1\u000b\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u00e9\n\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0007\f\u00ef\n\f\f\f\u000e\f\u00f2\u000b\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u0103\n\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u010d\n",
    "\u0012\f\u0012\u000e\u0012\u0110\u000b\u0012\u0003\u0012\u0005\u0012",
    "\u0113\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0005\u0014\u0121\n\u0014\u0003\u0014\u0005\u0014",
    "\u0124\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0128\n\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u0130\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0134\n\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u013b\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u014b\n\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u0155\n\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0007\u0018\u015a\n\u0018\f\u0018\u000e\u0018\u015d",
    "\u000b\u0018\u0003\u0018\u0005\u0018\u0160\n\u0018\u0003\u0019\u0005",
    "\u0019\u0163\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0002\u0003\u0010\u001a\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0\u0002\u0005\u0003",
    "\u0002$&\u0003\u0002\"#\u0003\u0002(-\u0002\u0188\u00026\u0003\u0002",
    "\u0002\u0002\u00049\u0003\u0002\u0002\u0002\u0006\u007f\u0003\u0002",
    "\u0002\u0002\b\u0081\u0003\u0002\u0002\u0002\n\u0085\u0003\u0002\u0002",
    "\u0002\f\u0093\u0003\u0002\u0002\u0002\u000e\u0098\u0003\u0002\u0002",
    "\u0002\u0010\u00b8\u0003\u0002\u0002\u0002\u0012\u00d9\u0003\u0002\u0002",
    "\u0002\u0014\u00e5\u0003\u0002\u0002\u0002\u0016\u00ea\u0003\u0002\u0002",
    "\u0002\u0018\u00f6\u0003\u0002\u0002\u0002\u001a\u00f9\u0003\u0002\u0002",
    "\u0002\u001c\u0102\u0003\u0002\u0002\u0002\u001e\u0104\u0003\u0002\u0002",
    "\u0002 \u0106\u0003\u0002\u0002\u0002\"\u0108\u0003\u0002\u0002\u0002",
    "$\u0116\u0003\u0002\u0002\u0002&\u013a\u0003\u0002\u0002\u0002(\u014a",
    "\u0003\u0002\u0002\u0002*\u014c\u0003\u0002\u0002\u0002,\u0150\u0003",
    "\u0002\u0002\u0002.\u0156\u0003\u0002\u0002\u00020\u0162\u0003\u0002",
    "\u0002\u000225\u0005\u0006\u0004\u000235\u0005\u0004\u0003\u000242\u0003",
    "\u0002\u0002\u000243\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u0002",
    "64\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027\u0003\u0003\u0002",
    "\u0002\u000286\u0003\u0002\u0002\u00029:\u0007\u000e\u0002\u0002:;\u0005",
    "\u0010\t\u0002;<\u0005\u000e\b\u0002<=\u0007\u001a\u0002\u0002=A\u0007",
    "\u0014\u0002\u0002>@\u0005\u0006\u0004\u0002?>\u0003\u0002\u0002\u0002",
    "@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002",
    "\u0002BD\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002DE\u0007\u0015",
    "\u0002\u0002E\u0005\u0003\u0002\u0002\u0002FG\u0007\u0006\u0002\u0002",
    "GH\u0005\u001a\u000e\u0002HI\u0007 \u0002\u0002IJ\u0005\u0010\t\u0002",
    "JK\u0005\u000e\b\u0002K\u0080\u0003\u0002\u0002\u0002LM\u0007\t\u0002",
    "\u0002MN\u0005\u001a\u000e\u0002NO\u0007 \u0002\u0002OP\u0005\u0010",
    "\t\u0002P\u0080\u0003\u0002\u0002\u0002QR\u0007\u0007\u0002\u0002RS",
    "\u0005\u001a\u000e\u0002ST\u0005\u0016\f\u0002TU\u0007 \u0002\u0002",
    "UV\u0005\u0010\t\u0002V\u0080\u0003\u0002\u0002\u0002WX\u0007\b\u0002",
    "\u0002X\u0080\u0005\u0010\t\u0002YZ\u0007\n\u0002\u0002Z[\u0005\u0010",
    "\t\u0002[\\\u0005\u000e\b\u0002\\\u0080\u0003\u0002\u0002\u0002]^\u0007",
    "\u000b\u0002\u0002^_\u0005\u0010\t\u0002_`\u0007\u001a\u0002\u0002`",
    "a\u0005\b\u0005\u0002ab\u0005\u000e\b\u0002b\u0080\u0003\u0002\u0002",
    "\u0002cd\u0007\f\u0002\u0002de\u0005\u0010\t\u0002ef\u0007\u001a\u0002",
    "\u0002fg\u0005\n\u0006\u0002g\u0080\u0003\u0002\u0002\u0002hj\u0007",
    "\r\u0002\u0002ik\u0005\u0010\t\u0002ji\u0003\u0002\u0002\u0002jk\u0003",
    "\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lr\u0007\u0014\u0002\u0002",
    "mn\u0005\f\u0007\u0002no\u0007\u001b\u0002\u0002oq\u0003\u0002\u0002",
    "\u0002pm\u0003\u0002\u0002\u0002qt\u0003\u0002\u0002\u0002rp\u0003\u0002",
    "\u0002\u0002rs\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003",
    "\u0002\u0002\u0002uw\u0005\f\u0007\u0002vu\u0003\u0002\u0002\u0002v",
    "w\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002x\u0080\u0007\u0015",
    "\u0002\u0002yz\u0007\u000f\u0002\u0002z{\u0005\u001a\u000e\u0002{|\u0007",
    "\u001f\u0002\u0002|}\u0005.\u0018\u0002}~\u0007\u0017\u0002\u0002~\u0080",
    "\u0003\u0002\u0002\u0002\u007fF\u0003\u0002\u0002\u0002\u007fL\u0003",
    "\u0002\u0002\u0002\u007fQ\u0003\u0002\u0002\u0002\u007fW\u0003\u0002",
    "\u0002\u0002\u007fY\u0003\u0002\u0002\u0002\u007f]\u0003\u0002\u0002",
    "\u0002\u007fc\u0003\u0002\u0002\u0002\u007fh\u0003\u0002\u0002\u0002",
    "\u007fy\u0003\u0002\u0002\u0002\u0080\u0007\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0005\u0018\r\u0002\u0082\u0083\u0007!\u0002\u0002\u0083",
    "\u0084\u0005\u0010\t\u0002\u0084\t\u0003\u0002\u0002\u0002\u0085\u008b",
    "\u0007\u0014\u0002\u0002\u0086\u0087\u0005\b\u0005\u0002\u0087\u0088",
    "\u0007\u001a\u0002\u0002\u0088\u008a\u0003\u0002\u0002\u0002\u0089\u0086",
    "\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b\u0089",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008f",
    "\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u0090",
    "\u0005\b\u0005\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0007\u0015\u0002\u0002\u0092\u000b\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0005\u0010\t\u0002\u0094\u0095\u0005\u000e\b\u0002\u0095\r\u0003\u0002",
    "\u0002\u0002\u0096\u0097\u0007\u001a\u0002\u0002\u0097\u0099\u0005\u0010",
    "\t\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002",
    "\u0002\u0002\u0099\u000f\u0003\u0002\u0002\u0002\u009a\u009b\b\t\u0001",
    "\u0002\u009b\u009c\u0005\u001a\u000e\u0002\u009c\u009d\u0005\u0012\n",
    "\u0002\u009d\u00b9\u0003\u0002\u0002\u0002\u009e\u009f\u0007\"\u0002",
    "\u0002\u009f\u00b9\u0005\u0010\t\u000f\u00a0\u00a1\u0007#\u0002\u0002",
    "\u00a1\u00b9\u0005\u0010\t\u000e\u00a2\u00a3\u0007.\u0002\u0002\u00a3",
    "\u00b9\u0005\u0010\t\r\u00a4\u00b9\u0005\u001a\u000e\u0002\u00a5\u00b9",
    "\u0005\u001c\u000f\u0002\u00a6\u00a7\u0007\u0016\u0002\u0002\u00a7\u00ac",
    "\u0005*\u0016\u0002\u00a8\u00a9\u0007\u001a\u0002\u0002\u00a9\u00ab",
    "\u0005*\u0016\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00ab\u00ae",
    "\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0003\u0002\u0002\u0002\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00ac",
    "\u0003\u0002\u0002\u0002\u00af\u00b1\u0007\u001a\u0002\u0002\u00b0\u00af",
    "\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2",
    "\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u0017\u0002\u0002\u00b3\u00b9",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007\u0012\u0002\u0002\u00b5\u00b6",
    "\u0005\u0010\t\u0002\u00b6\u00b7\u0007\u0013\u0002\u0002\u00b7\u00b9",
    "\u0003\u0002\u0002\u0002\u00b8\u009a\u0003\u0002\u0002\u0002\u00b8\u009e",
    "\u0003\u0002\u0002\u0002\u00b8\u00a0\u0003\u0002\u0002\u0002\u00b8\u00a2",
    "\u0003\u0002\u0002\u0002\u00b8\u00a4\u0003\u0002\u0002\u0002\u00b8\u00a5",
    "\u0003\u0002\u0002\u0002\u00b8\u00a6\u0003\u0002\u0002\u0002\u00b8\u00b4",
    "\u0003\u0002\u0002\u0002\u00b9\u00d6\u0003\u0002\u0002\u0002\u00ba\u00bb",
    "\f\f\u0002\u0002\u00bb\u00bc\u0007\'\u0002\u0002\u00bc\u00d5\u0005\u0010",
    "\t\f\u00bd\u00be\f\u000b\u0002\u0002\u00be\u00bf\t\u0002\u0002\u0002",
    "\u00bf\u00d5\u0005\u0010\t\f\u00c0\u00c1\f\n\u0002\u0002\u00c1\u00c2",
    "\t\u0003\u0002\u0002\u00c2\u00d5\u0005\u0010\t\u000b\u00c3\u00c4\f\t",
    "\u0002\u0002\u00c4\u00c5\t\u0004\u0002\u0002\u00c5\u00d5\u0005\u0010",
    "\t\n\u00c6\u00c7\f\b\u0002\u0002\u00c7\u00c8\u0007/\u0002\u0002\u00c8",
    "\u00d5\u0005\u0010\t\t\u00c9\u00ca\f\u0007\u0002\u0002\u00ca\u00cb\u0007",
    "0\u0002\u0002\u00cb\u00d5\u0005\u0010\t\b\u00cc\u00cd\f\u0012\u0002",
    "\u0002\u00cd\u00ce\u0007\u001c\u0002\u0002\u00ce\u00d5\u0005\u001a\u000e",
    "\u0002\u00cf\u00d0\f\u0011\u0002\u0002\u00d0\u00d1\u0007\u0014\u0002",
    "\u0002\u00d1\u00d2\u0005\u0010\t\u0002\u00d2\u00d3\u0007\u0015\u0002",
    "\u0002\u00d3\u00d5\u0003\u0002\u0002\u0002\u00d4\u00ba\u0003\u0002\u0002",
    "\u0002\u00d4\u00bd\u0003\u0002\u0002\u0002\u00d4\u00c0\u0003\u0002\u0002",
    "\u0002\u00d4\u00c3\u0003\u0002\u0002\u0002\u00d4\u00c6\u0003\u0002\u0002",
    "\u0002\u00d4\u00c9\u0003\u0002\u0002\u0002\u00d4\u00cc\u0003\u0002\u0002",
    "\u0002\u00d4\u00cf\u0003\u0002\u0002\u0002\u00d5\u00d8\u0003\u0002\u0002",
    "\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002",
    "\u0002\u00d7\u0011\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002",
    "\u0002\u00d9\u00df\u0007\u0012\u0002\u0002\u00da\u00db\u0005\u0010\t",
    "\u0002\u00db\u00dc\u0007\u001a\u0002\u0002\u00dc\u00de\u0003\u0002\u0002",
    "\u0002\u00dd\u00da\u0003\u0002\u0002\u0002\u00de\u00e1\u0003\u0002\u0002",
    "\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002",
    "\u0002\u00e0\u00e2\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002",
    "\u0002\u00e2\u00e3\u0005\u0010\t\u0002\u00e3\u00e4\u0007\u0013\u0002",
    "\u0002\u00e4\u0013\u0003\u0002\u0002\u0002\u00e5\u00e8\u0005\u001a\u000e",
    "\u0002\u00e6\u00e7\u0007\u0018\u0002\u0002\u00e7\u00e9\u0005\u001a\u000e",
    "\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002",
    "\u0002\u00e9\u0015\u0003\u0002\u0002\u0002\u00ea\u00f0\u0007\u0012\u0002",
    "\u0002\u00eb\u00ec\u0005\u0014\u000b\u0002\u00ec\u00ed\u0007\u001a\u0002",
    "\u0002\u00ed\u00ef\u0003\u0002\u0002\u0002\u00ee\u00eb\u0003\u0002\u0002",
    "\u0002\u00ef\u00f2\u0003\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002",
    "\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f3\u0003\u0002\u0002",
    "\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f3\u00f4\u0005\u0014\u000b",
    "\u0002\u00f4\u00f5\u0007\u0013\u0002\u0002\u00f5\u0017\u0003\u0002\u0002",
    "\u0002\u00f6\u00f7\u0007\u001d\u0002\u0002\u00f7\u00f8\u0005\u001a\u000e",
    "\u0002\u00f8\u0019\u0003\u0002\u0002\u0002\u00f9\u00fa\u00071\u0002",
    "\u0002\u00fa\u001b\u0003\u0002\u0002\u0002\u00fb\u0103\u0005\u001e\u0010",
    "\u0002\u00fc\u0103\u0005 \u0011\u0002\u00fd\u0103\u0005\"\u0012\u0002",
    "\u00fe\u0103\u0005&\u0014\u0002\u00ff\u0103\u0005(\u0015\u0002\u0100",
    "\u0103\u00050\u0019\u0002\u0101\u0103\u0005$\u0013\u0002\u0102\u00fb",
    "\u0003\u0002\u0002\u0002\u0102\u00fc\u0003\u0002\u0002\u0002\u0102\u00fd",
    "\u0003\u0002\u0002\u0002\u0102\u00fe\u0003\u0002\u0002\u0002\u0102\u00ff",
    "\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0102\u0101",
    "\u0003\u0002\u0002\u0002\u0103\u001d\u0003\u0002\u0002\u0002\u0104\u0105",
    "\u0007\u0003\u0002\u0002\u0105\u001f\u0003\u0002\u0002\u0002\u0106\u0107",
    "\u0007\u0005\u0002\u0002\u0107!\u0003\u0002\u0002\u0002\u0108\u010e",
    "\u0007\u0014\u0002\u0002\u0109\u010a\u0005\u0010\t\u0002\u010a\u010b",
    "\u0007\u001a\u0002\u0002\u010b\u010d\u0003\u0002\u0002\u0002\u010c\u0109",
    "\u0003\u0002\u0002\u0002\u010d\u0110\u0003\u0002\u0002\u0002\u010e\u010c",
    "\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f\u0112",
    "\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0111\u0113",
    "\u0005\u0010\t\u0002\u0112\u0111\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0003\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0115",
    "\u0007\u0015\u0002\u0002\u0115#\u0003\u0002\u0002\u0002\u0116\u0117",
    "\u0007\u0012\u0002\u0002\u0117\u0118\u0005\u0010\t\u0002\u0118\u0119",
    "\u0007\u001a\u0002\u0002\u0119\u011a\u0005\u0010\t\u0002\u011a\u011b",
    "\u0007\u0013\u0002\u0002\u011b%\u0003\u0002\u0002\u0002\u011c\u011d",
    "\u0007\u0014\u0002\u0002\u011d\u0120\u0005\u0010\t\u0002\u011e\u011f",
    "\u0007\u001a\u0002\u0002\u011f\u0121\u0005\u0010\t\u0002\u0120\u011e",
    "\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0123",
    "\u0003\u0002\u0002\u0002\u0122\u0124\u0007\u001a\u0002\u0002\u0123\u0122",
    "\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u0125",
    "\u0003\u0002\u0002\u0002\u0125\u0127\u0007\u0004\u0002\u0002\u0126\u0128",
    "\u0007\u001a\u0002\u0002\u0127\u0126\u0003\u0002\u0002\u0002\u0127\u0128",
    "\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u012a",
    "\u0005\u0010\t\u0002\u012a\u012b\u0007\u0015\u0002\u0002\u012b\u013b",
    "\u0003\u0002\u0002\u0002\u012c\u012d\u0007\u0014\u0002\u0002\u012d\u012f",
    "\u0005\u0010\t\u0002\u012e\u0130\u0007\u001a\u0002\u0002\u012f\u012e",
    "\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0131",
    "\u0003\u0002\u0002\u0002\u0131\u0133\u0007\u0004\u0002\u0002\u0132\u0134",
    "\u0007\u001a\u0002\u0002\u0133\u0132\u0003\u0002\u0002\u0002\u0133\u0134",
    "\u0003\u0002\u0002\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u0135\u0136",
    "\u0005\u0010\t\u0002\u0136\u0137\u0007\u0018\u0002\u0002\u0137\u0138",
    "\u0005\u0010\t\u0002\u0138\u0139\u0007\u0015\u0002\u0002\u0139\u013b",
    "\u0003\u0002\u0002\u0002\u013a\u011c\u0003\u0002\u0002\u0002\u013a\u012c",
    "\u0003\u0002\u0002\u0002\u013b\'\u0003\u0002\u0002\u0002\u013c\u013d",
    "\u0007\u0014\u0002\u0002\u013d\u013e\u0005\u0010\t\u0002\u013e\u013f",
    "\u0007\u0018\u0002\u0002\u013f\u0140\u0005\u0010\t\u0002\u0140\u0141",
    "\u0007\u0015\u0002\u0002\u0141\u014b\u0003\u0002\u0002\u0002\u0142\u0143",
    "\u0007\u0014\u0002\u0002\u0143\u0144\u0005\u0010\t\u0002\u0144\u0145",
    "\u0007\u0018\u0002\u0002\u0145\u0146\u0005\u0010\t\u0002\u0146\u0147",
    "\u0007\u0018\u0002\u0002\u0147\u0148\u0005\u0010\t\u0002\u0148\u0149",
    "\u0007\u0015\u0002\u0002\u0149\u014b\u0003\u0002\u0002\u0002\u014a\u013c",
    "\u0003\u0002\u0002\u0002\u014a\u0142\u0003\u0002\u0002\u0002\u014b)",
    "\u0003\u0002\u0002\u0002\u014c\u014d\u0005\u0010\t\u0002\u014d\u014e",
    "\u0007\u0018\u0002\u0002\u014e\u014f\u0005\u0010\t\u0002\u014f+\u0003",
    "\u0002\u0002\u0002\u0150\u0151\u0005\u001a\u000e\u0002\u0151\u0154\u0007",
    "\u0018\u0002\u0002\u0152\u0155\u0005\u0010\t\u0002\u0153\u0155\u0005",
    "\n\u0006\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0154\u0153\u0003",
    "\u0002\u0002\u0002\u0155-\u0003\u0002\u0002\u0002\u0156\u015b\u0005",
    ",\u0017\u0002\u0157\u0158\u0007\u001a\u0002\u0002\u0158\u015a\u0005",
    ",\u0017\u0002\u0159\u0157\u0003\u0002\u0002\u0002\u015a\u015d\u0003",
    "\u0002\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015b\u015c\u0003",
    "\u0002\u0002\u0002\u015c\u015f\u0003\u0002\u0002\u0002\u015d\u015b\u0003",
    "\u0002\u0002\u0002\u015e\u0160\u0007\u001a\u0002\u0002\u015f\u015e\u0003",
    "\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002\u0160/\u0003",
    "\u0002\u0002\u0002\u0161\u0163\u0005\u001a\u000e\u0002\u0162\u0161\u0003",
    "\u0002\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002\u0163\u0164\u0003",
    "\u0002\u0002\u0002\u0164\u0165\u0007\u001f\u0002\u0002\u0165\u0166\u0005",
    ".\u0018\u0002\u0166\u0167\u0007\u0017\u0002\u0002\u01671\u0003\u0002",
    "\u0002\u0002\"46Ajrv\u007f\u008b\u008f\u0098\u00ac\u00b0\u00b8\u00d4",
    "\u00d6\u00df\u00e8\u00f0\u0102\u010e\u0112\u0120\u0123\u0127\u012f\u0133",
    "\u013a\u014a\u0154\u015b\u015f\u0162"].join("");


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
    static ruleNames = [ "program", "folderStatement", "nestableStatement", 
                         "assignment", "assignmentList", "tableLine", "optionalMetadata", 
                         "mathExpr", "functionArguments", "functionDefinitionPart", 
                         "functionDefinitionArguments", "variableReference", 
                         "identifier", "literal", "numberLiteral", "stringLiteral", 
                         "listLiteral", "pointLiteral", "rangeListLiteral", 
                         "intervalLiteral", "piecewiseBranch", "objectBranch", 
                         "objectInside", "objectLiteral" ];

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
    	case 7:
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
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DesmosPlusParser.Let) | (1 << DesmosPlusParser.Def) | (1 << DesmosPlusParser.Note) | (1 << DesmosPlusParser.Const) | (1 << DesmosPlusParser.Show) | (1 << DesmosPlusParser.Parametric) | (1 << DesmosPlusParser.Simulation) | (1 << DesmosPlusParser.Table) | (1 << DesmosPlusParser.Folder) | (1 << DesmosPlusParser.Type))) !== 0)) {
	            this.state = 50;
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
	                this.state = 48;
	                this.nestableStatement();
	                break;
	            case DesmosPlusParser.Folder:
	                this.state = 49;
	                this.folderStatement();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	    this.enterRule(localctx, 2, DesmosPlusParser.RULE_folderStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(DesmosPlusParser.Folder);
	        this.state = 56;
	        localctx.name = this.mathExpr(0);
	        this.state = 57;
	        this.optionalMetadata();
	        this.state = 58;
	        this.match(DesmosPlusParser.Comma);
	        this.state = 59;
	        this.match(DesmosPlusParser.OpenBracket);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DesmosPlusParser.Let) | (1 << DesmosPlusParser.Def) | (1 << DesmosPlusParser.Note) | (1 << DesmosPlusParser.Const) | (1 << DesmosPlusParser.Show) | (1 << DesmosPlusParser.Parametric) | (1 << DesmosPlusParser.Simulation) | (1 << DesmosPlusParser.Table) | (1 << DesmosPlusParser.Type))) !== 0)) {
	            this.state = 60;
	            this.nestableStatement();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 66;
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
	    this.enterRule(localctx, 4, DesmosPlusParser.RULE_nestableStatement);
	    var _la = 0; // Token type
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DesmosPlusParser.Let:
	            localctx = new LetStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.match(DesmosPlusParser.Let);
	            this.state = 69;
	            this.identifier();
	            this.state = 70;
	            this.match(DesmosPlusParser.Define);
	            this.state = 71;
	            this.mathExpr(0);
	            this.state = 72;
	            this.optionalMetadata();
	            break;
	        case DesmosPlusParser.Const:
	            localctx = new ConstStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.match(DesmosPlusParser.Const);
	            this.state = 75;
	            this.identifier();
	            this.state = 76;
	            this.match(DesmosPlusParser.Define);
	            this.state = 77;
	            this.mathExpr(0);
	            break;
	        case DesmosPlusParser.Def:
	            localctx = new DefStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 79;
	            this.match(DesmosPlusParser.Def);
	            this.state = 80;
	            this.identifier();
	            this.state = 81;
	            this.functionDefinitionArguments();
	            this.state = 82;
	            this.match(DesmosPlusParser.Define);
	            this.state = 83;
	            this.mathExpr(0);
	            break;
	        case DesmosPlusParser.Note:
	            localctx = new NoteStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
	            this.match(DesmosPlusParser.Note);
	            this.state = 86;
	            this.mathExpr(0);
	            break;
	        case DesmosPlusParser.Show:
	            localctx = new ShowStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 87;
	            this.match(DesmosPlusParser.Show);
	            this.state = 88;
	            this.mathExpr(0);
	            this.state = 89;
	            this.optionalMetadata();
	            break;
	        case DesmosPlusParser.Parametric:
	            localctx = new ParametricStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 91;
	            this.match(DesmosPlusParser.Parametric);
	            this.state = 92;
	            this.mathExpr(0);
	            this.state = 93;
	            this.match(DesmosPlusParser.Comma);
	            this.state = 94;
	            this.assignment();
	            this.state = 95;
	            this.optionalMetadata();
	            break;
	        case DesmosPlusParser.Simulation:
	            localctx = new SimulationStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 97;
	            this.match(DesmosPlusParser.Simulation);
	            this.state = 98;
	            localctx.fps = this.mathExpr(0);
	            this.state = 99;
	            this.match(DesmosPlusParser.Comma);
	            this.state = 100;
	            this.assignmentList();
	            break;
	        case DesmosPlusParser.Table:
	            localctx = new TableStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 102;
	            this.match(DesmosPlusParser.Table);
	            this.state = 104;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 103;
	                localctx.xlist = this.mathExpr(0);

	            }
	            this.state = 106;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 112;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 107;
	                    this.tableLine();
	                    this.state = 108;
	                    this.match(DesmosPlusParser.Semicolon); 
	                }
	                this.state = 114;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DesmosPlusParser.NumberLiteral) | (1 << DesmosPlusParser.StringLiteral) | (1 << DesmosPlusParser.OpenParen) | (1 << DesmosPlusParser.OpenBracket) | (1 << DesmosPlusParser.OpenBrace) | (1 << DesmosPlusParser.ObjectOpen))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (DesmosPlusParser.Add - 32)) | (1 << (DesmosPlusParser.Subtract - 32)) | (1 << (DesmosPlusParser.Not - 32)) | (1 << (DesmosPlusParser.Identifier - 32)))) !== 0)) {
	                this.state = 115;
	                this.tableLine();
	            }

	            this.state = 118;
	            this.match(DesmosPlusParser.CloseBracket);
	            break;
	        case DesmosPlusParser.Type:
	            localctx = new TypeDeclarationStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 119;
	            this.match(DesmosPlusParser.Type);
	            this.state = 120;
	            localctx.name = this.identifier();
	            this.state = 121;
	            this.match(DesmosPlusParser.ObjectOpen);
	            this.state = 122;
	            this.objectInside();
	            this.state = 123;
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
	    this.enterRule(localctx, 6, DesmosPlusParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.variableReference();
	        this.state = 128;
	        this.match(DesmosPlusParser.Assign);
	        this.state = 129;
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
	    this.enterRule(localctx, 8, DesmosPlusParser.RULE_assignmentList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(DesmosPlusParser.OpenBracket);
	        this.state = 137;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 132;
	                this.assignment();
	                this.state = 133;
	                this.match(DesmosPlusParser.Comma); 
	            }
	            this.state = 139;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DesmosPlusParser.DollarSign) {
	            this.state = 140;
	            this.assignment();
	        }

	        this.state = 143;
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
	    this.enterRule(localctx, 10, DesmosPlusParser.RULE_tableLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.mathExpr(0);
	        this.state = 146;
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
	    this.enterRule(localctx, 12, DesmosPlusParser.RULE_optionalMetadata);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 148;
	            this.match(DesmosPlusParser.Comma);
	            this.state = 149;
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
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, DesmosPlusParser.RULE_mathExpr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 153;
	            this.identifier();
	            this.state = 154;
	            this.functionArguments();
	            break;

	        case 2:
	            localctx = new UnaryPlusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 156;
	            localctx.op = this.match(DesmosPlusParser.Add);
	            this.state = 157;
	            this.mathExpr(13);
	            break;

	        case 3:
	            localctx = new UnaryMinusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 158;
	            localctx.op = this.match(DesmosPlusParser.Subtract);
	            this.state = 159;
	            this.mathExpr(12);
	            break;

	        case 4:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 160;
	            localctx.op = this.match(DesmosPlusParser.Not);
	            this.state = 161;
	            this.mathExpr(11);
	            break;

	        case 5:
	            localctx = new VariableExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 162;
	            this.identifier();
	            break;

	        case 6:
	            localctx = new LiteralExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 163;
	            this.literal();
	            break;

	        case 7:
	            localctx = new PiecewiseExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 164;
	            this.match(DesmosPlusParser.OpenBrace);
	            this.state = 165;
	            this.piecewiseBranch();
	            this.state = 170;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 166;
	                    this.match(DesmosPlusParser.Comma);
	                    this.state = 167;
	                    this.piecewiseBranch(); 
	                }
	                this.state = 172;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 173;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 176;
	            this.match(DesmosPlusParser.CloseBrace);
	            break;

	        case 8:
	            localctx = new ParenthesizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 178;
	            this.match(DesmosPlusParser.OpenParen);
	            this.state = 179;
	            this.mathExpr(0);
	            this.state = 180;
	            this.match(DesmosPlusParser.CloseParen);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 212;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 210;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 184;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 185;
	                    this.match(DesmosPlusParser.Power);
	                    this.state = 186;
	                    this.mathExpr(10);
	                    break;

	                case 2:
	                    localctx = new MultiplicativeExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 187;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 188;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (DesmosPlusParser.Multiply - 34)) | (1 << (DesmosPlusParser.Divide - 34)) | (1 << (DesmosPlusParser.Modulus - 34)))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 189;
	                    this.mathExpr(10);
	                    break;

	                case 3:
	                    localctx = new AdditiveExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 190;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 191;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===DesmosPlusParser.Add || _la===DesmosPlusParser.Subtract)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 192;
	                    this.mathExpr(9);
	                    break;

	                case 4:
	                    localctx = new ComparisonChainExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 193;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 194;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (DesmosPlusParser.GreaterThanOrEqual - 38)) | (1 << (DesmosPlusParser.GreaterThan - 38)) | (1 << (DesmosPlusParser.LessThanOrEqual - 38)) | (1 << (DesmosPlusParser.LessThan - 38)) | (1 << (DesmosPlusParser.Equals - 38)) | (1 << (DesmosPlusParser.NotEquals - 38)))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 195;
	                    localctx.right = this.mathExpr(8);
	                    break;

	                case 5:
	                    localctx = new AndExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 196;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 197;
	                    this.match(DesmosPlusParser.And);
	                    this.state = 198;
	                    this.mathExpr(7);
	                    break;

	                case 6:
	                    localctx = new OrExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 199;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 200;
	                    this.match(DesmosPlusParser.Or);
	                    this.state = 201;
	                    this.mathExpr(6);
	                    break;

	                case 7:
	                    localctx = new ObjectAccessExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 202;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 203;
	                    this.match(DesmosPlusParser.Dot);
	                    this.state = 204;
	                    this.identifier();
	                    break;

	                case 8:
	                    localctx = new ListIndexExpressionContext(this, new MathExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DesmosPlusParser.RULE_mathExpr);
	                    this.state = 205;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 206;
	                    this.match(DesmosPlusParser.OpenBracket);
	                    this.state = 207;
	                    this.mathExpr(0);
	                    this.state = 208;
	                    this.match(DesmosPlusParser.CloseBracket);
	                    break;

	                } 
	            }
	            this.state = 214;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
	    this.enterRule(localctx, 16, DesmosPlusParser.RULE_functionArguments);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(DesmosPlusParser.OpenParen);
	        this.state = 221;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 216;
	                this.mathExpr(0);
	                this.state = 217;
	                this.match(DesmosPlusParser.Comma); 
	            }
	            this.state = 223;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 224;
	        this.mathExpr(0);
	        this.state = 225;
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
	    this.enterRule(localctx, 18, DesmosPlusParser.RULE_functionDefinitionPart);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        localctx.variable = this.identifier();
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DesmosPlusParser.Colon) {
	            this.state = 228;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 229;
	            localctx.type = this.identifier();
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
	    this.enterRule(localctx, 20, DesmosPlusParser.RULE_functionDefinitionArguments);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(DesmosPlusParser.OpenParen);
	        this.state = 238;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 233;
	                this.functionDefinitionPart();
	                this.state = 234;
	                this.match(DesmosPlusParser.Comma); 
	            }
	            this.state = 240;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 241;
	        this.functionDefinitionPart();
	        this.state = 242;
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
	    this.enterRule(localctx, 22, DesmosPlusParser.RULE_variableReference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.match(DesmosPlusParser.DollarSign);
	        this.state = 245;
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
	    this.enterRule(localctx, 24, DesmosPlusParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
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
	    this.enterRule(localctx, 26, DesmosPlusParser.RULE_literal);
	    try {
	        this.state = 256;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 249;
	            this.numberLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 250;
	            this.stringLiteral();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 251;
	            this.listLiteral();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 252;
	            this.rangeListLiteral();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 253;
	            this.intervalLiteral();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 254;
	            this.objectLiteral();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 255;
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
	    this.enterRule(localctx, 28, DesmosPlusParser.RULE_numberLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
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
	    this.enterRule(localctx, 30, DesmosPlusParser.RULE_stringLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
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
	    this.enterRule(localctx, 32, DesmosPlusParser.RULE_listLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(DesmosPlusParser.OpenBracket);
	        this.state = 268;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 263;
	                this.mathExpr(0);
	                this.state = 264;
	                this.match(DesmosPlusParser.Comma); 
	            }
	            this.state = 270;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 272;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DesmosPlusParser.NumberLiteral) | (1 << DesmosPlusParser.StringLiteral) | (1 << DesmosPlusParser.OpenParen) | (1 << DesmosPlusParser.OpenBracket) | (1 << DesmosPlusParser.OpenBrace) | (1 << DesmosPlusParser.ObjectOpen))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (DesmosPlusParser.Add - 32)) | (1 << (DesmosPlusParser.Subtract - 32)) | (1 << (DesmosPlusParser.Not - 32)) | (1 << (DesmosPlusParser.Identifier - 32)))) !== 0)) {
	            this.state = 271;
	            this.mathExpr(0);
	        }

	        this.state = 274;
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
	    this.enterRule(localctx, 34, DesmosPlusParser.RULE_pointLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(DesmosPlusParser.OpenParen);
	        this.state = 277;
	        this.mathExpr(0);
	        this.state = 278;
	        this.match(DesmosPlusParser.Comma);
	        this.state = 279;
	        this.mathExpr(0);
	        this.state = 280;
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
	    this.enterRule(localctx, 36, DesmosPlusParser.RULE_rangeListLiteral);
	    var _la = 0; // Token type
	    try {
	        this.state = 312;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TermedRangeListLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 282;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 283;
	            this.mathExpr(0);
	            this.state = 286;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            if(la_===1) {
	                this.state = 284;
	                this.match(DesmosPlusParser.Comma);
	                this.state = 285;
	                this.mathExpr(0);

	            }
	            this.state = 289;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 288;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 291;
	            this.match(DesmosPlusParser.Ellipsis);
	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 292;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 295;
	            this.mathExpr(0);
	            this.state = 296;
	            this.match(DesmosPlusParser.CloseBracket);
	            break;

	        case 2:
	            localctx = new SteppedRangeListLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 298;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 299;
	            this.mathExpr(0);
	            this.state = 301;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 300;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 303;
	            this.match(DesmosPlusParser.Ellipsis);
	            this.state = 305;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DesmosPlusParser.Comma) {
	                this.state = 304;
	                this.match(DesmosPlusParser.Comma);
	            }

	            this.state = 307;
	            this.mathExpr(0);
	            this.state = 308;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 309;
	            this.mathExpr(0);
	            this.state = 310;
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
	    this.enterRule(localctx, 38, DesmosPlusParser.RULE_intervalLiteral);
	    try {
	        this.state = 328;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 314;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 315;
	            this.mathExpr(0);
	            this.state = 316;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 317;
	            this.mathExpr(0);
	            this.state = 318;
	            this.match(DesmosPlusParser.CloseBracket);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 320;
	            this.match(DesmosPlusParser.OpenBracket);
	            this.state = 321;
	            this.mathExpr(0);
	            this.state = 322;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 323;
	            this.mathExpr(0);
	            this.state = 324;
	            this.match(DesmosPlusParser.Colon);
	            this.state = 325;
	            this.mathExpr(0);
	            this.state = 326;
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
	    this.enterRule(localctx, 40, DesmosPlusParser.RULE_piecewiseBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        localctx.condition = this.mathExpr(0);
	        this.state = 331;
	        this.match(DesmosPlusParser.Colon);
	        this.state = 332;
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
	    this.enterRule(localctx, 42, DesmosPlusParser.RULE_objectBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.identifier();
	        this.state = 335;
	        this.match(DesmosPlusParser.Colon);
	        this.state = 338;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 336;
	            this.mathExpr(0);
	            break;

	        case 2:
	            this.state = 337;
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
	    this.enterRule(localctx, 44, DesmosPlusParser.RULE_objectInside);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.objectBranch();
	        this.state = 345;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 341;
	                this.match(DesmosPlusParser.Comma);
	                this.state = 342;
	                this.objectBranch(); 
	            }
	            this.state = 347;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
	        }

	        this.state = 349;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DesmosPlusParser.Comma) {
	            this.state = 348;
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
	    this.enterRule(localctx, 46, DesmosPlusParser.RULE_objectLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DesmosPlusParser.Identifier) {
	            this.state = 351;
	            this.identifier();
	        }

	        this.state = 354;
	        this.match(DesmosPlusParser.ObjectOpen);
	        this.state = 355;
	        this.objectInside();
	        this.state = 356;
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
DesmosPlusParser.RULE_folderStatement = 1;
DesmosPlusParser.RULE_nestableStatement = 2;
DesmosPlusParser.RULE_assignment = 3;
DesmosPlusParser.RULE_assignmentList = 4;
DesmosPlusParser.RULE_tableLine = 5;
DesmosPlusParser.RULE_optionalMetadata = 6;
DesmosPlusParser.RULE_mathExpr = 7;
DesmosPlusParser.RULE_functionArguments = 8;
DesmosPlusParser.RULE_functionDefinitionPart = 9;
DesmosPlusParser.RULE_functionDefinitionArguments = 10;
DesmosPlusParser.RULE_variableReference = 11;
DesmosPlusParser.RULE_identifier = 12;
DesmosPlusParser.RULE_literal = 13;
DesmosPlusParser.RULE_numberLiteral = 14;
DesmosPlusParser.RULE_stringLiteral = 15;
DesmosPlusParser.RULE_listLiteral = 16;
DesmosPlusParser.RULE_pointLiteral = 17;
DesmosPlusParser.RULE_rangeListLiteral = 18;
DesmosPlusParser.RULE_intervalLiteral = 19;
DesmosPlusParser.RULE_piecewiseBranch = 20;
DesmosPlusParser.RULE_objectBranch = 21;
DesmosPlusParser.RULE_objectInside = 22;
DesmosPlusParser.RULE_objectLiteral = 23;

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

	folderStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FolderStatementContext);
	    } else {
	        return this.getTypedRuleContext(FolderStatementContext,i);
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
        this.type = null; // IdentifierContext
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	Colon() {
	    return this.getToken(DesmosPlusParser.Colon, 0);
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




DesmosPlusParser.ProgramContext = ProgramContext; 
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
