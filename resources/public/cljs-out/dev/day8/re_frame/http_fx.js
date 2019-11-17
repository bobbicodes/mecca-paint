// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__19586){
var vec__19587 = p__19586;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19587,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19587,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__19590 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__19590);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__19593){
var map__19594 = p__19593;
var map__19594__$1 = ((((!((map__19594 == null)))?(((((map__19594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19594):map__19594);
var request = map__19594__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19594__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19594__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__19594,map__19594__$1,request,on_success,on_failure){
return (function (p1__19591_SHARP_){
var G__19596 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__19591_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19596) : re_frame.core.dispatch.call(null,G__19596));
});})(api,map__19594,map__19594__$1,request,on_success,on_failure))
,((function (api,map__19594,map__19594__$1,request,on_success,on_failure){
return (function (p1__19592_SHARP_){
var G__19597 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__19592_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19597) : re_frame.core.dispatch.call(null,G__19597));
});})(api,map__19594,map__19594__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__19598 = cljs.core.seq(seq_request_maps);
var chunk__19599 = null;
var count__19600 = (0);
var i__19601 = (0);
while(true){
if((i__19601 < count__19600)){
var request__$1 = chunk__19599.cljs$core$IIndexed$_nth$arity$2(null,i__19601);
var G__19602_19604 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19602_19604) : ajax.core.ajax_request.call(null,G__19602_19604));


var G__19605 = seq__19598;
var G__19606 = chunk__19599;
var G__19607 = count__19600;
var G__19608 = (i__19601 + (1));
seq__19598 = G__19605;
chunk__19599 = G__19606;
count__19600 = G__19607;
i__19601 = G__19608;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19598);
if(temp__5457__auto__){
var seq__19598__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19598__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19598__$1);
var G__19609 = cljs.core.chunk_rest(seq__19598__$1);
var G__19610 = c__4351__auto__;
var G__19611 = cljs.core.count(c__4351__auto__);
var G__19612 = (0);
seq__19598 = G__19609;
chunk__19599 = G__19610;
count__19600 = G__19611;
i__19601 = G__19612;
continue;
} else {
var request__$1 = cljs.core.first(seq__19598__$1);
var G__19603_19613 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19603_19613) : ajax.core.ajax_request.call(null,G__19603_19613));


var G__19614 = cljs.core.next(seq__19598__$1);
var G__19615 = null;
var G__19616 = (0);
var G__19617 = (0);
seq__19598 = G__19614;
chunk__19599 = G__19615;
count__19600 = G__19616;
i__19601 = G__19617;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__19618_19620 = cljs.core.cst$kw$http_DASH_xhrio;
var G__19619_19621 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19618_19620,G__19619_19621) : re_frame.core.reg_fx.call(null,G__19618_19620,G__19619_19621));
