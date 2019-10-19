(ns mecca-paint.events
  (:require
   [re-frame.core :as re-frame]
   [mecca-paint.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
