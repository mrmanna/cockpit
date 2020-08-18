/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.togglemenu;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.CallBack;
import io.cloudoffice.platform.cockpit.api.Component;
import io.cloudoffice.platform.cockpit.api.ComponentConfiguration;
import static io.cloudoffice.platform.cockpit.api.ComponentConfiguration.CONFIG;
import io.cloudoffice.platform.cockpit.api.ComponentDef;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
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

@Model(className = "ToggleMenuView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = ToggleMenuConfiguration.class)
})
public class ToggleMenuComponent extends AbstractComponent<ToggleMenuView> {

    public static Component getInstance(String instance) {
        return new ToggleMenuComponent(instance);
    }

    public ToggleMenuComponent(String instance) {
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

    @Override
    public void setComponentName() {
        this.componentName = "togglemenu-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(ToggleMenuView.class.getName());
        setDefaultConfigViewName(ToggleMenuConfiguration.class.getName());
    }
    
    @Function
    static void openConfig(ToggleMenuView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(ToggleMenuView view) {
        view.setDesignerMode(false);
        resetConfigurationModelFromJSON(view);
    }
    
    @Function
    public static void toggle(ToggleMenuView view) {
        String componentName = view.getConfiguration().getTalkToComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getTalkToComponentDefinition().getInstanceId();
        
        String componentWidthMinimum = view.getConfiguration().getComponentWidthMinimum();
        String componentWidthMaximum = view.getConfiguration().getComponentWidthMaximum();
        MapBuilder data = MapBuilder.builder();
        data.addField("minwidth", componentWidthMinimum);
        data.addField("maxwidth", componentWidthMaximum);
        
        Signal loadSignal = new Event(EventConstants.TOGGLE, EventConstants.TOGGLE, data);
        Components.get(componentName, instanceId).listen(loadSignal);
    }

    @Function
    static void save(final ToggleMenuView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("togglemenu", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                closeConfigurationPanel(view);
            }
        });
    }

    @Function
    static void resetConfiguration(ToggleMenuView view) {
        resetConfigurationModelFromJSON(view);
    }

    static void resetConfigurationModelFromJSON(final ToggleMenuView view) {

        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("togglemenu", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                ToggleMenuConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    JSONObject talkToComponentDefinition = configurationJson.getJSONObject("talkToComponentDefinition");
                    String detailComponent = talkToComponentDefinition.getString("component");
                    String detailComponentInstanceId = talkToComponentDefinition.getString("instanceId");
                    ComponentDef def = new ComponentDef();
                    def.setComponent(detailComponent);
                    def.setInstanceId(detailComponentInstanceId);
                    configuration.setTalkToComponentDefinition(def);

                    configuration.setComponentWidthMinimum(configurationJson.getString("componentWidthMinimum"));
                    configuration.setComponentWidthMaximum(configurationJson.getString("componentWidthMaximum"));
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
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            VIEW.render(new String[]{"togglemenu"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("togglemenu", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);

                    ToggleMenuView view = new ToggleMenuView();
                    view.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(view, jsondata);
                    
                    setView(view);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(view));

                }
            });
        }
    }
    
        private void prepareConfigurationModelFromJSON(ToggleMenuView view, MapBuilder jsondata) {

        ToggleMenuConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
            JSONObject talkToComponentDefinition = configurationJson.getJSONObject("talkToComponentDefinition");
            String detailComponent = talkToComponentDefinition.getString("component");
            String detailComponentInstanceId = talkToComponentDefinition.getString("instanceId");
            ComponentDef def = new ComponentDef();
            def.setComponent(detailComponent);
            def.setInstanceId(detailComponentInstanceId);
            configuration.setTalkToComponentDefinition(def);
            configuration.setComponentWidthMinimum(configurationJson.getString("componentWidthMinimum"));
            configuration.setComponentWidthMaximum(configurationJson.getString("componentWidthMaximum"));
        }
    }

    @Model(className = "ToggleMenuConfiguration", targetId = "", properties = {
        @Property(name = "talkToComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "componentWidthMinimum", type = String.class),
        @Property(name = "componentWidthMaximum", type = String.class)
    })
    public static class ToggleMenuManager {

    }
}
