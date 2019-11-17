// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_pressed.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_pressed.impl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_add_DASH_keyboard_DASH_event_DASH_listener,(function (_,p__13914){
var vec__13915 = p__13914;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13915,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13915,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyboard_DASH_event,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event_DASH_type,event_type], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keydown_DASH_rules,(function (p__13918,p__13919){
var map__13920 = p__13918;
var map__13920__$1 = ((((!((map__13920 == null)))?(((((map__13920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13920):map__13920);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,cljs.core.cst$kw$db);
var vec__13921 = p__13919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13921,(0),null);
var map__13924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13921,(1),null);
var map__13924__$1 = ((((!((map__13924 == null)))?(((((map__13924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13924):map__13924);
var opts = map__13924__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13924__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13924__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13924__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13924__$1,cljs.core.cst$kw$prevent_DASH_default_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$prevent_DASH_default_DASH_keys], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keypress_DASH_rules,(function (p__13927,p__13928){
var map__13929 = p__13927;
var map__13929__$1 = ((((!((map__13929 == null)))?(((((map__13929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13929):map__13929);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13929__$1,cljs.core.cst$kw$db);
var vec__13930 = p__13928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13930,(0),null);
var map__13933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13930,(1),null);
var map__13933__$1 = ((((!((map__13933 == null)))?(((((map__13933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13933):map__13933);
var opts = map__13933__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13933__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13933__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13933__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keyup_DASH_rules,(function (p__13936,p__13937){
var map__13938 = p__13936;
var map__13938__$1 = ((((!((map__13938 == null)))?(((((map__13938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13938):map__13938);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13938__$1,cljs.core.cst$kw$db);
var vec__13939 = p__13937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13939,(0),null);
var map__13942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13939,(1),null);
var map__13942__$1 = ((((!((map__13942 == null)))?(((((map__13942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13942):map__13942);
var opts = map__13942__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13942__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13942__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13942__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
