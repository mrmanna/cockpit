/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.actionmenu;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.CallBack;
import io.cloudoffice.platform.cockpit.api.Component;
import io.cloudoffice.platform.cockpit.api.ComponentConfiguration;
import static io.cloudoffice.platform.cockpit.api.ComponentConfiguration.CONFIG;
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

@Model(className = "ActionMenuView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = ActionMenuConfiguration.class),
    @Property(name = "viewType", type = String.class),
    @Property(name = "selectedItemId", type = String.class),
    @Property(name = "selectedItemName", type = String.class),
    @Property(name = "selectedItemType", type = String.class),
    @Property(name = "maximumPermission", type = String.class),
    @Property(name = "businessModelName", type = String.class),
    @Property(name = "visible", type = boolean.class),
    @Property(name = "isFromList", type = boolean.class),
    @Property(name = "detailComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "tagItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "shareItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "relatedItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
})
public class ActionMenuComponent extends AbstractComponent<ActionMenuView> {

    public static Component getInstance(String instance) {
        return new ActionMenuComponent(instance);
    }
    
    public ActionMenuComponent(String instance) {
        super(instance);
    }
    
    @Override
    public void setComponentName() {
        this.componentName = "actionmenu-component";
    }
    
    @Override
    public void bindViewNames() {
        setDefaultViewName(ActionMenuView.class.getName());
        setDefaultConfigViewName(ActionMenuConfiguration.class.getName());
    }
    
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.TOOGLE_ACTION_MENU, new ToogleActionMenuListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new FunctionInvokeListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Function
    static void openConfig(ActionMenuView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(ActionMenuView view) {
        view.setDesignerMode(false);
    }
    
    @Function
    static void save(final ActionMenuView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("actionmenu", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                resetConfiguration(view);
                closeConfigurationPanel(view);
            }
        });
    }
    
    @Function
    static void resetConfiguration(ActionMenuView view) {
        resetConfigurationModelFromJSON(view);
    }
    
    static void resetConfigurationModelFromJSON(final ActionMenuView view) {
        
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("actionmenu", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                ActionMenuConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    view.setViewType(configurationJson.getString("viewType"));
                    configuration.setViewType(configurationJson.getString("viewType"));
                    setComponentDefinition(view, jsondata);
                }
            }
        });
    }
    
    private void prepareConfigurationModelFromJSON(ActionMenuView view, MapBuilder jsondata) {
        
        ActionMenuConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
            view.setViewType(configurationJson.getString("viewType"));
            configuration.setViewType(configurationJson.getString("viewType"));
            setComponentDefinition(view, jsondata);
        }
    }

    private static void setComponentDefinition(ActionMenuView view, MapBuilder jsondata) {
        ActionMenuConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        
        JSONObject tagDefinition = configurationJson.getJSONObject("tagItemComponentDefinition");
        configuration.getTagItemComponentDefinition().setComponent(tagDefinition.getString("component"));
        configuration.getTagItemComponentDefinition().setInstanceId(tagDefinition.getString("instanceId"));
        view.getTagItemComponentDefinition().setComponent(tagDefinition.getString("component"));
        view.getTagItemComponentDefinition().setInstanceId(tagDefinition.getString("instanceId"));

        JSONObject shareDefinition = configurationJson.getJSONObject("shareItemComponentDefinition");
        configuration.getShareItemComponentDefinition().setComponent(shareDefinition.getString("component"));
        configuration.getShareItemComponentDefinition().setInstanceId(shareDefinition.getString("instanceId"));
        view.getShareItemComponentDefinition().setComponent(shareDefinition.getString("component"));
        view.getShareItemComponentDefinition().setInstanceId(shareDefinition.getString("instanceId"));

        JSONObject relatedDefinition = configurationJson.getJSONObject("relatedItemComponentDefinition");
        configuration.getRelatedItemComponentDefinition().setComponent(relatedDefinition.getString("component"));
        configuration.getRelatedItemComponentDefinition().setInstanceId(relatedDefinition.getString("instanceId"));
        view.getRelatedItemComponentDefinition().setComponent(relatedDefinition.getString("component"));
        view.getRelatedItemComponentDefinition().setInstanceId(relatedDefinition.getString("instanceId"));
        
        JSONObject searchBoxComponentDefinition = configurationJson.getJSONObject("searchBoxComponentDefinition");
        configuration.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
        configuration.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
        view.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
        view.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
    }
    
    @Function
    public static void showTagItem(ActionMenuView view) {
        addFilter(view);
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getSelectedItemId())
                .addField("itemName", view.getSelectedItemName())
                .addField("itemType", view.getSelectedItemType());
        
        String componentName = view.getTagItemComponentDefinition().getComponent();
        String instanceId = view.getTagItemComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.TOOGLE_ITEM_ACTION, EventConstants.TOOGLE_ITEM_ACTION, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
        if (view.getViewType().equalsIgnoreCase("dropdown")) {
            closeActionMenu(view);
        }
    }
    
    @Function
    public static void showShareItem(ActionMenuView view) {
        addFilter(view);
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getSelectedItemId())
                .addField("itemName", view.getSelectedItemName())
                .addField("itemType", view.getSelectedItemType())
                .addField("maximumPermission", view.getMaximumPermission());
        
        String componentName = view.getShareItemComponentDefinition().getComponent();
        String instanceId = view.getShareItemComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.TOOGLE_ITEM_ACTION, EventConstants.TOOGLE_ITEM_ACTION, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
        if (view.getViewType().equalsIgnoreCase("dropdown")) {
            closeActionMenu(view);
        }
    }
    
    @Function
    public static void showRelatedItem(ActionMenuView view) {
        addFilter(view);
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getSelectedItemId())
                .addField("itemName", view.getSelectedItemName())
                .addField("itemType", view.getSelectedItemType())
                .addField("businessModelName", view.getBusinessModelName());
        
        String componentName = view.getRelatedItemComponentDefinition().getComponent();
        String instanceId = view.getRelatedItemComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.TOOGLE_ITEM_ACTION, EventConstants.TOOGLE_ITEM_ACTION, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
        if (view.getViewType().equalsIgnoreCase("dropdown")) {
            closeActionMenu(view);
        }
    }
    
    @Function
    public static void showItemDetailView(ActionMenuView view) {
        closeActionMenu(view);
        addFilter(view);
        loadDetail(view);
    }
    
    @Function
    public static void loadDetail(ActionMenuView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getSelectedItemId())
                .addField("isSplitView", false)
                .addField("viewType", "editMode");
        
        String componentName = view.getDetailComponentDefinition().getComponent();
        String instanceId = view.getDetailComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.LOAD_ITEM_DETAIL, EventConstants.LOAD_ITEM_DETAIL, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }

    static void addFilter(ActionMenuView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getSelectedItemId())
                .addField("itemName", view.getSelectedItemName())
                .addField("itemType", view.getSelectedItemType());
        
        String componentName = view.getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.ADD_FILTER, EventConstants.ADD_FILTER, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    public static void showActionMenu(ActionMenuView view) {
        view.setVisible(!view.isVisible());
    }
    
    @Function
    public static void closeActionMenu(ActionMenuView view) {
        view.setVisible(false);
    }
    
    @Function
    public static void closeAllActionMenu(ActionMenuView view) {
        closeActionMenu(view);
        closeTagItem(view);
        closeShareItem(view);
        closeRelatedItem(view);
    }
    
    @Function
    static void closeTagItem(ActionMenuView view) {
        String componentName = view.getTagItemComponentDefinition().getComponent();
        String instanceId = view.getTagItemComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "closeTagItem");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void closeShareItem(ActionMenuView view) {
        String componentName = view.getShareItemComponentDefinition().getComponent();
        String instanceId = view.getShareItemComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "closeShareItem");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void closeRelatedItem(ActionMenuView view) {
        String componentName = view.getRelatedItemComponentDefinition().getComponent();
        String instanceId = view.getRelatedItemComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "closeRelatedItem");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    public static void processActionMenu(ActionMenuView view, String data) {
        showActionMenu(view);
        MapBuilder builder = MapBuilder.query(data);
        view.setSelectedItemId(builder.getString("itemId"));
        view.setSelectedItemName(builder.getString("itemName"));
        view.setSelectedItemType(builder.getString("itemType"));
        view.setMaximumPermission(builder.getString("maximumPermission"));
        view.setBusinessModelName(builder.getString("businessModelName"));
        view.getDetailComponentDefinition().setComponent(builder.getString("component"));
        view.getDetailComponentDefinition().setInstanceId(builder.getString("instanceId"));
        view.setIsFromList(builder.getBoolean("isFromList"));
    }
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            VIEW.render(new String[]{"actionmenu"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("actionmenu", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    ActionMenuView view = new ActionMenuView();
                    view.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(view, jsondata);
                    view.setVisible(false);
                    setView(view);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(view));
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
    
    public class ToogleActionMenuListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            toogleActionMenu(signal);
        }

        void toogleActionMenu(Signal signal) {
            MapBuilder data = null;
            if (!signal.getPackets().isEmpty()) {
                data = (MapBuilder) signal.getPackets().get(0);
                invoke("processActionMenu", data);
            }
        }
    }
    
    private class FunctionInvokeListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            Object data = signal.getPackets().get(0);
            if (null != data) {
                invoke(String.valueOf(data));
            }
        }
    }
    
    @Model(className = "ActionMenuConfiguration", targetId = "", properties = {
        @Property(name = "viewType", type = String.class),
        @Property(name = "tagItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "shareItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "relatedItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class ActionMenuManager {
    }
}
