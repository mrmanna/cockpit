/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.searchbox;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
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
import io.cloudoffice.platform.cockpit.api.IconModel;
import io.cloudoffice.platform.cockpit.api.JSON2ObjectConvertor;
import io.cloudoffice.platform.cockpit.api.Logger;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.Query;
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
import net.java.html.json.ModelOperation;
import net.java.html.json.Models;
import net.java.html.json.OnPropertyChange;
import net.java.html.json.Property;
import org.json.JSONObject;

@Model(className = "SearchBoxView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "overlayautocompleteplaceholder", type = String.class),
    @Property(name = "autocompletetext", type = String.class),
    @Property(name = "autocompleteresults", type = AutocompleteResultData.class, array = true),
    @Property(name = "autocompletePlaceholderText", type = String.class),
    @Property(name = "hasItemFilter", type = boolean.class),
    @Property(name = "configuredFilters", type = FilterType.class, array = true),
    @Property(name = "filters", type = FilterType.class, array = true),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "filterOff", type = boolean.class),
    @Property(name = "filterTypeAdded", type = boolean.class),
    @Property(name = "relatedFilter", type = boolean.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = SearchBoxConfiguration.class),
    @Property(name = "enterPressed", type = boolean.class),
    @Property(name = "listComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "detailComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "actionMenuComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
})

public class SearchBoxComponent extends AbstractComponent<SearchBoxView> {

    //public static String SELECTED_FILTER = "";

    public static Component getInstance(String instance) {
        return new SearchBoxComponent(instance);
    }

    public SearchBoxComponent(String instance) {
        super(instance);
    }
    
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.FILTER_REQUEST, new FilterListener());
        attachListener(EventConstants.NEW_ITEM_FILTER_REQUEST, new NewItemFilterListener());
        attachListener(EventConstants.LOAD_INITIAL_DATA, new LoadInitialDataListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new FunctionInvokeListener());
        attachListener(EventConstants.ADD_FILTER, new AddFilterListener());
    }
    
    @Function
    public static void removeFilters(SearchBoxView view, FilterType data) {
        view.getFilters().clear();
        Session.removeSelectedItem();
        
        backtoList(view);
        loadList(view, "");
        closeAllActionMenu(view);
    }

    @Function
    public static void clearFilters(SearchBoxView view) {
        view.getFilters().clear();
    }
    
    @Function
    static void closeAllActionMenu(SearchBoxView view) {
        String componentName = view.getActionMenuComponentDefinition().getComponent();
        String instanceId = view.getActionMenuComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "closeAllActionMenu");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void backtoList(SearchBoxView view) {
        String componentName = view.getDetailComponentDefinition().getComponent();
        String instanceId = view.getDetailComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "backToList");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @OnPropertyChange(value = "enterPressed")
    static void enterKey(SearchBoxView view){
        if (view.isEnterPressed()) {
            addSearchFilter(view);
            loadList(view, view.getAutocompletetext());
            view.setFilterTypeAdded(false);
            resetAutocompletePanel(view);
            view.setEnterPressed(false);
        }
    }
    
    static void loadList(SearchBoxView view, String searchKey){
        List<String> filters = new ArrayList<String>();
        List<FilterType> filterList = view.getConfiguredFilters();
        for (FilterType filter : filterList) {
            filters.add(filter.getItemType());
        }
        
        MapBuilder builder = MapBuilder.builder()
                .addField("filters", filters)
                .addField("searchKey", searchKey);
        
        String componentName = view.getListComponentDefinition().getComponent();
        String instanceId = view.getListComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.LOAD_LIST, EventConstants.LOAD_LIST, builder);
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    static void addSearchFilter(SearchBoxView view) {
        view.getFilters().clear();
        FilterType item = new FilterType();
        item.setItemId("");
        item.setItemType(view.getConfiguredFilters().get(0).getItemType());
        item.setItemName(UtilValidate.isEmpty(view.getAutocompletetext())?"All":view.getAutocompletetext());
        view.getFilters().add(item);
    }
    
    @OnPropertyChange("autocompletetext")
    public static void autocompleteSearch(SearchBoxView view) {
       
        String searchText = view.getAutocompletetext();
        if (null != searchText && !searchText.isEmpty()) {
            view.getLoader().setActive(true);
            search(view);
        } else if (view.getAutocompleteresults().size() > 0) {
            view.getAutocompleteresults().clear();
        }
    }

    public static final String autoCompleteSearch = "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"";

    @Function
    public static void search(SearchBoxView data) {
        
        final SearchBoxView view = data;
        
        new AsyncRequest<SearchBoxView>(autoCompleteSearch, data) {
            @Override
            public void preparePostData() {
                // Selected workspace itemId
                MapBuilder company = Session.getCompany();
                String companyId = company.getString("itemId");

                // loggedInUser
//                MapBuilder user = Session.getUser();
//                String loggedInUserItemId = user.getValue("itemId");

                // build query
                Query q = new Query();
                boolean hasFilterApplied = view.isHasItemFilter();
                if (hasFilterApplied) {
                    List<FilterType> filters = view.getConfiguredFilters();
                    for (FilterType filter : filters) {
                        q.getFromClause().add(filter.getItemType());
                    }
                } else {
                    q.getFromClause().addAll(QueryMetaModel.VIRTUAL_ITEM_TYPES);
                }
                this.setQuery(q);

                // existing items
                List<Map<String, String>> existingItems = new ArrayList<Map<String, String>>();
                Map<String, Object> attributes = new HashMap<String, Object>();
                Map<String, Object> map = new HashMap<String, Object>();
                attributes.put("scopeGroup", companyId);
                if (this.getQuery().getFromClause().get(0).equalsIgnoreCase(QueryMetaModel.USER_DEFINE)) {
                    attributes.put("businessModelName", "UDI_ARTICLE");
                }
                map.put("searchKey", "'" + getView().getAutocompletetext() + "'");
                map.put("fromClause", this.getQuery().getFromClause());
                map.put("attributes", attributes);
                map.put("existingItems", existingItems);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, String>>>() {

            @Override
            public void process(String data) {
                SearchBoxView view = (SearchBoxView) getRequest().getView();
                if (null != data) {
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    // clear the previous results
                    view.getAutocompleteresults().clear();
                    // insert new result items
                    for (Map<String, Object> result : results) {
                        addItemToAutocompleteResultList(view, result);
                    }
                }
                view.getLoader().setActive(false);
            }
        });
    }

    @ModelOperation
    public static void addItemToAutocompleteResultList(SearchBoxView view, Map<String, Object> result) {
        AutocompleteResultData item = new JSON2ObjectConvertor<AutocompleteResultData>().getObject(MapBuilder.query(result).toJSON(), new AutocompleteResultData());
        String name = item.getItemName();
        item.setItemName(name.replaceAll("\\<.*?\\>", ""));
        Logger.log("MIME: "+item.getMimetype());
        item.setItemTypeIconClass(IconModel.getItemTypeIconClass(item.getItemType(), item.getMimetype()));
        item.setItemTypeIconColor(IconModel.getItemTypeIconColor(item.getItemType(), item.getMimetype()));
        view.getAutocompleteresults().add(item);
    }

    @Function
    static void resetAutocompletePanel(SearchBoxView view) {
        view.getAutocompleteresults().clear();
        view.setAutocompletetext("");
    }
    

    @Function
    static void setFilterFromAutoComplete(SearchBoxView view, AutocompleteResultData data) {
        invokeTypeFilterChange(view, data.toString());
        loadItemDetail(view, data);
        view.setFilterTypeAdded(false);
        resetAutocompletePanel(view);
    }

    @Function
    static void loadItemDetail(SearchBoxView view, AutocompleteResultData data) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", data.getItemId());
        
        String componentName = view.getDetailComponentDefinition().getComponent();
        String instanceId = view.getDetailComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.LOAD_ITEM_DETAIL, EventConstants.LOAD_ITEM_DETAIL, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void invokeTypeFilterChange(SearchBoxView view, String data) {
        addFilter(view, data);
    }

    @Function
    static void addFilter(SearchBoxView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        view.getFilters().clear();
        FilterType item = new FilterType();
        String itemId = builder.getString("itemId");
        if (UtilValidate.isNotEmpty(itemId)) {
            item.setItemId(builder.getString("itemId"));
            item.setItemType(builder.getString("itemType"));
            item.setItemName(builder.getString("itemName").replaceAll("\\<.*?\\>", ""));
            view.getFilters().add(item);
        }
    }

    @Override
    public void onError(Error message, Source source) {
    }

    @Override
    public void setComponentName() {
        this.componentName = "searchbox-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(SearchBoxView.class.getName());
        setDefaultConfigViewName(SearchBoxConfiguration.class.getName());
    }

    @Function
    static void invokeNewItemTypeFilterChange(SearchBoxView view, String data) {
        Event signal = new Event(EventConstants.NEW_ITEM_LOAD, EventConstants.NEW_ITEM_LOAD, data);
        Components.CENTERCOLUMNLAYOUT.listen(signal);
    }

    @Function
    static void openConfig(SearchBoxView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(SearchBoxView view) {
        view.setDesignerMode(false);
    }

    @Function
    static void save(final SearchBoxView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("searchbox", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                view.setHasItemFilter(view.getConfiguration().isHasItemFilter());
                view.getConfiguredFilters().clear();
                List<FilterType> filtersInConfiguration = view.getConfiguration().getFilters();
                for (FilterType filter : filtersInConfiguration) {
                    if (filter.isIsSelected()) {
                        view.getConfiguredFilters().add(filter);
                    }
                }
                closeConfigurationPanel(view);
                
                view.setAutocompletePlaceholderText("Type here...");
                if (view.getConfiguredFilters().size() > 0) {
                    String type = view.getConfiguredFilters().get(0).getItemType();
                    type = (type.equals(QueryMetaModel.PERSON)?"CONTACT":type);
                    type = (type.equals(QueryMetaModel.USER_DEFINE)?"ARTICLE":type);
                    view.setAutocompletePlaceholderText("Type for "+type+" here...");
                }
            }
        });
    }
    
    @Function
    static void resetConfiguration(SearchBoxView view) {
        resetConfigurationModelFromJSON(view);
    }
    
    static void resetConfigurationModelFromJSON(final SearchBoxView view) {

        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("searchbox", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                SearchBoxConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    // hasItemFilter
                    boolean hasItemFilter = configurationJson.getBoolean("hasItemFilter");
                    configuration.setHasItemFilter(hasItemFilter);
                    // clear configuration filter
                    if (!(configuration.getFilters().isEmpty())) {
                        configuration.getFilters().clear();
                    }
                    List<Object> filters = configurationJson.getJSONArray("filters").toList();
                    for (Object filtermap : filters) {
                        MapBuilder builder = MapBuilder.query((Map) filtermap);
                        FilterType filter = new FilterType();
                        filter.setItemId(builder.getString("itemId"));
                        filter.setItemType(builder.getString("itemType"));
                        filter.setItemName(builder.getString("itemName"));
                        filter.setFilterType(builder.getString("filterType"));
                        filter.setIsSelected(builder.getBoolean("isSelected"));
                        // add to configuration filter list
                        configuration.getFilters().add(filter);
                    }
                    
                    JSONObject listComponentDefinition = configurationJson.getJSONObject("listComponentDefinition");
                    String listComponent = listComponentDefinition.getString("component");
                    String listComponentInstanceId = listComponentDefinition.getString("instanceId");
                    ComponentDef def = new ComponentDef();
                    def.setComponent(listComponent);
                    def.setInstanceId(listComponentInstanceId);
                    configuration.setListComponentDefinition(def);
                    
                    JSONObject detailComponentDefinition = configurationJson.getJSONObject("detailComponentDefinition");
                    String detailComponent = detailComponentDefinition.getString("component");
                    String detailComponentInstanceId = detailComponentDefinition.getString("instanceId");
                    def = new ComponentDef();
                    def.setComponent(detailComponent);
                    def.setInstanceId(detailComponentInstanceId);
                    configuration.setDetailComponentDefinition(def);
                    
                    JSONObject actionMenuComponentDefinition = configurationJson.getJSONObject("actionMenuComponentDefinition");
                    String actionMenuComponent = actionMenuComponentDefinition.getString("component");
                    String actionMenuComponentInstanceId = actionMenuComponentDefinition.getString("instanceId");
                    def = new ComponentDef();
                    def.setComponent(actionMenuComponent);
                    def.setInstanceId(actionMenuComponentInstanceId);
                    configuration.setActionMenuComponentDefinition(def);
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
            VIEW.render(new String[]{"searchbox"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("searchbox", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    SearchBoxView searchbox = new SearchBoxView();
                    searchbox.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(searchbox, jsondata);
                    setView(searchbox);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(searchbox));
                }
                
                private void prepareConfigurationModelFromJSON(SearchBoxView searchbox, MapBuilder jsondata) {

                    SearchBoxConfiguration configuration = searchbox.getConfiguration();
                    JSONObject configurationJson = jsondata.getJsonObject("configuration");
                    if (UtilValidate.isNotEmpty(configurationJson)) {
                        // hasItemFilter
                        boolean hasItemFilter = configurationJson.getBoolean("hasItemFilter");
                        // view filter state
                        searchbox.setHasItemFilter(hasItemFilter);
                        // configuration filter state
                        configuration.setHasItemFilter(hasItemFilter);
                        // clear view filter list
                        if (!(searchbox.getConfiguredFilters().isEmpty())) {
                            searchbox.getConfiguredFilters().clear();
                        }
                        // clear configuration filter list
                        if (!(configuration.getFilters().isEmpty())) {
                            configuration.getFilters().clear();
                        }
                        List<Object> filters = configurationJson.getJSONArray("filters").toList();
                        for (Object filtermap : filters) {
                            MapBuilder builder = MapBuilder.query((Map) filtermap);
                            FilterType filter = new FilterType();
                            filter.setItemId(builder.getString("itemId"));
                            filter.setItemType(builder.getString("itemType"));
                            filter.setItemName(builder.getString("itemName"));
                            filter.setFilterType(builder.getString("filterType"));
                            boolean isFilterSelected = builder.getBoolean("isSelected");
                            filter.setIsSelected(isFilterSelected);
                            // add to view filter list
                            if (isFilterSelected) {
                                searchbox.getConfiguredFilters().add(filter);
                            }
                            // add to configuration filter list
                            configuration.getFilters().add(filter);
                        }

                        searchbox.setAutocompletePlaceholderText("Type here...");
                        if (searchbox.getConfiguredFilters().size() > 0) {
                            String type = searchbox.getConfiguredFilters().get(0).getItemType();
                            type = (type.equals(QueryMetaModel.PERSON) ? "CONTACT" : type);
                            type = (type.equals(QueryMetaModel.USER_DEFINE) ? "ARTICLE" : type);
                            searchbox.setAutocompletePlaceholderText("Type for " + type + " here...");
                        }

                        JSONObject listComponentDefinition = configurationJson.getJSONObject("listComponentDefinition");
                        String listComponent = listComponentDefinition.getString("component");
                        String listComponentInstanceId = listComponentDefinition.getString("instanceId");
                        ComponentDef def = new ComponentDef();
                        def.setComponent(listComponent);
                        def.setInstanceId(listComponentInstanceId);
                        searchbox.setListComponentDefinition(def);
                        configuration.setListComponentDefinition(def);

                        JSONObject detailComponentDefinition = configurationJson.getJSONObject("detailComponentDefinition");
                        String detailComponent = detailComponentDefinition.getString("component");
                        String detailComponentInstanceId = detailComponentDefinition.getString("instanceId");
                        def = new ComponentDef();
                        def.setComponent(detailComponent);
                        def.setInstanceId(detailComponentInstanceId);
                        searchbox.setDetailComponentDefinition(def);
                        configuration.setDetailComponentDefinition(def);

                        JSONObject actionMenuComponentDefinition = configurationJson.getJSONObject("actionMenuComponentDefinition");
                        String actionMenuComponent = actionMenuComponentDefinition.getString("component");
                        String actionMenuComponentInstanceId = actionMenuComponentDefinition.getString("instanceId");
                        def = new ComponentDef();
                        def.setComponent(actionMenuComponent);
                        def.setInstanceId(actionMenuComponentInstanceId);
                        searchbox.setActionMenuComponentDefinition(def);
                        configuration.setActionMenuComponentDefinition(def);
                    }
                }
                    
            });
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
    
    public class FilterListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            MapBuilder data = null;
            if (!signal.getPackets().isEmpty()) {
                data = (MapBuilder) signal.getPackets().get(0);
            }
            if (signal.getAction().equalsIgnoreCase(EventConstants.FILTER_DEFAULT)) {

                if (null != data) {
                    invoke("invokeTypeFilterChange", data.toJSON());
                }
            }

            if (signal.getAction().equalsIgnoreCase(EventConstants.FILTER_FROM_SESSION)) {
                MapBuilder selectedItem = Session.getSelectedItem();
                if (null != selectedItem && null != selectedItem.getString("itemId")) {
                    if (!selectedItem.getString("itemId").isEmpty()) {
                        invoke("invokeTypeFilterChange", selectedItem.toJSON());
                    }
                }
            }
            if (signal.getAction().equalsIgnoreCase(EventConstants.FILTER_CLEAN)) {
                if (null != data) {
                    invoke("removeFilters", data.toJSON());
                } else {
                    invoke("removeFilters");
                }
            }
        }
    }

    public class AddFilterListener implements EventListener {
        
        @Override
        public void onReceive(Signal signal) {
            MapBuilder data = (MapBuilder) signal.getPackets().get(0);
            if (null != data) {
                invoke("addFilter", data.toJSON());
            }
        }
    }

    public class NewItemFilterListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            MapBuilder data = null;
            if (!signal.getPackets().isEmpty()) {
                data = (MapBuilder) signal.getPackets().get(0);
            }
            if (null != data) {
                invoke("invokeNewItemTypeFilterChange", data.toJSON());
            }
        }
    }

    private class LoadInitialDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
           // listen(new Event(EventConstants.FILTER_FROM_SESSION, EventConstants.FILTER_REQUEST, null));
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

    @Model(className = "AutocompleteResultData", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemUserId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "businessModelName", type = String.class),
        @Property(name = "collectionType", type = String.class),
        @Property(name = "mimetype", type = String.class),
        @Property(name = "itemTypeIconClass", type = String.class),
        @Property(name = "itemTypeIconColor", type = String.class),
        @Property(name = "extendedItemType", type = String.class), // (used for permission)
        @Property(name = "sizeToDisplay", type = String.class),
        @Property(name = "extension", type = String.class),
        @Property(name = "createdBy", type = String.class),
        @Property(name = "modifiedTime", type = String.class),
        @Property(name = "version", type = String.class),
        @Property(name = "avatar", type = String.class),
        @Property(name = "createDateInMS", type = String.class),
        @Property(name = "actualModifieddDate", type = String.class),
        @Property(name = "isDynamicCollection", type = boolean.class),
        @Property(name = "hasMore", type = boolean.class),
        @Property(name = "nextPageNumber", type = String.class),
        @Property(name = "hasOwnerPermission", type = boolean.class),
        @Property(name = "hasAdminPermission", type = boolean.class),
        @Property(name = "hasWritePermission", type = boolean.class),
        @Property(name = "hasReadPermission", type = boolean.class),
        @Property(name = "hasSubjectPermission", type = boolean.class),
        @Property(name = "code", type = String.class),
        @Property(name = "message", type = String.class)
    })
    public class AutocompleteResultDataModel {

    }
    
    @Model(className = "SearchBoxConfiguration", targetId = "", properties = {
        @Property(name = "hasItemFilter", type = boolean.class),
        @Property(name = "configurationProgressLoader", type = boolean.class),
        @Property(name = "filters", type = FilterType.class, array = true),
        @Property(name = "listComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "detailComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "actionMenuComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class SearchBoxConfigurationModel {
    }
    
    @Model(className = "FilterType", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "filterType", type = String.class),
        @Property(name = "isSelected", type = boolean.class)
    })
    public static class FilterTypeManager {
    }

}
