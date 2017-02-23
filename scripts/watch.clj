(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'twitter-sdk.core
   :output-to "out/twitter_sdk.js"
   :output-dir "out"})
