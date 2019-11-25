// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#f80000",cljs.core.cst$kw$pixels,cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_color,(function (db,p__12530){
var vec__12531 = p__12530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$color,color);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fill_DASH_cell,(function (db,p__12534){
var vec__12535 = p__12534;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(2),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$pixels,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
}));
