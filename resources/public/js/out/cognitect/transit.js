// Compiled by ClojureScript 1.9.473 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#uuid \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__48665_48669 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__48666_48670 = null;
var count__48667_48671 = (0);
var i__48668_48672 = (0);
while(true){
if((i__48668_48672 < count__48667_48671)){
var k_48673 = cljs.core._nth.call(null,chunk__48666_48670,i__48668_48672);
var v_48674 = (b[k_48673]);
(a[k_48673] = v_48674);

var G__48675 = seq__48665_48669;
var G__48676 = chunk__48666_48670;
var G__48677 = count__48667_48671;
var G__48678 = (i__48668_48672 + (1));
seq__48665_48669 = G__48675;
chunk__48666_48670 = G__48676;
count__48667_48671 = G__48677;
i__48668_48672 = G__48678;
continue;
} else {
var temp__6753__auto___48679 = cljs.core.seq.call(null,seq__48665_48669);
if(temp__6753__auto___48679){
var seq__48665_48680__$1 = temp__6753__auto___48679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48665_48680__$1)){
var c__38289__auto___48681 = cljs.core.chunk_first.call(null,seq__48665_48680__$1);
var G__48682 = cljs.core.chunk_rest.call(null,seq__48665_48680__$1);
var G__48683 = c__38289__auto___48681;
var G__48684 = cljs.core.count.call(null,c__38289__auto___48681);
var G__48685 = (0);
seq__48665_48669 = G__48682;
chunk__48666_48670 = G__48683;
count__48667_48671 = G__48684;
i__48668_48672 = G__48685;
continue;
} else {
var k_48686 = cljs.core.first.call(null,seq__48665_48680__$1);
var v_48687 = (b[k_48686]);
(a[k_48686] = v_48687);

var G__48688 = cljs.core.next.call(null,seq__48665_48680__$1);
var G__48689 = null;
var G__48690 = (0);
var G__48691 = (0);
seq__48665_48669 = G__48688;
chunk__48666_48670 = G__48689;
count__48667_48671 = G__48690;
i__48668_48672 = G__48691;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args48692 = [];
var len__38599__auto___48695 = arguments.length;
var i__38600__auto___48696 = (0);
while(true){
if((i__38600__auto___48696 < len__38599__auto___48695)){
args48692.push((arguments[i__38600__auto___48696]));

var G__48697 = (i__38600__auto___48696 + (1));
i__38600__auto___48696 = G__48697;
continue;
} else {
}
break;
}

var G__48694 = args48692.length;
switch (G__48694) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48692.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__48699 = (i + (2));
var G__48700 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__48699;
ret = G__48700;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__48701_48705 = cljs.core.seq.call(null,v);
var chunk__48702_48706 = null;
var count__48703_48707 = (0);
var i__48704_48708 = (0);
while(true){
if((i__48704_48708 < count__48703_48707)){
var x_48709 = cljs.core._nth.call(null,chunk__48702_48706,i__48704_48708);
ret.push(x_48709);

var G__48710 = seq__48701_48705;
var G__48711 = chunk__48702_48706;
var G__48712 = count__48703_48707;
var G__48713 = (i__48704_48708 + (1));
seq__48701_48705 = G__48710;
chunk__48702_48706 = G__48711;
count__48703_48707 = G__48712;
i__48704_48708 = G__48713;
continue;
} else {
var temp__6753__auto___48714 = cljs.core.seq.call(null,seq__48701_48705);
if(temp__6753__auto___48714){
var seq__48701_48715__$1 = temp__6753__auto___48714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48701_48715__$1)){
var c__38289__auto___48716 = cljs.core.chunk_first.call(null,seq__48701_48715__$1);
var G__48717 = cljs.core.chunk_rest.call(null,seq__48701_48715__$1);
var G__48718 = c__38289__auto___48716;
var G__48719 = cljs.core.count.call(null,c__38289__auto___48716);
var G__48720 = (0);
seq__48701_48705 = G__48717;
chunk__48702_48706 = G__48718;
count__48703_48707 = G__48719;
i__48704_48708 = G__48720;
continue;
} else {
var x_48721 = cljs.core.first.call(null,seq__48701_48715__$1);
ret.push(x_48721);

var G__48722 = cljs.core.next.call(null,seq__48701_48715__$1);
var G__48723 = null;
var G__48724 = (0);
var G__48725 = (0);
seq__48701_48705 = G__48722;
chunk__48702_48706 = G__48723;
count__48703_48707 = G__48724;
i__48704_48708 = G__48725;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__48726_48730 = cljs.core.seq.call(null,v);
var chunk__48727_48731 = null;
var count__48728_48732 = (0);
var i__48729_48733 = (0);
while(true){
if((i__48729_48733 < count__48728_48732)){
var x_48734 = cljs.core._nth.call(null,chunk__48727_48731,i__48729_48733);
ret.push(x_48734);

var G__48735 = seq__48726_48730;
var G__48736 = chunk__48727_48731;
var G__48737 = count__48728_48732;
var G__48738 = (i__48729_48733 + (1));
seq__48726_48730 = G__48735;
chunk__48727_48731 = G__48736;
count__48728_48732 = G__48737;
i__48729_48733 = G__48738;
continue;
} else {
var temp__6753__auto___48739 = cljs.core.seq.call(null,seq__48726_48730);
if(temp__6753__auto___48739){
var seq__48726_48740__$1 = temp__6753__auto___48739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48726_48740__$1)){
var c__38289__auto___48741 = cljs.core.chunk_first.call(null,seq__48726_48740__$1);
var G__48742 = cljs.core.chunk_rest.call(null,seq__48726_48740__$1);
var G__48743 = c__38289__auto___48741;
var G__48744 = cljs.core.count.call(null,c__38289__auto___48741);
var G__48745 = (0);
seq__48726_48730 = G__48742;
chunk__48727_48731 = G__48743;
count__48728_48732 = G__48744;
i__48729_48733 = G__48745;
continue;
} else {
var x_48746 = cljs.core.first.call(null,seq__48726_48740__$1);
ret.push(x_48746);

var G__48747 = cljs.core.next.call(null,seq__48726_48740__$1);
var G__48748 = null;
var G__48749 = (0);
var G__48750 = (0);
seq__48726_48730 = G__48747;
chunk__48727_48731 = G__48748;
count__48728_48732 = G__48749;
i__48729_48733 = G__48750;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__48751_48755 = cljs.core.seq.call(null,v);
var chunk__48752_48756 = null;
var count__48753_48757 = (0);
var i__48754_48758 = (0);
while(true){
if((i__48754_48758 < count__48753_48757)){
var x_48759 = cljs.core._nth.call(null,chunk__48752_48756,i__48754_48758);
ret.push(x_48759);

var G__48760 = seq__48751_48755;
var G__48761 = chunk__48752_48756;
var G__48762 = count__48753_48757;
var G__48763 = (i__48754_48758 + (1));
seq__48751_48755 = G__48760;
chunk__48752_48756 = G__48761;
count__48753_48757 = G__48762;
i__48754_48758 = G__48763;
continue;
} else {
var temp__6753__auto___48764 = cljs.core.seq.call(null,seq__48751_48755);
if(temp__6753__auto___48764){
var seq__48751_48765__$1 = temp__6753__auto___48764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48751_48765__$1)){
var c__38289__auto___48766 = cljs.core.chunk_first.call(null,seq__48751_48765__$1);
var G__48767 = cljs.core.chunk_rest.call(null,seq__48751_48765__$1);
var G__48768 = c__38289__auto___48766;
var G__48769 = cljs.core.count.call(null,c__38289__auto___48766);
var G__48770 = (0);
seq__48751_48755 = G__48767;
chunk__48752_48756 = G__48768;
count__48753_48757 = G__48769;
i__48754_48758 = G__48770;
continue;
} else {
var x_48771 = cljs.core.first.call(null,seq__48751_48765__$1);
ret.push(x_48771);

var G__48772 = cljs.core.next.call(null,seq__48751_48765__$1);
var G__48773 = null;
var G__48774 = (0);
var G__48775 = (0);
seq__48751_48755 = G__48772;
chunk__48752_48756 = G__48773;
count__48753_48757 = G__48774;
i__48754_48758 = G__48775;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args48776 = [];
var len__38599__auto___48791 = arguments.length;
var i__38600__auto___48792 = (0);
while(true){
if((i__38600__auto___48792 < len__38599__auto___48791)){
args48776.push((arguments[i__38600__auto___48792]));

var G__48793 = (i__38600__auto___48792 + (1));
i__38600__auto___48792 = G__48793;
continue;
} else {
}
break;
}

var G__48778 = args48776.length;
switch (G__48778) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48776.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__48779 = obj;
G__48779.push(kfn.call(null,k),vfn.call(null,v));

return G__48779;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x48780 = cljs.core.clone.call(null,handlers);
x48780.forEach = ((function (x48780,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__48781 = cljs.core.seq.call(null,coll);
var chunk__48782 = null;
var count__48783 = (0);
var i__48784 = (0);
while(true){
if((i__48784 < count__48783)){
var vec__48785 = cljs.core._nth.call(null,chunk__48782,i__48784);
var k = cljs.core.nth.call(null,vec__48785,(0),null);
var v = cljs.core.nth.call(null,vec__48785,(1),null);
f.call(null,v,k);

var G__48795 = seq__48781;
var G__48796 = chunk__48782;
var G__48797 = count__48783;
var G__48798 = (i__48784 + (1));
seq__48781 = G__48795;
chunk__48782 = G__48796;
count__48783 = G__48797;
i__48784 = G__48798;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__48781);
if(temp__6753__auto__){
var seq__48781__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48781__$1)){
var c__38289__auto__ = cljs.core.chunk_first.call(null,seq__48781__$1);
var G__48799 = cljs.core.chunk_rest.call(null,seq__48781__$1);
var G__48800 = c__38289__auto__;
var G__48801 = cljs.core.count.call(null,c__38289__auto__);
var G__48802 = (0);
seq__48781 = G__48799;
chunk__48782 = G__48800;
count__48783 = G__48801;
i__48784 = G__48802;
continue;
} else {
var vec__48788 = cljs.core.first.call(null,seq__48781__$1);
var k = cljs.core.nth.call(null,vec__48788,(0),null);
var v = cljs.core.nth.call(null,vec__48788,(1),null);
f.call(null,v,k);

var G__48803 = cljs.core.next.call(null,seq__48781__$1);
var G__48804 = null;
var G__48805 = (0);
var G__48806 = (0);
seq__48781 = G__48803;
chunk__48782 = G__48804;
count__48783 = G__48805;
i__48784 = G__48806;
continue;
}
} else {
return null;
}
}
break;
}
});})(x48780,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x48780;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args48807 = [];
var len__38599__auto___48813 = arguments.length;
var i__38600__auto___48814 = (0);
while(true){
if((i__38600__auto___48814 < len__38599__auto___48813)){
args48807.push((arguments[i__38600__auto___48814]));

var G__48815 = (i__38600__auto___48814 + (1));
i__38600__auto___48814 = G__48815;
continue;
} else {
}
break;
}

var G__48809 = args48807.length;
switch (G__48809) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48807.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit48810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit48810 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta48811){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta48811 = meta48811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit48810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48812,meta48811__$1){
var self__ = this;
var _48812__$1 = this;
return (new cognitect.transit.t_cognitect$transit48810(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta48811__$1));
});

cognitect.transit.t_cognitect$transit48810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48812){
var self__ = this;
var _48812__$1 = this;
return self__.meta48811;
});

cognitect.transit.t_cognitect$transit48810.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit48810.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit48810.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit48810.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit48810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta48811","meta48811",2087110916,null)], null);
});

cognitect.transit.t_cognitect$transit48810.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit48810.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit48810";

cognitect.transit.t_cognitect$transit48810.cljs$lang$ctorPrWriter = (function (this__38035__auto__,writer__38036__auto__,opt__38037__auto__){
return cljs.core._write.call(null,writer__38036__auto__,"cognitect.transit/t_cognitect$transit48810");
});

cognitect.transit.__GT_t_cognitect$transit48810 = (function cognitect$transit$__GT_t_cognitect$transit48810(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta48811){
return (new cognitect.transit.t_cognitect$transit48810(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta48811));
});

}

return (new cognitect.transit.t_cognitect$transit48810(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__37378__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__37378__auto__)){
return or__37378__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1487810683663