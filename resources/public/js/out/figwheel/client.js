// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args47743 = [];
var len__38599__auto___47746 = arguments.length;
var i__38600__auto___47747 = (0);
while(true){
if((i__38600__auto___47747 < len__38599__auto___47746)){
args47743.push((arguments[i__38600__auto___47747]));

var G__47748 = (i__38600__auto___47747 + (1));
i__38600__auto___47747 = G__47748;
continue;
} else {
}
break;
}

var G__47745 = args47743.length;
switch (G__47745) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47743.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__38606__auto__ = [];
var len__38599__auto___47751 = arguments.length;
var i__38600__auto___47752 = (0);
while(true){
if((i__38600__auto___47752 < len__38599__auto___47751)){
args__38606__auto__.push((arguments[i__38600__auto___47752]));

var G__47753 = (i__38600__auto___47752 + (1));
i__38600__auto___47752 = G__47753;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47750){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47750));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__38606__auto__ = [];
var len__38599__auto___47755 = arguments.length;
var i__38600__auto___47756 = (0);
while(true){
if((i__38600__auto___47756 < len__38599__auto___47755)){
args__38606__auto__.push((arguments[i__38600__auto___47756]));

var G__47757 = (i__38600__auto___47756 + (1));
i__38600__auto___47756 = G__47757;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47754){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47754));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__47758 = cljs.core._EQ_;
var expr__47759 = (function (){var or__37378__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e47762){if((e47762 instanceof Error)){
var e = e47762;
return false;
} else {
throw e47762;

}
}})();
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__47758.call(null,"true",expr__47759))){
return true;
} else {
if(cljs.core.truth_(pred__47758.call(null,"false",expr__47759))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47759)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e47764){if((e47764 instanceof Error)){
var e = e47764;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e47764;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47765){
var map__47768 = p__47765;
var map__47768__$1 = ((((!((map__47768 == null)))?((((map__47768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47768):map__47768);
var message = cljs.core.get.call(null,map__47768__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47768__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__37378__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__37366__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__37366__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__37366__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__40064__auto___47930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___47930,ch){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___47930,ch){
return (function (state_47899){
var state_val_47900 = (state_47899[(1)]);
if((state_val_47900 === (7))){
var inst_47895 = (state_47899[(2)]);
var state_47899__$1 = state_47899;
var statearr_47901_47931 = state_47899__$1;
(statearr_47901_47931[(2)] = inst_47895);

(statearr_47901_47931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (1))){
var state_47899__$1 = state_47899;
var statearr_47902_47932 = state_47899__$1;
(statearr_47902_47932[(2)] = null);

(statearr_47902_47932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (4))){
var inst_47852 = (state_47899[(7)]);
var inst_47852__$1 = (state_47899[(2)]);
var state_47899__$1 = (function (){var statearr_47903 = state_47899;
(statearr_47903[(7)] = inst_47852__$1);

return statearr_47903;
})();
if(cljs.core.truth_(inst_47852__$1)){
var statearr_47904_47933 = state_47899__$1;
(statearr_47904_47933[(1)] = (5));

} else {
var statearr_47905_47934 = state_47899__$1;
(statearr_47905_47934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (15))){
var inst_47859 = (state_47899[(8)]);
var inst_47874 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47859);
var inst_47875 = cljs.core.first.call(null,inst_47874);
var inst_47876 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47875);
var inst_47877 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47876)].join('');
var inst_47878 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47877);
var state_47899__$1 = state_47899;
var statearr_47906_47935 = state_47899__$1;
(statearr_47906_47935[(2)] = inst_47878);

(statearr_47906_47935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (13))){
var inst_47883 = (state_47899[(2)]);
var state_47899__$1 = state_47899;
var statearr_47907_47936 = state_47899__$1;
(statearr_47907_47936[(2)] = inst_47883);

(statearr_47907_47936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (6))){
var state_47899__$1 = state_47899;
var statearr_47908_47937 = state_47899__$1;
(statearr_47908_47937[(2)] = null);

(statearr_47908_47937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (17))){
var inst_47881 = (state_47899[(2)]);
var state_47899__$1 = state_47899;
var statearr_47909_47938 = state_47899__$1;
(statearr_47909_47938[(2)] = inst_47881);

(statearr_47909_47938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (3))){
var inst_47897 = (state_47899[(2)]);
var state_47899__$1 = state_47899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47899__$1,inst_47897);
} else {
if((state_val_47900 === (12))){
var inst_47858 = (state_47899[(9)]);
var inst_47872 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47858,opts);
var state_47899__$1 = state_47899;
if(cljs.core.truth_(inst_47872)){
var statearr_47910_47939 = state_47899__$1;
(statearr_47910_47939[(1)] = (15));

} else {
var statearr_47911_47940 = state_47899__$1;
(statearr_47911_47940[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (2))){
var state_47899__$1 = state_47899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47899__$1,(4),ch);
} else {
if((state_val_47900 === (11))){
var inst_47859 = (state_47899[(8)]);
var inst_47864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47865 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47859);
var inst_47866 = cljs.core.async.timeout.call(null,(1000));
var inst_47867 = [inst_47865,inst_47866];
var inst_47868 = (new cljs.core.PersistentVector(null,2,(5),inst_47864,inst_47867,null));
var state_47899__$1 = state_47899;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47899__$1,(14),inst_47868);
} else {
if((state_val_47900 === (9))){
var inst_47859 = (state_47899[(8)]);
var inst_47885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47886 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47859);
var inst_47887 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47886);
var inst_47888 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47887)].join('');
var inst_47889 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47888);
var state_47899__$1 = (function (){var statearr_47912 = state_47899;
(statearr_47912[(10)] = inst_47885);

return statearr_47912;
})();
var statearr_47913_47941 = state_47899__$1;
(statearr_47913_47941[(2)] = inst_47889);

(statearr_47913_47941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (5))){
var inst_47852 = (state_47899[(7)]);
var inst_47854 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47855 = (new cljs.core.PersistentArrayMap(null,2,inst_47854,null));
var inst_47856 = (new cljs.core.PersistentHashSet(null,inst_47855,null));
var inst_47857 = figwheel.client.focus_msgs.call(null,inst_47856,inst_47852);
var inst_47858 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47857);
var inst_47859 = cljs.core.first.call(null,inst_47857);
var inst_47860 = figwheel.client.autoload_QMARK_.call(null);
var state_47899__$1 = (function (){var statearr_47914 = state_47899;
(statearr_47914[(9)] = inst_47858);

(statearr_47914[(8)] = inst_47859);

return statearr_47914;
})();
if(cljs.core.truth_(inst_47860)){
var statearr_47915_47942 = state_47899__$1;
(statearr_47915_47942[(1)] = (8));

} else {
var statearr_47916_47943 = state_47899__$1;
(statearr_47916_47943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (14))){
var inst_47870 = (state_47899[(2)]);
var state_47899__$1 = state_47899;
var statearr_47917_47944 = state_47899__$1;
(statearr_47917_47944[(2)] = inst_47870);

(statearr_47917_47944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (16))){
var state_47899__$1 = state_47899;
var statearr_47918_47945 = state_47899__$1;
(statearr_47918_47945[(2)] = null);

(statearr_47918_47945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (10))){
var inst_47891 = (state_47899[(2)]);
var state_47899__$1 = (function (){var statearr_47919 = state_47899;
(statearr_47919[(11)] = inst_47891);

return statearr_47919;
})();
var statearr_47920_47946 = state_47899__$1;
(statearr_47920_47946[(2)] = null);

(statearr_47920_47946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47900 === (8))){
var inst_47858 = (state_47899[(9)]);
var inst_47862 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47858,opts);
var state_47899__$1 = state_47899;
if(cljs.core.truth_(inst_47862)){
var statearr_47921_47947 = state_47899__$1;
(statearr_47921_47947[(1)] = (11));

} else {
var statearr_47922_47948 = state_47899__$1;
(statearr_47922_47948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40064__auto___47930,ch))
;
return ((function (switch__39950__auto__,c__40064__auto___47930,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39951__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39951__auto____0 = (function (){
var statearr_47926 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47926[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39951__auto__);

(statearr_47926[(1)] = (1));

return statearr_47926;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39951__auto____1 = (function (state_47899){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_47899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e47927){if((e47927 instanceof Object)){
var ex__39954__auto__ = e47927;
var statearr_47928_47949 = state_47899;
(statearr_47928_47949[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47950 = state_47899;
state_47899 = G__47950;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39951__auto__ = function(state_47899){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39951__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39951__auto____1.call(this,state_47899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39951__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39951__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___47930,ch))
})();
var state__40066__auto__ = (function (){var statearr_47929 = f__40065__auto__.call(null);
(statearr_47929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___47930);

return statearr_47929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___47930,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47951_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47951_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_47954 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47954){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e47953){if((e47953 instanceof Error)){
var e = e47953;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47954], null));
} else {
var e = e47953;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_47954))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47955){
var map__47964 = p__47955;
var map__47964__$1 = ((((!((map__47964 == null)))?((((map__47964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47964):map__47964);
var opts = map__47964__$1;
var build_id = cljs.core.get.call(null,map__47964__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47964,map__47964__$1,opts,build_id){
return (function (p__47966){
var vec__47967 = p__47966;
var seq__47968 = cljs.core.seq.call(null,vec__47967);
var first__47969 = cljs.core.first.call(null,seq__47968);
var seq__47968__$1 = cljs.core.next.call(null,seq__47968);
var map__47970 = first__47969;
var map__47970__$1 = ((((!((map__47970 == null)))?((((map__47970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47970):map__47970);
var msg = map__47970__$1;
var msg_name = cljs.core.get.call(null,map__47970__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47968__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47967,seq__47968,first__47969,seq__47968__$1,map__47970,map__47970__$1,msg,msg_name,_,map__47964,map__47964__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47967,seq__47968,first__47969,seq__47968__$1,map__47970,map__47970__$1,msg,msg_name,_,map__47964,map__47964__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47964,map__47964__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47978){
var vec__47979 = p__47978;
var seq__47980 = cljs.core.seq.call(null,vec__47979);
var first__47981 = cljs.core.first.call(null,seq__47980);
var seq__47980__$1 = cljs.core.next.call(null,seq__47980);
var map__47982 = first__47981;
var map__47982__$1 = ((((!((map__47982 == null)))?((((map__47982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47982):map__47982);
var msg = map__47982__$1;
var msg_name = cljs.core.get.call(null,map__47982__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47980__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47984){
var map__47996 = p__47984;
var map__47996__$1 = ((((!((map__47996 == null)))?((((map__47996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47996):map__47996);
var on_compile_warning = cljs.core.get.call(null,map__47996__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47996__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47996,map__47996__$1,on_compile_warning,on_compile_fail){
return (function (p__47998){
var vec__47999 = p__47998;
var seq__48000 = cljs.core.seq.call(null,vec__47999);
var first__48001 = cljs.core.first.call(null,seq__48000);
var seq__48000__$1 = cljs.core.next.call(null,seq__48000);
var map__48002 = first__48001;
var map__48002__$1 = ((((!((map__48002 == null)))?((((map__48002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48002):map__48002);
var msg = map__48002__$1;
var msg_name = cljs.core.get.call(null,map__48002__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48000__$1;
var pred__48004 = cljs.core._EQ_;
var expr__48005 = msg_name;
if(cljs.core.truth_(pred__48004.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48005))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48004.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48005))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47996,map__47996__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__,msg_hist,msg_names,msg){
return (function (state_48233){
var state_val_48234 = (state_48233[(1)]);
if((state_val_48234 === (7))){
var inst_48153 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48153)){
var statearr_48235_48285 = state_48233__$1;
(statearr_48235_48285[(1)] = (8));

} else {
var statearr_48236_48286 = state_48233__$1;
(statearr_48236_48286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (20))){
var inst_48227 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48237_48287 = state_48233__$1;
(statearr_48237_48287[(2)] = inst_48227);

(statearr_48237_48287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (27))){
var inst_48223 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48238_48288 = state_48233__$1;
(statearr_48238_48288[(2)] = inst_48223);

(statearr_48238_48288[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (1))){
var inst_48146 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48146)){
var statearr_48239_48289 = state_48233__$1;
(statearr_48239_48289[(1)] = (2));

} else {
var statearr_48240_48290 = state_48233__$1;
(statearr_48240_48290[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (24))){
var inst_48225 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48241_48291 = state_48233__$1;
(statearr_48241_48291[(2)] = inst_48225);

(statearr_48241_48291[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (4))){
var inst_48231 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48233__$1,inst_48231);
} else {
if((state_val_48234 === (15))){
var inst_48229 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48242_48292 = state_48233__$1;
(statearr_48242_48292[(2)] = inst_48229);

(statearr_48242_48292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (21))){
var inst_48182 = (state_48233[(2)]);
var inst_48183 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48184 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48183);
var state_48233__$1 = (function (){var statearr_48243 = state_48233;
(statearr_48243[(7)] = inst_48182);

return statearr_48243;
})();
var statearr_48244_48293 = state_48233__$1;
(statearr_48244_48293[(2)] = inst_48184);

(statearr_48244_48293[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (31))){
var inst_48212 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48212)){
var statearr_48245_48294 = state_48233__$1;
(statearr_48245_48294[(1)] = (34));

} else {
var statearr_48246_48295 = state_48233__$1;
(statearr_48246_48295[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (32))){
var inst_48221 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48247_48296 = state_48233__$1;
(statearr_48247_48296[(2)] = inst_48221);

(statearr_48247_48296[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (33))){
var inst_48208 = (state_48233[(2)]);
var inst_48209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48210 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48209);
var state_48233__$1 = (function (){var statearr_48248 = state_48233;
(statearr_48248[(8)] = inst_48208);

return statearr_48248;
})();
var statearr_48249_48297 = state_48233__$1;
(statearr_48249_48297[(2)] = inst_48210);

(statearr_48249_48297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (13))){
var inst_48167 = figwheel.client.heads_up.clear.call(null);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(16),inst_48167);
} else {
if((state_val_48234 === (22))){
var inst_48188 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48189 = figwheel.client.heads_up.append_warning_message.call(null,inst_48188);
var state_48233__$1 = state_48233;
var statearr_48250_48298 = state_48233__$1;
(statearr_48250_48298[(2)] = inst_48189);

(statearr_48250_48298[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (36))){
var inst_48219 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48251_48299 = state_48233__$1;
(statearr_48251_48299[(2)] = inst_48219);

(statearr_48251_48299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (29))){
var inst_48199 = (state_48233[(2)]);
var inst_48200 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48201 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48200);
var state_48233__$1 = (function (){var statearr_48252 = state_48233;
(statearr_48252[(9)] = inst_48199);

return statearr_48252;
})();
var statearr_48253_48300 = state_48233__$1;
(statearr_48253_48300[(2)] = inst_48201);

(statearr_48253_48300[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (6))){
var inst_48148 = (state_48233[(10)]);
var state_48233__$1 = state_48233;
var statearr_48254_48301 = state_48233__$1;
(statearr_48254_48301[(2)] = inst_48148);

(statearr_48254_48301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (28))){
var inst_48195 = (state_48233[(2)]);
var inst_48196 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48197 = figwheel.client.heads_up.display_warning.call(null,inst_48196);
var state_48233__$1 = (function (){var statearr_48255 = state_48233;
(statearr_48255[(11)] = inst_48195);

return statearr_48255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(29),inst_48197);
} else {
if((state_val_48234 === (25))){
var inst_48193 = figwheel.client.heads_up.clear.call(null);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(28),inst_48193);
} else {
if((state_val_48234 === (34))){
var inst_48214 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(37),inst_48214);
} else {
if((state_val_48234 === (17))){
var inst_48173 = (state_48233[(2)]);
var inst_48174 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48175 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48174);
var state_48233__$1 = (function (){var statearr_48256 = state_48233;
(statearr_48256[(12)] = inst_48173);

return statearr_48256;
})();
var statearr_48257_48302 = state_48233__$1;
(statearr_48257_48302[(2)] = inst_48175);

(statearr_48257_48302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (3))){
var inst_48165 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48165)){
var statearr_48258_48303 = state_48233__$1;
(statearr_48258_48303[(1)] = (13));

} else {
var statearr_48259_48304 = state_48233__$1;
(statearr_48259_48304[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (12))){
var inst_48161 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48260_48305 = state_48233__$1;
(statearr_48260_48305[(2)] = inst_48161);

(statearr_48260_48305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (2))){
var inst_48148 = (state_48233[(10)]);
var inst_48148__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48233__$1 = (function (){var statearr_48261 = state_48233;
(statearr_48261[(10)] = inst_48148__$1);

return statearr_48261;
})();
if(cljs.core.truth_(inst_48148__$1)){
var statearr_48262_48306 = state_48233__$1;
(statearr_48262_48306[(1)] = (5));

} else {
var statearr_48263_48307 = state_48233__$1;
(statearr_48263_48307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (23))){
var inst_48191 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48191)){
var statearr_48264_48308 = state_48233__$1;
(statearr_48264_48308[(1)] = (25));

} else {
var statearr_48265_48309 = state_48233__$1;
(statearr_48265_48309[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (35))){
var state_48233__$1 = state_48233;
var statearr_48266_48310 = state_48233__$1;
(statearr_48266_48310[(2)] = null);

(statearr_48266_48310[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (19))){
var inst_48186 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48186)){
var statearr_48267_48311 = state_48233__$1;
(statearr_48267_48311[(1)] = (22));

} else {
var statearr_48268_48312 = state_48233__$1;
(statearr_48268_48312[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (11))){
var inst_48157 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48269_48313 = state_48233__$1;
(statearr_48269_48313[(2)] = inst_48157);

(statearr_48269_48313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (9))){
var inst_48159 = figwheel.client.heads_up.clear.call(null);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(12),inst_48159);
} else {
if((state_val_48234 === (5))){
var inst_48150 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48233__$1 = state_48233;
var statearr_48270_48314 = state_48233__$1;
(statearr_48270_48314[(2)] = inst_48150);

(statearr_48270_48314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (14))){
var inst_48177 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48177)){
var statearr_48271_48315 = state_48233__$1;
(statearr_48271_48315[(1)] = (18));

} else {
var statearr_48272_48316 = state_48233__$1;
(statearr_48272_48316[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (26))){
var inst_48203 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48203)){
var statearr_48273_48317 = state_48233__$1;
(statearr_48273_48317[(1)] = (30));

} else {
var statearr_48274_48318 = state_48233__$1;
(statearr_48274_48318[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (16))){
var inst_48169 = (state_48233[(2)]);
var inst_48170 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48171 = figwheel.client.heads_up.display_exception.call(null,inst_48170);
var state_48233__$1 = (function (){var statearr_48275 = state_48233;
(statearr_48275[(13)] = inst_48169);

return statearr_48275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(17),inst_48171);
} else {
if((state_val_48234 === (30))){
var inst_48205 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48206 = figwheel.client.heads_up.display_warning.call(null,inst_48205);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(33),inst_48206);
} else {
if((state_val_48234 === (10))){
var inst_48163 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48276_48319 = state_48233__$1;
(statearr_48276_48319[(2)] = inst_48163);

(statearr_48276_48319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (18))){
var inst_48179 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48180 = figwheel.client.heads_up.display_exception.call(null,inst_48179);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(21),inst_48180);
} else {
if((state_val_48234 === (37))){
var inst_48216 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48277_48320 = state_48233__$1;
(statearr_48277_48320[(2)] = inst_48216);

(statearr_48277_48320[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (8))){
var inst_48155 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(11),inst_48155);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40064__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39950__auto__,c__40064__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto____0 = (function (){
var statearr_48281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48281[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto__);

(statearr_48281[(1)] = (1));

return statearr_48281;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto____1 = (function (state_48233){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_48233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e48282){if((e48282 instanceof Object)){
var ex__39954__auto__ = e48282;
var statearr_48283_48321 = state_48233;
(statearr_48283_48321[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48322 = state_48233;
state_48233 = G__48322;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto__ = function(state_48233){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto____1.call(this,state_48233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__,msg_hist,msg_names,msg))
})();
var state__40066__auto__ = (function (){var statearr_48284 = f__40065__auto__.call(null);
(statearr_48284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_48284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__,msg_hist,msg_names,msg))
);

return c__40064__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40064__auto___48385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___48385,ch){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___48385,ch){
return (function (state_48368){
var state_val_48369 = (state_48368[(1)]);
if((state_val_48369 === (1))){
var state_48368__$1 = state_48368;
var statearr_48370_48386 = state_48368__$1;
(statearr_48370_48386[(2)] = null);

(statearr_48370_48386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (2))){
var state_48368__$1 = state_48368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48368__$1,(4),ch);
} else {
if((state_val_48369 === (3))){
var inst_48366 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48368__$1,inst_48366);
} else {
if((state_val_48369 === (4))){
var inst_48356 = (state_48368[(7)]);
var inst_48356__$1 = (state_48368[(2)]);
var state_48368__$1 = (function (){var statearr_48371 = state_48368;
(statearr_48371[(7)] = inst_48356__$1);

return statearr_48371;
})();
if(cljs.core.truth_(inst_48356__$1)){
var statearr_48372_48387 = state_48368__$1;
(statearr_48372_48387[(1)] = (5));

} else {
var statearr_48373_48388 = state_48368__$1;
(statearr_48373_48388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (5))){
var inst_48356 = (state_48368[(7)]);
var inst_48358 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48356);
var state_48368__$1 = state_48368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48368__$1,(8),inst_48358);
} else {
if((state_val_48369 === (6))){
var state_48368__$1 = state_48368;
var statearr_48374_48389 = state_48368__$1;
(statearr_48374_48389[(2)] = null);

(statearr_48374_48389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (7))){
var inst_48364 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
var statearr_48375_48390 = state_48368__$1;
(statearr_48375_48390[(2)] = inst_48364);

(statearr_48375_48390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (8))){
var inst_48360 = (state_48368[(2)]);
var state_48368__$1 = (function (){var statearr_48376 = state_48368;
(statearr_48376[(8)] = inst_48360);

return statearr_48376;
})();
var statearr_48377_48391 = state_48368__$1;
(statearr_48377_48391[(2)] = null);

(statearr_48377_48391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__40064__auto___48385,ch))
;
return ((function (switch__39950__auto__,c__40064__auto___48385,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39951__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39951__auto____0 = (function (){
var statearr_48381 = [null,null,null,null,null,null,null,null,null];
(statearr_48381[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39951__auto__);

(statearr_48381[(1)] = (1));

return statearr_48381;
});
var figwheel$client$heads_up_plugin_$_state_machine__39951__auto____1 = (function (state_48368){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_48368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e48382){if((e48382 instanceof Object)){
var ex__39954__auto__ = e48382;
var statearr_48383_48392 = state_48368;
(statearr_48383_48392[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48393 = state_48368;
state_48368 = G__48393;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39951__auto__ = function(state_48368){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39951__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39951__auto____1.call(this,state_48368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39951__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39951__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___48385,ch))
})();
var state__40066__auto__ = (function (){var statearr_48384 = f__40065__auto__.call(null);
(statearr_48384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___48385);

return statearr_48384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___48385,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__){
return (function (state_48414){
var state_val_48415 = (state_48414[(1)]);
if((state_val_48415 === (1))){
var inst_48409 = cljs.core.async.timeout.call(null,(3000));
var state_48414__$1 = state_48414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48414__$1,(2),inst_48409);
} else {
if((state_val_48415 === (2))){
var inst_48411 = (state_48414[(2)]);
var inst_48412 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48414__$1 = (function (){var statearr_48416 = state_48414;
(statearr_48416[(7)] = inst_48411);

return statearr_48416;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48414__$1,inst_48412);
} else {
return null;
}
}
});})(c__40064__auto__))
;
return ((function (switch__39950__auto__,c__40064__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39951__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39951__auto____0 = (function (){
var statearr_48420 = [null,null,null,null,null,null,null,null];
(statearr_48420[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39951__auto__);

(statearr_48420[(1)] = (1));

return statearr_48420;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39951__auto____1 = (function (state_48414){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_48414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e48421){if((e48421 instanceof Object)){
var ex__39954__auto__ = e48421;
var statearr_48422_48424 = state_48414;
(statearr_48422_48424[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48425 = state_48414;
state_48414 = G__48425;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39951__auto__ = function(state_48414){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39951__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39951__auto____1.call(this,state_48414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39951__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39951__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__))
})();
var state__40066__auto__ = (function (){var statearr_48423 = f__40065__auto__.call(null);
(statearr_48423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_48423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__))
);

return c__40064__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__,figwheel_version,temp__6753__auto__){
return (function (state_48448){
var state_val_48449 = (state_48448[(1)]);
if((state_val_48449 === (1))){
var inst_48442 = cljs.core.async.timeout.call(null,(2000));
var state_48448__$1 = state_48448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48448__$1,(2),inst_48442);
} else {
if((state_val_48449 === (2))){
var inst_48444 = (state_48448[(2)]);
var inst_48445 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_48446 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48445);
var state_48448__$1 = (function (){var statearr_48450 = state_48448;
(statearr_48450[(7)] = inst_48444);

return statearr_48450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48448__$1,inst_48446);
} else {
return null;
}
}
});})(c__40064__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__39950__auto__,c__40064__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto____0 = (function (){
var statearr_48454 = [null,null,null,null,null,null,null,null];
(statearr_48454[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto__);

(statearr_48454[(1)] = (1));

return statearr_48454;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto____1 = (function (state_48448){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_48448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e48455){if((e48455 instanceof Object)){
var ex__39954__auto__ = e48455;
var statearr_48456_48458 = state_48448;
(statearr_48456_48458[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48459 = state_48448;
state_48448 = G__48459;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto__ = function(state_48448){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto____1.call(this,state_48448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__,figwheel_version,temp__6753__auto__))
})();
var state__40066__auto__ = (function (){var statearr_48457 = f__40065__auto__.call(null);
(statearr_48457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_48457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__,figwheel_version,temp__6753__auto__))
);

return c__40064__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48460){
var map__48464 = p__48460;
var map__48464__$1 = ((((!((map__48464 == null)))?((((map__48464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48464):map__48464);
var file = cljs.core.get.call(null,map__48464__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48464__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48464__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48466 = "";
var G__48466__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48466),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__48466);
var G__48466__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48466__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48466__$1);
if(cljs.core.truth_((function (){var and__37366__auto__ = line;
if(cljs.core.truth_(and__37366__auto__)){
return column;
} else {
return and__37366__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48466__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__48466__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48467){
var map__48474 = p__48467;
var map__48474__$1 = ((((!((map__48474 == null)))?((((map__48474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48474):map__48474);
var ed = map__48474__$1;
var formatted_exception = cljs.core.get.call(null,map__48474__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48474__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48474__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48476_48480 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48477_48481 = null;
var count__48478_48482 = (0);
var i__48479_48483 = (0);
while(true){
if((i__48479_48483 < count__48478_48482)){
var msg_48484 = cljs.core._nth.call(null,chunk__48477_48481,i__48479_48483);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48484);

var G__48485 = seq__48476_48480;
var G__48486 = chunk__48477_48481;
var G__48487 = count__48478_48482;
var G__48488 = (i__48479_48483 + (1));
seq__48476_48480 = G__48485;
chunk__48477_48481 = G__48486;
count__48478_48482 = G__48487;
i__48479_48483 = G__48488;
continue;
} else {
var temp__6753__auto___48489 = cljs.core.seq.call(null,seq__48476_48480);
if(temp__6753__auto___48489){
var seq__48476_48490__$1 = temp__6753__auto___48489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48476_48490__$1)){
var c__38289__auto___48491 = cljs.core.chunk_first.call(null,seq__48476_48490__$1);
var G__48492 = cljs.core.chunk_rest.call(null,seq__48476_48490__$1);
var G__48493 = c__38289__auto___48491;
var G__48494 = cljs.core.count.call(null,c__38289__auto___48491);
var G__48495 = (0);
seq__48476_48480 = G__48492;
chunk__48477_48481 = G__48493;
count__48478_48482 = G__48494;
i__48479_48483 = G__48495;
continue;
} else {
var msg_48496 = cljs.core.first.call(null,seq__48476_48490__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48496);

var G__48497 = cljs.core.next.call(null,seq__48476_48490__$1);
var G__48498 = null;
var G__48499 = (0);
var G__48500 = (0);
seq__48476_48480 = G__48497;
chunk__48477_48481 = G__48498;
count__48478_48482 = G__48499;
i__48479_48483 = G__48500;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48501){
var map__48504 = p__48501;
var map__48504__$1 = ((((!((map__48504 == null)))?((((map__48504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48504):map__48504);
var w = map__48504__$1;
var message = cljs.core.get.call(null,map__48504__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__37366__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__37366__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__37366__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__48516 = cljs.core.seq.call(null,plugins);
var chunk__48517 = null;
var count__48518 = (0);
var i__48519 = (0);
while(true){
if((i__48519 < count__48518)){
var vec__48520 = cljs.core._nth.call(null,chunk__48517,i__48519);
var k = cljs.core.nth.call(null,vec__48520,(0),null);
var plugin = cljs.core.nth.call(null,vec__48520,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48526 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48516,chunk__48517,count__48518,i__48519,pl_48526,vec__48520,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48526.call(null,msg_hist);
});})(seq__48516,chunk__48517,count__48518,i__48519,pl_48526,vec__48520,k,plugin))
);
} else {
}

var G__48527 = seq__48516;
var G__48528 = chunk__48517;
var G__48529 = count__48518;
var G__48530 = (i__48519 + (1));
seq__48516 = G__48527;
chunk__48517 = G__48528;
count__48518 = G__48529;
i__48519 = G__48530;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__48516);
if(temp__6753__auto__){
var seq__48516__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48516__$1)){
var c__38289__auto__ = cljs.core.chunk_first.call(null,seq__48516__$1);
var G__48531 = cljs.core.chunk_rest.call(null,seq__48516__$1);
var G__48532 = c__38289__auto__;
var G__48533 = cljs.core.count.call(null,c__38289__auto__);
var G__48534 = (0);
seq__48516 = G__48531;
chunk__48517 = G__48532;
count__48518 = G__48533;
i__48519 = G__48534;
continue;
} else {
var vec__48523 = cljs.core.first.call(null,seq__48516__$1);
var k = cljs.core.nth.call(null,vec__48523,(0),null);
var plugin = cljs.core.nth.call(null,vec__48523,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48535 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48516,chunk__48517,count__48518,i__48519,pl_48535,vec__48523,k,plugin,seq__48516__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48535.call(null,msg_hist);
});})(seq__48516,chunk__48517,count__48518,i__48519,pl_48535,vec__48523,k,plugin,seq__48516__$1,temp__6753__auto__))
);
} else {
}

var G__48536 = cljs.core.next.call(null,seq__48516__$1);
var G__48537 = null;
var G__48538 = (0);
var G__48539 = (0);
seq__48516 = G__48536;
chunk__48517 = G__48537;
count__48518 = G__48538;
i__48519 = G__48539;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args48540 = [];
var len__38599__auto___48547 = arguments.length;
var i__38600__auto___48548 = (0);
while(true){
if((i__38600__auto___48548 < len__38599__auto___48547)){
args48540.push((arguments[i__38600__auto___48548]));

var G__48549 = (i__38600__auto___48548 + (1));
i__38600__auto___48548 = G__48549;
continue;
} else {
}
break;
}

var G__48542 = args48540.length;
switch (G__48542) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48540.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__48543_48551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48544_48552 = null;
var count__48545_48553 = (0);
var i__48546_48554 = (0);
while(true){
if((i__48546_48554 < count__48545_48553)){
var msg_48555 = cljs.core._nth.call(null,chunk__48544_48552,i__48546_48554);
figwheel.client.socket.handle_incoming_message.call(null,msg_48555);

var G__48556 = seq__48543_48551;
var G__48557 = chunk__48544_48552;
var G__48558 = count__48545_48553;
var G__48559 = (i__48546_48554 + (1));
seq__48543_48551 = G__48556;
chunk__48544_48552 = G__48557;
count__48545_48553 = G__48558;
i__48546_48554 = G__48559;
continue;
} else {
var temp__6753__auto___48560 = cljs.core.seq.call(null,seq__48543_48551);
if(temp__6753__auto___48560){
var seq__48543_48561__$1 = temp__6753__auto___48560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48543_48561__$1)){
var c__38289__auto___48562 = cljs.core.chunk_first.call(null,seq__48543_48561__$1);
var G__48563 = cljs.core.chunk_rest.call(null,seq__48543_48561__$1);
var G__48564 = c__38289__auto___48562;
var G__48565 = cljs.core.count.call(null,c__38289__auto___48562);
var G__48566 = (0);
seq__48543_48551 = G__48563;
chunk__48544_48552 = G__48564;
count__48545_48553 = G__48565;
i__48546_48554 = G__48566;
continue;
} else {
var msg_48567 = cljs.core.first.call(null,seq__48543_48561__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48567);

var G__48568 = cljs.core.next.call(null,seq__48543_48561__$1);
var G__48569 = null;
var G__48570 = (0);
var G__48571 = (0);
seq__48543_48551 = G__48568;
chunk__48544_48552 = G__48569;
count__48545_48553 = G__48570;
i__48546_48554 = G__48571;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__38606__auto__ = [];
var len__38599__auto___48576 = arguments.length;
var i__38600__auto___48577 = (0);
while(true){
if((i__38600__auto___48577 < len__38599__auto___48576)){
args__38606__auto__.push((arguments[i__38600__auto___48577]));

var G__48578 = (i__38600__auto___48577 + (1));
i__38600__auto___48577 = G__48578;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((0) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__38607__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48573){
var map__48574 = p__48573;
var map__48574__$1 = ((((!((map__48574 == null)))?((((map__48574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48574):map__48574);
var opts = map__48574__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48572){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48572));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48580){if((e48580 instanceof Error)){
var e = e48580;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48580;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__48584){
var map__48585 = p__48584;
var map__48585__$1 = ((((!((map__48585 == null)))?((((map__48585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48585):map__48585);
var msg_name = cljs.core.get.call(null,map__48585__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1487810683196