(ns twitter-sdk.protocols)

(defprotocol Tweetable
  (get [_ path params])
  (post [_ path params]))
