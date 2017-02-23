// Compiled by ClojureScript 1.9.473 {:target :nodejs}
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
if(cljs.core.truth_((function (){var and__29407__auto__ = v;
if(cljs.core.truth_(and__29407__auto__)){
return (v > (0));
} else {
return and__29407__auto__;
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
return cljs.core.reduce.call(null,(function (p1__35496_SHARP_,p2__35495_SHARP_){
var vec__35500 = clojure.string.split.call(null,p2__35495_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__35500,(0),null);
var v = cljs.core.nth.call(null,vec__35500,(1),null);
return cljs.core.assoc.call(null,p1__35496_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__35503_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__35503_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__35504){
var vec__35508 = p__35504;
var k = cljs.core.nth.call(null,vec__35508,(0),null);
var v = cljs.core.nth.call(null,vec__35508,(1),null);
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
return (function (p1__35511_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35511_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__29407__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__29407__auto__){
var and__29407__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__29407__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__29407__auto____$1;
}
} else {
return and__29407__auto__;
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
return cljs.core.async.map.call(null,(function (p1__35512_SHARP_){
return cljs_http.client.decode_body.call(null,p1__35512_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35519 = arguments.length;
var i__30641__auto___35520 = (0);
while(true){
if((i__30641__auto___35520 < len__30640__auto___35519)){
args__30647__auto__.push((arguments[i__30641__auto___35520]));

var G__35521 = (i__30641__auto___35520 + (1));
i__30641__auto___35520 = G__35521;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__35515){
var vec__35516 = p__35515;
var default_headers = cljs.core.nth.call(null,vec__35516,(0),null);
return ((function (vec__35516,default_headers){
return (function (request){
var temp__6751__auto__ = (function (){var or__29419__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29419__auto__)){
return or__29419__auto__;
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
;})(vec__35516,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq35513){
var G__35514 = cljs.core.first.call(null,seq35513);
var seq35513__$1 = cljs.core.next.call(null,seq35513);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__35514,seq35513__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35528 = arguments.length;
var i__30641__auto___35529 = (0);
while(true){
if((i__30641__auto___35529 < len__30640__auto___35528)){
args__30647__auto__.push((arguments[i__30641__auto___35529]));

var G__35530 = (i__30641__auto___35529 + (1));
i__30641__auto___35529 = G__35530;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__35524){
var vec__35525 = p__35524;
var accept = cljs.core.nth.call(null,vec__35525,(0),null);
return ((function (vec__35525,accept){
return (function (request){
var temp__6751__auto__ = (function (){var or__29419__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29419__auto__)){
return or__29419__auto__;
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
;})(vec__35525,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq35522){
var G__35523 = cljs.core.first.call(null,seq35522);
var seq35522__$1 = cljs.core.next.call(null,seq35522);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__35523,seq35522__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35537 = arguments.length;
var i__30641__auto___35538 = (0);
while(true){
if((i__30641__auto___35538 < len__30640__auto___35537)){
args__30647__auto__.push((arguments[i__30641__auto___35538]));

var G__35539 = (i__30641__auto___35538 + (1));
i__30641__auto___35538 = G__35539;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__35533){
var vec__35534 = p__35533;
var content_type = cljs.core.nth.call(null,vec__35534,(0),null);
return ((function (vec__35534,content_type){
return (function (request){
var temp__6751__auto__ = (function (){var or__29419__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29419__auto__)){
return or__29419__auto__;
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
;})(vec__35534,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq35531){
var G__35532 = cljs.core.first.call(null,seq35531);
var seq35531__$1 = cljs.core.next.call(null,seq35531);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__35532,seq35531__$1);
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
var map__35542 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__35542__$1 = ((((!((map__35542 == null)))?((((map__35542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35542):map__35542);
var encoding = cljs.core.get.call(null,map__35542__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__35542__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__35548 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__35548__$1 = ((((!((map__35548 == null)))?((((map__35548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35548):map__35548);
var decoding = cljs.core.get.call(null,map__35548__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__35548__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__35548,map__35548__$1,decoding,decoding_opts){
return (function (p1__35544_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__35544_SHARP_,decoding,decoding_opts);
});})(map__35548,map__35548__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__35548,map__35548__$1,decoding,decoding_opts,transit_decode){
return (function (p1__35545_SHARP_){
return cljs_http.client.decode_body.call(null,p1__35545_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__35548,map__35548__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__35550_SHARP_){
return cljs_http.client.decode_body.call(null,p1__35550_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__35554){
var map__35555 = p__35554;
var map__35555__$1 = ((((!((map__35555 == null)))?((((map__35555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35555):map__35555);
var req = map__35555__$1;
var query_params = cljs.core.get.call(null,map__35555__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__35560){
var map__35561 = p__35560;
var map__35561__$1 = ((((!((map__35561 == null)))?((((map__35561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35561):map__35561);
var request = map__35561__$1;
var form_params = cljs.core.get.call(null,map__35561__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__35561__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__35561__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__29407__auto__ = form_params;
if(cljs.core.truth_(and__29407__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__29407__auto__;
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
var seq__35573_35583 = cljs.core.seq.call(null,params);
var chunk__35574_35584 = null;
var count__35575_35585 = (0);
var i__35576_35586 = (0);
while(true){
if((i__35576_35586 < count__35575_35585)){
var vec__35577_35587 = cljs.core._nth.call(null,chunk__35574_35584,i__35576_35586);
var k_35588 = cljs.core.nth.call(null,vec__35577_35587,(0),null);
var v_35589 = cljs.core.nth.call(null,vec__35577_35587,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_35589)){
form_data.append(cljs.core.name.call(null,k_35588),cljs.core.first.call(null,v_35589),cljs.core.second.call(null,v_35589));
} else {
form_data.append(cljs.core.name.call(null,k_35588),v_35589);
}

var G__35590 = seq__35573_35583;
var G__35591 = chunk__35574_35584;
var G__35592 = count__35575_35585;
var G__35593 = (i__35576_35586 + (1));
seq__35573_35583 = G__35590;
chunk__35574_35584 = G__35591;
count__35575_35585 = G__35592;
i__35576_35586 = G__35593;
continue;
} else {
var temp__6753__auto___35594 = cljs.core.seq.call(null,seq__35573_35583);
if(temp__6753__auto___35594){
var seq__35573_35595__$1 = temp__6753__auto___35594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35573_35595__$1)){
var c__30330__auto___35596 = cljs.core.chunk_first.call(null,seq__35573_35595__$1);
var G__35597 = cljs.core.chunk_rest.call(null,seq__35573_35595__$1);
var G__35598 = c__30330__auto___35596;
var G__35599 = cljs.core.count.call(null,c__30330__auto___35596);
var G__35600 = (0);
seq__35573_35583 = G__35597;
chunk__35574_35584 = G__35598;
count__35575_35585 = G__35599;
i__35576_35586 = G__35600;
continue;
} else {
var vec__35580_35601 = cljs.core.first.call(null,seq__35573_35595__$1);
var k_35602 = cljs.core.nth.call(null,vec__35580_35601,(0),null);
var v_35603 = cljs.core.nth.call(null,vec__35580_35601,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_35603)){
form_data.append(cljs.core.name.call(null,k_35602),cljs.core.first.call(null,v_35603),cljs.core.second.call(null,v_35603));
} else {
form_data.append(cljs.core.name.call(null,k_35602),v_35603);
}

var G__35604 = cljs.core.next.call(null,seq__35573_35595__$1);
var G__35605 = null;
var G__35606 = (0);
var G__35607 = (0);
seq__35573_35583 = G__35604;
chunk__35574_35584 = G__35605;
count__35575_35585 = G__35606;
i__35576_35586 = G__35607;
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
return (function (p__35611){
var map__35612 = p__35611;
var map__35612__$1 = ((((!((map__35612 == null)))?((((map__35612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35612):map__35612);
var request = map__35612__$1;
var multipart_params = cljs.core.get.call(null,map__35612__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__35612__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__29407__auto__ = multipart_params;
if(cljs.core.truth_(and__29407__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__29407__auto__;
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
return (function (p1__35614_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__35614_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__35619){
var map__35620 = p__35619;
var map__35620__$1 = ((((!((map__35620 == null)))?((((map__35620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35620):map__35620);
var req = map__35620__$1;
var query_params = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__6751__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__6751__auto__)){
var spec = temp__6751__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__6751__auto__,map__35620,map__35620__$1,req,query_params){
return (function (p1__35615_SHARP_){
return cljs.core.merge.call(null,p1__35615_SHARP_,query_params);
});})(spec,temp__6751__auto__,map__35620,map__35620__$1,req,query_params))
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
var args__30647__auto__ = [];
var len__30640__auto___35628 = arguments.length;
var i__30641__auto___35629 = (0);
while(true){
if((i__30641__auto___35629 < len__30640__auto___35628)){
args__30647__auto__.push((arguments[i__30641__auto___35629]));

var G__35630 = (i__30641__auto___35629 + (1));
i__30641__auto___35629 = G__35630;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__35624){
var vec__35625 = p__35624;
var credentials = cljs.core.nth.call(null,vec__35625,(0),null);
return ((function (vec__35625,credentials){
return (function (req){
var credentials__$1 = (function (){var or__29419__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__29419__auto__)){
return or__29419__auto__;
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
;})(vec__35625,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq35622){
var G__35623 = cljs.core.first.call(null,seq35622);
var seq35622__$1 = cljs.core.next.call(null,seq35622);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__35623,seq35622__$1);
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
var args__30647__auto__ = [];
var len__30640__auto___35637 = arguments.length;
var i__30641__auto___35638 = (0);
while(true){
if((i__30641__auto___35638 < len__30640__auto___35637)){
args__30647__auto__.push((arguments[i__30641__auto___35638]));

var G__35639 = (i__30641__auto___35638 + (1));
i__30641__auto___35638 = G__35639;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35633){
var vec__35634 = p__35633;
var req = cljs.core.nth.call(null,vec__35634,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq35631){
var G__35632 = cljs.core.first.call(null,seq35631);
var seq35631__$1 = cljs.core.next.call(null,seq35631);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__35632,seq35631__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35646 = arguments.length;
var i__30641__auto___35647 = (0);
while(true){
if((i__30641__auto___35647 < len__30640__auto___35646)){
args__30647__auto__.push((arguments[i__30641__auto___35647]));

var G__35648 = (i__30641__auto___35647 + (1));
i__30641__auto___35647 = G__35648;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35642){
var vec__35643 = p__35642;
var req = cljs.core.nth.call(null,vec__35643,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq35640){
var G__35641 = cljs.core.first.call(null,seq35640);
var seq35640__$1 = cljs.core.next.call(null,seq35640);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__35641,seq35640__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35655 = arguments.length;
var i__30641__auto___35656 = (0);
while(true){
if((i__30641__auto___35656 < len__30640__auto___35655)){
args__30647__auto__.push((arguments[i__30641__auto___35656]));

var G__35657 = (i__30641__auto___35656 + (1));
i__30641__auto___35656 = G__35657;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35651){
var vec__35652 = p__35651;
var req = cljs.core.nth.call(null,vec__35652,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq35649){
var G__35650 = cljs.core.first.call(null,seq35649);
var seq35649__$1 = cljs.core.next.call(null,seq35649);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__35650,seq35649__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35664 = arguments.length;
var i__30641__auto___35665 = (0);
while(true){
if((i__30641__auto___35665 < len__30640__auto___35664)){
args__30647__auto__.push((arguments[i__30641__auto___35665]));

var G__35666 = (i__30641__auto___35665 + (1));
i__30641__auto___35665 = G__35666;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35660){
var vec__35661 = p__35660;
var req = cljs.core.nth.call(null,vec__35661,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq35658){
var G__35659 = cljs.core.first.call(null,seq35658);
var seq35658__$1 = cljs.core.next.call(null,seq35658);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__35659,seq35658__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35673 = arguments.length;
var i__30641__auto___35674 = (0);
while(true){
if((i__30641__auto___35674 < len__30640__auto___35673)){
args__30647__auto__.push((arguments[i__30641__auto___35674]));

var G__35675 = (i__30641__auto___35674 + (1));
i__30641__auto___35674 = G__35675;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35669){
var vec__35670 = p__35669;
var req = cljs.core.nth.call(null,vec__35670,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq35667){
var G__35668 = cljs.core.first.call(null,seq35667);
var seq35667__$1 = cljs.core.next.call(null,seq35667);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__35668,seq35667__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35682 = arguments.length;
var i__30641__auto___35683 = (0);
while(true){
if((i__30641__auto___35683 < len__30640__auto___35682)){
args__30647__auto__.push((arguments[i__30641__auto___35683]));

var G__35684 = (i__30641__auto___35683 + (1));
i__30641__auto___35683 = G__35684;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35678){
var vec__35679 = p__35678;
var req = cljs.core.nth.call(null,vec__35679,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq35676){
var G__35677 = cljs.core.first.call(null,seq35676);
var seq35676__$1 = cljs.core.next.call(null,seq35676);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__35677,seq35676__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35691 = arguments.length;
var i__30641__auto___35692 = (0);
while(true){
if((i__30641__auto___35692 < len__30640__auto___35691)){
args__30647__auto__.push((arguments[i__30641__auto___35692]));

var G__35693 = (i__30641__auto___35692 + (1));
i__30641__auto___35692 = G__35693;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35687){
var vec__35688 = p__35687;
var req = cljs.core.nth.call(null,vec__35688,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq35685){
var G__35686 = cljs.core.first.call(null,seq35685);
var seq35685__$1 = cljs.core.next.call(null,seq35685);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__35686,seq35685__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35700 = arguments.length;
var i__30641__auto___35701 = (0);
while(true){
if((i__30641__auto___35701 < len__30640__auto___35700)){
args__30647__auto__.push((arguments[i__30641__auto___35701]));

var G__35702 = (i__30641__auto___35701 + (1));
i__30641__auto___35701 = G__35702;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35696){
var vec__35697 = p__35696;
var req = cljs.core.nth.call(null,vec__35697,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq35694){
var G__35695 = cljs.core.first.call(null,seq35694);
var seq35694__$1 = cljs.core.next.call(null,seq35694);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__35695,seq35694__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35709 = arguments.length;
var i__30641__auto___35710 = (0);
while(true){
if((i__30641__auto___35710 < len__30640__auto___35709)){
args__30647__auto__.push((arguments[i__30641__auto___35710]));

var G__35711 = (i__30641__auto___35710 + (1));
i__30641__auto___35710 = G__35711;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35705){
var vec__35706 = p__35705;
var req = cljs.core.nth.call(null,vec__35706,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq35703){
var G__35704 = cljs.core.first.call(null,seq35703);
var seq35703__$1 = cljs.core.next.call(null,seq35703);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__35704,seq35703__$1);
});


//# sourceMappingURL=client.js.map