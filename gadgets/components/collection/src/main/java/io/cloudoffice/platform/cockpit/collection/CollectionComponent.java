/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.collection;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
import io.cloudoffice.platform.cockpit.api.CallBack;
import io.cloudoffice.platform.cockpit.api.Clause;
import io.cloudoffice.platform.cockpit.api.ClauseGroup;
import io.cloudoffice.platform.cockpit.api.ClauseModel;
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
import io.cloudoffice.platform.cockpit.api.Query;
import io.cloudoffice.platform.cockpit.api.QueryMetaModel;
import io.cloudoffice.platform.cockpit.api.ServerCallback;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.api.UtilValidate;
import io.cloudoffice.platform.cockpit.js.JSUIUtils;
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

@Model(className = "CollectionView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = CollectionConfiguration.class),
    @Property(name = "layoutRowId", type = String.class),
    @Property(name = "listComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "relatedItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "newItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "menuOnExpandedMode", type = boolean.class),
    @Property(name = "collectionClass", type = String.class),
    @Property(name = "newCollectionName", type = String.class),
    @Property(name = "collectionItemList", type = ListItemView.class, array = true),
    @Property(name = "collectionListItemView", type = CollectionListItemView.class),
    @Property(name = "collectionhoveraction", type = boolean.class),
    @Property(name = "hoverModeCollectionCreate", type = boolean.class),
    @Property(name = "collectioncreatemode", type = boolean.class),
    @Property(name = "collectionInputBoxText", type = String.class),
    @Property(name = "collectionList", type = ListItemView.class, array = true),
    @Property(name = "collectionListType", type = String.class),
    @Property(name = "tempSelectedCollection", type = ListItemView.class),
    @Property(name = "tempSelectedCollectionList", type = ListItemView.class, array = true),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class)
    
})
public class CollectionComponent extends AbstractComponent<CollectionView> {

    public static final String CREATE_GROUP_RELATED_COLLECTION = "\"/VirtualItem-portlet.virtualcollectionitem/createGroupRelatedCollection\"";
    public static final String getItemList = "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"";
    public static final String getCollectionItems = "\"/VirtualItem-portlet.virtualcollectionitem/findAllCollectionItems\"";
    public static final String removeCollectionItem = "\"/VirtualItem-portlet.virtualcollectionitem/removeParentCollectionItems\"";
    public static final String saveRelatedItem = "\"/VirtualItem-portlet.searchitem/saveRelatedItems\"";
    public static final String saveRelatedItems = "\"/VirtualItem-portlet.searchitem/batchSaveRelatedItems\"";
    public static final String deleteRelatedItem = "\"/VirtualItem-portlet.searchitem/deleteRelatedItem\"";
    public static final String getRelatedItemList = "\"/VirtualItem-portlet.searchitem/search\"";
    
    public static Component getInstance(String instance) {
        return new CollectionComponent(instance);
    }

    public CollectionComponent(String instance) {
        super(instance);
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new FunctionInvokeListener());
        attachListener(EventConstants.HOVER, new CollectionHoverListener());
        attachListener(EventConstants.TOGGLE, new CollectionToggleListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(CollectionView.class.getName());
    }

    @Override
    public void setComponentName() {
        this.componentName = "collection-component";
    }

    @Function
    static void createNewItem(CollectionView view) {
        String componentName = view.getNewItemComponentDefinition().getComponent();
        String instanceId = view.getNewItemComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "enableCreateMode");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @OnPropertyChange("hoverModeCollectionCreate")
    public static void onChangehoverMode(CollectionView view) {
        view.setNewCollectionName("");
        view.setCollectionInputBoxText("");
        view.getCollectionList().clear();
    }
    
    @Function
    static void createNewCollection(CollectionView view) {
        if (UtilValidate.isEmpty(view.getNewCollectionName())) {
            JSUIUtils.alert("Enter Collection name");
        } else {
            createCollection(view);
        }
    }
    
    @Function
    public static void createCollection(CollectionView view) {
        final String collectionName = view.getNewCollectionName();
        new AsyncRequest<CollectionView>(CREATE_GROUP_RELATED_COLLECTION, view) {
            @Override
            public void preparePostData() {
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("collectionName", collectionName);
                map.put("collectionType", QueryMetaModel.COLLECTION_TYPE_GENERIC);
                map.put("scopeGroupId", Session.getCompany().getString("itemId"));
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return UtilValidate.isNotEmpty(collectionName);
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                CollectionView view = (CollectionView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    updateView(view); // update the viewmodel
                    updateConfiguration(view, data); // update configuration model
                    save(view); // save the configuration model
                }
            }
            
            private void updateView(CollectionView view) {
                view.setNewCollectionName("");
                view.setCollectionhoveraction(false);
                view.getCollectionListItemView().getExistingItemList().clear();
                Logger.log(("########## View updated."));
            }
            
            private void updateConfiguration(CollectionView view, String data){
                MapBuilder result = MapBuilder.query(data);
                String collectionId = result.getString("virtualCollectionItemId");
                ListItemView item = new ListItemView();
                item.setItemId(collectionId);
                item.setItemName(collectionName);
                item.setItemType(QueryMetaModel.COLLECTION);
                item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss(QueryMetaModel.COLLECTION));
                item.setItemShortName(ListItemViewModel.shortCollectionName(item));
                view.getConfiguration().getCollectionItemList().add(item);
                Logger.log(("########## Configuration updated."));
            }
        });
    }

    @Function
    public static void createCollectionWithSubCollection(CollectionView view) {
        Logger.log("view.getListComponentDefinition()>>");
        Logger.log("view.getListComponentDefinition()>>"+view.getListComponentDefinition().toString());
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "getSelectedListItems");
        Components.get(view.getListComponentDefinition().getComponent(), view.getListComponentDefinition().getInstanceId()).listen(loadSignal);
    }

    @Function
    public static void createCollectionWithSelectedItems(final CollectionView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        final List<Map<String, String>> selecteditems = builder.getList("selecteditems");
        final String collectionName = view.getNewCollectionName();
        new AsyncRequest<CollectionView>(CREATE_GROUP_RELATED_COLLECTION, view) {
            @Override
            public void preparePostData() {
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("collectionName", collectionName);
                map.put("collectionType", QueryMetaModel.COLLECTION_TYPE_GENERIC);
                map.put("scopeGroupId", Session.getCompany().getString("itemId"));
                map.put("childrens", selecteditems); // this items will also related with newly created collection
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return UtilValidate.isNotEmpty(collectionName);
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                CollectionView view = (CollectionView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    updateView(view); // update the viewmodel
                    updateConfiguration(view, data); // update configuration model
                    save(view); // save the configuration model
                }
            }
            
            private void updateView(CollectionView view) {
                view.setNewCollectionName("");
                view.setCollectionhoveraction(false);
                view.getCollectionListItemView().getExistingItemList().clear();
                Logger.log(("########## View updated."));
            }
            
            private void updateConfiguration(CollectionView view, String data){
                MapBuilder result = MapBuilder.query(data);
                String collectionId = result.getString("virtualCollectionItemId");
                ListItemView item = new ListItemView();
                item.setItemId(collectionId);
                item.setItemName(collectionName);
                item.setItemType(QueryMetaModel.COLLECTION);
                item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss(QueryMetaModel.COLLECTION));
                item.setItemShortName(ListItemViewModel.shortCollectionName(item));
                view.getConfiguration().getCollectionItemList().add(item);
                Logger.log(("########## Configuration updated."));
            }
        });
    }





    
    @OnPropertyChange("collectionInputBoxText")
    public static void itemSearchAutocomplete(CollectionView view) {
        if (UtilValidate.isNotEmpty(view.getCollectionInputBoxText())) {
            view.getLoader().setActive(true);
            getItemList(view);
        } else {
            view.getLoader().setActive(false);
            view.getCollectionList().clear();
        }
    }

    @Function
    public static void getItemList(CollectionView view) {
        final String searchKey = view.getCollectionInputBoxText();
        new AsyncRequest<CollectionView>(getItemList, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                List<Map<String, Object>> existingItems = new ArrayList<Map<String, Object>>();

                List<String> fromClause = new ArrayList<String>();
                fromClause.add("COLLECTION");

                Map<String, Object> attributes = new HashMap<String, Object>();
                attributes.put("scopeGroup", Session.getCompany().getString("itemId"));
                attributes.put("collectionType", QueryMetaModel.COLLECTION_TYPE_GENERIC);

                map.put("searchKey", "'" + searchKey + "'");
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
                CollectionView view = (CollectionView) getRequest().getView();
                view.getCollectionList().clear();
                if (UtilValidate.isNotEmpty(data)) {
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    for (Map<String, Object> result : results) {
                        ListItemView item = new ListItemView();
                        item.setItemId((String) result.get("itemId"));
                        item.setItemName((String) result.get("itemName"));
                        item.setItemType((String) result.get("itemType"));
                        item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss((String) result.get("itemType")));
                        view.getCollectionList().add(item);
                    }
                }
                view.getLoader().setActive(false);
            }
        });
    }

    @Function
    static void expandCollectionBar(CollectionView view) {
        if (!(view.isMenuOnExpandedMode())) {
            view.setCollectionClass("collection-full");
        }
    }

    @Function
    static void shrinkCollectionBar(CollectionView view) {
        if (!(view.isMenuOnExpandedMode())) {
            view.setCollectionClass("collection");
        }

    }
    
    @Function
    static void performToogle(CollectionView view, String data) {
        
        MapBuilder builder = MapBuilder.query(data);
        String minwidth = builder.getString("minwidth");
        String maxwidth = builder.getString("maxwidth");
        String layoutRowId = view.getLayoutRowId();
        
        if (UtilValidate.isEmpty(view.getCollectionClass()) || view.getCollectionClass().equals("collection-full")) {
            VIEW.invokeJSFunction("LayoutManager.togglecollection(\""+layoutRowId+"\",\""+minwidth+"\");");
            view.setMenuOnExpandedMode(false);
            view.setCollectionClass("collection");
        } else if (view.getCollectionClass().equals("collection")) {
            VIEW.invokeJSFunction("LayoutManager.togglecollection(\""+layoutRowId+"\",\""+maxwidth+"\");");
            view.setMenuOnExpandedMode(true);
            view.setCollectionClass("collection-full");
        }
    }
    
    @Function
    static void toogleCollectionBox(CollectionView view, ListItemView data) {
        view.getCollectionListItemView().setCollectionListType(view.getCollectionListType());
        view.getCollectionListItemView().getExistingItemList().clear();
        if (data.isOpenCollectionBox()) {
            data.setOpenCollectionBox(false);
            data.setIsActive(false);
            view.getCollectionListItemView().setSelectedCollectionId("");
            view.setCollectionInputBoxText("");
        } else {
            collapseAllAndActiveSelected(view, data);
            view.getCollectionListItemView().setSelectedCollectionId(data.getItemId());
            view.getCollectionListItemView().getLoader().setActive(true);
            getRelatedItems(view, data);
        }
    }
    
    @Function
    static void collapseAllCollections(CollectionView view) {
        // deselect all subcollections
        deselectAllSubCollections(view);

        // deselect all parent collections
        List<ListItemView> collectionList = view.getCollectionItemList();
        for (ListItemView item : collectionList) {
            item.setOpenCollectionBox(false);
            item.setIsActive(false);
        }
    }
    
    @Function
    static void collapseAllAndActiveSelected(CollectionView view, ListItemView data) {
        // deselect all subcollections
        deselectAllSubCollections(view);

        // deselect all parent collections without selected parent
        List<ListItemView> collectionList = view.getCollectionItemList();
        for (ListItemView item : collectionList) {
            String selectedId = data.getItemId();
            String itemId = item.getItemId();
            if (UtilValidate.isNotEmpty(selectedId) && UtilValidate.isNotEmpty(itemId) && selectedId.equalsIgnoreCase(itemId)) {
                item.setOpenCollectionBox(true);
                item.setIsActive(true);
            } else {
                item.setOpenCollectionBox(false);
                item.setIsActive(false);
            }
        }
    }
    
    @Function
    static void deselectAllSubCollections(CollectionView view) {
        List<ListItemView> subcollectionList = view.getCollectionListItemView().getExistingItemList();
        for (ListItemView subcol : subcollectionList) {
            subcol.setIsActive(false);
        }
    }
    
    @Function
    public static void getRelatedItems(CollectionView view, ListItemView data) {
        MapBuilder builder = MapBuilder.builder();
        builder.addField("itemId", data.getItemId());
        builder.addField("itemType", data.getItemType());

        List<String> relatedItemTypes = new ArrayList<>();
        String collectionListType = view.getCollectionListType();
        if (UtilValidate.isNotEmpty(collectionListType)) {
            if (collectionListType.equalsIgnoreCase(QueryMetaModel.COLLECTION)) {
                relatedItemTypes.add(collectionListType);
            } else if (collectionListType.equalsIgnoreCase(QueryMetaModel.ALL)) {
                relatedItemTypes.addAll(QueryMetaModel.COLLECTION_SEARCH_ITEM_TYPES);
            }
            builder.addField("relatedItemTypes", relatedItemTypes);

            GetRelatedItemsAsyncRequest request = new GetRelatedItemsAsyncRequest(getRelatedItemList, new GetRelatedItemsAsyncRequestCallback(), view, builder.toJSON());
            request.call();
        }
    }
    
    
    @Function
    static void save(final CollectionView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("collection",view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                runtimeViewAdjustmentByConfiguration(view);
                closeConfigurationPanel(view);
            }
            
            private void runtimeViewAdjustmentByConfiguration(CollectionView view){
                view.getCollectionItemList().clear();
                view.getCollectionItemList().addAll(view.getConfiguration().getCollectionItemList());
                view.setLayoutRowId(view.getConfiguration().getLayoutRowId());
                view.setCollectionListType(view.getConfiguration().getCollectionListType());
                collapseAllCollections(view);
                resetDef(view.getListComponentDefinition(), view.getConfiguration().getListComponentDefinition());
                resetDef(view.getRelatedItemComponentDefinition(), view.getConfiguration().getRelatedItemComponentDefinition());
                resetDef(view.getCollectionListItemView().getRelatedItemComponentDefinition(), view.getConfiguration().getRelatedItemComponentDefinition());
                resetDef(view.getNewItemComponentDefinition(), view.getConfiguration().getNewItemComponentDefinition());
            }
            
            private void resetDef(ComponentDef def, ComponentDef defFromConfiguration) {
                def.setInstanceId(defFromConfiguration.getInstanceId());
                def.setComponent(defFromConfiguration.getComponent());
            }
        });
    }
    
    @Function
    static void openConfig(CollectionView view) {
        view.setDesignerMode(true);
    }

    @Function
    static void closeConfigurationPanel(CollectionView view) {
        view.getConfiguration().setInputBoxText("");
        view.setDesignerMode(false);
    }

    @Function
    static void resetConfiguration(CollectionView view) {
        resetConfigurationModelFromJSON(view);
    }

    static void resetConfigurationModelFromJSON(final CollectionView view) {
        
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("collection", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                CollectionConfiguration configuration = view.getConfiguration();
                
                configuration.setCollectionListType(configurationJson.getString("collectionListType"));
                String layoutRowId = configurationJson.getString("layoutRowId");
                configuration.setLayoutRowId(layoutRowId);
                
                prepareTalkToComponent(view.getConfiguration().getListComponentDefinition(), configurationJson.getJSONObject("listComponentDefinition"));
                prepareTalkToComponent(view.getConfiguration().getRelatedItemComponentDefinition(), configurationJson.getJSONObject("relatedItemComponentDefinition"));
                prepareTalkToComponent(view.getConfiguration().getNewItemComponentDefinition(), configurationJson.getJSONObject("newItemComponentDefinition"));
                
                List<Object> list = configurationJson.getJSONArray("collectionItemList").toList();
                configuration.getCollectionItemList().clear();
                for (Object object : list) {
                    MapBuilder builder = MapBuilder.query((Map) object);
                    ListItemView item = new ListItemView();
                    item.setItemId(builder.getString("itemId"));
                    item.setItemName(builder.getString("itemName"));
                    item.setItemType(builder.getString("itemType"));
                    item.setItemShortName(ListItemViewModel.shortCollectionName(item));
                    configuration.getCollectionItemList().add(item);
                }
            }

            private void prepareTalkToComponent(ComponentDef confdef, JSONObject componentDefinition) {
                confdef.setInstanceId(componentDefinition.getString("instanceId"));
                confdef.setComponent(componentDefinition.getString("component"));
            }
        });
    }    
    
    @Function
    static void toggleHoverAction(CollectionView view){
        view.setCollectionhoveraction(!view.isCollectionhoveraction());
    }
    
    @Function
    static void openActionHover(CollectionView view){
        view.setCollectionhoveraction(true);
    }
    
    @Function
    static void openActionHoverWithCollectionCreateMode(CollectionView view) {
        view.setHoverModeCollectionCreate(true);
        view.setCollectionhoveraction(true);
        Logger.log(EventConstants.CREATE_NEW_COL_ACT);
    }

    @Function
    static void openActionHoverWithCollectionItemAddMode(CollectionView view) {
        view.setHoverModeCollectionCreate(false);
        view.setCollectioncreatemode(false);
        view.setCollectionhoveraction(true);
    }
    
    @Function
    static void closeActionHover(CollectionView view){
        view.setCollectionhoveraction(false);
    }
    
    @Function
    static void addItemsToCollection(CollectionView view, ListItemView data) {
        view.setTempSelectedCollection(data);
        view.getCollectionList().clear();
        view.setCollectionInputBoxText("");
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "getSelectedListItemsToCollection");
        Components.get(view.getListComponentDefinition().getComponent(), view.getListComponentDefinition().getInstanceId()).listen(loadSignal);
    }
    
    @Function
    static void makeRelationshipWithCollection(final CollectionView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        final List<Map<String, String>> selecteditems = builder.getList("selecteditems");
        MapBuilder reqParam = MapBuilder.builder();
        reqParam.addFieldMapList("items", selecteditems);
        reqParam.addField("relatedItemId", view.getTempSelectedCollection().getItemId());
        reqParam.addField("relatedItemType", view.getTempSelectedCollection().getItemType());
        
        BuildupBatchRelationshipAsyncRequest request = new BuildupBatchRelationshipAsyncRequest(saveRelatedItems, new BuildupBatchRelationshipAsyncRequestCallback(), view, reqParam.toJSON());
        request.call();
    }  

    
    @Function
    static void loadParentCollectionItemsToList(CollectionView view, ListItemView data) {
        
        view.getCollectionListItemView().setCollectionListType(view.getCollectionListType());
        view.getCollectionListItemView().getExistingItemList().clear();
        view.getCollectionListItemView().setSelectedCollectionId(data.getItemId());
        view.getCollectionListItemView().getLoader().setActive(true);
        collapseAllAndActiveSelected(view, data);
        
        // update header on result list
        Signal loadSignal = new Event(EventConstants.UPDATE_HEADER_ACTION, EventConstants.VIEW_CHANGE, MapBuilder.builder().addField("title", data.getItemName()));
        Components.get(view.getListComponentDefinition().getComponent(), view.getListComponentDefinition().getInstanceId()).listen(loadSignal);

        // keep parent collection on temp selection list
        view.getTempSelectedCollectionList().clear();
        view.getTempSelectedCollectionList().add(data);
        
        // call service to get child collections
        MapBuilder builder = MapBuilder.builder();
        builder.addField("itemId", data.getItemId());
        builder.addField("itemType", data.getItemType());
        String collectionListType = QueryMetaModel.COLLECTION;
        List<String> relatedItemTypes = new ArrayList<>();
        relatedItemTypes.add(collectionListType);
        builder.addField("relatedItemTypes", relatedItemTypes);
        GetRelatedItemsAsyncRequest request = new GetRelatedItemsAsyncRequest(getRelatedItemList, new GetRelatedSubCollectionsCallback(), view, builder.toJSON());
        request.call();
    }
    
    
    
    
    public static class GetRelatedItemsAsyncRequest extends AsyncRequest<CollectionView> {

        String requestparameters;

        public GetRelatedItemsAsyncRequest(String endpoint, ServerCallback handler, CollectionView view, String data) {
            super(endpoint, handler, view);
            this.requestparameters = data;
        }

        @Override
        public void preparePostData() {
            if (UtilValidate.isNotEmpty(getRequestparameters())) {
                MapBuilder builder = MapBuilder.query(getRequestparameters());
                final String itemId = builder.getString("itemId");
                final String itemType = builder.getString("itemType");
                final List<String> relatedItemTypes = builder.getList("relatedItemTypes");

                Query query = new Query();
                query.setPageNumber(-1);
                query.getFromClause().addAll(relatedItemTypes);

                ClauseGroup clauseGroup = new ClauseGroup();
                Clause clause = new Clause();
                clause.getKey().add("relatedItemId");
                clause.setValue(itemId);
                clause.setLike(false);
                clause.setItemType(itemType);
                clause.setType("VIRTUAL_RELATED");
                clause.setOccur(ClauseModel.Occur.MUST.name());
                clauseGroup.getClauses().add(clause);

                clause = new Clause();
                clause.getKey().add("relatedItemType");
                clause.setValue(itemType);
                clause.setItemType(itemType);
                clause.setType("RELATED");
                clause.setLike(false);
                clause.setOccur(ClauseModel.Occur.MUST.name());
                clauseGroup.getClauses().add(clause);
                query.getOrClauseGroups().add(clauseGroup);

                Map<String, Object> map = new HashMap<>();
                map.put("query", query);

                put(getEndpoint(), map);
            }
        }

        @Override
        public boolean doValidate() {
            return UtilValidate.isNotEmpty(getRequestparameters());
        }

        public String getRequestparameters() {
            return requestparameters;
        }

        public void setRequestparameters(String requestparameters) {
            this.requestparameters = requestparameters;
        }
    }

    public static class GetRelatedItemsAsyncRequestCallback extends ServerCallback<String> {

        @Override
        public void process(String data) {
            processCallbackData(data);
        }

        private void processCallbackData(String data) {
            CollectionView view = (CollectionView) getRequest().getView();
            if (UtilValidate.isNotEmpty(data)) {
                List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                for (Map<String, Object> result : results) {
                    if (!result.get("itemId").equals("-10")) {
                        ListItemView item = new ListItemView();
                        item.setItemId((String) result.get("itemId"));
                        item.setItemName((String) result.get("itemName"));
                        item.setItemType((String) result.get("itemType"));
                        item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss((String) result.get("itemType")));
                        view.getCollectionListItemView().getExistingItemList().add(item);
                    }
                }
            }
            view.getCollectionListItemView().getLoader().setActive(false);
        }
    }
    
    public static class GetRelatedSubCollectionsCallback extends ServerCallback<String> {

        @Override
        public void process(String data) {
            processCallbackData(data);
        }

        private void processCallbackData(String data) {
            CollectionView view = (CollectionView) getRequest().getView();
            if (UtilValidate.isNotEmpty(data)) {
                List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                for (Map<String, Object> result : results) {
                    if (!result.get("itemId").equals("-10")) {
                        ListItemView item = new ListItemView();
                        item.setItemId((String) result.get("itemId"));
                        item.setItemName((String) result.get("itemName"));
                        item.setItemType((String) result.get("itemType"));
                        item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss((String) result.get("itemType")));
                        view.getCollectionListItemView().getExistingItemList().add(item);
                        view.getTempSelectedCollectionList().add(item);
                    }
                }
            }
            view.getCollectionListItemView().getLoader().setActive(false);

            List<Map<String, String>> tempSelectedCollectionList = getTempSelectedCollectionList(view);
            if (!tempSelectedCollectionList.isEmpty()) {
                MapBuilder builder = MapBuilder.builder();
                builder.addFieldMapList("relatedItems", tempSelectedCollectionList);
                Signal loadSignal = new Event(EventConstants.CLEAR_BEFORE_LOAD_LIST, EventConstants.LOAD_LIST, builder);
                Components.get(view.getListComponentDefinition().getComponent(), view.getListComponentDefinition().getInstanceId()).listen(loadSignal);
            }
        }
        
        private List<Map<String, String>> getTempSelectedCollectionList(CollectionView view) {
            List<Map<String, String>> collectionlist = new ArrayList<>();
            for (ListItemView collection : view.getTempSelectedCollectionList()) {
                Map<String, String> colmap = new HashMap<>();
                colmap.put("itemId", collection.getItemId());
                colmap.put("itemType", collection.getItemType());
                collectionlist.add(colmap);
            }
            return collectionlist;
        }
        
    }

    
    public static class BuildupBatchRelationshipAsyncRequest extends AsyncRequest<CollectionView> {

        String requestparameters;

        public BuildupBatchRelationshipAsyncRequest(String endpoint, ServerCallback handler, CollectionView view, String data) {
            super(endpoint, handler, view);
            this.requestparameters = data;
        }

        @Override
        public void preparePostData() {
            if (UtilValidate.isNotEmpty(getRequestparameters())) {
                MapBuilder builder = MapBuilder.query(getRequestparameters());
                List<Map<String, Object>> list = new ArrayList<>();
                List<Map<String, String>> itemList = builder.getList("items");
                Map<String, Object> map = new HashMap<>();
                map.put("itemId", UtilValidate.isNotEmpty(builder.getString("itemId")) ? builder.getString("itemId") : "''");
                map.put("itemType", UtilValidate.isNotEmpty(builder.getString("itemType")) ? builder.getString("itemType") : "''");
                map.put("itemName", UtilValidate.isNotEmpty(builder.getString("itemName")) ? builder.getString("itemName") : "''");
                map.put("relatedItemId", UtilValidate.isNotEmpty(builder.getString("relatedItemId")) ? builder.getString("relatedItemId") : "''");
                map.put("relatedItemType", UtilValidate.isNotEmpty(builder.getString("relatedItemType")) ? builder.getString("relatedItemType") : "''");
                map.put("searchKey", "''");
                map.put("description", UtilValidate.isNotEmpty(builder.getString("description")) ? builder.getString("description") : "''");
                map.put("companyRelationTypeA", UtilValidate.isNotEmpty(builder.getString("companyRelationTypeA")) ? builder.getString("companyRelationTypeA") : "''");
                map.put("companyRelationTypeB", UtilValidate.isNotEmpty(builder.getString("companyRelationTypeB")) ? builder.getString("companyRelationTypeB") : "''");
                map.put("personCompanyRelation", UtilValidate.isNotEmpty(builder.getString("personCompanyRelation")) ? builder.getString("personCompanyRelation") : "''");
                map.put("personCompanyPhone", UtilValidate.isNotEmpty(builder.getString("personCompanyPhone")) ? builder.getString("personCompanyPhone") : "''");
                map.put("personCompanyMobile", UtilValidate.isNotEmpty(builder.getString("personCompanyMobile")) ? builder.getString("personCompanyMobile") : "''");
                map.put("personCompanyEmail", UtilValidate.isNotEmpty(builder.getString("personCompanyEmail")) ? builder.getString("personCompanyEmail") : "''");
                map.put("function", UtilValidate.isNotEmpty(builder.getString("function")) ? builder.getString("function") : "''");
                map.put("personCompanyDepartment", UtilValidate.isNotEmpty(builder.getString("personCompanyDepartment")) ? builder.getString("personCompanyDepartment") : "''");
                map.put("engagementEndDate", UtilValidate.isNotEmpty(builder.getString("engagementEndDate")) ? builder.getString("engagementEndDate") : "''");
                map.put("projectRelationType", UtilValidate.isNotEmpty(builder.getString("projectRelationType")) ? builder.getString("projectRelationType") : "''");
                map.put("isEmployee", builder.getBoolean("isEmployee"));
                map.put("businessModelName", UtilValidate.isNotEmpty(builder.getString("businessModelName")) ? builder.getString("businessModelName") : "''");
                map.put("selectedCampaignTypeList", list);
                map.put("items", itemList);

                put(getEndpoint(), map);
            }
        }

        @Override
        public boolean doValidate() {
            return UtilValidate.isNotEmpty(getRequestparameters());
        }

        public String getRequestparameters() {
            return requestparameters;
        }

        public void setRequestparameters(String requestparameters) {
            this.requestparameters = requestparameters;
        }
    }

    public static class BuildupBatchRelationshipAsyncRequestCallback extends ServerCallback<String> {

        @Override
        public void process(String data) {
            processCallbackData(data);
        }

        private void processCallbackData(String data) {
            CollectionView view = (CollectionView) getRequest().getView();
            if (UtilValidate.isNotEmpty(data)) {
                MapBuilder result = MapBuilder.query(data);
                String code = result.getString("code");
                if (code.equalsIgnoreCase("200") && UtilValidate.isNotEmpty(view)) {
                    view.setCollectionhoveraction(false);
                    Logger.log("Successfully make relation >>" + data);
                }
            }
        }
    }

    public class DesignModeListener implements EventListener {

        @Override
        public void onReceive(final Signal signal) {
            Object data = signal.getPackets().get(0);
            if (null != data) {
                invoke(String.valueOf(data));
            }
        }
    }

    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(final Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(final Signal signal) {
            VIEW.render(new String[]{"collection"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("collection", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    CollectionView view = new CollectionView();
                    view.setInstance(jsondata.getString("instance"));
                    view.getCollectionListItemView().setInstance(jsondata.getString("instance"));
                    view.setCollectionClass("collection");
                    prepareConfigurationModelFromJSON(view, jsondata);
                    setView(view);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(view));
                }

                private void prepareConfigurationModelFromJSON(CollectionView view, MapBuilder jsondata) {
                    
                    JSONObject configurationJson = jsondata.getJsonObject("configuration");
                    CollectionConfiguration configuration = view.getConfiguration();
                    
                    String collectionListType = configurationJson.getString("collectionListType");
                    view.setCollectionListType(collectionListType);
                    configuration.setCollectionListType(collectionListType);
                    
                    String layoutRowId = configurationJson.getString("layoutRowId");
                    view.setLayoutRowId(layoutRowId);
                    configuration.setLayoutRowId(layoutRowId);
                    prepareTalkToComponent(view, configurationJson);
                    
                    List<Object> list = configurationJson.getJSONArray("collectionItemList").toList();
                    for (Object object : list) {
                        MapBuilder builder = MapBuilder.query((Map) object);
                        ListItemView item = new ListItemView();
                        item.setItemId(builder.getString("itemId"));
                        item.setItemName(builder.getString("itemName"));
                        item.setItemType(builder.getString("itemType"));
                        item.setItemShortName(ListItemViewModel.shortCollectionName(item));
                        view.getConfiguration().getCollectionItemList().add(item);
                        view.getCollectionItemList().add(item);
                    }
                }

                private void prepareTalkToComponent(CollectionView view, JSONObject configurationJson) {
                    // list
                    configureDef(view.getListComponentDefinition(), configurationJson.getJSONObject("listComponentDefinition"));
                    configureDef(view.getConfiguration().getListComponentDefinition(), configurationJson.getJSONObject("listComponentDefinition"));
                    configureDef(view.getCollectionListItemView().getListComponentDefinition(), configurationJson.getJSONObject("listComponentDefinition"));
                    // related
                    configureDef(view.getRelatedItemComponentDefinition(), configurationJson.getJSONObject("relatedItemComponentDefinition"));
                    configureDef(view.getConfiguration().getRelatedItemComponentDefinition(), configurationJson.getJSONObject("relatedItemComponentDefinition"));
                    configureDef(view.getCollectionListItemView().getRelatedItemComponentDefinition(), configurationJson.getJSONObject("relatedItemComponentDefinition"));
                    //new item
                    configureDef(view.getNewItemComponentDefinition(), configurationJson.getJSONObject("newItemComponentDefinition"));
                    configureDef(view.getConfiguration().getNewItemComponentDefinition(), configurationJson.getJSONObject("newItemComponentDefinition"));
                }
                
                private void configureDef(ComponentDef def, JSONObject defData) {
                    Logger.log(defData.getString("instanceId"));
                    Logger.log(defData.getString("component"));
                    
                    def.setInstanceId(defData.getString("instanceId"));
                    def.setComponent(defData.getString("component"));
                }
            });
        }
    }

    public class CollectionHoverListener implements EventListener {

        @Override
        public void onReceive(final Signal signal) {
            String signalaction = signal.getAction();
            Logger.log(signalaction);
            if (UtilValidate.isNotEmpty(signalaction)) {
                Logger.log(signalaction);
                if (signalaction.equalsIgnoreCase(EventConstants.ADD_TO_COLLECTION_ACTION)) {
                    invoke("openActionHoverWithCollectionItemAddMode");
                } else if (signalaction.equalsIgnoreCase(EventConstants.CREATE_NEW_COL_ACT)) {
                    Logger.log(EventConstants.CREATE_NEW_COL_ACT);
                    invoke("openActionHoverWithCollectionCreateMode");
                } else if (signalaction.equalsIgnoreCase(EventConstants.CREATE_NEW_COL_WITH_CHILDREN_ACT)) {
                    MapBuilder data = (MapBuilder) signal.getPackets().get(0);
                    if (null != data) {
                        invoke("createCollectionWithSelectedItems", data.toJSON());
                    }
                } else if (signalaction.equalsIgnoreCase(EventConstants.LIST_DATA_ADD_TO_COLLECTION_ACTION)) {
                    MapBuilder data = (MapBuilder) signal.getPackets().get(0);
                    if (null != data) {
                        invoke("makeRelationshipWithCollection", data.toJSON());
                    }
                }
            }
        }
    }
    
    public class FunctionInvokeListener implements EventListener {

        @Override
        public void onReceive(final Signal signal) {
            Object data = signal.getPackets().get(0);
            if (null != data) {
                invoke(String.valueOf(data));
            }
        }
    }
    
    public class CollectionToggleListener implements EventListener{

        @Override
        public void onReceive(final Signal signal) {
            String signalaction = signal.getAction();
            if (UtilValidate.isNotEmpty(signalaction)) {
                if (signalaction.equalsIgnoreCase(EventConstants.TOGGLE)) {
                    MapBuilder data = (MapBuilder) signal.getPackets().get(0);
                    if (null != data) {
                        invoke("performToogle", data.toJSON());
                    }
                } 
            }
        }
    }
        
    @Model(className = "ListItemView", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "itemShortName", type = String.class),
        @Property(name = "itemTypeIconCss", type = String.class),
        @Property(name = "openCollectionBox", type = boolean.class),
        @Property(name = "isActive", type = boolean.class)
    })
    public static class ListItemViewModel {
        
        public static String shortCollectionName(ListItemView view) {
            String result = "";
            if (UtilValidate.isEmpty(view.getItemName())) {
                return "";
            }
            String ss[] = view.getItemName().split(" ");
            for (int i = 0; i < ss.length; i++) {
                result = result.concat(ss[i].length() > 0 ? ss[i].substring(0, 1) : ss[i]);
            }
            if (result.length() > 2) {
                result = result.substring(0, 2);
            }
            return result.toUpperCase();
        }
    }
    
    @Model(className = "CollectionListItemView", targetId = "", properties = {
        @Property(name = "instance", type = String.class),
        @Property(name = "selectedCollectionId", type = String.class),
        @Property(name = "collectionInputBoxText", type = String.class),
        @Property(name = "showCollectionList", type = boolean.class),
        @Property(name = "itemList", type = ListItemView.class, array = true),
        @Property(name = "tempSelectionForRelation", type = ListItemView.class),
        @Property(name = "existingItemList", type = ListItemView.class, array = true),
        @Property(name = "collectionListType", type = String.class),
        @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
        @Property(name = "listComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "relatedItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    })
    public static class CollectionListItemViewModel {
        @OnPropertyChange("collectionInputBoxText")
        public static void itemSearchAutocomplete(CollectionListItemView view) {
            if (UtilValidate.isNotEmpty(view.getCollectionInputBoxText())) {
                view.setShowCollectionList(true);
                getItemList(view);
            } else {
                view.setShowCollectionList(false);
                view.getItemList().clear();
            }
        }

        @Function
        public static void loadItemsToList(CollectionListItemView view, ListItemView data){
            
            deselectAllAndActiveSelectedSubCollection(view, data);
            // update header on result list
            Signal loadSignal = new Event(EventConstants.UPDATE_HEADER_ACTION, EventConstants.VIEW_CHANGE, MapBuilder.builder().addField("title", data.getItemName()));
            Components.get(view.getListComponentDefinition().getComponent(), view.getListComponentDefinition().getInstanceId()).listen(loadSignal);

            
            Map<String, String> colmap = new HashMap<>();
            colmap.put("itemId", data.getItemId());
            colmap.put("itemType", data.getItemType());

            List<Map<String, String>> collectionlist = new ArrayList<>();
            collectionlist.add(colmap);

            MapBuilder builder = MapBuilder.builder();
            builder.addFieldMapList("relatedItems", collectionlist);
            
            loadSignal = new Event(EventConstants.CLEAR_BEFORE_LOAD_LIST, EventConstants.LOAD_LIST, builder);
            Components.get(view.getListComponentDefinition().getComponent(), view.getListComponentDefinition().getInstanceId()).listen(loadSignal);
        }
        
        @Function
        static void deselectAllAndActiveSelectedSubCollection(CollectionListItemView view, ListItemView data) {

            // deselect all parent collections without selected parent
            List<ListItemView> collectionList = view.getExistingItemList();
            for (ListItemView item : collectionList) {
                String selectedId = data.getItemId();
                String itemId = item.getItemId();
                if (UtilValidate.isNotEmpty(selectedId) && UtilValidate.isNotEmpty(itemId) && selectedId.equalsIgnoreCase(itemId)) {
                    item.setIsActive(true);
                } else {
                    item.setIsActive(false);
                }
            }
        }        
        
        
        @Function
        public static void getItemList(CollectionListItemView view) {
            final String searchKey = view.getCollectionInputBoxText();
            final List<ListItemView> existingItemList = view.getExistingItemList();
            final String collectionListType = view.getCollectionListType();
            new AsyncRequest<CollectionListItemView>(getItemList, view) {
                @Override
                public void preparePostData() {

                    Map<String, Object> map = new HashMap<String, Object>();
                    List<Map<String, Object>> existingItems = new ArrayList<Map<String, Object>>();
                    Map<String, Object> attributes = new HashMap<String, Object>();
                    List<String> fromClause = new ArrayList<String>();
                    if (collectionListType.equalsIgnoreCase(QueryMetaModel.ALL)) {
                        fromClause.addAll(QueryMetaModel.COLLECTION_SEARCH_ITEM);
                    } else {
                        fromClause.add(collectionListType);
                    }
                    

                    attributes.put("scopeGroup", Session.getCompany().getString("itemId"));
                    attributes.put("collectionType", QueryMetaModel.COLLECTION_TYPE_GENERIC);

                    for (ListItemView item : existingItemList) {
                        Map<String, Object> existingItem = new HashMap<String, Object>();
                        existingItem.put("itemId", item.getItemId());
                        existingItem.put("itemType", item.getItemType());
                        existingItems.add(existingItem);
                    }

                    map.put("searchKey", "'" + searchKey + "'");
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
                    CollectionListItemView view = (CollectionListItemView) getRequest().getView();
                    view.getItemList().clear();
                    if (UtilValidate.isNotEmpty(data)) {
                        List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                        for (Map<String, Object> result : results) {
                            ListItemView item = new ListItemView();
                            item.setItemId((String) result.get("itemId"));
                            item.setItemName((String) result.get("itemName"));
                            item.setItemType((String) result.get("itemType"));
                            item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss((String) result.get("itemType")));
                            view.getItemList().add(item);
                        }
                    }
                }
            });
        }
        
        @Function
        public static void removeCollectionItem(CollectionListItemView view, ListItemView data) {
            final String collectionItemId = view.getSelectedCollectionId();
            final String itemId = data.getItemId();
            final String itemType = data.getItemType();
            final ListItemView item = data;
            new AsyncRequest<CollectionListItemView>(removeCollectionItem, view) {
                @Override
                public void preparePostData() {

                    Map<String, Object> map = new HashMap<String, Object>();
                    List<Map<String, Object>> items = new ArrayList<Map<String, Object>>();
                    Map<String, Object> item = new HashMap<String, Object>();
                    item.put("itemId", itemId);
                    item.put("itemType", itemType);
                    items.add(item);
                    
                    map.put("parentCollectionId", collectionItemId);
                    map.put("items", items);

                    put(getEndpoint(), map);
                }

                @Override
                public boolean doValidate() {
                    return true;
                }
            }.call(new ServerCallback<Map<String, Object>>() {

                @Override
                public void process(String data) {
                    CollectionListItemView view = (CollectionListItemView) getRequest().getView();
                    if (UtilValidate.isNotEmpty(data)) {
                        MapBuilder result = MapBuilder.query(data);
                        long deleteCount = result.getLong("deleteCount");
                        if (deleteCount > 0) {
                            view.getExistingItemList().remove(item);
                        }
                    }
                }
            });
        }
        
        @Function
        public static void relateWithParentCollection(CollectionListItemView view, ListItemView data) {
            view.setTempSelectionForRelation(data);
            view.setShowCollectionList(false);
            String parentCollectionItemId = view.getSelectedCollectionId();
            String parentCollectionItemType = QueryMetaModel.COLLECTION;
            String toBeRelatedItemId = data.getItemId();
            String toBeRelatedItemType = data.getItemType();
            MapBuilder builder = MapBuilder.builder();
            
            builder.addField("itemId", parentCollectionItemId);
            builder.addField("itemType", parentCollectionItemType);
            builder.addField("relatedItemId", toBeRelatedItemId);
            builder.addField("relatedItemType", toBeRelatedItemType);
            
            BuildupRelationshipAsyncRequest request = new BuildupRelationshipAsyncRequest(saveRelatedItem, new BuildupRelationshipAsyncRequestCallback(), view, builder.toJSON());
            request.call();
        }
        
        @Function
        public static void breakupRelationWithParentCollection(CollectionListItemView view, ListItemView data) {
            view.setTempSelectionForRelation(data);
            String parentCollectionItemId = view.getSelectedCollectionId();
            String parentCollectionItemType = QueryMetaModel.COLLECTION;
            String relatedItemId = data.getItemId();
            String relatedItemType = data.getItemType();
            MapBuilder builder = MapBuilder.builder();
            builder.addField("itemId", parentCollectionItemId);
            builder.addField("itemType", parentCollectionItemType);
            builder.addField("relatedItemId", relatedItemId);
            builder.addField("relatedItemType", relatedItemType);
            
            BreakupRelationshipAsyncRequest request = new BreakupRelationshipAsyncRequest(deleteRelatedItem, new BreakupRelationshipAsyncRequestCallback(), view, builder.toJSON());
            request.call();
        }
        
        public static class BuildupRelationshipAsyncRequest extends AsyncRequest<CollectionListItemView> {

            String requestparameters;

            public BuildupRelationshipAsyncRequest(String endpoint, ServerCallback handler, CollectionListItemView view, String data) {
                super(endpoint, handler, view);
                this.requestparameters = data;
            }

            @Override
            public void preparePostData() {
                if (UtilValidate.isNotEmpty(getRequestparameters())) {
                    MapBuilder builder = MapBuilder.query(getRequestparameters());
                    List<Map<String, Object>> list = new ArrayList<>();
                    Map<String, Object> map = new HashMap<>();
                    map.put("itemId", UtilValidate.isNotEmpty(builder.getString("itemId")) ? builder.getString("itemId") : "''");
                    map.put("itemType", UtilValidate.isNotEmpty(builder.getString("itemType")) ? builder.getString("itemType") : "''");
                    map.put("itemName", UtilValidate.isNotEmpty(builder.getString("itemName")) ? builder.getString("itemName") : "''");
                    map.put("relatedItemId", UtilValidate.isNotEmpty(builder.getString("relatedItemId")) ? builder.getString("relatedItemId") : "''");
                    map.put("relatedItemType", UtilValidate.isNotEmpty(builder.getString("relatedItemType")) ? builder.getString("relatedItemType") : "''");
                    map.put("searchKey", "''");
                    map.put("description", UtilValidate.isNotEmpty(builder.getString("description")) ? builder.getString("description") : "''");
                    map.put("companyRelationTypeA", UtilValidate.isNotEmpty(builder.getString("companyRelationTypeA")) ? builder.getString("companyRelationTypeA") : "''");
                    map.put("companyRelationTypeB", UtilValidate.isNotEmpty(builder.getString("companyRelationTypeB")) ? builder.getString("companyRelationTypeB") : "''");
                    map.put("personCompanyRelation", UtilValidate.isNotEmpty(builder.getString("personCompanyRelation")) ? builder.getString("personCompanyRelation") : "''");
                    map.put("personCompanyPhone", UtilValidate.isNotEmpty(builder.getString("personCompanyPhone")) ? builder.getString("personCompanyPhone") : "''");
                    map.put("personCompanyMobile", UtilValidate.isNotEmpty(builder.getString("personCompanyMobile")) ? builder.getString("personCompanyMobile") : "''");
                    map.put("personCompanyEmail", UtilValidate.isNotEmpty(builder.getString("personCompanyEmail")) ? builder.getString("personCompanyEmail") : "''");
                    map.put("function", UtilValidate.isNotEmpty(builder.getString("function")) ? builder.getString("function") : "''");
                    map.put("personCompanyDepartment", UtilValidate.isNotEmpty(builder.getString("personCompanyDepartment")) ? builder.getString("personCompanyDepartment") : "''");
                    map.put("engagementEndDate", UtilValidate.isNotEmpty(builder.getString("engagementEndDate")) ? builder.getString("engagementEndDate") : "''");
                    map.put("projectRelationType", UtilValidate.isNotEmpty(builder.getString("projectRelationType")) ? builder.getString("projectRelationType") : "''");
                    map.put("isEmployee", builder.getBoolean("isEmployee"));
                    map.put("businessModelName", UtilValidate.isNotEmpty(builder.getString("businessModelName")) ? builder.getString("businessModelName") : "''");
                    map.put("selectedCampaignTypeList", list);
                    map.put("items", list);

                    put(getEndpoint(), map);
                }
            }

            @Override
            public boolean doValidate() {
                return UtilValidate.isNotEmpty(getRequestparameters());
            }

            public String getRequestparameters() {
                return requestparameters;
            }

            public void setRequestparameters(String requestparameters) {
                this.requestparameters = requestparameters;
            }
        }

        public static class BuildupRelationshipAsyncRequestCallback extends ServerCallback<String> {

            @Override
            public void process(String data) {
                processCallbackData(data);
            }

            private void processCallbackData(String data) {
                CollectionListItemView view = (CollectionListItemView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder result = MapBuilder.query(data);
                    String code = result.getString("code");
                    if (code.equalsIgnoreCase("200") && UtilValidate.isNotEmpty(view)) {
                        view.getExistingItemList().add(view.getTempSelectionForRelation());
                        view.setCollectionInputBoxText("");
                        Logger.log("Successfully make relation >>" + data);
                    }
                }
            }
        }

        public static class BreakupRelationshipAsyncRequest extends AsyncRequest<CollectionListItemView> {

            String requestparameters;

            public BreakupRelationshipAsyncRequest(String endpoint, ServerCallback handler, CollectionListItemView view, String data) {
                super(endpoint, handler, view);
                this.requestparameters = data;
            }

            @Override
            public void preparePostData() {
                if (UtilValidate.isNotEmpty(getRequestparameters())) {
                    MapBuilder builder = MapBuilder.query(getRequestparameters());
                    final String itemId = builder.getString("itemId");
                    final String itemType = builder.getString("itemType");
                    final String relatedItemId = builder.getString("relatedItemId");
                    final String relatedItemType = builder.getString("relatedItemType");
                    Map<String, Object> map = new HashMap<>();
                    Map<String, Object> relatedItemData = new HashMap<>();
                    relatedItemData.put("itemId", itemId);
                    relatedItemData.put("itemType", itemType);
                    relatedItemData.put("relatedItemId", relatedItemId);
                    relatedItemData.put("relatedItemType", relatedItemType);

                    map.put("relatedItemData", relatedItemData);
                    put(getEndpoint(), map);
                }
            }

            @Override
            public boolean doValidate() {
                return UtilValidate.isNotEmpty(getRequestparameters());
            }

            public String getRequestparameters() {
                return requestparameters;
            }

            public void setRequestparameters(String requestparameters) {
                this.requestparameters = requestparameters;
            }
        }

        public static class BreakupRelationshipAsyncRequestCallback extends ServerCallback<String> {

            @Override
            public void process(String data) {
                processCallbackData(data);
            }

            private void processCallbackData(String data) {
                CollectionListItemView view = (CollectionListItemView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder result = MapBuilder.query(data);
                    String code = result.getString("code");
                    if (code.equalsIgnoreCase("200") && UtilValidate.isNotEmpty(view)) {
                        view.getExistingItemList().remove(view.getTempSelectionForRelation());
                        Logger.log("Successfully breakup relation >>" + data);
                    }
                }
            }
        }        
        
        
        
    }
    
    @Model(className = "CollectionConfiguration", targetId = "", properties = {
        @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
        @Property(name = "collectionItemList", type = ListItemView.class, array = true),
        @Property(name = "inputBoxText", type = String.class),
        @Property(name = "showItemList", type = boolean.class),
        @Property(name = "itemList", type = ListItemView.class, array = true),
        @Property(name = "itemListLoader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
        @Property(name = "collectionListType", type = String.class),
        @Property(name = "layoutRowId", type = String.class),
        @Property(name = "listComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "relatedItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "newItemComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class CollectionAdminManager {

        @OnPropertyChange("inputBoxText")
        public static void itemSearchAutocomplete(CollectionConfiguration view) {
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
        public static void getItemList(CollectionConfiguration view) {
            final String searchKey = view.getInputBoxText();
            final List<ListItemView> collectionItems = view.getCollectionItemList();
            new AsyncRequest<CollectionConfiguration>(getItemList, view) {
                @Override
                public void preparePostData() {

                    Map<String, Object> map = new HashMap<String, Object>();
                    List<Map<String, Object>> existingItems = new ArrayList<Map<String, Object>>();
                    Map<String, Object> attributes = new HashMap<String, Object>();
                    List<String> fromClause = new ArrayList<String>();
                    fromClause.add(QueryMetaModel.COLLECTION);

                    attributes.put("scopeGroup", Session.getCompany().getString("itemId"));
                    attributes.put("collectionType", QueryMetaModel.COLLECTION_TYPE_GENERIC);

                    for (ListItemView item : collectionItems) {
                        Map<String, Object> existingItem = new HashMap<String, Object>();
                        existingItem.put("itemId", item.getItemId());
                        existingItem.put("itemType", item.getItemType());
                        existingItems.add(existingItem);
                    }

                    map.put("searchKey", "'" + searchKey + "'");
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
                    CollectionConfiguration view = (CollectionConfiguration) getRequest().getView();
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
        
        @Function
        public static void selectItem(CollectionConfiguration view, ListItemView data) {
            view.setInputBoxText("");
            data.setItemShortName(ListItemViewModel.shortCollectionName(data));
            view.getCollectionItemList().add(data);
        }

        @Function
        public static void removeCollectionItemFromList(CollectionConfiguration view, ListItemView data) {
            view.getCollectionItemList().remove(data);
        }
    }
}
