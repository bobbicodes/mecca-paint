// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__13174){
var vec__13175 = p__13174;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13175,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__13178 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__13182 = arguments.length;
switch (G__13182) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__13184_13208 = clojure.data.equality_partition;
var G__13185_13209 = "null";
var G__13186_13210 = ((function (G__13184_13208,G__13185_13209){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13184_13208,G__13185_13209))
;
goog.object.set(G__13184_13208,G__13185_13209,G__13186_13210);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__13187_13211 = clojure.data.equality_partition;
var G__13188_13212 = "string";
var G__13189_13213 = ((function (G__13187_13211,G__13188_13212){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13187_13211,G__13188_13212))
;
goog.object.set(G__13187_13211,G__13188_13212,G__13189_13213);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__13190_13214 = clojure.data.equality_partition;
var G__13191_13215 = "number";
var G__13192_13216 = ((function (G__13190_13214,G__13191_13215){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13190_13214,G__13191_13215))
;
goog.object.set(G__13190_13214,G__13191_13215,G__13192_13216);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__13193_13217 = clojure.data.equality_partition;
var G__13194_13218 = "array";
var G__13195_13219 = ((function (G__13193_13217,G__13194_13218){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__13193_13217,G__13194_13218))
;
goog.object.set(G__13193_13217,G__13194_13218,G__13195_13219);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__13196_13220 = clojure.data.equality_partition;
var G__13197_13221 = "function";
var G__13198_13222 = ((function (G__13196_13220,G__13197_13221){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13196_13220,G__13197_13221))
;
goog.object.set(G__13196_13220,G__13197_13221,G__13198_13222);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__13199_13223 = clojure.data.equality_partition;
var G__13200_13224 = "boolean";
var G__13201_13225 = ((function (G__13199_13223,G__13200_13224){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13199_13223,G__13200_13224))
;
goog.object.set(G__13199_13223,G__13200_13224,G__13201_13225);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__13202_13226 = clojure.data.equality_partition;
var G__13203_13227 = "_";
var G__13204_13228 = ((function (G__13202_13226,G__13203_13227){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__13202_13226,G__13203_13227))
;
goog.object.set(G__13202_13226,G__13203_13227,G__13204_13228);
goog.object.set(clojure.data.Diff,"null",true);

var G__13229_13253 = clojure.data.diff_similar;
var G__13230_13254 = "null";
var G__13231_13255 = ((function (G__13229_13253,G__13230_13254){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13229_13253,G__13230_13254))
;
goog.object.set(G__13229_13253,G__13230_13254,G__13231_13255);

goog.object.set(clojure.data.Diff,"string",true);

var G__13232_13256 = clojure.data.diff_similar;
var G__13233_13257 = "string";
var G__13234_13258 = ((function (G__13232_13256,G__13233_13257){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13232_13256,G__13233_13257))
;
goog.object.set(G__13232_13256,G__13233_13257,G__13234_13258);

goog.object.set(clojure.data.Diff,"number",true);

var G__13235_13259 = clojure.data.diff_similar;
var G__13236_13260 = "number";
var G__13237_13261 = ((function (G__13235_13259,G__13236_13260){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13235_13259,G__13236_13260))
;
goog.object.set(G__13235_13259,G__13236_13260,G__13237_13261);

goog.object.set(clojure.data.Diff,"array",true);

var G__13238_13262 = clojure.data.diff_similar;
var G__13239_13263 = "array";
var G__13240_13264 = ((function (G__13238_13262,G__13239_13263){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__13238_13262,G__13239_13263))
;
goog.object.set(G__13238_13262,G__13239_13263,G__13240_13264);

goog.object.set(clojure.data.Diff,"function",true);

var G__13241_13265 = clojure.data.diff_similar;
var G__13242_13266 = "function";
var G__13243_13267 = ((function (G__13241_13265,G__13242_13266){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13241_13265,G__13242_13266))
;
goog.object.set(G__13241_13265,G__13242_13266,G__13243_13267);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__13244_13268 = clojure.data.diff_similar;
var G__13245_13269 = "boolean";
var G__13246_13270 = ((function (G__13244_13268,G__13245_13269){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13244_13268,G__13245_13269))
;
goog.object.set(G__13244_13268,G__13245_13269,G__13246_13270);

goog.object.set(clojure.data.Diff,"_",true);

var G__13247_13271 = clojure.data.diff_similar;
var G__13248_13272 = "_";
var G__13249_13273 = ((function (G__13247_13271,G__13248_13272){
return (function (a,b){
var fexpr__13251 = (function (){var G__13252 = clojure.data.equality_partition(a);
var G__13252__$1 = (((G__13252 instanceof cljs.core.Keyword))?G__13252.fqn:null);
switch (G__13252__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13252__$1)].join('')));

}
})();
return (fexpr__13251.cljs$core$IFn$_invoke$arity$2 ? fexpr__13251.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__13251.call(null,a,b));
});})(G__13247_13271,G__13248_13272))
;
goog.object.set(G__13247_13271,G__13248_13272,G__13249_13273);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
