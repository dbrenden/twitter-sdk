// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45558){
var map__45583 = p__45558;
var map__45583__$1 = ((((!((map__45583 == null)))?((((map__45583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45583):map__45583);
var m = map__45583__$1;
var n = cljs.core.get.call(null,map__45583__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__45583__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45585_45607 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45586_45608 = null;
var count__45587_45609 = (0);
var i__45588_45610 = (0);
while(true){
if((i__45588_45610 < count__45587_45609)){
var f_45611 = cljs.core._nth.call(null,chunk__45586_45608,i__45588_45610);
cljs.core.println.call(null,"  ",f_45611);

var G__45612 = seq__45585_45607;
var G__45613 = chunk__45586_45608;
var G__45614 = count__45587_45609;
var G__45615 = (i__45588_45610 + (1));
seq__45585_45607 = G__45612;
chunk__45586_45608 = G__45613;
count__45587_45609 = G__45614;
i__45588_45610 = G__45615;
continue;
} else {
var temp__6753__auto___45616 = cljs.core.seq.call(null,seq__45585_45607);
if(temp__6753__auto___45616){
var seq__45585_45617__$1 = temp__6753__auto___45616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45585_45617__$1)){
var c__38289__auto___45618 = cljs.core.chunk_first.call(null,seq__45585_45617__$1);
var G__45619 = cljs.core.chunk_rest.call(null,seq__45585_45617__$1);
var G__45620 = c__38289__auto___45618;
var G__45621 = cljs.core.count.call(null,c__38289__auto___45618);
var G__45622 = (0);
seq__45585_45607 = G__45619;
chunk__45586_45608 = G__45620;
count__45587_45609 = G__45621;
i__45588_45610 = G__45622;
continue;
} else {
var f_45623 = cljs.core.first.call(null,seq__45585_45617__$1);
cljs.core.println.call(null,"  ",f_45623);

var G__45624 = cljs.core.next.call(null,seq__45585_45617__$1);
var G__45625 = null;
var G__45626 = (0);
var G__45627 = (0);
seq__45585_45607 = G__45624;
chunk__45586_45608 = G__45625;
count__45587_45609 = G__45626;
i__45588_45610 = G__45627;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45628 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__37378__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45628);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45628)))?cljs.core.second.call(null,arglists_45628):arglists_45628));
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
var seq__45589_45629 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45590_45630 = null;
var count__45591_45631 = (0);
var i__45592_45632 = (0);
while(true){
if((i__45592_45632 < count__45591_45631)){
var vec__45593_45633 = cljs.core._nth.call(null,chunk__45590_45630,i__45592_45632);
var name_45634 = cljs.core.nth.call(null,vec__45593_45633,(0),null);
var map__45596_45635 = cljs.core.nth.call(null,vec__45593_45633,(1),null);
var map__45596_45636__$1 = ((((!((map__45596_45635 == null)))?((((map__45596_45635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45596_45635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45596_45635):map__45596_45635);
var doc_45637 = cljs.core.get.call(null,map__45596_45636__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45638 = cljs.core.get.call(null,map__45596_45636__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45634);

cljs.core.println.call(null," ",arglists_45638);

if(cljs.core.truth_(doc_45637)){
cljs.core.println.call(null," ",doc_45637);
} else {
}

var G__45639 = seq__45589_45629;
var G__45640 = chunk__45590_45630;
var G__45641 = count__45591_45631;
var G__45642 = (i__45592_45632 + (1));
seq__45589_45629 = G__45639;
chunk__45590_45630 = G__45640;
count__45591_45631 = G__45641;
i__45592_45632 = G__45642;
continue;
} else {
var temp__6753__auto___45643 = cljs.core.seq.call(null,seq__45589_45629);
if(temp__6753__auto___45643){
var seq__45589_45644__$1 = temp__6753__auto___45643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45589_45644__$1)){
var c__38289__auto___45645 = cljs.core.chunk_first.call(null,seq__45589_45644__$1);
var G__45646 = cljs.core.chunk_rest.call(null,seq__45589_45644__$1);
var G__45647 = c__38289__auto___45645;
var G__45648 = cljs.core.count.call(null,c__38289__auto___45645);
var G__45649 = (0);
seq__45589_45629 = G__45646;
chunk__45590_45630 = G__45647;
count__45591_45631 = G__45648;
i__45592_45632 = G__45649;
continue;
} else {
var vec__45598_45650 = cljs.core.first.call(null,seq__45589_45644__$1);
var name_45651 = cljs.core.nth.call(null,vec__45598_45650,(0),null);
var map__45601_45652 = cljs.core.nth.call(null,vec__45598_45650,(1),null);
var map__45601_45653__$1 = ((((!((map__45601_45652 == null)))?((((map__45601_45652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45601_45652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45601_45652):map__45601_45652);
var doc_45654 = cljs.core.get.call(null,map__45601_45653__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45655 = cljs.core.get.call(null,map__45601_45653__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45651);

cljs.core.println.call(null," ",arglists_45655);

if(cljs.core.truth_(doc_45654)){
cljs.core.println.call(null," ",doc_45654);
} else {
}

var G__45656 = cljs.core.next.call(null,seq__45589_45644__$1);
var G__45657 = null;
var G__45658 = (0);
var G__45659 = (0);
seq__45589_45629 = G__45656;
chunk__45590_45630 = G__45657;
count__45591_45631 = G__45658;
i__45592_45632 = G__45659;
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

var seq__45603 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45604 = null;
var count__45605 = (0);
var i__45606 = (0);
while(true){
if((i__45606 < count__45605)){
var role = cljs.core._nth.call(null,chunk__45604,i__45606);
var temp__6753__auto___45660__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___45660__$1)){
var spec_45661 = temp__6753__auto___45660__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_45661));
} else {
}

var G__45662 = seq__45603;
var G__45663 = chunk__45604;
var G__45664 = count__45605;
var G__45665 = (i__45606 + (1));
seq__45603 = G__45662;
chunk__45604 = G__45663;
count__45605 = G__45664;
i__45606 = G__45665;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__45603);
if(temp__6753__auto____$1){
var seq__45603__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45603__$1)){
var c__38289__auto__ = cljs.core.chunk_first.call(null,seq__45603__$1);
var G__45666 = cljs.core.chunk_rest.call(null,seq__45603__$1);
var G__45667 = c__38289__auto__;
var G__45668 = cljs.core.count.call(null,c__38289__auto__);
var G__45669 = (0);
seq__45603 = G__45666;
chunk__45604 = G__45667;
count__45605 = G__45668;
i__45606 = G__45669;
continue;
} else {
var role = cljs.core.first.call(null,seq__45603__$1);
var temp__6753__auto___45670__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___45670__$2)){
var spec_45671 = temp__6753__auto___45670__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_45671));
} else {
}

var G__45672 = cljs.core.next.call(null,seq__45603__$1);
var G__45673 = null;
var G__45674 = (0);
var G__45675 = (0);
seq__45603 = G__45672;
chunk__45604 = G__45673;
count__45605 = G__45674;
i__45606 = G__45675;
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

//# sourceMappingURL=repl.js.map?rel=1487810679425