(defproject twitter-sdk "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.473"]
                 [org.clojure/core.async "0.2.395"]
                 [gracilius "0.1.0-SNAPSHOT"]
                 [http-arbiter "0.1.0-SNAPSHOT"]
                 [camel-snake-kebab "0.4.0"]]
  :profiles {:dev-node {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                       [org.clojure/tools.nrepl "0.2.12"]]
                        :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                        :source-paths ["src" "target/classes"]
                        :env {:runtime "node"}}
             :dev-browser {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                          [figwheel-sidecar "0.5.8"]
                                          [org.clojure/tools.nrepl "0.2.12"]]
                           :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                           :source-paths ["src" "target/classes"]
                           :env {:runtime "browser"}}}
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-npm "0.6.1"]
            [lein-environ "1.1.0"]]
  :npm {:dependencies [[source-map-support "0.4.0"]
                       [xhr2 "*"]]}
  :cljsbuild {:builds [{:id "dev-node"
                        :source-paths ["src"]
                        :compiler {:output-to "main.js"  ; default: target/cljsbuild-main.js
                                   :output-dir "out"
                                   :target :nodejs
                                   :source-map true
                                   :optimizations :none
                                   :cache-analysis true
                                   :pretty-print true}}
                       {:id "dev-browser"
                        :source-paths ["src"] ;;<--- note this isn't in source-paths above
                        :figwheel true
                        :compiler {:main twitter-sdk.core
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/twitter-sdk.js"
                                   :output-dir "resources/public/js/out"}}]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target")
