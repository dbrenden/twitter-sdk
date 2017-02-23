// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.userAgent.product');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return !((goog.global.document == null));
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if(cljs.core.not.call(null,goog.userAgent.product.IE)){
return (new CustomEvent(event_name,(function (){var obj43033 = {"detail":data};
return obj43033;
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__37366__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__37366__auto__)){
var and__37366__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__37366__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__37366__auto____$1;
}
} else {
return and__37366__auto__;
}
})())){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event.call(null,event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(figwheel.client.utils._STAR_print_debug_STAR_){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args43038 = [];
var len__38599__auto___43044 = arguments.length;
var i__38600__auto___43045 = (0);
while(true){
if((i__38600__auto___43045 < len__38599__auto___43044)){
args43038.push((arguments[i__38600__auto___43045]));

var G__43046 = (i__38600__auto___43045 + (1));
i__38600__auto___43045 = G__43046;
continue;
} else {
}
break;
}

var G__43040 = args43038.length;
switch (G__43040) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43038.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__43041 = cljs.core._EQ_;
var expr__43042 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__43041.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__43042))){
return ((function (pred__43041,expr__43042){
return (function (p1__43034_SHARP_){
return console.warn(p1__43034_SHARP_);
});
;})(pred__43041,expr__43042))
} else {
if(cljs.core.truth_(pred__43041.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__43042))){
return ((function (pred__43041,expr__43042){
return (function (p1__43035_SHARP_){
return console.debug(p1__43035_SHARP_);
});
;})(pred__43041,expr__43042))
} else {
if(cljs.core.truth_(pred__43041.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__43042))){
return ((function (pred__43041,expr__43042){
return (function (p1__43036_SHARP_){
return console.error(p1__43036_SHARP_);
});
;})(pred__43041,expr__43042))
} else {
return ((function (pred__43041,expr__43042){
return (function (p1__43037_SHARP_){
return console.log(p1__43037_SHARP_);
});
;})(pred__43041,expr__43042))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__43048){
var map__43051 = p__43048;
var map__43051__$1 = ((((!((map__43051 == null)))?((((map__43051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43051):map__43051);
var opts = map__43051__$1;
var eval_fn = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1487810675462