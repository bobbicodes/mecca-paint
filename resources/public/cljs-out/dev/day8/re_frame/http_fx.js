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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__19699){
var vec__19700 = p__19699;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__19703 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__19703);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__19706){
var map__19707 = p__19706;
var map__19707__$1 = ((((!((map__19707 == null)))?(((((map__19707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19707):map__19707);
var request = map__19707__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19707__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19707__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__19707,map__19707__$1,request,on_success,on_failure){
return (function (p1__19704_SHARP_){
var G__19709 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__19704_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19709) : re_frame.core.dispatch.call(null,G__19709));
});})(api,map__19707,map__19707__$1,request,on_success,on_failure))
,((function (api,map__19707,map__19707__$1,request,on_success,on_failure){
return (function (p1__19705_SHARP_){
var G__19710 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__19705_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19710) : re_frame.core.dispatch.call(null,G__19710));
});})(api,map__19707,map__19707__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__19711 = cljs.core.seq(seq_request_maps);
var chunk__19712 = null;
var count__19713 = (0);
var i__19714 = (0);
while(true){
if((i__19714 < count__19713)){
var request__$1 = chunk__19712.cljs$core$IIndexed$_nth$arity$2(null,i__19714);
var G__19715_19717 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19715_19717) : ajax.core.ajax_request.call(null,G__19715_19717));


var G__19718 = seq__19711;
var G__19719 = chunk__19712;
var G__19720 = count__19713;
var G__19721 = (i__19714 + (1));
seq__19711 = G__19718;
chunk__19712 = G__19719;
count__19713 = G__19720;
i__19714 = G__19721;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19711);
if(temp__5457__auto__){
var seq__19711__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19711__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19711__$1);
var G__19722 = cljs.core.chunk_rest(seq__19711__$1);
var G__19723 = c__4351__auto__;
var G__19724 = cljs.core.count(c__4351__auto__);
var G__19725 = (0);
seq__19711 = G__19722;
chunk__19712 = G__19723;
count__19713 = G__19724;
i__19714 = G__19725;
continue;
} else {
var request__$1 = cljs.core.first(seq__19711__$1);
var G__19716_19726 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19716_19726) : ajax.core.ajax_request.call(null,G__19716_19726));


var G__19727 = cljs.core.next(seq__19711__$1);
var G__19728 = null;
var G__19729 = (0);
var G__19730 = (0);
seq__19711 = G__19727;
chunk__19712 = G__19728;
count__19713 = G__19729;
i__19714 = G__19730;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__19731_19733 = cljs.core.cst$kw$http_DASH_xhrio;
var G__19732_19734 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19731_19733,G__19732_19734) : re_frame.core.reg_fx.call(null,G__19731_19733,G__19732_19734));
