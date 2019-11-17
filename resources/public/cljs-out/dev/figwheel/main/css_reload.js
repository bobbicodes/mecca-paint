// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.main.css_reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.log');
goog.require('goog.object');
goog.require('goog.cssom');
goog.require('goog.events');
goog.require('goog.Promise');
goog.require('goog.debug.Console');
if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.logger !== 'undefined')){
} else {
figwheel.main.css_reload.logger = goog.log.getLogger("Figwheel CSS Reload");
}

figwheel.main.css_reload.console_logging = (function figwheel$main$css_reload$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_25912 = (new goog.debug.Console());
var G__25900_25913 = c_25912.getFormatter();
goog.object.set(G__25900_25913,"showAbsoluteTime",false);

goog.object.set(G__25900_25913,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_25912);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.main.css_reload.console_logging', figwheel.main.css_reload.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.log_console !== 'undefined')){
} else {
figwheel.main.css_reload.log_console = figwheel.main.css_reload.console_logging.call(null);
}

figwheel.main.css_reload.add_cache_buster = (function figwheel$main$css_reload$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.main.css_reload.truncate_url = (function figwheel$main$css_reload$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});

figwheel.main.css_reload.matches_file_QMARK_ = (function figwheel$main$css_reload$matches_file_QMARK_(file,stylesheet){
var temp__5457__auto__ = stylesheet.href;
if(cljs.core.truth_(temp__5457__auto__)){
var href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (href,temp__5457__auto__){
return (function (p1__25896_SHARP_,p2__25897_SHARP_){
if(cljs.core._EQ_.call(null,p1__25896_SHARP_,p2__25897_SHARP_)){
return p1__25896_SHARP_;
} else {
return false;
}
});})(href,temp__5457__auto__))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.main.css_reload.truncate_url.call(null,href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426),stylesheet,new cljs.core.Keyword(null,"link-href","link-href",-250644450),href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.main.css_reload.truncate_url.call(null,href))], null);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.root_stylesheet = (function figwheel$main$css_reload$root_stylesheet(stylesheet){
while(true){
var temp__5455__auto__ = stylesheet.parentStyleSheet;
if(cljs.core.truth_(temp__5455__auto__)){
var parent_stylesheet = temp__5455__auto__;
var G__25914 = parent_stylesheet;
stylesheet = G__25914;
continue;
} else {
return stylesheet;
}
break;
}
});

figwheel.main.css_reload.get_correct_link = (function figwheel$main$css_reload$get_correct_link(file){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25901){
var map__25902 = p__25901;
var map__25902__$1 = ((((!((map__25902 == null)))?(((((map__25902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25902):map__25902);
var match_length = cljs.core.get.call(null,map__25902__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25902__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25898_SHARP_){
return figwheel.main.css_reload.matches_file_QMARK_.call(null,file,p1__25898_SHARP_);
}),goog.cssom.getAllCssStyleSheets())));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return figwheel.main.css_reload.root_stylesheet.call(null,new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426).cljs$core$IFn$_invoke$arity$1(res)).ownerNode;
} else {
return null;
}
});

figwheel.main.css_reload.clone_link = (function figwheel$main$css_reload$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.main.css_reload.add_cache_buster.call(null,url);

return clone;
});

figwheel.main.css_reload.add_link_to_document = (function figwheel$main$css_reload$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
goog.events.listenOnce(klone,"load",((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
);

if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
return parent.appendChild(klone);
} else {
return parent.insertBefore(klone,orig_link.nextSibling);
}
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.main.css_reload.reload_css_deferred_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__25899_SHARP_){
return p1__25899_SHARP_.call(null,cljs.core.PersistentVector.EMPTY);
}))));
}

figwheel.main.css_reload.reload_css_file = (function figwheel$main$css_reload$reload_css_file(file,fin){
var temp__5455__auto__ = figwheel.main.css_reload.get_correct_link.call(null,file);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.main.css_reload.add_link_to_document.call(null,link,figwheel.main.css_reload.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,file);
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,null);
}
});

figwheel.main.css_reload.conj_reload_prom = (function figwheel$main$css_reload$conj_reload_prom(prom,file){
return prom.then((function (files){
return (new goog.Promise((function (succ,fail){
return figwheel.main.css_reload.reload_css_file.call(null,file,(function (f){
return succ.call(null,(cljs.core.truth_(f)?cljs.core.conj.call(null,files,f):files));
}));
})));
}));
});

figwheel.main.css_reload.dispatch_on_css_load = (function figwheel$main$css_reload$dispatch_on_css_load(files){
return document.body.dispatchEvent((function (){var G__25904 = (new Event("figwheel.after-css-load",document.body));
goog.object.add(G__25904,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css-files","css-files",-502009265),files], null));

return G__25904;
})());
});

figwheel.main.css_reload.reload_css_files_STAR_ = (function figwheel$main$css_reload$reload_css_files_STAR_(files,on_cssload){
var seq__25905_25915 = cljs.core.seq.call(null,files);
var chunk__25906_25916 = null;
var count__25907_25917 = (0);
var i__25908_25918 = (0);
while(true){
if((i__25908_25918 < count__25907_25917)){
var file_25919 = cljs.core._nth.call(null,chunk__25906_25916,i__25908_25918);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_25919);


var G__25920 = seq__25905_25915;
var G__25921 = chunk__25906_25916;
var G__25922 = count__25907_25917;
var G__25923 = (i__25908_25918 + (1));
seq__25905_25915 = G__25920;
chunk__25906_25916 = G__25921;
count__25907_25917 = G__25922;
i__25908_25918 = G__25923;
continue;
} else {
var temp__5457__auto___25924 = cljs.core.seq.call(null,seq__25905_25915);
if(temp__5457__auto___25924){
var seq__25905_25925__$1 = temp__5457__auto___25924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25905_25925__$1)){
var c__4351__auto___25926 = cljs.core.chunk_first.call(null,seq__25905_25925__$1);
var G__25927 = cljs.core.chunk_rest.call(null,seq__25905_25925__$1);
var G__25928 = c__4351__auto___25926;
var G__25929 = cljs.core.count.call(null,c__4351__auto___25926);
var G__25930 = (0);
seq__25905_25915 = G__25927;
chunk__25906_25916 = G__25928;
count__25907_25917 = G__25929;
i__25908_25918 = G__25930;
continue;
} else {
var file_25931 = cljs.core.first.call(null,seq__25905_25925__$1);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_25931);


var G__25932 = cljs.core.next.call(null,seq__25905_25925__$1);
var G__25933 = null;
var G__25934 = (0);
var G__25935 = (0);
seq__25905_25915 = G__25932;
chunk__25906_25916 = G__25933;
count__25907_25917 = G__25934;
i__25908_25918 = G__25935;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,(function (prom){
return prom.then((function (loaded_files){
if(cljs.core.truth_(cljs.core.not_empty.call(null,loaded_files))){
goog.log.info(figwheel.main.css_reload.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,loaded_files))].join(''));

figwheel.main.css_reload.dispatch_on_css_load.call(null,loaded_files);
} else {
}

var temp__5457__auto___25936 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,loaded_files),cljs.core.set.call(null,files)));
if(cljs.core.truth_(temp__5457__auto___25936)){
var not_loaded_25937 = temp__5457__auto___25936;
goog.log.warning(figwheel.main.css_reload.logger,["Unable to reload ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded_25937))].join(''));
} else {
}

return cljs.core.PersistentVector.EMPTY;
}));
}));
});

figwheel.main.css_reload.reload_css_files = (function figwheel$main$css_reload$reload_css_files(p__25909,files){
var map__25910 = p__25909;
var map__25910__$1 = ((((!((map__25910 == null)))?(((((map__25910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25910):map__25910);
var on_cssload = cljs.core.get.call(null,map__25910__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(!((goog.global.document == null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,cljs.core.distinct.call(null,files));
if(cljs.core.truth_(temp__5457__auto__)){
var files_SINGLEQUOTE_ = temp__5457__auto__;
return figwheel.main.css_reload.reload_css_files_STAR_.call(null,files_SINGLEQUOTE_,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.reload_css_files_remote = (function figwheel$main$css_reload$reload_css_files_remote(files_array){
figwheel.main.css_reload.reload_css_files.call(null,cljs.core.PersistentArrayMap.EMPTY,files_array);

return true;
});
goog.exportSymbol('figwheel.main.css_reload.reload_css_files_remote', figwheel.main.css_reload.reload_css_files_remote);

//# sourceMappingURL=css_reload.js.map
