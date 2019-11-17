// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17650 = arguments.length;
switch (G__17650) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17651 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17651 = (function (f,blockable,meta17652){
this.f = f;
this.blockable = blockable;
this.meta17652 = meta17652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17653,meta17652__$1){
var self__ = this;
var _17653__$1 = this;
return (new cljs.core.async.t_cljs$core$async17651(self__.f,self__.blockable,meta17652__$1));
});

cljs.core.async.t_cljs$core$async17651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17653){
var self__ = this;
var _17653__$1 = this;
return self__.meta17652;
});

cljs.core.async.t_cljs$core$async17651.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17651.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17652], null);
});

cljs.core.async.t_cljs$core$async17651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17651";

cljs.core.async.t_cljs$core$async17651.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17651");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17651.
 */
cljs.core.async.__GT_t_cljs$core$async17651 = (function cljs$core$async$__GT_t_cljs$core$async17651(f__$1,blockable__$1,meta17652){
return (new cljs.core.async.t_cljs$core$async17651(f__$1,blockable__$1,meta17652));
});

}

return (new cljs.core.async.t_cljs$core$async17651(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__17657 = arguments.length;
switch (G__17657) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__17660 = arguments.length;
switch (G__17660) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__17663 = arguments.length;
switch (G__17663) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17665 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17665) : fn1.call(null,val_17665));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17665,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17665) : fn1.call(null,val_17665));
});})(val_17665,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17667 = arguments.length;
switch (G__17667) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___17669 = n;
var x_17670 = (0);
while(true){
if((x_17670 < n__4408__auto___17669)){
(a[x_17670] = x_17670);

var G__17671 = (x_17670 + (1));
x_17670 = G__17671;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17672 = (function (flag,meta17673){
this.flag = flag;
this.meta17673 = meta17673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17674,meta17673__$1){
var self__ = this;
var _17674__$1 = this;
return (new cljs.core.async.t_cljs$core$async17672(self__.flag,meta17673__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17674){
var self__ = this;
var _17674__$1 = this;
return self__.meta17673;
});})(flag))
;

cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17672.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17673], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17672";

cljs.core.async.t_cljs$core$async17672.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17672");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17672.
 */
cljs.core.async.__GT_t_cljs$core$async17672 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17672(flag__$1,meta17673){
return (new cljs.core.async.t_cljs$core$async17672(flag__$1,meta17673));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17672(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17675 = (function (flag,cb,meta17676){
this.flag = flag;
this.cb = cb;
this.meta17676 = meta17676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17677,meta17676__$1){
var self__ = this;
var _17677__$1 = this;
return (new cljs.core.async.t_cljs$core$async17675(self__.flag,self__.cb,meta17676__$1));
});

cljs.core.async.t_cljs$core$async17675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17677){
var self__ = this;
var _17677__$1 = this;
return self__.meta17676;
});

cljs.core.async.t_cljs$core$async17675.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17675.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17676], null);
});

cljs.core.async.t_cljs$core$async17675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17675";

cljs.core.async.t_cljs$core$async17675.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17675");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17675.
 */
cljs.core.async.__GT_t_cljs$core$async17675 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17675(flag__$1,cb__$1,meta17676){
return (new cljs.core.async.t_cljs$core$async17675(flag__$1,cb__$1,meta17676));
});

}

return (new cljs.core.async.t_cljs$core$async17675(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17678_SHARP_){
var G__17680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17678_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17680) : fret.call(null,G__17680));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17679_SHARP_){
var G__17681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17679_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17681) : fret.call(null,G__17681));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17682 = (i + (1));
i = G__17682;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__4534__auto__ = [];
var len__4531__auto___17688 = arguments.length;
var i__4532__auto___17689 = (0);
while(true){
if((i__4532__auto___17689 < len__4531__auto___17688)){
args__4534__auto__.push((arguments[i__4532__auto___17689]));

var G__17690 = (i__4532__auto___17689 + (1));
i__4532__auto___17689 = G__17690;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17685){
var map__17686 = p__17685;
var map__17686__$1 = ((((!((map__17686 == null)))?(((((map__17686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17686):map__17686);
var opts = map__17686__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17683){
var G__17684 = cljs.core.first(seq17683);
var seq17683__$1 = cljs.core.next(seq17683);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17684,seq17683__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__17692 = arguments.length;
switch (G__17692) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15723__auto___17738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___17738){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___17738){
return (function (state_17716){
var state_val_17717 = (state_17716[(1)]);
if((state_val_17717 === (7))){
var inst_17712 = (state_17716[(2)]);
var state_17716__$1 = state_17716;
var statearr_17718_17739 = state_17716__$1;
(statearr_17718_17739[(2)] = inst_17712);

(statearr_17718_17739[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (1))){
var state_17716__$1 = state_17716;
var statearr_17719_17740 = state_17716__$1;
(statearr_17719_17740[(2)] = null);

(statearr_17719_17740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (4))){
var inst_17695 = (state_17716[(7)]);
var inst_17695__$1 = (state_17716[(2)]);
var inst_17696 = (inst_17695__$1 == null);
var state_17716__$1 = (function (){var statearr_17720 = state_17716;
(statearr_17720[(7)] = inst_17695__$1);

return statearr_17720;
})();
if(cljs.core.truth_(inst_17696)){
var statearr_17721_17741 = state_17716__$1;
(statearr_17721_17741[(1)] = (5));

} else {
var statearr_17722_17742 = state_17716__$1;
(statearr_17722_17742[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (13))){
var state_17716__$1 = state_17716;
var statearr_17723_17743 = state_17716__$1;
(statearr_17723_17743[(2)] = null);

(statearr_17723_17743[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (6))){
var inst_17695 = (state_17716[(7)]);
var state_17716__$1 = state_17716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17716__$1,(11),to,inst_17695);
} else {
if((state_val_17717 === (3))){
var inst_17714 = (state_17716[(2)]);
var state_17716__$1 = state_17716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17716__$1,inst_17714);
} else {
if((state_val_17717 === (12))){
var state_17716__$1 = state_17716;
var statearr_17724_17744 = state_17716__$1;
(statearr_17724_17744[(2)] = null);

(statearr_17724_17744[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (2))){
var state_17716__$1 = state_17716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17716__$1,(4),from);
} else {
if((state_val_17717 === (11))){
var inst_17705 = (state_17716[(2)]);
var state_17716__$1 = state_17716;
if(cljs.core.truth_(inst_17705)){
var statearr_17725_17745 = state_17716__$1;
(statearr_17725_17745[(1)] = (12));

} else {
var statearr_17726_17746 = state_17716__$1;
(statearr_17726_17746[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (9))){
var state_17716__$1 = state_17716;
var statearr_17727_17747 = state_17716__$1;
(statearr_17727_17747[(2)] = null);

(statearr_17727_17747[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (5))){
var state_17716__$1 = state_17716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17728_17748 = state_17716__$1;
(statearr_17728_17748[(1)] = (8));

} else {
var statearr_17729_17749 = state_17716__$1;
(statearr_17729_17749[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (14))){
var inst_17710 = (state_17716[(2)]);
var state_17716__$1 = state_17716;
var statearr_17730_17750 = state_17716__$1;
(statearr_17730_17750[(2)] = inst_17710);

(statearr_17730_17750[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (10))){
var inst_17702 = (state_17716[(2)]);
var state_17716__$1 = state_17716;
var statearr_17731_17751 = state_17716__$1;
(statearr_17731_17751[(2)] = inst_17702);

(statearr_17731_17751[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17717 === (8))){
var inst_17699 = cljs.core.async.close_BANG_(to);
var state_17716__$1 = state_17716;
var statearr_17732_17752 = state_17716__$1;
(statearr_17732_17752[(2)] = inst_17699);

(statearr_17732_17752[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___17738))
;
return ((function (switch__15540__auto__,c__15723__auto___17738){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_17733 = [null,null,null,null,null,null,null,null];
(statearr_17733[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_17733[(1)] = (1));

return statearr_17733;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_17716){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_17716);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e17734){if((e17734 instanceof Object)){
var ex__15544__auto__ = e17734;
var statearr_17735_17753 = state_17716;
(statearr_17735_17753[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17716);

return cljs.core.cst$kw$recur;
} else {
throw e17734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__17754 = state_17716;
state_17716 = G__17754;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_17716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_17716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___17738))
})();
var state__15725__auto__ = (function (){var statearr_17736 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_17736[(6)] = c__15723__auto___17738);

return statearr_17736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___17738))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17755){
var vec__17756 = p__17755;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17756,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17756,(1),null);
var job = vec__17756;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15723__auto___17927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___17927,res,vec__17756,v,p,job,jobs,results){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___17927,res,vec__17756,v,p,job,jobs,results){
return (function (state_17763){
var state_val_17764 = (state_17763[(1)]);
if((state_val_17764 === (1))){
var state_17763__$1 = state_17763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17763__$1,(2),res,v);
} else {
if((state_val_17764 === (2))){
var inst_17760 = (state_17763[(2)]);
var inst_17761 = cljs.core.async.close_BANG_(res);
var state_17763__$1 = (function (){var statearr_17765 = state_17763;
(statearr_17765[(7)] = inst_17760);

return statearr_17765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17763__$1,inst_17761);
} else {
return null;
}
}
});})(c__15723__auto___17927,res,vec__17756,v,p,job,jobs,results))
;
return ((function (switch__15540__auto__,c__15723__auto___17927,res,vec__17756,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0 = (function (){
var statearr_17766 = [null,null,null,null,null,null,null,null];
(statearr_17766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__);

(statearr_17766[(1)] = (1));

return statearr_17766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1 = (function (state_17763){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_17763);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e17767){if((e17767 instanceof Object)){
var ex__15544__auto__ = e17767;
var statearr_17768_17928 = state_17763;
(statearr_17768_17928[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17763);

return cljs.core.cst$kw$recur;
} else {
throw e17767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__17929 = state_17763;
state_17763 = G__17929;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = function(state_17763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1.call(this,state_17763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___17927,res,vec__17756,v,p,job,jobs,results))
})();
var state__15725__auto__ = (function (){var statearr_17769 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_17769[(6)] = c__15723__auto___17927);

return statearr_17769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___17927,res,vec__17756,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17770){
var vec__17771 = p__17770;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17771,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17771,(1),null);
var job = vec__17771;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___17930 = n;
var __17931 = (0);
while(true){
if((__17931 < n__4408__auto___17930)){
var G__17774_17932 = type;
var G__17774_17933__$1 = (((G__17774_17932 instanceof cljs.core.Keyword))?G__17774_17932.fqn:null);
switch (G__17774_17933__$1) {
case "compute":
var c__15723__auto___17935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17931,c__15723__auto___17935,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (__17931,c__15723__auto___17935,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async){
return (function (state_17787){
var state_val_17788 = (state_17787[(1)]);
if((state_val_17788 === (1))){
var state_17787__$1 = state_17787;
var statearr_17789_17936 = state_17787__$1;
(statearr_17789_17936[(2)] = null);

(statearr_17789_17936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17788 === (2))){
var state_17787__$1 = state_17787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17787__$1,(4),jobs);
} else {
if((state_val_17788 === (3))){
var inst_17785 = (state_17787[(2)]);
var state_17787__$1 = state_17787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17787__$1,inst_17785);
} else {
if((state_val_17788 === (4))){
var inst_17777 = (state_17787[(2)]);
var inst_17778 = process(inst_17777);
var state_17787__$1 = state_17787;
if(cljs.core.truth_(inst_17778)){
var statearr_17790_17937 = state_17787__$1;
(statearr_17790_17937[(1)] = (5));

} else {
var statearr_17791_17938 = state_17787__$1;
(statearr_17791_17938[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17788 === (5))){
var state_17787__$1 = state_17787;
var statearr_17792_17939 = state_17787__$1;
(statearr_17792_17939[(2)] = null);

(statearr_17792_17939[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17788 === (6))){
var state_17787__$1 = state_17787;
var statearr_17793_17940 = state_17787__$1;
(statearr_17793_17940[(2)] = null);

(statearr_17793_17940[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17788 === (7))){
var inst_17783 = (state_17787[(2)]);
var state_17787__$1 = state_17787;
var statearr_17794_17941 = state_17787__$1;
(statearr_17794_17941[(2)] = inst_17783);

(statearr_17794_17941[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17931,c__15723__auto___17935,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async))
;
return ((function (__17931,switch__15540__auto__,c__15723__auto___17935,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0 = (function (){
var statearr_17795 = [null,null,null,null,null,null,null];
(statearr_17795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__);

(statearr_17795[(1)] = (1));

return statearr_17795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1 = (function (state_17787){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_17787);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e17796){if((e17796 instanceof Object)){
var ex__15544__auto__ = e17796;
var statearr_17797_17942 = state_17787;
(statearr_17797_17942[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17787);

return cljs.core.cst$kw$recur;
} else {
throw e17796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__17943 = state_17787;
state_17787 = G__17943;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = function(state_17787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1.call(this,state_17787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__;
})()
;})(__17931,switch__15540__auto__,c__15723__auto___17935,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async))
})();
var state__15725__auto__ = (function (){var statearr_17798 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_17798[(6)] = c__15723__auto___17935);

return statearr_17798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(__17931,c__15723__auto___17935,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async))
);


break;
case "async":
var c__15723__auto___17944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17931,c__15723__auto___17944,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (__17931,c__15723__auto___17944,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async){
return (function (state_17811){
var state_val_17812 = (state_17811[(1)]);
if((state_val_17812 === (1))){
var state_17811__$1 = state_17811;
var statearr_17813_17945 = state_17811__$1;
(statearr_17813_17945[(2)] = null);

(statearr_17813_17945[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17812 === (2))){
var state_17811__$1 = state_17811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17811__$1,(4),jobs);
} else {
if((state_val_17812 === (3))){
var inst_17809 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17811__$1,inst_17809);
} else {
if((state_val_17812 === (4))){
var inst_17801 = (state_17811[(2)]);
var inst_17802 = async(inst_17801);
var state_17811__$1 = state_17811;
if(cljs.core.truth_(inst_17802)){
var statearr_17814_17946 = state_17811__$1;
(statearr_17814_17946[(1)] = (5));

} else {
var statearr_17815_17947 = state_17811__$1;
(statearr_17815_17947[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17812 === (5))){
var state_17811__$1 = state_17811;
var statearr_17816_17948 = state_17811__$1;
(statearr_17816_17948[(2)] = null);

(statearr_17816_17948[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17812 === (6))){
var state_17811__$1 = state_17811;
var statearr_17817_17949 = state_17811__$1;
(statearr_17817_17949[(2)] = null);

(statearr_17817_17949[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17812 === (7))){
var inst_17807 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
var statearr_17818_17950 = state_17811__$1;
(statearr_17818_17950[(2)] = inst_17807);

(statearr_17818_17950[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17931,c__15723__auto___17944,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async))
;
return ((function (__17931,switch__15540__auto__,c__15723__auto___17944,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0 = (function (){
var statearr_17819 = [null,null,null,null,null,null,null];
(statearr_17819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__);

(statearr_17819[(1)] = (1));

return statearr_17819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1 = (function (state_17811){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_17811);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e17820){if((e17820 instanceof Object)){
var ex__15544__auto__ = e17820;
var statearr_17821_17951 = state_17811;
(statearr_17821_17951[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17811);

return cljs.core.cst$kw$recur;
} else {
throw e17820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__17952 = state_17811;
state_17811 = G__17952;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = function(state_17811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1.call(this,state_17811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__;
})()
;})(__17931,switch__15540__auto__,c__15723__auto___17944,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async))
})();
var state__15725__auto__ = (function (){var statearr_17822 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_17822[(6)] = c__15723__auto___17944);

return statearr_17822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(__17931,c__15723__auto___17944,G__17774_17932,G__17774_17933__$1,n__4408__auto___17930,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17774_17933__$1)].join('')));

}

var G__17953 = (__17931 + (1));
__17931 = G__17953;
continue;
} else {
}
break;
}

var c__15723__auto___17954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___17954,jobs,results,process,async){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___17954,jobs,results,process,async){
return (function (state_17844){
var state_val_17845 = (state_17844[(1)]);
if((state_val_17845 === (1))){
var state_17844__$1 = state_17844;
var statearr_17846_17955 = state_17844__$1;
(statearr_17846_17955[(2)] = null);

(statearr_17846_17955[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17845 === (2))){
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17844__$1,(4),from);
} else {
if((state_val_17845 === (3))){
var inst_17842 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17844__$1,inst_17842);
} else {
if((state_val_17845 === (4))){
var inst_17825 = (state_17844[(7)]);
var inst_17825__$1 = (state_17844[(2)]);
var inst_17826 = (inst_17825__$1 == null);
var state_17844__$1 = (function (){var statearr_17847 = state_17844;
(statearr_17847[(7)] = inst_17825__$1);

return statearr_17847;
})();
if(cljs.core.truth_(inst_17826)){
var statearr_17848_17956 = state_17844__$1;
(statearr_17848_17956[(1)] = (5));

} else {
var statearr_17849_17957 = state_17844__$1;
(statearr_17849_17957[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17845 === (5))){
var inst_17828 = cljs.core.async.close_BANG_(jobs);
var state_17844__$1 = state_17844;
var statearr_17850_17958 = state_17844__$1;
(statearr_17850_17958[(2)] = inst_17828);

(statearr_17850_17958[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17845 === (6))){
var inst_17825 = (state_17844[(7)]);
var inst_17830 = (state_17844[(8)]);
var inst_17830__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17832 = [inst_17825,inst_17830__$1];
var inst_17833 = (new cljs.core.PersistentVector(null,2,(5),inst_17831,inst_17832,null));
var state_17844__$1 = (function (){var statearr_17851 = state_17844;
(statearr_17851[(8)] = inst_17830__$1);

return statearr_17851;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17844__$1,(8),jobs,inst_17833);
} else {
if((state_val_17845 === (7))){
var inst_17840 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17852_17959 = state_17844__$1;
(statearr_17852_17959[(2)] = inst_17840);

(statearr_17852_17959[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17845 === (8))){
var inst_17830 = (state_17844[(8)]);
var inst_17835 = (state_17844[(2)]);
var state_17844__$1 = (function (){var statearr_17853 = state_17844;
(statearr_17853[(9)] = inst_17835);

return statearr_17853;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17844__$1,(9),results,inst_17830);
} else {
if((state_val_17845 === (9))){
var inst_17837 = (state_17844[(2)]);
var state_17844__$1 = (function (){var statearr_17854 = state_17844;
(statearr_17854[(10)] = inst_17837);

return statearr_17854;
})();
var statearr_17855_17960 = state_17844__$1;
(statearr_17855_17960[(2)] = null);

(statearr_17855_17960[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___17954,jobs,results,process,async))
;
return ((function (switch__15540__auto__,c__15723__auto___17954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0 = (function (){
var statearr_17856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__);

(statearr_17856[(1)] = (1));

return statearr_17856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1 = (function (state_17844){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_17844);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e17857){if((e17857 instanceof Object)){
var ex__15544__auto__ = e17857;
var statearr_17858_17961 = state_17844;
(statearr_17858_17961[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17844);

return cljs.core.cst$kw$recur;
} else {
throw e17857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__17962 = state_17844;
state_17844 = G__17962;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = function(state_17844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1.call(this,state_17844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___17954,jobs,results,process,async))
})();
var state__15725__auto__ = (function (){var statearr_17859 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_17859[(6)] = c__15723__auto___17954);

return statearr_17859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___17954,jobs,results,process,async))
);


var c__15723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto__,jobs,results,process,async){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto__,jobs,results,process,async){
return (function (state_17897){
var state_val_17898 = (state_17897[(1)]);
if((state_val_17898 === (7))){
var inst_17893 = (state_17897[(2)]);
var state_17897__$1 = state_17897;
var statearr_17899_17963 = state_17897__$1;
(statearr_17899_17963[(2)] = inst_17893);

(statearr_17899_17963[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (20))){
var state_17897__$1 = state_17897;
var statearr_17900_17964 = state_17897__$1;
(statearr_17900_17964[(2)] = null);

(statearr_17900_17964[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (1))){
var state_17897__$1 = state_17897;
var statearr_17901_17965 = state_17897__$1;
(statearr_17901_17965[(2)] = null);

(statearr_17901_17965[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (4))){
var inst_17862 = (state_17897[(7)]);
var inst_17862__$1 = (state_17897[(2)]);
var inst_17863 = (inst_17862__$1 == null);
var state_17897__$1 = (function (){var statearr_17902 = state_17897;
(statearr_17902[(7)] = inst_17862__$1);

return statearr_17902;
})();
if(cljs.core.truth_(inst_17863)){
var statearr_17903_17966 = state_17897__$1;
(statearr_17903_17966[(1)] = (5));

} else {
var statearr_17904_17967 = state_17897__$1;
(statearr_17904_17967[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (15))){
var inst_17875 = (state_17897[(8)]);
var state_17897__$1 = state_17897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17897__$1,(18),to,inst_17875);
} else {
if((state_val_17898 === (21))){
var inst_17888 = (state_17897[(2)]);
var state_17897__$1 = state_17897;
var statearr_17905_17968 = state_17897__$1;
(statearr_17905_17968[(2)] = inst_17888);

(statearr_17905_17968[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (13))){
var inst_17890 = (state_17897[(2)]);
var state_17897__$1 = (function (){var statearr_17906 = state_17897;
(statearr_17906[(9)] = inst_17890);

return statearr_17906;
})();
var statearr_17907_17969 = state_17897__$1;
(statearr_17907_17969[(2)] = null);

(statearr_17907_17969[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (6))){
var inst_17862 = (state_17897[(7)]);
var state_17897__$1 = state_17897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17897__$1,(11),inst_17862);
} else {
if((state_val_17898 === (17))){
var inst_17883 = (state_17897[(2)]);
var state_17897__$1 = state_17897;
if(cljs.core.truth_(inst_17883)){
var statearr_17908_17970 = state_17897__$1;
(statearr_17908_17970[(1)] = (19));

} else {
var statearr_17909_17971 = state_17897__$1;
(statearr_17909_17971[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (3))){
var inst_17895 = (state_17897[(2)]);
var state_17897__$1 = state_17897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17897__$1,inst_17895);
} else {
if((state_val_17898 === (12))){
var inst_17872 = (state_17897[(10)]);
var state_17897__$1 = state_17897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17897__$1,(14),inst_17872);
} else {
if((state_val_17898 === (2))){
var state_17897__$1 = state_17897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17897__$1,(4),results);
} else {
if((state_val_17898 === (19))){
var state_17897__$1 = state_17897;
var statearr_17910_17972 = state_17897__$1;
(statearr_17910_17972[(2)] = null);

(statearr_17910_17972[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (11))){
var inst_17872 = (state_17897[(2)]);
var state_17897__$1 = (function (){var statearr_17911 = state_17897;
(statearr_17911[(10)] = inst_17872);

return statearr_17911;
})();
var statearr_17912_17973 = state_17897__$1;
(statearr_17912_17973[(2)] = null);

(statearr_17912_17973[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (9))){
var state_17897__$1 = state_17897;
var statearr_17913_17974 = state_17897__$1;
(statearr_17913_17974[(2)] = null);

(statearr_17913_17974[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (5))){
var state_17897__$1 = state_17897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17914_17975 = state_17897__$1;
(statearr_17914_17975[(1)] = (8));

} else {
var statearr_17915_17976 = state_17897__$1;
(statearr_17915_17976[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (14))){
var inst_17877 = (state_17897[(11)]);
var inst_17875 = (state_17897[(8)]);
var inst_17875__$1 = (state_17897[(2)]);
var inst_17876 = (inst_17875__$1 == null);
var inst_17877__$1 = cljs.core.not(inst_17876);
var state_17897__$1 = (function (){var statearr_17916 = state_17897;
(statearr_17916[(11)] = inst_17877__$1);

(statearr_17916[(8)] = inst_17875__$1);

return statearr_17916;
})();
if(inst_17877__$1){
var statearr_17917_17977 = state_17897__$1;
(statearr_17917_17977[(1)] = (15));

} else {
var statearr_17918_17978 = state_17897__$1;
(statearr_17918_17978[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (16))){
var inst_17877 = (state_17897[(11)]);
var state_17897__$1 = state_17897;
var statearr_17919_17979 = state_17897__$1;
(statearr_17919_17979[(2)] = inst_17877);

(statearr_17919_17979[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (10))){
var inst_17869 = (state_17897[(2)]);
var state_17897__$1 = state_17897;
var statearr_17920_17980 = state_17897__$1;
(statearr_17920_17980[(2)] = inst_17869);

(statearr_17920_17980[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (18))){
var inst_17880 = (state_17897[(2)]);
var state_17897__$1 = state_17897;
var statearr_17921_17981 = state_17897__$1;
(statearr_17921_17981[(2)] = inst_17880);

(statearr_17921_17981[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17898 === (8))){
var inst_17866 = cljs.core.async.close_BANG_(to);
var state_17897__$1 = state_17897;
var statearr_17922_17982 = state_17897__$1;
(statearr_17922_17982[(2)] = inst_17866);

(statearr_17922_17982[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto__,jobs,results,process,async))
;
return ((function (switch__15540__auto__,c__15723__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0 = (function (){
var statearr_17923 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__);

(statearr_17923[(1)] = (1));

return statearr_17923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1 = (function (state_17897){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_17897);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e17924){if((e17924 instanceof Object)){
var ex__15544__auto__ = e17924;
var statearr_17925_17983 = state_17897;
(statearr_17925_17983[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17897);

return cljs.core.cst$kw$recur;
} else {
throw e17924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__17984 = state_17897;
state_17897 = G__17984;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__ = function(state_17897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1.call(this,state_17897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto__,jobs,results,process,async))
})();
var state__15725__auto__ = (function (){var statearr_17926 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_17926[(6)] = c__15723__auto__);

return statearr_17926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto__,jobs,results,process,async))
);

return c__15723__auto__;
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
var G__17986 = arguments.length;
switch (G__17986) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__17989 = arguments.length;
switch (G__17989) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__17992 = arguments.length;
switch (G__17992) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15723__auto___18041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___18041,tc,fc){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___18041,tc,fc){
return (function (state_18018){
var state_val_18019 = (state_18018[(1)]);
if((state_val_18019 === (7))){
var inst_18014 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
var statearr_18020_18042 = state_18018__$1;
(statearr_18020_18042[(2)] = inst_18014);

(statearr_18020_18042[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (1))){
var state_18018__$1 = state_18018;
var statearr_18021_18043 = state_18018__$1;
(statearr_18021_18043[(2)] = null);

(statearr_18021_18043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (4))){
var inst_17995 = (state_18018[(7)]);
var inst_17995__$1 = (state_18018[(2)]);
var inst_17996 = (inst_17995__$1 == null);
var state_18018__$1 = (function (){var statearr_18022 = state_18018;
(statearr_18022[(7)] = inst_17995__$1);

return statearr_18022;
})();
if(cljs.core.truth_(inst_17996)){
var statearr_18023_18044 = state_18018__$1;
(statearr_18023_18044[(1)] = (5));

} else {
var statearr_18024_18045 = state_18018__$1;
(statearr_18024_18045[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (13))){
var state_18018__$1 = state_18018;
var statearr_18025_18046 = state_18018__$1;
(statearr_18025_18046[(2)] = null);

(statearr_18025_18046[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (6))){
var inst_17995 = (state_18018[(7)]);
var inst_18001 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17995) : p.call(null,inst_17995));
var state_18018__$1 = state_18018;
if(cljs.core.truth_(inst_18001)){
var statearr_18026_18047 = state_18018__$1;
(statearr_18026_18047[(1)] = (9));

} else {
var statearr_18027_18048 = state_18018__$1;
(statearr_18027_18048[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (3))){
var inst_18016 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18018__$1,inst_18016);
} else {
if((state_val_18019 === (12))){
var state_18018__$1 = state_18018;
var statearr_18028_18049 = state_18018__$1;
(statearr_18028_18049[(2)] = null);

(statearr_18028_18049[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (2))){
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18018__$1,(4),ch);
} else {
if((state_val_18019 === (11))){
var inst_17995 = (state_18018[(7)]);
var inst_18005 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18018__$1,(8),inst_18005,inst_17995);
} else {
if((state_val_18019 === (9))){
var state_18018__$1 = state_18018;
var statearr_18029_18050 = state_18018__$1;
(statearr_18029_18050[(2)] = tc);

(statearr_18029_18050[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (5))){
var inst_17998 = cljs.core.async.close_BANG_(tc);
var inst_17999 = cljs.core.async.close_BANG_(fc);
var state_18018__$1 = (function (){var statearr_18030 = state_18018;
(statearr_18030[(8)] = inst_17998);

return statearr_18030;
})();
var statearr_18031_18051 = state_18018__$1;
(statearr_18031_18051[(2)] = inst_17999);

(statearr_18031_18051[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (14))){
var inst_18012 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
var statearr_18032_18052 = state_18018__$1;
(statearr_18032_18052[(2)] = inst_18012);

(statearr_18032_18052[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (10))){
var state_18018__$1 = state_18018;
var statearr_18033_18053 = state_18018__$1;
(statearr_18033_18053[(2)] = fc);

(statearr_18033_18053[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18019 === (8))){
var inst_18007 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
if(cljs.core.truth_(inst_18007)){
var statearr_18034_18054 = state_18018__$1;
(statearr_18034_18054[(1)] = (12));

} else {
var statearr_18035_18055 = state_18018__$1;
(statearr_18035_18055[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___18041,tc,fc))
;
return ((function (switch__15540__auto__,c__15723__auto___18041,tc,fc){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_18036 = [null,null,null,null,null,null,null,null,null];
(statearr_18036[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_18036[(1)] = (1));

return statearr_18036;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_18018){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_18018);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e18037){if((e18037 instanceof Object)){
var ex__15544__auto__ = e18037;
var statearr_18038_18056 = state_18018;
(statearr_18038_18056[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18018);

return cljs.core.cst$kw$recur;
} else {
throw e18037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__18057 = state_18018;
state_18018 = G__18057;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_18018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_18018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___18041,tc,fc))
})();
var state__15725__auto__ = (function (){var statearr_18039 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_18039[(6)] = c__15723__auto___18041);

return statearr_18039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___18041,tc,fc))
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
var c__15723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto__){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto__){
return (function (state_18078){
var state_val_18079 = (state_18078[(1)]);
if((state_val_18079 === (7))){
var inst_18074 = (state_18078[(2)]);
var state_18078__$1 = state_18078;
var statearr_18080_18098 = state_18078__$1;
(statearr_18080_18098[(2)] = inst_18074);

(statearr_18080_18098[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18079 === (1))){
var inst_18058 = init;
var state_18078__$1 = (function (){var statearr_18081 = state_18078;
(statearr_18081[(7)] = inst_18058);

return statearr_18081;
})();
var statearr_18082_18099 = state_18078__$1;
(statearr_18082_18099[(2)] = null);

(statearr_18082_18099[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18079 === (4))){
var inst_18061 = (state_18078[(8)]);
var inst_18061__$1 = (state_18078[(2)]);
var inst_18062 = (inst_18061__$1 == null);
var state_18078__$1 = (function (){var statearr_18083 = state_18078;
(statearr_18083[(8)] = inst_18061__$1);

return statearr_18083;
})();
if(cljs.core.truth_(inst_18062)){
var statearr_18084_18100 = state_18078__$1;
(statearr_18084_18100[(1)] = (5));

} else {
var statearr_18085_18101 = state_18078__$1;
(statearr_18085_18101[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18079 === (6))){
var inst_18058 = (state_18078[(7)]);
var inst_18065 = (state_18078[(9)]);
var inst_18061 = (state_18078[(8)]);
var inst_18065__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18058,inst_18061) : f.call(null,inst_18058,inst_18061));
var inst_18066 = cljs.core.reduced_QMARK_(inst_18065__$1);
var state_18078__$1 = (function (){var statearr_18086 = state_18078;
(statearr_18086[(9)] = inst_18065__$1);

return statearr_18086;
})();
if(inst_18066){
var statearr_18087_18102 = state_18078__$1;
(statearr_18087_18102[(1)] = (8));

} else {
var statearr_18088_18103 = state_18078__$1;
(statearr_18088_18103[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18079 === (3))){
var inst_18076 = (state_18078[(2)]);
var state_18078__$1 = state_18078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18078__$1,inst_18076);
} else {
if((state_val_18079 === (2))){
var state_18078__$1 = state_18078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18078__$1,(4),ch);
} else {
if((state_val_18079 === (9))){
var inst_18065 = (state_18078[(9)]);
var inst_18058 = inst_18065;
var state_18078__$1 = (function (){var statearr_18089 = state_18078;
(statearr_18089[(7)] = inst_18058);

return statearr_18089;
})();
var statearr_18090_18104 = state_18078__$1;
(statearr_18090_18104[(2)] = null);

(statearr_18090_18104[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18079 === (5))){
var inst_18058 = (state_18078[(7)]);
var state_18078__$1 = state_18078;
var statearr_18091_18105 = state_18078__$1;
(statearr_18091_18105[(2)] = inst_18058);

(statearr_18091_18105[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18079 === (10))){
var inst_18072 = (state_18078[(2)]);
var state_18078__$1 = state_18078;
var statearr_18092_18106 = state_18078__$1;
(statearr_18092_18106[(2)] = inst_18072);

(statearr_18092_18106[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18079 === (8))){
var inst_18065 = (state_18078[(9)]);
var inst_18068 = cljs.core.deref(inst_18065);
var state_18078__$1 = state_18078;
var statearr_18093_18107 = state_18078__$1;
(statearr_18093_18107[(2)] = inst_18068);

(statearr_18093_18107[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto__))
;
return ((function (switch__15540__auto__,c__15723__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15541__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15541__auto____0 = (function (){
var statearr_18094 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18094[(0)] = cljs$core$async$reduce_$_state_machine__15541__auto__);

(statearr_18094[(1)] = (1));

return statearr_18094;
});
var cljs$core$async$reduce_$_state_machine__15541__auto____1 = (function (state_18078){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_18078);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e18095){if((e18095 instanceof Object)){
var ex__15544__auto__ = e18095;
var statearr_18096_18108 = state_18078;
(statearr_18096_18108[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18078);

return cljs.core.cst$kw$recur;
} else {
throw e18095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__18109 = state_18078;
state_18078 = G__18109;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15541__auto__ = function(state_18078){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15541__auto____1.call(this,state_18078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15541__auto____0;
cljs$core$async$reduce_$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15541__auto____1;
return cljs$core$async$reduce_$_state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto__))
})();
var state__15725__auto__ = (function (){var statearr_18097 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_18097[(6)] = c__15723__auto__);

return statearr_18097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto__))
);

return c__15723__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto__,f__$1){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto__,f__$1){
return (function (state_18115){
var state_val_18116 = (state_18115[(1)]);
if((state_val_18116 === (1))){
var inst_18110 = cljs.core.async.reduce(f__$1,init,ch);
var state_18115__$1 = state_18115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18115__$1,(2),inst_18110);
} else {
if((state_val_18116 === (2))){
var inst_18112 = (state_18115[(2)]);
var inst_18113 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18112) : f__$1.call(null,inst_18112));
var state_18115__$1 = state_18115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18115__$1,inst_18113);
} else {
return null;
}
}
});})(c__15723__auto__,f__$1))
;
return ((function (switch__15540__auto__,c__15723__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15541__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15541__auto____0 = (function (){
var statearr_18117 = [null,null,null,null,null,null,null];
(statearr_18117[(0)] = cljs$core$async$transduce_$_state_machine__15541__auto__);

(statearr_18117[(1)] = (1));

return statearr_18117;
});
var cljs$core$async$transduce_$_state_machine__15541__auto____1 = (function (state_18115){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_18115);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e18118){if((e18118 instanceof Object)){
var ex__15544__auto__ = e18118;
var statearr_18119_18121 = state_18115;
(statearr_18119_18121[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18115);

return cljs.core.cst$kw$recur;
} else {
throw e18118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__18122 = state_18115;
state_18115 = G__18122;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15541__auto__ = function(state_18115){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15541__auto____1.call(this,state_18115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15541__auto____0;
cljs$core$async$transduce_$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15541__auto____1;
return cljs$core$async$transduce_$_state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto__,f__$1))
})();
var state__15725__auto__ = (function (){var statearr_18120 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_18120[(6)] = c__15723__auto__);

return statearr_18120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto__,f__$1))
);

return c__15723__auto__;
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
var G__18124 = arguments.length;
switch (G__18124) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto__){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto__){
return (function (state_18149){
var state_val_18150 = (state_18149[(1)]);
if((state_val_18150 === (7))){
var inst_18131 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18151_18172 = state_18149__$1;
(statearr_18151_18172[(2)] = inst_18131);

(statearr_18151_18172[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (1))){
var inst_18125 = cljs.core.seq(coll);
var inst_18126 = inst_18125;
var state_18149__$1 = (function (){var statearr_18152 = state_18149;
(statearr_18152[(7)] = inst_18126);

return statearr_18152;
})();
var statearr_18153_18173 = state_18149__$1;
(statearr_18153_18173[(2)] = null);

(statearr_18153_18173[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (4))){
var inst_18126 = (state_18149[(7)]);
var inst_18129 = cljs.core.first(inst_18126);
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18149__$1,(7),ch,inst_18129);
} else {
if((state_val_18150 === (13))){
var inst_18143 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18154_18174 = state_18149__$1;
(statearr_18154_18174[(2)] = inst_18143);

(statearr_18154_18174[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (6))){
var inst_18134 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
if(cljs.core.truth_(inst_18134)){
var statearr_18155_18175 = state_18149__$1;
(statearr_18155_18175[(1)] = (8));

} else {
var statearr_18156_18176 = state_18149__$1;
(statearr_18156_18176[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (3))){
var inst_18147 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18149__$1,inst_18147);
} else {
if((state_val_18150 === (12))){
var state_18149__$1 = state_18149;
var statearr_18157_18177 = state_18149__$1;
(statearr_18157_18177[(2)] = null);

(statearr_18157_18177[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (2))){
var inst_18126 = (state_18149[(7)]);
var state_18149__$1 = state_18149;
if(cljs.core.truth_(inst_18126)){
var statearr_18158_18178 = state_18149__$1;
(statearr_18158_18178[(1)] = (4));

} else {
var statearr_18159_18179 = state_18149__$1;
(statearr_18159_18179[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (11))){
var inst_18140 = cljs.core.async.close_BANG_(ch);
var state_18149__$1 = state_18149;
var statearr_18160_18180 = state_18149__$1;
(statearr_18160_18180[(2)] = inst_18140);

(statearr_18160_18180[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (9))){
var state_18149__$1 = state_18149;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18161_18181 = state_18149__$1;
(statearr_18161_18181[(1)] = (11));

} else {
var statearr_18162_18182 = state_18149__$1;
(statearr_18162_18182[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (5))){
var inst_18126 = (state_18149[(7)]);
var state_18149__$1 = state_18149;
var statearr_18163_18183 = state_18149__$1;
(statearr_18163_18183[(2)] = inst_18126);

(statearr_18163_18183[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (10))){
var inst_18145 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18164_18184 = state_18149__$1;
(statearr_18164_18184[(2)] = inst_18145);

(statearr_18164_18184[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (8))){
var inst_18126 = (state_18149[(7)]);
var inst_18136 = cljs.core.next(inst_18126);
var inst_18126__$1 = inst_18136;
var state_18149__$1 = (function (){var statearr_18165 = state_18149;
(statearr_18165[(7)] = inst_18126__$1);

return statearr_18165;
})();
var statearr_18166_18185 = state_18149__$1;
(statearr_18166_18185[(2)] = null);

(statearr_18166_18185[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto__))
;
return ((function (switch__15540__auto__,c__15723__auto__){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_18167 = [null,null,null,null,null,null,null,null];
(statearr_18167[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_18167[(1)] = (1));

return statearr_18167;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_18149){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_18149);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e18168){if((e18168 instanceof Object)){
var ex__15544__auto__ = e18168;
var statearr_18169_18186 = state_18149;
(statearr_18169_18186[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18149);

return cljs.core.cst$kw$recur;
} else {
throw e18168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__18187 = state_18149;
state_18149 = G__18187;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_18149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_18149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto__))
})();
var state__15725__auto__ = (function (){var statearr_18170 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_18170[(6)] = c__15723__auto__);

return statearr_18170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto__))
);

return c__15723__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18188 = (function (ch,cs,meta18189){
this.ch = ch;
this.cs = cs;
this.meta18189 = meta18189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18190,meta18189__$1){
var self__ = this;
var _18190__$1 = this;
return (new cljs.core.async.t_cljs$core$async18188(self__.ch,self__.cs,meta18189__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18190){
var self__ = this;
var _18190__$1 = this;
return self__.meta18189;
});})(cs))
;

cljs.core.async.t_cljs$core$async18188.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18188.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18188.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18188.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18188.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18188.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18189], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18188";

cljs.core.async.t_cljs$core$async18188.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18188");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18188.
 */
cljs.core.async.__GT_t_cljs$core$async18188 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18188(ch__$1,cs__$1,meta18189){
return (new cljs.core.async.t_cljs$core$async18188(ch__$1,cs__$1,meta18189));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18188(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15723__auto___18410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___18410,cs,m,dchan,dctr,done){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___18410,cs,m,dchan,dctr,done){
return (function (state_18325){
var state_val_18326 = (state_18325[(1)]);
if((state_val_18326 === (7))){
var inst_18321 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18327_18411 = state_18325__$1;
(statearr_18327_18411[(2)] = inst_18321);

(statearr_18327_18411[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (20))){
var inst_18224 = (state_18325[(7)]);
var inst_18236 = cljs.core.first(inst_18224);
var inst_18237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18236,(0),null);
var inst_18238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18236,(1),null);
var state_18325__$1 = (function (){var statearr_18328 = state_18325;
(statearr_18328[(8)] = inst_18237);

return statearr_18328;
})();
if(cljs.core.truth_(inst_18238)){
var statearr_18329_18412 = state_18325__$1;
(statearr_18329_18412[(1)] = (22));

} else {
var statearr_18330_18413 = state_18325__$1;
(statearr_18330_18413[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (27))){
var inst_18268 = (state_18325[(9)]);
var inst_18266 = (state_18325[(10)]);
var inst_18273 = (state_18325[(11)]);
var inst_18193 = (state_18325[(12)]);
var inst_18273__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18266,inst_18268);
var inst_18274 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18273__$1,inst_18193,done);
var state_18325__$1 = (function (){var statearr_18331 = state_18325;
(statearr_18331[(11)] = inst_18273__$1);

return statearr_18331;
})();
if(cljs.core.truth_(inst_18274)){
var statearr_18332_18414 = state_18325__$1;
(statearr_18332_18414[(1)] = (30));

} else {
var statearr_18333_18415 = state_18325__$1;
(statearr_18333_18415[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (1))){
var state_18325__$1 = state_18325;
var statearr_18334_18416 = state_18325__$1;
(statearr_18334_18416[(2)] = null);

(statearr_18334_18416[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (24))){
var inst_18224 = (state_18325[(7)]);
var inst_18243 = (state_18325[(2)]);
var inst_18244 = cljs.core.next(inst_18224);
var inst_18202 = inst_18244;
var inst_18203 = null;
var inst_18204 = (0);
var inst_18205 = (0);
var state_18325__$1 = (function (){var statearr_18335 = state_18325;
(statearr_18335[(13)] = inst_18204);

(statearr_18335[(14)] = inst_18243);

(statearr_18335[(15)] = inst_18205);

(statearr_18335[(16)] = inst_18202);

(statearr_18335[(17)] = inst_18203);

return statearr_18335;
})();
var statearr_18336_18417 = state_18325__$1;
(statearr_18336_18417[(2)] = null);

(statearr_18336_18417[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (39))){
var state_18325__$1 = state_18325;
var statearr_18340_18418 = state_18325__$1;
(statearr_18340_18418[(2)] = null);

(statearr_18340_18418[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (4))){
var inst_18193 = (state_18325[(12)]);
var inst_18193__$1 = (state_18325[(2)]);
var inst_18194 = (inst_18193__$1 == null);
var state_18325__$1 = (function (){var statearr_18341 = state_18325;
(statearr_18341[(12)] = inst_18193__$1);

return statearr_18341;
})();
if(cljs.core.truth_(inst_18194)){
var statearr_18342_18419 = state_18325__$1;
(statearr_18342_18419[(1)] = (5));

} else {
var statearr_18343_18420 = state_18325__$1;
(statearr_18343_18420[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (15))){
var inst_18204 = (state_18325[(13)]);
var inst_18205 = (state_18325[(15)]);
var inst_18202 = (state_18325[(16)]);
var inst_18203 = (state_18325[(17)]);
var inst_18220 = (state_18325[(2)]);
var inst_18221 = (inst_18205 + (1));
var tmp18337 = inst_18204;
var tmp18338 = inst_18202;
var tmp18339 = inst_18203;
var inst_18202__$1 = tmp18338;
var inst_18203__$1 = tmp18339;
var inst_18204__$1 = tmp18337;
var inst_18205__$1 = inst_18221;
var state_18325__$1 = (function (){var statearr_18344 = state_18325;
(statearr_18344[(18)] = inst_18220);

(statearr_18344[(13)] = inst_18204__$1);

(statearr_18344[(15)] = inst_18205__$1);

(statearr_18344[(16)] = inst_18202__$1);

(statearr_18344[(17)] = inst_18203__$1);

return statearr_18344;
})();
var statearr_18345_18421 = state_18325__$1;
(statearr_18345_18421[(2)] = null);

(statearr_18345_18421[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (21))){
var inst_18247 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18349_18422 = state_18325__$1;
(statearr_18349_18422[(2)] = inst_18247);

(statearr_18349_18422[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (31))){
var inst_18273 = (state_18325[(11)]);
var inst_18277 = done(null);
var inst_18278 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18273);
var state_18325__$1 = (function (){var statearr_18350 = state_18325;
(statearr_18350[(19)] = inst_18277);

return statearr_18350;
})();
var statearr_18351_18423 = state_18325__$1;
(statearr_18351_18423[(2)] = inst_18278);

(statearr_18351_18423[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (32))){
var inst_18268 = (state_18325[(9)]);
var inst_18266 = (state_18325[(10)]);
var inst_18265 = (state_18325[(20)]);
var inst_18267 = (state_18325[(21)]);
var inst_18280 = (state_18325[(2)]);
var inst_18281 = (inst_18268 + (1));
var tmp18346 = inst_18266;
var tmp18347 = inst_18265;
var tmp18348 = inst_18267;
var inst_18265__$1 = tmp18347;
var inst_18266__$1 = tmp18346;
var inst_18267__$1 = tmp18348;
var inst_18268__$1 = inst_18281;
var state_18325__$1 = (function (){var statearr_18352 = state_18325;
(statearr_18352[(9)] = inst_18268__$1);

(statearr_18352[(10)] = inst_18266__$1);

(statearr_18352[(20)] = inst_18265__$1);

(statearr_18352[(22)] = inst_18280);

(statearr_18352[(21)] = inst_18267__$1);

return statearr_18352;
})();
var statearr_18353_18424 = state_18325__$1;
(statearr_18353_18424[(2)] = null);

(statearr_18353_18424[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (40))){
var inst_18293 = (state_18325[(23)]);
var inst_18297 = done(null);
var inst_18298 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18293);
var state_18325__$1 = (function (){var statearr_18354 = state_18325;
(statearr_18354[(24)] = inst_18297);

return statearr_18354;
})();
var statearr_18355_18425 = state_18325__$1;
(statearr_18355_18425[(2)] = inst_18298);

(statearr_18355_18425[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (33))){
var inst_18284 = (state_18325[(25)]);
var inst_18286 = cljs.core.chunked_seq_QMARK_(inst_18284);
var state_18325__$1 = state_18325;
if(inst_18286){
var statearr_18356_18426 = state_18325__$1;
(statearr_18356_18426[(1)] = (36));

} else {
var statearr_18357_18427 = state_18325__$1;
(statearr_18357_18427[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (13))){
var inst_18214 = (state_18325[(26)]);
var inst_18217 = cljs.core.async.close_BANG_(inst_18214);
var state_18325__$1 = state_18325;
var statearr_18358_18428 = state_18325__$1;
(statearr_18358_18428[(2)] = inst_18217);

(statearr_18358_18428[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (22))){
var inst_18237 = (state_18325[(8)]);
var inst_18240 = cljs.core.async.close_BANG_(inst_18237);
var state_18325__$1 = state_18325;
var statearr_18359_18429 = state_18325__$1;
(statearr_18359_18429[(2)] = inst_18240);

(statearr_18359_18429[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (36))){
var inst_18284 = (state_18325[(25)]);
var inst_18288 = cljs.core.chunk_first(inst_18284);
var inst_18289 = cljs.core.chunk_rest(inst_18284);
var inst_18290 = cljs.core.count(inst_18288);
var inst_18265 = inst_18289;
var inst_18266 = inst_18288;
var inst_18267 = inst_18290;
var inst_18268 = (0);
var state_18325__$1 = (function (){var statearr_18360 = state_18325;
(statearr_18360[(9)] = inst_18268);

(statearr_18360[(10)] = inst_18266);

(statearr_18360[(20)] = inst_18265);

(statearr_18360[(21)] = inst_18267);

return statearr_18360;
})();
var statearr_18361_18430 = state_18325__$1;
(statearr_18361_18430[(2)] = null);

(statearr_18361_18430[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (41))){
var inst_18284 = (state_18325[(25)]);
var inst_18300 = (state_18325[(2)]);
var inst_18301 = cljs.core.next(inst_18284);
var inst_18265 = inst_18301;
var inst_18266 = null;
var inst_18267 = (0);
var inst_18268 = (0);
var state_18325__$1 = (function (){var statearr_18362 = state_18325;
(statearr_18362[(9)] = inst_18268);

(statearr_18362[(10)] = inst_18266);

(statearr_18362[(20)] = inst_18265);

(statearr_18362[(27)] = inst_18300);

(statearr_18362[(21)] = inst_18267);

return statearr_18362;
})();
var statearr_18363_18431 = state_18325__$1;
(statearr_18363_18431[(2)] = null);

(statearr_18363_18431[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (43))){
var state_18325__$1 = state_18325;
var statearr_18364_18432 = state_18325__$1;
(statearr_18364_18432[(2)] = null);

(statearr_18364_18432[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (29))){
var inst_18309 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18365_18433 = state_18325__$1;
(statearr_18365_18433[(2)] = inst_18309);

(statearr_18365_18433[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (44))){
var inst_18318 = (state_18325[(2)]);
var state_18325__$1 = (function (){var statearr_18366 = state_18325;
(statearr_18366[(28)] = inst_18318);

return statearr_18366;
})();
var statearr_18367_18434 = state_18325__$1;
(statearr_18367_18434[(2)] = null);

(statearr_18367_18434[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (6))){
var inst_18257 = (state_18325[(29)]);
var inst_18256 = cljs.core.deref(cs);
var inst_18257__$1 = cljs.core.keys(inst_18256);
var inst_18258 = cljs.core.count(inst_18257__$1);
var inst_18259 = cljs.core.reset_BANG_(dctr,inst_18258);
var inst_18264 = cljs.core.seq(inst_18257__$1);
var inst_18265 = inst_18264;
var inst_18266 = null;
var inst_18267 = (0);
var inst_18268 = (0);
var state_18325__$1 = (function (){var statearr_18368 = state_18325;
(statearr_18368[(9)] = inst_18268);

(statearr_18368[(10)] = inst_18266);

(statearr_18368[(20)] = inst_18265);

(statearr_18368[(30)] = inst_18259);

(statearr_18368[(29)] = inst_18257__$1);

(statearr_18368[(21)] = inst_18267);

return statearr_18368;
})();
var statearr_18369_18435 = state_18325__$1;
(statearr_18369_18435[(2)] = null);

(statearr_18369_18435[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (28))){
var inst_18284 = (state_18325[(25)]);
var inst_18265 = (state_18325[(20)]);
var inst_18284__$1 = cljs.core.seq(inst_18265);
var state_18325__$1 = (function (){var statearr_18370 = state_18325;
(statearr_18370[(25)] = inst_18284__$1);

return statearr_18370;
})();
if(inst_18284__$1){
var statearr_18371_18436 = state_18325__$1;
(statearr_18371_18436[(1)] = (33));

} else {
var statearr_18372_18437 = state_18325__$1;
(statearr_18372_18437[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (25))){
var inst_18268 = (state_18325[(9)]);
var inst_18267 = (state_18325[(21)]);
var inst_18270 = (inst_18268 < inst_18267);
var inst_18271 = inst_18270;
var state_18325__$1 = state_18325;
if(cljs.core.truth_(inst_18271)){
var statearr_18373_18438 = state_18325__$1;
(statearr_18373_18438[(1)] = (27));

} else {
var statearr_18374_18439 = state_18325__$1;
(statearr_18374_18439[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (34))){
var state_18325__$1 = state_18325;
var statearr_18375_18440 = state_18325__$1;
(statearr_18375_18440[(2)] = null);

(statearr_18375_18440[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (17))){
var state_18325__$1 = state_18325;
var statearr_18376_18441 = state_18325__$1;
(statearr_18376_18441[(2)] = null);

(statearr_18376_18441[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (3))){
var inst_18323 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18325__$1,inst_18323);
} else {
if((state_val_18326 === (12))){
var inst_18252 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18377_18442 = state_18325__$1;
(statearr_18377_18442[(2)] = inst_18252);

(statearr_18377_18442[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (2))){
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18325__$1,(4),ch);
} else {
if((state_val_18326 === (23))){
var state_18325__$1 = state_18325;
var statearr_18378_18443 = state_18325__$1;
(statearr_18378_18443[(2)] = null);

(statearr_18378_18443[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (35))){
var inst_18307 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18379_18444 = state_18325__$1;
(statearr_18379_18444[(2)] = inst_18307);

(statearr_18379_18444[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (19))){
var inst_18224 = (state_18325[(7)]);
var inst_18228 = cljs.core.chunk_first(inst_18224);
var inst_18229 = cljs.core.chunk_rest(inst_18224);
var inst_18230 = cljs.core.count(inst_18228);
var inst_18202 = inst_18229;
var inst_18203 = inst_18228;
var inst_18204 = inst_18230;
var inst_18205 = (0);
var state_18325__$1 = (function (){var statearr_18380 = state_18325;
(statearr_18380[(13)] = inst_18204);

(statearr_18380[(15)] = inst_18205);

(statearr_18380[(16)] = inst_18202);

(statearr_18380[(17)] = inst_18203);

return statearr_18380;
})();
var statearr_18381_18445 = state_18325__$1;
(statearr_18381_18445[(2)] = null);

(statearr_18381_18445[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (11))){
var inst_18224 = (state_18325[(7)]);
var inst_18202 = (state_18325[(16)]);
var inst_18224__$1 = cljs.core.seq(inst_18202);
var state_18325__$1 = (function (){var statearr_18382 = state_18325;
(statearr_18382[(7)] = inst_18224__$1);

return statearr_18382;
})();
if(inst_18224__$1){
var statearr_18383_18446 = state_18325__$1;
(statearr_18383_18446[(1)] = (16));

} else {
var statearr_18384_18447 = state_18325__$1;
(statearr_18384_18447[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (9))){
var inst_18254 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18385_18448 = state_18325__$1;
(statearr_18385_18448[(2)] = inst_18254);

(statearr_18385_18448[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (5))){
var inst_18200 = cljs.core.deref(cs);
var inst_18201 = cljs.core.seq(inst_18200);
var inst_18202 = inst_18201;
var inst_18203 = null;
var inst_18204 = (0);
var inst_18205 = (0);
var state_18325__$1 = (function (){var statearr_18386 = state_18325;
(statearr_18386[(13)] = inst_18204);

(statearr_18386[(15)] = inst_18205);

(statearr_18386[(16)] = inst_18202);

(statearr_18386[(17)] = inst_18203);

return statearr_18386;
})();
var statearr_18387_18449 = state_18325__$1;
(statearr_18387_18449[(2)] = null);

(statearr_18387_18449[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (14))){
var state_18325__$1 = state_18325;
var statearr_18388_18450 = state_18325__$1;
(statearr_18388_18450[(2)] = null);

(statearr_18388_18450[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (45))){
var inst_18315 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18389_18451 = state_18325__$1;
(statearr_18389_18451[(2)] = inst_18315);

(statearr_18389_18451[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (26))){
var inst_18257 = (state_18325[(29)]);
var inst_18311 = (state_18325[(2)]);
var inst_18312 = cljs.core.seq(inst_18257);
var state_18325__$1 = (function (){var statearr_18390 = state_18325;
(statearr_18390[(31)] = inst_18311);

return statearr_18390;
})();
if(inst_18312){
var statearr_18391_18452 = state_18325__$1;
(statearr_18391_18452[(1)] = (42));

} else {
var statearr_18392_18453 = state_18325__$1;
(statearr_18392_18453[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (16))){
var inst_18224 = (state_18325[(7)]);
var inst_18226 = cljs.core.chunked_seq_QMARK_(inst_18224);
var state_18325__$1 = state_18325;
if(inst_18226){
var statearr_18393_18454 = state_18325__$1;
(statearr_18393_18454[(1)] = (19));

} else {
var statearr_18394_18455 = state_18325__$1;
(statearr_18394_18455[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (38))){
var inst_18304 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18395_18456 = state_18325__$1;
(statearr_18395_18456[(2)] = inst_18304);

(statearr_18395_18456[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (30))){
var state_18325__$1 = state_18325;
var statearr_18396_18457 = state_18325__$1;
(statearr_18396_18457[(2)] = null);

(statearr_18396_18457[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (10))){
var inst_18205 = (state_18325[(15)]);
var inst_18203 = (state_18325[(17)]);
var inst_18213 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18203,inst_18205);
var inst_18214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18213,(0),null);
var inst_18215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18213,(1),null);
var state_18325__$1 = (function (){var statearr_18397 = state_18325;
(statearr_18397[(26)] = inst_18214);

return statearr_18397;
})();
if(cljs.core.truth_(inst_18215)){
var statearr_18398_18458 = state_18325__$1;
(statearr_18398_18458[(1)] = (13));

} else {
var statearr_18399_18459 = state_18325__$1;
(statearr_18399_18459[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (18))){
var inst_18250 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18400_18460 = state_18325__$1;
(statearr_18400_18460[(2)] = inst_18250);

(statearr_18400_18460[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (42))){
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18325__$1,(45),dchan);
} else {
if((state_val_18326 === (37))){
var inst_18284 = (state_18325[(25)]);
var inst_18293 = (state_18325[(23)]);
var inst_18193 = (state_18325[(12)]);
var inst_18293__$1 = cljs.core.first(inst_18284);
var inst_18294 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18293__$1,inst_18193,done);
var state_18325__$1 = (function (){var statearr_18401 = state_18325;
(statearr_18401[(23)] = inst_18293__$1);

return statearr_18401;
})();
if(cljs.core.truth_(inst_18294)){
var statearr_18402_18461 = state_18325__$1;
(statearr_18402_18461[(1)] = (39));

} else {
var statearr_18403_18462 = state_18325__$1;
(statearr_18403_18462[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (8))){
var inst_18204 = (state_18325[(13)]);
var inst_18205 = (state_18325[(15)]);
var inst_18207 = (inst_18205 < inst_18204);
var inst_18208 = inst_18207;
var state_18325__$1 = state_18325;
if(cljs.core.truth_(inst_18208)){
var statearr_18404_18463 = state_18325__$1;
(statearr_18404_18463[(1)] = (10));

} else {
var statearr_18405_18464 = state_18325__$1;
(statearr_18405_18464[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___18410,cs,m,dchan,dctr,done))
;
return ((function (switch__15540__auto__,c__15723__auto___18410,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15541__auto__ = null;
var cljs$core$async$mult_$_state_machine__15541__auto____0 = (function (){
var statearr_18406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18406[(0)] = cljs$core$async$mult_$_state_machine__15541__auto__);

(statearr_18406[(1)] = (1));

return statearr_18406;
});
var cljs$core$async$mult_$_state_machine__15541__auto____1 = (function (state_18325){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_18325);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e18407){if((e18407 instanceof Object)){
var ex__15544__auto__ = e18407;
var statearr_18408_18465 = state_18325;
(statearr_18408_18465[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18325);

return cljs.core.cst$kw$recur;
} else {
throw e18407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__18466 = state_18325;
state_18325 = G__18466;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15541__auto__ = function(state_18325){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15541__auto____1.call(this,state_18325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15541__auto____0;
cljs$core$async$mult_$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15541__auto____1;
return cljs$core$async$mult_$_state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___18410,cs,m,dchan,dctr,done))
})();
var state__15725__auto__ = (function (){var statearr_18409 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_18409[(6)] = c__15723__auto___18410);

return statearr_18409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___18410,cs,m,dchan,dctr,done))
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
var G__18468 = arguments.length;
switch (G__18468) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18480 = arguments.length;
var i__4532__auto___18481 = (0);
while(true){
if((i__4532__auto___18481 < len__4531__auto___18480)){
args__4534__auto__.push((arguments[i__4532__auto___18481]));

var G__18482 = (i__4532__auto___18481 + (1));
i__4532__auto___18481 = G__18482;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18474){
var map__18475 = p__18474;
var map__18475__$1 = ((((!((map__18475 == null)))?(((((map__18475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18475):map__18475);
var opts = map__18475__$1;
var statearr_18477_18483 = state;
(statearr_18477_18483[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18475,map__18475__$1,opts){
return (function (val){
var statearr_18478_18484 = state;
(statearr_18478_18484[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18475,map__18475__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18479_18485 = state;
(statearr_18479_18485[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18470){
var G__18471 = cljs.core.first(seq18470);
var seq18470__$1 = cljs.core.next(seq18470);
var G__18472 = cljs.core.first(seq18470__$1);
var seq18470__$2 = cljs.core.next(seq18470__$1);
var G__18473 = cljs.core.first(seq18470__$2);
var seq18470__$3 = cljs.core.next(seq18470__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18471,G__18472,G__18473,seq18470__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18486 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18487){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18487 = meta18487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18488,meta18487__$1){
var self__ = this;
var _18488__$1 = this;
return (new cljs.core.async.t_cljs$core$async18486(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18487__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18488){
var self__ = this;
var _18488__$1 = this;
return self__.meta18487;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18486.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18487], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18486";

cljs.core.async.t_cljs$core$async18486.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18486");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18486.
 */
cljs.core.async.__GT_t_cljs$core$async18486 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18486(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18487){
return (new cljs.core.async.t_cljs$core$async18486(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18487));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18486(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15723__auto___18650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___18650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___18650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18590){
var state_val_18591 = (state_18590[(1)]);
if((state_val_18591 === (7))){
var inst_18505 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
var statearr_18592_18651 = state_18590__$1;
(statearr_18592_18651[(2)] = inst_18505);

(statearr_18592_18651[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (20))){
var inst_18517 = (state_18590[(7)]);
var state_18590__$1 = state_18590;
var statearr_18593_18652 = state_18590__$1;
(statearr_18593_18652[(2)] = inst_18517);

(statearr_18593_18652[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (27))){
var state_18590__$1 = state_18590;
var statearr_18594_18653 = state_18590__$1;
(statearr_18594_18653[(2)] = null);

(statearr_18594_18653[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (1))){
var inst_18492 = (state_18590[(8)]);
var inst_18492__$1 = calc_state();
var inst_18494 = (inst_18492__$1 == null);
var inst_18495 = cljs.core.not(inst_18494);
var state_18590__$1 = (function (){var statearr_18595 = state_18590;
(statearr_18595[(8)] = inst_18492__$1);

return statearr_18595;
})();
if(inst_18495){
var statearr_18596_18654 = state_18590__$1;
(statearr_18596_18654[(1)] = (2));

} else {
var statearr_18597_18655 = state_18590__$1;
(statearr_18597_18655[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (24))){
var inst_18564 = (state_18590[(9)]);
var inst_18550 = (state_18590[(10)]);
var inst_18541 = (state_18590[(11)]);
var inst_18564__$1 = (inst_18541.cljs$core$IFn$_invoke$arity$1 ? inst_18541.cljs$core$IFn$_invoke$arity$1(inst_18550) : inst_18541.call(null,inst_18550));
var state_18590__$1 = (function (){var statearr_18598 = state_18590;
(statearr_18598[(9)] = inst_18564__$1);

return statearr_18598;
})();
if(cljs.core.truth_(inst_18564__$1)){
var statearr_18599_18656 = state_18590__$1;
(statearr_18599_18656[(1)] = (29));

} else {
var statearr_18600_18657 = state_18590__$1;
(statearr_18600_18657[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (4))){
var inst_18508 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
if(cljs.core.truth_(inst_18508)){
var statearr_18601_18658 = state_18590__$1;
(statearr_18601_18658[(1)] = (8));

} else {
var statearr_18602_18659 = state_18590__$1;
(statearr_18602_18659[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (15))){
var inst_18535 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
if(cljs.core.truth_(inst_18535)){
var statearr_18603_18660 = state_18590__$1;
(statearr_18603_18660[(1)] = (19));

} else {
var statearr_18604_18661 = state_18590__$1;
(statearr_18604_18661[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (21))){
var inst_18540 = (state_18590[(12)]);
var inst_18540__$1 = (state_18590[(2)]);
var inst_18541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18540__$1,cljs.core.cst$kw$solos);
var inst_18542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18540__$1,cljs.core.cst$kw$mutes);
var inst_18543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18540__$1,cljs.core.cst$kw$reads);
var state_18590__$1 = (function (){var statearr_18605 = state_18590;
(statearr_18605[(12)] = inst_18540__$1);

(statearr_18605[(11)] = inst_18541);

(statearr_18605[(13)] = inst_18542);

return statearr_18605;
})();
return cljs.core.async.ioc_alts_BANG_(state_18590__$1,(22),inst_18543);
} else {
if((state_val_18591 === (31))){
var inst_18572 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
if(cljs.core.truth_(inst_18572)){
var statearr_18606_18662 = state_18590__$1;
(statearr_18606_18662[(1)] = (32));

} else {
var statearr_18607_18663 = state_18590__$1;
(statearr_18607_18663[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (32))){
var inst_18549 = (state_18590[(14)]);
var state_18590__$1 = state_18590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18590__$1,(35),out,inst_18549);
} else {
if((state_val_18591 === (33))){
var inst_18540 = (state_18590[(12)]);
var inst_18517 = inst_18540;
var state_18590__$1 = (function (){var statearr_18608 = state_18590;
(statearr_18608[(7)] = inst_18517);

return statearr_18608;
})();
var statearr_18609_18664 = state_18590__$1;
(statearr_18609_18664[(2)] = null);

(statearr_18609_18664[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (13))){
var inst_18517 = (state_18590[(7)]);
var inst_18524 = inst_18517.cljs$lang$protocol_mask$partition0$;
var inst_18525 = (inst_18524 & (64));
var inst_18526 = inst_18517.cljs$core$ISeq$;
var inst_18527 = (cljs.core.PROTOCOL_SENTINEL === inst_18526);
var inst_18528 = ((inst_18525) || (inst_18527));
var state_18590__$1 = state_18590;
if(cljs.core.truth_(inst_18528)){
var statearr_18610_18665 = state_18590__$1;
(statearr_18610_18665[(1)] = (16));

} else {
var statearr_18611_18666 = state_18590__$1;
(statearr_18611_18666[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (22))){
var inst_18549 = (state_18590[(14)]);
var inst_18550 = (state_18590[(10)]);
var inst_18548 = (state_18590[(2)]);
var inst_18549__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18548,(0),null);
var inst_18550__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18548,(1),null);
var inst_18551 = (inst_18549__$1 == null);
var inst_18552 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18550__$1,change);
var inst_18553 = ((inst_18551) || (inst_18552));
var state_18590__$1 = (function (){var statearr_18612 = state_18590;
(statearr_18612[(14)] = inst_18549__$1);

(statearr_18612[(10)] = inst_18550__$1);

return statearr_18612;
})();
if(cljs.core.truth_(inst_18553)){
var statearr_18613_18667 = state_18590__$1;
(statearr_18613_18667[(1)] = (23));

} else {
var statearr_18614_18668 = state_18590__$1;
(statearr_18614_18668[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (36))){
var inst_18540 = (state_18590[(12)]);
var inst_18517 = inst_18540;
var state_18590__$1 = (function (){var statearr_18615 = state_18590;
(statearr_18615[(7)] = inst_18517);

return statearr_18615;
})();
var statearr_18616_18669 = state_18590__$1;
(statearr_18616_18669[(2)] = null);

(statearr_18616_18669[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (29))){
var inst_18564 = (state_18590[(9)]);
var state_18590__$1 = state_18590;
var statearr_18617_18670 = state_18590__$1;
(statearr_18617_18670[(2)] = inst_18564);

(statearr_18617_18670[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (6))){
var state_18590__$1 = state_18590;
var statearr_18618_18671 = state_18590__$1;
(statearr_18618_18671[(2)] = false);

(statearr_18618_18671[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (28))){
var inst_18560 = (state_18590[(2)]);
var inst_18561 = calc_state();
var inst_18517 = inst_18561;
var state_18590__$1 = (function (){var statearr_18619 = state_18590;
(statearr_18619[(7)] = inst_18517);

(statearr_18619[(15)] = inst_18560);

return statearr_18619;
})();
var statearr_18620_18672 = state_18590__$1;
(statearr_18620_18672[(2)] = null);

(statearr_18620_18672[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (25))){
var inst_18586 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
var statearr_18621_18673 = state_18590__$1;
(statearr_18621_18673[(2)] = inst_18586);

(statearr_18621_18673[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (34))){
var inst_18584 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
var statearr_18622_18674 = state_18590__$1;
(statearr_18622_18674[(2)] = inst_18584);

(statearr_18622_18674[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (17))){
var state_18590__$1 = state_18590;
var statearr_18623_18675 = state_18590__$1;
(statearr_18623_18675[(2)] = false);

(statearr_18623_18675[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (3))){
var state_18590__$1 = state_18590;
var statearr_18624_18676 = state_18590__$1;
(statearr_18624_18676[(2)] = false);

(statearr_18624_18676[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (12))){
var inst_18588 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18590__$1,inst_18588);
} else {
if((state_val_18591 === (2))){
var inst_18492 = (state_18590[(8)]);
var inst_18497 = inst_18492.cljs$lang$protocol_mask$partition0$;
var inst_18498 = (inst_18497 & (64));
var inst_18499 = inst_18492.cljs$core$ISeq$;
var inst_18500 = (cljs.core.PROTOCOL_SENTINEL === inst_18499);
var inst_18501 = ((inst_18498) || (inst_18500));
var state_18590__$1 = state_18590;
if(cljs.core.truth_(inst_18501)){
var statearr_18625_18677 = state_18590__$1;
(statearr_18625_18677[(1)] = (5));

} else {
var statearr_18626_18678 = state_18590__$1;
(statearr_18626_18678[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (23))){
var inst_18549 = (state_18590[(14)]);
var inst_18555 = (inst_18549 == null);
var state_18590__$1 = state_18590;
if(cljs.core.truth_(inst_18555)){
var statearr_18627_18679 = state_18590__$1;
(statearr_18627_18679[(1)] = (26));

} else {
var statearr_18628_18680 = state_18590__$1;
(statearr_18628_18680[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (35))){
var inst_18575 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
if(cljs.core.truth_(inst_18575)){
var statearr_18629_18681 = state_18590__$1;
(statearr_18629_18681[(1)] = (36));

} else {
var statearr_18630_18682 = state_18590__$1;
(statearr_18630_18682[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (19))){
var inst_18517 = (state_18590[(7)]);
var inst_18537 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18517);
var state_18590__$1 = state_18590;
var statearr_18631_18683 = state_18590__$1;
(statearr_18631_18683[(2)] = inst_18537);

(statearr_18631_18683[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (11))){
var inst_18517 = (state_18590[(7)]);
var inst_18521 = (inst_18517 == null);
var inst_18522 = cljs.core.not(inst_18521);
var state_18590__$1 = state_18590;
if(inst_18522){
var statearr_18632_18684 = state_18590__$1;
(statearr_18632_18684[(1)] = (13));

} else {
var statearr_18633_18685 = state_18590__$1;
(statearr_18633_18685[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (9))){
var inst_18492 = (state_18590[(8)]);
var state_18590__$1 = state_18590;
var statearr_18634_18686 = state_18590__$1;
(statearr_18634_18686[(2)] = inst_18492);

(statearr_18634_18686[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (5))){
var state_18590__$1 = state_18590;
var statearr_18635_18687 = state_18590__$1;
(statearr_18635_18687[(2)] = true);

(statearr_18635_18687[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (14))){
var state_18590__$1 = state_18590;
var statearr_18636_18688 = state_18590__$1;
(statearr_18636_18688[(2)] = false);

(statearr_18636_18688[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (26))){
var inst_18550 = (state_18590[(10)]);
var inst_18557 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18550);
var state_18590__$1 = state_18590;
var statearr_18637_18689 = state_18590__$1;
(statearr_18637_18689[(2)] = inst_18557);

(statearr_18637_18689[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (16))){
var state_18590__$1 = state_18590;
var statearr_18638_18690 = state_18590__$1;
(statearr_18638_18690[(2)] = true);

(statearr_18638_18690[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (38))){
var inst_18580 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
var statearr_18639_18691 = state_18590__$1;
(statearr_18639_18691[(2)] = inst_18580);

(statearr_18639_18691[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (30))){
var inst_18550 = (state_18590[(10)]);
var inst_18541 = (state_18590[(11)]);
var inst_18542 = (state_18590[(13)]);
var inst_18567 = cljs.core.empty_QMARK_(inst_18541);
var inst_18568 = (inst_18542.cljs$core$IFn$_invoke$arity$1 ? inst_18542.cljs$core$IFn$_invoke$arity$1(inst_18550) : inst_18542.call(null,inst_18550));
var inst_18569 = cljs.core.not(inst_18568);
var inst_18570 = ((inst_18567) && (inst_18569));
var state_18590__$1 = state_18590;
var statearr_18640_18692 = state_18590__$1;
(statearr_18640_18692[(2)] = inst_18570);

(statearr_18640_18692[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (10))){
var inst_18492 = (state_18590[(8)]);
var inst_18513 = (state_18590[(2)]);
var inst_18514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18513,cljs.core.cst$kw$solos);
var inst_18515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18513,cljs.core.cst$kw$mutes);
var inst_18516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18513,cljs.core.cst$kw$reads);
var inst_18517 = inst_18492;
var state_18590__$1 = (function (){var statearr_18641 = state_18590;
(statearr_18641[(16)] = inst_18514);

(statearr_18641[(17)] = inst_18516);

(statearr_18641[(7)] = inst_18517);

(statearr_18641[(18)] = inst_18515);

return statearr_18641;
})();
var statearr_18642_18693 = state_18590__$1;
(statearr_18642_18693[(2)] = null);

(statearr_18642_18693[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (18))){
var inst_18532 = (state_18590[(2)]);
var state_18590__$1 = state_18590;
var statearr_18643_18694 = state_18590__$1;
(statearr_18643_18694[(2)] = inst_18532);

(statearr_18643_18694[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (37))){
var state_18590__$1 = state_18590;
var statearr_18644_18695 = state_18590__$1;
(statearr_18644_18695[(2)] = null);

(statearr_18644_18695[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18591 === (8))){
var inst_18492 = (state_18590[(8)]);
var inst_18510 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18492);
var state_18590__$1 = state_18590;
var statearr_18645_18696 = state_18590__$1;
(statearr_18645_18696[(2)] = inst_18510);

(statearr_18645_18696[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___18650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15540__auto__,c__15723__auto___18650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15541__auto__ = null;
var cljs$core$async$mix_$_state_machine__15541__auto____0 = (function (){
var statearr_18646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18646[(0)] = cljs$core$async$mix_$_state_machine__15541__auto__);

(statearr_18646[(1)] = (1));

return statearr_18646;
});
var cljs$core$async$mix_$_state_machine__15541__auto____1 = (function (state_18590){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_18590);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e18647){if((e18647 instanceof Object)){
var ex__15544__auto__ = e18647;
var statearr_18648_18697 = state_18590;
(statearr_18648_18697[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18590);

return cljs.core.cst$kw$recur;
} else {
throw e18647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__18698 = state_18590;
state_18590 = G__18698;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15541__auto__ = function(state_18590){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15541__auto____1.call(this,state_18590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15541__auto____0;
cljs$core$async$mix_$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15541__auto____1;
return cljs$core$async$mix_$_state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___18650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15725__auto__ = (function (){var statearr_18649 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_18649[(6)] = c__15723__auto___18650);

return statearr_18649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___18650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18700 = arguments.length;
switch (G__18700) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__18704 = arguments.length;
switch (G__18704) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__18702_SHARP_){
if(cljs.core.truth_((p1__18702_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18702_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18702_SHARP_.call(null,topic)))){
return p1__18702_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18702_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18705 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18706){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18706 = meta18706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18707,meta18706__$1){
var self__ = this;
var _18707__$1 = this;
return (new cljs.core.async.t_cljs$core$async18705(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18706__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18707){
var self__ = this;
var _18707__$1 = this;
return self__.meta18706;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18705.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18705.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18705.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18705.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18705.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18706], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18705";

cljs.core.async.t_cljs$core$async18705.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18705");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18705.
 */
cljs.core.async.__GT_t_cljs$core$async18705 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18706){
return (new cljs.core.async.t_cljs$core$async18705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18706));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18705(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15723__auto___18825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___18825,mults,ensure_mult,p){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___18825,mults,ensure_mult,p){
return (function (state_18779){
var state_val_18780 = (state_18779[(1)]);
if((state_val_18780 === (7))){
var inst_18775 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18781_18826 = state_18779__$1;
(statearr_18781_18826[(2)] = inst_18775);

(statearr_18781_18826[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (20))){
var state_18779__$1 = state_18779;
var statearr_18782_18827 = state_18779__$1;
(statearr_18782_18827[(2)] = null);

(statearr_18782_18827[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (1))){
var state_18779__$1 = state_18779;
var statearr_18783_18828 = state_18779__$1;
(statearr_18783_18828[(2)] = null);

(statearr_18783_18828[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (24))){
var inst_18758 = (state_18779[(7)]);
var inst_18767 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18758);
var state_18779__$1 = state_18779;
var statearr_18784_18829 = state_18779__$1;
(statearr_18784_18829[(2)] = inst_18767);

(statearr_18784_18829[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (4))){
var inst_18710 = (state_18779[(8)]);
var inst_18710__$1 = (state_18779[(2)]);
var inst_18711 = (inst_18710__$1 == null);
var state_18779__$1 = (function (){var statearr_18785 = state_18779;
(statearr_18785[(8)] = inst_18710__$1);

return statearr_18785;
})();
if(cljs.core.truth_(inst_18711)){
var statearr_18786_18830 = state_18779__$1;
(statearr_18786_18830[(1)] = (5));

} else {
var statearr_18787_18831 = state_18779__$1;
(statearr_18787_18831[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (15))){
var inst_18752 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18788_18832 = state_18779__$1;
(statearr_18788_18832[(2)] = inst_18752);

(statearr_18788_18832[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (21))){
var inst_18772 = (state_18779[(2)]);
var state_18779__$1 = (function (){var statearr_18789 = state_18779;
(statearr_18789[(9)] = inst_18772);

return statearr_18789;
})();
var statearr_18790_18833 = state_18779__$1;
(statearr_18790_18833[(2)] = null);

(statearr_18790_18833[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (13))){
var inst_18734 = (state_18779[(10)]);
var inst_18736 = cljs.core.chunked_seq_QMARK_(inst_18734);
var state_18779__$1 = state_18779;
if(inst_18736){
var statearr_18791_18834 = state_18779__$1;
(statearr_18791_18834[(1)] = (16));

} else {
var statearr_18792_18835 = state_18779__$1;
(statearr_18792_18835[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (22))){
var inst_18764 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
if(cljs.core.truth_(inst_18764)){
var statearr_18793_18836 = state_18779__$1;
(statearr_18793_18836[(1)] = (23));

} else {
var statearr_18794_18837 = state_18779__$1;
(statearr_18794_18837[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (6))){
var inst_18760 = (state_18779[(11)]);
var inst_18710 = (state_18779[(8)]);
var inst_18758 = (state_18779[(7)]);
var inst_18758__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18710) : topic_fn.call(null,inst_18710));
var inst_18759 = cljs.core.deref(mults);
var inst_18760__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18759,inst_18758__$1);
var state_18779__$1 = (function (){var statearr_18795 = state_18779;
(statearr_18795[(11)] = inst_18760__$1);

(statearr_18795[(7)] = inst_18758__$1);

return statearr_18795;
})();
if(cljs.core.truth_(inst_18760__$1)){
var statearr_18796_18838 = state_18779__$1;
(statearr_18796_18838[(1)] = (19));

} else {
var statearr_18797_18839 = state_18779__$1;
(statearr_18797_18839[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (25))){
var inst_18769 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18798_18840 = state_18779__$1;
(statearr_18798_18840[(2)] = inst_18769);

(statearr_18798_18840[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (17))){
var inst_18734 = (state_18779[(10)]);
var inst_18743 = cljs.core.first(inst_18734);
var inst_18744 = cljs.core.async.muxch_STAR_(inst_18743);
var inst_18745 = cljs.core.async.close_BANG_(inst_18744);
var inst_18746 = cljs.core.next(inst_18734);
var inst_18720 = inst_18746;
var inst_18721 = null;
var inst_18722 = (0);
var inst_18723 = (0);
var state_18779__$1 = (function (){var statearr_18799 = state_18779;
(statearr_18799[(12)] = inst_18722);

(statearr_18799[(13)] = inst_18745);

(statearr_18799[(14)] = inst_18721);

(statearr_18799[(15)] = inst_18723);

(statearr_18799[(16)] = inst_18720);

return statearr_18799;
})();
var statearr_18800_18841 = state_18779__$1;
(statearr_18800_18841[(2)] = null);

(statearr_18800_18841[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (3))){
var inst_18777 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18779__$1,inst_18777);
} else {
if((state_val_18780 === (12))){
var inst_18754 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18801_18842 = state_18779__$1;
(statearr_18801_18842[(2)] = inst_18754);

(statearr_18801_18842[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (2))){
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18779__$1,(4),ch);
} else {
if((state_val_18780 === (23))){
var state_18779__$1 = state_18779;
var statearr_18802_18843 = state_18779__$1;
(statearr_18802_18843[(2)] = null);

(statearr_18802_18843[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (19))){
var inst_18760 = (state_18779[(11)]);
var inst_18710 = (state_18779[(8)]);
var inst_18762 = cljs.core.async.muxch_STAR_(inst_18760);
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18779__$1,(22),inst_18762,inst_18710);
} else {
if((state_val_18780 === (11))){
var inst_18734 = (state_18779[(10)]);
var inst_18720 = (state_18779[(16)]);
var inst_18734__$1 = cljs.core.seq(inst_18720);
var state_18779__$1 = (function (){var statearr_18803 = state_18779;
(statearr_18803[(10)] = inst_18734__$1);

return statearr_18803;
})();
if(inst_18734__$1){
var statearr_18804_18844 = state_18779__$1;
(statearr_18804_18844[(1)] = (13));

} else {
var statearr_18805_18845 = state_18779__$1;
(statearr_18805_18845[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (9))){
var inst_18756 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18806_18846 = state_18779__$1;
(statearr_18806_18846[(2)] = inst_18756);

(statearr_18806_18846[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (5))){
var inst_18717 = cljs.core.deref(mults);
var inst_18718 = cljs.core.vals(inst_18717);
var inst_18719 = cljs.core.seq(inst_18718);
var inst_18720 = inst_18719;
var inst_18721 = null;
var inst_18722 = (0);
var inst_18723 = (0);
var state_18779__$1 = (function (){var statearr_18807 = state_18779;
(statearr_18807[(12)] = inst_18722);

(statearr_18807[(14)] = inst_18721);

(statearr_18807[(15)] = inst_18723);

(statearr_18807[(16)] = inst_18720);

return statearr_18807;
})();
var statearr_18808_18847 = state_18779__$1;
(statearr_18808_18847[(2)] = null);

(statearr_18808_18847[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (14))){
var state_18779__$1 = state_18779;
var statearr_18812_18848 = state_18779__$1;
(statearr_18812_18848[(2)] = null);

(statearr_18812_18848[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (16))){
var inst_18734 = (state_18779[(10)]);
var inst_18738 = cljs.core.chunk_first(inst_18734);
var inst_18739 = cljs.core.chunk_rest(inst_18734);
var inst_18740 = cljs.core.count(inst_18738);
var inst_18720 = inst_18739;
var inst_18721 = inst_18738;
var inst_18722 = inst_18740;
var inst_18723 = (0);
var state_18779__$1 = (function (){var statearr_18813 = state_18779;
(statearr_18813[(12)] = inst_18722);

(statearr_18813[(14)] = inst_18721);

(statearr_18813[(15)] = inst_18723);

(statearr_18813[(16)] = inst_18720);

return statearr_18813;
})();
var statearr_18814_18849 = state_18779__$1;
(statearr_18814_18849[(2)] = null);

(statearr_18814_18849[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (10))){
var inst_18722 = (state_18779[(12)]);
var inst_18721 = (state_18779[(14)]);
var inst_18723 = (state_18779[(15)]);
var inst_18720 = (state_18779[(16)]);
var inst_18728 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18721,inst_18723);
var inst_18729 = cljs.core.async.muxch_STAR_(inst_18728);
var inst_18730 = cljs.core.async.close_BANG_(inst_18729);
var inst_18731 = (inst_18723 + (1));
var tmp18809 = inst_18722;
var tmp18810 = inst_18721;
var tmp18811 = inst_18720;
var inst_18720__$1 = tmp18811;
var inst_18721__$1 = tmp18810;
var inst_18722__$1 = tmp18809;
var inst_18723__$1 = inst_18731;
var state_18779__$1 = (function (){var statearr_18815 = state_18779;
(statearr_18815[(12)] = inst_18722__$1);

(statearr_18815[(14)] = inst_18721__$1);

(statearr_18815[(15)] = inst_18723__$1);

(statearr_18815[(17)] = inst_18730);

(statearr_18815[(16)] = inst_18720__$1);

return statearr_18815;
})();
var statearr_18816_18850 = state_18779__$1;
(statearr_18816_18850[(2)] = null);

(statearr_18816_18850[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (18))){
var inst_18749 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18817_18851 = state_18779__$1;
(statearr_18817_18851[(2)] = inst_18749);

(statearr_18817_18851[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (8))){
var inst_18722 = (state_18779[(12)]);
var inst_18723 = (state_18779[(15)]);
var inst_18725 = (inst_18723 < inst_18722);
var inst_18726 = inst_18725;
var state_18779__$1 = state_18779;
if(cljs.core.truth_(inst_18726)){
var statearr_18818_18852 = state_18779__$1;
(statearr_18818_18852[(1)] = (10));

} else {
var statearr_18819_18853 = state_18779__$1;
(statearr_18819_18853[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___18825,mults,ensure_mult,p))
;
return ((function (switch__15540__auto__,c__15723__auto___18825,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_18820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18820[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_18820[(1)] = (1));

return statearr_18820;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_18779){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_18779);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e18821){if((e18821 instanceof Object)){
var ex__15544__auto__ = e18821;
var statearr_18822_18854 = state_18779;
(statearr_18822_18854[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18779);

return cljs.core.cst$kw$recur;
} else {
throw e18821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__18855 = state_18779;
state_18779 = G__18855;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_18779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_18779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___18825,mults,ensure_mult,p))
})();
var state__15725__auto__ = (function (){var statearr_18823 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_18823[(6)] = c__15723__auto___18825);

return statearr_18823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___18825,mults,ensure_mult,p))
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
var G__18857 = arguments.length;
switch (G__18857) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18860 = arguments.length;
switch (G__18860) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__18863 = arguments.length;
switch (G__18863) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15723__auto___18930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___18930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___18930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18902){
var state_val_18903 = (state_18902[(1)]);
if((state_val_18903 === (7))){
var state_18902__$1 = state_18902;
var statearr_18904_18931 = state_18902__$1;
(statearr_18904_18931[(2)] = null);

(statearr_18904_18931[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (1))){
var state_18902__$1 = state_18902;
var statearr_18905_18932 = state_18902__$1;
(statearr_18905_18932[(2)] = null);

(statearr_18905_18932[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (4))){
var inst_18866 = (state_18902[(7)]);
var inst_18868 = (inst_18866 < cnt);
var state_18902__$1 = state_18902;
if(cljs.core.truth_(inst_18868)){
var statearr_18906_18933 = state_18902__$1;
(statearr_18906_18933[(1)] = (6));

} else {
var statearr_18907_18934 = state_18902__$1;
(statearr_18907_18934[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (15))){
var inst_18898 = (state_18902[(2)]);
var state_18902__$1 = state_18902;
var statearr_18908_18935 = state_18902__$1;
(statearr_18908_18935[(2)] = inst_18898);

(statearr_18908_18935[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (13))){
var inst_18891 = cljs.core.async.close_BANG_(out);
var state_18902__$1 = state_18902;
var statearr_18909_18936 = state_18902__$1;
(statearr_18909_18936[(2)] = inst_18891);

(statearr_18909_18936[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (6))){
var state_18902__$1 = state_18902;
var statearr_18910_18937 = state_18902__$1;
(statearr_18910_18937[(2)] = null);

(statearr_18910_18937[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (3))){
var inst_18900 = (state_18902[(2)]);
var state_18902__$1 = state_18902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18902__$1,inst_18900);
} else {
if((state_val_18903 === (12))){
var inst_18888 = (state_18902[(8)]);
var inst_18888__$1 = (state_18902[(2)]);
var inst_18889 = cljs.core.some(cljs.core.nil_QMARK_,inst_18888__$1);
var state_18902__$1 = (function (){var statearr_18911 = state_18902;
(statearr_18911[(8)] = inst_18888__$1);

return statearr_18911;
})();
if(cljs.core.truth_(inst_18889)){
var statearr_18912_18938 = state_18902__$1;
(statearr_18912_18938[(1)] = (13));

} else {
var statearr_18913_18939 = state_18902__$1;
(statearr_18913_18939[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (2))){
var inst_18865 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18866 = (0);
var state_18902__$1 = (function (){var statearr_18914 = state_18902;
(statearr_18914[(9)] = inst_18865);

(statearr_18914[(7)] = inst_18866);

return statearr_18914;
})();
var statearr_18915_18940 = state_18902__$1;
(statearr_18915_18940[(2)] = null);

(statearr_18915_18940[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (11))){
var inst_18866 = (state_18902[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18902,(10),Object,null,(9));
var inst_18875 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18866) : chs__$1.call(null,inst_18866));
var inst_18876 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18866) : done.call(null,inst_18866));
var inst_18877 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18875,inst_18876);
var state_18902__$1 = state_18902;
var statearr_18916_18941 = state_18902__$1;
(statearr_18916_18941[(2)] = inst_18877);


cljs.core.async.impl.ioc_helpers.process_exception(state_18902__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (9))){
var inst_18866 = (state_18902[(7)]);
var inst_18879 = (state_18902[(2)]);
var inst_18880 = (inst_18866 + (1));
var inst_18866__$1 = inst_18880;
var state_18902__$1 = (function (){var statearr_18917 = state_18902;
(statearr_18917[(10)] = inst_18879);

(statearr_18917[(7)] = inst_18866__$1);

return statearr_18917;
})();
var statearr_18918_18942 = state_18902__$1;
(statearr_18918_18942[(2)] = null);

(statearr_18918_18942[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (5))){
var inst_18886 = (state_18902[(2)]);
var state_18902__$1 = (function (){var statearr_18919 = state_18902;
(statearr_18919[(11)] = inst_18886);

return statearr_18919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18902__$1,(12),dchan);
} else {
if((state_val_18903 === (14))){
var inst_18888 = (state_18902[(8)]);
var inst_18893 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18888);
var state_18902__$1 = state_18902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18902__$1,(16),out,inst_18893);
} else {
if((state_val_18903 === (16))){
var inst_18895 = (state_18902[(2)]);
var state_18902__$1 = (function (){var statearr_18920 = state_18902;
(statearr_18920[(12)] = inst_18895);

return statearr_18920;
})();
var statearr_18921_18943 = state_18902__$1;
(statearr_18921_18943[(2)] = null);

(statearr_18921_18943[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (10))){
var inst_18870 = (state_18902[(2)]);
var inst_18871 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18902__$1 = (function (){var statearr_18922 = state_18902;
(statearr_18922[(13)] = inst_18870);

return statearr_18922;
})();
var statearr_18923_18944 = state_18902__$1;
(statearr_18923_18944[(2)] = inst_18871);


cljs.core.async.impl.ioc_helpers.process_exception(state_18902__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (8))){
var inst_18884 = (state_18902[(2)]);
var state_18902__$1 = state_18902;
var statearr_18924_18945 = state_18902__$1;
(statearr_18924_18945[(2)] = inst_18884);

(statearr_18924_18945[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___18930,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15540__auto__,c__15723__auto___18930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_18925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18925[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_18925[(1)] = (1));

return statearr_18925;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_18902){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_18902);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e18926){if((e18926 instanceof Object)){
var ex__15544__auto__ = e18926;
var statearr_18927_18946 = state_18902;
(statearr_18927_18946[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18902);

return cljs.core.cst$kw$recur;
} else {
throw e18926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__18947 = state_18902;
state_18902 = G__18947;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_18902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_18902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___18930,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15725__auto__ = (function (){var statearr_18928 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_18928[(6)] = c__15723__auto___18930);

return statearr_18928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___18930,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18950 = arguments.length;
switch (G__18950) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15723__auto___19004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___19004,out){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___19004,out){
return (function (state_18982){
var state_val_18983 = (state_18982[(1)]);
if((state_val_18983 === (7))){
var inst_18961 = (state_18982[(7)]);
var inst_18962 = (state_18982[(8)]);
var inst_18961__$1 = (state_18982[(2)]);
var inst_18962__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18961__$1,(0),null);
var inst_18963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18961__$1,(1),null);
var inst_18964 = (inst_18962__$1 == null);
var state_18982__$1 = (function (){var statearr_18984 = state_18982;
(statearr_18984[(9)] = inst_18963);

(statearr_18984[(7)] = inst_18961__$1);

(statearr_18984[(8)] = inst_18962__$1);

return statearr_18984;
})();
if(cljs.core.truth_(inst_18964)){
var statearr_18985_19005 = state_18982__$1;
(statearr_18985_19005[(1)] = (8));

} else {
var statearr_18986_19006 = state_18982__$1;
(statearr_18986_19006[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (1))){
var inst_18951 = cljs.core.vec(chs);
var inst_18952 = inst_18951;
var state_18982__$1 = (function (){var statearr_18987 = state_18982;
(statearr_18987[(10)] = inst_18952);

return statearr_18987;
})();
var statearr_18988_19007 = state_18982__$1;
(statearr_18988_19007[(2)] = null);

(statearr_18988_19007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (4))){
var inst_18952 = (state_18982[(10)]);
var state_18982__$1 = state_18982;
return cljs.core.async.ioc_alts_BANG_(state_18982__$1,(7),inst_18952);
} else {
if((state_val_18983 === (6))){
var inst_18978 = (state_18982[(2)]);
var state_18982__$1 = state_18982;
var statearr_18989_19008 = state_18982__$1;
(statearr_18989_19008[(2)] = inst_18978);

(statearr_18989_19008[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (3))){
var inst_18980 = (state_18982[(2)]);
var state_18982__$1 = state_18982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18982__$1,inst_18980);
} else {
if((state_val_18983 === (2))){
var inst_18952 = (state_18982[(10)]);
var inst_18954 = cljs.core.count(inst_18952);
var inst_18955 = (inst_18954 > (0));
var state_18982__$1 = state_18982;
if(cljs.core.truth_(inst_18955)){
var statearr_18991_19009 = state_18982__$1;
(statearr_18991_19009[(1)] = (4));

} else {
var statearr_18992_19010 = state_18982__$1;
(statearr_18992_19010[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (11))){
var inst_18952 = (state_18982[(10)]);
var inst_18971 = (state_18982[(2)]);
var tmp18990 = inst_18952;
var inst_18952__$1 = tmp18990;
var state_18982__$1 = (function (){var statearr_18993 = state_18982;
(statearr_18993[(11)] = inst_18971);

(statearr_18993[(10)] = inst_18952__$1);

return statearr_18993;
})();
var statearr_18994_19011 = state_18982__$1;
(statearr_18994_19011[(2)] = null);

(statearr_18994_19011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (9))){
var inst_18962 = (state_18982[(8)]);
var state_18982__$1 = state_18982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18982__$1,(11),out,inst_18962);
} else {
if((state_val_18983 === (5))){
var inst_18976 = cljs.core.async.close_BANG_(out);
var state_18982__$1 = state_18982;
var statearr_18995_19012 = state_18982__$1;
(statearr_18995_19012[(2)] = inst_18976);

(statearr_18995_19012[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (10))){
var inst_18974 = (state_18982[(2)]);
var state_18982__$1 = state_18982;
var statearr_18996_19013 = state_18982__$1;
(statearr_18996_19013[(2)] = inst_18974);

(statearr_18996_19013[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (8))){
var inst_18963 = (state_18982[(9)]);
var inst_18961 = (state_18982[(7)]);
var inst_18962 = (state_18982[(8)]);
var inst_18952 = (state_18982[(10)]);
var inst_18966 = (function (){var cs = inst_18952;
var vec__18957 = inst_18961;
var v = inst_18962;
var c = inst_18963;
return ((function (cs,vec__18957,v,c,inst_18963,inst_18961,inst_18962,inst_18952,state_val_18983,c__15723__auto___19004,out){
return (function (p1__18948_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18948_SHARP_);
});
;})(cs,vec__18957,v,c,inst_18963,inst_18961,inst_18962,inst_18952,state_val_18983,c__15723__auto___19004,out))
})();
var inst_18967 = cljs.core.filterv(inst_18966,inst_18952);
var inst_18952__$1 = inst_18967;
var state_18982__$1 = (function (){var statearr_18997 = state_18982;
(statearr_18997[(10)] = inst_18952__$1);

return statearr_18997;
})();
var statearr_18998_19014 = state_18982__$1;
(statearr_18998_19014[(2)] = null);

(statearr_18998_19014[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___19004,out))
;
return ((function (switch__15540__auto__,c__15723__auto___19004,out){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_18999 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18999[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_18999[(1)] = (1));

return statearr_18999;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_18982){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_18982);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e19000){if((e19000 instanceof Object)){
var ex__15544__auto__ = e19000;
var statearr_19001_19015 = state_18982;
(statearr_19001_19015[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18982);

return cljs.core.cst$kw$recur;
} else {
throw e19000;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__19016 = state_18982;
state_18982 = G__19016;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_18982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_18982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___19004,out))
})();
var state__15725__auto__ = (function (){var statearr_19002 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_19002[(6)] = c__15723__auto___19004);

return statearr_19002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___19004,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19018 = arguments.length;
switch (G__19018) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15723__auto___19063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___19063,out){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___19063,out){
return (function (state_19042){
var state_val_19043 = (state_19042[(1)]);
if((state_val_19043 === (7))){
var inst_19024 = (state_19042[(7)]);
var inst_19024__$1 = (state_19042[(2)]);
var inst_19025 = (inst_19024__$1 == null);
var inst_19026 = cljs.core.not(inst_19025);
var state_19042__$1 = (function (){var statearr_19044 = state_19042;
(statearr_19044[(7)] = inst_19024__$1);

return statearr_19044;
})();
if(inst_19026){
var statearr_19045_19064 = state_19042__$1;
(statearr_19045_19064[(1)] = (8));

} else {
var statearr_19046_19065 = state_19042__$1;
(statearr_19046_19065[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19043 === (1))){
var inst_19019 = (0);
var state_19042__$1 = (function (){var statearr_19047 = state_19042;
(statearr_19047[(8)] = inst_19019);

return statearr_19047;
})();
var statearr_19048_19066 = state_19042__$1;
(statearr_19048_19066[(2)] = null);

(statearr_19048_19066[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19043 === (4))){
var state_19042__$1 = state_19042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19042__$1,(7),ch);
} else {
if((state_val_19043 === (6))){
var inst_19037 = (state_19042[(2)]);
var state_19042__$1 = state_19042;
var statearr_19049_19067 = state_19042__$1;
(statearr_19049_19067[(2)] = inst_19037);

(statearr_19049_19067[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19043 === (3))){
var inst_19039 = (state_19042[(2)]);
var inst_19040 = cljs.core.async.close_BANG_(out);
var state_19042__$1 = (function (){var statearr_19050 = state_19042;
(statearr_19050[(9)] = inst_19039);

return statearr_19050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19042__$1,inst_19040);
} else {
if((state_val_19043 === (2))){
var inst_19019 = (state_19042[(8)]);
var inst_19021 = (inst_19019 < n);
var state_19042__$1 = state_19042;
if(cljs.core.truth_(inst_19021)){
var statearr_19051_19068 = state_19042__$1;
(statearr_19051_19068[(1)] = (4));

} else {
var statearr_19052_19069 = state_19042__$1;
(statearr_19052_19069[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19043 === (11))){
var inst_19019 = (state_19042[(8)]);
var inst_19029 = (state_19042[(2)]);
var inst_19030 = (inst_19019 + (1));
var inst_19019__$1 = inst_19030;
var state_19042__$1 = (function (){var statearr_19053 = state_19042;
(statearr_19053[(10)] = inst_19029);

(statearr_19053[(8)] = inst_19019__$1);

return statearr_19053;
})();
var statearr_19054_19070 = state_19042__$1;
(statearr_19054_19070[(2)] = null);

(statearr_19054_19070[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19043 === (9))){
var state_19042__$1 = state_19042;
var statearr_19055_19071 = state_19042__$1;
(statearr_19055_19071[(2)] = null);

(statearr_19055_19071[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19043 === (5))){
var state_19042__$1 = state_19042;
var statearr_19056_19072 = state_19042__$1;
(statearr_19056_19072[(2)] = null);

(statearr_19056_19072[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19043 === (10))){
var inst_19034 = (state_19042[(2)]);
var state_19042__$1 = state_19042;
var statearr_19057_19073 = state_19042__$1;
(statearr_19057_19073[(2)] = inst_19034);

(statearr_19057_19073[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19043 === (8))){
var inst_19024 = (state_19042[(7)]);
var state_19042__$1 = state_19042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19042__$1,(11),out,inst_19024);
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
});})(c__15723__auto___19063,out))
;
return ((function (switch__15540__auto__,c__15723__auto___19063,out){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_19058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19058[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_19058[(1)] = (1));

return statearr_19058;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_19042){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_19042);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e19059){if((e19059 instanceof Object)){
var ex__15544__auto__ = e19059;
var statearr_19060_19074 = state_19042;
(statearr_19060_19074[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19042);

return cljs.core.cst$kw$recur;
} else {
throw e19059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__19075 = state_19042;
state_19042 = G__19075;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_19042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_19042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___19063,out))
})();
var state__15725__auto__ = (function (){var statearr_19061 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_19061[(6)] = c__15723__auto___19063);

return statearr_19061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___19063,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19077 = (function (f,ch,meta19078){
this.f = f;
this.ch = ch;
this.meta19078 = meta19078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19079,meta19078__$1){
var self__ = this;
var _19079__$1 = this;
return (new cljs.core.async.t_cljs$core$async19077(self__.f,self__.ch,meta19078__$1));
});

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19079){
var self__ = this;
var _19079__$1 = this;
return self__.meta19078;
});

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19080 = (function (f,ch,meta19078,_,fn1,meta19081){
this.f = f;
this.ch = ch;
this.meta19078 = meta19078;
this._ = _;
this.fn1 = fn1;
this.meta19081 = meta19081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19082,meta19081__$1){
var self__ = this;
var _19082__$1 = this;
return (new cljs.core.async.t_cljs$core$async19080(self__.f,self__.ch,self__.meta19078,self__._,self__.fn1,meta19081__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19082){
var self__ = this;
var _19082__$1 = this;
return self__.meta19081;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19076_SHARP_){
var G__19083 = (((p1__19076_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19076_SHARP_) : self__.f.call(null,p1__19076_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19083) : f1.call(null,G__19083));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19080.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19078,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19077], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19081], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19080";

cljs.core.async.t_cljs$core$async19080.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19080");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19080.
 */
cljs.core.async.__GT_t_cljs$core$async19080 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19080(f__$1,ch__$1,meta19078__$1,___$2,fn1__$1,meta19081){
return (new cljs.core.async.t_cljs$core$async19080(f__$1,ch__$1,meta19078__$1,___$2,fn1__$1,meta19081));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19080(self__.f,self__.ch,self__.meta19078,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19084 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19084) : self__.f.call(null,G__19084));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19078], null);
});

cljs.core.async.t_cljs$core$async19077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19077";

cljs.core.async.t_cljs$core$async19077.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19077");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19077.
 */
cljs.core.async.__GT_t_cljs$core$async19077 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19077(f__$1,ch__$1,meta19078){
return (new cljs.core.async.t_cljs$core$async19077(f__$1,ch__$1,meta19078));
});

}

return (new cljs.core.async.t_cljs$core$async19077(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19085 = (function (f,ch,meta19086){
this.f = f;
this.ch = ch;
this.meta19086 = meta19086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19087,meta19086__$1){
var self__ = this;
var _19087__$1 = this;
return (new cljs.core.async.t_cljs$core$async19085(self__.f,self__.ch,meta19086__$1));
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19087){
var self__ = this;
var _19087__$1 = this;
return self__.meta19086;
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19086], null);
});

cljs.core.async.t_cljs$core$async19085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19085";

cljs.core.async.t_cljs$core$async19085.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19085");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19085.
 */
cljs.core.async.__GT_t_cljs$core$async19085 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19085(f__$1,ch__$1,meta19086){
return (new cljs.core.async.t_cljs$core$async19085(f__$1,ch__$1,meta19086));
});

}

return (new cljs.core.async.t_cljs$core$async19085(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19088 = (function (p,ch,meta19089){
this.p = p;
this.ch = ch;
this.meta19089 = meta19089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19090,meta19089__$1){
var self__ = this;
var _19090__$1 = this;
return (new cljs.core.async.t_cljs$core$async19088(self__.p,self__.ch,meta19089__$1));
});

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19090){
var self__ = this;
var _19090__$1 = this;
return self__.meta19089;
});

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19089], null);
});

cljs.core.async.t_cljs$core$async19088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19088";

cljs.core.async.t_cljs$core$async19088.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19088");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19088.
 */
cljs.core.async.__GT_t_cljs$core$async19088 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19088(p__$1,ch__$1,meta19089){
return (new cljs.core.async.t_cljs$core$async19088(p__$1,ch__$1,meta19089));
});

}

return (new cljs.core.async.t_cljs$core$async19088(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19092 = arguments.length;
switch (G__19092) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15723__auto___19132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___19132,out){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___19132,out){
return (function (state_19113){
var state_val_19114 = (state_19113[(1)]);
if((state_val_19114 === (7))){
var inst_19109 = (state_19113[(2)]);
var state_19113__$1 = state_19113;
var statearr_19115_19133 = state_19113__$1;
(statearr_19115_19133[(2)] = inst_19109);

(statearr_19115_19133[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19114 === (1))){
var state_19113__$1 = state_19113;
var statearr_19116_19134 = state_19113__$1;
(statearr_19116_19134[(2)] = null);

(statearr_19116_19134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19114 === (4))){
var inst_19095 = (state_19113[(7)]);
var inst_19095__$1 = (state_19113[(2)]);
var inst_19096 = (inst_19095__$1 == null);
var state_19113__$1 = (function (){var statearr_19117 = state_19113;
(statearr_19117[(7)] = inst_19095__$1);

return statearr_19117;
})();
if(cljs.core.truth_(inst_19096)){
var statearr_19118_19135 = state_19113__$1;
(statearr_19118_19135[(1)] = (5));

} else {
var statearr_19119_19136 = state_19113__$1;
(statearr_19119_19136[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19114 === (6))){
var inst_19095 = (state_19113[(7)]);
var inst_19100 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19095) : p.call(null,inst_19095));
var state_19113__$1 = state_19113;
if(cljs.core.truth_(inst_19100)){
var statearr_19120_19137 = state_19113__$1;
(statearr_19120_19137[(1)] = (8));

} else {
var statearr_19121_19138 = state_19113__$1;
(statearr_19121_19138[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19114 === (3))){
var inst_19111 = (state_19113[(2)]);
var state_19113__$1 = state_19113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19113__$1,inst_19111);
} else {
if((state_val_19114 === (2))){
var state_19113__$1 = state_19113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19113__$1,(4),ch);
} else {
if((state_val_19114 === (11))){
var inst_19103 = (state_19113[(2)]);
var state_19113__$1 = state_19113;
var statearr_19122_19139 = state_19113__$1;
(statearr_19122_19139[(2)] = inst_19103);

(statearr_19122_19139[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19114 === (9))){
var state_19113__$1 = state_19113;
var statearr_19123_19140 = state_19113__$1;
(statearr_19123_19140[(2)] = null);

(statearr_19123_19140[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19114 === (5))){
var inst_19098 = cljs.core.async.close_BANG_(out);
var state_19113__$1 = state_19113;
var statearr_19124_19141 = state_19113__$1;
(statearr_19124_19141[(2)] = inst_19098);

(statearr_19124_19141[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19114 === (10))){
var inst_19106 = (state_19113[(2)]);
var state_19113__$1 = (function (){var statearr_19125 = state_19113;
(statearr_19125[(8)] = inst_19106);

return statearr_19125;
})();
var statearr_19126_19142 = state_19113__$1;
(statearr_19126_19142[(2)] = null);

(statearr_19126_19142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19114 === (8))){
var inst_19095 = (state_19113[(7)]);
var state_19113__$1 = state_19113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19113__$1,(11),out,inst_19095);
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
});})(c__15723__auto___19132,out))
;
return ((function (switch__15540__auto__,c__15723__auto___19132,out){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_19127 = [null,null,null,null,null,null,null,null,null];
(statearr_19127[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_19127[(1)] = (1));

return statearr_19127;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_19113){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_19113);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e19128){if((e19128 instanceof Object)){
var ex__15544__auto__ = e19128;
var statearr_19129_19143 = state_19113;
(statearr_19129_19143[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19113);

return cljs.core.cst$kw$recur;
} else {
throw e19128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__19144 = state_19113;
state_19113 = G__19144;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_19113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_19113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___19132,out))
})();
var state__15725__auto__ = (function (){var statearr_19130 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_19130[(6)] = c__15723__auto___19132);

return statearr_19130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___19132,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19146 = arguments.length;
switch (G__19146) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto__){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto__){
return (function (state_19209){
var state_val_19210 = (state_19209[(1)]);
if((state_val_19210 === (7))){
var inst_19205 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
var statearr_19211_19249 = state_19209__$1;
(statearr_19211_19249[(2)] = inst_19205);

(statearr_19211_19249[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (20))){
var inst_19175 = (state_19209[(7)]);
var inst_19186 = (state_19209[(2)]);
var inst_19187 = cljs.core.next(inst_19175);
var inst_19161 = inst_19187;
var inst_19162 = null;
var inst_19163 = (0);
var inst_19164 = (0);
var state_19209__$1 = (function (){var statearr_19212 = state_19209;
(statearr_19212[(8)] = inst_19162);

(statearr_19212[(9)] = inst_19186);

(statearr_19212[(10)] = inst_19164);

(statearr_19212[(11)] = inst_19163);

(statearr_19212[(12)] = inst_19161);

return statearr_19212;
})();
var statearr_19213_19250 = state_19209__$1;
(statearr_19213_19250[(2)] = null);

(statearr_19213_19250[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (1))){
var state_19209__$1 = state_19209;
var statearr_19214_19251 = state_19209__$1;
(statearr_19214_19251[(2)] = null);

(statearr_19214_19251[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (4))){
var inst_19150 = (state_19209[(13)]);
var inst_19150__$1 = (state_19209[(2)]);
var inst_19151 = (inst_19150__$1 == null);
var state_19209__$1 = (function (){var statearr_19215 = state_19209;
(statearr_19215[(13)] = inst_19150__$1);

return statearr_19215;
})();
if(cljs.core.truth_(inst_19151)){
var statearr_19216_19252 = state_19209__$1;
(statearr_19216_19252[(1)] = (5));

} else {
var statearr_19217_19253 = state_19209__$1;
(statearr_19217_19253[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (15))){
var state_19209__$1 = state_19209;
var statearr_19221_19254 = state_19209__$1;
(statearr_19221_19254[(2)] = null);

(statearr_19221_19254[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (21))){
var state_19209__$1 = state_19209;
var statearr_19222_19255 = state_19209__$1;
(statearr_19222_19255[(2)] = null);

(statearr_19222_19255[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (13))){
var inst_19162 = (state_19209[(8)]);
var inst_19164 = (state_19209[(10)]);
var inst_19163 = (state_19209[(11)]);
var inst_19161 = (state_19209[(12)]);
var inst_19171 = (state_19209[(2)]);
var inst_19172 = (inst_19164 + (1));
var tmp19218 = inst_19162;
var tmp19219 = inst_19163;
var tmp19220 = inst_19161;
var inst_19161__$1 = tmp19220;
var inst_19162__$1 = tmp19218;
var inst_19163__$1 = tmp19219;
var inst_19164__$1 = inst_19172;
var state_19209__$1 = (function (){var statearr_19223 = state_19209;
(statearr_19223[(8)] = inst_19162__$1);

(statearr_19223[(10)] = inst_19164__$1);

(statearr_19223[(14)] = inst_19171);

(statearr_19223[(11)] = inst_19163__$1);

(statearr_19223[(12)] = inst_19161__$1);

return statearr_19223;
})();
var statearr_19224_19256 = state_19209__$1;
(statearr_19224_19256[(2)] = null);

(statearr_19224_19256[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (22))){
var state_19209__$1 = state_19209;
var statearr_19225_19257 = state_19209__$1;
(statearr_19225_19257[(2)] = null);

(statearr_19225_19257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (6))){
var inst_19150 = (state_19209[(13)]);
var inst_19159 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19150) : f.call(null,inst_19150));
var inst_19160 = cljs.core.seq(inst_19159);
var inst_19161 = inst_19160;
var inst_19162 = null;
var inst_19163 = (0);
var inst_19164 = (0);
var state_19209__$1 = (function (){var statearr_19226 = state_19209;
(statearr_19226[(8)] = inst_19162);

(statearr_19226[(10)] = inst_19164);

(statearr_19226[(11)] = inst_19163);

(statearr_19226[(12)] = inst_19161);

return statearr_19226;
})();
var statearr_19227_19258 = state_19209__$1;
(statearr_19227_19258[(2)] = null);

(statearr_19227_19258[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (17))){
var inst_19175 = (state_19209[(7)]);
var inst_19179 = cljs.core.chunk_first(inst_19175);
var inst_19180 = cljs.core.chunk_rest(inst_19175);
var inst_19181 = cljs.core.count(inst_19179);
var inst_19161 = inst_19180;
var inst_19162 = inst_19179;
var inst_19163 = inst_19181;
var inst_19164 = (0);
var state_19209__$1 = (function (){var statearr_19228 = state_19209;
(statearr_19228[(8)] = inst_19162);

(statearr_19228[(10)] = inst_19164);

(statearr_19228[(11)] = inst_19163);

(statearr_19228[(12)] = inst_19161);

return statearr_19228;
})();
var statearr_19229_19259 = state_19209__$1;
(statearr_19229_19259[(2)] = null);

(statearr_19229_19259[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (3))){
var inst_19207 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19209__$1,inst_19207);
} else {
if((state_val_19210 === (12))){
var inst_19195 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
var statearr_19230_19260 = state_19209__$1;
(statearr_19230_19260[(2)] = inst_19195);

(statearr_19230_19260[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (2))){
var state_19209__$1 = state_19209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19209__$1,(4),in$);
} else {
if((state_val_19210 === (23))){
var inst_19203 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
var statearr_19231_19261 = state_19209__$1;
(statearr_19231_19261[(2)] = inst_19203);

(statearr_19231_19261[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (19))){
var inst_19190 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
var statearr_19232_19262 = state_19209__$1;
(statearr_19232_19262[(2)] = inst_19190);

(statearr_19232_19262[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (11))){
var inst_19175 = (state_19209[(7)]);
var inst_19161 = (state_19209[(12)]);
var inst_19175__$1 = cljs.core.seq(inst_19161);
var state_19209__$1 = (function (){var statearr_19233 = state_19209;
(statearr_19233[(7)] = inst_19175__$1);

return statearr_19233;
})();
if(inst_19175__$1){
var statearr_19234_19263 = state_19209__$1;
(statearr_19234_19263[(1)] = (14));

} else {
var statearr_19235_19264 = state_19209__$1;
(statearr_19235_19264[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (9))){
var inst_19197 = (state_19209[(2)]);
var inst_19198 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19209__$1 = (function (){var statearr_19236 = state_19209;
(statearr_19236[(15)] = inst_19197);

return statearr_19236;
})();
if(cljs.core.truth_(inst_19198)){
var statearr_19237_19265 = state_19209__$1;
(statearr_19237_19265[(1)] = (21));

} else {
var statearr_19238_19266 = state_19209__$1;
(statearr_19238_19266[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (5))){
var inst_19153 = cljs.core.async.close_BANG_(out);
var state_19209__$1 = state_19209;
var statearr_19239_19267 = state_19209__$1;
(statearr_19239_19267[(2)] = inst_19153);

(statearr_19239_19267[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (14))){
var inst_19175 = (state_19209[(7)]);
var inst_19177 = cljs.core.chunked_seq_QMARK_(inst_19175);
var state_19209__$1 = state_19209;
if(inst_19177){
var statearr_19240_19268 = state_19209__$1;
(statearr_19240_19268[(1)] = (17));

} else {
var statearr_19241_19269 = state_19209__$1;
(statearr_19241_19269[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (16))){
var inst_19193 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
var statearr_19242_19270 = state_19209__$1;
(statearr_19242_19270[(2)] = inst_19193);

(statearr_19242_19270[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19210 === (10))){
var inst_19162 = (state_19209[(8)]);
var inst_19164 = (state_19209[(10)]);
var inst_19169 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19162,inst_19164);
var state_19209__$1 = state_19209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19209__$1,(13),out,inst_19169);
} else {
if((state_val_19210 === (18))){
var inst_19175 = (state_19209[(7)]);
var inst_19184 = cljs.core.first(inst_19175);
var state_19209__$1 = state_19209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19209__$1,(20),out,inst_19184);
} else {
if((state_val_19210 === (8))){
var inst_19164 = (state_19209[(10)]);
var inst_19163 = (state_19209[(11)]);
var inst_19166 = (inst_19164 < inst_19163);
var inst_19167 = inst_19166;
var state_19209__$1 = state_19209;
if(cljs.core.truth_(inst_19167)){
var statearr_19243_19271 = state_19209__$1;
(statearr_19243_19271[(1)] = (10));

} else {
var statearr_19244_19272 = state_19209__$1;
(statearr_19244_19272[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15723__auto__))
;
return ((function (switch__15540__auto__,c__15723__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15541__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15541__auto____0 = (function (){
var statearr_19245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19245[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15541__auto__);

(statearr_19245[(1)] = (1));

return statearr_19245;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15541__auto____1 = (function (state_19209){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_19209);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e19246){if((e19246 instanceof Object)){
var ex__15544__auto__ = e19246;
var statearr_19247_19273 = state_19209;
(statearr_19247_19273[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19209);

return cljs.core.cst$kw$recur;
} else {
throw e19246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__19274 = state_19209;
state_19209 = G__19274;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15541__auto__ = function(state_19209){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15541__auto____1.call(this,state_19209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15541__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15541__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto__))
})();
var state__15725__auto__ = (function (){var statearr_19248 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_19248[(6)] = c__15723__auto__);

return statearr_19248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto__))
);

return c__15723__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19276 = arguments.length;
switch (G__19276) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19279 = arguments.length;
switch (G__19279) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19282 = arguments.length;
switch (G__19282) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15723__auto___19329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___19329,out){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___19329,out){
return (function (state_19306){
var state_val_19307 = (state_19306[(1)]);
if((state_val_19307 === (7))){
var inst_19301 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
var statearr_19308_19330 = state_19306__$1;
(statearr_19308_19330[(2)] = inst_19301);

(statearr_19308_19330[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (1))){
var inst_19283 = null;
var state_19306__$1 = (function (){var statearr_19309 = state_19306;
(statearr_19309[(7)] = inst_19283);

return statearr_19309;
})();
var statearr_19310_19331 = state_19306__$1;
(statearr_19310_19331[(2)] = null);

(statearr_19310_19331[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (4))){
var inst_19286 = (state_19306[(8)]);
var inst_19286__$1 = (state_19306[(2)]);
var inst_19287 = (inst_19286__$1 == null);
var inst_19288 = cljs.core.not(inst_19287);
var state_19306__$1 = (function (){var statearr_19311 = state_19306;
(statearr_19311[(8)] = inst_19286__$1);

return statearr_19311;
})();
if(inst_19288){
var statearr_19312_19332 = state_19306__$1;
(statearr_19312_19332[(1)] = (5));

} else {
var statearr_19313_19333 = state_19306__$1;
(statearr_19313_19333[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (6))){
var state_19306__$1 = state_19306;
var statearr_19314_19334 = state_19306__$1;
(statearr_19314_19334[(2)] = null);

(statearr_19314_19334[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (3))){
var inst_19303 = (state_19306[(2)]);
var inst_19304 = cljs.core.async.close_BANG_(out);
var state_19306__$1 = (function (){var statearr_19315 = state_19306;
(statearr_19315[(9)] = inst_19303);

return statearr_19315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19306__$1,inst_19304);
} else {
if((state_val_19307 === (2))){
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19306__$1,(4),ch);
} else {
if((state_val_19307 === (11))){
var inst_19286 = (state_19306[(8)]);
var inst_19295 = (state_19306[(2)]);
var inst_19283 = inst_19286;
var state_19306__$1 = (function (){var statearr_19316 = state_19306;
(statearr_19316[(10)] = inst_19295);

(statearr_19316[(7)] = inst_19283);

return statearr_19316;
})();
var statearr_19317_19335 = state_19306__$1;
(statearr_19317_19335[(2)] = null);

(statearr_19317_19335[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (9))){
var inst_19286 = (state_19306[(8)]);
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19306__$1,(11),out,inst_19286);
} else {
if((state_val_19307 === (5))){
var inst_19283 = (state_19306[(7)]);
var inst_19286 = (state_19306[(8)]);
var inst_19290 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19286,inst_19283);
var state_19306__$1 = state_19306;
if(inst_19290){
var statearr_19319_19336 = state_19306__$1;
(statearr_19319_19336[(1)] = (8));

} else {
var statearr_19320_19337 = state_19306__$1;
(statearr_19320_19337[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (10))){
var inst_19298 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
var statearr_19321_19338 = state_19306__$1;
(statearr_19321_19338[(2)] = inst_19298);

(statearr_19321_19338[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (8))){
var inst_19283 = (state_19306[(7)]);
var tmp19318 = inst_19283;
var inst_19283__$1 = tmp19318;
var state_19306__$1 = (function (){var statearr_19322 = state_19306;
(statearr_19322[(7)] = inst_19283__$1);

return statearr_19322;
})();
var statearr_19323_19339 = state_19306__$1;
(statearr_19323_19339[(2)] = null);

(statearr_19323_19339[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___19329,out))
;
return ((function (switch__15540__auto__,c__15723__auto___19329,out){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_19324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19324[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_19324[(1)] = (1));

return statearr_19324;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_19306){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_19306);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e19325){if((e19325 instanceof Object)){
var ex__15544__auto__ = e19325;
var statearr_19326_19340 = state_19306;
(statearr_19326_19340[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19306);

return cljs.core.cst$kw$recur;
} else {
throw e19325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__19341 = state_19306;
state_19306 = G__19341;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_19306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_19306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___19329,out))
})();
var state__15725__auto__ = (function (){var statearr_19327 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_19327[(6)] = c__15723__auto___19329);

return statearr_19327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___19329,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19343 = arguments.length;
switch (G__19343) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15723__auto___19409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___19409,out){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___19409,out){
return (function (state_19381){
var state_val_19382 = (state_19381[(1)]);
if((state_val_19382 === (7))){
var inst_19377 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
var statearr_19383_19410 = state_19381__$1;
(statearr_19383_19410[(2)] = inst_19377);

(statearr_19383_19410[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (1))){
var inst_19344 = (new Array(n));
var inst_19345 = inst_19344;
var inst_19346 = (0);
var state_19381__$1 = (function (){var statearr_19384 = state_19381;
(statearr_19384[(7)] = inst_19346);

(statearr_19384[(8)] = inst_19345);

return statearr_19384;
})();
var statearr_19385_19411 = state_19381__$1;
(statearr_19385_19411[(2)] = null);

(statearr_19385_19411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (4))){
var inst_19349 = (state_19381[(9)]);
var inst_19349__$1 = (state_19381[(2)]);
var inst_19350 = (inst_19349__$1 == null);
var inst_19351 = cljs.core.not(inst_19350);
var state_19381__$1 = (function (){var statearr_19386 = state_19381;
(statearr_19386[(9)] = inst_19349__$1);

return statearr_19386;
})();
if(inst_19351){
var statearr_19387_19412 = state_19381__$1;
(statearr_19387_19412[(1)] = (5));

} else {
var statearr_19388_19413 = state_19381__$1;
(statearr_19388_19413[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (15))){
var inst_19371 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
var statearr_19389_19414 = state_19381__$1;
(statearr_19389_19414[(2)] = inst_19371);

(statearr_19389_19414[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (13))){
var state_19381__$1 = state_19381;
var statearr_19390_19415 = state_19381__$1;
(statearr_19390_19415[(2)] = null);

(statearr_19390_19415[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (6))){
var inst_19346 = (state_19381[(7)]);
var inst_19367 = (inst_19346 > (0));
var state_19381__$1 = state_19381;
if(cljs.core.truth_(inst_19367)){
var statearr_19391_19416 = state_19381__$1;
(statearr_19391_19416[(1)] = (12));

} else {
var statearr_19392_19417 = state_19381__$1;
(statearr_19392_19417[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (3))){
var inst_19379 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19381__$1,inst_19379);
} else {
if((state_val_19382 === (12))){
var inst_19345 = (state_19381[(8)]);
var inst_19369 = cljs.core.vec(inst_19345);
var state_19381__$1 = state_19381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19381__$1,(15),out,inst_19369);
} else {
if((state_val_19382 === (2))){
var state_19381__$1 = state_19381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19381__$1,(4),ch);
} else {
if((state_val_19382 === (11))){
var inst_19361 = (state_19381[(2)]);
var inst_19362 = (new Array(n));
var inst_19345 = inst_19362;
var inst_19346 = (0);
var state_19381__$1 = (function (){var statearr_19393 = state_19381;
(statearr_19393[(7)] = inst_19346);

(statearr_19393[(10)] = inst_19361);

(statearr_19393[(8)] = inst_19345);

return statearr_19393;
})();
var statearr_19394_19418 = state_19381__$1;
(statearr_19394_19418[(2)] = null);

(statearr_19394_19418[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (9))){
var inst_19345 = (state_19381[(8)]);
var inst_19359 = cljs.core.vec(inst_19345);
var state_19381__$1 = state_19381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19381__$1,(11),out,inst_19359);
} else {
if((state_val_19382 === (5))){
var inst_19346 = (state_19381[(7)]);
var inst_19345 = (state_19381[(8)]);
var inst_19354 = (state_19381[(11)]);
var inst_19349 = (state_19381[(9)]);
var inst_19353 = (inst_19345[inst_19346] = inst_19349);
var inst_19354__$1 = (inst_19346 + (1));
var inst_19355 = (inst_19354__$1 < n);
var state_19381__$1 = (function (){var statearr_19395 = state_19381;
(statearr_19395[(12)] = inst_19353);

(statearr_19395[(11)] = inst_19354__$1);

return statearr_19395;
})();
if(cljs.core.truth_(inst_19355)){
var statearr_19396_19419 = state_19381__$1;
(statearr_19396_19419[(1)] = (8));

} else {
var statearr_19397_19420 = state_19381__$1;
(statearr_19397_19420[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (14))){
var inst_19374 = (state_19381[(2)]);
var inst_19375 = cljs.core.async.close_BANG_(out);
var state_19381__$1 = (function (){var statearr_19399 = state_19381;
(statearr_19399[(13)] = inst_19374);

return statearr_19399;
})();
var statearr_19400_19421 = state_19381__$1;
(statearr_19400_19421[(2)] = inst_19375);

(statearr_19400_19421[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (10))){
var inst_19365 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
var statearr_19401_19422 = state_19381__$1;
(statearr_19401_19422[(2)] = inst_19365);

(statearr_19401_19422[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (8))){
var inst_19345 = (state_19381[(8)]);
var inst_19354 = (state_19381[(11)]);
var tmp19398 = inst_19345;
var inst_19345__$1 = tmp19398;
var inst_19346 = inst_19354;
var state_19381__$1 = (function (){var statearr_19402 = state_19381;
(statearr_19402[(7)] = inst_19346);

(statearr_19402[(8)] = inst_19345__$1);

return statearr_19402;
})();
var statearr_19403_19423 = state_19381__$1;
(statearr_19403_19423[(2)] = null);

(statearr_19403_19423[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___19409,out))
;
return ((function (switch__15540__auto__,c__15723__auto___19409,out){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_19404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19404[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_19404[(1)] = (1));

return statearr_19404;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_19381){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_19381);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e19405){if((e19405 instanceof Object)){
var ex__15544__auto__ = e19405;
var statearr_19406_19424 = state_19381;
(statearr_19406_19424[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19381);

return cljs.core.cst$kw$recur;
} else {
throw e19405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__19425 = state_19381;
state_19381 = G__19425;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_19381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_19381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___19409,out))
})();
var state__15725__auto__ = (function (){var statearr_19407 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_19407[(6)] = c__15723__auto___19409);

return statearr_19407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___19409,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19427 = arguments.length;
switch (G__19427) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15723__auto___19497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15723__auto___19497,out){
return (function (){
var f__15724__auto__ = (function (){var switch__15540__auto__ = ((function (c__15723__auto___19497,out){
return (function (state_19469){
var state_val_19470 = (state_19469[(1)]);
if((state_val_19470 === (7))){
var inst_19465 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
var statearr_19471_19498 = state_19469__$1;
(statearr_19471_19498[(2)] = inst_19465);

(statearr_19471_19498[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (1))){
var inst_19428 = [];
var inst_19429 = inst_19428;
var inst_19430 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19469__$1 = (function (){var statearr_19472 = state_19469;
(statearr_19472[(7)] = inst_19430);

(statearr_19472[(8)] = inst_19429);

return statearr_19472;
})();
var statearr_19473_19499 = state_19469__$1;
(statearr_19473_19499[(2)] = null);

(statearr_19473_19499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (4))){
var inst_19433 = (state_19469[(9)]);
var inst_19433__$1 = (state_19469[(2)]);
var inst_19434 = (inst_19433__$1 == null);
var inst_19435 = cljs.core.not(inst_19434);
var state_19469__$1 = (function (){var statearr_19474 = state_19469;
(statearr_19474[(9)] = inst_19433__$1);

return statearr_19474;
})();
if(inst_19435){
var statearr_19475_19500 = state_19469__$1;
(statearr_19475_19500[(1)] = (5));

} else {
var statearr_19476_19501 = state_19469__$1;
(statearr_19476_19501[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (15))){
var inst_19459 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
var statearr_19477_19502 = state_19469__$1;
(statearr_19477_19502[(2)] = inst_19459);

(statearr_19477_19502[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (13))){
var state_19469__$1 = state_19469;
var statearr_19478_19503 = state_19469__$1;
(statearr_19478_19503[(2)] = null);

(statearr_19478_19503[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (6))){
var inst_19429 = (state_19469[(8)]);
var inst_19454 = inst_19429.length;
var inst_19455 = (inst_19454 > (0));
var state_19469__$1 = state_19469;
if(cljs.core.truth_(inst_19455)){
var statearr_19479_19504 = state_19469__$1;
(statearr_19479_19504[(1)] = (12));

} else {
var statearr_19480_19505 = state_19469__$1;
(statearr_19480_19505[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (3))){
var inst_19467 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19469__$1,inst_19467);
} else {
if((state_val_19470 === (12))){
var inst_19429 = (state_19469[(8)]);
var inst_19457 = cljs.core.vec(inst_19429);
var state_19469__$1 = state_19469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19469__$1,(15),out,inst_19457);
} else {
if((state_val_19470 === (2))){
var state_19469__$1 = state_19469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19469__$1,(4),ch);
} else {
if((state_val_19470 === (11))){
var inst_19433 = (state_19469[(9)]);
var inst_19437 = (state_19469[(10)]);
var inst_19447 = (state_19469[(2)]);
var inst_19448 = [];
var inst_19449 = inst_19448.push(inst_19433);
var inst_19429 = inst_19448;
var inst_19430 = inst_19437;
var state_19469__$1 = (function (){var statearr_19481 = state_19469;
(statearr_19481[(11)] = inst_19449);

(statearr_19481[(7)] = inst_19430);

(statearr_19481[(8)] = inst_19429);

(statearr_19481[(12)] = inst_19447);

return statearr_19481;
})();
var statearr_19482_19506 = state_19469__$1;
(statearr_19482_19506[(2)] = null);

(statearr_19482_19506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (9))){
var inst_19429 = (state_19469[(8)]);
var inst_19445 = cljs.core.vec(inst_19429);
var state_19469__$1 = state_19469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19469__$1,(11),out,inst_19445);
} else {
if((state_val_19470 === (5))){
var inst_19430 = (state_19469[(7)]);
var inst_19433 = (state_19469[(9)]);
var inst_19437 = (state_19469[(10)]);
var inst_19437__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19433) : f.call(null,inst_19433));
var inst_19438 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19437__$1,inst_19430);
var inst_19439 = cljs.core.keyword_identical_QMARK_(inst_19430,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19440 = ((inst_19438) || (inst_19439));
var state_19469__$1 = (function (){var statearr_19483 = state_19469;
(statearr_19483[(10)] = inst_19437__$1);

return statearr_19483;
})();
if(cljs.core.truth_(inst_19440)){
var statearr_19484_19507 = state_19469__$1;
(statearr_19484_19507[(1)] = (8));

} else {
var statearr_19485_19508 = state_19469__$1;
(statearr_19485_19508[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (14))){
var inst_19462 = (state_19469[(2)]);
var inst_19463 = cljs.core.async.close_BANG_(out);
var state_19469__$1 = (function (){var statearr_19487 = state_19469;
(statearr_19487[(13)] = inst_19462);

return statearr_19487;
})();
var statearr_19488_19509 = state_19469__$1;
(statearr_19488_19509[(2)] = inst_19463);

(statearr_19488_19509[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (10))){
var inst_19452 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
var statearr_19489_19510 = state_19469__$1;
(statearr_19489_19510[(2)] = inst_19452);

(statearr_19489_19510[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (8))){
var inst_19429 = (state_19469[(8)]);
var inst_19433 = (state_19469[(9)]);
var inst_19437 = (state_19469[(10)]);
var inst_19442 = inst_19429.push(inst_19433);
var tmp19486 = inst_19429;
var inst_19429__$1 = tmp19486;
var inst_19430 = inst_19437;
var state_19469__$1 = (function (){var statearr_19490 = state_19469;
(statearr_19490[(14)] = inst_19442);

(statearr_19490[(7)] = inst_19430);

(statearr_19490[(8)] = inst_19429__$1);

return statearr_19490;
})();
var statearr_19491_19511 = state_19469__$1;
(statearr_19491_19511[(2)] = null);

(statearr_19491_19511[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15723__auto___19497,out))
;
return ((function (switch__15540__auto__,c__15723__auto___19497,out){
return (function() {
var cljs$core$async$state_machine__15541__auto__ = null;
var cljs$core$async$state_machine__15541__auto____0 = (function (){
var statearr_19492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19492[(0)] = cljs$core$async$state_machine__15541__auto__);

(statearr_19492[(1)] = (1));

return statearr_19492;
});
var cljs$core$async$state_machine__15541__auto____1 = (function (state_19469){
while(true){
var ret_value__15542__auto__ = (function (){try{while(true){
var result__15543__auto__ = switch__15540__auto__(state_19469);
if(cljs.core.keyword_identical_QMARK_(result__15543__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15543__auto__;
}
break;
}
}catch (e19493){if((e19493 instanceof Object)){
var ex__15544__auto__ = e19493;
var statearr_19494_19512 = state_19469;
(statearr_19494_19512[(5)] = ex__15544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19469);

return cljs.core.cst$kw$recur;
} else {
throw e19493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15542__auto__,cljs.core.cst$kw$recur)){
var G__19513 = state_19469;
state_19469 = G__19513;
continue;
} else {
return ret_value__15542__auto__;
}
break;
}
});
cljs$core$async$state_machine__15541__auto__ = function(state_19469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15541__auto____1.call(this,state_19469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15541__auto____0;
cljs$core$async$state_machine__15541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15541__auto____1;
return cljs$core$async$state_machine__15541__auto__;
})()
;})(switch__15540__auto__,c__15723__auto___19497,out))
})();
var state__15725__auto__ = (function (){var statearr_19495 = (f__15724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15724__auto__.cljs$core$IFn$_invoke$arity$0() : f__15724__auto__.call(null));
(statearr_19495[(6)] = c__15723__auto___19497);

return statearr_19495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15725__auto__);
});})(c__15723__auto___19497,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

