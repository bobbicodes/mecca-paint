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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__19616){
var vec__19617 = p__19616;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19617,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19617,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__19620 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__19620);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__19623){
var map__19624 = p__19623;
var map__19624__$1 = ((((!((map__19624 == null)))?(((((map__19624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19624):map__19624);
var request = map__19624__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19624__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19624__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__19624,map__19624__$1,request,on_success,on_failure){
return (function (p1__19621_SHARP_){
var G__19626 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__19621_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19626) : re_frame.core.dispatch.call(null,G__19626));
});})(api,map__19624,map__19624__$1,request,on_success,on_failure))
,((function (api,map__19624,map__19624__$1,request,on_success,on_failure){
return (function (p1__19622_SHARP_){
var G__19627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__19622_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19627) : re_frame.core.dispatch.call(null,G__19627));
});})(api,map__19624,map__19624__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__19628 = cljs.core.seq(seq_request_maps);
var chunk__19629 = null;
var count__19630 = (0);
var i__19631 = (0);
while(true){
if((i__19631 < count__19630)){
var request__$1 = chunk__19629.cljs$core$IIndexed$_nth$arity$2(null,i__19631);
var G__19632_19634 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19632_19634) : ajax.core.ajax_request.call(null,G__19632_19634));


var G__19635 = seq__19628;
var G__19636 = chunk__19629;
var G__19637 = count__19630;
var G__19638 = (i__19631 + (1));
seq__19628 = G__19635;
chunk__19629 = G__19636;
count__19630 = G__19637;
i__19631 = G__19638;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19628);
if(temp__5457__auto__){
var seq__19628__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19628__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19628__$1);
var G__19639 = cljs.core.chunk_rest(seq__19628__$1);
var G__19640 = c__4351__auto__;
var G__19641 = cljs.core.count(c__4351__auto__);
var G__19642 = (0);
seq__19628 = G__19639;
chunk__19629 = G__19640;
count__19630 = G__19641;
i__19631 = G__19642;
continue;
} else {
var request__$1 = cljs.core.first(seq__19628__$1);
var G__19633_19643 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19633_19643) : ajax.core.ajax_request.call(null,G__19633_19643));


var G__19644 = cljs.core.next(seq__19628__$1);
var G__19645 = null;
var G__19646 = (0);
var G__19647 = (0);
seq__19628 = G__19644;
chunk__19629 = G__19645;
count__19630 = G__19646;
i__19631 = G__19647;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__19648_19650 = cljs.core.cst$kw$http_DASH_xhrio;
var G__19649_19651 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19648_19650,G__19649_19651) : re_frame.core.reg_fx.call(null,G__19648_19650,G__19649_19651));
