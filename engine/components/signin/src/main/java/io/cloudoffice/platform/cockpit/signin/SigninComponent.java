/**
 * ***********************************************************
 * Copyright (c) 2012-2016, EUSIA BD LTD. and/or its affiliates. All rights
 * reserved. EUSIA PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 * ************************************************************
 */
package io.cloudoffice.platform.cockpit.signin;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.Application;
import io.cloudoffice.platform.cockpit.api.CallBack;
import io.cloudoffice.platform.cockpit.api.Component;
import io.cloudoffice.platform.cockpit.api.ComponentConfiguration;
import static io.cloudoffice.platform.cockpit.api.ComponentConfiguration.CONFIG;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.captain.Captain;
import io.cloudoffice.platform.cockpit.api.connect.Connect;
import io.cloudoffice.platform.cockpit.js.JSUIUtils;
import io.cloudoffice.platform.cockpit.js.LocalStorage;
import io.cloudoffice.platform.cockpit.js.VIEW;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.OnPropertyChange;
import net.java.html.json.OnReceive;
import net.java.html.json.Property;

@Model(className = "SigninView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "username", type = String.class),
    @Property(name = "password", type = String.class),
    @Property(name = "signinLayout", type = String.class),
    @Property(name = "timeZone", type = String.class),
    @Property(name = "mqUserName", type = String.class),
    @Property(name = "mqPassword", type = String.class),
    @Property(name = "mqDestination", type = String.class),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "message", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "enterPressed", type = boolean.class)
})
public class SigninComponent extends AbstractComponent<SigninView> {

    /**
     * Initialize
     */
//    public static Component defaultInstance = new SigninComponent();
//
//    public static Component getDefaultInstance() {
//        return defaultInstance;
//    }
    public static Component getInstance(String instance) {
        return new SigninComponent(instance);
    }

    public SigninComponent(String instance) {
        super(instance);
    }

    @Override
    public void bindEventListeners() {
        this.attachListener(EventConstants.LOGIN_SUCCESS, new LoginLoadEventListener());
    }

    @OnPropertyChange(value = "enterPressed")
    static void enterKey(SigninView loginView) {

        if (loginView.isEnterPressed()) {
            SigninComponent.login(loginView);
        }
        loginView.setEnterPressed(false);
    }

    @Function
    public static void login(SigninView data) {
        Captain.plan().begin((duty) -> {
              String host=(Application.getApplicationContext().getDevice().equalsIgnoreCase(Application.DESKTOP))?JSUIUtils.getDHost():JSUIUtils.getHost();
            Connect.send("https://" + host + signinEndpoint, (connection) -> {
                String company = JSUIUtils.getCompany();
                String requestdata = MapBuilder.builder()
                        .addField("username", data.getUsername())
                        .addField("password", data.getPassword())
                        .addField("company", company).toJSON();
                connection.data(requestdata);
            }).receive((connection) -> {
                Session.setUser(connection.result());
                String layout = Session.getUser().getString("layout");
                String path = Session.getUser().getString("path");
                JSUIUtils.setLayout(layout);
                JSUIUtils.setPath(path);
                Components.BOOT.listen(new Event(EventConstants.BOOT, EventConstants.BOOT));
                duty.captain().deliverAndCloseAssignment();
            });
        }).then((duty)->{}).perform();
    }

    @OnReceive(method = "POST", url = "{url}", data = SigninView.class)
    public static void signin(SigninView view, String data) {
        // Logger.log("LOGIN DATA::" + data);
        Session.setUser(data);
        String layout = Session.getUser().getString("layout");
        String path = Session.getUser().getString("path");
        JSUIUtils.setLayout(layout);
        JSUIUtils.setPath(path);
        Session.destroySession();
        Components.BOOT.listen(new Event(EventConstants.BOOT, EventConstants.BOOT));
    }

    public static final String signinEndpoint = "/o/signin";

    @Override
    public void onError(io.cloudoffice.platform.cockpit.api.Error message, io.cloudoffice.platform.cockpit.api.Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setComponentName() {
        this.componentName = "signin-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(SigninView.class.getName());
        setDefaultConfigViewName(SigninAdmin.class.getName());
    }

    public class LoginLoadEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            prepareLoadLogin();
        }

        void prepareLoadLogin() {
            VIEW.render(new String[]{
                "signin"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("signin", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    SigninView signin = new SigninView();
                    signin.setInstance(jsondata.getString("instance"));
                    setView(signin);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(signin));
                }
            });
//            Map data = MapBuilder.builder()
//                    .addField("name", "signin-component")
//                    .addField("model", getView().getClass().getName())
//                    .addField("applyBindings", "true").get();
//            Event signal = new Event(EventConstants.INDEX_VIEW_CHANGE, EventConstants.INDEX_VIEW_CHANGE, data);
//            Components.BOOT.listen(signal);

        }

    }

    @Model(className = "SigninAdmin", targetId = "", properties = {
        @Property(name = "id", type = String.class)
    })
    public static class SigninAdminManager {

    }

}
