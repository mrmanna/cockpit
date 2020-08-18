/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.basic;

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
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;
import org.json.JSONObject;

@Model(className = "BasicView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = BasicConfiguration.class),
})
public class BasicComponent extends AbstractComponent<BasicView> {

    public static Component getInstance(String instance) {
        return new BasicComponent(instance);
    }

    public BasicComponent(String instance) {
        super(instance);
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new InvokeFunctionListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setComponentName() {
        this.componentName = "basic-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(BasicView.class.getName());
        setDefaultConfigViewName(BasicConfiguration.class.getName());
    }
    
    @Function
    static void openConfig(BasicView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(BasicView view) {
        view.setDesignerMode(false);
        resetConfigurationModelFromJSON(view);
    }
    
    @Function
    static void save(final BasicView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("basic", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                closeConfigurationPanel(view);
            }
        });
    }

    @Function
    static void resetConfiguration(BasicView view) {
        resetConfigurationModelFromJSON(view);
    }

    static void resetConfigurationModelFromJSON(final BasicView view) {

        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("basic", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                BasicConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                }
            }
        });
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
    
    private class InvokeFunctionListener implements EventListener {

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
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            VIEW.render(new String[]{"basic"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("basic", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    BasicView view = new BasicView();
                    view.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(view, jsondata);
                    setView(view);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(view));
                }
            });
        }
    }
    
    private void prepareConfigurationModelFromJSON(BasicView view, MapBuilder jsondata) {

        BasicConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
        }
    }

    @Model(className = "BasicConfiguration", targetId = "", properties = {
    })
    public static class BasicManager {

    }
}
