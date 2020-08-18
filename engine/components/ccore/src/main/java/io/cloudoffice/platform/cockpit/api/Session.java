/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.History;
import io.cloudoffice.platform.cockpit.js.JSUIUtils;
import io.cloudoffice.platform.cockpit.js.LocalStorage;
import io.cloudoffice.platform.cockpit.js.MomentJS;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

@Model(className = "SessionContext", targetId = "", properties = {
    @Property(name = "token", type = String.class),
    @Property(name = "createdTime", type = long.class),
    @Property(name = "items", type = SessionItem.class, array = true),
    @Property(name = "validSession", type = boolean.class)})
public class Session {

    private static SessionContext sessionContext = null;

    public static boolean hasValidSession() {
        SessionContext session = Session.getSession();
        if (null != session) {
            // session.getCreatedTime() - define a time restriction of session
            return (!session.getToken().isEmpty() && null != session.getToken());
        }
        return false;
    }

    public static void createSessionContext(String userName, String password) {
        if (null == sessionContext) {
            sessionContext = new SessionContext();
            sessionContext.setToken(JSUIUtils.getAuthToken(userName, password));
            sessionContext.setCreatedTime(MomentJS.getCurrentUnixTime());
            sessionContext.setValidSession(true);
            store();
        }
    }

    public static SessionContext getSession() {
        if (null == sessionContext) {
            if (null != LocalStorage.getBean("session")) {
                String data = LocalStorage.getBean("session");
                try {
                    InputStream input = new ByteArrayInputStream(data.getBytes());
                    //fake object to make availabe in context
                    new SessionContext();
                    sessionContext = Models.parse(Application.getBrowserContext(), SessionContext.class, input);
                } catch (Exception e) {
                    Application.notifyError(new Exception("Cannot Retrieve Seesion. Please Login Again!"), null);
                }
            }
        }
        return sessionContext;
    }

    public static void destroySession() {
        LocalStorage.remove("user");
        sessionContext = null;
    }

    public static void store() {
        LocalStorage.setBean("session", Session.getSession().toString());
    }

    public static void setCompany(Map<String, Object> company) {
        LocalStorage.setBean("company", MapBuilder.query(company).toJSON());
    }

    /**
     * {@link MapBuilder}
     *
     * @return
     */
    public static MapBuilder getCompany() {
        return MapBuilder.query(LocalStorage.getBean("company"));
    }

    public static void setSite(Map<String, Object> company) {
        if (Session.hasValidSession()) {
            Session.put("site", MapBuilder.query(company).toJSON());
        } else {
            Application.notifyError(new Exception("No Valid Session! Can not set Company!"), null);
        }
    }

    public static MapBuilder getSite() {
        if (Session.hasValidSession()) {
            String result = Session.get("site");
            if (null != result) {
                return MapBuilder.query(result);
            }
        }
        return null;
    }

    public static void setUser(String user) {
        LocalStorage.setBean("user", user);
    }

    /**
     * {@link MapBuilder}
     *
     * @return
     */
    public static MapBuilder getUser() {
        return MapBuilder.query(LocalStorage.getBean("user"));
    }

    public static void setSelectedItem(Map<String, Object> item) {
        if (Session.hasValidSession()) {
            Session.put("selectedItem", MapBuilder.query(item).toJSON());
        } else {
            Application.notifyError(new Exception("No Valid Session! Can not set Company!"), null);
        }
    }

    public static void removeSelectedItem() {
        if (Session.hasValidSession()) {
            remove("selectedItem");
        } else {
            Application.notifyError(new Exception("No Valid Session!"), null);
        }
    }

    /**
     * {@link MapBuilder}
     *
     * @return
     */
    public static MapBuilder getSelectedItem() {
        if (Session.hasValidSession()) {
            String result = Session.get("selectedItem");
            if (null != result) {
                return MapBuilder.query(result);
            }
        }
        return null;
    }

    /**
     * object.toString() method gives JSON string in HTML4J objects
     *
     * @param key
     * @param value
     */
    public static void put(String key, String value) {
        remove(key);
        Session.getSession().getItems().add(new SessionItem(key, value));
        store();
    }

    /**
     *
     * @param key
     * @return
     */
    public static String get(String key) {
        for (SessionItem item : getSession().getItems()) {
            if (item.getKey().equalsIgnoreCase(key)) {
                return item.getValue();
            }
        }
        return null;
    }

    public static void remove(String key) {
        SessionItem foundItem = null;
        for (SessionItem item : getSession().getItems()) {
            if (item.getKey().equalsIgnoreCase(key)) {
                foundItem = item;
            }
        }
        if (null != foundItem) {
            getSession().getItems().remove(foundItem);
            store();
        }

    }

    @Model(className = "SessionItem", targetId = "", properties = {
        @Property(name = "key", type = String.class),
        @Property(name = "value", type = String.class)})
    public class SessionItemModel {

    }

    @Model(className = "HistoryTracker", targetId = "", properties = {})
    public static class HistoryManager {



        @Function
        public static void track(HistoryTracker view, String data) {

                replace();
        }

        private static String removeSpace(String value) {
            return value.replace(" ", "").toLowerCase();
        }

        public static MapBuilder processHistory() {
            MapBuilder historyItem = MapBuilder.builder();
            if (!Session.hasValidSession()) {
                //History.update(JSUIUtils.getPath(), JSUIUtils.getPath());
            } else {
                MapBuilder companybuilder = Session.getCompany();
                if (null != companybuilder) {
                    historyItem.addField("company", companybuilder.get());
                }
                MapBuilder itembuilder = Session.getSelectedItem();
                if (null != itembuilder) {
                    historyItem.addField("item", itembuilder.get());
                }
                historyItem.addField("time", MomentJS.getCurrentUnixTime());

            }
            return historyItem;
        }

        public static String getPath() {
            StringBuilder path = new StringBuilder();
            path.append(JSUIUtils.getPath()).append("/");
            return path.toString();
        }
        public static void replace() {
          //  String data = processHistory().toJSON();
         //   Logger.log("HIstory Replaced:" + data);
            History.replace(getPath(), "");
        }

        static String selectedCompany() {
            MapBuilder company = Session.getCompany();
            if (null != company) {
                if (null != company.getString("itemName")) {
                    return removeSpace(company.getString("itemName"));
                }
            }
            return null;
        }

        static String selectedItemPath() {
            MapBuilder selectedItem = Session.getSelectedItem();
            if (null != selectedItem) {
                if (null != selectedItem.getString("itemId")) {
                    return removeSpace(selectedItem.getString("itemName"));
                }
            }
            return null;
        }
    }

}
