// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args35847 = [];
var len__30640__auto___35853 = arguments.length;
var i__30641__auto___35854 = (0);
while(true){
if((i__30641__auto___35854 < len__30640__auto___35853)){
args35847.push((arguments[i__30641__auto___35854]));

var G__35855 = (i__30641__auto___35854 + (1));
i__30641__auto___35854 = G__35855;
continue;
} else {
}
break;
}

var G__35849 = args35847.length;
switch (G__35849) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35847.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35850 = (function (f,blockable,meta35851){
this.f = f;
this.blockable = blockable;
this.meta35851 = meta35851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35852,meta35851__$1){
var self__ = this;
var _35852__$1 = this;
return (new cljs.core.async.t_cljs$core$async35850(self__.f,self__.blockable,meta35851__$1));
});

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35852){
var self__ = this;
var _35852__$1 = this;
return self__.meta35851;
});

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35851","meta35851",336790106,null)], null);
});

cljs.core.async.t_cljs$core$async35850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35850";

cljs.core.async.t_cljs$core$async35850.cljs$lang$ctorPrWriter = (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async35850");
});

cljs.core.async.__GT_t_cljs$core$async35850 = (function cljs$core$async$__GT_t_cljs$core$async35850(f__$1,blockable__$1,meta35851){
return (new cljs.core.async.t_cljs$core$async35850(f__$1,blockable__$1,meta35851));
});

}

return (new cljs.core.async.t_cljs$core$async35850(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args35859 = [];
var len__30640__auto___35862 = arguments.length;
var i__30641__auto___35863 = (0);
while(true){
if((i__30641__auto___35863 < len__30640__auto___35862)){
args35859.push((arguments[i__30641__auto___35863]));

var G__35864 = (i__30641__auto___35863 + (1));
i__30641__auto___35863 = G__35864;
continue;
} else {
}
break;
}

var G__35861 = args35859.length;
switch (G__35861) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35859.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args35866 = [];
var len__30640__auto___35869 = arguments.length;
var i__30641__auto___35870 = (0);
while(true){
if((i__30641__auto___35870 < len__30640__auto___35869)){
args35866.push((arguments[i__30641__auto___35870]));

var G__35871 = (i__30641__auto___35870 + (1));
i__30641__auto___35870 = G__35871;
continue;
} else {
}
break;
}

var G__35868 = args35866.length;
switch (G__35868) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35866.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args35873 = [];
var len__30640__auto___35876 = arguments.length;
var i__30641__auto___35877 = (0);
while(true){
if((i__30641__auto___35877 < len__30640__auto___35876)){
args35873.push((arguments[i__30641__auto___35877]));

var G__35878 = (i__30641__auto___35877 + (1));
i__30641__auto___35877 = G__35878;
continue;
} else {
}
break;
}

var G__35875 = args35873.length;
switch (G__35875) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35873.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35880 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35880);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35880,ret){
return (function (){
return fn1.call(null,val_35880);
});})(val_35880,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args35881 = [];
var len__30640__auto___35884 = arguments.length;
var i__30641__auto___35885 = (0);
while(true){
if((i__30641__auto___35885 < len__30640__auto___35884)){
args35881.push((arguments[i__30641__auto___35885]));

var G__35886 = (i__30641__auto___35885 + (1));
i__30641__auto___35885 = G__35886;
continue;
} else {
}
break;
}

var G__35883 = args35881.length;
switch (G__35883) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35881.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__30440__auto___35888 = n;
var x_35889 = (0);
while(true){
if((x_35889 < n__30440__auto___35888)){
(a[x_35889] = (0));

var G__35890 = (x_35889 + (1));
x_35889 = G__35890;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35891 = (i + (1));
i = G__35891;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35895 = (function (flag,meta35896){
this.flag = flag;
this.meta35896 = meta35896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35897,meta35896__$1){
var self__ = this;
var _35897__$1 = this;
return (new cljs.core.async.t_cljs$core$async35895(self__.flag,meta35896__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35895.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35897){
var self__ = this;
var _35897__$1 = this;
return self__.meta35896;
});})(flag))
;

cljs.core.async.t_cljs$core$async35895.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35895.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35895.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35896","meta35896",-1825146761,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35895";

cljs.core.async.t_cljs$core$async35895.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async35895");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35895 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35895(flag__$1,meta35896){
return (new cljs.core.async.t_cljs$core$async35895(flag__$1,meta35896));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35895(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35901 = (function (flag,cb,meta35902){
this.flag = flag;
this.cb = cb;
this.meta35902 = meta35902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35903,meta35902__$1){
var self__ = this;
var _35903__$1 = this;
return (new cljs.core.async.t_cljs$core$async35901(self__.flag,self__.cb,meta35902__$1));
});

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35903){
var self__ = this;
var _35903__$1 = this;
return self__.meta35902;
});

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35902","meta35902",1659335484,null)], null);
});

cljs.core.async.t_cljs$core$async35901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35901";

cljs.core.async.t_cljs$core$async35901.cljs$lang$ctorPrWriter = (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async35901");
});

cljs.core.async.__GT_t_cljs$core$async35901 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35901(flag__$1,cb__$1,meta35902){
return (new cljs.core.async.t_cljs$core$async35901(flag__$1,cb__$1,meta35902));
});

}

return (new cljs.core.async.t_cljs$core$async35901(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35904_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35904_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35905_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35905_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29419__auto__ = wport;
if(cljs.core.truth_(or__29419__auto__)){
return or__29419__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35906 = (i + (1));
i = G__35906;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29419__auto__ = ret;
if(cljs.core.truth_(or__29419__auto__)){
return or__29419__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__29407__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29407__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29407__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__30647__auto__ = [];
var len__30640__auto___35912 = arguments.length;
var i__30641__auto___35913 = (0);
while(true){
if((i__30641__auto___35913 < len__30640__auto___35912)){
args__30647__auto__.push((arguments[i__30641__auto___35913]));

var G__35914 = (i__30641__auto___35913 + (1));
i__30641__auto___35913 = G__35914;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((1) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35909){
var map__35910 = p__35909;
var map__35910__$1 = ((((!((map__35910 == null)))?((((map__35910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35910):map__35910);
var opts = map__35910__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35907){
var G__35908 = cljs.core.first.call(null,seq35907);
var seq35907__$1 = cljs.core.next.call(null,seq35907);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35908,seq35907__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args35915 = [];
var len__30640__auto___35965 = arguments.length;
var i__30641__auto___35966 = (0);
while(true){
if((i__30641__auto___35966 < len__30640__auto___35965)){
args35915.push((arguments[i__30641__auto___35966]));

var G__35967 = (i__30641__auto___35966 + (1));
i__30641__auto___35966 = G__35967;
continue;
} else {
}
break;
}

var G__35917 = args35915.length;
switch (G__35917) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35915.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32891__auto___35969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___35969){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___35969){
return (function (state_35941){
var state_val_35942 = (state_35941[(1)]);
if((state_val_35942 === (7))){
var inst_35937 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
var statearr_35943_35970 = state_35941__$1;
(statearr_35943_35970[(2)] = inst_35937);

(statearr_35943_35970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (1))){
var state_35941__$1 = state_35941;
var statearr_35944_35971 = state_35941__$1;
(statearr_35944_35971[(2)] = null);

(statearr_35944_35971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (4))){
var inst_35920 = (state_35941[(7)]);
var inst_35920__$1 = (state_35941[(2)]);
var inst_35921 = (inst_35920__$1 == null);
var state_35941__$1 = (function (){var statearr_35945 = state_35941;
(statearr_35945[(7)] = inst_35920__$1);

return statearr_35945;
})();
if(cljs.core.truth_(inst_35921)){
var statearr_35946_35972 = state_35941__$1;
(statearr_35946_35972[(1)] = (5));

} else {
var statearr_35947_35973 = state_35941__$1;
(statearr_35947_35973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (13))){
var state_35941__$1 = state_35941;
var statearr_35948_35974 = state_35941__$1;
(statearr_35948_35974[(2)] = null);

(statearr_35948_35974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (6))){
var inst_35920 = (state_35941[(7)]);
var state_35941__$1 = state_35941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35941__$1,(11),to,inst_35920);
} else {
if((state_val_35942 === (3))){
var inst_35939 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35941__$1,inst_35939);
} else {
if((state_val_35942 === (12))){
var state_35941__$1 = state_35941;
var statearr_35949_35975 = state_35941__$1;
(statearr_35949_35975[(2)] = null);

(statearr_35949_35975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (2))){
var state_35941__$1 = state_35941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35941__$1,(4),from);
} else {
if((state_val_35942 === (11))){
var inst_35930 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
if(cljs.core.truth_(inst_35930)){
var statearr_35950_35976 = state_35941__$1;
(statearr_35950_35976[(1)] = (12));

} else {
var statearr_35951_35977 = state_35941__$1;
(statearr_35951_35977[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (9))){
var state_35941__$1 = state_35941;
var statearr_35952_35978 = state_35941__$1;
(statearr_35952_35978[(2)] = null);

(statearr_35952_35978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (5))){
var state_35941__$1 = state_35941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35953_35979 = state_35941__$1;
(statearr_35953_35979[(1)] = (8));

} else {
var statearr_35954_35980 = state_35941__$1;
(statearr_35954_35980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (14))){
var inst_35935 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
var statearr_35955_35981 = state_35941__$1;
(statearr_35955_35981[(2)] = inst_35935);

(statearr_35955_35981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (10))){
var inst_35927 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
var statearr_35956_35982 = state_35941__$1;
(statearr_35956_35982[(2)] = inst_35927);

(statearr_35956_35982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (8))){
var inst_35924 = cljs.core.async.close_BANG_.call(null,to);
var state_35941__$1 = state_35941;
var statearr_35957_35983 = state_35941__$1;
(statearr_35957_35983[(2)] = inst_35924);

(statearr_35957_35983[(1)] = (10));


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
});})(c__32891__auto___35969))
;
return ((function (switch__32833__auto__,c__32891__auto___35969){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_35961 = [null,null,null,null,null,null,null,null];
(statearr_35961[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_35961[(1)] = (1));

return statearr_35961;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_35941){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_35941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e35962){if((e35962 instanceof Object)){
var ex__32837__auto__ = e35962;
var statearr_35963_35984 = state_35941;
(statearr_35963_35984[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35985 = state_35941;
state_35941 = G__35985;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_35941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_35941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___35969))
})();
var state__32893__auto__ = (function (){var statearr_35964 = f__32892__auto__.call(null);
(statearr_35964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___35969);

return statearr_35964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___35969))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36173){
var vec__36174 = p__36173;
var v = cljs.core.nth.call(null,vec__36174,(0),null);
var p = cljs.core.nth.call(null,vec__36174,(1),null);
var job = vec__36174;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32891__auto___36360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___36360,res,vec__36174,v,p,job,jobs,results){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___36360,res,vec__36174,v,p,job,jobs,results){
return (function (state_36181){
var state_val_36182 = (state_36181[(1)]);
if((state_val_36182 === (1))){
var state_36181__$1 = state_36181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36181__$1,(2),res,v);
} else {
if((state_val_36182 === (2))){
var inst_36178 = (state_36181[(2)]);
var inst_36179 = cljs.core.async.close_BANG_.call(null,res);
var state_36181__$1 = (function (){var statearr_36183 = state_36181;
(statearr_36183[(7)] = inst_36178);

return statearr_36183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36181__$1,inst_36179);
} else {
return null;
}
}
});})(c__32891__auto___36360,res,vec__36174,v,p,job,jobs,results))
;
return ((function (switch__32833__auto__,c__32891__auto___36360,res,vec__36174,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0 = (function (){
var statearr_36187 = [null,null,null,null,null,null,null,null];
(statearr_36187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__);

(statearr_36187[(1)] = (1));

return statearr_36187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1 = (function (state_36181){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_36181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e36188){if((e36188 instanceof Object)){
var ex__32837__auto__ = e36188;
var statearr_36189_36361 = state_36181;
(statearr_36189_36361[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36362 = state_36181;
state_36181 = G__36362;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = function(state_36181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1.call(this,state_36181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___36360,res,vec__36174,v,p,job,jobs,results))
})();
var state__32893__auto__ = (function (){var statearr_36190 = f__32892__auto__.call(null);
(statearr_36190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___36360);

return statearr_36190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___36360,res,vec__36174,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36191){
var vec__36192 = p__36191;
var v = cljs.core.nth.call(null,vec__36192,(0),null);
var p = cljs.core.nth.call(null,vec__36192,(1),null);
var job = vec__36192;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__30440__auto___36363 = n;
var __36364 = (0);
while(true){
if((__36364 < n__30440__auto___36363)){
var G__36195_36365 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36195_36365) {
case "compute":
var c__32891__auto___36367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36364,c__32891__auto___36367,G__36195_36365,n__30440__auto___36363,jobs,results,process,async){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (__36364,c__32891__auto___36367,G__36195_36365,n__30440__auto___36363,jobs,results,process,async){
return (function (state_36208){
var state_val_36209 = (state_36208[(1)]);
if((state_val_36209 === (1))){
var state_36208__$1 = state_36208;
var statearr_36210_36368 = state_36208__$1;
(statearr_36210_36368[(2)] = null);

(statearr_36210_36368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (2))){
var state_36208__$1 = state_36208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36208__$1,(4),jobs);
} else {
if((state_val_36209 === (3))){
var inst_36206 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36208__$1,inst_36206);
} else {
if((state_val_36209 === (4))){
var inst_36198 = (state_36208[(2)]);
var inst_36199 = process.call(null,inst_36198);
var state_36208__$1 = state_36208;
if(cljs.core.truth_(inst_36199)){
var statearr_36211_36369 = state_36208__$1;
(statearr_36211_36369[(1)] = (5));

} else {
var statearr_36212_36370 = state_36208__$1;
(statearr_36212_36370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (5))){
var state_36208__$1 = state_36208;
var statearr_36213_36371 = state_36208__$1;
(statearr_36213_36371[(2)] = null);

(statearr_36213_36371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (6))){
var state_36208__$1 = state_36208;
var statearr_36214_36372 = state_36208__$1;
(statearr_36214_36372[(2)] = null);

(statearr_36214_36372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (7))){
var inst_36204 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36215_36373 = state_36208__$1;
(statearr_36215_36373[(2)] = inst_36204);

(statearr_36215_36373[(1)] = (3));


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
});})(__36364,c__32891__auto___36367,G__36195_36365,n__30440__auto___36363,jobs,results,process,async))
;
return ((function (__36364,switch__32833__auto__,c__32891__auto___36367,G__36195_36365,n__30440__auto___36363,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0 = (function (){
var statearr_36219 = [null,null,null,null,null,null,null];
(statearr_36219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__);

(statearr_36219[(1)] = (1));

return statearr_36219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1 = (function (state_36208){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_36208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e36220){if((e36220 instanceof Object)){
var ex__32837__auto__ = e36220;
var statearr_36221_36374 = state_36208;
(statearr_36221_36374[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36375 = state_36208;
state_36208 = G__36375;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = function(state_36208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1.call(this,state_36208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__;
})()
;})(__36364,switch__32833__auto__,c__32891__auto___36367,G__36195_36365,n__30440__auto___36363,jobs,results,process,async))
})();
var state__32893__auto__ = (function (){var statearr_36222 = f__32892__auto__.call(null);
(statearr_36222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___36367);

return statearr_36222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(__36364,c__32891__auto___36367,G__36195_36365,n__30440__auto___36363,jobs,results,process,async))
);


break;
case "async":
var c__32891__auto___36376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36364,c__32891__auto___36376,G__36195_36365,n__30440__auto___36363,jobs,results,process,async){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (__36364,c__32891__auto___36376,G__36195_36365,n__30440__auto___36363,jobs,results,process,async){
return (function (state_36235){
var state_val_36236 = (state_36235[(1)]);
if((state_val_36236 === (1))){
var state_36235__$1 = state_36235;
var statearr_36237_36377 = state_36235__$1;
(statearr_36237_36377[(2)] = null);

(statearr_36237_36377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (2))){
var state_36235__$1 = state_36235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36235__$1,(4),jobs);
} else {
if((state_val_36236 === (3))){
var inst_36233 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36235__$1,inst_36233);
} else {
if((state_val_36236 === (4))){
var inst_36225 = (state_36235[(2)]);
var inst_36226 = async.call(null,inst_36225);
var state_36235__$1 = state_36235;
if(cljs.core.truth_(inst_36226)){
var statearr_36238_36378 = state_36235__$1;
(statearr_36238_36378[(1)] = (5));

} else {
var statearr_36239_36379 = state_36235__$1;
(statearr_36239_36379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (5))){
var state_36235__$1 = state_36235;
var statearr_36240_36380 = state_36235__$1;
(statearr_36240_36380[(2)] = null);

(statearr_36240_36380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (6))){
var state_36235__$1 = state_36235;
var statearr_36241_36381 = state_36235__$1;
(statearr_36241_36381[(2)] = null);

(statearr_36241_36381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36236 === (7))){
var inst_36231 = (state_36235[(2)]);
var state_36235__$1 = state_36235;
var statearr_36242_36382 = state_36235__$1;
(statearr_36242_36382[(2)] = inst_36231);

(statearr_36242_36382[(1)] = (3));


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
});})(__36364,c__32891__auto___36376,G__36195_36365,n__30440__auto___36363,jobs,results,process,async))
;
return ((function (__36364,switch__32833__auto__,c__32891__auto___36376,G__36195_36365,n__30440__auto___36363,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0 = (function (){
var statearr_36246 = [null,null,null,null,null,null,null];
(statearr_36246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__);

(statearr_36246[(1)] = (1));

return statearr_36246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1 = (function (state_36235){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_36235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e36247){if((e36247 instanceof Object)){
var ex__32837__auto__ = e36247;
var statearr_36248_36383 = state_36235;
(statearr_36248_36383[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36384 = state_36235;
state_36235 = G__36384;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = function(state_36235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1.call(this,state_36235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__;
})()
;})(__36364,switch__32833__auto__,c__32891__auto___36376,G__36195_36365,n__30440__auto___36363,jobs,results,process,async))
})();
var state__32893__auto__ = (function (){var statearr_36249 = f__32892__auto__.call(null);
(statearr_36249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___36376);

return statearr_36249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(__36364,c__32891__auto___36376,G__36195_36365,n__30440__auto___36363,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__36385 = (__36364 + (1));
__36364 = G__36385;
continue;
} else {
}
break;
}

var c__32891__auto___36386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___36386,jobs,results,process,async){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___36386,jobs,results,process,async){
return (function (state_36271){
var state_val_36272 = (state_36271[(1)]);
if((state_val_36272 === (1))){
var state_36271__$1 = state_36271;
var statearr_36273_36387 = state_36271__$1;
(statearr_36273_36387[(2)] = null);

(statearr_36273_36387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (2))){
var state_36271__$1 = state_36271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36271__$1,(4),from);
} else {
if((state_val_36272 === (3))){
var inst_36269 = (state_36271[(2)]);
var state_36271__$1 = state_36271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36271__$1,inst_36269);
} else {
if((state_val_36272 === (4))){
var inst_36252 = (state_36271[(7)]);
var inst_36252__$1 = (state_36271[(2)]);
var inst_36253 = (inst_36252__$1 == null);
var state_36271__$1 = (function (){var statearr_36274 = state_36271;
(statearr_36274[(7)] = inst_36252__$1);

return statearr_36274;
})();
if(cljs.core.truth_(inst_36253)){
var statearr_36275_36388 = state_36271__$1;
(statearr_36275_36388[(1)] = (5));

} else {
var statearr_36276_36389 = state_36271__$1;
(statearr_36276_36389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (5))){
var inst_36255 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36271__$1 = state_36271;
var statearr_36277_36390 = state_36271__$1;
(statearr_36277_36390[(2)] = inst_36255);

(statearr_36277_36390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (6))){
var inst_36252 = (state_36271[(7)]);
var inst_36257 = (state_36271[(8)]);
var inst_36257__$1 = cljs.core.async.chan.call(null,(1));
var inst_36258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36259 = [inst_36252,inst_36257__$1];
var inst_36260 = (new cljs.core.PersistentVector(null,2,(5),inst_36258,inst_36259,null));
var state_36271__$1 = (function (){var statearr_36278 = state_36271;
(statearr_36278[(8)] = inst_36257__$1);

return statearr_36278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36271__$1,(8),jobs,inst_36260);
} else {
if((state_val_36272 === (7))){
var inst_36267 = (state_36271[(2)]);
var state_36271__$1 = state_36271;
var statearr_36279_36391 = state_36271__$1;
(statearr_36279_36391[(2)] = inst_36267);

(statearr_36279_36391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (8))){
var inst_36257 = (state_36271[(8)]);
var inst_36262 = (state_36271[(2)]);
var state_36271__$1 = (function (){var statearr_36280 = state_36271;
(statearr_36280[(9)] = inst_36262);

return statearr_36280;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36271__$1,(9),results,inst_36257);
} else {
if((state_val_36272 === (9))){
var inst_36264 = (state_36271[(2)]);
var state_36271__$1 = (function (){var statearr_36281 = state_36271;
(statearr_36281[(10)] = inst_36264);

return statearr_36281;
})();
var statearr_36282_36392 = state_36271__$1;
(statearr_36282_36392[(2)] = null);

(statearr_36282_36392[(1)] = (2));


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
});})(c__32891__auto___36386,jobs,results,process,async))
;
return ((function (switch__32833__auto__,c__32891__auto___36386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0 = (function (){
var statearr_36286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__);

(statearr_36286[(1)] = (1));

return statearr_36286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1 = (function (state_36271){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_36271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e36287){if((e36287 instanceof Object)){
var ex__32837__auto__ = e36287;
var statearr_36288_36393 = state_36271;
(statearr_36288_36393[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36394 = state_36271;
state_36271 = G__36394;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = function(state_36271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1.call(this,state_36271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___36386,jobs,results,process,async))
})();
var state__32893__auto__ = (function (){var statearr_36289 = f__32892__auto__.call(null);
(statearr_36289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___36386);

return statearr_36289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___36386,jobs,results,process,async))
);


var c__32891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto__,jobs,results,process,async){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto__,jobs,results,process,async){
return (function (state_36327){
var state_val_36328 = (state_36327[(1)]);
if((state_val_36328 === (7))){
var inst_36323 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
var statearr_36329_36395 = state_36327__$1;
(statearr_36329_36395[(2)] = inst_36323);

(statearr_36329_36395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (20))){
var state_36327__$1 = state_36327;
var statearr_36330_36396 = state_36327__$1;
(statearr_36330_36396[(2)] = null);

(statearr_36330_36396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (1))){
var state_36327__$1 = state_36327;
var statearr_36331_36397 = state_36327__$1;
(statearr_36331_36397[(2)] = null);

(statearr_36331_36397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (4))){
var inst_36292 = (state_36327[(7)]);
var inst_36292__$1 = (state_36327[(2)]);
var inst_36293 = (inst_36292__$1 == null);
var state_36327__$1 = (function (){var statearr_36332 = state_36327;
(statearr_36332[(7)] = inst_36292__$1);

return statearr_36332;
})();
if(cljs.core.truth_(inst_36293)){
var statearr_36333_36398 = state_36327__$1;
(statearr_36333_36398[(1)] = (5));

} else {
var statearr_36334_36399 = state_36327__$1;
(statearr_36334_36399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (15))){
var inst_36305 = (state_36327[(8)]);
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36327__$1,(18),to,inst_36305);
} else {
if((state_val_36328 === (21))){
var inst_36318 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
var statearr_36335_36400 = state_36327__$1;
(statearr_36335_36400[(2)] = inst_36318);

(statearr_36335_36400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (13))){
var inst_36320 = (state_36327[(2)]);
var state_36327__$1 = (function (){var statearr_36336 = state_36327;
(statearr_36336[(9)] = inst_36320);

return statearr_36336;
})();
var statearr_36337_36401 = state_36327__$1;
(statearr_36337_36401[(2)] = null);

(statearr_36337_36401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (6))){
var inst_36292 = (state_36327[(7)]);
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36327__$1,(11),inst_36292);
} else {
if((state_val_36328 === (17))){
var inst_36313 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
if(cljs.core.truth_(inst_36313)){
var statearr_36338_36402 = state_36327__$1;
(statearr_36338_36402[(1)] = (19));

} else {
var statearr_36339_36403 = state_36327__$1;
(statearr_36339_36403[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (3))){
var inst_36325 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36327__$1,inst_36325);
} else {
if((state_val_36328 === (12))){
var inst_36302 = (state_36327[(10)]);
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36327__$1,(14),inst_36302);
} else {
if((state_val_36328 === (2))){
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36327__$1,(4),results);
} else {
if((state_val_36328 === (19))){
var state_36327__$1 = state_36327;
var statearr_36340_36404 = state_36327__$1;
(statearr_36340_36404[(2)] = null);

(statearr_36340_36404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (11))){
var inst_36302 = (state_36327[(2)]);
var state_36327__$1 = (function (){var statearr_36341 = state_36327;
(statearr_36341[(10)] = inst_36302);

return statearr_36341;
})();
var statearr_36342_36405 = state_36327__$1;
(statearr_36342_36405[(2)] = null);

(statearr_36342_36405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (9))){
var state_36327__$1 = state_36327;
var statearr_36343_36406 = state_36327__$1;
(statearr_36343_36406[(2)] = null);

(statearr_36343_36406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (5))){
var state_36327__$1 = state_36327;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36344_36407 = state_36327__$1;
(statearr_36344_36407[(1)] = (8));

} else {
var statearr_36345_36408 = state_36327__$1;
(statearr_36345_36408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (14))){
var inst_36305 = (state_36327[(8)]);
var inst_36307 = (state_36327[(11)]);
var inst_36305__$1 = (state_36327[(2)]);
var inst_36306 = (inst_36305__$1 == null);
var inst_36307__$1 = cljs.core.not.call(null,inst_36306);
var state_36327__$1 = (function (){var statearr_36346 = state_36327;
(statearr_36346[(8)] = inst_36305__$1);

(statearr_36346[(11)] = inst_36307__$1);

return statearr_36346;
})();
if(inst_36307__$1){
var statearr_36347_36409 = state_36327__$1;
(statearr_36347_36409[(1)] = (15));

} else {
var statearr_36348_36410 = state_36327__$1;
(statearr_36348_36410[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (16))){
var inst_36307 = (state_36327[(11)]);
var state_36327__$1 = state_36327;
var statearr_36349_36411 = state_36327__$1;
(statearr_36349_36411[(2)] = inst_36307);

(statearr_36349_36411[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (10))){
var inst_36299 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
var statearr_36350_36412 = state_36327__$1;
(statearr_36350_36412[(2)] = inst_36299);

(statearr_36350_36412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (18))){
var inst_36310 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
var statearr_36351_36413 = state_36327__$1;
(statearr_36351_36413[(2)] = inst_36310);

(statearr_36351_36413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (8))){
var inst_36296 = cljs.core.async.close_BANG_.call(null,to);
var state_36327__$1 = state_36327;
var statearr_36352_36414 = state_36327__$1;
(statearr_36352_36414[(2)] = inst_36296);

(statearr_36352_36414[(1)] = (10));


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
}
}
}
}
});})(c__32891__auto__,jobs,results,process,async))
;
return ((function (switch__32833__auto__,c__32891__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0 = (function (){
var statearr_36356 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__);

(statearr_36356[(1)] = (1));

return statearr_36356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1 = (function (state_36327){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_36327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e36357){if((e36357 instanceof Object)){
var ex__32837__auto__ = e36357;
var statearr_36358_36415 = state_36327;
(statearr_36358_36415[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36416 = state_36327;
state_36327 = G__36416;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__ = function(state_36327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1.call(this,state_36327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto__,jobs,results,process,async))
})();
var state__32893__auto__ = (function (){var statearr_36359 = f__32892__auto__.call(null);
(statearr_36359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto__);

return statearr_36359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto__,jobs,results,process,async))
);

return c__32891__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args36417 = [];
var len__30640__auto___36420 = arguments.length;
var i__30641__auto___36421 = (0);
while(true){
if((i__30641__auto___36421 < len__30640__auto___36420)){
args36417.push((arguments[i__30641__auto___36421]));

var G__36422 = (i__30641__auto___36421 + (1));
i__30641__auto___36421 = G__36422;
continue;
} else {
}
break;
}

var G__36419 = args36417.length;
switch (G__36419) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36417.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args36424 = [];
var len__30640__auto___36427 = arguments.length;
var i__30641__auto___36428 = (0);
while(true){
if((i__30641__auto___36428 < len__30640__auto___36427)){
args36424.push((arguments[i__30641__auto___36428]));

var G__36429 = (i__30641__auto___36428 + (1));
i__30641__auto___36428 = G__36429;
continue;
} else {
}
break;
}

var G__36426 = args36424.length;
switch (G__36426) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36424.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args36431 = [];
var len__30640__auto___36484 = arguments.length;
var i__30641__auto___36485 = (0);
while(true){
if((i__30641__auto___36485 < len__30640__auto___36484)){
args36431.push((arguments[i__30641__auto___36485]));

var G__36486 = (i__30641__auto___36485 + (1));
i__30641__auto___36485 = G__36486;
continue;
} else {
}
break;
}

var G__36433 = args36431.length;
switch (G__36433) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36431.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32891__auto___36488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___36488,tc,fc){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___36488,tc,fc){
return (function (state_36459){
var state_val_36460 = (state_36459[(1)]);
if((state_val_36460 === (7))){
var inst_36455 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
var statearr_36461_36489 = state_36459__$1;
(statearr_36461_36489[(2)] = inst_36455);

(statearr_36461_36489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (1))){
var state_36459__$1 = state_36459;
var statearr_36462_36490 = state_36459__$1;
(statearr_36462_36490[(2)] = null);

(statearr_36462_36490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (4))){
var inst_36436 = (state_36459[(7)]);
var inst_36436__$1 = (state_36459[(2)]);
var inst_36437 = (inst_36436__$1 == null);
var state_36459__$1 = (function (){var statearr_36463 = state_36459;
(statearr_36463[(7)] = inst_36436__$1);

return statearr_36463;
})();
if(cljs.core.truth_(inst_36437)){
var statearr_36464_36491 = state_36459__$1;
(statearr_36464_36491[(1)] = (5));

} else {
var statearr_36465_36492 = state_36459__$1;
(statearr_36465_36492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (13))){
var state_36459__$1 = state_36459;
var statearr_36466_36493 = state_36459__$1;
(statearr_36466_36493[(2)] = null);

(statearr_36466_36493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (6))){
var inst_36436 = (state_36459[(7)]);
var inst_36442 = p.call(null,inst_36436);
var state_36459__$1 = state_36459;
if(cljs.core.truth_(inst_36442)){
var statearr_36467_36494 = state_36459__$1;
(statearr_36467_36494[(1)] = (9));

} else {
var statearr_36468_36495 = state_36459__$1;
(statearr_36468_36495[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (3))){
var inst_36457 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36459__$1,inst_36457);
} else {
if((state_val_36460 === (12))){
var state_36459__$1 = state_36459;
var statearr_36469_36496 = state_36459__$1;
(statearr_36469_36496[(2)] = null);

(statearr_36469_36496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (2))){
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36459__$1,(4),ch);
} else {
if((state_val_36460 === (11))){
var inst_36436 = (state_36459[(7)]);
var inst_36446 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36459__$1,(8),inst_36446,inst_36436);
} else {
if((state_val_36460 === (9))){
var state_36459__$1 = state_36459;
var statearr_36470_36497 = state_36459__$1;
(statearr_36470_36497[(2)] = tc);

(statearr_36470_36497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (5))){
var inst_36439 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36440 = cljs.core.async.close_BANG_.call(null,fc);
var state_36459__$1 = (function (){var statearr_36471 = state_36459;
(statearr_36471[(8)] = inst_36439);

return statearr_36471;
})();
var statearr_36472_36498 = state_36459__$1;
(statearr_36472_36498[(2)] = inst_36440);

(statearr_36472_36498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (14))){
var inst_36453 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
var statearr_36473_36499 = state_36459__$1;
(statearr_36473_36499[(2)] = inst_36453);

(statearr_36473_36499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (10))){
var state_36459__$1 = state_36459;
var statearr_36474_36500 = state_36459__$1;
(statearr_36474_36500[(2)] = fc);

(statearr_36474_36500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (8))){
var inst_36448 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
if(cljs.core.truth_(inst_36448)){
var statearr_36475_36501 = state_36459__$1;
(statearr_36475_36501[(1)] = (12));

} else {
var statearr_36476_36502 = state_36459__$1;
(statearr_36476_36502[(1)] = (13));

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
});})(c__32891__auto___36488,tc,fc))
;
return ((function (switch__32833__auto__,c__32891__auto___36488,tc,fc){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_36480 = [null,null,null,null,null,null,null,null,null];
(statearr_36480[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_36480[(1)] = (1));

return statearr_36480;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_36459){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_36459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e36481){if((e36481 instanceof Object)){
var ex__32837__auto__ = e36481;
var statearr_36482_36503 = state_36459;
(statearr_36482_36503[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36504 = state_36459;
state_36459 = G__36504;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_36459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_36459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___36488,tc,fc))
})();
var state__32893__auto__ = (function (){var statearr_36483 = f__32892__auto__.call(null);
(statearr_36483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___36488);

return statearr_36483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___36488,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto__){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto__){
return (function (state_36568){
var state_val_36569 = (state_36568[(1)]);
if((state_val_36569 === (7))){
var inst_36564 = (state_36568[(2)]);
var state_36568__$1 = state_36568;
var statearr_36570_36591 = state_36568__$1;
(statearr_36570_36591[(2)] = inst_36564);

(statearr_36570_36591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (1))){
var inst_36548 = init;
var state_36568__$1 = (function (){var statearr_36571 = state_36568;
(statearr_36571[(7)] = inst_36548);

return statearr_36571;
})();
var statearr_36572_36592 = state_36568__$1;
(statearr_36572_36592[(2)] = null);

(statearr_36572_36592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (4))){
var inst_36551 = (state_36568[(8)]);
var inst_36551__$1 = (state_36568[(2)]);
var inst_36552 = (inst_36551__$1 == null);
var state_36568__$1 = (function (){var statearr_36573 = state_36568;
(statearr_36573[(8)] = inst_36551__$1);

return statearr_36573;
})();
if(cljs.core.truth_(inst_36552)){
var statearr_36574_36593 = state_36568__$1;
(statearr_36574_36593[(1)] = (5));

} else {
var statearr_36575_36594 = state_36568__$1;
(statearr_36575_36594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (6))){
var inst_36551 = (state_36568[(8)]);
var inst_36548 = (state_36568[(7)]);
var inst_36555 = (state_36568[(9)]);
var inst_36555__$1 = f.call(null,inst_36548,inst_36551);
var inst_36556 = cljs.core.reduced_QMARK_.call(null,inst_36555__$1);
var state_36568__$1 = (function (){var statearr_36576 = state_36568;
(statearr_36576[(9)] = inst_36555__$1);

return statearr_36576;
})();
if(inst_36556){
var statearr_36577_36595 = state_36568__$1;
(statearr_36577_36595[(1)] = (8));

} else {
var statearr_36578_36596 = state_36568__$1;
(statearr_36578_36596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (3))){
var inst_36566 = (state_36568[(2)]);
var state_36568__$1 = state_36568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36568__$1,inst_36566);
} else {
if((state_val_36569 === (2))){
var state_36568__$1 = state_36568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36568__$1,(4),ch);
} else {
if((state_val_36569 === (9))){
var inst_36555 = (state_36568[(9)]);
var inst_36548 = inst_36555;
var state_36568__$1 = (function (){var statearr_36579 = state_36568;
(statearr_36579[(7)] = inst_36548);

return statearr_36579;
})();
var statearr_36580_36597 = state_36568__$1;
(statearr_36580_36597[(2)] = null);

(statearr_36580_36597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (5))){
var inst_36548 = (state_36568[(7)]);
var state_36568__$1 = state_36568;
var statearr_36581_36598 = state_36568__$1;
(statearr_36581_36598[(2)] = inst_36548);

(statearr_36581_36598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (10))){
var inst_36562 = (state_36568[(2)]);
var state_36568__$1 = state_36568;
var statearr_36582_36599 = state_36568__$1;
(statearr_36582_36599[(2)] = inst_36562);

(statearr_36582_36599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (8))){
var inst_36555 = (state_36568[(9)]);
var inst_36558 = cljs.core.deref.call(null,inst_36555);
var state_36568__$1 = state_36568;
var statearr_36583_36600 = state_36568__$1;
(statearr_36583_36600[(2)] = inst_36558);

(statearr_36583_36600[(1)] = (10));


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
});})(c__32891__auto__))
;
return ((function (switch__32833__auto__,c__32891__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32834__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32834__auto____0 = (function (){
var statearr_36587 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36587[(0)] = cljs$core$async$reduce_$_state_machine__32834__auto__);

(statearr_36587[(1)] = (1));

return statearr_36587;
});
var cljs$core$async$reduce_$_state_machine__32834__auto____1 = (function (state_36568){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_36568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e36588){if((e36588 instanceof Object)){
var ex__32837__auto__ = e36588;
var statearr_36589_36601 = state_36568;
(statearr_36589_36601[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36602 = state_36568;
state_36568 = G__36602;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32834__auto__ = function(state_36568){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32834__auto____1.call(this,state_36568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32834__auto____0;
cljs$core$async$reduce_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32834__auto____1;
return cljs$core$async$reduce_$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto__))
})();
var state__32893__auto__ = (function (){var statearr_36590 = f__32892__auto__.call(null);
(statearr_36590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto__);

return statearr_36590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto__))
);

return c__32891__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto__,f__$1){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto__,f__$1){
return (function (state_36622){
var state_val_36623 = (state_36622[(1)]);
if((state_val_36623 === (1))){
var inst_36617 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36622__$1 = state_36622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36622__$1,(2),inst_36617);
} else {
if((state_val_36623 === (2))){
var inst_36619 = (state_36622[(2)]);
var inst_36620 = f__$1.call(null,inst_36619);
var state_36622__$1 = state_36622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36622__$1,inst_36620);
} else {
return null;
}
}
});})(c__32891__auto__,f__$1))
;
return ((function (switch__32833__auto__,c__32891__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32834__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32834__auto____0 = (function (){
var statearr_36627 = [null,null,null,null,null,null,null];
(statearr_36627[(0)] = cljs$core$async$transduce_$_state_machine__32834__auto__);

(statearr_36627[(1)] = (1));

return statearr_36627;
});
var cljs$core$async$transduce_$_state_machine__32834__auto____1 = (function (state_36622){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_36622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e36628){if((e36628 instanceof Object)){
var ex__32837__auto__ = e36628;
var statearr_36629_36631 = state_36622;
(statearr_36629_36631[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36632 = state_36622;
state_36622 = G__36632;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32834__auto__ = function(state_36622){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32834__auto____1.call(this,state_36622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32834__auto____0;
cljs$core$async$transduce_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32834__auto____1;
return cljs$core$async$transduce_$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto__,f__$1))
})();
var state__32893__auto__ = (function (){var statearr_36630 = f__32892__auto__.call(null);
(statearr_36630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto__);

return statearr_36630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto__,f__$1))
);

return c__32891__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args36633 = [];
var len__30640__auto___36685 = arguments.length;
var i__30641__auto___36686 = (0);
while(true){
if((i__30641__auto___36686 < len__30640__auto___36685)){
args36633.push((arguments[i__30641__auto___36686]));

var G__36687 = (i__30641__auto___36686 + (1));
i__30641__auto___36686 = G__36687;
continue;
} else {
}
break;
}

var G__36635 = args36633.length;
switch (G__36635) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36633.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto__){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto__){
return (function (state_36660){
var state_val_36661 = (state_36660[(1)]);
if((state_val_36661 === (7))){
var inst_36642 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
var statearr_36662_36689 = state_36660__$1;
(statearr_36662_36689[(2)] = inst_36642);

(statearr_36662_36689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (1))){
var inst_36636 = cljs.core.seq.call(null,coll);
var inst_36637 = inst_36636;
var state_36660__$1 = (function (){var statearr_36663 = state_36660;
(statearr_36663[(7)] = inst_36637);

return statearr_36663;
})();
var statearr_36664_36690 = state_36660__$1;
(statearr_36664_36690[(2)] = null);

(statearr_36664_36690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (4))){
var inst_36637 = (state_36660[(7)]);
var inst_36640 = cljs.core.first.call(null,inst_36637);
var state_36660__$1 = state_36660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36660__$1,(7),ch,inst_36640);
} else {
if((state_val_36661 === (13))){
var inst_36654 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
var statearr_36665_36691 = state_36660__$1;
(statearr_36665_36691[(2)] = inst_36654);

(statearr_36665_36691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (6))){
var inst_36645 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
if(cljs.core.truth_(inst_36645)){
var statearr_36666_36692 = state_36660__$1;
(statearr_36666_36692[(1)] = (8));

} else {
var statearr_36667_36693 = state_36660__$1;
(statearr_36667_36693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (3))){
var inst_36658 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36660__$1,inst_36658);
} else {
if((state_val_36661 === (12))){
var state_36660__$1 = state_36660;
var statearr_36668_36694 = state_36660__$1;
(statearr_36668_36694[(2)] = null);

(statearr_36668_36694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (2))){
var inst_36637 = (state_36660[(7)]);
var state_36660__$1 = state_36660;
if(cljs.core.truth_(inst_36637)){
var statearr_36669_36695 = state_36660__$1;
(statearr_36669_36695[(1)] = (4));

} else {
var statearr_36670_36696 = state_36660__$1;
(statearr_36670_36696[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (11))){
var inst_36651 = cljs.core.async.close_BANG_.call(null,ch);
var state_36660__$1 = state_36660;
var statearr_36671_36697 = state_36660__$1;
(statearr_36671_36697[(2)] = inst_36651);

(statearr_36671_36697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (9))){
var state_36660__$1 = state_36660;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36672_36698 = state_36660__$1;
(statearr_36672_36698[(1)] = (11));

} else {
var statearr_36673_36699 = state_36660__$1;
(statearr_36673_36699[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (5))){
var inst_36637 = (state_36660[(7)]);
var state_36660__$1 = state_36660;
var statearr_36674_36700 = state_36660__$1;
(statearr_36674_36700[(2)] = inst_36637);

(statearr_36674_36700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (10))){
var inst_36656 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
var statearr_36675_36701 = state_36660__$1;
(statearr_36675_36701[(2)] = inst_36656);

(statearr_36675_36701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (8))){
var inst_36637 = (state_36660[(7)]);
var inst_36647 = cljs.core.next.call(null,inst_36637);
var inst_36637__$1 = inst_36647;
var state_36660__$1 = (function (){var statearr_36676 = state_36660;
(statearr_36676[(7)] = inst_36637__$1);

return statearr_36676;
})();
var statearr_36677_36702 = state_36660__$1;
(statearr_36677_36702[(2)] = null);

(statearr_36677_36702[(1)] = (2));


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
});})(c__32891__auto__))
;
return ((function (switch__32833__auto__,c__32891__auto__){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_36681 = [null,null,null,null,null,null,null,null];
(statearr_36681[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_36681[(1)] = (1));

return statearr_36681;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_36660){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_36660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e36682){if((e36682 instanceof Object)){
var ex__32837__auto__ = e36682;
var statearr_36683_36703 = state_36660;
(statearr_36683_36703[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36704 = state_36660;
state_36660 = G__36704;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_36660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_36660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto__))
})();
var state__32893__auto__ = (function (){var statearr_36684 = f__32892__auto__.call(null);
(statearr_36684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto__);

return statearr_36684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto__))
);

return c__32891__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30137__auto__ = (((_ == null))?null:_);
var m__30138__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,_);
} else {
var m__30138__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30137__auto__ = (((m == null))?null:m);
var m__30138__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30138__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30137__auto__ = (((m == null))?null:m);
var m__30138__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,m,ch);
} else {
var m__30138__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30137__auto__ = (((m == null))?null:m);
var m__30138__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,m);
} else {
var m__30138__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36930 = (function (ch,cs,meta36931){
this.ch = ch;
this.cs = cs;
this.meta36931 = meta36931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36932,meta36931__$1){
var self__ = this;
var _36932__$1 = this;
return (new cljs.core.async.t_cljs$core$async36930(self__.ch,self__.cs,meta36931__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36932){
var self__ = this;
var _36932__$1 = this;
return self__.meta36931;
});})(cs))
;

cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36930.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36931","meta36931",1222728533,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36930";

cljs.core.async.t_cljs$core$async36930.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async36930");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36930 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36930(ch__$1,cs__$1,meta36931){
return (new cljs.core.async.t_cljs$core$async36930(ch__$1,cs__$1,meta36931));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36930(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32891__auto___37155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___37155,cs,m,dchan,dctr,done){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___37155,cs,m,dchan,dctr,done){
return (function (state_37067){
var state_val_37068 = (state_37067[(1)]);
if((state_val_37068 === (7))){
var inst_37063 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37069_37156 = state_37067__$1;
(statearr_37069_37156[(2)] = inst_37063);

(statearr_37069_37156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (20))){
var inst_36966 = (state_37067[(7)]);
var inst_36978 = cljs.core.first.call(null,inst_36966);
var inst_36979 = cljs.core.nth.call(null,inst_36978,(0),null);
var inst_36980 = cljs.core.nth.call(null,inst_36978,(1),null);
var state_37067__$1 = (function (){var statearr_37070 = state_37067;
(statearr_37070[(8)] = inst_36979);

return statearr_37070;
})();
if(cljs.core.truth_(inst_36980)){
var statearr_37071_37157 = state_37067__$1;
(statearr_37071_37157[(1)] = (22));

} else {
var statearr_37072_37158 = state_37067__$1;
(statearr_37072_37158[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (27))){
var inst_37010 = (state_37067[(9)]);
var inst_37008 = (state_37067[(10)]);
var inst_36935 = (state_37067[(11)]);
var inst_37015 = (state_37067[(12)]);
var inst_37015__$1 = cljs.core._nth.call(null,inst_37008,inst_37010);
var inst_37016 = cljs.core.async.put_BANG_.call(null,inst_37015__$1,inst_36935,done);
var state_37067__$1 = (function (){var statearr_37073 = state_37067;
(statearr_37073[(12)] = inst_37015__$1);

return statearr_37073;
})();
if(cljs.core.truth_(inst_37016)){
var statearr_37074_37159 = state_37067__$1;
(statearr_37074_37159[(1)] = (30));

} else {
var statearr_37075_37160 = state_37067__$1;
(statearr_37075_37160[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (1))){
var state_37067__$1 = state_37067;
var statearr_37076_37161 = state_37067__$1;
(statearr_37076_37161[(2)] = null);

(statearr_37076_37161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (24))){
var inst_36966 = (state_37067[(7)]);
var inst_36985 = (state_37067[(2)]);
var inst_36986 = cljs.core.next.call(null,inst_36966);
var inst_36944 = inst_36986;
var inst_36945 = null;
var inst_36946 = (0);
var inst_36947 = (0);
var state_37067__$1 = (function (){var statearr_37077 = state_37067;
(statearr_37077[(13)] = inst_36946);

(statearr_37077[(14)] = inst_36985);

(statearr_37077[(15)] = inst_36944);

(statearr_37077[(16)] = inst_36947);

(statearr_37077[(17)] = inst_36945);

return statearr_37077;
})();
var statearr_37078_37162 = state_37067__$1;
(statearr_37078_37162[(2)] = null);

(statearr_37078_37162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (39))){
var state_37067__$1 = state_37067;
var statearr_37082_37163 = state_37067__$1;
(statearr_37082_37163[(2)] = null);

(statearr_37082_37163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (4))){
var inst_36935 = (state_37067[(11)]);
var inst_36935__$1 = (state_37067[(2)]);
var inst_36936 = (inst_36935__$1 == null);
var state_37067__$1 = (function (){var statearr_37083 = state_37067;
(statearr_37083[(11)] = inst_36935__$1);

return statearr_37083;
})();
if(cljs.core.truth_(inst_36936)){
var statearr_37084_37164 = state_37067__$1;
(statearr_37084_37164[(1)] = (5));

} else {
var statearr_37085_37165 = state_37067__$1;
(statearr_37085_37165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (15))){
var inst_36946 = (state_37067[(13)]);
var inst_36944 = (state_37067[(15)]);
var inst_36947 = (state_37067[(16)]);
var inst_36945 = (state_37067[(17)]);
var inst_36962 = (state_37067[(2)]);
var inst_36963 = (inst_36947 + (1));
var tmp37079 = inst_36946;
var tmp37080 = inst_36944;
var tmp37081 = inst_36945;
var inst_36944__$1 = tmp37080;
var inst_36945__$1 = tmp37081;
var inst_36946__$1 = tmp37079;
var inst_36947__$1 = inst_36963;
var state_37067__$1 = (function (){var statearr_37086 = state_37067;
(statearr_37086[(18)] = inst_36962);

(statearr_37086[(13)] = inst_36946__$1);

(statearr_37086[(15)] = inst_36944__$1);

(statearr_37086[(16)] = inst_36947__$1);

(statearr_37086[(17)] = inst_36945__$1);

return statearr_37086;
})();
var statearr_37087_37166 = state_37067__$1;
(statearr_37087_37166[(2)] = null);

(statearr_37087_37166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (21))){
var inst_36989 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37091_37167 = state_37067__$1;
(statearr_37091_37167[(2)] = inst_36989);

(statearr_37091_37167[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (31))){
var inst_37015 = (state_37067[(12)]);
var inst_37019 = done.call(null,null);
var inst_37020 = cljs.core.async.untap_STAR_.call(null,m,inst_37015);
var state_37067__$1 = (function (){var statearr_37092 = state_37067;
(statearr_37092[(19)] = inst_37019);

return statearr_37092;
})();
var statearr_37093_37168 = state_37067__$1;
(statearr_37093_37168[(2)] = inst_37020);

(statearr_37093_37168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (32))){
var inst_37010 = (state_37067[(9)]);
var inst_37008 = (state_37067[(10)]);
var inst_37009 = (state_37067[(20)]);
var inst_37007 = (state_37067[(21)]);
var inst_37022 = (state_37067[(2)]);
var inst_37023 = (inst_37010 + (1));
var tmp37088 = inst_37008;
var tmp37089 = inst_37009;
var tmp37090 = inst_37007;
var inst_37007__$1 = tmp37090;
var inst_37008__$1 = tmp37088;
var inst_37009__$1 = tmp37089;
var inst_37010__$1 = inst_37023;
var state_37067__$1 = (function (){var statearr_37094 = state_37067;
(statearr_37094[(9)] = inst_37010__$1);

(statearr_37094[(10)] = inst_37008__$1);

(statearr_37094[(20)] = inst_37009__$1);

(statearr_37094[(22)] = inst_37022);

(statearr_37094[(21)] = inst_37007__$1);

return statearr_37094;
})();
var statearr_37095_37169 = state_37067__$1;
(statearr_37095_37169[(2)] = null);

(statearr_37095_37169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (40))){
var inst_37035 = (state_37067[(23)]);
var inst_37039 = done.call(null,null);
var inst_37040 = cljs.core.async.untap_STAR_.call(null,m,inst_37035);
var state_37067__$1 = (function (){var statearr_37096 = state_37067;
(statearr_37096[(24)] = inst_37039);

return statearr_37096;
})();
var statearr_37097_37170 = state_37067__$1;
(statearr_37097_37170[(2)] = inst_37040);

(statearr_37097_37170[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (33))){
var inst_37026 = (state_37067[(25)]);
var inst_37028 = cljs.core.chunked_seq_QMARK_.call(null,inst_37026);
var state_37067__$1 = state_37067;
if(inst_37028){
var statearr_37098_37171 = state_37067__$1;
(statearr_37098_37171[(1)] = (36));

} else {
var statearr_37099_37172 = state_37067__$1;
(statearr_37099_37172[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (13))){
var inst_36956 = (state_37067[(26)]);
var inst_36959 = cljs.core.async.close_BANG_.call(null,inst_36956);
var state_37067__$1 = state_37067;
var statearr_37100_37173 = state_37067__$1;
(statearr_37100_37173[(2)] = inst_36959);

(statearr_37100_37173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (22))){
var inst_36979 = (state_37067[(8)]);
var inst_36982 = cljs.core.async.close_BANG_.call(null,inst_36979);
var state_37067__$1 = state_37067;
var statearr_37101_37174 = state_37067__$1;
(statearr_37101_37174[(2)] = inst_36982);

(statearr_37101_37174[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (36))){
var inst_37026 = (state_37067[(25)]);
var inst_37030 = cljs.core.chunk_first.call(null,inst_37026);
var inst_37031 = cljs.core.chunk_rest.call(null,inst_37026);
var inst_37032 = cljs.core.count.call(null,inst_37030);
var inst_37007 = inst_37031;
var inst_37008 = inst_37030;
var inst_37009 = inst_37032;
var inst_37010 = (0);
var state_37067__$1 = (function (){var statearr_37102 = state_37067;
(statearr_37102[(9)] = inst_37010);

(statearr_37102[(10)] = inst_37008);

(statearr_37102[(20)] = inst_37009);

(statearr_37102[(21)] = inst_37007);

return statearr_37102;
})();
var statearr_37103_37175 = state_37067__$1;
(statearr_37103_37175[(2)] = null);

(statearr_37103_37175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (41))){
var inst_37026 = (state_37067[(25)]);
var inst_37042 = (state_37067[(2)]);
var inst_37043 = cljs.core.next.call(null,inst_37026);
var inst_37007 = inst_37043;
var inst_37008 = null;
var inst_37009 = (0);
var inst_37010 = (0);
var state_37067__$1 = (function (){var statearr_37104 = state_37067;
(statearr_37104[(9)] = inst_37010);

(statearr_37104[(10)] = inst_37008);

(statearr_37104[(20)] = inst_37009);

(statearr_37104[(27)] = inst_37042);

(statearr_37104[(21)] = inst_37007);

return statearr_37104;
})();
var statearr_37105_37176 = state_37067__$1;
(statearr_37105_37176[(2)] = null);

(statearr_37105_37176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (43))){
var state_37067__$1 = state_37067;
var statearr_37106_37177 = state_37067__$1;
(statearr_37106_37177[(2)] = null);

(statearr_37106_37177[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (29))){
var inst_37051 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37107_37178 = state_37067__$1;
(statearr_37107_37178[(2)] = inst_37051);

(statearr_37107_37178[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (44))){
var inst_37060 = (state_37067[(2)]);
var state_37067__$1 = (function (){var statearr_37108 = state_37067;
(statearr_37108[(28)] = inst_37060);

return statearr_37108;
})();
var statearr_37109_37179 = state_37067__$1;
(statearr_37109_37179[(2)] = null);

(statearr_37109_37179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (6))){
var inst_36999 = (state_37067[(29)]);
var inst_36998 = cljs.core.deref.call(null,cs);
var inst_36999__$1 = cljs.core.keys.call(null,inst_36998);
var inst_37000 = cljs.core.count.call(null,inst_36999__$1);
var inst_37001 = cljs.core.reset_BANG_.call(null,dctr,inst_37000);
var inst_37006 = cljs.core.seq.call(null,inst_36999__$1);
var inst_37007 = inst_37006;
var inst_37008 = null;
var inst_37009 = (0);
var inst_37010 = (0);
var state_37067__$1 = (function (){var statearr_37110 = state_37067;
(statearr_37110[(9)] = inst_37010);

(statearr_37110[(10)] = inst_37008);

(statearr_37110[(20)] = inst_37009);

(statearr_37110[(30)] = inst_37001);

(statearr_37110[(29)] = inst_36999__$1);

(statearr_37110[(21)] = inst_37007);

return statearr_37110;
})();
var statearr_37111_37180 = state_37067__$1;
(statearr_37111_37180[(2)] = null);

(statearr_37111_37180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (28))){
var inst_37026 = (state_37067[(25)]);
var inst_37007 = (state_37067[(21)]);
var inst_37026__$1 = cljs.core.seq.call(null,inst_37007);
var state_37067__$1 = (function (){var statearr_37112 = state_37067;
(statearr_37112[(25)] = inst_37026__$1);

return statearr_37112;
})();
if(inst_37026__$1){
var statearr_37113_37181 = state_37067__$1;
(statearr_37113_37181[(1)] = (33));

} else {
var statearr_37114_37182 = state_37067__$1;
(statearr_37114_37182[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (25))){
var inst_37010 = (state_37067[(9)]);
var inst_37009 = (state_37067[(20)]);
var inst_37012 = (inst_37010 < inst_37009);
var inst_37013 = inst_37012;
var state_37067__$1 = state_37067;
if(cljs.core.truth_(inst_37013)){
var statearr_37115_37183 = state_37067__$1;
(statearr_37115_37183[(1)] = (27));

} else {
var statearr_37116_37184 = state_37067__$1;
(statearr_37116_37184[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (34))){
var state_37067__$1 = state_37067;
var statearr_37117_37185 = state_37067__$1;
(statearr_37117_37185[(2)] = null);

(statearr_37117_37185[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (17))){
var state_37067__$1 = state_37067;
var statearr_37118_37186 = state_37067__$1;
(statearr_37118_37186[(2)] = null);

(statearr_37118_37186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (3))){
var inst_37065 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37067__$1,inst_37065);
} else {
if((state_val_37068 === (12))){
var inst_36994 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37119_37187 = state_37067__$1;
(statearr_37119_37187[(2)] = inst_36994);

(statearr_37119_37187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (2))){
var state_37067__$1 = state_37067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37067__$1,(4),ch);
} else {
if((state_val_37068 === (23))){
var state_37067__$1 = state_37067;
var statearr_37120_37188 = state_37067__$1;
(statearr_37120_37188[(2)] = null);

(statearr_37120_37188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (35))){
var inst_37049 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37121_37189 = state_37067__$1;
(statearr_37121_37189[(2)] = inst_37049);

(statearr_37121_37189[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (19))){
var inst_36966 = (state_37067[(7)]);
var inst_36970 = cljs.core.chunk_first.call(null,inst_36966);
var inst_36971 = cljs.core.chunk_rest.call(null,inst_36966);
var inst_36972 = cljs.core.count.call(null,inst_36970);
var inst_36944 = inst_36971;
var inst_36945 = inst_36970;
var inst_36946 = inst_36972;
var inst_36947 = (0);
var state_37067__$1 = (function (){var statearr_37122 = state_37067;
(statearr_37122[(13)] = inst_36946);

(statearr_37122[(15)] = inst_36944);

(statearr_37122[(16)] = inst_36947);

(statearr_37122[(17)] = inst_36945);

return statearr_37122;
})();
var statearr_37123_37190 = state_37067__$1;
(statearr_37123_37190[(2)] = null);

(statearr_37123_37190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (11))){
var inst_36966 = (state_37067[(7)]);
var inst_36944 = (state_37067[(15)]);
var inst_36966__$1 = cljs.core.seq.call(null,inst_36944);
var state_37067__$1 = (function (){var statearr_37124 = state_37067;
(statearr_37124[(7)] = inst_36966__$1);

return statearr_37124;
})();
if(inst_36966__$1){
var statearr_37125_37191 = state_37067__$1;
(statearr_37125_37191[(1)] = (16));

} else {
var statearr_37126_37192 = state_37067__$1;
(statearr_37126_37192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (9))){
var inst_36996 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37127_37193 = state_37067__$1;
(statearr_37127_37193[(2)] = inst_36996);

(statearr_37127_37193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (5))){
var inst_36942 = cljs.core.deref.call(null,cs);
var inst_36943 = cljs.core.seq.call(null,inst_36942);
var inst_36944 = inst_36943;
var inst_36945 = null;
var inst_36946 = (0);
var inst_36947 = (0);
var state_37067__$1 = (function (){var statearr_37128 = state_37067;
(statearr_37128[(13)] = inst_36946);

(statearr_37128[(15)] = inst_36944);

(statearr_37128[(16)] = inst_36947);

(statearr_37128[(17)] = inst_36945);

return statearr_37128;
})();
var statearr_37129_37194 = state_37067__$1;
(statearr_37129_37194[(2)] = null);

(statearr_37129_37194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (14))){
var state_37067__$1 = state_37067;
var statearr_37130_37195 = state_37067__$1;
(statearr_37130_37195[(2)] = null);

(statearr_37130_37195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (45))){
var inst_37057 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37131_37196 = state_37067__$1;
(statearr_37131_37196[(2)] = inst_37057);

(statearr_37131_37196[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (26))){
var inst_36999 = (state_37067[(29)]);
var inst_37053 = (state_37067[(2)]);
var inst_37054 = cljs.core.seq.call(null,inst_36999);
var state_37067__$1 = (function (){var statearr_37132 = state_37067;
(statearr_37132[(31)] = inst_37053);

return statearr_37132;
})();
if(inst_37054){
var statearr_37133_37197 = state_37067__$1;
(statearr_37133_37197[(1)] = (42));

} else {
var statearr_37134_37198 = state_37067__$1;
(statearr_37134_37198[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (16))){
var inst_36966 = (state_37067[(7)]);
var inst_36968 = cljs.core.chunked_seq_QMARK_.call(null,inst_36966);
var state_37067__$1 = state_37067;
if(inst_36968){
var statearr_37135_37199 = state_37067__$1;
(statearr_37135_37199[(1)] = (19));

} else {
var statearr_37136_37200 = state_37067__$1;
(statearr_37136_37200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (38))){
var inst_37046 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37137_37201 = state_37067__$1;
(statearr_37137_37201[(2)] = inst_37046);

(statearr_37137_37201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (30))){
var state_37067__$1 = state_37067;
var statearr_37138_37202 = state_37067__$1;
(statearr_37138_37202[(2)] = null);

(statearr_37138_37202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (10))){
var inst_36947 = (state_37067[(16)]);
var inst_36945 = (state_37067[(17)]);
var inst_36955 = cljs.core._nth.call(null,inst_36945,inst_36947);
var inst_36956 = cljs.core.nth.call(null,inst_36955,(0),null);
var inst_36957 = cljs.core.nth.call(null,inst_36955,(1),null);
var state_37067__$1 = (function (){var statearr_37139 = state_37067;
(statearr_37139[(26)] = inst_36956);

return statearr_37139;
})();
if(cljs.core.truth_(inst_36957)){
var statearr_37140_37203 = state_37067__$1;
(statearr_37140_37203[(1)] = (13));

} else {
var statearr_37141_37204 = state_37067__$1;
(statearr_37141_37204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (18))){
var inst_36992 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37142_37205 = state_37067__$1;
(statearr_37142_37205[(2)] = inst_36992);

(statearr_37142_37205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (42))){
var state_37067__$1 = state_37067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37067__$1,(45),dchan);
} else {
if((state_val_37068 === (37))){
var inst_37026 = (state_37067[(25)]);
var inst_36935 = (state_37067[(11)]);
var inst_37035 = (state_37067[(23)]);
var inst_37035__$1 = cljs.core.first.call(null,inst_37026);
var inst_37036 = cljs.core.async.put_BANG_.call(null,inst_37035__$1,inst_36935,done);
var state_37067__$1 = (function (){var statearr_37143 = state_37067;
(statearr_37143[(23)] = inst_37035__$1);

return statearr_37143;
})();
if(cljs.core.truth_(inst_37036)){
var statearr_37144_37206 = state_37067__$1;
(statearr_37144_37206[(1)] = (39));

} else {
var statearr_37145_37207 = state_37067__$1;
(statearr_37145_37207[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (8))){
var inst_36946 = (state_37067[(13)]);
var inst_36947 = (state_37067[(16)]);
var inst_36949 = (inst_36947 < inst_36946);
var inst_36950 = inst_36949;
var state_37067__$1 = state_37067;
if(cljs.core.truth_(inst_36950)){
var statearr_37146_37208 = state_37067__$1;
(statearr_37146_37208[(1)] = (10));

} else {
var statearr_37147_37209 = state_37067__$1;
(statearr_37147_37209[(1)] = (11));

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
});})(c__32891__auto___37155,cs,m,dchan,dctr,done))
;
return ((function (switch__32833__auto__,c__32891__auto___37155,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32834__auto__ = null;
var cljs$core$async$mult_$_state_machine__32834__auto____0 = (function (){
var statearr_37151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37151[(0)] = cljs$core$async$mult_$_state_machine__32834__auto__);

(statearr_37151[(1)] = (1));

return statearr_37151;
});
var cljs$core$async$mult_$_state_machine__32834__auto____1 = (function (state_37067){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_37067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e37152){if((e37152 instanceof Object)){
var ex__32837__auto__ = e37152;
var statearr_37153_37210 = state_37067;
(statearr_37153_37210[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37211 = state_37067;
state_37067 = G__37211;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32834__auto__ = function(state_37067){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32834__auto____1.call(this,state_37067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32834__auto____0;
cljs$core$async$mult_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32834__auto____1;
return cljs$core$async$mult_$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___37155,cs,m,dchan,dctr,done))
})();
var state__32893__auto__ = (function (){var statearr_37154 = f__32892__auto__.call(null);
(statearr_37154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___37155);

return statearr_37154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___37155,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args37212 = [];
var len__30640__auto___37215 = arguments.length;
var i__30641__auto___37216 = (0);
while(true){
if((i__30641__auto___37216 < len__30640__auto___37215)){
args37212.push((arguments[i__30641__auto___37216]));

var G__37217 = (i__30641__auto___37216 + (1));
i__30641__auto___37216 = G__37217;
continue;
} else {
}
break;
}

var G__37214 = args37212.length;
switch (G__37214) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37212.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30137__auto__ = (((m == null))?null:m);
var m__30138__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,m,ch);
} else {
var m__30138__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30137__auto__ = (((m == null))?null:m);
var m__30138__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,m,ch);
} else {
var m__30138__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30137__auto__ = (((m == null))?null:m);
var m__30138__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,m);
} else {
var m__30138__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30137__auto__ = (((m == null))?null:m);
var m__30138__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,m,state_map);
} else {
var m__30138__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30137__auto__ = (((m == null))?null:m);
var m__30138__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,m,mode);
} else {
var m__30138__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30647__auto__ = [];
var len__30640__auto___37229 = arguments.length;
var i__30641__auto___37230 = (0);
while(true){
if((i__30641__auto___37230 < len__30640__auto___37229)){
args__30647__auto__.push((arguments[i__30641__auto___37230]));

var G__37231 = (i__30641__auto___37230 + (1));
i__30641__auto___37230 = G__37231;
continue;
} else {
}
break;
}

var argseq__30648__auto__ = ((((3) < args__30647__auto__.length))?(new cljs.core.IndexedSeq(args__30647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37223){
var map__37224 = p__37223;
var map__37224__$1 = ((((!((map__37224 == null)))?((((map__37224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37224):map__37224);
var opts = map__37224__$1;
var statearr_37226_37232 = state;
(statearr_37226_37232[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__37224,map__37224__$1,opts){
return (function (val){
var statearr_37227_37233 = state;
(statearr_37227_37233[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37224,map__37224__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_37228_37234 = state;
(statearr_37228_37234[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37219){
var G__37220 = cljs.core.first.call(null,seq37219);
var seq37219__$1 = cljs.core.next.call(null,seq37219);
var G__37221 = cljs.core.first.call(null,seq37219__$1);
var seq37219__$2 = cljs.core.next.call(null,seq37219__$1);
var G__37222 = cljs.core.first.call(null,seq37219__$2);
var seq37219__$3 = cljs.core.next.call(null,seq37219__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37220,G__37221,G__37222,seq37219__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37402 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta37403){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta37403 = meta37403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37404,meta37403__$1){
var self__ = this;
var _37404__$1 = this;
return (new cljs.core.async.t_cljs$core$async37402(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta37403__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37404){
var self__ = this;
var _37404__$1 = this;
return self__.meta37403;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37402.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37402.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta37403","meta37403",1425849397,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37402";

cljs.core.async.t_cljs$core$async37402.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async37402");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37402 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37402(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37403){
return (new cljs.core.async.t_cljs$core$async37402(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37403));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37402(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32891__auto___37569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___37569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___37569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37506){
var state_val_37507 = (state_37506[(1)]);
if((state_val_37507 === (7))){
var inst_37421 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
var statearr_37508_37570 = state_37506__$1;
(statearr_37508_37570[(2)] = inst_37421);

(statearr_37508_37570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (20))){
var inst_37433 = (state_37506[(7)]);
var state_37506__$1 = state_37506;
var statearr_37509_37571 = state_37506__$1;
(statearr_37509_37571[(2)] = inst_37433);

(statearr_37509_37571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (27))){
var state_37506__$1 = state_37506;
var statearr_37510_37572 = state_37506__$1;
(statearr_37510_37572[(2)] = null);

(statearr_37510_37572[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (1))){
var inst_37408 = (state_37506[(8)]);
var inst_37408__$1 = calc_state.call(null);
var inst_37410 = (inst_37408__$1 == null);
var inst_37411 = cljs.core.not.call(null,inst_37410);
var state_37506__$1 = (function (){var statearr_37511 = state_37506;
(statearr_37511[(8)] = inst_37408__$1);

return statearr_37511;
})();
if(inst_37411){
var statearr_37512_37573 = state_37506__$1;
(statearr_37512_37573[(1)] = (2));

} else {
var statearr_37513_37574 = state_37506__$1;
(statearr_37513_37574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (24))){
var inst_37457 = (state_37506[(9)]);
var inst_37466 = (state_37506[(10)]);
var inst_37480 = (state_37506[(11)]);
var inst_37480__$1 = inst_37457.call(null,inst_37466);
var state_37506__$1 = (function (){var statearr_37514 = state_37506;
(statearr_37514[(11)] = inst_37480__$1);

return statearr_37514;
})();
if(cljs.core.truth_(inst_37480__$1)){
var statearr_37515_37575 = state_37506__$1;
(statearr_37515_37575[(1)] = (29));

} else {
var statearr_37516_37576 = state_37506__$1;
(statearr_37516_37576[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (4))){
var inst_37424 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
if(cljs.core.truth_(inst_37424)){
var statearr_37517_37577 = state_37506__$1;
(statearr_37517_37577[(1)] = (8));

} else {
var statearr_37518_37578 = state_37506__$1;
(statearr_37518_37578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (15))){
var inst_37451 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
if(cljs.core.truth_(inst_37451)){
var statearr_37519_37579 = state_37506__$1;
(statearr_37519_37579[(1)] = (19));

} else {
var statearr_37520_37580 = state_37506__$1;
(statearr_37520_37580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (21))){
var inst_37456 = (state_37506[(12)]);
var inst_37456__$1 = (state_37506[(2)]);
var inst_37457 = cljs.core.get.call(null,inst_37456__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37458 = cljs.core.get.call(null,inst_37456__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37459 = cljs.core.get.call(null,inst_37456__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37506__$1 = (function (){var statearr_37521 = state_37506;
(statearr_37521[(12)] = inst_37456__$1);

(statearr_37521[(9)] = inst_37457);

(statearr_37521[(13)] = inst_37458);

return statearr_37521;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37506__$1,(22),inst_37459);
} else {
if((state_val_37507 === (31))){
var inst_37488 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
if(cljs.core.truth_(inst_37488)){
var statearr_37522_37581 = state_37506__$1;
(statearr_37522_37581[(1)] = (32));

} else {
var statearr_37523_37582 = state_37506__$1;
(statearr_37523_37582[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (32))){
var inst_37465 = (state_37506[(14)]);
var state_37506__$1 = state_37506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37506__$1,(35),out,inst_37465);
} else {
if((state_val_37507 === (33))){
var inst_37456 = (state_37506[(12)]);
var inst_37433 = inst_37456;
var state_37506__$1 = (function (){var statearr_37524 = state_37506;
(statearr_37524[(7)] = inst_37433);

return statearr_37524;
})();
var statearr_37525_37583 = state_37506__$1;
(statearr_37525_37583[(2)] = null);

(statearr_37525_37583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (13))){
var inst_37433 = (state_37506[(7)]);
var inst_37440 = inst_37433.cljs$lang$protocol_mask$partition0$;
var inst_37441 = (inst_37440 & (64));
var inst_37442 = inst_37433.cljs$core$ISeq$;
var inst_37443 = (cljs.core.PROTOCOL_SENTINEL === inst_37442);
var inst_37444 = (inst_37441) || (inst_37443);
var state_37506__$1 = state_37506;
if(cljs.core.truth_(inst_37444)){
var statearr_37526_37584 = state_37506__$1;
(statearr_37526_37584[(1)] = (16));

} else {
var statearr_37527_37585 = state_37506__$1;
(statearr_37527_37585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (22))){
var inst_37465 = (state_37506[(14)]);
var inst_37466 = (state_37506[(10)]);
var inst_37464 = (state_37506[(2)]);
var inst_37465__$1 = cljs.core.nth.call(null,inst_37464,(0),null);
var inst_37466__$1 = cljs.core.nth.call(null,inst_37464,(1),null);
var inst_37467 = (inst_37465__$1 == null);
var inst_37468 = cljs.core._EQ_.call(null,inst_37466__$1,change);
var inst_37469 = (inst_37467) || (inst_37468);
var state_37506__$1 = (function (){var statearr_37528 = state_37506;
(statearr_37528[(14)] = inst_37465__$1);

(statearr_37528[(10)] = inst_37466__$1);

return statearr_37528;
})();
if(cljs.core.truth_(inst_37469)){
var statearr_37529_37586 = state_37506__$1;
(statearr_37529_37586[(1)] = (23));

} else {
var statearr_37530_37587 = state_37506__$1;
(statearr_37530_37587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (36))){
var inst_37456 = (state_37506[(12)]);
var inst_37433 = inst_37456;
var state_37506__$1 = (function (){var statearr_37531 = state_37506;
(statearr_37531[(7)] = inst_37433);

return statearr_37531;
})();
var statearr_37532_37588 = state_37506__$1;
(statearr_37532_37588[(2)] = null);

(statearr_37532_37588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (29))){
var inst_37480 = (state_37506[(11)]);
var state_37506__$1 = state_37506;
var statearr_37533_37589 = state_37506__$1;
(statearr_37533_37589[(2)] = inst_37480);

(statearr_37533_37589[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (6))){
var state_37506__$1 = state_37506;
var statearr_37534_37590 = state_37506__$1;
(statearr_37534_37590[(2)] = false);

(statearr_37534_37590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (28))){
var inst_37476 = (state_37506[(2)]);
var inst_37477 = calc_state.call(null);
var inst_37433 = inst_37477;
var state_37506__$1 = (function (){var statearr_37535 = state_37506;
(statearr_37535[(15)] = inst_37476);

(statearr_37535[(7)] = inst_37433);

return statearr_37535;
})();
var statearr_37536_37591 = state_37506__$1;
(statearr_37536_37591[(2)] = null);

(statearr_37536_37591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (25))){
var inst_37502 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
var statearr_37537_37592 = state_37506__$1;
(statearr_37537_37592[(2)] = inst_37502);

(statearr_37537_37592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (34))){
var inst_37500 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
var statearr_37538_37593 = state_37506__$1;
(statearr_37538_37593[(2)] = inst_37500);

(statearr_37538_37593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (17))){
var state_37506__$1 = state_37506;
var statearr_37539_37594 = state_37506__$1;
(statearr_37539_37594[(2)] = false);

(statearr_37539_37594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (3))){
var state_37506__$1 = state_37506;
var statearr_37540_37595 = state_37506__$1;
(statearr_37540_37595[(2)] = false);

(statearr_37540_37595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (12))){
var inst_37504 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37506__$1,inst_37504);
} else {
if((state_val_37507 === (2))){
var inst_37408 = (state_37506[(8)]);
var inst_37413 = inst_37408.cljs$lang$protocol_mask$partition0$;
var inst_37414 = (inst_37413 & (64));
var inst_37415 = inst_37408.cljs$core$ISeq$;
var inst_37416 = (cljs.core.PROTOCOL_SENTINEL === inst_37415);
var inst_37417 = (inst_37414) || (inst_37416);
var state_37506__$1 = state_37506;
if(cljs.core.truth_(inst_37417)){
var statearr_37541_37596 = state_37506__$1;
(statearr_37541_37596[(1)] = (5));

} else {
var statearr_37542_37597 = state_37506__$1;
(statearr_37542_37597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (23))){
var inst_37465 = (state_37506[(14)]);
var inst_37471 = (inst_37465 == null);
var state_37506__$1 = state_37506;
if(cljs.core.truth_(inst_37471)){
var statearr_37543_37598 = state_37506__$1;
(statearr_37543_37598[(1)] = (26));

} else {
var statearr_37544_37599 = state_37506__$1;
(statearr_37544_37599[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (35))){
var inst_37491 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
if(cljs.core.truth_(inst_37491)){
var statearr_37545_37600 = state_37506__$1;
(statearr_37545_37600[(1)] = (36));

} else {
var statearr_37546_37601 = state_37506__$1;
(statearr_37546_37601[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (19))){
var inst_37433 = (state_37506[(7)]);
var inst_37453 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37433);
var state_37506__$1 = state_37506;
var statearr_37547_37602 = state_37506__$1;
(statearr_37547_37602[(2)] = inst_37453);

(statearr_37547_37602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (11))){
var inst_37433 = (state_37506[(7)]);
var inst_37437 = (inst_37433 == null);
var inst_37438 = cljs.core.not.call(null,inst_37437);
var state_37506__$1 = state_37506;
if(inst_37438){
var statearr_37548_37603 = state_37506__$1;
(statearr_37548_37603[(1)] = (13));

} else {
var statearr_37549_37604 = state_37506__$1;
(statearr_37549_37604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (9))){
var inst_37408 = (state_37506[(8)]);
var state_37506__$1 = state_37506;
var statearr_37550_37605 = state_37506__$1;
(statearr_37550_37605[(2)] = inst_37408);

(statearr_37550_37605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (5))){
var state_37506__$1 = state_37506;
var statearr_37551_37606 = state_37506__$1;
(statearr_37551_37606[(2)] = true);

(statearr_37551_37606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (14))){
var state_37506__$1 = state_37506;
var statearr_37552_37607 = state_37506__$1;
(statearr_37552_37607[(2)] = false);

(statearr_37552_37607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (26))){
var inst_37466 = (state_37506[(10)]);
var inst_37473 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37466);
var state_37506__$1 = state_37506;
var statearr_37553_37608 = state_37506__$1;
(statearr_37553_37608[(2)] = inst_37473);

(statearr_37553_37608[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (16))){
var state_37506__$1 = state_37506;
var statearr_37554_37609 = state_37506__$1;
(statearr_37554_37609[(2)] = true);

(statearr_37554_37609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (38))){
var inst_37496 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
var statearr_37555_37610 = state_37506__$1;
(statearr_37555_37610[(2)] = inst_37496);

(statearr_37555_37610[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (30))){
var inst_37457 = (state_37506[(9)]);
var inst_37458 = (state_37506[(13)]);
var inst_37466 = (state_37506[(10)]);
var inst_37483 = cljs.core.empty_QMARK_.call(null,inst_37457);
var inst_37484 = inst_37458.call(null,inst_37466);
var inst_37485 = cljs.core.not.call(null,inst_37484);
var inst_37486 = (inst_37483) && (inst_37485);
var state_37506__$1 = state_37506;
var statearr_37556_37611 = state_37506__$1;
(statearr_37556_37611[(2)] = inst_37486);

(statearr_37556_37611[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (10))){
var inst_37408 = (state_37506[(8)]);
var inst_37429 = (state_37506[(2)]);
var inst_37430 = cljs.core.get.call(null,inst_37429,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37431 = cljs.core.get.call(null,inst_37429,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37432 = cljs.core.get.call(null,inst_37429,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37433 = inst_37408;
var state_37506__$1 = (function (){var statearr_37557 = state_37506;
(statearr_37557[(16)] = inst_37431);

(statearr_37557[(17)] = inst_37430);

(statearr_37557[(7)] = inst_37433);

(statearr_37557[(18)] = inst_37432);

return statearr_37557;
})();
var statearr_37558_37612 = state_37506__$1;
(statearr_37558_37612[(2)] = null);

(statearr_37558_37612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (18))){
var inst_37448 = (state_37506[(2)]);
var state_37506__$1 = state_37506;
var statearr_37559_37613 = state_37506__$1;
(statearr_37559_37613[(2)] = inst_37448);

(statearr_37559_37613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (37))){
var state_37506__$1 = state_37506;
var statearr_37560_37614 = state_37506__$1;
(statearr_37560_37614[(2)] = null);

(statearr_37560_37614[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37507 === (8))){
var inst_37408 = (state_37506[(8)]);
var inst_37426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37408);
var state_37506__$1 = state_37506;
var statearr_37561_37615 = state_37506__$1;
(statearr_37561_37615[(2)] = inst_37426);

(statearr_37561_37615[(1)] = (10));


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
});})(c__32891__auto___37569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32833__auto__,c__32891__auto___37569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32834__auto__ = null;
var cljs$core$async$mix_$_state_machine__32834__auto____0 = (function (){
var statearr_37565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37565[(0)] = cljs$core$async$mix_$_state_machine__32834__auto__);

(statearr_37565[(1)] = (1));

return statearr_37565;
});
var cljs$core$async$mix_$_state_machine__32834__auto____1 = (function (state_37506){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_37506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e37566){if((e37566 instanceof Object)){
var ex__32837__auto__ = e37566;
var statearr_37567_37616 = state_37506;
(statearr_37567_37616[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37617 = state_37506;
state_37506 = G__37617;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32834__auto__ = function(state_37506){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32834__auto____1.call(this,state_37506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32834__auto____0;
cljs$core$async$mix_$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32834__auto____1;
return cljs$core$async$mix_$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___37569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32893__auto__ = (function (){var statearr_37568 = f__32892__auto__.call(null);
(statearr_37568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___37569);

return statearr_37568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___37569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30137__auto__ = (((p == null))?null:p);
var m__30138__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30138__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30137__auto__ = (((p == null))?null:p);
var m__30138__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,p,v,ch);
} else {
var m__30138__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args37618 = [];
var len__30640__auto___37621 = arguments.length;
var i__30641__auto___37622 = (0);
while(true){
if((i__30641__auto___37622 < len__30640__auto___37621)){
args37618.push((arguments[i__30641__auto___37622]));

var G__37623 = (i__30641__auto___37622 + (1));
i__30641__auto___37622 = G__37623;
continue;
} else {
}
break;
}

var G__37620 = args37618.length;
switch (G__37620) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37618.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30137__auto__ = (((p == null))?null:p);
var m__30138__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,p);
} else {
var m__30138__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30137__auto__ = (((p == null))?null:p);
var m__30138__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30137__auto__)]);
if(!((m__30138__auto__ == null))){
return m__30138__auto__.call(null,p,v);
} else {
var m__30138__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30138__auto____$1 == null))){
return m__30138__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args37626 = [];
var len__30640__auto___37751 = arguments.length;
var i__30641__auto___37752 = (0);
while(true){
if((i__30641__auto___37752 < len__30640__auto___37751)){
args37626.push((arguments[i__30641__auto___37752]));

var G__37753 = (i__30641__auto___37752 + (1));
i__30641__auto___37752 = G__37753;
continue;
} else {
}
break;
}

var G__37628 = args37626.length;
switch (G__37628) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37626.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29419__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29419__auto__)){
return or__29419__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29419__auto__,mults){
return (function (p1__37625_SHARP_){
if(cljs.core.truth_(p1__37625_SHARP_.call(null,topic))){
return p1__37625_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37625_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29419__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37629 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37630){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37630 = meta37630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37631,meta37630__$1){
var self__ = this;
var _37631__$1 = this;
return (new cljs.core.async.t_cljs$core$async37629(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37630__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37631){
var self__ = this;
var _37631__$1 = this;
return self__.meta37630;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37629.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37629.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37629.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37629.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37629.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37629.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37629.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37630","meta37630",263152233,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37629";

cljs.core.async.t_cljs$core$async37629.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async37629");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37629 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37629(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37630){
return (new cljs.core.async.t_cljs$core$async37629(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37630));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37629(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32891__auto___37755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___37755,mults,ensure_mult,p){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___37755,mults,ensure_mult,p){
return (function (state_37703){
var state_val_37704 = (state_37703[(1)]);
if((state_val_37704 === (7))){
var inst_37699 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
var statearr_37705_37756 = state_37703__$1;
(statearr_37705_37756[(2)] = inst_37699);

(statearr_37705_37756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (20))){
var state_37703__$1 = state_37703;
var statearr_37706_37757 = state_37703__$1;
(statearr_37706_37757[(2)] = null);

(statearr_37706_37757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (1))){
var state_37703__$1 = state_37703;
var statearr_37707_37758 = state_37703__$1;
(statearr_37707_37758[(2)] = null);

(statearr_37707_37758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (24))){
var inst_37682 = (state_37703[(7)]);
var inst_37691 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37682);
var state_37703__$1 = state_37703;
var statearr_37708_37759 = state_37703__$1;
(statearr_37708_37759[(2)] = inst_37691);

(statearr_37708_37759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (4))){
var inst_37634 = (state_37703[(8)]);
var inst_37634__$1 = (state_37703[(2)]);
var inst_37635 = (inst_37634__$1 == null);
var state_37703__$1 = (function (){var statearr_37709 = state_37703;
(statearr_37709[(8)] = inst_37634__$1);

return statearr_37709;
})();
if(cljs.core.truth_(inst_37635)){
var statearr_37710_37760 = state_37703__$1;
(statearr_37710_37760[(1)] = (5));

} else {
var statearr_37711_37761 = state_37703__$1;
(statearr_37711_37761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (15))){
var inst_37676 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
var statearr_37712_37762 = state_37703__$1;
(statearr_37712_37762[(2)] = inst_37676);

(statearr_37712_37762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (21))){
var inst_37696 = (state_37703[(2)]);
var state_37703__$1 = (function (){var statearr_37713 = state_37703;
(statearr_37713[(9)] = inst_37696);

return statearr_37713;
})();
var statearr_37714_37763 = state_37703__$1;
(statearr_37714_37763[(2)] = null);

(statearr_37714_37763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (13))){
var inst_37658 = (state_37703[(10)]);
var inst_37660 = cljs.core.chunked_seq_QMARK_.call(null,inst_37658);
var state_37703__$1 = state_37703;
if(inst_37660){
var statearr_37715_37764 = state_37703__$1;
(statearr_37715_37764[(1)] = (16));

} else {
var statearr_37716_37765 = state_37703__$1;
(statearr_37716_37765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (22))){
var inst_37688 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
if(cljs.core.truth_(inst_37688)){
var statearr_37717_37766 = state_37703__$1;
(statearr_37717_37766[(1)] = (23));

} else {
var statearr_37718_37767 = state_37703__$1;
(statearr_37718_37767[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (6))){
var inst_37682 = (state_37703[(7)]);
var inst_37634 = (state_37703[(8)]);
var inst_37684 = (state_37703[(11)]);
var inst_37682__$1 = topic_fn.call(null,inst_37634);
var inst_37683 = cljs.core.deref.call(null,mults);
var inst_37684__$1 = cljs.core.get.call(null,inst_37683,inst_37682__$1);
var state_37703__$1 = (function (){var statearr_37719 = state_37703;
(statearr_37719[(7)] = inst_37682__$1);

(statearr_37719[(11)] = inst_37684__$1);

return statearr_37719;
})();
if(cljs.core.truth_(inst_37684__$1)){
var statearr_37720_37768 = state_37703__$1;
(statearr_37720_37768[(1)] = (19));

} else {
var statearr_37721_37769 = state_37703__$1;
(statearr_37721_37769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (25))){
var inst_37693 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
var statearr_37722_37770 = state_37703__$1;
(statearr_37722_37770[(2)] = inst_37693);

(statearr_37722_37770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (17))){
var inst_37658 = (state_37703[(10)]);
var inst_37667 = cljs.core.first.call(null,inst_37658);
var inst_37668 = cljs.core.async.muxch_STAR_.call(null,inst_37667);
var inst_37669 = cljs.core.async.close_BANG_.call(null,inst_37668);
var inst_37670 = cljs.core.next.call(null,inst_37658);
var inst_37644 = inst_37670;
var inst_37645 = null;
var inst_37646 = (0);
var inst_37647 = (0);
var state_37703__$1 = (function (){var statearr_37723 = state_37703;
(statearr_37723[(12)] = inst_37646);

(statearr_37723[(13)] = inst_37645);

(statearr_37723[(14)] = inst_37669);

(statearr_37723[(15)] = inst_37644);

(statearr_37723[(16)] = inst_37647);

return statearr_37723;
})();
var statearr_37724_37771 = state_37703__$1;
(statearr_37724_37771[(2)] = null);

(statearr_37724_37771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (3))){
var inst_37701 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37703__$1,inst_37701);
} else {
if((state_val_37704 === (12))){
var inst_37678 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
var statearr_37725_37772 = state_37703__$1;
(statearr_37725_37772[(2)] = inst_37678);

(statearr_37725_37772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (2))){
var state_37703__$1 = state_37703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37703__$1,(4),ch);
} else {
if((state_val_37704 === (23))){
var state_37703__$1 = state_37703;
var statearr_37726_37773 = state_37703__$1;
(statearr_37726_37773[(2)] = null);

(statearr_37726_37773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (19))){
var inst_37634 = (state_37703[(8)]);
var inst_37684 = (state_37703[(11)]);
var inst_37686 = cljs.core.async.muxch_STAR_.call(null,inst_37684);
var state_37703__$1 = state_37703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37703__$1,(22),inst_37686,inst_37634);
} else {
if((state_val_37704 === (11))){
var inst_37658 = (state_37703[(10)]);
var inst_37644 = (state_37703[(15)]);
var inst_37658__$1 = cljs.core.seq.call(null,inst_37644);
var state_37703__$1 = (function (){var statearr_37727 = state_37703;
(statearr_37727[(10)] = inst_37658__$1);

return statearr_37727;
})();
if(inst_37658__$1){
var statearr_37728_37774 = state_37703__$1;
(statearr_37728_37774[(1)] = (13));

} else {
var statearr_37729_37775 = state_37703__$1;
(statearr_37729_37775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (9))){
var inst_37680 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
var statearr_37730_37776 = state_37703__$1;
(statearr_37730_37776[(2)] = inst_37680);

(statearr_37730_37776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (5))){
var inst_37641 = cljs.core.deref.call(null,mults);
var inst_37642 = cljs.core.vals.call(null,inst_37641);
var inst_37643 = cljs.core.seq.call(null,inst_37642);
var inst_37644 = inst_37643;
var inst_37645 = null;
var inst_37646 = (0);
var inst_37647 = (0);
var state_37703__$1 = (function (){var statearr_37731 = state_37703;
(statearr_37731[(12)] = inst_37646);

(statearr_37731[(13)] = inst_37645);

(statearr_37731[(15)] = inst_37644);

(statearr_37731[(16)] = inst_37647);

return statearr_37731;
})();
var statearr_37732_37777 = state_37703__$1;
(statearr_37732_37777[(2)] = null);

(statearr_37732_37777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (14))){
var state_37703__$1 = state_37703;
var statearr_37736_37778 = state_37703__$1;
(statearr_37736_37778[(2)] = null);

(statearr_37736_37778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (16))){
var inst_37658 = (state_37703[(10)]);
var inst_37662 = cljs.core.chunk_first.call(null,inst_37658);
var inst_37663 = cljs.core.chunk_rest.call(null,inst_37658);
var inst_37664 = cljs.core.count.call(null,inst_37662);
var inst_37644 = inst_37663;
var inst_37645 = inst_37662;
var inst_37646 = inst_37664;
var inst_37647 = (0);
var state_37703__$1 = (function (){var statearr_37737 = state_37703;
(statearr_37737[(12)] = inst_37646);

(statearr_37737[(13)] = inst_37645);

(statearr_37737[(15)] = inst_37644);

(statearr_37737[(16)] = inst_37647);

return statearr_37737;
})();
var statearr_37738_37779 = state_37703__$1;
(statearr_37738_37779[(2)] = null);

(statearr_37738_37779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (10))){
var inst_37646 = (state_37703[(12)]);
var inst_37645 = (state_37703[(13)]);
var inst_37644 = (state_37703[(15)]);
var inst_37647 = (state_37703[(16)]);
var inst_37652 = cljs.core._nth.call(null,inst_37645,inst_37647);
var inst_37653 = cljs.core.async.muxch_STAR_.call(null,inst_37652);
var inst_37654 = cljs.core.async.close_BANG_.call(null,inst_37653);
var inst_37655 = (inst_37647 + (1));
var tmp37733 = inst_37646;
var tmp37734 = inst_37645;
var tmp37735 = inst_37644;
var inst_37644__$1 = tmp37735;
var inst_37645__$1 = tmp37734;
var inst_37646__$1 = tmp37733;
var inst_37647__$1 = inst_37655;
var state_37703__$1 = (function (){var statearr_37739 = state_37703;
(statearr_37739[(12)] = inst_37646__$1);

(statearr_37739[(17)] = inst_37654);

(statearr_37739[(13)] = inst_37645__$1);

(statearr_37739[(15)] = inst_37644__$1);

(statearr_37739[(16)] = inst_37647__$1);

return statearr_37739;
})();
var statearr_37740_37780 = state_37703__$1;
(statearr_37740_37780[(2)] = null);

(statearr_37740_37780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (18))){
var inst_37673 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
var statearr_37741_37781 = state_37703__$1;
(statearr_37741_37781[(2)] = inst_37673);

(statearr_37741_37781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (8))){
var inst_37646 = (state_37703[(12)]);
var inst_37647 = (state_37703[(16)]);
var inst_37649 = (inst_37647 < inst_37646);
var inst_37650 = inst_37649;
var state_37703__$1 = state_37703;
if(cljs.core.truth_(inst_37650)){
var statearr_37742_37782 = state_37703__$1;
(statearr_37742_37782[(1)] = (10));

} else {
var statearr_37743_37783 = state_37703__$1;
(statearr_37743_37783[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__32891__auto___37755,mults,ensure_mult,p))
;
return ((function (switch__32833__auto__,c__32891__auto___37755,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_37747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37747[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_37747[(1)] = (1));

return statearr_37747;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_37703){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_37703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e37748){if((e37748 instanceof Object)){
var ex__32837__auto__ = e37748;
var statearr_37749_37784 = state_37703;
(statearr_37749_37784[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37785 = state_37703;
state_37703 = G__37785;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_37703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_37703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___37755,mults,ensure_mult,p))
})();
var state__32893__auto__ = (function (){var statearr_37750 = f__32892__auto__.call(null);
(statearr_37750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___37755);

return statearr_37750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___37755,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args37786 = [];
var len__30640__auto___37789 = arguments.length;
var i__30641__auto___37790 = (0);
while(true){
if((i__30641__auto___37790 < len__30640__auto___37789)){
args37786.push((arguments[i__30641__auto___37790]));

var G__37791 = (i__30641__auto___37790 + (1));
i__30641__auto___37790 = G__37791;
continue;
} else {
}
break;
}

var G__37788 = args37786.length;
switch (G__37788) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37786.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args37793 = [];
var len__30640__auto___37796 = arguments.length;
var i__30641__auto___37797 = (0);
while(true){
if((i__30641__auto___37797 < len__30640__auto___37796)){
args37793.push((arguments[i__30641__auto___37797]));

var G__37798 = (i__30641__auto___37797 + (1));
i__30641__auto___37797 = G__37798;
continue;
} else {
}
break;
}

var G__37795 = args37793.length;
switch (G__37795) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37793.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args37800 = [];
var len__30640__auto___37871 = arguments.length;
var i__30641__auto___37872 = (0);
while(true){
if((i__30641__auto___37872 < len__30640__auto___37871)){
args37800.push((arguments[i__30641__auto___37872]));

var G__37873 = (i__30641__auto___37872 + (1));
i__30641__auto___37872 = G__37873;
continue;
} else {
}
break;
}

var G__37802 = args37800.length;
switch (G__37802) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37800.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32891__auto___37875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___37875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___37875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37841){
var state_val_37842 = (state_37841[(1)]);
if((state_val_37842 === (7))){
var state_37841__$1 = state_37841;
var statearr_37843_37876 = state_37841__$1;
(statearr_37843_37876[(2)] = null);

(statearr_37843_37876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (1))){
var state_37841__$1 = state_37841;
var statearr_37844_37877 = state_37841__$1;
(statearr_37844_37877[(2)] = null);

(statearr_37844_37877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (4))){
var inst_37805 = (state_37841[(7)]);
var inst_37807 = (inst_37805 < cnt);
var state_37841__$1 = state_37841;
if(cljs.core.truth_(inst_37807)){
var statearr_37845_37878 = state_37841__$1;
(statearr_37845_37878[(1)] = (6));

} else {
var statearr_37846_37879 = state_37841__$1;
(statearr_37846_37879[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (15))){
var inst_37837 = (state_37841[(2)]);
var state_37841__$1 = state_37841;
var statearr_37847_37880 = state_37841__$1;
(statearr_37847_37880[(2)] = inst_37837);

(statearr_37847_37880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (13))){
var inst_37830 = cljs.core.async.close_BANG_.call(null,out);
var state_37841__$1 = state_37841;
var statearr_37848_37881 = state_37841__$1;
(statearr_37848_37881[(2)] = inst_37830);

(statearr_37848_37881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (6))){
var state_37841__$1 = state_37841;
var statearr_37849_37882 = state_37841__$1;
(statearr_37849_37882[(2)] = null);

(statearr_37849_37882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (3))){
var inst_37839 = (state_37841[(2)]);
var state_37841__$1 = state_37841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37841__$1,inst_37839);
} else {
if((state_val_37842 === (12))){
var inst_37827 = (state_37841[(8)]);
var inst_37827__$1 = (state_37841[(2)]);
var inst_37828 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37827__$1);
var state_37841__$1 = (function (){var statearr_37850 = state_37841;
(statearr_37850[(8)] = inst_37827__$1);

return statearr_37850;
})();
if(cljs.core.truth_(inst_37828)){
var statearr_37851_37883 = state_37841__$1;
(statearr_37851_37883[(1)] = (13));

} else {
var statearr_37852_37884 = state_37841__$1;
(statearr_37852_37884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (2))){
var inst_37804 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37805 = (0);
var state_37841__$1 = (function (){var statearr_37853 = state_37841;
(statearr_37853[(9)] = inst_37804);

(statearr_37853[(7)] = inst_37805);

return statearr_37853;
})();
var statearr_37854_37885 = state_37841__$1;
(statearr_37854_37885[(2)] = null);

(statearr_37854_37885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (11))){
var inst_37805 = (state_37841[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37841,(10),Object,null,(9));
var inst_37814 = chs__$1.call(null,inst_37805);
var inst_37815 = done.call(null,inst_37805);
var inst_37816 = cljs.core.async.take_BANG_.call(null,inst_37814,inst_37815);
var state_37841__$1 = state_37841;
var statearr_37855_37886 = state_37841__$1;
(statearr_37855_37886[(2)] = inst_37816);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37841__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (9))){
var inst_37805 = (state_37841[(7)]);
var inst_37818 = (state_37841[(2)]);
var inst_37819 = (inst_37805 + (1));
var inst_37805__$1 = inst_37819;
var state_37841__$1 = (function (){var statearr_37856 = state_37841;
(statearr_37856[(10)] = inst_37818);

(statearr_37856[(7)] = inst_37805__$1);

return statearr_37856;
})();
var statearr_37857_37887 = state_37841__$1;
(statearr_37857_37887[(2)] = null);

(statearr_37857_37887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (5))){
var inst_37825 = (state_37841[(2)]);
var state_37841__$1 = (function (){var statearr_37858 = state_37841;
(statearr_37858[(11)] = inst_37825);

return statearr_37858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37841__$1,(12),dchan);
} else {
if((state_val_37842 === (14))){
var inst_37827 = (state_37841[(8)]);
var inst_37832 = cljs.core.apply.call(null,f,inst_37827);
var state_37841__$1 = state_37841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37841__$1,(16),out,inst_37832);
} else {
if((state_val_37842 === (16))){
var inst_37834 = (state_37841[(2)]);
var state_37841__$1 = (function (){var statearr_37859 = state_37841;
(statearr_37859[(12)] = inst_37834);

return statearr_37859;
})();
var statearr_37860_37888 = state_37841__$1;
(statearr_37860_37888[(2)] = null);

(statearr_37860_37888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (10))){
var inst_37809 = (state_37841[(2)]);
var inst_37810 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37841__$1 = (function (){var statearr_37861 = state_37841;
(statearr_37861[(13)] = inst_37809);

return statearr_37861;
})();
var statearr_37862_37889 = state_37841__$1;
(statearr_37862_37889[(2)] = inst_37810);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37841__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37842 === (8))){
var inst_37823 = (state_37841[(2)]);
var state_37841__$1 = state_37841;
var statearr_37863_37890 = state_37841__$1;
(statearr_37863_37890[(2)] = inst_37823);

(statearr_37863_37890[(1)] = (5));


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
});})(c__32891__auto___37875,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32833__auto__,c__32891__auto___37875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_37867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37867[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_37867[(1)] = (1));

return statearr_37867;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_37841){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_37841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e37868){if((e37868 instanceof Object)){
var ex__32837__auto__ = e37868;
var statearr_37869_37891 = state_37841;
(statearr_37869_37891[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37892 = state_37841;
state_37841 = G__37892;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_37841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_37841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___37875,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32893__auto__ = (function (){var statearr_37870 = f__32892__auto__.call(null);
(statearr_37870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___37875);

return statearr_37870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___37875,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args37894 = [];
var len__30640__auto___37952 = arguments.length;
var i__30641__auto___37953 = (0);
while(true){
if((i__30641__auto___37953 < len__30640__auto___37952)){
args37894.push((arguments[i__30641__auto___37953]));

var G__37954 = (i__30641__auto___37953 + (1));
i__30641__auto___37953 = G__37954;
continue;
} else {
}
break;
}

var G__37896 = args37894.length;
switch (G__37896) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37894.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32891__auto___37956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___37956,out){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___37956,out){
return (function (state_37928){
var state_val_37929 = (state_37928[(1)]);
if((state_val_37929 === (7))){
var inst_37908 = (state_37928[(7)]);
var inst_37907 = (state_37928[(8)]);
var inst_37907__$1 = (state_37928[(2)]);
var inst_37908__$1 = cljs.core.nth.call(null,inst_37907__$1,(0),null);
var inst_37909 = cljs.core.nth.call(null,inst_37907__$1,(1),null);
var inst_37910 = (inst_37908__$1 == null);
var state_37928__$1 = (function (){var statearr_37930 = state_37928;
(statearr_37930[(9)] = inst_37909);

(statearr_37930[(7)] = inst_37908__$1);

(statearr_37930[(8)] = inst_37907__$1);

return statearr_37930;
})();
if(cljs.core.truth_(inst_37910)){
var statearr_37931_37957 = state_37928__$1;
(statearr_37931_37957[(1)] = (8));

} else {
var statearr_37932_37958 = state_37928__$1;
(statearr_37932_37958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (1))){
var inst_37897 = cljs.core.vec.call(null,chs);
var inst_37898 = inst_37897;
var state_37928__$1 = (function (){var statearr_37933 = state_37928;
(statearr_37933[(10)] = inst_37898);

return statearr_37933;
})();
var statearr_37934_37959 = state_37928__$1;
(statearr_37934_37959[(2)] = null);

(statearr_37934_37959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (4))){
var inst_37898 = (state_37928[(10)]);
var state_37928__$1 = state_37928;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37928__$1,(7),inst_37898);
} else {
if((state_val_37929 === (6))){
var inst_37924 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
var statearr_37935_37960 = state_37928__$1;
(statearr_37935_37960[(2)] = inst_37924);

(statearr_37935_37960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (3))){
var inst_37926 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37928__$1,inst_37926);
} else {
if((state_val_37929 === (2))){
var inst_37898 = (state_37928[(10)]);
var inst_37900 = cljs.core.count.call(null,inst_37898);
var inst_37901 = (inst_37900 > (0));
var state_37928__$1 = state_37928;
if(cljs.core.truth_(inst_37901)){
var statearr_37937_37961 = state_37928__$1;
(statearr_37937_37961[(1)] = (4));

} else {
var statearr_37938_37962 = state_37928__$1;
(statearr_37938_37962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (11))){
var inst_37898 = (state_37928[(10)]);
var inst_37917 = (state_37928[(2)]);
var tmp37936 = inst_37898;
var inst_37898__$1 = tmp37936;
var state_37928__$1 = (function (){var statearr_37939 = state_37928;
(statearr_37939[(10)] = inst_37898__$1);

(statearr_37939[(11)] = inst_37917);

return statearr_37939;
})();
var statearr_37940_37963 = state_37928__$1;
(statearr_37940_37963[(2)] = null);

(statearr_37940_37963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (9))){
var inst_37908 = (state_37928[(7)]);
var state_37928__$1 = state_37928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37928__$1,(11),out,inst_37908);
} else {
if((state_val_37929 === (5))){
var inst_37922 = cljs.core.async.close_BANG_.call(null,out);
var state_37928__$1 = state_37928;
var statearr_37941_37964 = state_37928__$1;
(statearr_37941_37964[(2)] = inst_37922);

(statearr_37941_37964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (10))){
var inst_37920 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
var statearr_37942_37965 = state_37928__$1;
(statearr_37942_37965[(2)] = inst_37920);

(statearr_37942_37965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (8))){
var inst_37909 = (state_37928[(9)]);
var inst_37898 = (state_37928[(10)]);
var inst_37908 = (state_37928[(7)]);
var inst_37907 = (state_37928[(8)]);
var inst_37912 = (function (){var cs = inst_37898;
var vec__37903 = inst_37907;
var v = inst_37908;
var c = inst_37909;
return ((function (cs,vec__37903,v,c,inst_37909,inst_37898,inst_37908,inst_37907,state_val_37929,c__32891__auto___37956,out){
return (function (p1__37893_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37893_SHARP_);
});
;})(cs,vec__37903,v,c,inst_37909,inst_37898,inst_37908,inst_37907,state_val_37929,c__32891__auto___37956,out))
})();
var inst_37913 = cljs.core.filterv.call(null,inst_37912,inst_37898);
var inst_37898__$1 = inst_37913;
var state_37928__$1 = (function (){var statearr_37943 = state_37928;
(statearr_37943[(10)] = inst_37898__$1);

return statearr_37943;
})();
var statearr_37944_37966 = state_37928__$1;
(statearr_37944_37966[(2)] = null);

(statearr_37944_37966[(1)] = (2));


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
});})(c__32891__auto___37956,out))
;
return ((function (switch__32833__auto__,c__32891__auto___37956,out){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_37948 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37948[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_37948[(1)] = (1));

return statearr_37948;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_37928){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_37928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e37949){if((e37949 instanceof Object)){
var ex__32837__auto__ = e37949;
var statearr_37950_37967 = state_37928;
(statearr_37950_37967[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37968 = state_37928;
state_37928 = G__37968;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_37928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_37928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___37956,out))
})();
var state__32893__auto__ = (function (){var statearr_37951 = f__32892__auto__.call(null);
(statearr_37951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___37956);

return statearr_37951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___37956,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args37969 = [];
var len__30640__auto___38018 = arguments.length;
var i__30641__auto___38019 = (0);
while(true){
if((i__30641__auto___38019 < len__30640__auto___38018)){
args37969.push((arguments[i__30641__auto___38019]));

var G__38020 = (i__30641__auto___38019 + (1));
i__30641__auto___38019 = G__38020;
continue;
} else {
}
break;
}

var G__37971 = args37969.length;
switch (G__37971) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37969.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32891__auto___38022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___38022,out){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___38022,out){
return (function (state_37995){
var state_val_37996 = (state_37995[(1)]);
if((state_val_37996 === (7))){
var inst_37977 = (state_37995[(7)]);
var inst_37977__$1 = (state_37995[(2)]);
var inst_37978 = (inst_37977__$1 == null);
var inst_37979 = cljs.core.not.call(null,inst_37978);
var state_37995__$1 = (function (){var statearr_37997 = state_37995;
(statearr_37997[(7)] = inst_37977__$1);

return statearr_37997;
})();
if(inst_37979){
var statearr_37998_38023 = state_37995__$1;
(statearr_37998_38023[(1)] = (8));

} else {
var statearr_37999_38024 = state_37995__$1;
(statearr_37999_38024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (1))){
var inst_37972 = (0);
var state_37995__$1 = (function (){var statearr_38000 = state_37995;
(statearr_38000[(8)] = inst_37972);

return statearr_38000;
})();
var statearr_38001_38025 = state_37995__$1;
(statearr_38001_38025[(2)] = null);

(statearr_38001_38025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (4))){
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37995__$1,(7),ch);
} else {
if((state_val_37996 === (6))){
var inst_37990 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
var statearr_38002_38026 = state_37995__$1;
(statearr_38002_38026[(2)] = inst_37990);

(statearr_38002_38026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (3))){
var inst_37992 = (state_37995[(2)]);
var inst_37993 = cljs.core.async.close_BANG_.call(null,out);
var state_37995__$1 = (function (){var statearr_38003 = state_37995;
(statearr_38003[(9)] = inst_37992);

return statearr_38003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37995__$1,inst_37993);
} else {
if((state_val_37996 === (2))){
var inst_37972 = (state_37995[(8)]);
var inst_37974 = (inst_37972 < n);
var state_37995__$1 = state_37995;
if(cljs.core.truth_(inst_37974)){
var statearr_38004_38027 = state_37995__$1;
(statearr_38004_38027[(1)] = (4));

} else {
var statearr_38005_38028 = state_37995__$1;
(statearr_38005_38028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (11))){
var inst_37972 = (state_37995[(8)]);
var inst_37982 = (state_37995[(2)]);
var inst_37983 = (inst_37972 + (1));
var inst_37972__$1 = inst_37983;
var state_37995__$1 = (function (){var statearr_38006 = state_37995;
(statearr_38006[(10)] = inst_37982);

(statearr_38006[(8)] = inst_37972__$1);

return statearr_38006;
})();
var statearr_38007_38029 = state_37995__$1;
(statearr_38007_38029[(2)] = null);

(statearr_38007_38029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (9))){
var state_37995__$1 = state_37995;
var statearr_38008_38030 = state_37995__$1;
(statearr_38008_38030[(2)] = null);

(statearr_38008_38030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (5))){
var state_37995__$1 = state_37995;
var statearr_38009_38031 = state_37995__$1;
(statearr_38009_38031[(2)] = null);

(statearr_38009_38031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (10))){
var inst_37987 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
var statearr_38010_38032 = state_37995__$1;
(statearr_38010_38032[(2)] = inst_37987);

(statearr_38010_38032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (8))){
var inst_37977 = (state_37995[(7)]);
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37995__$1,(11),out,inst_37977);
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
});})(c__32891__auto___38022,out))
;
return ((function (switch__32833__auto__,c__32891__auto___38022,out){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_38014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38014[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_38014[(1)] = (1));

return statearr_38014;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_37995){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_37995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e38015){if((e38015 instanceof Object)){
var ex__32837__auto__ = e38015;
var statearr_38016_38033 = state_37995;
(statearr_38016_38033[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38034 = state_37995;
state_37995 = G__38034;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_37995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_37995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___38022,out))
})();
var state__32893__auto__ = (function (){var statearr_38017 = f__32892__auto__.call(null);
(statearr_38017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___38022);

return statearr_38017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___38022,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38042 = (function (f,ch,meta38043){
this.f = f;
this.ch = ch;
this.meta38043 = meta38043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38044,meta38043__$1){
var self__ = this;
var _38044__$1 = this;
return (new cljs.core.async.t_cljs$core$async38042(self__.f,self__.ch,meta38043__$1));
});

cljs.core.async.t_cljs$core$async38042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38044){
var self__ = this;
var _38044__$1 = this;
return self__.meta38043;
});

cljs.core.async.t_cljs$core$async38042.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38042.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38042.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38042.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38042.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38045 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38045 = (function (f,ch,meta38043,_,fn1,meta38046){
this.f = f;
this.ch = ch;
this.meta38043 = meta38043;
this._ = _;
this.fn1 = fn1;
this.meta38046 = meta38046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38047,meta38046__$1){
var self__ = this;
var _38047__$1 = this;
return (new cljs.core.async.t_cljs$core$async38045(self__.f,self__.ch,self__.meta38043,self__._,self__.fn1,meta38046__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38047){
var self__ = this;
var _38047__$1 = this;
return self__.meta38046;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38035_SHARP_){
return f1.call(null,(((p1__38035_SHARP_ == null))?null:self__.f.call(null,p1__38035_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38045.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38043","meta38043",1947215301,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38042","cljs.core.async/t_cljs$core$async38042",1188820245,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38046","meta38046",2080457433,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38045";

cljs.core.async.t_cljs$core$async38045.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async38045");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38045 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38045(f__$1,ch__$1,meta38043__$1,___$2,fn1__$1,meta38046){
return (new cljs.core.async.t_cljs$core$async38045(f__$1,ch__$1,meta38043__$1,___$2,fn1__$1,meta38046));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38045(self__.f,self__.ch,self__.meta38043,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29407__auto__ = ret;
if(cljs.core.truth_(and__29407__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29407__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38042.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38042.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38043","meta38043",1947215301,null)], null);
});

cljs.core.async.t_cljs$core$async38042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38042";

cljs.core.async.t_cljs$core$async38042.cljs$lang$ctorPrWriter = (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async38042");
});

cljs.core.async.__GT_t_cljs$core$async38042 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38042(f__$1,ch__$1,meta38043){
return (new cljs.core.async.t_cljs$core$async38042(f__$1,ch__$1,meta38043));
});

}

return (new cljs.core.async.t_cljs$core$async38042(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38051 = (function (f,ch,meta38052){
this.f = f;
this.ch = ch;
this.meta38052 = meta38052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38053,meta38052__$1){
var self__ = this;
var _38053__$1 = this;
return (new cljs.core.async.t_cljs$core$async38051(self__.f,self__.ch,meta38052__$1));
});

cljs.core.async.t_cljs$core$async38051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38053){
var self__ = this;
var _38053__$1 = this;
return self__.meta38052;
});

cljs.core.async.t_cljs$core$async38051.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38051.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38051.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38052","meta38052",304520885,null)], null);
});

cljs.core.async.t_cljs$core$async38051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38051";

cljs.core.async.t_cljs$core$async38051.cljs$lang$ctorPrWriter = (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async38051");
});

cljs.core.async.__GT_t_cljs$core$async38051 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38051(f__$1,ch__$1,meta38052){
return (new cljs.core.async.t_cljs$core$async38051(f__$1,ch__$1,meta38052));
});

}

return (new cljs.core.async.t_cljs$core$async38051(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38057 = (function (p,ch,meta38058){
this.p = p;
this.ch = ch;
this.meta38058 = meta38058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38059,meta38058__$1){
var self__ = this;
var _38059__$1 = this;
return (new cljs.core.async.t_cljs$core$async38057(self__.p,self__.ch,meta38058__$1));
});

cljs.core.async.t_cljs$core$async38057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38059){
var self__ = this;
var _38059__$1 = this;
return self__.meta38058;
});

cljs.core.async.t_cljs$core$async38057.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38057.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38057.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38057.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38058","meta38058",1355619367,null)], null);
});

cljs.core.async.t_cljs$core$async38057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38057";

cljs.core.async.t_cljs$core$async38057.cljs$lang$ctorPrWriter = (function (this__30076__auto__,writer__30077__auto__,opt__30078__auto__){
return cljs.core._write.call(null,writer__30077__auto__,"cljs.core.async/t_cljs$core$async38057");
});

cljs.core.async.__GT_t_cljs$core$async38057 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38057(p__$1,ch__$1,meta38058){
return (new cljs.core.async.t_cljs$core$async38057(p__$1,ch__$1,meta38058));
});

}

return (new cljs.core.async.t_cljs$core$async38057(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args38060 = [];
var len__30640__auto___38104 = arguments.length;
var i__30641__auto___38105 = (0);
while(true){
if((i__30641__auto___38105 < len__30640__auto___38104)){
args38060.push((arguments[i__30641__auto___38105]));

var G__38106 = (i__30641__auto___38105 + (1));
i__30641__auto___38105 = G__38106;
continue;
} else {
}
break;
}

var G__38062 = args38060.length;
switch (G__38062) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38060.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32891__auto___38108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___38108,out){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___38108,out){
return (function (state_38083){
var state_val_38084 = (state_38083[(1)]);
if((state_val_38084 === (7))){
var inst_38079 = (state_38083[(2)]);
var state_38083__$1 = state_38083;
var statearr_38085_38109 = state_38083__$1;
(statearr_38085_38109[(2)] = inst_38079);

(statearr_38085_38109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (1))){
var state_38083__$1 = state_38083;
var statearr_38086_38110 = state_38083__$1;
(statearr_38086_38110[(2)] = null);

(statearr_38086_38110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (4))){
var inst_38065 = (state_38083[(7)]);
var inst_38065__$1 = (state_38083[(2)]);
var inst_38066 = (inst_38065__$1 == null);
var state_38083__$1 = (function (){var statearr_38087 = state_38083;
(statearr_38087[(7)] = inst_38065__$1);

return statearr_38087;
})();
if(cljs.core.truth_(inst_38066)){
var statearr_38088_38111 = state_38083__$1;
(statearr_38088_38111[(1)] = (5));

} else {
var statearr_38089_38112 = state_38083__$1;
(statearr_38089_38112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (6))){
var inst_38065 = (state_38083[(7)]);
var inst_38070 = p.call(null,inst_38065);
var state_38083__$1 = state_38083;
if(cljs.core.truth_(inst_38070)){
var statearr_38090_38113 = state_38083__$1;
(statearr_38090_38113[(1)] = (8));

} else {
var statearr_38091_38114 = state_38083__$1;
(statearr_38091_38114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (3))){
var inst_38081 = (state_38083[(2)]);
var state_38083__$1 = state_38083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38083__$1,inst_38081);
} else {
if((state_val_38084 === (2))){
var state_38083__$1 = state_38083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38083__$1,(4),ch);
} else {
if((state_val_38084 === (11))){
var inst_38073 = (state_38083[(2)]);
var state_38083__$1 = state_38083;
var statearr_38092_38115 = state_38083__$1;
(statearr_38092_38115[(2)] = inst_38073);

(statearr_38092_38115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (9))){
var state_38083__$1 = state_38083;
var statearr_38093_38116 = state_38083__$1;
(statearr_38093_38116[(2)] = null);

(statearr_38093_38116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (5))){
var inst_38068 = cljs.core.async.close_BANG_.call(null,out);
var state_38083__$1 = state_38083;
var statearr_38094_38117 = state_38083__$1;
(statearr_38094_38117[(2)] = inst_38068);

(statearr_38094_38117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (10))){
var inst_38076 = (state_38083[(2)]);
var state_38083__$1 = (function (){var statearr_38095 = state_38083;
(statearr_38095[(8)] = inst_38076);

return statearr_38095;
})();
var statearr_38096_38118 = state_38083__$1;
(statearr_38096_38118[(2)] = null);

(statearr_38096_38118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38084 === (8))){
var inst_38065 = (state_38083[(7)]);
var state_38083__$1 = state_38083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38083__$1,(11),out,inst_38065);
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
});})(c__32891__auto___38108,out))
;
return ((function (switch__32833__auto__,c__32891__auto___38108,out){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_38100 = [null,null,null,null,null,null,null,null,null];
(statearr_38100[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_38100[(1)] = (1));

return statearr_38100;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_38083){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_38083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e38101){if((e38101 instanceof Object)){
var ex__32837__auto__ = e38101;
var statearr_38102_38119 = state_38083;
(statearr_38102_38119[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38120 = state_38083;
state_38083 = G__38120;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_38083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_38083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___38108,out))
})();
var state__32893__auto__ = (function (){var statearr_38103 = f__32892__auto__.call(null);
(statearr_38103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___38108);

return statearr_38103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___38108,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38121 = [];
var len__30640__auto___38124 = arguments.length;
var i__30641__auto___38125 = (0);
while(true){
if((i__30641__auto___38125 < len__30640__auto___38124)){
args38121.push((arguments[i__30641__auto___38125]));

var G__38126 = (i__30641__auto___38125 + (1));
i__30641__auto___38125 = G__38126;
continue;
} else {
}
break;
}

var G__38123 = args38121.length;
switch (G__38123) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38121.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto__){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto__){
return (function (state_38293){
var state_val_38294 = (state_38293[(1)]);
if((state_val_38294 === (7))){
var inst_38289 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38295_38336 = state_38293__$1;
(statearr_38295_38336[(2)] = inst_38289);

(statearr_38295_38336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (20))){
var inst_38259 = (state_38293[(7)]);
var inst_38270 = (state_38293[(2)]);
var inst_38271 = cljs.core.next.call(null,inst_38259);
var inst_38245 = inst_38271;
var inst_38246 = null;
var inst_38247 = (0);
var inst_38248 = (0);
var state_38293__$1 = (function (){var statearr_38296 = state_38293;
(statearr_38296[(8)] = inst_38247);

(statearr_38296[(9)] = inst_38245);

(statearr_38296[(10)] = inst_38248);

(statearr_38296[(11)] = inst_38246);

(statearr_38296[(12)] = inst_38270);

return statearr_38296;
})();
var statearr_38297_38337 = state_38293__$1;
(statearr_38297_38337[(2)] = null);

(statearr_38297_38337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (1))){
var state_38293__$1 = state_38293;
var statearr_38298_38338 = state_38293__$1;
(statearr_38298_38338[(2)] = null);

(statearr_38298_38338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (4))){
var inst_38234 = (state_38293[(13)]);
var inst_38234__$1 = (state_38293[(2)]);
var inst_38235 = (inst_38234__$1 == null);
var state_38293__$1 = (function (){var statearr_38299 = state_38293;
(statearr_38299[(13)] = inst_38234__$1);

return statearr_38299;
})();
if(cljs.core.truth_(inst_38235)){
var statearr_38300_38339 = state_38293__$1;
(statearr_38300_38339[(1)] = (5));

} else {
var statearr_38301_38340 = state_38293__$1;
(statearr_38301_38340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (15))){
var state_38293__$1 = state_38293;
var statearr_38305_38341 = state_38293__$1;
(statearr_38305_38341[(2)] = null);

(statearr_38305_38341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (21))){
var state_38293__$1 = state_38293;
var statearr_38306_38342 = state_38293__$1;
(statearr_38306_38342[(2)] = null);

(statearr_38306_38342[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (13))){
var inst_38247 = (state_38293[(8)]);
var inst_38245 = (state_38293[(9)]);
var inst_38248 = (state_38293[(10)]);
var inst_38246 = (state_38293[(11)]);
var inst_38255 = (state_38293[(2)]);
var inst_38256 = (inst_38248 + (1));
var tmp38302 = inst_38247;
var tmp38303 = inst_38245;
var tmp38304 = inst_38246;
var inst_38245__$1 = tmp38303;
var inst_38246__$1 = tmp38304;
var inst_38247__$1 = tmp38302;
var inst_38248__$1 = inst_38256;
var state_38293__$1 = (function (){var statearr_38307 = state_38293;
(statearr_38307[(8)] = inst_38247__$1);

(statearr_38307[(14)] = inst_38255);

(statearr_38307[(9)] = inst_38245__$1);

(statearr_38307[(10)] = inst_38248__$1);

(statearr_38307[(11)] = inst_38246__$1);

return statearr_38307;
})();
var statearr_38308_38343 = state_38293__$1;
(statearr_38308_38343[(2)] = null);

(statearr_38308_38343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (22))){
var state_38293__$1 = state_38293;
var statearr_38309_38344 = state_38293__$1;
(statearr_38309_38344[(2)] = null);

(statearr_38309_38344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (6))){
var inst_38234 = (state_38293[(13)]);
var inst_38243 = f.call(null,inst_38234);
var inst_38244 = cljs.core.seq.call(null,inst_38243);
var inst_38245 = inst_38244;
var inst_38246 = null;
var inst_38247 = (0);
var inst_38248 = (0);
var state_38293__$1 = (function (){var statearr_38310 = state_38293;
(statearr_38310[(8)] = inst_38247);

(statearr_38310[(9)] = inst_38245);

(statearr_38310[(10)] = inst_38248);

(statearr_38310[(11)] = inst_38246);

return statearr_38310;
})();
var statearr_38311_38345 = state_38293__$1;
(statearr_38311_38345[(2)] = null);

(statearr_38311_38345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (17))){
var inst_38259 = (state_38293[(7)]);
var inst_38263 = cljs.core.chunk_first.call(null,inst_38259);
var inst_38264 = cljs.core.chunk_rest.call(null,inst_38259);
var inst_38265 = cljs.core.count.call(null,inst_38263);
var inst_38245 = inst_38264;
var inst_38246 = inst_38263;
var inst_38247 = inst_38265;
var inst_38248 = (0);
var state_38293__$1 = (function (){var statearr_38312 = state_38293;
(statearr_38312[(8)] = inst_38247);

(statearr_38312[(9)] = inst_38245);

(statearr_38312[(10)] = inst_38248);

(statearr_38312[(11)] = inst_38246);

return statearr_38312;
})();
var statearr_38313_38346 = state_38293__$1;
(statearr_38313_38346[(2)] = null);

(statearr_38313_38346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (3))){
var inst_38291 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38293__$1,inst_38291);
} else {
if((state_val_38294 === (12))){
var inst_38279 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38314_38347 = state_38293__$1;
(statearr_38314_38347[(2)] = inst_38279);

(statearr_38314_38347[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (2))){
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38293__$1,(4),in$);
} else {
if((state_val_38294 === (23))){
var inst_38287 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38315_38348 = state_38293__$1;
(statearr_38315_38348[(2)] = inst_38287);

(statearr_38315_38348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (19))){
var inst_38274 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38316_38349 = state_38293__$1;
(statearr_38316_38349[(2)] = inst_38274);

(statearr_38316_38349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (11))){
var inst_38245 = (state_38293[(9)]);
var inst_38259 = (state_38293[(7)]);
var inst_38259__$1 = cljs.core.seq.call(null,inst_38245);
var state_38293__$1 = (function (){var statearr_38317 = state_38293;
(statearr_38317[(7)] = inst_38259__$1);

return statearr_38317;
})();
if(inst_38259__$1){
var statearr_38318_38350 = state_38293__$1;
(statearr_38318_38350[(1)] = (14));

} else {
var statearr_38319_38351 = state_38293__$1;
(statearr_38319_38351[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (9))){
var inst_38281 = (state_38293[(2)]);
var inst_38282 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38293__$1 = (function (){var statearr_38320 = state_38293;
(statearr_38320[(15)] = inst_38281);

return statearr_38320;
})();
if(cljs.core.truth_(inst_38282)){
var statearr_38321_38352 = state_38293__$1;
(statearr_38321_38352[(1)] = (21));

} else {
var statearr_38322_38353 = state_38293__$1;
(statearr_38322_38353[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (5))){
var inst_38237 = cljs.core.async.close_BANG_.call(null,out);
var state_38293__$1 = state_38293;
var statearr_38323_38354 = state_38293__$1;
(statearr_38323_38354[(2)] = inst_38237);

(statearr_38323_38354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (14))){
var inst_38259 = (state_38293[(7)]);
var inst_38261 = cljs.core.chunked_seq_QMARK_.call(null,inst_38259);
var state_38293__$1 = state_38293;
if(inst_38261){
var statearr_38324_38355 = state_38293__$1;
(statearr_38324_38355[(1)] = (17));

} else {
var statearr_38325_38356 = state_38293__$1;
(statearr_38325_38356[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (16))){
var inst_38277 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38326_38357 = state_38293__$1;
(statearr_38326_38357[(2)] = inst_38277);

(statearr_38326_38357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (10))){
var inst_38248 = (state_38293[(10)]);
var inst_38246 = (state_38293[(11)]);
var inst_38253 = cljs.core._nth.call(null,inst_38246,inst_38248);
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38293__$1,(13),out,inst_38253);
} else {
if((state_val_38294 === (18))){
var inst_38259 = (state_38293[(7)]);
var inst_38268 = cljs.core.first.call(null,inst_38259);
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38293__$1,(20),out,inst_38268);
} else {
if((state_val_38294 === (8))){
var inst_38247 = (state_38293[(8)]);
var inst_38248 = (state_38293[(10)]);
var inst_38250 = (inst_38248 < inst_38247);
var inst_38251 = inst_38250;
var state_38293__$1 = state_38293;
if(cljs.core.truth_(inst_38251)){
var statearr_38327_38358 = state_38293__$1;
(statearr_38327_38358[(1)] = (10));

} else {
var statearr_38328_38359 = state_38293__$1;
(statearr_38328_38359[(1)] = (11));

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
}
}
}
}
}
}
});})(c__32891__auto__))
;
return ((function (switch__32833__auto__,c__32891__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32834__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32834__auto____0 = (function (){
var statearr_38332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38332[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32834__auto__);

(statearr_38332[(1)] = (1));

return statearr_38332;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32834__auto____1 = (function (state_38293){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_38293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e38333){if((e38333 instanceof Object)){
var ex__32837__auto__ = e38333;
var statearr_38334_38360 = state_38293;
(statearr_38334_38360[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38361 = state_38293;
state_38293 = G__38361;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32834__auto__ = function(state_38293){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32834__auto____1.call(this,state_38293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32834__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32834__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto__))
})();
var state__32893__auto__ = (function (){var statearr_38335 = f__32892__auto__.call(null);
(statearr_38335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto__);

return statearr_38335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto__))
);

return c__32891__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38362 = [];
var len__30640__auto___38365 = arguments.length;
var i__30641__auto___38366 = (0);
while(true){
if((i__30641__auto___38366 < len__30640__auto___38365)){
args38362.push((arguments[i__30641__auto___38366]));

var G__38367 = (i__30641__auto___38366 + (1));
i__30641__auto___38366 = G__38367;
continue;
} else {
}
break;
}

var G__38364 = args38362.length;
switch (G__38364) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38362.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args38369 = [];
var len__30640__auto___38372 = arguments.length;
var i__30641__auto___38373 = (0);
while(true){
if((i__30641__auto___38373 < len__30640__auto___38372)){
args38369.push((arguments[i__30641__auto___38373]));

var G__38374 = (i__30641__auto___38373 + (1));
i__30641__auto___38373 = G__38374;
continue;
} else {
}
break;
}

var G__38371 = args38369.length;
switch (G__38371) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38369.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args38376 = [];
var len__30640__auto___38427 = arguments.length;
var i__30641__auto___38428 = (0);
while(true){
if((i__30641__auto___38428 < len__30640__auto___38427)){
args38376.push((arguments[i__30641__auto___38428]));

var G__38429 = (i__30641__auto___38428 + (1));
i__30641__auto___38428 = G__38429;
continue;
} else {
}
break;
}

var G__38378 = args38376.length;
switch (G__38378) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38376.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32891__auto___38431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___38431,out){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___38431,out){
return (function (state_38402){
var state_val_38403 = (state_38402[(1)]);
if((state_val_38403 === (7))){
var inst_38397 = (state_38402[(2)]);
var state_38402__$1 = state_38402;
var statearr_38404_38432 = state_38402__$1;
(statearr_38404_38432[(2)] = inst_38397);

(statearr_38404_38432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (1))){
var inst_38379 = null;
var state_38402__$1 = (function (){var statearr_38405 = state_38402;
(statearr_38405[(7)] = inst_38379);

return statearr_38405;
})();
var statearr_38406_38433 = state_38402__$1;
(statearr_38406_38433[(2)] = null);

(statearr_38406_38433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (4))){
var inst_38382 = (state_38402[(8)]);
var inst_38382__$1 = (state_38402[(2)]);
var inst_38383 = (inst_38382__$1 == null);
var inst_38384 = cljs.core.not.call(null,inst_38383);
var state_38402__$1 = (function (){var statearr_38407 = state_38402;
(statearr_38407[(8)] = inst_38382__$1);

return statearr_38407;
})();
if(inst_38384){
var statearr_38408_38434 = state_38402__$1;
(statearr_38408_38434[(1)] = (5));

} else {
var statearr_38409_38435 = state_38402__$1;
(statearr_38409_38435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (6))){
var state_38402__$1 = state_38402;
var statearr_38410_38436 = state_38402__$1;
(statearr_38410_38436[(2)] = null);

(statearr_38410_38436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (3))){
var inst_38399 = (state_38402[(2)]);
var inst_38400 = cljs.core.async.close_BANG_.call(null,out);
var state_38402__$1 = (function (){var statearr_38411 = state_38402;
(statearr_38411[(9)] = inst_38399);

return statearr_38411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38402__$1,inst_38400);
} else {
if((state_val_38403 === (2))){
var state_38402__$1 = state_38402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38402__$1,(4),ch);
} else {
if((state_val_38403 === (11))){
var inst_38382 = (state_38402[(8)]);
var inst_38391 = (state_38402[(2)]);
var inst_38379 = inst_38382;
var state_38402__$1 = (function (){var statearr_38412 = state_38402;
(statearr_38412[(7)] = inst_38379);

(statearr_38412[(10)] = inst_38391);

return statearr_38412;
})();
var statearr_38413_38437 = state_38402__$1;
(statearr_38413_38437[(2)] = null);

(statearr_38413_38437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (9))){
var inst_38382 = (state_38402[(8)]);
var state_38402__$1 = state_38402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38402__$1,(11),out,inst_38382);
} else {
if((state_val_38403 === (5))){
var inst_38379 = (state_38402[(7)]);
var inst_38382 = (state_38402[(8)]);
var inst_38386 = cljs.core._EQ_.call(null,inst_38382,inst_38379);
var state_38402__$1 = state_38402;
if(inst_38386){
var statearr_38415_38438 = state_38402__$1;
(statearr_38415_38438[(1)] = (8));

} else {
var statearr_38416_38439 = state_38402__$1;
(statearr_38416_38439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (10))){
var inst_38394 = (state_38402[(2)]);
var state_38402__$1 = state_38402;
var statearr_38417_38440 = state_38402__$1;
(statearr_38417_38440[(2)] = inst_38394);

(statearr_38417_38440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (8))){
var inst_38379 = (state_38402[(7)]);
var tmp38414 = inst_38379;
var inst_38379__$1 = tmp38414;
var state_38402__$1 = (function (){var statearr_38418 = state_38402;
(statearr_38418[(7)] = inst_38379__$1);

return statearr_38418;
})();
var statearr_38419_38441 = state_38402__$1;
(statearr_38419_38441[(2)] = null);

(statearr_38419_38441[(1)] = (2));


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
});})(c__32891__auto___38431,out))
;
return ((function (switch__32833__auto__,c__32891__auto___38431,out){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_38423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38423[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_38423[(1)] = (1));

return statearr_38423;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_38402){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_38402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e38424){if((e38424 instanceof Object)){
var ex__32837__auto__ = e38424;
var statearr_38425_38442 = state_38402;
(statearr_38425_38442[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38443 = state_38402;
state_38402 = G__38443;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_38402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_38402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___38431,out))
})();
var state__32893__auto__ = (function (){var statearr_38426 = f__32892__auto__.call(null);
(statearr_38426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___38431);

return statearr_38426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___38431,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38444 = [];
var len__30640__auto___38514 = arguments.length;
var i__30641__auto___38515 = (0);
while(true){
if((i__30641__auto___38515 < len__30640__auto___38514)){
args38444.push((arguments[i__30641__auto___38515]));

var G__38516 = (i__30641__auto___38515 + (1));
i__30641__auto___38515 = G__38516;
continue;
} else {
}
break;
}

var G__38446 = args38444.length;
switch (G__38446) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38444.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32891__auto___38518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___38518,out){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___38518,out){
return (function (state_38484){
var state_val_38485 = (state_38484[(1)]);
if((state_val_38485 === (7))){
var inst_38480 = (state_38484[(2)]);
var state_38484__$1 = state_38484;
var statearr_38486_38519 = state_38484__$1;
(statearr_38486_38519[(2)] = inst_38480);

(statearr_38486_38519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (1))){
var inst_38447 = (new Array(n));
var inst_38448 = inst_38447;
var inst_38449 = (0);
var state_38484__$1 = (function (){var statearr_38487 = state_38484;
(statearr_38487[(7)] = inst_38448);

(statearr_38487[(8)] = inst_38449);

return statearr_38487;
})();
var statearr_38488_38520 = state_38484__$1;
(statearr_38488_38520[(2)] = null);

(statearr_38488_38520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (4))){
var inst_38452 = (state_38484[(9)]);
var inst_38452__$1 = (state_38484[(2)]);
var inst_38453 = (inst_38452__$1 == null);
var inst_38454 = cljs.core.not.call(null,inst_38453);
var state_38484__$1 = (function (){var statearr_38489 = state_38484;
(statearr_38489[(9)] = inst_38452__$1);

return statearr_38489;
})();
if(inst_38454){
var statearr_38490_38521 = state_38484__$1;
(statearr_38490_38521[(1)] = (5));

} else {
var statearr_38491_38522 = state_38484__$1;
(statearr_38491_38522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (15))){
var inst_38474 = (state_38484[(2)]);
var state_38484__$1 = state_38484;
var statearr_38492_38523 = state_38484__$1;
(statearr_38492_38523[(2)] = inst_38474);

(statearr_38492_38523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (13))){
var state_38484__$1 = state_38484;
var statearr_38493_38524 = state_38484__$1;
(statearr_38493_38524[(2)] = null);

(statearr_38493_38524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (6))){
var inst_38449 = (state_38484[(8)]);
var inst_38470 = (inst_38449 > (0));
var state_38484__$1 = state_38484;
if(cljs.core.truth_(inst_38470)){
var statearr_38494_38525 = state_38484__$1;
(statearr_38494_38525[(1)] = (12));

} else {
var statearr_38495_38526 = state_38484__$1;
(statearr_38495_38526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (3))){
var inst_38482 = (state_38484[(2)]);
var state_38484__$1 = state_38484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38484__$1,inst_38482);
} else {
if((state_val_38485 === (12))){
var inst_38448 = (state_38484[(7)]);
var inst_38472 = cljs.core.vec.call(null,inst_38448);
var state_38484__$1 = state_38484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38484__$1,(15),out,inst_38472);
} else {
if((state_val_38485 === (2))){
var state_38484__$1 = state_38484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38484__$1,(4),ch);
} else {
if((state_val_38485 === (11))){
var inst_38464 = (state_38484[(2)]);
var inst_38465 = (new Array(n));
var inst_38448 = inst_38465;
var inst_38449 = (0);
var state_38484__$1 = (function (){var statearr_38496 = state_38484;
(statearr_38496[(7)] = inst_38448);

(statearr_38496[(8)] = inst_38449);

(statearr_38496[(10)] = inst_38464);

return statearr_38496;
})();
var statearr_38497_38527 = state_38484__$1;
(statearr_38497_38527[(2)] = null);

(statearr_38497_38527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (9))){
var inst_38448 = (state_38484[(7)]);
var inst_38462 = cljs.core.vec.call(null,inst_38448);
var state_38484__$1 = state_38484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38484__$1,(11),out,inst_38462);
} else {
if((state_val_38485 === (5))){
var inst_38452 = (state_38484[(9)]);
var inst_38448 = (state_38484[(7)]);
var inst_38457 = (state_38484[(11)]);
var inst_38449 = (state_38484[(8)]);
var inst_38456 = (inst_38448[inst_38449] = inst_38452);
var inst_38457__$1 = (inst_38449 + (1));
var inst_38458 = (inst_38457__$1 < n);
var state_38484__$1 = (function (){var statearr_38498 = state_38484;
(statearr_38498[(12)] = inst_38456);

(statearr_38498[(11)] = inst_38457__$1);

return statearr_38498;
})();
if(cljs.core.truth_(inst_38458)){
var statearr_38499_38528 = state_38484__$1;
(statearr_38499_38528[(1)] = (8));

} else {
var statearr_38500_38529 = state_38484__$1;
(statearr_38500_38529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (14))){
var inst_38477 = (state_38484[(2)]);
var inst_38478 = cljs.core.async.close_BANG_.call(null,out);
var state_38484__$1 = (function (){var statearr_38502 = state_38484;
(statearr_38502[(13)] = inst_38477);

return statearr_38502;
})();
var statearr_38503_38530 = state_38484__$1;
(statearr_38503_38530[(2)] = inst_38478);

(statearr_38503_38530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (10))){
var inst_38468 = (state_38484[(2)]);
var state_38484__$1 = state_38484;
var statearr_38504_38531 = state_38484__$1;
(statearr_38504_38531[(2)] = inst_38468);

(statearr_38504_38531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38485 === (8))){
var inst_38448 = (state_38484[(7)]);
var inst_38457 = (state_38484[(11)]);
var tmp38501 = inst_38448;
var inst_38448__$1 = tmp38501;
var inst_38449 = inst_38457;
var state_38484__$1 = (function (){var statearr_38505 = state_38484;
(statearr_38505[(7)] = inst_38448__$1);

(statearr_38505[(8)] = inst_38449);

return statearr_38505;
})();
var statearr_38506_38532 = state_38484__$1;
(statearr_38506_38532[(2)] = null);

(statearr_38506_38532[(1)] = (2));


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
});})(c__32891__auto___38518,out))
;
return ((function (switch__32833__auto__,c__32891__auto___38518,out){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_38510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38510[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_38510[(1)] = (1));

return statearr_38510;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_38484){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_38484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e38511){if((e38511 instanceof Object)){
var ex__32837__auto__ = e38511;
var statearr_38512_38533 = state_38484;
(statearr_38512_38533[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38534 = state_38484;
state_38484 = G__38534;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_38484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_38484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___38518,out))
})();
var state__32893__auto__ = (function (){var statearr_38513 = f__32892__auto__.call(null);
(statearr_38513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___38518);

return statearr_38513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___38518,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38535 = [];
var len__30640__auto___38609 = arguments.length;
var i__30641__auto___38610 = (0);
while(true){
if((i__30641__auto___38610 < len__30640__auto___38609)){
args38535.push((arguments[i__30641__auto___38610]));

var G__38611 = (i__30641__auto___38610 + (1));
i__30641__auto___38610 = G__38611;
continue;
} else {
}
break;
}

var G__38537 = args38535.length;
switch (G__38537) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38535.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32891__auto___38613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32891__auto___38613,out){
return (function (){
var f__32892__auto__ = (function (){var switch__32833__auto__ = ((function (c__32891__auto___38613,out){
return (function (state_38579){
var state_val_38580 = (state_38579[(1)]);
if((state_val_38580 === (7))){
var inst_38575 = (state_38579[(2)]);
var state_38579__$1 = state_38579;
var statearr_38581_38614 = state_38579__$1;
(statearr_38581_38614[(2)] = inst_38575);

(statearr_38581_38614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (1))){
var inst_38538 = [];
var inst_38539 = inst_38538;
var inst_38540 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38579__$1 = (function (){var statearr_38582 = state_38579;
(statearr_38582[(7)] = inst_38539);

(statearr_38582[(8)] = inst_38540);

return statearr_38582;
})();
var statearr_38583_38615 = state_38579__$1;
(statearr_38583_38615[(2)] = null);

(statearr_38583_38615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (4))){
var inst_38543 = (state_38579[(9)]);
var inst_38543__$1 = (state_38579[(2)]);
var inst_38544 = (inst_38543__$1 == null);
var inst_38545 = cljs.core.not.call(null,inst_38544);
var state_38579__$1 = (function (){var statearr_38584 = state_38579;
(statearr_38584[(9)] = inst_38543__$1);

return statearr_38584;
})();
if(inst_38545){
var statearr_38585_38616 = state_38579__$1;
(statearr_38585_38616[(1)] = (5));

} else {
var statearr_38586_38617 = state_38579__$1;
(statearr_38586_38617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (15))){
var inst_38569 = (state_38579[(2)]);
var state_38579__$1 = state_38579;
var statearr_38587_38618 = state_38579__$1;
(statearr_38587_38618[(2)] = inst_38569);

(statearr_38587_38618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (13))){
var state_38579__$1 = state_38579;
var statearr_38588_38619 = state_38579__$1;
(statearr_38588_38619[(2)] = null);

(statearr_38588_38619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (6))){
var inst_38539 = (state_38579[(7)]);
var inst_38564 = inst_38539.length;
var inst_38565 = (inst_38564 > (0));
var state_38579__$1 = state_38579;
if(cljs.core.truth_(inst_38565)){
var statearr_38589_38620 = state_38579__$1;
(statearr_38589_38620[(1)] = (12));

} else {
var statearr_38590_38621 = state_38579__$1;
(statearr_38590_38621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (3))){
var inst_38577 = (state_38579[(2)]);
var state_38579__$1 = state_38579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38579__$1,inst_38577);
} else {
if((state_val_38580 === (12))){
var inst_38539 = (state_38579[(7)]);
var inst_38567 = cljs.core.vec.call(null,inst_38539);
var state_38579__$1 = state_38579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38579__$1,(15),out,inst_38567);
} else {
if((state_val_38580 === (2))){
var state_38579__$1 = state_38579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38579__$1,(4),ch);
} else {
if((state_val_38580 === (11))){
var inst_38547 = (state_38579[(10)]);
var inst_38543 = (state_38579[(9)]);
var inst_38557 = (state_38579[(2)]);
var inst_38558 = [];
var inst_38559 = inst_38558.push(inst_38543);
var inst_38539 = inst_38558;
var inst_38540 = inst_38547;
var state_38579__$1 = (function (){var statearr_38591 = state_38579;
(statearr_38591[(11)] = inst_38557);

(statearr_38591[(7)] = inst_38539);

(statearr_38591[(12)] = inst_38559);

(statearr_38591[(8)] = inst_38540);

return statearr_38591;
})();
var statearr_38592_38622 = state_38579__$1;
(statearr_38592_38622[(2)] = null);

(statearr_38592_38622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (9))){
var inst_38539 = (state_38579[(7)]);
var inst_38555 = cljs.core.vec.call(null,inst_38539);
var state_38579__$1 = state_38579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38579__$1,(11),out,inst_38555);
} else {
if((state_val_38580 === (5))){
var inst_38547 = (state_38579[(10)]);
var inst_38543 = (state_38579[(9)]);
var inst_38540 = (state_38579[(8)]);
var inst_38547__$1 = f.call(null,inst_38543);
var inst_38548 = cljs.core._EQ_.call(null,inst_38547__$1,inst_38540);
var inst_38549 = cljs.core.keyword_identical_QMARK_.call(null,inst_38540,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38550 = (inst_38548) || (inst_38549);
var state_38579__$1 = (function (){var statearr_38593 = state_38579;
(statearr_38593[(10)] = inst_38547__$1);

return statearr_38593;
})();
if(cljs.core.truth_(inst_38550)){
var statearr_38594_38623 = state_38579__$1;
(statearr_38594_38623[(1)] = (8));

} else {
var statearr_38595_38624 = state_38579__$1;
(statearr_38595_38624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (14))){
var inst_38572 = (state_38579[(2)]);
var inst_38573 = cljs.core.async.close_BANG_.call(null,out);
var state_38579__$1 = (function (){var statearr_38597 = state_38579;
(statearr_38597[(13)] = inst_38572);

return statearr_38597;
})();
var statearr_38598_38625 = state_38579__$1;
(statearr_38598_38625[(2)] = inst_38573);

(statearr_38598_38625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (10))){
var inst_38562 = (state_38579[(2)]);
var state_38579__$1 = state_38579;
var statearr_38599_38626 = state_38579__$1;
(statearr_38599_38626[(2)] = inst_38562);

(statearr_38599_38626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38580 === (8))){
var inst_38547 = (state_38579[(10)]);
var inst_38539 = (state_38579[(7)]);
var inst_38543 = (state_38579[(9)]);
var inst_38552 = inst_38539.push(inst_38543);
var tmp38596 = inst_38539;
var inst_38539__$1 = tmp38596;
var inst_38540 = inst_38547;
var state_38579__$1 = (function (){var statearr_38600 = state_38579;
(statearr_38600[(14)] = inst_38552);

(statearr_38600[(7)] = inst_38539__$1);

(statearr_38600[(8)] = inst_38540);

return statearr_38600;
})();
var statearr_38601_38627 = state_38579__$1;
(statearr_38601_38627[(2)] = null);

(statearr_38601_38627[(1)] = (2));


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
});})(c__32891__auto___38613,out))
;
return ((function (switch__32833__auto__,c__32891__auto___38613,out){
return (function() {
var cljs$core$async$state_machine__32834__auto__ = null;
var cljs$core$async$state_machine__32834__auto____0 = (function (){
var statearr_38605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38605[(0)] = cljs$core$async$state_machine__32834__auto__);

(statearr_38605[(1)] = (1));

return statearr_38605;
});
var cljs$core$async$state_machine__32834__auto____1 = (function (state_38579){
while(true){
var ret_value__32835__auto__ = (function (){try{while(true){
var result__32836__auto__ = switch__32833__auto__.call(null,state_38579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32836__auto__;
}
break;
}
}catch (e38606){if((e38606 instanceof Object)){
var ex__32837__auto__ = e38606;
var statearr_38607_38628 = state_38579;
(statearr_38607_38628[(5)] = ex__32837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38629 = state_38579;
state_38579 = G__38629;
continue;
} else {
return ret_value__32835__auto__;
}
break;
}
});
cljs$core$async$state_machine__32834__auto__ = function(state_38579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32834__auto____1.call(this,state_38579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32834__auto____0;
cljs$core$async$state_machine__32834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32834__auto____1;
return cljs$core$async$state_machine__32834__auto__;
})()
;})(switch__32833__auto__,c__32891__auto___38613,out))
})();
var state__32893__auto__ = (function (){var statearr_38608 = f__32892__auto__.call(null);
(statearr_38608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32891__auto___38613);

return statearr_38608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32893__auto__);
});})(c__32891__auto___38613,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map