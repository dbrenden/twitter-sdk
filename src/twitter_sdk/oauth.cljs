(ns twitter-sdk.oauth
  (:require [camel-snake-kebab.core :refer [->snake_case_string]]
            [goog.crypt :as c]
            [goog.crypt.base64 :as b64])
  (:import [goog.crypt Hmac Sha1]))

(defn rand-str
  [length]
  (clojure.string/join (take length (repeatedly #(rand-nth "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")))))

(defn percent-encode
  [string]
  (-> string
      js/encodeURIComponent
      (clojure.string/replace #"\+" "%20")
      (clojure.string/replace #"\*" "%2A")
      (clojure.string/replace #"%7E" "~")
      (clojure.string/replace #"!" "%21")))

(defn sign
  [signing-key base-string]
  (let [hmac (doto (Hmac. (Sha1.) (c/stringToByteArray signing-key))
               (.update base-string))]
    (b64/encodeByteArray (.digest hmac))))

(defn format-params
  [params]
  (reduce (fn [coll [k v]] (conj coll (str (->snake_case_string k) "=" (percent-encode v)))) [] params))

(defn format-header-params
  [params]
  (reduce (fn [coll [k v]] (conj coll (str (percent-encode (->snake_case_string k)) "=\"" (percent-encode v) "\""))) [] params))

(defn gen-signature
  [method url signing-key params]
  (let [base-string (->> params
                         format-params
                         sort
                         (#(do (doseq [x %] (println x))
                               %))
                         (clojure.string/join "&")
                         js/encodeURIComponent
                         (str (percent-encode url) "&")
                         (str method "&"))]
    (println base-string)
    (sign signing-key base-string)))

(defn gen-oauth-header
  [method url {:keys [oauth-nonce oauth-timestamp] :as header-params} body-params
   {:keys [consumer-secret oauth-token-secret] :as secrets}]
  (let [signing-key (str (percent-encode consumer-secret) "&"
                         (when oauth-token-secret
                           (percent-encode oauth-token-secret)))
        _ (println signing-key)
        header-params (cond-> header-params
                        (not oauth-nonce) (assoc :oauth-nonce (rand-str 30))
                        (not oauth-timestamp) (assoc :oauth-timestamp (-> (js/Date.)
                                                                          .getTime
                                                                          (/ 1000)
                                                                          long))
                        true (assoc :oauth-signature-method "HMAC-SHA1")
                        true (assoc :oauth-version "1.0"))
        sig-params (merge header-params body-params)
        signature (gen-signature method url signing-key sig-params)]
    (->> (assoc header-params :oauth-signature signature)
         format-header-params
         sort
         (clojure.string/join ", ")
         (str "OAuth "))))
