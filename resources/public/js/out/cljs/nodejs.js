// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49186__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49187__i = 0, G__49187__a = new Array(arguments.length -  0);
while (G__49187__i < G__49187__a.length) {G__49187__a[G__49187__i] = arguments[G__49187__i + 0]; ++G__49187__i;}
  args = new cljs.core.IndexedSeq(G__49187__a,0);
} 
return G__49186__delegate.call(this,args);};
G__49186.cljs$lang$maxFixedArity = 0;
G__49186.cljs$lang$applyTo = (function (arglist__49188){
var args = cljs.core.seq(arglist__49188);
return G__49186__delegate(args);
});
G__49186.cljs$core$IFn$_invoke$arity$variadic = G__49186__delegate;
return G__49186;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49189__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49190__i = 0, G__49190__a = new Array(arguments.length -  0);
while (G__49190__i < G__49190__a.length) {G__49190__a[G__49190__i] = arguments[G__49190__i + 0]; ++G__49190__i;}
  args = new cljs.core.IndexedSeq(G__49190__a,0);
} 
return G__49189__delegate.call(this,args);};
G__49189.cljs$lang$maxFixedArity = 0;
G__49189.cljs$lang$applyTo = (function (arglist__49191){
var args = cljs.core.seq(arglist__49191);
return G__49189__delegate(args);
});
G__49189.cljs$core$IFn$_invoke$arity$variadic = G__49189__delegate;
return G__49189;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1487810684563