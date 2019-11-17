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
var G__17658 = arguments.length;
switch (G__17658) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17659 = (function (f,blockable,meta17660){
this.f = f;
this.blockable = blockable;
this.meta17660 = meta17660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17661,meta17660__$1){
var self__ = this;
var _17661__$1 = this;
return (new cljs.core.async.t_cljs$core$async17659(self__.f,self__.blockable,meta17660__$1));
});

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17661){
var self__ = this;
var _17661__$1 = this;
return self__.meta17660;
});

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17660], null);
});

cljs.core.async.t_cljs$core$async17659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17659";

cljs.core.async.t_cljs$core$async17659.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17659");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17659.
 */
cljs.core.async.__GT_t_cljs$core$async17659 = (function cljs$core$async$__GT_t_cljs$core$async17659(f__$1,blockable__$1,meta17660){
return (new cljs.core.async.t_cljs$core$async17659(f__$1,blockable__$1,meta17660));
});

}

return (new cljs.core.async.t_cljs$core$async17659(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17665 = arguments.length;
switch (G__17665) {
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
var G__17668 = arguments.length;
switch (G__17668) {
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
var G__17671 = arguments.length;
switch (G__17671) {
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
var val_17673 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17673) : fn1.call(null,val_17673));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17673,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17673) : fn1.call(null,val_17673));
});})(val_17673,ret))
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
var G__17675 = arguments.length;
switch (G__17675) {
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
var n__4408__auto___17677 = n;
var x_17678 = (0);
while(true){
if((x_17678 < n__4408__auto___17677)){
(a[x_17678] = x_17678);

var G__17679 = (x_17678 + (1));
x_17678 = G__17679;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17680 = (function (flag,meta17681){
this.flag = flag;
this.meta17681 = meta17681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17682,meta17681__$1){
var self__ = this;
var _17682__$1 = this;
return (new cljs.core.async.t_cljs$core$async17680(self__.flag,meta17681__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17682){
var self__ = this;
var _17682__$1 = this;
return self__.meta17681;
});})(flag))
;

cljs.core.async.t_cljs$core$async17680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17680.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17681], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17680";

cljs.core.async.t_cljs$core$async17680.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17680");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17680.
 */
cljs.core.async.__GT_t_cljs$core$async17680 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17680(flag__$1,meta17681){
return (new cljs.core.async.t_cljs$core$async17680(flag__$1,meta17681));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17680(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17683 = (function (flag,cb,meta17684){
this.flag = flag;
this.cb = cb;
this.meta17684 = meta17684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17685,meta17684__$1){
var self__ = this;
var _17685__$1 = this;
return (new cljs.core.async.t_cljs$core$async17683(self__.flag,self__.cb,meta17684__$1));
});

cljs.core.async.t_cljs$core$async17683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17685){
var self__ = this;
var _17685__$1 = this;
return self__.meta17684;
});

cljs.core.async.t_cljs$core$async17683.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17683.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17684], null);
});

cljs.core.async.t_cljs$core$async17683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17683";

cljs.core.async.t_cljs$core$async17683.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17683");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17683.
 */
cljs.core.async.__GT_t_cljs$core$async17683 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17683(flag__$1,cb__$1,meta17684){
return (new cljs.core.async.t_cljs$core$async17683(flag__$1,cb__$1,meta17684));
});

}

return (new cljs.core.async.t_cljs$core$async17683(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17686_SHARP_){
var G__17688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17686_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17688) : fret.call(null,G__17688));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17687_SHARP_){
var G__17689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17687_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17689) : fret.call(null,G__17689));
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
var G__17690 = (i + (1));
i = G__17690;
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
var len__4531__auto___17696 = arguments.length;
var i__4532__auto___17697 = (0);
while(true){
if((i__4532__auto___17697 < len__4531__auto___17696)){
args__4534__auto__.push((arguments[i__4532__auto___17697]));

var G__17698 = (i__4532__auto___17697 + (1));
i__4532__auto___17697 = G__17698;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17693){
var map__17694 = p__17693;
var map__17694__$1 = ((((!((map__17694 == null)))?(((((map__17694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17694):map__17694);
var opts = map__17694__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17691){
var G__17692 = cljs.core.first(seq17691);
var seq17691__$1 = cljs.core.next(seq17691);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17692,seq17691__$1);
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
var G__17700 = arguments.length;
switch (G__17700) {
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
var c__15731__auto___17746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___17746){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___17746){
return (function (state_17724){
var state_val_17725 = (state_17724[(1)]);
if((state_val_17725 === (7))){
var inst_17720 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17726_17747 = state_17724__$1;
(statearr_17726_17747[(2)] = inst_17720);

(statearr_17726_17747[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (1))){
var state_17724__$1 = state_17724;
var statearr_17727_17748 = state_17724__$1;
(statearr_17727_17748[(2)] = null);

(statearr_17727_17748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (4))){
var inst_17703 = (state_17724[(7)]);
var inst_17703__$1 = (state_17724[(2)]);
var inst_17704 = (inst_17703__$1 == null);
var state_17724__$1 = (function (){var statearr_17728 = state_17724;
(statearr_17728[(7)] = inst_17703__$1);

return statearr_17728;
})();
if(cljs.core.truth_(inst_17704)){
var statearr_17729_17749 = state_17724__$1;
(statearr_17729_17749[(1)] = (5));

} else {
var statearr_17730_17750 = state_17724__$1;
(statearr_17730_17750[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (13))){
var state_17724__$1 = state_17724;
var statearr_17731_17751 = state_17724__$1;
(statearr_17731_17751[(2)] = null);

(statearr_17731_17751[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (6))){
var inst_17703 = (state_17724[(7)]);
var state_17724__$1 = state_17724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17724__$1,(11),to,inst_17703);
} else {
if((state_val_17725 === (3))){
var inst_17722 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17724__$1,inst_17722);
} else {
if((state_val_17725 === (12))){
var state_17724__$1 = state_17724;
var statearr_17732_17752 = state_17724__$1;
(statearr_17732_17752[(2)] = null);

(statearr_17732_17752[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (2))){
var state_17724__$1 = state_17724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17724__$1,(4),from);
} else {
if((state_val_17725 === (11))){
var inst_17713 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
if(cljs.core.truth_(inst_17713)){
var statearr_17733_17753 = state_17724__$1;
(statearr_17733_17753[(1)] = (12));

} else {
var statearr_17734_17754 = state_17724__$1;
(statearr_17734_17754[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (9))){
var state_17724__$1 = state_17724;
var statearr_17735_17755 = state_17724__$1;
(statearr_17735_17755[(2)] = null);

(statearr_17735_17755[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (5))){
var state_17724__$1 = state_17724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17736_17756 = state_17724__$1;
(statearr_17736_17756[(1)] = (8));

} else {
var statearr_17737_17757 = state_17724__$1;
(statearr_17737_17757[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (14))){
var inst_17718 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17738_17758 = state_17724__$1;
(statearr_17738_17758[(2)] = inst_17718);

(statearr_17738_17758[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (10))){
var inst_17710 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17739_17759 = state_17724__$1;
(statearr_17739_17759[(2)] = inst_17710);

(statearr_17739_17759[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17725 === (8))){
var inst_17707 = cljs.core.async.close_BANG_(to);
var state_17724__$1 = state_17724;
var statearr_17740_17760 = state_17724__$1;
(statearr_17740_17760[(2)] = inst_17707);

(statearr_17740_17760[(1)] = (10));


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
});})(c__15731__auto___17746))
;
return ((function (switch__15548__auto__,c__15731__auto___17746){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_17741 = [null,null,null,null,null,null,null,null];
(statearr_17741[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_17741[(1)] = (1));

return statearr_17741;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_17724){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_17724);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e17742){if((e17742 instanceof Object)){
var ex__15552__auto__ = e17742;
var statearr_17743_17761 = state_17724;
(statearr_17743_17761[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17724);

return cljs.core.cst$kw$recur;
} else {
throw e17742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__17762 = state_17724;
state_17724 = G__17762;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_17724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_17724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___17746))
})();
var state__15733__auto__ = (function (){var statearr_17744 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_17744[(6)] = c__15731__auto___17746);

return statearr_17744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___17746))
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
return (function (p__17763){
var vec__17764 = p__17763;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17764,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17764,(1),null);
var job = vec__17764;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15731__auto___17935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___17935,res,vec__17764,v,p,job,jobs,results){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___17935,res,vec__17764,v,p,job,jobs,results){
return (function (state_17771){
var state_val_17772 = (state_17771[(1)]);
if((state_val_17772 === (1))){
var state_17771__$1 = state_17771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17771__$1,(2),res,v);
} else {
if((state_val_17772 === (2))){
var inst_17768 = (state_17771[(2)]);
var inst_17769 = cljs.core.async.close_BANG_(res);
var state_17771__$1 = (function (){var statearr_17773 = state_17771;
(statearr_17773[(7)] = inst_17768);

return statearr_17773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17771__$1,inst_17769);
} else {
return null;
}
}
});})(c__15731__auto___17935,res,vec__17764,v,p,job,jobs,results))
;
return ((function (switch__15548__auto__,c__15731__auto___17935,res,vec__17764,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0 = (function (){
var statearr_17774 = [null,null,null,null,null,null,null,null];
(statearr_17774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__);

(statearr_17774[(1)] = (1));

return statearr_17774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1 = (function (state_17771){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_17771);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e17775){if((e17775 instanceof Object)){
var ex__15552__auto__ = e17775;
var statearr_17776_17936 = state_17771;
(statearr_17776_17936[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17771);

return cljs.core.cst$kw$recur;
} else {
throw e17775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__17937 = state_17771;
state_17771 = G__17937;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = function(state_17771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1.call(this,state_17771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___17935,res,vec__17764,v,p,job,jobs,results))
})();
var state__15733__auto__ = (function (){var statearr_17777 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_17777[(6)] = c__15731__auto___17935);

return statearr_17777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___17935,res,vec__17764,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17778){
var vec__17779 = p__17778;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17779,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17779,(1),null);
var job = vec__17779;
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
var n__4408__auto___17938 = n;
var __17939 = (0);
while(true){
if((__17939 < n__4408__auto___17938)){
var G__17782_17940 = type;
var G__17782_17941__$1 = (((G__17782_17940 instanceof cljs.core.Keyword))?G__17782_17940.fqn:null);
switch (G__17782_17941__$1) {
case "compute":
var c__15731__auto___17943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17939,c__15731__auto___17943,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (__17939,c__15731__auto___17943,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async){
return (function (state_17795){
var state_val_17796 = (state_17795[(1)]);
if((state_val_17796 === (1))){
var state_17795__$1 = state_17795;
var statearr_17797_17944 = state_17795__$1;
(statearr_17797_17944[(2)] = null);

(statearr_17797_17944[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17796 === (2))){
var state_17795__$1 = state_17795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17795__$1,(4),jobs);
} else {
if((state_val_17796 === (3))){
var inst_17793 = (state_17795[(2)]);
var state_17795__$1 = state_17795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17795__$1,inst_17793);
} else {
if((state_val_17796 === (4))){
var inst_17785 = (state_17795[(2)]);
var inst_17786 = process(inst_17785);
var state_17795__$1 = state_17795;
if(cljs.core.truth_(inst_17786)){
var statearr_17798_17945 = state_17795__$1;
(statearr_17798_17945[(1)] = (5));

} else {
var statearr_17799_17946 = state_17795__$1;
(statearr_17799_17946[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17796 === (5))){
var state_17795__$1 = state_17795;
var statearr_17800_17947 = state_17795__$1;
(statearr_17800_17947[(2)] = null);

(statearr_17800_17947[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17796 === (6))){
var state_17795__$1 = state_17795;
var statearr_17801_17948 = state_17795__$1;
(statearr_17801_17948[(2)] = null);

(statearr_17801_17948[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17796 === (7))){
var inst_17791 = (state_17795[(2)]);
var state_17795__$1 = state_17795;
var statearr_17802_17949 = state_17795__$1;
(statearr_17802_17949[(2)] = inst_17791);

(statearr_17802_17949[(1)] = (3));


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
});})(__17939,c__15731__auto___17943,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async))
;
return ((function (__17939,switch__15548__auto__,c__15731__auto___17943,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0 = (function (){
var statearr_17803 = [null,null,null,null,null,null,null];
(statearr_17803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__);

(statearr_17803[(1)] = (1));

return statearr_17803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1 = (function (state_17795){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_17795);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e17804){if((e17804 instanceof Object)){
var ex__15552__auto__ = e17804;
var statearr_17805_17950 = state_17795;
(statearr_17805_17950[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17795);

return cljs.core.cst$kw$recur;
} else {
throw e17804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__17951 = state_17795;
state_17795 = G__17951;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = function(state_17795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1.call(this,state_17795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__;
})()
;})(__17939,switch__15548__auto__,c__15731__auto___17943,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async))
})();
var state__15733__auto__ = (function (){var statearr_17806 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_17806[(6)] = c__15731__auto___17943);

return statearr_17806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(__17939,c__15731__auto___17943,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async))
);


break;
case "async":
var c__15731__auto___17952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17939,c__15731__auto___17952,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (__17939,c__15731__auto___17952,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async){
return (function (state_17819){
var state_val_17820 = (state_17819[(1)]);
if((state_val_17820 === (1))){
var state_17819__$1 = state_17819;
var statearr_17821_17953 = state_17819__$1;
(statearr_17821_17953[(2)] = null);

(statearr_17821_17953[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (2))){
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17819__$1,(4),jobs);
} else {
if((state_val_17820 === (3))){
var inst_17817 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17819__$1,inst_17817);
} else {
if((state_val_17820 === (4))){
var inst_17809 = (state_17819[(2)]);
var inst_17810 = async(inst_17809);
var state_17819__$1 = state_17819;
if(cljs.core.truth_(inst_17810)){
var statearr_17822_17954 = state_17819__$1;
(statearr_17822_17954[(1)] = (5));

} else {
var statearr_17823_17955 = state_17819__$1;
(statearr_17823_17955[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (5))){
var state_17819__$1 = state_17819;
var statearr_17824_17956 = state_17819__$1;
(statearr_17824_17956[(2)] = null);

(statearr_17824_17956[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (6))){
var state_17819__$1 = state_17819;
var statearr_17825_17957 = state_17819__$1;
(statearr_17825_17957[(2)] = null);

(statearr_17825_17957[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (7))){
var inst_17815 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17826_17958 = state_17819__$1;
(statearr_17826_17958[(2)] = inst_17815);

(statearr_17826_17958[(1)] = (3));


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
});})(__17939,c__15731__auto___17952,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async))
;
return ((function (__17939,switch__15548__auto__,c__15731__auto___17952,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0 = (function (){
var statearr_17827 = [null,null,null,null,null,null,null];
(statearr_17827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__);

(statearr_17827[(1)] = (1));

return statearr_17827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1 = (function (state_17819){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_17819);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e17828){if((e17828 instanceof Object)){
var ex__15552__auto__ = e17828;
var statearr_17829_17959 = state_17819;
(statearr_17829_17959[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17819);

return cljs.core.cst$kw$recur;
} else {
throw e17828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__17960 = state_17819;
state_17819 = G__17960;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = function(state_17819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1.call(this,state_17819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__;
})()
;})(__17939,switch__15548__auto__,c__15731__auto___17952,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async))
})();
var state__15733__auto__ = (function (){var statearr_17830 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_17830[(6)] = c__15731__auto___17952);

return statearr_17830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(__17939,c__15731__auto___17952,G__17782_17940,G__17782_17941__$1,n__4408__auto___17938,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17782_17941__$1)].join('')));

}

var G__17961 = (__17939 + (1));
__17939 = G__17961;
continue;
} else {
}
break;
}

var c__15731__auto___17962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___17962,jobs,results,process,async){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___17962,jobs,results,process,async){
return (function (state_17852){
var state_val_17853 = (state_17852[(1)]);
if((state_val_17853 === (1))){
var state_17852__$1 = state_17852;
var statearr_17854_17963 = state_17852__$1;
(statearr_17854_17963[(2)] = null);

(statearr_17854_17963[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17853 === (2))){
var state_17852__$1 = state_17852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17852__$1,(4),from);
} else {
if((state_val_17853 === (3))){
var inst_17850 = (state_17852[(2)]);
var state_17852__$1 = state_17852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17852__$1,inst_17850);
} else {
if((state_val_17853 === (4))){
var inst_17833 = (state_17852[(7)]);
var inst_17833__$1 = (state_17852[(2)]);
var inst_17834 = (inst_17833__$1 == null);
var state_17852__$1 = (function (){var statearr_17855 = state_17852;
(statearr_17855[(7)] = inst_17833__$1);

return statearr_17855;
})();
if(cljs.core.truth_(inst_17834)){
var statearr_17856_17964 = state_17852__$1;
(statearr_17856_17964[(1)] = (5));

} else {
var statearr_17857_17965 = state_17852__$1;
(statearr_17857_17965[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17853 === (5))){
var inst_17836 = cljs.core.async.close_BANG_(jobs);
var state_17852__$1 = state_17852;
var statearr_17858_17966 = state_17852__$1;
(statearr_17858_17966[(2)] = inst_17836);

(statearr_17858_17966[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17853 === (6))){
var inst_17833 = (state_17852[(7)]);
var inst_17838 = (state_17852[(8)]);
var inst_17838__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17839 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17840 = [inst_17833,inst_17838__$1];
var inst_17841 = (new cljs.core.PersistentVector(null,2,(5),inst_17839,inst_17840,null));
var state_17852__$1 = (function (){var statearr_17859 = state_17852;
(statearr_17859[(8)] = inst_17838__$1);

return statearr_17859;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17852__$1,(8),jobs,inst_17841);
} else {
if((state_val_17853 === (7))){
var inst_17848 = (state_17852[(2)]);
var state_17852__$1 = state_17852;
var statearr_17860_17967 = state_17852__$1;
(statearr_17860_17967[(2)] = inst_17848);

(statearr_17860_17967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17853 === (8))){
var inst_17838 = (state_17852[(8)]);
var inst_17843 = (state_17852[(2)]);
var state_17852__$1 = (function (){var statearr_17861 = state_17852;
(statearr_17861[(9)] = inst_17843);

return statearr_17861;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17852__$1,(9),results,inst_17838);
} else {
if((state_val_17853 === (9))){
var inst_17845 = (state_17852[(2)]);
var state_17852__$1 = (function (){var statearr_17862 = state_17852;
(statearr_17862[(10)] = inst_17845);

return statearr_17862;
})();
var statearr_17863_17968 = state_17852__$1;
(statearr_17863_17968[(2)] = null);

(statearr_17863_17968[(1)] = (2));


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
});})(c__15731__auto___17962,jobs,results,process,async))
;
return ((function (switch__15548__auto__,c__15731__auto___17962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0 = (function (){
var statearr_17864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__);

(statearr_17864[(1)] = (1));

return statearr_17864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1 = (function (state_17852){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_17852);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e17865){if((e17865 instanceof Object)){
var ex__15552__auto__ = e17865;
var statearr_17866_17969 = state_17852;
(statearr_17866_17969[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17852);

return cljs.core.cst$kw$recur;
} else {
throw e17865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__17970 = state_17852;
state_17852 = G__17970;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = function(state_17852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1.call(this,state_17852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___17962,jobs,results,process,async))
})();
var state__15733__auto__ = (function (){var statearr_17867 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_17867[(6)] = c__15731__auto___17962);

return statearr_17867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___17962,jobs,results,process,async))
);


var c__15731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto__,jobs,results,process,async){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto__,jobs,results,process,async){
return (function (state_17905){
var state_val_17906 = (state_17905[(1)]);
if((state_val_17906 === (7))){
var inst_17901 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17907_17971 = state_17905__$1;
(statearr_17907_17971[(2)] = inst_17901);

(statearr_17907_17971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (20))){
var state_17905__$1 = state_17905;
var statearr_17908_17972 = state_17905__$1;
(statearr_17908_17972[(2)] = null);

(statearr_17908_17972[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (1))){
var state_17905__$1 = state_17905;
var statearr_17909_17973 = state_17905__$1;
(statearr_17909_17973[(2)] = null);

(statearr_17909_17973[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (4))){
var inst_17870 = (state_17905[(7)]);
var inst_17870__$1 = (state_17905[(2)]);
var inst_17871 = (inst_17870__$1 == null);
var state_17905__$1 = (function (){var statearr_17910 = state_17905;
(statearr_17910[(7)] = inst_17870__$1);

return statearr_17910;
})();
if(cljs.core.truth_(inst_17871)){
var statearr_17911_17974 = state_17905__$1;
(statearr_17911_17974[(1)] = (5));

} else {
var statearr_17912_17975 = state_17905__$1;
(statearr_17912_17975[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (15))){
var inst_17883 = (state_17905[(8)]);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17905__$1,(18),to,inst_17883);
} else {
if((state_val_17906 === (21))){
var inst_17896 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17913_17976 = state_17905__$1;
(statearr_17913_17976[(2)] = inst_17896);

(statearr_17913_17976[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (13))){
var inst_17898 = (state_17905[(2)]);
var state_17905__$1 = (function (){var statearr_17914 = state_17905;
(statearr_17914[(9)] = inst_17898);

return statearr_17914;
})();
var statearr_17915_17977 = state_17905__$1;
(statearr_17915_17977[(2)] = null);

(statearr_17915_17977[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (6))){
var inst_17870 = (state_17905[(7)]);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17905__$1,(11),inst_17870);
} else {
if((state_val_17906 === (17))){
var inst_17891 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
if(cljs.core.truth_(inst_17891)){
var statearr_17916_17978 = state_17905__$1;
(statearr_17916_17978[(1)] = (19));

} else {
var statearr_17917_17979 = state_17905__$1;
(statearr_17917_17979[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (3))){
var inst_17903 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17905__$1,inst_17903);
} else {
if((state_val_17906 === (12))){
var inst_17880 = (state_17905[(10)]);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17905__$1,(14),inst_17880);
} else {
if((state_val_17906 === (2))){
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17905__$1,(4),results);
} else {
if((state_val_17906 === (19))){
var state_17905__$1 = state_17905;
var statearr_17918_17980 = state_17905__$1;
(statearr_17918_17980[(2)] = null);

(statearr_17918_17980[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (11))){
var inst_17880 = (state_17905[(2)]);
var state_17905__$1 = (function (){var statearr_17919 = state_17905;
(statearr_17919[(10)] = inst_17880);

return statearr_17919;
})();
var statearr_17920_17981 = state_17905__$1;
(statearr_17920_17981[(2)] = null);

(statearr_17920_17981[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (9))){
var state_17905__$1 = state_17905;
var statearr_17921_17982 = state_17905__$1;
(statearr_17921_17982[(2)] = null);

(statearr_17921_17982[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (5))){
var state_17905__$1 = state_17905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17922_17983 = state_17905__$1;
(statearr_17922_17983[(1)] = (8));

} else {
var statearr_17923_17984 = state_17905__$1;
(statearr_17923_17984[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (14))){
var inst_17885 = (state_17905[(11)]);
var inst_17883 = (state_17905[(8)]);
var inst_17883__$1 = (state_17905[(2)]);
var inst_17884 = (inst_17883__$1 == null);
var inst_17885__$1 = cljs.core.not(inst_17884);
var state_17905__$1 = (function (){var statearr_17924 = state_17905;
(statearr_17924[(11)] = inst_17885__$1);

(statearr_17924[(8)] = inst_17883__$1);

return statearr_17924;
})();
if(inst_17885__$1){
var statearr_17925_17985 = state_17905__$1;
(statearr_17925_17985[(1)] = (15));

} else {
var statearr_17926_17986 = state_17905__$1;
(statearr_17926_17986[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (16))){
var inst_17885 = (state_17905[(11)]);
var state_17905__$1 = state_17905;
var statearr_17927_17987 = state_17905__$1;
(statearr_17927_17987[(2)] = inst_17885);

(statearr_17927_17987[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (10))){
var inst_17877 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17928_17988 = state_17905__$1;
(statearr_17928_17988[(2)] = inst_17877);

(statearr_17928_17988[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (18))){
var inst_17888 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17929_17989 = state_17905__$1;
(statearr_17929_17989[(2)] = inst_17888);

(statearr_17929_17989[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17906 === (8))){
var inst_17874 = cljs.core.async.close_BANG_(to);
var state_17905__$1 = state_17905;
var statearr_17930_17990 = state_17905__$1;
(statearr_17930_17990[(2)] = inst_17874);

(statearr_17930_17990[(1)] = (10));


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
});})(c__15731__auto__,jobs,results,process,async))
;
return ((function (switch__15548__auto__,c__15731__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0 = (function (){
var statearr_17931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__);

(statearr_17931[(1)] = (1));

return statearr_17931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1 = (function (state_17905){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_17905);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e17932){if((e17932 instanceof Object)){
var ex__15552__auto__ = e17932;
var statearr_17933_17991 = state_17905;
(statearr_17933_17991[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17905);

return cljs.core.cst$kw$recur;
} else {
throw e17932;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__17992 = state_17905;
state_17905 = G__17992;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__ = function(state_17905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1.call(this,state_17905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto__,jobs,results,process,async))
})();
var state__15733__auto__ = (function (){var statearr_17934 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_17934[(6)] = c__15731__auto__);

return statearr_17934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto__,jobs,results,process,async))
);

return c__15731__auto__;
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
var G__17994 = arguments.length;
switch (G__17994) {
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
var G__17997 = arguments.length;
switch (G__17997) {
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
var G__18000 = arguments.length;
switch (G__18000) {
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
var c__15731__auto___18049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___18049,tc,fc){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___18049,tc,fc){
return (function (state_18026){
var state_val_18027 = (state_18026[(1)]);
if((state_val_18027 === (7))){
var inst_18022 = (state_18026[(2)]);
var state_18026__$1 = state_18026;
var statearr_18028_18050 = state_18026__$1;
(statearr_18028_18050[(2)] = inst_18022);

(statearr_18028_18050[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (1))){
var state_18026__$1 = state_18026;
var statearr_18029_18051 = state_18026__$1;
(statearr_18029_18051[(2)] = null);

(statearr_18029_18051[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (4))){
var inst_18003 = (state_18026[(7)]);
var inst_18003__$1 = (state_18026[(2)]);
var inst_18004 = (inst_18003__$1 == null);
var state_18026__$1 = (function (){var statearr_18030 = state_18026;
(statearr_18030[(7)] = inst_18003__$1);

return statearr_18030;
})();
if(cljs.core.truth_(inst_18004)){
var statearr_18031_18052 = state_18026__$1;
(statearr_18031_18052[(1)] = (5));

} else {
var statearr_18032_18053 = state_18026__$1;
(statearr_18032_18053[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (13))){
var state_18026__$1 = state_18026;
var statearr_18033_18054 = state_18026__$1;
(statearr_18033_18054[(2)] = null);

(statearr_18033_18054[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (6))){
var inst_18003 = (state_18026[(7)]);
var inst_18009 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18003) : p.call(null,inst_18003));
var state_18026__$1 = state_18026;
if(cljs.core.truth_(inst_18009)){
var statearr_18034_18055 = state_18026__$1;
(statearr_18034_18055[(1)] = (9));

} else {
var statearr_18035_18056 = state_18026__$1;
(statearr_18035_18056[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (3))){
var inst_18024 = (state_18026[(2)]);
var state_18026__$1 = state_18026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18026__$1,inst_18024);
} else {
if((state_val_18027 === (12))){
var state_18026__$1 = state_18026;
var statearr_18036_18057 = state_18026__$1;
(statearr_18036_18057[(2)] = null);

(statearr_18036_18057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (2))){
var state_18026__$1 = state_18026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18026__$1,(4),ch);
} else {
if((state_val_18027 === (11))){
var inst_18003 = (state_18026[(7)]);
var inst_18013 = (state_18026[(2)]);
var state_18026__$1 = state_18026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18026__$1,(8),inst_18013,inst_18003);
} else {
if((state_val_18027 === (9))){
var state_18026__$1 = state_18026;
var statearr_18037_18058 = state_18026__$1;
(statearr_18037_18058[(2)] = tc);

(statearr_18037_18058[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (5))){
var inst_18006 = cljs.core.async.close_BANG_(tc);
var inst_18007 = cljs.core.async.close_BANG_(fc);
var state_18026__$1 = (function (){var statearr_18038 = state_18026;
(statearr_18038[(8)] = inst_18006);

return statearr_18038;
})();
var statearr_18039_18059 = state_18026__$1;
(statearr_18039_18059[(2)] = inst_18007);

(statearr_18039_18059[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (14))){
var inst_18020 = (state_18026[(2)]);
var state_18026__$1 = state_18026;
var statearr_18040_18060 = state_18026__$1;
(statearr_18040_18060[(2)] = inst_18020);

(statearr_18040_18060[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (10))){
var state_18026__$1 = state_18026;
var statearr_18041_18061 = state_18026__$1;
(statearr_18041_18061[(2)] = fc);

(statearr_18041_18061[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18027 === (8))){
var inst_18015 = (state_18026[(2)]);
var state_18026__$1 = state_18026;
if(cljs.core.truth_(inst_18015)){
var statearr_18042_18062 = state_18026__$1;
(statearr_18042_18062[(1)] = (12));

} else {
var statearr_18043_18063 = state_18026__$1;
(statearr_18043_18063[(1)] = (13));

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
});})(c__15731__auto___18049,tc,fc))
;
return ((function (switch__15548__auto__,c__15731__auto___18049,tc,fc){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_18044 = [null,null,null,null,null,null,null,null,null];
(statearr_18044[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_18044[(1)] = (1));

return statearr_18044;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_18026){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_18026);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e18045){if((e18045 instanceof Object)){
var ex__15552__auto__ = e18045;
var statearr_18046_18064 = state_18026;
(statearr_18046_18064[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18026);

return cljs.core.cst$kw$recur;
} else {
throw e18045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__18065 = state_18026;
state_18026 = G__18065;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_18026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_18026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___18049,tc,fc))
})();
var state__15733__auto__ = (function (){var statearr_18047 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_18047[(6)] = c__15731__auto___18049);

return statearr_18047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___18049,tc,fc))
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
var c__15731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto__){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto__){
return (function (state_18086){
var state_val_18087 = (state_18086[(1)]);
if((state_val_18087 === (7))){
var inst_18082 = (state_18086[(2)]);
var state_18086__$1 = state_18086;
var statearr_18088_18106 = state_18086__$1;
(statearr_18088_18106[(2)] = inst_18082);

(statearr_18088_18106[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18087 === (1))){
var inst_18066 = init;
var state_18086__$1 = (function (){var statearr_18089 = state_18086;
(statearr_18089[(7)] = inst_18066);

return statearr_18089;
})();
var statearr_18090_18107 = state_18086__$1;
(statearr_18090_18107[(2)] = null);

(statearr_18090_18107[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18087 === (4))){
var inst_18069 = (state_18086[(8)]);
var inst_18069__$1 = (state_18086[(2)]);
var inst_18070 = (inst_18069__$1 == null);
var state_18086__$1 = (function (){var statearr_18091 = state_18086;
(statearr_18091[(8)] = inst_18069__$1);

return statearr_18091;
})();
if(cljs.core.truth_(inst_18070)){
var statearr_18092_18108 = state_18086__$1;
(statearr_18092_18108[(1)] = (5));

} else {
var statearr_18093_18109 = state_18086__$1;
(statearr_18093_18109[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18087 === (6))){
var inst_18066 = (state_18086[(7)]);
var inst_18069 = (state_18086[(8)]);
var inst_18073 = (state_18086[(9)]);
var inst_18073__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18066,inst_18069) : f.call(null,inst_18066,inst_18069));
var inst_18074 = cljs.core.reduced_QMARK_(inst_18073__$1);
var state_18086__$1 = (function (){var statearr_18094 = state_18086;
(statearr_18094[(9)] = inst_18073__$1);

return statearr_18094;
})();
if(inst_18074){
var statearr_18095_18110 = state_18086__$1;
(statearr_18095_18110[(1)] = (8));

} else {
var statearr_18096_18111 = state_18086__$1;
(statearr_18096_18111[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18087 === (3))){
var inst_18084 = (state_18086[(2)]);
var state_18086__$1 = state_18086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18086__$1,inst_18084);
} else {
if((state_val_18087 === (2))){
var state_18086__$1 = state_18086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18086__$1,(4),ch);
} else {
if((state_val_18087 === (9))){
var inst_18073 = (state_18086[(9)]);
var inst_18066 = inst_18073;
var state_18086__$1 = (function (){var statearr_18097 = state_18086;
(statearr_18097[(7)] = inst_18066);

return statearr_18097;
})();
var statearr_18098_18112 = state_18086__$1;
(statearr_18098_18112[(2)] = null);

(statearr_18098_18112[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18087 === (5))){
var inst_18066 = (state_18086[(7)]);
var state_18086__$1 = state_18086;
var statearr_18099_18113 = state_18086__$1;
(statearr_18099_18113[(2)] = inst_18066);

(statearr_18099_18113[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18087 === (10))){
var inst_18080 = (state_18086[(2)]);
var state_18086__$1 = state_18086;
var statearr_18100_18114 = state_18086__$1;
(statearr_18100_18114[(2)] = inst_18080);

(statearr_18100_18114[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18087 === (8))){
var inst_18073 = (state_18086[(9)]);
var inst_18076 = cljs.core.deref(inst_18073);
var state_18086__$1 = state_18086;
var statearr_18101_18115 = state_18086__$1;
(statearr_18101_18115[(2)] = inst_18076);

(statearr_18101_18115[(1)] = (10));


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
});})(c__15731__auto__))
;
return ((function (switch__15548__auto__,c__15731__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15549__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15549__auto____0 = (function (){
var statearr_18102 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18102[(0)] = cljs$core$async$reduce_$_state_machine__15549__auto__);

(statearr_18102[(1)] = (1));

return statearr_18102;
});
var cljs$core$async$reduce_$_state_machine__15549__auto____1 = (function (state_18086){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_18086);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e18103){if((e18103 instanceof Object)){
var ex__15552__auto__ = e18103;
var statearr_18104_18116 = state_18086;
(statearr_18104_18116[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18086);

return cljs.core.cst$kw$recur;
} else {
throw e18103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__18117 = state_18086;
state_18086 = G__18117;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15549__auto__ = function(state_18086){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15549__auto____1.call(this,state_18086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15549__auto____0;
cljs$core$async$reduce_$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15549__auto____1;
return cljs$core$async$reduce_$_state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto__))
})();
var state__15733__auto__ = (function (){var statearr_18105 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_18105[(6)] = c__15731__auto__);

return statearr_18105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto__))
);

return c__15731__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto__,f__$1){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto__,f__$1){
return (function (state_18123){
var state_val_18124 = (state_18123[(1)]);
if((state_val_18124 === (1))){
var inst_18118 = cljs.core.async.reduce(f__$1,init,ch);
var state_18123__$1 = state_18123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18123__$1,(2),inst_18118);
} else {
if((state_val_18124 === (2))){
var inst_18120 = (state_18123[(2)]);
var inst_18121 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18120) : f__$1.call(null,inst_18120));
var state_18123__$1 = state_18123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18123__$1,inst_18121);
} else {
return null;
}
}
});})(c__15731__auto__,f__$1))
;
return ((function (switch__15548__auto__,c__15731__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15549__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15549__auto____0 = (function (){
var statearr_18125 = [null,null,null,null,null,null,null];
(statearr_18125[(0)] = cljs$core$async$transduce_$_state_machine__15549__auto__);

(statearr_18125[(1)] = (1));

return statearr_18125;
});
var cljs$core$async$transduce_$_state_machine__15549__auto____1 = (function (state_18123){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_18123);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e18126){if((e18126 instanceof Object)){
var ex__15552__auto__ = e18126;
var statearr_18127_18129 = state_18123;
(statearr_18127_18129[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18123);

return cljs.core.cst$kw$recur;
} else {
throw e18126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__18130 = state_18123;
state_18123 = G__18130;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15549__auto__ = function(state_18123){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15549__auto____1.call(this,state_18123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15549__auto____0;
cljs$core$async$transduce_$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15549__auto____1;
return cljs$core$async$transduce_$_state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto__,f__$1))
})();
var state__15733__auto__ = (function (){var statearr_18128 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_18128[(6)] = c__15731__auto__);

return statearr_18128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto__,f__$1))
);

return c__15731__auto__;
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
var G__18132 = arguments.length;
switch (G__18132) {
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
var c__15731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto__){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto__){
return (function (state_18157){
var state_val_18158 = (state_18157[(1)]);
if((state_val_18158 === (7))){
var inst_18139 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
var statearr_18159_18180 = state_18157__$1;
(statearr_18159_18180[(2)] = inst_18139);

(statearr_18159_18180[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (1))){
var inst_18133 = cljs.core.seq(coll);
var inst_18134 = inst_18133;
var state_18157__$1 = (function (){var statearr_18160 = state_18157;
(statearr_18160[(7)] = inst_18134);

return statearr_18160;
})();
var statearr_18161_18181 = state_18157__$1;
(statearr_18161_18181[(2)] = null);

(statearr_18161_18181[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (4))){
var inst_18134 = (state_18157[(7)]);
var inst_18137 = cljs.core.first(inst_18134);
var state_18157__$1 = state_18157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18157__$1,(7),ch,inst_18137);
} else {
if((state_val_18158 === (13))){
var inst_18151 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
var statearr_18162_18182 = state_18157__$1;
(statearr_18162_18182[(2)] = inst_18151);

(statearr_18162_18182[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (6))){
var inst_18142 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
if(cljs.core.truth_(inst_18142)){
var statearr_18163_18183 = state_18157__$1;
(statearr_18163_18183[(1)] = (8));

} else {
var statearr_18164_18184 = state_18157__$1;
(statearr_18164_18184[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (3))){
var inst_18155 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18157__$1,inst_18155);
} else {
if((state_val_18158 === (12))){
var state_18157__$1 = state_18157;
var statearr_18165_18185 = state_18157__$1;
(statearr_18165_18185[(2)] = null);

(statearr_18165_18185[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (2))){
var inst_18134 = (state_18157[(7)]);
var state_18157__$1 = state_18157;
if(cljs.core.truth_(inst_18134)){
var statearr_18166_18186 = state_18157__$1;
(statearr_18166_18186[(1)] = (4));

} else {
var statearr_18167_18187 = state_18157__$1;
(statearr_18167_18187[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (11))){
var inst_18148 = cljs.core.async.close_BANG_(ch);
var state_18157__$1 = state_18157;
var statearr_18168_18188 = state_18157__$1;
(statearr_18168_18188[(2)] = inst_18148);

(statearr_18168_18188[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (9))){
var state_18157__$1 = state_18157;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18169_18189 = state_18157__$1;
(statearr_18169_18189[(1)] = (11));

} else {
var statearr_18170_18190 = state_18157__$1;
(statearr_18170_18190[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (5))){
var inst_18134 = (state_18157[(7)]);
var state_18157__$1 = state_18157;
var statearr_18171_18191 = state_18157__$1;
(statearr_18171_18191[(2)] = inst_18134);

(statearr_18171_18191[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (10))){
var inst_18153 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
var statearr_18172_18192 = state_18157__$1;
(statearr_18172_18192[(2)] = inst_18153);

(statearr_18172_18192[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (8))){
var inst_18134 = (state_18157[(7)]);
var inst_18144 = cljs.core.next(inst_18134);
var inst_18134__$1 = inst_18144;
var state_18157__$1 = (function (){var statearr_18173 = state_18157;
(statearr_18173[(7)] = inst_18134__$1);

return statearr_18173;
})();
var statearr_18174_18193 = state_18157__$1;
(statearr_18174_18193[(2)] = null);

(statearr_18174_18193[(1)] = (2));


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
});})(c__15731__auto__))
;
return ((function (switch__15548__auto__,c__15731__auto__){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_18175 = [null,null,null,null,null,null,null,null];
(statearr_18175[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_18175[(1)] = (1));

return statearr_18175;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_18157){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_18157);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e18176){if((e18176 instanceof Object)){
var ex__15552__auto__ = e18176;
var statearr_18177_18194 = state_18157;
(statearr_18177_18194[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18157);

return cljs.core.cst$kw$recur;
} else {
throw e18176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__18195 = state_18157;
state_18157 = G__18195;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_18157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_18157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto__))
})();
var state__15733__auto__ = (function (){var statearr_18178 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_18178[(6)] = c__15731__auto__);

return statearr_18178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto__))
);

return c__15731__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18196 = (function (ch,cs,meta18197){
this.ch = ch;
this.cs = cs;
this.meta18197 = meta18197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18198,meta18197__$1){
var self__ = this;
var _18198__$1 = this;
return (new cljs.core.async.t_cljs$core$async18196(self__.ch,self__.cs,meta18197__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18198){
var self__ = this;
var _18198__$1 = this;
return self__.meta18197;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18197], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18196";

cljs.core.async.t_cljs$core$async18196.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18196");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18196.
 */
cljs.core.async.__GT_t_cljs$core$async18196 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18196(ch__$1,cs__$1,meta18197){
return (new cljs.core.async.t_cljs$core$async18196(ch__$1,cs__$1,meta18197));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18196(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15731__auto___18418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___18418,cs,m,dchan,dctr,done){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___18418,cs,m,dchan,dctr,done){
return (function (state_18333){
var state_val_18334 = (state_18333[(1)]);
if((state_val_18334 === (7))){
var inst_18329 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
var statearr_18335_18419 = state_18333__$1;
(statearr_18335_18419[(2)] = inst_18329);

(statearr_18335_18419[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (20))){
var inst_18232 = (state_18333[(7)]);
var inst_18244 = cljs.core.first(inst_18232);
var inst_18245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18244,(0),null);
var inst_18246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18244,(1),null);
var state_18333__$1 = (function (){var statearr_18336 = state_18333;
(statearr_18336[(8)] = inst_18245);

return statearr_18336;
})();
if(cljs.core.truth_(inst_18246)){
var statearr_18337_18420 = state_18333__$1;
(statearr_18337_18420[(1)] = (22));

} else {
var statearr_18338_18421 = state_18333__$1;
(statearr_18338_18421[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (27))){
var inst_18276 = (state_18333[(9)]);
var inst_18281 = (state_18333[(10)]);
var inst_18201 = (state_18333[(11)]);
var inst_18274 = (state_18333[(12)]);
var inst_18281__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18274,inst_18276);
var inst_18282 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18281__$1,inst_18201,done);
var state_18333__$1 = (function (){var statearr_18339 = state_18333;
(statearr_18339[(10)] = inst_18281__$1);

return statearr_18339;
})();
if(cljs.core.truth_(inst_18282)){
var statearr_18340_18422 = state_18333__$1;
(statearr_18340_18422[(1)] = (30));

} else {
var statearr_18341_18423 = state_18333__$1;
(statearr_18341_18423[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (1))){
var state_18333__$1 = state_18333;
var statearr_18342_18424 = state_18333__$1;
(statearr_18342_18424[(2)] = null);

(statearr_18342_18424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (24))){
var inst_18232 = (state_18333[(7)]);
var inst_18251 = (state_18333[(2)]);
var inst_18252 = cljs.core.next(inst_18232);
var inst_18210 = inst_18252;
var inst_18211 = null;
var inst_18212 = (0);
var inst_18213 = (0);
var state_18333__$1 = (function (){var statearr_18343 = state_18333;
(statearr_18343[(13)] = inst_18211);

(statearr_18343[(14)] = inst_18212);

(statearr_18343[(15)] = inst_18213);

(statearr_18343[(16)] = inst_18251);

(statearr_18343[(17)] = inst_18210);

return statearr_18343;
})();
var statearr_18344_18425 = state_18333__$1;
(statearr_18344_18425[(2)] = null);

(statearr_18344_18425[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (39))){
var state_18333__$1 = state_18333;
var statearr_18348_18426 = state_18333__$1;
(statearr_18348_18426[(2)] = null);

(statearr_18348_18426[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (4))){
var inst_18201 = (state_18333[(11)]);
var inst_18201__$1 = (state_18333[(2)]);
var inst_18202 = (inst_18201__$1 == null);
var state_18333__$1 = (function (){var statearr_18349 = state_18333;
(statearr_18349[(11)] = inst_18201__$1);

return statearr_18349;
})();
if(cljs.core.truth_(inst_18202)){
var statearr_18350_18427 = state_18333__$1;
(statearr_18350_18427[(1)] = (5));

} else {
var statearr_18351_18428 = state_18333__$1;
(statearr_18351_18428[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (15))){
var inst_18211 = (state_18333[(13)]);
var inst_18212 = (state_18333[(14)]);
var inst_18213 = (state_18333[(15)]);
var inst_18210 = (state_18333[(17)]);
var inst_18228 = (state_18333[(2)]);
var inst_18229 = (inst_18213 + (1));
var tmp18345 = inst_18211;
var tmp18346 = inst_18212;
var tmp18347 = inst_18210;
var inst_18210__$1 = tmp18347;
var inst_18211__$1 = tmp18345;
var inst_18212__$1 = tmp18346;
var inst_18213__$1 = inst_18229;
var state_18333__$1 = (function (){var statearr_18352 = state_18333;
(statearr_18352[(13)] = inst_18211__$1);

(statearr_18352[(14)] = inst_18212__$1);

(statearr_18352[(15)] = inst_18213__$1);

(statearr_18352[(18)] = inst_18228);

(statearr_18352[(17)] = inst_18210__$1);

return statearr_18352;
})();
var statearr_18353_18429 = state_18333__$1;
(statearr_18353_18429[(2)] = null);

(statearr_18353_18429[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (21))){
var inst_18255 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
var statearr_18357_18430 = state_18333__$1;
(statearr_18357_18430[(2)] = inst_18255);

(statearr_18357_18430[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (31))){
var inst_18281 = (state_18333[(10)]);
var inst_18285 = done(null);
var inst_18286 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18281);
var state_18333__$1 = (function (){var statearr_18358 = state_18333;
(statearr_18358[(19)] = inst_18285);

return statearr_18358;
})();
var statearr_18359_18431 = state_18333__$1;
(statearr_18359_18431[(2)] = inst_18286);

(statearr_18359_18431[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (32))){
var inst_18276 = (state_18333[(9)]);
var inst_18273 = (state_18333[(20)]);
var inst_18274 = (state_18333[(12)]);
var inst_18275 = (state_18333[(21)]);
var inst_18288 = (state_18333[(2)]);
var inst_18289 = (inst_18276 + (1));
var tmp18354 = inst_18273;
var tmp18355 = inst_18274;
var tmp18356 = inst_18275;
var inst_18273__$1 = tmp18354;
var inst_18274__$1 = tmp18355;
var inst_18275__$1 = tmp18356;
var inst_18276__$1 = inst_18289;
var state_18333__$1 = (function (){var statearr_18360 = state_18333;
(statearr_18360[(9)] = inst_18276__$1);

(statearr_18360[(20)] = inst_18273__$1);

(statearr_18360[(12)] = inst_18274__$1);

(statearr_18360[(21)] = inst_18275__$1);

(statearr_18360[(22)] = inst_18288);

return statearr_18360;
})();
var statearr_18361_18432 = state_18333__$1;
(statearr_18361_18432[(2)] = null);

(statearr_18361_18432[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (40))){
var inst_18301 = (state_18333[(23)]);
var inst_18305 = done(null);
var inst_18306 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18301);
var state_18333__$1 = (function (){var statearr_18362 = state_18333;
(statearr_18362[(24)] = inst_18305);

return statearr_18362;
})();
var statearr_18363_18433 = state_18333__$1;
(statearr_18363_18433[(2)] = inst_18306);

(statearr_18363_18433[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (33))){
var inst_18292 = (state_18333[(25)]);
var inst_18294 = cljs.core.chunked_seq_QMARK_(inst_18292);
var state_18333__$1 = state_18333;
if(inst_18294){
var statearr_18364_18434 = state_18333__$1;
(statearr_18364_18434[(1)] = (36));

} else {
var statearr_18365_18435 = state_18333__$1;
(statearr_18365_18435[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (13))){
var inst_18222 = (state_18333[(26)]);
var inst_18225 = cljs.core.async.close_BANG_(inst_18222);
var state_18333__$1 = state_18333;
var statearr_18366_18436 = state_18333__$1;
(statearr_18366_18436[(2)] = inst_18225);

(statearr_18366_18436[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (22))){
var inst_18245 = (state_18333[(8)]);
var inst_18248 = cljs.core.async.close_BANG_(inst_18245);
var state_18333__$1 = state_18333;
var statearr_18367_18437 = state_18333__$1;
(statearr_18367_18437[(2)] = inst_18248);

(statearr_18367_18437[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (36))){
var inst_18292 = (state_18333[(25)]);
var inst_18296 = cljs.core.chunk_first(inst_18292);
var inst_18297 = cljs.core.chunk_rest(inst_18292);
var inst_18298 = cljs.core.count(inst_18296);
var inst_18273 = inst_18297;
var inst_18274 = inst_18296;
var inst_18275 = inst_18298;
var inst_18276 = (0);
var state_18333__$1 = (function (){var statearr_18368 = state_18333;
(statearr_18368[(9)] = inst_18276);

(statearr_18368[(20)] = inst_18273);

(statearr_18368[(12)] = inst_18274);

(statearr_18368[(21)] = inst_18275);

return statearr_18368;
})();
var statearr_18369_18438 = state_18333__$1;
(statearr_18369_18438[(2)] = null);

(statearr_18369_18438[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (41))){
var inst_18292 = (state_18333[(25)]);
var inst_18308 = (state_18333[(2)]);
var inst_18309 = cljs.core.next(inst_18292);
var inst_18273 = inst_18309;
var inst_18274 = null;
var inst_18275 = (0);
var inst_18276 = (0);
var state_18333__$1 = (function (){var statearr_18370 = state_18333;
(statearr_18370[(9)] = inst_18276);

(statearr_18370[(27)] = inst_18308);

(statearr_18370[(20)] = inst_18273);

(statearr_18370[(12)] = inst_18274);

(statearr_18370[(21)] = inst_18275);

return statearr_18370;
})();
var statearr_18371_18439 = state_18333__$1;
(statearr_18371_18439[(2)] = null);

(statearr_18371_18439[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (43))){
var state_18333__$1 = state_18333;
var statearr_18372_18440 = state_18333__$1;
(statearr_18372_18440[(2)] = null);

(statearr_18372_18440[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (29))){
var inst_18317 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
var statearr_18373_18441 = state_18333__$1;
(statearr_18373_18441[(2)] = inst_18317);

(statearr_18373_18441[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (44))){
var inst_18326 = (state_18333[(2)]);
var state_18333__$1 = (function (){var statearr_18374 = state_18333;
(statearr_18374[(28)] = inst_18326);

return statearr_18374;
})();
var statearr_18375_18442 = state_18333__$1;
(statearr_18375_18442[(2)] = null);

(statearr_18375_18442[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (6))){
var inst_18265 = (state_18333[(29)]);
var inst_18264 = cljs.core.deref(cs);
var inst_18265__$1 = cljs.core.keys(inst_18264);
var inst_18266 = cljs.core.count(inst_18265__$1);
var inst_18267 = cljs.core.reset_BANG_(dctr,inst_18266);
var inst_18272 = cljs.core.seq(inst_18265__$1);
var inst_18273 = inst_18272;
var inst_18274 = null;
var inst_18275 = (0);
var inst_18276 = (0);
var state_18333__$1 = (function (){var statearr_18376 = state_18333;
(statearr_18376[(9)] = inst_18276);

(statearr_18376[(20)] = inst_18273);

(statearr_18376[(12)] = inst_18274);

(statearr_18376[(29)] = inst_18265__$1);

(statearr_18376[(21)] = inst_18275);

(statearr_18376[(30)] = inst_18267);

return statearr_18376;
})();
var statearr_18377_18443 = state_18333__$1;
(statearr_18377_18443[(2)] = null);

(statearr_18377_18443[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (28))){
var inst_18292 = (state_18333[(25)]);
var inst_18273 = (state_18333[(20)]);
var inst_18292__$1 = cljs.core.seq(inst_18273);
var state_18333__$1 = (function (){var statearr_18378 = state_18333;
(statearr_18378[(25)] = inst_18292__$1);

return statearr_18378;
})();
if(inst_18292__$1){
var statearr_18379_18444 = state_18333__$1;
(statearr_18379_18444[(1)] = (33));

} else {
var statearr_18380_18445 = state_18333__$1;
(statearr_18380_18445[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (25))){
var inst_18276 = (state_18333[(9)]);
var inst_18275 = (state_18333[(21)]);
var inst_18278 = (inst_18276 < inst_18275);
var inst_18279 = inst_18278;
var state_18333__$1 = state_18333;
if(cljs.core.truth_(inst_18279)){
var statearr_18381_18446 = state_18333__$1;
(statearr_18381_18446[(1)] = (27));

} else {
var statearr_18382_18447 = state_18333__$1;
(statearr_18382_18447[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (34))){
var state_18333__$1 = state_18333;
var statearr_18383_18448 = state_18333__$1;
(statearr_18383_18448[(2)] = null);

(statearr_18383_18448[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (17))){
var state_18333__$1 = state_18333;
var statearr_18384_18449 = state_18333__$1;
(statearr_18384_18449[(2)] = null);

(statearr_18384_18449[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (3))){
var inst_18331 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18333__$1,inst_18331);
} else {
if((state_val_18334 === (12))){
var inst_18260 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
var statearr_18385_18450 = state_18333__$1;
(statearr_18385_18450[(2)] = inst_18260);

(statearr_18385_18450[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (2))){
var state_18333__$1 = state_18333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18333__$1,(4),ch);
} else {
if((state_val_18334 === (23))){
var state_18333__$1 = state_18333;
var statearr_18386_18451 = state_18333__$1;
(statearr_18386_18451[(2)] = null);

(statearr_18386_18451[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (35))){
var inst_18315 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
var statearr_18387_18452 = state_18333__$1;
(statearr_18387_18452[(2)] = inst_18315);

(statearr_18387_18452[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (19))){
var inst_18232 = (state_18333[(7)]);
var inst_18236 = cljs.core.chunk_first(inst_18232);
var inst_18237 = cljs.core.chunk_rest(inst_18232);
var inst_18238 = cljs.core.count(inst_18236);
var inst_18210 = inst_18237;
var inst_18211 = inst_18236;
var inst_18212 = inst_18238;
var inst_18213 = (0);
var state_18333__$1 = (function (){var statearr_18388 = state_18333;
(statearr_18388[(13)] = inst_18211);

(statearr_18388[(14)] = inst_18212);

(statearr_18388[(15)] = inst_18213);

(statearr_18388[(17)] = inst_18210);

return statearr_18388;
})();
var statearr_18389_18453 = state_18333__$1;
(statearr_18389_18453[(2)] = null);

(statearr_18389_18453[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (11))){
var inst_18210 = (state_18333[(17)]);
var inst_18232 = (state_18333[(7)]);
var inst_18232__$1 = cljs.core.seq(inst_18210);
var state_18333__$1 = (function (){var statearr_18390 = state_18333;
(statearr_18390[(7)] = inst_18232__$1);

return statearr_18390;
})();
if(inst_18232__$1){
var statearr_18391_18454 = state_18333__$1;
(statearr_18391_18454[(1)] = (16));

} else {
var statearr_18392_18455 = state_18333__$1;
(statearr_18392_18455[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (9))){
var inst_18262 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
var statearr_18393_18456 = state_18333__$1;
(statearr_18393_18456[(2)] = inst_18262);

(statearr_18393_18456[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (5))){
var inst_18208 = cljs.core.deref(cs);
var inst_18209 = cljs.core.seq(inst_18208);
var inst_18210 = inst_18209;
var inst_18211 = null;
var inst_18212 = (0);
var inst_18213 = (0);
var state_18333__$1 = (function (){var statearr_18394 = state_18333;
(statearr_18394[(13)] = inst_18211);

(statearr_18394[(14)] = inst_18212);

(statearr_18394[(15)] = inst_18213);

(statearr_18394[(17)] = inst_18210);

return statearr_18394;
})();
var statearr_18395_18457 = state_18333__$1;
(statearr_18395_18457[(2)] = null);

(statearr_18395_18457[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (14))){
var state_18333__$1 = state_18333;
var statearr_18396_18458 = state_18333__$1;
(statearr_18396_18458[(2)] = null);

(statearr_18396_18458[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (45))){
var inst_18323 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
var statearr_18397_18459 = state_18333__$1;
(statearr_18397_18459[(2)] = inst_18323);

(statearr_18397_18459[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (26))){
var inst_18265 = (state_18333[(29)]);
var inst_18319 = (state_18333[(2)]);
var inst_18320 = cljs.core.seq(inst_18265);
var state_18333__$1 = (function (){var statearr_18398 = state_18333;
(statearr_18398[(31)] = inst_18319);

return statearr_18398;
})();
if(inst_18320){
var statearr_18399_18460 = state_18333__$1;
(statearr_18399_18460[(1)] = (42));

} else {
var statearr_18400_18461 = state_18333__$1;
(statearr_18400_18461[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (16))){
var inst_18232 = (state_18333[(7)]);
var inst_18234 = cljs.core.chunked_seq_QMARK_(inst_18232);
var state_18333__$1 = state_18333;
if(inst_18234){
var statearr_18401_18462 = state_18333__$1;
(statearr_18401_18462[(1)] = (19));

} else {
var statearr_18402_18463 = state_18333__$1;
(statearr_18402_18463[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (38))){
var inst_18312 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
var statearr_18403_18464 = state_18333__$1;
(statearr_18403_18464[(2)] = inst_18312);

(statearr_18403_18464[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (30))){
var state_18333__$1 = state_18333;
var statearr_18404_18465 = state_18333__$1;
(statearr_18404_18465[(2)] = null);

(statearr_18404_18465[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (10))){
var inst_18211 = (state_18333[(13)]);
var inst_18213 = (state_18333[(15)]);
var inst_18221 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18211,inst_18213);
var inst_18222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18221,(0),null);
var inst_18223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18221,(1),null);
var state_18333__$1 = (function (){var statearr_18405 = state_18333;
(statearr_18405[(26)] = inst_18222);

return statearr_18405;
})();
if(cljs.core.truth_(inst_18223)){
var statearr_18406_18466 = state_18333__$1;
(statearr_18406_18466[(1)] = (13));

} else {
var statearr_18407_18467 = state_18333__$1;
(statearr_18407_18467[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (18))){
var inst_18258 = (state_18333[(2)]);
var state_18333__$1 = state_18333;
var statearr_18408_18468 = state_18333__$1;
(statearr_18408_18468[(2)] = inst_18258);

(statearr_18408_18468[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (42))){
var state_18333__$1 = state_18333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18333__$1,(45),dchan);
} else {
if((state_val_18334 === (37))){
var inst_18292 = (state_18333[(25)]);
var inst_18301 = (state_18333[(23)]);
var inst_18201 = (state_18333[(11)]);
var inst_18301__$1 = cljs.core.first(inst_18292);
var inst_18302 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18301__$1,inst_18201,done);
var state_18333__$1 = (function (){var statearr_18409 = state_18333;
(statearr_18409[(23)] = inst_18301__$1);

return statearr_18409;
})();
if(cljs.core.truth_(inst_18302)){
var statearr_18410_18469 = state_18333__$1;
(statearr_18410_18469[(1)] = (39));

} else {
var statearr_18411_18470 = state_18333__$1;
(statearr_18411_18470[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18334 === (8))){
var inst_18212 = (state_18333[(14)]);
var inst_18213 = (state_18333[(15)]);
var inst_18215 = (inst_18213 < inst_18212);
var inst_18216 = inst_18215;
var state_18333__$1 = state_18333;
if(cljs.core.truth_(inst_18216)){
var statearr_18412_18471 = state_18333__$1;
(statearr_18412_18471[(1)] = (10));

} else {
var statearr_18413_18472 = state_18333__$1;
(statearr_18413_18472[(1)] = (11));

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
});})(c__15731__auto___18418,cs,m,dchan,dctr,done))
;
return ((function (switch__15548__auto__,c__15731__auto___18418,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15549__auto__ = null;
var cljs$core$async$mult_$_state_machine__15549__auto____0 = (function (){
var statearr_18414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18414[(0)] = cljs$core$async$mult_$_state_machine__15549__auto__);

(statearr_18414[(1)] = (1));

return statearr_18414;
});
var cljs$core$async$mult_$_state_machine__15549__auto____1 = (function (state_18333){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_18333);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e18415){if((e18415 instanceof Object)){
var ex__15552__auto__ = e18415;
var statearr_18416_18473 = state_18333;
(statearr_18416_18473[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18333);

return cljs.core.cst$kw$recur;
} else {
throw e18415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__18474 = state_18333;
state_18333 = G__18474;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15549__auto__ = function(state_18333){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15549__auto____1.call(this,state_18333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15549__auto____0;
cljs$core$async$mult_$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15549__auto____1;
return cljs$core$async$mult_$_state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___18418,cs,m,dchan,dctr,done))
})();
var state__15733__auto__ = (function (){var statearr_18417 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_18417[(6)] = c__15731__auto___18418);

return statearr_18417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___18418,cs,m,dchan,dctr,done))
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
var G__18476 = arguments.length;
switch (G__18476) {
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
var len__4531__auto___18488 = arguments.length;
var i__4532__auto___18489 = (0);
while(true){
if((i__4532__auto___18489 < len__4531__auto___18488)){
args__4534__auto__.push((arguments[i__4532__auto___18489]));

var G__18490 = (i__4532__auto___18489 + (1));
i__4532__auto___18489 = G__18490;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18482){
var map__18483 = p__18482;
var map__18483__$1 = ((((!((map__18483 == null)))?(((((map__18483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18483):map__18483);
var opts = map__18483__$1;
var statearr_18485_18491 = state;
(statearr_18485_18491[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18483,map__18483__$1,opts){
return (function (val){
var statearr_18486_18492 = state;
(statearr_18486_18492[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18483,map__18483__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18487_18493 = state;
(statearr_18487_18493[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18478){
var G__18479 = cljs.core.first(seq18478);
var seq18478__$1 = cljs.core.next(seq18478);
var G__18480 = cljs.core.first(seq18478__$1);
var seq18478__$2 = cljs.core.next(seq18478__$1);
var G__18481 = cljs.core.first(seq18478__$2);
var seq18478__$3 = cljs.core.next(seq18478__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18479,G__18480,G__18481,seq18478__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18494 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18495){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18495 = meta18495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18496,meta18495__$1){
var self__ = this;
var _18496__$1 = this;
return (new cljs.core.async.t_cljs$core$async18494(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18495__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18496){
var self__ = this;
var _18496__$1 = this;
return self__.meta18495;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18494.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18495], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18494";

cljs.core.async.t_cljs$core$async18494.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18494");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18494.
 */
cljs.core.async.__GT_t_cljs$core$async18494 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18494(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18495){
return (new cljs.core.async.t_cljs$core$async18494(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18495));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18494(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15731__auto___18658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___18658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___18658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18598){
var state_val_18599 = (state_18598[(1)]);
if((state_val_18599 === (7))){
var inst_18513 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
var statearr_18600_18659 = state_18598__$1;
(statearr_18600_18659[(2)] = inst_18513);

(statearr_18600_18659[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (20))){
var inst_18525 = (state_18598[(7)]);
var state_18598__$1 = state_18598;
var statearr_18601_18660 = state_18598__$1;
(statearr_18601_18660[(2)] = inst_18525);

(statearr_18601_18660[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (27))){
var state_18598__$1 = state_18598;
var statearr_18602_18661 = state_18598__$1;
(statearr_18602_18661[(2)] = null);

(statearr_18602_18661[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (1))){
var inst_18500 = (state_18598[(8)]);
var inst_18500__$1 = calc_state();
var inst_18502 = (inst_18500__$1 == null);
var inst_18503 = cljs.core.not(inst_18502);
var state_18598__$1 = (function (){var statearr_18603 = state_18598;
(statearr_18603[(8)] = inst_18500__$1);

return statearr_18603;
})();
if(inst_18503){
var statearr_18604_18662 = state_18598__$1;
(statearr_18604_18662[(1)] = (2));

} else {
var statearr_18605_18663 = state_18598__$1;
(statearr_18605_18663[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (24))){
var inst_18549 = (state_18598[(9)]);
var inst_18558 = (state_18598[(10)]);
var inst_18572 = (state_18598[(11)]);
var inst_18572__$1 = (inst_18549.cljs$core$IFn$_invoke$arity$1 ? inst_18549.cljs$core$IFn$_invoke$arity$1(inst_18558) : inst_18549.call(null,inst_18558));
var state_18598__$1 = (function (){var statearr_18606 = state_18598;
(statearr_18606[(11)] = inst_18572__$1);

return statearr_18606;
})();
if(cljs.core.truth_(inst_18572__$1)){
var statearr_18607_18664 = state_18598__$1;
(statearr_18607_18664[(1)] = (29));

} else {
var statearr_18608_18665 = state_18598__$1;
(statearr_18608_18665[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (4))){
var inst_18516 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
if(cljs.core.truth_(inst_18516)){
var statearr_18609_18666 = state_18598__$1;
(statearr_18609_18666[(1)] = (8));

} else {
var statearr_18610_18667 = state_18598__$1;
(statearr_18610_18667[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (15))){
var inst_18543 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
if(cljs.core.truth_(inst_18543)){
var statearr_18611_18668 = state_18598__$1;
(statearr_18611_18668[(1)] = (19));

} else {
var statearr_18612_18669 = state_18598__$1;
(statearr_18612_18669[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (21))){
var inst_18548 = (state_18598[(12)]);
var inst_18548__$1 = (state_18598[(2)]);
var inst_18549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18548__$1,cljs.core.cst$kw$solos);
var inst_18550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18548__$1,cljs.core.cst$kw$mutes);
var inst_18551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18548__$1,cljs.core.cst$kw$reads);
var state_18598__$1 = (function (){var statearr_18613 = state_18598;
(statearr_18613[(9)] = inst_18549);

(statearr_18613[(13)] = inst_18550);

(statearr_18613[(12)] = inst_18548__$1);

return statearr_18613;
})();
return cljs.core.async.ioc_alts_BANG_(state_18598__$1,(22),inst_18551);
} else {
if((state_val_18599 === (31))){
var inst_18580 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
if(cljs.core.truth_(inst_18580)){
var statearr_18614_18670 = state_18598__$1;
(statearr_18614_18670[(1)] = (32));

} else {
var statearr_18615_18671 = state_18598__$1;
(statearr_18615_18671[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (32))){
var inst_18557 = (state_18598[(14)]);
var state_18598__$1 = state_18598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18598__$1,(35),out,inst_18557);
} else {
if((state_val_18599 === (33))){
var inst_18548 = (state_18598[(12)]);
var inst_18525 = inst_18548;
var state_18598__$1 = (function (){var statearr_18616 = state_18598;
(statearr_18616[(7)] = inst_18525);

return statearr_18616;
})();
var statearr_18617_18672 = state_18598__$1;
(statearr_18617_18672[(2)] = null);

(statearr_18617_18672[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (13))){
var inst_18525 = (state_18598[(7)]);
var inst_18532 = inst_18525.cljs$lang$protocol_mask$partition0$;
var inst_18533 = (inst_18532 & (64));
var inst_18534 = inst_18525.cljs$core$ISeq$;
var inst_18535 = (cljs.core.PROTOCOL_SENTINEL === inst_18534);
var inst_18536 = ((inst_18533) || (inst_18535));
var state_18598__$1 = state_18598;
if(cljs.core.truth_(inst_18536)){
var statearr_18618_18673 = state_18598__$1;
(statearr_18618_18673[(1)] = (16));

} else {
var statearr_18619_18674 = state_18598__$1;
(statearr_18619_18674[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (22))){
var inst_18557 = (state_18598[(14)]);
var inst_18558 = (state_18598[(10)]);
var inst_18556 = (state_18598[(2)]);
var inst_18557__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18556,(0),null);
var inst_18558__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18556,(1),null);
var inst_18559 = (inst_18557__$1 == null);
var inst_18560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18558__$1,change);
var inst_18561 = ((inst_18559) || (inst_18560));
var state_18598__$1 = (function (){var statearr_18620 = state_18598;
(statearr_18620[(14)] = inst_18557__$1);

(statearr_18620[(10)] = inst_18558__$1);

return statearr_18620;
})();
if(cljs.core.truth_(inst_18561)){
var statearr_18621_18675 = state_18598__$1;
(statearr_18621_18675[(1)] = (23));

} else {
var statearr_18622_18676 = state_18598__$1;
(statearr_18622_18676[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (36))){
var inst_18548 = (state_18598[(12)]);
var inst_18525 = inst_18548;
var state_18598__$1 = (function (){var statearr_18623 = state_18598;
(statearr_18623[(7)] = inst_18525);

return statearr_18623;
})();
var statearr_18624_18677 = state_18598__$1;
(statearr_18624_18677[(2)] = null);

(statearr_18624_18677[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (29))){
var inst_18572 = (state_18598[(11)]);
var state_18598__$1 = state_18598;
var statearr_18625_18678 = state_18598__$1;
(statearr_18625_18678[(2)] = inst_18572);

(statearr_18625_18678[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (6))){
var state_18598__$1 = state_18598;
var statearr_18626_18679 = state_18598__$1;
(statearr_18626_18679[(2)] = false);

(statearr_18626_18679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (28))){
var inst_18568 = (state_18598[(2)]);
var inst_18569 = calc_state();
var inst_18525 = inst_18569;
var state_18598__$1 = (function (){var statearr_18627 = state_18598;
(statearr_18627[(7)] = inst_18525);

(statearr_18627[(15)] = inst_18568);

return statearr_18627;
})();
var statearr_18628_18680 = state_18598__$1;
(statearr_18628_18680[(2)] = null);

(statearr_18628_18680[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (25))){
var inst_18594 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
var statearr_18629_18681 = state_18598__$1;
(statearr_18629_18681[(2)] = inst_18594);

(statearr_18629_18681[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (34))){
var inst_18592 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
var statearr_18630_18682 = state_18598__$1;
(statearr_18630_18682[(2)] = inst_18592);

(statearr_18630_18682[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (17))){
var state_18598__$1 = state_18598;
var statearr_18631_18683 = state_18598__$1;
(statearr_18631_18683[(2)] = false);

(statearr_18631_18683[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (3))){
var state_18598__$1 = state_18598;
var statearr_18632_18684 = state_18598__$1;
(statearr_18632_18684[(2)] = false);

(statearr_18632_18684[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (12))){
var inst_18596 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18598__$1,inst_18596);
} else {
if((state_val_18599 === (2))){
var inst_18500 = (state_18598[(8)]);
var inst_18505 = inst_18500.cljs$lang$protocol_mask$partition0$;
var inst_18506 = (inst_18505 & (64));
var inst_18507 = inst_18500.cljs$core$ISeq$;
var inst_18508 = (cljs.core.PROTOCOL_SENTINEL === inst_18507);
var inst_18509 = ((inst_18506) || (inst_18508));
var state_18598__$1 = state_18598;
if(cljs.core.truth_(inst_18509)){
var statearr_18633_18685 = state_18598__$1;
(statearr_18633_18685[(1)] = (5));

} else {
var statearr_18634_18686 = state_18598__$1;
(statearr_18634_18686[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (23))){
var inst_18557 = (state_18598[(14)]);
var inst_18563 = (inst_18557 == null);
var state_18598__$1 = state_18598;
if(cljs.core.truth_(inst_18563)){
var statearr_18635_18687 = state_18598__$1;
(statearr_18635_18687[(1)] = (26));

} else {
var statearr_18636_18688 = state_18598__$1;
(statearr_18636_18688[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (35))){
var inst_18583 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
if(cljs.core.truth_(inst_18583)){
var statearr_18637_18689 = state_18598__$1;
(statearr_18637_18689[(1)] = (36));

} else {
var statearr_18638_18690 = state_18598__$1;
(statearr_18638_18690[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (19))){
var inst_18525 = (state_18598[(7)]);
var inst_18545 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18525);
var state_18598__$1 = state_18598;
var statearr_18639_18691 = state_18598__$1;
(statearr_18639_18691[(2)] = inst_18545);

(statearr_18639_18691[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (11))){
var inst_18525 = (state_18598[(7)]);
var inst_18529 = (inst_18525 == null);
var inst_18530 = cljs.core.not(inst_18529);
var state_18598__$1 = state_18598;
if(inst_18530){
var statearr_18640_18692 = state_18598__$1;
(statearr_18640_18692[(1)] = (13));

} else {
var statearr_18641_18693 = state_18598__$1;
(statearr_18641_18693[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (9))){
var inst_18500 = (state_18598[(8)]);
var state_18598__$1 = state_18598;
var statearr_18642_18694 = state_18598__$1;
(statearr_18642_18694[(2)] = inst_18500);

(statearr_18642_18694[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (5))){
var state_18598__$1 = state_18598;
var statearr_18643_18695 = state_18598__$1;
(statearr_18643_18695[(2)] = true);

(statearr_18643_18695[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (14))){
var state_18598__$1 = state_18598;
var statearr_18644_18696 = state_18598__$1;
(statearr_18644_18696[(2)] = false);

(statearr_18644_18696[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (26))){
var inst_18558 = (state_18598[(10)]);
var inst_18565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18558);
var state_18598__$1 = state_18598;
var statearr_18645_18697 = state_18598__$1;
(statearr_18645_18697[(2)] = inst_18565);

(statearr_18645_18697[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (16))){
var state_18598__$1 = state_18598;
var statearr_18646_18698 = state_18598__$1;
(statearr_18646_18698[(2)] = true);

(statearr_18646_18698[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (38))){
var inst_18588 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
var statearr_18647_18699 = state_18598__$1;
(statearr_18647_18699[(2)] = inst_18588);

(statearr_18647_18699[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (30))){
var inst_18549 = (state_18598[(9)]);
var inst_18550 = (state_18598[(13)]);
var inst_18558 = (state_18598[(10)]);
var inst_18575 = cljs.core.empty_QMARK_(inst_18549);
var inst_18576 = (inst_18550.cljs$core$IFn$_invoke$arity$1 ? inst_18550.cljs$core$IFn$_invoke$arity$1(inst_18558) : inst_18550.call(null,inst_18558));
var inst_18577 = cljs.core.not(inst_18576);
var inst_18578 = ((inst_18575) && (inst_18577));
var state_18598__$1 = state_18598;
var statearr_18648_18700 = state_18598__$1;
(statearr_18648_18700[(2)] = inst_18578);

(statearr_18648_18700[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (10))){
var inst_18500 = (state_18598[(8)]);
var inst_18521 = (state_18598[(2)]);
var inst_18522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18521,cljs.core.cst$kw$solos);
var inst_18523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18521,cljs.core.cst$kw$mutes);
var inst_18524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18521,cljs.core.cst$kw$reads);
var inst_18525 = inst_18500;
var state_18598__$1 = (function (){var statearr_18649 = state_18598;
(statearr_18649[(7)] = inst_18525);

(statearr_18649[(16)] = inst_18523);

(statearr_18649[(17)] = inst_18522);

(statearr_18649[(18)] = inst_18524);

return statearr_18649;
})();
var statearr_18650_18701 = state_18598__$1;
(statearr_18650_18701[(2)] = null);

(statearr_18650_18701[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (18))){
var inst_18540 = (state_18598[(2)]);
var state_18598__$1 = state_18598;
var statearr_18651_18702 = state_18598__$1;
(statearr_18651_18702[(2)] = inst_18540);

(statearr_18651_18702[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (37))){
var state_18598__$1 = state_18598;
var statearr_18652_18703 = state_18598__$1;
(statearr_18652_18703[(2)] = null);

(statearr_18652_18703[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18599 === (8))){
var inst_18500 = (state_18598[(8)]);
var inst_18518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18500);
var state_18598__$1 = state_18598;
var statearr_18653_18704 = state_18598__$1;
(statearr_18653_18704[(2)] = inst_18518);

(statearr_18653_18704[(1)] = (10));


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
});})(c__15731__auto___18658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15548__auto__,c__15731__auto___18658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15549__auto__ = null;
var cljs$core$async$mix_$_state_machine__15549__auto____0 = (function (){
var statearr_18654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18654[(0)] = cljs$core$async$mix_$_state_machine__15549__auto__);

(statearr_18654[(1)] = (1));

return statearr_18654;
});
var cljs$core$async$mix_$_state_machine__15549__auto____1 = (function (state_18598){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_18598);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e18655){if((e18655 instanceof Object)){
var ex__15552__auto__ = e18655;
var statearr_18656_18705 = state_18598;
(statearr_18656_18705[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18598);

return cljs.core.cst$kw$recur;
} else {
throw e18655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__18706 = state_18598;
state_18598 = G__18706;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15549__auto__ = function(state_18598){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15549__auto____1.call(this,state_18598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15549__auto____0;
cljs$core$async$mix_$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15549__auto____1;
return cljs$core$async$mix_$_state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___18658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15733__auto__ = (function (){var statearr_18657 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_18657[(6)] = c__15731__auto___18658);

return statearr_18657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___18658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18708 = arguments.length;
switch (G__18708) {
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
var G__18712 = arguments.length;
switch (G__18712) {
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
return (function (p1__18710_SHARP_){
if(cljs.core.truth_((p1__18710_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18710_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18710_SHARP_.call(null,topic)))){
return p1__18710_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18710_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18713 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18714){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18714 = meta18714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18715,meta18714__$1){
var self__ = this;
var _18715__$1 = this;
return (new cljs.core.async.t_cljs$core$async18713(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18714__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18715){
var self__ = this;
var _18715__$1 = this;
return self__.meta18714;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18713.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18713.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18713.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18713.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18714], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18713";

cljs.core.async.t_cljs$core$async18713.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18713");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18713.
 */
cljs.core.async.__GT_t_cljs$core$async18713 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18714){
return (new cljs.core.async.t_cljs$core$async18713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18714));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18713(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15731__auto___18833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___18833,mults,ensure_mult,p){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___18833,mults,ensure_mult,p){
return (function (state_18787){
var state_val_18788 = (state_18787[(1)]);
if((state_val_18788 === (7))){
var inst_18783 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
var statearr_18789_18834 = state_18787__$1;
(statearr_18789_18834[(2)] = inst_18783);

(statearr_18789_18834[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (20))){
var state_18787__$1 = state_18787;
var statearr_18790_18835 = state_18787__$1;
(statearr_18790_18835[(2)] = null);

(statearr_18790_18835[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (1))){
var state_18787__$1 = state_18787;
var statearr_18791_18836 = state_18787__$1;
(statearr_18791_18836[(2)] = null);

(statearr_18791_18836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (24))){
var inst_18766 = (state_18787[(7)]);
var inst_18775 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18766);
var state_18787__$1 = state_18787;
var statearr_18792_18837 = state_18787__$1;
(statearr_18792_18837[(2)] = inst_18775);

(statearr_18792_18837[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (4))){
var inst_18718 = (state_18787[(8)]);
var inst_18718__$1 = (state_18787[(2)]);
var inst_18719 = (inst_18718__$1 == null);
var state_18787__$1 = (function (){var statearr_18793 = state_18787;
(statearr_18793[(8)] = inst_18718__$1);

return statearr_18793;
})();
if(cljs.core.truth_(inst_18719)){
var statearr_18794_18838 = state_18787__$1;
(statearr_18794_18838[(1)] = (5));

} else {
var statearr_18795_18839 = state_18787__$1;
(statearr_18795_18839[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (15))){
var inst_18760 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
var statearr_18796_18840 = state_18787__$1;
(statearr_18796_18840[(2)] = inst_18760);

(statearr_18796_18840[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (21))){
var inst_18780 = (state_18787[(2)]);
var state_18787__$1 = (function (){var statearr_18797 = state_18787;
(statearr_18797[(9)] = inst_18780);

return statearr_18797;
})();
var statearr_18798_18841 = state_18787__$1;
(statearr_18798_18841[(2)] = null);

(statearr_18798_18841[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (13))){
var inst_18742 = (state_18787[(10)]);
var inst_18744 = cljs.core.chunked_seq_QMARK_(inst_18742);
var state_18787__$1 = state_18787;
if(inst_18744){
var statearr_18799_18842 = state_18787__$1;
(statearr_18799_18842[(1)] = (16));

} else {
var statearr_18800_18843 = state_18787__$1;
(statearr_18800_18843[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (22))){
var inst_18772 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
if(cljs.core.truth_(inst_18772)){
var statearr_18801_18844 = state_18787__$1;
(statearr_18801_18844[(1)] = (23));

} else {
var statearr_18802_18845 = state_18787__$1;
(statearr_18802_18845[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (6))){
var inst_18718 = (state_18787[(8)]);
var inst_18768 = (state_18787[(11)]);
var inst_18766 = (state_18787[(7)]);
var inst_18766__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18718) : topic_fn.call(null,inst_18718));
var inst_18767 = cljs.core.deref(mults);
var inst_18768__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18767,inst_18766__$1);
var state_18787__$1 = (function (){var statearr_18803 = state_18787;
(statearr_18803[(11)] = inst_18768__$1);

(statearr_18803[(7)] = inst_18766__$1);

return statearr_18803;
})();
if(cljs.core.truth_(inst_18768__$1)){
var statearr_18804_18846 = state_18787__$1;
(statearr_18804_18846[(1)] = (19));

} else {
var statearr_18805_18847 = state_18787__$1;
(statearr_18805_18847[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (25))){
var inst_18777 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
var statearr_18806_18848 = state_18787__$1;
(statearr_18806_18848[(2)] = inst_18777);

(statearr_18806_18848[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (17))){
var inst_18742 = (state_18787[(10)]);
var inst_18751 = cljs.core.first(inst_18742);
var inst_18752 = cljs.core.async.muxch_STAR_(inst_18751);
var inst_18753 = cljs.core.async.close_BANG_(inst_18752);
var inst_18754 = cljs.core.next(inst_18742);
var inst_18728 = inst_18754;
var inst_18729 = null;
var inst_18730 = (0);
var inst_18731 = (0);
var state_18787__$1 = (function (){var statearr_18807 = state_18787;
(statearr_18807[(12)] = inst_18731);

(statearr_18807[(13)] = inst_18728);

(statearr_18807[(14)] = inst_18729);

(statearr_18807[(15)] = inst_18730);

(statearr_18807[(16)] = inst_18753);

return statearr_18807;
})();
var statearr_18808_18849 = state_18787__$1;
(statearr_18808_18849[(2)] = null);

(statearr_18808_18849[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (3))){
var inst_18785 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18787__$1,inst_18785);
} else {
if((state_val_18788 === (12))){
var inst_18762 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
var statearr_18809_18850 = state_18787__$1;
(statearr_18809_18850[(2)] = inst_18762);

(statearr_18809_18850[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (2))){
var state_18787__$1 = state_18787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18787__$1,(4),ch);
} else {
if((state_val_18788 === (23))){
var state_18787__$1 = state_18787;
var statearr_18810_18851 = state_18787__$1;
(statearr_18810_18851[(2)] = null);

(statearr_18810_18851[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (19))){
var inst_18718 = (state_18787[(8)]);
var inst_18768 = (state_18787[(11)]);
var inst_18770 = cljs.core.async.muxch_STAR_(inst_18768);
var state_18787__$1 = state_18787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18787__$1,(22),inst_18770,inst_18718);
} else {
if((state_val_18788 === (11))){
var inst_18742 = (state_18787[(10)]);
var inst_18728 = (state_18787[(13)]);
var inst_18742__$1 = cljs.core.seq(inst_18728);
var state_18787__$1 = (function (){var statearr_18811 = state_18787;
(statearr_18811[(10)] = inst_18742__$1);

return statearr_18811;
})();
if(inst_18742__$1){
var statearr_18812_18852 = state_18787__$1;
(statearr_18812_18852[(1)] = (13));

} else {
var statearr_18813_18853 = state_18787__$1;
(statearr_18813_18853[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (9))){
var inst_18764 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
var statearr_18814_18854 = state_18787__$1;
(statearr_18814_18854[(2)] = inst_18764);

(statearr_18814_18854[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (5))){
var inst_18725 = cljs.core.deref(mults);
var inst_18726 = cljs.core.vals(inst_18725);
var inst_18727 = cljs.core.seq(inst_18726);
var inst_18728 = inst_18727;
var inst_18729 = null;
var inst_18730 = (0);
var inst_18731 = (0);
var state_18787__$1 = (function (){var statearr_18815 = state_18787;
(statearr_18815[(12)] = inst_18731);

(statearr_18815[(13)] = inst_18728);

(statearr_18815[(14)] = inst_18729);

(statearr_18815[(15)] = inst_18730);

return statearr_18815;
})();
var statearr_18816_18855 = state_18787__$1;
(statearr_18816_18855[(2)] = null);

(statearr_18816_18855[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (14))){
var state_18787__$1 = state_18787;
var statearr_18820_18856 = state_18787__$1;
(statearr_18820_18856[(2)] = null);

(statearr_18820_18856[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (16))){
var inst_18742 = (state_18787[(10)]);
var inst_18746 = cljs.core.chunk_first(inst_18742);
var inst_18747 = cljs.core.chunk_rest(inst_18742);
var inst_18748 = cljs.core.count(inst_18746);
var inst_18728 = inst_18747;
var inst_18729 = inst_18746;
var inst_18730 = inst_18748;
var inst_18731 = (0);
var state_18787__$1 = (function (){var statearr_18821 = state_18787;
(statearr_18821[(12)] = inst_18731);

(statearr_18821[(13)] = inst_18728);

(statearr_18821[(14)] = inst_18729);

(statearr_18821[(15)] = inst_18730);

return statearr_18821;
})();
var statearr_18822_18857 = state_18787__$1;
(statearr_18822_18857[(2)] = null);

(statearr_18822_18857[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (10))){
var inst_18731 = (state_18787[(12)]);
var inst_18728 = (state_18787[(13)]);
var inst_18729 = (state_18787[(14)]);
var inst_18730 = (state_18787[(15)]);
var inst_18736 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18729,inst_18731);
var inst_18737 = cljs.core.async.muxch_STAR_(inst_18736);
var inst_18738 = cljs.core.async.close_BANG_(inst_18737);
var inst_18739 = (inst_18731 + (1));
var tmp18817 = inst_18728;
var tmp18818 = inst_18729;
var tmp18819 = inst_18730;
var inst_18728__$1 = tmp18817;
var inst_18729__$1 = tmp18818;
var inst_18730__$1 = tmp18819;
var inst_18731__$1 = inst_18739;
var state_18787__$1 = (function (){var statearr_18823 = state_18787;
(statearr_18823[(12)] = inst_18731__$1);

(statearr_18823[(13)] = inst_18728__$1);

(statearr_18823[(14)] = inst_18729__$1);

(statearr_18823[(17)] = inst_18738);

(statearr_18823[(15)] = inst_18730__$1);

return statearr_18823;
})();
var statearr_18824_18858 = state_18787__$1;
(statearr_18824_18858[(2)] = null);

(statearr_18824_18858[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (18))){
var inst_18757 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
var statearr_18825_18859 = state_18787__$1;
(statearr_18825_18859[(2)] = inst_18757);

(statearr_18825_18859[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18788 === (8))){
var inst_18731 = (state_18787[(12)]);
var inst_18730 = (state_18787[(15)]);
var inst_18733 = (inst_18731 < inst_18730);
var inst_18734 = inst_18733;
var state_18787__$1 = state_18787;
if(cljs.core.truth_(inst_18734)){
var statearr_18826_18860 = state_18787__$1;
(statearr_18826_18860[(1)] = (10));

} else {
var statearr_18827_18861 = state_18787__$1;
(statearr_18827_18861[(1)] = (11));

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
});})(c__15731__auto___18833,mults,ensure_mult,p))
;
return ((function (switch__15548__auto__,c__15731__auto___18833,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_18828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18828[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_18828[(1)] = (1));

return statearr_18828;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_18787){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_18787);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e18829){if((e18829 instanceof Object)){
var ex__15552__auto__ = e18829;
var statearr_18830_18862 = state_18787;
(statearr_18830_18862[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18787);

return cljs.core.cst$kw$recur;
} else {
throw e18829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__18863 = state_18787;
state_18787 = G__18863;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_18787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_18787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___18833,mults,ensure_mult,p))
})();
var state__15733__auto__ = (function (){var statearr_18831 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_18831[(6)] = c__15731__auto___18833);

return statearr_18831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___18833,mults,ensure_mult,p))
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
var G__18865 = arguments.length;
switch (G__18865) {
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
var G__18868 = arguments.length;
switch (G__18868) {
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
var G__18871 = arguments.length;
switch (G__18871) {
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
var c__15731__auto___18938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___18938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___18938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18910){
var state_val_18911 = (state_18910[(1)]);
if((state_val_18911 === (7))){
var state_18910__$1 = state_18910;
var statearr_18912_18939 = state_18910__$1;
(statearr_18912_18939[(2)] = null);

(statearr_18912_18939[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (1))){
var state_18910__$1 = state_18910;
var statearr_18913_18940 = state_18910__$1;
(statearr_18913_18940[(2)] = null);

(statearr_18913_18940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (4))){
var inst_18874 = (state_18910[(7)]);
var inst_18876 = (inst_18874 < cnt);
var state_18910__$1 = state_18910;
if(cljs.core.truth_(inst_18876)){
var statearr_18914_18941 = state_18910__$1;
(statearr_18914_18941[(1)] = (6));

} else {
var statearr_18915_18942 = state_18910__$1;
(statearr_18915_18942[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (15))){
var inst_18906 = (state_18910[(2)]);
var state_18910__$1 = state_18910;
var statearr_18916_18943 = state_18910__$1;
(statearr_18916_18943[(2)] = inst_18906);

(statearr_18916_18943[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (13))){
var inst_18899 = cljs.core.async.close_BANG_(out);
var state_18910__$1 = state_18910;
var statearr_18917_18944 = state_18910__$1;
(statearr_18917_18944[(2)] = inst_18899);

(statearr_18917_18944[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (6))){
var state_18910__$1 = state_18910;
var statearr_18918_18945 = state_18910__$1;
(statearr_18918_18945[(2)] = null);

(statearr_18918_18945[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (3))){
var inst_18908 = (state_18910[(2)]);
var state_18910__$1 = state_18910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18910__$1,inst_18908);
} else {
if((state_val_18911 === (12))){
var inst_18896 = (state_18910[(8)]);
var inst_18896__$1 = (state_18910[(2)]);
var inst_18897 = cljs.core.some(cljs.core.nil_QMARK_,inst_18896__$1);
var state_18910__$1 = (function (){var statearr_18919 = state_18910;
(statearr_18919[(8)] = inst_18896__$1);

return statearr_18919;
})();
if(cljs.core.truth_(inst_18897)){
var statearr_18920_18946 = state_18910__$1;
(statearr_18920_18946[(1)] = (13));

} else {
var statearr_18921_18947 = state_18910__$1;
(statearr_18921_18947[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (2))){
var inst_18873 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18874 = (0);
var state_18910__$1 = (function (){var statearr_18922 = state_18910;
(statearr_18922[(7)] = inst_18874);

(statearr_18922[(9)] = inst_18873);

return statearr_18922;
})();
var statearr_18923_18948 = state_18910__$1;
(statearr_18923_18948[(2)] = null);

(statearr_18923_18948[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (11))){
var inst_18874 = (state_18910[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18910,(10),Object,null,(9));
var inst_18883 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18874) : chs__$1.call(null,inst_18874));
var inst_18884 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18874) : done.call(null,inst_18874));
var inst_18885 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18883,inst_18884);
var state_18910__$1 = state_18910;
var statearr_18924_18949 = state_18910__$1;
(statearr_18924_18949[(2)] = inst_18885);


cljs.core.async.impl.ioc_helpers.process_exception(state_18910__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (9))){
var inst_18874 = (state_18910[(7)]);
var inst_18887 = (state_18910[(2)]);
var inst_18888 = (inst_18874 + (1));
var inst_18874__$1 = inst_18888;
var state_18910__$1 = (function (){var statearr_18925 = state_18910;
(statearr_18925[(7)] = inst_18874__$1);

(statearr_18925[(10)] = inst_18887);

return statearr_18925;
})();
var statearr_18926_18950 = state_18910__$1;
(statearr_18926_18950[(2)] = null);

(statearr_18926_18950[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (5))){
var inst_18894 = (state_18910[(2)]);
var state_18910__$1 = (function (){var statearr_18927 = state_18910;
(statearr_18927[(11)] = inst_18894);

return statearr_18927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18910__$1,(12),dchan);
} else {
if((state_val_18911 === (14))){
var inst_18896 = (state_18910[(8)]);
var inst_18901 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18896);
var state_18910__$1 = state_18910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18910__$1,(16),out,inst_18901);
} else {
if((state_val_18911 === (16))){
var inst_18903 = (state_18910[(2)]);
var state_18910__$1 = (function (){var statearr_18928 = state_18910;
(statearr_18928[(12)] = inst_18903);

return statearr_18928;
})();
var statearr_18929_18951 = state_18910__$1;
(statearr_18929_18951[(2)] = null);

(statearr_18929_18951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (10))){
var inst_18878 = (state_18910[(2)]);
var inst_18879 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18910__$1 = (function (){var statearr_18930 = state_18910;
(statearr_18930[(13)] = inst_18878);

return statearr_18930;
})();
var statearr_18931_18952 = state_18910__$1;
(statearr_18931_18952[(2)] = inst_18879);


cljs.core.async.impl.ioc_helpers.process_exception(state_18910__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18911 === (8))){
var inst_18892 = (state_18910[(2)]);
var state_18910__$1 = state_18910;
var statearr_18932_18953 = state_18910__$1;
(statearr_18932_18953[(2)] = inst_18892);

(statearr_18932_18953[(1)] = (5));


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
});})(c__15731__auto___18938,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15548__auto__,c__15731__auto___18938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_18933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18933[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_18933[(1)] = (1));

return statearr_18933;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_18910){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_18910);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e18934){if((e18934 instanceof Object)){
var ex__15552__auto__ = e18934;
var statearr_18935_18954 = state_18910;
(statearr_18935_18954[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18910);

return cljs.core.cst$kw$recur;
} else {
throw e18934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__18955 = state_18910;
state_18910 = G__18955;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_18910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_18910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___18938,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15733__auto__ = (function (){var statearr_18936 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_18936[(6)] = c__15731__auto___18938);

return statearr_18936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___18938,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18958 = arguments.length;
switch (G__18958) {
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
var c__15731__auto___19012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___19012,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___19012,out){
return (function (state_18990){
var state_val_18991 = (state_18990[(1)]);
if((state_val_18991 === (7))){
var inst_18969 = (state_18990[(7)]);
var inst_18970 = (state_18990[(8)]);
var inst_18969__$1 = (state_18990[(2)]);
var inst_18970__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18969__$1,(0),null);
var inst_18971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18969__$1,(1),null);
var inst_18972 = (inst_18970__$1 == null);
var state_18990__$1 = (function (){var statearr_18992 = state_18990;
(statearr_18992[(7)] = inst_18969__$1);

(statearr_18992[(8)] = inst_18970__$1);

(statearr_18992[(9)] = inst_18971);

return statearr_18992;
})();
if(cljs.core.truth_(inst_18972)){
var statearr_18993_19013 = state_18990__$1;
(statearr_18993_19013[(1)] = (8));

} else {
var statearr_18994_19014 = state_18990__$1;
(statearr_18994_19014[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (1))){
var inst_18959 = cljs.core.vec(chs);
var inst_18960 = inst_18959;
var state_18990__$1 = (function (){var statearr_18995 = state_18990;
(statearr_18995[(10)] = inst_18960);

return statearr_18995;
})();
var statearr_18996_19015 = state_18990__$1;
(statearr_18996_19015[(2)] = null);

(statearr_18996_19015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (4))){
var inst_18960 = (state_18990[(10)]);
var state_18990__$1 = state_18990;
return cljs.core.async.ioc_alts_BANG_(state_18990__$1,(7),inst_18960);
} else {
if((state_val_18991 === (6))){
var inst_18986 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
var statearr_18997_19016 = state_18990__$1;
(statearr_18997_19016[(2)] = inst_18986);

(statearr_18997_19016[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (3))){
var inst_18988 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18990__$1,inst_18988);
} else {
if((state_val_18991 === (2))){
var inst_18960 = (state_18990[(10)]);
var inst_18962 = cljs.core.count(inst_18960);
var inst_18963 = (inst_18962 > (0));
var state_18990__$1 = state_18990;
if(cljs.core.truth_(inst_18963)){
var statearr_18999_19017 = state_18990__$1;
(statearr_18999_19017[(1)] = (4));

} else {
var statearr_19000_19018 = state_18990__$1;
(statearr_19000_19018[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (11))){
var inst_18960 = (state_18990[(10)]);
var inst_18979 = (state_18990[(2)]);
var tmp18998 = inst_18960;
var inst_18960__$1 = tmp18998;
var state_18990__$1 = (function (){var statearr_19001 = state_18990;
(statearr_19001[(10)] = inst_18960__$1);

(statearr_19001[(11)] = inst_18979);

return statearr_19001;
})();
var statearr_19002_19019 = state_18990__$1;
(statearr_19002_19019[(2)] = null);

(statearr_19002_19019[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (9))){
var inst_18970 = (state_18990[(8)]);
var state_18990__$1 = state_18990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18990__$1,(11),out,inst_18970);
} else {
if((state_val_18991 === (5))){
var inst_18984 = cljs.core.async.close_BANG_(out);
var state_18990__$1 = state_18990;
var statearr_19003_19020 = state_18990__$1;
(statearr_19003_19020[(2)] = inst_18984);

(statearr_19003_19020[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (10))){
var inst_18982 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
var statearr_19004_19021 = state_18990__$1;
(statearr_19004_19021[(2)] = inst_18982);

(statearr_19004_19021[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (8))){
var inst_18960 = (state_18990[(10)]);
var inst_18969 = (state_18990[(7)]);
var inst_18970 = (state_18990[(8)]);
var inst_18971 = (state_18990[(9)]);
var inst_18974 = (function (){var cs = inst_18960;
var vec__18965 = inst_18969;
var v = inst_18970;
var c = inst_18971;
return ((function (cs,vec__18965,v,c,inst_18960,inst_18969,inst_18970,inst_18971,state_val_18991,c__15731__auto___19012,out){
return (function (p1__18956_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18956_SHARP_);
});
;})(cs,vec__18965,v,c,inst_18960,inst_18969,inst_18970,inst_18971,state_val_18991,c__15731__auto___19012,out))
})();
var inst_18975 = cljs.core.filterv(inst_18974,inst_18960);
var inst_18960__$1 = inst_18975;
var state_18990__$1 = (function (){var statearr_19005 = state_18990;
(statearr_19005[(10)] = inst_18960__$1);

return statearr_19005;
})();
var statearr_19006_19022 = state_18990__$1;
(statearr_19006_19022[(2)] = null);

(statearr_19006_19022[(1)] = (2));


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
});})(c__15731__auto___19012,out))
;
return ((function (switch__15548__auto__,c__15731__auto___19012,out){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_19007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19007[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_19007[(1)] = (1));

return statearr_19007;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_18990){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_18990);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e19008){if((e19008 instanceof Object)){
var ex__15552__auto__ = e19008;
var statearr_19009_19023 = state_18990;
(statearr_19009_19023[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18990);

return cljs.core.cst$kw$recur;
} else {
throw e19008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__19024 = state_18990;
state_18990 = G__19024;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_18990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_18990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___19012,out))
})();
var state__15733__auto__ = (function (){var statearr_19010 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_19010[(6)] = c__15731__auto___19012);

return statearr_19010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___19012,out))
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
var G__19026 = arguments.length;
switch (G__19026) {
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
var c__15731__auto___19071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___19071,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___19071,out){
return (function (state_19050){
var state_val_19051 = (state_19050[(1)]);
if((state_val_19051 === (7))){
var inst_19032 = (state_19050[(7)]);
var inst_19032__$1 = (state_19050[(2)]);
var inst_19033 = (inst_19032__$1 == null);
var inst_19034 = cljs.core.not(inst_19033);
var state_19050__$1 = (function (){var statearr_19052 = state_19050;
(statearr_19052[(7)] = inst_19032__$1);

return statearr_19052;
})();
if(inst_19034){
var statearr_19053_19072 = state_19050__$1;
(statearr_19053_19072[(1)] = (8));

} else {
var statearr_19054_19073 = state_19050__$1;
(statearr_19054_19073[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (1))){
var inst_19027 = (0);
var state_19050__$1 = (function (){var statearr_19055 = state_19050;
(statearr_19055[(8)] = inst_19027);

return statearr_19055;
})();
var statearr_19056_19074 = state_19050__$1;
(statearr_19056_19074[(2)] = null);

(statearr_19056_19074[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (4))){
var state_19050__$1 = state_19050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19050__$1,(7),ch);
} else {
if((state_val_19051 === (6))){
var inst_19045 = (state_19050[(2)]);
var state_19050__$1 = state_19050;
var statearr_19057_19075 = state_19050__$1;
(statearr_19057_19075[(2)] = inst_19045);

(statearr_19057_19075[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (3))){
var inst_19047 = (state_19050[(2)]);
var inst_19048 = cljs.core.async.close_BANG_(out);
var state_19050__$1 = (function (){var statearr_19058 = state_19050;
(statearr_19058[(9)] = inst_19047);

return statearr_19058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19050__$1,inst_19048);
} else {
if((state_val_19051 === (2))){
var inst_19027 = (state_19050[(8)]);
var inst_19029 = (inst_19027 < n);
var state_19050__$1 = state_19050;
if(cljs.core.truth_(inst_19029)){
var statearr_19059_19076 = state_19050__$1;
(statearr_19059_19076[(1)] = (4));

} else {
var statearr_19060_19077 = state_19050__$1;
(statearr_19060_19077[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (11))){
var inst_19027 = (state_19050[(8)]);
var inst_19037 = (state_19050[(2)]);
var inst_19038 = (inst_19027 + (1));
var inst_19027__$1 = inst_19038;
var state_19050__$1 = (function (){var statearr_19061 = state_19050;
(statearr_19061[(10)] = inst_19037);

(statearr_19061[(8)] = inst_19027__$1);

return statearr_19061;
})();
var statearr_19062_19078 = state_19050__$1;
(statearr_19062_19078[(2)] = null);

(statearr_19062_19078[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (9))){
var state_19050__$1 = state_19050;
var statearr_19063_19079 = state_19050__$1;
(statearr_19063_19079[(2)] = null);

(statearr_19063_19079[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (5))){
var state_19050__$1 = state_19050;
var statearr_19064_19080 = state_19050__$1;
(statearr_19064_19080[(2)] = null);

(statearr_19064_19080[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (10))){
var inst_19042 = (state_19050[(2)]);
var state_19050__$1 = state_19050;
var statearr_19065_19081 = state_19050__$1;
(statearr_19065_19081[(2)] = inst_19042);

(statearr_19065_19081[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (8))){
var inst_19032 = (state_19050[(7)]);
var state_19050__$1 = state_19050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19050__$1,(11),out,inst_19032);
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
});})(c__15731__auto___19071,out))
;
return ((function (switch__15548__auto__,c__15731__auto___19071,out){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_19066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19066[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_19066[(1)] = (1));

return statearr_19066;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_19050){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_19050);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e19067){if((e19067 instanceof Object)){
var ex__15552__auto__ = e19067;
var statearr_19068_19082 = state_19050;
(statearr_19068_19082[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19050);

return cljs.core.cst$kw$recur;
} else {
throw e19067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__19083 = state_19050;
state_19050 = G__19083;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_19050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_19050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___19071,out))
})();
var state__15733__auto__ = (function (){var statearr_19069 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_19069[(6)] = c__15731__auto___19071);

return statearr_19069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___19071,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
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

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19088 = (function (f,ch,meta19086,_,fn1,meta19089){
this.f = f;
this.ch = ch;
this.meta19086 = meta19086;
this._ = _;
this.fn1 = fn1;
this.meta19089 = meta19089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19090,meta19089__$1){
var self__ = this;
var _19090__$1 = this;
return (new cljs.core.async.t_cljs$core$async19088(self__.f,self__.ch,self__.meta19086,self__._,self__.fn1,meta19089__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19090){
var self__ = this;
var _19090__$1 = this;
return self__.meta19089;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19084_SHARP_){
var G__19091 = (((p1__19084_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19084_SHARP_) : self__.f.call(null,p1__19084_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19091) : f1.call(null,G__19091));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19088.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19086,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19085], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19089], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19088";

cljs.core.async.t_cljs$core$async19088.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19088");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19088.
 */
cljs.core.async.__GT_t_cljs$core$async19088 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19088(f__$1,ch__$1,meta19086__$1,___$2,fn1__$1,meta19089){
return (new cljs.core.async.t_cljs$core$async19088(f__$1,ch__$1,meta19086__$1,___$2,fn1__$1,meta19089));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19088(self__.f,self__.ch,self__.meta19086,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19092 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19092) : self__.f.call(null,G__19092));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
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
cljs.core.async.__GT_t_cljs$core$async19085 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19085(f__$1,ch__$1,meta19086){
return (new cljs.core.async.t_cljs$core$async19085(f__$1,ch__$1,meta19086));
});

}

return (new cljs.core.async.t_cljs$core$async19085(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19093 = (function (f,ch,meta19094){
this.f = f;
this.ch = ch;
this.meta19094 = meta19094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19095,meta19094__$1){
var self__ = this;
var _19095__$1 = this;
return (new cljs.core.async.t_cljs$core$async19093(self__.f,self__.ch,meta19094__$1));
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19095){
var self__ = this;
var _19095__$1 = this;
return self__.meta19094;
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19094], null);
});

cljs.core.async.t_cljs$core$async19093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19093";

cljs.core.async.t_cljs$core$async19093.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19093");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19093.
 */
cljs.core.async.__GT_t_cljs$core$async19093 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19093(f__$1,ch__$1,meta19094){
return (new cljs.core.async.t_cljs$core$async19093(f__$1,ch__$1,meta19094));
});

}

return (new cljs.core.async.t_cljs$core$async19093(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19096 = (function (p,ch,meta19097){
this.p = p;
this.ch = ch;
this.meta19097 = meta19097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19098,meta19097__$1){
var self__ = this;
var _19098__$1 = this;
return (new cljs.core.async.t_cljs$core$async19096(self__.p,self__.ch,meta19097__$1));
});

cljs.core.async.t_cljs$core$async19096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19098){
var self__ = this;
var _19098__$1 = this;
return self__.meta19097;
});

cljs.core.async.t_cljs$core$async19096.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19096.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19096.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19096.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19097], null);
});

cljs.core.async.t_cljs$core$async19096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19096";

cljs.core.async.t_cljs$core$async19096.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19096");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19096.
 */
cljs.core.async.__GT_t_cljs$core$async19096 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19096(p__$1,ch__$1,meta19097){
return (new cljs.core.async.t_cljs$core$async19096(p__$1,ch__$1,meta19097));
});

}

return (new cljs.core.async.t_cljs$core$async19096(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19100 = arguments.length;
switch (G__19100) {
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
var c__15731__auto___19140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___19140,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___19140,out){
return (function (state_19121){
var state_val_19122 = (state_19121[(1)]);
if((state_val_19122 === (7))){
var inst_19117 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
var statearr_19123_19141 = state_19121__$1;
(statearr_19123_19141[(2)] = inst_19117);

(statearr_19123_19141[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19122 === (1))){
var state_19121__$1 = state_19121;
var statearr_19124_19142 = state_19121__$1;
(statearr_19124_19142[(2)] = null);

(statearr_19124_19142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19122 === (4))){
var inst_19103 = (state_19121[(7)]);
var inst_19103__$1 = (state_19121[(2)]);
var inst_19104 = (inst_19103__$1 == null);
var state_19121__$1 = (function (){var statearr_19125 = state_19121;
(statearr_19125[(7)] = inst_19103__$1);

return statearr_19125;
})();
if(cljs.core.truth_(inst_19104)){
var statearr_19126_19143 = state_19121__$1;
(statearr_19126_19143[(1)] = (5));

} else {
var statearr_19127_19144 = state_19121__$1;
(statearr_19127_19144[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19122 === (6))){
var inst_19103 = (state_19121[(7)]);
var inst_19108 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19103) : p.call(null,inst_19103));
var state_19121__$1 = state_19121;
if(cljs.core.truth_(inst_19108)){
var statearr_19128_19145 = state_19121__$1;
(statearr_19128_19145[(1)] = (8));

} else {
var statearr_19129_19146 = state_19121__$1;
(statearr_19129_19146[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19122 === (3))){
var inst_19119 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19121__$1,inst_19119);
} else {
if((state_val_19122 === (2))){
var state_19121__$1 = state_19121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19121__$1,(4),ch);
} else {
if((state_val_19122 === (11))){
var inst_19111 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
var statearr_19130_19147 = state_19121__$1;
(statearr_19130_19147[(2)] = inst_19111);

(statearr_19130_19147[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19122 === (9))){
var state_19121__$1 = state_19121;
var statearr_19131_19148 = state_19121__$1;
(statearr_19131_19148[(2)] = null);

(statearr_19131_19148[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19122 === (5))){
var inst_19106 = cljs.core.async.close_BANG_(out);
var state_19121__$1 = state_19121;
var statearr_19132_19149 = state_19121__$1;
(statearr_19132_19149[(2)] = inst_19106);

(statearr_19132_19149[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19122 === (10))){
var inst_19114 = (state_19121[(2)]);
var state_19121__$1 = (function (){var statearr_19133 = state_19121;
(statearr_19133[(8)] = inst_19114);

return statearr_19133;
})();
var statearr_19134_19150 = state_19121__$1;
(statearr_19134_19150[(2)] = null);

(statearr_19134_19150[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19122 === (8))){
var inst_19103 = (state_19121[(7)]);
var state_19121__$1 = state_19121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19121__$1,(11),out,inst_19103);
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
});})(c__15731__auto___19140,out))
;
return ((function (switch__15548__auto__,c__15731__auto___19140,out){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_19135 = [null,null,null,null,null,null,null,null,null];
(statearr_19135[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_19135[(1)] = (1));

return statearr_19135;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_19121){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_19121);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e19136){if((e19136 instanceof Object)){
var ex__15552__auto__ = e19136;
var statearr_19137_19151 = state_19121;
(statearr_19137_19151[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19121);

return cljs.core.cst$kw$recur;
} else {
throw e19136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__19152 = state_19121;
state_19121 = G__19152;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_19121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_19121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___19140,out))
})();
var state__15733__auto__ = (function (){var statearr_19138 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_19138[(6)] = c__15731__auto___19140);

return statearr_19138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___19140,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19154 = arguments.length;
switch (G__19154) {
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
var c__15731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto__){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto__){
return (function (state_19217){
var state_val_19218 = (state_19217[(1)]);
if((state_val_19218 === (7))){
var inst_19213 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19219_19257 = state_19217__$1;
(statearr_19219_19257[(2)] = inst_19213);

(statearr_19219_19257[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (20))){
var inst_19183 = (state_19217[(7)]);
var inst_19194 = (state_19217[(2)]);
var inst_19195 = cljs.core.next(inst_19183);
var inst_19169 = inst_19195;
var inst_19170 = null;
var inst_19171 = (0);
var inst_19172 = (0);
var state_19217__$1 = (function (){var statearr_19220 = state_19217;
(statearr_19220[(8)] = inst_19170);

(statearr_19220[(9)] = inst_19194);

(statearr_19220[(10)] = inst_19169);

(statearr_19220[(11)] = inst_19172);

(statearr_19220[(12)] = inst_19171);

return statearr_19220;
})();
var statearr_19221_19258 = state_19217__$1;
(statearr_19221_19258[(2)] = null);

(statearr_19221_19258[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (1))){
var state_19217__$1 = state_19217;
var statearr_19222_19259 = state_19217__$1;
(statearr_19222_19259[(2)] = null);

(statearr_19222_19259[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (4))){
var inst_19158 = (state_19217[(13)]);
var inst_19158__$1 = (state_19217[(2)]);
var inst_19159 = (inst_19158__$1 == null);
var state_19217__$1 = (function (){var statearr_19223 = state_19217;
(statearr_19223[(13)] = inst_19158__$1);

return statearr_19223;
})();
if(cljs.core.truth_(inst_19159)){
var statearr_19224_19260 = state_19217__$1;
(statearr_19224_19260[(1)] = (5));

} else {
var statearr_19225_19261 = state_19217__$1;
(statearr_19225_19261[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (15))){
var state_19217__$1 = state_19217;
var statearr_19229_19262 = state_19217__$1;
(statearr_19229_19262[(2)] = null);

(statearr_19229_19262[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (21))){
var state_19217__$1 = state_19217;
var statearr_19230_19263 = state_19217__$1;
(statearr_19230_19263[(2)] = null);

(statearr_19230_19263[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (13))){
var inst_19170 = (state_19217[(8)]);
var inst_19169 = (state_19217[(10)]);
var inst_19172 = (state_19217[(11)]);
var inst_19171 = (state_19217[(12)]);
var inst_19179 = (state_19217[(2)]);
var inst_19180 = (inst_19172 + (1));
var tmp19226 = inst_19170;
var tmp19227 = inst_19169;
var tmp19228 = inst_19171;
var inst_19169__$1 = tmp19227;
var inst_19170__$1 = tmp19226;
var inst_19171__$1 = tmp19228;
var inst_19172__$1 = inst_19180;
var state_19217__$1 = (function (){var statearr_19231 = state_19217;
(statearr_19231[(8)] = inst_19170__$1);

(statearr_19231[(14)] = inst_19179);

(statearr_19231[(10)] = inst_19169__$1);

(statearr_19231[(11)] = inst_19172__$1);

(statearr_19231[(12)] = inst_19171__$1);

return statearr_19231;
})();
var statearr_19232_19264 = state_19217__$1;
(statearr_19232_19264[(2)] = null);

(statearr_19232_19264[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (22))){
var state_19217__$1 = state_19217;
var statearr_19233_19265 = state_19217__$1;
(statearr_19233_19265[(2)] = null);

(statearr_19233_19265[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (6))){
var inst_19158 = (state_19217[(13)]);
var inst_19167 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19158) : f.call(null,inst_19158));
var inst_19168 = cljs.core.seq(inst_19167);
var inst_19169 = inst_19168;
var inst_19170 = null;
var inst_19171 = (0);
var inst_19172 = (0);
var state_19217__$1 = (function (){var statearr_19234 = state_19217;
(statearr_19234[(8)] = inst_19170);

(statearr_19234[(10)] = inst_19169);

(statearr_19234[(11)] = inst_19172);

(statearr_19234[(12)] = inst_19171);

return statearr_19234;
})();
var statearr_19235_19266 = state_19217__$1;
(statearr_19235_19266[(2)] = null);

(statearr_19235_19266[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (17))){
var inst_19183 = (state_19217[(7)]);
var inst_19187 = cljs.core.chunk_first(inst_19183);
var inst_19188 = cljs.core.chunk_rest(inst_19183);
var inst_19189 = cljs.core.count(inst_19187);
var inst_19169 = inst_19188;
var inst_19170 = inst_19187;
var inst_19171 = inst_19189;
var inst_19172 = (0);
var state_19217__$1 = (function (){var statearr_19236 = state_19217;
(statearr_19236[(8)] = inst_19170);

(statearr_19236[(10)] = inst_19169);

(statearr_19236[(11)] = inst_19172);

(statearr_19236[(12)] = inst_19171);

return statearr_19236;
})();
var statearr_19237_19267 = state_19217__$1;
(statearr_19237_19267[(2)] = null);

(statearr_19237_19267[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (3))){
var inst_19215 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19217__$1,inst_19215);
} else {
if((state_val_19218 === (12))){
var inst_19203 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19238_19268 = state_19217__$1;
(statearr_19238_19268[(2)] = inst_19203);

(statearr_19238_19268[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (2))){
var state_19217__$1 = state_19217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19217__$1,(4),in$);
} else {
if((state_val_19218 === (23))){
var inst_19211 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19239_19269 = state_19217__$1;
(statearr_19239_19269[(2)] = inst_19211);

(statearr_19239_19269[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (19))){
var inst_19198 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19240_19270 = state_19217__$1;
(statearr_19240_19270[(2)] = inst_19198);

(statearr_19240_19270[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (11))){
var inst_19169 = (state_19217[(10)]);
var inst_19183 = (state_19217[(7)]);
var inst_19183__$1 = cljs.core.seq(inst_19169);
var state_19217__$1 = (function (){var statearr_19241 = state_19217;
(statearr_19241[(7)] = inst_19183__$1);

return statearr_19241;
})();
if(inst_19183__$1){
var statearr_19242_19271 = state_19217__$1;
(statearr_19242_19271[(1)] = (14));

} else {
var statearr_19243_19272 = state_19217__$1;
(statearr_19243_19272[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (9))){
var inst_19205 = (state_19217[(2)]);
var inst_19206 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19217__$1 = (function (){var statearr_19244 = state_19217;
(statearr_19244[(15)] = inst_19205);

return statearr_19244;
})();
if(cljs.core.truth_(inst_19206)){
var statearr_19245_19273 = state_19217__$1;
(statearr_19245_19273[(1)] = (21));

} else {
var statearr_19246_19274 = state_19217__$1;
(statearr_19246_19274[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (5))){
var inst_19161 = cljs.core.async.close_BANG_(out);
var state_19217__$1 = state_19217;
var statearr_19247_19275 = state_19217__$1;
(statearr_19247_19275[(2)] = inst_19161);

(statearr_19247_19275[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (14))){
var inst_19183 = (state_19217[(7)]);
var inst_19185 = cljs.core.chunked_seq_QMARK_(inst_19183);
var state_19217__$1 = state_19217;
if(inst_19185){
var statearr_19248_19276 = state_19217__$1;
(statearr_19248_19276[(1)] = (17));

} else {
var statearr_19249_19277 = state_19217__$1;
(statearr_19249_19277[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (16))){
var inst_19201 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19250_19278 = state_19217__$1;
(statearr_19250_19278[(2)] = inst_19201);

(statearr_19250_19278[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (10))){
var inst_19170 = (state_19217[(8)]);
var inst_19172 = (state_19217[(11)]);
var inst_19177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19170,inst_19172);
var state_19217__$1 = state_19217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19217__$1,(13),out,inst_19177);
} else {
if((state_val_19218 === (18))){
var inst_19183 = (state_19217[(7)]);
var inst_19192 = cljs.core.first(inst_19183);
var state_19217__$1 = state_19217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19217__$1,(20),out,inst_19192);
} else {
if((state_val_19218 === (8))){
var inst_19172 = (state_19217[(11)]);
var inst_19171 = (state_19217[(12)]);
var inst_19174 = (inst_19172 < inst_19171);
var inst_19175 = inst_19174;
var state_19217__$1 = state_19217;
if(cljs.core.truth_(inst_19175)){
var statearr_19251_19279 = state_19217__$1;
(statearr_19251_19279[(1)] = (10));

} else {
var statearr_19252_19280 = state_19217__$1;
(statearr_19252_19280[(1)] = (11));

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
});})(c__15731__auto__))
;
return ((function (switch__15548__auto__,c__15731__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15549__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15549__auto____0 = (function (){
var statearr_19253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19253[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15549__auto__);

(statearr_19253[(1)] = (1));

return statearr_19253;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15549__auto____1 = (function (state_19217){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_19217);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e19254){if((e19254 instanceof Object)){
var ex__15552__auto__ = e19254;
var statearr_19255_19281 = state_19217;
(statearr_19255_19281[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19217);

return cljs.core.cst$kw$recur;
} else {
throw e19254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__19282 = state_19217;
state_19217 = G__19282;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15549__auto__ = function(state_19217){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15549__auto____1.call(this,state_19217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15549__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15549__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto__))
})();
var state__15733__auto__ = (function (){var statearr_19256 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_19256[(6)] = c__15731__auto__);

return statearr_19256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto__))
);

return c__15731__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19284 = arguments.length;
switch (G__19284) {
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
var G__19287 = arguments.length;
switch (G__19287) {
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
var G__19290 = arguments.length;
switch (G__19290) {
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
var c__15731__auto___19337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___19337,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___19337,out){
return (function (state_19314){
var state_val_19315 = (state_19314[(1)]);
if((state_val_19315 === (7))){
var inst_19309 = (state_19314[(2)]);
var state_19314__$1 = state_19314;
var statearr_19316_19338 = state_19314__$1;
(statearr_19316_19338[(2)] = inst_19309);

(statearr_19316_19338[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (1))){
var inst_19291 = null;
var state_19314__$1 = (function (){var statearr_19317 = state_19314;
(statearr_19317[(7)] = inst_19291);

return statearr_19317;
})();
var statearr_19318_19339 = state_19314__$1;
(statearr_19318_19339[(2)] = null);

(statearr_19318_19339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (4))){
var inst_19294 = (state_19314[(8)]);
var inst_19294__$1 = (state_19314[(2)]);
var inst_19295 = (inst_19294__$1 == null);
var inst_19296 = cljs.core.not(inst_19295);
var state_19314__$1 = (function (){var statearr_19319 = state_19314;
(statearr_19319[(8)] = inst_19294__$1);

return statearr_19319;
})();
if(inst_19296){
var statearr_19320_19340 = state_19314__$1;
(statearr_19320_19340[(1)] = (5));

} else {
var statearr_19321_19341 = state_19314__$1;
(statearr_19321_19341[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (6))){
var state_19314__$1 = state_19314;
var statearr_19322_19342 = state_19314__$1;
(statearr_19322_19342[(2)] = null);

(statearr_19322_19342[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (3))){
var inst_19311 = (state_19314[(2)]);
var inst_19312 = cljs.core.async.close_BANG_(out);
var state_19314__$1 = (function (){var statearr_19323 = state_19314;
(statearr_19323[(9)] = inst_19311);

return statearr_19323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19314__$1,inst_19312);
} else {
if((state_val_19315 === (2))){
var state_19314__$1 = state_19314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19314__$1,(4),ch);
} else {
if((state_val_19315 === (11))){
var inst_19294 = (state_19314[(8)]);
var inst_19303 = (state_19314[(2)]);
var inst_19291 = inst_19294;
var state_19314__$1 = (function (){var statearr_19324 = state_19314;
(statearr_19324[(10)] = inst_19303);

(statearr_19324[(7)] = inst_19291);

return statearr_19324;
})();
var statearr_19325_19343 = state_19314__$1;
(statearr_19325_19343[(2)] = null);

(statearr_19325_19343[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (9))){
var inst_19294 = (state_19314[(8)]);
var state_19314__$1 = state_19314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19314__$1,(11),out,inst_19294);
} else {
if((state_val_19315 === (5))){
var inst_19294 = (state_19314[(8)]);
var inst_19291 = (state_19314[(7)]);
var inst_19298 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19294,inst_19291);
var state_19314__$1 = state_19314;
if(inst_19298){
var statearr_19327_19344 = state_19314__$1;
(statearr_19327_19344[(1)] = (8));

} else {
var statearr_19328_19345 = state_19314__$1;
(statearr_19328_19345[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (10))){
var inst_19306 = (state_19314[(2)]);
var state_19314__$1 = state_19314;
var statearr_19329_19346 = state_19314__$1;
(statearr_19329_19346[(2)] = inst_19306);

(statearr_19329_19346[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (8))){
var inst_19291 = (state_19314[(7)]);
var tmp19326 = inst_19291;
var inst_19291__$1 = tmp19326;
var state_19314__$1 = (function (){var statearr_19330 = state_19314;
(statearr_19330[(7)] = inst_19291__$1);

return statearr_19330;
})();
var statearr_19331_19347 = state_19314__$1;
(statearr_19331_19347[(2)] = null);

(statearr_19331_19347[(1)] = (2));


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
});})(c__15731__auto___19337,out))
;
return ((function (switch__15548__auto__,c__15731__auto___19337,out){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_19332 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19332[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_19332[(1)] = (1));

return statearr_19332;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_19314){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_19314);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e19333){if((e19333 instanceof Object)){
var ex__15552__auto__ = e19333;
var statearr_19334_19348 = state_19314;
(statearr_19334_19348[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19314);

return cljs.core.cst$kw$recur;
} else {
throw e19333;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__19349 = state_19314;
state_19314 = G__19349;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_19314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_19314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___19337,out))
})();
var state__15733__auto__ = (function (){var statearr_19335 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_19335[(6)] = c__15731__auto___19337);

return statearr_19335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___19337,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19351 = arguments.length;
switch (G__19351) {
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
var c__15731__auto___19417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___19417,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___19417,out){
return (function (state_19389){
var state_val_19390 = (state_19389[(1)]);
if((state_val_19390 === (7))){
var inst_19385 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
var statearr_19391_19418 = state_19389__$1;
(statearr_19391_19418[(2)] = inst_19385);

(statearr_19391_19418[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (1))){
var inst_19352 = (new Array(n));
var inst_19353 = inst_19352;
var inst_19354 = (0);
var state_19389__$1 = (function (){var statearr_19392 = state_19389;
(statearr_19392[(7)] = inst_19353);

(statearr_19392[(8)] = inst_19354);

return statearr_19392;
})();
var statearr_19393_19419 = state_19389__$1;
(statearr_19393_19419[(2)] = null);

(statearr_19393_19419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (4))){
var inst_19357 = (state_19389[(9)]);
var inst_19357__$1 = (state_19389[(2)]);
var inst_19358 = (inst_19357__$1 == null);
var inst_19359 = cljs.core.not(inst_19358);
var state_19389__$1 = (function (){var statearr_19394 = state_19389;
(statearr_19394[(9)] = inst_19357__$1);

return statearr_19394;
})();
if(inst_19359){
var statearr_19395_19420 = state_19389__$1;
(statearr_19395_19420[(1)] = (5));

} else {
var statearr_19396_19421 = state_19389__$1;
(statearr_19396_19421[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (15))){
var inst_19379 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
var statearr_19397_19422 = state_19389__$1;
(statearr_19397_19422[(2)] = inst_19379);

(statearr_19397_19422[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (13))){
var state_19389__$1 = state_19389;
var statearr_19398_19423 = state_19389__$1;
(statearr_19398_19423[(2)] = null);

(statearr_19398_19423[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (6))){
var inst_19354 = (state_19389[(8)]);
var inst_19375 = (inst_19354 > (0));
var state_19389__$1 = state_19389;
if(cljs.core.truth_(inst_19375)){
var statearr_19399_19424 = state_19389__$1;
(statearr_19399_19424[(1)] = (12));

} else {
var statearr_19400_19425 = state_19389__$1;
(statearr_19400_19425[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (3))){
var inst_19387 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19389__$1,inst_19387);
} else {
if((state_val_19390 === (12))){
var inst_19353 = (state_19389[(7)]);
var inst_19377 = cljs.core.vec(inst_19353);
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19389__$1,(15),out,inst_19377);
} else {
if((state_val_19390 === (2))){
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19389__$1,(4),ch);
} else {
if((state_val_19390 === (11))){
var inst_19369 = (state_19389[(2)]);
var inst_19370 = (new Array(n));
var inst_19353 = inst_19370;
var inst_19354 = (0);
var state_19389__$1 = (function (){var statearr_19401 = state_19389;
(statearr_19401[(7)] = inst_19353);

(statearr_19401[(8)] = inst_19354);

(statearr_19401[(10)] = inst_19369);

return statearr_19401;
})();
var statearr_19402_19426 = state_19389__$1;
(statearr_19402_19426[(2)] = null);

(statearr_19402_19426[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (9))){
var inst_19353 = (state_19389[(7)]);
var inst_19367 = cljs.core.vec(inst_19353);
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19389__$1,(11),out,inst_19367);
} else {
if((state_val_19390 === (5))){
var inst_19353 = (state_19389[(7)]);
var inst_19354 = (state_19389[(8)]);
var inst_19362 = (state_19389[(11)]);
var inst_19357 = (state_19389[(9)]);
var inst_19361 = (inst_19353[inst_19354] = inst_19357);
var inst_19362__$1 = (inst_19354 + (1));
var inst_19363 = (inst_19362__$1 < n);
var state_19389__$1 = (function (){var statearr_19403 = state_19389;
(statearr_19403[(12)] = inst_19361);

(statearr_19403[(11)] = inst_19362__$1);

return statearr_19403;
})();
if(cljs.core.truth_(inst_19363)){
var statearr_19404_19427 = state_19389__$1;
(statearr_19404_19427[(1)] = (8));

} else {
var statearr_19405_19428 = state_19389__$1;
(statearr_19405_19428[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (14))){
var inst_19382 = (state_19389[(2)]);
var inst_19383 = cljs.core.async.close_BANG_(out);
var state_19389__$1 = (function (){var statearr_19407 = state_19389;
(statearr_19407[(13)] = inst_19382);

return statearr_19407;
})();
var statearr_19408_19429 = state_19389__$1;
(statearr_19408_19429[(2)] = inst_19383);

(statearr_19408_19429[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (10))){
var inst_19373 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
var statearr_19409_19430 = state_19389__$1;
(statearr_19409_19430[(2)] = inst_19373);

(statearr_19409_19430[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (8))){
var inst_19353 = (state_19389[(7)]);
var inst_19362 = (state_19389[(11)]);
var tmp19406 = inst_19353;
var inst_19353__$1 = tmp19406;
var inst_19354 = inst_19362;
var state_19389__$1 = (function (){var statearr_19410 = state_19389;
(statearr_19410[(7)] = inst_19353__$1);

(statearr_19410[(8)] = inst_19354);

return statearr_19410;
})();
var statearr_19411_19431 = state_19389__$1;
(statearr_19411_19431[(2)] = null);

(statearr_19411_19431[(1)] = (2));


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
});})(c__15731__auto___19417,out))
;
return ((function (switch__15548__auto__,c__15731__auto___19417,out){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_19412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19412[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_19412[(1)] = (1));

return statearr_19412;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_19389){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_19389);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e19413){if((e19413 instanceof Object)){
var ex__15552__auto__ = e19413;
var statearr_19414_19432 = state_19389;
(statearr_19414_19432[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19389);

return cljs.core.cst$kw$recur;
} else {
throw e19413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__19433 = state_19389;
state_19389 = G__19433;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_19389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_19389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___19417,out))
})();
var state__15733__auto__ = (function (){var statearr_19415 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_19415[(6)] = c__15731__auto___19417);

return statearr_19415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___19417,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19435 = arguments.length;
switch (G__19435) {
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
var c__15731__auto___19505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15731__auto___19505,out){
return (function (){
var f__15732__auto__ = (function (){var switch__15548__auto__ = ((function (c__15731__auto___19505,out){
return (function (state_19477){
var state_val_19478 = (state_19477[(1)]);
if((state_val_19478 === (7))){
var inst_19473 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
var statearr_19479_19506 = state_19477__$1;
(statearr_19479_19506[(2)] = inst_19473);

(statearr_19479_19506[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (1))){
var inst_19436 = [];
var inst_19437 = inst_19436;
var inst_19438 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19477__$1 = (function (){var statearr_19480 = state_19477;
(statearr_19480[(7)] = inst_19438);

(statearr_19480[(8)] = inst_19437);

return statearr_19480;
})();
var statearr_19481_19507 = state_19477__$1;
(statearr_19481_19507[(2)] = null);

(statearr_19481_19507[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (4))){
var inst_19441 = (state_19477[(9)]);
var inst_19441__$1 = (state_19477[(2)]);
var inst_19442 = (inst_19441__$1 == null);
var inst_19443 = cljs.core.not(inst_19442);
var state_19477__$1 = (function (){var statearr_19482 = state_19477;
(statearr_19482[(9)] = inst_19441__$1);

return statearr_19482;
})();
if(inst_19443){
var statearr_19483_19508 = state_19477__$1;
(statearr_19483_19508[(1)] = (5));

} else {
var statearr_19484_19509 = state_19477__$1;
(statearr_19484_19509[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (15))){
var inst_19467 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
var statearr_19485_19510 = state_19477__$1;
(statearr_19485_19510[(2)] = inst_19467);

(statearr_19485_19510[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (13))){
var state_19477__$1 = state_19477;
var statearr_19486_19511 = state_19477__$1;
(statearr_19486_19511[(2)] = null);

(statearr_19486_19511[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (6))){
var inst_19437 = (state_19477[(8)]);
var inst_19462 = inst_19437.length;
var inst_19463 = (inst_19462 > (0));
var state_19477__$1 = state_19477;
if(cljs.core.truth_(inst_19463)){
var statearr_19487_19512 = state_19477__$1;
(statearr_19487_19512[(1)] = (12));

} else {
var statearr_19488_19513 = state_19477__$1;
(statearr_19488_19513[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (3))){
var inst_19475 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19477__$1,inst_19475);
} else {
if((state_val_19478 === (12))){
var inst_19437 = (state_19477[(8)]);
var inst_19465 = cljs.core.vec(inst_19437);
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19477__$1,(15),out,inst_19465);
} else {
if((state_val_19478 === (2))){
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19477__$1,(4),ch);
} else {
if((state_val_19478 === (11))){
var inst_19441 = (state_19477[(9)]);
var inst_19445 = (state_19477[(10)]);
var inst_19455 = (state_19477[(2)]);
var inst_19456 = [];
var inst_19457 = inst_19456.push(inst_19441);
var inst_19437 = inst_19456;
var inst_19438 = inst_19445;
var state_19477__$1 = (function (){var statearr_19489 = state_19477;
(statearr_19489[(7)] = inst_19438);

(statearr_19489[(8)] = inst_19437);

(statearr_19489[(11)] = inst_19457);

(statearr_19489[(12)] = inst_19455);

return statearr_19489;
})();
var statearr_19490_19514 = state_19477__$1;
(statearr_19490_19514[(2)] = null);

(statearr_19490_19514[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (9))){
var inst_19437 = (state_19477[(8)]);
var inst_19453 = cljs.core.vec(inst_19437);
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19477__$1,(11),out,inst_19453);
} else {
if((state_val_19478 === (5))){
var inst_19438 = (state_19477[(7)]);
var inst_19441 = (state_19477[(9)]);
var inst_19445 = (state_19477[(10)]);
var inst_19445__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19441) : f.call(null,inst_19441));
var inst_19446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19445__$1,inst_19438);
var inst_19447 = cljs.core.keyword_identical_QMARK_(inst_19438,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19448 = ((inst_19446) || (inst_19447));
var state_19477__$1 = (function (){var statearr_19491 = state_19477;
(statearr_19491[(10)] = inst_19445__$1);

return statearr_19491;
})();
if(cljs.core.truth_(inst_19448)){
var statearr_19492_19515 = state_19477__$1;
(statearr_19492_19515[(1)] = (8));

} else {
var statearr_19493_19516 = state_19477__$1;
(statearr_19493_19516[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (14))){
var inst_19470 = (state_19477[(2)]);
var inst_19471 = cljs.core.async.close_BANG_(out);
var state_19477__$1 = (function (){var statearr_19495 = state_19477;
(statearr_19495[(13)] = inst_19470);

return statearr_19495;
})();
var statearr_19496_19517 = state_19477__$1;
(statearr_19496_19517[(2)] = inst_19471);

(statearr_19496_19517[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (10))){
var inst_19460 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
var statearr_19497_19518 = state_19477__$1;
(statearr_19497_19518[(2)] = inst_19460);

(statearr_19497_19518[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19478 === (8))){
var inst_19441 = (state_19477[(9)]);
var inst_19437 = (state_19477[(8)]);
var inst_19445 = (state_19477[(10)]);
var inst_19450 = inst_19437.push(inst_19441);
var tmp19494 = inst_19437;
var inst_19437__$1 = tmp19494;
var inst_19438 = inst_19445;
var state_19477__$1 = (function (){var statearr_19498 = state_19477;
(statearr_19498[(7)] = inst_19438);

(statearr_19498[(14)] = inst_19450);

(statearr_19498[(8)] = inst_19437__$1);

return statearr_19498;
})();
var statearr_19499_19519 = state_19477__$1;
(statearr_19499_19519[(2)] = null);

(statearr_19499_19519[(1)] = (2));


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
});})(c__15731__auto___19505,out))
;
return ((function (switch__15548__auto__,c__15731__auto___19505,out){
return (function() {
var cljs$core$async$state_machine__15549__auto__ = null;
var cljs$core$async$state_machine__15549__auto____0 = (function (){
var statearr_19500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19500[(0)] = cljs$core$async$state_machine__15549__auto__);

(statearr_19500[(1)] = (1));

return statearr_19500;
});
var cljs$core$async$state_machine__15549__auto____1 = (function (state_19477){
while(true){
var ret_value__15550__auto__ = (function (){try{while(true){
var result__15551__auto__ = switch__15548__auto__(state_19477);
if(cljs.core.keyword_identical_QMARK_(result__15551__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15551__auto__;
}
break;
}
}catch (e19501){if((e19501 instanceof Object)){
var ex__15552__auto__ = e19501;
var statearr_19502_19520 = state_19477;
(statearr_19502_19520[(5)] = ex__15552__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19477);

return cljs.core.cst$kw$recur;
} else {
throw e19501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15550__auto__,cljs.core.cst$kw$recur)){
var G__19521 = state_19477;
state_19477 = G__19521;
continue;
} else {
return ret_value__15550__auto__;
}
break;
}
});
cljs$core$async$state_machine__15549__auto__ = function(state_19477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15549__auto____1.call(this,state_19477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15549__auto____0;
cljs$core$async$state_machine__15549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15549__auto____1;
return cljs$core$async$state_machine__15549__auto__;
})()
;})(switch__15548__auto__,c__15731__auto___19505,out))
})();
var state__15733__auto__ = (function (){var statearr_19503 = (f__15732__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15732__auto__.cljs$core$IFn$_invoke$arity$0() : f__15732__auto__.call(null));
(statearr_19503[(6)] = c__15731__auto___19505);

return statearr_19503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15733__auto__);
});})(c__15731__auto___19505,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

