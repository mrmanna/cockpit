/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.tagitem;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
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
import io.cloudoffice.platform.cockpit.api.ServerCallback;
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

/**
 *
 * @author toslim
 */
@Model(className = "TagItemView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = TagItemConfiguration.class),
    @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    
    @Property(name = "selectedItemId", type = String.class),
    @Property(name = "selectedItemName", type = String.class),
    @Property(name = "selectedItemType", type = String.class),
    @Property(name = "visible", type = boolean.class),
    @Property(name = "tagItemList", type = ListItemView.class, array = true),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    
    @Property(name = "newTagDisplayName", type = String.class),
    @Property(name = "inputBoxText", type = String.class),
    @Property(name = "showItemList", type = boolean.class),
    @Property(name = "itemList", type = ListItemView.class, array = true),
    @Property(name = "itemListLoader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class)
})

public class TagItemComponent extends AbstractComponent<TagItemView> {

    public static Component getInstance(String instance) {
        return new TagItemComponent(instance);
    }

    public TagItemComponent(String instance) {
        super(instance);
    }
    
    @Override
    public void setComponentName() {
        this.componentName = "tagitem-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(TagItemView.class.getName());
        setDefaultConfigViewName(TagItemView.class.getName());
    }
    
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.TOOGLE_ITEM_ACTION, new ToogleTagItemListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new FunctionInvokeListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Function
    static void openConfig(TagItemView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(TagItemView view) {
        view.setDesignerMode(false);
    }
    
    @Function
    static void save(final TagItemView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("tagitem", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                resetConfiguration(view);
                closeConfigurationPanel(view);
            }
        });
    }
    
    @Function
    static void resetConfiguration(TagItemView view) {
        resetConfigurationModelFromJSON(view);
    }
    
    static void resetConfigurationModelFromJSON(final TagItemView view) {
        
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("tagitem", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                TagItemConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    setComponentDefinition(view, jsondata);
                }
            }
        });
    }
    
    private void prepareConfigurationModelFromJSON(TagItemView view, MapBuilder jsondata) {
        
        TagItemConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
            setComponentDefinition(view, jsondata);
        }
    }
    
    private static void setComponentDefinition(TagItemView view, MapBuilder jsondata) {
        TagItemConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        
        JSONObject searchBoxComponentDefinition = configurationJson.getJSONObject("searchBoxComponentDefinition");
        configuration.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
        configuration.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
        view.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
        view.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
    }
    
    @Function
    static void clearFilter(TagItemView view) {
        String componentName = view.getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "clearFilters");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    public static void toogleTagItem(TagItemView view) {
        defaultInitialData(view);
        if (view.isVisible()) {
            view.setVisible(false);
            //clearFilter(view);
        } else {
            view.setVisible(true);
        }
    }
    
    @Function
    public static void closeTagItem(TagItemView view) {
        view.setVisible(false);
    }
    
    @Function
    public static void processTagItem(TagItemView view, String data) {
        view.getTagItemList().clear();
        toogleTagItem(view);
        view.getLoader().setActive(true);
        MapBuilder builder = MapBuilder.query(data);
        view.setSelectedItemId(builder.getString("itemId"));
        view.setSelectedItemName(builder.getString("itemName"));
        view.setSelectedItemType(builder.getString("itemType"));
        processTagItemList(view);
    }
    
    @Function
    public static void processTagItemList(TagItemView view) {
        final String itemId = view.getSelectedItemId();
        final String itemType = view.getSelectedItemType();
        new AsyncRequest<TagItemView>(getTagItemList, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                Map<String, Object> query = new HashMap<String, Object>();
                List<Map<String, Object>> whereClause = new ArrayList<Map<String, Object>>();
                Map<String, Object> clause = new HashMap<String, Object>();
                clause.put("key", "[\"classPK\"]");
                clause.put("value", itemId);
                clause.put("itemType", itemType);
                clause.put("type", "VIRTUAL");
                clause.put("occur", "MUST");
                clause.put("like", false);
                whereClause.add(clause);
                
                List<String> fromClause = new ArrayList<String>();
                fromClause.add("TAG");
                
                query.put("pageNumber", 0);
                query.put("fromClause", fromClause);
                query.put("whereClause", whereClause);
                
                map.put("query", query);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                if (null != data) {
                    TagItemView view = (TagItemView) getRequest().getView();
                    view.getTagItemList().clear();
                    view.getLoader().setActive(false);
                    
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    for (Map<String, Object> result : results) {
                        String id = (String) (UtilValidate.isNotEmpty(result.get("itemId"))?result.get("itemId"):"");
                        if (!id.equals("-10")) {
                            ListItemView item = new ListItemView();
                            item.setItemId(id);
                            item.setItemName((String) result.get("itemName"));
                            item.setItemType((String) result.get("itemType"));
                            item.setHasReadPermission((boolean) result.get("hasReadPermission"));
                            item.setHasWritePermission((boolean) result.get("hasWritePermission"));
                            item.setHasAdminPermission((boolean) result.get("hasAdminPermission"));
                            item.setHasOwnerPermission((boolean) result.get("hasOwnerPermission"));
                            view.getTagItemList().add(item);
                        }
                    }
                }
            }
        });
    }
    public static final String getTagItemList = "\"/VirtualItem-portlet.searchitem/search\"";

    @OnPropertyChange("inputBoxText")
    public static void itemSearchAutocomplete(TagItemView view) {
        if (UtilValidate.isNotEmpty(view.getInputBoxText())) {
            view.setNewTagDisplayName("Create '"+view.getInputBoxText()+"'");
            view.getItemListLoader().setActive(true);
            view.setShowItemList(true);
            getItemList(view);
        } else {
            view.setShowItemList(false);
            view.getItemList().clear();
        }
    }
    
    @Function
    public static void getItemList(TagItemView view) {
        final String searchKey = view.getInputBoxText();
        final List<ListItemView> tagItems = view.getTagItemList();
        new AsyncRequest<TagItemView>(getItemList, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                List<Map<String, Object>> existingTags = new ArrayList<Map<String, Object>>();
                
                for (ListItemView tagItem : tagItems) {
                    Map<String, Object> existingTag = new HashMap<String, Object>();
                    existingTag.put("itemName", tagItem.getItemName());
                    existingTags.add(existingTag);
                }

                map.put("assetType", "1");
                map.put("searchKey", "'"+searchKey+"'");
                map.put("existingTags", existingTags);

                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                TagItemView view = (TagItemView) getRequest().getView();
                view.getItemList().clear();
                view.getItemListLoader().setActive(false);
                if (null != data) {
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    for (Map<String, Object> result : results) {
                        ListItemView item = new ListItemView();
                        item.setItemId((String) result.get("itemId"));
                        item.setItemName((String) result.get("itemName"));
                        item.setItemType((String) result.get("itemType"));
                        view.getItemList().add(item);
                    }
                }
            }
        });
    }
    public static final String getItemList = "\"/VirtualItem-portlet.searchitem/searchTagByKeywordAndType\"";
    
    @Function
    public static void createNewTag(TagItemView view) {
        ListItemView data = new ListItemView();
        data.setItemName(view.getInputBoxText());
        view.setInputBoxText("");
        view.getLoader().setActive(true);
        addTagItem(view, data);
    }
    
    @Function
    public static void selectItem(TagItemView view, ListItemView data) {
        view.setInputBoxText("");
        view.getLoader().setActive(true);
        addTagItem(view, data);
    }
    
    @Function
    public static void addTagItem(TagItemView view, ListItemView data) {
        final String selectedItemId = view.getSelectedItemId();
        final String selectedItemType = view.getSelectedItemType();
        final List<ListItemView> tagList = view.getTagItemList();
        final ListItemView tagItem = data;
        new AsyncRequest<TagItemView>(addTagItem, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                List<Map<String, Object>> editedTagList = new ArrayList<Map<String, Object>>();
                
                for (ListItemView tag : tagList) {
                    Map<String, Object> existTag = new HashMap<String, Object>();
                    existTag.put("id", UtilValidate.isNotEmpty(tag.getItemId())?tag.getItemId():"''");
                    existTag.put("name", tag.getItemName());
                    editedTagList.add(existTag);
                }
                
                Map<String, Object> tag = new HashMap<String, Object>();
                tag.put("id", UtilValidate.isNotEmpty(tagItem.getItemId())?tagItem.getItemId():"''");
                tag.put("name", tagItem.getItemName());
                editedTagList.add(tag);
                
                map.put("itemId", selectedItemId);
                map.put("itemType", selectedItemType);
                map.put("editedTagList", editedTagList);
                
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                if (UtilValidate.isNotEmpty(data)) {
                    TagItemView view = (TagItemView) getRequest().getView();
                    MapBuilder result = MapBuilder.query(data, true);
                    if (UtilValidate.isNotEmpty(result)) {
                        view.getTagItemList().add(tagItem);
                        view.getLoader().setActive(false);
                    }
                }
            }
        });
    }
    public static final String addTagItem = "\"/VirtualItem-portlet.searchitem/editItemTag\"";
    
    @Function
    public static void deleteTagItemFromList(TagItemView view, ListItemView data) {
        view.getLoader().setActive(true);
        deleteTagItem(view, data);
    }
    
    @Function
    public static void deleteTagItem(TagItemView view, ListItemView data) {
        final String selectedItemId = view.getSelectedItemId();
        final String selectedItemType = view.getSelectedItemType();
        final ListItemView tagToRemove = data;
        new AsyncRequest<TagItemView>(deleteTagItem, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                
                map.put("itemId", selectedItemId);
                map.put("itemType", selectedItemType);
                map.put("removeTag", tagToRemove.getItemName());
                
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                if (UtilValidate.isNotEmpty(data)) {
                    TagItemView view = (TagItemView) getRequest().getView();
                    MapBuilder result = MapBuilder.query(data, true);
                    if (UtilValidate.isNotEmpty(result)) {
                        view.getTagItemList().remove(tagToRemove);
                        view.getLoader().setActive(false);
                    }
                }
            }
        });
    }
    public static final String deleteTagItem = "\"/VirtualItem-portlet.searchitem/deleteItemTag\"";
    
    @Function
    public static void defaultInitialData(TagItemView view) {
        view.getLoader().setActive(false);
        view.setShowItemList(false);
        view.getItemListLoader().setActive(false);
        view.getItemList().clear();
        view.getTagItemList().clear();
        view.setInputBoxText("");
    }
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            VIEW.render(new String[]{"tagitem"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("tagitem", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    TagItemView view = new TagItemView();
                    view.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(view, jsondata);
                    defaultInitialData(view);
                    setView(view);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(view));
                }
            });
        }
    }
    
    public class DesignModeListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            Object data = signal.getPackets().get(0);
            if (null != data) {
                invoke(String.valueOf(data));
            }
        }
    }
    
    public class ToogleTagItemListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            toogleTagItem(signal);
        }

        void toogleTagItem(Signal signal) {
            MapBuilder data = (MapBuilder) signal.getPackets().get(0);
            if (UtilValidate.isNotEmpty(data)) {
                invoke("processTagItem", data);
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
    
    @Model(className = "ListItemView", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "hasOwnerPermission", type = boolean.class),
        @Property(name = "hasAdminPermission", type = boolean.class),
        @Property(name = "hasWritePermission", type = boolean.class),
        @Property(name = "hasReadPermission", type = boolean.class)
    })
    public class ListItemViewModel {
        
    }
    
    @Model(className = "TagItemConfiguration", targetId = "", properties = {
        @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class TagItemManager {

    }
}
