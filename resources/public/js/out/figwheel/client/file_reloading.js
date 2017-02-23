// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__37378__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__37378__auto__){
return or__37378__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__37378__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__43089_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__43089_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__43094 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__43095 = null;
var count__43096 = (0);
var i__43097 = (0);
while(true){
if((i__43097 < count__43096)){
var n = cljs.core._nth.call(null,chunk__43095,i__43097);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43098 = seq__43094;
var G__43099 = chunk__43095;
var G__43100 = count__43096;
var G__43101 = (i__43097 + (1));
seq__43094 = G__43098;
chunk__43095 = G__43099;
count__43096 = G__43100;
i__43097 = G__43101;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__43094);
if(temp__6753__auto__){
var seq__43094__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43094__$1)){
var c__38289__auto__ = cljs.core.chunk_first.call(null,seq__43094__$1);
var G__43102 = cljs.core.chunk_rest.call(null,seq__43094__$1);
var G__43103 = c__38289__auto__;
var G__43104 = cljs.core.count.call(null,c__38289__auto__);
var G__43105 = (0);
seq__43094 = G__43102;
chunk__43095 = G__43103;
count__43096 = G__43104;
i__43097 = G__43105;
continue;
} else {
var n = cljs.core.first.call(null,seq__43094__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43106 = cljs.core.next.call(null,seq__43094__$1);
var G__43107 = null;
var G__43108 = (0);
var G__43109 = (0);
seq__43094 = G__43106;
chunk__43095 = G__43107;
count__43096 = G__43108;
i__43097 = G__43109;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__43160_43171 = cljs.core.seq.call(null,deps);
var chunk__43161_43172 = null;
var count__43162_43173 = (0);
var i__43163_43174 = (0);
while(true){
if((i__43163_43174 < count__43162_43173)){
var dep_43175 = cljs.core._nth.call(null,chunk__43161_43172,i__43163_43174);
topo_sort_helper_STAR_.call(null,dep_43175,(depth + (1)),state);

var G__43176 = seq__43160_43171;
var G__43177 = chunk__43161_43172;
var G__43178 = count__43162_43173;
var G__43179 = (i__43163_43174 + (1));
seq__43160_43171 = G__43176;
chunk__43161_43172 = G__43177;
count__43162_43173 = G__43178;
i__43163_43174 = G__43179;
continue;
} else {
var temp__6753__auto___43180 = cljs.core.seq.call(null,seq__43160_43171);
if(temp__6753__auto___43180){
var seq__43160_43181__$1 = temp__6753__auto___43180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43160_43181__$1)){
var c__38289__auto___43182 = cljs.core.chunk_first.call(null,seq__43160_43181__$1);
var G__43183 = cljs.core.chunk_rest.call(null,seq__43160_43181__$1);
var G__43184 = c__38289__auto___43182;
var G__43185 = cljs.core.count.call(null,c__38289__auto___43182);
var G__43186 = (0);
seq__43160_43171 = G__43183;
chunk__43161_43172 = G__43184;
count__43162_43173 = G__43185;
i__43163_43174 = G__43186;
continue;
} else {
var dep_43187 = cljs.core.first.call(null,seq__43160_43181__$1);
topo_sort_helper_STAR_.call(null,dep_43187,(depth + (1)),state);

var G__43188 = cljs.core.next.call(null,seq__43160_43181__$1);
var G__43189 = null;
var G__43190 = (0);
var G__43191 = (0);
seq__43160_43171 = G__43188;
chunk__43161_43172 = G__43189;
count__43162_43173 = G__43190;
i__43163_43174 = G__43191;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__43164){
var vec__43168 = p__43164;
var seq__43169 = cljs.core.seq.call(null,vec__43168);
var first__43170 = cljs.core.first.call(null,seq__43169);
var seq__43169__$1 = cljs.core.next.call(null,seq__43169);
var x = first__43170;
var xs = seq__43169__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__43168,seq__43169,first__43170,seq__43169__$1,x,xs,get_deps__$1){
return (function (p1__43110_SHARP_){
return clojure.set.difference.call(null,p1__43110_SHARP_,x);
});})(vec__43168,seq__43169,first__43170,seq__43169__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__43204 = cljs.core.seq.call(null,provides);
var chunk__43205 = null;
var count__43206 = (0);
var i__43207 = (0);
while(true){
if((i__43207 < count__43206)){
var prov = cljs.core._nth.call(null,chunk__43205,i__43207);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43208_43216 = cljs.core.seq.call(null,requires);
var chunk__43209_43217 = null;
var count__43210_43218 = (0);
var i__43211_43219 = (0);
while(true){
if((i__43211_43219 < count__43210_43218)){
var req_43220 = cljs.core._nth.call(null,chunk__43209_43217,i__43211_43219);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43220,prov);

var G__43221 = seq__43208_43216;
var G__43222 = chunk__43209_43217;
var G__43223 = count__43210_43218;
var G__43224 = (i__43211_43219 + (1));
seq__43208_43216 = G__43221;
chunk__43209_43217 = G__43222;
count__43210_43218 = G__43223;
i__43211_43219 = G__43224;
continue;
} else {
var temp__6753__auto___43225 = cljs.core.seq.call(null,seq__43208_43216);
if(temp__6753__auto___43225){
var seq__43208_43226__$1 = temp__6753__auto___43225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43208_43226__$1)){
var c__38289__auto___43227 = cljs.core.chunk_first.call(null,seq__43208_43226__$1);
var G__43228 = cljs.core.chunk_rest.call(null,seq__43208_43226__$1);
var G__43229 = c__38289__auto___43227;
var G__43230 = cljs.core.count.call(null,c__38289__auto___43227);
var G__43231 = (0);
seq__43208_43216 = G__43228;
chunk__43209_43217 = G__43229;
count__43210_43218 = G__43230;
i__43211_43219 = G__43231;
continue;
} else {
var req_43232 = cljs.core.first.call(null,seq__43208_43226__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43232,prov);

var G__43233 = cljs.core.next.call(null,seq__43208_43226__$1);
var G__43234 = null;
var G__43235 = (0);
var G__43236 = (0);
seq__43208_43216 = G__43233;
chunk__43209_43217 = G__43234;
count__43210_43218 = G__43235;
i__43211_43219 = G__43236;
continue;
}
} else {
}
}
break;
}

var G__43237 = seq__43204;
var G__43238 = chunk__43205;
var G__43239 = count__43206;
var G__43240 = (i__43207 + (1));
seq__43204 = G__43237;
chunk__43205 = G__43238;
count__43206 = G__43239;
i__43207 = G__43240;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__43204);
if(temp__6753__auto__){
var seq__43204__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43204__$1)){
var c__38289__auto__ = cljs.core.chunk_first.call(null,seq__43204__$1);
var G__43241 = cljs.core.chunk_rest.call(null,seq__43204__$1);
var G__43242 = c__38289__auto__;
var G__43243 = cljs.core.count.call(null,c__38289__auto__);
var G__43244 = (0);
seq__43204 = G__43241;
chunk__43205 = G__43242;
count__43206 = G__43243;
i__43207 = G__43244;
continue;
} else {
var prov = cljs.core.first.call(null,seq__43204__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43212_43245 = cljs.core.seq.call(null,requires);
var chunk__43213_43246 = null;
var count__43214_43247 = (0);
var i__43215_43248 = (0);
while(true){
if((i__43215_43248 < count__43214_43247)){
var req_43249 = cljs.core._nth.call(null,chunk__43213_43246,i__43215_43248);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43249,prov);

var G__43250 = seq__43212_43245;
var G__43251 = chunk__43213_43246;
var G__43252 = count__43214_43247;
var G__43253 = (i__43215_43248 + (1));
seq__43212_43245 = G__43250;
chunk__43213_43246 = G__43251;
count__43214_43247 = G__43252;
i__43215_43248 = G__43253;
continue;
} else {
var temp__6753__auto___43254__$1 = cljs.core.seq.call(null,seq__43212_43245);
if(temp__6753__auto___43254__$1){
var seq__43212_43255__$1 = temp__6753__auto___43254__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43212_43255__$1)){
var c__38289__auto___43256 = cljs.core.chunk_first.call(null,seq__43212_43255__$1);
var G__43257 = cljs.core.chunk_rest.call(null,seq__43212_43255__$1);
var G__43258 = c__38289__auto___43256;
var G__43259 = cljs.core.count.call(null,c__38289__auto___43256);
var G__43260 = (0);
seq__43212_43245 = G__43257;
chunk__43213_43246 = G__43258;
count__43214_43247 = G__43259;
i__43215_43248 = G__43260;
continue;
} else {
var req_43261 = cljs.core.first.call(null,seq__43212_43255__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43261,prov);

var G__43262 = cljs.core.next.call(null,seq__43212_43255__$1);
var G__43263 = null;
var G__43264 = (0);
var G__43265 = (0);
seq__43212_43245 = G__43262;
chunk__43213_43246 = G__43263;
count__43214_43247 = G__43264;
i__43215_43248 = G__43265;
continue;
}
} else {
}
}
break;
}

var G__43266 = cljs.core.next.call(null,seq__43204__$1);
var G__43267 = null;
var G__43268 = (0);
var G__43269 = (0);
seq__43204 = G__43266;
chunk__43205 = G__43267;
count__43206 = G__43268;
i__43207 = G__43269;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__43274_43278 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__43275_43279 = null;
var count__43276_43280 = (0);
var i__43277_43281 = (0);
while(true){
if((i__43277_43281 < count__43276_43280)){
var ns_43282 = cljs.core._nth.call(null,chunk__43275_43279,i__43277_43281);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43282);

var G__43283 = seq__43274_43278;
var G__43284 = chunk__43275_43279;
var G__43285 = count__43276_43280;
var G__43286 = (i__43277_43281 + (1));
seq__43274_43278 = G__43283;
chunk__43275_43279 = G__43284;
count__43276_43280 = G__43285;
i__43277_43281 = G__43286;
continue;
} else {
var temp__6753__auto___43287 = cljs.core.seq.call(null,seq__43274_43278);
if(temp__6753__auto___43287){
var seq__43274_43288__$1 = temp__6753__auto___43287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43274_43288__$1)){
var c__38289__auto___43289 = cljs.core.chunk_first.call(null,seq__43274_43288__$1);
var G__43290 = cljs.core.chunk_rest.call(null,seq__43274_43288__$1);
var G__43291 = c__38289__auto___43289;
var G__43292 = cljs.core.count.call(null,c__38289__auto___43289);
var G__43293 = (0);
seq__43274_43278 = G__43290;
chunk__43275_43279 = G__43291;
count__43276_43280 = G__43292;
i__43277_43281 = G__43293;
continue;
} else {
var ns_43294 = cljs.core.first.call(null,seq__43274_43288__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43294);

var G__43295 = cljs.core.next.call(null,seq__43274_43288__$1);
var G__43296 = null;
var G__43297 = (0);
var G__43298 = (0);
seq__43274_43278 = G__43295;
chunk__43275_43279 = G__43296;
count__43276_43280 = G__43297;
i__43277_43281 = G__43298;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__37378__auto__ = goog.require__;
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__43299__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__43299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43300__i = 0, G__43300__a = new Array(arguments.length -  0);
while (G__43300__i < G__43300__a.length) {G__43300__a[G__43300__i] = arguments[G__43300__i + 0]; ++G__43300__i;}
  args = new cljs.core.IndexedSeq(G__43300__a,0);
} 
return G__43299__delegate.call(this,args);};
G__43299.cljs$lang$maxFixedArity = 0;
G__43299.cljs$lang$applyTo = (function (arglist__43301){
var args = cljs.core.seq(arglist__43301);
return G__43299__delegate(args);
});
G__43299.cljs$core$IFn$_invoke$arity$variadic = G__43299__delegate;
return G__43299;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__43303 = cljs.core._EQ_;
var expr__43304 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__43303.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__43304))){
var path_parts = ((function (pred__43303,expr__43304){
return (function (p1__43302_SHARP_){
return clojure.string.split.call(null,p1__43302_SHARP_,/[\/\\]/);
});})(pred__43303,expr__43304))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__43303,expr__43304){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e43306){if((e43306 instanceof Error)){
var e = e43306;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43306;

}
}})());
});
;})(path_parts,sep,root,pred__43303,expr__43304))
} else {
if(cljs.core.truth_(pred__43303.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__43304))){
return ((function (pred__43303,expr__43304){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__43303,expr__43304){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__43303,expr__43304))
);

return deferred.addErrback(((function (deferred,pred__43303,expr__43304){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__43303,expr__43304))
);
});
;})(pred__43303,expr__43304))
} else {
return ((function (pred__43303,expr__43304){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__43303,expr__43304))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__43307,callback){
var map__43310 = p__43307;
var map__43310__$1 = ((((!((map__43310 == null)))?((((map__43310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43310):map__43310);
var file_msg = map__43310__$1;
var request_url = cljs.core.get.call(null,map__43310__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__43310,map__43310__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__43310,map__43310__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__){
return (function (state_43334){
var state_val_43335 = (state_43334[(1)]);
if((state_val_43335 === (7))){
var inst_43330 = (state_43334[(2)]);
var state_43334__$1 = state_43334;
var statearr_43336_43356 = state_43334__$1;
(statearr_43336_43356[(2)] = inst_43330);

(statearr_43336_43356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43335 === (1))){
var state_43334__$1 = state_43334;
var statearr_43337_43357 = state_43334__$1;
(statearr_43337_43357[(2)] = null);

(statearr_43337_43357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43335 === (4))){
var inst_43314 = (state_43334[(7)]);
var inst_43314__$1 = (state_43334[(2)]);
var state_43334__$1 = (function (){var statearr_43338 = state_43334;
(statearr_43338[(7)] = inst_43314__$1);

return statearr_43338;
})();
if(cljs.core.truth_(inst_43314__$1)){
var statearr_43339_43358 = state_43334__$1;
(statearr_43339_43358[(1)] = (5));

} else {
var statearr_43340_43359 = state_43334__$1;
(statearr_43340_43359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43335 === (6))){
var state_43334__$1 = state_43334;
var statearr_43341_43360 = state_43334__$1;
(statearr_43341_43360[(2)] = null);

(statearr_43341_43360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43335 === (3))){
var inst_43332 = (state_43334[(2)]);
var state_43334__$1 = state_43334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43334__$1,inst_43332);
} else {
if((state_val_43335 === (2))){
var state_43334__$1 = state_43334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43334__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_43335 === (11))){
var inst_43326 = (state_43334[(2)]);
var state_43334__$1 = (function (){var statearr_43342 = state_43334;
(statearr_43342[(8)] = inst_43326);

return statearr_43342;
})();
var statearr_43343_43361 = state_43334__$1;
(statearr_43343_43361[(2)] = null);

(statearr_43343_43361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43335 === (9))){
var inst_43318 = (state_43334[(9)]);
var inst_43320 = (state_43334[(10)]);
var inst_43322 = inst_43320.call(null,inst_43318);
var state_43334__$1 = state_43334;
var statearr_43344_43362 = state_43334__$1;
(statearr_43344_43362[(2)] = inst_43322);

(statearr_43344_43362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43335 === (5))){
var inst_43314 = (state_43334[(7)]);
var inst_43316 = figwheel.client.file_reloading.blocking_load.call(null,inst_43314);
var state_43334__$1 = state_43334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43334__$1,(8),inst_43316);
} else {
if((state_val_43335 === (10))){
var inst_43318 = (state_43334[(9)]);
var inst_43324 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_43318);
var state_43334__$1 = state_43334;
var statearr_43345_43363 = state_43334__$1;
(statearr_43345_43363[(2)] = inst_43324);

(statearr_43345_43363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43335 === (8))){
var inst_43314 = (state_43334[(7)]);
var inst_43320 = (state_43334[(10)]);
var inst_43318 = (state_43334[(2)]);
var inst_43319 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_43320__$1 = cljs.core.get.call(null,inst_43319,inst_43314);
var state_43334__$1 = (function (){var statearr_43346 = state_43334;
(statearr_43346[(9)] = inst_43318);

(statearr_43346[(10)] = inst_43320__$1);

return statearr_43346;
})();
if(cljs.core.truth_(inst_43320__$1)){
var statearr_43347_43364 = state_43334__$1;
(statearr_43347_43364[(1)] = (9));

} else {
var statearr_43348_43365 = state_43334__$1;
(statearr_43348_43365[(1)] = (10));

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
});})(c__40064__auto__))
;
return ((function (switch__39950__auto__,c__40064__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39951__auto__ = null;
var figwheel$client$file_reloading$state_machine__39951__auto____0 = (function (){
var statearr_43352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43352[(0)] = figwheel$client$file_reloading$state_machine__39951__auto__);

(statearr_43352[(1)] = (1));

return statearr_43352;
});
var figwheel$client$file_reloading$state_machine__39951__auto____1 = (function (state_43334){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_43334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e43353){if((e43353 instanceof Object)){
var ex__39954__auto__ = e43353;
var statearr_43354_43366 = state_43334;
(statearr_43354_43366[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43367 = state_43334;
state_43334 = G__43367;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39951__auto__ = function(state_43334){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39951__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39951__auto____1.call(this,state_43334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39951__auto____0;
figwheel$client$file_reloading$state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39951__auto____1;
return figwheel$client$file_reloading$state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__))
})();
var state__40066__auto__ = (function (){var statearr_43355 = f__40065__auto__.call(null);
(statearr_43355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_43355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__))
);

return c__40064__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__43368,callback){
var map__43371 = p__43368;
var map__43371__$1 = ((((!((map__43371 == null)))?((((map__43371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43371):map__43371);
var file_msg = map__43371__$1;
var namespace = cljs.core.get.call(null,map__43371__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__43371,map__43371__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__43371,map__43371__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__43373){
var map__43376 = p__43373;
var map__43376__$1 = ((((!((map__43376 == null)))?((((map__43376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43376):map__43376);
var file_msg = map__43376__$1;
var namespace = cljs.core.get.call(null,map__43376__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__37366__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__37366__auto__){
var or__37378__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
var or__37378__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37378__auto____$1)){
return or__37378__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__37366__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__43378,callback){
var map__43381 = p__43378;
var map__43381__$1 = ((((!((map__43381 == null)))?((((map__43381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43381):map__43381);
var file_msg = map__43381__$1;
var request_url = cljs.core.get.call(null,map__43381__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__43381__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__40064__auto___43485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto___43485,out){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto___43485,out){
return (function (state_43467){
var state_val_43468 = (state_43467[(1)]);
if((state_val_43468 === (1))){
var inst_43441 = cljs.core.seq.call(null,files);
var inst_43442 = cljs.core.first.call(null,inst_43441);
var inst_43443 = cljs.core.next.call(null,inst_43441);
var inst_43444 = files;
var state_43467__$1 = (function (){var statearr_43469 = state_43467;
(statearr_43469[(7)] = inst_43444);

(statearr_43469[(8)] = inst_43442);

(statearr_43469[(9)] = inst_43443);

return statearr_43469;
})();
var statearr_43470_43486 = state_43467__$1;
(statearr_43470_43486[(2)] = null);

(statearr_43470_43486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43468 === (2))){
var inst_43444 = (state_43467[(7)]);
var inst_43450 = (state_43467[(10)]);
var inst_43449 = cljs.core.seq.call(null,inst_43444);
var inst_43450__$1 = cljs.core.first.call(null,inst_43449);
var inst_43451 = cljs.core.next.call(null,inst_43449);
var inst_43452 = (inst_43450__$1 == null);
var inst_43453 = cljs.core.not.call(null,inst_43452);
var state_43467__$1 = (function (){var statearr_43471 = state_43467;
(statearr_43471[(11)] = inst_43451);

(statearr_43471[(10)] = inst_43450__$1);

return statearr_43471;
})();
if(inst_43453){
var statearr_43472_43487 = state_43467__$1;
(statearr_43472_43487[(1)] = (4));

} else {
var statearr_43473_43488 = state_43467__$1;
(statearr_43473_43488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43468 === (3))){
var inst_43465 = (state_43467[(2)]);
var state_43467__$1 = state_43467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43467__$1,inst_43465);
} else {
if((state_val_43468 === (4))){
var inst_43450 = (state_43467[(10)]);
var inst_43455 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43450);
var state_43467__$1 = state_43467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43467__$1,(7),inst_43455);
} else {
if((state_val_43468 === (5))){
var inst_43461 = cljs.core.async.close_BANG_.call(null,out);
var state_43467__$1 = state_43467;
var statearr_43474_43489 = state_43467__$1;
(statearr_43474_43489[(2)] = inst_43461);

(statearr_43474_43489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43468 === (6))){
var inst_43463 = (state_43467[(2)]);
var state_43467__$1 = state_43467;
var statearr_43475_43490 = state_43467__$1;
(statearr_43475_43490[(2)] = inst_43463);

(statearr_43475_43490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43468 === (7))){
var inst_43451 = (state_43467[(11)]);
var inst_43457 = (state_43467[(2)]);
var inst_43458 = cljs.core.async.put_BANG_.call(null,out,inst_43457);
var inst_43444 = inst_43451;
var state_43467__$1 = (function (){var statearr_43476 = state_43467;
(statearr_43476[(12)] = inst_43458);

(statearr_43476[(7)] = inst_43444);

return statearr_43476;
})();
var statearr_43477_43491 = state_43467__$1;
(statearr_43477_43491[(2)] = null);

(statearr_43477_43491[(1)] = (2));


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
});})(c__40064__auto___43485,out))
;
return ((function (switch__39950__auto__,c__40064__auto___43485,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto____0 = (function (){
var statearr_43481 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43481[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto__);

(statearr_43481[(1)] = (1));

return statearr_43481;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto____1 = (function (state_43467){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_43467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e43482){if((e43482 instanceof Object)){
var ex__39954__auto__ = e43482;
var statearr_43483_43492 = state_43467;
(statearr_43483_43492[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43493 = state_43467;
state_43467 = G__43493;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto__ = function(state_43467){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto____1.call(this,state_43467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto___43485,out))
})();
var state__40066__auto__ = (function (){var statearr_43484 = f__40065__auto__.call(null);
(statearr_43484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto___43485);

return statearr_43484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto___43485,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__43494,opts){
var map__43498 = p__43494;
var map__43498__$1 = ((((!((map__43498 == null)))?((((map__43498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43498):map__43498);
var eval_body = cljs.core.get.call(null,map__43498__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__43498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__37366__auto__ = eval_body;
if(cljs.core.truth_(and__37366__auto__)){
return typeof eval_body === 'string';
} else {
return and__37366__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e43500){var e = e43500;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__43501_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43501_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__43510){
var vec__43511 = p__43510;
var k = cljs.core.nth.call(null,vec__43511,(0),null);
var v = cljs.core.nth.call(null,vec__43511,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__43514){
var vec__43515 = p__43514;
var k = cljs.core.nth.call(null,vec__43515,(0),null);
var v = cljs.core.nth.call(null,vec__43515,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43521,p__43522){
var map__43770 = p__43521;
var map__43770__$1 = ((((!((map__43770 == null)))?((((map__43770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43770):map__43770);
var opts = map__43770__$1;
var before_jsload = cljs.core.get.call(null,map__43770__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43770__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43770__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43771 = p__43522;
var map__43771__$1 = ((((!((map__43771 == null)))?((((map__43771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43771):map__43771);
var msg = map__43771__$1;
var files = cljs.core.get.call(null,map__43771__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43771__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43771__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40065__auto__ = (function (){var switch__39950__auto__ = ((function (c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43925){
var state_val_43926 = (state_43925[(1)]);
if((state_val_43926 === (7))){
var inst_43787 = (state_43925[(7)]);
var inst_43785 = (state_43925[(8)]);
var inst_43788 = (state_43925[(9)]);
var inst_43786 = (state_43925[(10)]);
var inst_43793 = cljs.core._nth.call(null,inst_43786,inst_43788);
var inst_43794 = figwheel.client.file_reloading.eval_body.call(null,inst_43793,opts);
var inst_43795 = (inst_43788 + (1));
var tmp43927 = inst_43787;
var tmp43928 = inst_43785;
var tmp43929 = inst_43786;
var inst_43785__$1 = tmp43928;
var inst_43786__$1 = tmp43929;
var inst_43787__$1 = tmp43927;
var inst_43788__$1 = inst_43795;
var state_43925__$1 = (function (){var statearr_43930 = state_43925;
(statearr_43930[(7)] = inst_43787__$1);

(statearr_43930[(11)] = inst_43794);

(statearr_43930[(8)] = inst_43785__$1);

(statearr_43930[(9)] = inst_43788__$1);

(statearr_43930[(10)] = inst_43786__$1);

return statearr_43930;
})();
var statearr_43931_44017 = state_43925__$1;
(statearr_43931_44017[(2)] = null);

(statearr_43931_44017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (20))){
var inst_43828 = (state_43925[(12)]);
var inst_43836 = figwheel.client.file_reloading.sort_files.call(null,inst_43828);
var state_43925__$1 = state_43925;
var statearr_43932_44018 = state_43925__$1;
(statearr_43932_44018[(2)] = inst_43836);

(statearr_43932_44018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (27))){
var state_43925__$1 = state_43925;
var statearr_43933_44019 = state_43925__$1;
(statearr_43933_44019[(2)] = null);

(statearr_43933_44019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (1))){
var inst_43777 = (state_43925[(13)]);
var inst_43774 = before_jsload.call(null,files);
var inst_43775 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43776 = (function (){return ((function (inst_43777,inst_43774,inst_43775,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43518_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43518_SHARP_);
});
;})(inst_43777,inst_43774,inst_43775,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43777__$1 = cljs.core.filter.call(null,inst_43776,files);
var inst_43778 = cljs.core.not_empty.call(null,inst_43777__$1);
var state_43925__$1 = (function (){var statearr_43934 = state_43925;
(statearr_43934[(13)] = inst_43777__$1);

(statearr_43934[(14)] = inst_43774);

(statearr_43934[(15)] = inst_43775);

return statearr_43934;
})();
if(cljs.core.truth_(inst_43778)){
var statearr_43935_44020 = state_43925__$1;
(statearr_43935_44020[(1)] = (2));

} else {
var statearr_43936_44021 = state_43925__$1;
(statearr_43936_44021[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (24))){
var state_43925__$1 = state_43925;
var statearr_43937_44022 = state_43925__$1;
(statearr_43937_44022[(2)] = null);

(statearr_43937_44022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (39))){
var inst_43878 = (state_43925[(16)]);
var state_43925__$1 = state_43925;
var statearr_43938_44023 = state_43925__$1;
(statearr_43938_44023[(2)] = inst_43878);

(statearr_43938_44023[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (46))){
var inst_43920 = (state_43925[(2)]);
var state_43925__$1 = state_43925;
var statearr_43939_44024 = state_43925__$1;
(statearr_43939_44024[(2)] = inst_43920);

(statearr_43939_44024[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (4))){
var inst_43822 = (state_43925[(2)]);
var inst_43823 = cljs.core.List.EMPTY;
var inst_43824 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43823);
var inst_43825 = (function (){return ((function (inst_43822,inst_43823,inst_43824,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43519_SHARP_){
var and__37366__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43519_SHARP_);
if(cljs.core.truth_(and__37366__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43519_SHARP_));
} else {
return and__37366__auto__;
}
});
;})(inst_43822,inst_43823,inst_43824,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43826 = cljs.core.filter.call(null,inst_43825,files);
var inst_43827 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43828 = cljs.core.concat.call(null,inst_43826,inst_43827);
var state_43925__$1 = (function (){var statearr_43940 = state_43925;
(statearr_43940[(12)] = inst_43828);

(statearr_43940[(17)] = inst_43824);

(statearr_43940[(18)] = inst_43822);

return statearr_43940;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43941_44025 = state_43925__$1;
(statearr_43941_44025[(1)] = (16));

} else {
var statearr_43942_44026 = state_43925__$1;
(statearr_43942_44026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (15))){
var inst_43812 = (state_43925[(2)]);
var state_43925__$1 = state_43925;
var statearr_43943_44027 = state_43925__$1;
(statearr_43943_44027[(2)] = inst_43812);

(statearr_43943_44027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (21))){
var inst_43838 = (state_43925[(19)]);
var inst_43838__$1 = (state_43925[(2)]);
var inst_43839 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43838__$1);
var state_43925__$1 = (function (){var statearr_43944 = state_43925;
(statearr_43944[(19)] = inst_43838__$1);

return statearr_43944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43925__$1,(22),inst_43839);
} else {
if((state_val_43926 === (31))){
var inst_43923 = (state_43925[(2)]);
var state_43925__$1 = state_43925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43925__$1,inst_43923);
} else {
if((state_val_43926 === (32))){
var inst_43878 = (state_43925[(16)]);
var inst_43883 = inst_43878.cljs$lang$protocol_mask$partition0$;
var inst_43884 = (inst_43883 & (64));
var inst_43885 = inst_43878.cljs$core$ISeq$;
var inst_43886 = (cljs.core.PROTOCOL_SENTINEL === inst_43885);
var inst_43887 = (inst_43884) || (inst_43886);
var state_43925__$1 = state_43925;
if(cljs.core.truth_(inst_43887)){
var statearr_43945_44028 = state_43925__$1;
(statearr_43945_44028[(1)] = (35));

} else {
var statearr_43946_44029 = state_43925__$1;
(statearr_43946_44029[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (40))){
var inst_43900 = (state_43925[(20)]);
var inst_43899 = (state_43925[(2)]);
var inst_43900__$1 = cljs.core.get.call(null,inst_43899,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43901 = cljs.core.get.call(null,inst_43899,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43902 = cljs.core.not_empty.call(null,inst_43900__$1);
var state_43925__$1 = (function (){var statearr_43947 = state_43925;
(statearr_43947[(21)] = inst_43901);

(statearr_43947[(20)] = inst_43900__$1);

return statearr_43947;
})();
if(cljs.core.truth_(inst_43902)){
var statearr_43948_44030 = state_43925__$1;
(statearr_43948_44030[(1)] = (41));

} else {
var statearr_43949_44031 = state_43925__$1;
(statearr_43949_44031[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (33))){
var state_43925__$1 = state_43925;
var statearr_43950_44032 = state_43925__$1;
(statearr_43950_44032[(2)] = false);

(statearr_43950_44032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (13))){
var inst_43798 = (state_43925[(22)]);
var inst_43802 = cljs.core.chunk_first.call(null,inst_43798);
var inst_43803 = cljs.core.chunk_rest.call(null,inst_43798);
var inst_43804 = cljs.core.count.call(null,inst_43802);
var inst_43785 = inst_43803;
var inst_43786 = inst_43802;
var inst_43787 = inst_43804;
var inst_43788 = (0);
var state_43925__$1 = (function (){var statearr_43951 = state_43925;
(statearr_43951[(7)] = inst_43787);

(statearr_43951[(8)] = inst_43785);

(statearr_43951[(9)] = inst_43788);

(statearr_43951[(10)] = inst_43786);

return statearr_43951;
})();
var statearr_43952_44033 = state_43925__$1;
(statearr_43952_44033[(2)] = null);

(statearr_43952_44033[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (22))){
var inst_43838 = (state_43925[(19)]);
var inst_43842 = (state_43925[(23)]);
var inst_43841 = (state_43925[(24)]);
var inst_43846 = (state_43925[(25)]);
var inst_43841__$1 = (state_43925[(2)]);
var inst_43842__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43841__$1);
var inst_43843 = (function (){var all_files = inst_43838;
var res_SINGLEQUOTE_ = inst_43841__$1;
var res = inst_43842__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43838,inst_43842,inst_43841,inst_43846,inst_43841__$1,inst_43842__$1,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43520_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43520_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43838,inst_43842,inst_43841,inst_43846,inst_43841__$1,inst_43842__$1,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43844 = cljs.core.filter.call(null,inst_43843,inst_43841__$1);
var inst_43845 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43846__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43845);
var inst_43847 = cljs.core.not_empty.call(null,inst_43846__$1);
var state_43925__$1 = (function (){var statearr_43953 = state_43925;
(statearr_43953[(23)] = inst_43842__$1);

(statearr_43953[(26)] = inst_43844);

(statearr_43953[(24)] = inst_43841__$1);

(statearr_43953[(25)] = inst_43846__$1);

return statearr_43953;
})();
if(cljs.core.truth_(inst_43847)){
var statearr_43954_44034 = state_43925__$1;
(statearr_43954_44034[(1)] = (23));

} else {
var statearr_43955_44035 = state_43925__$1;
(statearr_43955_44035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (36))){
var state_43925__$1 = state_43925;
var statearr_43956_44036 = state_43925__$1;
(statearr_43956_44036[(2)] = false);

(statearr_43956_44036[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (41))){
var inst_43900 = (state_43925[(20)]);
var inst_43904 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43905 = cljs.core.map.call(null,inst_43904,inst_43900);
var inst_43906 = cljs.core.pr_str.call(null,inst_43905);
var inst_43907 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43906)].join('');
var inst_43908 = figwheel.client.utils.log.call(null,inst_43907);
var state_43925__$1 = state_43925;
var statearr_43957_44037 = state_43925__$1;
(statearr_43957_44037[(2)] = inst_43908);

(statearr_43957_44037[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (43))){
var inst_43901 = (state_43925[(21)]);
var inst_43911 = (state_43925[(2)]);
var inst_43912 = cljs.core.not_empty.call(null,inst_43901);
var state_43925__$1 = (function (){var statearr_43958 = state_43925;
(statearr_43958[(27)] = inst_43911);

return statearr_43958;
})();
if(cljs.core.truth_(inst_43912)){
var statearr_43959_44038 = state_43925__$1;
(statearr_43959_44038[(1)] = (44));

} else {
var statearr_43960_44039 = state_43925__$1;
(statearr_43960_44039[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (29))){
var inst_43878 = (state_43925[(16)]);
var inst_43838 = (state_43925[(19)]);
var inst_43842 = (state_43925[(23)]);
var inst_43844 = (state_43925[(26)]);
var inst_43841 = (state_43925[(24)]);
var inst_43846 = (state_43925[(25)]);
var inst_43874 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43877 = (function (){var all_files = inst_43838;
var res_SINGLEQUOTE_ = inst_43841;
var res = inst_43842;
var files_not_loaded = inst_43844;
var dependencies_that_loaded = inst_43846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43878,inst_43838,inst_43842,inst_43844,inst_43841,inst_43846,inst_43874,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43876){
var map__43961 = p__43876;
var map__43961__$1 = ((((!((map__43961 == null)))?((((map__43961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43961):map__43961);
var namespace = cljs.core.get.call(null,map__43961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43878,inst_43838,inst_43842,inst_43844,inst_43841,inst_43846,inst_43874,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43878__$1 = cljs.core.group_by.call(null,inst_43877,inst_43844);
var inst_43880 = (inst_43878__$1 == null);
var inst_43881 = cljs.core.not.call(null,inst_43880);
var state_43925__$1 = (function (){var statearr_43963 = state_43925;
(statearr_43963[(16)] = inst_43878__$1);

(statearr_43963[(28)] = inst_43874);

return statearr_43963;
})();
if(inst_43881){
var statearr_43964_44040 = state_43925__$1;
(statearr_43964_44040[(1)] = (32));

} else {
var statearr_43965_44041 = state_43925__$1;
(statearr_43965_44041[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (44))){
var inst_43901 = (state_43925[(21)]);
var inst_43914 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43901);
var inst_43915 = cljs.core.pr_str.call(null,inst_43914);
var inst_43916 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43915)].join('');
var inst_43917 = figwheel.client.utils.log.call(null,inst_43916);
var state_43925__$1 = state_43925;
var statearr_43966_44042 = state_43925__$1;
(statearr_43966_44042[(2)] = inst_43917);

(statearr_43966_44042[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (6))){
var inst_43819 = (state_43925[(2)]);
var state_43925__$1 = state_43925;
var statearr_43967_44043 = state_43925__$1;
(statearr_43967_44043[(2)] = inst_43819);

(statearr_43967_44043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (28))){
var inst_43844 = (state_43925[(26)]);
var inst_43871 = (state_43925[(2)]);
var inst_43872 = cljs.core.not_empty.call(null,inst_43844);
var state_43925__$1 = (function (){var statearr_43968 = state_43925;
(statearr_43968[(29)] = inst_43871);

return statearr_43968;
})();
if(cljs.core.truth_(inst_43872)){
var statearr_43969_44044 = state_43925__$1;
(statearr_43969_44044[(1)] = (29));

} else {
var statearr_43970_44045 = state_43925__$1;
(statearr_43970_44045[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (25))){
var inst_43842 = (state_43925[(23)]);
var inst_43858 = (state_43925[(2)]);
var inst_43859 = cljs.core.not_empty.call(null,inst_43842);
var state_43925__$1 = (function (){var statearr_43971 = state_43925;
(statearr_43971[(30)] = inst_43858);

return statearr_43971;
})();
if(cljs.core.truth_(inst_43859)){
var statearr_43972_44046 = state_43925__$1;
(statearr_43972_44046[(1)] = (26));

} else {
var statearr_43973_44047 = state_43925__$1;
(statearr_43973_44047[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (34))){
var inst_43894 = (state_43925[(2)]);
var state_43925__$1 = state_43925;
if(cljs.core.truth_(inst_43894)){
var statearr_43974_44048 = state_43925__$1;
(statearr_43974_44048[(1)] = (38));

} else {
var statearr_43975_44049 = state_43925__$1;
(statearr_43975_44049[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (17))){
var state_43925__$1 = state_43925;
var statearr_43976_44050 = state_43925__$1;
(statearr_43976_44050[(2)] = recompile_dependents);

(statearr_43976_44050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (3))){
var state_43925__$1 = state_43925;
var statearr_43977_44051 = state_43925__$1;
(statearr_43977_44051[(2)] = null);

(statearr_43977_44051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (12))){
var inst_43815 = (state_43925[(2)]);
var state_43925__$1 = state_43925;
var statearr_43978_44052 = state_43925__$1;
(statearr_43978_44052[(2)] = inst_43815);

(statearr_43978_44052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (2))){
var inst_43777 = (state_43925[(13)]);
var inst_43784 = cljs.core.seq.call(null,inst_43777);
var inst_43785 = inst_43784;
var inst_43786 = null;
var inst_43787 = (0);
var inst_43788 = (0);
var state_43925__$1 = (function (){var statearr_43979 = state_43925;
(statearr_43979[(7)] = inst_43787);

(statearr_43979[(8)] = inst_43785);

(statearr_43979[(9)] = inst_43788);

(statearr_43979[(10)] = inst_43786);

return statearr_43979;
})();
var statearr_43980_44053 = state_43925__$1;
(statearr_43980_44053[(2)] = null);

(statearr_43980_44053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (23))){
var inst_43838 = (state_43925[(19)]);
var inst_43842 = (state_43925[(23)]);
var inst_43844 = (state_43925[(26)]);
var inst_43841 = (state_43925[(24)]);
var inst_43846 = (state_43925[(25)]);
var inst_43849 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43851 = (function (){var all_files = inst_43838;
var res_SINGLEQUOTE_ = inst_43841;
var res = inst_43842;
var files_not_loaded = inst_43844;
var dependencies_that_loaded = inst_43846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43838,inst_43842,inst_43844,inst_43841,inst_43846,inst_43849,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43850){
var map__43981 = p__43850;
var map__43981__$1 = ((((!((map__43981 == null)))?((((map__43981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43981):map__43981);
var request_url = cljs.core.get.call(null,map__43981__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43838,inst_43842,inst_43844,inst_43841,inst_43846,inst_43849,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43852 = cljs.core.reverse.call(null,inst_43846);
var inst_43853 = cljs.core.map.call(null,inst_43851,inst_43852);
var inst_43854 = cljs.core.pr_str.call(null,inst_43853);
var inst_43855 = figwheel.client.utils.log.call(null,inst_43854);
var state_43925__$1 = (function (){var statearr_43983 = state_43925;
(statearr_43983[(31)] = inst_43849);

return statearr_43983;
})();
var statearr_43984_44054 = state_43925__$1;
(statearr_43984_44054[(2)] = inst_43855);

(statearr_43984_44054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (35))){
var state_43925__$1 = state_43925;
var statearr_43985_44055 = state_43925__$1;
(statearr_43985_44055[(2)] = true);

(statearr_43985_44055[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (19))){
var inst_43828 = (state_43925[(12)]);
var inst_43834 = figwheel.client.file_reloading.expand_files.call(null,inst_43828);
var state_43925__$1 = state_43925;
var statearr_43986_44056 = state_43925__$1;
(statearr_43986_44056[(2)] = inst_43834);

(statearr_43986_44056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (11))){
var state_43925__$1 = state_43925;
var statearr_43987_44057 = state_43925__$1;
(statearr_43987_44057[(2)] = null);

(statearr_43987_44057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (9))){
var inst_43817 = (state_43925[(2)]);
var state_43925__$1 = state_43925;
var statearr_43988_44058 = state_43925__$1;
(statearr_43988_44058[(2)] = inst_43817);

(statearr_43988_44058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (5))){
var inst_43787 = (state_43925[(7)]);
var inst_43788 = (state_43925[(9)]);
var inst_43790 = (inst_43788 < inst_43787);
var inst_43791 = inst_43790;
var state_43925__$1 = state_43925;
if(cljs.core.truth_(inst_43791)){
var statearr_43989_44059 = state_43925__$1;
(statearr_43989_44059[(1)] = (7));

} else {
var statearr_43990_44060 = state_43925__$1;
(statearr_43990_44060[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (14))){
var inst_43798 = (state_43925[(22)]);
var inst_43807 = cljs.core.first.call(null,inst_43798);
var inst_43808 = figwheel.client.file_reloading.eval_body.call(null,inst_43807,opts);
var inst_43809 = cljs.core.next.call(null,inst_43798);
var inst_43785 = inst_43809;
var inst_43786 = null;
var inst_43787 = (0);
var inst_43788 = (0);
var state_43925__$1 = (function (){var statearr_43991 = state_43925;
(statearr_43991[(7)] = inst_43787);

(statearr_43991[(32)] = inst_43808);

(statearr_43991[(8)] = inst_43785);

(statearr_43991[(9)] = inst_43788);

(statearr_43991[(10)] = inst_43786);

return statearr_43991;
})();
var statearr_43992_44061 = state_43925__$1;
(statearr_43992_44061[(2)] = null);

(statearr_43992_44061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (45))){
var state_43925__$1 = state_43925;
var statearr_43993_44062 = state_43925__$1;
(statearr_43993_44062[(2)] = null);

(statearr_43993_44062[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (26))){
var inst_43838 = (state_43925[(19)]);
var inst_43842 = (state_43925[(23)]);
var inst_43844 = (state_43925[(26)]);
var inst_43841 = (state_43925[(24)]);
var inst_43846 = (state_43925[(25)]);
var inst_43861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43863 = (function (){var all_files = inst_43838;
var res_SINGLEQUOTE_ = inst_43841;
var res = inst_43842;
var files_not_loaded = inst_43844;
var dependencies_that_loaded = inst_43846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43838,inst_43842,inst_43844,inst_43841,inst_43846,inst_43861,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43862){
var map__43994 = p__43862;
var map__43994__$1 = ((((!((map__43994 == null)))?((((map__43994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43994):map__43994);
var namespace = cljs.core.get.call(null,map__43994__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43994__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43838,inst_43842,inst_43844,inst_43841,inst_43846,inst_43861,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43864 = cljs.core.map.call(null,inst_43863,inst_43842);
var inst_43865 = cljs.core.pr_str.call(null,inst_43864);
var inst_43866 = figwheel.client.utils.log.call(null,inst_43865);
var inst_43867 = (function (){var all_files = inst_43838;
var res_SINGLEQUOTE_ = inst_43841;
var res = inst_43842;
var files_not_loaded = inst_43844;
var dependencies_that_loaded = inst_43846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43838,inst_43842,inst_43844,inst_43841,inst_43846,inst_43861,inst_43863,inst_43864,inst_43865,inst_43866,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43838,inst_43842,inst_43844,inst_43841,inst_43846,inst_43861,inst_43863,inst_43864,inst_43865,inst_43866,state_val_43926,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43868 = setTimeout(inst_43867,(10));
var state_43925__$1 = (function (){var statearr_43996 = state_43925;
(statearr_43996[(33)] = inst_43866);

(statearr_43996[(34)] = inst_43861);

return statearr_43996;
})();
var statearr_43997_44063 = state_43925__$1;
(statearr_43997_44063[(2)] = inst_43868);

(statearr_43997_44063[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (16))){
var state_43925__$1 = state_43925;
var statearr_43998_44064 = state_43925__$1;
(statearr_43998_44064[(2)] = reload_dependents);

(statearr_43998_44064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (38))){
var inst_43878 = (state_43925[(16)]);
var inst_43896 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43878);
var state_43925__$1 = state_43925;
var statearr_43999_44065 = state_43925__$1;
(statearr_43999_44065[(2)] = inst_43896);

(statearr_43999_44065[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (30))){
var state_43925__$1 = state_43925;
var statearr_44000_44066 = state_43925__$1;
(statearr_44000_44066[(2)] = null);

(statearr_44000_44066[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (10))){
var inst_43798 = (state_43925[(22)]);
var inst_43800 = cljs.core.chunked_seq_QMARK_.call(null,inst_43798);
var state_43925__$1 = state_43925;
if(inst_43800){
var statearr_44001_44067 = state_43925__$1;
(statearr_44001_44067[(1)] = (13));

} else {
var statearr_44002_44068 = state_43925__$1;
(statearr_44002_44068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (18))){
var inst_43832 = (state_43925[(2)]);
var state_43925__$1 = state_43925;
if(cljs.core.truth_(inst_43832)){
var statearr_44003_44069 = state_43925__$1;
(statearr_44003_44069[(1)] = (19));

} else {
var statearr_44004_44070 = state_43925__$1;
(statearr_44004_44070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (42))){
var state_43925__$1 = state_43925;
var statearr_44005_44071 = state_43925__$1;
(statearr_44005_44071[(2)] = null);

(statearr_44005_44071[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (37))){
var inst_43891 = (state_43925[(2)]);
var state_43925__$1 = state_43925;
var statearr_44006_44072 = state_43925__$1;
(statearr_44006_44072[(2)] = inst_43891);

(statearr_44006_44072[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43926 === (8))){
var inst_43798 = (state_43925[(22)]);
var inst_43785 = (state_43925[(8)]);
var inst_43798__$1 = cljs.core.seq.call(null,inst_43785);
var state_43925__$1 = (function (){var statearr_44007 = state_43925;
(statearr_44007[(22)] = inst_43798__$1);

return statearr_44007;
})();
if(inst_43798__$1){
var statearr_44008_44073 = state_43925__$1;
(statearr_44008_44073[(1)] = (10));

} else {
var statearr_44009_44074 = state_43925__$1;
(statearr_44009_44074[(1)] = (11));

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
}
});})(c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39950__auto__,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto____0 = (function (){
var statearr_44013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44013[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto__);

(statearr_44013[(1)] = (1));

return statearr_44013;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto____1 = (function (state_43925){
while(true){
var ret_value__39952__auto__ = (function (){try{while(true){
var result__39953__auto__ = switch__39950__auto__.call(null,state_43925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39953__auto__;
}
break;
}
}catch (e44014){if((e44014 instanceof Object)){
var ex__39954__auto__ = e44014;
var statearr_44015_44075 = state_43925;
(statearr_44015_44075[(5)] = ex__39954__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44076 = state_43925;
state_43925 = G__44076;
continue;
} else {
return ret_value__39952__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto__ = function(state_43925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto____1.call(this,state_43925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39951__auto__;
})()
;})(switch__39950__auto__,c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40066__auto__ = (function (){var statearr_44016 = f__40065__auto__.call(null);
(statearr_44016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40064__auto__);

return statearr_44016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40066__auto__);
});})(c__40064__auto__,map__43770,map__43770__$1,opts,before_jsload,on_jsload,reload_dependents,map__43771,map__43771__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40064__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44079,link){
var map__44082 = p__44079;
var map__44082__$1 = ((((!((map__44082 == null)))?((((map__44082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44082):map__44082);
var file = cljs.core.get.call(null,map__44082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__44082,map__44082__$1,file){
return (function (p1__44077_SHARP_,p2__44078_SHARP_){
if(cljs.core._EQ_.call(null,p1__44077_SHARP_,p2__44078_SHARP_)){
return p1__44077_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__44082,map__44082__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44088){
var map__44089 = p__44088;
var map__44089__$1 = ((((!((map__44089 == null)))?((((map__44089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44089):map__44089);
var match_length = cljs.core.get.call(null,map__44089__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44089__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44084_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44084_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args44091 = [];
var len__38599__auto___44094 = arguments.length;
var i__38600__auto___44095 = (0);
while(true){
if((i__38600__auto___44095 < len__38599__auto___44094)){
args44091.push((arguments[i__38600__auto___44095]));

var G__44096 = (i__38600__auto___44095 + (1));
i__38600__auto___44095 = G__44096;
continue;
} else {
}
break;
}

var G__44093 = args44091.length;
switch (G__44093) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44091.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44098_SHARP_,p2__44099_SHARP_){
return cljs.core.assoc.call(null,p1__44098_SHARP_,cljs.core.get.call(null,p2__44099_SHARP_,key),p2__44099_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__44100){
var map__44103 = p__44100;
var map__44103__$1 = ((((!((map__44103 == null)))?((((map__44103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44103):map__44103);
var f_data = map__44103__$1;
var file = cljs.core.get.call(null,map__44103__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44105,p__44106){
var map__44115 = p__44105;
var map__44115__$1 = ((((!((map__44115 == null)))?((((map__44115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44115):map__44115);
var opts = map__44115__$1;
var on_cssload = cljs.core.get.call(null,map__44115__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44116 = p__44106;
var map__44116__$1 = ((((!((map__44116 == null)))?((((map__44116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44116):map__44116);
var files_msg = map__44116__$1;
var files = cljs.core.get.call(null,map__44116__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__44119_44123 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__44120_44124 = null;
var count__44121_44125 = (0);
var i__44122_44126 = (0);
while(true){
if((i__44122_44126 < count__44121_44125)){
var f_44127 = cljs.core._nth.call(null,chunk__44120_44124,i__44122_44126);
figwheel.client.file_reloading.reload_css_file.call(null,f_44127);

var G__44128 = seq__44119_44123;
var G__44129 = chunk__44120_44124;
var G__44130 = count__44121_44125;
var G__44131 = (i__44122_44126 + (1));
seq__44119_44123 = G__44128;
chunk__44120_44124 = G__44129;
count__44121_44125 = G__44130;
i__44122_44126 = G__44131;
continue;
} else {
var temp__6753__auto___44132 = cljs.core.seq.call(null,seq__44119_44123);
if(temp__6753__auto___44132){
var seq__44119_44133__$1 = temp__6753__auto___44132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44119_44133__$1)){
var c__38289__auto___44134 = cljs.core.chunk_first.call(null,seq__44119_44133__$1);
var G__44135 = cljs.core.chunk_rest.call(null,seq__44119_44133__$1);
var G__44136 = c__38289__auto___44134;
var G__44137 = cljs.core.count.call(null,c__38289__auto___44134);
var G__44138 = (0);
seq__44119_44123 = G__44135;
chunk__44120_44124 = G__44136;
count__44121_44125 = G__44137;
i__44122_44126 = G__44138;
continue;
} else {
var f_44139 = cljs.core.first.call(null,seq__44119_44133__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_44139);

var G__44140 = cljs.core.next.call(null,seq__44119_44133__$1);
var G__44141 = null;
var G__44142 = (0);
var G__44143 = (0);
seq__44119_44123 = G__44140;
chunk__44120_44124 = G__44141;
count__44121_44125 = G__44142;
i__44122_44126 = G__44143;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__44115,map__44115__$1,opts,on_cssload,map__44116,map__44116__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__44115,map__44115__$1,opts,on_cssload,map__44116,map__44116__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1487810676349