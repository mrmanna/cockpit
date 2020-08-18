/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.text;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
import io.cloudoffice.platform.cockpit.api.Base64;
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
import io.cloudoffice.platform.cockpit.api.QueryMetaModel;
import io.cloudoffice.platform.cockpit.api.ServerCallback;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.api.UtilValidate;
import io.cloudoffice.platform.cockpit.js.VIEW;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.OnPropertyChange;
import net.java.html.json.Property;
import org.json.JSONObject;

@Model(className = "TextView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = TextConfiguration.class),
    @Property(name = "textItem", type = TextItemView.class),
    @Property(name = "viewMode", type = String.class),
    @Property(name = "fullViewEnabled", type = boolean.class),
    @Property(name = "visible", type = boolean.class),
    @Property(name = "displayTextItem", type = boolean.class),
    
    @Property(name = "itemId", type = String.class),
    @Property(name = "itemName", type = String.class),
    @Property(name = "itemText", type = String.class),
    @Property(name = "hasOwnerPermission", type = boolean.class),
    @Property(name = "hasAdminPermission", type = boolean.class),
    @Property(name = "hasWritePermission", type = boolean.class),
    @Property(name = "hasReadPermission", type = boolean.class)
})

public class TextComponent extends AbstractComponent<TextView> {

    public static Component getInstance(String instance) {
        return new TextComponent(instance);
    }
    
    public TextComponent(String instance) {
        super(instance);
    }
    
    @Override
    public void setComponentName() {
        this.componentName = "text-component";
    }
    
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new InvokeFunctionListener());
        attachListener(EventConstants.LOAD_ITEM_DETAIL, new LoadItemDetailListener());
    }
    
    @Override
    public void onError(Error message, Source source) {
    }
    
    @Override
    public void bindViewNames() {
        setDefaultViewName(TextView.class.getName());
        setDefaultConfigViewName(TextConfiguration.class.getName());
    }
    
    @Function
    static void openConfig(TextView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(TextView view) {
        view.setDesignerMode(false);
        resetConfigurationModelFromJSON(view);
    }
    
    @Function
    static void save(final TextView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("text", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                runtimeViewAdjustmentByConfiguration(view);
                closeConfigurationPanel(view);
            }
            
            private void runtimeViewAdjustmentByConfiguration(TextView view){
                TextConfiguration conf = view.getConfiguration();
                view.setDisplayTextItem(conf.isDisplayTextItem());
                List<TextItemView> selectedTextItems = conf.getSelectedTextItems();
                if (UtilValidate.isEmpty(selectedTextItems)) {
                    view.setTextItem(new TextItemView());
                } else {
                   view.setTextItem(selectedTextItems.get(0));
                }
            }
        });
    }
    
    @Function
    static void resetConfiguration(TextView view) {
        resetConfigurationModelFromJSON(view);
    }
    
    static void resetConfigurationModelFromJSON(final TextView view) {
        
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("text", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                TextConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    configuration.setDisplayTextItem(configurationJson.getBoolean("displayTextItem"));
                    configuration.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
                    prepareTalkToComponent(view.getConfiguration().getListComponentDefinition(), configurationJson.getJSONObject("listComponentDefinition"));
                    prepareTalkToComponent(view.getConfiguration().getActionMenuComponentDefinition(), configurationJson.getJSONObject("actionMenuComponentDefinition"));
                    prepareTalkToComponent(view.getConfiguration().getSearchBoxComponentDefinition(), configurationJson.getJSONObject("searchBoxComponentDefinition"));
                    prepareSelectedText(configurationJson, configuration);
                }
            }
            
            private void prepareTalkToComponent(ComponentDef confdef, JSONObject componentDefinition) {
                confdef.setInstanceId(componentDefinition.getString("instanceId"));
                confdef.setComponent(componentDefinition.getString("component"));
            }
            
            private void prepareSelectedText(JSONObject configurationJson, TextConfiguration configuration) {
                configuration.getSelectedTextItems().clear();
                List<Object> list = configurationJson.getJSONArray("selectedTextItems").toList();
                if (UtilValidate.isNotEmpty(list)) {
                    Object object = list.get(0);
                    MapBuilder builder = MapBuilder.query((Map) object);
                    TextItemView selectedText = new TextItemView();
                    selectedText.setItemId(builder.getString("itemId"));
                    selectedText.setItemName(builder.getString("itemName"));
                    selectedText.setItemType(builder.getString("itemType"));
                    selectedText.setItemText(builder.getString("itemText"));
                    selectedText.setItemUserId(builder.getString("itemUserId"));
                    selectedText.setHasOwnerPermission(builder.getBoolean("hasOwnerPermission"));
                    selectedText.setHasAdminPermission(builder.getBoolean("hasAdminPermission"));
                    selectedText.setHasWritePermission(builder.getBoolean("hasWritePermission"));
                    selectedText.setHasReadPermission(builder.getBoolean("hasReadPermission"));
                    configuration.getSelectedTextItems().add(selectedText);
                }
            }
        });
    }
    
    
    @Function
    static void enableFullView(TextView view) {
        view.setVisible(true);
        view.setFullViewEnabled(true);
        hideList(view);
        String width = "100";
        String layoutColumnId = view.getConfiguration().getLayoutColumnId();
        VIEW.invokeJSFunction("LayoutManager.toggleListDetailView(\""+layoutColumnId+"\",\""+width+"\");");
    }
    
    @Function
    static void enableSplitView(TextView view) {
        view.setVisible(true);
        view.setFullViewEnabled(false);
        showList(view);
        String width = "30";
        String layoutColumnId = view.getConfiguration().getLayoutColumnId();
        VIEW.invokeJSFunction("LayoutManager.toggleListDetailView(\""+layoutColumnId+"\",\""+width+"\");");
    }
    
    @Function
    static void backToList(TextView view) {
        enableFullView(view);
        view.setVisible(false);
        clearFilter(view);
        showList(view);
    }
    
    @Function
    static void hideList(TextView view) {
        String componentName = view.getConfiguration().getListComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getListComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "hideList");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void showList(TextView view) {
        String layoutColumnId = view.getConfiguration().getLayoutColumnId();
        String componentName = view.getConfiguration().getListComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getListComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "showList");
        Components.get(componentName, instanceId).listen(loadSignal);
        String width = "0";
        VIEW.invokeJSFunction("LayoutManager.toggleListDetailView(\""+layoutColumnId+"\",\""+width+"\");");
    }
    
    @Function
    static void clearFilter(TextView view) {
        String componentName = view.getConfiguration().getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "clearFilters");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void showActionMenu(TextView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getItemId())
                .addField("itemName", view.getItemName())
                .addField("itemType", QueryMetaModel.USER_DEFINE)
                .addField("maximumPermission", getMaximumPermission(view))
                .addField("businessModelName", "UDI_ARTICLE");
        
        String componentName = view.getConfiguration().getActionMenuComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getActionMenuComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.TOOGLE_ACTION_MENU, EventConstants.TOOGLE_ACTION_MENU, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    static String getMaximumPermission(TextView view) {
        if (view.isHasOwnerPermission()) {
            return QueryMetaModel.PERMISSION_OWNER;
        } else if (view.isHasAdminPermission()) {
            return QueryMetaModel.PERMISSION_ADMIN;
        } else if (view.isHasWritePermission()) {
            return QueryMetaModel.PERMISSION_WRITE;
        } else {
            return QueryMetaModel.PERMISSION_READ;
        }
    }

    static void addFilter(TextView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getItemId())
                .addField("itemName", view.getItemName())
                .addField("itemType", "ARTICLE");
        
        String componentName = view.getConfiguration().getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.ADD_FILTER, EventConstants.ADD_FILTER, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void enableCreateMode(TextView view) {
        view.setItemId("0");
        view.setItemName("Untitled");
        view.setItemText("");
        addFilter(view);
        enableFullView(view);
        view.setViewMode("editMode");
    }
    
    @Function
    static void createItem(TextView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        String title = builder.getString("titleText").trim();
        String description = builder.getString("descriptionText").trim();
        Logger.log("ID: "+view.getItemId());
        if (UtilValidate.isEmpty(view.getItemId()) || view.getItemId().equals("0")) {
            createArticleItem(view, title, description);
        } else {
            updateArticleItem(view, title, description);
        }
    }
    
    @Function
    public static void createArticleItem(TextView view, String title, String description) {
        new AsyncRequest<TextView>(createArticleUserDefineItemMethod, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                Map<String, Object> context = new HashMap<String, Object>();
		context.put("itemId", 0);
		context.put("title", "\"" +title+ "\"");
		context.put("description", "\"" +description+"\"");
		context.put("businessModelName", "\"UDI_ARTICLE\"");
		context.put("scopeGroupId", "\""+Session.getCompany().getString("itemId")+"\"");
		
                map.put("reqContext", "'" + Base64.encodeBase64(context.toString()) + "'");
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                TextView view = (TextView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder builder = MapBuilder.query(data);
                    view.setItemId(builder.getString("userDefineItemId"));
                    view.setItemName(builder.getString("title"));
                    setTextDetailData(builder.getString("description"));
                    addFilter(view);
                }
            }
        });
    }
    public static final String createArticleUserDefineItemMethod = "\"/VirtualItem-portlet.virtualuserdefineitem/createArticleUserDefineItem\"";
    
    @Function
    public static void updateArticleItem(TextView view, String title, String description) {
        new AsyncRequest<TextView>(updateArticleUserDefineItemMethod, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                Map<String, Object> context = new HashMap<String, Object>();
		context.put("itemId", Long.valueOf(view.getItemId()));
		context.put("title", "\"" +title+ "\"");
		context.put("description", "\"" +description+"\"");
		context.put("businessModelName", "\"UDI_ARTICLE\"");
		
                map.put("reqContext", "'" + Base64.encodeBase64(context.toString()) + "'");
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                TextView view = (TextView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder builder = MapBuilder.query(data);
                    view.setItemName(builder.getString("title"));
                    addFilter(view);
                }
            }
        });
    }
    public static final String updateArticleUserDefineItemMethod = "\"/VirtualItem-portlet.virtualuserdefineitem/updateUserDefineItem\"";
    
    @Function
    public static void processTextDetail(TextView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        view.setViewMode("editMode");
        enableFullView(view);
        final String itemId = builder.getString("itemId");
        new AsyncRequest<TextView>(textDetailMethod, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                Map<String, Object> context = new HashMap<String, Object>();
                context.put("itemId", itemId);
                map.put("context", context);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                TextView view = (TextView) getRequest().getView();
                String title = "";
                String description = "";
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder builder = MapBuilder.query(data);
                    List<Map<String, Object>> valueMap = builder.getList("valueMap");
                    for (Map<String, Object> map : valueMap) {
                        String propName = (String) map.get("propName");
                        String propValue = (String) map.get("propValue");
                        if (propName.equalsIgnoreCase("title")) {
                            title = propValue;
                        } else if (propName.equalsIgnoreCase("description")) {
                            description = propValue;
                        }
                    }
                    view.setItemId(builder.getString("itemId"));
                    setTextDetailData(description);
                }
            }
        });
    }
    public static final String textDetailMethod = "\"/VirtualItem-portlet.virtualuserdefineitem/getItemDetail\"";
    
    public static void setTextDetailData(String description) {
        VIEW.invokeJSFunction("TextManager.setDetailData(\""+description+"\");");
    }
    
    
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            VIEW.renderView("text", "text", "text");
            VIEW.renderView("text", "texteditview", "texteditview");
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("text", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    TextView text = new TextView();
                    text.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(text, jsondata);
                    text.setFullViewEnabled(true);
                    text.setViewMode("");
                    setView(text);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(text));
                }

                private void prepareConfigurationModelFromJSON(TextView textView, MapBuilder jsondata) {

                    TextConfiguration configuration = textView.getConfiguration();
                    JSONObject configurationJson = jsondata.getJsonObject("configuration");
                    if (UtilValidate.isNotEmpty(configurationJson)) {
                        textView.setDisplayTextItem(configurationJson.getBoolean("displayTextItem"));
                        configuration.setDisplayTextItem(configurationJson.getBoolean("displayTextItem"));
                        configuration.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
                        prepareTalkToComponent(textView, configurationJson);
                        prepareSelectedText(configurationJson, textView, configuration);
                    }
                }
                
                private void prepareTalkToComponent(TextView view, JSONObject configurationJson) {
                    configureDef(view.getConfiguration().getListComponentDefinition(), configurationJson.getJSONObject("listComponentDefinition"));
                    configureDef(view.getConfiguration().getActionMenuComponentDefinition(), configurationJson.getJSONObject("actionMenuComponentDefinition"));
                    configureDef(view.getConfiguration().getSearchBoxComponentDefinition(), configurationJson.getJSONObject("searchBoxComponentDefinition"));
                }
                
                private void configureDef(ComponentDef def, JSONObject defData) {
                    Logger.log(defData.getString("instanceId"));
                    Logger.log(defData.getString("component"));
                    
                    def.setInstanceId(defData.getString("instanceId"));
                    def.setComponent(defData.getString("component"));
                }
                
                private void prepareSelectedText(JSONObject configurationJson, TextView textView, TextConfiguration configuration) {
                    configuration.getSelectedTextItems().clear();
                    List<Object> list = configurationJson.getJSONArray("selectedTextItems").toList();
                    if (UtilValidate.isNotEmpty(list)) {
                        Object object = list.get(0);
                        MapBuilder builder = MapBuilder.query((Map) object);
                        TextItemView selectedText = new TextItemView();
                        selectedText.setItemId(builder.getString("itemId"));
                        selectedText.setItemName(builder.getString("itemName"));
                        selectedText.setItemType(builder.getString("itemType"));
                        selectedText.setItemText(builder.getString("itemText"));
                        selectedText.setItemUserId(builder.getString("itemUserId"));
                        selectedText.setHasOwnerPermission(builder.getBoolean("hasOwnerPermission"));
                        selectedText.setHasAdminPermission(builder.getBoolean("hasAdminPermission"));
                        selectedText.setHasWritePermission(builder.getBoolean("hasWritePermission"));
                        selectedText.setHasReadPermission(builder.getBoolean("hasReadPermission"));
                        configuration.getSelectedTextItems().add(selectedText);
                        textView.setTextItem(selectedText);
                    }
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

    private class InvokeFunctionListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            Object data = signal.getPackets().get(0);
            if (null != data) {
                invoke(String.valueOf(data));
            }
        }
    }

    public class LoadItemDetailListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            MapBuilder data = (MapBuilder) signal.getPackets().get(0);
            if (null != data) {
                invoke("processTextDetail", data.toJSON());
            }
        }
    }





    
    @Model(className = "TextItemView", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "itemUserId", type = String.class),
        @Property(name = "itemText", type = String.class),
        @Property(name = "hasOwnerPermission", type = boolean.class),
        @Property(name = "hasAdminPermission", type = boolean.class),
        @Property(name = "hasWritePermission", type = boolean.class),
        @Property(name = "hasReadPermission", type = boolean.class)
    })
    public class TextItemModel {
    }


    @Model(className = "TextConfiguration", targetId = "", properties = {
        @Property(name = "autocompleteinputbox", type = String.class),
        @Property(name = "itemListLoader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
        @Property(name = "showItemList", type = boolean.class),
        @Property(name = "itemList", type = TextItemView.class, array = true),
        @Property(name = "selectedTextItems", type = TextItemView.class, array = true),
        @Property(name = "displayTextItem", type = boolean.class),
        @Property(name = "layoutColumnId", type = String.class),
        @Property(name = "listComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "actionMenuComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class TextAdminManager {

        public static final String RELATED_ITEM_AUTOCOMPLETE_ENDPOINT = "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"";
        
        @OnPropertyChange("autocompleteinputbox")
        public static void itemSearchAutocomplete(TextConfiguration view) {
            if (UtilValidate.isNotEmpty(view.getAutocompleteinputbox())) {
                view.getItemListLoader().setActive(true);
                view.setShowItemList(true);
                GetRelatedTextAsyncRequest request = new GetRelatedTextAsyncRequest(RELATED_ITEM_AUTOCOMPLETE_ENDPOINT, new GetRelatedTextAsyncRequestCallback(), view);
                request.call();
            } else {
                view.setShowItemList(false);
                view.getItemList().clear();
            }
        }
        
        @Function
        public static void selectItem(TextConfiguration view, TextItemView data) {
            view.setAutocompleteinputbox("");
            view.getSelectedTextItems().clear();
            view.getSelectedTextItems().add(data);
        }
        
        @Function
        public static void removeItemFromSelectedList(TextConfiguration view, TextItemView data) {
            view.getSelectedTextItems().remove(data);
        }
        
        public static class GetRelatedTextAsyncRequest extends AsyncRequest {

            Map<String, Object> map = null;

            public GetRelatedTextAsyncRequest(String invokeMethod, ServerCallback handler, TextConfiguration view) {
                super(invokeMethod, handler, view);
                prepareRequestParams(view);
            }

            private void prepareRequestParams(TextConfiguration view) {
                String searchKey = view.getAutocompleteinputbox();
                if (UtilValidate.isNotEmpty(searchKey)) {
                    this.map = new HashMap<>();
                    getMap().put("searchKey", "'" + searchKey + "'");
                    getMap().put("fromClause", QueryMetaModel.USER_DEFINE);
                    getMap().put("existingItems", getExistingItems(view));
                    Map<String, Object> attributes = new HashMap<String, Object>();
                    attributes.put("scopeGroup", Session.getCompany().getString("itemId"));
                    attributes.put("businessModelName", "UDI_ARTICLE");
                    getMap().put("attributes", attributes);
                } else {
                    this.map = null;
                    view.setShowItemList(false);
                    view.getItemListLoader().setActive(false);
                    view.getItemList().clear();
                }
            }

            private List<Map<String, Object>> getExistingItems(TextConfiguration view) {
                List<Map<String, Object>> existingItems = new ArrayList<>();
                for (TextItemView selectedItem : view.getSelectedTextItems()) {
                    Map<String, Object> existingItem = new HashMap<>();
                    existingItem.put("itemId", selectedItem.getItemId());
                    existingItem.put("itemType", selectedItem.getItemType());
                    existingItems.add(existingItem);
                }
                return existingItems;
            }

            @Override
            public void preparePostData() {
                put(getEndpoint(), getMap());
            }

            @Override
            public boolean doValidate() {
                return null != getMap();
            }

            public Map<String, Object> getMap() {
                return map;
            }

            public void setMap(Map<String, Object> map) {
                this.map = map;
            }
        }
        
        public static class GetRelatedTextAsyncRequestCallback extends ServerCallback<List<Map<String, Object>>> {

            @Override
            public void process(String data) {
                TextConfiguration view = (TextConfiguration) getRequest().getView();
                view.getItemList().clear();
                if (UtilValidate.isNotEmpty(data)) {
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    for (Map<String, Object> result : results) {
                        TextItemView item = new TextItemView();
                        item.setItemId((String) result.get("itemId"));
                        item.setItemName(((String) result.get("itemName")).replaceAll("\\<.*?\\>", ""));
                        item.setItemType((String) result.get("itemType"));
                        item.setItemText((String) result.get("description"));
                        view.getItemList().add(item);
                    }
                }
                view.getItemListLoader().setActive(false);
            }
        }
    }
}
