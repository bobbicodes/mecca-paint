// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24334 = arguments.length;
switch (G__24334) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24335 = (function (f,blockable,meta24336){
this.f = f;
this.blockable = blockable;
this.meta24336 = meta24336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24337,meta24336__$1){
var self__ = this;
var _24337__$1 = this;
return (new cljs.core.async.t_cljs$core$async24335(self__.f,self__.blockable,meta24336__$1));
});

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24337){
var self__ = this;
var _24337__$1 = this;
return self__.meta24336;
});

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24336","meta24336",1953980927,null)], null);
});

cljs.core.async.t_cljs$core$async24335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24335";

cljs.core.async.t_cljs$core$async24335.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24335");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24335.
 */
cljs.core.async.__GT_t_cljs$core$async24335 = (function cljs$core$async$__GT_t_cljs$core$async24335(f__$1,blockable__$1,meta24336){
return (new cljs.core.async.t_cljs$core$async24335(f__$1,blockable__$1,meta24336));
});

}

return (new cljs.core.async.t_cljs$core$async24335(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__24341 = arguments.length;
switch (G__24341) {
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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__24344 = arguments.length;
switch (G__24344) {
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
var G__24347 = arguments.length;
switch (G__24347) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24349 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24349);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24349,ret){
return (function (){
return fn1.call(null,val_24349);
});})(val_24349,ret))
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24351 = arguments.length;
switch (G__24351) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___24353 = n;
var x_24354 = (0);
while(true){
if((x_24354 < n__4408__auto___24353)){
(a[x_24354] = x_24354);

var G__24355 = (x_24354 + (1));
x_24354 = G__24355;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24356 = (function (flag,meta24357){
this.flag = flag;
this.meta24357 = meta24357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24358,meta24357__$1){
var self__ = this;
var _24358__$1 = this;
return (new cljs.core.async.t_cljs$core$async24356(self__.flag,meta24357__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24358){
var self__ = this;
var _24358__$1 = this;
return self__.meta24357;
});})(flag))
;

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24356.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24357","meta24357",-863697096,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24356";

cljs.core.async.t_cljs$core$async24356.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24356");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24356.
 */
cljs.core.async.__GT_t_cljs$core$async24356 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24356(flag__$1,meta24357){
return (new cljs.core.async.t_cljs$core$async24356(flag__$1,meta24357));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24356(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24359 = (function (flag,cb,meta24360){
this.flag = flag;
this.cb = cb;
this.meta24360 = meta24360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24361,meta24360__$1){
var self__ = this;
var _24361__$1 = this;
return (new cljs.core.async.t_cljs$core$async24359(self__.flag,self__.cb,meta24360__$1));
});

cljs.core.async.t_cljs$core$async24359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24361){
var self__ = this;
var _24361__$1 = this;
return self__.meta24360;
});

cljs.core.async.t_cljs$core$async24359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24360","meta24360",-391346438,null)], null);
});

cljs.core.async.t_cljs$core$async24359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24359";

cljs.core.async.t_cljs$core$async24359.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24359");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24359.
 */
cljs.core.async.__GT_t_cljs$core$async24359 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24359(flag__$1,cb__$1,meta24360){
return (new cljs.core.async.t_cljs$core$async24359(flag__$1,cb__$1,meta24360));
});

}

return (new cljs.core.async.t_cljs$core$async24359(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__24362_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24362_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24363_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24363_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24364 = (i + (1));
i = G__24364;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4534__auto__ = [];
var len__4531__auto___24370 = arguments.length;
var i__4532__auto___24371 = (0);
while(true){
if((i__4532__auto___24371 < len__4531__auto___24370)){
args__4534__auto__.push((arguments[i__4532__auto___24371]));

var G__24372 = (i__4532__auto___24371 + (1));
i__4532__auto___24371 = G__24372;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24367){
var map__24368 = p__24367;
var map__24368__$1 = ((((!((map__24368 == null)))?(((((map__24368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24368):map__24368);
var opts = map__24368__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24365){
var G__24366 = cljs.core.first.call(null,seq24365);
var seq24365__$1 = cljs.core.next.call(null,seq24365);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24366,seq24365__$1);
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
var G__24374 = arguments.length;
switch (G__24374) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22411__auto___24420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___24420){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___24420){
return (function (state_24398){
var state_val_24399 = (state_24398[(1)]);
if((state_val_24399 === (7))){
var inst_24394 = (state_24398[(2)]);
var state_24398__$1 = state_24398;
var statearr_24400_24421 = state_24398__$1;
(statearr_24400_24421[(2)] = inst_24394);

(statearr_24400_24421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (1))){
var state_24398__$1 = state_24398;
var statearr_24401_24422 = state_24398__$1;
(statearr_24401_24422[(2)] = null);

(statearr_24401_24422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (4))){
var inst_24377 = (state_24398[(7)]);
var inst_24377__$1 = (state_24398[(2)]);
var inst_24378 = (inst_24377__$1 == null);
var state_24398__$1 = (function (){var statearr_24402 = state_24398;
(statearr_24402[(7)] = inst_24377__$1);

return statearr_24402;
})();
if(cljs.core.truth_(inst_24378)){
var statearr_24403_24423 = state_24398__$1;
(statearr_24403_24423[(1)] = (5));

} else {
var statearr_24404_24424 = state_24398__$1;
(statearr_24404_24424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (13))){
var state_24398__$1 = state_24398;
var statearr_24405_24425 = state_24398__$1;
(statearr_24405_24425[(2)] = null);

(statearr_24405_24425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (6))){
var inst_24377 = (state_24398[(7)]);
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24398__$1,(11),to,inst_24377);
} else {
if((state_val_24399 === (3))){
var inst_24396 = (state_24398[(2)]);
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24398__$1,inst_24396);
} else {
if((state_val_24399 === (12))){
var state_24398__$1 = state_24398;
var statearr_24406_24426 = state_24398__$1;
(statearr_24406_24426[(2)] = null);

(statearr_24406_24426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (2))){
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24398__$1,(4),from);
} else {
if((state_val_24399 === (11))){
var inst_24387 = (state_24398[(2)]);
var state_24398__$1 = state_24398;
if(cljs.core.truth_(inst_24387)){
var statearr_24407_24427 = state_24398__$1;
(statearr_24407_24427[(1)] = (12));

} else {
var statearr_24408_24428 = state_24398__$1;
(statearr_24408_24428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (9))){
var state_24398__$1 = state_24398;
var statearr_24409_24429 = state_24398__$1;
(statearr_24409_24429[(2)] = null);

(statearr_24409_24429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (5))){
var state_24398__$1 = state_24398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24410_24430 = state_24398__$1;
(statearr_24410_24430[(1)] = (8));

} else {
var statearr_24411_24431 = state_24398__$1;
(statearr_24411_24431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (14))){
var inst_24392 = (state_24398[(2)]);
var state_24398__$1 = state_24398;
var statearr_24412_24432 = state_24398__$1;
(statearr_24412_24432[(2)] = inst_24392);

(statearr_24412_24432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (10))){
var inst_24384 = (state_24398[(2)]);
var state_24398__$1 = state_24398;
var statearr_24413_24433 = state_24398__$1;
(statearr_24413_24433[(2)] = inst_24384);

(statearr_24413_24433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (8))){
var inst_24381 = cljs.core.async.close_BANG_.call(null,to);
var state_24398__$1 = state_24398;
var statearr_24414_24434 = state_24398__$1;
(statearr_24414_24434[(2)] = inst_24381);

(statearr_24414_24434[(1)] = (10));


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
});})(c__22411__auto___24420))
;
return ((function (switch__22252__auto__,c__22411__auto___24420){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_24415 = [null,null,null,null,null,null,null,null];
(statearr_24415[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_24415[(1)] = (1));

return statearr_24415;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24398){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24416){if((e24416 instanceof Object)){
var ex__22256__auto__ = e24416;
var statearr_24417_24435 = state_24398;
(statearr_24417_24435[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24436 = state_24398;
state_24398 = G__24436;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___24420))
})();
var state__22413__auto__ = (function (){var statearr_24418 = f__22412__auto__.call(null);
(statearr_24418[(6)] = c__22411__auto___24420);

return statearr_24418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___24420))
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
return (function (p__24437){
var vec__24438 = p__24437;
var v = cljs.core.nth.call(null,vec__24438,(0),null);
var p = cljs.core.nth.call(null,vec__24438,(1),null);
var job = vec__24438;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22411__auto___24609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___24609,res,vec__24438,v,p,job,jobs,results){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___24609,res,vec__24438,v,p,job,jobs,results){
return (function (state_24445){
var state_val_24446 = (state_24445[(1)]);
if((state_val_24446 === (1))){
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24445__$1,(2),res,v);
} else {
if((state_val_24446 === (2))){
var inst_24442 = (state_24445[(2)]);
var inst_24443 = cljs.core.async.close_BANG_.call(null,res);
var state_24445__$1 = (function (){var statearr_24447 = state_24445;
(statearr_24447[(7)] = inst_24442);

return statearr_24447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24445__$1,inst_24443);
} else {
return null;
}
}
});})(c__22411__auto___24609,res,vec__24438,v,p,job,jobs,results))
;
return ((function (switch__22252__auto__,c__22411__auto___24609,res,vec__24438,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_24448 = [null,null,null,null,null,null,null,null];
(statearr_24448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_24448[(1)] = (1));

return statearr_24448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_24445){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24449){if((e24449 instanceof Object)){
var ex__22256__auto__ = e24449;
var statearr_24450_24610 = state_24445;
(statearr_24450_24610[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24611 = state_24445;
state_24445 = G__24611;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_24445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_24445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___24609,res,vec__24438,v,p,job,jobs,results))
})();
var state__22413__auto__ = (function (){var statearr_24451 = f__22412__auto__.call(null);
(statearr_24451[(6)] = c__22411__auto___24609);

return statearr_24451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___24609,res,vec__24438,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24452){
var vec__24453 = p__24452;
var v = cljs.core.nth.call(null,vec__24453,(0),null);
var p = cljs.core.nth.call(null,vec__24453,(1),null);
var job = vec__24453;
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
var n__4408__auto___24612 = n;
var __24613 = (0);
while(true){
if((__24613 < n__4408__auto___24612)){
var G__24456_24614 = type;
var G__24456_24615__$1 = (((G__24456_24614 instanceof cljs.core.Keyword))?G__24456_24614.fqn:null);
switch (G__24456_24615__$1) {
case "compute":
var c__22411__auto___24617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24613,c__22411__auto___24617,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (__24613,c__22411__auto___24617,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async){
return (function (state_24469){
var state_val_24470 = (state_24469[(1)]);
if((state_val_24470 === (1))){
var state_24469__$1 = state_24469;
var statearr_24471_24618 = state_24469__$1;
(statearr_24471_24618[(2)] = null);

(statearr_24471_24618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24470 === (2))){
var state_24469__$1 = state_24469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24469__$1,(4),jobs);
} else {
if((state_val_24470 === (3))){
var inst_24467 = (state_24469[(2)]);
var state_24469__$1 = state_24469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24469__$1,inst_24467);
} else {
if((state_val_24470 === (4))){
var inst_24459 = (state_24469[(2)]);
var inst_24460 = process.call(null,inst_24459);
var state_24469__$1 = state_24469;
if(cljs.core.truth_(inst_24460)){
var statearr_24472_24619 = state_24469__$1;
(statearr_24472_24619[(1)] = (5));

} else {
var statearr_24473_24620 = state_24469__$1;
(statearr_24473_24620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24470 === (5))){
var state_24469__$1 = state_24469;
var statearr_24474_24621 = state_24469__$1;
(statearr_24474_24621[(2)] = null);

(statearr_24474_24621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24470 === (6))){
var state_24469__$1 = state_24469;
var statearr_24475_24622 = state_24469__$1;
(statearr_24475_24622[(2)] = null);

(statearr_24475_24622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24470 === (7))){
var inst_24465 = (state_24469[(2)]);
var state_24469__$1 = state_24469;
var statearr_24476_24623 = state_24469__$1;
(statearr_24476_24623[(2)] = inst_24465);

(statearr_24476_24623[(1)] = (3));


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
});})(__24613,c__22411__auto___24617,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async))
;
return ((function (__24613,switch__22252__auto__,c__22411__auto___24617,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_24477 = [null,null,null,null,null,null,null];
(statearr_24477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_24477[(1)] = (1));

return statearr_24477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_24469){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24478){if((e24478 instanceof Object)){
var ex__22256__auto__ = e24478;
var statearr_24479_24624 = state_24469;
(statearr_24479_24624[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24625 = state_24469;
state_24469 = G__24625;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_24469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_24469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(__24613,switch__22252__auto__,c__22411__auto___24617,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async))
})();
var state__22413__auto__ = (function (){var statearr_24480 = f__22412__auto__.call(null);
(statearr_24480[(6)] = c__22411__auto___24617);

return statearr_24480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(__24613,c__22411__auto___24617,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async))
);


break;
case "async":
var c__22411__auto___24626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24613,c__22411__auto___24626,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (__24613,c__22411__auto___24626,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async){
return (function (state_24493){
var state_val_24494 = (state_24493[(1)]);
if((state_val_24494 === (1))){
var state_24493__$1 = state_24493;
var statearr_24495_24627 = state_24493__$1;
(statearr_24495_24627[(2)] = null);

(statearr_24495_24627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24494 === (2))){
var state_24493__$1 = state_24493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24493__$1,(4),jobs);
} else {
if((state_val_24494 === (3))){
var inst_24491 = (state_24493[(2)]);
var state_24493__$1 = state_24493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24493__$1,inst_24491);
} else {
if((state_val_24494 === (4))){
var inst_24483 = (state_24493[(2)]);
var inst_24484 = async.call(null,inst_24483);
var state_24493__$1 = state_24493;
if(cljs.core.truth_(inst_24484)){
var statearr_24496_24628 = state_24493__$1;
(statearr_24496_24628[(1)] = (5));

} else {
var statearr_24497_24629 = state_24493__$1;
(statearr_24497_24629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24494 === (5))){
var state_24493__$1 = state_24493;
var statearr_24498_24630 = state_24493__$1;
(statearr_24498_24630[(2)] = null);

(statearr_24498_24630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24494 === (6))){
var state_24493__$1 = state_24493;
var statearr_24499_24631 = state_24493__$1;
(statearr_24499_24631[(2)] = null);

(statearr_24499_24631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24494 === (7))){
var inst_24489 = (state_24493[(2)]);
var state_24493__$1 = state_24493;
var statearr_24500_24632 = state_24493__$1;
(statearr_24500_24632[(2)] = inst_24489);

(statearr_24500_24632[(1)] = (3));


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
});})(__24613,c__22411__auto___24626,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async))
;
return ((function (__24613,switch__22252__auto__,c__22411__auto___24626,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_24501 = [null,null,null,null,null,null,null];
(statearr_24501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_24501[(1)] = (1));

return statearr_24501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_24493){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24502){if((e24502 instanceof Object)){
var ex__22256__auto__ = e24502;
var statearr_24503_24633 = state_24493;
(statearr_24503_24633[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24634 = state_24493;
state_24493 = G__24634;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_24493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_24493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(__24613,switch__22252__auto__,c__22411__auto___24626,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async))
})();
var state__22413__auto__ = (function (){var statearr_24504 = f__22412__auto__.call(null);
(statearr_24504[(6)] = c__22411__auto___24626);

return statearr_24504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(__24613,c__22411__auto___24626,G__24456_24614,G__24456_24615__$1,n__4408__auto___24612,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24456_24615__$1)].join('')));

}

var G__24635 = (__24613 + (1));
__24613 = G__24635;
continue;
} else {
}
break;
}

var c__22411__auto___24636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___24636,jobs,results,process,async){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___24636,jobs,results,process,async){
return (function (state_24526){
var state_val_24527 = (state_24526[(1)]);
if((state_val_24527 === (1))){
var state_24526__$1 = state_24526;
var statearr_24528_24637 = state_24526__$1;
(statearr_24528_24637[(2)] = null);

(statearr_24528_24637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (2))){
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24526__$1,(4),from);
} else {
if((state_val_24527 === (3))){
var inst_24524 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24526__$1,inst_24524);
} else {
if((state_val_24527 === (4))){
var inst_24507 = (state_24526[(7)]);
var inst_24507__$1 = (state_24526[(2)]);
var inst_24508 = (inst_24507__$1 == null);
var state_24526__$1 = (function (){var statearr_24529 = state_24526;
(statearr_24529[(7)] = inst_24507__$1);

return statearr_24529;
})();
if(cljs.core.truth_(inst_24508)){
var statearr_24530_24638 = state_24526__$1;
(statearr_24530_24638[(1)] = (5));

} else {
var statearr_24531_24639 = state_24526__$1;
(statearr_24531_24639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (5))){
var inst_24510 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24526__$1 = state_24526;
var statearr_24532_24640 = state_24526__$1;
(statearr_24532_24640[(2)] = inst_24510);

(statearr_24532_24640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (6))){
var inst_24512 = (state_24526[(8)]);
var inst_24507 = (state_24526[(7)]);
var inst_24512__$1 = cljs.core.async.chan.call(null,(1));
var inst_24513 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24514 = [inst_24507,inst_24512__$1];
var inst_24515 = (new cljs.core.PersistentVector(null,2,(5),inst_24513,inst_24514,null));
var state_24526__$1 = (function (){var statearr_24533 = state_24526;
(statearr_24533[(8)] = inst_24512__$1);

return statearr_24533;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24526__$1,(8),jobs,inst_24515);
} else {
if((state_val_24527 === (7))){
var inst_24522 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
var statearr_24534_24641 = state_24526__$1;
(statearr_24534_24641[(2)] = inst_24522);

(statearr_24534_24641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (8))){
var inst_24512 = (state_24526[(8)]);
var inst_24517 = (state_24526[(2)]);
var state_24526__$1 = (function (){var statearr_24535 = state_24526;
(statearr_24535[(9)] = inst_24517);

return statearr_24535;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24526__$1,(9),results,inst_24512);
} else {
if((state_val_24527 === (9))){
var inst_24519 = (state_24526[(2)]);
var state_24526__$1 = (function (){var statearr_24536 = state_24526;
(statearr_24536[(10)] = inst_24519);

return statearr_24536;
})();
var statearr_24537_24642 = state_24526__$1;
(statearr_24537_24642[(2)] = null);

(statearr_24537_24642[(1)] = (2));


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
});})(c__22411__auto___24636,jobs,results,process,async))
;
return ((function (switch__22252__auto__,c__22411__auto___24636,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_24538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24538[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_24538[(1)] = (1));

return statearr_24538;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_24526){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24539){if((e24539 instanceof Object)){
var ex__22256__auto__ = e24539;
var statearr_24540_24643 = state_24526;
(statearr_24540_24643[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24644 = state_24526;
state_24526 = G__24644;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_24526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_24526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___24636,jobs,results,process,async))
})();
var state__22413__auto__ = (function (){var statearr_24541 = f__22412__auto__.call(null);
(statearr_24541[(6)] = c__22411__auto___24636);

return statearr_24541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___24636,jobs,results,process,async))
);


var c__22411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto__,jobs,results,process,async){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto__,jobs,results,process,async){
return (function (state_24579){
var state_val_24580 = (state_24579[(1)]);
if((state_val_24580 === (7))){
var inst_24575 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
var statearr_24581_24645 = state_24579__$1;
(statearr_24581_24645[(2)] = inst_24575);

(statearr_24581_24645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (20))){
var state_24579__$1 = state_24579;
var statearr_24582_24646 = state_24579__$1;
(statearr_24582_24646[(2)] = null);

(statearr_24582_24646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (1))){
var state_24579__$1 = state_24579;
var statearr_24583_24647 = state_24579__$1;
(statearr_24583_24647[(2)] = null);

(statearr_24583_24647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (4))){
var inst_24544 = (state_24579[(7)]);
var inst_24544__$1 = (state_24579[(2)]);
var inst_24545 = (inst_24544__$1 == null);
var state_24579__$1 = (function (){var statearr_24584 = state_24579;
(statearr_24584[(7)] = inst_24544__$1);

return statearr_24584;
})();
if(cljs.core.truth_(inst_24545)){
var statearr_24585_24648 = state_24579__$1;
(statearr_24585_24648[(1)] = (5));

} else {
var statearr_24586_24649 = state_24579__$1;
(statearr_24586_24649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (15))){
var inst_24557 = (state_24579[(8)]);
var state_24579__$1 = state_24579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24579__$1,(18),to,inst_24557);
} else {
if((state_val_24580 === (21))){
var inst_24570 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
var statearr_24587_24650 = state_24579__$1;
(statearr_24587_24650[(2)] = inst_24570);

(statearr_24587_24650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (13))){
var inst_24572 = (state_24579[(2)]);
var state_24579__$1 = (function (){var statearr_24588 = state_24579;
(statearr_24588[(9)] = inst_24572);

return statearr_24588;
})();
var statearr_24589_24651 = state_24579__$1;
(statearr_24589_24651[(2)] = null);

(statearr_24589_24651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (6))){
var inst_24544 = (state_24579[(7)]);
var state_24579__$1 = state_24579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24579__$1,(11),inst_24544);
} else {
if((state_val_24580 === (17))){
var inst_24565 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
if(cljs.core.truth_(inst_24565)){
var statearr_24590_24652 = state_24579__$1;
(statearr_24590_24652[(1)] = (19));

} else {
var statearr_24591_24653 = state_24579__$1;
(statearr_24591_24653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (3))){
var inst_24577 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24579__$1,inst_24577);
} else {
if((state_val_24580 === (12))){
var inst_24554 = (state_24579[(10)]);
var state_24579__$1 = state_24579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24579__$1,(14),inst_24554);
} else {
if((state_val_24580 === (2))){
var state_24579__$1 = state_24579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24579__$1,(4),results);
} else {
if((state_val_24580 === (19))){
var state_24579__$1 = state_24579;
var statearr_24592_24654 = state_24579__$1;
(statearr_24592_24654[(2)] = null);

(statearr_24592_24654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (11))){
var inst_24554 = (state_24579[(2)]);
var state_24579__$1 = (function (){var statearr_24593 = state_24579;
(statearr_24593[(10)] = inst_24554);

return statearr_24593;
})();
var statearr_24594_24655 = state_24579__$1;
(statearr_24594_24655[(2)] = null);

(statearr_24594_24655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (9))){
var state_24579__$1 = state_24579;
var statearr_24595_24656 = state_24579__$1;
(statearr_24595_24656[(2)] = null);

(statearr_24595_24656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (5))){
var state_24579__$1 = state_24579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24596_24657 = state_24579__$1;
(statearr_24596_24657[(1)] = (8));

} else {
var statearr_24597_24658 = state_24579__$1;
(statearr_24597_24658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (14))){
var inst_24557 = (state_24579[(8)]);
var inst_24559 = (state_24579[(11)]);
var inst_24557__$1 = (state_24579[(2)]);
var inst_24558 = (inst_24557__$1 == null);
var inst_24559__$1 = cljs.core.not.call(null,inst_24558);
var state_24579__$1 = (function (){var statearr_24598 = state_24579;
(statearr_24598[(8)] = inst_24557__$1);

(statearr_24598[(11)] = inst_24559__$1);

return statearr_24598;
})();
if(inst_24559__$1){
var statearr_24599_24659 = state_24579__$1;
(statearr_24599_24659[(1)] = (15));

} else {
var statearr_24600_24660 = state_24579__$1;
(statearr_24600_24660[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (16))){
var inst_24559 = (state_24579[(11)]);
var state_24579__$1 = state_24579;
var statearr_24601_24661 = state_24579__$1;
(statearr_24601_24661[(2)] = inst_24559);

(statearr_24601_24661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (10))){
var inst_24551 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
var statearr_24602_24662 = state_24579__$1;
(statearr_24602_24662[(2)] = inst_24551);

(statearr_24602_24662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (18))){
var inst_24562 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
var statearr_24603_24663 = state_24579__$1;
(statearr_24603_24663[(2)] = inst_24562);

(statearr_24603_24663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (8))){
var inst_24548 = cljs.core.async.close_BANG_.call(null,to);
var state_24579__$1 = state_24579;
var statearr_24604_24664 = state_24579__$1;
(statearr_24604_24664[(2)] = inst_24548);

(statearr_24604_24664[(1)] = (10));


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
});})(c__22411__auto__,jobs,results,process,async))
;
return ((function (switch__22252__auto__,c__22411__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_24605 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_24605[(1)] = (1));

return statearr_24605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_24579){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24606){if((e24606 instanceof Object)){
var ex__22256__auto__ = e24606;
var statearr_24607_24665 = state_24579;
(statearr_24607_24665[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24666 = state_24579;
state_24579 = G__24666;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_24579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_24579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto__,jobs,results,process,async))
})();
var state__22413__auto__ = (function (){var statearr_24608 = f__22412__auto__.call(null);
(statearr_24608[(6)] = c__22411__auto__);

return statearr_24608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto__,jobs,results,process,async))
);

return c__22411__auto__;
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
var G__24668 = arguments.length;
switch (G__24668) {
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
var G__24671 = arguments.length;
switch (G__24671) {
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
var G__24674 = arguments.length;
switch (G__24674) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22411__auto___24723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___24723,tc,fc){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___24723,tc,fc){
return (function (state_24700){
var state_val_24701 = (state_24700[(1)]);
if((state_val_24701 === (7))){
var inst_24696 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24702_24724 = state_24700__$1;
(statearr_24702_24724[(2)] = inst_24696);

(statearr_24702_24724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (1))){
var state_24700__$1 = state_24700;
var statearr_24703_24725 = state_24700__$1;
(statearr_24703_24725[(2)] = null);

(statearr_24703_24725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (4))){
var inst_24677 = (state_24700[(7)]);
var inst_24677__$1 = (state_24700[(2)]);
var inst_24678 = (inst_24677__$1 == null);
var state_24700__$1 = (function (){var statearr_24704 = state_24700;
(statearr_24704[(7)] = inst_24677__$1);

return statearr_24704;
})();
if(cljs.core.truth_(inst_24678)){
var statearr_24705_24726 = state_24700__$1;
(statearr_24705_24726[(1)] = (5));

} else {
var statearr_24706_24727 = state_24700__$1;
(statearr_24706_24727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (13))){
var state_24700__$1 = state_24700;
var statearr_24707_24728 = state_24700__$1;
(statearr_24707_24728[(2)] = null);

(statearr_24707_24728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (6))){
var inst_24677 = (state_24700[(7)]);
var inst_24683 = p.call(null,inst_24677);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24683)){
var statearr_24708_24729 = state_24700__$1;
(statearr_24708_24729[(1)] = (9));

} else {
var statearr_24709_24730 = state_24700__$1;
(statearr_24709_24730[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (3))){
var inst_24698 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24700__$1,inst_24698);
} else {
if((state_val_24701 === (12))){
var state_24700__$1 = state_24700;
var statearr_24710_24731 = state_24700__$1;
(statearr_24710_24731[(2)] = null);

(statearr_24710_24731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (2))){
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24700__$1,(4),ch);
} else {
if((state_val_24701 === (11))){
var inst_24677 = (state_24700[(7)]);
var inst_24687 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24700__$1,(8),inst_24687,inst_24677);
} else {
if((state_val_24701 === (9))){
var state_24700__$1 = state_24700;
var statearr_24711_24732 = state_24700__$1;
(statearr_24711_24732[(2)] = tc);

(statearr_24711_24732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (5))){
var inst_24680 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24681 = cljs.core.async.close_BANG_.call(null,fc);
var state_24700__$1 = (function (){var statearr_24712 = state_24700;
(statearr_24712[(8)] = inst_24680);

return statearr_24712;
})();
var statearr_24713_24733 = state_24700__$1;
(statearr_24713_24733[(2)] = inst_24681);

(statearr_24713_24733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (14))){
var inst_24694 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24714_24734 = state_24700__$1;
(statearr_24714_24734[(2)] = inst_24694);

(statearr_24714_24734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (10))){
var state_24700__$1 = state_24700;
var statearr_24715_24735 = state_24700__$1;
(statearr_24715_24735[(2)] = fc);

(statearr_24715_24735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (8))){
var inst_24689 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24689)){
var statearr_24716_24736 = state_24700__$1;
(statearr_24716_24736[(1)] = (12));

} else {
var statearr_24717_24737 = state_24700__$1;
(statearr_24717_24737[(1)] = (13));

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
});})(c__22411__auto___24723,tc,fc))
;
return ((function (switch__22252__auto__,c__22411__auto___24723,tc,fc){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_24718 = [null,null,null,null,null,null,null,null,null];
(statearr_24718[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_24718[(1)] = (1));

return statearr_24718;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24700){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24719){if((e24719 instanceof Object)){
var ex__22256__auto__ = e24719;
var statearr_24720_24738 = state_24700;
(statearr_24720_24738[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24739 = state_24700;
state_24700 = G__24739;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___24723,tc,fc))
})();
var state__22413__auto__ = (function (){var statearr_24721 = f__22412__auto__.call(null);
(statearr_24721[(6)] = c__22411__auto___24723);

return statearr_24721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___24723,tc,fc))
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
var c__22411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto__){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto__){
return (function (state_24760){
var state_val_24761 = (state_24760[(1)]);
if((state_val_24761 === (7))){
var inst_24756 = (state_24760[(2)]);
var state_24760__$1 = state_24760;
var statearr_24762_24780 = state_24760__$1;
(statearr_24762_24780[(2)] = inst_24756);

(statearr_24762_24780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24761 === (1))){
var inst_24740 = init;
var state_24760__$1 = (function (){var statearr_24763 = state_24760;
(statearr_24763[(7)] = inst_24740);

return statearr_24763;
})();
var statearr_24764_24781 = state_24760__$1;
(statearr_24764_24781[(2)] = null);

(statearr_24764_24781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24761 === (4))){
var inst_24743 = (state_24760[(8)]);
var inst_24743__$1 = (state_24760[(2)]);
var inst_24744 = (inst_24743__$1 == null);
var state_24760__$1 = (function (){var statearr_24765 = state_24760;
(statearr_24765[(8)] = inst_24743__$1);

return statearr_24765;
})();
if(cljs.core.truth_(inst_24744)){
var statearr_24766_24782 = state_24760__$1;
(statearr_24766_24782[(1)] = (5));

} else {
var statearr_24767_24783 = state_24760__$1;
(statearr_24767_24783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24761 === (6))){
var inst_24747 = (state_24760[(9)]);
var inst_24743 = (state_24760[(8)]);
var inst_24740 = (state_24760[(7)]);
var inst_24747__$1 = f.call(null,inst_24740,inst_24743);
var inst_24748 = cljs.core.reduced_QMARK_.call(null,inst_24747__$1);
var state_24760__$1 = (function (){var statearr_24768 = state_24760;
(statearr_24768[(9)] = inst_24747__$1);

return statearr_24768;
})();
if(inst_24748){
var statearr_24769_24784 = state_24760__$1;
(statearr_24769_24784[(1)] = (8));

} else {
var statearr_24770_24785 = state_24760__$1;
(statearr_24770_24785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24761 === (3))){
var inst_24758 = (state_24760[(2)]);
var state_24760__$1 = state_24760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24760__$1,inst_24758);
} else {
if((state_val_24761 === (2))){
var state_24760__$1 = state_24760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24760__$1,(4),ch);
} else {
if((state_val_24761 === (9))){
var inst_24747 = (state_24760[(9)]);
var inst_24740 = inst_24747;
var state_24760__$1 = (function (){var statearr_24771 = state_24760;
(statearr_24771[(7)] = inst_24740);

return statearr_24771;
})();
var statearr_24772_24786 = state_24760__$1;
(statearr_24772_24786[(2)] = null);

(statearr_24772_24786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24761 === (5))){
var inst_24740 = (state_24760[(7)]);
var state_24760__$1 = state_24760;
var statearr_24773_24787 = state_24760__$1;
(statearr_24773_24787[(2)] = inst_24740);

(statearr_24773_24787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24761 === (10))){
var inst_24754 = (state_24760[(2)]);
var state_24760__$1 = state_24760;
var statearr_24774_24788 = state_24760__$1;
(statearr_24774_24788[(2)] = inst_24754);

(statearr_24774_24788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24761 === (8))){
var inst_24747 = (state_24760[(9)]);
var inst_24750 = cljs.core.deref.call(null,inst_24747);
var state_24760__$1 = state_24760;
var statearr_24775_24789 = state_24760__$1;
(statearr_24775_24789[(2)] = inst_24750);

(statearr_24775_24789[(1)] = (10));


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
});})(c__22411__auto__))
;
return ((function (switch__22252__auto__,c__22411__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22253__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22253__auto____0 = (function (){
var statearr_24776 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24776[(0)] = cljs$core$async$reduce_$_state_machine__22253__auto__);

(statearr_24776[(1)] = (1));

return statearr_24776;
});
var cljs$core$async$reduce_$_state_machine__22253__auto____1 = (function (state_24760){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24777){if((e24777 instanceof Object)){
var ex__22256__auto__ = e24777;
var statearr_24778_24790 = state_24760;
(statearr_24778_24790[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24791 = state_24760;
state_24760 = G__24791;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22253__auto__ = function(state_24760){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22253__auto____1.call(this,state_24760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22253__auto____0;
cljs$core$async$reduce_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22253__auto____1;
return cljs$core$async$reduce_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto__))
})();
var state__22413__auto__ = (function (){var statearr_24779 = f__22412__auto__.call(null);
(statearr_24779[(6)] = c__22411__auto__);

return statearr_24779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto__))
);

return c__22411__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto__,f__$1){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto__,f__$1){
return (function (state_24797){
var state_val_24798 = (state_24797[(1)]);
if((state_val_24798 === (1))){
var inst_24792 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24797__$1 = state_24797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24797__$1,(2),inst_24792);
} else {
if((state_val_24798 === (2))){
var inst_24794 = (state_24797[(2)]);
var inst_24795 = f__$1.call(null,inst_24794);
var state_24797__$1 = state_24797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24797__$1,inst_24795);
} else {
return null;
}
}
});})(c__22411__auto__,f__$1))
;
return ((function (switch__22252__auto__,c__22411__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22253__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22253__auto____0 = (function (){
var statearr_24799 = [null,null,null,null,null,null,null];
(statearr_24799[(0)] = cljs$core$async$transduce_$_state_machine__22253__auto__);

(statearr_24799[(1)] = (1));

return statearr_24799;
});
var cljs$core$async$transduce_$_state_machine__22253__auto____1 = (function (state_24797){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24800){if((e24800 instanceof Object)){
var ex__22256__auto__ = e24800;
var statearr_24801_24803 = state_24797;
(statearr_24801_24803[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24804 = state_24797;
state_24797 = G__24804;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22253__auto__ = function(state_24797){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22253__auto____1.call(this,state_24797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22253__auto____0;
cljs$core$async$transduce_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22253__auto____1;
return cljs$core$async$transduce_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto__,f__$1))
})();
var state__22413__auto__ = (function (){var statearr_24802 = f__22412__auto__.call(null);
(statearr_24802[(6)] = c__22411__auto__);

return statearr_24802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto__,f__$1))
);

return c__22411__auto__;
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
var G__24806 = arguments.length;
switch (G__24806) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto__){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto__){
return (function (state_24831){
var state_val_24832 = (state_24831[(1)]);
if((state_val_24832 === (7))){
var inst_24813 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24833_24854 = state_24831__$1;
(statearr_24833_24854[(2)] = inst_24813);

(statearr_24833_24854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (1))){
var inst_24807 = cljs.core.seq.call(null,coll);
var inst_24808 = inst_24807;
var state_24831__$1 = (function (){var statearr_24834 = state_24831;
(statearr_24834[(7)] = inst_24808);

return statearr_24834;
})();
var statearr_24835_24855 = state_24831__$1;
(statearr_24835_24855[(2)] = null);

(statearr_24835_24855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (4))){
var inst_24808 = (state_24831[(7)]);
var inst_24811 = cljs.core.first.call(null,inst_24808);
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24831__$1,(7),ch,inst_24811);
} else {
if((state_val_24832 === (13))){
var inst_24825 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24836_24856 = state_24831__$1;
(statearr_24836_24856[(2)] = inst_24825);

(statearr_24836_24856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (6))){
var inst_24816 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
if(cljs.core.truth_(inst_24816)){
var statearr_24837_24857 = state_24831__$1;
(statearr_24837_24857[(1)] = (8));

} else {
var statearr_24838_24858 = state_24831__$1;
(statearr_24838_24858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (3))){
var inst_24829 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24831__$1,inst_24829);
} else {
if((state_val_24832 === (12))){
var state_24831__$1 = state_24831;
var statearr_24839_24859 = state_24831__$1;
(statearr_24839_24859[(2)] = null);

(statearr_24839_24859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (2))){
var inst_24808 = (state_24831[(7)]);
var state_24831__$1 = state_24831;
if(cljs.core.truth_(inst_24808)){
var statearr_24840_24860 = state_24831__$1;
(statearr_24840_24860[(1)] = (4));

} else {
var statearr_24841_24861 = state_24831__$1;
(statearr_24841_24861[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (11))){
var inst_24822 = cljs.core.async.close_BANG_.call(null,ch);
var state_24831__$1 = state_24831;
var statearr_24842_24862 = state_24831__$1;
(statearr_24842_24862[(2)] = inst_24822);

(statearr_24842_24862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (9))){
var state_24831__$1 = state_24831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24843_24863 = state_24831__$1;
(statearr_24843_24863[(1)] = (11));

} else {
var statearr_24844_24864 = state_24831__$1;
(statearr_24844_24864[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (5))){
var inst_24808 = (state_24831[(7)]);
var state_24831__$1 = state_24831;
var statearr_24845_24865 = state_24831__$1;
(statearr_24845_24865[(2)] = inst_24808);

(statearr_24845_24865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (10))){
var inst_24827 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24846_24866 = state_24831__$1;
(statearr_24846_24866[(2)] = inst_24827);

(statearr_24846_24866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (8))){
var inst_24808 = (state_24831[(7)]);
var inst_24818 = cljs.core.next.call(null,inst_24808);
var inst_24808__$1 = inst_24818;
var state_24831__$1 = (function (){var statearr_24847 = state_24831;
(statearr_24847[(7)] = inst_24808__$1);

return statearr_24847;
})();
var statearr_24848_24867 = state_24831__$1;
(statearr_24848_24867[(2)] = null);

(statearr_24848_24867[(1)] = (2));


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
});})(c__22411__auto__))
;
return ((function (switch__22252__auto__,c__22411__auto__){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_24849 = [null,null,null,null,null,null,null,null];
(statearr_24849[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_24849[(1)] = (1));

return statearr_24849;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24831){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24850){if((e24850 instanceof Object)){
var ex__22256__auto__ = e24850;
var statearr_24851_24868 = state_24831;
(statearr_24851_24868[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24869 = state_24831;
state_24831 = G__24869;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto__))
})();
var state__22413__auto__ = (function (){var statearr_24852 = f__22412__auto__.call(null);
(statearr_24852[(6)] = c__22411__auto__);

return statearr_24852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto__))
);

return c__22411__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24870 = (function (ch,cs,meta24871){
this.ch = ch;
this.cs = cs;
this.meta24871 = meta24871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24872,meta24871__$1){
var self__ = this;
var _24872__$1 = this;
return (new cljs.core.async.t_cljs$core$async24870(self__.ch,self__.cs,meta24871__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24872){
var self__ = this;
var _24872__$1 = this;
return self__.meta24871;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24871","meta24871",-823792119,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24870";

cljs.core.async.t_cljs$core$async24870.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24870");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24870.
 */
cljs.core.async.__GT_t_cljs$core$async24870 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24870(ch__$1,cs__$1,meta24871){
return (new cljs.core.async.t_cljs$core$async24870(ch__$1,cs__$1,meta24871));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24870(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22411__auto___25092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___25092,cs,m,dchan,dctr,done){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___25092,cs,m,dchan,dctr,done){
return (function (state_25007){
var state_val_25008 = (state_25007[(1)]);
if((state_val_25008 === (7))){
var inst_25003 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
var statearr_25009_25093 = state_25007__$1;
(statearr_25009_25093[(2)] = inst_25003);

(statearr_25009_25093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (20))){
var inst_24906 = (state_25007[(7)]);
var inst_24918 = cljs.core.first.call(null,inst_24906);
var inst_24919 = cljs.core.nth.call(null,inst_24918,(0),null);
var inst_24920 = cljs.core.nth.call(null,inst_24918,(1),null);
var state_25007__$1 = (function (){var statearr_25010 = state_25007;
(statearr_25010[(8)] = inst_24919);

return statearr_25010;
})();
if(cljs.core.truth_(inst_24920)){
var statearr_25011_25094 = state_25007__$1;
(statearr_25011_25094[(1)] = (22));

} else {
var statearr_25012_25095 = state_25007__$1;
(statearr_25012_25095[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (27))){
var inst_24955 = (state_25007[(9)]);
var inst_24875 = (state_25007[(10)]);
var inst_24948 = (state_25007[(11)]);
var inst_24950 = (state_25007[(12)]);
var inst_24955__$1 = cljs.core._nth.call(null,inst_24948,inst_24950);
var inst_24956 = cljs.core.async.put_BANG_.call(null,inst_24955__$1,inst_24875,done);
var state_25007__$1 = (function (){var statearr_25013 = state_25007;
(statearr_25013[(9)] = inst_24955__$1);

return statearr_25013;
})();
if(cljs.core.truth_(inst_24956)){
var statearr_25014_25096 = state_25007__$1;
(statearr_25014_25096[(1)] = (30));

} else {
var statearr_25015_25097 = state_25007__$1;
(statearr_25015_25097[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (1))){
var state_25007__$1 = state_25007;
var statearr_25016_25098 = state_25007__$1;
(statearr_25016_25098[(2)] = null);

(statearr_25016_25098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (24))){
var inst_24906 = (state_25007[(7)]);
var inst_24925 = (state_25007[(2)]);
var inst_24926 = cljs.core.next.call(null,inst_24906);
var inst_24884 = inst_24926;
var inst_24885 = null;
var inst_24886 = (0);
var inst_24887 = (0);
var state_25007__$1 = (function (){var statearr_25017 = state_25007;
(statearr_25017[(13)] = inst_24887);

(statearr_25017[(14)] = inst_24885);

(statearr_25017[(15)] = inst_24884);

(statearr_25017[(16)] = inst_24886);

(statearr_25017[(17)] = inst_24925);

return statearr_25017;
})();
var statearr_25018_25099 = state_25007__$1;
(statearr_25018_25099[(2)] = null);

(statearr_25018_25099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (39))){
var state_25007__$1 = state_25007;
var statearr_25022_25100 = state_25007__$1;
(statearr_25022_25100[(2)] = null);

(statearr_25022_25100[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (4))){
var inst_24875 = (state_25007[(10)]);
var inst_24875__$1 = (state_25007[(2)]);
var inst_24876 = (inst_24875__$1 == null);
var state_25007__$1 = (function (){var statearr_25023 = state_25007;
(statearr_25023[(10)] = inst_24875__$1);

return statearr_25023;
})();
if(cljs.core.truth_(inst_24876)){
var statearr_25024_25101 = state_25007__$1;
(statearr_25024_25101[(1)] = (5));

} else {
var statearr_25025_25102 = state_25007__$1;
(statearr_25025_25102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (15))){
var inst_24887 = (state_25007[(13)]);
var inst_24885 = (state_25007[(14)]);
var inst_24884 = (state_25007[(15)]);
var inst_24886 = (state_25007[(16)]);
var inst_24902 = (state_25007[(2)]);
var inst_24903 = (inst_24887 + (1));
var tmp25019 = inst_24885;
var tmp25020 = inst_24884;
var tmp25021 = inst_24886;
var inst_24884__$1 = tmp25020;
var inst_24885__$1 = tmp25019;
var inst_24886__$1 = tmp25021;
var inst_24887__$1 = inst_24903;
var state_25007__$1 = (function (){var statearr_25026 = state_25007;
(statearr_25026[(13)] = inst_24887__$1);

(statearr_25026[(14)] = inst_24885__$1);

(statearr_25026[(15)] = inst_24884__$1);

(statearr_25026[(18)] = inst_24902);

(statearr_25026[(16)] = inst_24886__$1);

return statearr_25026;
})();
var statearr_25027_25103 = state_25007__$1;
(statearr_25027_25103[(2)] = null);

(statearr_25027_25103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (21))){
var inst_24929 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
var statearr_25031_25104 = state_25007__$1;
(statearr_25031_25104[(2)] = inst_24929);

(statearr_25031_25104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (31))){
var inst_24955 = (state_25007[(9)]);
var inst_24959 = done.call(null,null);
var inst_24960 = cljs.core.async.untap_STAR_.call(null,m,inst_24955);
var state_25007__$1 = (function (){var statearr_25032 = state_25007;
(statearr_25032[(19)] = inst_24959);

return statearr_25032;
})();
var statearr_25033_25105 = state_25007__$1;
(statearr_25033_25105[(2)] = inst_24960);

(statearr_25033_25105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (32))){
var inst_24948 = (state_25007[(11)]);
var inst_24949 = (state_25007[(20)]);
var inst_24947 = (state_25007[(21)]);
var inst_24950 = (state_25007[(12)]);
var inst_24962 = (state_25007[(2)]);
var inst_24963 = (inst_24950 + (1));
var tmp25028 = inst_24948;
var tmp25029 = inst_24949;
var tmp25030 = inst_24947;
var inst_24947__$1 = tmp25030;
var inst_24948__$1 = tmp25028;
var inst_24949__$1 = tmp25029;
var inst_24950__$1 = inst_24963;
var state_25007__$1 = (function (){var statearr_25034 = state_25007;
(statearr_25034[(22)] = inst_24962);

(statearr_25034[(11)] = inst_24948__$1);

(statearr_25034[(20)] = inst_24949__$1);

(statearr_25034[(21)] = inst_24947__$1);

(statearr_25034[(12)] = inst_24950__$1);

return statearr_25034;
})();
var statearr_25035_25106 = state_25007__$1;
(statearr_25035_25106[(2)] = null);

(statearr_25035_25106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (40))){
var inst_24975 = (state_25007[(23)]);
var inst_24979 = done.call(null,null);
var inst_24980 = cljs.core.async.untap_STAR_.call(null,m,inst_24975);
var state_25007__$1 = (function (){var statearr_25036 = state_25007;
(statearr_25036[(24)] = inst_24979);

return statearr_25036;
})();
var statearr_25037_25107 = state_25007__$1;
(statearr_25037_25107[(2)] = inst_24980);

(statearr_25037_25107[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (33))){
var inst_24966 = (state_25007[(25)]);
var inst_24968 = cljs.core.chunked_seq_QMARK_.call(null,inst_24966);
var state_25007__$1 = state_25007;
if(inst_24968){
var statearr_25038_25108 = state_25007__$1;
(statearr_25038_25108[(1)] = (36));

} else {
var statearr_25039_25109 = state_25007__$1;
(statearr_25039_25109[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (13))){
var inst_24896 = (state_25007[(26)]);
var inst_24899 = cljs.core.async.close_BANG_.call(null,inst_24896);
var state_25007__$1 = state_25007;
var statearr_25040_25110 = state_25007__$1;
(statearr_25040_25110[(2)] = inst_24899);

(statearr_25040_25110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (22))){
var inst_24919 = (state_25007[(8)]);
var inst_24922 = cljs.core.async.close_BANG_.call(null,inst_24919);
var state_25007__$1 = state_25007;
var statearr_25041_25111 = state_25007__$1;
(statearr_25041_25111[(2)] = inst_24922);

(statearr_25041_25111[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (36))){
var inst_24966 = (state_25007[(25)]);
var inst_24970 = cljs.core.chunk_first.call(null,inst_24966);
var inst_24971 = cljs.core.chunk_rest.call(null,inst_24966);
var inst_24972 = cljs.core.count.call(null,inst_24970);
var inst_24947 = inst_24971;
var inst_24948 = inst_24970;
var inst_24949 = inst_24972;
var inst_24950 = (0);
var state_25007__$1 = (function (){var statearr_25042 = state_25007;
(statearr_25042[(11)] = inst_24948);

(statearr_25042[(20)] = inst_24949);

(statearr_25042[(21)] = inst_24947);

(statearr_25042[(12)] = inst_24950);

return statearr_25042;
})();
var statearr_25043_25112 = state_25007__$1;
(statearr_25043_25112[(2)] = null);

(statearr_25043_25112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (41))){
var inst_24966 = (state_25007[(25)]);
var inst_24982 = (state_25007[(2)]);
var inst_24983 = cljs.core.next.call(null,inst_24966);
var inst_24947 = inst_24983;
var inst_24948 = null;
var inst_24949 = (0);
var inst_24950 = (0);
var state_25007__$1 = (function (){var statearr_25044 = state_25007;
(statearr_25044[(27)] = inst_24982);

(statearr_25044[(11)] = inst_24948);

(statearr_25044[(20)] = inst_24949);

(statearr_25044[(21)] = inst_24947);

(statearr_25044[(12)] = inst_24950);

return statearr_25044;
})();
var statearr_25045_25113 = state_25007__$1;
(statearr_25045_25113[(2)] = null);

(statearr_25045_25113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (43))){
var state_25007__$1 = state_25007;
var statearr_25046_25114 = state_25007__$1;
(statearr_25046_25114[(2)] = null);

(statearr_25046_25114[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (29))){
var inst_24991 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
var statearr_25047_25115 = state_25007__$1;
(statearr_25047_25115[(2)] = inst_24991);

(statearr_25047_25115[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (44))){
var inst_25000 = (state_25007[(2)]);
var state_25007__$1 = (function (){var statearr_25048 = state_25007;
(statearr_25048[(28)] = inst_25000);

return statearr_25048;
})();
var statearr_25049_25116 = state_25007__$1;
(statearr_25049_25116[(2)] = null);

(statearr_25049_25116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (6))){
var inst_24939 = (state_25007[(29)]);
var inst_24938 = cljs.core.deref.call(null,cs);
var inst_24939__$1 = cljs.core.keys.call(null,inst_24938);
var inst_24940 = cljs.core.count.call(null,inst_24939__$1);
var inst_24941 = cljs.core.reset_BANG_.call(null,dctr,inst_24940);
var inst_24946 = cljs.core.seq.call(null,inst_24939__$1);
var inst_24947 = inst_24946;
var inst_24948 = null;
var inst_24949 = (0);
var inst_24950 = (0);
var state_25007__$1 = (function (){var statearr_25050 = state_25007;
(statearr_25050[(29)] = inst_24939__$1);

(statearr_25050[(11)] = inst_24948);

(statearr_25050[(20)] = inst_24949);

(statearr_25050[(21)] = inst_24947);

(statearr_25050[(30)] = inst_24941);

(statearr_25050[(12)] = inst_24950);

return statearr_25050;
})();
var statearr_25051_25117 = state_25007__$1;
(statearr_25051_25117[(2)] = null);

(statearr_25051_25117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (28))){
var inst_24947 = (state_25007[(21)]);
var inst_24966 = (state_25007[(25)]);
var inst_24966__$1 = cljs.core.seq.call(null,inst_24947);
var state_25007__$1 = (function (){var statearr_25052 = state_25007;
(statearr_25052[(25)] = inst_24966__$1);

return statearr_25052;
})();
if(inst_24966__$1){
var statearr_25053_25118 = state_25007__$1;
(statearr_25053_25118[(1)] = (33));

} else {
var statearr_25054_25119 = state_25007__$1;
(statearr_25054_25119[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (25))){
var inst_24949 = (state_25007[(20)]);
var inst_24950 = (state_25007[(12)]);
var inst_24952 = (inst_24950 < inst_24949);
var inst_24953 = inst_24952;
var state_25007__$1 = state_25007;
if(cljs.core.truth_(inst_24953)){
var statearr_25055_25120 = state_25007__$1;
(statearr_25055_25120[(1)] = (27));

} else {
var statearr_25056_25121 = state_25007__$1;
(statearr_25056_25121[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (34))){
var state_25007__$1 = state_25007;
var statearr_25057_25122 = state_25007__$1;
(statearr_25057_25122[(2)] = null);

(statearr_25057_25122[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (17))){
var state_25007__$1 = state_25007;
var statearr_25058_25123 = state_25007__$1;
(statearr_25058_25123[(2)] = null);

(statearr_25058_25123[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (3))){
var inst_25005 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25007__$1,inst_25005);
} else {
if((state_val_25008 === (12))){
var inst_24934 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
var statearr_25059_25124 = state_25007__$1;
(statearr_25059_25124[(2)] = inst_24934);

(statearr_25059_25124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (2))){
var state_25007__$1 = state_25007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25007__$1,(4),ch);
} else {
if((state_val_25008 === (23))){
var state_25007__$1 = state_25007;
var statearr_25060_25125 = state_25007__$1;
(statearr_25060_25125[(2)] = null);

(statearr_25060_25125[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (35))){
var inst_24989 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
var statearr_25061_25126 = state_25007__$1;
(statearr_25061_25126[(2)] = inst_24989);

(statearr_25061_25126[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (19))){
var inst_24906 = (state_25007[(7)]);
var inst_24910 = cljs.core.chunk_first.call(null,inst_24906);
var inst_24911 = cljs.core.chunk_rest.call(null,inst_24906);
var inst_24912 = cljs.core.count.call(null,inst_24910);
var inst_24884 = inst_24911;
var inst_24885 = inst_24910;
var inst_24886 = inst_24912;
var inst_24887 = (0);
var state_25007__$1 = (function (){var statearr_25062 = state_25007;
(statearr_25062[(13)] = inst_24887);

(statearr_25062[(14)] = inst_24885);

(statearr_25062[(15)] = inst_24884);

(statearr_25062[(16)] = inst_24886);

return statearr_25062;
})();
var statearr_25063_25127 = state_25007__$1;
(statearr_25063_25127[(2)] = null);

(statearr_25063_25127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (11))){
var inst_24906 = (state_25007[(7)]);
var inst_24884 = (state_25007[(15)]);
var inst_24906__$1 = cljs.core.seq.call(null,inst_24884);
var state_25007__$1 = (function (){var statearr_25064 = state_25007;
(statearr_25064[(7)] = inst_24906__$1);

return statearr_25064;
})();
if(inst_24906__$1){
var statearr_25065_25128 = state_25007__$1;
(statearr_25065_25128[(1)] = (16));

} else {
var statearr_25066_25129 = state_25007__$1;
(statearr_25066_25129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (9))){
var inst_24936 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
var statearr_25067_25130 = state_25007__$1;
(statearr_25067_25130[(2)] = inst_24936);

(statearr_25067_25130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (5))){
var inst_24882 = cljs.core.deref.call(null,cs);
var inst_24883 = cljs.core.seq.call(null,inst_24882);
var inst_24884 = inst_24883;
var inst_24885 = null;
var inst_24886 = (0);
var inst_24887 = (0);
var state_25007__$1 = (function (){var statearr_25068 = state_25007;
(statearr_25068[(13)] = inst_24887);

(statearr_25068[(14)] = inst_24885);

(statearr_25068[(15)] = inst_24884);

(statearr_25068[(16)] = inst_24886);

return statearr_25068;
})();
var statearr_25069_25131 = state_25007__$1;
(statearr_25069_25131[(2)] = null);

(statearr_25069_25131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (14))){
var state_25007__$1 = state_25007;
var statearr_25070_25132 = state_25007__$1;
(statearr_25070_25132[(2)] = null);

(statearr_25070_25132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (45))){
var inst_24997 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
var statearr_25071_25133 = state_25007__$1;
(statearr_25071_25133[(2)] = inst_24997);

(statearr_25071_25133[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (26))){
var inst_24939 = (state_25007[(29)]);
var inst_24993 = (state_25007[(2)]);
var inst_24994 = cljs.core.seq.call(null,inst_24939);
var state_25007__$1 = (function (){var statearr_25072 = state_25007;
(statearr_25072[(31)] = inst_24993);

return statearr_25072;
})();
if(inst_24994){
var statearr_25073_25134 = state_25007__$1;
(statearr_25073_25134[(1)] = (42));

} else {
var statearr_25074_25135 = state_25007__$1;
(statearr_25074_25135[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (16))){
var inst_24906 = (state_25007[(7)]);
var inst_24908 = cljs.core.chunked_seq_QMARK_.call(null,inst_24906);
var state_25007__$1 = state_25007;
if(inst_24908){
var statearr_25075_25136 = state_25007__$1;
(statearr_25075_25136[(1)] = (19));

} else {
var statearr_25076_25137 = state_25007__$1;
(statearr_25076_25137[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (38))){
var inst_24986 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
var statearr_25077_25138 = state_25007__$1;
(statearr_25077_25138[(2)] = inst_24986);

(statearr_25077_25138[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (30))){
var state_25007__$1 = state_25007;
var statearr_25078_25139 = state_25007__$1;
(statearr_25078_25139[(2)] = null);

(statearr_25078_25139[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (10))){
var inst_24887 = (state_25007[(13)]);
var inst_24885 = (state_25007[(14)]);
var inst_24895 = cljs.core._nth.call(null,inst_24885,inst_24887);
var inst_24896 = cljs.core.nth.call(null,inst_24895,(0),null);
var inst_24897 = cljs.core.nth.call(null,inst_24895,(1),null);
var state_25007__$1 = (function (){var statearr_25079 = state_25007;
(statearr_25079[(26)] = inst_24896);

return statearr_25079;
})();
if(cljs.core.truth_(inst_24897)){
var statearr_25080_25140 = state_25007__$1;
(statearr_25080_25140[(1)] = (13));

} else {
var statearr_25081_25141 = state_25007__$1;
(statearr_25081_25141[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (18))){
var inst_24932 = (state_25007[(2)]);
var state_25007__$1 = state_25007;
var statearr_25082_25142 = state_25007__$1;
(statearr_25082_25142[(2)] = inst_24932);

(statearr_25082_25142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (42))){
var state_25007__$1 = state_25007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25007__$1,(45),dchan);
} else {
if((state_val_25008 === (37))){
var inst_24875 = (state_25007[(10)]);
var inst_24966 = (state_25007[(25)]);
var inst_24975 = (state_25007[(23)]);
var inst_24975__$1 = cljs.core.first.call(null,inst_24966);
var inst_24976 = cljs.core.async.put_BANG_.call(null,inst_24975__$1,inst_24875,done);
var state_25007__$1 = (function (){var statearr_25083 = state_25007;
(statearr_25083[(23)] = inst_24975__$1);

return statearr_25083;
})();
if(cljs.core.truth_(inst_24976)){
var statearr_25084_25143 = state_25007__$1;
(statearr_25084_25143[(1)] = (39));

} else {
var statearr_25085_25144 = state_25007__$1;
(statearr_25085_25144[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25008 === (8))){
var inst_24887 = (state_25007[(13)]);
var inst_24886 = (state_25007[(16)]);
var inst_24889 = (inst_24887 < inst_24886);
var inst_24890 = inst_24889;
var state_25007__$1 = state_25007;
if(cljs.core.truth_(inst_24890)){
var statearr_25086_25145 = state_25007__$1;
(statearr_25086_25145[(1)] = (10));

} else {
var statearr_25087_25146 = state_25007__$1;
(statearr_25087_25146[(1)] = (11));

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
});})(c__22411__auto___25092,cs,m,dchan,dctr,done))
;
return ((function (switch__22252__auto__,c__22411__auto___25092,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22253__auto__ = null;
var cljs$core$async$mult_$_state_machine__22253__auto____0 = (function (){
var statearr_25088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25088[(0)] = cljs$core$async$mult_$_state_machine__22253__auto__);

(statearr_25088[(1)] = (1));

return statearr_25088;
});
var cljs$core$async$mult_$_state_machine__22253__auto____1 = (function (state_25007){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25089){if((e25089 instanceof Object)){
var ex__22256__auto__ = e25089;
var statearr_25090_25147 = state_25007;
(statearr_25090_25147[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25148 = state_25007;
state_25007 = G__25148;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22253__auto__ = function(state_25007){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22253__auto____1.call(this,state_25007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22253__auto____0;
cljs$core$async$mult_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22253__auto____1;
return cljs$core$async$mult_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___25092,cs,m,dchan,dctr,done))
})();
var state__22413__auto__ = (function (){var statearr_25091 = f__22412__auto__.call(null);
(statearr_25091[(6)] = c__22411__auto___25092);

return statearr_25091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___25092,cs,m,dchan,dctr,done))
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
var G__25150 = arguments.length;
switch (G__25150) {
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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25162 = arguments.length;
var i__4532__auto___25163 = (0);
while(true){
if((i__4532__auto___25163 < len__4531__auto___25162)){
args__4534__auto__.push((arguments[i__4532__auto___25163]));

var G__25164 = (i__4532__auto___25163 + (1));
i__4532__auto___25163 = G__25164;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25156){
var map__25157 = p__25156;
var map__25157__$1 = ((((!((map__25157 == null)))?(((((map__25157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25157):map__25157);
var opts = map__25157__$1;
var statearr_25159_25165 = state;
(statearr_25159_25165[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25157,map__25157__$1,opts){
return (function (val){
var statearr_25160_25166 = state;
(statearr_25160_25166[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25157,map__25157__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25161_25167 = state;
(statearr_25161_25167[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25152){
var G__25153 = cljs.core.first.call(null,seq25152);
var seq25152__$1 = cljs.core.next.call(null,seq25152);
var G__25154 = cljs.core.first.call(null,seq25152__$1);
var seq25152__$2 = cljs.core.next.call(null,seq25152__$1);
var G__25155 = cljs.core.first.call(null,seq25152__$2);
var seq25152__$3 = cljs.core.next.call(null,seq25152__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25153,G__25154,G__25155,seq25152__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25168 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25169){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25169 = meta25169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25170,meta25169__$1){
var self__ = this;
var _25170__$1 = this;
return (new cljs.core.async.t_cljs$core$async25168(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25169__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25170){
var self__ = this;
var _25170__$1 = this;
return self__.meta25169;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25168.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25169","meta25169",-1552689171,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25168";

cljs.core.async.t_cljs$core$async25168.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25168");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25168.
 */
cljs.core.async.__GT_t_cljs$core$async25168 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25168(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25169){
return (new cljs.core.async.t_cljs$core$async25168(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25169));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25168(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22411__auto___25332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___25332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___25332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25272){
var state_val_25273 = (state_25272[(1)]);
if((state_val_25273 === (7))){
var inst_25187 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25274_25333 = state_25272__$1;
(statearr_25274_25333[(2)] = inst_25187);

(statearr_25274_25333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (20))){
var inst_25199 = (state_25272[(7)]);
var state_25272__$1 = state_25272;
var statearr_25275_25334 = state_25272__$1;
(statearr_25275_25334[(2)] = inst_25199);

(statearr_25275_25334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (27))){
var state_25272__$1 = state_25272;
var statearr_25276_25335 = state_25272__$1;
(statearr_25276_25335[(2)] = null);

(statearr_25276_25335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (1))){
var inst_25174 = (state_25272[(8)]);
var inst_25174__$1 = calc_state.call(null);
var inst_25176 = (inst_25174__$1 == null);
var inst_25177 = cljs.core.not.call(null,inst_25176);
var state_25272__$1 = (function (){var statearr_25277 = state_25272;
(statearr_25277[(8)] = inst_25174__$1);

return statearr_25277;
})();
if(inst_25177){
var statearr_25278_25336 = state_25272__$1;
(statearr_25278_25336[(1)] = (2));

} else {
var statearr_25279_25337 = state_25272__$1;
(statearr_25279_25337[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (24))){
var inst_25232 = (state_25272[(9)]);
var inst_25246 = (state_25272[(10)]);
var inst_25223 = (state_25272[(11)]);
var inst_25246__$1 = inst_25223.call(null,inst_25232);
var state_25272__$1 = (function (){var statearr_25280 = state_25272;
(statearr_25280[(10)] = inst_25246__$1);

return statearr_25280;
})();
if(cljs.core.truth_(inst_25246__$1)){
var statearr_25281_25338 = state_25272__$1;
(statearr_25281_25338[(1)] = (29));

} else {
var statearr_25282_25339 = state_25272__$1;
(statearr_25282_25339[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (4))){
var inst_25190 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25190)){
var statearr_25283_25340 = state_25272__$1;
(statearr_25283_25340[(1)] = (8));

} else {
var statearr_25284_25341 = state_25272__$1;
(statearr_25284_25341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (15))){
var inst_25217 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25217)){
var statearr_25285_25342 = state_25272__$1;
(statearr_25285_25342[(1)] = (19));

} else {
var statearr_25286_25343 = state_25272__$1;
(statearr_25286_25343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (21))){
var inst_25222 = (state_25272[(12)]);
var inst_25222__$1 = (state_25272[(2)]);
var inst_25223 = cljs.core.get.call(null,inst_25222__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25224 = cljs.core.get.call(null,inst_25222__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25225 = cljs.core.get.call(null,inst_25222__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25272__$1 = (function (){var statearr_25287 = state_25272;
(statearr_25287[(13)] = inst_25224);

(statearr_25287[(11)] = inst_25223);

(statearr_25287[(12)] = inst_25222__$1);

return statearr_25287;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25272__$1,(22),inst_25225);
} else {
if((state_val_25273 === (31))){
var inst_25254 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25254)){
var statearr_25288_25344 = state_25272__$1;
(statearr_25288_25344[(1)] = (32));

} else {
var statearr_25289_25345 = state_25272__$1;
(statearr_25289_25345[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (32))){
var inst_25231 = (state_25272[(14)]);
var state_25272__$1 = state_25272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25272__$1,(35),out,inst_25231);
} else {
if((state_val_25273 === (33))){
var inst_25222 = (state_25272[(12)]);
var inst_25199 = inst_25222;
var state_25272__$1 = (function (){var statearr_25290 = state_25272;
(statearr_25290[(7)] = inst_25199);

return statearr_25290;
})();
var statearr_25291_25346 = state_25272__$1;
(statearr_25291_25346[(2)] = null);

(statearr_25291_25346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (13))){
var inst_25199 = (state_25272[(7)]);
var inst_25206 = inst_25199.cljs$lang$protocol_mask$partition0$;
var inst_25207 = (inst_25206 & (64));
var inst_25208 = inst_25199.cljs$core$ISeq$;
var inst_25209 = (cljs.core.PROTOCOL_SENTINEL === inst_25208);
var inst_25210 = ((inst_25207) || (inst_25209));
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25210)){
var statearr_25292_25347 = state_25272__$1;
(statearr_25292_25347[(1)] = (16));

} else {
var statearr_25293_25348 = state_25272__$1;
(statearr_25293_25348[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (22))){
var inst_25232 = (state_25272[(9)]);
var inst_25231 = (state_25272[(14)]);
var inst_25230 = (state_25272[(2)]);
var inst_25231__$1 = cljs.core.nth.call(null,inst_25230,(0),null);
var inst_25232__$1 = cljs.core.nth.call(null,inst_25230,(1),null);
var inst_25233 = (inst_25231__$1 == null);
var inst_25234 = cljs.core._EQ_.call(null,inst_25232__$1,change);
var inst_25235 = ((inst_25233) || (inst_25234));
var state_25272__$1 = (function (){var statearr_25294 = state_25272;
(statearr_25294[(9)] = inst_25232__$1);

(statearr_25294[(14)] = inst_25231__$1);

return statearr_25294;
})();
if(cljs.core.truth_(inst_25235)){
var statearr_25295_25349 = state_25272__$1;
(statearr_25295_25349[(1)] = (23));

} else {
var statearr_25296_25350 = state_25272__$1;
(statearr_25296_25350[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (36))){
var inst_25222 = (state_25272[(12)]);
var inst_25199 = inst_25222;
var state_25272__$1 = (function (){var statearr_25297 = state_25272;
(statearr_25297[(7)] = inst_25199);

return statearr_25297;
})();
var statearr_25298_25351 = state_25272__$1;
(statearr_25298_25351[(2)] = null);

(statearr_25298_25351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (29))){
var inst_25246 = (state_25272[(10)]);
var state_25272__$1 = state_25272;
var statearr_25299_25352 = state_25272__$1;
(statearr_25299_25352[(2)] = inst_25246);

(statearr_25299_25352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (6))){
var state_25272__$1 = state_25272;
var statearr_25300_25353 = state_25272__$1;
(statearr_25300_25353[(2)] = false);

(statearr_25300_25353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (28))){
var inst_25242 = (state_25272[(2)]);
var inst_25243 = calc_state.call(null);
var inst_25199 = inst_25243;
var state_25272__$1 = (function (){var statearr_25301 = state_25272;
(statearr_25301[(15)] = inst_25242);

(statearr_25301[(7)] = inst_25199);

return statearr_25301;
})();
var statearr_25302_25354 = state_25272__$1;
(statearr_25302_25354[(2)] = null);

(statearr_25302_25354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (25))){
var inst_25268 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25303_25355 = state_25272__$1;
(statearr_25303_25355[(2)] = inst_25268);

(statearr_25303_25355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (34))){
var inst_25266 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25304_25356 = state_25272__$1;
(statearr_25304_25356[(2)] = inst_25266);

(statearr_25304_25356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (17))){
var state_25272__$1 = state_25272;
var statearr_25305_25357 = state_25272__$1;
(statearr_25305_25357[(2)] = false);

(statearr_25305_25357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (3))){
var state_25272__$1 = state_25272;
var statearr_25306_25358 = state_25272__$1;
(statearr_25306_25358[(2)] = false);

(statearr_25306_25358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (12))){
var inst_25270 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25272__$1,inst_25270);
} else {
if((state_val_25273 === (2))){
var inst_25174 = (state_25272[(8)]);
var inst_25179 = inst_25174.cljs$lang$protocol_mask$partition0$;
var inst_25180 = (inst_25179 & (64));
var inst_25181 = inst_25174.cljs$core$ISeq$;
var inst_25182 = (cljs.core.PROTOCOL_SENTINEL === inst_25181);
var inst_25183 = ((inst_25180) || (inst_25182));
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25183)){
var statearr_25307_25359 = state_25272__$1;
(statearr_25307_25359[(1)] = (5));

} else {
var statearr_25308_25360 = state_25272__$1;
(statearr_25308_25360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (23))){
var inst_25231 = (state_25272[(14)]);
var inst_25237 = (inst_25231 == null);
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25237)){
var statearr_25309_25361 = state_25272__$1;
(statearr_25309_25361[(1)] = (26));

} else {
var statearr_25310_25362 = state_25272__$1;
(statearr_25310_25362[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (35))){
var inst_25257 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25257)){
var statearr_25311_25363 = state_25272__$1;
(statearr_25311_25363[(1)] = (36));

} else {
var statearr_25312_25364 = state_25272__$1;
(statearr_25312_25364[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (19))){
var inst_25199 = (state_25272[(7)]);
var inst_25219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25199);
var state_25272__$1 = state_25272;
var statearr_25313_25365 = state_25272__$1;
(statearr_25313_25365[(2)] = inst_25219);

(statearr_25313_25365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (11))){
var inst_25199 = (state_25272[(7)]);
var inst_25203 = (inst_25199 == null);
var inst_25204 = cljs.core.not.call(null,inst_25203);
var state_25272__$1 = state_25272;
if(inst_25204){
var statearr_25314_25366 = state_25272__$1;
(statearr_25314_25366[(1)] = (13));

} else {
var statearr_25315_25367 = state_25272__$1;
(statearr_25315_25367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (9))){
var inst_25174 = (state_25272[(8)]);
var state_25272__$1 = state_25272;
var statearr_25316_25368 = state_25272__$1;
(statearr_25316_25368[(2)] = inst_25174);

(statearr_25316_25368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (5))){
var state_25272__$1 = state_25272;
var statearr_25317_25369 = state_25272__$1;
(statearr_25317_25369[(2)] = true);

(statearr_25317_25369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (14))){
var state_25272__$1 = state_25272;
var statearr_25318_25370 = state_25272__$1;
(statearr_25318_25370[(2)] = false);

(statearr_25318_25370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (26))){
var inst_25232 = (state_25272[(9)]);
var inst_25239 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25232);
var state_25272__$1 = state_25272;
var statearr_25319_25371 = state_25272__$1;
(statearr_25319_25371[(2)] = inst_25239);

(statearr_25319_25371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (16))){
var state_25272__$1 = state_25272;
var statearr_25320_25372 = state_25272__$1;
(statearr_25320_25372[(2)] = true);

(statearr_25320_25372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (38))){
var inst_25262 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25321_25373 = state_25272__$1;
(statearr_25321_25373[(2)] = inst_25262);

(statearr_25321_25373[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (30))){
var inst_25232 = (state_25272[(9)]);
var inst_25224 = (state_25272[(13)]);
var inst_25223 = (state_25272[(11)]);
var inst_25249 = cljs.core.empty_QMARK_.call(null,inst_25223);
var inst_25250 = inst_25224.call(null,inst_25232);
var inst_25251 = cljs.core.not.call(null,inst_25250);
var inst_25252 = ((inst_25249) && (inst_25251));
var state_25272__$1 = state_25272;
var statearr_25322_25374 = state_25272__$1;
(statearr_25322_25374[(2)] = inst_25252);

(statearr_25322_25374[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (10))){
var inst_25174 = (state_25272[(8)]);
var inst_25195 = (state_25272[(2)]);
var inst_25196 = cljs.core.get.call(null,inst_25195,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25197 = cljs.core.get.call(null,inst_25195,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25198 = cljs.core.get.call(null,inst_25195,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25199 = inst_25174;
var state_25272__$1 = (function (){var statearr_25323 = state_25272;
(statearr_25323[(7)] = inst_25199);

(statearr_25323[(16)] = inst_25196);

(statearr_25323[(17)] = inst_25197);

(statearr_25323[(18)] = inst_25198);

return statearr_25323;
})();
var statearr_25324_25375 = state_25272__$1;
(statearr_25324_25375[(2)] = null);

(statearr_25324_25375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (18))){
var inst_25214 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25325_25376 = state_25272__$1;
(statearr_25325_25376[(2)] = inst_25214);

(statearr_25325_25376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (37))){
var state_25272__$1 = state_25272;
var statearr_25326_25377 = state_25272__$1;
(statearr_25326_25377[(2)] = null);

(statearr_25326_25377[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25273 === (8))){
var inst_25174 = (state_25272[(8)]);
var inst_25192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25174);
var state_25272__$1 = state_25272;
var statearr_25327_25378 = state_25272__$1;
(statearr_25327_25378[(2)] = inst_25192);

(statearr_25327_25378[(1)] = (10));


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
});})(c__22411__auto___25332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22252__auto__,c__22411__auto___25332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22253__auto__ = null;
var cljs$core$async$mix_$_state_machine__22253__auto____0 = (function (){
var statearr_25328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25328[(0)] = cljs$core$async$mix_$_state_machine__22253__auto__);

(statearr_25328[(1)] = (1));

return statearr_25328;
});
var cljs$core$async$mix_$_state_machine__22253__auto____1 = (function (state_25272){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25329){if((e25329 instanceof Object)){
var ex__22256__auto__ = e25329;
var statearr_25330_25379 = state_25272;
(statearr_25330_25379[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25380 = state_25272;
state_25272 = G__25380;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22253__auto__ = function(state_25272){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22253__auto____1.call(this,state_25272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22253__auto____0;
cljs$core$async$mix_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22253__auto____1;
return cljs$core$async$mix_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___25332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22413__auto__ = (function (){var statearr_25331 = f__22412__auto__.call(null);
(statearr_25331[(6)] = c__22411__auto___25332);

return statearr_25331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___25332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25382 = arguments.length;
switch (G__25382) {
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
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
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
var G__25386 = arguments.length;
switch (G__25386) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__25384_SHARP_){
if(cljs.core.truth_(p1__25384_SHARP_.call(null,topic))){
return p1__25384_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25384_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25387 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25388){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25388 = meta25388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25389,meta25388__$1){
var self__ = this;
var _25389__$1 = this;
return (new cljs.core.async.t_cljs$core$async25387(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25388__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25389){
var self__ = this;
var _25389__$1 = this;
return self__.meta25388;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25387.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25387.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25387.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25387.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25387.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25387.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25387.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25387.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25388","meta25388",-1414023551,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25387";

cljs.core.async.t_cljs$core$async25387.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25387");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25387.
 */
cljs.core.async.__GT_t_cljs$core$async25387 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25387(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25388){
return (new cljs.core.async.t_cljs$core$async25387(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25388));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25387(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22411__auto___25507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___25507,mults,ensure_mult,p){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___25507,mults,ensure_mult,p){
return (function (state_25461){
var state_val_25462 = (state_25461[(1)]);
if((state_val_25462 === (7))){
var inst_25457 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25463_25508 = state_25461__$1;
(statearr_25463_25508[(2)] = inst_25457);

(statearr_25463_25508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (20))){
var state_25461__$1 = state_25461;
var statearr_25464_25509 = state_25461__$1;
(statearr_25464_25509[(2)] = null);

(statearr_25464_25509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (1))){
var state_25461__$1 = state_25461;
var statearr_25465_25510 = state_25461__$1;
(statearr_25465_25510[(2)] = null);

(statearr_25465_25510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (24))){
var inst_25440 = (state_25461[(7)]);
var inst_25449 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25440);
var state_25461__$1 = state_25461;
var statearr_25466_25511 = state_25461__$1;
(statearr_25466_25511[(2)] = inst_25449);

(statearr_25466_25511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (4))){
var inst_25392 = (state_25461[(8)]);
var inst_25392__$1 = (state_25461[(2)]);
var inst_25393 = (inst_25392__$1 == null);
var state_25461__$1 = (function (){var statearr_25467 = state_25461;
(statearr_25467[(8)] = inst_25392__$1);

return statearr_25467;
})();
if(cljs.core.truth_(inst_25393)){
var statearr_25468_25512 = state_25461__$1;
(statearr_25468_25512[(1)] = (5));

} else {
var statearr_25469_25513 = state_25461__$1;
(statearr_25469_25513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (15))){
var inst_25434 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25470_25514 = state_25461__$1;
(statearr_25470_25514[(2)] = inst_25434);

(statearr_25470_25514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (21))){
var inst_25454 = (state_25461[(2)]);
var state_25461__$1 = (function (){var statearr_25471 = state_25461;
(statearr_25471[(9)] = inst_25454);

return statearr_25471;
})();
var statearr_25472_25515 = state_25461__$1;
(statearr_25472_25515[(2)] = null);

(statearr_25472_25515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (13))){
var inst_25416 = (state_25461[(10)]);
var inst_25418 = cljs.core.chunked_seq_QMARK_.call(null,inst_25416);
var state_25461__$1 = state_25461;
if(inst_25418){
var statearr_25473_25516 = state_25461__$1;
(statearr_25473_25516[(1)] = (16));

} else {
var statearr_25474_25517 = state_25461__$1;
(statearr_25474_25517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (22))){
var inst_25446 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
if(cljs.core.truth_(inst_25446)){
var statearr_25475_25518 = state_25461__$1;
(statearr_25475_25518[(1)] = (23));

} else {
var statearr_25476_25519 = state_25461__$1;
(statearr_25476_25519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (6))){
var inst_25392 = (state_25461[(8)]);
var inst_25440 = (state_25461[(7)]);
var inst_25442 = (state_25461[(11)]);
var inst_25440__$1 = topic_fn.call(null,inst_25392);
var inst_25441 = cljs.core.deref.call(null,mults);
var inst_25442__$1 = cljs.core.get.call(null,inst_25441,inst_25440__$1);
var state_25461__$1 = (function (){var statearr_25477 = state_25461;
(statearr_25477[(7)] = inst_25440__$1);

(statearr_25477[(11)] = inst_25442__$1);

return statearr_25477;
})();
if(cljs.core.truth_(inst_25442__$1)){
var statearr_25478_25520 = state_25461__$1;
(statearr_25478_25520[(1)] = (19));

} else {
var statearr_25479_25521 = state_25461__$1;
(statearr_25479_25521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (25))){
var inst_25451 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25480_25522 = state_25461__$1;
(statearr_25480_25522[(2)] = inst_25451);

(statearr_25480_25522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (17))){
var inst_25416 = (state_25461[(10)]);
var inst_25425 = cljs.core.first.call(null,inst_25416);
var inst_25426 = cljs.core.async.muxch_STAR_.call(null,inst_25425);
var inst_25427 = cljs.core.async.close_BANG_.call(null,inst_25426);
var inst_25428 = cljs.core.next.call(null,inst_25416);
var inst_25402 = inst_25428;
var inst_25403 = null;
var inst_25404 = (0);
var inst_25405 = (0);
var state_25461__$1 = (function (){var statearr_25481 = state_25461;
(statearr_25481[(12)] = inst_25405);

(statearr_25481[(13)] = inst_25402);

(statearr_25481[(14)] = inst_25427);

(statearr_25481[(15)] = inst_25404);

(statearr_25481[(16)] = inst_25403);

return statearr_25481;
})();
var statearr_25482_25523 = state_25461__$1;
(statearr_25482_25523[(2)] = null);

(statearr_25482_25523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (3))){
var inst_25459 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25461__$1,inst_25459);
} else {
if((state_val_25462 === (12))){
var inst_25436 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25483_25524 = state_25461__$1;
(statearr_25483_25524[(2)] = inst_25436);

(statearr_25483_25524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (2))){
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25461__$1,(4),ch);
} else {
if((state_val_25462 === (23))){
var state_25461__$1 = state_25461;
var statearr_25484_25525 = state_25461__$1;
(statearr_25484_25525[(2)] = null);

(statearr_25484_25525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (19))){
var inst_25392 = (state_25461[(8)]);
var inst_25442 = (state_25461[(11)]);
var inst_25444 = cljs.core.async.muxch_STAR_.call(null,inst_25442);
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25461__$1,(22),inst_25444,inst_25392);
} else {
if((state_val_25462 === (11))){
var inst_25402 = (state_25461[(13)]);
var inst_25416 = (state_25461[(10)]);
var inst_25416__$1 = cljs.core.seq.call(null,inst_25402);
var state_25461__$1 = (function (){var statearr_25485 = state_25461;
(statearr_25485[(10)] = inst_25416__$1);

return statearr_25485;
})();
if(inst_25416__$1){
var statearr_25486_25526 = state_25461__$1;
(statearr_25486_25526[(1)] = (13));

} else {
var statearr_25487_25527 = state_25461__$1;
(statearr_25487_25527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (9))){
var inst_25438 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25488_25528 = state_25461__$1;
(statearr_25488_25528[(2)] = inst_25438);

(statearr_25488_25528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (5))){
var inst_25399 = cljs.core.deref.call(null,mults);
var inst_25400 = cljs.core.vals.call(null,inst_25399);
var inst_25401 = cljs.core.seq.call(null,inst_25400);
var inst_25402 = inst_25401;
var inst_25403 = null;
var inst_25404 = (0);
var inst_25405 = (0);
var state_25461__$1 = (function (){var statearr_25489 = state_25461;
(statearr_25489[(12)] = inst_25405);

(statearr_25489[(13)] = inst_25402);

(statearr_25489[(15)] = inst_25404);

(statearr_25489[(16)] = inst_25403);

return statearr_25489;
})();
var statearr_25490_25529 = state_25461__$1;
(statearr_25490_25529[(2)] = null);

(statearr_25490_25529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (14))){
var state_25461__$1 = state_25461;
var statearr_25494_25530 = state_25461__$1;
(statearr_25494_25530[(2)] = null);

(statearr_25494_25530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (16))){
var inst_25416 = (state_25461[(10)]);
var inst_25420 = cljs.core.chunk_first.call(null,inst_25416);
var inst_25421 = cljs.core.chunk_rest.call(null,inst_25416);
var inst_25422 = cljs.core.count.call(null,inst_25420);
var inst_25402 = inst_25421;
var inst_25403 = inst_25420;
var inst_25404 = inst_25422;
var inst_25405 = (0);
var state_25461__$1 = (function (){var statearr_25495 = state_25461;
(statearr_25495[(12)] = inst_25405);

(statearr_25495[(13)] = inst_25402);

(statearr_25495[(15)] = inst_25404);

(statearr_25495[(16)] = inst_25403);

return statearr_25495;
})();
var statearr_25496_25531 = state_25461__$1;
(statearr_25496_25531[(2)] = null);

(statearr_25496_25531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (10))){
var inst_25405 = (state_25461[(12)]);
var inst_25402 = (state_25461[(13)]);
var inst_25404 = (state_25461[(15)]);
var inst_25403 = (state_25461[(16)]);
var inst_25410 = cljs.core._nth.call(null,inst_25403,inst_25405);
var inst_25411 = cljs.core.async.muxch_STAR_.call(null,inst_25410);
var inst_25412 = cljs.core.async.close_BANG_.call(null,inst_25411);
var inst_25413 = (inst_25405 + (1));
var tmp25491 = inst_25402;
var tmp25492 = inst_25404;
var tmp25493 = inst_25403;
var inst_25402__$1 = tmp25491;
var inst_25403__$1 = tmp25493;
var inst_25404__$1 = tmp25492;
var inst_25405__$1 = inst_25413;
var state_25461__$1 = (function (){var statearr_25497 = state_25461;
(statearr_25497[(12)] = inst_25405__$1);

(statearr_25497[(13)] = inst_25402__$1);

(statearr_25497[(15)] = inst_25404__$1);

(statearr_25497[(17)] = inst_25412);

(statearr_25497[(16)] = inst_25403__$1);

return statearr_25497;
})();
var statearr_25498_25532 = state_25461__$1;
(statearr_25498_25532[(2)] = null);

(statearr_25498_25532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (18))){
var inst_25431 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25499_25533 = state_25461__$1;
(statearr_25499_25533[(2)] = inst_25431);

(statearr_25499_25533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (8))){
var inst_25405 = (state_25461[(12)]);
var inst_25404 = (state_25461[(15)]);
var inst_25407 = (inst_25405 < inst_25404);
var inst_25408 = inst_25407;
var state_25461__$1 = state_25461;
if(cljs.core.truth_(inst_25408)){
var statearr_25500_25534 = state_25461__$1;
(statearr_25500_25534[(1)] = (10));

} else {
var statearr_25501_25535 = state_25461__$1;
(statearr_25501_25535[(1)] = (11));

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
});})(c__22411__auto___25507,mults,ensure_mult,p))
;
return ((function (switch__22252__auto__,c__22411__auto___25507,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_25502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25502[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_25502[(1)] = (1));

return statearr_25502;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_25461){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25503){if((e25503 instanceof Object)){
var ex__22256__auto__ = e25503;
var statearr_25504_25536 = state_25461;
(statearr_25504_25536[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25537 = state_25461;
state_25461 = G__25537;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_25461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_25461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___25507,mults,ensure_mult,p))
})();
var state__22413__auto__ = (function (){var statearr_25505 = f__22412__auto__.call(null);
(statearr_25505[(6)] = c__22411__auto___25507);

return statearr_25505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___25507,mults,ensure_mult,p))
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
var G__25539 = arguments.length;
switch (G__25539) {
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
var G__25542 = arguments.length;
switch (G__25542) {
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
var G__25545 = arguments.length;
switch (G__25545) {
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
var c__22411__auto___25612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___25612,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___25612,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25584){
var state_val_25585 = (state_25584[(1)]);
if((state_val_25585 === (7))){
var state_25584__$1 = state_25584;
var statearr_25586_25613 = state_25584__$1;
(statearr_25586_25613[(2)] = null);

(statearr_25586_25613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (1))){
var state_25584__$1 = state_25584;
var statearr_25587_25614 = state_25584__$1;
(statearr_25587_25614[(2)] = null);

(statearr_25587_25614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (4))){
var inst_25548 = (state_25584[(7)]);
var inst_25550 = (inst_25548 < cnt);
var state_25584__$1 = state_25584;
if(cljs.core.truth_(inst_25550)){
var statearr_25588_25615 = state_25584__$1;
(statearr_25588_25615[(1)] = (6));

} else {
var statearr_25589_25616 = state_25584__$1;
(statearr_25589_25616[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (15))){
var inst_25580 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
var statearr_25590_25617 = state_25584__$1;
(statearr_25590_25617[(2)] = inst_25580);

(statearr_25590_25617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (13))){
var inst_25573 = cljs.core.async.close_BANG_.call(null,out);
var state_25584__$1 = state_25584;
var statearr_25591_25618 = state_25584__$1;
(statearr_25591_25618[(2)] = inst_25573);

(statearr_25591_25618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (6))){
var state_25584__$1 = state_25584;
var statearr_25592_25619 = state_25584__$1;
(statearr_25592_25619[(2)] = null);

(statearr_25592_25619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (3))){
var inst_25582 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25584__$1,inst_25582);
} else {
if((state_val_25585 === (12))){
var inst_25570 = (state_25584[(8)]);
var inst_25570__$1 = (state_25584[(2)]);
var inst_25571 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25570__$1);
var state_25584__$1 = (function (){var statearr_25593 = state_25584;
(statearr_25593[(8)] = inst_25570__$1);

return statearr_25593;
})();
if(cljs.core.truth_(inst_25571)){
var statearr_25594_25620 = state_25584__$1;
(statearr_25594_25620[(1)] = (13));

} else {
var statearr_25595_25621 = state_25584__$1;
(statearr_25595_25621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (2))){
var inst_25547 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25548 = (0);
var state_25584__$1 = (function (){var statearr_25596 = state_25584;
(statearr_25596[(7)] = inst_25548);

(statearr_25596[(9)] = inst_25547);

return statearr_25596;
})();
var statearr_25597_25622 = state_25584__$1;
(statearr_25597_25622[(2)] = null);

(statearr_25597_25622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (11))){
var inst_25548 = (state_25584[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25584,(10),Object,null,(9));
var inst_25557 = chs__$1.call(null,inst_25548);
var inst_25558 = done.call(null,inst_25548);
var inst_25559 = cljs.core.async.take_BANG_.call(null,inst_25557,inst_25558);
var state_25584__$1 = state_25584;
var statearr_25598_25623 = state_25584__$1;
(statearr_25598_25623[(2)] = inst_25559);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25584__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (9))){
var inst_25548 = (state_25584[(7)]);
var inst_25561 = (state_25584[(2)]);
var inst_25562 = (inst_25548 + (1));
var inst_25548__$1 = inst_25562;
var state_25584__$1 = (function (){var statearr_25599 = state_25584;
(statearr_25599[(7)] = inst_25548__$1);

(statearr_25599[(10)] = inst_25561);

return statearr_25599;
})();
var statearr_25600_25624 = state_25584__$1;
(statearr_25600_25624[(2)] = null);

(statearr_25600_25624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (5))){
var inst_25568 = (state_25584[(2)]);
var state_25584__$1 = (function (){var statearr_25601 = state_25584;
(statearr_25601[(11)] = inst_25568);

return statearr_25601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25584__$1,(12),dchan);
} else {
if((state_val_25585 === (14))){
var inst_25570 = (state_25584[(8)]);
var inst_25575 = cljs.core.apply.call(null,f,inst_25570);
var state_25584__$1 = state_25584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25584__$1,(16),out,inst_25575);
} else {
if((state_val_25585 === (16))){
var inst_25577 = (state_25584[(2)]);
var state_25584__$1 = (function (){var statearr_25602 = state_25584;
(statearr_25602[(12)] = inst_25577);

return statearr_25602;
})();
var statearr_25603_25625 = state_25584__$1;
(statearr_25603_25625[(2)] = null);

(statearr_25603_25625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (10))){
var inst_25552 = (state_25584[(2)]);
var inst_25553 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25584__$1 = (function (){var statearr_25604 = state_25584;
(statearr_25604[(13)] = inst_25552);

return statearr_25604;
})();
var statearr_25605_25626 = state_25584__$1;
(statearr_25605_25626[(2)] = inst_25553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25584__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (8))){
var inst_25566 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
var statearr_25606_25627 = state_25584__$1;
(statearr_25606_25627[(2)] = inst_25566);

(statearr_25606_25627[(1)] = (5));


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
});})(c__22411__auto___25612,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22252__auto__,c__22411__auto___25612,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_25607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25607[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_25607[(1)] = (1));

return statearr_25607;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_25584){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25608){if((e25608 instanceof Object)){
var ex__22256__auto__ = e25608;
var statearr_25609_25628 = state_25584;
(statearr_25609_25628[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25629 = state_25584;
state_25584 = G__25629;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_25584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_25584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___25612,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22413__auto__ = (function (){var statearr_25610 = f__22412__auto__.call(null);
(statearr_25610[(6)] = c__22411__auto___25612);

return statearr_25610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___25612,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25632 = arguments.length;
switch (G__25632) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22411__auto___25686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___25686,out){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___25686,out){
return (function (state_25664){
var state_val_25665 = (state_25664[(1)]);
if((state_val_25665 === (7))){
var inst_25644 = (state_25664[(7)]);
var inst_25643 = (state_25664[(8)]);
var inst_25643__$1 = (state_25664[(2)]);
var inst_25644__$1 = cljs.core.nth.call(null,inst_25643__$1,(0),null);
var inst_25645 = cljs.core.nth.call(null,inst_25643__$1,(1),null);
var inst_25646 = (inst_25644__$1 == null);
var state_25664__$1 = (function (){var statearr_25666 = state_25664;
(statearr_25666[(7)] = inst_25644__$1);

(statearr_25666[(8)] = inst_25643__$1);

(statearr_25666[(9)] = inst_25645);

return statearr_25666;
})();
if(cljs.core.truth_(inst_25646)){
var statearr_25667_25687 = state_25664__$1;
(statearr_25667_25687[(1)] = (8));

} else {
var statearr_25668_25688 = state_25664__$1;
(statearr_25668_25688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (1))){
var inst_25633 = cljs.core.vec.call(null,chs);
var inst_25634 = inst_25633;
var state_25664__$1 = (function (){var statearr_25669 = state_25664;
(statearr_25669[(10)] = inst_25634);

return statearr_25669;
})();
var statearr_25670_25689 = state_25664__$1;
(statearr_25670_25689[(2)] = null);

(statearr_25670_25689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (4))){
var inst_25634 = (state_25664[(10)]);
var state_25664__$1 = state_25664;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25664__$1,(7),inst_25634);
} else {
if((state_val_25665 === (6))){
var inst_25660 = (state_25664[(2)]);
var state_25664__$1 = state_25664;
var statearr_25671_25690 = state_25664__$1;
(statearr_25671_25690[(2)] = inst_25660);

(statearr_25671_25690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (3))){
var inst_25662 = (state_25664[(2)]);
var state_25664__$1 = state_25664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25664__$1,inst_25662);
} else {
if((state_val_25665 === (2))){
var inst_25634 = (state_25664[(10)]);
var inst_25636 = cljs.core.count.call(null,inst_25634);
var inst_25637 = (inst_25636 > (0));
var state_25664__$1 = state_25664;
if(cljs.core.truth_(inst_25637)){
var statearr_25673_25691 = state_25664__$1;
(statearr_25673_25691[(1)] = (4));

} else {
var statearr_25674_25692 = state_25664__$1;
(statearr_25674_25692[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (11))){
var inst_25634 = (state_25664[(10)]);
var inst_25653 = (state_25664[(2)]);
var tmp25672 = inst_25634;
var inst_25634__$1 = tmp25672;
var state_25664__$1 = (function (){var statearr_25675 = state_25664;
(statearr_25675[(10)] = inst_25634__$1);

(statearr_25675[(11)] = inst_25653);

return statearr_25675;
})();
var statearr_25676_25693 = state_25664__$1;
(statearr_25676_25693[(2)] = null);

(statearr_25676_25693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (9))){
var inst_25644 = (state_25664[(7)]);
var state_25664__$1 = state_25664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25664__$1,(11),out,inst_25644);
} else {
if((state_val_25665 === (5))){
var inst_25658 = cljs.core.async.close_BANG_.call(null,out);
var state_25664__$1 = state_25664;
var statearr_25677_25694 = state_25664__$1;
(statearr_25677_25694[(2)] = inst_25658);

(statearr_25677_25694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (10))){
var inst_25656 = (state_25664[(2)]);
var state_25664__$1 = state_25664;
var statearr_25678_25695 = state_25664__$1;
(statearr_25678_25695[(2)] = inst_25656);

(statearr_25678_25695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (8))){
var inst_25634 = (state_25664[(10)]);
var inst_25644 = (state_25664[(7)]);
var inst_25643 = (state_25664[(8)]);
var inst_25645 = (state_25664[(9)]);
var inst_25648 = (function (){var cs = inst_25634;
var vec__25639 = inst_25643;
var v = inst_25644;
var c = inst_25645;
return ((function (cs,vec__25639,v,c,inst_25634,inst_25644,inst_25643,inst_25645,state_val_25665,c__22411__auto___25686,out){
return (function (p1__25630_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25630_SHARP_);
});
;})(cs,vec__25639,v,c,inst_25634,inst_25644,inst_25643,inst_25645,state_val_25665,c__22411__auto___25686,out))
})();
var inst_25649 = cljs.core.filterv.call(null,inst_25648,inst_25634);
var inst_25634__$1 = inst_25649;
var state_25664__$1 = (function (){var statearr_25679 = state_25664;
(statearr_25679[(10)] = inst_25634__$1);

return statearr_25679;
})();
var statearr_25680_25696 = state_25664__$1;
(statearr_25680_25696[(2)] = null);

(statearr_25680_25696[(1)] = (2));


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
});})(c__22411__auto___25686,out))
;
return ((function (switch__22252__auto__,c__22411__auto___25686,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_25681 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25681[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_25681[(1)] = (1));

return statearr_25681;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_25664){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25682){if((e25682 instanceof Object)){
var ex__22256__auto__ = e25682;
var statearr_25683_25697 = state_25664;
(statearr_25683_25697[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25698 = state_25664;
state_25664 = G__25698;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_25664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_25664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___25686,out))
})();
var state__22413__auto__ = (function (){var statearr_25684 = f__22412__auto__.call(null);
(statearr_25684[(6)] = c__22411__auto___25686);

return statearr_25684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___25686,out))
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
var G__25700 = arguments.length;
switch (G__25700) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22411__auto___25745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___25745,out){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___25745,out){
return (function (state_25724){
var state_val_25725 = (state_25724[(1)]);
if((state_val_25725 === (7))){
var inst_25706 = (state_25724[(7)]);
var inst_25706__$1 = (state_25724[(2)]);
var inst_25707 = (inst_25706__$1 == null);
var inst_25708 = cljs.core.not.call(null,inst_25707);
var state_25724__$1 = (function (){var statearr_25726 = state_25724;
(statearr_25726[(7)] = inst_25706__$1);

return statearr_25726;
})();
if(inst_25708){
var statearr_25727_25746 = state_25724__$1;
(statearr_25727_25746[(1)] = (8));

} else {
var statearr_25728_25747 = state_25724__$1;
(statearr_25728_25747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (1))){
var inst_25701 = (0);
var state_25724__$1 = (function (){var statearr_25729 = state_25724;
(statearr_25729[(8)] = inst_25701);

return statearr_25729;
})();
var statearr_25730_25748 = state_25724__$1;
(statearr_25730_25748[(2)] = null);

(statearr_25730_25748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (4))){
var state_25724__$1 = state_25724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25724__$1,(7),ch);
} else {
if((state_val_25725 === (6))){
var inst_25719 = (state_25724[(2)]);
var state_25724__$1 = state_25724;
var statearr_25731_25749 = state_25724__$1;
(statearr_25731_25749[(2)] = inst_25719);

(statearr_25731_25749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (3))){
var inst_25721 = (state_25724[(2)]);
var inst_25722 = cljs.core.async.close_BANG_.call(null,out);
var state_25724__$1 = (function (){var statearr_25732 = state_25724;
(statearr_25732[(9)] = inst_25721);

return statearr_25732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25724__$1,inst_25722);
} else {
if((state_val_25725 === (2))){
var inst_25701 = (state_25724[(8)]);
var inst_25703 = (inst_25701 < n);
var state_25724__$1 = state_25724;
if(cljs.core.truth_(inst_25703)){
var statearr_25733_25750 = state_25724__$1;
(statearr_25733_25750[(1)] = (4));

} else {
var statearr_25734_25751 = state_25724__$1;
(statearr_25734_25751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (11))){
var inst_25701 = (state_25724[(8)]);
var inst_25711 = (state_25724[(2)]);
var inst_25712 = (inst_25701 + (1));
var inst_25701__$1 = inst_25712;
var state_25724__$1 = (function (){var statearr_25735 = state_25724;
(statearr_25735[(8)] = inst_25701__$1);

(statearr_25735[(10)] = inst_25711);

return statearr_25735;
})();
var statearr_25736_25752 = state_25724__$1;
(statearr_25736_25752[(2)] = null);

(statearr_25736_25752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (9))){
var state_25724__$1 = state_25724;
var statearr_25737_25753 = state_25724__$1;
(statearr_25737_25753[(2)] = null);

(statearr_25737_25753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (5))){
var state_25724__$1 = state_25724;
var statearr_25738_25754 = state_25724__$1;
(statearr_25738_25754[(2)] = null);

(statearr_25738_25754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (10))){
var inst_25716 = (state_25724[(2)]);
var state_25724__$1 = state_25724;
var statearr_25739_25755 = state_25724__$1;
(statearr_25739_25755[(2)] = inst_25716);

(statearr_25739_25755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (8))){
var inst_25706 = (state_25724[(7)]);
var state_25724__$1 = state_25724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25724__$1,(11),out,inst_25706);
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
});})(c__22411__auto___25745,out))
;
return ((function (switch__22252__auto__,c__22411__auto___25745,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_25740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25740[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_25740[(1)] = (1));

return statearr_25740;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_25724){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25741){if((e25741 instanceof Object)){
var ex__22256__auto__ = e25741;
var statearr_25742_25756 = state_25724;
(statearr_25742_25756[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25757 = state_25724;
state_25724 = G__25757;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_25724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_25724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___25745,out))
})();
var state__22413__auto__ = (function (){var statearr_25743 = f__22412__auto__.call(null);
(statearr_25743[(6)] = c__22411__auto___25745);

return statearr_25743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___25745,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25759 = (function (f,ch,meta25760){
this.f = f;
this.ch = ch;
this.meta25760 = meta25760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25761,meta25760__$1){
var self__ = this;
var _25761__$1 = this;
return (new cljs.core.async.t_cljs$core$async25759(self__.f,self__.ch,meta25760__$1));
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25761){
var self__ = this;
var _25761__$1 = this;
return self__.meta25760;
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25762 = (function (f,ch,meta25760,_,fn1,meta25763){
this.f = f;
this.ch = ch;
this.meta25760 = meta25760;
this._ = _;
this.fn1 = fn1;
this.meta25763 = meta25763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25764,meta25763__$1){
var self__ = this;
var _25764__$1 = this;
return (new cljs.core.async.t_cljs$core$async25762(self__.f,self__.ch,self__.meta25760,self__._,self__.fn1,meta25763__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25764){
var self__ = this;
var _25764__$1 = this;
return self__.meta25763;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25758_SHARP_){
return f1.call(null,(((p1__25758_SHARP_ == null))?null:self__.f.call(null,p1__25758_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25760","meta25760",-1677104086,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25759","cljs.core.async/t_cljs$core$async25759",570692014,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25763","meta25763",-454238064,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25762";

cljs.core.async.t_cljs$core$async25762.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25762");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25762.
 */
cljs.core.async.__GT_t_cljs$core$async25762 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25762(f__$1,ch__$1,meta25760__$1,___$2,fn1__$1,meta25763){
return (new cljs.core.async.t_cljs$core$async25762(f__$1,ch__$1,meta25760__$1,___$2,fn1__$1,meta25763));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25762(self__.f,self__.ch,self__.meta25760,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25760","meta25760",-1677104086,null)], null);
});

cljs.core.async.t_cljs$core$async25759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25759";

cljs.core.async.t_cljs$core$async25759.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25759");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25759.
 */
cljs.core.async.__GT_t_cljs$core$async25759 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25759(f__$1,ch__$1,meta25760){
return (new cljs.core.async.t_cljs$core$async25759(f__$1,ch__$1,meta25760));
});

}

return (new cljs.core.async.t_cljs$core$async25759(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25765 = (function (f,ch,meta25766){
this.f = f;
this.ch = ch;
this.meta25766 = meta25766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25767,meta25766__$1){
var self__ = this;
var _25767__$1 = this;
return (new cljs.core.async.t_cljs$core$async25765(self__.f,self__.ch,meta25766__$1));
});

cljs.core.async.t_cljs$core$async25765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25767){
var self__ = this;
var _25767__$1 = this;
return self__.meta25766;
});

cljs.core.async.t_cljs$core$async25765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25766","meta25766",-372303240,null)], null);
});

cljs.core.async.t_cljs$core$async25765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25765";

cljs.core.async.t_cljs$core$async25765.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25765");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25765.
 */
cljs.core.async.__GT_t_cljs$core$async25765 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25765(f__$1,ch__$1,meta25766){
return (new cljs.core.async.t_cljs$core$async25765(f__$1,ch__$1,meta25766));
});

}

return (new cljs.core.async.t_cljs$core$async25765(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25768 = (function (p,ch,meta25769){
this.p = p;
this.ch = ch;
this.meta25769 = meta25769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25770,meta25769__$1){
var self__ = this;
var _25770__$1 = this;
return (new cljs.core.async.t_cljs$core$async25768(self__.p,self__.ch,meta25769__$1));
});

cljs.core.async.t_cljs$core$async25768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25770){
var self__ = this;
var _25770__$1 = this;
return self__.meta25769;
});

cljs.core.async.t_cljs$core$async25768.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25768.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25768.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25768.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25769","meta25769",1621272572,null)], null);
});

cljs.core.async.t_cljs$core$async25768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25768";

cljs.core.async.t_cljs$core$async25768.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25768");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25768.
 */
cljs.core.async.__GT_t_cljs$core$async25768 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25768(p__$1,ch__$1,meta25769){
return (new cljs.core.async.t_cljs$core$async25768(p__$1,ch__$1,meta25769));
});

}

return (new cljs.core.async.t_cljs$core$async25768(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25772 = arguments.length;
switch (G__25772) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22411__auto___25812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___25812,out){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___25812,out){
return (function (state_25793){
var state_val_25794 = (state_25793[(1)]);
if((state_val_25794 === (7))){
var inst_25789 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25795_25813 = state_25793__$1;
(statearr_25795_25813[(2)] = inst_25789);

(statearr_25795_25813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (1))){
var state_25793__$1 = state_25793;
var statearr_25796_25814 = state_25793__$1;
(statearr_25796_25814[(2)] = null);

(statearr_25796_25814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (4))){
var inst_25775 = (state_25793[(7)]);
var inst_25775__$1 = (state_25793[(2)]);
var inst_25776 = (inst_25775__$1 == null);
var state_25793__$1 = (function (){var statearr_25797 = state_25793;
(statearr_25797[(7)] = inst_25775__$1);

return statearr_25797;
})();
if(cljs.core.truth_(inst_25776)){
var statearr_25798_25815 = state_25793__$1;
(statearr_25798_25815[(1)] = (5));

} else {
var statearr_25799_25816 = state_25793__$1;
(statearr_25799_25816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (6))){
var inst_25775 = (state_25793[(7)]);
var inst_25780 = p.call(null,inst_25775);
var state_25793__$1 = state_25793;
if(cljs.core.truth_(inst_25780)){
var statearr_25800_25817 = state_25793__$1;
(statearr_25800_25817[(1)] = (8));

} else {
var statearr_25801_25818 = state_25793__$1;
(statearr_25801_25818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (3))){
var inst_25791 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25793__$1,inst_25791);
} else {
if((state_val_25794 === (2))){
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25793__$1,(4),ch);
} else {
if((state_val_25794 === (11))){
var inst_25783 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25802_25819 = state_25793__$1;
(statearr_25802_25819[(2)] = inst_25783);

(statearr_25802_25819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (9))){
var state_25793__$1 = state_25793;
var statearr_25803_25820 = state_25793__$1;
(statearr_25803_25820[(2)] = null);

(statearr_25803_25820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (5))){
var inst_25778 = cljs.core.async.close_BANG_.call(null,out);
var state_25793__$1 = state_25793;
var statearr_25804_25821 = state_25793__$1;
(statearr_25804_25821[(2)] = inst_25778);

(statearr_25804_25821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (10))){
var inst_25786 = (state_25793[(2)]);
var state_25793__$1 = (function (){var statearr_25805 = state_25793;
(statearr_25805[(8)] = inst_25786);

return statearr_25805;
})();
var statearr_25806_25822 = state_25793__$1;
(statearr_25806_25822[(2)] = null);

(statearr_25806_25822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (8))){
var inst_25775 = (state_25793[(7)]);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25793__$1,(11),out,inst_25775);
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
});})(c__22411__auto___25812,out))
;
return ((function (switch__22252__auto__,c__22411__auto___25812,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_25807 = [null,null,null,null,null,null,null,null,null];
(statearr_25807[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_25807[(1)] = (1));

return statearr_25807;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_25793){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25808){if((e25808 instanceof Object)){
var ex__22256__auto__ = e25808;
var statearr_25809_25823 = state_25793;
(statearr_25809_25823[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25824 = state_25793;
state_25793 = G__25824;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_25793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_25793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___25812,out))
})();
var state__22413__auto__ = (function (){var statearr_25810 = f__22412__auto__.call(null);
(statearr_25810[(6)] = c__22411__auto___25812);

return statearr_25810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___25812,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25826 = arguments.length;
switch (G__25826) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto__){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto__){
return (function (state_25889){
var state_val_25890 = (state_25889[(1)]);
if((state_val_25890 === (7))){
var inst_25885 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
var statearr_25891_25929 = state_25889__$1;
(statearr_25891_25929[(2)] = inst_25885);

(statearr_25891_25929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (20))){
var inst_25855 = (state_25889[(7)]);
var inst_25866 = (state_25889[(2)]);
var inst_25867 = cljs.core.next.call(null,inst_25855);
var inst_25841 = inst_25867;
var inst_25842 = null;
var inst_25843 = (0);
var inst_25844 = (0);
var state_25889__$1 = (function (){var statearr_25892 = state_25889;
(statearr_25892[(8)] = inst_25866);

(statearr_25892[(9)] = inst_25843);

(statearr_25892[(10)] = inst_25842);

(statearr_25892[(11)] = inst_25841);

(statearr_25892[(12)] = inst_25844);

return statearr_25892;
})();
var statearr_25893_25930 = state_25889__$1;
(statearr_25893_25930[(2)] = null);

(statearr_25893_25930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (1))){
var state_25889__$1 = state_25889;
var statearr_25894_25931 = state_25889__$1;
(statearr_25894_25931[(2)] = null);

(statearr_25894_25931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (4))){
var inst_25830 = (state_25889[(13)]);
var inst_25830__$1 = (state_25889[(2)]);
var inst_25831 = (inst_25830__$1 == null);
var state_25889__$1 = (function (){var statearr_25895 = state_25889;
(statearr_25895[(13)] = inst_25830__$1);

return statearr_25895;
})();
if(cljs.core.truth_(inst_25831)){
var statearr_25896_25932 = state_25889__$1;
(statearr_25896_25932[(1)] = (5));

} else {
var statearr_25897_25933 = state_25889__$1;
(statearr_25897_25933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (15))){
var state_25889__$1 = state_25889;
var statearr_25901_25934 = state_25889__$1;
(statearr_25901_25934[(2)] = null);

(statearr_25901_25934[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (21))){
var state_25889__$1 = state_25889;
var statearr_25902_25935 = state_25889__$1;
(statearr_25902_25935[(2)] = null);

(statearr_25902_25935[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (13))){
var inst_25843 = (state_25889[(9)]);
var inst_25842 = (state_25889[(10)]);
var inst_25841 = (state_25889[(11)]);
var inst_25844 = (state_25889[(12)]);
var inst_25851 = (state_25889[(2)]);
var inst_25852 = (inst_25844 + (1));
var tmp25898 = inst_25843;
var tmp25899 = inst_25842;
var tmp25900 = inst_25841;
var inst_25841__$1 = tmp25900;
var inst_25842__$1 = tmp25899;
var inst_25843__$1 = tmp25898;
var inst_25844__$1 = inst_25852;
var state_25889__$1 = (function (){var statearr_25903 = state_25889;
(statearr_25903[(9)] = inst_25843__$1);

(statearr_25903[(10)] = inst_25842__$1);

(statearr_25903[(14)] = inst_25851);

(statearr_25903[(11)] = inst_25841__$1);

(statearr_25903[(12)] = inst_25844__$1);

return statearr_25903;
})();
var statearr_25904_25936 = state_25889__$1;
(statearr_25904_25936[(2)] = null);

(statearr_25904_25936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (22))){
var state_25889__$1 = state_25889;
var statearr_25905_25937 = state_25889__$1;
(statearr_25905_25937[(2)] = null);

(statearr_25905_25937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (6))){
var inst_25830 = (state_25889[(13)]);
var inst_25839 = f.call(null,inst_25830);
var inst_25840 = cljs.core.seq.call(null,inst_25839);
var inst_25841 = inst_25840;
var inst_25842 = null;
var inst_25843 = (0);
var inst_25844 = (0);
var state_25889__$1 = (function (){var statearr_25906 = state_25889;
(statearr_25906[(9)] = inst_25843);

(statearr_25906[(10)] = inst_25842);

(statearr_25906[(11)] = inst_25841);

(statearr_25906[(12)] = inst_25844);

return statearr_25906;
})();
var statearr_25907_25938 = state_25889__$1;
(statearr_25907_25938[(2)] = null);

(statearr_25907_25938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (17))){
var inst_25855 = (state_25889[(7)]);
var inst_25859 = cljs.core.chunk_first.call(null,inst_25855);
var inst_25860 = cljs.core.chunk_rest.call(null,inst_25855);
var inst_25861 = cljs.core.count.call(null,inst_25859);
var inst_25841 = inst_25860;
var inst_25842 = inst_25859;
var inst_25843 = inst_25861;
var inst_25844 = (0);
var state_25889__$1 = (function (){var statearr_25908 = state_25889;
(statearr_25908[(9)] = inst_25843);

(statearr_25908[(10)] = inst_25842);

(statearr_25908[(11)] = inst_25841);

(statearr_25908[(12)] = inst_25844);

return statearr_25908;
})();
var statearr_25909_25939 = state_25889__$1;
(statearr_25909_25939[(2)] = null);

(statearr_25909_25939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (3))){
var inst_25887 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25889__$1,inst_25887);
} else {
if((state_val_25890 === (12))){
var inst_25875 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
var statearr_25910_25940 = state_25889__$1;
(statearr_25910_25940[(2)] = inst_25875);

(statearr_25910_25940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (2))){
var state_25889__$1 = state_25889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25889__$1,(4),in$);
} else {
if((state_val_25890 === (23))){
var inst_25883 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
var statearr_25911_25941 = state_25889__$1;
(statearr_25911_25941[(2)] = inst_25883);

(statearr_25911_25941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (19))){
var inst_25870 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
var statearr_25912_25942 = state_25889__$1;
(statearr_25912_25942[(2)] = inst_25870);

(statearr_25912_25942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (11))){
var inst_25855 = (state_25889[(7)]);
var inst_25841 = (state_25889[(11)]);
var inst_25855__$1 = cljs.core.seq.call(null,inst_25841);
var state_25889__$1 = (function (){var statearr_25913 = state_25889;
(statearr_25913[(7)] = inst_25855__$1);

return statearr_25913;
})();
if(inst_25855__$1){
var statearr_25914_25943 = state_25889__$1;
(statearr_25914_25943[(1)] = (14));

} else {
var statearr_25915_25944 = state_25889__$1;
(statearr_25915_25944[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (9))){
var inst_25877 = (state_25889[(2)]);
var inst_25878 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25889__$1 = (function (){var statearr_25916 = state_25889;
(statearr_25916[(15)] = inst_25877);

return statearr_25916;
})();
if(cljs.core.truth_(inst_25878)){
var statearr_25917_25945 = state_25889__$1;
(statearr_25917_25945[(1)] = (21));

} else {
var statearr_25918_25946 = state_25889__$1;
(statearr_25918_25946[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (5))){
var inst_25833 = cljs.core.async.close_BANG_.call(null,out);
var state_25889__$1 = state_25889;
var statearr_25919_25947 = state_25889__$1;
(statearr_25919_25947[(2)] = inst_25833);

(statearr_25919_25947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (14))){
var inst_25855 = (state_25889[(7)]);
var inst_25857 = cljs.core.chunked_seq_QMARK_.call(null,inst_25855);
var state_25889__$1 = state_25889;
if(inst_25857){
var statearr_25920_25948 = state_25889__$1;
(statearr_25920_25948[(1)] = (17));

} else {
var statearr_25921_25949 = state_25889__$1;
(statearr_25921_25949[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (16))){
var inst_25873 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
var statearr_25922_25950 = state_25889__$1;
(statearr_25922_25950[(2)] = inst_25873);

(statearr_25922_25950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25890 === (10))){
var inst_25842 = (state_25889[(10)]);
var inst_25844 = (state_25889[(12)]);
var inst_25849 = cljs.core._nth.call(null,inst_25842,inst_25844);
var state_25889__$1 = state_25889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25889__$1,(13),out,inst_25849);
} else {
if((state_val_25890 === (18))){
var inst_25855 = (state_25889[(7)]);
var inst_25864 = cljs.core.first.call(null,inst_25855);
var state_25889__$1 = state_25889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25889__$1,(20),out,inst_25864);
} else {
if((state_val_25890 === (8))){
var inst_25843 = (state_25889[(9)]);
var inst_25844 = (state_25889[(12)]);
var inst_25846 = (inst_25844 < inst_25843);
var inst_25847 = inst_25846;
var state_25889__$1 = state_25889;
if(cljs.core.truth_(inst_25847)){
var statearr_25923_25951 = state_25889__$1;
(statearr_25923_25951[(1)] = (10));

} else {
var statearr_25924_25952 = state_25889__$1;
(statearr_25924_25952[(1)] = (11));

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
});})(c__22411__auto__))
;
return ((function (switch__22252__auto__,c__22411__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_25925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25925[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__);

(statearr_25925[(1)] = (1));

return statearr_25925;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____1 = (function (state_25889){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25926){if((e25926 instanceof Object)){
var ex__22256__auto__ = e25926;
var statearr_25927_25953 = state_25889;
(statearr_25927_25953[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25954 = state_25889;
state_25889 = G__25954;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__ = function(state_25889){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____1.call(this,state_25889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto__))
})();
var state__22413__auto__ = (function (){var statearr_25928 = f__22412__auto__.call(null);
(statearr_25928[(6)] = c__22411__auto__);

return statearr_25928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto__))
);

return c__22411__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25956 = arguments.length;
switch (G__25956) {
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
var G__25959 = arguments.length;
switch (G__25959) {
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
var G__25962 = arguments.length;
switch (G__25962) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22411__auto___26009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___26009,out){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___26009,out){
return (function (state_25986){
var state_val_25987 = (state_25986[(1)]);
if((state_val_25987 === (7))){
var inst_25981 = (state_25986[(2)]);
var state_25986__$1 = state_25986;
var statearr_25988_26010 = state_25986__$1;
(statearr_25988_26010[(2)] = inst_25981);

(statearr_25988_26010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25987 === (1))){
var inst_25963 = null;
var state_25986__$1 = (function (){var statearr_25989 = state_25986;
(statearr_25989[(7)] = inst_25963);

return statearr_25989;
})();
var statearr_25990_26011 = state_25986__$1;
(statearr_25990_26011[(2)] = null);

(statearr_25990_26011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25987 === (4))){
var inst_25966 = (state_25986[(8)]);
var inst_25966__$1 = (state_25986[(2)]);
var inst_25967 = (inst_25966__$1 == null);
var inst_25968 = cljs.core.not.call(null,inst_25967);
var state_25986__$1 = (function (){var statearr_25991 = state_25986;
(statearr_25991[(8)] = inst_25966__$1);

return statearr_25991;
})();
if(inst_25968){
var statearr_25992_26012 = state_25986__$1;
(statearr_25992_26012[(1)] = (5));

} else {
var statearr_25993_26013 = state_25986__$1;
(statearr_25993_26013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25987 === (6))){
var state_25986__$1 = state_25986;
var statearr_25994_26014 = state_25986__$1;
(statearr_25994_26014[(2)] = null);

(statearr_25994_26014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25987 === (3))){
var inst_25983 = (state_25986[(2)]);
var inst_25984 = cljs.core.async.close_BANG_.call(null,out);
var state_25986__$1 = (function (){var statearr_25995 = state_25986;
(statearr_25995[(9)] = inst_25983);

return statearr_25995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25986__$1,inst_25984);
} else {
if((state_val_25987 === (2))){
var state_25986__$1 = state_25986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25986__$1,(4),ch);
} else {
if((state_val_25987 === (11))){
var inst_25966 = (state_25986[(8)]);
var inst_25975 = (state_25986[(2)]);
var inst_25963 = inst_25966;
var state_25986__$1 = (function (){var statearr_25996 = state_25986;
(statearr_25996[(7)] = inst_25963);

(statearr_25996[(10)] = inst_25975);

return statearr_25996;
})();
var statearr_25997_26015 = state_25986__$1;
(statearr_25997_26015[(2)] = null);

(statearr_25997_26015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25987 === (9))){
var inst_25966 = (state_25986[(8)]);
var state_25986__$1 = state_25986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25986__$1,(11),out,inst_25966);
} else {
if((state_val_25987 === (5))){
var inst_25966 = (state_25986[(8)]);
var inst_25963 = (state_25986[(7)]);
var inst_25970 = cljs.core._EQ_.call(null,inst_25966,inst_25963);
var state_25986__$1 = state_25986;
if(inst_25970){
var statearr_25999_26016 = state_25986__$1;
(statearr_25999_26016[(1)] = (8));

} else {
var statearr_26000_26017 = state_25986__$1;
(statearr_26000_26017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25987 === (10))){
var inst_25978 = (state_25986[(2)]);
var state_25986__$1 = state_25986;
var statearr_26001_26018 = state_25986__$1;
(statearr_26001_26018[(2)] = inst_25978);

(statearr_26001_26018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25987 === (8))){
var inst_25963 = (state_25986[(7)]);
var tmp25998 = inst_25963;
var inst_25963__$1 = tmp25998;
var state_25986__$1 = (function (){var statearr_26002 = state_25986;
(statearr_26002[(7)] = inst_25963__$1);

return statearr_26002;
})();
var statearr_26003_26019 = state_25986__$1;
(statearr_26003_26019[(2)] = null);

(statearr_26003_26019[(1)] = (2));


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
});})(c__22411__auto___26009,out))
;
return ((function (switch__22252__auto__,c__22411__auto___26009,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_26004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26004[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_26004[(1)] = (1));

return statearr_26004;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_25986){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e26005){if((e26005 instanceof Object)){
var ex__22256__auto__ = e26005;
var statearr_26006_26020 = state_25986;
(statearr_26006_26020[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26021 = state_25986;
state_25986 = G__26021;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_25986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_25986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___26009,out))
})();
var state__22413__auto__ = (function (){var statearr_26007 = f__22412__auto__.call(null);
(statearr_26007[(6)] = c__22411__auto___26009);

return statearr_26007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___26009,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26023 = arguments.length;
switch (G__26023) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22411__auto___26089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___26089,out){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___26089,out){
return (function (state_26061){
var state_val_26062 = (state_26061[(1)]);
if((state_val_26062 === (7))){
var inst_26057 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26063_26090 = state_26061__$1;
(statearr_26063_26090[(2)] = inst_26057);

(statearr_26063_26090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (1))){
var inst_26024 = (new Array(n));
var inst_26025 = inst_26024;
var inst_26026 = (0);
var state_26061__$1 = (function (){var statearr_26064 = state_26061;
(statearr_26064[(7)] = inst_26025);

(statearr_26064[(8)] = inst_26026);

return statearr_26064;
})();
var statearr_26065_26091 = state_26061__$1;
(statearr_26065_26091[(2)] = null);

(statearr_26065_26091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (4))){
var inst_26029 = (state_26061[(9)]);
var inst_26029__$1 = (state_26061[(2)]);
var inst_26030 = (inst_26029__$1 == null);
var inst_26031 = cljs.core.not.call(null,inst_26030);
var state_26061__$1 = (function (){var statearr_26066 = state_26061;
(statearr_26066[(9)] = inst_26029__$1);

return statearr_26066;
})();
if(inst_26031){
var statearr_26067_26092 = state_26061__$1;
(statearr_26067_26092[(1)] = (5));

} else {
var statearr_26068_26093 = state_26061__$1;
(statearr_26068_26093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (15))){
var inst_26051 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26069_26094 = state_26061__$1;
(statearr_26069_26094[(2)] = inst_26051);

(statearr_26069_26094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (13))){
var state_26061__$1 = state_26061;
var statearr_26070_26095 = state_26061__$1;
(statearr_26070_26095[(2)] = null);

(statearr_26070_26095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (6))){
var inst_26026 = (state_26061[(8)]);
var inst_26047 = (inst_26026 > (0));
var state_26061__$1 = state_26061;
if(cljs.core.truth_(inst_26047)){
var statearr_26071_26096 = state_26061__$1;
(statearr_26071_26096[(1)] = (12));

} else {
var statearr_26072_26097 = state_26061__$1;
(statearr_26072_26097[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (3))){
var inst_26059 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26061__$1,inst_26059);
} else {
if((state_val_26062 === (12))){
var inst_26025 = (state_26061[(7)]);
var inst_26049 = cljs.core.vec.call(null,inst_26025);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26061__$1,(15),out,inst_26049);
} else {
if((state_val_26062 === (2))){
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26061__$1,(4),ch);
} else {
if((state_val_26062 === (11))){
var inst_26041 = (state_26061[(2)]);
var inst_26042 = (new Array(n));
var inst_26025 = inst_26042;
var inst_26026 = (0);
var state_26061__$1 = (function (){var statearr_26073 = state_26061;
(statearr_26073[(7)] = inst_26025);

(statearr_26073[(8)] = inst_26026);

(statearr_26073[(10)] = inst_26041);

return statearr_26073;
})();
var statearr_26074_26098 = state_26061__$1;
(statearr_26074_26098[(2)] = null);

(statearr_26074_26098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (9))){
var inst_26025 = (state_26061[(7)]);
var inst_26039 = cljs.core.vec.call(null,inst_26025);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26061__$1,(11),out,inst_26039);
} else {
if((state_val_26062 === (5))){
var inst_26025 = (state_26061[(7)]);
var inst_26026 = (state_26061[(8)]);
var inst_26029 = (state_26061[(9)]);
var inst_26034 = (state_26061[(11)]);
var inst_26033 = (inst_26025[inst_26026] = inst_26029);
var inst_26034__$1 = (inst_26026 + (1));
var inst_26035 = (inst_26034__$1 < n);
var state_26061__$1 = (function (){var statearr_26075 = state_26061;
(statearr_26075[(11)] = inst_26034__$1);

(statearr_26075[(12)] = inst_26033);

return statearr_26075;
})();
if(cljs.core.truth_(inst_26035)){
var statearr_26076_26099 = state_26061__$1;
(statearr_26076_26099[(1)] = (8));

} else {
var statearr_26077_26100 = state_26061__$1;
(statearr_26077_26100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (14))){
var inst_26054 = (state_26061[(2)]);
var inst_26055 = cljs.core.async.close_BANG_.call(null,out);
var state_26061__$1 = (function (){var statearr_26079 = state_26061;
(statearr_26079[(13)] = inst_26054);

return statearr_26079;
})();
var statearr_26080_26101 = state_26061__$1;
(statearr_26080_26101[(2)] = inst_26055);

(statearr_26080_26101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (10))){
var inst_26045 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26081_26102 = state_26061__$1;
(statearr_26081_26102[(2)] = inst_26045);

(statearr_26081_26102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26062 === (8))){
var inst_26025 = (state_26061[(7)]);
var inst_26034 = (state_26061[(11)]);
var tmp26078 = inst_26025;
var inst_26025__$1 = tmp26078;
var inst_26026 = inst_26034;
var state_26061__$1 = (function (){var statearr_26082 = state_26061;
(statearr_26082[(7)] = inst_26025__$1);

(statearr_26082[(8)] = inst_26026);

return statearr_26082;
})();
var statearr_26083_26103 = state_26061__$1;
(statearr_26083_26103[(2)] = null);

(statearr_26083_26103[(1)] = (2));


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
});})(c__22411__auto___26089,out))
;
return ((function (switch__22252__auto__,c__22411__auto___26089,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_26084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26084[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_26084[(1)] = (1));

return statearr_26084;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_26061){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_26061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e26085){if((e26085 instanceof Object)){
var ex__22256__auto__ = e26085;
var statearr_26086_26104 = state_26061;
(statearr_26086_26104[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26105 = state_26061;
state_26061 = G__26105;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_26061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_26061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___26089,out))
})();
var state__22413__auto__ = (function (){var statearr_26087 = f__22412__auto__.call(null);
(statearr_26087[(6)] = c__22411__auto___26089);

return statearr_26087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___26089,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26107 = arguments.length;
switch (G__26107) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22411__auto___26177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22411__auto___26177,out){
return (function (){
var f__22412__auto__ = (function (){var switch__22252__auto__ = ((function (c__22411__auto___26177,out){
return (function (state_26149){
var state_val_26150 = (state_26149[(1)]);
if((state_val_26150 === (7))){
var inst_26145 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
var statearr_26151_26178 = state_26149__$1;
(statearr_26151_26178[(2)] = inst_26145);

(statearr_26151_26178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (1))){
var inst_26108 = [];
var inst_26109 = inst_26108;
var inst_26110 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26149__$1 = (function (){var statearr_26152 = state_26149;
(statearr_26152[(7)] = inst_26110);

(statearr_26152[(8)] = inst_26109);

return statearr_26152;
})();
var statearr_26153_26179 = state_26149__$1;
(statearr_26153_26179[(2)] = null);

(statearr_26153_26179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (4))){
var inst_26113 = (state_26149[(9)]);
var inst_26113__$1 = (state_26149[(2)]);
var inst_26114 = (inst_26113__$1 == null);
var inst_26115 = cljs.core.not.call(null,inst_26114);
var state_26149__$1 = (function (){var statearr_26154 = state_26149;
(statearr_26154[(9)] = inst_26113__$1);

return statearr_26154;
})();
if(inst_26115){
var statearr_26155_26180 = state_26149__$1;
(statearr_26155_26180[(1)] = (5));

} else {
var statearr_26156_26181 = state_26149__$1;
(statearr_26156_26181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (15))){
var inst_26139 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
var statearr_26157_26182 = state_26149__$1;
(statearr_26157_26182[(2)] = inst_26139);

(statearr_26157_26182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (13))){
var state_26149__$1 = state_26149;
var statearr_26158_26183 = state_26149__$1;
(statearr_26158_26183[(2)] = null);

(statearr_26158_26183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (6))){
var inst_26109 = (state_26149[(8)]);
var inst_26134 = inst_26109.length;
var inst_26135 = (inst_26134 > (0));
var state_26149__$1 = state_26149;
if(cljs.core.truth_(inst_26135)){
var statearr_26159_26184 = state_26149__$1;
(statearr_26159_26184[(1)] = (12));

} else {
var statearr_26160_26185 = state_26149__$1;
(statearr_26160_26185[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (3))){
var inst_26147 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26149__$1,inst_26147);
} else {
if((state_val_26150 === (12))){
var inst_26109 = (state_26149[(8)]);
var inst_26137 = cljs.core.vec.call(null,inst_26109);
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26149__$1,(15),out,inst_26137);
} else {
if((state_val_26150 === (2))){
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26149__$1,(4),ch);
} else {
if((state_val_26150 === (11))){
var inst_26117 = (state_26149[(10)]);
var inst_26113 = (state_26149[(9)]);
var inst_26127 = (state_26149[(2)]);
var inst_26128 = [];
var inst_26129 = inst_26128.push(inst_26113);
var inst_26109 = inst_26128;
var inst_26110 = inst_26117;
var state_26149__$1 = (function (){var statearr_26161 = state_26149;
(statearr_26161[(11)] = inst_26129);

(statearr_26161[(7)] = inst_26110);

(statearr_26161[(12)] = inst_26127);

(statearr_26161[(8)] = inst_26109);

return statearr_26161;
})();
var statearr_26162_26186 = state_26149__$1;
(statearr_26162_26186[(2)] = null);

(statearr_26162_26186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (9))){
var inst_26109 = (state_26149[(8)]);
var inst_26125 = cljs.core.vec.call(null,inst_26109);
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26149__$1,(11),out,inst_26125);
} else {
if((state_val_26150 === (5))){
var inst_26110 = (state_26149[(7)]);
var inst_26117 = (state_26149[(10)]);
var inst_26113 = (state_26149[(9)]);
var inst_26117__$1 = f.call(null,inst_26113);
var inst_26118 = cljs.core._EQ_.call(null,inst_26117__$1,inst_26110);
var inst_26119 = cljs.core.keyword_identical_QMARK_.call(null,inst_26110,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26120 = ((inst_26118) || (inst_26119));
var state_26149__$1 = (function (){var statearr_26163 = state_26149;
(statearr_26163[(10)] = inst_26117__$1);

return statearr_26163;
})();
if(cljs.core.truth_(inst_26120)){
var statearr_26164_26187 = state_26149__$1;
(statearr_26164_26187[(1)] = (8));

} else {
var statearr_26165_26188 = state_26149__$1;
(statearr_26165_26188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (14))){
var inst_26142 = (state_26149[(2)]);
var inst_26143 = cljs.core.async.close_BANG_.call(null,out);
var state_26149__$1 = (function (){var statearr_26167 = state_26149;
(statearr_26167[(13)] = inst_26142);

return statearr_26167;
})();
var statearr_26168_26189 = state_26149__$1;
(statearr_26168_26189[(2)] = inst_26143);

(statearr_26168_26189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (10))){
var inst_26132 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
var statearr_26169_26190 = state_26149__$1;
(statearr_26169_26190[(2)] = inst_26132);

(statearr_26169_26190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (8))){
var inst_26117 = (state_26149[(10)]);
var inst_26113 = (state_26149[(9)]);
var inst_26109 = (state_26149[(8)]);
var inst_26122 = inst_26109.push(inst_26113);
var tmp26166 = inst_26109;
var inst_26109__$1 = tmp26166;
var inst_26110 = inst_26117;
var state_26149__$1 = (function (){var statearr_26170 = state_26149;
(statearr_26170[(14)] = inst_26122);

(statearr_26170[(7)] = inst_26110);

(statearr_26170[(8)] = inst_26109__$1);

return statearr_26170;
})();
var statearr_26171_26191 = state_26149__$1;
(statearr_26171_26191[(2)] = null);

(statearr_26171_26191[(1)] = (2));


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
});})(c__22411__auto___26177,out))
;
return ((function (switch__22252__auto__,c__22411__auto___26177,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_26172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26172[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_26172[(1)] = (1));

return statearr_26172;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_26149){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_26149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e26173){if((e26173 instanceof Object)){
var ex__22256__auto__ = e26173;
var statearr_26174_26192 = state_26149;
(statearr_26174_26192[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26193 = state_26149;
state_26149 = G__26193;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_26149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_26149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22411__auto___26177,out))
})();
var state__22413__auto__ = (function (){var statearr_26175 = f__22412__auto__.call(null);
(statearr_26175[(6)] = c__22411__auto___26177);

return statearr_26175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22413__auto__);
});})(c__22411__auto___26177,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
