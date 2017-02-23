// Compiled by ClojureScript 1.9.473 {}
goog.provide('twitter_sdk.requests');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
twitter_sdk.requests.runtime = (function twitter_sdk$requests$runtime(){
var or__19153__auto__ = "browser";
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return "browser";
}
});
twitter_sdk.requests.set_xhr = (new cljs.core.Delay((function (){
if(cljs.core._EQ_.call(null,twitter_sdk.requests.runtime.call(null),"node")){
return XMLHttpRequest = cljs.nodejs.require.call(null,"xhr2");
} else {
return null;
}
}),null));
twitter_sdk.requests.verb_fn = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),cljs_http.client.get,new cljs.core.Keyword(null,"post","post",269697687),cljs_http.client.post], null);
twitter_sdk.requests.request = (function twitter_sdk$requests$request(var_args){
var args31039 = [];
var len__20374__auto___31042 = arguments.length;
var i__20375__auto___31043 = (0);
while(true){
if((i__20375__auto___31043 < len__20374__auto___31042)){
args31039.push((arguments[i__20375__auto___31043]));

var G__31044 = (i__20375__auto___31043 + (1));
i__20375__auto___31043 = G__31044;
continue;
} else {
}
break;
}

var G__31041 = args31039.length;
switch (G__31041) {
case 3:
return twitter_sdk.requests.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return twitter_sdk.requests.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31039.length)].join('')));

}
});

twitter_sdk.requests.request.cljs$core$IFn$_invoke$arity$3 = (function (verb,url,params){
cljs.core.deref.call(null,twitter_sdk.requests.set_xhr);

return cljs.core.get.call(null,twitter_sdk.requests.verb_fn,verb,cljs_http.client.get).call(null,url,params);
});

twitter_sdk.requests.request.cljs$core$IFn$_invoke$arity$2 = (function (verb,url){
return twitter_sdk.requests.request.call(null,verb,url,cljs.core.PersistentArrayMap.EMPTY);
});

twitter_sdk.requests.request.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=requests.js.map