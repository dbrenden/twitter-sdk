// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27350 = [];
var len__20374__auto___27356 = arguments.length;
var i__20375__auto___27357 = (0);
while(true){
if((i__20375__auto___27357 < len__20374__auto___27356)){
args27350.push((arguments[i__20375__auto___27357]));

var G__27358 = (i__20375__auto___27357 + (1));
i__20375__auto___27357 = G__27358;
continue;
} else {
}
break;
}

var G__27352 = args27350.length;
switch (G__27352) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27350.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27353 = (function (f,blockable,meta27354){
this.f = f;
this.blockable = blockable;
this.meta27354 = meta27354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27355,meta27354__$1){
var self__ = this;
var _27355__$1 = this;
return (new cljs.core.async.t_cljs$core$async27353(self__.f,self__.blockable,meta27354__$1));
});

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27355){
var self__ = this;
var _27355__$1 = this;
return self__.meta27354;
});

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27354","meta27354",819625597,null)], null);
});

cljs.core.async.t_cljs$core$async27353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27353";

cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async27353");
});

cljs.core.async.__GT_t_cljs$core$async27353 = (function cljs$core$async$__GT_t_cljs$core$async27353(f__$1,blockable__$1,meta27354){
return (new cljs.core.async.t_cljs$core$async27353(f__$1,blockable__$1,meta27354));
});

}

return (new cljs.core.async.t_cljs$core$async27353(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27362 = [];
var len__20374__auto___27365 = arguments.length;
var i__20375__auto___27366 = (0);
while(true){
if((i__20375__auto___27366 < len__20374__auto___27365)){
args27362.push((arguments[i__20375__auto___27366]));

var G__27367 = (i__20375__auto___27366 + (1));
i__20375__auto___27366 = G__27367;
continue;
} else {
}
break;
}

var G__27364 = args27362.length;
switch (G__27364) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27362.length)].join('')));

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
var args27369 = [];
var len__20374__auto___27372 = arguments.length;
var i__20375__auto___27373 = (0);
while(true){
if((i__20375__auto___27373 < len__20374__auto___27372)){
args27369.push((arguments[i__20375__auto___27373]));

var G__27374 = (i__20375__auto___27373 + (1));
i__20375__auto___27373 = G__27374;
continue;
} else {
}
break;
}

var G__27371 = args27369.length;
switch (G__27371) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27369.length)].join('')));

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
var args27376 = [];
var len__20374__auto___27379 = arguments.length;
var i__20375__auto___27380 = (0);
while(true){
if((i__20375__auto___27380 < len__20374__auto___27379)){
args27376.push((arguments[i__20375__auto___27380]));

var G__27381 = (i__20375__auto___27380 + (1));
i__20375__auto___27380 = G__27381;
continue;
} else {
}
break;
}

var G__27378 = args27376.length;
switch (G__27378) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27376.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27383 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27383);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27383,ret){
return (function (){
return fn1.call(null,val_27383);
});})(val_27383,ret))
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
var args27384 = [];
var len__20374__auto___27387 = arguments.length;
var i__20375__auto___27388 = (0);
while(true){
if((i__20375__auto___27388 < len__20374__auto___27387)){
args27384.push((arguments[i__20375__auto___27388]));

var G__27389 = (i__20375__auto___27388 + (1));
i__20375__auto___27388 = G__27389;
continue;
} else {
}
break;
}

var G__27386 = args27384.length;
switch (G__27386) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27384.length)].join('')));

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
var n__20174__auto___27391 = n;
var x_27392 = (0);
while(true){
if((x_27392 < n__20174__auto___27391)){
(a[x_27392] = (0));

var G__27393 = (x_27392 + (1));
x_27392 = G__27393;
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

var G__27394 = (i + (1));
i = G__27394;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27398 = (function (flag,meta27399){
this.flag = flag;
this.meta27399 = meta27399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27400,meta27399__$1){
var self__ = this;
var _27400__$1 = this;
return (new cljs.core.async.t_cljs$core$async27398(self__.flag,meta27399__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27400){
var self__ = this;
var _27400__$1 = this;
return self__.meta27399;
});})(flag))
;

cljs.core.async.t_cljs$core$async27398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27398.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27399","meta27399",234993923,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27398";

cljs.core.async.t_cljs$core$async27398.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async27398");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27398 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27398(flag__$1,meta27399){
return (new cljs.core.async.t_cljs$core$async27398(flag__$1,meta27399));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27398(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27404 = (function (flag,cb,meta27405){
this.flag = flag;
this.cb = cb;
this.meta27405 = meta27405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27406,meta27405__$1){
var self__ = this;
var _27406__$1 = this;
return (new cljs.core.async.t_cljs$core$async27404(self__.flag,self__.cb,meta27405__$1));
});

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27406){
var self__ = this;
var _27406__$1 = this;
return self__.meta27405;
});

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27405","meta27405",-478933377,null)], null);
});

cljs.core.async.t_cljs$core$async27404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27404";

cljs.core.async.t_cljs$core$async27404.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async27404");
});

cljs.core.async.__GT_t_cljs$core$async27404 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27404(flag__$1,cb__$1,meta27405){
return (new cljs.core.async.t_cljs$core$async27404(flag__$1,cb__$1,meta27405));
});

}

return (new cljs.core.async.t_cljs$core$async27404(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27407_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27407_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27408_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27408_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19153__auto__ = wport;
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27409 = (i + (1));
i = G__27409;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19153__auto__ = ret;
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__19141__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19141__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19141__auto__;
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
var args__20381__auto__ = [];
var len__20374__auto___27415 = arguments.length;
var i__20375__auto___27416 = (0);
while(true){
if((i__20375__auto___27416 < len__20374__auto___27415)){
args__20381__auto__.push((arguments[i__20375__auto___27416]));

var G__27417 = (i__20375__auto___27416 + (1));
i__20375__auto___27416 = G__27417;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((1) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20382__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27412){
var map__27413 = p__27412;
var map__27413__$1 = ((((!((map__27413 == null)))?((((map__27413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27413):map__27413);
var opts = map__27413__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27410){
var G__27411 = cljs.core.first.call(null,seq27410);
var seq27410__$1 = cljs.core.next.call(null,seq27410);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27411,seq27410__$1);
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
var args27418 = [];
var len__20374__auto___27468 = arguments.length;
var i__20375__auto___27469 = (0);
while(true){
if((i__20375__auto___27469 < len__20374__auto___27468)){
args27418.push((arguments[i__20375__auto___27469]));

var G__27470 = (i__20375__auto___27469 + (1));
i__20375__auto___27469 = G__27470;
continue;
} else {
}
break;
}

var G__27420 = args27418.length;
switch (G__27420) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27418.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24464__auto___27472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___27472){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___27472){
return (function (state_27444){
var state_val_27445 = (state_27444[(1)]);
if((state_val_27445 === (7))){
var inst_27440 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
var statearr_27446_27473 = state_27444__$1;
(statearr_27446_27473[(2)] = inst_27440);

(statearr_27446_27473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (1))){
var state_27444__$1 = state_27444;
var statearr_27447_27474 = state_27444__$1;
(statearr_27447_27474[(2)] = null);

(statearr_27447_27474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (4))){
var inst_27423 = (state_27444[(7)]);
var inst_27423__$1 = (state_27444[(2)]);
var inst_27424 = (inst_27423__$1 == null);
var state_27444__$1 = (function (){var statearr_27448 = state_27444;
(statearr_27448[(7)] = inst_27423__$1);

return statearr_27448;
})();
if(cljs.core.truth_(inst_27424)){
var statearr_27449_27475 = state_27444__$1;
(statearr_27449_27475[(1)] = (5));

} else {
var statearr_27450_27476 = state_27444__$1;
(statearr_27450_27476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (13))){
var state_27444__$1 = state_27444;
var statearr_27451_27477 = state_27444__$1;
(statearr_27451_27477[(2)] = null);

(statearr_27451_27477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (6))){
var inst_27423 = (state_27444[(7)]);
var state_27444__$1 = state_27444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27444__$1,(11),to,inst_27423);
} else {
if((state_val_27445 === (3))){
var inst_27442 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27444__$1,inst_27442);
} else {
if((state_val_27445 === (12))){
var state_27444__$1 = state_27444;
var statearr_27452_27478 = state_27444__$1;
(statearr_27452_27478[(2)] = null);

(statearr_27452_27478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (2))){
var state_27444__$1 = state_27444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27444__$1,(4),from);
} else {
if((state_val_27445 === (11))){
var inst_27433 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
if(cljs.core.truth_(inst_27433)){
var statearr_27453_27479 = state_27444__$1;
(statearr_27453_27479[(1)] = (12));

} else {
var statearr_27454_27480 = state_27444__$1;
(statearr_27454_27480[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (9))){
var state_27444__$1 = state_27444;
var statearr_27455_27481 = state_27444__$1;
(statearr_27455_27481[(2)] = null);

(statearr_27455_27481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (5))){
var state_27444__$1 = state_27444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27456_27482 = state_27444__$1;
(statearr_27456_27482[(1)] = (8));

} else {
var statearr_27457_27483 = state_27444__$1;
(statearr_27457_27483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (14))){
var inst_27438 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
var statearr_27458_27484 = state_27444__$1;
(statearr_27458_27484[(2)] = inst_27438);

(statearr_27458_27484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (10))){
var inst_27430 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
var statearr_27459_27485 = state_27444__$1;
(statearr_27459_27485[(2)] = inst_27430);

(statearr_27459_27485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (8))){
var inst_27427 = cljs.core.async.close_BANG_.call(null,to);
var state_27444__$1 = state_27444;
var statearr_27460_27486 = state_27444__$1;
(statearr_27460_27486[(2)] = inst_27427);

(statearr_27460_27486[(1)] = (10));


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
});})(c__24464__auto___27472))
;
return ((function (switch__24406__auto__,c__24464__auto___27472){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_27464 = [null,null,null,null,null,null,null,null];
(statearr_27464[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_27464[(1)] = (1));

return statearr_27464;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_27444){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_27444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e27465){if((e27465 instanceof Object)){
var ex__24410__auto__ = e27465;
var statearr_27466_27487 = state_27444;
(statearr_27466_27487[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27488 = state_27444;
state_27444 = G__27488;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_27444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_27444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___27472))
})();
var state__24466__auto__ = (function (){var statearr_27467 = f__24465__auto__.call(null);
(statearr_27467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___27472);

return statearr_27467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___27472))
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
return (function (p__27676){
var vec__27677 = p__27676;
var v = cljs.core.nth.call(null,vec__27677,(0),null);
var p = cljs.core.nth.call(null,vec__27677,(1),null);
var job = vec__27677;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24464__auto___27863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___27863,res,vec__27677,v,p,job,jobs,results){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___27863,res,vec__27677,v,p,job,jobs,results){
return (function (state_27684){
var state_val_27685 = (state_27684[(1)]);
if((state_val_27685 === (1))){
var state_27684__$1 = state_27684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27684__$1,(2),res,v);
} else {
if((state_val_27685 === (2))){
var inst_27681 = (state_27684[(2)]);
var inst_27682 = cljs.core.async.close_BANG_.call(null,res);
var state_27684__$1 = (function (){var statearr_27686 = state_27684;
(statearr_27686[(7)] = inst_27681);

return statearr_27686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27684__$1,inst_27682);
} else {
return null;
}
}
});})(c__24464__auto___27863,res,vec__27677,v,p,job,jobs,results))
;
return ((function (switch__24406__auto__,c__24464__auto___27863,res,vec__27677,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0 = (function (){
var statearr_27690 = [null,null,null,null,null,null,null,null];
(statearr_27690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__);

(statearr_27690[(1)] = (1));

return statearr_27690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1 = (function (state_27684){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_27684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e27691){if((e27691 instanceof Object)){
var ex__24410__auto__ = e27691;
var statearr_27692_27864 = state_27684;
(statearr_27692_27864[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27865 = state_27684;
state_27684 = G__27865;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = function(state_27684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1.call(this,state_27684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___27863,res,vec__27677,v,p,job,jobs,results))
})();
var state__24466__auto__ = (function (){var statearr_27693 = f__24465__auto__.call(null);
(statearr_27693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___27863);

return statearr_27693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___27863,res,vec__27677,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27694){
var vec__27695 = p__27694;
var v = cljs.core.nth.call(null,vec__27695,(0),null);
var p = cljs.core.nth.call(null,vec__27695,(1),null);
var job = vec__27695;
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
var n__20174__auto___27866 = n;
var __27867 = (0);
while(true){
if((__27867 < n__20174__auto___27866)){
var G__27698_27868 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27698_27868) {
case "compute":
var c__24464__auto___27870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27867,c__24464__auto___27870,G__27698_27868,n__20174__auto___27866,jobs,results,process,async){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (__27867,c__24464__auto___27870,G__27698_27868,n__20174__auto___27866,jobs,results,process,async){
return (function (state_27711){
var state_val_27712 = (state_27711[(1)]);
if((state_val_27712 === (1))){
var state_27711__$1 = state_27711;
var statearr_27713_27871 = state_27711__$1;
(statearr_27713_27871[(2)] = null);

(statearr_27713_27871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (2))){
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27711__$1,(4),jobs);
} else {
if((state_val_27712 === (3))){
var inst_27709 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27711__$1,inst_27709);
} else {
if((state_val_27712 === (4))){
var inst_27701 = (state_27711[(2)]);
var inst_27702 = process.call(null,inst_27701);
var state_27711__$1 = state_27711;
if(cljs.core.truth_(inst_27702)){
var statearr_27714_27872 = state_27711__$1;
(statearr_27714_27872[(1)] = (5));

} else {
var statearr_27715_27873 = state_27711__$1;
(statearr_27715_27873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (5))){
var state_27711__$1 = state_27711;
var statearr_27716_27874 = state_27711__$1;
(statearr_27716_27874[(2)] = null);

(statearr_27716_27874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (6))){
var state_27711__$1 = state_27711;
var statearr_27717_27875 = state_27711__$1;
(statearr_27717_27875[(2)] = null);

(statearr_27717_27875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (7))){
var inst_27707 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
var statearr_27718_27876 = state_27711__$1;
(statearr_27718_27876[(2)] = inst_27707);

(statearr_27718_27876[(1)] = (3));


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
});})(__27867,c__24464__auto___27870,G__27698_27868,n__20174__auto___27866,jobs,results,process,async))
;
return ((function (__27867,switch__24406__auto__,c__24464__auto___27870,G__27698_27868,n__20174__auto___27866,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0 = (function (){
var statearr_27722 = [null,null,null,null,null,null,null];
(statearr_27722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__);

(statearr_27722[(1)] = (1));

return statearr_27722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1 = (function (state_27711){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_27711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e27723){if((e27723 instanceof Object)){
var ex__24410__auto__ = e27723;
var statearr_27724_27877 = state_27711;
(statearr_27724_27877[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27878 = state_27711;
state_27711 = G__27878;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = function(state_27711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1.call(this,state_27711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__;
})()
;})(__27867,switch__24406__auto__,c__24464__auto___27870,G__27698_27868,n__20174__auto___27866,jobs,results,process,async))
})();
var state__24466__auto__ = (function (){var statearr_27725 = f__24465__auto__.call(null);
(statearr_27725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___27870);

return statearr_27725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(__27867,c__24464__auto___27870,G__27698_27868,n__20174__auto___27866,jobs,results,process,async))
);


break;
case "async":
var c__24464__auto___27879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27867,c__24464__auto___27879,G__27698_27868,n__20174__auto___27866,jobs,results,process,async){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (__27867,c__24464__auto___27879,G__27698_27868,n__20174__auto___27866,jobs,results,process,async){
return (function (state_27738){
var state_val_27739 = (state_27738[(1)]);
if((state_val_27739 === (1))){
var state_27738__$1 = state_27738;
var statearr_27740_27880 = state_27738__$1;
(statearr_27740_27880[(2)] = null);

(statearr_27740_27880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (2))){
var state_27738__$1 = state_27738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27738__$1,(4),jobs);
} else {
if((state_val_27739 === (3))){
var inst_27736 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27738__$1,inst_27736);
} else {
if((state_val_27739 === (4))){
var inst_27728 = (state_27738[(2)]);
var inst_27729 = async.call(null,inst_27728);
var state_27738__$1 = state_27738;
if(cljs.core.truth_(inst_27729)){
var statearr_27741_27881 = state_27738__$1;
(statearr_27741_27881[(1)] = (5));

} else {
var statearr_27742_27882 = state_27738__$1;
(statearr_27742_27882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (5))){
var state_27738__$1 = state_27738;
var statearr_27743_27883 = state_27738__$1;
(statearr_27743_27883[(2)] = null);

(statearr_27743_27883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (6))){
var state_27738__$1 = state_27738;
var statearr_27744_27884 = state_27738__$1;
(statearr_27744_27884[(2)] = null);

(statearr_27744_27884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (7))){
var inst_27734 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
var statearr_27745_27885 = state_27738__$1;
(statearr_27745_27885[(2)] = inst_27734);

(statearr_27745_27885[(1)] = (3));


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
});})(__27867,c__24464__auto___27879,G__27698_27868,n__20174__auto___27866,jobs,results,process,async))
;
return ((function (__27867,switch__24406__auto__,c__24464__auto___27879,G__27698_27868,n__20174__auto___27866,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0 = (function (){
var statearr_27749 = [null,null,null,null,null,null,null];
(statearr_27749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__);

(statearr_27749[(1)] = (1));

return statearr_27749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1 = (function (state_27738){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_27738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e27750){if((e27750 instanceof Object)){
var ex__24410__auto__ = e27750;
var statearr_27751_27886 = state_27738;
(statearr_27751_27886[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27887 = state_27738;
state_27738 = G__27887;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = function(state_27738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1.call(this,state_27738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__;
})()
;})(__27867,switch__24406__auto__,c__24464__auto___27879,G__27698_27868,n__20174__auto___27866,jobs,results,process,async))
})();
var state__24466__auto__ = (function (){var statearr_27752 = f__24465__auto__.call(null);
(statearr_27752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___27879);

return statearr_27752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(__27867,c__24464__auto___27879,G__27698_27868,n__20174__auto___27866,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__27888 = (__27867 + (1));
__27867 = G__27888;
continue;
} else {
}
break;
}

var c__24464__auto___27889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___27889,jobs,results,process,async){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___27889,jobs,results,process,async){
return (function (state_27774){
var state_val_27775 = (state_27774[(1)]);
if((state_val_27775 === (1))){
var state_27774__$1 = state_27774;
var statearr_27776_27890 = state_27774__$1;
(statearr_27776_27890[(2)] = null);

(statearr_27776_27890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (2))){
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27774__$1,(4),from);
} else {
if((state_val_27775 === (3))){
var inst_27772 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27774__$1,inst_27772);
} else {
if((state_val_27775 === (4))){
var inst_27755 = (state_27774[(7)]);
var inst_27755__$1 = (state_27774[(2)]);
var inst_27756 = (inst_27755__$1 == null);
var state_27774__$1 = (function (){var statearr_27777 = state_27774;
(statearr_27777[(7)] = inst_27755__$1);

return statearr_27777;
})();
if(cljs.core.truth_(inst_27756)){
var statearr_27778_27891 = state_27774__$1;
(statearr_27778_27891[(1)] = (5));

} else {
var statearr_27779_27892 = state_27774__$1;
(statearr_27779_27892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (5))){
var inst_27758 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27774__$1 = state_27774;
var statearr_27780_27893 = state_27774__$1;
(statearr_27780_27893[(2)] = inst_27758);

(statearr_27780_27893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (6))){
var inst_27760 = (state_27774[(8)]);
var inst_27755 = (state_27774[(7)]);
var inst_27760__$1 = cljs.core.async.chan.call(null,(1));
var inst_27761 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27762 = [inst_27755,inst_27760__$1];
var inst_27763 = (new cljs.core.PersistentVector(null,2,(5),inst_27761,inst_27762,null));
var state_27774__$1 = (function (){var statearr_27781 = state_27774;
(statearr_27781[(8)] = inst_27760__$1);

return statearr_27781;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27774__$1,(8),jobs,inst_27763);
} else {
if((state_val_27775 === (7))){
var inst_27770 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27782_27894 = state_27774__$1;
(statearr_27782_27894[(2)] = inst_27770);

(statearr_27782_27894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (8))){
var inst_27760 = (state_27774[(8)]);
var inst_27765 = (state_27774[(2)]);
var state_27774__$1 = (function (){var statearr_27783 = state_27774;
(statearr_27783[(9)] = inst_27765);

return statearr_27783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27774__$1,(9),results,inst_27760);
} else {
if((state_val_27775 === (9))){
var inst_27767 = (state_27774[(2)]);
var state_27774__$1 = (function (){var statearr_27784 = state_27774;
(statearr_27784[(10)] = inst_27767);

return statearr_27784;
})();
var statearr_27785_27895 = state_27774__$1;
(statearr_27785_27895[(2)] = null);

(statearr_27785_27895[(1)] = (2));


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
});})(c__24464__auto___27889,jobs,results,process,async))
;
return ((function (switch__24406__auto__,c__24464__auto___27889,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0 = (function (){
var statearr_27789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__);

(statearr_27789[(1)] = (1));

return statearr_27789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1 = (function (state_27774){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_27774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e27790){if((e27790 instanceof Object)){
var ex__24410__auto__ = e27790;
var statearr_27791_27896 = state_27774;
(statearr_27791_27896[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27897 = state_27774;
state_27774 = G__27897;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = function(state_27774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1.call(this,state_27774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___27889,jobs,results,process,async))
})();
var state__24466__auto__ = (function (){var statearr_27792 = f__24465__auto__.call(null);
(statearr_27792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___27889);

return statearr_27792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___27889,jobs,results,process,async))
);


var c__24464__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto__,jobs,results,process,async){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto__,jobs,results,process,async){
return (function (state_27830){
var state_val_27831 = (state_27830[(1)]);
if((state_val_27831 === (7))){
var inst_27826 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27832_27898 = state_27830__$1;
(statearr_27832_27898[(2)] = inst_27826);

(statearr_27832_27898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (20))){
var state_27830__$1 = state_27830;
var statearr_27833_27899 = state_27830__$1;
(statearr_27833_27899[(2)] = null);

(statearr_27833_27899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (1))){
var state_27830__$1 = state_27830;
var statearr_27834_27900 = state_27830__$1;
(statearr_27834_27900[(2)] = null);

(statearr_27834_27900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (4))){
var inst_27795 = (state_27830[(7)]);
var inst_27795__$1 = (state_27830[(2)]);
var inst_27796 = (inst_27795__$1 == null);
var state_27830__$1 = (function (){var statearr_27835 = state_27830;
(statearr_27835[(7)] = inst_27795__$1);

return statearr_27835;
})();
if(cljs.core.truth_(inst_27796)){
var statearr_27836_27901 = state_27830__$1;
(statearr_27836_27901[(1)] = (5));

} else {
var statearr_27837_27902 = state_27830__$1;
(statearr_27837_27902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (15))){
var inst_27808 = (state_27830[(8)]);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27830__$1,(18),to,inst_27808);
} else {
if((state_val_27831 === (21))){
var inst_27821 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27838_27903 = state_27830__$1;
(statearr_27838_27903[(2)] = inst_27821);

(statearr_27838_27903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (13))){
var inst_27823 = (state_27830[(2)]);
var state_27830__$1 = (function (){var statearr_27839 = state_27830;
(statearr_27839[(9)] = inst_27823);

return statearr_27839;
})();
var statearr_27840_27904 = state_27830__$1;
(statearr_27840_27904[(2)] = null);

(statearr_27840_27904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (6))){
var inst_27795 = (state_27830[(7)]);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(11),inst_27795);
} else {
if((state_val_27831 === (17))){
var inst_27816 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27816)){
var statearr_27841_27905 = state_27830__$1;
(statearr_27841_27905[(1)] = (19));

} else {
var statearr_27842_27906 = state_27830__$1;
(statearr_27842_27906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (3))){
var inst_27828 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27830__$1,inst_27828);
} else {
if((state_val_27831 === (12))){
var inst_27805 = (state_27830[(10)]);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(14),inst_27805);
} else {
if((state_val_27831 === (2))){
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(4),results);
} else {
if((state_val_27831 === (19))){
var state_27830__$1 = state_27830;
var statearr_27843_27907 = state_27830__$1;
(statearr_27843_27907[(2)] = null);

(statearr_27843_27907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (11))){
var inst_27805 = (state_27830[(2)]);
var state_27830__$1 = (function (){var statearr_27844 = state_27830;
(statearr_27844[(10)] = inst_27805);

return statearr_27844;
})();
var statearr_27845_27908 = state_27830__$1;
(statearr_27845_27908[(2)] = null);

(statearr_27845_27908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (9))){
var state_27830__$1 = state_27830;
var statearr_27846_27909 = state_27830__$1;
(statearr_27846_27909[(2)] = null);

(statearr_27846_27909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (5))){
var state_27830__$1 = state_27830;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27847_27910 = state_27830__$1;
(statearr_27847_27910[(1)] = (8));

} else {
var statearr_27848_27911 = state_27830__$1;
(statearr_27848_27911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (14))){
var inst_27810 = (state_27830[(11)]);
var inst_27808 = (state_27830[(8)]);
var inst_27808__$1 = (state_27830[(2)]);
var inst_27809 = (inst_27808__$1 == null);
var inst_27810__$1 = cljs.core.not.call(null,inst_27809);
var state_27830__$1 = (function (){var statearr_27849 = state_27830;
(statearr_27849[(11)] = inst_27810__$1);

(statearr_27849[(8)] = inst_27808__$1);

return statearr_27849;
})();
if(inst_27810__$1){
var statearr_27850_27912 = state_27830__$1;
(statearr_27850_27912[(1)] = (15));

} else {
var statearr_27851_27913 = state_27830__$1;
(statearr_27851_27913[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (16))){
var inst_27810 = (state_27830[(11)]);
var state_27830__$1 = state_27830;
var statearr_27852_27914 = state_27830__$1;
(statearr_27852_27914[(2)] = inst_27810);

(statearr_27852_27914[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (10))){
var inst_27802 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27853_27915 = state_27830__$1;
(statearr_27853_27915[(2)] = inst_27802);

(statearr_27853_27915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (18))){
var inst_27813 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27854_27916 = state_27830__$1;
(statearr_27854_27916[(2)] = inst_27813);

(statearr_27854_27916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (8))){
var inst_27799 = cljs.core.async.close_BANG_.call(null,to);
var state_27830__$1 = state_27830;
var statearr_27855_27917 = state_27830__$1;
(statearr_27855_27917[(2)] = inst_27799);

(statearr_27855_27917[(1)] = (10));


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
});})(c__24464__auto__,jobs,results,process,async))
;
return ((function (switch__24406__auto__,c__24464__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0 = (function (){
var statearr_27859 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__);

(statearr_27859[(1)] = (1));

return statearr_27859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1 = (function (state_27830){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_27830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e27860){if((e27860 instanceof Object)){
var ex__24410__auto__ = e27860;
var statearr_27861_27918 = state_27830;
(statearr_27861_27918[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27919 = state_27830;
state_27830 = G__27919;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__ = function(state_27830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1.call(this,state_27830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto__,jobs,results,process,async))
})();
var state__24466__auto__ = (function (){var statearr_27862 = f__24465__auto__.call(null);
(statearr_27862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto__);

return statearr_27862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto__,jobs,results,process,async))
);

return c__24464__auto__;
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
var args27920 = [];
var len__20374__auto___27923 = arguments.length;
var i__20375__auto___27924 = (0);
while(true){
if((i__20375__auto___27924 < len__20374__auto___27923)){
args27920.push((arguments[i__20375__auto___27924]));

var G__27925 = (i__20375__auto___27924 + (1));
i__20375__auto___27924 = G__27925;
continue;
} else {
}
break;
}

var G__27922 = args27920.length;
switch (G__27922) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27920.length)].join('')));

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
var args27927 = [];
var len__20374__auto___27930 = arguments.length;
var i__20375__auto___27931 = (0);
while(true){
if((i__20375__auto___27931 < len__20374__auto___27930)){
args27927.push((arguments[i__20375__auto___27931]));

var G__27932 = (i__20375__auto___27931 + (1));
i__20375__auto___27931 = G__27932;
continue;
} else {
}
break;
}

var G__27929 = args27927.length;
switch (G__27929) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27927.length)].join('')));

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
var args27934 = [];
var len__20374__auto___27987 = arguments.length;
var i__20375__auto___27988 = (0);
while(true){
if((i__20375__auto___27988 < len__20374__auto___27987)){
args27934.push((arguments[i__20375__auto___27988]));

var G__27989 = (i__20375__auto___27988 + (1));
i__20375__auto___27988 = G__27989;
continue;
} else {
}
break;
}

var G__27936 = args27934.length;
switch (G__27936) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27934.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24464__auto___27991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___27991,tc,fc){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___27991,tc,fc){
return (function (state_27962){
var state_val_27963 = (state_27962[(1)]);
if((state_val_27963 === (7))){
var inst_27958 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
var statearr_27964_27992 = state_27962__$1;
(statearr_27964_27992[(2)] = inst_27958);

(statearr_27964_27992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (1))){
var state_27962__$1 = state_27962;
var statearr_27965_27993 = state_27962__$1;
(statearr_27965_27993[(2)] = null);

(statearr_27965_27993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (4))){
var inst_27939 = (state_27962[(7)]);
var inst_27939__$1 = (state_27962[(2)]);
var inst_27940 = (inst_27939__$1 == null);
var state_27962__$1 = (function (){var statearr_27966 = state_27962;
(statearr_27966[(7)] = inst_27939__$1);

return statearr_27966;
})();
if(cljs.core.truth_(inst_27940)){
var statearr_27967_27994 = state_27962__$1;
(statearr_27967_27994[(1)] = (5));

} else {
var statearr_27968_27995 = state_27962__$1;
(statearr_27968_27995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (13))){
var state_27962__$1 = state_27962;
var statearr_27969_27996 = state_27962__$1;
(statearr_27969_27996[(2)] = null);

(statearr_27969_27996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (6))){
var inst_27939 = (state_27962[(7)]);
var inst_27945 = p.call(null,inst_27939);
var state_27962__$1 = state_27962;
if(cljs.core.truth_(inst_27945)){
var statearr_27970_27997 = state_27962__$1;
(statearr_27970_27997[(1)] = (9));

} else {
var statearr_27971_27998 = state_27962__$1;
(statearr_27971_27998[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (3))){
var inst_27960 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27962__$1,inst_27960);
} else {
if((state_val_27963 === (12))){
var state_27962__$1 = state_27962;
var statearr_27972_27999 = state_27962__$1;
(statearr_27972_27999[(2)] = null);

(statearr_27972_27999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (2))){
var state_27962__$1 = state_27962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27962__$1,(4),ch);
} else {
if((state_val_27963 === (11))){
var inst_27939 = (state_27962[(7)]);
var inst_27949 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27962__$1,(8),inst_27949,inst_27939);
} else {
if((state_val_27963 === (9))){
var state_27962__$1 = state_27962;
var statearr_27973_28000 = state_27962__$1;
(statearr_27973_28000[(2)] = tc);

(statearr_27973_28000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (5))){
var inst_27942 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27943 = cljs.core.async.close_BANG_.call(null,fc);
var state_27962__$1 = (function (){var statearr_27974 = state_27962;
(statearr_27974[(8)] = inst_27942);

return statearr_27974;
})();
var statearr_27975_28001 = state_27962__$1;
(statearr_27975_28001[(2)] = inst_27943);

(statearr_27975_28001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (14))){
var inst_27956 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
var statearr_27976_28002 = state_27962__$1;
(statearr_27976_28002[(2)] = inst_27956);

(statearr_27976_28002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (10))){
var state_27962__$1 = state_27962;
var statearr_27977_28003 = state_27962__$1;
(statearr_27977_28003[(2)] = fc);

(statearr_27977_28003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (8))){
var inst_27951 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
if(cljs.core.truth_(inst_27951)){
var statearr_27978_28004 = state_27962__$1;
(statearr_27978_28004[(1)] = (12));

} else {
var statearr_27979_28005 = state_27962__$1;
(statearr_27979_28005[(1)] = (13));

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
});})(c__24464__auto___27991,tc,fc))
;
return ((function (switch__24406__auto__,c__24464__auto___27991,tc,fc){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_27983 = [null,null,null,null,null,null,null,null,null];
(statearr_27983[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_27983[(1)] = (1));

return statearr_27983;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_27962){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_27962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e27984){if((e27984 instanceof Object)){
var ex__24410__auto__ = e27984;
var statearr_27985_28006 = state_27962;
(statearr_27985_28006[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28007 = state_27962;
state_27962 = G__28007;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_27962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_27962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___27991,tc,fc))
})();
var state__24466__auto__ = (function (){var statearr_27986 = f__24465__auto__.call(null);
(statearr_27986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___27991);

return statearr_27986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___27991,tc,fc))
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
var c__24464__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto__){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto__){
return (function (state_28071){
var state_val_28072 = (state_28071[(1)]);
if((state_val_28072 === (7))){
var inst_28067 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28073_28094 = state_28071__$1;
(statearr_28073_28094[(2)] = inst_28067);

(statearr_28073_28094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (1))){
var inst_28051 = init;
var state_28071__$1 = (function (){var statearr_28074 = state_28071;
(statearr_28074[(7)] = inst_28051);

return statearr_28074;
})();
var statearr_28075_28095 = state_28071__$1;
(statearr_28075_28095[(2)] = null);

(statearr_28075_28095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (4))){
var inst_28054 = (state_28071[(8)]);
var inst_28054__$1 = (state_28071[(2)]);
var inst_28055 = (inst_28054__$1 == null);
var state_28071__$1 = (function (){var statearr_28076 = state_28071;
(statearr_28076[(8)] = inst_28054__$1);

return statearr_28076;
})();
if(cljs.core.truth_(inst_28055)){
var statearr_28077_28096 = state_28071__$1;
(statearr_28077_28096[(1)] = (5));

} else {
var statearr_28078_28097 = state_28071__$1;
(statearr_28078_28097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (6))){
var inst_28054 = (state_28071[(8)]);
var inst_28051 = (state_28071[(7)]);
var inst_28058 = (state_28071[(9)]);
var inst_28058__$1 = f.call(null,inst_28051,inst_28054);
var inst_28059 = cljs.core.reduced_QMARK_.call(null,inst_28058__$1);
var state_28071__$1 = (function (){var statearr_28079 = state_28071;
(statearr_28079[(9)] = inst_28058__$1);

return statearr_28079;
})();
if(inst_28059){
var statearr_28080_28098 = state_28071__$1;
(statearr_28080_28098[(1)] = (8));

} else {
var statearr_28081_28099 = state_28071__$1;
(statearr_28081_28099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (3))){
var inst_28069 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28071__$1,inst_28069);
} else {
if((state_val_28072 === (2))){
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28071__$1,(4),ch);
} else {
if((state_val_28072 === (9))){
var inst_28058 = (state_28071[(9)]);
var inst_28051 = inst_28058;
var state_28071__$1 = (function (){var statearr_28082 = state_28071;
(statearr_28082[(7)] = inst_28051);

return statearr_28082;
})();
var statearr_28083_28100 = state_28071__$1;
(statearr_28083_28100[(2)] = null);

(statearr_28083_28100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (5))){
var inst_28051 = (state_28071[(7)]);
var state_28071__$1 = state_28071;
var statearr_28084_28101 = state_28071__$1;
(statearr_28084_28101[(2)] = inst_28051);

(statearr_28084_28101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (10))){
var inst_28065 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28085_28102 = state_28071__$1;
(statearr_28085_28102[(2)] = inst_28065);

(statearr_28085_28102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (8))){
var inst_28058 = (state_28071[(9)]);
var inst_28061 = cljs.core.deref.call(null,inst_28058);
var state_28071__$1 = state_28071;
var statearr_28086_28103 = state_28071__$1;
(statearr_28086_28103[(2)] = inst_28061);

(statearr_28086_28103[(1)] = (10));


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
});})(c__24464__auto__))
;
return ((function (switch__24406__auto__,c__24464__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24407__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24407__auto____0 = (function (){
var statearr_28090 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28090[(0)] = cljs$core$async$reduce_$_state_machine__24407__auto__);

(statearr_28090[(1)] = (1));

return statearr_28090;
});
var cljs$core$async$reduce_$_state_machine__24407__auto____1 = (function (state_28071){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_28071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e28091){if((e28091 instanceof Object)){
var ex__24410__auto__ = e28091;
var statearr_28092_28104 = state_28071;
(statearr_28092_28104[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28105 = state_28071;
state_28071 = G__28105;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24407__auto__ = function(state_28071){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24407__auto____1.call(this,state_28071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24407__auto____0;
cljs$core$async$reduce_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24407__auto____1;
return cljs$core$async$reduce_$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto__))
})();
var state__24466__auto__ = (function (){var statearr_28093 = f__24465__auto__.call(null);
(statearr_28093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto__);

return statearr_28093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto__))
);

return c__24464__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24464__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto__,f__$1){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto__,f__$1){
return (function (state_28125){
var state_val_28126 = (state_28125[(1)]);
if((state_val_28126 === (1))){
var inst_28120 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28125__$1,(2),inst_28120);
} else {
if((state_val_28126 === (2))){
var inst_28122 = (state_28125[(2)]);
var inst_28123 = f__$1.call(null,inst_28122);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28125__$1,inst_28123);
} else {
return null;
}
}
});})(c__24464__auto__,f__$1))
;
return ((function (switch__24406__auto__,c__24464__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24407__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24407__auto____0 = (function (){
var statearr_28130 = [null,null,null,null,null,null,null];
(statearr_28130[(0)] = cljs$core$async$transduce_$_state_machine__24407__auto__);

(statearr_28130[(1)] = (1));

return statearr_28130;
});
var cljs$core$async$transduce_$_state_machine__24407__auto____1 = (function (state_28125){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_28125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e28131){if((e28131 instanceof Object)){
var ex__24410__auto__ = e28131;
var statearr_28132_28134 = state_28125;
(statearr_28132_28134[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28135 = state_28125;
state_28125 = G__28135;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24407__auto__ = function(state_28125){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24407__auto____1.call(this,state_28125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24407__auto____0;
cljs$core$async$transduce_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24407__auto____1;
return cljs$core$async$transduce_$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto__,f__$1))
})();
var state__24466__auto__ = (function (){var statearr_28133 = f__24465__auto__.call(null);
(statearr_28133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto__);

return statearr_28133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto__,f__$1))
);

return c__24464__auto__;
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
var args28136 = [];
var len__20374__auto___28188 = arguments.length;
var i__20375__auto___28189 = (0);
while(true){
if((i__20375__auto___28189 < len__20374__auto___28188)){
args28136.push((arguments[i__20375__auto___28189]));

var G__28190 = (i__20375__auto___28189 + (1));
i__20375__auto___28189 = G__28190;
continue;
} else {
}
break;
}

var G__28138 = args28136.length;
switch (G__28138) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28136.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24464__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto__){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto__){
return (function (state_28163){
var state_val_28164 = (state_28163[(1)]);
if((state_val_28164 === (7))){
var inst_28145 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28165_28192 = state_28163__$1;
(statearr_28165_28192[(2)] = inst_28145);

(statearr_28165_28192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (1))){
var inst_28139 = cljs.core.seq.call(null,coll);
var inst_28140 = inst_28139;
var state_28163__$1 = (function (){var statearr_28166 = state_28163;
(statearr_28166[(7)] = inst_28140);

return statearr_28166;
})();
var statearr_28167_28193 = state_28163__$1;
(statearr_28167_28193[(2)] = null);

(statearr_28167_28193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (4))){
var inst_28140 = (state_28163[(7)]);
var inst_28143 = cljs.core.first.call(null,inst_28140);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28163__$1,(7),ch,inst_28143);
} else {
if((state_val_28164 === (13))){
var inst_28157 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28168_28194 = state_28163__$1;
(statearr_28168_28194[(2)] = inst_28157);

(statearr_28168_28194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (6))){
var inst_28148 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28148)){
var statearr_28169_28195 = state_28163__$1;
(statearr_28169_28195[(1)] = (8));

} else {
var statearr_28170_28196 = state_28163__$1;
(statearr_28170_28196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (3))){
var inst_28161 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28163__$1,inst_28161);
} else {
if((state_val_28164 === (12))){
var state_28163__$1 = state_28163;
var statearr_28171_28197 = state_28163__$1;
(statearr_28171_28197[(2)] = null);

(statearr_28171_28197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (2))){
var inst_28140 = (state_28163[(7)]);
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28140)){
var statearr_28172_28198 = state_28163__$1;
(statearr_28172_28198[(1)] = (4));

} else {
var statearr_28173_28199 = state_28163__$1;
(statearr_28173_28199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (11))){
var inst_28154 = cljs.core.async.close_BANG_.call(null,ch);
var state_28163__$1 = state_28163;
var statearr_28174_28200 = state_28163__$1;
(statearr_28174_28200[(2)] = inst_28154);

(statearr_28174_28200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (9))){
var state_28163__$1 = state_28163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28175_28201 = state_28163__$1;
(statearr_28175_28201[(1)] = (11));

} else {
var statearr_28176_28202 = state_28163__$1;
(statearr_28176_28202[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (5))){
var inst_28140 = (state_28163[(7)]);
var state_28163__$1 = state_28163;
var statearr_28177_28203 = state_28163__$1;
(statearr_28177_28203[(2)] = inst_28140);

(statearr_28177_28203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (10))){
var inst_28159 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28178_28204 = state_28163__$1;
(statearr_28178_28204[(2)] = inst_28159);

(statearr_28178_28204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (8))){
var inst_28140 = (state_28163[(7)]);
var inst_28150 = cljs.core.next.call(null,inst_28140);
var inst_28140__$1 = inst_28150;
var state_28163__$1 = (function (){var statearr_28179 = state_28163;
(statearr_28179[(7)] = inst_28140__$1);

return statearr_28179;
})();
var statearr_28180_28205 = state_28163__$1;
(statearr_28180_28205[(2)] = null);

(statearr_28180_28205[(1)] = (2));


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
});})(c__24464__auto__))
;
return ((function (switch__24406__auto__,c__24464__auto__){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_28184 = [null,null,null,null,null,null,null,null];
(statearr_28184[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_28184[(1)] = (1));

return statearr_28184;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_28163){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_28163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e28185){if((e28185 instanceof Object)){
var ex__24410__auto__ = e28185;
var statearr_28186_28206 = state_28163;
(statearr_28186_28206[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28207 = state_28163;
state_28163 = G__28207;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_28163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_28163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto__))
})();
var state__24466__auto__ = (function (){var statearr_28187 = f__24465__auto__.call(null);
(statearr_28187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto__);

return statearr_28187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto__))
);

return c__24464__auto__;
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
var x__19871__auto__ = (((_ == null))?null:_);
var m__19872__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,_);
} else {
var m__19872__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,_);
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
var x__19871__auto__ = (((m == null))?null:m);
var m__19872__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19872__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19871__auto__ = (((m == null))?null:m);
var m__19872__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,m,ch);
} else {
var m__19872__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,m,ch);
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
var x__19871__auto__ = (((m == null))?null:m);
var m__19872__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,m);
} else {
var m__19872__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28433 = (function (ch,cs,meta28434){
this.ch = ch;
this.cs = cs;
this.meta28434 = meta28434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28435,meta28434__$1){
var self__ = this;
var _28435__$1 = this;
return (new cljs.core.async.t_cljs$core$async28433(self__.ch,self__.cs,meta28434__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28435){
var self__ = this;
var _28435__$1 = this;
return self__.meta28434;
});})(cs))
;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28433.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28434","meta28434",58064888,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28433";

cljs.core.async.t_cljs$core$async28433.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async28433");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28433 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28433(ch__$1,cs__$1,meta28434){
return (new cljs.core.async.t_cljs$core$async28433(ch__$1,cs__$1,meta28434));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28433(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24464__auto___28658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___28658,cs,m,dchan,dctr,done){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___28658,cs,m,dchan,dctr,done){
return (function (state_28570){
var state_val_28571 = (state_28570[(1)]);
if((state_val_28571 === (7))){
var inst_28566 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28572_28659 = state_28570__$1;
(statearr_28572_28659[(2)] = inst_28566);

(statearr_28572_28659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (20))){
var inst_28469 = (state_28570[(7)]);
var inst_28481 = cljs.core.first.call(null,inst_28469);
var inst_28482 = cljs.core.nth.call(null,inst_28481,(0),null);
var inst_28483 = cljs.core.nth.call(null,inst_28481,(1),null);
var state_28570__$1 = (function (){var statearr_28573 = state_28570;
(statearr_28573[(8)] = inst_28482);

return statearr_28573;
})();
if(cljs.core.truth_(inst_28483)){
var statearr_28574_28660 = state_28570__$1;
(statearr_28574_28660[(1)] = (22));

} else {
var statearr_28575_28661 = state_28570__$1;
(statearr_28575_28661[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (27))){
var inst_28518 = (state_28570[(9)]);
var inst_28438 = (state_28570[(10)]);
var inst_28511 = (state_28570[(11)]);
var inst_28513 = (state_28570[(12)]);
var inst_28518__$1 = cljs.core._nth.call(null,inst_28511,inst_28513);
var inst_28519 = cljs.core.async.put_BANG_.call(null,inst_28518__$1,inst_28438,done);
var state_28570__$1 = (function (){var statearr_28576 = state_28570;
(statearr_28576[(9)] = inst_28518__$1);

return statearr_28576;
})();
if(cljs.core.truth_(inst_28519)){
var statearr_28577_28662 = state_28570__$1;
(statearr_28577_28662[(1)] = (30));

} else {
var statearr_28578_28663 = state_28570__$1;
(statearr_28578_28663[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (1))){
var state_28570__$1 = state_28570;
var statearr_28579_28664 = state_28570__$1;
(statearr_28579_28664[(2)] = null);

(statearr_28579_28664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (24))){
var inst_28469 = (state_28570[(7)]);
var inst_28488 = (state_28570[(2)]);
var inst_28489 = cljs.core.next.call(null,inst_28469);
var inst_28447 = inst_28489;
var inst_28448 = null;
var inst_28449 = (0);
var inst_28450 = (0);
var state_28570__$1 = (function (){var statearr_28580 = state_28570;
(statearr_28580[(13)] = inst_28488);

(statearr_28580[(14)] = inst_28450);

(statearr_28580[(15)] = inst_28448);

(statearr_28580[(16)] = inst_28447);

(statearr_28580[(17)] = inst_28449);

return statearr_28580;
})();
var statearr_28581_28665 = state_28570__$1;
(statearr_28581_28665[(2)] = null);

(statearr_28581_28665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (39))){
var state_28570__$1 = state_28570;
var statearr_28585_28666 = state_28570__$1;
(statearr_28585_28666[(2)] = null);

(statearr_28585_28666[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (4))){
var inst_28438 = (state_28570[(10)]);
var inst_28438__$1 = (state_28570[(2)]);
var inst_28439 = (inst_28438__$1 == null);
var state_28570__$1 = (function (){var statearr_28586 = state_28570;
(statearr_28586[(10)] = inst_28438__$1);

return statearr_28586;
})();
if(cljs.core.truth_(inst_28439)){
var statearr_28587_28667 = state_28570__$1;
(statearr_28587_28667[(1)] = (5));

} else {
var statearr_28588_28668 = state_28570__$1;
(statearr_28588_28668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (15))){
var inst_28450 = (state_28570[(14)]);
var inst_28448 = (state_28570[(15)]);
var inst_28447 = (state_28570[(16)]);
var inst_28449 = (state_28570[(17)]);
var inst_28465 = (state_28570[(2)]);
var inst_28466 = (inst_28450 + (1));
var tmp28582 = inst_28448;
var tmp28583 = inst_28447;
var tmp28584 = inst_28449;
var inst_28447__$1 = tmp28583;
var inst_28448__$1 = tmp28582;
var inst_28449__$1 = tmp28584;
var inst_28450__$1 = inst_28466;
var state_28570__$1 = (function (){var statearr_28589 = state_28570;
(statearr_28589[(14)] = inst_28450__$1);

(statearr_28589[(18)] = inst_28465);

(statearr_28589[(15)] = inst_28448__$1);

(statearr_28589[(16)] = inst_28447__$1);

(statearr_28589[(17)] = inst_28449__$1);

return statearr_28589;
})();
var statearr_28590_28669 = state_28570__$1;
(statearr_28590_28669[(2)] = null);

(statearr_28590_28669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (21))){
var inst_28492 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28594_28670 = state_28570__$1;
(statearr_28594_28670[(2)] = inst_28492);

(statearr_28594_28670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (31))){
var inst_28518 = (state_28570[(9)]);
var inst_28522 = done.call(null,null);
var inst_28523 = cljs.core.async.untap_STAR_.call(null,m,inst_28518);
var state_28570__$1 = (function (){var statearr_28595 = state_28570;
(statearr_28595[(19)] = inst_28522);

return statearr_28595;
})();
var statearr_28596_28671 = state_28570__$1;
(statearr_28596_28671[(2)] = inst_28523);

(statearr_28596_28671[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (32))){
var inst_28512 = (state_28570[(20)]);
var inst_28510 = (state_28570[(21)]);
var inst_28511 = (state_28570[(11)]);
var inst_28513 = (state_28570[(12)]);
var inst_28525 = (state_28570[(2)]);
var inst_28526 = (inst_28513 + (1));
var tmp28591 = inst_28512;
var tmp28592 = inst_28510;
var tmp28593 = inst_28511;
var inst_28510__$1 = tmp28592;
var inst_28511__$1 = tmp28593;
var inst_28512__$1 = tmp28591;
var inst_28513__$1 = inst_28526;
var state_28570__$1 = (function (){var statearr_28597 = state_28570;
(statearr_28597[(20)] = inst_28512__$1);

(statearr_28597[(21)] = inst_28510__$1);

(statearr_28597[(22)] = inst_28525);

(statearr_28597[(11)] = inst_28511__$1);

(statearr_28597[(12)] = inst_28513__$1);

return statearr_28597;
})();
var statearr_28598_28672 = state_28570__$1;
(statearr_28598_28672[(2)] = null);

(statearr_28598_28672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (40))){
var inst_28538 = (state_28570[(23)]);
var inst_28542 = done.call(null,null);
var inst_28543 = cljs.core.async.untap_STAR_.call(null,m,inst_28538);
var state_28570__$1 = (function (){var statearr_28599 = state_28570;
(statearr_28599[(24)] = inst_28542);

return statearr_28599;
})();
var statearr_28600_28673 = state_28570__$1;
(statearr_28600_28673[(2)] = inst_28543);

(statearr_28600_28673[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (33))){
var inst_28529 = (state_28570[(25)]);
var inst_28531 = cljs.core.chunked_seq_QMARK_.call(null,inst_28529);
var state_28570__$1 = state_28570;
if(inst_28531){
var statearr_28601_28674 = state_28570__$1;
(statearr_28601_28674[(1)] = (36));

} else {
var statearr_28602_28675 = state_28570__$1;
(statearr_28602_28675[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (13))){
var inst_28459 = (state_28570[(26)]);
var inst_28462 = cljs.core.async.close_BANG_.call(null,inst_28459);
var state_28570__$1 = state_28570;
var statearr_28603_28676 = state_28570__$1;
(statearr_28603_28676[(2)] = inst_28462);

(statearr_28603_28676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (22))){
var inst_28482 = (state_28570[(8)]);
var inst_28485 = cljs.core.async.close_BANG_.call(null,inst_28482);
var state_28570__$1 = state_28570;
var statearr_28604_28677 = state_28570__$1;
(statearr_28604_28677[(2)] = inst_28485);

(statearr_28604_28677[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (36))){
var inst_28529 = (state_28570[(25)]);
var inst_28533 = cljs.core.chunk_first.call(null,inst_28529);
var inst_28534 = cljs.core.chunk_rest.call(null,inst_28529);
var inst_28535 = cljs.core.count.call(null,inst_28533);
var inst_28510 = inst_28534;
var inst_28511 = inst_28533;
var inst_28512 = inst_28535;
var inst_28513 = (0);
var state_28570__$1 = (function (){var statearr_28605 = state_28570;
(statearr_28605[(20)] = inst_28512);

(statearr_28605[(21)] = inst_28510);

(statearr_28605[(11)] = inst_28511);

(statearr_28605[(12)] = inst_28513);

return statearr_28605;
})();
var statearr_28606_28678 = state_28570__$1;
(statearr_28606_28678[(2)] = null);

(statearr_28606_28678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (41))){
var inst_28529 = (state_28570[(25)]);
var inst_28545 = (state_28570[(2)]);
var inst_28546 = cljs.core.next.call(null,inst_28529);
var inst_28510 = inst_28546;
var inst_28511 = null;
var inst_28512 = (0);
var inst_28513 = (0);
var state_28570__$1 = (function (){var statearr_28607 = state_28570;
(statearr_28607[(27)] = inst_28545);

(statearr_28607[(20)] = inst_28512);

(statearr_28607[(21)] = inst_28510);

(statearr_28607[(11)] = inst_28511);

(statearr_28607[(12)] = inst_28513);

return statearr_28607;
})();
var statearr_28608_28679 = state_28570__$1;
(statearr_28608_28679[(2)] = null);

(statearr_28608_28679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (43))){
var state_28570__$1 = state_28570;
var statearr_28609_28680 = state_28570__$1;
(statearr_28609_28680[(2)] = null);

(statearr_28609_28680[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (29))){
var inst_28554 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28610_28681 = state_28570__$1;
(statearr_28610_28681[(2)] = inst_28554);

(statearr_28610_28681[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (44))){
var inst_28563 = (state_28570[(2)]);
var state_28570__$1 = (function (){var statearr_28611 = state_28570;
(statearr_28611[(28)] = inst_28563);

return statearr_28611;
})();
var statearr_28612_28682 = state_28570__$1;
(statearr_28612_28682[(2)] = null);

(statearr_28612_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (6))){
var inst_28502 = (state_28570[(29)]);
var inst_28501 = cljs.core.deref.call(null,cs);
var inst_28502__$1 = cljs.core.keys.call(null,inst_28501);
var inst_28503 = cljs.core.count.call(null,inst_28502__$1);
var inst_28504 = cljs.core.reset_BANG_.call(null,dctr,inst_28503);
var inst_28509 = cljs.core.seq.call(null,inst_28502__$1);
var inst_28510 = inst_28509;
var inst_28511 = null;
var inst_28512 = (0);
var inst_28513 = (0);
var state_28570__$1 = (function (){var statearr_28613 = state_28570;
(statearr_28613[(30)] = inst_28504);

(statearr_28613[(29)] = inst_28502__$1);

(statearr_28613[(20)] = inst_28512);

(statearr_28613[(21)] = inst_28510);

(statearr_28613[(11)] = inst_28511);

(statearr_28613[(12)] = inst_28513);

return statearr_28613;
})();
var statearr_28614_28683 = state_28570__$1;
(statearr_28614_28683[(2)] = null);

(statearr_28614_28683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (28))){
var inst_28529 = (state_28570[(25)]);
var inst_28510 = (state_28570[(21)]);
var inst_28529__$1 = cljs.core.seq.call(null,inst_28510);
var state_28570__$1 = (function (){var statearr_28615 = state_28570;
(statearr_28615[(25)] = inst_28529__$1);

return statearr_28615;
})();
if(inst_28529__$1){
var statearr_28616_28684 = state_28570__$1;
(statearr_28616_28684[(1)] = (33));

} else {
var statearr_28617_28685 = state_28570__$1;
(statearr_28617_28685[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (25))){
var inst_28512 = (state_28570[(20)]);
var inst_28513 = (state_28570[(12)]);
var inst_28515 = (inst_28513 < inst_28512);
var inst_28516 = inst_28515;
var state_28570__$1 = state_28570;
if(cljs.core.truth_(inst_28516)){
var statearr_28618_28686 = state_28570__$1;
(statearr_28618_28686[(1)] = (27));

} else {
var statearr_28619_28687 = state_28570__$1;
(statearr_28619_28687[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (34))){
var state_28570__$1 = state_28570;
var statearr_28620_28688 = state_28570__$1;
(statearr_28620_28688[(2)] = null);

(statearr_28620_28688[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (17))){
var state_28570__$1 = state_28570;
var statearr_28621_28689 = state_28570__$1;
(statearr_28621_28689[(2)] = null);

(statearr_28621_28689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (3))){
var inst_28568 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28570__$1,inst_28568);
} else {
if((state_val_28571 === (12))){
var inst_28497 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28622_28690 = state_28570__$1;
(statearr_28622_28690[(2)] = inst_28497);

(statearr_28622_28690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (2))){
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28570__$1,(4),ch);
} else {
if((state_val_28571 === (23))){
var state_28570__$1 = state_28570;
var statearr_28623_28691 = state_28570__$1;
(statearr_28623_28691[(2)] = null);

(statearr_28623_28691[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (35))){
var inst_28552 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28624_28692 = state_28570__$1;
(statearr_28624_28692[(2)] = inst_28552);

(statearr_28624_28692[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (19))){
var inst_28469 = (state_28570[(7)]);
var inst_28473 = cljs.core.chunk_first.call(null,inst_28469);
var inst_28474 = cljs.core.chunk_rest.call(null,inst_28469);
var inst_28475 = cljs.core.count.call(null,inst_28473);
var inst_28447 = inst_28474;
var inst_28448 = inst_28473;
var inst_28449 = inst_28475;
var inst_28450 = (0);
var state_28570__$1 = (function (){var statearr_28625 = state_28570;
(statearr_28625[(14)] = inst_28450);

(statearr_28625[(15)] = inst_28448);

(statearr_28625[(16)] = inst_28447);

(statearr_28625[(17)] = inst_28449);

return statearr_28625;
})();
var statearr_28626_28693 = state_28570__$1;
(statearr_28626_28693[(2)] = null);

(statearr_28626_28693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (11))){
var inst_28469 = (state_28570[(7)]);
var inst_28447 = (state_28570[(16)]);
var inst_28469__$1 = cljs.core.seq.call(null,inst_28447);
var state_28570__$1 = (function (){var statearr_28627 = state_28570;
(statearr_28627[(7)] = inst_28469__$1);

return statearr_28627;
})();
if(inst_28469__$1){
var statearr_28628_28694 = state_28570__$1;
(statearr_28628_28694[(1)] = (16));

} else {
var statearr_28629_28695 = state_28570__$1;
(statearr_28629_28695[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (9))){
var inst_28499 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28630_28696 = state_28570__$1;
(statearr_28630_28696[(2)] = inst_28499);

(statearr_28630_28696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (5))){
var inst_28445 = cljs.core.deref.call(null,cs);
var inst_28446 = cljs.core.seq.call(null,inst_28445);
var inst_28447 = inst_28446;
var inst_28448 = null;
var inst_28449 = (0);
var inst_28450 = (0);
var state_28570__$1 = (function (){var statearr_28631 = state_28570;
(statearr_28631[(14)] = inst_28450);

(statearr_28631[(15)] = inst_28448);

(statearr_28631[(16)] = inst_28447);

(statearr_28631[(17)] = inst_28449);

return statearr_28631;
})();
var statearr_28632_28697 = state_28570__$1;
(statearr_28632_28697[(2)] = null);

(statearr_28632_28697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (14))){
var state_28570__$1 = state_28570;
var statearr_28633_28698 = state_28570__$1;
(statearr_28633_28698[(2)] = null);

(statearr_28633_28698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (45))){
var inst_28560 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28634_28699 = state_28570__$1;
(statearr_28634_28699[(2)] = inst_28560);

(statearr_28634_28699[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (26))){
var inst_28502 = (state_28570[(29)]);
var inst_28556 = (state_28570[(2)]);
var inst_28557 = cljs.core.seq.call(null,inst_28502);
var state_28570__$1 = (function (){var statearr_28635 = state_28570;
(statearr_28635[(31)] = inst_28556);

return statearr_28635;
})();
if(inst_28557){
var statearr_28636_28700 = state_28570__$1;
(statearr_28636_28700[(1)] = (42));

} else {
var statearr_28637_28701 = state_28570__$1;
(statearr_28637_28701[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (16))){
var inst_28469 = (state_28570[(7)]);
var inst_28471 = cljs.core.chunked_seq_QMARK_.call(null,inst_28469);
var state_28570__$1 = state_28570;
if(inst_28471){
var statearr_28638_28702 = state_28570__$1;
(statearr_28638_28702[(1)] = (19));

} else {
var statearr_28639_28703 = state_28570__$1;
(statearr_28639_28703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (38))){
var inst_28549 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28640_28704 = state_28570__$1;
(statearr_28640_28704[(2)] = inst_28549);

(statearr_28640_28704[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (30))){
var state_28570__$1 = state_28570;
var statearr_28641_28705 = state_28570__$1;
(statearr_28641_28705[(2)] = null);

(statearr_28641_28705[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (10))){
var inst_28450 = (state_28570[(14)]);
var inst_28448 = (state_28570[(15)]);
var inst_28458 = cljs.core._nth.call(null,inst_28448,inst_28450);
var inst_28459 = cljs.core.nth.call(null,inst_28458,(0),null);
var inst_28460 = cljs.core.nth.call(null,inst_28458,(1),null);
var state_28570__$1 = (function (){var statearr_28642 = state_28570;
(statearr_28642[(26)] = inst_28459);

return statearr_28642;
})();
if(cljs.core.truth_(inst_28460)){
var statearr_28643_28706 = state_28570__$1;
(statearr_28643_28706[(1)] = (13));

} else {
var statearr_28644_28707 = state_28570__$1;
(statearr_28644_28707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (18))){
var inst_28495 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28645_28708 = state_28570__$1;
(statearr_28645_28708[(2)] = inst_28495);

(statearr_28645_28708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (42))){
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28570__$1,(45),dchan);
} else {
if((state_val_28571 === (37))){
var inst_28538 = (state_28570[(23)]);
var inst_28529 = (state_28570[(25)]);
var inst_28438 = (state_28570[(10)]);
var inst_28538__$1 = cljs.core.first.call(null,inst_28529);
var inst_28539 = cljs.core.async.put_BANG_.call(null,inst_28538__$1,inst_28438,done);
var state_28570__$1 = (function (){var statearr_28646 = state_28570;
(statearr_28646[(23)] = inst_28538__$1);

return statearr_28646;
})();
if(cljs.core.truth_(inst_28539)){
var statearr_28647_28709 = state_28570__$1;
(statearr_28647_28709[(1)] = (39));

} else {
var statearr_28648_28710 = state_28570__$1;
(statearr_28648_28710[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (8))){
var inst_28450 = (state_28570[(14)]);
var inst_28449 = (state_28570[(17)]);
var inst_28452 = (inst_28450 < inst_28449);
var inst_28453 = inst_28452;
var state_28570__$1 = state_28570;
if(cljs.core.truth_(inst_28453)){
var statearr_28649_28711 = state_28570__$1;
(statearr_28649_28711[(1)] = (10));

} else {
var statearr_28650_28712 = state_28570__$1;
(statearr_28650_28712[(1)] = (11));

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
});})(c__24464__auto___28658,cs,m,dchan,dctr,done))
;
return ((function (switch__24406__auto__,c__24464__auto___28658,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24407__auto__ = null;
var cljs$core$async$mult_$_state_machine__24407__auto____0 = (function (){
var statearr_28654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28654[(0)] = cljs$core$async$mult_$_state_machine__24407__auto__);

(statearr_28654[(1)] = (1));

return statearr_28654;
});
var cljs$core$async$mult_$_state_machine__24407__auto____1 = (function (state_28570){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_28570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e28655){if((e28655 instanceof Object)){
var ex__24410__auto__ = e28655;
var statearr_28656_28713 = state_28570;
(statearr_28656_28713[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28714 = state_28570;
state_28570 = G__28714;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24407__auto__ = function(state_28570){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24407__auto____1.call(this,state_28570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24407__auto____0;
cljs$core$async$mult_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24407__auto____1;
return cljs$core$async$mult_$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___28658,cs,m,dchan,dctr,done))
})();
var state__24466__auto__ = (function (){var statearr_28657 = f__24465__auto__.call(null);
(statearr_28657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___28658);

return statearr_28657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___28658,cs,m,dchan,dctr,done))
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
var args28715 = [];
var len__20374__auto___28718 = arguments.length;
var i__20375__auto___28719 = (0);
while(true){
if((i__20375__auto___28719 < len__20374__auto___28718)){
args28715.push((arguments[i__20375__auto___28719]));

var G__28720 = (i__20375__auto___28719 + (1));
i__20375__auto___28719 = G__28720;
continue;
} else {
}
break;
}

var G__28717 = args28715.length;
switch (G__28717) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28715.length)].join('')));

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
var x__19871__auto__ = (((m == null))?null:m);
var m__19872__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,m,ch);
} else {
var m__19872__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,m,ch);
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
var x__19871__auto__ = (((m == null))?null:m);
var m__19872__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,m,ch);
} else {
var m__19872__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,m,ch);
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
var x__19871__auto__ = (((m == null))?null:m);
var m__19872__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,m);
} else {
var m__19872__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,m);
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
var x__19871__auto__ = (((m == null))?null:m);
var m__19872__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,m,state_map);
} else {
var m__19872__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,m,state_map);
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
var x__19871__auto__ = (((m == null))?null:m);
var m__19872__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,m,mode);
} else {
var m__19872__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20381__auto__ = [];
var len__20374__auto___28732 = arguments.length;
var i__20375__auto___28733 = (0);
while(true){
if((i__20375__auto___28733 < len__20374__auto___28732)){
args__20381__auto__.push((arguments[i__20375__auto___28733]));

var G__28734 = (i__20375__auto___28733 + (1));
i__20375__auto___28733 = G__28734;
continue;
} else {
}
break;
}

var argseq__20382__auto__ = ((((3) < args__20381__auto__.length))?(new cljs.core.IndexedSeq(args__20381__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20382__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28726){
var map__28727 = p__28726;
var map__28727__$1 = ((((!((map__28727 == null)))?((((map__28727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28727):map__28727);
var opts = map__28727__$1;
var statearr_28729_28735 = state;
(statearr_28729_28735[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__28727,map__28727__$1,opts){
return (function (val){
var statearr_28730_28736 = state;
(statearr_28730_28736[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28727,map__28727__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_28731_28737 = state;
(statearr_28731_28737[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28722){
var G__28723 = cljs.core.first.call(null,seq28722);
var seq28722__$1 = cljs.core.next.call(null,seq28722);
var G__28724 = cljs.core.first.call(null,seq28722__$1);
var seq28722__$2 = cljs.core.next.call(null,seq28722__$1);
var G__28725 = cljs.core.first.call(null,seq28722__$2);
var seq28722__$3 = cljs.core.next.call(null,seq28722__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28723,G__28724,G__28725,seq28722__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28905 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28906){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28906 = meta28906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28907,meta28906__$1){
var self__ = this;
var _28907__$1 = this;
return (new cljs.core.async.t_cljs$core$async28905(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28906__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28907){
var self__ = this;
var _28907__$1 = this;
return self__.meta28906;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28905.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28905.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28906","meta28906",-537923642,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28905";

cljs.core.async.t_cljs$core$async28905.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async28905");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28905 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28905(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28906){
return (new cljs.core.async.t_cljs$core$async28905(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28906));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28905(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24464__auto___29072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___29072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___29072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29009){
var state_val_29010 = (state_29009[(1)]);
if((state_val_29010 === (7))){
var inst_28924 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29011_29073 = state_29009__$1;
(statearr_29011_29073[(2)] = inst_28924);

(statearr_29011_29073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (20))){
var inst_28936 = (state_29009[(7)]);
var state_29009__$1 = state_29009;
var statearr_29012_29074 = state_29009__$1;
(statearr_29012_29074[(2)] = inst_28936);

(statearr_29012_29074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (27))){
var state_29009__$1 = state_29009;
var statearr_29013_29075 = state_29009__$1;
(statearr_29013_29075[(2)] = null);

(statearr_29013_29075[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (1))){
var inst_28911 = (state_29009[(8)]);
var inst_28911__$1 = calc_state.call(null);
var inst_28913 = (inst_28911__$1 == null);
var inst_28914 = cljs.core.not.call(null,inst_28913);
var state_29009__$1 = (function (){var statearr_29014 = state_29009;
(statearr_29014[(8)] = inst_28911__$1);

return statearr_29014;
})();
if(inst_28914){
var statearr_29015_29076 = state_29009__$1;
(statearr_29015_29076[(1)] = (2));

} else {
var statearr_29016_29077 = state_29009__$1;
(statearr_29016_29077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (24))){
var inst_28983 = (state_29009[(9)]);
var inst_28960 = (state_29009[(10)]);
var inst_28969 = (state_29009[(11)]);
var inst_28983__$1 = inst_28960.call(null,inst_28969);
var state_29009__$1 = (function (){var statearr_29017 = state_29009;
(statearr_29017[(9)] = inst_28983__$1);

return statearr_29017;
})();
if(cljs.core.truth_(inst_28983__$1)){
var statearr_29018_29078 = state_29009__$1;
(statearr_29018_29078[(1)] = (29));

} else {
var statearr_29019_29079 = state_29009__$1;
(statearr_29019_29079[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (4))){
var inst_28927 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28927)){
var statearr_29020_29080 = state_29009__$1;
(statearr_29020_29080[(1)] = (8));

} else {
var statearr_29021_29081 = state_29009__$1;
(statearr_29021_29081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (15))){
var inst_28954 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28954)){
var statearr_29022_29082 = state_29009__$1;
(statearr_29022_29082[(1)] = (19));

} else {
var statearr_29023_29083 = state_29009__$1;
(statearr_29023_29083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (21))){
var inst_28959 = (state_29009[(12)]);
var inst_28959__$1 = (state_29009[(2)]);
var inst_28960 = cljs.core.get.call(null,inst_28959__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28961 = cljs.core.get.call(null,inst_28959__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28962 = cljs.core.get.call(null,inst_28959__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29009__$1 = (function (){var statearr_29024 = state_29009;
(statearr_29024[(10)] = inst_28960);

(statearr_29024[(12)] = inst_28959__$1);

(statearr_29024[(13)] = inst_28961);

return statearr_29024;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29009__$1,(22),inst_28962);
} else {
if((state_val_29010 === (31))){
var inst_28991 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28991)){
var statearr_29025_29084 = state_29009__$1;
(statearr_29025_29084[(1)] = (32));

} else {
var statearr_29026_29085 = state_29009__$1;
(statearr_29026_29085[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (32))){
var inst_28968 = (state_29009[(14)]);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29009__$1,(35),out,inst_28968);
} else {
if((state_val_29010 === (33))){
var inst_28959 = (state_29009[(12)]);
var inst_28936 = inst_28959;
var state_29009__$1 = (function (){var statearr_29027 = state_29009;
(statearr_29027[(7)] = inst_28936);

return statearr_29027;
})();
var statearr_29028_29086 = state_29009__$1;
(statearr_29028_29086[(2)] = null);

(statearr_29028_29086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (13))){
var inst_28936 = (state_29009[(7)]);
var inst_28943 = inst_28936.cljs$lang$protocol_mask$partition0$;
var inst_28944 = (inst_28943 & (64));
var inst_28945 = inst_28936.cljs$core$ISeq$;
var inst_28946 = (cljs.core.PROTOCOL_SENTINEL === inst_28945);
var inst_28947 = (inst_28944) || (inst_28946);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28947)){
var statearr_29029_29087 = state_29009__$1;
(statearr_29029_29087[(1)] = (16));

} else {
var statearr_29030_29088 = state_29009__$1;
(statearr_29030_29088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (22))){
var inst_28968 = (state_29009[(14)]);
var inst_28969 = (state_29009[(11)]);
var inst_28967 = (state_29009[(2)]);
var inst_28968__$1 = cljs.core.nth.call(null,inst_28967,(0),null);
var inst_28969__$1 = cljs.core.nth.call(null,inst_28967,(1),null);
var inst_28970 = (inst_28968__$1 == null);
var inst_28971 = cljs.core._EQ_.call(null,inst_28969__$1,change);
var inst_28972 = (inst_28970) || (inst_28971);
var state_29009__$1 = (function (){var statearr_29031 = state_29009;
(statearr_29031[(14)] = inst_28968__$1);

(statearr_29031[(11)] = inst_28969__$1);

return statearr_29031;
})();
if(cljs.core.truth_(inst_28972)){
var statearr_29032_29089 = state_29009__$1;
(statearr_29032_29089[(1)] = (23));

} else {
var statearr_29033_29090 = state_29009__$1;
(statearr_29033_29090[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (36))){
var inst_28959 = (state_29009[(12)]);
var inst_28936 = inst_28959;
var state_29009__$1 = (function (){var statearr_29034 = state_29009;
(statearr_29034[(7)] = inst_28936);

return statearr_29034;
})();
var statearr_29035_29091 = state_29009__$1;
(statearr_29035_29091[(2)] = null);

(statearr_29035_29091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (29))){
var inst_28983 = (state_29009[(9)]);
var state_29009__$1 = state_29009;
var statearr_29036_29092 = state_29009__$1;
(statearr_29036_29092[(2)] = inst_28983);

(statearr_29036_29092[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (6))){
var state_29009__$1 = state_29009;
var statearr_29037_29093 = state_29009__$1;
(statearr_29037_29093[(2)] = false);

(statearr_29037_29093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (28))){
var inst_28979 = (state_29009[(2)]);
var inst_28980 = calc_state.call(null);
var inst_28936 = inst_28980;
var state_29009__$1 = (function (){var statearr_29038 = state_29009;
(statearr_29038[(7)] = inst_28936);

(statearr_29038[(15)] = inst_28979);

return statearr_29038;
})();
var statearr_29039_29094 = state_29009__$1;
(statearr_29039_29094[(2)] = null);

(statearr_29039_29094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (25))){
var inst_29005 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29040_29095 = state_29009__$1;
(statearr_29040_29095[(2)] = inst_29005);

(statearr_29040_29095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (34))){
var inst_29003 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29041_29096 = state_29009__$1;
(statearr_29041_29096[(2)] = inst_29003);

(statearr_29041_29096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (17))){
var state_29009__$1 = state_29009;
var statearr_29042_29097 = state_29009__$1;
(statearr_29042_29097[(2)] = false);

(statearr_29042_29097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (3))){
var state_29009__$1 = state_29009;
var statearr_29043_29098 = state_29009__$1;
(statearr_29043_29098[(2)] = false);

(statearr_29043_29098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (12))){
var inst_29007 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29009__$1,inst_29007);
} else {
if((state_val_29010 === (2))){
var inst_28911 = (state_29009[(8)]);
var inst_28916 = inst_28911.cljs$lang$protocol_mask$partition0$;
var inst_28917 = (inst_28916 & (64));
var inst_28918 = inst_28911.cljs$core$ISeq$;
var inst_28919 = (cljs.core.PROTOCOL_SENTINEL === inst_28918);
var inst_28920 = (inst_28917) || (inst_28919);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28920)){
var statearr_29044_29099 = state_29009__$1;
(statearr_29044_29099[(1)] = (5));

} else {
var statearr_29045_29100 = state_29009__$1;
(statearr_29045_29100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (23))){
var inst_28968 = (state_29009[(14)]);
var inst_28974 = (inst_28968 == null);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28974)){
var statearr_29046_29101 = state_29009__$1;
(statearr_29046_29101[(1)] = (26));

} else {
var statearr_29047_29102 = state_29009__$1;
(statearr_29047_29102[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (35))){
var inst_28994 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28994)){
var statearr_29048_29103 = state_29009__$1;
(statearr_29048_29103[(1)] = (36));

} else {
var statearr_29049_29104 = state_29009__$1;
(statearr_29049_29104[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (19))){
var inst_28936 = (state_29009[(7)]);
var inst_28956 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28936);
var state_29009__$1 = state_29009;
var statearr_29050_29105 = state_29009__$1;
(statearr_29050_29105[(2)] = inst_28956);

(statearr_29050_29105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (11))){
var inst_28936 = (state_29009[(7)]);
var inst_28940 = (inst_28936 == null);
var inst_28941 = cljs.core.not.call(null,inst_28940);
var state_29009__$1 = state_29009;
if(inst_28941){
var statearr_29051_29106 = state_29009__$1;
(statearr_29051_29106[(1)] = (13));

} else {
var statearr_29052_29107 = state_29009__$1;
(statearr_29052_29107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (9))){
var inst_28911 = (state_29009[(8)]);
var state_29009__$1 = state_29009;
var statearr_29053_29108 = state_29009__$1;
(statearr_29053_29108[(2)] = inst_28911);

(statearr_29053_29108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (5))){
var state_29009__$1 = state_29009;
var statearr_29054_29109 = state_29009__$1;
(statearr_29054_29109[(2)] = true);

(statearr_29054_29109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (14))){
var state_29009__$1 = state_29009;
var statearr_29055_29110 = state_29009__$1;
(statearr_29055_29110[(2)] = false);

(statearr_29055_29110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (26))){
var inst_28969 = (state_29009[(11)]);
var inst_28976 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28969);
var state_29009__$1 = state_29009;
var statearr_29056_29111 = state_29009__$1;
(statearr_29056_29111[(2)] = inst_28976);

(statearr_29056_29111[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (16))){
var state_29009__$1 = state_29009;
var statearr_29057_29112 = state_29009__$1;
(statearr_29057_29112[(2)] = true);

(statearr_29057_29112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (38))){
var inst_28999 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29058_29113 = state_29009__$1;
(statearr_29058_29113[(2)] = inst_28999);

(statearr_29058_29113[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (30))){
var inst_28960 = (state_29009[(10)]);
var inst_28969 = (state_29009[(11)]);
var inst_28961 = (state_29009[(13)]);
var inst_28986 = cljs.core.empty_QMARK_.call(null,inst_28960);
var inst_28987 = inst_28961.call(null,inst_28969);
var inst_28988 = cljs.core.not.call(null,inst_28987);
var inst_28989 = (inst_28986) && (inst_28988);
var state_29009__$1 = state_29009;
var statearr_29059_29114 = state_29009__$1;
(statearr_29059_29114[(2)] = inst_28989);

(statearr_29059_29114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (10))){
var inst_28911 = (state_29009[(8)]);
var inst_28932 = (state_29009[(2)]);
var inst_28933 = cljs.core.get.call(null,inst_28932,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28934 = cljs.core.get.call(null,inst_28932,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28935 = cljs.core.get.call(null,inst_28932,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28936 = inst_28911;
var state_29009__$1 = (function (){var statearr_29060 = state_29009;
(statearr_29060[(16)] = inst_28934);

(statearr_29060[(17)] = inst_28935);

(statearr_29060[(7)] = inst_28936);

(statearr_29060[(18)] = inst_28933);

return statearr_29060;
})();
var statearr_29061_29115 = state_29009__$1;
(statearr_29061_29115[(2)] = null);

(statearr_29061_29115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (18))){
var inst_28951 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29062_29116 = state_29009__$1;
(statearr_29062_29116[(2)] = inst_28951);

(statearr_29062_29116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (37))){
var state_29009__$1 = state_29009;
var statearr_29063_29117 = state_29009__$1;
(statearr_29063_29117[(2)] = null);

(statearr_29063_29117[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (8))){
var inst_28911 = (state_29009[(8)]);
var inst_28929 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28911);
var state_29009__$1 = state_29009;
var statearr_29064_29118 = state_29009__$1;
(statearr_29064_29118[(2)] = inst_28929);

(statearr_29064_29118[(1)] = (10));


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
});})(c__24464__auto___29072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24406__auto__,c__24464__auto___29072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24407__auto__ = null;
var cljs$core$async$mix_$_state_machine__24407__auto____0 = (function (){
var statearr_29068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29068[(0)] = cljs$core$async$mix_$_state_machine__24407__auto__);

(statearr_29068[(1)] = (1));

return statearr_29068;
});
var cljs$core$async$mix_$_state_machine__24407__auto____1 = (function (state_29009){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_29009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e29069){if((e29069 instanceof Object)){
var ex__24410__auto__ = e29069;
var statearr_29070_29119 = state_29009;
(statearr_29070_29119[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29120 = state_29009;
state_29009 = G__29120;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24407__auto__ = function(state_29009){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24407__auto____1.call(this,state_29009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24407__auto____0;
cljs$core$async$mix_$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24407__auto____1;
return cljs$core$async$mix_$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___29072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24466__auto__ = (function (){var statearr_29071 = f__24465__auto__.call(null);
(statearr_29071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___29072);

return statearr_29071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___29072,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19871__auto__ = (((p == null))?null:p);
var m__19872__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19872__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19871__auto__ = (((p == null))?null:p);
var m__19872__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,p,v,ch);
} else {
var m__19872__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29121 = [];
var len__20374__auto___29124 = arguments.length;
var i__20375__auto___29125 = (0);
while(true){
if((i__20375__auto___29125 < len__20374__auto___29124)){
args29121.push((arguments[i__20375__auto___29125]));

var G__29126 = (i__20375__auto___29125 + (1));
i__20375__auto___29125 = G__29126;
continue;
} else {
}
break;
}

var G__29123 = args29121.length;
switch (G__29123) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29121.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19871__auto__ = (((p == null))?null:p);
var m__19872__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,p);
} else {
var m__19872__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,p);
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
var x__19871__auto__ = (((p == null))?null:p);
var m__19872__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19871__auto__)]);
if(!((m__19872__auto__ == null))){
return m__19872__auto__.call(null,p,v);
} else {
var m__19872__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19872__auto____$1 == null))){
return m__19872__auto____$1.call(null,p,v);
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
var args29129 = [];
var len__20374__auto___29254 = arguments.length;
var i__20375__auto___29255 = (0);
while(true){
if((i__20375__auto___29255 < len__20374__auto___29254)){
args29129.push((arguments[i__20375__auto___29255]));

var G__29256 = (i__20375__auto___29255 + (1));
i__20375__auto___29255 = G__29256;
continue;
} else {
}
break;
}

var G__29131 = args29129.length;
switch (G__29131) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29129.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19153__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19153__auto__,mults){
return (function (p1__29128_SHARP_){
if(cljs.core.truth_(p1__29128_SHARP_.call(null,topic))){
return p1__29128_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29128_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19153__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29132 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29133){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29133 = meta29133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29134,meta29133__$1){
var self__ = this;
var _29134__$1 = this;
return (new cljs.core.async.t_cljs$core$async29132(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29133__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29134){
var self__ = this;
var _29134__$1 = this;
return self__.meta29133;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29132.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29133","meta29133",-349939453,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29132";

cljs.core.async.t_cljs$core$async29132.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async29132");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29132 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29132(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29133){
return (new cljs.core.async.t_cljs$core$async29132(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29133));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29132(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24464__auto___29258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___29258,mults,ensure_mult,p){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___29258,mults,ensure_mult,p){
return (function (state_29206){
var state_val_29207 = (state_29206[(1)]);
if((state_val_29207 === (7))){
var inst_29202 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29208_29259 = state_29206__$1;
(statearr_29208_29259[(2)] = inst_29202);

(statearr_29208_29259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (20))){
var state_29206__$1 = state_29206;
var statearr_29209_29260 = state_29206__$1;
(statearr_29209_29260[(2)] = null);

(statearr_29209_29260[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (1))){
var state_29206__$1 = state_29206;
var statearr_29210_29261 = state_29206__$1;
(statearr_29210_29261[(2)] = null);

(statearr_29210_29261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (24))){
var inst_29185 = (state_29206[(7)]);
var inst_29194 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29185);
var state_29206__$1 = state_29206;
var statearr_29211_29262 = state_29206__$1;
(statearr_29211_29262[(2)] = inst_29194);

(statearr_29211_29262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (4))){
var inst_29137 = (state_29206[(8)]);
var inst_29137__$1 = (state_29206[(2)]);
var inst_29138 = (inst_29137__$1 == null);
var state_29206__$1 = (function (){var statearr_29212 = state_29206;
(statearr_29212[(8)] = inst_29137__$1);

return statearr_29212;
})();
if(cljs.core.truth_(inst_29138)){
var statearr_29213_29263 = state_29206__$1;
(statearr_29213_29263[(1)] = (5));

} else {
var statearr_29214_29264 = state_29206__$1;
(statearr_29214_29264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (15))){
var inst_29179 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29215_29265 = state_29206__$1;
(statearr_29215_29265[(2)] = inst_29179);

(statearr_29215_29265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (21))){
var inst_29199 = (state_29206[(2)]);
var state_29206__$1 = (function (){var statearr_29216 = state_29206;
(statearr_29216[(9)] = inst_29199);

return statearr_29216;
})();
var statearr_29217_29266 = state_29206__$1;
(statearr_29217_29266[(2)] = null);

(statearr_29217_29266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (13))){
var inst_29161 = (state_29206[(10)]);
var inst_29163 = cljs.core.chunked_seq_QMARK_.call(null,inst_29161);
var state_29206__$1 = state_29206;
if(inst_29163){
var statearr_29218_29267 = state_29206__$1;
(statearr_29218_29267[(1)] = (16));

} else {
var statearr_29219_29268 = state_29206__$1;
(statearr_29219_29268[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (22))){
var inst_29191 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
if(cljs.core.truth_(inst_29191)){
var statearr_29220_29269 = state_29206__$1;
(statearr_29220_29269[(1)] = (23));

} else {
var statearr_29221_29270 = state_29206__$1;
(statearr_29221_29270[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (6))){
var inst_29187 = (state_29206[(11)]);
var inst_29185 = (state_29206[(7)]);
var inst_29137 = (state_29206[(8)]);
var inst_29185__$1 = topic_fn.call(null,inst_29137);
var inst_29186 = cljs.core.deref.call(null,mults);
var inst_29187__$1 = cljs.core.get.call(null,inst_29186,inst_29185__$1);
var state_29206__$1 = (function (){var statearr_29222 = state_29206;
(statearr_29222[(11)] = inst_29187__$1);

(statearr_29222[(7)] = inst_29185__$1);

return statearr_29222;
})();
if(cljs.core.truth_(inst_29187__$1)){
var statearr_29223_29271 = state_29206__$1;
(statearr_29223_29271[(1)] = (19));

} else {
var statearr_29224_29272 = state_29206__$1;
(statearr_29224_29272[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (25))){
var inst_29196 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29225_29273 = state_29206__$1;
(statearr_29225_29273[(2)] = inst_29196);

(statearr_29225_29273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (17))){
var inst_29161 = (state_29206[(10)]);
var inst_29170 = cljs.core.first.call(null,inst_29161);
var inst_29171 = cljs.core.async.muxch_STAR_.call(null,inst_29170);
var inst_29172 = cljs.core.async.close_BANG_.call(null,inst_29171);
var inst_29173 = cljs.core.next.call(null,inst_29161);
var inst_29147 = inst_29173;
var inst_29148 = null;
var inst_29149 = (0);
var inst_29150 = (0);
var state_29206__$1 = (function (){var statearr_29226 = state_29206;
(statearr_29226[(12)] = inst_29147);

(statearr_29226[(13)] = inst_29172);

(statearr_29226[(14)] = inst_29148);

(statearr_29226[(15)] = inst_29149);

(statearr_29226[(16)] = inst_29150);

return statearr_29226;
})();
var statearr_29227_29274 = state_29206__$1;
(statearr_29227_29274[(2)] = null);

(statearr_29227_29274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (3))){
var inst_29204 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29206__$1,inst_29204);
} else {
if((state_val_29207 === (12))){
var inst_29181 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29228_29275 = state_29206__$1;
(statearr_29228_29275[(2)] = inst_29181);

(statearr_29228_29275[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (2))){
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29206__$1,(4),ch);
} else {
if((state_val_29207 === (23))){
var state_29206__$1 = state_29206;
var statearr_29229_29276 = state_29206__$1;
(statearr_29229_29276[(2)] = null);

(statearr_29229_29276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (19))){
var inst_29187 = (state_29206[(11)]);
var inst_29137 = (state_29206[(8)]);
var inst_29189 = cljs.core.async.muxch_STAR_.call(null,inst_29187);
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29206__$1,(22),inst_29189,inst_29137);
} else {
if((state_val_29207 === (11))){
var inst_29147 = (state_29206[(12)]);
var inst_29161 = (state_29206[(10)]);
var inst_29161__$1 = cljs.core.seq.call(null,inst_29147);
var state_29206__$1 = (function (){var statearr_29230 = state_29206;
(statearr_29230[(10)] = inst_29161__$1);

return statearr_29230;
})();
if(inst_29161__$1){
var statearr_29231_29277 = state_29206__$1;
(statearr_29231_29277[(1)] = (13));

} else {
var statearr_29232_29278 = state_29206__$1;
(statearr_29232_29278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (9))){
var inst_29183 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29233_29279 = state_29206__$1;
(statearr_29233_29279[(2)] = inst_29183);

(statearr_29233_29279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (5))){
var inst_29144 = cljs.core.deref.call(null,mults);
var inst_29145 = cljs.core.vals.call(null,inst_29144);
var inst_29146 = cljs.core.seq.call(null,inst_29145);
var inst_29147 = inst_29146;
var inst_29148 = null;
var inst_29149 = (0);
var inst_29150 = (0);
var state_29206__$1 = (function (){var statearr_29234 = state_29206;
(statearr_29234[(12)] = inst_29147);

(statearr_29234[(14)] = inst_29148);

(statearr_29234[(15)] = inst_29149);

(statearr_29234[(16)] = inst_29150);

return statearr_29234;
})();
var statearr_29235_29280 = state_29206__$1;
(statearr_29235_29280[(2)] = null);

(statearr_29235_29280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (14))){
var state_29206__$1 = state_29206;
var statearr_29239_29281 = state_29206__$1;
(statearr_29239_29281[(2)] = null);

(statearr_29239_29281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (16))){
var inst_29161 = (state_29206[(10)]);
var inst_29165 = cljs.core.chunk_first.call(null,inst_29161);
var inst_29166 = cljs.core.chunk_rest.call(null,inst_29161);
var inst_29167 = cljs.core.count.call(null,inst_29165);
var inst_29147 = inst_29166;
var inst_29148 = inst_29165;
var inst_29149 = inst_29167;
var inst_29150 = (0);
var state_29206__$1 = (function (){var statearr_29240 = state_29206;
(statearr_29240[(12)] = inst_29147);

(statearr_29240[(14)] = inst_29148);

(statearr_29240[(15)] = inst_29149);

(statearr_29240[(16)] = inst_29150);

return statearr_29240;
})();
var statearr_29241_29282 = state_29206__$1;
(statearr_29241_29282[(2)] = null);

(statearr_29241_29282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (10))){
var inst_29147 = (state_29206[(12)]);
var inst_29148 = (state_29206[(14)]);
var inst_29149 = (state_29206[(15)]);
var inst_29150 = (state_29206[(16)]);
var inst_29155 = cljs.core._nth.call(null,inst_29148,inst_29150);
var inst_29156 = cljs.core.async.muxch_STAR_.call(null,inst_29155);
var inst_29157 = cljs.core.async.close_BANG_.call(null,inst_29156);
var inst_29158 = (inst_29150 + (1));
var tmp29236 = inst_29147;
var tmp29237 = inst_29148;
var tmp29238 = inst_29149;
var inst_29147__$1 = tmp29236;
var inst_29148__$1 = tmp29237;
var inst_29149__$1 = tmp29238;
var inst_29150__$1 = inst_29158;
var state_29206__$1 = (function (){var statearr_29242 = state_29206;
(statearr_29242[(12)] = inst_29147__$1);

(statearr_29242[(14)] = inst_29148__$1);

(statearr_29242[(17)] = inst_29157);

(statearr_29242[(15)] = inst_29149__$1);

(statearr_29242[(16)] = inst_29150__$1);

return statearr_29242;
})();
var statearr_29243_29283 = state_29206__$1;
(statearr_29243_29283[(2)] = null);

(statearr_29243_29283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (18))){
var inst_29176 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29244_29284 = state_29206__$1;
(statearr_29244_29284[(2)] = inst_29176);

(statearr_29244_29284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (8))){
var inst_29149 = (state_29206[(15)]);
var inst_29150 = (state_29206[(16)]);
var inst_29152 = (inst_29150 < inst_29149);
var inst_29153 = inst_29152;
var state_29206__$1 = state_29206;
if(cljs.core.truth_(inst_29153)){
var statearr_29245_29285 = state_29206__$1;
(statearr_29245_29285[(1)] = (10));

} else {
var statearr_29246_29286 = state_29206__$1;
(statearr_29246_29286[(1)] = (11));

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
});})(c__24464__auto___29258,mults,ensure_mult,p))
;
return ((function (switch__24406__auto__,c__24464__auto___29258,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_29250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29250[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_29250[(1)] = (1));

return statearr_29250;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_29206){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_29206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e29251){if((e29251 instanceof Object)){
var ex__24410__auto__ = e29251;
var statearr_29252_29287 = state_29206;
(statearr_29252_29287[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29288 = state_29206;
state_29206 = G__29288;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_29206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_29206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___29258,mults,ensure_mult,p))
})();
var state__24466__auto__ = (function (){var statearr_29253 = f__24465__auto__.call(null);
(statearr_29253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___29258);

return statearr_29253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___29258,mults,ensure_mult,p))
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
var args29289 = [];
var len__20374__auto___29292 = arguments.length;
var i__20375__auto___29293 = (0);
while(true){
if((i__20375__auto___29293 < len__20374__auto___29292)){
args29289.push((arguments[i__20375__auto___29293]));

var G__29294 = (i__20375__auto___29293 + (1));
i__20375__auto___29293 = G__29294;
continue;
} else {
}
break;
}

var G__29291 = args29289.length;
switch (G__29291) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29289.length)].join('')));

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
var args29296 = [];
var len__20374__auto___29299 = arguments.length;
var i__20375__auto___29300 = (0);
while(true){
if((i__20375__auto___29300 < len__20374__auto___29299)){
args29296.push((arguments[i__20375__auto___29300]));

var G__29301 = (i__20375__auto___29300 + (1));
i__20375__auto___29300 = G__29301;
continue;
} else {
}
break;
}

var G__29298 = args29296.length;
switch (G__29298) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29296.length)].join('')));

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
var args29303 = [];
var len__20374__auto___29374 = arguments.length;
var i__20375__auto___29375 = (0);
while(true){
if((i__20375__auto___29375 < len__20374__auto___29374)){
args29303.push((arguments[i__20375__auto___29375]));

var G__29376 = (i__20375__auto___29375 + (1));
i__20375__auto___29375 = G__29376;
continue;
} else {
}
break;
}

var G__29305 = args29303.length;
switch (G__29305) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29303.length)].join('')));

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
var c__24464__auto___29378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___29378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___29378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29344){
var state_val_29345 = (state_29344[(1)]);
if((state_val_29345 === (7))){
var state_29344__$1 = state_29344;
var statearr_29346_29379 = state_29344__$1;
(statearr_29346_29379[(2)] = null);

(statearr_29346_29379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (1))){
var state_29344__$1 = state_29344;
var statearr_29347_29380 = state_29344__$1;
(statearr_29347_29380[(2)] = null);

(statearr_29347_29380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (4))){
var inst_29308 = (state_29344[(7)]);
var inst_29310 = (inst_29308 < cnt);
var state_29344__$1 = state_29344;
if(cljs.core.truth_(inst_29310)){
var statearr_29348_29381 = state_29344__$1;
(statearr_29348_29381[(1)] = (6));

} else {
var statearr_29349_29382 = state_29344__$1;
(statearr_29349_29382[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (15))){
var inst_29340 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29350_29383 = state_29344__$1;
(statearr_29350_29383[(2)] = inst_29340);

(statearr_29350_29383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (13))){
var inst_29333 = cljs.core.async.close_BANG_.call(null,out);
var state_29344__$1 = state_29344;
var statearr_29351_29384 = state_29344__$1;
(statearr_29351_29384[(2)] = inst_29333);

(statearr_29351_29384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (6))){
var state_29344__$1 = state_29344;
var statearr_29352_29385 = state_29344__$1;
(statearr_29352_29385[(2)] = null);

(statearr_29352_29385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (3))){
var inst_29342 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29344__$1,inst_29342);
} else {
if((state_val_29345 === (12))){
var inst_29330 = (state_29344[(8)]);
var inst_29330__$1 = (state_29344[(2)]);
var inst_29331 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29330__$1);
var state_29344__$1 = (function (){var statearr_29353 = state_29344;
(statearr_29353[(8)] = inst_29330__$1);

return statearr_29353;
})();
if(cljs.core.truth_(inst_29331)){
var statearr_29354_29386 = state_29344__$1;
(statearr_29354_29386[(1)] = (13));

} else {
var statearr_29355_29387 = state_29344__$1;
(statearr_29355_29387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (2))){
var inst_29307 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29308 = (0);
var state_29344__$1 = (function (){var statearr_29356 = state_29344;
(statearr_29356[(9)] = inst_29307);

(statearr_29356[(7)] = inst_29308);

return statearr_29356;
})();
var statearr_29357_29388 = state_29344__$1;
(statearr_29357_29388[(2)] = null);

(statearr_29357_29388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (11))){
var inst_29308 = (state_29344[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29344,(10),Object,null,(9));
var inst_29317 = chs__$1.call(null,inst_29308);
var inst_29318 = done.call(null,inst_29308);
var inst_29319 = cljs.core.async.take_BANG_.call(null,inst_29317,inst_29318);
var state_29344__$1 = state_29344;
var statearr_29358_29389 = state_29344__$1;
(statearr_29358_29389[(2)] = inst_29319);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29344__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (9))){
var inst_29308 = (state_29344[(7)]);
var inst_29321 = (state_29344[(2)]);
var inst_29322 = (inst_29308 + (1));
var inst_29308__$1 = inst_29322;
var state_29344__$1 = (function (){var statearr_29359 = state_29344;
(statearr_29359[(10)] = inst_29321);

(statearr_29359[(7)] = inst_29308__$1);

return statearr_29359;
})();
var statearr_29360_29390 = state_29344__$1;
(statearr_29360_29390[(2)] = null);

(statearr_29360_29390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (5))){
var inst_29328 = (state_29344[(2)]);
var state_29344__$1 = (function (){var statearr_29361 = state_29344;
(statearr_29361[(11)] = inst_29328);

return statearr_29361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29344__$1,(12),dchan);
} else {
if((state_val_29345 === (14))){
var inst_29330 = (state_29344[(8)]);
var inst_29335 = cljs.core.apply.call(null,f,inst_29330);
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29344__$1,(16),out,inst_29335);
} else {
if((state_val_29345 === (16))){
var inst_29337 = (state_29344[(2)]);
var state_29344__$1 = (function (){var statearr_29362 = state_29344;
(statearr_29362[(12)] = inst_29337);

return statearr_29362;
})();
var statearr_29363_29391 = state_29344__$1;
(statearr_29363_29391[(2)] = null);

(statearr_29363_29391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (10))){
var inst_29312 = (state_29344[(2)]);
var inst_29313 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29344__$1 = (function (){var statearr_29364 = state_29344;
(statearr_29364[(13)] = inst_29312);

return statearr_29364;
})();
var statearr_29365_29392 = state_29344__$1;
(statearr_29365_29392[(2)] = inst_29313);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29344__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (8))){
var inst_29326 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29366_29393 = state_29344__$1;
(statearr_29366_29393[(2)] = inst_29326);

(statearr_29366_29393[(1)] = (5));


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
});})(c__24464__auto___29378,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24406__auto__,c__24464__auto___29378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_29370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29370[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_29370[(1)] = (1));

return statearr_29370;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_29344){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_29344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e29371){if((e29371 instanceof Object)){
var ex__24410__auto__ = e29371;
var statearr_29372_29394 = state_29344;
(statearr_29372_29394[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29395 = state_29344;
state_29344 = G__29395;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_29344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_29344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___29378,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24466__auto__ = (function (){var statearr_29373 = f__24465__auto__.call(null);
(statearr_29373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___29378);

return statearr_29373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___29378,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29397 = [];
var len__20374__auto___29455 = arguments.length;
var i__20375__auto___29456 = (0);
while(true){
if((i__20375__auto___29456 < len__20374__auto___29455)){
args29397.push((arguments[i__20375__auto___29456]));

var G__29457 = (i__20375__auto___29456 + (1));
i__20375__auto___29456 = G__29457;
continue;
} else {
}
break;
}

var G__29399 = args29397.length;
switch (G__29399) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29397.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24464__auto___29459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___29459,out){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___29459,out){
return (function (state_29431){
var state_val_29432 = (state_29431[(1)]);
if((state_val_29432 === (7))){
var inst_29410 = (state_29431[(7)]);
var inst_29411 = (state_29431[(8)]);
var inst_29410__$1 = (state_29431[(2)]);
var inst_29411__$1 = cljs.core.nth.call(null,inst_29410__$1,(0),null);
var inst_29412 = cljs.core.nth.call(null,inst_29410__$1,(1),null);
var inst_29413 = (inst_29411__$1 == null);
var state_29431__$1 = (function (){var statearr_29433 = state_29431;
(statearr_29433[(7)] = inst_29410__$1);

(statearr_29433[(8)] = inst_29411__$1);

(statearr_29433[(9)] = inst_29412);

return statearr_29433;
})();
if(cljs.core.truth_(inst_29413)){
var statearr_29434_29460 = state_29431__$1;
(statearr_29434_29460[(1)] = (8));

} else {
var statearr_29435_29461 = state_29431__$1;
(statearr_29435_29461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (1))){
var inst_29400 = cljs.core.vec.call(null,chs);
var inst_29401 = inst_29400;
var state_29431__$1 = (function (){var statearr_29436 = state_29431;
(statearr_29436[(10)] = inst_29401);

return statearr_29436;
})();
var statearr_29437_29462 = state_29431__$1;
(statearr_29437_29462[(2)] = null);

(statearr_29437_29462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (4))){
var inst_29401 = (state_29431[(10)]);
var state_29431__$1 = state_29431;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29431__$1,(7),inst_29401);
} else {
if((state_val_29432 === (6))){
var inst_29427 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29438_29463 = state_29431__$1;
(statearr_29438_29463[(2)] = inst_29427);

(statearr_29438_29463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (3))){
var inst_29429 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29431__$1,inst_29429);
} else {
if((state_val_29432 === (2))){
var inst_29401 = (state_29431[(10)]);
var inst_29403 = cljs.core.count.call(null,inst_29401);
var inst_29404 = (inst_29403 > (0));
var state_29431__$1 = state_29431;
if(cljs.core.truth_(inst_29404)){
var statearr_29440_29464 = state_29431__$1;
(statearr_29440_29464[(1)] = (4));

} else {
var statearr_29441_29465 = state_29431__$1;
(statearr_29441_29465[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (11))){
var inst_29401 = (state_29431[(10)]);
var inst_29420 = (state_29431[(2)]);
var tmp29439 = inst_29401;
var inst_29401__$1 = tmp29439;
var state_29431__$1 = (function (){var statearr_29442 = state_29431;
(statearr_29442[(11)] = inst_29420);

(statearr_29442[(10)] = inst_29401__$1);

return statearr_29442;
})();
var statearr_29443_29466 = state_29431__$1;
(statearr_29443_29466[(2)] = null);

(statearr_29443_29466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (9))){
var inst_29411 = (state_29431[(8)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29431__$1,(11),out,inst_29411);
} else {
if((state_val_29432 === (5))){
var inst_29425 = cljs.core.async.close_BANG_.call(null,out);
var state_29431__$1 = state_29431;
var statearr_29444_29467 = state_29431__$1;
(statearr_29444_29467[(2)] = inst_29425);

(statearr_29444_29467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (10))){
var inst_29423 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29445_29468 = state_29431__$1;
(statearr_29445_29468[(2)] = inst_29423);

(statearr_29445_29468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (8))){
var inst_29410 = (state_29431[(7)]);
var inst_29411 = (state_29431[(8)]);
var inst_29412 = (state_29431[(9)]);
var inst_29401 = (state_29431[(10)]);
var inst_29415 = (function (){var cs = inst_29401;
var vec__29406 = inst_29410;
var v = inst_29411;
var c = inst_29412;
return ((function (cs,vec__29406,v,c,inst_29410,inst_29411,inst_29412,inst_29401,state_val_29432,c__24464__auto___29459,out){
return (function (p1__29396_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29396_SHARP_);
});
;})(cs,vec__29406,v,c,inst_29410,inst_29411,inst_29412,inst_29401,state_val_29432,c__24464__auto___29459,out))
})();
var inst_29416 = cljs.core.filterv.call(null,inst_29415,inst_29401);
var inst_29401__$1 = inst_29416;
var state_29431__$1 = (function (){var statearr_29446 = state_29431;
(statearr_29446[(10)] = inst_29401__$1);

return statearr_29446;
})();
var statearr_29447_29469 = state_29431__$1;
(statearr_29447_29469[(2)] = null);

(statearr_29447_29469[(1)] = (2));


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
});})(c__24464__auto___29459,out))
;
return ((function (switch__24406__auto__,c__24464__auto___29459,out){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_29451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29451[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_29451[(1)] = (1));

return statearr_29451;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_29431){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_29431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e29452){if((e29452 instanceof Object)){
var ex__24410__auto__ = e29452;
var statearr_29453_29470 = state_29431;
(statearr_29453_29470[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29471 = state_29431;
state_29431 = G__29471;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_29431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_29431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___29459,out))
})();
var state__24466__auto__ = (function (){var statearr_29454 = f__24465__auto__.call(null);
(statearr_29454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___29459);

return statearr_29454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___29459,out))
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
var args29472 = [];
var len__20374__auto___29521 = arguments.length;
var i__20375__auto___29522 = (0);
while(true){
if((i__20375__auto___29522 < len__20374__auto___29521)){
args29472.push((arguments[i__20375__auto___29522]));

var G__29523 = (i__20375__auto___29522 + (1));
i__20375__auto___29522 = G__29523;
continue;
} else {
}
break;
}

var G__29474 = args29472.length;
switch (G__29474) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29472.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24464__auto___29525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___29525,out){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___29525,out){
return (function (state_29498){
var state_val_29499 = (state_29498[(1)]);
if((state_val_29499 === (7))){
var inst_29480 = (state_29498[(7)]);
var inst_29480__$1 = (state_29498[(2)]);
var inst_29481 = (inst_29480__$1 == null);
var inst_29482 = cljs.core.not.call(null,inst_29481);
var state_29498__$1 = (function (){var statearr_29500 = state_29498;
(statearr_29500[(7)] = inst_29480__$1);

return statearr_29500;
})();
if(inst_29482){
var statearr_29501_29526 = state_29498__$1;
(statearr_29501_29526[(1)] = (8));

} else {
var statearr_29502_29527 = state_29498__$1;
(statearr_29502_29527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (1))){
var inst_29475 = (0);
var state_29498__$1 = (function (){var statearr_29503 = state_29498;
(statearr_29503[(8)] = inst_29475);

return statearr_29503;
})();
var statearr_29504_29528 = state_29498__$1;
(statearr_29504_29528[(2)] = null);

(statearr_29504_29528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (4))){
var state_29498__$1 = state_29498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29498__$1,(7),ch);
} else {
if((state_val_29499 === (6))){
var inst_29493 = (state_29498[(2)]);
var state_29498__$1 = state_29498;
var statearr_29505_29529 = state_29498__$1;
(statearr_29505_29529[(2)] = inst_29493);

(statearr_29505_29529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (3))){
var inst_29495 = (state_29498[(2)]);
var inst_29496 = cljs.core.async.close_BANG_.call(null,out);
var state_29498__$1 = (function (){var statearr_29506 = state_29498;
(statearr_29506[(9)] = inst_29495);

return statearr_29506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29498__$1,inst_29496);
} else {
if((state_val_29499 === (2))){
var inst_29475 = (state_29498[(8)]);
var inst_29477 = (inst_29475 < n);
var state_29498__$1 = state_29498;
if(cljs.core.truth_(inst_29477)){
var statearr_29507_29530 = state_29498__$1;
(statearr_29507_29530[(1)] = (4));

} else {
var statearr_29508_29531 = state_29498__$1;
(statearr_29508_29531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (11))){
var inst_29475 = (state_29498[(8)]);
var inst_29485 = (state_29498[(2)]);
var inst_29486 = (inst_29475 + (1));
var inst_29475__$1 = inst_29486;
var state_29498__$1 = (function (){var statearr_29509 = state_29498;
(statearr_29509[(10)] = inst_29485);

(statearr_29509[(8)] = inst_29475__$1);

return statearr_29509;
})();
var statearr_29510_29532 = state_29498__$1;
(statearr_29510_29532[(2)] = null);

(statearr_29510_29532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (9))){
var state_29498__$1 = state_29498;
var statearr_29511_29533 = state_29498__$1;
(statearr_29511_29533[(2)] = null);

(statearr_29511_29533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (5))){
var state_29498__$1 = state_29498;
var statearr_29512_29534 = state_29498__$1;
(statearr_29512_29534[(2)] = null);

(statearr_29512_29534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (10))){
var inst_29490 = (state_29498[(2)]);
var state_29498__$1 = state_29498;
var statearr_29513_29535 = state_29498__$1;
(statearr_29513_29535[(2)] = inst_29490);

(statearr_29513_29535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (8))){
var inst_29480 = (state_29498[(7)]);
var state_29498__$1 = state_29498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29498__$1,(11),out,inst_29480);
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
});})(c__24464__auto___29525,out))
;
return ((function (switch__24406__auto__,c__24464__auto___29525,out){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_29517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29517[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_29517[(1)] = (1));

return statearr_29517;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_29498){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_29498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e29518){if((e29518 instanceof Object)){
var ex__24410__auto__ = e29518;
var statearr_29519_29536 = state_29498;
(statearr_29519_29536[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29537 = state_29498;
state_29498 = G__29537;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_29498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_29498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___29525,out))
})();
var state__24466__auto__ = (function (){var statearr_29520 = f__24465__auto__.call(null);
(statearr_29520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___29525);

return statearr_29520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___29525,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29545 = (function (f,ch,meta29546){
this.f = f;
this.ch = ch;
this.meta29546 = meta29546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29547,meta29546__$1){
var self__ = this;
var _29547__$1 = this;
return (new cljs.core.async.t_cljs$core$async29545(self__.f,self__.ch,meta29546__$1));
});

cljs.core.async.t_cljs$core$async29545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29547){
var self__ = this;
var _29547__$1 = this;
return self__.meta29546;
});

cljs.core.async.t_cljs$core$async29545.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29545.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29545.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29545.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29545.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29548 = (function (f,ch,meta29546,_,fn1,meta29549){
this.f = f;
this.ch = ch;
this.meta29546 = meta29546;
this._ = _;
this.fn1 = fn1;
this.meta29549 = meta29549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29550,meta29549__$1){
var self__ = this;
var _29550__$1 = this;
return (new cljs.core.async.t_cljs$core$async29548(self__.f,self__.ch,self__.meta29546,self__._,self__.fn1,meta29549__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29550){
var self__ = this;
var _29550__$1 = this;
return self__.meta29549;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29538_SHARP_){
return f1.call(null,(((p1__29538_SHARP_ == null))?null:self__.f.call(null,p1__29538_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29548.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29546","meta29546",1727645276,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29545","cljs.core.async/t_cljs$core$async29545",-1134342727,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29549","meta29549",1271355744,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29548";

cljs.core.async.t_cljs$core$async29548.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async29548");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29548 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29548(f__$1,ch__$1,meta29546__$1,___$2,fn1__$1,meta29549){
return (new cljs.core.async.t_cljs$core$async29548(f__$1,ch__$1,meta29546__$1,___$2,fn1__$1,meta29549));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29548(self__.f,self__.ch,self__.meta29546,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19141__auto__ = ret;
if(cljs.core.truth_(and__19141__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19141__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29545.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29545.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29546","meta29546",1727645276,null)], null);
});

cljs.core.async.t_cljs$core$async29545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29545";

cljs.core.async.t_cljs$core$async29545.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async29545");
});

cljs.core.async.__GT_t_cljs$core$async29545 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29545(f__$1,ch__$1,meta29546){
return (new cljs.core.async.t_cljs$core$async29545(f__$1,ch__$1,meta29546));
});

}

return (new cljs.core.async.t_cljs$core$async29545(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29554 = (function (f,ch,meta29555){
this.f = f;
this.ch = ch;
this.meta29555 = meta29555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29556,meta29555__$1){
var self__ = this;
var _29556__$1 = this;
return (new cljs.core.async.t_cljs$core$async29554(self__.f,self__.ch,meta29555__$1));
});

cljs.core.async.t_cljs$core$async29554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29556){
var self__ = this;
var _29556__$1 = this;
return self__.meta29555;
});

cljs.core.async.t_cljs$core$async29554.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29554.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29554.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29554.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29554.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29554.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29555","meta29555",-294213380,null)], null);
});

cljs.core.async.t_cljs$core$async29554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29554";

cljs.core.async.t_cljs$core$async29554.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async29554");
});

cljs.core.async.__GT_t_cljs$core$async29554 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29554(f__$1,ch__$1,meta29555){
return (new cljs.core.async.t_cljs$core$async29554(f__$1,ch__$1,meta29555));
});

}

return (new cljs.core.async.t_cljs$core$async29554(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29560 = (function (p,ch,meta29561){
this.p = p;
this.ch = ch;
this.meta29561 = meta29561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29562,meta29561__$1){
var self__ = this;
var _29562__$1 = this;
return (new cljs.core.async.t_cljs$core$async29560(self__.p,self__.ch,meta29561__$1));
});

cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29562){
var self__ = this;
var _29562__$1 = this;
return self__.meta29561;
});

cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29561","meta29561",-1127860791,null)], null);
});

cljs.core.async.t_cljs$core$async29560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29560";

cljs.core.async.t_cljs$core$async29560.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__,opt__19812__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"cljs.core.async/t_cljs$core$async29560");
});

cljs.core.async.__GT_t_cljs$core$async29560 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29560(p__$1,ch__$1,meta29561){
return (new cljs.core.async.t_cljs$core$async29560(p__$1,ch__$1,meta29561));
});

}

return (new cljs.core.async.t_cljs$core$async29560(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29563 = [];
var len__20374__auto___29607 = arguments.length;
var i__20375__auto___29608 = (0);
while(true){
if((i__20375__auto___29608 < len__20374__auto___29607)){
args29563.push((arguments[i__20375__auto___29608]));

var G__29609 = (i__20375__auto___29608 + (1));
i__20375__auto___29608 = G__29609;
continue;
} else {
}
break;
}

var G__29565 = args29563.length;
switch (G__29565) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29563.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24464__auto___29611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___29611,out){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___29611,out){
return (function (state_29586){
var state_val_29587 = (state_29586[(1)]);
if((state_val_29587 === (7))){
var inst_29582 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29588_29612 = state_29586__$1;
(statearr_29588_29612[(2)] = inst_29582);

(statearr_29588_29612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (1))){
var state_29586__$1 = state_29586;
var statearr_29589_29613 = state_29586__$1;
(statearr_29589_29613[(2)] = null);

(statearr_29589_29613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (4))){
var inst_29568 = (state_29586[(7)]);
var inst_29568__$1 = (state_29586[(2)]);
var inst_29569 = (inst_29568__$1 == null);
var state_29586__$1 = (function (){var statearr_29590 = state_29586;
(statearr_29590[(7)] = inst_29568__$1);

return statearr_29590;
})();
if(cljs.core.truth_(inst_29569)){
var statearr_29591_29614 = state_29586__$1;
(statearr_29591_29614[(1)] = (5));

} else {
var statearr_29592_29615 = state_29586__$1;
(statearr_29592_29615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (6))){
var inst_29568 = (state_29586[(7)]);
var inst_29573 = p.call(null,inst_29568);
var state_29586__$1 = state_29586;
if(cljs.core.truth_(inst_29573)){
var statearr_29593_29616 = state_29586__$1;
(statearr_29593_29616[(1)] = (8));

} else {
var statearr_29594_29617 = state_29586__$1;
(statearr_29594_29617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (3))){
var inst_29584 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29586__$1,inst_29584);
} else {
if((state_val_29587 === (2))){
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29586__$1,(4),ch);
} else {
if((state_val_29587 === (11))){
var inst_29576 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29595_29618 = state_29586__$1;
(statearr_29595_29618[(2)] = inst_29576);

(statearr_29595_29618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (9))){
var state_29586__$1 = state_29586;
var statearr_29596_29619 = state_29586__$1;
(statearr_29596_29619[(2)] = null);

(statearr_29596_29619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (5))){
var inst_29571 = cljs.core.async.close_BANG_.call(null,out);
var state_29586__$1 = state_29586;
var statearr_29597_29620 = state_29586__$1;
(statearr_29597_29620[(2)] = inst_29571);

(statearr_29597_29620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (10))){
var inst_29579 = (state_29586[(2)]);
var state_29586__$1 = (function (){var statearr_29598 = state_29586;
(statearr_29598[(8)] = inst_29579);

return statearr_29598;
})();
var statearr_29599_29621 = state_29586__$1;
(statearr_29599_29621[(2)] = null);

(statearr_29599_29621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (8))){
var inst_29568 = (state_29586[(7)]);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29586__$1,(11),out,inst_29568);
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
});})(c__24464__auto___29611,out))
;
return ((function (switch__24406__auto__,c__24464__auto___29611,out){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_29603 = [null,null,null,null,null,null,null,null,null];
(statearr_29603[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_29603[(1)] = (1));

return statearr_29603;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_29586){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_29586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e29604){if((e29604 instanceof Object)){
var ex__24410__auto__ = e29604;
var statearr_29605_29622 = state_29586;
(statearr_29605_29622[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29623 = state_29586;
state_29586 = G__29623;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_29586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_29586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___29611,out))
})();
var state__24466__auto__ = (function (){var statearr_29606 = f__24465__auto__.call(null);
(statearr_29606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___29611);

return statearr_29606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___29611,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29624 = [];
var len__20374__auto___29627 = arguments.length;
var i__20375__auto___29628 = (0);
while(true){
if((i__20375__auto___29628 < len__20374__auto___29627)){
args29624.push((arguments[i__20375__auto___29628]));

var G__29629 = (i__20375__auto___29628 + (1));
i__20375__auto___29628 = G__29629;
continue;
} else {
}
break;
}

var G__29626 = args29624.length;
switch (G__29626) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29624.length)].join('')));

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
var c__24464__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto__){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto__){
return (function (state_29796){
var state_val_29797 = (state_29796[(1)]);
if((state_val_29797 === (7))){
var inst_29792 = (state_29796[(2)]);
var state_29796__$1 = state_29796;
var statearr_29798_29839 = state_29796__$1;
(statearr_29798_29839[(2)] = inst_29792);

(statearr_29798_29839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (20))){
var inst_29762 = (state_29796[(7)]);
var inst_29773 = (state_29796[(2)]);
var inst_29774 = cljs.core.next.call(null,inst_29762);
var inst_29748 = inst_29774;
var inst_29749 = null;
var inst_29750 = (0);
var inst_29751 = (0);
var state_29796__$1 = (function (){var statearr_29799 = state_29796;
(statearr_29799[(8)] = inst_29751);

(statearr_29799[(9)] = inst_29773);

(statearr_29799[(10)] = inst_29749);

(statearr_29799[(11)] = inst_29750);

(statearr_29799[(12)] = inst_29748);

return statearr_29799;
})();
var statearr_29800_29840 = state_29796__$1;
(statearr_29800_29840[(2)] = null);

(statearr_29800_29840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (1))){
var state_29796__$1 = state_29796;
var statearr_29801_29841 = state_29796__$1;
(statearr_29801_29841[(2)] = null);

(statearr_29801_29841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (4))){
var inst_29737 = (state_29796[(13)]);
var inst_29737__$1 = (state_29796[(2)]);
var inst_29738 = (inst_29737__$1 == null);
var state_29796__$1 = (function (){var statearr_29802 = state_29796;
(statearr_29802[(13)] = inst_29737__$1);

return statearr_29802;
})();
if(cljs.core.truth_(inst_29738)){
var statearr_29803_29842 = state_29796__$1;
(statearr_29803_29842[(1)] = (5));

} else {
var statearr_29804_29843 = state_29796__$1;
(statearr_29804_29843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (15))){
var state_29796__$1 = state_29796;
var statearr_29808_29844 = state_29796__$1;
(statearr_29808_29844[(2)] = null);

(statearr_29808_29844[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (21))){
var state_29796__$1 = state_29796;
var statearr_29809_29845 = state_29796__$1;
(statearr_29809_29845[(2)] = null);

(statearr_29809_29845[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (13))){
var inst_29751 = (state_29796[(8)]);
var inst_29749 = (state_29796[(10)]);
var inst_29750 = (state_29796[(11)]);
var inst_29748 = (state_29796[(12)]);
var inst_29758 = (state_29796[(2)]);
var inst_29759 = (inst_29751 + (1));
var tmp29805 = inst_29749;
var tmp29806 = inst_29750;
var tmp29807 = inst_29748;
var inst_29748__$1 = tmp29807;
var inst_29749__$1 = tmp29805;
var inst_29750__$1 = tmp29806;
var inst_29751__$1 = inst_29759;
var state_29796__$1 = (function (){var statearr_29810 = state_29796;
(statearr_29810[(8)] = inst_29751__$1);

(statearr_29810[(10)] = inst_29749__$1);

(statearr_29810[(14)] = inst_29758);

(statearr_29810[(11)] = inst_29750__$1);

(statearr_29810[(12)] = inst_29748__$1);

return statearr_29810;
})();
var statearr_29811_29846 = state_29796__$1;
(statearr_29811_29846[(2)] = null);

(statearr_29811_29846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (22))){
var state_29796__$1 = state_29796;
var statearr_29812_29847 = state_29796__$1;
(statearr_29812_29847[(2)] = null);

(statearr_29812_29847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (6))){
var inst_29737 = (state_29796[(13)]);
var inst_29746 = f.call(null,inst_29737);
var inst_29747 = cljs.core.seq.call(null,inst_29746);
var inst_29748 = inst_29747;
var inst_29749 = null;
var inst_29750 = (0);
var inst_29751 = (0);
var state_29796__$1 = (function (){var statearr_29813 = state_29796;
(statearr_29813[(8)] = inst_29751);

(statearr_29813[(10)] = inst_29749);

(statearr_29813[(11)] = inst_29750);

(statearr_29813[(12)] = inst_29748);

return statearr_29813;
})();
var statearr_29814_29848 = state_29796__$1;
(statearr_29814_29848[(2)] = null);

(statearr_29814_29848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (17))){
var inst_29762 = (state_29796[(7)]);
var inst_29766 = cljs.core.chunk_first.call(null,inst_29762);
var inst_29767 = cljs.core.chunk_rest.call(null,inst_29762);
var inst_29768 = cljs.core.count.call(null,inst_29766);
var inst_29748 = inst_29767;
var inst_29749 = inst_29766;
var inst_29750 = inst_29768;
var inst_29751 = (0);
var state_29796__$1 = (function (){var statearr_29815 = state_29796;
(statearr_29815[(8)] = inst_29751);

(statearr_29815[(10)] = inst_29749);

(statearr_29815[(11)] = inst_29750);

(statearr_29815[(12)] = inst_29748);

return statearr_29815;
})();
var statearr_29816_29849 = state_29796__$1;
(statearr_29816_29849[(2)] = null);

(statearr_29816_29849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (3))){
var inst_29794 = (state_29796[(2)]);
var state_29796__$1 = state_29796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29796__$1,inst_29794);
} else {
if((state_val_29797 === (12))){
var inst_29782 = (state_29796[(2)]);
var state_29796__$1 = state_29796;
var statearr_29817_29850 = state_29796__$1;
(statearr_29817_29850[(2)] = inst_29782);

(statearr_29817_29850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (2))){
var state_29796__$1 = state_29796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29796__$1,(4),in$);
} else {
if((state_val_29797 === (23))){
var inst_29790 = (state_29796[(2)]);
var state_29796__$1 = state_29796;
var statearr_29818_29851 = state_29796__$1;
(statearr_29818_29851[(2)] = inst_29790);

(statearr_29818_29851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (19))){
var inst_29777 = (state_29796[(2)]);
var state_29796__$1 = state_29796;
var statearr_29819_29852 = state_29796__$1;
(statearr_29819_29852[(2)] = inst_29777);

(statearr_29819_29852[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (11))){
var inst_29762 = (state_29796[(7)]);
var inst_29748 = (state_29796[(12)]);
var inst_29762__$1 = cljs.core.seq.call(null,inst_29748);
var state_29796__$1 = (function (){var statearr_29820 = state_29796;
(statearr_29820[(7)] = inst_29762__$1);

return statearr_29820;
})();
if(inst_29762__$1){
var statearr_29821_29853 = state_29796__$1;
(statearr_29821_29853[(1)] = (14));

} else {
var statearr_29822_29854 = state_29796__$1;
(statearr_29822_29854[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (9))){
var inst_29784 = (state_29796[(2)]);
var inst_29785 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29796__$1 = (function (){var statearr_29823 = state_29796;
(statearr_29823[(15)] = inst_29784);

return statearr_29823;
})();
if(cljs.core.truth_(inst_29785)){
var statearr_29824_29855 = state_29796__$1;
(statearr_29824_29855[(1)] = (21));

} else {
var statearr_29825_29856 = state_29796__$1;
(statearr_29825_29856[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (5))){
var inst_29740 = cljs.core.async.close_BANG_.call(null,out);
var state_29796__$1 = state_29796;
var statearr_29826_29857 = state_29796__$1;
(statearr_29826_29857[(2)] = inst_29740);

(statearr_29826_29857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (14))){
var inst_29762 = (state_29796[(7)]);
var inst_29764 = cljs.core.chunked_seq_QMARK_.call(null,inst_29762);
var state_29796__$1 = state_29796;
if(inst_29764){
var statearr_29827_29858 = state_29796__$1;
(statearr_29827_29858[(1)] = (17));

} else {
var statearr_29828_29859 = state_29796__$1;
(statearr_29828_29859[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (16))){
var inst_29780 = (state_29796[(2)]);
var state_29796__$1 = state_29796;
var statearr_29829_29860 = state_29796__$1;
(statearr_29829_29860[(2)] = inst_29780);

(statearr_29829_29860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29797 === (10))){
var inst_29751 = (state_29796[(8)]);
var inst_29749 = (state_29796[(10)]);
var inst_29756 = cljs.core._nth.call(null,inst_29749,inst_29751);
var state_29796__$1 = state_29796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29796__$1,(13),out,inst_29756);
} else {
if((state_val_29797 === (18))){
var inst_29762 = (state_29796[(7)]);
var inst_29771 = cljs.core.first.call(null,inst_29762);
var state_29796__$1 = state_29796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29796__$1,(20),out,inst_29771);
} else {
if((state_val_29797 === (8))){
var inst_29751 = (state_29796[(8)]);
var inst_29750 = (state_29796[(11)]);
var inst_29753 = (inst_29751 < inst_29750);
var inst_29754 = inst_29753;
var state_29796__$1 = state_29796;
if(cljs.core.truth_(inst_29754)){
var statearr_29830_29861 = state_29796__$1;
(statearr_29830_29861[(1)] = (10));

} else {
var statearr_29831_29862 = state_29796__$1;
(statearr_29831_29862[(1)] = (11));

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
});})(c__24464__auto__))
;
return ((function (switch__24406__auto__,c__24464__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24407__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24407__auto____0 = (function (){
var statearr_29835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29835[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24407__auto__);

(statearr_29835[(1)] = (1));

return statearr_29835;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24407__auto____1 = (function (state_29796){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_29796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e29836){if((e29836 instanceof Object)){
var ex__24410__auto__ = e29836;
var statearr_29837_29863 = state_29796;
(statearr_29837_29863[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29864 = state_29796;
state_29796 = G__29864;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24407__auto__ = function(state_29796){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24407__auto____1.call(this,state_29796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24407__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24407__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto__))
})();
var state__24466__auto__ = (function (){var statearr_29838 = f__24465__auto__.call(null);
(statearr_29838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto__);

return statearr_29838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto__))
);

return c__24464__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29865 = [];
var len__20374__auto___29868 = arguments.length;
var i__20375__auto___29869 = (0);
while(true){
if((i__20375__auto___29869 < len__20374__auto___29868)){
args29865.push((arguments[i__20375__auto___29869]));

var G__29870 = (i__20375__auto___29869 + (1));
i__20375__auto___29869 = G__29870;
continue;
} else {
}
break;
}

var G__29867 = args29865.length;
switch (G__29867) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29865.length)].join('')));

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
var args29872 = [];
var len__20374__auto___29875 = arguments.length;
var i__20375__auto___29876 = (0);
while(true){
if((i__20375__auto___29876 < len__20374__auto___29875)){
args29872.push((arguments[i__20375__auto___29876]));

var G__29877 = (i__20375__auto___29876 + (1));
i__20375__auto___29876 = G__29877;
continue;
} else {
}
break;
}

var G__29874 = args29872.length;
switch (G__29874) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29872.length)].join('')));

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
var args29879 = [];
var len__20374__auto___29930 = arguments.length;
var i__20375__auto___29931 = (0);
while(true){
if((i__20375__auto___29931 < len__20374__auto___29930)){
args29879.push((arguments[i__20375__auto___29931]));

var G__29932 = (i__20375__auto___29931 + (1));
i__20375__auto___29931 = G__29932;
continue;
} else {
}
break;
}

var G__29881 = args29879.length;
switch (G__29881) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29879.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24464__auto___29934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___29934,out){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___29934,out){
return (function (state_29905){
var state_val_29906 = (state_29905[(1)]);
if((state_val_29906 === (7))){
var inst_29900 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
var statearr_29907_29935 = state_29905__$1;
(statearr_29907_29935[(2)] = inst_29900);

(statearr_29907_29935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (1))){
var inst_29882 = null;
var state_29905__$1 = (function (){var statearr_29908 = state_29905;
(statearr_29908[(7)] = inst_29882);

return statearr_29908;
})();
var statearr_29909_29936 = state_29905__$1;
(statearr_29909_29936[(2)] = null);

(statearr_29909_29936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (4))){
var inst_29885 = (state_29905[(8)]);
var inst_29885__$1 = (state_29905[(2)]);
var inst_29886 = (inst_29885__$1 == null);
var inst_29887 = cljs.core.not.call(null,inst_29886);
var state_29905__$1 = (function (){var statearr_29910 = state_29905;
(statearr_29910[(8)] = inst_29885__$1);

return statearr_29910;
})();
if(inst_29887){
var statearr_29911_29937 = state_29905__$1;
(statearr_29911_29937[(1)] = (5));

} else {
var statearr_29912_29938 = state_29905__$1;
(statearr_29912_29938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (6))){
var state_29905__$1 = state_29905;
var statearr_29913_29939 = state_29905__$1;
(statearr_29913_29939[(2)] = null);

(statearr_29913_29939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (3))){
var inst_29902 = (state_29905[(2)]);
var inst_29903 = cljs.core.async.close_BANG_.call(null,out);
var state_29905__$1 = (function (){var statearr_29914 = state_29905;
(statearr_29914[(9)] = inst_29902);

return statearr_29914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29905__$1,inst_29903);
} else {
if((state_val_29906 === (2))){
var state_29905__$1 = state_29905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29905__$1,(4),ch);
} else {
if((state_val_29906 === (11))){
var inst_29885 = (state_29905[(8)]);
var inst_29894 = (state_29905[(2)]);
var inst_29882 = inst_29885;
var state_29905__$1 = (function (){var statearr_29915 = state_29905;
(statearr_29915[(7)] = inst_29882);

(statearr_29915[(10)] = inst_29894);

return statearr_29915;
})();
var statearr_29916_29940 = state_29905__$1;
(statearr_29916_29940[(2)] = null);

(statearr_29916_29940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (9))){
var inst_29885 = (state_29905[(8)]);
var state_29905__$1 = state_29905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29905__$1,(11),out,inst_29885);
} else {
if((state_val_29906 === (5))){
var inst_29885 = (state_29905[(8)]);
var inst_29882 = (state_29905[(7)]);
var inst_29889 = cljs.core._EQ_.call(null,inst_29885,inst_29882);
var state_29905__$1 = state_29905;
if(inst_29889){
var statearr_29918_29941 = state_29905__$1;
(statearr_29918_29941[(1)] = (8));

} else {
var statearr_29919_29942 = state_29905__$1;
(statearr_29919_29942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (10))){
var inst_29897 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
var statearr_29920_29943 = state_29905__$1;
(statearr_29920_29943[(2)] = inst_29897);

(statearr_29920_29943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (8))){
var inst_29882 = (state_29905[(7)]);
var tmp29917 = inst_29882;
var inst_29882__$1 = tmp29917;
var state_29905__$1 = (function (){var statearr_29921 = state_29905;
(statearr_29921[(7)] = inst_29882__$1);

return statearr_29921;
})();
var statearr_29922_29944 = state_29905__$1;
(statearr_29922_29944[(2)] = null);

(statearr_29922_29944[(1)] = (2));


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
});})(c__24464__auto___29934,out))
;
return ((function (switch__24406__auto__,c__24464__auto___29934,out){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_29926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29926[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_29926[(1)] = (1));

return statearr_29926;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_29905){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_29905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e29927){if((e29927 instanceof Object)){
var ex__24410__auto__ = e29927;
var statearr_29928_29945 = state_29905;
(statearr_29928_29945[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29946 = state_29905;
state_29905 = G__29946;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_29905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_29905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___29934,out))
})();
var state__24466__auto__ = (function (){var statearr_29929 = f__24465__auto__.call(null);
(statearr_29929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___29934);

return statearr_29929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___29934,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29947 = [];
var len__20374__auto___30017 = arguments.length;
var i__20375__auto___30018 = (0);
while(true){
if((i__20375__auto___30018 < len__20374__auto___30017)){
args29947.push((arguments[i__20375__auto___30018]));

var G__30019 = (i__20375__auto___30018 + (1));
i__20375__auto___30018 = G__30019;
continue;
} else {
}
break;
}

var G__29949 = args29947.length;
switch (G__29949) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29947.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24464__auto___30021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___30021,out){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___30021,out){
return (function (state_29987){
var state_val_29988 = (state_29987[(1)]);
if((state_val_29988 === (7))){
var inst_29983 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_29989_30022 = state_29987__$1;
(statearr_29989_30022[(2)] = inst_29983);

(statearr_29989_30022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (1))){
var inst_29950 = (new Array(n));
var inst_29951 = inst_29950;
var inst_29952 = (0);
var state_29987__$1 = (function (){var statearr_29990 = state_29987;
(statearr_29990[(7)] = inst_29951);

(statearr_29990[(8)] = inst_29952);

return statearr_29990;
})();
var statearr_29991_30023 = state_29987__$1;
(statearr_29991_30023[(2)] = null);

(statearr_29991_30023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (4))){
var inst_29955 = (state_29987[(9)]);
var inst_29955__$1 = (state_29987[(2)]);
var inst_29956 = (inst_29955__$1 == null);
var inst_29957 = cljs.core.not.call(null,inst_29956);
var state_29987__$1 = (function (){var statearr_29992 = state_29987;
(statearr_29992[(9)] = inst_29955__$1);

return statearr_29992;
})();
if(inst_29957){
var statearr_29993_30024 = state_29987__$1;
(statearr_29993_30024[(1)] = (5));

} else {
var statearr_29994_30025 = state_29987__$1;
(statearr_29994_30025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (15))){
var inst_29977 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_29995_30026 = state_29987__$1;
(statearr_29995_30026[(2)] = inst_29977);

(statearr_29995_30026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (13))){
var state_29987__$1 = state_29987;
var statearr_29996_30027 = state_29987__$1;
(statearr_29996_30027[(2)] = null);

(statearr_29996_30027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (6))){
var inst_29952 = (state_29987[(8)]);
var inst_29973 = (inst_29952 > (0));
var state_29987__$1 = state_29987;
if(cljs.core.truth_(inst_29973)){
var statearr_29997_30028 = state_29987__$1;
(statearr_29997_30028[(1)] = (12));

} else {
var statearr_29998_30029 = state_29987__$1;
(statearr_29998_30029[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (3))){
var inst_29985 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29987__$1,inst_29985);
} else {
if((state_val_29988 === (12))){
var inst_29951 = (state_29987[(7)]);
var inst_29975 = cljs.core.vec.call(null,inst_29951);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29987__$1,(15),out,inst_29975);
} else {
if((state_val_29988 === (2))){
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29987__$1,(4),ch);
} else {
if((state_val_29988 === (11))){
var inst_29967 = (state_29987[(2)]);
var inst_29968 = (new Array(n));
var inst_29951 = inst_29968;
var inst_29952 = (0);
var state_29987__$1 = (function (){var statearr_29999 = state_29987;
(statearr_29999[(7)] = inst_29951);

(statearr_29999[(10)] = inst_29967);

(statearr_29999[(8)] = inst_29952);

return statearr_29999;
})();
var statearr_30000_30030 = state_29987__$1;
(statearr_30000_30030[(2)] = null);

(statearr_30000_30030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (9))){
var inst_29951 = (state_29987[(7)]);
var inst_29965 = cljs.core.vec.call(null,inst_29951);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29987__$1,(11),out,inst_29965);
} else {
if((state_val_29988 === (5))){
var inst_29955 = (state_29987[(9)]);
var inst_29960 = (state_29987[(11)]);
var inst_29951 = (state_29987[(7)]);
var inst_29952 = (state_29987[(8)]);
var inst_29959 = (inst_29951[inst_29952] = inst_29955);
var inst_29960__$1 = (inst_29952 + (1));
var inst_29961 = (inst_29960__$1 < n);
var state_29987__$1 = (function (){var statearr_30001 = state_29987;
(statearr_30001[(11)] = inst_29960__$1);

(statearr_30001[(12)] = inst_29959);

return statearr_30001;
})();
if(cljs.core.truth_(inst_29961)){
var statearr_30002_30031 = state_29987__$1;
(statearr_30002_30031[(1)] = (8));

} else {
var statearr_30003_30032 = state_29987__$1;
(statearr_30003_30032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (14))){
var inst_29980 = (state_29987[(2)]);
var inst_29981 = cljs.core.async.close_BANG_.call(null,out);
var state_29987__$1 = (function (){var statearr_30005 = state_29987;
(statearr_30005[(13)] = inst_29980);

return statearr_30005;
})();
var statearr_30006_30033 = state_29987__$1;
(statearr_30006_30033[(2)] = inst_29981);

(statearr_30006_30033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (10))){
var inst_29971 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30007_30034 = state_29987__$1;
(statearr_30007_30034[(2)] = inst_29971);

(statearr_30007_30034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (8))){
var inst_29960 = (state_29987[(11)]);
var inst_29951 = (state_29987[(7)]);
var tmp30004 = inst_29951;
var inst_29951__$1 = tmp30004;
var inst_29952 = inst_29960;
var state_29987__$1 = (function (){var statearr_30008 = state_29987;
(statearr_30008[(7)] = inst_29951__$1);

(statearr_30008[(8)] = inst_29952);

return statearr_30008;
})();
var statearr_30009_30035 = state_29987__$1;
(statearr_30009_30035[(2)] = null);

(statearr_30009_30035[(1)] = (2));


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
});})(c__24464__auto___30021,out))
;
return ((function (switch__24406__auto__,c__24464__auto___30021,out){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_30013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30013[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_30013[(1)] = (1));

return statearr_30013;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_29987){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_29987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e30014){if((e30014 instanceof Object)){
var ex__24410__auto__ = e30014;
var statearr_30015_30036 = state_29987;
(statearr_30015_30036[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30037 = state_29987;
state_29987 = G__30037;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_29987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_29987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___30021,out))
})();
var state__24466__auto__ = (function (){var statearr_30016 = f__24465__auto__.call(null);
(statearr_30016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___30021);

return statearr_30016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___30021,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30038 = [];
var len__20374__auto___30112 = arguments.length;
var i__20375__auto___30113 = (0);
while(true){
if((i__20375__auto___30113 < len__20374__auto___30112)){
args30038.push((arguments[i__20375__auto___30113]));

var G__30114 = (i__20375__auto___30113 + (1));
i__20375__auto___30113 = G__30114;
continue;
} else {
}
break;
}

var G__30040 = args30038.length;
switch (G__30040) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30038.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24464__auto___30116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24464__auto___30116,out){
return (function (){
var f__24465__auto__ = (function (){var switch__24406__auto__ = ((function (c__24464__auto___30116,out){
return (function (state_30082){
var state_val_30083 = (state_30082[(1)]);
if((state_val_30083 === (7))){
var inst_30078 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
var statearr_30084_30117 = state_30082__$1;
(statearr_30084_30117[(2)] = inst_30078);

(statearr_30084_30117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (1))){
var inst_30041 = [];
var inst_30042 = inst_30041;
var inst_30043 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30082__$1 = (function (){var statearr_30085 = state_30082;
(statearr_30085[(7)] = inst_30043);

(statearr_30085[(8)] = inst_30042);

return statearr_30085;
})();
var statearr_30086_30118 = state_30082__$1;
(statearr_30086_30118[(2)] = null);

(statearr_30086_30118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (4))){
var inst_30046 = (state_30082[(9)]);
var inst_30046__$1 = (state_30082[(2)]);
var inst_30047 = (inst_30046__$1 == null);
var inst_30048 = cljs.core.not.call(null,inst_30047);
var state_30082__$1 = (function (){var statearr_30087 = state_30082;
(statearr_30087[(9)] = inst_30046__$1);

return statearr_30087;
})();
if(inst_30048){
var statearr_30088_30119 = state_30082__$1;
(statearr_30088_30119[(1)] = (5));

} else {
var statearr_30089_30120 = state_30082__$1;
(statearr_30089_30120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (15))){
var inst_30072 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
var statearr_30090_30121 = state_30082__$1;
(statearr_30090_30121[(2)] = inst_30072);

(statearr_30090_30121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (13))){
var state_30082__$1 = state_30082;
var statearr_30091_30122 = state_30082__$1;
(statearr_30091_30122[(2)] = null);

(statearr_30091_30122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (6))){
var inst_30042 = (state_30082[(8)]);
var inst_30067 = inst_30042.length;
var inst_30068 = (inst_30067 > (0));
var state_30082__$1 = state_30082;
if(cljs.core.truth_(inst_30068)){
var statearr_30092_30123 = state_30082__$1;
(statearr_30092_30123[(1)] = (12));

} else {
var statearr_30093_30124 = state_30082__$1;
(statearr_30093_30124[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (3))){
var inst_30080 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30082__$1,inst_30080);
} else {
if((state_val_30083 === (12))){
var inst_30042 = (state_30082[(8)]);
var inst_30070 = cljs.core.vec.call(null,inst_30042);
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30082__$1,(15),out,inst_30070);
} else {
if((state_val_30083 === (2))){
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30082__$1,(4),ch);
} else {
if((state_val_30083 === (11))){
var inst_30050 = (state_30082[(10)]);
var inst_30046 = (state_30082[(9)]);
var inst_30060 = (state_30082[(2)]);
var inst_30061 = [];
var inst_30062 = inst_30061.push(inst_30046);
var inst_30042 = inst_30061;
var inst_30043 = inst_30050;
var state_30082__$1 = (function (){var statearr_30094 = state_30082;
(statearr_30094[(11)] = inst_30060);

(statearr_30094[(7)] = inst_30043);

(statearr_30094[(12)] = inst_30062);

(statearr_30094[(8)] = inst_30042);

return statearr_30094;
})();
var statearr_30095_30125 = state_30082__$1;
(statearr_30095_30125[(2)] = null);

(statearr_30095_30125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (9))){
var inst_30042 = (state_30082[(8)]);
var inst_30058 = cljs.core.vec.call(null,inst_30042);
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30082__$1,(11),out,inst_30058);
} else {
if((state_val_30083 === (5))){
var inst_30050 = (state_30082[(10)]);
var inst_30046 = (state_30082[(9)]);
var inst_30043 = (state_30082[(7)]);
var inst_30050__$1 = f.call(null,inst_30046);
var inst_30051 = cljs.core._EQ_.call(null,inst_30050__$1,inst_30043);
var inst_30052 = cljs.core.keyword_identical_QMARK_.call(null,inst_30043,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30053 = (inst_30051) || (inst_30052);
var state_30082__$1 = (function (){var statearr_30096 = state_30082;
(statearr_30096[(10)] = inst_30050__$1);

return statearr_30096;
})();
if(cljs.core.truth_(inst_30053)){
var statearr_30097_30126 = state_30082__$1;
(statearr_30097_30126[(1)] = (8));

} else {
var statearr_30098_30127 = state_30082__$1;
(statearr_30098_30127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (14))){
var inst_30075 = (state_30082[(2)]);
var inst_30076 = cljs.core.async.close_BANG_.call(null,out);
var state_30082__$1 = (function (){var statearr_30100 = state_30082;
(statearr_30100[(13)] = inst_30075);

return statearr_30100;
})();
var statearr_30101_30128 = state_30082__$1;
(statearr_30101_30128[(2)] = inst_30076);

(statearr_30101_30128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (10))){
var inst_30065 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
var statearr_30102_30129 = state_30082__$1;
(statearr_30102_30129[(2)] = inst_30065);

(statearr_30102_30129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (8))){
var inst_30050 = (state_30082[(10)]);
var inst_30046 = (state_30082[(9)]);
var inst_30042 = (state_30082[(8)]);
var inst_30055 = inst_30042.push(inst_30046);
var tmp30099 = inst_30042;
var inst_30042__$1 = tmp30099;
var inst_30043 = inst_30050;
var state_30082__$1 = (function (){var statearr_30103 = state_30082;
(statearr_30103[(14)] = inst_30055);

(statearr_30103[(7)] = inst_30043);

(statearr_30103[(8)] = inst_30042__$1);

return statearr_30103;
})();
var statearr_30104_30130 = state_30082__$1;
(statearr_30104_30130[(2)] = null);

(statearr_30104_30130[(1)] = (2));


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
});})(c__24464__auto___30116,out))
;
return ((function (switch__24406__auto__,c__24464__auto___30116,out){
return (function() {
var cljs$core$async$state_machine__24407__auto__ = null;
var cljs$core$async$state_machine__24407__auto____0 = (function (){
var statearr_30108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30108[(0)] = cljs$core$async$state_machine__24407__auto__);

(statearr_30108[(1)] = (1));

return statearr_30108;
});
var cljs$core$async$state_machine__24407__auto____1 = (function (state_30082){
while(true){
var ret_value__24408__auto__ = (function (){try{while(true){
var result__24409__auto__ = switch__24406__auto__.call(null,state_30082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24409__auto__;
}
break;
}
}catch (e30109){if((e30109 instanceof Object)){
var ex__24410__auto__ = e30109;
var statearr_30110_30131 = state_30082;
(statearr_30110_30131[(5)] = ex__24410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30132 = state_30082;
state_30082 = G__30132;
continue;
} else {
return ret_value__24408__auto__;
}
break;
}
});
cljs$core$async$state_machine__24407__auto__ = function(state_30082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24407__auto____1.call(this,state_30082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24407__auto____0;
cljs$core$async$state_machine__24407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24407__auto____1;
return cljs$core$async$state_machine__24407__auto__;
})()
;})(switch__24406__auto__,c__24464__auto___30116,out))
})();
var state__24466__auto__ = (function (){var statearr_30111 = f__24465__auto__.call(null);
(statearr_30111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24464__auto___30116);

return statearr_30111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24466__auto__);
});})(c__24464__auto___30116,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map