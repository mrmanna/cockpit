/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.boot;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.Application;
import io.cloudoffice.platform.cockpit.api.Component;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.ConnectionManager;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.HistoryTracker;
import io.cloudoffice.platform.cockpit.api.Logger;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.api.WSMessageHandler;
import io.cloudoffice.platform.cockpit.api.WebWSConnectionManager;
import io.cloudoffice.platform.cockpit.js.History;
import io.cloudoffice.platform.cockpit.js.JSUIUtils;
import io.cloudoffice.platform.cockpit.js.VIEW;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Map;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

@Model(className = "BootContext", targetId = "root", properties = {
    @Property(name = "view", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "messagebar", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "url", type = String.class)
})

public class BootComponent extends AbstractComponent<BootContext> {

    public BootComponent(BootContext context) {
        setView(context);
    }

    
    /**
     * Initialize
     */
    // public static Component defaultInstance = new BootComponent();
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.INDEX_VIEW_CHANGE, new IndexViewChangeListener());
        attachListener(EventConstants.BOOT, new BootListener());
        attachListener(EventConstants.WSCONNECT, new WSConnectionListener());
    }

    @Override
    public void onError(Error message, Source source) {
        getView().getMessagebar().setActive(true);
        getView().getMessagebar().setInfo(message.getException().getMessage());
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(BootContext.class.getName());
    }

    @Override
    public void setComponentName() {
    }

    private static class WSConnectionListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            if (signal.getAction().equalsIgnoreCase(EventConstants.WSCONNECT)) {
                if (Session.hasValidSession()) {
                    MapBuilder usermap = Session.getUser();
                    if (null == Application.getWsConnectionManager()) {
                        initWSConnection(JSUIUtils.getWsUrl(), usermap.getString("mqDestination"), usermap.getString("mqUserName"), usermap.getString("mqPassword"));
                    }
                }
            }
//            if (signal.getAction().equalsIgnoreCase(EventConstants.WSCONNECT_SUCCESS)) {
//                Map dataMap = MapBuilder.builder()
//                        .addField("filter", "All")
//                        .addField("requestViaLoadMoreMessege", false).get();
//                Components.RECENTSLIST.listen(new Event(EventConstants.LOAD_RECENT_DATA, EventConstants.LOAD_RECENT_DATA, dataMap));
//            }
        }

    }

    public class IndexViewChangeListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            Map packet = (Map) signal.getPackets().get(0);
            getView().getMessagebar().setActive(false);
            getView().getView().setName(packet.get("name").toString());
            getView().getView().setModel(packet.get("model").toString());
            if (Boolean.parseBoolean(packet.get("applyBindings").toString())) {
                Logger.log("BOOT APPLY BINDING DATA:" + getView().getView().getName());
                getView().applyBindings();
            }
        }

    }

    public class BootListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            //install history tracker
            if (Components.BOOT.getFlags().containsKey("start")) {
                HistoryTracker tracker = new HistoryTracker();
                Models.bind(tracker, Application.getBrowserContext());
                VIEW.bind(HistoryTracker.class.getName(), Models.toRaw(tracker));
                History.installTracker(HistoryTracker.class.getName(), "track");
                initLayoutComponent();
                Components.BOOT.getFlags().remove("start");
            }
            Session.HistoryManager.replace();
            if (signal.getAction().equalsIgnoreCase(EventConstants.REBOOT)) {
                VIEW.clear();
                VIEW.windowReload();
            } else /*if (Session.hasValidSession())*/ {
                String company = JSUIUtils.getCompany();
                String site = JSUIUtils.getSite();
                String layout = JSUIUtils.getLayout();
                MapBuilder data = MapBuilder.builder().addField("company", company)
                        .addField("site", site)
                        .addField("layout", layout);

                Logger.log("BOOTING:" + company);
                Components.LAYOUT.listen(new Event(EventConstants.LOGIN_SUCCESS, EventConstants.LOGIN_SUCCESS, data));
            } 
        }
    }
    
    private void initLayoutComponent() {
        try {
            Class clz = Class.forName("io.cloudoffice.platform.cockpit.layout.LayoutComponent");
            Method method = clz.getMethod("getDefaultInstance");
            Components.LAYOUT = (Component) method.invoke(null);
        } catch (ClassNotFoundException ex) {
            Logger.log(BootComponent.class.getName() + "::" + "initLayoutComponent::" + ex);
        } catch (IllegalAccessException ex) {
            Logger.log(BootComponent.class.getName() + "::" + "initLayoutComponent::" + ex);
        } catch (NoSuchMethodException ex) {
            Logger.log(BootComponent.class.getName() + "::" + "initLayoutComponent::" + ex);
        } catch (SecurityException ex) {
            Logger.log(BootComponent.class.getName() + "::" + "initLayoutComponent::" + ex);
        } catch (IllegalArgumentException ex) {
            Logger.log(BootComponent.class.getName() + "::" + "initLayoutComponent::" + ex);
        } catch (InvocationTargetException ex) {
            Logger.log(BootComponent.class.getName() + "::" + "initLayoutComponent::" + ex);
        }
    }


    public static void initWSConnection(String url, String mqDestination, String mqUserName, String mqPassword) {
        WSMessageHandler handler = new WSMessageHandler();
        ConnectionManager manager = null;
        if (Application.getApplicationContext().getDevice().equalsIgnoreCase(Application.WEB)) {
            manager = new WebWSConnectionManager(url, mqDestination, mqUserName, mqPassword, handler);
            Application.setWsConnectionManager(manager);
        } else {
//            manager = new TCPWSConnectionManager(url, mqDestination, mqUserName, mqPassword, handler);
//            Application.setWsConnectionManager(manager);
        }

        if (null != manager) {
            manager.connect();
        }
    }

}
