// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21526){
var map__21551 = p__21526;
var map__21551__$1 = ((((!((map__21551 == null)))?((((map__21551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21551):map__21551);
var m = map__21551__$1;
var n = cljs.core.get.call(null,map__21551__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21553_21575 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21554_21576 = null;
var count__21555_21577 = (0);
var i__21556_21578 = (0);
while(true){
if((i__21556_21578 < count__21555_21577)){
var f_21579 = cljs.core._nth.call(null,chunk__21554_21576,i__21556_21578);
cljs.core.println.call(null,"  ",f_21579);

var G__21580 = seq__21553_21575;
var G__21581 = chunk__21554_21576;
var G__21582 = count__21555_21577;
var G__21583 = (i__21556_21578 + (1));
seq__21553_21575 = G__21580;
chunk__21554_21576 = G__21581;
count__21555_21577 = G__21582;
i__21556_21578 = G__21583;
continue;
} else {
var temp__6753__auto___21584 = cljs.core.seq.call(null,seq__21553_21575);
if(temp__6753__auto___21584){
var seq__21553_21585__$1 = temp__6753__auto___21584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21553_21585__$1)){
var c__20064__auto___21586 = cljs.core.chunk_first.call(null,seq__21553_21585__$1);
var G__21587 = cljs.core.chunk_rest.call(null,seq__21553_21585__$1);
var G__21588 = c__20064__auto___21586;
var G__21589 = cljs.core.count.call(null,c__20064__auto___21586);
var G__21590 = (0);
seq__21553_21575 = G__21587;
chunk__21554_21576 = G__21588;
count__21555_21577 = G__21589;
i__21556_21578 = G__21590;
continue;
} else {
var f_21591 = cljs.core.first.call(null,seq__21553_21585__$1);
cljs.core.println.call(null,"  ",f_21591);

var G__21592 = cljs.core.next.call(null,seq__21553_21585__$1);
var G__21593 = null;
var G__21594 = (0);
var G__21595 = (0);
seq__21553_21575 = G__21592;
chunk__21554_21576 = G__21593;
count__21555_21577 = G__21594;
i__21556_21578 = G__21595;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21596 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19153__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19153__auto__)){
return or__19153__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21596);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21596)))?cljs.core.second.call(null,arglists_21596):arglists_21596));
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
var seq__21557_21597 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21558_21598 = null;
var count__21559_21599 = (0);
var i__21560_21600 = (0);
while(true){
if((i__21560_21600 < count__21559_21599)){
var vec__21561_21601 = cljs.core._nth.call(null,chunk__21558_21598,i__21560_21600);
var name_21602 = cljs.core.nth.call(null,vec__21561_21601,(0),null);
var map__21564_21603 = cljs.core.nth.call(null,vec__21561_21601,(1),null);
var map__21564_21604__$1 = ((((!((map__21564_21603 == null)))?((((map__21564_21603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21564_21603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21564_21603):map__21564_21603);
var doc_21605 = cljs.core.get.call(null,map__21564_21604__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21606 = cljs.core.get.call(null,map__21564_21604__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21602);

cljs.core.println.call(null," ",arglists_21606);

if(cljs.core.truth_(doc_21605)){
cljs.core.println.call(null," ",doc_21605);
} else {
}

var G__21607 = seq__21557_21597;
var G__21608 = chunk__21558_21598;
var G__21609 = count__21559_21599;
var G__21610 = (i__21560_21600 + (1));
seq__21557_21597 = G__21607;
chunk__21558_21598 = G__21608;
count__21559_21599 = G__21609;
i__21560_21600 = G__21610;
continue;
} else {
var temp__6753__auto___21611 = cljs.core.seq.call(null,seq__21557_21597);
if(temp__6753__auto___21611){
var seq__21557_21612__$1 = temp__6753__auto___21611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21557_21612__$1)){
var c__20064__auto___21613 = cljs.core.chunk_first.call(null,seq__21557_21612__$1);
var G__21614 = cljs.core.chunk_rest.call(null,seq__21557_21612__$1);
var G__21615 = c__20064__auto___21613;
var G__21616 = cljs.core.count.call(null,c__20064__auto___21613);
var G__21617 = (0);
seq__21557_21597 = G__21614;
chunk__21558_21598 = G__21615;
count__21559_21599 = G__21616;
i__21560_21600 = G__21617;
continue;
} else {
var vec__21566_21618 = cljs.core.first.call(null,seq__21557_21612__$1);
var name_21619 = cljs.core.nth.call(null,vec__21566_21618,(0),null);
var map__21569_21620 = cljs.core.nth.call(null,vec__21566_21618,(1),null);
var map__21569_21621__$1 = ((((!((map__21569_21620 == null)))?((((map__21569_21620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21569_21620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21569_21620):map__21569_21620);
var doc_21622 = cljs.core.get.call(null,map__21569_21621__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21623 = cljs.core.get.call(null,map__21569_21621__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21619);

cljs.core.println.call(null," ",arglists_21623);

if(cljs.core.truth_(doc_21622)){
cljs.core.println.call(null," ",doc_21622);
} else {
}

var G__21624 = cljs.core.next.call(null,seq__21557_21612__$1);
var G__21625 = null;
var G__21626 = (0);
var G__21627 = (0);
seq__21557_21597 = G__21624;
chunk__21558_21598 = G__21625;
count__21559_21599 = G__21626;
i__21560_21600 = G__21627;
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

var seq__21571 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21572 = null;
var count__21573 = (0);
var i__21574 = (0);
while(true){
if((i__21574 < count__21573)){
var role = cljs.core._nth.call(null,chunk__21572,i__21574);
var temp__6753__auto___21628__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___21628__$1)){
var spec_21629 = temp__6753__auto___21628__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_21629));
} else {
}

var G__21630 = seq__21571;
var G__21631 = chunk__21572;
var G__21632 = count__21573;
var G__21633 = (i__21574 + (1));
seq__21571 = G__21630;
chunk__21572 = G__21631;
count__21573 = G__21632;
i__21574 = G__21633;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__21571);
if(temp__6753__auto____$1){
var seq__21571__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21571__$1)){
var c__20064__auto__ = cljs.core.chunk_first.call(null,seq__21571__$1);
var G__21634 = cljs.core.chunk_rest.call(null,seq__21571__$1);
var G__21635 = c__20064__auto__;
var G__21636 = cljs.core.count.call(null,c__20064__auto__);
var G__21637 = (0);
seq__21571 = G__21634;
chunk__21572 = G__21635;
count__21573 = G__21636;
i__21574 = G__21637;
continue;
} else {
var role = cljs.core.first.call(null,seq__21571__$1);
var temp__6753__auto___21638__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___21638__$2)){
var spec_21639 = temp__6753__auto___21638__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_21639));
} else {
}

var G__21640 = cljs.core.next.call(null,seq__21571__$1);
var G__21641 = null;
var G__21642 = (0);
var G__21643 = (0);
seq__21571 = G__21640;
chunk__21572 = G__21641;
count__21573 = G__21642;
i__21574 = G__21643;
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