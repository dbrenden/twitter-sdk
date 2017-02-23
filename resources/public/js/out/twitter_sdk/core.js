// Compiled by ClojureScript 1.9.473 {}
goog.provide('twitter_sdk.core');
goog.require('cljs.core');
goog.require('cljs.spec');
goog.require('cljs.core.async');
goog.require('twitter_sdk.requests');
twitter_sdk.core.get = (function twitter_sdk$core$get(config,path,params){
return twitter_sdk.requests.request.call(null,new cljs.core.Keyword(null,"get","get",1683182755),"http://httpbin.org/get");
});
twitter_sdk.core.post = (function twitter_sdk$core$post(config,path,params){
return cljs.core.println.call(null,config);
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("twitter-sdk.core","consumer-key","twitter-sdk.core/consumer-key",-1329929937),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("twitter-sdk.core","consumer-secret","twitter-sdk.core/consumer-secret",-447885340),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("twitter-sdk.core","access-token-key","twitter-sdk.core/access-token-key",357904243),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("twitter-sdk.core","access-token-secret","twitter-sdk.core/access-token-secret",-455202047),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("twitter","config","twitter/config",-370534702),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("twitter-sdk.core","consumer-key","twitter-sdk.core/consumer-key",-1329929937),new cljs.core.Keyword("twitter-sdk.core","consumer-secret","twitter-sdk.core/consumer-secret",-447885340),new cljs.core.Keyword("twitter-sdk.core","access-token-key","twitter-sdk.core/access-token-key",357904243),new cljs.core.Keyword("twitter-sdk.core","access-token-secret","twitter-sdk.core/access-token-secret",-455202047)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("twitter-sdk.core","consumer-key","twitter-sdk.core/consumer-key",-1329929937),new cljs.core.Keyword("twitter-sdk.core","consumer-secret","twitter-sdk.core/consumer-secret",-447885340),new cljs.core.Keyword("twitter-sdk.core","access-token-key","twitter-sdk.core/access-token-key",357904243),new cljs.core.Keyword("twitter-sdk.core","access-token-secret","twitter-sdk.core/access-token-secret",-455202047)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49270){
return cljs.core.map_QMARK_.call(null,G__49270);
}),(function (G__49270){
return cljs.core.contains_QMARK_.call(null,G__49270,new cljs.core.Keyword(null,"consumer-key","consumer-key",-578734564));
}),(function (G__49270){
return cljs.core.contains_QMARK_.call(null,G__49270,new cljs.core.Keyword(null,"consumer-secret","consumer-secret",-1310720619));
}),(function (G__49270){
return cljs.core.contains_QMARK_.call(null,G__49270,new cljs.core.Keyword(null,"access-token-key","access-token-key",1091424834));
}),(function (G__49270){
return cljs.core.contains_QMARK_.call(null,G__49270,new cljs.core.Keyword(null,"access-token-secret","access-token-secret",1353094712));
})], null),(function (G__49270){
return (cljs.core.map_QMARK_.call(null,G__49270)) && (cljs.core.contains_QMARK_.call(null,G__49270,new cljs.core.Keyword(null,"consumer-key","consumer-key",-578734564))) && (cljs.core.contains_QMARK_.call(null,G__49270,new cljs.core.Keyword(null,"consumer-secret","consumer-secret",-1310720619))) && (cljs.core.contains_QMARK_.call(null,G__49270,new cljs.core.Keyword(null,"access-token-key","access-token-key",1091424834))) && (cljs.core.contains_QMARK_.call(null,G__49270,new cljs.core.Keyword(null,"access-token-secret","access-token-secret",1353094712)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("twitter-sdk.core","consumer-key","twitter-sdk.core/consumer-key",-1329929937),new cljs.core.Keyword("twitter-sdk.core","consumer-secret","twitter-sdk.core/consumer-secret",-447885340),new cljs.core.Keyword("twitter-sdk.core","access-token-key","twitter-sdk.core/access-token-key",357904243),new cljs.core.Keyword("twitter-sdk.core","access-token-secret","twitter-sdk.core/access-token-secret",-455202047)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consumer-key","consumer-key",-578734564),new cljs.core.Keyword(null,"consumer-secret","consumer-secret",-1310720619),new cljs.core.Keyword(null,"access-token-key","access-token-key",1091424834),new cljs.core.Keyword(null,"access-token-secret","access-token-secret",1353094712)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"consumer-key","consumer-key",-578734564))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"consumer-secret","consumer-secret",-1310720619))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"access-token-key","access-token-key",1091424834))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"access-token-secret","access-token-secret",1353094712)))], null),null])));
twitter_sdk.core.config = (function twitter_sdk$core$config(p__49271){
var map__49274 = p__49271;
var map__49274__$1 = ((((!((map__49274 == null)))?((((map__49274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49274):map__49274);
var opts = map__49274__$1;
var consumer_key = cljs.core.get.call(null,map__49274__$1,new cljs.core.Keyword(null,"consumer-key","consumer-key",-578734564));
var consumer_secret = cljs.core.get.call(null,map__49274__$1,new cljs.core.Keyword(null,"consumer-secret","consumer-secret",-1310720619));
var access_token_key = cljs.core.get.call(null,map__49274__$1,new cljs.core.Keyword(null,"access-token-key","access-token-key",1091424834));
var access_token_secret = cljs.core.get.call(null,map__49274__$1,new cljs.core.Keyword(null,"access-token-secret","access-token-secret",1353094712));
var config = cljs.spec.conform.call(null,new cljs.core.Keyword("twitter","config","twitter/config",-370534702),twitter_sdk.core.config);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),config))){
return config;
} else {
throw cljs.core.ex_info.call(null,"Failed validation",cljs.spec.explain_data.call(null,new cljs.core.Keyword("twitter","config","twitter/config",-370534702),config));
}
});

//# sourceMappingURL=core.js.map?rel=1487810684727