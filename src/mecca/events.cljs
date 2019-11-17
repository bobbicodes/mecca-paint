(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:color "#f80000"
    :pixels []}))

(reg-event-db
 :select-color
 (fn [db [_ color]]
      (assoc db :color color)))

(reg-event-db
 :fill-cell
 (fn [db [_ x y color]]
   (update db :pixels conj [color [x y]])))