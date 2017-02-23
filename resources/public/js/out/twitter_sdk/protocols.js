// Compiled by ClojureScript 1.9.473 {}
goog.provide('twitter_sdk.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
twitter_sdk.protocols.Tweetable = function(){};

twitter_sdk.protocols.get = (function twitter_sdk$protocols$get(_,path,params){
if((!((_ == null))) && (!((_.twitter_sdk$protocols$Tweetable$get$arity$3 == null)))){
return _.twitter_sdk$protocols$Tweetable$get$arity$3(_,path,params);
} else {
var x__38096__auto__ = (((_ == null))?null:_);
var m__38097__auto__ = (twitter_sdk.protocols.get[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,_,path,params);
} else {
var m__38097__auto____$1 = (twitter_sdk.protocols.get["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,_,path,params);
} else {
throw cljs.core.missing_protocol.call(null,"Tweetable.get",_);
}
}
}
});

twitter_sdk.protocols.post = (function twitter_sdk$protocols$post(_,path,params){
if((!((_ == null))) && (!((_.twitter_sdk$protocols$Tweetable$post$arity$3 == null)))){
return _.twitter_sdk$protocols$Tweetable$post$arity$3(_,path,params);
} else {
var x__38096__auto__ = (((_ == null))?null:_);
var m__38097__auto__ = (twitter_sdk.protocols.post[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,_,path,params);
} else {
var m__38097__auto____$1 = (twitter_sdk.protocols.post["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,_,path,params);
} else {
throw cljs.core.missing_protocol.call(null,"Tweetable.post",_);
}
}
}
});


//# sourceMappingURL=protocols.js.map?rel=1487810683260