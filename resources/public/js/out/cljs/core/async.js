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
var args40123 = [];
var len__38599__auto___40129 = arguments.length;
var i__38600__auto___40130 = (0);
while(true){
if((i__38600__auto___40130 < len__38599__auto___40129)){
args40123.push((arguments[i__38600__auto___40130]));

var G__40131 = (i__38600__auto___40130 + (1));
i__38600__auto___40130 = G__40131;
continue;
} else {
}
break;
}

var G__40125 = args40123.length;
switch (G__40125) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40123.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40126 = (function (f,blockable,meta40127){
this.f = f;
this.blockable = blockable;
this.meta40127 = meta40127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40128,meta40127__$1){
var self__ = this;
var _40128__$1 = this;
return (new cljs.core.async.t_cljs$core$async40126(self__.f,self__.blockable,meta40127__$1));
});

cljs.core.async.t_cljs$core$async40126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40128){
var self__ = this;
var _40128__$1 = this;
return self__.meta40127;
});

cljs.core.async.t_cljs$core$async40126.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40126.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40127","meta40127",655190166,null)], null);
});

cljs.core.async.t_cljs$core$async40126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40126";

cljs.core.async.t_cljs$core$async40126.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async40126");
});

cljs.core.async.__GT_t_cljs$core$async40126 = (function cljs$core$async$__GT_t_cljs$core$async40126(f__$1,blockable__$1,meta40127){
return (new cljs.core.async.t_cljs$core$async40126(f__$1,blockable__$1,meta40127));
});

}

return (new cljs.core.async.t_cljs$core$async40126(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args40135 = [];
var len__38599__auto___40138 = arguments.length;
var i__38600__auto___40139 = (0);
while(true){
if((i__38600__auto___40139 < len__38599__auto___40138)){
args40135.push((arguments[i__38600__auto___40139]));

var G__40140 = (i__38600__auto___40139 + (1));
i__38600__auto___40139 = G__40140;
continue;
} else {
}
break;
}

var G__40137 = args40135.length;
switch (G__40137) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40135.length)].join('')));

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
var args40142 = [];
var len__38599__auto___40145 = arguments.length;
var i__38600__auto___40146 = (0);
while(true){
if((i__38600__auto___40146 < len__38599__auto___40145)){
args40142.push((arguments[i__38600__auto___40146]));

var G__40147 = (i__38600__auto___40146 + (1));
i__38600__auto___40146 = G__40147;
continue;
} else {
}
break;
}

var G__40144 = args40142.length;
switch (G__40144) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40142.length)].join('')));

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
var args40149 = [];
var len__38599__auto___40152 = arguments.length;
var i__38600__auto___40153 = (0);
while(true){
if((i__38600__auto___40153 < len__38599__auto___40152)){
args40149.push((arguments[i__38600__auto___40153]));

var G__40154 = (i__38600__auto___40153 + (1));
i__38600__auto___40153 = G__40154;
continue;
} else {
}
break;
}

var G__40151 = args40149.length;
switch (G__40151) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40149.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40156 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40156);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40156,ret){
return (function (){
return fn1.call(null,val_40156);
});})(val_40156,ret))
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
var args40157 = [];
var len__38599__auto___40160 = arguments.length;
var i__38600__auto___40161 = (0);
while(true){
if((i__38600__auto___40161 < len__38599__auto___40160)){
args40157.push((arguments[i__38600__auto___40161]));

var G__40162 = (i__38600__auto___40161 + (1));
i__38600__auto___40161 = G__40162;
continue;
} else {
}
break;
}

var G__40159 = args40157.length;
switch (G__40159) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40157.length)].join('')));

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
var n__38399__auto___40164 = n;
var x_40165 = (0);
while(true){
if((x_40165 < n__38399__auto___40164)){
(a[x_40165] = (0));

var G__40166 = (x_40165 + (1));
x_40165 = G__40166;
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

var G__40167 = (i + (1));
i = G__40167;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40171 = (function (flag,meta40172){
this.flag = flag;
this.meta40172 = meta40172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40173,meta40172__$1){
var self__ = this;
var _40173__$1 = this;
return (new cljs.core.async.t_cljs$core$async40171(self__.flag,meta40172__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40173){
var self__ = this;
var _40173__$1 = this;
return self__.meta40172;
});})(flag))
;

cljs.core.async.t_cljs$core$async40171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40171.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40172","meta40172",-2060143325,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40171";

cljs.core.async.t_cljs$core$async40171.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async40171");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40171 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40171(flag__$1,meta40172){
return (new cljs.core.async.t_cljs$core$async40171(flag__$1,meta40172));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40171(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40177 = (function (flag,cb,meta40178){
this.flag = flag;
this.cb = cb;
this.meta40178 = meta40178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40179,meta40178__$1){
var self__ = this;
var _40179__$1 = this;
return (new cljs.core.async.t_cljs$core$async40177(self__.flag,self__.cb,meta40178__$1));
});

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40179){
var self__ = this;
var _40179__$1 = this;
return self__.meta40178;
});

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40178","meta40178",672654948,null)], null);
});

cljs.core.async.t_cljs$core$async40177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40177";

cljs.core.async.t_cljs$core$async40177.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async40177");
});

cljs.core.async.__GT_t_cljs$core$async40177 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40177(flag__$1,cb__$1,meta40178){
return (new cljs.core.async.t_cljs$core$async40177(flag__$1,cb__$1,meta40178));
});

}

return (new cljs.core.async.t_cljs$core$async40177(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40180_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40180_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40181_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40181_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__37378__auto__ = wport;
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40182 = (i + (1));
i = G__40182;
continue;
}
} else {
return null;
}
break;
}
})();
var or__37378__auto__ = ret;
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__37366__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__37366__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__37366__auto__;
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
var args__38606__auto__ = [];
var len__38599__auto___40188 = arguments.length;
var i__38600__auto___40189 = (0);
while(true){
if((i__38600__auto___40189 < len__38599__auto___40188)){
args__38606__auto__.push((arguments[i__38600__auto___40189]));

var G__40190 = (i__38600__auto___40189 + (1));
i__38600__auto___40189 = G__40190;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((1) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38607__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40185){
var map__40186 = p__40185;
var map__40186__$1 = ((((!((map__40186 == null)))?((((map__40186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40186):map__40186);
var opts = map__40186__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40183){
var G__40184 = cljs.core.first.call(null,seq40183);
var seq40183__$1 = cljs.core.next.call(null,seq40183);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40184,seq40183__$1);
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
var args40191 = [];
var len__38599__auto___40241 = arguments.length;
var i__38600__auto___40242 = (0);
while(true){
if((i__38600__auto___40242 < len__38599__auto___40241)){
args40191.push((arguments[i__38600__auto___40242]));

var G__40243 = (i__38600__auto___40242 + (1));
i__38600__auto___40242 = G__40243;
continue;
} else {
}
break;
}

var G__40193 = args40191.length;
switch (G__40193) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40191.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40064__auto___40245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___40245){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___40245){
return (function (state_40217){
var state_val_40218 = (state_40217[(1)]);
if((state_val_40218 === (7))){
var inst_40213 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
var statearr_40219_40246 = state_40217__$1;
(statearr_40219_40246[(2)] = inst_40213);

(statearr_40219_40246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (1))){
var state_40217__$1 = state_40217;
var statearr_40220_40247 = state_40217__$1;
(statearr_40220_40247[(2)] = null);

(statearr_40220_40247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (4))){
var inst_40196 = (state_40217[(7)]);
var inst_40196__$1 = (state_40217[(2)]);
var inst_40197 = (inst_40196__$1 == null);
var state_40217__$1 = (function (){var statearr_40221 = state_40217;
(statearr_40221[(7)] = inst_40196__$1);

return statearr_40221;
})();
if(cljs.core.truth_(inst_40197)){
var statearr_40222_40248 = state_40217__$1;
(statearr_40222_40248[(1)] = (5));

} else {
var statearr_40223_40249 = state_40217__$1;
(statearr_40223_40249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (13))){
var state_40217__$1 = state_40217;
var statearr_40224_40250 = state_40217__$1;
(statearr_40224_40250[(2)] = null);

(statearr_40224_40250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (6))){
var inst_40196 = (state_40217[(7)]);
var state_40217__$1 = state_40217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40217__$1,(11),to,inst_40196);
} else {
if((state_val_40218 === (3))){
var inst_40215 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40217__$1,inst_40215);
} else {
if((state_val_40218 === (12))){
var state_40217__$1 = state_40217;
var statearr_40225_40251 = state_40217__$1;
(statearr_40225_40251[(2)] = null);

(statearr_40225_40251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (2))){
var state_40217__$1 = state_40217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40217__$1,(4),from);
} else {
if((state_val_40218 === (11))){
var inst_40206 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
if(cljs.core.truth_(inst_40206)){
var statearr_40226_40252 = state_40217__$1;
(statearr_40226_40252[(1)] = (12));

} else {
var statearr_40227_40253 = state_40217__$1;
(statearr_40227_40253[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (9))){
var state_40217__$1 = state_40217;
var statearr_40228_40254 = state_40217__$1;
(statearr_40228_40254[(2)] = null);

(statearr_40228_40254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (5))){
var state_40217__$1 = state_40217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40229_40255 = state_40217__$1;
(statearr_40229_40255[(1)] = (8));

} else {
var statearr_40230_40256 = state_40217__$1;
(statearr_40230_40256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (14))){
var inst_40211 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
var statearr_40231_40257 = state_40217__$1;
(statearr_40231_40257[(2)] = inst_40211);

(statearr_40231_40257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (10))){
var inst_40203 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
var statearr_40232_40258 = state_40217__$1;
(statearr_40232_40258[(2)] = inst_40203);

(statearr_40232_40258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (8))){
var inst_40200 = cljs.core.async.close_BANG_.call(null,to);
var state_40217__$1 = state_40217;
var statearr_40233_40259 = state_40217__$1;
(statearr_40233_40259[(2)] = inst_40200);

(statearr_40233_40259[(1)] = (10));


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
});})(c__40064__auto___40245))
;
return ((function (switch__39950__auto__,c__40064__auto___40245){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_40237 = [null,null,null,null,null,null,null,null];
(statearr_40237[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_40237[(1)] = (1));

return statearr_40237;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_40217){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40238){if((e40238 instanceof Object)){
var ex__39954__auto__ = e40238;
var statearr_40239_40260 = state_40217;
(statearr_40239_40260[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40261 = state_40217;
state_40217 = G__40261;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_40217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_40217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___40245))
})();
var state__40066__auto__ = (function (){var statearr_40240 = f__40065__auto__.call(null);
(statearr_40240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___40245);

return statearr_40240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___40245))
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
return (function (p__40449){
var vec__40450 = p__40449;
var v = cljs.core.nth.call(null,vec__40450,(0),null);
var p = cljs.core.nth.call(null,vec__40450,(1),null);
var job = vec__40450;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40064__auto___40636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___40636,res,vec__40450,v,p,job,jobs,results){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___40636,res,vec__40450,v,p,job,jobs,results){
return (function (state_40457){
var state_val_40458 = (state_40457[(1)]);
if((state_val_40458 === (1))){
var state_40457__$1 = state_40457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40457__$1,(2),res,v);
} else {
if((state_val_40458 === (2))){
var inst_40454 = (state_40457[(2)]);
var inst_40455 = cljs.core.async.close_BANG_.call(null,res);
var state_40457__$1 = (function (){var statearr_40459 = state_40457;
(statearr_40459[(7)] = inst_40454);

return statearr_40459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40457__$1,inst_40455);
} else {
return null;
}
}
});})(c__40064__auto___40636,res,vec__40450,v,p,job,jobs,results))
;
return ((function (switch__39950__auto__,c__40064__auto___40636,res,vec__40450,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0 = (function (){
var statearr_40463 = [null,null,null,null,null,null,null,null];
(statearr_40463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__);

(statearr_40463[(1)] = (1));

return statearr_40463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1 = (function (state_40457){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40464){if((e40464 instanceof Object)){
var ex__39954__auto__ = e40464;
var statearr_40465_40637 = state_40457;
(statearr_40465_40637[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40638 = state_40457;
state_40457 = G__40638;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = function(state_40457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1.call(this,state_40457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___40636,res,vec__40450,v,p,job,jobs,results))
})();
var state__40066__auto__ = (function (){var statearr_40466 = f__40065__auto__.call(null);
(statearr_40466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___40636);

return statearr_40466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___40636,res,vec__40450,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40467){
var vec__40468 = p__40467;
var v = cljs.core.nth.call(null,vec__40468,(0),null);
var p = cljs.core.nth.call(null,vec__40468,(1),null);
var job = vec__40468;
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
var n__38399__auto___40639 = n;
var __40640 = (0);
while(true){
if((__40640 < n__38399__auto___40639)){
var G__40471_40641 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40471_40641) {
case "compute":
var c__40064__auto___40643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40640,c__40064__auto___40643,G__40471_40641,n__38399__auto___40639,jobs,results,process,async){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (__40640,c__40064__auto___40643,G__40471_40641,n__38399__auto___40639,jobs,results,process,async){
return (function (state_40484){
var state_val_40485 = (state_40484[(1)]);
if((state_val_40485 === (1))){
var state_40484__$1 = state_40484;
var statearr_40486_40644 = state_40484__$1;
(statearr_40486_40644[(2)] = null);

(statearr_40486_40644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40485 === (2))){
var state_40484__$1 = state_40484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40484__$1,(4),jobs);
} else {
if((state_val_40485 === (3))){
var inst_40482 = (state_40484[(2)]);
var state_40484__$1 = state_40484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40484__$1,inst_40482);
} else {
if((state_val_40485 === (4))){
var inst_40474 = (state_40484[(2)]);
var inst_40475 = process.call(null,inst_40474);
var state_40484__$1 = state_40484;
if(cljs.core.truth_(inst_40475)){
var statearr_40487_40645 = state_40484__$1;
(statearr_40487_40645[(1)] = (5));

} else {
var statearr_40488_40646 = state_40484__$1;
(statearr_40488_40646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40485 === (5))){
var state_40484__$1 = state_40484;
var statearr_40489_40647 = state_40484__$1;
(statearr_40489_40647[(2)] = null);

(statearr_40489_40647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40485 === (6))){
var state_40484__$1 = state_40484;
var statearr_40490_40648 = state_40484__$1;
(statearr_40490_40648[(2)] = null);

(statearr_40490_40648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40485 === (7))){
var inst_40480 = (state_40484[(2)]);
var state_40484__$1 = state_40484;
var statearr_40491_40649 = state_40484__$1;
(statearr_40491_40649[(2)] = inst_40480);

(statearr_40491_40649[(1)] = (3));


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
});})(__40640,c__40064__auto___40643,G__40471_40641,n__38399__auto___40639,jobs,results,process,async))
;
return ((function (__40640,switch__39950__auto__,c__40064__auto___40643,G__40471_40641,n__38399__auto___40639,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0 = (function (){
var statearr_40495 = [null,null,null,null,null,null,null];
(statearr_40495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__);

(statearr_40495[(1)] = (1));

return statearr_40495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1 = (function (state_40484){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40496){if((e40496 instanceof Object)){
var ex__39954__auto__ = e40496;
var statearr_40497_40650 = state_40484;
(statearr_40497_40650[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40651 = state_40484;
state_40484 = G__40651;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = function(state_40484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1.call(this,state_40484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__;
})()
;})(__40640,switch__39950__auto__,c__40064__auto___40643,G__40471_40641,n__38399__auto___40639,jobs,results,process,async))
})();
var state__40066__auto__ = (function (){var statearr_40498 = f__40065__auto__.call(null);
(statearr_40498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___40643);

return statearr_40498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(__40640,c__40064__auto___40643,G__40471_40641,n__38399__auto___40639,jobs,results,process,async))
);


break;
case "async":
var c__40064__auto___40652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40640,c__40064__auto___40652,G__40471_40641,n__38399__auto___40639,jobs,results,process,async){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (__40640,c__40064__auto___40652,G__40471_40641,n__38399__auto___40639,jobs,results,process,async){
return (function (state_40511){
var state_val_40512 = (state_40511[(1)]);
if((state_val_40512 === (1))){
var state_40511__$1 = state_40511;
var statearr_40513_40653 = state_40511__$1;
(statearr_40513_40653[(2)] = null);

(statearr_40513_40653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40512 === (2))){
var state_40511__$1 = state_40511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40511__$1,(4),jobs);
} else {
if((state_val_40512 === (3))){
var inst_40509 = (state_40511[(2)]);
var state_40511__$1 = state_40511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40511__$1,inst_40509);
} else {
if((state_val_40512 === (4))){
var inst_40501 = (state_40511[(2)]);
var inst_40502 = async.call(null,inst_40501);
var state_40511__$1 = state_40511;
if(cljs.core.truth_(inst_40502)){
var statearr_40514_40654 = state_40511__$1;
(statearr_40514_40654[(1)] = (5));

} else {
var statearr_40515_40655 = state_40511__$1;
(statearr_40515_40655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40512 === (5))){
var state_40511__$1 = state_40511;
var statearr_40516_40656 = state_40511__$1;
(statearr_40516_40656[(2)] = null);

(statearr_40516_40656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40512 === (6))){
var state_40511__$1 = state_40511;
var statearr_40517_40657 = state_40511__$1;
(statearr_40517_40657[(2)] = null);

(statearr_40517_40657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40512 === (7))){
var inst_40507 = (state_40511[(2)]);
var state_40511__$1 = state_40511;
var statearr_40518_40658 = state_40511__$1;
(statearr_40518_40658[(2)] = inst_40507);

(statearr_40518_40658[(1)] = (3));


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
});})(__40640,c__40064__auto___40652,G__40471_40641,n__38399__auto___40639,jobs,results,process,async))
;
return ((function (__40640,switch__39950__auto__,c__40064__auto___40652,G__40471_40641,n__38399__auto___40639,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0 = (function (){
var statearr_40522 = [null,null,null,null,null,null,null];
(statearr_40522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__);

(statearr_40522[(1)] = (1));

return statearr_40522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1 = (function (state_40511){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40523){if((e40523 instanceof Object)){
var ex__39954__auto__ = e40523;
var statearr_40524_40659 = state_40511;
(statearr_40524_40659[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40660 = state_40511;
state_40511 = G__40660;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = function(state_40511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1.call(this,state_40511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__;
})()
;})(__40640,switch__39950__auto__,c__40064__auto___40652,G__40471_40641,n__38399__auto___40639,jobs,results,process,async))
})();
var state__40066__auto__ = (function (){var statearr_40525 = f__40065__auto__.call(null);
(statearr_40525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___40652);

return statearr_40525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(__40640,c__40064__auto___40652,G__40471_40641,n__38399__auto___40639,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__40661 = (__40640 + (1));
__40640 = G__40661;
continue;
} else {
}
break;
}

var c__40064__auto___40662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___40662,jobs,results,process,async){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___40662,jobs,results,process,async){
return (function (state_40547){
var state_val_40548 = (state_40547[(1)]);
if((state_val_40548 === (1))){
var state_40547__$1 = state_40547;
var statearr_40549_40663 = state_40547__$1;
(statearr_40549_40663[(2)] = null);

(statearr_40549_40663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (2))){
var state_40547__$1 = state_40547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40547__$1,(4),from);
} else {
if((state_val_40548 === (3))){
var inst_40545 = (state_40547[(2)]);
var state_40547__$1 = state_40547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40547__$1,inst_40545);
} else {
if((state_val_40548 === (4))){
var inst_40528 = (state_40547[(7)]);
var inst_40528__$1 = (state_40547[(2)]);
var inst_40529 = (inst_40528__$1 == null);
var state_40547__$1 = (function (){var statearr_40550 = state_40547;
(statearr_40550[(7)] = inst_40528__$1);

return statearr_40550;
})();
if(cljs.core.truth_(inst_40529)){
var statearr_40551_40664 = state_40547__$1;
(statearr_40551_40664[(1)] = (5));

} else {
var statearr_40552_40665 = state_40547__$1;
(statearr_40552_40665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (5))){
var inst_40531 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40547__$1 = state_40547;
var statearr_40553_40666 = state_40547__$1;
(statearr_40553_40666[(2)] = inst_40531);

(statearr_40553_40666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (6))){
var inst_40533 = (state_40547[(8)]);
var inst_40528 = (state_40547[(7)]);
var inst_40533__$1 = cljs.core.async.chan.call(null,(1));
var inst_40534 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40535 = [inst_40528,inst_40533__$1];
var inst_40536 = (new cljs.core.PersistentVector(null,2,(5),inst_40534,inst_40535,null));
var state_40547__$1 = (function (){var statearr_40554 = state_40547;
(statearr_40554[(8)] = inst_40533__$1);

return statearr_40554;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40547__$1,(8),jobs,inst_40536);
} else {
if((state_val_40548 === (7))){
var inst_40543 = (state_40547[(2)]);
var state_40547__$1 = state_40547;
var statearr_40555_40667 = state_40547__$1;
(statearr_40555_40667[(2)] = inst_40543);

(statearr_40555_40667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (8))){
var inst_40533 = (state_40547[(8)]);
var inst_40538 = (state_40547[(2)]);
var state_40547__$1 = (function (){var statearr_40556 = state_40547;
(statearr_40556[(9)] = inst_40538);

return statearr_40556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40547__$1,(9),results,inst_40533);
} else {
if((state_val_40548 === (9))){
var inst_40540 = (state_40547[(2)]);
var state_40547__$1 = (function (){var statearr_40557 = state_40547;
(statearr_40557[(10)] = inst_40540);

return statearr_40557;
})();
var statearr_40558_40668 = state_40547__$1;
(statearr_40558_40668[(2)] = null);

(statearr_40558_40668[(1)] = (2));


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
});})(c__40064__auto___40662,jobs,results,process,async))
;
return ((function (switch__39950__auto__,c__40064__auto___40662,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0 = (function (){
var statearr_40562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__);

(statearr_40562[(1)] = (1));

return statearr_40562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1 = (function (state_40547){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40563){if((e40563 instanceof Object)){
var ex__39954__auto__ = e40563;
var statearr_40564_40669 = state_40547;
(statearr_40564_40669[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40670 = state_40547;
state_40547 = G__40670;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = function(state_40547){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1.call(this,state_40547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___40662,jobs,results,process,async))
})();
var state__40066__auto__ = (function (){var statearr_40565 = f__40065__auto__.call(null);
(statearr_40565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___40662);

return statearr_40565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___40662,jobs,results,process,async))
);


var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__,jobs,results,process,async){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__,jobs,results,process,async){
return (function (state_40603){
var state_val_40604 = (state_40603[(1)]);
if((state_val_40604 === (7))){
var inst_40599 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40605_40671 = state_40603__$1;
(statearr_40605_40671[(2)] = inst_40599);

(statearr_40605_40671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (20))){
var state_40603__$1 = state_40603;
var statearr_40606_40672 = state_40603__$1;
(statearr_40606_40672[(2)] = null);

(statearr_40606_40672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (1))){
var state_40603__$1 = state_40603;
var statearr_40607_40673 = state_40603__$1;
(statearr_40607_40673[(2)] = null);

(statearr_40607_40673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (4))){
var inst_40568 = (state_40603[(7)]);
var inst_40568__$1 = (state_40603[(2)]);
var inst_40569 = (inst_40568__$1 == null);
var state_40603__$1 = (function (){var statearr_40608 = state_40603;
(statearr_40608[(7)] = inst_40568__$1);

return statearr_40608;
})();
if(cljs.core.truth_(inst_40569)){
var statearr_40609_40674 = state_40603__$1;
(statearr_40609_40674[(1)] = (5));

} else {
var statearr_40610_40675 = state_40603__$1;
(statearr_40610_40675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (15))){
var inst_40581 = (state_40603[(8)]);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40603__$1,(18),to,inst_40581);
} else {
if((state_val_40604 === (21))){
var inst_40594 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40611_40676 = state_40603__$1;
(statearr_40611_40676[(2)] = inst_40594);

(statearr_40611_40676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (13))){
var inst_40596 = (state_40603[(2)]);
var state_40603__$1 = (function (){var statearr_40612 = state_40603;
(statearr_40612[(9)] = inst_40596);

return statearr_40612;
})();
var statearr_40613_40677 = state_40603__$1;
(statearr_40613_40677[(2)] = null);

(statearr_40613_40677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (6))){
var inst_40568 = (state_40603[(7)]);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40603__$1,(11),inst_40568);
} else {
if((state_val_40604 === (17))){
var inst_40589 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
if(cljs.core.truth_(inst_40589)){
var statearr_40614_40678 = state_40603__$1;
(statearr_40614_40678[(1)] = (19));

} else {
var statearr_40615_40679 = state_40603__$1;
(statearr_40615_40679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (3))){
var inst_40601 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40603__$1,inst_40601);
} else {
if((state_val_40604 === (12))){
var inst_40578 = (state_40603[(10)]);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40603__$1,(14),inst_40578);
} else {
if((state_val_40604 === (2))){
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40603__$1,(4),results);
} else {
if((state_val_40604 === (19))){
var state_40603__$1 = state_40603;
var statearr_40616_40680 = state_40603__$1;
(statearr_40616_40680[(2)] = null);

(statearr_40616_40680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (11))){
var inst_40578 = (state_40603[(2)]);
var state_40603__$1 = (function (){var statearr_40617 = state_40603;
(statearr_40617[(10)] = inst_40578);

return statearr_40617;
})();
var statearr_40618_40681 = state_40603__$1;
(statearr_40618_40681[(2)] = null);

(statearr_40618_40681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (9))){
var state_40603__$1 = state_40603;
var statearr_40619_40682 = state_40603__$1;
(statearr_40619_40682[(2)] = null);

(statearr_40619_40682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (5))){
var state_40603__$1 = state_40603;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40620_40683 = state_40603__$1;
(statearr_40620_40683[(1)] = (8));

} else {
var statearr_40621_40684 = state_40603__$1;
(statearr_40621_40684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (14))){
var inst_40583 = (state_40603[(11)]);
var inst_40581 = (state_40603[(8)]);
var inst_40581__$1 = (state_40603[(2)]);
var inst_40582 = (inst_40581__$1 == null);
var inst_40583__$1 = cljs.core.not.call(null,inst_40582);
var state_40603__$1 = (function (){var statearr_40622 = state_40603;
(statearr_40622[(11)] = inst_40583__$1);

(statearr_40622[(8)] = inst_40581__$1);

return statearr_40622;
})();
if(inst_40583__$1){
var statearr_40623_40685 = state_40603__$1;
(statearr_40623_40685[(1)] = (15));

} else {
var statearr_40624_40686 = state_40603__$1;
(statearr_40624_40686[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (16))){
var inst_40583 = (state_40603[(11)]);
var state_40603__$1 = state_40603;
var statearr_40625_40687 = state_40603__$1;
(statearr_40625_40687[(2)] = inst_40583);

(statearr_40625_40687[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (10))){
var inst_40575 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40626_40688 = state_40603__$1;
(statearr_40626_40688[(2)] = inst_40575);

(statearr_40626_40688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (18))){
var inst_40586 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40627_40689 = state_40603__$1;
(statearr_40627_40689[(2)] = inst_40586);

(statearr_40627_40689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (8))){
var inst_40572 = cljs.core.async.close_BANG_.call(null,to);
var state_40603__$1 = state_40603;
var statearr_40628_40690 = state_40603__$1;
(statearr_40628_40690[(2)] = inst_40572);

(statearr_40628_40690[(1)] = (10));


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
});})(c__40064__auto__,jobs,results,process,async))
;
return ((function (switch__39950__auto__,c__40064__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0 = (function (){
var statearr_40632 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__);

(statearr_40632[(1)] = (1));

return statearr_40632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1 = (function (state_40603){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40633){if((e40633 instanceof Object)){
var ex__39954__auto__ = e40633;
var statearr_40634_40691 = state_40603;
(statearr_40634_40691[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40692 = state_40603;
state_40603 = G__40692;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__ = function(state_40603){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1.call(this,state_40603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__,jobs,results,process,async))
})();
var state__40066__auto__ = (function (){var statearr_40635 = f__40065__auto__.call(null);
(statearr_40635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_40635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__,jobs,results,process,async))
);

return c__40064__auto__;
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
var args40693 = [];
var len__38599__auto___40696 = arguments.length;
var i__38600__auto___40697 = (0);
while(true){
if((i__38600__auto___40697 < len__38599__auto___40696)){
args40693.push((arguments[i__38600__auto___40697]));

var G__40698 = (i__38600__auto___40697 + (1));
i__38600__auto___40697 = G__40698;
continue;
} else {
}
break;
}

var G__40695 = args40693.length;
switch (G__40695) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40693.length)].join('')));

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
var args40700 = [];
var len__38599__auto___40703 = arguments.length;
var i__38600__auto___40704 = (0);
while(true){
if((i__38600__auto___40704 < len__38599__auto___40703)){
args40700.push((arguments[i__38600__auto___40704]));

var G__40705 = (i__38600__auto___40704 + (1));
i__38600__auto___40704 = G__40705;
continue;
} else {
}
break;
}

var G__40702 = args40700.length;
switch (G__40702) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40700.length)].join('')));

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
var args40707 = [];
var len__38599__auto___40760 = arguments.length;
var i__38600__auto___40761 = (0);
while(true){
if((i__38600__auto___40761 < len__38599__auto___40760)){
args40707.push((arguments[i__38600__auto___40761]));

var G__40762 = (i__38600__auto___40761 + (1));
i__38600__auto___40761 = G__40762;
continue;
} else {
}
break;
}

var G__40709 = args40707.length;
switch (G__40709) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40707.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40064__auto___40764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___40764,tc,fc){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___40764,tc,fc){
return (function (state_40735){
var state_val_40736 = (state_40735[(1)]);
if((state_val_40736 === (7))){
var inst_40731 = (state_40735[(2)]);
var state_40735__$1 = state_40735;
var statearr_40737_40765 = state_40735__$1;
(statearr_40737_40765[(2)] = inst_40731);

(statearr_40737_40765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (1))){
var state_40735__$1 = state_40735;
var statearr_40738_40766 = state_40735__$1;
(statearr_40738_40766[(2)] = null);

(statearr_40738_40766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (4))){
var inst_40712 = (state_40735[(7)]);
var inst_40712__$1 = (state_40735[(2)]);
var inst_40713 = (inst_40712__$1 == null);
var state_40735__$1 = (function (){var statearr_40739 = state_40735;
(statearr_40739[(7)] = inst_40712__$1);

return statearr_40739;
})();
if(cljs.core.truth_(inst_40713)){
var statearr_40740_40767 = state_40735__$1;
(statearr_40740_40767[(1)] = (5));

} else {
var statearr_40741_40768 = state_40735__$1;
(statearr_40741_40768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (13))){
var state_40735__$1 = state_40735;
var statearr_40742_40769 = state_40735__$1;
(statearr_40742_40769[(2)] = null);

(statearr_40742_40769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (6))){
var inst_40712 = (state_40735[(7)]);
var inst_40718 = p.call(null,inst_40712);
var state_40735__$1 = state_40735;
if(cljs.core.truth_(inst_40718)){
var statearr_40743_40770 = state_40735__$1;
(statearr_40743_40770[(1)] = (9));

} else {
var statearr_40744_40771 = state_40735__$1;
(statearr_40744_40771[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (3))){
var inst_40733 = (state_40735[(2)]);
var state_40735__$1 = state_40735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40735__$1,inst_40733);
} else {
if((state_val_40736 === (12))){
var state_40735__$1 = state_40735;
var statearr_40745_40772 = state_40735__$1;
(statearr_40745_40772[(2)] = null);

(statearr_40745_40772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (2))){
var state_40735__$1 = state_40735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40735__$1,(4),ch);
} else {
if((state_val_40736 === (11))){
var inst_40712 = (state_40735[(7)]);
var inst_40722 = (state_40735[(2)]);
var state_40735__$1 = state_40735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40735__$1,(8),inst_40722,inst_40712);
} else {
if((state_val_40736 === (9))){
var state_40735__$1 = state_40735;
var statearr_40746_40773 = state_40735__$1;
(statearr_40746_40773[(2)] = tc);

(statearr_40746_40773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (5))){
var inst_40715 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40716 = cljs.core.async.close_BANG_.call(null,fc);
var state_40735__$1 = (function (){var statearr_40747 = state_40735;
(statearr_40747[(8)] = inst_40715);

return statearr_40747;
})();
var statearr_40748_40774 = state_40735__$1;
(statearr_40748_40774[(2)] = inst_40716);

(statearr_40748_40774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (14))){
var inst_40729 = (state_40735[(2)]);
var state_40735__$1 = state_40735;
var statearr_40749_40775 = state_40735__$1;
(statearr_40749_40775[(2)] = inst_40729);

(statearr_40749_40775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (10))){
var state_40735__$1 = state_40735;
var statearr_40750_40776 = state_40735__$1;
(statearr_40750_40776[(2)] = fc);

(statearr_40750_40776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40736 === (8))){
var inst_40724 = (state_40735[(2)]);
var state_40735__$1 = state_40735;
if(cljs.core.truth_(inst_40724)){
var statearr_40751_40777 = state_40735__$1;
(statearr_40751_40777[(1)] = (12));

} else {
var statearr_40752_40778 = state_40735__$1;
(statearr_40752_40778[(1)] = (13));

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
});})(c__40064__auto___40764,tc,fc))
;
return ((function (switch__39950__auto__,c__40064__auto___40764,tc,fc){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_40756 = [null,null,null,null,null,null,null,null,null];
(statearr_40756[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_40756[(1)] = (1));

return statearr_40756;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_40735){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40757){if((e40757 instanceof Object)){
var ex__39954__auto__ = e40757;
var statearr_40758_40779 = state_40735;
(statearr_40758_40779[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40780 = state_40735;
state_40735 = G__40780;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_40735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_40735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___40764,tc,fc))
})();
var state__40066__auto__ = (function (){var statearr_40759 = f__40065__auto__.call(null);
(statearr_40759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___40764);

return statearr_40759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___40764,tc,fc))
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
var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__){
return (function (state_40844){
var state_val_40845 = (state_40844[(1)]);
if((state_val_40845 === (7))){
var inst_40840 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
var statearr_40846_40867 = state_40844__$1;
(statearr_40846_40867[(2)] = inst_40840);

(statearr_40846_40867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (1))){
var inst_40824 = init;
var state_40844__$1 = (function (){var statearr_40847 = state_40844;
(statearr_40847[(7)] = inst_40824);

return statearr_40847;
})();
var statearr_40848_40868 = state_40844__$1;
(statearr_40848_40868[(2)] = null);

(statearr_40848_40868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (4))){
var inst_40827 = (state_40844[(8)]);
var inst_40827__$1 = (state_40844[(2)]);
var inst_40828 = (inst_40827__$1 == null);
var state_40844__$1 = (function (){var statearr_40849 = state_40844;
(statearr_40849[(8)] = inst_40827__$1);

return statearr_40849;
})();
if(cljs.core.truth_(inst_40828)){
var statearr_40850_40869 = state_40844__$1;
(statearr_40850_40869[(1)] = (5));

} else {
var statearr_40851_40870 = state_40844__$1;
(statearr_40851_40870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (6))){
var inst_40824 = (state_40844[(7)]);
var inst_40831 = (state_40844[(9)]);
var inst_40827 = (state_40844[(8)]);
var inst_40831__$1 = f.call(null,inst_40824,inst_40827);
var inst_40832 = cljs.core.reduced_QMARK_.call(null,inst_40831__$1);
var state_40844__$1 = (function (){var statearr_40852 = state_40844;
(statearr_40852[(9)] = inst_40831__$1);

return statearr_40852;
})();
if(inst_40832){
var statearr_40853_40871 = state_40844__$1;
(statearr_40853_40871[(1)] = (8));

} else {
var statearr_40854_40872 = state_40844__$1;
(statearr_40854_40872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (3))){
var inst_40842 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40844__$1,inst_40842);
} else {
if((state_val_40845 === (2))){
var state_40844__$1 = state_40844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40844__$1,(4),ch);
} else {
if((state_val_40845 === (9))){
var inst_40831 = (state_40844[(9)]);
var inst_40824 = inst_40831;
var state_40844__$1 = (function (){var statearr_40855 = state_40844;
(statearr_40855[(7)] = inst_40824);

return statearr_40855;
})();
var statearr_40856_40873 = state_40844__$1;
(statearr_40856_40873[(2)] = null);

(statearr_40856_40873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (5))){
var inst_40824 = (state_40844[(7)]);
var state_40844__$1 = state_40844;
var statearr_40857_40874 = state_40844__$1;
(statearr_40857_40874[(2)] = inst_40824);

(statearr_40857_40874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (10))){
var inst_40838 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
var statearr_40858_40875 = state_40844__$1;
(statearr_40858_40875[(2)] = inst_40838);

(statearr_40858_40875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (8))){
var inst_40831 = (state_40844[(9)]);
var inst_40834 = cljs.core.deref.call(null,inst_40831);
var state_40844__$1 = state_40844;
var statearr_40859_40876 = state_40844__$1;
(statearr_40859_40876[(2)] = inst_40834);

(statearr_40859_40876[(1)] = (10));


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
});})(c__40064__auto__))
;
return ((function (switch__39950__auto__,c__40064__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39951__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39951__auto____0 = (function (){
var statearr_40863 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40863[(0)] = cljs$core$async$reduce_$_state_machine__39951__auto__);

(statearr_40863[(1)] = (1));

return statearr_40863;
});
var cljs$core$async$reduce_$_state_machine__39951__auto____1 = (function (state_40844){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40864){if((e40864 instanceof Object)){
var ex__39954__auto__ = e40864;
var statearr_40865_40877 = state_40844;
(statearr_40865_40877[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40878 = state_40844;
state_40844 = G__40878;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39951__auto__ = function(state_40844){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39951__auto____1.call(this,state_40844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39951__auto____0;
cljs$core$async$reduce_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39951__auto____1;
return cljs$core$async$reduce_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__))
})();
var state__40066__auto__ = (function (){var statearr_40866 = f__40065__auto__.call(null);
(statearr_40866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_40866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__))
);

return c__40064__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__,f__$1){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__,f__$1){
return (function (state_40898){
var state_val_40899 = (state_40898[(1)]);
if((state_val_40899 === (1))){
var inst_40893 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40898__$1 = state_40898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40898__$1,(2),inst_40893);
} else {
if((state_val_40899 === (2))){
var inst_40895 = (state_40898[(2)]);
var inst_40896 = f__$1.call(null,inst_40895);
var state_40898__$1 = state_40898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40898__$1,inst_40896);
} else {
return null;
}
}
});})(c__40064__auto__,f__$1))
;
return ((function (switch__39950__auto__,c__40064__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39951__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39951__auto____0 = (function (){
var statearr_40903 = [null,null,null,null,null,null,null];
(statearr_40903[(0)] = cljs$core$async$transduce_$_state_machine__39951__auto__);

(statearr_40903[(1)] = (1));

return statearr_40903;
});
var cljs$core$async$transduce_$_state_machine__39951__auto____1 = (function (state_40898){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40904){if((e40904 instanceof Object)){
var ex__39954__auto__ = e40904;
var statearr_40905_40907 = state_40898;
(statearr_40905_40907[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40908 = state_40898;
state_40898 = G__40908;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39951__auto__ = function(state_40898){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39951__auto____1.call(this,state_40898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39951__auto____0;
cljs$core$async$transduce_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39951__auto____1;
return cljs$core$async$transduce_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__,f__$1))
})();
var state__40066__auto__ = (function (){var statearr_40906 = f__40065__auto__.call(null);
(statearr_40906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_40906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__,f__$1))
);

return c__40064__auto__;
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
var args40909 = [];
var len__38599__auto___40961 = arguments.length;
var i__38600__auto___40962 = (0);
while(true){
if((i__38600__auto___40962 < len__38599__auto___40961)){
args40909.push((arguments[i__38600__auto___40962]));

var G__40963 = (i__38600__auto___40962 + (1));
i__38600__auto___40962 = G__40963;
continue;
} else {
}
break;
}

var G__40911 = args40909.length;
switch (G__40911) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40909.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__){
return (function (state_40936){
var state_val_40937 = (state_40936[(1)]);
if((state_val_40937 === (7))){
var inst_40918 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
var statearr_40938_40965 = state_40936__$1;
(statearr_40938_40965[(2)] = inst_40918);

(statearr_40938_40965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (1))){
var inst_40912 = cljs.core.seq.call(null,coll);
var inst_40913 = inst_40912;
var state_40936__$1 = (function (){var statearr_40939 = state_40936;
(statearr_40939[(7)] = inst_40913);

return statearr_40939;
})();
var statearr_40940_40966 = state_40936__$1;
(statearr_40940_40966[(2)] = null);

(statearr_40940_40966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (4))){
var inst_40913 = (state_40936[(7)]);
var inst_40916 = cljs.core.first.call(null,inst_40913);
var state_40936__$1 = state_40936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40936__$1,(7),ch,inst_40916);
} else {
if((state_val_40937 === (13))){
var inst_40930 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
var statearr_40941_40967 = state_40936__$1;
(statearr_40941_40967[(2)] = inst_40930);

(statearr_40941_40967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (6))){
var inst_40921 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
if(cljs.core.truth_(inst_40921)){
var statearr_40942_40968 = state_40936__$1;
(statearr_40942_40968[(1)] = (8));

} else {
var statearr_40943_40969 = state_40936__$1;
(statearr_40943_40969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (3))){
var inst_40934 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40936__$1,inst_40934);
} else {
if((state_val_40937 === (12))){
var state_40936__$1 = state_40936;
var statearr_40944_40970 = state_40936__$1;
(statearr_40944_40970[(2)] = null);

(statearr_40944_40970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (2))){
var inst_40913 = (state_40936[(7)]);
var state_40936__$1 = state_40936;
if(cljs.core.truth_(inst_40913)){
var statearr_40945_40971 = state_40936__$1;
(statearr_40945_40971[(1)] = (4));

} else {
var statearr_40946_40972 = state_40936__$1;
(statearr_40946_40972[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (11))){
var inst_40927 = cljs.core.async.close_BANG_.call(null,ch);
var state_40936__$1 = state_40936;
var statearr_40947_40973 = state_40936__$1;
(statearr_40947_40973[(2)] = inst_40927);

(statearr_40947_40973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (9))){
var state_40936__$1 = state_40936;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40948_40974 = state_40936__$1;
(statearr_40948_40974[(1)] = (11));

} else {
var statearr_40949_40975 = state_40936__$1;
(statearr_40949_40975[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (5))){
var inst_40913 = (state_40936[(7)]);
var state_40936__$1 = state_40936;
var statearr_40950_40976 = state_40936__$1;
(statearr_40950_40976[(2)] = inst_40913);

(statearr_40950_40976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (10))){
var inst_40932 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
var statearr_40951_40977 = state_40936__$1;
(statearr_40951_40977[(2)] = inst_40932);

(statearr_40951_40977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (8))){
var inst_40913 = (state_40936[(7)]);
var inst_40923 = cljs.core.next.call(null,inst_40913);
var inst_40913__$1 = inst_40923;
var state_40936__$1 = (function (){var statearr_40952 = state_40936;
(statearr_40952[(7)] = inst_40913__$1);

return statearr_40952;
})();
var statearr_40953_40978 = state_40936__$1;
(statearr_40953_40978[(2)] = null);

(statearr_40953_40978[(1)] = (2));


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
});})(c__40064__auto__))
;
return ((function (switch__39950__auto__,c__40064__auto__){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_40957 = [null,null,null,null,null,null,null,null];
(statearr_40957[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_40957[(1)] = (1));

return statearr_40957;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_40936){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_40936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e40958){if((e40958 instanceof Object)){
var ex__39954__auto__ = e40958;
var statearr_40959_40979 = state_40936;
(statearr_40959_40979[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40980 = state_40936;
state_40936 = G__40980;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_40936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_40936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__))
})();
var state__40066__auto__ = (function (){var statearr_40960 = f__40065__auto__.call(null);
(statearr_40960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_40960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__))
);

return c__40064__auto__;
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
var x__38096__auto__ = (((_ == null))?null:_);
var m__38097__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,_);
} else {
var m__38097__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,_);
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
var x__38096__auto__ = (((m == null))?null:m);
var m__38097__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__38097__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__38096__auto__ = (((m == null))?null:m);
var m__38097__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,m,ch);
} else {
var m__38097__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,m,ch);
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
var x__38096__auto__ = (((m == null))?null:m);
var m__38097__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,m);
} else {
var m__38097__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41206 = (function (ch,cs,meta41207){
this.ch = ch;
this.cs = cs;
this.meta41207 = meta41207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41208,meta41207__$1){
var self__ = this;
var _41208__$1 = this;
return (new cljs.core.async.t_cljs$core$async41206(self__.ch,self__.cs,meta41207__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41208){
var self__ = this;
var _41208__$1 = this;
return self__.meta41207;
});})(cs))
;

cljs.core.async.t_cljs$core$async41206.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41206.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41206.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41206.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41206.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41206.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41207","meta41207",2055782237,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41206";

cljs.core.async.t_cljs$core$async41206.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async41206");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41206 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41206(ch__$1,cs__$1,meta41207){
return (new cljs.core.async.t_cljs$core$async41206(ch__$1,cs__$1,meta41207));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41206(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40064__auto___41431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___41431,cs,m,dchan,dctr,done){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___41431,cs,m,dchan,dctr,done){
return (function (state_41343){
var state_val_41344 = (state_41343[(1)]);
if((state_val_41344 === (7))){
var inst_41339 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
var statearr_41345_41432 = state_41343__$1;
(statearr_41345_41432[(2)] = inst_41339);

(statearr_41345_41432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (20))){
var inst_41242 = (state_41343[(7)]);
var inst_41254 = cljs.core.first.call(null,inst_41242);
var inst_41255 = cljs.core.nth.call(null,inst_41254,(0),null);
var inst_41256 = cljs.core.nth.call(null,inst_41254,(1),null);
var state_41343__$1 = (function (){var statearr_41346 = state_41343;
(statearr_41346[(8)] = inst_41255);

return statearr_41346;
})();
if(cljs.core.truth_(inst_41256)){
var statearr_41347_41433 = state_41343__$1;
(statearr_41347_41433[(1)] = (22));

} else {
var statearr_41348_41434 = state_41343__$1;
(statearr_41348_41434[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (27))){
var inst_41284 = (state_41343[(9)]);
var inst_41211 = (state_41343[(10)]);
var inst_41291 = (state_41343[(11)]);
var inst_41286 = (state_41343[(12)]);
var inst_41291__$1 = cljs.core._nth.call(null,inst_41284,inst_41286);
var inst_41292 = cljs.core.async.put_BANG_.call(null,inst_41291__$1,inst_41211,done);
var state_41343__$1 = (function (){var statearr_41349 = state_41343;
(statearr_41349[(11)] = inst_41291__$1);

return statearr_41349;
})();
if(cljs.core.truth_(inst_41292)){
var statearr_41350_41435 = state_41343__$1;
(statearr_41350_41435[(1)] = (30));

} else {
var statearr_41351_41436 = state_41343__$1;
(statearr_41351_41436[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (1))){
var state_41343__$1 = state_41343;
var statearr_41352_41437 = state_41343__$1;
(statearr_41352_41437[(2)] = null);

(statearr_41352_41437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (24))){
var inst_41242 = (state_41343[(7)]);
var inst_41261 = (state_41343[(2)]);
var inst_41262 = cljs.core.next.call(null,inst_41242);
var inst_41220 = inst_41262;
var inst_41221 = null;
var inst_41222 = (0);
var inst_41223 = (0);
var state_41343__$1 = (function (){var statearr_41353 = state_41343;
(statearr_41353[(13)] = inst_41261);

(statearr_41353[(14)] = inst_41223);

(statearr_41353[(15)] = inst_41221);

(statearr_41353[(16)] = inst_41222);

(statearr_41353[(17)] = inst_41220);

return statearr_41353;
})();
var statearr_41354_41438 = state_41343__$1;
(statearr_41354_41438[(2)] = null);

(statearr_41354_41438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (39))){
var state_41343__$1 = state_41343;
var statearr_41358_41439 = state_41343__$1;
(statearr_41358_41439[(2)] = null);

(statearr_41358_41439[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (4))){
var inst_41211 = (state_41343[(10)]);
var inst_41211__$1 = (state_41343[(2)]);
var inst_41212 = (inst_41211__$1 == null);
var state_41343__$1 = (function (){var statearr_41359 = state_41343;
(statearr_41359[(10)] = inst_41211__$1);

return statearr_41359;
})();
if(cljs.core.truth_(inst_41212)){
var statearr_41360_41440 = state_41343__$1;
(statearr_41360_41440[(1)] = (5));

} else {
var statearr_41361_41441 = state_41343__$1;
(statearr_41361_41441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (15))){
var inst_41223 = (state_41343[(14)]);
var inst_41221 = (state_41343[(15)]);
var inst_41222 = (state_41343[(16)]);
var inst_41220 = (state_41343[(17)]);
var inst_41238 = (state_41343[(2)]);
var inst_41239 = (inst_41223 + (1));
var tmp41355 = inst_41221;
var tmp41356 = inst_41222;
var tmp41357 = inst_41220;
var inst_41220__$1 = tmp41357;
var inst_41221__$1 = tmp41355;
var inst_41222__$1 = tmp41356;
var inst_41223__$1 = inst_41239;
var state_41343__$1 = (function (){var statearr_41362 = state_41343;
(statearr_41362[(14)] = inst_41223__$1);

(statearr_41362[(15)] = inst_41221__$1);

(statearr_41362[(16)] = inst_41222__$1);

(statearr_41362[(18)] = inst_41238);

(statearr_41362[(17)] = inst_41220__$1);

return statearr_41362;
})();
var statearr_41363_41442 = state_41343__$1;
(statearr_41363_41442[(2)] = null);

(statearr_41363_41442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (21))){
var inst_41265 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
var statearr_41367_41443 = state_41343__$1;
(statearr_41367_41443[(2)] = inst_41265);

(statearr_41367_41443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (31))){
var inst_41291 = (state_41343[(11)]);
var inst_41295 = done.call(null,null);
var inst_41296 = cljs.core.async.untap_STAR_.call(null,m,inst_41291);
var state_41343__$1 = (function (){var statearr_41368 = state_41343;
(statearr_41368[(19)] = inst_41295);

return statearr_41368;
})();
var statearr_41369_41444 = state_41343__$1;
(statearr_41369_41444[(2)] = inst_41296);

(statearr_41369_41444[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (32))){
var inst_41283 = (state_41343[(20)]);
var inst_41284 = (state_41343[(9)]);
var inst_41286 = (state_41343[(12)]);
var inst_41285 = (state_41343[(21)]);
var inst_41298 = (state_41343[(2)]);
var inst_41299 = (inst_41286 + (1));
var tmp41364 = inst_41283;
var tmp41365 = inst_41284;
var tmp41366 = inst_41285;
var inst_41283__$1 = tmp41364;
var inst_41284__$1 = tmp41365;
var inst_41285__$1 = tmp41366;
var inst_41286__$1 = inst_41299;
var state_41343__$1 = (function (){var statearr_41370 = state_41343;
(statearr_41370[(22)] = inst_41298);

(statearr_41370[(20)] = inst_41283__$1);

(statearr_41370[(9)] = inst_41284__$1);

(statearr_41370[(12)] = inst_41286__$1);

(statearr_41370[(21)] = inst_41285__$1);

return statearr_41370;
})();
var statearr_41371_41445 = state_41343__$1;
(statearr_41371_41445[(2)] = null);

(statearr_41371_41445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (40))){
var inst_41311 = (state_41343[(23)]);
var inst_41315 = done.call(null,null);
var inst_41316 = cljs.core.async.untap_STAR_.call(null,m,inst_41311);
var state_41343__$1 = (function (){var statearr_41372 = state_41343;
(statearr_41372[(24)] = inst_41315);

return statearr_41372;
})();
var statearr_41373_41446 = state_41343__$1;
(statearr_41373_41446[(2)] = inst_41316);

(statearr_41373_41446[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (33))){
var inst_41302 = (state_41343[(25)]);
var inst_41304 = cljs.core.chunked_seq_QMARK_.call(null,inst_41302);
var state_41343__$1 = state_41343;
if(inst_41304){
var statearr_41374_41447 = state_41343__$1;
(statearr_41374_41447[(1)] = (36));

} else {
var statearr_41375_41448 = state_41343__$1;
(statearr_41375_41448[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (13))){
var inst_41232 = (state_41343[(26)]);
var inst_41235 = cljs.core.async.close_BANG_.call(null,inst_41232);
var state_41343__$1 = state_41343;
var statearr_41376_41449 = state_41343__$1;
(statearr_41376_41449[(2)] = inst_41235);

(statearr_41376_41449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (22))){
var inst_41255 = (state_41343[(8)]);
var inst_41258 = cljs.core.async.close_BANG_.call(null,inst_41255);
var state_41343__$1 = state_41343;
var statearr_41377_41450 = state_41343__$1;
(statearr_41377_41450[(2)] = inst_41258);

(statearr_41377_41450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (36))){
var inst_41302 = (state_41343[(25)]);
var inst_41306 = cljs.core.chunk_first.call(null,inst_41302);
var inst_41307 = cljs.core.chunk_rest.call(null,inst_41302);
var inst_41308 = cljs.core.count.call(null,inst_41306);
var inst_41283 = inst_41307;
var inst_41284 = inst_41306;
var inst_41285 = inst_41308;
var inst_41286 = (0);
var state_41343__$1 = (function (){var statearr_41378 = state_41343;
(statearr_41378[(20)] = inst_41283);

(statearr_41378[(9)] = inst_41284);

(statearr_41378[(12)] = inst_41286);

(statearr_41378[(21)] = inst_41285);

return statearr_41378;
})();
var statearr_41379_41451 = state_41343__$1;
(statearr_41379_41451[(2)] = null);

(statearr_41379_41451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (41))){
var inst_41302 = (state_41343[(25)]);
var inst_41318 = (state_41343[(2)]);
var inst_41319 = cljs.core.next.call(null,inst_41302);
var inst_41283 = inst_41319;
var inst_41284 = null;
var inst_41285 = (0);
var inst_41286 = (0);
var state_41343__$1 = (function (){var statearr_41380 = state_41343;
(statearr_41380[(20)] = inst_41283);

(statearr_41380[(9)] = inst_41284);

(statearr_41380[(12)] = inst_41286);

(statearr_41380[(27)] = inst_41318);

(statearr_41380[(21)] = inst_41285);

return statearr_41380;
})();
var statearr_41381_41452 = state_41343__$1;
(statearr_41381_41452[(2)] = null);

(statearr_41381_41452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (43))){
var state_41343__$1 = state_41343;
var statearr_41382_41453 = state_41343__$1;
(statearr_41382_41453[(2)] = null);

(statearr_41382_41453[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (29))){
var inst_41327 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
var statearr_41383_41454 = state_41343__$1;
(statearr_41383_41454[(2)] = inst_41327);

(statearr_41383_41454[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (44))){
var inst_41336 = (state_41343[(2)]);
var state_41343__$1 = (function (){var statearr_41384 = state_41343;
(statearr_41384[(28)] = inst_41336);

return statearr_41384;
})();
var statearr_41385_41455 = state_41343__$1;
(statearr_41385_41455[(2)] = null);

(statearr_41385_41455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (6))){
var inst_41275 = (state_41343[(29)]);
var inst_41274 = cljs.core.deref.call(null,cs);
var inst_41275__$1 = cljs.core.keys.call(null,inst_41274);
var inst_41276 = cljs.core.count.call(null,inst_41275__$1);
var inst_41277 = cljs.core.reset_BANG_.call(null,dctr,inst_41276);
var inst_41282 = cljs.core.seq.call(null,inst_41275__$1);
var inst_41283 = inst_41282;
var inst_41284 = null;
var inst_41285 = (0);
var inst_41286 = (0);
var state_41343__$1 = (function (){var statearr_41386 = state_41343;
(statearr_41386[(29)] = inst_41275__$1);

(statearr_41386[(20)] = inst_41283);

(statearr_41386[(9)] = inst_41284);

(statearr_41386[(30)] = inst_41277);

(statearr_41386[(12)] = inst_41286);

(statearr_41386[(21)] = inst_41285);

return statearr_41386;
})();
var statearr_41387_41456 = state_41343__$1;
(statearr_41387_41456[(2)] = null);

(statearr_41387_41456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (28))){
var inst_41283 = (state_41343[(20)]);
var inst_41302 = (state_41343[(25)]);
var inst_41302__$1 = cljs.core.seq.call(null,inst_41283);
var state_41343__$1 = (function (){var statearr_41388 = state_41343;
(statearr_41388[(25)] = inst_41302__$1);

return statearr_41388;
})();
if(inst_41302__$1){
var statearr_41389_41457 = state_41343__$1;
(statearr_41389_41457[(1)] = (33));

} else {
var statearr_41390_41458 = state_41343__$1;
(statearr_41390_41458[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (25))){
var inst_41286 = (state_41343[(12)]);
var inst_41285 = (state_41343[(21)]);
var inst_41288 = (inst_41286 < inst_41285);
var inst_41289 = inst_41288;
var state_41343__$1 = state_41343;
if(cljs.core.truth_(inst_41289)){
var statearr_41391_41459 = state_41343__$1;
(statearr_41391_41459[(1)] = (27));

} else {
var statearr_41392_41460 = state_41343__$1;
(statearr_41392_41460[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (34))){
var state_41343__$1 = state_41343;
var statearr_41393_41461 = state_41343__$1;
(statearr_41393_41461[(2)] = null);

(statearr_41393_41461[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (17))){
var state_41343__$1 = state_41343;
var statearr_41394_41462 = state_41343__$1;
(statearr_41394_41462[(2)] = null);

(statearr_41394_41462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (3))){
var inst_41341 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41343__$1,inst_41341);
} else {
if((state_val_41344 === (12))){
var inst_41270 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
var statearr_41395_41463 = state_41343__$1;
(statearr_41395_41463[(2)] = inst_41270);

(statearr_41395_41463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (2))){
var state_41343__$1 = state_41343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41343__$1,(4),ch);
} else {
if((state_val_41344 === (23))){
var state_41343__$1 = state_41343;
var statearr_41396_41464 = state_41343__$1;
(statearr_41396_41464[(2)] = null);

(statearr_41396_41464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (35))){
var inst_41325 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
var statearr_41397_41465 = state_41343__$1;
(statearr_41397_41465[(2)] = inst_41325);

(statearr_41397_41465[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (19))){
var inst_41242 = (state_41343[(7)]);
var inst_41246 = cljs.core.chunk_first.call(null,inst_41242);
var inst_41247 = cljs.core.chunk_rest.call(null,inst_41242);
var inst_41248 = cljs.core.count.call(null,inst_41246);
var inst_41220 = inst_41247;
var inst_41221 = inst_41246;
var inst_41222 = inst_41248;
var inst_41223 = (0);
var state_41343__$1 = (function (){var statearr_41398 = state_41343;
(statearr_41398[(14)] = inst_41223);

(statearr_41398[(15)] = inst_41221);

(statearr_41398[(16)] = inst_41222);

(statearr_41398[(17)] = inst_41220);

return statearr_41398;
})();
var statearr_41399_41466 = state_41343__$1;
(statearr_41399_41466[(2)] = null);

(statearr_41399_41466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (11))){
var inst_41220 = (state_41343[(17)]);
var inst_41242 = (state_41343[(7)]);
var inst_41242__$1 = cljs.core.seq.call(null,inst_41220);
var state_41343__$1 = (function (){var statearr_41400 = state_41343;
(statearr_41400[(7)] = inst_41242__$1);

return statearr_41400;
})();
if(inst_41242__$1){
var statearr_41401_41467 = state_41343__$1;
(statearr_41401_41467[(1)] = (16));

} else {
var statearr_41402_41468 = state_41343__$1;
(statearr_41402_41468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (9))){
var inst_41272 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
var statearr_41403_41469 = state_41343__$1;
(statearr_41403_41469[(2)] = inst_41272);

(statearr_41403_41469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (5))){
var inst_41218 = cljs.core.deref.call(null,cs);
var inst_41219 = cljs.core.seq.call(null,inst_41218);
var inst_41220 = inst_41219;
var inst_41221 = null;
var inst_41222 = (0);
var inst_41223 = (0);
var state_41343__$1 = (function (){var statearr_41404 = state_41343;
(statearr_41404[(14)] = inst_41223);

(statearr_41404[(15)] = inst_41221);

(statearr_41404[(16)] = inst_41222);

(statearr_41404[(17)] = inst_41220);

return statearr_41404;
})();
var statearr_41405_41470 = state_41343__$1;
(statearr_41405_41470[(2)] = null);

(statearr_41405_41470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (14))){
var state_41343__$1 = state_41343;
var statearr_41406_41471 = state_41343__$1;
(statearr_41406_41471[(2)] = null);

(statearr_41406_41471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (45))){
var inst_41333 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
var statearr_41407_41472 = state_41343__$1;
(statearr_41407_41472[(2)] = inst_41333);

(statearr_41407_41472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (26))){
var inst_41275 = (state_41343[(29)]);
var inst_41329 = (state_41343[(2)]);
var inst_41330 = cljs.core.seq.call(null,inst_41275);
var state_41343__$1 = (function (){var statearr_41408 = state_41343;
(statearr_41408[(31)] = inst_41329);

return statearr_41408;
})();
if(inst_41330){
var statearr_41409_41473 = state_41343__$1;
(statearr_41409_41473[(1)] = (42));

} else {
var statearr_41410_41474 = state_41343__$1;
(statearr_41410_41474[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (16))){
var inst_41242 = (state_41343[(7)]);
var inst_41244 = cljs.core.chunked_seq_QMARK_.call(null,inst_41242);
var state_41343__$1 = state_41343;
if(inst_41244){
var statearr_41411_41475 = state_41343__$1;
(statearr_41411_41475[(1)] = (19));

} else {
var statearr_41412_41476 = state_41343__$1;
(statearr_41412_41476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (38))){
var inst_41322 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
var statearr_41413_41477 = state_41343__$1;
(statearr_41413_41477[(2)] = inst_41322);

(statearr_41413_41477[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (30))){
var state_41343__$1 = state_41343;
var statearr_41414_41478 = state_41343__$1;
(statearr_41414_41478[(2)] = null);

(statearr_41414_41478[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (10))){
var inst_41223 = (state_41343[(14)]);
var inst_41221 = (state_41343[(15)]);
var inst_41231 = cljs.core._nth.call(null,inst_41221,inst_41223);
var inst_41232 = cljs.core.nth.call(null,inst_41231,(0),null);
var inst_41233 = cljs.core.nth.call(null,inst_41231,(1),null);
var state_41343__$1 = (function (){var statearr_41415 = state_41343;
(statearr_41415[(26)] = inst_41232);

return statearr_41415;
})();
if(cljs.core.truth_(inst_41233)){
var statearr_41416_41479 = state_41343__$1;
(statearr_41416_41479[(1)] = (13));

} else {
var statearr_41417_41480 = state_41343__$1;
(statearr_41417_41480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (18))){
var inst_41268 = (state_41343[(2)]);
var state_41343__$1 = state_41343;
var statearr_41418_41481 = state_41343__$1;
(statearr_41418_41481[(2)] = inst_41268);

(statearr_41418_41481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (42))){
var state_41343__$1 = state_41343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41343__$1,(45),dchan);
} else {
if((state_val_41344 === (37))){
var inst_41302 = (state_41343[(25)]);
var inst_41211 = (state_41343[(10)]);
var inst_41311 = (state_41343[(23)]);
var inst_41311__$1 = cljs.core.first.call(null,inst_41302);
var inst_41312 = cljs.core.async.put_BANG_.call(null,inst_41311__$1,inst_41211,done);
var state_41343__$1 = (function (){var statearr_41419 = state_41343;
(statearr_41419[(23)] = inst_41311__$1);

return statearr_41419;
})();
if(cljs.core.truth_(inst_41312)){
var statearr_41420_41482 = state_41343__$1;
(statearr_41420_41482[(1)] = (39));

} else {
var statearr_41421_41483 = state_41343__$1;
(statearr_41421_41483[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41344 === (8))){
var inst_41223 = (state_41343[(14)]);
var inst_41222 = (state_41343[(16)]);
var inst_41225 = (inst_41223 < inst_41222);
var inst_41226 = inst_41225;
var state_41343__$1 = state_41343;
if(cljs.core.truth_(inst_41226)){
var statearr_41422_41484 = state_41343__$1;
(statearr_41422_41484[(1)] = (10));

} else {
var statearr_41423_41485 = state_41343__$1;
(statearr_41423_41485[(1)] = (11));

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
});})(c__40064__auto___41431,cs,m,dchan,dctr,done))
;
return ((function (switch__39950__auto__,c__40064__auto___41431,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39951__auto__ = null;
var cljs$core$async$mult_$_state_machine__39951__auto____0 = (function (){
var statearr_41427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41427[(0)] = cljs$core$async$mult_$_state_machine__39951__auto__);

(statearr_41427[(1)] = (1));

return statearr_41427;
});
var cljs$core$async$mult_$_state_machine__39951__auto____1 = (function (state_41343){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_41343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e41428){if((e41428 instanceof Object)){
var ex__39954__auto__ = e41428;
var statearr_41429_41486 = state_41343;
(statearr_41429_41486[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41487 = state_41343;
state_41343 = G__41487;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39951__auto__ = function(state_41343){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39951__auto____1.call(this,state_41343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39951__auto____0;
cljs$core$async$mult_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39951__auto____1;
return cljs$core$async$mult_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___41431,cs,m,dchan,dctr,done))
})();
var state__40066__auto__ = (function (){var statearr_41430 = f__40065__auto__.call(null);
(statearr_41430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___41431);

return statearr_41430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___41431,cs,m,dchan,dctr,done))
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
var args41488 = [];
var len__38599__auto___41491 = arguments.length;
var i__38600__auto___41492 = (0);
while(true){
if((i__38600__auto___41492 < len__38599__auto___41491)){
args41488.push((arguments[i__38600__auto___41492]));

var G__41493 = (i__38600__auto___41492 + (1));
i__38600__auto___41492 = G__41493;
continue;
} else {
}
break;
}

var G__41490 = args41488.length;
switch (G__41490) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41488.length)].join('')));

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
var x__38096__auto__ = (((m == null))?null:m);
var m__38097__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,m,ch);
} else {
var m__38097__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,m,ch);
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
var x__38096__auto__ = (((m == null))?null:m);
var m__38097__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,m,ch);
} else {
var m__38097__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,m,ch);
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
var x__38096__auto__ = (((m == null))?null:m);
var m__38097__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,m);
} else {
var m__38097__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,m);
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
var x__38096__auto__ = (((m == null))?null:m);
var m__38097__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,m,state_map);
} else {
var m__38097__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,m,state_map);
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
var x__38096__auto__ = (((m == null))?null:m);
var m__38097__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,m,mode);
} else {
var m__38097__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__38606__auto__ = [];
var len__38599__auto___41505 = arguments.length;
var i__38600__auto___41506 = (0);
while(true){
if((i__38600__auto___41506 < len__38599__auto___41505)){
args__38606__auto__.push((arguments[i__38600__auto___41506]));

var G__41507 = (i__38600__auto___41506 + (1));
i__38600__auto___41506 = G__41507;
continue;
} else {
}
break;
}

var argseq__38607__auto__ = ((((3) < args__38606__auto__.length))?(new cljs.core.IndexedSeq(args__38606__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__38607__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41499){
var map__41500 = p__41499;
var map__41500__$1 = ((((!((map__41500 == null)))?((((map__41500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41500):map__41500);
var opts = map__41500__$1;
var statearr_41502_41508 = state;
(statearr_41502_41508[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__41500,map__41500__$1,opts){
return (function (val){
var statearr_41503_41509 = state;
(statearr_41503_41509[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41500,map__41500__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_41504_41510 = state;
(statearr_41504_41510[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41495){
var G__41496 = cljs.core.first.call(null,seq41495);
var seq41495__$1 = cljs.core.next.call(null,seq41495);
var G__41497 = cljs.core.first.call(null,seq41495__$1);
var seq41495__$2 = cljs.core.next.call(null,seq41495__$1);
var G__41498 = cljs.core.first.call(null,seq41495__$2);
var seq41495__$3 = cljs.core.next.call(null,seq41495__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41496,G__41497,G__41498,seq41495__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41678 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41679){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41679 = meta41679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41680,meta41679__$1){
var self__ = this;
var _41680__$1 = this;
return (new cljs.core.async.t_cljs$core$async41678(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41679__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41680){
var self__ = this;
var _41680__$1 = this;
return self__.meta41679;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41678.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41678.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41679","meta41679",-1328502378,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41678";

cljs.core.async.t_cljs$core$async41678.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async41678");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41678 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41678(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41679){
return (new cljs.core.async.t_cljs$core$async41678(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41679));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41678(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40064__auto___41845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___41845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___41845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41782){
var state_val_41783 = (state_41782[(1)]);
if((state_val_41783 === (7))){
var inst_41697 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
var statearr_41784_41846 = state_41782__$1;
(statearr_41784_41846[(2)] = inst_41697);

(statearr_41784_41846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (20))){
var inst_41709 = (state_41782[(7)]);
var state_41782__$1 = state_41782;
var statearr_41785_41847 = state_41782__$1;
(statearr_41785_41847[(2)] = inst_41709);

(statearr_41785_41847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (27))){
var state_41782__$1 = state_41782;
var statearr_41786_41848 = state_41782__$1;
(statearr_41786_41848[(2)] = null);

(statearr_41786_41848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (1))){
var inst_41684 = (state_41782[(8)]);
var inst_41684__$1 = calc_state.call(null);
var inst_41686 = (inst_41684__$1 == null);
var inst_41687 = cljs.core.not.call(null,inst_41686);
var state_41782__$1 = (function (){var statearr_41787 = state_41782;
(statearr_41787[(8)] = inst_41684__$1);

return statearr_41787;
})();
if(inst_41687){
var statearr_41788_41849 = state_41782__$1;
(statearr_41788_41849[(1)] = (2));

} else {
var statearr_41789_41850 = state_41782__$1;
(statearr_41789_41850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (24))){
var inst_41756 = (state_41782[(9)]);
var inst_41742 = (state_41782[(10)]);
var inst_41733 = (state_41782[(11)]);
var inst_41756__$1 = inst_41733.call(null,inst_41742);
var state_41782__$1 = (function (){var statearr_41790 = state_41782;
(statearr_41790[(9)] = inst_41756__$1);

return statearr_41790;
})();
if(cljs.core.truth_(inst_41756__$1)){
var statearr_41791_41851 = state_41782__$1;
(statearr_41791_41851[(1)] = (29));

} else {
var statearr_41792_41852 = state_41782__$1;
(statearr_41792_41852[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (4))){
var inst_41700 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
if(cljs.core.truth_(inst_41700)){
var statearr_41793_41853 = state_41782__$1;
(statearr_41793_41853[(1)] = (8));

} else {
var statearr_41794_41854 = state_41782__$1;
(statearr_41794_41854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (15))){
var inst_41727 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
if(cljs.core.truth_(inst_41727)){
var statearr_41795_41855 = state_41782__$1;
(statearr_41795_41855[(1)] = (19));

} else {
var statearr_41796_41856 = state_41782__$1;
(statearr_41796_41856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (21))){
var inst_41732 = (state_41782[(12)]);
var inst_41732__$1 = (state_41782[(2)]);
var inst_41733 = cljs.core.get.call(null,inst_41732__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41734 = cljs.core.get.call(null,inst_41732__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41735 = cljs.core.get.call(null,inst_41732__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41782__$1 = (function (){var statearr_41797 = state_41782;
(statearr_41797[(12)] = inst_41732__$1);

(statearr_41797[(13)] = inst_41734);

(statearr_41797[(11)] = inst_41733);

return statearr_41797;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41782__$1,(22),inst_41735);
} else {
if((state_val_41783 === (31))){
var inst_41764 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
if(cljs.core.truth_(inst_41764)){
var statearr_41798_41857 = state_41782__$1;
(statearr_41798_41857[(1)] = (32));

} else {
var statearr_41799_41858 = state_41782__$1;
(statearr_41799_41858[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (32))){
var inst_41741 = (state_41782[(14)]);
var state_41782__$1 = state_41782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41782__$1,(35),out,inst_41741);
} else {
if((state_val_41783 === (33))){
var inst_41732 = (state_41782[(12)]);
var inst_41709 = inst_41732;
var state_41782__$1 = (function (){var statearr_41800 = state_41782;
(statearr_41800[(7)] = inst_41709);

return statearr_41800;
})();
var statearr_41801_41859 = state_41782__$1;
(statearr_41801_41859[(2)] = null);

(statearr_41801_41859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (13))){
var inst_41709 = (state_41782[(7)]);
var inst_41716 = inst_41709.cljs$lang$protocol_mask$partition0$;
var inst_41717 = (inst_41716 & (64));
var inst_41718 = inst_41709.cljs$core$ISeq$;
var inst_41719 = (cljs.core.PROTOCOL_SENTINEL === inst_41718);
var inst_41720 = (inst_41717) || (inst_41719);
var state_41782__$1 = state_41782;
if(cljs.core.truth_(inst_41720)){
var statearr_41802_41860 = state_41782__$1;
(statearr_41802_41860[(1)] = (16));

} else {
var statearr_41803_41861 = state_41782__$1;
(statearr_41803_41861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (22))){
var inst_41741 = (state_41782[(14)]);
var inst_41742 = (state_41782[(10)]);
var inst_41740 = (state_41782[(2)]);
var inst_41741__$1 = cljs.core.nth.call(null,inst_41740,(0),null);
var inst_41742__$1 = cljs.core.nth.call(null,inst_41740,(1),null);
var inst_41743 = (inst_41741__$1 == null);
var inst_41744 = cljs.core._EQ_.call(null,inst_41742__$1,change);
var inst_41745 = (inst_41743) || (inst_41744);
var state_41782__$1 = (function (){var statearr_41804 = state_41782;
(statearr_41804[(14)] = inst_41741__$1);

(statearr_41804[(10)] = inst_41742__$1);

return statearr_41804;
})();
if(cljs.core.truth_(inst_41745)){
var statearr_41805_41862 = state_41782__$1;
(statearr_41805_41862[(1)] = (23));

} else {
var statearr_41806_41863 = state_41782__$1;
(statearr_41806_41863[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (36))){
var inst_41732 = (state_41782[(12)]);
var inst_41709 = inst_41732;
var state_41782__$1 = (function (){var statearr_41807 = state_41782;
(statearr_41807[(7)] = inst_41709);

return statearr_41807;
})();
var statearr_41808_41864 = state_41782__$1;
(statearr_41808_41864[(2)] = null);

(statearr_41808_41864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (29))){
var inst_41756 = (state_41782[(9)]);
var state_41782__$1 = state_41782;
var statearr_41809_41865 = state_41782__$1;
(statearr_41809_41865[(2)] = inst_41756);

(statearr_41809_41865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (6))){
var state_41782__$1 = state_41782;
var statearr_41810_41866 = state_41782__$1;
(statearr_41810_41866[(2)] = false);

(statearr_41810_41866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (28))){
var inst_41752 = (state_41782[(2)]);
var inst_41753 = calc_state.call(null);
var inst_41709 = inst_41753;
var state_41782__$1 = (function (){var statearr_41811 = state_41782;
(statearr_41811[(15)] = inst_41752);

(statearr_41811[(7)] = inst_41709);

return statearr_41811;
})();
var statearr_41812_41867 = state_41782__$1;
(statearr_41812_41867[(2)] = null);

(statearr_41812_41867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (25))){
var inst_41778 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
var statearr_41813_41868 = state_41782__$1;
(statearr_41813_41868[(2)] = inst_41778);

(statearr_41813_41868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (34))){
var inst_41776 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
var statearr_41814_41869 = state_41782__$1;
(statearr_41814_41869[(2)] = inst_41776);

(statearr_41814_41869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (17))){
var state_41782__$1 = state_41782;
var statearr_41815_41870 = state_41782__$1;
(statearr_41815_41870[(2)] = false);

(statearr_41815_41870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (3))){
var state_41782__$1 = state_41782;
var statearr_41816_41871 = state_41782__$1;
(statearr_41816_41871[(2)] = false);

(statearr_41816_41871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (12))){
var inst_41780 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41782__$1,inst_41780);
} else {
if((state_val_41783 === (2))){
var inst_41684 = (state_41782[(8)]);
var inst_41689 = inst_41684.cljs$lang$protocol_mask$partition0$;
var inst_41690 = (inst_41689 & (64));
var inst_41691 = inst_41684.cljs$core$ISeq$;
var inst_41692 = (cljs.core.PROTOCOL_SENTINEL === inst_41691);
var inst_41693 = (inst_41690) || (inst_41692);
var state_41782__$1 = state_41782;
if(cljs.core.truth_(inst_41693)){
var statearr_41817_41872 = state_41782__$1;
(statearr_41817_41872[(1)] = (5));

} else {
var statearr_41818_41873 = state_41782__$1;
(statearr_41818_41873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (23))){
var inst_41741 = (state_41782[(14)]);
var inst_41747 = (inst_41741 == null);
var state_41782__$1 = state_41782;
if(cljs.core.truth_(inst_41747)){
var statearr_41819_41874 = state_41782__$1;
(statearr_41819_41874[(1)] = (26));

} else {
var statearr_41820_41875 = state_41782__$1;
(statearr_41820_41875[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (35))){
var inst_41767 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
if(cljs.core.truth_(inst_41767)){
var statearr_41821_41876 = state_41782__$1;
(statearr_41821_41876[(1)] = (36));

} else {
var statearr_41822_41877 = state_41782__$1;
(statearr_41822_41877[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (19))){
var inst_41709 = (state_41782[(7)]);
var inst_41729 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41709);
var state_41782__$1 = state_41782;
var statearr_41823_41878 = state_41782__$1;
(statearr_41823_41878[(2)] = inst_41729);

(statearr_41823_41878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (11))){
var inst_41709 = (state_41782[(7)]);
var inst_41713 = (inst_41709 == null);
var inst_41714 = cljs.core.not.call(null,inst_41713);
var state_41782__$1 = state_41782;
if(inst_41714){
var statearr_41824_41879 = state_41782__$1;
(statearr_41824_41879[(1)] = (13));

} else {
var statearr_41825_41880 = state_41782__$1;
(statearr_41825_41880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (9))){
var inst_41684 = (state_41782[(8)]);
var state_41782__$1 = state_41782;
var statearr_41826_41881 = state_41782__$1;
(statearr_41826_41881[(2)] = inst_41684);

(statearr_41826_41881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (5))){
var state_41782__$1 = state_41782;
var statearr_41827_41882 = state_41782__$1;
(statearr_41827_41882[(2)] = true);

(statearr_41827_41882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (14))){
var state_41782__$1 = state_41782;
var statearr_41828_41883 = state_41782__$1;
(statearr_41828_41883[(2)] = false);

(statearr_41828_41883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (26))){
var inst_41742 = (state_41782[(10)]);
var inst_41749 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41742);
var state_41782__$1 = state_41782;
var statearr_41829_41884 = state_41782__$1;
(statearr_41829_41884[(2)] = inst_41749);

(statearr_41829_41884[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (16))){
var state_41782__$1 = state_41782;
var statearr_41830_41885 = state_41782__$1;
(statearr_41830_41885[(2)] = true);

(statearr_41830_41885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (38))){
var inst_41772 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
var statearr_41831_41886 = state_41782__$1;
(statearr_41831_41886[(2)] = inst_41772);

(statearr_41831_41886[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (30))){
var inst_41734 = (state_41782[(13)]);
var inst_41742 = (state_41782[(10)]);
var inst_41733 = (state_41782[(11)]);
var inst_41759 = cljs.core.empty_QMARK_.call(null,inst_41733);
var inst_41760 = inst_41734.call(null,inst_41742);
var inst_41761 = cljs.core.not.call(null,inst_41760);
var inst_41762 = (inst_41759) && (inst_41761);
var state_41782__$1 = state_41782;
var statearr_41832_41887 = state_41782__$1;
(statearr_41832_41887[(2)] = inst_41762);

(statearr_41832_41887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (10))){
var inst_41684 = (state_41782[(8)]);
var inst_41705 = (state_41782[(2)]);
var inst_41706 = cljs.core.get.call(null,inst_41705,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41707 = cljs.core.get.call(null,inst_41705,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41708 = cljs.core.get.call(null,inst_41705,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41709 = inst_41684;
var state_41782__$1 = (function (){var statearr_41833 = state_41782;
(statearr_41833[(16)] = inst_41706);

(statearr_41833[(17)] = inst_41708);

(statearr_41833[(7)] = inst_41709);

(statearr_41833[(18)] = inst_41707);

return statearr_41833;
})();
var statearr_41834_41888 = state_41782__$1;
(statearr_41834_41888[(2)] = null);

(statearr_41834_41888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (18))){
var inst_41724 = (state_41782[(2)]);
var state_41782__$1 = state_41782;
var statearr_41835_41889 = state_41782__$1;
(statearr_41835_41889[(2)] = inst_41724);

(statearr_41835_41889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (37))){
var state_41782__$1 = state_41782;
var statearr_41836_41890 = state_41782__$1;
(statearr_41836_41890[(2)] = null);

(statearr_41836_41890[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41783 === (8))){
var inst_41684 = (state_41782[(8)]);
var inst_41702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41684);
var state_41782__$1 = state_41782;
var statearr_41837_41891 = state_41782__$1;
(statearr_41837_41891[(2)] = inst_41702);

(statearr_41837_41891[(1)] = (10));


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
});})(c__40064__auto___41845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39950__auto__,c__40064__auto___41845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39951__auto__ = null;
var cljs$core$async$mix_$_state_machine__39951__auto____0 = (function (){
var statearr_41841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41841[(0)] = cljs$core$async$mix_$_state_machine__39951__auto__);

(statearr_41841[(1)] = (1));

return statearr_41841;
});
var cljs$core$async$mix_$_state_machine__39951__auto____1 = (function (state_41782){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_41782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e41842){if((e41842 instanceof Object)){
var ex__39954__auto__ = e41842;
var statearr_41843_41892 = state_41782;
(statearr_41843_41892[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41893 = state_41782;
state_41782 = G__41893;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39951__auto__ = function(state_41782){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39951__auto____1.call(this,state_41782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39951__auto____0;
cljs$core$async$mix_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39951__auto____1;
return cljs$core$async$mix_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___41845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40066__auto__ = (function (){var statearr_41844 = f__40065__auto__.call(null);
(statearr_41844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___41845);

return statearr_41844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___41845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__38096__auto__ = (((p == null))?null:p);
var m__38097__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__38097__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__38096__auto__ = (((p == null))?null:p);
var m__38097__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,p,v,ch);
} else {
var m__38097__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args41894 = [];
var len__38599__auto___41897 = arguments.length;
var i__38600__auto___41898 = (0);
while(true){
if((i__38600__auto___41898 < len__38599__auto___41897)){
args41894.push((arguments[i__38600__auto___41898]));

var G__41899 = (i__38600__auto___41898 + (1));
i__38600__auto___41898 = G__41899;
continue;
} else {
}
break;
}

var G__41896 = args41894.length;
switch (G__41896) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41894.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__38096__auto__ = (((p == null))?null:p);
var m__38097__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,p);
} else {
var m__38097__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,p);
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
var x__38096__auto__ = (((p == null))?null:p);
var m__38097__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38096__auto__)]);
if(!((m__38097__auto__ == null))){
return m__38097__auto__.call(null,p,v);
} else {
var m__38097__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38097__auto____$1 == null))){
return m__38097__auto____$1.call(null,p,v);
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
var args41902 = [];
var len__38599__auto___42027 = arguments.length;
var i__38600__auto___42028 = (0);
while(true){
if((i__38600__auto___42028 < len__38599__auto___42027)){
args41902.push((arguments[i__38600__auto___42028]));

var G__42029 = (i__38600__auto___42028 + (1));
i__38600__auto___42028 = G__42029;
continue;
} else {
}
break;
}

var G__41904 = args41902.length;
switch (G__41904) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41902.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__37378__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__37378__auto__,mults){
return (function (p1__41901_SHARP_){
if(cljs.core.truth_(p1__41901_SHARP_.call(null,topic))){
return p1__41901_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41901_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__37378__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41905 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41906){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41906 = meta41906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41907,meta41906__$1){
var self__ = this;
var _41907__$1 = this;
return (new cljs.core.async.t_cljs$core$async41905(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41906__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41907){
var self__ = this;
var _41907__$1 = this;
return self__.meta41906;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41905.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41905.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41905.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41905.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async41905.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41905.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41905.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41906","meta41906",-1859422622,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41905";

cljs.core.async.t_cljs$core$async41905.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async41905");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41905 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41905(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41906){
return (new cljs.core.async.t_cljs$core$async41905(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41906));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41905(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40064__auto___42031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___42031,mults,ensure_mult,p){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___42031,mults,ensure_mult,p){
return (function (state_41979){
var state_val_41980 = (state_41979[(1)]);
if((state_val_41980 === (7))){
var inst_41975 = (state_41979[(2)]);
var state_41979__$1 = state_41979;
var statearr_41981_42032 = state_41979__$1;
(statearr_41981_42032[(2)] = inst_41975);

(statearr_41981_42032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (20))){
var state_41979__$1 = state_41979;
var statearr_41982_42033 = state_41979__$1;
(statearr_41982_42033[(2)] = null);

(statearr_41982_42033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (1))){
var state_41979__$1 = state_41979;
var statearr_41983_42034 = state_41979__$1;
(statearr_41983_42034[(2)] = null);

(statearr_41983_42034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (24))){
var inst_41958 = (state_41979[(7)]);
var inst_41967 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41958);
var state_41979__$1 = state_41979;
var statearr_41984_42035 = state_41979__$1;
(statearr_41984_42035[(2)] = inst_41967);

(statearr_41984_42035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (4))){
var inst_41910 = (state_41979[(8)]);
var inst_41910__$1 = (state_41979[(2)]);
var inst_41911 = (inst_41910__$1 == null);
var state_41979__$1 = (function (){var statearr_41985 = state_41979;
(statearr_41985[(8)] = inst_41910__$1);

return statearr_41985;
})();
if(cljs.core.truth_(inst_41911)){
var statearr_41986_42036 = state_41979__$1;
(statearr_41986_42036[(1)] = (5));

} else {
var statearr_41987_42037 = state_41979__$1;
(statearr_41987_42037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (15))){
var inst_41952 = (state_41979[(2)]);
var state_41979__$1 = state_41979;
var statearr_41988_42038 = state_41979__$1;
(statearr_41988_42038[(2)] = inst_41952);

(statearr_41988_42038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (21))){
var inst_41972 = (state_41979[(2)]);
var state_41979__$1 = (function (){var statearr_41989 = state_41979;
(statearr_41989[(9)] = inst_41972);

return statearr_41989;
})();
var statearr_41990_42039 = state_41979__$1;
(statearr_41990_42039[(2)] = null);

(statearr_41990_42039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (13))){
var inst_41934 = (state_41979[(10)]);
var inst_41936 = cljs.core.chunked_seq_QMARK_.call(null,inst_41934);
var state_41979__$1 = state_41979;
if(inst_41936){
var statearr_41991_42040 = state_41979__$1;
(statearr_41991_42040[(1)] = (16));

} else {
var statearr_41992_42041 = state_41979__$1;
(statearr_41992_42041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (22))){
var inst_41964 = (state_41979[(2)]);
var state_41979__$1 = state_41979;
if(cljs.core.truth_(inst_41964)){
var statearr_41993_42042 = state_41979__$1;
(statearr_41993_42042[(1)] = (23));

} else {
var statearr_41994_42043 = state_41979__$1;
(statearr_41994_42043[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (6))){
var inst_41958 = (state_41979[(7)]);
var inst_41960 = (state_41979[(11)]);
var inst_41910 = (state_41979[(8)]);
var inst_41958__$1 = topic_fn.call(null,inst_41910);
var inst_41959 = cljs.core.deref.call(null,mults);
var inst_41960__$1 = cljs.core.get.call(null,inst_41959,inst_41958__$1);
var state_41979__$1 = (function (){var statearr_41995 = state_41979;
(statearr_41995[(7)] = inst_41958__$1);

(statearr_41995[(11)] = inst_41960__$1);

return statearr_41995;
})();
if(cljs.core.truth_(inst_41960__$1)){
var statearr_41996_42044 = state_41979__$1;
(statearr_41996_42044[(1)] = (19));

} else {
var statearr_41997_42045 = state_41979__$1;
(statearr_41997_42045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (25))){
var inst_41969 = (state_41979[(2)]);
var state_41979__$1 = state_41979;
var statearr_41998_42046 = state_41979__$1;
(statearr_41998_42046[(2)] = inst_41969);

(statearr_41998_42046[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (17))){
var inst_41934 = (state_41979[(10)]);
var inst_41943 = cljs.core.first.call(null,inst_41934);
var inst_41944 = cljs.core.async.muxch_STAR_.call(null,inst_41943);
var inst_41945 = cljs.core.async.close_BANG_.call(null,inst_41944);
var inst_41946 = cljs.core.next.call(null,inst_41934);
var inst_41920 = inst_41946;
var inst_41921 = null;
var inst_41922 = (0);
var inst_41923 = (0);
var state_41979__$1 = (function (){var statearr_41999 = state_41979;
(statearr_41999[(12)] = inst_41921);

(statearr_41999[(13)] = inst_41920);

(statearr_41999[(14)] = inst_41922);

(statearr_41999[(15)] = inst_41945);

(statearr_41999[(16)] = inst_41923);

return statearr_41999;
})();
var statearr_42000_42047 = state_41979__$1;
(statearr_42000_42047[(2)] = null);

(statearr_42000_42047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (3))){
var inst_41977 = (state_41979[(2)]);
var state_41979__$1 = state_41979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41979__$1,inst_41977);
} else {
if((state_val_41980 === (12))){
var inst_41954 = (state_41979[(2)]);
var state_41979__$1 = state_41979;
var statearr_42001_42048 = state_41979__$1;
(statearr_42001_42048[(2)] = inst_41954);

(statearr_42001_42048[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (2))){
var state_41979__$1 = state_41979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41979__$1,(4),ch);
} else {
if((state_val_41980 === (23))){
var state_41979__$1 = state_41979;
var statearr_42002_42049 = state_41979__$1;
(statearr_42002_42049[(2)] = null);

(statearr_42002_42049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (19))){
var inst_41960 = (state_41979[(11)]);
var inst_41910 = (state_41979[(8)]);
var inst_41962 = cljs.core.async.muxch_STAR_.call(null,inst_41960);
var state_41979__$1 = state_41979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41979__$1,(22),inst_41962,inst_41910);
} else {
if((state_val_41980 === (11))){
var inst_41920 = (state_41979[(13)]);
var inst_41934 = (state_41979[(10)]);
var inst_41934__$1 = cljs.core.seq.call(null,inst_41920);
var state_41979__$1 = (function (){var statearr_42003 = state_41979;
(statearr_42003[(10)] = inst_41934__$1);

return statearr_42003;
})();
if(inst_41934__$1){
var statearr_42004_42050 = state_41979__$1;
(statearr_42004_42050[(1)] = (13));

} else {
var statearr_42005_42051 = state_41979__$1;
(statearr_42005_42051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (9))){
var inst_41956 = (state_41979[(2)]);
var state_41979__$1 = state_41979;
var statearr_42006_42052 = state_41979__$1;
(statearr_42006_42052[(2)] = inst_41956);

(statearr_42006_42052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (5))){
var inst_41917 = cljs.core.deref.call(null,mults);
var inst_41918 = cljs.core.vals.call(null,inst_41917);
var inst_41919 = cljs.core.seq.call(null,inst_41918);
var inst_41920 = inst_41919;
var inst_41921 = null;
var inst_41922 = (0);
var inst_41923 = (0);
var state_41979__$1 = (function (){var statearr_42007 = state_41979;
(statearr_42007[(12)] = inst_41921);

(statearr_42007[(13)] = inst_41920);

(statearr_42007[(14)] = inst_41922);

(statearr_42007[(16)] = inst_41923);

return statearr_42007;
})();
var statearr_42008_42053 = state_41979__$1;
(statearr_42008_42053[(2)] = null);

(statearr_42008_42053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (14))){
var state_41979__$1 = state_41979;
var statearr_42012_42054 = state_41979__$1;
(statearr_42012_42054[(2)] = null);

(statearr_42012_42054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (16))){
var inst_41934 = (state_41979[(10)]);
var inst_41938 = cljs.core.chunk_first.call(null,inst_41934);
var inst_41939 = cljs.core.chunk_rest.call(null,inst_41934);
var inst_41940 = cljs.core.count.call(null,inst_41938);
var inst_41920 = inst_41939;
var inst_41921 = inst_41938;
var inst_41922 = inst_41940;
var inst_41923 = (0);
var state_41979__$1 = (function (){var statearr_42013 = state_41979;
(statearr_42013[(12)] = inst_41921);

(statearr_42013[(13)] = inst_41920);

(statearr_42013[(14)] = inst_41922);

(statearr_42013[(16)] = inst_41923);

return statearr_42013;
})();
var statearr_42014_42055 = state_41979__$1;
(statearr_42014_42055[(2)] = null);

(statearr_42014_42055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (10))){
var inst_41921 = (state_41979[(12)]);
var inst_41920 = (state_41979[(13)]);
var inst_41922 = (state_41979[(14)]);
var inst_41923 = (state_41979[(16)]);
var inst_41928 = cljs.core._nth.call(null,inst_41921,inst_41923);
var inst_41929 = cljs.core.async.muxch_STAR_.call(null,inst_41928);
var inst_41930 = cljs.core.async.close_BANG_.call(null,inst_41929);
var inst_41931 = (inst_41923 + (1));
var tmp42009 = inst_41921;
var tmp42010 = inst_41920;
var tmp42011 = inst_41922;
var inst_41920__$1 = tmp42010;
var inst_41921__$1 = tmp42009;
var inst_41922__$1 = tmp42011;
var inst_41923__$1 = inst_41931;
var state_41979__$1 = (function (){var statearr_42015 = state_41979;
(statearr_42015[(17)] = inst_41930);

(statearr_42015[(12)] = inst_41921__$1);

(statearr_42015[(13)] = inst_41920__$1);

(statearr_42015[(14)] = inst_41922__$1);

(statearr_42015[(16)] = inst_41923__$1);

return statearr_42015;
})();
var statearr_42016_42056 = state_41979__$1;
(statearr_42016_42056[(2)] = null);

(statearr_42016_42056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (18))){
var inst_41949 = (state_41979[(2)]);
var state_41979__$1 = state_41979;
var statearr_42017_42057 = state_41979__$1;
(statearr_42017_42057[(2)] = inst_41949);

(statearr_42017_42057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41980 === (8))){
var inst_41922 = (state_41979[(14)]);
var inst_41923 = (state_41979[(16)]);
var inst_41925 = (inst_41923 < inst_41922);
var inst_41926 = inst_41925;
var state_41979__$1 = state_41979;
if(cljs.core.truth_(inst_41926)){
var statearr_42018_42058 = state_41979__$1;
(statearr_42018_42058[(1)] = (10));

} else {
var statearr_42019_42059 = state_41979__$1;
(statearr_42019_42059[(1)] = (11));

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
});})(c__40064__auto___42031,mults,ensure_mult,p))
;
return ((function (switch__39950__auto__,c__40064__auto___42031,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_42023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42023[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_42023[(1)] = (1));

return statearr_42023;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_41979){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_41979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e42024){if((e42024 instanceof Object)){
var ex__39954__auto__ = e42024;
var statearr_42025_42060 = state_41979;
(statearr_42025_42060[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42061 = state_41979;
state_41979 = G__42061;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_41979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_41979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___42031,mults,ensure_mult,p))
})();
var state__40066__auto__ = (function (){var statearr_42026 = f__40065__auto__.call(null);
(statearr_42026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___42031);

return statearr_42026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___42031,mults,ensure_mult,p))
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
var args42062 = [];
var len__38599__auto___42065 = arguments.length;
var i__38600__auto___42066 = (0);
while(true){
if((i__38600__auto___42066 < len__38599__auto___42065)){
args42062.push((arguments[i__38600__auto___42066]));

var G__42067 = (i__38600__auto___42066 + (1));
i__38600__auto___42066 = G__42067;
continue;
} else {
}
break;
}

var G__42064 = args42062.length;
switch (G__42064) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42062.length)].join('')));

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
var args42069 = [];
var len__38599__auto___42072 = arguments.length;
var i__38600__auto___42073 = (0);
while(true){
if((i__38600__auto___42073 < len__38599__auto___42072)){
args42069.push((arguments[i__38600__auto___42073]));

var G__42074 = (i__38600__auto___42073 + (1));
i__38600__auto___42073 = G__42074;
continue;
} else {
}
break;
}

var G__42071 = args42069.length;
switch (G__42071) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42069.length)].join('')));

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
var args42076 = [];
var len__38599__auto___42147 = arguments.length;
var i__38600__auto___42148 = (0);
while(true){
if((i__38600__auto___42148 < len__38599__auto___42147)){
args42076.push((arguments[i__38600__auto___42148]));

var G__42149 = (i__38600__auto___42148 + (1));
i__38600__auto___42148 = G__42149;
continue;
} else {
}
break;
}

var G__42078 = args42076.length;
switch (G__42078) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42076.length)].join('')));

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
var c__40064__auto___42151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___42151,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___42151,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42117){
var state_val_42118 = (state_42117[(1)]);
if((state_val_42118 === (7))){
var state_42117__$1 = state_42117;
var statearr_42119_42152 = state_42117__$1;
(statearr_42119_42152[(2)] = null);

(statearr_42119_42152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (1))){
var state_42117__$1 = state_42117;
var statearr_42120_42153 = state_42117__$1;
(statearr_42120_42153[(2)] = null);

(statearr_42120_42153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (4))){
var inst_42081 = (state_42117[(7)]);
var inst_42083 = (inst_42081 < cnt);
var state_42117__$1 = state_42117;
if(cljs.core.truth_(inst_42083)){
var statearr_42121_42154 = state_42117__$1;
(statearr_42121_42154[(1)] = (6));

} else {
var statearr_42122_42155 = state_42117__$1;
(statearr_42122_42155[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (15))){
var inst_42113 = (state_42117[(2)]);
var state_42117__$1 = state_42117;
var statearr_42123_42156 = state_42117__$1;
(statearr_42123_42156[(2)] = inst_42113);

(statearr_42123_42156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (13))){
var inst_42106 = cljs.core.async.close_BANG_.call(null,out);
var state_42117__$1 = state_42117;
var statearr_42124_42157 = state_42117__$1;
(statearr_42124_42157[(2)] = inst_42106);

(statearr_42124_42157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (6))){
var state_42117__$1 = state_42117;
var statearr_42125_42158 = state_42117__$1;
(statearr_42125_42158[(2)] = null);

(statearr_42125_42158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (3))){
var inst_42115 = (state_42117[(2)]);
var state_42117__$1 = state_42117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42117__$1,inst_42115);
} else {
if((state_val_42118 === (12))){
var inst_42103 = (state_42117[(8)]);
var inst_42103__$1 = (state_42117[(2)]);
var inst_42104 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42103__$1);
var state_42117__$1 = (function (){var statearr_42126 = state_42117;
(statearr_42126[(8)] = inst_42103__$1);

return statearr_42126;
})();
if(cljs.core.truth_(inst_42104)){
var statearr_42127_42159 = state_42117__$1;
(statearr_42127_42159[(1)] = (13));

} else {
var statearr_42128_42160 = state_42117__$1;
(statearr_42128_42160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (2))){
var inst_42080 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42081 = (0);
var state_42117__$1 = (function (){var statearr_42129 = state_42117;
(statearr_42129[(9)] = inst_42080);

(statearr_42129[(7)] = inst_42081);

return statearr_42129;
})();
var statearr_42130_42161 = state_42117__$1;
(statearr_42130_42161[(2)] = null);

(statearr_42130_42161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (11))){
var inst_42081 = (state_42117[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42117,(10),Object,null,(9));
var inst_42090 = chs__$1.call(null,inst_42081);
var inst_42091 = done.call(null,inst_42081);
var inst_42092 = cljs.core.async.take_BANG_.call(null,inst_42090,inst_42091);
var state_42117__$1 = state_42117;
var statearr_42131_42162 = state_42117__$1;
(statearr_42131_42162[(2)] = inst_42092);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42117__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (9))){
var inst_42081 = (state_42117[(7)]);
var inst_42094 = (state_42117[(2)]);
var inst_42095 = (inst_42081 + (1));
var inst_42081__$1 = inst_42095;
var state_42117__$1 = (function (){var statearr_42132 = state_42117;
(statearr_42132[(10)] = inst_42094);

(statearr_42132[(7)] = inst_42081__$1);

return statearr_42132;
})();
var statearr_42133_42163 = state_42117__$1;
(statearr_42133_42163[(2)] = null);

(statearr_42133_42163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (5))){
var inst_42101 = (state_42117[(2)]);
var state_42117__$1 = (function (){var statearr_42134 = state_42117;
(statearr_42134[(11)] = inst_42101);

return statearr_42134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42117__$1,(12),dchan);
} else {
if((state_val_42118 === (14))){
var inst_42103 = (state_42117[(8)]);
var inst_42108 = cljs.core.apply.call(null,f,inst_42103);
var state_42117__$1 = state_42117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42117__$1,(16),out,inst_42108);
} else {
if((state_val_42118 === (16))){
var inst_42110 = (state_42117[(2)]);
var state_42117__$1 = (function (){var statearr_42135 = state_42117;
(statearr_42135[(12)] = inst_42110);

return statearr_42135;
})();
var statearr_42136_42164 = state_42117__$1;
(statearr_42136_42164[(2)] = null);

(statearr_42136_42164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (10))){
var inst_42085 = (state_42117[(2)]);
var inst_42086 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42117__$1 = (function (){var statearr_42137 = state_42117;
(statearr_42137[(13)] = inst_42085);

return statearr_42137;
})();
var statearr_42138_42165 = state_42117__$1;
(statearr_42138_42165[(2)] = inst_42086);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42117__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42118 === (8))){
var inst_42099 = (state_42117[(2)]);
var state_42117__$1 = state_42117;
var statearr_42139_42166 = state_42117__$1;
(statearr_42139_42166[(2)] = inst_42099);

(statearr_42139_42166[(1)] = (5));


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
});})(c__40064__auto___42151,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39950__auto__,c__40064__auto___42151,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_42143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42143[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_42143[(1)] = (1));

return statearr_42143;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_42117){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_42117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e42144){if((e42144 instanceof Object)){
var ex__39954__auto__ = e42144;
var statearr_42145_42167 = state_42117;
(statearr_42145_42167[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42168 = state_42117;
state_42117 = G__42168;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_42117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_42117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___42151,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40066__auto__ = (function (){var statearr_42146 = f__40065__auto__.call(null);
(statearr_42146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___42151);

return statearr_42146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___42151,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42170 = [];
var len__38599__auto___42228 = arguments.length;
var i__38600__auto___42229 = (0);
while(true){
if((i__38600__auto___42229 < len__38599__auto___42228)){
args42170.push((arguments[i__38600__auto___42229]));

var G__42230 = (i__38600__auto___42229 + (1));
i__38600__auto___42229 = G__42230;
continue;
} else {
}
break;
}

var G__42172 = args42170.length;
switch (G__42172) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42170.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40064__auto___42232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___42232,out){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___42232,out){
return (function (state_42204){
var state_val_42205 = (state_42204[(1)]);
if((state_val_42205 === (7))){
var inst_42184 = (state_42204[(7)]);
var inst_42183 = (state_42204[(8)]);
var inst_42183__$1 = (state_42204[(2)]);
var inst_42184__$1 = cljs.core.nth.call(null,inst_42183__$1,(0),null);
var inst_42185 = cljs.core.nth.call(null,inst_42183__$1,(1),null);
var inst_42186 = (inst_42184__$1 == null);
var state_42204__$1 = (function (){var statearr_42206 = state_42204;
(statearr_42206[(7)] = inst_42184__$1);

(statearr_42206[(9)] = inst_42185);

(statearr_42206[(8)] = inst_42183__$1);

return statearr_42206;
})();
if(cljs.core.truth_(inst_42186)){
var statearr_42207_42233 = state_42204__$1;
(statearr_42207_42233[(1)] = (8));

} else {
var statearr_42208_42234 = state_42204__$1;
(statearr_42208_42234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (1))){
var inst_42173 = cljs.core.vec.call(null,chs);
var inst_42174 = inst_42173;
var state_42204__$1 = (function (){var statearr_42209 = state_42204;
(statearr_42209[(10)] = inst_42174);

return statearr_42209;
})();
var statearr_42210_42235 = state_42204__$1;
(statearr_42210_42235[(2)] = null);

(statearr_42210_42235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (4))){
var inst_42174 = (state_42204[(10)]);
var state_42204__$1 = state_42204;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42204__$1,(7),inst_42174);
} else {
if((state_val_42205 === (6))){
var inst_42200 = (state_42204[(2)]);
var state_42204__$1 = state_42204;
var statearr_42211_42236 = state_42204__$1;
(statearr_42211_42236[(2)] = inst_42200);

(statearr_42211_42236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (3))){
var inst_42202 = (state_42204[(2)]);
var state_42204__$1 = state_42204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42204__$1,inst_42202);
} else {
if((state_val_42205 === (2))){
var inst_42174 = (state_42204[(10)]);
var inst_42176 = cljs.core.count.call(null,inst_42174);
var inst_42177 = (inst_42176 > (0));
var state_42204__$1 = state_42204;
if(cljs.core.truth_(inst_42177)){
var statearr_42213_42237 = state_42204__$1;
(statearr_42213_42237[(1)] = (4));

} else {
var statearr_42214_42238 = state_42204__$1;
(statearr_42214_42238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (11))){
var inst_42174 = (state_42204[(10)]);
var inst_42193 = (state_42204[(2)]);
var tmp42212 = inst_42174;
var inst_42174__$1 = tmp42212;
var state_42204__$1 = (function (){var statearr_42215 = state_42204;
(statearr_42215[(11)] = inst_42193);

(statearr_42215[(10)] = inst_42174__$1);

return statearr_42215;
})();
var statearr_42216_42239 = state_42204__$1;
(statearr_42216_42239[(2)] = null);

(statearr_42216_42239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (9))){
var inst_42184 = (state_42204[(7)]);
var state_42204__$1 = state_42204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42204__$1,(11),out,inst_42184);
} else {
if((state_val_42205 === (5))){
var inst_42198 = cljs.core.async.close_BANG_.call(null,out);
var state_42204__$1 = state_42204;
var statearr_42217_42240 = state_42204__$1;
(statearr_42217_42240[(2)] = inst_42198);

(statearr_42217_42240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (10))){
var inst_42196 = (state_42204[(2)]);
var state_42204__$1 = state_42204;
var statearr_42218_42241 = state_42204__$1;
(statearr_42218_42241[(2)] = inst_42196);

(statearr_42218_42241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (8))){
var inst_42184 = (state_42204[(7)]);
var inst_42185 = (state_42204[(9)]);
var inst_42174 = (state_42204[(10)]);
var inst_42183 = (state_42204[(8)]);
var inst_42188 = (function (){var cs = inst_42174;
var vec__42179 = inst_42183;
var v = inst_42184;
var c = inst_42185;
return ((function (cs,vec__42179,v,c,inst_42184,inst_42185,inst_42174,inst_42183,state_val_42205,c__40064__auto___42232,out){
return (function (p1__42169_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42169_SHARP_);
});
;})(cs,vec__42179,v,c,inst_42184,inst_42185,inst_42174,inst_42183,state_val_42205,c__40064__auto___42232,out))
})();
var inst_42189 = cljs.core.filterv.call(null,inst_42188,inst_42174);
var inst_42174__$1 = inst_42189;
var state_42204__$1 = (function (){var statearr_42219 = state_42204;
(statearr_42219[(10)] = inst_42174__$1);

return statearr_42219;
})();
var statearr_42220_42242 = state_42204__$1;
(statearr_42220_42242[(2)] = null);

(statearr_42220_42242[(1)] = (2));


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
});})(c__40064__auto___42232,out))
;
return ((function (switch__39950__auto__,c__40064__auto___42232,out){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_42224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42224[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_42224[(1)] = (1));

return statearr_42224;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_42204){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_42204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e42225){if((e42225 instanceof Object)){
var ex__39954__auto__ = e42225;
var statearr_42226_42243 = state_42204;
(statearr_42226_42243[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42244 = state_42204;
state_42204 = G__42244;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_42204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_42204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___42232,out))
})();
var state__40066__auto__ = (function (){var statearr_42227 = f__40065__auto__.call(null);
(statearr_42227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___42232);

return statearr_42227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___42232,out))
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
var args42245 = [];
var len__38599__auto___42294 = arguments.length;
var i__38600__auto___42295 = (0);
while(true){
if((i__38600__auto___42295 < len__38599__auto___42294)){
args42245.push((arguments[i__38600__auto___42295]));

var G__42296 = (i__38600__auto___42295 + (1));
i__38600__auto___42295 = G__42296;
continue;
} else {
}
break;
}

var G__42247 = args42245.length;
switch (G__42247) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42245.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40064__auto___42298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___42298,out){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___42298,out){
return (function (state_42271){
var state_val_42272 = (state_42271[(1)]);
if((state_val_42272 === (7))){
var inst_42253 = (state_42271[(7)]);
var inst_42253__$1 = (state_42271[(2)]);
var inst_42254 = (inst_42253__$1 == null);
var inst_42255 = cljs.core.not.call(null,inst_42254);
var state_42271__$1 = (function (){var statearr_42273 = state_42271;
(statearr_42273[(7)] = inst_42253__$1);

return statearr_42273;
})();
if(inst_42255){
var statearr_42274_42299 = state_42271__$1;
(statearr_42274_42299[(1)] = (8));

} else {
var statearr_42275_42300 = state_42271__$1;
(statearr_42275_42300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42272 === (1))){
var inst_42248 = (0);
var state_42271__$1 = (function (){var statearr_42276 = state_42271;
(statearr_42276[(8)] = inst_42248);

return statearr_42276;
})();
var statearr_42277_42301 = state_42271__$1;
(statearr_42277_42301[(2)] = null);

(statearr_42277_42301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42272 === (4))){
var state_42271__$1 = state_42271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42271__$1,(7),ch);
} else {
if((state_val_42272 === (6))){
var inst_42266 = (state_42271[(2)]);
var state_42271__$1 = state_42271;
var statearr_42278_42302 = state_42271__$1;
(statearr_42278_42302[(2)] = inst_42266);

(statearr_42278_42302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42272 === (3))){
var inst_42268 = (state_42271[(2)]);
var inst_42269 = cljs.core.async.close_BANG_.call(null,out);
var state_42271__$1 = (function (){var statearr_42279 = state_42271;
(statearr_42279[(9)] = inst_42268);

return statearr_42279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42271__$1,inst_42269);
} else {
if((state_val_42272 === (2))){
var inst_42248 = (state_42271[(8)]);
var inst_42250 = (inst_42248 < n);
var state_42271__$1 = state_42271;
if(cljs.core.truth_(inst_42250)){
var statearr_42280_42303 = state_42271__$1;
(statearr_42280_42303[(1)] = (4));

} else {
var statearr_42281_42304 = state_42271__$1;
(statearr_42281_42304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42272 === (11))){
var inst_42248 = (state_42271[(8)]);
var inst_42258 = (state_42271[(2)]);
var inst_42259 = (inst_42248 + (1));
var inst_42248__$1 = inst_42259;
var state_42271__$1 = (function (){var statearr_42282 = state_42271;
(statearr_42282[(10)] = inst_42258);

(statearr_42282[(8)] = inst_42248__$1);

return statearr_42282;
})();
var statearr_42283_42305 = state_42271__$1;
(statearr_42283_42305[(2)] = null);

(statearr_42283_42305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42272 === (9))){
var state_42271__$1 = state_42271;
var statearr_42284_42306 = state_42271__$1;
(statearr_42284_42306[(2)] = null);

(statearr_42284_42306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42272 === (5))){
var state_42271__$1 = state_42271;
var statearr_42285_42307 = state_42271__$1;
(statearr_42285_42307[(2)] = null);

(statearr_42285_42307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42272 === (10))){
var inst_42263 = (state_42271[(2)]);
var state_42271__$1 = state_42271;
var statearr_42286_42308 = state_42271__$1;
(statearr_42286_42308[(2)] = inst_42263);

(statearr_42286_42308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42272 === (8))){
var inst_42253 = (state_42271[(7)]);
var state_42271__$1 = state_42271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42271__$1,(11),out,inst_42253);
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
});})(c__40064__auto___42298,out))
;
return ((function (switch__39950__auto__,c__40064__auto___42298,out){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_42290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42290[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_42290[(1)] = (1));

return statearr_42290;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_42271){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_42271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e42291){if((e42291 instanceof Object)){
var ex__39954__auto__ = e42291;
var statearr_42292_42309 = state_42271;
(statearr_42292_42309[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42310 = state_42271;
state_42271 = G__42310;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_42271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_42271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___42298,out))
})();
var state__40066__auto__ = (function (){var statearr_42293 = f__40065__auto__.call(null);
(statearr_42293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___42298);

return statearr_42293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___42298,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42318 = (function (f,ch,meta42319){
this.f = f;
this.ch = ch;
this.meta42319 = meta42319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42320,meta42319__$1){
var self__ = this;
var _42320__$1 = this;
return (new cljs.core.async.t_cljs$core$async42318(self__.f,self__.ch,meta42319__$1));
});

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42320){
var self__ = this;
var _42320__$1 = this;
return self__.meta42319;
});

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42321 = (function (f,ch,meta42319,_,fn1,meta42322){
this.f = f;
this.ch = ch;
this.meta42319 = meta42319;
this._ = _;
this.fn1 = fn1;
this.meta42322 = meta42322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42323,meta42322__$1){
var self__ = this;
var _42323__$1 = this;
return (new cljs.core.async.t_cljs$core$async42321(self__.f,self__.ch,self__.meta42319,self__._,self__.fn1,meta42322__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42323){
var self__ = this;
var _42323__$1 = this;
return self__.meta42322;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42311_SHARP_){
return f1.call(null,(((p1__42311_SHARP_ == null))?null:self__.f.call(null,p1__42311_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42321.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42319","meta42319",1527305165,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42318","cljs.core.async/t_cljs$core$async42318",1485621173,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42322","meta42322",1270316863,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42321";

cljs.core.async.t_cljs$core$async42321.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async42321");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42321 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42321(f__$1,ch__$1,meta42319__$1,___$2,fn1__$1,meta42322){
return (new cljs.core.async.t_cljs$core$async42321(f__$1,ch__$1,meta42319__$1,___$2,fn1__$1,meta42322));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42321(self__.f,self__.ch,self__.meta42319,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__37366__auto__ = ret;
if(cljs.core.truth_(and__37366__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__37366__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42319","meta42319",1527305165,null)], null);
});

cljs.core.async.t_cljs$core$async42318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42318";

cljs.core.async.t_cljs$core$async42318.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async42318");
});

cljs.core.async.__GT_t_cljs$core$async42318 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42318(f__$1,ch__$1,meta42319){
return (new cljs.core.async.t_cljs$core$async42318(f__$1,ch__$1,meta42319));
});

}

return (new cljs.core.async.t_cljs$core$async42318(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42327 = (function (f,ch,meta42328){
this.f = f;
this.ch = ch;
this.meta42328 = meta42328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42329,meta42328__$1){
var self__ = this;
var _42329__$1 = this;
return (new cljs.core.async.t_cljs$core$async42327(self__.f,self__.ch,meta42328__$1));
});

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42329){
var self__ = this;
var _42329__$1 = this;
return self__.meta42328;
});

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42328","meta42328",1979978247,null)], null);
});

cljs.core.async.t_cljs$core$async42327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42327";

cljs.core.async.t_cljs$core$async42327.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async42327");
});

cljs.core.async.__GT_t_cljs$core$async42327 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42327(f__$1,ch__$1,meta42328){
return (new cljs.core.async.t_cljs$core$async42327(f__$1,ch__$1,meta42328));
});

}

return (new cljs.core.async.t_cljs$core$async42327(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42333 = (function (p,ch,meta42334){
this.p = p;
this.ch = ch;
this.meta42334 = meta42334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42335,meta42334__$1){
var self__ = this;
var _42335__$1 = this;
return (new cljs.core.async.t_cljs$core$async42333(self__.p,self__.ch,meta42334__$1));
});

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42335){
var self__ = this;
var _42335__$1 = this;
return self__.meta42334;
});

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42334","meta42334",1426659903,null)], null);
});

cljs.core.async.t_cljs$core$async42333.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42333";

cljs.core.async.t_cljs$core$async42333.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cljs.core.async/t_cljs$core$async42333");
});

cljs.core.async.__GT_t_cljs$core$async42333 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42333(p__$1,ch__$1,meta42334){
return (new cljs.core.async.t_cljs$core$async42333(p__$1,ch__$1,meta42334));
});

}

return (new cljs.core.async.t_cljs$core$async42333(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42336 = [];
var len__38599__auto___42380 = arguments.length;
var i__38600__auto___42381 = (0);
while(true){
if((i__38600__auto___42381 < len__38599__auto___42380)){
args42336.push((arguments[i__38600__auto___42381]));

var G__42382 = (i__38600__auto___42381 + (1));
i__38600__auto___42381 = G__42382;
continue;
} else {
}
break;
}

var G__42338 = args42336.length;
switch (G__42338) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42336.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40064__auto___42384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___42384,out){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___42384,out){
return (function (state_42359){
var state_val_42360 = (state_42359[(1)]);
if((state_val_42360 === (7))){
var inst_42355 = (state_42359[(2)]);
var state_42359__$1 = state_42359;
var statearr_42361_42385 = state_42359__$1;
(statearr_42361_42385[(2)] = inst_42355);

(statearr_42361_42385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42360 === (1))){
var state_42359__$1 = state_42359;
var statearr_42362_42386 = state_42359__$1;
(statearr_42362_42386[(2)] = null);

(statearr_42362_42386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42360 === (4))){
var inst_42341 = (state_42359[(7)]);
var inst_42341__$1 = (state_42359[(2)]);
var inst_42342 = (inst_42341__$1 == null);
var state_42359__$1 = (function (){var statearr_42363 = state_42359;
(statearr_42363[(7)] = inst_42341__$1);

return statearr_42363;
})();
if(cljs.core.truth_(inst_42342)){
var statearr_42364_42387 = state_42359__$1;
(statearr_42364_42387[(1)] = (5));

} else {
var statearr_42365_42388 = state_42359__$1;
(statearr_42365_42388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42360 === (6))){
var inst_42341 = (state_42359[(7)]);
var inst_42346 = p.call(null,inst_42341);
var state_42359__$1 = state_42359;
if(cljs.core.truth_(inst_42346)){
var statearr_42366_42389 = state_42359__$1;
(statearr_42366_42389[(1)] = (8));

} else {
var statearr_42367_42390 = state_42359__$1;
(statearr_42367_42390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42360 === (3))){
var inst_42357 = (state_42359[(2)]);
var state_42359__$1 = state_42359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42359__$1,inst_42357);
} else {
if((state_val_42360 === (2))){
var state_42359__$1 = state_42359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42359__$1,(4),ch);
} else {
if((state_val_42360 === (11))){
var inst_42349 = (state_42359[(2)]);
var state_42359__$1 = state_42359;
var statearr_42368_42391 = state_42359__$1;
(statearr_42368_42391[(2)] = inst_42349);

(statearr_42368_42391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42360 === (9))){
var state_42359__$1 = state_42359;
var statearr_42369_42392 = state_42359__$1;
(statearr_42369_42392[(2)] = null);

(statearr_42369_42392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42360 === (5))){
var inst_42344 = cljs.core.async.close_BANG_.call(null,out);
var state_42359__$1 = state_42359;
var statearr_42370_42393 = state_42359__$1;
(statearr_42370_42393[(2)] = inst_42344);

(statearr_42370_42393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42360 === (10))){
var inst_42352 = (state_42359[(2)]);
var state_42359__$1 = (function (){var statearr_42371 = state_42359;
(statearr_42371[(8)] = inst_42352);

return statearr_42371;
})();
var statearr_42372_42394 = state_42359__$1;
(statearr_42372_42394[(2)] = null);

(statearr_42372_42394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42360 === (8))){
var inst_42341 = (state_42359[(7)]);
var state_42359__$1 = state_42359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42359__$1,(11),out,inst_42341);
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
});})(c__40064__auto___42384,out))
;
return ((function (switch__39950__auto__,c__40064__auto___42384,out){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_42376 = [null,null,null,null,null,null,null,null,null];
(statearr_42376[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_42376[(1)] = (1));

return statearr_42376;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_42359){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_42359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e42377){if((e42377 instanceof Object)){
var ex__39954__auto__ = e42377;
var statearr_42378_42395 = state_42359;
(statearr_42378_42395[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42396 = state_42359;
state_42359 = G__42396;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_42359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_42359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___42384,out))
})();
var state__40066__auto__ = (function (){var statearr_42379 = f__40065__auto__.call(null);
(statearr_42379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___42384);

return statearr_42379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___42384,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42397 = [];
var len__38599__auto___42400 = arguments.length;
var i__38600__auto___42401 = (0);
while(true){
if((i__38600__auto___42401 < len__38599__auto___42400)){
args42397.push((arguments[i__38600__auto___42401]));

var G__42402 = (i__38600__auto___42401 + (1));
i__38600__auto___42401 = G__42402;
continue;
} else {
}
break;
}

var G__42399 = args42397.length;
switch (G__42399) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42397.length)].join('')));

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
var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__){
return (function (state_42569){
var state_val_42570 = (state_42569[(1)]);
if((state_val_42570 === (7))){
var inst_42565 = (state_42569[(2)]);
var state_42569__$1 = state_42569;
var statearr_42571_42612 = state_42569__$1;
(statearr_42571_42612[(2)] = inst_42565);

(statearr_42571_42612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (20))){
var inst_42535 = (state_42569[(7)]);
var inst_42546 = (state_42569[(2)]);
var inst_42547 = cljs.core.next.call(null,inst_42535);
var inst_42521 = inst_42547;
var inst_42522 = null;
var inst_42523 = (0);
var inst_42524 = (0);
var state_42569__$1 = (function (){var statearr_42572 = state_42569;
(statearr_42572[(8)] = inst_42521);

(statearr_42572[(9)] = inst_42523);

(statearr_42572[(10)] = inst_42546);

(statearr_42572[(11)] = inst_42522);

(statearr_42572[(12)] = inst_42524);

return statearr_42572;
})();
var statearr_42573_42613 = state_42569__$1;
(statearr_42573_42613[(2)] = null);

(statearr_42573_42613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (1))){
var state_42569__$1 = state_42569;
var statearr_42574_42614 = state_42569__$1;
(statearr_42574_42614[(2)] = null);

(statearr_42574_42614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (4))){
var inst_42510 = (state_42569[(13)]);
var inst_42510__$1 = (state_42569[(2)]);
var inst_42511 = (inst_42510__$1 == null);
var state_42569__$1 = (function (){var statearr_42575 = state_42569;
(statearr_42575[(13)] = inst_42510__$1);

return statearr_42575;
})();
if(cljs.core.truth_(inst_42511)){
var statearr_42576_42615 = state_42569__$1;
(statearr_42576_42615[(1)] = (5));

} else {
var statearr_42577_42616 = state_42569__$1;
(statearr_42577_42616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (15))){
var state_42569__$1 = state_42569;
var statearr_42581_42617 = state_42569__$1;
(statearr_42581_42617[(2)] = null);

(statearr_42581_42617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (21))){
var state_42569__$1 = state_42569;
var statearr_42582_42618 = state_42569__$1;
(statearr_42582_42618[(2)] = null);

(statearr_42582_42618[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (13))){
var inst_42521 = (state_42569[(8)]);
var inst_42523 = (state_42569[(9)]);
var inst_42522 = (state_42569[(11)]);
var inst_42524 = (state_42569[(12)]);
var inst_42531 = (state_42569[(2)]);
var inst_42532 = (inst_42524 + (1));
var tmp42578 = inst_42521;
var tmp42579 = inst_42523;
var tmp42580 = inst_42522;
var inst_42521__$1 = tmp42578;
var inst_42522__$1 = tmp42580;
var inst_42523__$1 = tmp42579;
var inst_42524__$1 = inst_42532;
var state_42569__$1 = (function (){var statearr_42583 = state_42569;
(statearr_42583[(14)] = inst_42531);

(statearr_42583[(8)] = inst_42521__$1);

(statearr_42583[(9)] = inst_42523__$1);

(statearr_42583[(11)] = inst_42522__$1);

(statearr_42583[(12)] = inst_42524__$1);

return statearr_42583;
})();
var statearr_42584_42619 = state_42569__$1;
(statearr_42584_42619[(2)] = null);

(statearr_42584_42619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (22))){
var state_42569__$1 = state_42569;
var statearr_42585_42620 = state_42569__$1;
(statearr_42585_42620[(2)] = null);

(statearr_42585_42620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (6))){
var inst_42510 = (state_42569[(13)]);
var inst_42519 = f.call(null,inst_42510);
var inst_42520 = cljs.core.seq.call(null,inst_42519);
var inst_42521 = inst_42520;
var inst_42522 = null;
var inst_42523 = (0);
var inst_42524 = (0);
var state_42569__$1 = (function (){var statearr_42586 = state_42569;
(statearr_42586[(8)] = inst_42521);

(statearr_42586[(9)] = inst_42523);

(statearr_42586[(11)] = inst_42522);

(statearr_42586[(12)] = inst_42524);

return statearr_42586;
})();
var statearr_42587_42621 = state_42569__$1;
(statearr_42587_42621[(2)] = null);

(statearr_42587_42621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (17))){
var inst_42535 = (state_42569[(7)]);
var inst_42539 = cljs.core.chunk_first.call(null,inst_42535);
var inst_42540 = cljs.core.chunk_rest.call(null,inst_42535);
var inst_42541 = cljs.core.count.call(null,inst_42539);
var inst_42521 = inst_42540;
var inst_42522 = inst_42539;
var inst_42523 = inst_42541;
var inst_42524 = (0);
var state_42569__$1 = (function (){var statearr_42588 = state_42569;
(statearr_42588[(8)] = inst_42521);

(statearr_42588[(9)] = inst_42523);

(statearr_42588[(11)] = inst_42522);

(statearr_42588[(12)] = inst_42524);

return statearr_42588;
})();
var statearr_42589_42622 = state_42569__$1;
(statearr_42589_42622[(2)] = null);

(statearr_42589_42622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (3))){
var inst_42567 = (state_42569[(2)]);
var state_42569__$1 = state_42569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42569__$1,inst_42567);
} else {
if((state_val_42570 === (12))){
var inst_42555 = (state_42569[(2)]);
var state_42569__$1 = state_42569;
var statearr_42590_42623 = state_42569__$1;
(statearr_42590_42623[(2)] = inst_42555);

(statearr_42590_42623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (2))){
var state_42569__$1 = state_42569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42569__$1,(4),in$);
} else {
if((state_val_42570 === (23))){
var inst_42563 = (state_42569[(2)]);
var state_42569__$1 = state_42569;
var statearr_42591_42624 = state_42569__$1;
(statearr_42591_42624[(2)] = inst_42563);

(statearr_42591_42624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (19))){
var inst_42550 = (state_42569[(2)]);
var state_42569__$1 = state_42569;
var statearr_42592_42625 = state_42569__$1;
(statearr_42592_42625[(2)] = inst_42550);

(statearr_42592_42625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (11))){
var inst_42535 = (state_42569[(7)]);
var inst_42521 = (state_42569[(8)]);
var inst_42535__$1 = cljs.core.seq.call(null,inst_42521);
var state_42569__$1 = (function (){var statearr_42593 = state_42569;
(statearr_42593[(7)] = inst_42535__$1);

return statearr_42593;
})();
if(inst_42535__$1){
var statearr_42594_42626 = state_42569__$1;
(statearr_42594_42626[(1)] = (14));

} else {
var statearr_42595_42627 = state_42569__$1;
(statearr_42595_42627[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (9))){
var inst_42557 = (state_42569[(2)]);
var inst_42558 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42569__$1 = (function (){var statearr_42596 = state_42569;
(statearr_42596[(15)] = inst_42557);

return statearr_42596;
})();
if(cljs.core.truth_(inst_42558)){
var statearr_42597_42628 = state_42569__$1;
(statearr_42597_42628[(1)] = (21));

} else {
var statearr_42598_42629 = state_42569__$1;
(statearr_42598_42629[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (5))){
var inst_42513 = cljs.core.async.close_BANG_.call(null,out);
var state_42569__$1 = state_42569;
var statearr_42599_42630 = state_42569__$1;
(statearr_42599_42630[(2)] = inst_42513);

(statearr_42599_42630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (14))){
var inst_42535 = (state_42569[(7)]);
var inst_42537 = cljs.core.chunked_seq_QMARK_.call(null,inst_42535);
var state_42569__$1 = state_42569;
if(inst_42537){
var statearr_42600_42631 = state_42569__$1;
(statearr_42600_42631[(1)] = (17));

} else {
var statearr_42601_42632 = state_42569__$1;
(statearr_42601_42632[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (16))){
var inst_42553 = (state_42569[(2)]);
var state_42569__$1 = state_42569;
var statearr_42602_42633 = state_42569__$1;
(statearr_42602_42633[(2)] = inst_42553);

(statearr_42602_42633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42570 === (10))){
var inst_42522 = (state_42569[(11)]);
var inst_42524 = (state_42569[(12)]);
var inst_42529 = cljs.core._nth.call(null,inst_42522,inst_42524);
var state_42569__$1 = state_42569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42569__$1,(13),out,inst_42529);
} else {
if((state_val_42570 === (18))){
var inst_42535 = (state_42569[(7)]);
var inst_42544 = cljs.core.first.call(null,inst_42535);
var state_42569__$1 = state_42569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42569__$1,(20),out,inst_42544);
} else {
if((state_val_42570 === (8))){
var inst_42523 = (state_42569[(9)]);
var inst_42524 = (state_42569[(12)]);
var inst_42526 = (inst_42524 < inst_42523);
var inst_42527 = inst_42526;
var state_42569__$1 = state_42569;
if(cljs.core.truth_(inst_42527)){
var statearr_42603_42634 = state_42569__$1;
(statearr_42603_42634[(1)] = (10));

} else {
var statearr_42604_42635 = state_42569__$1;
(statearr_42604_42635[(1)] = (11));

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
});})(c__40064__auto__))
;
return ((function (switch__39950__auto__,c__40064__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39951__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39951__auto____0 = (function (){
var statearr_42608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42608[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39951__auto__);

(statearr_42608[(1)] = (1));

return statearr_42608;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39951__auto____1 = (function (state_42569){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_42569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e42609){if((e42609 instanceof Object)){
var ex__39954__auto__ = e42609;
var statearr_42610_42636 = state_42569;
(statearr_42610_42636[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42637 = state_42569;
state_42569 = G__42637;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39951__auto__ = function(state_42569){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39951__auto____1.call(this,state_42569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39951__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39951__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__))
})();
var state__40066__auto__ = (function (){var statearr_42611 = f__40065__auto__.call(null);
(statearr_42611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_42611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__))
);

return c__40064__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args42638 = [];
var len__38599__auto___42641 = arguments.length;
var i__38600__auto___42642 = (0);
while(true){
if((i__38600__auto___42642 < len__38599__auto___42641)){
args42638.push((arguments[i__38600__auto___42642]));

var G__42643 = (i__38600__auto___42642 + (1));
i__38600__auto___42642 = G__42643;
continue;
} else {
}
break;
}

var G__42640 = args42638.length;
switch (G__42640) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42638.length)].join('')));

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
var args42645 = [];
var len__38599__auto___42648 = arguments.length;
var i__38600__auto___42649 = (0);
while(true){
if((i__38600__auto___42649 < len__38599__auto___42648)){
args42645.push((arguments[i__38600__auto___42649]));

var G__42650 = (i__38600__auto___42649 + (1));
i__38600__auto___42649 = G__42650;
continue;
} else {
}
break;
}

var G__42647 = args42645.length;
switch (G__42647) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42645.length)].join('')));

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
var args42652 = [];
var len__38599__auto___42703 = arguments.length;
var i__38600__auto___42704 = (0);
while(true){
if((i__38600__auto___42704 < len__38599__auto___42703)){
args42652.push((arguments[i__38600__auto___42704]));

var G__42705 = (i__38600__auto___42704 + (1));
i__38600__auto___42704 = G__42705;
continue;
} else {
}
break;
}

var G__42654 = args42652.length;
switch (G__42654) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42652.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40064__auto___42707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___42707,out){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___42707,out){
return (function (state_42678){
var state_val_42679 = (state_42678[(1)]);
if((state_val_42679 === (7))){
var inst_42673 = (state_42678[(2)]);
var state_42678__$1 = state_42678;
var statearr_42680_42708 = state_42678__$1;
(statearr_42680_42708[(2)] = inst_42673);

(statearr_42680_42708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42679 === (1))){
var inst_42655 = null;
var state_42678__$1 = (function (){var statearr_42681 = state_42678;
(statearr_42681[(7)] = inst_42655);

return statearr_42681;
})();
var statearr_42682_42709 = state_42678__$1;
(statearr_42682_42709[(2)] = null);

(statearr_42682_42709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42679 === (4))){
var inst_42658 = (state_42678[(8)]);
var inst_42658__$1 = (state_42678[(2)]);
var inst_42659 = (inst_42658__$1 == null);
var inst_42660 = cljs.core.not.call(null,inst_42659);
var state_42678__$1 = (function (){var statearr_42683 = state_42678;
(statearr_42683[(8)] = inst_42658__$1);

return statearr_42683;
})();
if(inst_42660){
var statearr_42684_42710 = state_42678__$1;
(statearr_42684_42710[(1)] = (5));

} else {
var statearr_42685_42711 = state_42678__$1;
(statearr_42685_42711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42679 === (6))){
var state_42678__$1 = state_42678;
var statearr_42686_42712 = state_42678__$1;
(statearr_42686_42712[(2)] = null);

(statearr_42686_42712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42679 === (3))){
var inst_42675 = (state_42678[(2)]);
var inst_42676 = cljs.core.async.close_BANG_.call(null,out);
var state_42678__$1 = (function (){var statearr_42687 = state_42678;
(statearr_42687[(9)] = inst_42675);

return statearr_42687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42678__$1,inst_42676);
} else {
if((state_val_42679 === (2))){
var state_42678__$1 = state_42678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42678__$1,(4),ch);
} else {
if((state_val_42679 === (11))){
var inst_42658 = (state_42678[(8)]);
var inst_42667 = (state_42678[(2)]);
var inst_42655 = inst_42658;
var state_42678__$1 = (function (){var statearr_42688 = state_42678;
(statearr_42688[(7)] = inst_42655);

(statearr_42688[(10)] = inst_42667);

return statearr_42688;
})();
var statearr_42689_42713 = state_42678__$1;
(statearr_42689_42713[(2)] = null);

(statearr_42689_42713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42679 === (9))){
var inst_42658 = (state_42678[(8)]);
var state_42678__$1 = state_42678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42678__$1,(11),out,inst_42658);
} else {
if((state_val_42679 === (5))){
var inst_42658 = (state_42678[(8)]);
var inst_42655 = (state_42678[(7)]);
var inst_42662 = cljs.core._EQ_.call(null,inst_42658,inst_42655);
var state_42678__$1 = state_42678;
if(inst_42662){
var statearr_42691_42714 = state_42678__$1;
(statearr_42691_42714[(1)] = (8));

} else {
var statearr_42692_42715 = state_42678__$1;
(statearr_42692_42715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42679 === (10))){
var inst_42670 = (state_42678[(2)]);
var state_42678__$1 = state_42678;
var statearr_42693_42716 = state_42678__$1;
(statearr_42693_42716[(2)] = inst_42670);

(statearr_42693_42716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42679 === (8))){
var inst_42655 = (state_42678[(7)]);
var tmp42690 = inst_42655;
var inst_42655__$1 = tmp42690;
var state_42678__$1 = (function (){var statearr_42694 = state_42678;
(statearr_42694[(7)] = inst_42655__$1);

return statearr_42694;
})();
var statearr_42695_42717 = state_42678__$1;
(statearr_42695_42717[(2)] = null);

(statearr_42695_42717[(1)] = (2));


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
});})(c__40064__auto___42707,out))
;
return ((function (switch__39950__auto__,c__40064__auto___42707,out){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_42699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42699[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_42699[(1)] = (1));

return statearr_42699;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_42678){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_42678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e42700){if((e42700 instanceof Object)){
var ex__39954__auto__ = e42700;
var statearr_42701_42718 = state_42678;
(statearr_42701_42718[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42719 = state_42678;
state_42678 = G__42719;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_42678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_42678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___42707,out))
})();
var state__40066__auto__ = (function (){var statearr_42702 = f__40065__auto__.call(null);
(statearr_42702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___42707);

return statearr_42702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___42707,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42720 = [];
var len__38599__auto___42790 = arguments.length;
var i__38600__auto___42791 = (0);
while(true){
if((i__38600__auto___42791 < len__38599__auto___42790)){
args42720.push((arguments[i__38600__auto___42791]));

var G__42792 = (i__38600__auto___42791 + (1));
i__38600__auto___42791 = G__42792;
continue;
} else {
}
break;
}

var G__42722 = args42720.length;
switch (G__42722) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42720.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40064__auto___42794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___42794,out){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___42794,out){
return (function (state_42760){
var state_val_42761 = (state_42760[(1)]);
if((state_val_42761 === (7))){
var inst_42756 = (state_42760[(2)]);
var state_42760__$1 = state_42760;
var statearr_42762_42795 = state_42760__$1;
(statearr_42762_42795[(2)] = inst_42756);

(statearr_42762_42795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (1))){
var inst_42723 = (new Array(n));
var inst_42724 = inst_42723;
var inst_42725 = (0);
var state_42760__$1 = (function (){var statearr_42763 = state_42760;
(statearr_42763[(7)] = inst_42725);

(statearr_42763[(8)] = inst_42724);

return statearr_42763;
})();
var statearr_42764_42796 = state_42760__$1;
(statearr_42764_42796[(2)] = null);

(statearr_42764_42796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (4))){
var inst_42728 = (state_42760[(9)]);
var inst_42728__$1 = (state_42760[(2)]);
var inst_42729 = (inst_42728__$1 == null);
var inst_42730 = cljs.core.not.call(null,inst_42729);
var state_42760__$1 = (function (){var statearr_42765 = state_42760;
(statearr_42765[(9)] = inst_42728__$1);

return statearr_42765;
})();
if(inst_42730){
var statearr_42766_42797 = state_42760__$1;
(statearr_42766_42797[(1)] = (5));

} else {
var statearr_42767_42798 = state_42760__$1;
(statearr_42767_42798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (15))){
var inst_42750 = (state_42760[(2)]);
var state_42760__$1 = state_42760;
var statearr_42768_42799 = state_42760__$1;
(statearr_42768_42799[(2)] = inst_42750);

(statearr_42768_42799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (13))){
var state_42760__$1 = state_42760;
var statearr_42769_42800 = state_42760__$1;
(statearr_42769_42800[(2)] = null);

(statearr_42769_42800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (6))){
var inst_42725 = (state_42760[(7)]);
var inst_42746 = (inst_42725 > (0));
var state_42760__$1 = state_42760;
if(cljs.core.truth_(inst_42746)){
var statearr_42770_42801 = state_42760__$1;
(statearr_42770_42801[(1)] = (12));

} else {
var statearr_42771_42802 = state_42760__$1;
(statearr_42771_42802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (3))){
var inst_42758 = (state_42760[(2)]);
var state_42760__$1 = state_42760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42760__$1,inst_42758);
} else {
if((state_val_42761 === (12))){
var inst_42724 = (state_42760[(8)]);
var inst_42748 = cljs.core.vec.call(null,inst_42724);
var state_42760__$1 = state_42760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42760__$1,(15),out,inst_42748);
} else {
if((state_val_42761 === (2))){
var state_42760__$1 = state_42760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42760__$1,(4),ch);
} else {
if((state_val_42761 === (11))){
var inst_42740 = (state_42760[(2)]);
var inst_42741 = (new Array(n));
var inst_42724 = inst_42741;
var inst_42725 = (0);
var state_42760__$1 = (function (){var statearr_42772 = state_42760;
(statearr_42772[(7)] = inst_42725);

(statearr_42772[(10)] = inst_42740);

(statearr_42772[(8)] = inst_42724);

return statearr_42772;
})();
var statearr_42773_42803 = state_42760__$1;
(statearr_42773_42803[(2)] = null);

(statearr_42773_42803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (9))){
var inst_42724 = (state_42760[(8)]);
var inst_42738 = cljs.core.vec.call(null,inst_42724);
var state_42760__$1 = state_42760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42760__$1,(11),out,inst_42738);
} else {
if((state_val_42761 === (5))){
var inst_42725 = (state_42760[(7)]);
var inst_42733 = (state_42760[(11)]);
var inst_42724 = (state_42760[(8)]);
var inst_42728 = (state_42760[(9)]);
var inst_42732 = (inst_42724[inst_42725] = inst_42728);
var inst_42733__$1 = (inst_42725 + (1));
var inst_42734 = (inst_42733__$1 < n);
var state_42760__$1 = (function (){var statearr_42774 = state_42760;
(statearr_42774[(11)] = inst_42733__$1);

(statearr_42774[(12)] = inst_42732);

return statearr_42774;
})();
if(cljs.core.truth_(inst_42734)){
var statearr_42775_42804 = state_42760__$1;
(statearr_42775_42804[(1)] = (8));

} else {
var statearr_42776_42805 = state_42760__$1;
(statearr_42776_42805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (14))){
var inst_42753 = (state_42760[(2)]);
var inst_42754 = cljs.core.async.close_BANG_.call(null,out);
var state_42760__$1 = (function (){var statearr_42778 = state_42760;
(statearr_42778[(13)] = inst_42753);

return statearr_42778;
})();
var statearr_42779_42806 = state_42760__$1;
(statearr_42779_42806[(2)] = inst_42754);

(statearr_42779_42806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (10))){
var inst_42744 = (state_42760[(2)]);
var state_42760__$1 = state_42760;
var statearr_42780_42807 = state_42760__$1;
(statearr_42780_42807[(2)] = inst_42744);

(statearr_42780_42807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42761 === (8))){
var inst_42733 = (state_42760[(11)]);
var inst_42724 = (state_42760[(8)]);
var tmp42777 = inst_42724;
var inst_42724__$1 = tmp42777;
var inst_42725 = inst_42733;
var state_42760__$1 = (function (){var statearr_42781 = state_42760;
(statearr_42781[(7)] = inst_42725);

(statearr_42781[(8)] = inst_42724__$1);

return statearr_42781;
})();
var statearr_42782_42808 = state_42760__$1;
(statearr_42782_42808[(2)] = null);

(statearr_42782_42808[(1)] = (2));


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
});})(c__40064__auto___42794,out))
;
return ((function (switch__39950__auto__,c__40064__auto___42794,out){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_42786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42786[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_42786[(1)] = (1));

return statearr_42786;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_42760){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_42760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e42787){if((e42787 instanceof Object)){
var ex__39954__auto__ = e42787;
var statearr_42788_42809 = state_42760;
(statearr_42788_42809[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42810 = state_42760;
state_42760 = G__42810;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_42760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_42760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___42794,out))
})();
var state__40066__auto__ = (function (){var statearr_42789 = f__40065__auto__.call(null);
(statearr_42789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___42794);

return statearr_42789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___42794,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42811 = [];
var len__38599__auto___42885 = arguments.length;
var i__38600__auto___42886 = (0);
while(true){
if((i__38600__auto___42886 < len__38599__auto___42885)){
args42811.push((arguments[i__38600__auto___42886]));

var G__42887 = (i__38600__auto___42886 + (1));
i__38600__auto___42886 = G__42887;
continue;
} else {
}
break;
}

var G__42813 = args42811.length;
switch (G__42813) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42811.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40064__auto___42889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___42889,out){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___42889,out){
return (function (state_42855){
var state_val_42856 = (state_42855[(1)]);
if((state_val_42856 === (7))){
var inst_42851 = (state_42855[(2)]);
var state_42855__$1 = state_42855;
var statearr_42857_42890 = state_42855__$1;
(statearr_42857_42890[(2)] = inst_42851);

(statearr_42857_42890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (1))){
var inst_42814 = [];
var inst_42815 = inst_42814;
var inst_42816 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42855__$1 = (function (){var statearr_42858 = state_42855;
(statearr_42858[(7)] = inst_42816);

(statearr_42858[(8)] = inst_42815);

return statearr_42858;
})();
var statearr_42859_42891 = state_42855__$1;
(statearr_42859_42891[(2)] = null);

(statearr_42859_42891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (4))){
var inst_42819 = (state_42855[(9)]);
var inst_42819__$1 = (state_42855[(2)]);
var inst_42820 = (inst_42819__$1 == null);
var inst_42821 = cljs.core.not.call(null,inst_42820);
var state_42855__$1 = (function (){var statearr_42860 = state_42855;
(statearr_42860[(9)] = inst_42819__$1);

return statearr_42860;
})();
if(inst_42821){
var statearr_42861_42892 = state_42855__$1;
(statearr_42861_42892[(1)] = (5));

} else {
var statearr_42862_42893 = state_42855__$1;
(statearr_42862_42893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (15))){
var inst_42845 = (state_42855[(2)]);
var state_42855__$1 = state_42855;
var statearr_42863_42894 = state_42855__$1;
(statearr_42863_42894[(2)] = inst_42845);

(statearr_42863_42894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (13))){
var state_42855__$1 = state_42855;
var statearr_42864_42895 = state_42855__$1;
(statearr_42864_42895[(2)] = null);

(statearr_42864_42895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (6))){
var inst_42815 = (state_42855[(8)]);
var inst_42840 = inst_42815.length;
var inst_42841 = (inst_42840 > (0));
var state_42855__$1 = state_42855;
if(cljs.core.truth_(inst_42841)){
var statearr_42865_42896 = state_42855__$1;
(statearr_42865_42896[(1)] = (12));

} else {
var statearr_42866_42897 = state_42855__$1;
(statearr_42866_42897[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (3))){
var inst_42853 = (state_42855[(2)]);
var state_42855__$1 = state_42855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42855__$1,inst_42853);
} else {
if((state_val_42856 === (12))){
var inst_42815 = (state_42855[(8)]);
var inst_42843 = cljs.core.vec.call(null,inst_42815);
var state_42855__$1 = state_42855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42855__$1,(15),out,inst_42843);
} else {
if((state_val_42856 === (2))){
var state_42855__$1 = state_42855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42855__$1,(4),ch);
} else {
if((state_val_42856 === (11))){
var inst_42823 = (state_42855[(10)]);
var inst_42819 = (state_42855[(9)]);
var inst_42833 = (state_42855[(2)]);
var inst_42834 = [];
var inst_42835 = inst_42834.push(inst_42819);
var inst_42815 = inst_42834;
var inst_42816 = inst_42823;
var state_42855__$1 = (function (){var statearr_42867 = state_42855;
(statearr_42867[(7)] = inst_42816);

(statearr_42867[(11)] = inst_42833);

(statearr_42867[(8)] = inst_42815);

(statearr_42867[(12)] = inst_42835);

return statearr_42867;
})();
var statearr_42868_42898 = state_42855__$1;
(statearr_42868_42898[(2)] = null);

(statearr_42868_42898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (9))){
var inst_42815 = (state_42855[(8)]);
var inst_42831 = cljs.core.vec.call(null,inst_42815);
var state_42855__$1 = state_42855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42855__$1,(11),out,inst_42831);
} else {
if((state_val_42856 === (5))){
var inst_42816 = (state_42855[(7)]);
var inst_42823 = (state_42855[(10)]);
var inst_42819 = (state_42855[(9)]);
var inst_42823__$1 = f.call(null,inst_42819);
var inst_42824 = cljs.core._EQ_.call(null,inst_42823__$1,inst_42816);
var inst_42825 = cljs.core.keyword_identical_QMARK_.call(null,inst_42816,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42826 = (inst_42824) || (inst_42825);
var state_42855__$1 = (function (){var statearr_42869 = state_42855;
(statearr_42869[(10)] = inst_42823__$1);

return statearr_42869;
})();
if(cljs.core.truth_(inst_42826)){
var statearr_42870_42899 = state_42855__$1;
(statearr_42870_42899[(1)] = (8));

} else {
var statearr_42871_42900 = state_42855__$1;
(statearr_42871_42900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (14))){
var inst_42848 = (state_42855[(2)]);
var inst_42849 = cljs.core.async.close_BANG_.call(null,out);
var state_42855__$1 = (function (){var statearr_42873 = state_42855;
(statearr_42873[(13)] = inst_42848);

return statearr_42873;
})();
var statearr_42874_42901 = state_42855__$1;
(statearr_42874_42901[(2)] = inst_42849);

(statearr_42874_42901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (10))){
var inst_42838 = (state_42855[(2)]);
var state_42855__$1 = state_42855;
var statearr_42875_42902 = state_42855__$1;
(statearr_42875_42902[(2)] = inst_42838);

(statearr_42875_42902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42856 === (8))){
var inst_42815 = (state_42855[(8)]);
var inst_42823 = (state_42855[(10)]);
var inst_42819 = (state_42855[(9)]);
var inst_42828 = inst_42815.push(inst_42819);
var tmp42872 = inst_42815;
var inst_42815__$1 = tmp42872;
var inst_42816 = inst_42823;
var state_42855__$1 = (function (){var statearr_42876 = state_42855;
(statearr_42876[(7)] = inst_42816);

(statearr_42876[(14)] = inst_42828);

(statearr_42876[(8)] = inst_42815__$1);

return statearr_42876;
})();
var statearr_42877_42903 = state_42855__$1;
(statearr_42877_42903[(2)] = null);

(statearr_42877_42903[(1)] = (2));


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
});})(c__40064__auto___42889,out))
;
return ((function (switch__39950__auto__,c__40064__auto___42889,out){
return (function() {
var cljs$core$async$state_machine__39951__auto__ = null;
var cljs$core$async$state_machine__39951__auto____0 = (function (){
var statearr_42881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42881[(0)] = cljs$core$async$state_machine__39951__auto__);

(statearr_42881[(1)] = (1));

return statearr_42881;
});
var cljs$core$async$state_machine__39951__auto____1 = (function (state_42855){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_42855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e42882){if((e42882 instanceof Object)){
var ex__39954__auto__ = e42882;
var statearr_42883_42904 = state_42855;
(statearr_42883_42904[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42905 = state_42855;
state_42855 = G__42905;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
cljs$core$async$state_machine__39951__auto__ = function(state_42855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39951__auto____1.call(this,state_42855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39951__auto____0;
cljs$core$async$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39951__auto____1;
return cljs$core$async$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___42889,out))
})();
var state__40066__auto__ = (function (){var statearr_42884 = f__40065__auto__.call(null);
(statearr_42884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___42889);

return statearr_42884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___42889,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1487810674868