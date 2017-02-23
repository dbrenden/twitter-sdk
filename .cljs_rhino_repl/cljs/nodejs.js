// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30286__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30287__i = 0, G__30287__a = new Array(arguments.length -  0);
while (G__30287__i < G__30287__a.length) {G__30287__a[G__30287__i] = arguments[G__30287__i + 0]; ++G__30287__i;}
  args = new cljs.core.IndexedSeq(G__30287__a,0);
} 
return G__30286__delegate.call(this,args);};
G__30286.cljs$lang$maxFixedArity = 0;
G__30286.cljs$lang$applyTo = (function (arglist__30288){
var args = cljs.core.seq(arglist__30288);
return G__30286__delegate(args);
});
G__30286.cljs$core$IFn$_invoke$arity$variadic = G__30286__delegate;
return G__30286;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30289__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30290__i = 0, G__30290__a = new Array(arguments.length -  0);
while (G__30290__i < G__30290__a.length) {G__30290__a[G__30290__i] = arguments[G__30290__i + 0]; ++G__30290__i;}
  args = new cljs.core.IndexedSeq(G__30290__a,0);
} 
return G__30289__delegate.call(this,args);};
G__30289.cljs$lang$maxFixedArity = 0;
G__30289.cljs$lang$applyTo = (function (arglist__30291){
var args = cljs.core.seq(arglist__30291);
return G__30289__delegate(args);
});
G__30289.cljs$core$IFn$_invoke$arity$variadic = G__30289__delegate;
return G__30289;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map