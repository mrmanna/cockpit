/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.adminmenu;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.CallBack;
import io.cloudoffice.platform.cockpit.api.Component;
import io.cloudoffice.platform.cockpit.api.ComponentConfiguration;
import static io.cloudoffice.platform.cockpit.api.ComponentConfiguration.CONFIG;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.Logger;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.api.UtilValidate;
import io.cloudoffice.platform.cockpit.js.VIEW;
import java.util.List;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;
import org.json.JSONObject;

@Model(className = "AdminMenuView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = AdminmenuConfiguration.class),
    @Property(name = "showApps", type = boolean.class),
    @Property(name = "apps", type = App.class, array=true)
})
public class AdminMenuComponent extends AbstractComponent<AdminMenuView> {

    public static Component getInstance(String instance) {
        return new AdminMenuComponent(instance);
    }

    public AdminMenuComponent(String instance) {
        super(instance);
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Function
    public static void toggleAdminMenu(AdminMenuView view) {
        view.setShowApps(!view.isShowApps());
    }

    @Override
    public void setComponentName() {
        this.componentName = "adminmenu-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(AdminMenuView.class.getName());
        setDefaultConfigViewName(AdminmenuConfiguration.class.getName());
    }
    
    @Function
    static void openConfig(AdminMenuView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(AdminMenuView view) {
        view.setDesignerMode(false);
    }

    @Function
    static void save(final AdminMenuView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("adminmenu", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                view.getApps().clear();
                List<App> filtersInConfiguration = view.getConfiguration().getApps();
                for (App app : filtersInConfiguration) {
                    if (app.isEnable()) {
                        view.getApps().add(app);
                    }
                }
                closeConfigurationPanel(view);
            }
        });
    }

    @Function
    static void resetConfiguration(AdminMenuView view) {
        resetConfigurationModelFromJSON(view);
    }

    static void resetConfigurationModelFromJSON(final AdminMenuView view) {

        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("adminmenu", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                AdminmenuConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    // clear configuration app list
                    if (!(configuration.getApps().isEmpty())) {
                        configuration.getApps().clear();
                    }

                    List<Object> apps = configurationJson.getJSONArray("apps").toList();
                    for (Object appmap : apps) {
                        MapBuilder builder = MapBuilder.query((Map) appmap);
                        App app = new App();
                        app.setAppsId(builder.getString("appsId"));
                        app.setAppsName(builder.getString("appsName"));
                        app.setAppsIcon(builder.getString("appsIcon"));
                        app.setAppsColor(builder.getString("appsColor"));
                        app.setAppsUrl(builder.getString("appsUrl"));
                        boolean isEnabled = builder.getBoolean("enable");
                        app.setEnable(isEnabled);
                        // add to configuration filter list
                        configuration.getApps().add(app);
                    }
                }
            }
        });
    }
    
    @Function
    static void openApplication(AdminMenuView view, App data) {
        VIEW.invokeJSFunction("AdminMenuManager.openApplication(\"" + data.getAppsUrl() + "\")");
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
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            //    JSUIUtils.console(signal.getFilter() + " : Received");
            loadComponents(signal);

        }

        void loadComponents(Signal signal) {
            VIEW.render(new String[]{"adminmenu"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("adminmenu", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);

                    AdminMenuView adminmenuview = new AdminMenuView();
                    adminmenuview.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(adminmenuview, jsondata);
                    
                    setView(adminmenuview);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(adminmenuview));

                }
            });
        }
    }
    
        private void prepareConfigurationModelFromJSON(AdminMenuView adminmenuview, MapBuilder jsondata) {

        AdminmenuConfiguration configuration = adminmenuview.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
            // clear view app list
            if (!(adminmenuview.getApps().isEmpty())) {
                adminmenuview.getApps().clear();
            }
            // clear configuration app list
            if (!(configuration.getApps().isEmpty())) {
                configuration.getApps().clear();
            }
            
            List<Object> apps = configurationJson.getJSONArray("apps").toList();
            for (Object appmap : apps) {
                MapBuilder builder = MapBuilder.query((Map) appmap);
                App app = new App();
                app.setAppsId(builder.getString("appsId"));
                app.setAppsName(builder.getString("appsName"));
                app.setAppsIcon(builder.getString("appsIcon"));
                app.setAppsColor(builder.getString("appsColor"));
                app.setAppsUrl(builder.getString("appsUrl"));
                boolean isEnabled = builder.getBoolean("enable");
                app.setEnable(isEnabled);
                // add to view filter list
                adminmenuview.getApps().add(app);
                // add to configuration filter list
                configuration.getApps().add(app);
            }
        }
    }

    @Model(className = "AdminmenuConfiguration", targetId = "", properties = {
        @Property(name = "configurationProgressLoader", type = boolean.class),
        @Property(name = "apps", type = App.class, array=true)
    })
    public static class AdminmenuManager {

    }
    
    @Model(className = "App", targetId = "", properties = {
        @Property(name = "appsId", type = String.class),
        @Property(name = "appsName", type = String.class),
        @Property(name = "appsIcon", type = String.class),
        @Property(name = "appsColor", type = String.class),
        @Property(name = "appsUrl", type = String.class),
        @Property(name = "enable", type = boolean.class),
    })
    public static class AppsModel {

    }
}
