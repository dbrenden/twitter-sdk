// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11797){
var map__11822 = p__11797;
var map__11822__$1 = ((((!((map__11822 == null)))?((((map__11822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11822):map__11822);
var m = map__11822__$1;
var n = cljs.core.get.call(null,map__11822__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11822__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11824_11846 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11825_11847 = null;
var count__11826_11848 = (0);
var i__11827_11849 = (0);
while(true){
if((i__11827_11849 < count__11826_11848)){
var f_11850 = cljs.core._nth.call(null,chunk__11825_11847,i__11827_11849);
cljs.core.println.call(null,"  ",f_11850);

var G__11851 = seq__11824_11846;
var G__11852 = chunk__11825_11847;
var G__11853 = count__11826_11848;
var G__11854 = (i__11827_11849 + (1));
seq__11824_11846 = G__11851;
chunk__11825_11847 = G__11852;
count__11826_11848 = G__11853;
i__11827_11849 = G__11854;
continue;
} else {
var temp__6753__auto___11855 = cljs.core.seq.call(null,seq__11824_11846);
if(temp__6753__auto___11855){
var seq__11824_11856__$1 = temp__6753__auto___11855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11824_11856__$1)){
var c__10335__auto___11857 = cljs.core.chunk_first.call(null,seq__11824_11856__$1);
var G__11858 = cljs.core.chunk_rest.call(null,seq__11824_11856__$1);
var G__11859 = c__10335__auto___11857;
var G__11860 = cljs.core.count.call(null,c__10335__auto___11857);
var G__11861 = (0);
seq__11824_11846 = G__11858;
chunk__11825_11847 = G__11859;
count__11826_11848 = G__11860;
i__11827_11849 = G__11861;
continue;
} else {
var f_11862 = cljs.core.first.call(null,seq__11824_11856__$1);
cljs.core.println.call(null,"  ",f_11862);

var G__11863 = cljs.core.next.call(null,seq__11824_11856__$1);
var G__11864 = null;
var G__11865 = (0);
var G__11866 = (0);
seq__11824_11846 = G__11863;
chunk__11825_11847 = G__11864;
count__11826_11848 = G__11865;
i__11827_11849 = G__11866;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11867 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9424__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9424__auto__)){
return or__9424__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11867);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11867)))?cljs.core.second.call(null,arglists_11867):arglists_11867));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11828_11868 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11829_11869 = null;
var count__11830_11870 = (0);
var i__11831_11871 = (0);
while(true){
if((i__11831_11871 < count__11830_11870)){
var vec__11832_11872 = cljs.core._nth.call(null,chunk__11829_11869,i__11831_11871);
var name_11873 = cljs.core.nth.call(null,vec__11832_11872,(0),null);
var map__11835_11874 = cljs.core.nth.call(null,vec__11832_11872,(1),null);
var map__11835_11875__$1 = ((((!((map__11835_11874 == null)))?((((map__11835_11874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11835_11874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11835_11874):map__11835_11874);
var doc_11876 = cljs.core.get.call(null,map__11835_11875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11877 = cljs.core.get.call(null,map__11835_11875__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11873);

cljs.core.println.call(null," ",arglists_11877);

if(cljs.core.truth_(doc_11876)){
cljs.core.println.call(null," ",doc_11876);
} else {
}

var G__11878 = seq__11828_11868;
var G__11879 = chunk__11829_11869;
var G__11880 = count__11830_11870;
var G__11881 = (i__11831_11871 + (1));
seq__11828_11868 = G__11878;
chunk__11829_11869 = G__11879;
count__11830_11870 = G__11880;
i__11831_11871 = G__11881;
continue;
} else {
var temp__6753__auto___11882 = cljs.core.seq.call(null,seq__11828_11868);
if(temp__6753__auto___11882){
var seq__11828_11883__$1 = temp__6753__auto___11882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11828_11883__$1)){
var c__10335__auto___11884 = cljs.core.chunk_first.call(null,seq__11828_11883__$1);
var G__11885 = cljs.core.chunk_rest.call(null,seq__11828_11883__$1);
var G__11886 = c__10335__auto___11884;
var G__11887 = cljs.core.count.call(null,c__10335__auto___11884);
var G__11888 = (0);
seq__11828_11868 = G__11885;
chunk__11829_11869 = G__11886;
count__11830_11870 = G__11887;
i__11831_11871 = G__11888;
continue;
} else {
var vec__11837_11889 = cljs.core.first.call(null,seq__11828_11883__$1);
var name_11890 = cljs.core.nth.call(null,vec__11837_11889,(0),null);
var map__11840_11891 = cljs.core.nth.call(null,vec__11837_11889,(1),null);
var map__11840_11892__$1 = ((((!((map__11840_11891 == null)))?((((map__11840_11891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11840_11891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11840_11891):map__11840_11891);
var doc_11893 = cljs.core.get.call(null,map__11840_11892__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11894 = cljs.core.get.call(null,map__11840_11892__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11890);

cljs.core.println.call(null," ",arglists_11894);

if(cljs.core.truth_(doc_11893)){
cljs.core.println.call(null," ",doc_11893);
} else {
}

var G__11895 = cljs.core.next.call(null,seq__11828_11883__$1);
var G__11896 = null;
var G__11897 = (0);
var G__11898 = (0);
seq__11828_11868 = G__11895;
chunk__11829_11869 = G__11896;
count__11830_11870 = G__11897;
i__11831_11871 = G__11898;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__11842 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11843 = null;
var count__11844 = (0);
var i__11845 = (0);
while(true){
if((i__11845 < count__11844)){
var role = cljs.core._nth.call(null,chunk__11843,i__11845);
var temp__6753__auto___11899__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___11899__$1)){
var spec_11900 = temp__6753__auto___11899__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_11900));
} else {
}

var G__11901 = seq__11842;
var G__11902 = chunk__11843;
var G__11903 = count__11844;
var G__11904 = (i__11845 + (1));
seq__11842 = G__11901;
chunk__11843 = G__11902;
count__11844 = G__11903;
i__11845 = G__11904;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__11842);
if(temp__6753__auto____$1){
var seq__11842__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11842__$1)){
var c__10335__auto__ = cljs.core.chunk_first.call(null,seq__11842__$1);
var G__11905 = cljs.core.chunk_rest.call(null,seq__11842__$1);
var G__11906 = c__10335__auto__;
var G__11907 = cljs.core.count.call(null,c__10335__auto__);
var G__11908 = (0);
seq__11842 = G__11905;
chunk__11843 = G__11906;
count__11844 = G__11907;
i__11845 = G__11908;
continue;
} else {
var role = cljs.core.first.call(null,seq__11842__$1);
var temp__6753__auto___11909__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___11909__$2)){
var spec_11910 = temp__6753__auto___11909__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_11910));
} else {
}

var G__11911 = cljs.core.next.call(null,seq__11842__$1);
var G__11912 = null;
var G__11913 = (0);
var G__11914 = (0);
seq__11842 = G__11911;
chunk__11843 = G__11912;
count__11844 = G__11913;
i__11845 = G__11914;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map