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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__20381__auto__ = [];
var len__20374__auto___22582 = arguments.length;
var i__20375__auto___22583 = (0);
while(true){
if((i__20375__auto___22583 < len__20374__auto___22582)){
args__20381__auto__.push((arguments[i__20375__auto___22583]));

var G__22584 = (i__20375__auto___22583 + (1));
i__20375__auto___22583 = G__22584;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq22581){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22581));
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
var args__20381__auto__ = [];
var len__20374__auto___22586 = arguments.length;
var i__20375__auto___22587 = (0);
while(true){
if((i__20375__auto___22587 < len__20374__auto___22586)){
args__20381__auto__.push((arguments[i__20375__auto___22587]));

var G__22588 = (i__20375__auto___22587 + (1));
i__20375__auto___22587 = G__22588;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq22585){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22585));
});

var g_QMARK__22589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_22590 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22589){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__22589))
,null));
var mkg_22591 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22589,g_22590){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__22589,g_22590))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__22589,g_22590,mkg_22591){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__22589).call(null,x);
});})(g_QMARK__22589,g_22590,mkg_22591))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__22589,g_22590,mkg_22591){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_22591).call(null,gfn);
});})(g_QMARK__22589,g_22590,mkg_22591))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__22589,g_22590,mkg_22591){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_22590).call(null,generator);
});})(g_QMARK__22589,g_22590,mkg_22591))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__20474__auto___22611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__20474__auto___22611){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22612 = arguments.length;
var i__20375__auto___22613 = (0);
while(true){
if((i__20375__auto___22613 < len__20374__auto___22612)){
args__20381__auto__.push((arguments[i__20375__auto___22613]));

var G__22614 = (i__20375__auto___22613 + (1));
i__20375__auto___22613 = G__22614;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22611))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22611){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22611),args);
});})(g__20474__auto___22611))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__20474__auto___22611){
return (function (seq22592){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22592));
});})(g__20474__auto___22611))
;


var g__20474__auto___22615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__20474__auto___22615){
return (function cljs$spec$impl$gen$list(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22616 = arguments.length;
var i__20375__auto___22617 = (0);
while(true){
if((i__20375__auto___22617 < len__20374__auto___22616)){
args__20381__auto__.push((arguments[i__20375__auto___22617]));

var G__22618 = (i__20375__auto___22617 + (1));
i__20375__auto___22617 = G__22618;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22615))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22615){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22615),args);
});})(g__20474__auto___22615))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__20474__auto___22615){
return (function (seq22593){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22593));
});})(g__20474__auto___22615))
;


var g__20474__auto___22619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__20474__auto___22619){
return (function cljs$spec$impl$gen$map(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22620 = arguments.length;
var i__20375__auto___22621 = (0);
while(true){
if((i__20375__auto___22621 < len__20374__auto___22620)){
args__20381__auto__.push((arguments[i__20375__auto___22621]));

var G__22622 = (i__20375__auto___22621 + (1));
i__20375__auto___22621 = G__22622;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22619))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22619),args);
});})(g__20474__auto___22619))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__20474__auto___22619){
return (function (seq22594){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22594));
});})(g__20474__auto___22619))
;


var g__20474__auto___22623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__20474__auto___22623){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22624 = arguments.length;
var i__20375__auto___22625 = (0);
while(true){
if((i__20375__auto___22625 < len__20374__auto___22624)){
args__20381__auto__.push((arguments[i__20375__auto___22625]));

var G__22626 = (i__20375__auto___22625 + (1));
i__20375__auto___22625 = G__22626;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22623))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22623){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22623),args);
});})(g__20474__auto___22623))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__20474__auto___22623){
return (function (seq22595){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22595));
});})(g__20474__auto___22623))
;


var g__20474__auto___22627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__20474__auto___22627){
return (function cljs$spec$impl$gen$set(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22628 = arguments.length;
var i__20375__auto___22629 = (0);
while(true){
if((i__20375__auto___22629 < len__20374__auto___22628)){
args__20381__auto__.push((arguments[i__20375__auto___22629]));

var G__22630 = (i__20375__auto___22629 + (1));
i__20375__auto___22629 = G__22630;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22627))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22627),args);
});})(g__20474__auto___22627))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__20474__auto___22627){
return (function (seq22596){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22596));
});})(g__20474__auto___22627))
;


var g__20474__auto___22631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__20474__auto___22631){
return (function cljs$spec$impl$gen$vector(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22632 = arguments.length;
var i__20375__auto___22633 = (0);
while(true){
if((i__20375__auto___22633 < len__20374__auto___22632)){
args__20381__auto__.push((arguments[i__20375__auto___22633]));

var G__22634 = (i__20375__auto___22633 + (1));
i__20375__auto___22633 = G__22634;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22631))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22631),args);
});})(g__20474__auto___22631))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__20474__auto___22631){
return (function (seq22597){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22597));
});})(g__20474__auto___22631))
;


var g__20474__auto___22635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__20474__auto___22635){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22636 = arguments.length;
var i__20375__auto___22637 = (0);
while(true){
if((i__20375__auto___22637 < len__20374__auto___22636)){
args__20381__auto__.push((arguments[i__20375__auto___22637]));

var G__22638 = (i__20375__auto___22637 + (1));
i__20375__auto___22637 = G__22638;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22635))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22635){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22635),args);
});})(g__20474__auto___22635))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__20474__auto___22635){
return (function (seq22598){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22598));
});})(g__20474__auto___22635))
;


var g__20474__auto___22639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__20474__auto___22639){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22640 = arguments.length;
var i__20375__auto___22641 = (0);
while(true){
if((i__20375__auto___22641 < len__20374__auto___22640)){
args__20381__auto__.push((arguments[i__20375__auto___22641]));

var G__22642 = (i__20375__auto___22641 + (1));
i__20375__auto___22641 = G__22642;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22639))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22639){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22639),args);
});})(g__20474__auto___22639))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__20474__auto___22639){
return (function (seq22599){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22599));
});})(g__20474__auto___22639))
;


var g__20474__auto___22643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__20474__auto___22643){
return (function cljs$spec$impl$gen$elements(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22644 = arguments.length;
var i__20375__auto___22645 = (0);
while(true){
if((i__20375__auto___22645 < len__20374__auto___22644)){
args__20381__auto__.push((arguments[i__20375__auto___22645]));

var G__22646 = (i__20375__auto___22645 + (1));
i__20375__auto___22645 = G__22646;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22643))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22643){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22643),args);
});})(g__20474__auto___22643))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__20474__auto___22643){
return (function (seq22600){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22600));
});})(g__20474__auto___22643))
;


var g__20474__auto___22647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__20474__auto___22647){
return (function cljs$spec$impl$gen$bind(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22648 = arguments.length;
var i__20375__auto___22649 = (0);
while(true){
if((i__20375__auto___22649 < len__20374__auto___22648)){
args__20381__auto__.push((arguments[i__20375__auto___22649]));

var G__22650 = (i__20375__auto___22649 + (1));
i__20375__auto___22649 = G__22650;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22647))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22647){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22647),args);
});})(g__20474__auto___22647))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__20474__auto___22647){
return (function (seq22601){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22601));
});})(g__20474__auto___22647))
;


var g__20474__auto___22651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__20474__auto___22651){
return (function cljs$spec$impl$gen$choose(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22652 = arguments.length;
var i__20375__auto___22653 = (0);
while(true){
if((i__20375__auto___22653 < len__20374__auto___22652)){
args__20381__auto__.push((arguments[i__20375__auto___22653]));

var G__22654 = (i__20375__auto___22653 + (1));
i__20375__auto___22653 = G__22654;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22651))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22651){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22651),args);
});})(g__20474__auto___22651))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__20474__auto___22651){
return (function (seq22602){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22602));
});})(g__20474__auto___22651))
;


var g__20474__auto___22655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__20474__auto___22655){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22656 = arguments.length;
var i__20375__auto___22657 = (0);
while(true){
if((i__20375__auto___22657 < len__20374__auto___22656)){
args__20381__auto__.push((arguments[i__20375__auto___22657]));

var G__22658 = (i__20375__auto___22657 + (1));
i__20375__auto___22657 = G__22658;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22655))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22655){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22655),args);
});})(g__20474__auto___22655))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__20474__auto___22655){
return (function (seq22603){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22603));
});})(g__20474__auto___22655))
;


var g__20474__auto___22659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__20474__auto___22659){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22660 = arguments.length;
var i__20375__auto___22661 = (0);
while(true){
if((i__20375__auto___22661 < len__20374__auto___22660)){
args__20381__auto__.push((arguments[i__20375__auto___22661]));

var G__22662 = (i__20375__auto___22661 + (1));
i__20375__auto___22661 = G__22662;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22659))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22659){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22659),args);
});})(g__20474__auto___22659))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__20474__auto___22659){
return (function (seq22604){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22604));
});})(g__20474__auto___22659))
;


var g__20474__auto___22663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__20474__auto___22663){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22664 = arguments.length;
var i__20375__auto___22665 = (0);
while(true){
if((i__20375__auto___22665 < len__20374__auto___22664)){
args__20381__auto__.push((arguments[i__20375__auto___22665]));

var G__22666 = (i__20375__auto___22665 + (1));
i__20375__auto___22665 = G__22666;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22663))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22663){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22663),args);
});})(g__20474__auto___22663))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__20474__auto___22663){
return (function (seq22605){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22605));
});})(g__20474__auto___22663))
;


var g__20474__auto___22667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__20474__auto___22667){
return (function cljs$spec$impl$gen$sample(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22668 = arguments.length;
var i__20375__auto___22669 = (0);
while(true){
if((i__20375__auto___22669 < len__20374__auto___22668)){
args__20381__auto__.push((arguments[i__20375__auto___22669]));

var G__22670 = (i__20375__auto___22669 + (1));
i__20375__auto___22669 = G__22670;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22667))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22667){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22667),args);
});})(g__20474__auto___22667))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__20474__auto___22667){
return (function (seq22606){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22606));
});})(g__20474__auto___22667))
;


var g__20474__auto___22671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__20474__auto___22671){
return (function cljs$spec$impl$gen$return(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22672 = arguments.length;
var i__20375__auto___22673 = (0);
while(true){
if((i__20375__auto___22673 < len__20374__auto___22672)){
args__20381__auto__.push((arguments[i__20375__auto___22673]));

var G__22674 = (i__20375__auto___22673 + (1));
i__20375__auto___22673 = G__22674;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22671))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22671){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22671),args);
});})(g__20474__auto___22671))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__20474__auto___22671){
return (function (seq22607){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22607));
});})(g__20474__auto___22671))
;


var g__20474__auto___22675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__20474__auto___22675){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22676 = arguments.length;
var i__20375__auto___22677 = (0);
while(true){
if((i__20375__auto___22677 < len__20374__auto___22676)){
args__20381__auto__.push((arguments[i__20375__auto___22677]));

var G__22678 = (i__20375__auto___22677 + (1));
i__20375__auto___22677 = G__22678;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22675))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22675),args);
});})(g__20474__auto___22675))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__20474__auto___22675){
return (function (seq22608){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22608));
});})(g__20474__auto___22675))
;


var g__20474__auto___22679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__20474__auto___22679){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22680 = arguments.length;
var i__20375__auto___22681 = (0);
while(true){
if((i__20375__auto___22681 < len__20374__auto___22680)){
args__20381__auto__.push((arguments[i__20375__auto___22681]));

var G__22682 = (i__20375__auto___22681 + (1));
i__20375__auto___22681 = G__22682;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22679))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22679),args);
});})(g__20474__auto___22679))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__20474__auto___22679){
return (function (seq22609){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22609));
});})(g__20474__auto___22679))
;


var g__20474__auto___22683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__20474__auto___22683){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22684 = arguments.length;
var i__20375__auto___22685 = (0);
while(true){
if((i__20375__auto___22685 < len__20374__auto___22684)){
args__20381__auto__.push((arguments[i__20375__auto___22685]));

var G__22686 = (i__20375__auto___22685 + (1));
i__20375__auto___22685 = G__22686;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20474__auto___22683))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20474__auto___22683){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20474__auto___22683),args);
});})(g__20474__auto___22683))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__20474__auto___22683){
return (function (seq22610){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22610));
});})(g__20474__auto___22683))
;

var g__20487__auto___22708 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__20487__auto___22708){
return (function cljs$spec$impl$gen$any(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22709 = arguments.length;
var i__20375__auto___22710 = (0);
while(true){
if((i__20375__auto___22710 < len__20374__auto___22709)){
args__20381__auto__.push((arguments[i__20375__auto___22710]));

var G__22711 = (i__20375__auto___22710 + (1));
i__20375__auto___22710 = G__22711;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22708))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22708){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22708);
});})(g__20487__auto___22708))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__20487__auto___22708){
return (function (seq22687){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22687));
});})(g__20487__auto___22708))
;


var g__20487__auto___22712 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__20487__auto___22712){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22713 = arguments.length;
var i__20375__auto___22714 = (0);
while(true){
if((i__20375__auto___22714 < len__20374__auto___22713)){
args__20381__auto__.push((arguments[i__20375__auto___22714]));

var G__22715 = (i__20375__auto___22714 + (1));
i__20375__auto___22714 = G__22715;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22712))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22712){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22712);
});})(g__20487__auto___22712))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__20487__auto___22712){
return (function (seq22688){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22688));
});})(g__20487__auto___22712))
;


var g__20487__auto___22716 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__20487__auto___22716){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22717 = arguments.length;
var i__20375__auto___22718 = (0);
while(true){
if((i__20375__auto___22718 < len__20374__auto___22717)){
args__20381__auto__.push((arguments[i__20375__auto___22718]));

var G__22719 = (i__20375__auto___22718 + (1));
i__20375__auto___22718 = G__22719;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22716))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22716){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22716);
});})(g__20487__auto___22716))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__20487__auto___22716){
return (function (seq22689){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22689));
});})(g__20487__auto___22716))
;


var g__20487__auto___22720 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__20487__auto___22720){
return (function cljs$spec$impl$gen$char(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22721 = arguments.length;
var i__20375__auto___22722 = (0);
while(true){
if((i__20375__auto___22722 < len__20374__auto___22721)){
args__20381__auto__.push((arguments[i__20375__auto___22722]));

var G__22723 = (i__20375__auto___22722 + (1));
i__20375__auto___22722 = G__22723;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22720))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22720){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22720);
});})(g__20487__auto___22720))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__20487__auto___22720){
return (function (seq22690){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22690));
});})(g__20487__auto___22720))
;


var g__20487__auto___22724 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__20487__auto___22724){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22725 = arguments.length;
var i__20375__auto___22726 = (0);
while(true){
if((i__20375__auto___22726 < len__20374__auto___22725)){
args__20381__auto__.push((arguments[i__20375__auto___22726]));

var G__22727 = (i__20375__auto___22726 + (1));
i__20375__auto___22726 = G__22727;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22724))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22724){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22724);
});})(g__20487__auto___22724))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__20487__auto___22724){
return (function (seq22691){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22691));
});})(g__20487__auto___22724))
;


var g__20487__auto___22728 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__20487__auto___22728){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22729 = arguments.length;
var i__20375__auto___22730 = (0);
while(true){
if((i__20375__auto___22730 < len__20374__auto___22729)){
args__20381__auto__.push((arguments[i__20375__auto___22730]));

var G__22731 = (i__20375__auto___22730 + (1));
i__20375__auto___22730 = G__22731;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22728))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22728){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22728);
});})(g__20487__auto___22728))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__20487__auto___22728){
return (function (seq22692){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22692));
});})(g__20487__auto___22728))
;


var g__20487__auto___22732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__20487__auto___22732){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22733 = arguments.length;
var i__20375__auto___22734 = (0);
while(true){
if((i__20375__auto___22734 < len__20374__auto___22733)){
args__20381__auto__.push((arguments[i__20375__auto___22734]));

var G__22735 = (i__20375__auto___22734 + (1));
i__20375__auto___22734 = G__22735;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22732))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22732){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22732);
});})(g__20487__auto___22732))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__20487__auto___22732){
return (function (seq22693){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22693));
});})(g__20487__auto___22732))
;


var g__20487__auto___22736 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__20487__auto___22736){
return (function cljs$spec$impl$gen$double(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22737 = arguments.length;
var i__20375__auto___22738 = (0);
while(true){
if((i__20375__auto___22738 < len__20374__auto___22737)){
args__20381__auto__.push((arguments[i__20375__auto___22738]));

var G__22739 = (i__20375__auto___22738 + (1));
i__20375__auto___22738 = G__22739;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22736))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22736){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22736);
});})(g__20487__auto___22736))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__20487__auto___22736){
return (function (seq22694){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22694));
});})(g__20487__auto___22736))
;


var g__20487__auto___22740 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__20487__auto___22740){
return (function cljs$spec$impl$gen$int(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22741 = arguments.length;
var i__20375__auto___22742 = (0);
while(true){
if((i__20375__auto___22742 < len__20374__auto___22741)){
args__20381__auto__.push((arguments[i__20375__auto___22742]));

var G__22743 = (i__20375__auto___22742 + (1));
i__20375__auto___22742 = G__22743;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22740))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22740){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22740);
});})(g__20487__auto___22740))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__20487__auto___22740){
return (function (seq22695){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22695));
});})(g__20487__auto___22740))
;


var g__20487__auto___22744 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__20487__auto___22744){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22745 = arguments.length;
var i__20375__auto___22746 = (0);
while(true){
if((i__20375__auto___22746 < len__20374__auto___22745)){
args__20381__auto__.push((arguments[i__20375__auto___22746]));

var G__22747 = (i__20375__auto___22746 + (1));
i__20375__auto___22746 = G__22747;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22744))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22744){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22744);
});})(g__20487__auto___22744))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__20487__auto___22744){
return (function (seq22696){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22696));
});})(g__20487__auto___22744))
;


var g__20487__auto___22748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__20487__auto___22748){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22749 = arguments.length;
var i__20375__auto___22750 = (0);
while(true){
if((i__20375__auto___22750 < len__20374__auto___22749)){
args__20381__auto__.push((arguments[i__20375__auto___22750]));

var G__22751 = (i__20375__auto___22750 + (1));
i__20375__auto___22750 = G__22751;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22748))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22748){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22748);
});})(g__20487__auto___22748))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__20487__auto___22748){
return (function (seq22697){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22697));
});})(g__20487__auto___22748))
;


var g__20487__auto___22752 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__20487__auto___22752){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22753 = arguments.length;
var i__20375__auto___22754 = (0);
while(true){
if((i__20375__auto___22754 < len__20374__auto___22753)){
args__20381__auto__.push((arguments[i__20375__auto___22754]));

var G__22755 = (i__20375__auto___22754 + (1));
i__20375__auto___22754 = G__22755;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22752))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22752){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22752);
});})(g__20487__auto___22752))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__20487__auto___22752){
return (function (seq22698){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22698));
});})(g__20487__auto___22752))
;


var g__20487__auto___22756 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__20487__auto___22756){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22757 = arguments.length;
var i__20375__auto___22758 = (0);
while(true){
if((i__20375__auto___22758 < len__20374__auto___22757)){
args__20381__auto__.push((arguments[i__20375__auto___22758]));

var G__22759 = (i__20375__auto___22758 + (1));
i__20375__auto___22758 = G__22759;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22756))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22756){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22756);
});})(g__20487__auto___22756))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__20487__auto___22756){
return (function (seq22699){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22699));
});})(g__20487__auto___22756))
;


var g__20487__auto___22760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__20487__auto___22760){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22761 = arguments.length;
var i__20375__auto___22762 = (0);
while(true){
if((i__20375__auto___22762 < len__20374__auto___22761)){
args__20381__auto__.push((arguments[i__20375__auto___22762]));

var G__22763 = (i__20375__auto___22762 + (1));
i__20375__auto___22762 = G__22763;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22760))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22760){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22760);
});})(g__20487__auto___22760))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__20487__auto___22760){
return (function (seq22700){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22700));
});})(g__20487__auto___22760))
;


var g__20487__auto___22764 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__20487__auto___22764){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22765 = arguments.length;
var i__20375__auto___22766 = (0);
while(true){
if((i__20375__auto___22766 < len__20374__auto___22765)){
args__20381__auto__.push((arguments[i__20375__auto___22766]));

var G__22767 = (i__20375__auto___22766 + (1));
i__20375__auto___22766 = G__22767;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22764))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22764){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22764);
});})(g__20487__auto___22764))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__20487__auto___22764){
return (function (seq22701){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22701));
});})(g__20487__auto___22764))
;


var g__20487__auto___22768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__20487__auto___22768){
return (function cljs$spec$impl$gen$string(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22769 = arguments.length;
var i__20375__auto___22770 = (0);
while(true){
if((i__20375__auto___22770 < len__20374__auto___22769)){
args__20381__auto__.push((arguments[i__20375__auto___22770]));

var G__22771 = (i__20375__auto___22770 + (1));
i__20375__auto___22770 = G__22771;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22768))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22768){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22768);
});})(g__20487__auto___22768))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__20487__auto___22768){
return (function (seq22702){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22702));
});})(g__20487__auto___22768))
;


var g__20487__auto___22772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__20487__auto___22772){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22773 = arguments.length;
var i__20375__auto___22774 = (0);
while(true){
if((i__20375__auto___22774 < len__20374__auto___22773)){
args__20381__auto__.push((arguments[i__20375__auto___22774]));

var G__22775 = (i__20375__auto___22774 + (1));
i__20375__auto___22774 = G__22775;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22772))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22772){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22772);
});})(g__20487__auto___22772))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__20487__auto___22772){
return (function (seq22703){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22703));
});})(g__20487__auto___22772))
;


var g__20487__auto___22776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__20487__auto___22776){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22777 = arguments.length;
var i__20375__auto___22778 = (0);
while(true){
if((i__20375__auto___22778 < len__20374__auto___22777)){
args__20381__auto__.push((arguments[i__20375__auto___22778]));

var G__22779 = (i__20375__auto___22778 + (1));
i__20375__auto___22778 = G__22779;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22776))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22776){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22776);
});})(g__20487__auto___22776))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__20487__auto___22776){
return (function (seq22704){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22704));
});})(g__20487__auto___22776))
;


var g__20487__auto___22780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__20487__auto___22780){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22781 = arguments.length;
var i__20375__auto___22782 = (0);
while(true){
if((i__20375__auto___22782 < len__20374__auto___22781)){
args__20381__auto__.push((arguments[i__20375__auto___22782]));

var G__22783 = (i__20375__auto___22782 + (1));
i__20375__auto___22782 = G__22783;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22780))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22780){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22780);
});})(g__20487__auto___22780))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__20487__auto___22780){
return (function (seq22705){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22705));
});})(g__20487__auto___22780))
;


var g__20487__auto___22784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__20487__auto___22784){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22785 = arguments.length;
var i__20375__auto___22786 = (0);
while(true){
if((i__20375__auto___22786 < len__20374__auto___22785)){
args__20381__auto__.push((arguments[i__20375__auto___22786]));

var G__22787 = (i__20375__auto___22786 + (1));
i__20375__auto___22786 = G__22787;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22784))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22784){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22784);
});})(g__20487__auto___22784))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__20487__auto___22784){
return (function (seq22706){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22706));
});})(g__20487__auto___22784))
;


var g__20487__auto___22788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__20487__auto___22788){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22789 = arguments.length;
var i__20375__auto___22790 = (0);
while(true){
if((i__20375__auto___22790 < len__20374__auto___22789)){
args__20381__auto__.push((arguments[i__20375__auto___22790]));

var G__22791 = (i__20375__auto___22790 + (1));
i__20375__auto___22790 = G__22791;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});})(g__20487__auto___22788))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20487__auto___22788){
return (function (args){
return cljs.core.deref.call(null,g__20487__auto___22788);
});})(g__20487__auto___22788))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__20487__auto___22788){
return (function (seq22707){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22707));
});})(g__20487__auto___22788))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__20381__auto__ = [];
var len__20374__auto___22794 = arguments.length;
var i__20375__auto___22795 = (0);
while(true){
if((i__20375__auto___22795 < len__20374__auto___22794)){
args__20381__auto__.push((arguments[i__20375__auto___22795]));

var G__22796 = (i__20375__auto___22795 + (1));
i__20375__auto___22795 = G__22796;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((0) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__20382__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__22792_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__22792_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq22793){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22793));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__22797_SHARP_){
return (new Date(p1__22797_SHARP_));
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