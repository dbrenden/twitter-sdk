(ns twitter-sdk.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.spec :as s]
            [cljs.core.async :refer [<!]]
            [http-arbiter.core :as http]
            [twitter-sdk.oauth :as oauth]))

(defn request-oauth-token [config secrets]
  (let [url "https://api.twitter.com/oauth/request_token"
        method "POST"
        header-params (merge config {:oauth-callback "oob"})
        oauth-header (oauth/gen-oauth-header method url header-params {} secrets)]
    (http/post url {:headers {"Authorization" oauth-header}})))

(defn post-status
  []
  (let [url "https://api.twitter.com/1/statuses/update.json"
        method "POST"
        header-params {:oauth-consumer-key "xvz1evFS4wEEPTGEFPHBog"
                       :oauth-token "370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb"
                       :oauth-nonce "kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg"
                       :oauth-timestamp "1318622958"}
        body-params {:status "Hello Ladies + Gentlemen, a signed OAuth request!"
                     :include-entities true}
        secrets {:consumer-secret "kAcSOqF21Fu85e7zjz7ZN2U4ZRhfV3WpwPAoE3Z7kBw"
                 :oauth-token-secret "LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE"}]
    (println (oauth/gen-oauth-header method url header-params body-params secrets))))

(defn call-rot []
  (go (println (<! (request-oauth-token {:oauth-consumer-key "S3jQqAW78w9DRdQrLZ6gYjswC"}
                                        {:consumer-secret "pJjLoxKxTgWe6nrC3ePWNBjOwvIq7x7c5legpvmgaDSvKcsbu6"})))))

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
