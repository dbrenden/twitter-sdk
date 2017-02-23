(ns twitter-sdk.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.spec :as s]
            [cljs.core.async :refer [<!]]
            [twitter-sdk.requests :as r]))

(defn get [config path params]
  (r/request :get "http://httpbin.org/get"))

(defn post [config path params]
  (println config))

(s/def ::consumer-key string?)
(s/def ::consumer-secret string?)
(s/def ::access-token-key string?)
(s/def ::access-token-secret string?)

(s/def :twitter/config (s/keys :req-un [::consumer-key
                                        ::consumer-secret
                                        ::access-token-key
                                        ::access-token-secret]))

(defn config
  [{:keys [consumer-key consumer-secret access-token-key access-token-secret] :as opts}]
  (let [config (s/conform :twitter/config config)]
    (if-not (= :cljs.spec/invalid config)
      config
      (throw (ex-info "Failed validation" (s/explain-data :twitter/config config))))))
