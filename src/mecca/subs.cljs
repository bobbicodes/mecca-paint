(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :color
 (fn [db _]
   (:color db)))
