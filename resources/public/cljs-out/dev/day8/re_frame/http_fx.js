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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__19634){
var vec__19635 = p__19634;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19635,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19635,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__19638 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__19638);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__19641){
var map__19642 = p__19641;
var map__19642__$1 = ((((!((map__19642 == null)))?(((((map__19642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19642):map__19642);
var request = map__19642__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19642__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19642__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__19642,map__19642__$1,request,on_success,on_failure){
return (function (p1__19639_SHARP_){
var G__19644 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__19639_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19644) : re_frame.core.dispatch.call(null,G__19644));
});})(api,map__19642,map__19642__$1,request,on_success,on_failure))
,((function (api,map__19642,map__19642__$1,request,on_success,on_failure){
return (function (p1__19640_SHARP_){
var G__19645 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__19640_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19645) : re_frame.core.dispatch.call(null,G__19645));
});})(api,map__19642,map__19642__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__19646 = cljs.core.seq(seq_request_maps);
var chunk__19647 = null;
var count__19648 = (0);
var i__19649 = (0);
while(true){
if((i__19649 < count__19648)){
var request__$1 = chunk__19647.cljs$core$IIndexed$_nth$arity$2(null,i__19649);
var G__19650_19652 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19650_19652) : ajax.core.ajax_request.call(null,G__19650_19652));


var G__19653 = seq__19646;
var G__19654 = chunk__19647;
var G__19655 = count__19648;
var G__19656 = (i__19649 + (1));
seq__19646 = G__19653;
chunk__19647 = G__19654;
count__19648 = G__19655;
i__19649 = G__19656;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19646);
if(temp__5457__auto__){
var seq__19646__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19646__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19646__$1);
var G__19657 = cljs.core.chunk_rest(seq__19646__$1);
var G__19658 = c__4351__auto__;
var G__19659 = cljs.core.count(c__4351__auto__);
var G__19660 = (0);
seq__19646 = G__19657;
chunk__19647 = G__19658;
count__19648 = G__19659;
i__19649 = G__19660;
continue;
} else {
var request__$1 = cljs.core.first(seq__19646__$1);
var G__19651_19661 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19651_19661) : ajax.core.ajax_request.call(null,G__19651_19661));


var G__19662 = cljs.core.next(seq__19646__$1);
var G__19663 = null;
var G__19664 = (0);
var G__19665 = (0);
seq__19646 = G__19662;
chunk__19647 = G__19663;
count__19648 = G__19664;
i__19649 = G__19665;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__19666_19668 = cljs.core.cst$kw$http_DASH_xhrio;
var G__19667_19669 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19666_19668,G__19667_19669) : re_frame.core.reg_fx.call(null,G__19666_19668,G__19667_19669));
