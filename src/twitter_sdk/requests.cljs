(ns twitter-sdk.requests
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [gracilius.core :refer [defprop]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defprop runtime :runtime "browser")

(def set-xhr (delay (when (= (runtime) "node")
                      (set! js/XMLHttpRequest (js/require "xhr2")))))

(def verb-fn
  {:get http/get
   :post http/post})

(defn request
  ([verb url params]
   @set-xhr
   ((get verb-fn verb http/get) url params))
  ([verb url]
   (request verb url {})))
