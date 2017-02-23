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
if(cljs.core.truth_((function (){var and__37366__auto__ = v;
if(cljs.core.truth_(and__37366__auto__)){
return (v > (0));
} else {
return and__37366__auto__;
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
return cljs.core.reduce.call(null,(function (p1__48968_SHARP_,p2__48967_SHARP_){
var vec__48972 = clojure.string.split.call(null,p2__48967_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__48972,(0),null);
var v = cljs.core.nth.call(null,vec__48972,(1),null);
return cljs.core.assoc.call(null,p1__48968_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__48975_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__48975_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__48976){
var vec__48980 = p__48976;
var k = cljs.core.nth.call(null,vec__48980,(0),null);
var v = cljs.core.nth.call(null,vec__48980,(1),null);
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
return (function (p1__48983_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48983_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__37366__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__37366__auto__){
var and__37366__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__37366__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__37366__auto____$1;
}
} else {
return and__37366__auto__;
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
return cljs.core.async.map.call(null,(function (p1__48984_SHARP_){
return cljs_http.client.decode_body.call(null,p1__48984_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__38606__auto__ = [];
var len__38599__auto___48991 = arguments.length;
var i__38600__auto___48992 = (0);
while(true){
if((i__38600__auto___48992 < len__38599__auto___48991)){
args__38606__auto__.push((arguments[i__38600__auto___48992]));

var G__48993 = (i__38600__auto___48992 + (1));
i__38600__auto___48992 = G__48993;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__48987){
var vec__48988 = p__48987;
var default_headers = cljs.core.nth.call(null,vec__48988,(0),null);
return ((function (vec__48988,default_headers){
return (function (request){
var temp__6751__auto__ = (function (){var or__37378__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
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
;})(vec__48988,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq48985){
var G__48986 = cljs.core.first.call(null,seq48985);
var seq48985__$1 = cljs.core.next.call(null,seq48985);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__48986,seq48985__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49000 = arguments.length;
var i__38600__auto___49001 = (0);
while(true){
if((i__38600__auto___49001 < len__38599__auto___49000)){
args__38606__auto__.push((arguments[i__38600__auto___49001]));

var G__49002 = (i__38600__auto___49001 + (1));
i__38600__auto___49001 = G__49002;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__48996){
var vec__48997 = p__48996;
var accept = cljs.core.nth.call(null,vec__48997,(0),null);
return ((function (vec__48997,accept){
return (function (request){
var temp__6751__auto__ = (function (){var or__37378__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
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
;})(vec__48997,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq48994){
var G__48995 = cljs.core.first.call(null,seq48994);
var seq48994__$1 = cljs.core.next.call(null,seq48994);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__48995,seq48994__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49009 = arguments.length;
var i__38600__auto___49010 = (0);
while(true){
if((i__38600__auto___49010 < len__38599__auto___49009)){
args__38606__auto__.push((arguments[i__38600__auto___49010]));

var G__49011 = (i__38600__auto___49010 + (1));
i__38600__auto___49010 = G__49011;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__49005){
var vec__49006 = p__49005;
var content_type = cljs.core.nth.call(null,vec__49006,(0),null);
return ((function (vec__49006,content_type){
return (function (request){
var temp__6751__auto__ = (function (){var or__37378__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
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
;})(vec__49006,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq49003){
var G__49004 = cljs.core.first.call(null,seq49003);
var seq49003__$1 = cljs.core.next.call(null,seq49003);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__49004,seq49003__$1);
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
var map__49014 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__49014__$1 = ((((!((map__49014 == null)))?((((map__49014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49014):map__49014);
var encoding = cljs.core.get.call(null,map__49014__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__49014__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__49020 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__49020__$1 = ((((!((map__49020 == null)))?((((map__49020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49020):map__49020);
var decoding = cljs.core.get.call(null,map__49020__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__49020__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__49020,map__49020__$1,decoding,decoding_opts){
return (function (p1__49016_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__49016_SHARP_,decoding,decoding_opts);
});})(map__49020,map__49020__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__49020,map__49020__$1,decoding,decoding_opts,transit_decode){
return (function (p1__49017_SHARP_){
return cljs_http.client.decode_body.call(null,p1__49017_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__49020,map__49020__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__49022_SHARP_){
return cljs_http.client.decode_body.call(null,p1__49022_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__49026){
var map__49027 = p__49026;
var map__49027__$1 = ((((!((map__49027 == null)))?((((map__49027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49027):map__49027);
var req = map__49027__$1;
var query_params = cljs.core.get.call(null,map__49027__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__49032){
var map__49033 = p__49032;
var map__49033__$1 = ((((!((map__49033 == null)))?((((map__49033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49033):map__49033);
var request = map__49033__$1;
var form_params = cljs.core.get.call(null,map__49033__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__49033__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__49033__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__37366__auto__ = form_params;
if(cljs.core.truth_(and__37366__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__37366__auto__;
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
var seq__49045_49055 = cljs.core.seq.call(null,params);
var chunk__49046_49056 = null;
var count__49047_49057 = (0);
var i__49048_49058 = (0);
while(true){
if((i__49048_49058 < count__49047_49057)){
var vec__49049_49059 = cljs.core._nth.call(null,chunk__49046_49056,i__49048_49058);
var k_49060 = cljs.core.nth.call(null,vec__49049_49059,(0),null);
var v_49061 = cljs.core.nth.call(null,vec__49049_49059,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_49061)){
form_data.append(cljs.core.name.call(null,k_49060),cljs.core.first.call(null,v_49061),cljs.core.second.call(null,v_49061));
} else {
form_data.append(cljs.core.name.call(null,k_49060),v_49061);
}

var G__49062 = seq__49045_49055;
var G__49063 = chunk__49046_49056;
var G__49064 = count__49047_49057;
var G__49065 = (i__49048_49058 + (1));
seq__49045_49055 = G__49062;
chunk__49046_49056 = G__49063;
count__49047_49057 = G__49064;
i__49048_49058 = G__49065;
continue;
} else {
var temp__6753__auto___49066 = cljs.core.seq.call(null,seq__49045_49055);
if(temp__6753__auto___49066){
var seq__49045_49067__$1 = temp__6753__auto___49066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49045_49067__$1)){
var c__38289__auto___49068 = cljs.core.chunk_first.call(null,seq__49045_49067__$1);
var G__49069 = cljs.core.chunk_rest.call(null,seq__49045_49067__$1);
var G__49070 = c__38289__auto___49068;
var G__49071 = cljs.core.count.call(null,c__38289__auto___49068);
var G__49072 = (0);
seq__49045_49055 = G__49069;
chunk__49046_49056 = G__49070;
count__49047_49057 = G__49071;
i__49048_49058 = G__49072;
continue;
} else {
var vec__49052_49073 = cljs.core.first.call(null,seq__49045_49067__$1);
var k_49074 = cljs.core.nth.call(null,vec__49052_49073,(0),null);
var v_49075 = cljs.core.nth.call(null,vec__49052_49073,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_49075)){
form_data.append(cljs.core.name.call(null,k_49074),cljs.core.first.call(null,v_49075),cljs.core.second.call(null,v_49075));
} else {
form_data.append(cljs.core.name.call(null,k_49074),v_49075);
}

var G__49076 = cljs.core.next.call(null,seq__49045_49067__$1);
var G__49077 = null;
var G__49078 = (0);
var G__49079 = (0);
seq__49045_49055 = G__49076;
chunk__49046_49056 = G__49077;
count__49047_49057 = G__49078;
i__49048_49058 = G__49079;
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
return (function (p__49083){
var map__49084 = p__49083;
var map__49084__$1 = ((((!((map__49084 == null)))?((((map__49084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49084):map__49084);
var request = map__49084__$1;
var multipart_params = cljs.core.get.call(null,map__49084__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__49084__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__37366__auto__ = multipart_params;
if(cljs.core.truth_(and__37366__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__37366__auto__;
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
return (function (p1__49086_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__49086_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__49091){
var map__49092 = p__49091;
var map__49092__$1 = ((((!((map__49092 == null)))?((((map__49092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49092):map__49092);
var req = map__49092__$1;
var query_params = cljs.core.get.call(null,map__49092__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__6751__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__6751__auto__)){
var spec = temp__6751__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__6751__auto__,map__49092,map__49092__$1,req,query_params){
return (function (p1__49087_SHARP_){
return cljs.core.merge.call(null,p1__49087_SHARP_,query_params);
});})(spec,temp__6751__auto__,map__49092,map__49092__$1,req,query_params))
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
var args__38606__auto__ = [];
var len__38599__auto___49100 = arguments.length;
var i__38600__auto___49101 = (0);
while(true){
if((i__38600__auto___49101 < len__38599__auto___49100)){
args__38606__auto__.push((arguments[i__38600__auto___49101]));

var G__49102 = (i__38600__auto___49101 + (1));
i__38600__auto___49101 = G__49102;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__49096){
var vec__49097 = p__49096;
var credentials = cljs.core.nth.call(null,vec__49097,(0),null);
return ((function (vec__49097,credentials){
return (function (req){
var credentials__$1 = (function (){var or__37378__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
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
;})(vec__49097,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq49094){
var G__49095 = cljs.core.first.call(null,seq49094);
var seq49094__$1 = cljs.core.next.call(null,seq49094);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__49095,seq49094__$1);
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
var args__38606__auto__ = [];
var len__38599__auto___49109 = arguments.length;
var i__38600__auto___49110 = (0);
while(true){
if((i__38600__auto___49110 < len__38599__auto___49109)){
args__38606__auto__.push((arguments[i__38600__auto___49110]));

var G__49111 = (i__38600__auto___49110 + (1));
i__38600__auto___49110 = G__49111;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49105){
var vec__49106 = p__49105;
var req = cljs.core.nth.call(null,vec__49106,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq49103){
var G__49104 = cljs.core.first.call(null,seq49103);
var seq49103__$1 = cljs.core.next.call(null,seq49103);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__49104,seq49103__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49118 = arguments.length;
var i__38600__auto___49119 = (0);
while(true){
if((i__38600__auto___49119 < len__38599__auto___49118)){
args__38606__auto__.push((arguments[i__38600__auto___49119]));

var G__49120 = (i__38600__auto___49119 + (1));
i__38600__auto___49119 = G__49120;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49114){
var vec__49115 = p__49114;
var req = cljs.core.nth.call(null,vec__49115,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq49112){
var G__49113 = cljs.core.first.call(null,seq49112);
var seq49112__$1 = cljs.core.next.call(null,seq49112);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__49113,seq49112__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49127 = arguments.length;
var i__38600__auto___49128 = (0);
while(true){
if((i__38600__auto___49128 < len__38599__auto___49127)){
args__38606__auto__.push((arguments[i__38600__auto___49128]));

var G__49129 = (i__38600__auto___49128 + (1));
i__38600__auto___49128 = G__49129;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49123){
var vec__49124 = p__49123;
var req = cljs.core.nth.call(null,vec__49124,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq49121){
var G__49122 = cljs.core.first.call(null,seq49121);
var seq49121__$1 = cljs.core.next.call(null,seq49121);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__49122,seq49121__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49136 = arguments.length;
var i__38600__auto___49137 = (0);
while(true){
if((i__38600__auto___49137 < len__38599__auto___49136)){
args__38606__auto__.push((arguments[i__38600__auto___49137]));

var G__49138 = (i__38600__auto___49137 + (1));
i__38600__auto___49137 = G__49138;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49132){
var vec__49133 = p__49132;
var req = cljs.core.nth.call(null,vec__49133,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq49130){
var G__49131 = cljs.core.first.call(null,seq49130);
var seq49130__$1 = cljs.core.next.call(null,seq49130);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__49131,seq49130__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49145 = arguments.length;
var i__38600__auto___49146 = (0);
while(true){
if((i__38600__auto___49146 < len__38599__auto___49145)){
args__38606__auto__.push((arguments[i__38600__auto___49146]));

var G__49147 = (i__38600__auto___49146 + (1));
i__38600__auto___49146 = G__49147;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49141){
var vec__49142 = p__49141;
var req = cljs.core.nth.call(null,vec__49142,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq49139){
var G__49140 = cljs.core.first.call(null,seq49139);
var seq49139__$1 = cljs.core.next.call(null,seq49139);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__49140,seq49139__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49154 = arguments.length;
var i__38600__auto___49155 = (0);
while(true){
if((i__38600__auto___49155 < len__38599__auto___49154)){
args__38606__auto__.push((arguments[i__38600__auto___49155]));

var G__49156 = (i__38600__auto___49155 + (1));
i__38600__auto___49155 = G__49156;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49150){
var vec__49151 = p__49150;
var req = cljs.core.nth.call(null,vec__49151,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq49148){
var G__49149 = cljs.core.first.call(null,seq49148);
var seq49148__$1 = cljs.core.next.call(null,seq49148);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__49149,seq49148__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49163 = arguments.length;
var i__38600__auto___49164 = (0);
while(true){
if((i__38600__auto___49164 < len__38599__auto___49163)){
args__38606__auto__.push((arguments[i__38600__auto___49164]));

var G__49165 = (i__38600__auto___49164 + (1));
i__38600__auto___49164 = G__49165;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49159){
var vec__49160 = p__49159;
var req = cljs.core.nth.call(null,vec__49160,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq49157){
var G__49158 = cljs.core.first.call(null,seq49157);
var seq49157__$1 = cljs.core.next.call(null,seq49157);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__49158,seq49157__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49172 = arguments.length;
var i__38600__auto___49173 = (0);
while(true){
if((i__38600__auto___49173 < len__38599__auto___49172)){
args__38606__auto__.push((arguments[i__38600__auto___49173]));

var G__49174 = (i__38600__auto___49173 + (1));
i__38600__auto___49173 = G__49174;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49168){
var vec__49169 = p__49168;
var req = cljs.core.nth.call(null,vec__49169,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq49166){
var G__49167 = cljs.core.first.call(null,seq49166);
var seq49166__$1 = cljs.core.next.call(null,seq49166);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__49167,seq49166__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__38606__auto__ = [];
var len__38599__auto___49181 = arguments.length;
var i__38600__auto___49182 = (0);
while(true){
if((i__38600__auto___49182 < len__38599__auto___49181)){
args__38606__auto__.push((arguments[i__38600__auto___49182]));

var G__49183 = (i__38600__auto___49182 + (1));
i__38600__auto___49182 = G__49183;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49177){
var vec__49178 = p__49177;
var req = cljs.core.nth.call(null,vec__49178,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq49175){
var G__49176 = cljs.core.first.call(null,seq49175);
var seq49175__$1 = cljs.core.next.call(null,seq49175);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__49176,seq49175__$1);
});


//# sourceMappingURL=client.js.map?rel=1487810684517