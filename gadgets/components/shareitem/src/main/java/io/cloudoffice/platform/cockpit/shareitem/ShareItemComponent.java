/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.shareitem;

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
import io.cloudoffice.platform.cockpit.api.QueryMetaModel;
import io.cloudoffice.platform.cockpit.api.SearchFieldConstants;
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

/**
 *
 * @author toslim
 */
@Model(className = "ShareItemView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = ShareItemConfiguration.class),
    @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    
    @Property(name = "selectedItemId", type = String.class),
    @Property(name = "selectedItemName", type = String.class),
    @Property(name = "selectedItemType", type = String.class),
    @Property(name = "visible", type = boolean.class),
    @Property(name = "shareItemList", type = ListItemView.class, array = true),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    
    @Property(name = "inputBoxText", type = String.class),
    @Property(name = "showItemList", type = boolean.class),
    @Property(name = "itemList", type = ListItemView.class, array = true),
    @Property(name = "itemListLoader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    
    @Property(name = "maximumPermission", type = String.class),
    @Property(name = "tempItemToShare", type = ListItemView.class)
})

public class ShareItemComponent extends AbstractComponent<ShareItemView> {

    public static Component getInstance(String instance) {
        return new ShareItemComponent(instance);
    }

    public ShareItemComponent(String instance) {
        super(instance);
    }
    
    @Override
    public void setComponentName() {
        this.componentName = "shareitem-component";
    }
    
    @Override
    public void bindViewNames() {
        setDefaultViewName(ShareItemView.class.getName());
        setDefaultConfigViewName(ShareItemView.class.getName());
    }
    
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.TOOGLE_ITEM_ACTION, new ToogleShareItemListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new FunctionInvokeListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Function
    static void openConfig(ShareItemView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(ShareItemView view) {
        view.setDesignerMode(false);
    }
    
    @Function
    static void save(final ShareItemView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("shareitem", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                resetConfiguration(view);
                closeConfigurationPanel(view);
            }
        });
    }
    
    @Function
    static void resetConfiguration(ShareItemView view) {
        resetConfigurationModelFromJSON(view);
    }
    
    static void resetConfigurationModelFromJSON(final ShareItemView view) {
        
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("shareitem", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                ShareItemConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    setComponentDefinition(view, jsondata);
                }
            }
        });
    }
    
    private void prepareConfigurationModelFromJSON(ShareItemView view, MapBuilder jsondata) {
        
        ShareItemConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
            setComponentDefinition(view, jsondata);
        }
    }

    private static void setComponentDefinition(ShareItemView view, MapBuilder jsondata) {
        ShareItemConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        
        JSONObject searchBoxComponentDefinition = configurationJson.getJSONObject("searchBoxComponentDefinition");
        configuration.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
        configuration.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
        view.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
        view.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
    }
    
    @Function
    static void clearFilter(ShareItemView view) {
        String componentName = view.getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "clearFilters");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    public static void toogleShareItem(ShareItemView view) {
        defaultInitialData(view);
        if (view.isVisible()) {
            view.setVisible(false);
            //clearFilter(view);
        } else {
            view.setVisible(true);
        }
    }
    
    @Function
    public static void closeShareItem(ShareItemView view) {
        view.setVisible(false);
    }
    
    @Function
    public static void processShareItem(ShareItemView view, String data) {
        view.getShareItemList().clear();
        toogleShareItem(view);
        view.getLoader().setActive(true);
        MapBuilder builder = MapBuilder.query(data);
        view.setSelectedItemId(builder.getString("itemId"));
        view.setSelectedItemName(builder.getString("itemName"));
        view.setSelectedItemType(builder.getString("itemType"));
        view.setMaximumPermission(builder.getString("maximumPermission"));
        processShareItemList(view);
    }
    
    @Function
    public static void processShareItemList(ShareItemView view) {
        final String itemId = view.getSelectedItemId();
        final String itemType = view.getSelectedItemType();
        new AsyncRequest<ShareItemView>(getShareItemList, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                map.put("selectedItemId", itemId);
                map.put("selectedItemType", itemType);
                
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
                    ShareItemView view = (ShareItemView) getRequest().getView();
                    view.getShareItemList().clear();
                    view.getLoader().setActive(false);
                    
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    for (Map<String, Object> result : results) {
                        int id = (int) result.get("id");
                        if (id != -1) {
                            String type = (String) result.get("type");
                            if (type.equalsIgnoreCase(QueryMetaModel.PERSON) || type.equalsIgnoreCase(QueryMetaModel.OWNER)) {
                                ListItemView item = new ListItemView();
                                item.setItemId(String.valueOf(id));
                                item.setItemName((String) result.get("name"));
                                item.setItemType(type);
                                item.setIsRemovable(true);
                                item.setHasReadPermission((boolean) result.get("hasReadPermission"));
                                item.setHasWritePermission((boolean) result.get("hasWritePermission"));
                                item.setHasAdminPermission((boolean) result.get("hasAdminPermission"));
                                item.setHasOwnerPermission((boolean) result.get("hasOwnerPermission"));
                                item.setSelectedPermission(ListItemViewModel.getMaximumPermission(item));
                                item.setSelectedPermissionColor(ListItemViewModel.getMaximumPermissionColor(item));
                                if (type.equalsIgnoreCase(QueryMetaModel.OWNER)) {
                                    item.setIsRemovable(false);
                                }
                                item.setShowPermissionMenu(false);
                                view.getShareItemList().add(item);
                            }
                        }
                    }
                }
            }
        });
    }
    public static final String getShareItemList = "\"/VirtualItem-portlet.searchitem/getShareList\"";

    @OnPropertyChange("inputBoxText")
    public static void itemSearchAutocomplete(ShareItemView view) {
        if (UtilValidate.isNotEmpty(view.getInputBoxText())) {
            view.getItemListLoader().setActive(true);
            view.setShowItemList(true);
            getItemList(view);
        } else {
            view.setShowItemList(false);
            view.getItemList().clear();
        }
    }
    
    @Function
    public static void getItemList(ShareItemView view) {
        final String searchKey = view.getInputBoxText();
        final List<ListItemView> shareItems = view.getShareItemList();
        new AsyncRequest<ShareItemView>(getItemList, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                List<Map<String, Object>> existingItems = new ArrayList<Map<String, Object>>();
                Map<String, Object> attributes = new HashMap<String, Object>();
                List<String> fromClause = new ArrayList<String>();
                
                fromClause.add(QueryMetaModel.PERSON);
                attributes.put("scopeGroup", Session.getCompany().getString("itemId"));
                attributes.put(SearchFieldConstants.ONLY_USER, SearchFieldConstants.ONLY_USER);
                
                for (ListItemView shareItem : shareItems) {
                    Map<String, Object> existingItem = new HashMap<String, Object>();
                    existingItem.put("itemId", shareItem.getItemId());
                    existingItem.put("itemType", QueryMetaModel.PERSON);
                    existingItems.add(existingItem);
                }

                map.put("searchKey", "'"+searchKey+"'");
                map.put("fromClause", fromClause);
                map.put("attributes", attributes);
                map.put("existingItems", existingItems);

                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                ShareItemView view = (ShareItemView) getRequest().getView();
                view.getItemList().clear();
                view.getItemListLoader().setActive(false);
                if (null != data) {
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    for (Map<String, Object> result : results) {
                        ListItemView item = new ListItemView();
                        item.setItemId((String) result.get("itemId"));
                        item.setItemName((String) result.get("itemName"));
                        item.setItemType((String) result.get("itemType"));
                        item.setHasReadPermission((boolean) result.get("hasReadPermission"));
                        item.setHasWritePermission((boolean) result.get("hasWritePermission"));
                        item.setHasAdminPermission((boolean) result.get("hasAdminPermission"));
                        item.setHasOwnerPermission((boolean) result.get("hasOwnerPermission"));
                        view.getItemList().add(item);
                    }
                }
            }
        });
    }
    public static final String getItemList = "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"";
    
    @Function
    public static void selectItem(ShareItemView view, ListItemView data) {
        view.setInputBoxText("");
        view.getLoader().setActive(true);
        data.setHasReadPermission(true);
        data.setHasWritePermission(false);
        data.setHasAdminPermission(false);
        data.setHasOwnerPermission(false);
        shareSingleItem(view, data);
    }
    
    @Function
    public static void shareSingleItem(ShareItemView view, ListItemView data) {
        final String selectedItemId = view.getSelectedItemId();
        final String selectedItemType = view.getSelectedItemType();
        final ListItemView itemToShare = data;
        new AsyncRequest<ShareItemView>(shareSingleItem, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                Map<String, Object> shareItem = new HashMap<String, Object>();
                shareItem.put("id", itemToShare.getItemId());
                shareItem.put("name", itemToShare.getItemName());
                shareItem.put("type", itemToShare.getItemType());
                shareItem.put("hasReadPermission", data.isHasReadPermission());
                shareItem.put("hasWritePermission", data.isHasWritePermission());
                shareItem.put("hasAdminPermission", data.isHasAdminPermission());
                shareItem.put("hasOwnerPermission", data.isHasOwnerPermission());
                shareItem.put("removeAble", true);
                
                map.put("selectedItemId", selectedItemId);
                map.put("selectedItemType", selectedItemType);
                map.put("shareItem", shareItem);
                
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
                    ShareItemView view = (ShareItemView) getRequest().getView();
                    MapBuilder result = MapBuilder.query(data);
                    if (UtilValidate.isNotEmpty(result)) {
                        if (UtilValidate.isNotEmpty(view.getTempItemToShare().getItemId())) {
                            view.getShareItemList().remove(view.getTempItemToShare());
                        }
                        ListItemView item = new ListItemView();
                        item.setItemId(result.getString("id"));
                        item.setItemName(result.getString("name"));
                        item.setItemType(result.getString("type"));
                        item.setHasReadPermission(result.getBoolean("hasReadPermission"));
                        item.setHasWritePermission(result.getBoolean("hasWritePermission"));
                        item.setHasAdminPermission(result.getBoolean("hasAdminPermission"));
                        item.setHasOwnerPermission(result.getBoolean("hasOwnerPermission"));
                        item.setIsRemovable(result.getBoolean("removeAble"));
                        item.setSelectedPermission(ListItemViewModel.getMaximumPermission(item));
                        item.setSelectedPermissionColor(ListItemViewModel.getMaximumPermissionColor(item));
                        view.getShareItemList().add(item);
                        view.getLoader().setActive(false);
                    }
                }
            }
        });
    }
    public static final String shareSingleItem = "\"/VirtualItem-portlet.searchitem/singleShareItem\"";
    
    @Function
    public static void removeShareItemFromList(ShareItemView view, ListItemView data) {
        view.getLoader().setActive(true);
        removeShareItem(view, data);
    }
    
    @Function
    public static void removeShareItem(ShareItemView view, ListItemView data) {
        final String selectedItemId = view.getSelectedItemId();
        final String selectedItemType = view.getSelectedItemType();
        final ListItemView itemToRemove = data;
        new AsyncRequest<ShareItemView>(removeShareItem, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                Map<String, Object> shareItem = new HashMap<String, Object>();
                shareItem.put("id", itemToRemove.getItemId());
                shareItem.put("name", itemToRemove.getItemName());
                shareItem.put("type", itemToRemove.getItemType());
                shareItem.put("hasReadPermission", itemToRemove.isHasReadPermission());
                shareItem.put("hasWritePermission", itemToRemove.isHasWritePermission());
                shareItem.put("hasAdminPermission", itemToRemove.isHasAdminPermission());
                shareItem.put("hasOwnerPermission", itemToRemove.isHasOwnerPermission());
                shareItem.put("removeAble", itemToRemove.isIsRemovable());
                
                map.put("selectedItemId", selectedItemId);
                map.put("selectedItemType", selectedItemType);
                map.put("shareItem", shareItem);
                
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
                    ShareItemView view = (ShareItemView) getRequest().getView();
                    MapBuilder result = MapBuilder.query(data);
                    if (UtilValidate.isNotEmpty(result)) {
                        view.getShareItemList().remove(itemToRemove);
                        view.getLoader().setActive(false);
                    }
                }
            }
        });
    }
    public static final String removeShareItem = "\"/VirtualItem-portlet.searchitem/removeShareItem\"";
    
    @Function
    public static void showPermissionMenu(ShareItemView view, ListItemView data) {
        data.setShowPermissionMenu(true);
        view.setTempItemToShare(data);
    }
    
    @Function
    public static void closePermissionMenu(ShareItemView view, ListItemView data) {
        data.setShowPermissionMenu(false);
    }
    
    @Function
    public static void changePermission(ShareItemView view, String data) {
        view.setInputBoxText("");
        view.getLoader().setActive(true);
        
        view.getTempItemToShare().setHasReadPermission(true);
        view.getTempItemToShare().setHasOwnerPermission(false);
        if (data.equalsIgnoreCase(QueryMetaModel.PERMISSION_READ)) {
            view.getTempItemToShare().setHasWritePermission(false);
            view.getTempItemToShare().setHasAdminPermission(false);
        } else if (data.equalsIgnoreCase(QueryMetaModel.PERMISSION_WRITE)) {
            view.getTempItemToShare().setHasWritePermission(true);
            view.getTempItemToShare().setHasAdminPermission(false);
        } else if (data.equalsIgnoreCase(QueryMetaModel.PERMISSION_ADMIN)) {
            view.getTempItemToShare().setHasWritePermission(true);
            view.getTempItemToShare().setHasAdminPermission(true);
        }
        
        shareSingleItem(view, view.getTempItemToShare());
    }
    
    @Function
    public static void defaultInitialData(ShareItemView view) {
        view.getLoader().setActive(false);
        view.setShowItemList(false);
        view.getItemListLoader().setActive(false);
        view.getItemList().clear();
        view.getShareItemList().clear();
        view.setInputBoxText("");
    }
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            VIEW.render(new String[]{"shareitem"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("shareitem", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    ShareItemView view = new ShareItemView();
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
    
    public class ToogleShareItemListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            toogleShareItem(signal);
        }

        void toogleShareItem(Signal signal) {
            MapBuilder data = (MapBuilder) signal.getPackets().get(0);
            if (UtilValidate.isNotEmpty(data)) {
                invoke("processShareItem", data);
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
        @Property(name = "hasReadPermission", type = boolean.class),
        @Property(name = "selectedPermission", type = String.class),
        @Property(name = "selectedPermissionColor", type = String.class),
        @Property(name = "isRemovable", type = boolean.class),
        @Property(name = "showPermissionMenu", type = boolean.class)
    })
    public static class ListItemViewModel {
        
        public static String getMaximumPermission(ListItemView view) {
            if (view.isHasOwnerPermission()) {
                return QueryMetaModel.PERMISSION_OWNER;
            } else if (view.isHasAdminPermission()) {
                return QueryMetaModel.PERMISSION_ADMIN;
            } else if (view.isHasWritePermission()) {
                return QueryMetaModel.PERMISSION_WRITE;
            } else if (view.isHasReadPermission()) {
                return QueryMetaModel.PERMISSION_READ;
            } else {
                return QueryMetaModel.PERMISSION_NONE;
            }
        }
        
        public static String getMaximumPermissionColor(ListItemView view) {
            if (view.isHasOwnerPermission()) {
                return QueryMetaModel.PERMISSION_OWNER_COLOR;
            } else if (view.isHasAdminPermission()) {
                return QueryMetaModel.PERMISSION_ADMIN_COLOR;
            } else if (view.isHasWritePermission()) {
                return QueryMetaModel.PERMISSION_WRITE_COLOR;
            } else if (view.isHasReadPermission()) {
                return QueryMetaModel.PERMISSION_READ_COLOR;
            } else {
                return QueryMetaModel.PERMISSION_NONE_COLOR;
            }
        }
    }
    
    @Model(className = "ShareItemConfiguration", targetId = "", properties = {
        @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class ShareItemManager {

    }
}
