// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__19141__auto__ = v;
if(cljs.core.truth_(and__19141__auto__)){
return (v > (0));
} else {
return and__19141__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__30295_SHARP_,p2__30294_SHARP_){
var vec__30299 = clojure.string.split.call(null,p2__30294_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__30299,(0),null);
var v = cljs.core.nth.call(null,vec__30299,(1),null);
return cljs.core.assoc.call(null,p1__30295_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__30302_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__30302_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__30303){
var vec__30307 = p__30303;
var k = cljs.core.nth.call(null,vec__30307,(0),null);
var v = cljs.core.nth.call(null,vec__30307,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__30310_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30310_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__19141__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__19141__auto__){
var and__19141__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__19141__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__19141__auto____$1;
}
} else {
return and__19141__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__6751__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6751__auto__)){
var params = temp__6751__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__30311_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30311_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30318 = arguments.length;
var i__20375__auto___30319 = (0);
while(true){
if((i__20375__auto___30319 < len__20374__auto___30318)){
args__20381__auto__.push((arguments[i__20375__auto___30319]));

var G__30320 = (i__20375__auto___30319 + (1));
i__20375__auto___30319 = G__30320;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30314){
var vec__30315 = p__30314;
var default_headers = cljs.core.nth.call(null,vec__30315,(0),null);
return ((function (vec__30315,default_headers){
return (function (request){
var temp__6751__auto__ = (function (){var or__19153__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var default_headers__$1 = temp__6751__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__30315,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq30312){
var G__30313 = cljs.core.first.call(null,seq30312);
var seq30312__$1 = cljs.core.next.call(null,seq30312);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__30313,seq30312__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30327 = arguments.length;
var i__20375__auto___30328 = (0);
while(true){
if((i__20375__auto___30328 < len__20374__auto___30327)){
args__20381__auto__.push((arguments[i__20375__auto___30328]));

var G__30329 = (i__20375__auto___30328 + (1));
i__20375__auto___30328 = G__30329;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30323){
var vec__30324 = p__30323;
var accept = cljs.core.nth.call(null,vec__30324,(0),null);
return ((function (vec__30324,accept){
return (function (request){
var temp__6751__auto__ = (function (){var or__19153__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var accept__$1 = temp__6751__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__30324,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq30321){
var G__30322 = cljs.core.first.call(null,seq30321);
var seq30321__$1 = cljs.core.next.call(null,seq30321);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__30322,seq30321__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30336 = arguments.length;
var i__20375__auto___30337 = (0);
while(true){
if((i__20375__auto___30337 < len__20374__auto___30336)){
args__20381__auto__.push((arguments[i__20375__auto___30337]));

var G__30338 = (i__20375__auto___30337 + (1));
i__20375__auto___30337 = G__30338;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30332){
var vec__30333 = p__30332;
var content_type = cljs.core.nth.call(null,vec__30333,(0),null);
return ((function (vec__30333,content_type){
return (function (request){
var temp__6751__auto__ = (function (){var or__19153__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var content_type__$1 = temp__6751__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__30333,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq30330){
var G__30331 = cljs.core.first.call(null,seq30330);
var seq30330__$1 = cljs.core.next.call(null,seq30330);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__30331,seq30330__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__6751__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6751__auto__)){
var params = temp__6751__auto__;
var map__30341 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__30341__$1 = ((((!((map__30341 == null)))?((((map__30341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30341):map__30341);
var encoding = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__30347 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__30347__$1 = ((((!((map__30347 == null)))?((((map__30347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30347):map__30347);
var decoding = cljs.core.get.call(null,map__30347__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__30347__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__30347,map__30347__$1,decoding,decoding_opts){
return (function (p1__30343_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__30343_SHARP_,decoding,decoding_opts);
});})(map__30347,map__30347__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__30347,map__30347__$1,decoding,decoding_opts,transit_decode){
return (function (p1__30344_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30344_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__30347,map__30347__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__6751__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6751__auto__)){
var params = temp__6751__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__30349_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30349_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__30353){
var map__30354 = p__30353;
var map__30354__$1 = ((((!((map__30354 == null)))?((((map__30354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30354):map__30354);
var req = map__30354__$1;
var query_params = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__30359){
var map__30360 = p__30359;
var map__30360__$1 = ((((!((map__30360 == null)))?((((map__30360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30360):map__30360);
var request = map__30360__$1;
var form_params = cljs.core.get.call(null,map__30360__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__30360__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__30360__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__19141__auto__ = form_params;
if(cljs.core.truth_(and__19141__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19141__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__30372_30382 = cljs.core.seq.call(null,params);
var chunk__30373_30383 = null;
var count__30374_30384 = (0);
var i__30375_30385 = (0);
while(true){
if((i__30375_30385 < count__30374_30384)){
var vec__30376_30386 = cljs.core._nth.call(null,chunk__30373_30383,i__30375_30385);
var k_30387 = cljs.core.nth.call(null,vec__30376_30386,(0),null);
var v_30388 = cljs.core.nth.call(null,vec__30376_30386,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_30388)){
form_data.append(cljs.core.name.call(null,k_30387),cljs.core.first.call(null,v_30388),cljs.core.second.call(null,v_30388));
} else {
form_data.append(cljs.core.name.call(null,k_30387),v_30388);
}

var G__30389 = seq__30372_30382;
var G__30390 = chunk__30373_30383;
var G__30391 = count__30374_30384;
var G__30392 = (i__30375_30385 + (1));
seq__30372_30382 = G__30389;
chunk__30373_30383 = G__30390;
count__30374_30384 = G__30391;
i__30375_30385 = G__30392;
continue;
} else {
var temp__6753__auto___30393 = cljs.core.seq.call(null,seq__30372_30382);
if(temp__6753__auto___30393){
var seq__30372_30394__$1 = temp__6753__auto___30393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30372_30394__$1)){
var c__20064__auto___30395 = cljs.core.chunk_first.call(null,seq__30372_30394__$1);
var G__30396 = cljs.core.chunk_rest.call(null,seq__30372_30394__$1);
var G__30397 = c__20064__auto___30395;
var G__30398 = cljs.core.count.call(null,c__20064__auto___30395);
var G__30399 = (0);
seq__30372_30382 = G__30396;
chunk__30373_30383 = G__30397;
count__30374_30384 = G__30398;
i__30375_30385 = G__30399;
continue;
} else {
var vec__30379_30400 = cljs.core.first.call(null,seq__30372_30394__$1);
var k_30401 = cljs.core.nth.call(null,vec__30379_30400,(0),null);
var v_30402 = cljs.core.nth.call(null,vec__30379_30400,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_30402)){
form_data.append(cljs.core.name.call(null,k_30401),cljs.core.first.call(null,v_30402),cljs.core.second.call(null,v_30402));
} else {
form_data.append(cljs.core.name.call(null,k_30401),v_30402);
}

var G__30403 = cljs.core.next.call(null,seq__30372_30394__$1);
var G__30404 = null;
var G__30405 = (0);
var G__30406 = (0);
seq__30372_30382 = G__30403;
chunk__30373_30383 = G__30404;
count__30374_30384 = G__30405;
i__30375_30385 = G__30406;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__30410){
var map__30411 = p__30410;
var map__30411__$1 = ((((!((map__30411 == null)))?((((map__30411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30411):map__30411);
var request = map__30411__$1;
var multipart_params = cljs.core.get.call(null,map__30411__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__30411__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__19141__auto__ = multipart_params;
if(cljs.core.truth_(and__19141__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19141__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__6751__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6751__auto__)){
var m = temp__6751__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__30413_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__30413_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__30418){
var map__30419 = p__30418;
var map__30419__$1 = ((((!((map__30419 == null)))?((((map__30419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30419):map__30419);
var req = map__30419__$1;
var query_params = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__6751__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__6751__auto__)){
var spec = temp__6751__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__6751__auto__,map__30419,map__30419__$1,req,query_params){
return (function (p1__30414_SHARP_){
return cljs.core.merge.call(null,p1__30414_SHARP_,query_params);
});})(spec,temp__6751__auto__,map__30419,map__30419__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30427 = arguments.length;
var i__20375__auto___30428 = (0);
while(true){
if((i__20375__auto___30428 < len__20374__auto___30427)){
args__20381__auto__.push((arguments[i__20375__auto___30428]));

var G__30429 = (i__20375__auto___30428 + (1));
i__20375__auto___30428 = G__30429;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30423){
var vec__30424 = p__30423;
var credentials = cljs.core.nth.call(null,vec__30424,(0),null);
return ((function (vec__30424,credentials){
return (function (req){
var credentials__$1 = (function (){var or__19153__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__30424,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq30421){
var G__30422 = cljs.core.first.call(null,seq30421);
var seq30421__$1 = cljs.core.next.call(null,seq30421);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__30422,seq30421__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__6751__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6751__auto__)){
var oauth_token = temp__6751__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__6751__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6751__auto__)){
var custom_channel = temp__6751__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30436 = arguments.length;
var i__20375__auto___30437 = (0);
while(true){
if((i__20375__auto___30437 < len__20374__auto___30436)){
args__20381__auto__.push((arguments[i__20375__auto___30437]));

var G__30438 = (i__20375__auto___30437 + (1));
i__20375__auto___30437 = G__30438;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30432){
var vec__30433 = p__30432;
var req = cljs.core.nth.call(null,vec__30433,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq30430){
var G__30431 = cljs.core.first.call(null,seq30430);
var seq30430__$1 = cljs.core.next.call(null,seq30430);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__30431,seq30430__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30445 = arguments.length;
var i__20375__auto___30446 = (0);
while(true){
if((i__20375__auto___30446 < len__20374__auto___30445)){
args__20381__auto__.push((arguments[i__20375__auto___30446]));

var G__30447 = (i__20375__auto___30446 + (1));
i__20375__auto___30446 = G__30447;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30441){
var vec__30442 = p__30441;
var req = cljs.core.nth.call(null,vec__30442,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq30439){
var G__30440 = cljs.core.first.call(null,seq30439);
var seq30439__$1 = cljs.core.next.call(null,seq30439);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__30440,seq30439__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30454 = arguments.length;
var i__20375__auto___30455 = (0);
while(true){
if((i__20375__auto___30455 < len__20374__auto___30454)){
args__20381__auto__.push((arguments[i__20375__auto___30455]));

var G__30456 = (i__20375__auto___30455 + (1));
i__20375__auto___30455 = G__30456;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30450){
var vec__30451 = p__30450;
var req = cljs.core.nth.call(null,vec__30451,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq30448){
var G__30449 = cljs.core.first.call(null,seq30448);
var seq30448__$1 = cljs.core.next.call(null,seq30448);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__30449,seq30448__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30463 = arguments.length;
var i__20375__auto___30464 = (0);
while(true){
if((i__20375__auto___30464 < len__20374__auto___30463)){
args__20381__auto__.push((arguments[i__20375__auto___30464]));

var G__30465 = (i__20375__auto___30464 + (1));
i__20375__auto___30464 = G__30465;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30459){
var vec__30460 = p__30459;
var req = cljs.core.nth.call(null,vec__30460,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq30457){
var G__30458 = cljs.core.first.call(null,seq30457);
var seq30457__$1 = cljs.core.next.call(null,seq30457);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__30458,seq30457__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30472 = arguments.length;
var i__20375__auto___30473 = (0);
while(true){
if((i__20375__auto___30473 < len__20374__auto___30472)){
args__20381__auto__.push((arguments[i__20375__auto___30473]));

var G__30474 = (i__20375__auto___30473 + (1));
i__20375__auto___30473 = G__30474;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30468){
var vec__30469 = p__30468;
var req = cljs.core.nth.call(null,vec__30469,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq30466){
var G__30467 = cljs.core.first.call(null,seq30466);
var seq30466__$1 = cljs.core.next.call(null,seq30466);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__30467,seq30466__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30481 = arguments.length;
var i__20375__auto___30482 = (0);
while(true){
if((i__20375__auto___30482 < len__20374__auto___30481)){
args__20381__auto__.push((arguments[i__20375__auto___30482]));

var G__30483 = (i__20375__auto___30482 + (1));
i__20375__auto___30482 = G__30483;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30477){
var vec__30478 = p__30477;
var req = cljs.core.nth.call(null,vec__30478,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq30475){
var G__30476 = cljs.core.first.call(null,seq30475);
var seq30475__$1 = cljs.core.next.call(null,seq30475);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__30476,seq30475__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30490 = arguments.length;
var i__20375__auto___30491 = (0);
while(true){
if((i__20375__auto___30491 < len__20374__auto___30490)){
args__20381__auto__.push((arguments[i__20375__auto___30491]));

var G__30492 = (i__20375__auto___30491 + (1));
i__20375__auto___30491 = G__30492;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30486){
var vec__30487 = p__30486;
var req = cljs.core.nth.call(null,vec__30487,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq30484){
var G__30485 = cljs.core.first.call(null,seq30484);
var seq30484__$1 = cljs.core.next.call(null,seq30484);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__30485,seq30484__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30499 = arguments.length;
var i__20375__auto___30500 = (0);
while(true){
if((i__20375__auto___30500 < len__20374__auto___30499)){
args__20381__auto__.push((arguments[i__20375__auto___30500]));

var G__30501 = (i__20375__auto___30500 + (1));
i__20375__auto___30500 = G__30501;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30495){
var vec__30496 = p__30495;
var req = cljs.core.nth.call(null,vec__30496,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq30493){
var G__30494 = cljs.core.first.call(null,seq30493);
var seq30493__$1 = cljs.core.next.call(null,seq30493);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__30494,seq30493__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__20381__auto__ = [];
var len__20374__auto___30508 = arguments.length;
var i__20375__auto___30509 = (0);
while(true){
if((i__20375__auto___30509 < len__20374__auto___30508)){
args__20381__auto__.push((arguments[i__20375__auto___30509]));

var G__30510 = (i__20375__auto___30509 + (1));
i__20375__auto___30509 = G__30510;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30504){
var vec__30505 = p__30504;
var req = cljs.core.nth.call(null,vec__30505,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq30502){
var G__30503 = cljs.core.first.call(null,seq30502);
var seq30502__$1 = cljs.core.next.call(null,seq30502);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__30503,seq30502__$1);
});


//# sourceMappingURL=client.js.map