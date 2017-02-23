// Compiled by ClojureScript 1.9.473 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__38606__auto__ = [];
var len__38599__auto___44199 = arguments.length;
var i__38600__auto___44200 = (0);
while(true){
if((i__38600__auto___44200 < len__38599__auto___44199)){
args__38606__auto__.push((arguments[i__38600__auto___44200]));

var G__44201 = (i__38600__auto___44200 + (1));
i__38600__auto___44200 = G__44201;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq44198){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44198));
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
var args__38606__auto__ = [];
var len__38599__auto___44203 = arguments.length;
var i__38600__auto___44204 = (0);
while(true){
if((i__38600__auto___44204 < len__38599__auto___44203)){
args__38606__auto__.push((arguments[i__38600__auto___44204]));

var G__44205 = (i__38600__auto___44204 + (1));
i__38600__auto___44204 = G__44205;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq44202){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44202));
});

var g_QMARK__44206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_44207 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__44206){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__44206))
,null));
var mkg_44208 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__44206,g_44207){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__44206,g_44207))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__44206,g_44207,mkg_44208){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__44206).call(null,x);
});})(g_QMARK__44206,g_44207,mkg_44208))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__44206,g_44207,mkg_44208){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_44208).call(null,gfn);
});})(g_QMARK__44206,g_44207,mkg_44208))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__44206,g_44207,mkg_44208){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_44207).call(null,generator);
});})(g_QMARK__44206,g_44207,mkg_44208))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__44170__auto___44228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__44170__auto___44228){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44229 = arguments.length;
var i__38600__auto___44230 = (0);
while(true){
if((i__38600__auto___44230 < len__38599__auto___44229)){
args__38606__auto__.push((arguments[i__38600__auto___44230]));

var G__44231 = (i__38600__auto___44230 + (1));
i__38600__auto___44230 = G__44231;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44228))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44228){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44228),args);
});})(g__44170__auto___44228))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__44170__auto___44228){
return (function (seq44209){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44209));
});})(g__44170__auto___44228))
;


var g__44170__auto___44232 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__44170__auto___44232){
return (function cljs$spec$impl$gen$list(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44233 = arguments.length;
var i__38600__auto___44234 = (0);
while(true){
if((i__38600__auto___44234 < len__38599__auto___44233)){
args__38606__auto__.push((arguments[i__38600__auto___44234]));

var G__44235 = (i__38600__auto___44234 + (1));
i__38600__auto___44234 = G__44235;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44232))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44232){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44232),args);
});})(g__44170__auto___44232))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__44170__auto___44232){
return (function (seq44210){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44210));
});})(g__44170__auto___44232))
;


var g__44170__auto___44236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__44170__auto___44236){
return (function cljs$spec$impl$gen$map(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44237 = arguments.length;
var i__38600__auto___44238 = (0);
while(true){
if((i__38600__auto___44238 < len__38599__auto___44237)){
args__38606__auto__.push((arguments[i__38600__auto___44238]));

var G__44239 = (i__38600__auto___44238 + (1));
i__38600__auto___44238 = G__44239;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44236))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44236){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44236),args);
});})(g__44170__auto___44236))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__44170__auto___44236){
return (function (seq44211){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44211));
});})(g__44170__auto___44236))
;


var g__44170__auto___44240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__44170__auto___44240){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44241 = arguments.length;
var i__38600__auto___44242 = (0);
while(true){
if((i__38600__auto___44242 < len__38599__auto___44241)){
args__38606__auto__.push((arguments[i__38600__auto___44242]));

var G__44243 = (i__38600__auto___44242 + (1));
i__38600__auto___44242 = G__44243;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44240))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44240){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44240),args);
});})(g__44170__auto___44240))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__44170__auto___44240){
return (function (seq44212){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44212));
});})(g__44170__auto___44240))
;


var g__44170__auto___44244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__44170__auto___44244){
return (function cljs$spec$impl$gen$set(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44245 = arguments.length;
var i__38600__auto___44246 = (0);
while(true){
if((i__38600__auto___44246 < len__38599__auto___44245)){
args__38606__auto__.push((arguments[i__38600__auto___44246]));

var G__44247 = (i__38600__auto___44246 + (1));
i__38600__auto___44246 = G__44247;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44244))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44244){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44244),args);
});})(g__44170__auto___44244))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__44170__auto___44244){
return (function (seq44213){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44213));
});})(g__44170__auto___44244))
;


var g__44170__auto___44248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__44170__auto___44248){
return (function cljs$spec$impl$gen$vector(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44249 = arguments.length;
var i__38600__auto___44250 = (0);
while(true){
if((i__38600__auto___44250 < len__38599__auto___44249)){
args__38606__auto__.push((arguments[i__38600__auto___44250]));

var G__44251 = (i__38600__auto___44250 + (1));
i__38600__auto___44250 = G__44251;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44248))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44248){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44248),args);
});})(g__44170__auto___44248))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__44170__auto___44248){
return (function (seq44214){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44214));
});})(g__44170__auto___44248))
;


var g__44170__auto___44252 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__44170__auto___44252){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44253 = arguments.length;
var i__38600__auto___44254 = (0);
while(true){
if((i__38600__auto___44254 < len__38599__auto___44253)){
args__38606__auto__.push((arguments[i__38600__auto___44254]));

var G__44255 = (i__38600__auto___44254 + (1));
i__38600__auto___44254 = G__44255;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44252))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44252){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44252),args);
});})(g__44170__auto___44252))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__44170__auto___44252){
return (function (seq44215){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44215));
});})(g__44170__auto___44252))
;


var g__44170__auto___44256 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__44170__auto___44256){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44257 = arguments.length;
var i__38600__auto___44258 = (0);
while(true){
if((i__38600__auto___44258 < len__38599__auto___44257)){
args__38606__auto__.push((arguments[i__38600__auto___44258]));

var G__44259 = (i__38600__auto___44258 + (1));
i__38600__auto___44258 = G__44259;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44256))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44256){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44256),args);
});})(g__44170__auto___44256))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__44170__auto___44256){
return (function (seq44216){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44216));
});})(g__44170__auto___44256))
;


var g__44170__auto___44260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__44170__auto___44260){
return (function cljs$spec$impl$gen$elements(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44261 = arguments.length;
var i__38600__auto___44262 = (0);
while(true){
if((i__38600__auto___44262 < len__38599__auto___44261)){
args__38606__auto__.push((arguments[i__38600__auto___44262]));

var G__44263 = (i__38600__auto___44262 + (1));
i__38600__auto___44262 = G__44263;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44260))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44260){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44260),args);
});})(g__44170__auto___44260))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__44170__auto___44260){
return (function (seq44217){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44217));
});})(g__44170__auto___44260))
;


var g__44170__auto___44264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__44170__auto___44264){
return (function cljs$spec$impl$gen$bind(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44265 = arguments.length;
var i__38600__auto___44266 = (0);
while(true){
if((i__38600__auto___44266 < len__38599__auto___44265)){
args__38606__auto__.push((arguments[i__38600__auto___44266]));

var G__44267 = (i__38600__auto___44266 + (1));
i__38600__auto___44266 = G__44267;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44264))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44264){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44264),args);
});})(g__44170__auto___44264))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__44170__auto___44264){
return (function (seq44218){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44218));
});})(g__44170__auto___44264))
;


var g__44170__auto___44268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__44170__auto___44268){
return (function cljs$spec$impl$gen$choose(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44269 = arguments.length;
var i__38600__auto___44270 = (0);
while(true){
if((i__38600__auto___44270 < len__38599__auto___44269)){
args__38606__auto__.push((arguments[i__38600__auto___44270]));

var G__44271 = (i__38600__auto___44270 + (1));
i__38600__auto___44270 = G__44271;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44268))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44268){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44268),args);
});})(g__44170__auto___44268))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__44170__auto___44268){
return (function (seq44219){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44219));
});})(g__44170__auto___44268))
;


var g__44170__auto___44272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__44170__auto___44272){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44273 = arguments.length;
var i__38600__auto___44274 = (0);
while(true){
if((i__38600__auto___44274 < len__38599__auto___44273)){
args__38606__auto__.push((arguments[i__38600__auto___44274]));

var G__44275 = (i__38600__auto___44274 + (1));
i__38600__auto___44274 = G__44275;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44272))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44272){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44272),args);
});})(g__44170__auto___44272))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__44170__auto___44272){
return (function (seq44220){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44220));
});})(g__44170__auto___44272))
;


var g__44170__auto___44276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__44170__auto___44276){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44277 = arguments.length;
var i__38600__auto___44278 = (0);
while(true){
if((i__38600__auto___44278 < len__38599__auto___44277)){
args__38606__auto__.push((arguments[i__38600__auto___44278]));

var G__44279 = (i__38600__auto___44278 + (1));
i__38600__auto___44278 = G__44279;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44276))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44276){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44276),args);
});})(g__44170__auto___44276))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__44170__auto___44276){
return (function (seq44221){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44221));
});})(g__44170__auto___44276))
;


var g__44170__auto___44280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__44170__auto___44280){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44281 = arguments.length;
var i__38600__auto___44282 = (0);
while(true){
if((i__38600__auto___44282 < len__38599__auto___44281)){
args__38606__auto__.push((arguments[i__38600__auto___44282]));

var G__44283 = (i__38600__auto___44282 + (1));
i__38600__auto___44282 = G__44283;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44280))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44280){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44280),args);
});})(g__44170__auto___44280))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__44170__auto___44280){
return (function (seq44222){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44222));
});})(g__44170__auto___44280))
;


var g__44170__auto___44284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__44170__auto___44284){
return (function cljs$spec$impl$gen$sample(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44285 = arguments.length;
var i__38600__auto___44286 = (0);
while(true){
if((i__38600__auto___44286 < len__38599__auto___44285)){
args__38606__auto__.push((arguments[i__38600__auto___44286]));

var G__44287 = (i__38600__auto___44286 + (1));
i__38600__auto___44286 = G__44287;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44284))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44284){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44284),args);
});})(g__44170__auto___44284))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__44170__auto___44284){
return (function (seq44223){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44223));
});})(g__44170__auto___44284))
;


var g__44170__auto___44288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__44170__auto___44288){
return (function cljs$spec$impl$gen$return(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44289 = arguments.length;
var i__38600__auto___44290 = (0);
while(true){
if((i__38600__auto___44290 < len__38599__auto___44289)){
args__38606__auto__.push((arguments[i__38600__auto___44290]));

var G__44291 = (i__38600__auto___44290 + (1));
i__38600__auto___44290 = G__44291;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44288))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44288){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44288),args);
});})(g__44170__auto___44288))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__44170__auto___44288){
return (function (seq44224){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44224));
});})(g__44170__auto___44288))
;


var g__44170__auto___44292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__44170__auto___44292){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44293 = arguments.length;
var i__38600__auto___44294 = (0);
while(true){
if((i__38600__auto___44294 < len__38599__auto___44293)){
args__38606__auto__.push((arguments[i__38600__auto___44294]));

var G__44295 = (i__38600__auto___44294 + (1));
i__38600__auto___44294 = G__44295;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44292))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44292),args);
});})(g__44170__auto___44292))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__44170__auto___44292){
return (function (seq44225){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44225));
});})(g__44170__auto___44292))
;


var g__44170__auto___44296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__44170__auto___44296){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44297 = arguments.length;
var i__38600__auto___44298 = (0);
while(true){
if((i__38600__auto___44298 < len__38599__auto___44297)){
args__38606__auto__.push((arguments[i__38600__auto___44298]));

var G__44299 = (i__38600__auto___44298 + (1));
i__38600__auto___44298 = G__44299;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44296))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44296){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44296),args);
});})(g__44170__auto___44296))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__44170__auto___44296){
return (function (seq44226){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44226));
});})(g__44170__auto___44296))
;


var g__44170__auto___44300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__44170__auto___44300){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44301 = arguments.length;
var i__38600__auto___44302 = (0);
while(true){
if((i__38600__auto___44302 < len__38599__auto___44301)){
args__38606__auto__.push((arguments[i__38600__auto___44302]));

var G__44303 = (i__38600__auto___44302 + (1));
i__38600__auto___44302 = G__44303;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44170__auto___44300))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44170__auto___44300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44170__auto___44300),args);
});})(g__44170__auto___44300))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__44170__auto___44300){
return (function (seq44227){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44227));
});})(g__44170__auto___44300))
;

var g__44183__auto___44325 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__44183__auto___44325){
return (function cljs$spec$impl$gen$any(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44326 = arguments.length;
var i__38600__auto___44327 = (0);
while(true){
if((i__38600__auto___44327 < len__38599__auto___44326)){
args__38606__auto__.push((arguments[i__38600__auto___44327]));

var G__44328 = (i__38600__auto___44327 + (1));
i__38600__auto___44327 = G__44328;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44325))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44325){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44325);
});})(g__44183__auto___44325))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__44183__auto___44325){
return (function (seq44304){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44304));
});})(g__44183__auto___44325))
;


var g__44183__auto___44329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__44183__auto___44329){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44330 = arguments.length;
var i__38600__auto___44331 = (0);
while(true){
if((i__38600__auto___44331 < len__38599__auto___44330)){
args__38606__auto__.push((arguments[i__38600__auto___44331]));

var G__44332 = (i__38600__auto___44331 + (1));
i__38600__auto___44331 = G__44332;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44329))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44329){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44329);
});})(g__44183__auto___44329))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__44183__auto___44329){
return (function (seq44305){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44305));
});})(g__44183__auto___44329))
;


var g__44183__auto___44333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__44183__auto___44333){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44334 = arguments.length;
var i__38600__auto___44335 = (0);
while(true){
if((i__38600__auto___44335 < len__38599__auto___44334)){
args__38606__auto__.push((arguments[i__38600__auto___44335]));

var G__44336 = (i__38600__auto___44335 + (1));
i__38600__auto___44335 = G__44336;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44333))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44333){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44333);
});})(g__44183__auto___44333))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__44183__auto___44333){
return (function (seq44306){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44306));
});})(g__44183__auto___44333))
;


var g__44183__auto___44337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__44183__auto___44337){
return (function cljs$spec$impl$gen$char(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44338 = arguments.length;
var i__38600__auto___44339 = (0);
while(true){
if((i__38600__auto___44339 < len__38599__auto___44338)){
args__38606__auto__.push((arguments[i__38600__auto___44339]));

var G__44340 = (i__38600__auto___44339 + (1));
i__38600__auto___44339 = G__44340;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44337))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44337){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44337);
});})(g__44183__auto___44337))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__44183__auto___44337){
return (function (seq44307){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44307));
});})(g__44183__auto___44337))
;


var g__44183__auto___44341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__44183__auto___44341){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44342 = arguments.length;
var i__38600__auto___44343 = (0);
while(true){
if((i__38600__auto___44343 < len__38599__auto___44342)){
args__38606__auto__.push((arguments[i__38600__auto___44343]));

var G__44344 = (i__38600__auto___44343 + (1));
i__38600__auto___44343 = G__44344;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44341))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44341){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44341);
});})(g__44183__auto___44341))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__44183__auto___44341){
return (function (seq44308){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44308));
});})(g__44183__auto___44341))
;


var g__44183__auto___44345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__44183__auto___44345){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44346 = arguments.length;
var i__38600__auto___44347 = (0);
while(true){
if((i__38600__auto___44347 < len__38599__auto___44346)){
args__38606__auto__.push((arguments[i__38600__auto___44347]));

var G__44348 = (i__38600__auto___44347 + (1));
i__38600__auto___44347 = G__44348;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44345))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44345){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44345);
});})(g__44183__auto___44345))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__44183__auto___44345){
return (function (seq44309){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44309));
});})(g__44183__auto___44345))
;


var g__44183__auto___44349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__44183__auto___44349){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44350 = arguments.length;
var i__38600__auto___44351 = (0);
while(true){
if((i__38600__auto___44351 < len__38599__auto___44350)){
args__38606__auto__.push((arguments[i__38600__auto___44351]));

var G__44352 = (i__38600__auto___44351 + (1));
i__38600__auto___44351 = G__44352;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44349))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44349){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44349);
});})(g__44183__auto___44349))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__44183__auto___44349){
return (function (seq44310){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44310));
});})(g__44183__auto___44349))
;


var g__44183__auto___44353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__44183__auto___44353){
return (function cljs$spec$impl$gen$double(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44354 = arguments.length;
var i__38600__auto___44355 = (0);
while(true){
if((i__38600__auto___44355 < len__38599__auto___44354)){
args__38606__auto__.push((arguments[i__38600__auto___44355]));

var G__44356 = (i__38600__auto___44355 + (1));
i__38600__auto___44355 = G__44356;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44353))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44353){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44353);
});})(g__44183__auto___44353))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__44183__auto___44353){
return (function (seq44311){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44311));
});})(g__44183__auto___44353))
;


var g__44183__auto___44357 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__44183__auto___44357){
return (function cljs$spec$impl$gen$int(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44358 = arguments.length;
var i__38600__auto___44359 = (0);
while(true){
if((i__38600__auto___44359 < len__38599__auto___44358)){
args__38606__auto__.push((arguments[i__38600__auto___44359]));

var G__44360 = (i__38600__auto___44359 + (1));
i__38600__auto___44359 = G__44360;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44357))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44357){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44357);
});})(g__44183__auto___44357))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__44183__auto___44357){
return (function (seq44312){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44312));
});})(g__44183__auto___44357))
;


var g__44183__auto___44361 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__44183__auto___44361){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44362 = arguments.length;
var i__38600__auto___44363 = (0);
while(true){
if((i__38600__auto___44363 < len__38599__auto___44362)){
args__38606__auto__.push((arguments[i__38600__auto___44363]));

var G__44364 = (i__38600__auto___44363 + (1));
i__38600__auto___44363 = G__44364;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44361))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44361){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44361);
});})(g__44183__auto___44361))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__44183__auto___44361){
return (function (seq44313){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44313));
});})(g__44183__auto___44361))
;


var g__44183__auto___44365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__44183__auto___44365){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44366 = arguments.length;
var i__38600__auto___44367 = (0);
while(true){
if((i__38600__auto___44367 < len__38599__auto___44366)){
args__38606__auto__.push((arguments[i__38600__auto___44367]));

var G__44368 = (i__38600__auto___44367 + (1));
i__38600__auto___44367 = G__44368;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44365))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44365){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44365);
});})(g__44183__auto___44365))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__44183__auto___44365){
return (function (seq44314){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44314));
});})(g__44183__auto___44365))
;


var g__44183__auto___44369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__44183__auto___44369){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44370 = arguments.length;
var i__38600__auto___44371 = (0);
while(true){
if((i__38600__auto___44371 < len__38599__auto___44370)){
args__38606__auto__.push((arguments[i__38600__auto___44371]));

var G__44372 = (i__38600__auto___44371 + (1));
i__38600__auto___44371 = G__44372;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44369))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44369){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44369);
});})(g__44183__auto___44369))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__44183__auto___44369){
return (function (seq44315){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44315));
});})(g__44183__auto___44369))
;


var g__44183__auto___44373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__44183__auto___44373){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44374 = arguments.length;
var i__38600__auto___44375 = (0);
while(true){
if((i__38600__auto___44375 < len__38599__auto___44374)){
args__38606__auto__.push((arguments[i__38600__auto___44375]));

var G__44376 = (i__38600__auto___44375 + (1));
i__38600__auto___44375 = G__44376;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44373))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44373){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44373);
});})(g__44183__auto___44373))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__44183__auto___44373){
return (function (seq44316){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44316));
});})(g__44183__auto___44373))
;


var g__44183__auto___44377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__44183__auto___44377){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44378 = arguments.length;
var i__38600__auto___44379 = (0);
while(true){
if((i__38600__auto___44379 < len__38599__auto___44378)){
args__38606__auto__.push((arguments[i__38600__auto___44379]));

var G__44380 = (i__38600__auto___44379 + (1));
i__38600__auto___44379 = G__44380;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44377))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44377){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44377);
});})(g__44183__auto___44377))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__44183__auto___44377){
return (function (seq44317){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44317));
});})(g__44183__auto___44377))
;


var g__44183__auto___44381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__44183__auto___44381){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44382 = arguments.length;
var i__38600__auto___44383 = (0);
while(true){
if((i__38600__auto___44383 < len__38599__auto___44382)){
args__38606__auto__.push((arguments[i__38600__auto___44383]));

var G__44384 = (i__38600__auto___44383 + (1));
i__38600__auto___44383 = G__44384;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44381))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44381){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44381);
});})(g__44183__auto___44381))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__44183__auto___44381){
return (function (seq44318){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44318));
});})(g__44183__auto___44381))
;


var g__44183__auto___44385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__44183__auto___44385){
return (function cljs$spec$impl$gen$string(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44386 = arguments.length;
var i__38600__auto___44387 = (0);
while(true){
if((i__38600__auto___44387 < len__38599__auto___44386)){
args__38606__auto__.push((arguments[i__38600__auto___44387]));

var G__44388 = (i__38600__auto___44387 + (1));
i__38600__auto___44387 = G__44388;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44385))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44385){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44385);
});})(g__44183__auto___44385))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__44183__auto___44385){
return (function (seq44319){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44319));
});})(g__44183__auto___44385))
;


var g__44183__auto___44389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__44183__auto___44389){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44390 = arguments.length;
var i__38600__auto___44391 = (0);
while(true){
if((i__38600__auto___44391 < len__38599__auto___44390)){
args__38606__auto__.push((arguments[i__38600__auto___44391]));

var G__44392 = (i__38600__auto___44391 + (1));
i__38600__auto___44391 = G__44392;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44389))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44389){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44389);
});})(g__44183__auto___44389))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__44183__auto___44389){
return (function (seq44320){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44320));
});})(g__44183__auto___44389))
;


var g__44183__auto___44393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__44183__auto___44393){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44394 = arguments.length;
var i__38600__auto___44395 = (0);
while(true){
if((i__38600__auto___44395 < len__38599__auto___44394)){
args__38606__auto__.push((arguments[i__38600__auto___44395]));

var G__44396 = (i__38600__auto___44395 + (1));
i__38600__auto___44395 = G__44396;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44393))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44393){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44393);
});})(g__44183__auto___44393))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__44183__auto___44393){
return (function (seq44321){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44321));
});})(g__44183__auto___44393))
;


var g__44183__auto___44397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__44183__auto___44397){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44398 = arguments.length;
var i__38600__auto___44399 = (0);
while(true){
if((i__38600__auto___44399 < len__38599__auto___44398)){
args__38606__auto__.push((arguments[i__38600__auto___44399]));

var G__44400 = (i__38600__auto___44399 + (1));
i__38600__auto___44399 = G__44400;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44397))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44397){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44397);
});})(g__44183__auto___44397))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__44183__auto___44397){
return (function (seq44322){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44322));
});})(g__44183__auto___44397))
;


var g__44183__auto___44401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__44183__auto___44401){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44402 = arguments.length;
var i__38600__auto___44403 = (0);
while(true){
if((i__38600__auto___44403 < len__38599__auto___44402)){
args__38606__auto__.push((arguments[i__38600__auto___44403]));

var G__44404 = (i__38600__auto___44403 + (1));
i__38600__auto___44403 = G__44404;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44401))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44401){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44401);
});})(g__44183__auto___44401))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__44183__auto___44401){
return (function (seq44323){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44323));
});})(g__44183__auto___44401))
;


var g__44183__auto___44405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__44183__auto___44405){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44406 = arguments.length;
var i__38600__auto___44407 = (0);
while(true){
if((i__38600__auto___44407 < len__38599__auto___44406)){
args__38606__auto__.push((arguments[i__38600__auto___44407]));

var G__44408 = (i__38600__auto___44407 + (1));
i__38600__auto___44407 = G__44408;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});})(g__44183__auto___44405))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44183__auto___44405){
return (function (args){
return cljs.core.deref.call(null,g__44183__auto___44405);
});})(g__44183__auto___44405))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__44183__auto___44405){
return (function (seq44324){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44324));
});})(g__44183__auto___44405))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__38606__auto__ = [];
var len__38599__auto___44411 = arguments.length;
var i__38600__auto___44412 = (0);
while(true){
if((i__38600__auto___44412 < len__38599__auto___44411)){
args__38606__auto__.push((arguments[i__38600__auto___44412]));

var G__44413 = (i__38600__auto___44412 + (1));
i__38600__auto___44412 = G__44413;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__44409_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__44409_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq44410){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44410));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__44414_SHARP_){
return (new Date(p1__44414_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1487810677088