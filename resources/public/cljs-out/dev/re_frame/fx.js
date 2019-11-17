// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_12952 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__12953 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12954 = null;
var count__12955 = (0);
var i__12956 = (0);
while(true){
if((i__12956 < count__12955)){
var vec__12957 = chunk__12954.cljs$core$IIndexed$_nth$arity$2(null,i__12956);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12957,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12957,(1),null);
var temp__5455__auto___12973 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12973)){
var effect_fn_12974 = temp__5455__auto___12973;
(effect_fn_12974.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12974.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12974.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12975 = seq__12953;
var G__12976 = chunk__12954;
var G__12977 = count__12955;
var G__12978 = (i__12956 + (1));
seq__12953 = G__12975;
chunk__12954 = G__12976;
count__12955 = G__12977;
i__12956 = G__12978;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12953);
if(temp__5457__auto__){
var seq__12953__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12953__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12953__$1);
var G__12979 = cljs.core.chunk_rest(seq__12953__$1);
var G__12980 = c__4351__auto__;
var G__12981 = cljs.core.count(c__4351__auto__);
var G__12982 = (0);
seq__12953 = G__12979;
chunk__12954 = G__12980;
count__12955 = G__12981;
i__12956 = G__12982;
continue;
} else {
var vec__12960 = cljs.core.first(seq__12953__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12960,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12960,(1),null);
var temp__5455__auto___12983 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12983)){
var effect_fn_12984 = temp__5455__auto___12983;
(effect_fn_12984.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12984.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12984.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12985 = cljs.core.next(seq__12953__$1);
var G__12986 = null;
var G__12987 = (0);
var G__12988 = (0);
seq__12953 = G__12985;
chunk__12954 = G__12986;
count__12955 = G__12987;
i__12956 = G__12988;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12517__auto___12989 = re_frame.interop.now();
var duration__12518__auto___12990 = (end__12517__auto___12989 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__12518__auto___12990,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12517__auto___12989);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12952;
}} else {
var seq__12963 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12964 = null;
var count__12965 = (0);
var i__12966 = (0);
while(true){
if((i__12966 < count__12965)){
var vec__12967 = chunk__12964.cljs$core$IIndexed$_nth$arity$2(null,i__12966);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12967,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12967,(1),null);
var temp__5455__auto___12991 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12991)){
var effect_fn_12992 = temp__5455__auto___12991;
(effect_fn_12992.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12992.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12992.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12993 = seq__12963;
var G__12994 = chunk__12964;
var G__12995 = count__12965;
var G__12996 = (i__12966 + (1));
seq__12963 = G__12993;
chunk__12964 = G__12994;
count__12965 = G__12995;
i__12966 = G__12996;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12963);
if(temp__5457__auto__){
var seq__12963__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12963__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12963__$1);
var G__12997 = cljs.core.chunk_rest(seq__12963__$1);
var G__12998 = c__4351__auto__;
var G__12999 = cljs.core.count(c__4351__auto__);
var G__13000 = (0);
seq__12963 = G__12997;
chunk__12964 = G__12998;
count__12965 = G__12999;
i__12966 = G__13000;
continue;
} else {
var vec__12970 = cljs.core.first(seq__12963__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12970,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12970,(1),null);
var temp__5455__auto___13001 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___13001)){
var effect_fn_13002 = temp__5455__auto___13001;
(effect_fn_13002.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13002.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13002.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13003 = cljs.core.next(seq__12963__$1);
var G__13004 = null;
var G__13005 = (0);
var G__13006 = (0);
seq__12963 = G__13003;
chunk__12964 = G__13004;
count__12965 = G__13005;
i__12966 = G__13006;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__13007 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13008 = null;
var count__13009 = (0);
var i__13010 = (0);
while(true){
if((i__13010 < count__13009)){
var map__13011 = chunk__13008.cljs$core$IIndexed$_nth$arity$2(null,i__13010);
var map__13011__$1 = ((((!((map__13011 == null)))?(((((map__13011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13011):map__13011);
var effect = map__13011__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13011__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13011__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13007,chunk__13008,count__13009,i__13010,map__13011,map__13011__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13007,chunk__13008,count__13009,i__13010,map__13011,map__13011__$1,effect,ms,dispatch))
,ms);
}


var G__13015 = seq__13007;
var G__13016 = chunk__13008;
var G__13017 = count__13009;
var G__13018 = (i__13010 + (1));
seq__13007 = G__13015;
chunk__13008 = G__13016;
count__13009 = G__13017;
i__13010 = G__13018;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13007);
if(temp__5457__auto__){
var seq__13007__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13007__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13007__$1);
var G__13019 = cljs.core.chunk_rest(seq__13007__$1);
var G__13020 = c__4351__auto__;
var G__13021 = cljs.core.count(c__4351__auto__);
var G__13022 = (0);
seq__13007 = G__13019;
chunk__13008 = G__13020;
count__13009 = G__13021;
i__13010 = G__13022;
continue;
} else {
var map__13013 = cljs.core.first(seq__13007__$1);
var map__13013__$1 = ((((!((map__13013 == null)))?(((((map__13013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13013):map__13013);
var effect = map__13013__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13013__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13013__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13007,chunk__13008,count__13009,i__13010,map__13013,map__13013__$1,effect,ms,dispatch,seq__13007__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13007,chunk__13008,count__13009,i__13010,map__13013,map__13013__$1,effect,ms,dispatch,seq__13007__$1,temp__5457__auto__))
,ms);
}


var G__13023 = cljs.core.next(seq__13007__$1);
var G__13024 = null;
var G__13025 = (0);
var G__13026 = (0);
seq__13007 = G__13023;
chunk__13008 = G__13024;
count__13009 = G__13025;
i__13010 = G__13026;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13027 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13028 = null;
var count__13029 = (0);
var i__13030 = (0);
while(true){
if((i__13030 < count__13029)){
var event = chunk__13028.cljs$core$IIndexed$_nth$arity$2(null,i__13030);
re_frame.router.dispatch(event);


var G__13031 = seq__13027;
var G__13032 = chunk__13028;
var G__13033 = count__13029;
var G__13034 = (i__13030 + (1));
seq__13027 = G__13031;
chunk__13028 = G__13032;
count__13029 = G__13033;
i__13030 = G__13034;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13027);
if(temp__5457__auto__){
var seq__13027__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13027__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13027__$1);
var G__13035 = cljs.core.chunk_rest(seq__13027__$1);
var G__13036 = c__4351__auto__;
var G__13037 = cljs.core.count(c__4351__auto__);
var G__13038 = (0);
seq__13027 = G__13035;
chunk__13028 = G__13036;
count__13029 = G__13037;
i__13030 = G__13038;
continue;
} else {
var event = cljs.core.first(seq__13027__$1);
re_frame.router.dispatch(event);


var G__13039 = cljs.core.next(seq__13027__$1);
var G__13040 = null;
var G__13041 = (0);
var G__13042 = (0);
seq__13027 = G__13039;
chunk__13028 = G__13040;
count__13029 = G__13041;
i__13030 = G__13042;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13043 = cljs.core.seq(value);
var chunk__13044 = null;
var count__13045 = (0);
var i__13046 = (0);
while(true){
if((i__13046 < count__13045)){
var event = chunk__13044.cljs$core$IIndexed$_nth$arity$2(null,i__13046);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13047 = seq__13043;
var G__13048 = chunk__13044;
var G__13049 = count__13045;
var G__13050 = (i__13046 + (1));
seq__13043 = G__13047;
chunk__13044 = G__13048;
count__13045 = G__13049;
i__13046 = G__13050;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13043);
if(temp__5457__auto__){
var seq__13043__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13043__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13043__$1);
var G__13051 = cljs.core.chunk_rest(seq__13043__$1);
var G__13052 = c__4351__auto__;
var G__13053 = cljs.core.count(c__4351__auto__);
var G__13054 = (0);
seq__13043 = G__13051;
chunk__13044 = G__13052;
count__13045 = G__13053;
i__13046 = G__13054;
continue;
} else {
var event = cljs.core.first(seq__13043__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13055 = cljs.core.next(seq__13043__$1);
var G__13056 = null;
var G__13057 = (0);
var G__13058 = (0);
seq__13043 = G__13055;
chunk__13044 = G__13056;
count__13045 = G__13057;
i__13046 = G__13058;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
