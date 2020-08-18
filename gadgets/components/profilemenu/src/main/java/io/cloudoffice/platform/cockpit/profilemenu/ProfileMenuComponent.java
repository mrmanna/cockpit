/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.profilemenu;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.CallBack;
import io.cloudoffice.platform.cockpit.api.Component;
import io.cloudoffice.platform.cockpit.api.ComponentConfiguration;
import static io.cloudoffice.platform.cockpit.api.ComponentConfiguration.CONFIG;
import io.cloudoffice.platform.cockpit.api.ComponentDef;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.api.UtilValidate;
import io.cloudoffice.platform.cockpit.api.captain.Captain;
import io.cloudoffice.platform.cockpit.api.captain.Duty;
import io.cloudoffice.platform.cockpit.api.connect.Connect;
import io.cloudoffice.platform.cockpit.js.JSUIUtils;
import io.cloudoffice.platform.cockpit.js.LocalStorage;
import io.cloudoffice.platform.cockpit.js.VIEW;
import java.util.HashMap;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.ModelOperation;
import net.java.html.json.Models;
import net.java.html.json.OnReceive;
import net.java.html.json.Property;
import org.json.JSONObject;

@Model(className = "ProfileMenuView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = ProfileMenuConfiguration.class),
    @Property(name = "showdrop", type = boolean.class),
    @Property(name = "inputField", type = String.class),
    @Property(name = "email", type = String.class),
    @Property(name = "potrait", type = String.class),
    @Property(name = "newVersionAvailable", type = boolean.class),
})
public class ProfileMenuComponent extends AbstractComponent<ProfileMenuView> {

    public static Component getInstance(String instance) {
        return new ProfileMenuComponent(instance);
    }

    public ProfileMenuComponent(String instance) {
        super(instance);
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.LOAD_INITIAL_DATA, new LoadInitialDataListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Function
    public static void toggle(ProfileMenuView view) {
        view.setShowdrop(!view.isShowdrop());
    }

    public static final String signoutEndpoint = "/o/signout";
    public static String INVALID_SESSION = "C0010001";

    @OnReceive(method = "POST", url = "{url}", data = String.class)
    public static void signoutServerCall(ProfileMenuView view, String data, Duty duty) {
        duty.captain().bag().put("result", MapBuilder.query(data));
        duty.asExpected((data != null && !data.isEmpty()));
    }

    @Function
    public static void logout(ProfileMenuView view) {
        Captain.plan().begin((duty) -> {
            duty.comment("DO SERVER CALL AND RECEIVE DATA");
            Connect.send("https://" + JSUIUtils.getHost() + signoutEndpoint, (connection) -> {
                connection.data(new HashMap());
            }).receive((connection) -> {
                duty.captain().bag().put("result", MapBuilder.query(connection.result()));
                duty.asExpected((connection.result() != null && !connection.result().isEmpty()));
            });
        }).whenUnexpected((duty) -> {
            duty.comment("WHEN SERVER CALL WENT UNEXPECTED");
            duty.captain().deliverAndCloseAssignment();
        }).then((duty) -> {
            duty.comment("CHECK SERVER SENT ERROR CODE");
            MapBuilder mapbuilder = (MapBuilder) duty.captain().bag().get("result");
            String error = mapbuilder.getString("error");
            duty.asExpected(null == error || error.isEmpty());
        }).whenUnexpected((duty) -> {
            duty.comment("WHEN SERVER SENT ERROR CODE");
            duty.captain().deliverAndCloseAssignment();
        }).then((duty) -> {
            duty.comment("SERVER SENT EXPECTED DATA");
            MapBuilder mapbuilder = (MapBuilder) duty.captain().bag().get("result");
            LocalStorage.remove("user");
            JSUIUtils.setPath(mapbuilder.getString("path"));
            JSUIUtils.setLayout(mapbuilder.getString("layout"));
            Components.BOOT.listen(new Event(EventConstants.BOOT, EventConstants.BOOT));           
        }).perform();
    }

    @Function
    public static void showMyProfile(ProfileMenuView view) {
        view.setShowdrop(false);
        setMyProfileAsSearchBoxFilter(view);
    }

    @ModelOperation
    public static void setMyProfileAsSearchBoxFilter(ProfileMenuView view) {

    }

    @Function
    public static void syncCache(ProfileMenuView view) {
        VIEW.invokeJSFunction("ProfileManager.syncCache()");
    }

    @Function
    public static void syncOfflineData(ProfileMenuView view) {
        // Components.WORKSPACE.listen(new Event(EventConstants.SYNC_OFFILINE_DATA));
    }

    @Function
    public static void enableDesignMode(ProfileMenuView view) {
        view.setShowdrop(false);
        Components.LAYOUT.listen(new Event(EventConstants.DESIGNER_MODE, EventConstants.DESIGNER_MODE, MapBuilder.builder().addField("on", true)));
    }

    @Override
    public void setComponentName() {
        this.componentName = "profilemenu-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(ProfileMenuView.class.getName());
    }

    @Function
    public static void processLoggedInUserInfo(ProfileMenuView view) {
        view.setEmail(Session.getUser().getString("emailAddress"));
        view.setInputField(Session.getUser().getString("fullName"));
        view.setPotrait(Session.getUser().getString("profileImage"));
    }

    public class LoadInitialDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            invoke("processLoggedInUserInfo");
        }
    }

    @Function
    static void openConfig(ProfileMenuView view) {
        view.setDesignerMode(true);
    }

    @Function
    static void closeConfigurationPanel(ProfileMenuView view) {
        view.setDesignerMode(false);
    }

    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);

        }

        void loadComponents(Signal signal) {
            VIEW.render(new String[]{"profilemenu"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("profilemenu", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    ProfileMenuView profilemenu = new ProfileMenuView();
                    profilemenu.setInstance(jsondata.getString("instance"));
                    loadConfiguration(profilemenu, jsondata);
                    setView(profilemenu);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(profilemenu));
                }

                private void loadConfiguration(ProfileMenuView profilemenuView, MapBuilder jsondata) {

                    JSONObject configurationJson = jsondata.getJsonObject("configuration");
                    if (UtilValidate.isNotEmpty(configurationJson)) {
                        plugComponents(profilemenuView, configurationJson);
                    }
                }

                private void plugComponents(ProfileMenuView view, JSONObject configurationJson) {
                    view.getConfiguration().setSigninComponentDefinition(componentDef(configurationJson.getJSONObject("signinComponentDefinition")));
                }

                private ComponentDef componentDef(JSONObject defData) {
                    //  Logger.log(defData.getString("instanceId"));
                    // Logger.log(defData.getString("component"));
                    ComponentDef com = new ComponentDef();
                    com.setInstanceId(defData.getString("instanceId"));
                    com.setComponent(defData.getString("component"));
                    return com;
                }
            });
        }
    }

    private class DesignModeListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            Object data = signal.getPackets().get(0);
            if (null != data) {
                invoke(String.valueOf(data));
            }
        }
    }

    @Model(className = "ProfileMenuConfiguration", targetId = "", properties = {
        @Property(name = "signinComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class ProfileMenuConfigurationModel {
    }

}
