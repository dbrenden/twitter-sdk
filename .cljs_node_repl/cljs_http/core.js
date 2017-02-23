// Compiled by ClojureScript 1.9.473 {:target :nodejs}
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
return (function (p__39029){
var vec__39030 = p__39029;
var k = cljs.core.nth.call(null,vec__39030,(0),null);
var v = cljs.core.nth.call(null,vec__39030,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__39034 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__39034)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__39034)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__39034)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__39034)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__39034)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__39034)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__39035){
var map__39039 = p__39035;
var map__39039__$1 = ((((!((map__39039 == null)))?((((map__39039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39039):map__39039);
var request = map__39039__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__39039__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__39039__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__39039__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__29419__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29419__auto__)){
return or__29419__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__39041 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__39041,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__39041,response_type);

G__39041.setTimeoutInterval(timeout);

G__39041.setWithCredentials(send_credentials);

return G__39041;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__39042){
var map__39070 = p__39042;
var map__39070__$1 = ((((!((map__39070 == null)))?((((map__39070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39070):map__39070);
var request = map__39070__$1;
var request_method = cljs.core.get.call(null,map__39070__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__39070__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__39070__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__39070__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__39070__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__39070__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__29419__auto__ = request_method;
if(cljs.core.truth_(or__29419__auto__)){
return or__29419__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
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
});})(channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_39097 = ((function (channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__39072_39098 = xhr;
G__39072_39098.setProgressEventsEnabled(true);

G__39072_39098.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_39097,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__39072_39098.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_39097,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__32891__auto___39099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___39099,channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___39099,channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_39083){
var state_val_39084 = (state_39083[(1)]);
if((state_val_39084 === (1))){
var state_39083__$1 = state_39083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39083__$1,(2),cancel);
} else {
if((state_val_39084 === (2))){
var inst_39074 = (state_39083[(2)]);
var inst_39075 = xhr.isComplete();
var inst_39076 = cljs.core.not.call(null,inst_39075);
var state_39083__$1 = (function (){var statearr_39085 = state_39083;
(statearr_39085[(7)] = inst_39074);

return statearr_39085;
})();
if(inst_39076){
var statearr_39086_39100 = state_39083__$1;
(statearr_39086_39100[(1)] = (3));

} else {
var statearr_39087_39101 = state_39083__$1;
(statearr_39087_39101[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (3))){
var inst_39078 = xhr.abort();
var state_39083__$1 = state_39083;
var statearr_39088_39102 = state_39083__$1;
(statearr_39088_39102[(2)] = inst_39078);

(statearr_39088_39102[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (4))){
var state_39083__$1 = state_39083;
var statearr_39089_39103 = state_39083__$1;
(statearr_39089_39103[(2)] = null);

(statearr_39089_39103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (5))){
var inst_39081 = (state_39083[(2)]);
var state_39083__$1 = state_39083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39083__$1,inst_39081);
} else {
return null;
}
}
}
}
}
});})(c__32891__auto___39099,channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__32833__auto__,c__32891__auto___39099,channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__32834__auto__ = null;
var cljs_http$core$xhr_$_state_machine__32834__auto____0 = (function (){
var statearr_39093 = [null,null,null,null,null,null,null,null];
(statearr_39093[(0)] = cljs_http$core$xhr_$_state_machine__32834__auto__);

(statearr_39093[(1)] = (1));

return statearr_39093;
});
var cljs_http$core$xhr_$_state_machine__32834__auto____1 = (function (state_39083){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_39083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e39094){if((e39094 instanceof Object)){
var ex__32837__auto__ = e39094;
var statearr_39095_39104 = state_39083;
(statearr_39095_39104[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39105 = state_39083;
state_39083 = G__39105;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__32834__auto__ = function(state_39083){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__32834__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__32834__auto____1.call(this,state_39083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__32834__auto____0;
cljs_http$core$xhr_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__32834__auto____1;
return cljs_http$core$xhr_$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___39099,channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__32893__auto__ = (function (){var statearr_39096 = f__32892__auto__.call(null);
(statearr_39096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___39099);

return statearr_39096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___39099,channel,request_url,method,headers__$1,xhr,map__39070,map__39070__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__39106){
var map__39123 = p__39106;
var map__39123__$1 = ((((!((map__39123 == null)))?((((map__39123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39123):map__39123);
var request = map__39123__$1;
var timeout = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_39139 = jsonp.send(null,((function (channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_39139], null));

if(cljs.core.truth_(cancel)){
var c__32891__auto___39140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___39140,req_39139,channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___39140,req_39139,channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_39129){
var state_val_39130 = (state_39129[(1)]);
if((state_val_39130 === (1))){
var state_39129__$1 = state_39129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39129__$1,(2),cancel);
} else {
if((state_val_39130 === (2))){
var inst_39126 = (state_39129[(2)]);
var inst_39127 = jsonp.cancel(req_39139);
var state_39129__$1 = (function (){var statearr_39131 = state_39129;
(statearr_39131[(7)] = inst_39126);

return statearr_39131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39129__$1,inst_39127);
} else {
return null;
}
}
});})(c__32891__auto___39140,req_39139,channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__32833__auto__,c__32891__auto___39140,req_39139,channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__32834__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__32834__auto____0 = (function (){
var statearr_39135 = [null,null,null,null,null,null,null,null];
(statearr_39135[(0)] = cljs_http$core$jsonp_$_state_machine__32834__auto__);

(statearr_39135[(1)] = (1));

return statearr_39135;
});
var cljs_http$core$jsonp_$_state_machine__32834__auto____1 = (function (state_39129){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_39129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e39136){if((e39136 instanceof Object)){
var ex__32837__auto__ = e39136;
var statearr_39137_39141 = state_39129;
(statearr_39137_39141[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39142 = state_39129;
state_39129 = G__39142;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__32834__auto__ = function(state_39129){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__32834__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__32834__auto____1.call(this,state_39129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__32834__auto____0;
cljs_http$core$jsonp_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__32834__auto____1;
return cljs_http$core$jsonp_$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___39140,req_39139,channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__32893__auto__ = (function (){var statearr_39138 = f__32892__auto__.call(null);
(statearr_39138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___39140);

return statearr_39138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___39140,req_39139,channel,jsonp,map__39123,map__39123__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__39143){
var map__39146 = p__39143;
var map__39146__$1 = ((((!((map__39146 == null)))?((((map__39146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39146):map__39146);
var request = map__39146__$1;
var request_method = cljs.core.get.call(null,map__39146__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map