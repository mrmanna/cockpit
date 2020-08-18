/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.media;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
import io.cloudoffice.platform.cockpit.api.CallBack;
import io.cloudoffice.platform.cockpit.api.Component;
import io.cloudoffice.platform.cockpit.api.ComponentConfiguration;
import static io.cloudoffice.platform.cockpit.api.ComponentConfiguration.CONFIG;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.IconModel;
import io.cloudoffice.platform.cockpit.api.Logger;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.ServerCallback;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.api.UtilValidate;
import io.cloudoffice.platform.cockpit.js.VIEW;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.OnPropertyChange;
import net.java.html.json.Property;
import org.json.JSONObject;

@Model(className = "MediaView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = MediaConfiguration.class),
    @Property(name = "displaymediaitem", type = boolean.class),
    @Property(name = "mediaitem", type = MediaItemView.class),
})

public class MediaComponent extends AbstractComponent<MediaView> {

    public static final String RELATED_ITEM_AUTOCOMPLETE_ENDPOINT = "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"";
            
    public static Component getInstance(String instance) {
        return new MediaComponent(instance);
    }
    
    public MediaComponent(String instance) {
        super(instance);
    }
    
    @Override
    public void setComponentName() {
        this.componentName = "media-component";
    }
    
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new InvokeFunctionListener());
    }
    
    @Override
    public void onError(Error message, Source source) {
    }
    
    @Override
    public void bindViewNames() {
        setDefaultViewName(MediaView.class.getName());
        setDefaultConfigViewName(MediaConfiguration.class.getName());
    }
    
    @Function
    static void openConfig(MediaView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(MediaView view) {
        view.setDesignerMode(false);
        resetConfigurationModelFromJSON(view);
    }
    
    @Function
    static void save(final MediaView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("media", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                runtimeViewAdjustmentByConfiguration(view);
                closeConfigurationPanel(view);
            }
            
            private void runtimeViewAdjustmentByConfiguration(MediaView view){
                MediaConfiguration conf = view.getConfiguration();
                
                view.setDisplaymediaitem(conf.isDisplaymediaitem());
                
                List<MediaItemView> selectedItems = conf.getSelectedItems();
                // TODO : currently single item on list thats why get(0)
                if (!selectedItems.isEmpty()) {
                    MediaItemView selectedItem = selectedItems.get(0);
                    view.setMediaitem(selectedItem);
                } else {
                    view.setMediaitem(new MediaItemView());
                }
            }
        });
    }
    
    @Function
    static void resetConfiguration(MediaView view) {
        resetConfigurationModelFromJSON(view);
    }
    
    static void resetConfigurationModelFromJSON(final MediaView view) {
        
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("media", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                MediaConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    prepareFilters(configurationJson, configuration);
                    prepareSelectedMedia(configurationJson, configuration);
                }
            }
            
            private void prepareFilters(JSONObject configurationJson, MediaConfiguration configuration) {
                configuration.getFilters().clear();
                List<Object> list = configurationJson.getJSONArray("filters").toList();
                for (Object object : list) {
                    MapBuilder builder = MapBuilder.query((Map) object);
                    FilterView filter = new FilterView();
                    filter.setFilterName(builder.getString("filterName"));
                    filter.setFilterType(builder.getString("filterType"));
                    filter.setIsSelected(builder.getBoolean("isSelected"));
                    configuration.getFilters().add(filter);
                }
            }
            
            private void prepareSelectedMedia(JSONObject configurationJson, MediaConfiguration configuration) {
                configuration.getSelectedItems().clear();
                List<Object> list = configurationJson.getJSONArray("selectedItems").toList();
                for (Object object : list) {
                    MapBuilder builder = MapBuilder.query((Map) object);
                    MediaItemView selectedMedia = new MediaItemView();
                    selectedMedia.setItemId(builder.getString("itemId"));
                    selectedMedia.setItemName(builder.getString("itemName"));
                    selectedMedia.setItemType(builder.getString("itemType"));
                    selectedMedia.setItemTypeIconCss(builder.getString("itemTypeIconCss"));
                    selectedMedia.setItemUrl(builder.getString("itemUrl"));
                    selectedMedia.setHasOwnerPermission(builder.getBoolean("hasOwnerPermission"));
                    selectedMedia.setHasAdminPermission(builder.getBoolean("hasAdminPermission"));
                    selectedMedia.setHasWritePermission(builder.getBoolean("hasWritePermission"));
                    selectedMedia.setHasReadPermission(builder.getBoolean("hasReadPermission"));
                    configuration.getSelectedItems().add(selectedMedia);
                }
            }
            
        });
    }
    


    
    
    
    
    
    
    
    
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);

        }

        void loadComponents(Signal signal) {
            VIEW.render(new String[]{"media"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("media", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    MediaView media = new MediaView();
                    media.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(media, jsondata);
                    setView(media);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(media));
                }

                private void prepareConfigurationModelFromJSON(MediaView mediaView, MapBuilder jsondata) {

                    MediaConfiguration configuration = mediaView.getConfiguration();
                    JSONObject configurationJson = jsondata.getJsonObject("configuration");
                    if (UtilValidate.isNotEmpty(configurationJson)) {
                        mediaView.setDisplaymediaitem(configurationJson.getBoolean("displaymediaitem"));
                        configuration.setDisplaymediaitem(configurationJson.getBoolean("displaymediaitem"));
                        prepareFilters(configurationJson, configuration);
                        prepareSelectedMedia(configurationJson, mediaView, configuration);
                    }
                }
                
                private void prepareFilters(JSONObject configurationJson, MediaConfiguration configuration) {
                    List<Object> list = configurationJson.getJSONArray("filters").toList();
                    for (Object object : list) {
                        MapBuilder builder = MapBuilder.query((Map) object);
                        FilterView filter = new FilterView();
                        filter.setFilterName(builder.getString("filterName"));
                        filter.setFilterType(builder.getString("filterType"));
                        filter.setIsSelected(builder.getBoolean("isSelected"));
                        configuration.getFilters().add(filter);
                    }                    
                }
                
                private void prepareSelectedMedia(JSONObject configurationJson, MediaView mediaView, MediaConfiguration configuration) {
                    configuration.getSelectedItems().clear();
                    List<Object> list = configurationJson.getJSONArray("selectedItems").toList();
                    for (Object object : list) {
                        MapBuilder builder = MapBuilder.query((Map) object);
                        MediaItemView selectedMedia = new MediaItemView();
                        selectedMedia.setItemId(builder.getString("itemId"));
                        selectedMedia.setItemName(builder.getString("itemName"));
                        selectedMedia.setItemType(builder.getString("itemType"));
                        selectedMedia.setItemTypeIconCss(builder.getString("itemTypeIconCss"));
                        selectedMedia.setItemUrl(builder.getString("itemUrl"));
                        selectedMedia.setHasOwnerPermission(builder.getBoolean("hasOwnerPermission"));
                        selectedMedia.setHasAdminPermission(builder.getBoolean("hasAdminPermission"));
                        selectedMedia.setHasWritePermission(builder.getBoolean("hasWritePermission"));
                        selectedMedia.setHasReadPermission(builder.getBoolean("hasReadPermission"));
                        configuration.getSelectedItems().add(selectedMedia);
                        
                        mediaView.setMediaitem(selectedMedia);
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









    
    @Model(className = "MediaConfiguration", targetId = "", properties = {
        @Property(name = "displaymediaitem", type = boolean.class),
        @Property(name = "filters", type = FilterView.class, array = true),
        @Property(name = "autocompleteinputbox", type = String.class),
        @Property(name = "itemListLoader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
        @Property(name = "showItemList", type = boolean.class),
        @Property(name = "itemList", type = MediaItemView.class, array = true),
        @Property(name = "selectedItems", type = MediaItemView.class, array = true)
    })
    public static class MediaAdminManager {
        
        @OnPropertyChange("autocompleteinputbox")
        public static void itemSearchAutocomplete(MediaConfiguration view) {
            if (UtilValidate.isNotEmpty(view.getAutocompleteinputbox())) {
                view.getItemListLoader().setActive(true);
                view.setShowItemList(true);
                GetRelatedMediaAsyncRequest request = new GetRelatedMediaAsyncRequest(RELATED_ITEM_AUTOCOMPLETE_ENDPOINT, new GetRelatedMediaAsyncRequestCallback(), view);
                request.call();
            } else {
                view.setShowItemList(false);
                view.getItemList().clear();
            }
        }
        
        @Function
        public static void selectItem(MediaConfiguration view, MediaItemView data) {
            view.setAutocompleteinputbox("");
            view.getSelectedItems().clear();
            view.getSelectedItems().add(data);
        }
        
        @Function
        public static void removeItemFromSelectedList(MediaConfiguration view, MediaItemView data) {
            view.getSelectedItems().remove(data);
        }        
        
        public static class GetRelatedMediaAsyncRequest extends AsyncRequest {

            Map<String, Object> map = null;

            public GetRelatedMediaAsyncRequest(String invokeMethod, ServerCallback handler, MediaConfiguration view) {
                super(invokeMethod, handler, view);
                prepareRequestParams(view);
            }

            private void prepareRequestParams(MediaConfiguration view) {
                String searchKey = view.getAutocompleteinputbox();
                if (UtilValidate.isNotEmpty(searchKey)) {
                    this.map = new HashMap<>();
                    getMap().put("searchKey", "'" + searchKey + "'");
                    getMap().put("fromClause", getFilters(view));
                    getMap().put("existingItems", getExistingItems(view));
                    Map<String, Object> attributes = new HashMap<>();
                    attributes.put("scopeGroup", Session.getCompany().getValue("itemId"));
                    getMap().put("attributes", attributes);
                } else {
                    this.map = null;
                    view.setShowItemList(false);
                    view.getItemListLoader().setActive(false);
                    view.getItemList().clear();
                }
            }

            private List<String> getFilters(MediaConfiguration view) {
                List<String> filters = new ArrayList<>();
                for (FilterView filter : view.getFilters()) {
                    if (filter.isIsSelected()) {
                        if (filter.getFilterType().equalsIgnoreCase("IMAGE")) {
                            filters.add("FILE");
                        } else {
                            filters.add(filter.getFilterType());
                        }
                    }
                }
                return new ArrayList<>(new HashSet<>(filters));
            }
            private List<Map<String, Object>> getExistingItems(MediaConfiguration view) {
                List<Map<String, Object>> existingItems = new ArrayList<>();
                for (MediaItemView selectedItem : view.getSelectedItems()) {
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
        
        public static class GetRelatedMediaAsyncRequestCallback extends ServerCallback<List<Map<String, Object>>> {

            @Override
            public void process(String data) {
                MediaConfiguration view = (MediaConfiguration) getRequest().getView();
                view.getItemList().clear();
                if (UtilValidate.isNotEmpty(data)) {
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    for (Map<String, Object> result : results) {
                        addMediaByFilterSelection(result, view);
                    }
                }
                view.getItemListLoader().setActive(false);
            }
            
            private void addMediaByFilterSelection(Map<String, Object> media, MediaConfiguration view) {
                String mediatypestr = "";
                Object mediatypeobj = media.get("mimetype");
                if (UtilValidate.isNotEmpty(mediatypeobj)) {
                    MediaItemView item = new MediaItemView();
                    item.setItemId((String) media.get("itemId"));
                    item.setItemName((String) media.get("itemName"));
                    item.setItemType((String) media.get("itemType"));
                    item.setItemTypeIconCss(IconModel.getItemTypeIconClass((String) media.get("itemType"), (String) media.get("mimetype")));
                    item.setItemUrl((String) media.get("thumbnailURL"));
                    mediatypestr = mediatypeobj.toString();
                    if ((mediatypestr.equalsIgnoreCase("image/png")
                            || mediatypestr.equalsIgnoreCase("image/jpg")
                            || mediatypestr.equalsIgnoreCase("image/jpeg")) && isFilterSelected(view, "IMAGE")) {
                        view.getItemList().add(item);
                    } else if (mediatypestr.equalsIgnoreCase("application/pdf") && isFilterSelected(view, "FILE")) {
                        view.getItemList().add(item);
                    }
                }
            }
            
            private boolean isFilterSelected(MediaConfiguration view, String filtertype) {
                List<FilterView> filters = view.getFilters();
                for (FilterView filterView : filters) {
                    if (UtilValidate.isNotEmpty(filtertype)
                            && filtertype.equalsIgnoreCase(filterView.getFilterType())
                            && filterView.isIsSelected()) {
                        return true;
                    }
                }
                return false;
            }
        }
    }
    
    @Model(className = "MediaItemView", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "itemTypeIconCss", type = String.class),
        @Property(name = "itemUrl", type = String.class),
        @Property(name = "hasOwnerPermission", type = boolean.class),
        @Property(name = "hasAdminPermission", type = boolean.class),
        @Property(name = "hasWritePermission", type = boolean.class),
        @Property(name = "hasReadPermission", type = boolean.class)
    })
    public class MediaItemModel {
    }
    
    @Model(className = "FilterView", targetId = "", properties = {
        @Property(name = "filterName", type = String.class),
        @Property(name = "filterType", type = String.class),
        @Property(name = "isSelected", type = boolean.class)
    })
    public class FilterModel {
    }
}
