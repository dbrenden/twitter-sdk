// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__10081__auto__,writer__10082__auto__,opt__10083__auto__){
return cljs.core._write.call(null,writer__10082__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12853 = arguments.length;
var i__10646__auto___12854 = (0);
while(true){
if((i__10646__auto___12854 < len__10645__auto___12853)){
args__10652__auto__.push((arguments[i__10646__auto___12854]));

var G__12855 = (i__10646__auto___12854 + (1));
i__10646__auto___12854 = G__12855;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12852){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12852));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12857 = arguments.length;
var i__10646__auto___12858 = (0);
while(true){
if((i__10646__auto___12858 < len__10645__auto___12857)){
args__10652__auto__.push((arguments[i__10646__auto___12858]));

var G__12859 = (i__10646__auto___12858 + (1));
i__10646__auto___12858 = G__12859;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12856){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12856));
});

var g_QMARK__12860 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_12861 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12860){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12860))
,null));
var mkg_12862 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12860,g_12861){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12860,g_12861))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12860,g_12861,mkg_12862){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12860).call(null,x);
});})(g_QMARK__12860,g_12861,mkg_12862))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12860,g_12861,mkg_12862){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12862).call(null,gfn);
});})(g_QMARK__12860,g_12861,mkg_12862))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12860,g_12861,mkg_12862){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12861).call(null,generator);
});})(g_QMARK__12860,g_12861,mkg_12862))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10745__auto___12882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__10745__auto___12882){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12883 = arguments.length;
var i__10646__auto___12884 = (0);
while(true){
if((i__10646__auto___12884 < len__10645__auto___12883)){
args__10652__auto__.push((arguments[i__10646__auto___12884]));

var G__12885 = (i__10646__auto___12884 + (1));
i__10646__auto___12884 = G__12885;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12882))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12882){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12882),args);
});})(g__10745__auto___12882))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__10745__auto___12882){
return (function (seq12863){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12863));
});})(g__10745__auto___12882))
;


var g__10745__auto___12886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__10745__auto___12886){
return (function cljs$spec$impl$gen$list(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12887 = arguments.length;
var i__10646__auto___12888 = (0);
while(true){
if((i__10646__auto___12888 < len__10645__auto___12887)){
args__10652__auto__.push((arguments[i__10646__auto___12888]));

var G__12889 = (i__10646__auto___12888 + (1));
i__10646__auto___12888 = G__12889;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12886))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12886),args);
});})(g__10745__auto___12886))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__10745__auto___12886){
return (function (seq12864){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12864));
});})(g__10745__auto___12886))
;


var g__10745__auto___12890 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__10745__auto___12890){
return (function cljs$spec$impl$gen$map(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12891 = arguments.length;
var i__10646__auto___12892 = (0);
while(true){
if((i__10646__auto___12892 < len__10645__auto___12891)){
args__10652__auto__.push((arguments[i__10646__auto___12892]));

var G__12893 = (i__10646__auto___12892 + (1));
i__10646__auto___12892 = G__12893;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12890))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12890){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12890),args);
});})(g__10745__auto___12890))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__10745__auto___12890){
return (function (seq12865){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12865));
});})(g__10745__auto___12890))
;


var g__10745__auto___12894 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__10745__auto___12894){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12895 = arguments.length;
var i__10646__auto___12896 = (0);
while(true){
if((i__10646__auto___12896 < len__10645__auto___12895)){
args__10652__auto__.push((arguments[i__10646__auto___12896]));

var G__12897 = (i__10646__auto___12896 + (1));
i__10646__auto___12896 = G__12897;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12894))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12894){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12894),args);
});})(g__10745__auto___12894))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__10745__auto___12894){
return (function (seq12866){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12866));
});})(g__10745__auto___12894))
;


var g__10745__auto___12898 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__10745__auto___12898){
return (function cljs$spec$impl$gen$set(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12899 = arguments.length;
var i__10646__auto___12900 = (0);
while(true){
if((i__10646__auto___12900 < len__10645__auto___12899)){
args__10652__auto__.push((arguments[i__10646__auto___12900]));

var G__12901 = (i__10646__auto___12900 + (1));
i__10646__auto___12900 = G__12901;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12898))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12898){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12898),args);
});})(g__10745__auto___12898))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__10745__auto___12898){
return (function (seq12867){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12867));
});})(g__10745__auto___12898))
;


var g__10745__auto___12902 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__10745__auto___12902){
return (function cljs$spec$impl$gen$vector(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12903 = arguments.length;
var i__10646__auto___12904 = (0);
while(true){
if((i__10646__auto___12904 < len__10645__auto___12903)){
args__10652__auto__.push((arguments[i__10646__auto___12904]));

var G__12905 = (i__10646__auto___12904 + (1));
i__10646__auto___12904 = G__12905;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12902))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12902){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12902),args);
});})(g__10745__auto___12902))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__10745__auto___12902){
return (function (seq12868){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12868));
});})(g__10745__auto___12902))
;


var g__10745__auto___12906 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__10745__auto___12906){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12907 = arguments.length;
var i__10646__auto___12908 = (0);
while(true){
if((i__10646__auto___12908 < len__10645__auto___12907)){
args__10652__auto__.push((arguments[i__10646__auto___12908]));

var G__12909 = (i__10646__auto___12908 + (1));
i__10646__auto___12908 = G__12909;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12906))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12906){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12906),args);
});})(g__10745__auto___12906))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__10745__auto___12906){
return (function (seq12869){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12869));
});})(g__10745__auto___12906))
;


var g__10745__auto___12910 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__10745__auto___12910){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12911 = arguments.length;
var i__10646__auto___12912 = (0);
while(true){
if((i__10646__auto___12912 < len__10645__auto___12911)){
args__10652__auto__.push((arguments[i__10646__auto___12912]));

var G__12913 = (i__10646__auto___12912 + (1));
i__10646__auto___12912 = G__12913;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12910))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12910){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12910),args);
});})(g__10745__auto___12910))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__10745__auto___12910){
return (function (seq12870){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12870));
});})(g__10745__auto___12910))
;


var g__10745__auto___12914 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__10745__auto___12914){
return (function cljs$spec$impl$gen$elements(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12915 = arguments.length;
var i__10646__auto___12916 = (0);
while(true){
if((i__10646__auto___12916 < len__10645__auto___12915)){
args__10652__auto__.push((arguments[i__10646__auto___12916]));

var G__12917 = (i__10646__auto___12916 + (1));
i__10646__auto___12916 = G__12917;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12914))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12914){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12914),args);
});})(g__10745__auto___12914))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__10745__auto___12914){
return (function (seq12871){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12871));
});})(g__10745__auto___12914))
;


var g__10745__auto___12918 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__10745__auto___12918){
return (function cljs$spec$impl$gen$bind(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12919 = arguments.length;
var i__10646__auto___12920 = (0);
while(true){
if((i__10646__auto___12920 < len__10645__auto___12919)){
args__10652__auto__.push((arguments[i__10646__auto___12920]));

var G__12921 = (i__10646__auto___12920 + (1));
i__10646__auto___12920 = G__12921;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12918))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12918){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12918),args);
});})(g__10745__auto___12918))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__10745__auto___12918){
return (function (seq12872){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12872));
});})(g__10745__auto___12918))
;


var g__10745__auto___12922 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__10745__auto___12922){
return (function cljs$spec$impl$gen$choose(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12923 = arguments.length;
var i__10646__auto___12924 = (0);
while(true){
if((i__10646__auto___12924 < len__10645__auto___12923)){
args__10652__auto__.push((arguments[i__10646__auto___12924]));

var G__12925 = (i__10646__auto___12924 + (1));
i__10646__auto___12924 = G__12925;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12922))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12922){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12922),args);
});})(g__10745__auto___12922))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__10745__auto___12922){
return (function (seq12873){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12873));
});})(g__10745__auto___12922))
;


var g__10745__auto___12926 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__10745__auto___12926){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12927 = arguments.length;
var i__10646__auto___12928 = (0);
while(true){
if((i__10646__auto___12928 < len__10645__auto___12927)){
args__10652__auto__.push((arguments[i__10646__auto___12928]));

var G__12929 = (i__10646__auto___12928 + (1));
i__10646__auto___12928 = G__12929;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12926))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12926){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12926),args);
});})(g__10745__auto___12926))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__10745__auto___12926){
return (function (seq12874){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12874));
});})(g__10745__auto___12926))
;


var g__10745__auto___12930 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__10745__auto___12930){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12931 = arguments.length;
var i__10646__auto___12932 = (0);
while(true){
if((i__10646__auto___12932 < len__10645__auto___12931)){
args__10652__auto__.push((arguments[i__10646__auto___12932]));

var G__12933 = (i__10646__auto___12932 + (1));
i__10646__auto___12932 = G__12933;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12930))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12930){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12930),args);
});})(g__10745__auto___12930))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__10745__auto___12930){
return (function (seq12875){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12875));
});})(g__10745__auto___12930))
;


var g__10745__auto___12934 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__10745__auto___12934){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12935 = arguments.length;
var i__10646__auto___12936 = (0);
while(true){
if((i__10646__auto___12936 < len__10645__auto___12935)){
args__10652__auto__.push((arguments[i__10646__auto___12936]));

var G__12937 = (i__10646__auto___12936 + (1));
i__10646__auto___12936 = G__12937;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12934))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12934){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12934),args);
});})(g__10745__auto___12934))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__10745__auto___12934){
return (function (seq12876){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12876));
});})(g__10745__auto___12934))
;


var g__10745__auto___12938 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__10745__auto___12938){
return (function cljs$spec$impl$gen$sample(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12939 = arguments.length;
var i__10646__auto___12940 = (0);
while(true){
if((i__10646__auto___12940 < len__10645__auto___12939)){
args__10652__auto__.push((arguments[i__10646__auto___12940]));

var G__12941 = (i__10646__auto___12940 + (1));
i__10646__auto___12940 = G__12941;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12938))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12938){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12938),args);
});})(g__10745__auto___12938))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__10745__auto___12938){
return (function (seq12877){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12877));
});})(g__10745__auto___12938))
;


var g__10745__auto___12942 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__10745__auto___12942){
return (function cljs$spec$impl$gen$return(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12943 = arguments.length;
var i__10646__auto___12944 = (0);
while(true){
if((i__10646__auto___12944 < len__10645__auto___12943)){
args__10652__auto__.push((arguments[i__10646__auto___12944]));

var G__12945 = (i__10646__auto___12944 + (1));
i__10646__auto___12944 = G__12945;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12942))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12942){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12942),args);
});})(g__10745__auto___12942))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__10745__auto___12942){
return (function (seq12878){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12878));
});})(g__10745__auto___12942))
;


var g__10745__auto___12946 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__10745__auto___12946){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12947 = arguments.length;
var i__10646__auto___12948 = (0);
while(true){
if((i__10646__auto___12948 < len__10645__auto___12947)){
args__10652__auto__.push((arguments[i__10646__auto___12948]));

var G__12949 = (i__10646__auto___12948 + (1));
i__10646__auto___12948 = G__12949;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12946))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12946){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12946),args);
});})(g__10745__auto___12946))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10745__auto___12946){
return (function (seq12879){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12879));
});})(g__10745__auto___12946))
;


var g__10745__auto___12950 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__10745__auto___12950){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12951 = arguments.length;
var i__10646__auto___12952 = (0);
while(true){
if((i__10646__auto___12952 < len__10645__auto___12951)){
args__10652__auto__.push((arguments[i__10646__auto___12952]));

var G__12953 = (i__10646__auto___12952 + (1));
i__10646__auto___12952 = G__12953;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12950))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12950){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12950),args);
});})(g__10745__auto___12950))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__10745__auto___12950){
return (function (seq12880){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12880));
});})(g__10745__auto___12950))
;


var g__10745__auto___12954 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__10745__auto___12954){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12955 = arguments.length;
var i__10646__auto___12956 = (0);
while(true){
if((i__10646__auto___12956 < len__10645__auto___12955)){
args__10652__auto__.push((arguments[i__10646__auto___12956]));

var G__12957 = (i__10646__auto___12956 + (1));
i__10646__auto___12956 = G__12957;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10745__auto___12954))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10745__auto___12954){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10745__auto___12954),args);
});})(g__10745__auto___12954))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__10745__auto___12954){
return (function (seq12881){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12881));
});})(g__10745__auto___12954))
;

var g__10758__auto___12979 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__10758__auto___12979){
return (function cljs$spec$impl$gen$any(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12980 = arguments.length;
var i__10646__auto___12981 = (0);
while(true){
if((i__10646__auto___12981 < len__10645__auto___12980)){
args__10652__auto__.push((arguments[i__10646__auto___12981]));

var G__12982 = (i__10646__auto___12981 + (1));
i__10646__auto___12981 = G__12982;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___12979))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___12979){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___12979);
});})(g__10758__auto___12979))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__10758__auto___12979){
return (function (seq12958){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12958));
});})(g__10758__auto___12979))
;


var g__10758__auto___12983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__10758__auto___12983){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12984 = arguments.length;
var i__10646__auto___12985 = (0);
while(true){
if((i__10646__auto___12985 < len__10645__auto___12984)){
args__10652__auto__.push((arguments[i__10646__auto___12985]));

var G__12986 = (i__10646__auto___12985 + (1));
i__10646__auto___12985 = G__12986;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___12983))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___12983){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___12983);
});})(g__10758__auto___12983))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__10758__auto___12983){
return (function (seq12959){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12959));
});})(g__10758__auto___12983))
;


var g__10758__auto___12987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__10758__auto___12987){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12988 = arguments.length;
var i__10646__auto___12989 = (0);
while(true){
if((i__10646__auto___12989 < len__10645__auto___12988)){
args__10652__auto__.push((arguments[i__10646__auto___12989]));

var G__12990 = (i__10646__auto___12989 + (1));
i__10646__auto___12989 = G__12990;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___12987))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___12987){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___12987);
});})(g__10758__auto___12987))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__10758__auto___12987){
return (function (seq12960){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12960));
});})(g__10758__auto___12987))
;


var g__10758__auto___12991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__10758__auto___12991){
return (function cljs$spec$impl$gen$char(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12992 = arguments.length;
var i__10646__auto___12993 = (0);
while(true){
if((i__10646__auto___12993 < len__10645__auto___12992)){
args__10652__auto__.push((arguments[i__10646__auto___12993]));

var G__12994 = (i__10646__auto___12993 + (1));
i__10646__auto___12993 = G__12994;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___12991))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___12991){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___12991);
});})(g__10758__auto___12991))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__10758__auto___12991){
return (function (seq12961){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12961));
});})(g__10758__auto___12991))
;


var g__10758__auto___12995 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__10758__auto___12995){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__10652__auto__ = [];
var len__10645__auto___12996 = arguments.length;
var i__10646__auto___12997 = (0);
while(true){
if((i__10646__auto___12997 < len__10645__auto___12996)){
args__10652__auto__.push((arguments[i__10646__auto___12997]));

var G__12998 = (i__10646__auto___12997 + (1));
i__10646__auto___12997 = G__12998;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___12995))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___12995){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___12995);
});})(g__10758__auto___12995))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__10758__auto___12995){
return (function (seq12962){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12962));
});})(g__10758__auto___12995))
;


var g__10758__auto___12999 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__10758__auto___12999){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13000 = arguments.length;
var i__10646__auto___13001 = (0);
while(true){
if((i__10646__auto___13001 < len__10645__auto___13000)){
args__10652__auto__.push((arguments[i__10646__auto___13001]));

var G__13002 = (i__10646__auto___13001 + (1));
i__10646__auto___13001 = G__13002;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___12999))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___12999){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___12999);
});})(g__10758__auto___12999))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__10758__auto___12999){
return (function (seq12963){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12963));
});})(g__10758__auto___12999))
;


var g__10758__auto___13003 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__10758__auto___13003){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13004 = arguments.length;
var i__10646__auto___13005 = (0);
while(true){
if((i__10646__auto___13005 < len__10645__auto___13004)){
args__10652__auto__.push((arguments[i__10646__auto___13005]));

var G__13006 = (i__10646__auto___13005 + (1));
i__10646__auto___13005 = G__13006;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13003))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13003){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13003);
});})(g__10758__auto___13003))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__10758__auto___13003){
return (function (seq12964){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12964));
});})(g__10758__auto___13003))
;


var g__10758__auto___13007 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__10758__auto___13007){
return (function cljs$spec$impl$gen$double(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13008 = arguments.length;
var i__10646__auto___13009 = (0);
while(true){
if((i__10646__auto___13009 < len__10645__auto___13008)){
args__10652__auto__.push((arguments[i__10646__auto___13009]));

var G__13010 = (i__10646__auto___13009 + (1));
i__10646__auto___13009 = G__13010;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13007))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13007){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13007);
});})(g__10758__auto___13007))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__10758__auto___13007){
return (function (seq12965){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12965));
});})(g__10758__auto___13007))
;


var g__10758__auto___13011 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__10758__auto___13011){
return (function cljs$spec$impl$gen$int(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13012 = arguments.length;
var i__10646__auto___13013 = (0);
while(true){
if((i__10646__auto___13013 < len__10645__auto___13012)){
args__10652__auto__.push((arguments[i__10646__auto___13013]));

var G__13014 = (i__10646__auto___13013 + (1));
i__10646__auto___13013 = G__13014;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13011))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13011){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13011);
});})(g__10758__auto___13011))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__10758__auto___13011){
return (function (seq12966){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12966));
});})(g__10758__auto___13011))
;


var g__10758__auto___13015 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__10758__auto___13015){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13016 = arguments.length;
var i__10646__auto___13017 = (0);
while(true){
if((i__10646__auto___13017 < len__10645__auto___13016)){
args__10652__auto__.push((arguments[i__10646__auto___13017]));

var G__13018 = (i__10646__auto___13017 + (1));
i__10646__auto___13017 = G__13018;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13015))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13015){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13015);
});})(g__10758__auto___13015))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__10758__auto___13015){
return (function (seq12967){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12967));
});})(g__10758__auto___13015))
;


var g__10758__auto___13019 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__10758__auto___13019){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13020 = arguments.length;
var i__10646__auto___13021 = (0);
while(true){
if((i__10646__auto___13021 < len__10645__auto___13020)){
args__10652__auto__.push((arguments[i__10646__auto___13021]));

var G__13022 = (i__10646__auto___13021 + (1));
i__10646__auto___13021 = G__13022;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13019))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13019){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13019);
});})(g__10758__auto___13019))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__10758__auto___13019){
return (function (seq12968){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12968));
});})(g__10758__auto___13019))
;


var g__10758__auto___13023 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__10758__auto___13023){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13024 = arguments.length;
var i__10646__auto___13025 = (0);
while(true){
if((i__10646__auto___13025 < len__10645__auto___13024)){
args__10652__auto__.push((arguments[i__10646__auto___13025]));

var G__13026 = (i__10646__auto___13025 + (1));
i__10646__auto___13025 = G__13026;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13023))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13023){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13023);
});})(g__10758__auto___13023))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__10758__auto___13023){
return (function (seq12969){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12969));
});})(g__10758__auto___13023))
;


var g__10758__auto___13027 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__10758__auto___13027){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13028 = arguments.length;
var i__10646__auto___13029 = (0);
while(true){
if((i__10646__auto___13029 < len__10645__auto___13028)){
args__10652__auto__.push((arguments[i__10646__auto___13029]));

var G__13030 = (i__10646__auto___13029 + (1));
i__10646__auto___13029 = G__13030;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13027))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13027){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13027);
});})(g__10758__auto___13027))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__10758__auto___13027){
return (function (seq12970){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12970));
});})(g__10758__auto___13027))
;


var g__10758__auto___13031 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__10758__auto___13031){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13032 = arguments.length;
var i__10646__auto___13033 = (0);
while(true){
if((i__10646__auto___13033 < len__10645__auto___13032)){
args__10652__auto__.push((arguments[i__10646__auto___13033]));

var G__13034 = (i__10646__auto___13033 + (1));
i__10646__auto___13033 = G__13034;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13031))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13031){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13031);
});})(g__10758__auto___13031))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__10758__auto___13031){
return (function (seq12971){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12971));
});})(g__10758__auto___13031))
;


var g__10758__auto___13035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__10758__auto___13035){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13036 = arguments.length;
var i__10646__auto___13037 = (0);
while(true){
if((i__10646__auto___13037 < len__10645__auto___13036)){
args__10652__auto__.push((arguments[i__10646__auto___13037]));

var G__13038 = (i__10646__auto___13037 + (1));
i__10646__auto___13037 = G__13038;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13035))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13035){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13035);
});})(g__10758__auto___13035))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__10758__auto___13035){
return (function (seq12972){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12972));
});})(g__10758__auto___13035))
;


var g__10758__auto___13039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__10758__auto___13039){
return (function cljs$spec$impl$gen$string(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13040 = arguments.length;
var i__10646__auto___13041 = (0);
while(true){
if((i__10646__auto___13041 < len__10645__auto___13040)){
args__10652__auto__.push((arguments[i__10646__auto___13041]));

var G__13042 = (i__10646__auto___13041 + (1));
i__10646__auto___13041 = G__13042;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13039))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13039){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13039);
});})(g__10758__auto___13039))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__10758__auto___13039){
return (function (seq12973){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12973));
});})(g__10758__auto___13039))
;


var g__10758__auto___13043 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__10758__auto___13043){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13044 = arguments.length;
var i__10646__auto___13045 = (0);
while(true){
if((i__10646__auto___13045 < len__10645__auto___13044)){
args__10652__auto__.push((arguments[i__10646__auto___13045]));

var G__13046 = (i__10646__auto___13045 + (1));
i__10646__auto___13045 = G__13046;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13043))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13043){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13043);
});})(g__10758__auto___13043))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__10758__auto___13043){
return (function (seq12974){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12974));
});})(g__10758__auto___13043))
;


var g__10758__auto___13047 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__10758__auto___13047){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13048 = arguments.length;
var i__10646__auto___13049 = (0);
while(true){
if((i__10646__auto___13049 < len__10645__auto___13048)){
args__10652__auto__.push((arguments[i__10646__auto___13049]));

var G__13050 = (i__10646__auto___13049 + (1));
i__10646__auto___13049 = G__13050;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13047))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13047){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13047);
});})(g__10758__auto___13047))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__10758__auto___13047){
return (function (seq12975){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12975));
});})(g__10758__auto___13047))
;


var g__10758__auto___13051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__10758__auto___13051){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13052 = arguments.length;
var i__10646__auto___13053 = (0);
while(true){
if((i__10646__auto___13053 < len__10645__auto___13052)){
args__10652__auto__.push((arguments[i__10646__auto___13053]));

var G__13054 = (i__10646__auto___13053 + (1));
i__10646__auto___13053 = G__13054;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13051))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13051){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13051);
});})(g__10758__auto___13051))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__10758__auto___13051){
return (function (seq12976){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12976));
});})(g__10758__auto___13051))
;


var g__10758__auto___13055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__10758__auto___13055){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13056 = arguments.length;
var i__10646__auto___13057 = (0);
while(true){
if((i__10646__auto___13057 < len__10645__auto___13056)){
args__10652__auto__.push((arguments[i__10646__auto___13057]));

var G__13058 = (i__10646__auto___13057 + (1));
i__10646__auto___13057 = G__13058;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13055))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13055){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13055);
});})(g__10758__auto___13055))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__10758__auto___13055){
return (function (seq12977){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12977));
});})(g__10758__auto___13055))
;


var g__10758__auto___13059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__10758__auto___13059){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13060 = arguments.length;
var i__10646__auto___13061 = (0);
while(true){
if((i__10646__auto___13061 < len__10645__auto___13060)){
args__10652__auto__.push((arguments[i__10646__auto___13061]));

var G__13062 = (i__10646__auto___13061 + (1));
i__10646__auto___13061 = G__13062;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});})(g__10758__auto___13059))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10758__auto___13059){
return (function (args){
return cljs.core.deref.call(null,g__10758__auto___13059);
});})(g__10758__auto___13059))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__10758__auto___13059){
return (function (seq12978){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12978));
});})(g__10758__auto___13059))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__10652__auto__ = [];
var len__10645__auto___13065 = arguments.length;
var i__10646__auto___13066 = (0);
while(true){
if((i__10646__auto___13066 < len__10645__auto___13065)){
args__10652__auto__.push((arguments[i__10646__auto___13066]));

var G__13067 = (i__10646__auto___13066 + (1));
i__10646__auto___13066 = G__13067;
continue;
} else {
}
break;
}

var argseq__10653__auto__ = ((((0) < args__10652__auto__.length))?(new cljs.core.IndexedSeq(args__10652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10653__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13063_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13063_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13064){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13064));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13068_SHARP_){
return (new Date(p1__13068_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map