// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__6753__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__6753__auto__)){
var req = temp__6753__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__30901){
var vec__30902 = p__30901;
var k = cljs.core.nth.call(null,vec__30902,(0),null);
var v = cljs.core.nth.call(null,vec__30902,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__30906 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__30906)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__30906)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__30906)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__30906)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__30906)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__30906)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__30907){
var map__30911 = p__30907;
var map__30911__$1 = ((((!((map__30911 == null)))?((((map__30911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30911):map__30911);
var request = map__30911__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__30911__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__30911__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__30911__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__19153__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__30913 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__30913,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__30913,response_type);

G__30913.setTimeoutInterval(timeout);

G__30913.setWithCredentials(send_credentials);

return G__30913;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__30914){
var map__30942 = p__30914;
var map__30942__$1 = ((((!((map__30942 == null)))?((((map__30942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30942):map__30942);
var request = map__30942__$1;
var request_method = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__19153__auto__ = request_method;
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_30969 = ((function (channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__30944_30970 = xhr;
G__30944_30970.setProgressEventsEnabled(true);

G__30944_30970.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_30969,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__30944_30970.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_30969,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__24464__auto___30971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___30971,channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___30971,channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_30955){
var state_val_30956 = (state_30955[(1)]);
if((state_val_30956 === (1))){
var state_30955__$1 = state_30955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30955__$1,(2),cancel);
} else {
if((state_val_30956 === (2))){
var inst_30946 = (state_30955[(2)]);
var inst_30947 = xhr.isComplete();
var inst_30948 = cljs.core.not.call(null,inst_30947);
var state_30955__$1 = (function (){var statearr_30957 = state_30955;
(statearr_30957[(7)] = inst_30946);

return statearr_30957;
})();
if(inst_30948){
var statearr_30958_30972 = state_30955__$1;
(statearr_30958_30972[(1)] = (3));

} else {
var statearr_30959_30973 = state_30955__$1;
(statearr_30959_30973[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30956 === (3))){
var inst_30950 = xhr.abort();
var state_30955__$1 = state_30955;
var statearr_30960_30974 = state_30955__$1;
(statearr_30960_30974[(2)] = inst_30950);

(statearr_30960_30974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30956 === (4))){
var state_30955__$1 = state_30955;
var statearr_30961_30975 = state_30955__$1;
(statearr_30961_30975[(2)] = null);

(statearr_30961_30975[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30956 === (5))){
var inst_30953 = (state_30955[(2)]);
var state_30955__$1 = state_30955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30955__$1,inst_30953);
} else {
return null;
}
}
}
}
}
});})(c__24464__auto___30971,channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__24406__auto__,c__24464__auto___30971,channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__24407__auto__ = null;
var cljs_http$core$xhr_$_state_machine__24407__auto____0 = (function (){
var statearr_30965 = [null,null,null,null,null,null,null,null];
(statearr_30965[(0)] = cljs_http$core$xhr_$_state_machine__24407__auto__);

(statearr_30965[(1)] = (1));

return statearr_30965;
});
var cljs_http$core$xhr_$_state_machine__24407__auto____1 = (function (state_30955){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_30955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e30966){if((e30966 instanceof Object)){
var ex__24410__auto__ = e30966;
var statearr_30967_30976 = state_30955;
(statearr_30967_30976[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30977 = state_30955;
state_30955 = G__30977;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__24407__auto__ = function(state_30955){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__24407__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__24407__auto____1.call(this,state_30955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__24407__auto____0;
cljs_http$core$xhr_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__24407__auto____1;
return cljs_http$core$xhr_$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___30971,channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__24466__auto__ = (function (){var statearr_30968 = f__24465__auto__.call(null);
(statearr_30968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___30971);

return statearr_30968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___30971,channel,request_url,method,headers__$1,xhr,map__30942,map__30942__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__30978){
var map__30995 = p__30978;
var map__30995__$1 = ((((!((map__30995 == null)))?((((map__30995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30995):map__30995);
var request = map__30995__$1;
var timeout = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_31011 = jsonp.send(null,((function (channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_31011], null));

if(cljs.core.truth_(cancel)){
var c__24464__auto___31012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___31012,req_31011,channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___31012,req_31011,channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_31001){
var state_val_31002 = (state_31001[(1)]);
if((state_val_31002 === (1))){
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31001__$1,(2),cancel);
} else {
if((state_val_31002 === (2))){
var inst_30998 = (state_31001[(2)]);
var inst_30999 = jsonp.cancel(req_31011);
var state_31001__$1 = (function (){var statearr_31003 = state_31001;
(statearr_31003[(7)] = inst_30998);

return statearr_31003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31001__$1,inst_30999);
} else {
return null;
}
}
});})(c__24464__auto___31012,req_31011,channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__24406__auto__,c__24464__auto___31012,req_31011,channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__24407__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__24407__auto____0 = (function (){
var statearr_31007 = [null,null,null,null,null,null,null,null];
(statearr_31007[(0)] = cljs_http$core$jsonp_$_state_machine__24407__auto__);

(statearr_31007[(1)] = (1));

return statearr_31007;
});
var cljs_http$core$jsonp_$_state_machine__24407__auto____1 = (function (state_31001){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_31001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e31008){if((e31008 instanceof Object)){
var ex__24410__auto__ = e31008;
var statearr_31009_31013 = state_31001;
(statearr_31009_31013[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31014 = state_31001;
state_31001 = G__31014;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__24407__auto__ = function(state_31001){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__24407__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__24407__auto____1.call(this,state_31001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__24407__auto____0;
cljs_http$core$jsonp_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__24407__auto____1;
return cljs_http$core$jsonp_$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___31012,req_31011,channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__24466__auto__ = (function (){var statearr_31010 = f__24465__auto__.call(null);
(statearr_31010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___31012);

return statearr_31010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___31012,req_31011,channel,jsonp,map__30995,map__30995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__31015){
var map__31018 = p__31015;
var map__31018__$1 = ((((!((map__31018 == null)))?((((map__31018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31018):map__31018);
var request = map__31018__$1;
var request_method = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map