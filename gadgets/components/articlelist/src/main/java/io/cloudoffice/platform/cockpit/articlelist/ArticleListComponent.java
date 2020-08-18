/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.articlelist;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
import io.cloudoffice.platform.cockpit.api.Base64;
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
import net.java.html.json.Models;
import net.java.html.json.OnPropertyChange;
import net.java.html.json.Property;
import org.json.JSONObject;

@Model(className = "ArticleListView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = ArticleListConfiguration.class),
    @Property(name = "visible", type = boolean.class),
    @Property(name = "gridViewEnabled", type = boolean.class),
    @Property(name = "isVisibleCreateButon", type = boolean.class),
    @Property(name = "configuredFilters", type = FilterType.class, array = true),
    @Property(name = "items", type = VirtualItemInfo.class, array = true),
    @Property(name = "listnotavailablemessagedisplay", type = boolean.class),
    @Property(name = "batchSelected", type = boolean.class),
    @Property(name = "batchSelectionTitle", type = String.class),
    @Property(name = "totalItems", type = int.class),
    @Property(name = "currentItemCount", type = int.class),
    @Property(name = "hasMoreItemAvailable", type = boolean.class),
    @Property(name = "pageNumber", type = int.class),
    @Property(name = "enableNext", type = boolean.class),
    @Property(name = "enablePrevious", type = boolean.class),
    @Property(name = "rows", type = ArticleListRow.class, array = true),
    @Property(name = "configuredColumns", type = ArticleListColumn.class, array = true),
    @Property(name = "detailComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "actionMenuComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "collectionComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "headerTitle", type = String.class)
})

public class ArticleListComponent extends AbstractComponent<ArticleListView> {

    // VIEW
    public static final String LIST_VIEW = "LIST";
    public static final String GRID_VIEW = "GRID";
    public static final String SHOW = "SHOW";
    public static final String HIDE = "HIDE";
    // COLUMNS
    public static String COLUMN_NAME = "NAME";
    public static String COLUMN_CREATOR = "CREATOR";
    public static String COLUMN_FILE_VIESION = "VERSION";
    public static String COLUMN_FILE_SIZE = "SIZE";
    public static String COLUMN_EMAIL = "EMAIL";
    public static String COLUMN_PHONE = "PHONE";

    public static Component getInstance(String instance) {
        return new ArticleListComponent(instance);
    }

    public ArticleListComponent(String instance) {
        super(instance);
    }

    @Override
    public void setComponentName() {
        this.componentName = "articlelist-component";
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.LOAD_INITIAL_DATA, new LoadInitialDataListener());
        attachListener(EventConstants.LOAD_LIST, new LoadListListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new FunctionInvokeListener());
        attachListener(EventConstants.VIEW_CHANGE, new ViewChangeListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(ArticleListView.class.getName());
        setDefaultConfigViewName(ArticleListConfiguration.class.getName());
    }

    @OnPropertyChange("hasMoreItemAvailable")
    public static void paginationNavigation(ArticleListView view) {
        // next
        boolean hasMore = view.isHasMoreItemAvailable();
        if (hasMore) {
            view.setEnableNext(true);
        } else {
            view.setEnableNext(false);
        }
        // previous
        int pageNumber = view.getPageNumber();
        if (pageNumber > 1) {
            view.setEnablePrevious(true);
        } else {
            view.setEnablePrevious(false);
        }
    }

    
    @Function
    static void setFullDescriptionText(ArticleListView view, String data) {
        List<ArticleListRow> list = view.getRows();
        for (ArticleListRow articleListRow : list) {
            if (articleListRow.getItemId().equalsIgnoreCase(data)) {
                articleListRow.getColumns().get(0).setItemShortDescription(articleListRow.getColumns().get(0).getItemDescription());
                break;
            }
        }
    }
    
//    @OnPropertyChange("batchSelected")
//    public static void batchSelection(ArticleListView view) {
//        boolean batchSelected = view.isBatchSelected();
//        if (batchSelected) {
//            view.setBatchSelectionTitle("Uncheck all");
//            checkAll(view);
//        } else {
//            view.setBatchSelectionTitle("Check all");
//            uncheckAll(view);
//        }
//    }
    
    
    @Function
    static void selectSingle(ArticleListView view, ArticleListRow data) {
        // single row selection update
        if (!data.isIsSelected()) {
            data.setIsSelected(true);
        } else {
            data.setIsSelected(false);
        }
        
        // batch selection update
        boolean isAllChecked = false;
        for (ArticleListRow row : view.getRows()) {
            if (row.isIsSelected()) {
                isAllChecked = true;
            } else {
                isAllChecked = false;
                break;
            }
        }
        if (isAllChecked) {
            view.setBatchSelected(true);
        } else {
            view.setBatchSelected(false);
        }
    }
    
    @Function
    static void selectBatch(ArticleListView view){
        if(!view.isBatchSelected()){
            view.setBatchSelected(true);
            checkAll(view);
        } else {
            view.setBatchSelected(false);
            uncheckAll(view);
        }
    }
    
    @Function
    static void checkAll(ArticleListView view) {
        List<ArticleListRow> rows = view.getRows();
        if (!rows.isEmpty()) {
            for (ArticleListRow row : rows) {
                row.setIsSelected(true);
            }
        }
    }

    @Function
    static void uncheckAll(ArticleListView view) {
        List<ArticleListRow> rows = view.getRows();
        if (!rows.isEmpty()) {
            for (ArticleListRow row : rows) {
                row.setIsSelected(false);
            }
        }
    }

    @Function
    static void loadList(ArticleListView view, String data) {
        VirtualItemListAsyncRequest request = new VirtualItemListAsyncRequest(SEARCH_METHOD, new VirtualItemListAsyncRequestCallback(), view, data);
        request.call();
    }

    @Function
    static void reloadList(ArticleListView view) {
        view.setHeaderTitle("");
        MapBuilder filtersList = getConfiguredFilters(view);
        VirtualItemListAsyncRequest request = new VirtualItemListAsyncRequest(SEARCH_METHOD, new VirtualItemListAsyncRequestCallback(), view, filtersList.toJSON());
        request.call();
    }

    @Function
    static void next(ArticleListView view) {
        if (view.isHasMoreItemAvailable()) {
            int nextPageNumber = view.getPageNumber() + 1;
            view.setPageNumber(nextPageNumber);
            MapBuilder filtersList = getConfiguredFilters(view);
            loadList(view, filtersList.toJSON());
        }
    }

    @Function
    static void previous(ArticleListView view) {
        if (view.getPageNumber() > 1) {
            int nextPageNumber = view.getPageNumber() - 1;
            view.setPageNumber(nextPageNumber);
            MapBuilder filtersList = getConfiguredFilters(view);
            loadList(view, filtersList.toJSON());
        }
    }

    @Function
    static void enableListView(ArticleListView view) {
        view.setGridViewEnabled(false);
    }

    @Function
    static void enableGridView(ArticleListView view) {
        view.setGridViewEnabled(true);
    }

    @Function
    static void openConfig(ArticleListView view) {
        view.setDesignerMode(true);
    }

    @Function
    static void closeConfigurationPanel(ArticleListView view) {
        view.setDesignerMode(false);
    }

    static void addFilter(ArticleListView view, ArticleListRow data) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", data.getItemId())
                .addField("itemName", data.getItemName())
                .addField("itemType", "ARTICLE");

        String componentName = view.getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.ADD_FILTER, EventConstants.ADD_FILTER, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }

    @Function
    static void loadDetail(ArticleListView view, ArticleListRow data) {
        addFilter(view, data);
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", data.getItemId())
                .addField("isSplitView", true)
                .addField("viewType", "metaMode");

        String componentName = view.getDetailComponentDefinition().getComponent();
        String instanceId = view.getDetailComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.LOAD_ITEM_DETAIL, EventConstants.LOAD_ITEM_DETAIL, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }

    @Function
    static void showActionMenu(ArticleListView view, ArticleListRow data) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", data.getItemId())
                .addField("itemName", data.getItemName())
                .addField("itemType", data.getItemType())
                .addField("isFromList", true)
                .addField("component", view.getDetailComponentDefinition().getComponent())
                .addField("instanceId", view.getDetailComponentDefinition().getInstanceId())
                .addField("maximumPermission", getMaximumPermission(data))
                .addField("businessModelName", "UDI_ARTICLE");

        String componentName = view.getActionMenuComponentDefinition().getComponent();
        String instanceId = view.getActionMenuComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.TOOGLE_ACTION_MENU, EventConstants.TOOGLE_ACTION_MENU, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }

    static String getMaximumPermission(ArticleListRow view) {
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

    @Function
    static void createNewItem(ArticleListView view) {
        view.setVisible(false);
        String componentName = view.getDetailComponentDefinition().getComponent();
        String instanceId = view.getDetailComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "enableCreateMode");
        Components.get(componentName, instanceId).listen(loadSignal);
    }

    private static boolean hasSelectedItem(ArticleListView view) {
        for (ArticleListRow row : view.getRows()) {
            Logger.log("C#" + row.isIsSelected());
            if (row.isIsSelected()) {
                return true;
            }
        }
        return false;
    }

    @Function
    static void showCollectionHoverAction(ArticleListView view) {

        String componentName = view.getCollectionComponentDefinition().getComponent();
        String instanceId = view.getCollectionComponentDefinition().getInstanceId();
        if (hasSelectedItem(view)) {
            // open with add to collection mode
            Signal loadSignal = new Event(EventConstants.ADD_TO_COLLECTION_ACTION, EventConstants.HOVER);
            Components.get(componentName, instanceId).listen(loadSignal);
        } else {
            // open with new collection create mode
            Signal loadSignal = new Event(EventConstants.CREATE_NEW_COL_ACT, EventConstants.HOVER);
            Logger.log(componentName+","+instanceId);
            Components.get(componentName, instanceId).listen(loadSignal);
        }
    }

    @Function
    public static void getSelectedListItems(ArticleListView view) {
        MapBuilder data = MapBuilder.builder().addFieldMapList("selecteditems", getSelectedItems(view));
        Signal loadSignal = new Event(EventConstants.CREATE_NEW_COL_WITH_CHILDREN_ACT, EventConstants.HOVER, data);
        Components.get(view.getCollectionComponentDefinition().getComponent(), view.getCollectionComponentDefinition().getInstanceId()).listen(loadSignal);
    }

    @Function
    public static void getSelectedListItemsToCollection(ArticleListView view) {
        MapBuilder data = MapBuilder.builder().addFieldMapList("selecteditems", getSelectedItems(view));
        Signal loadSignal = new Event(EventConstants.LIST_DATA_ADD_TO_COLLECTION_ACTION, EventConstants.HOVER, data);
        Components.get(view.getCollectionComponentDefinition().getComponent(), view.getCollectionComponentDefinition().getInstanceId()).listen(loadSignal);
    }

    private static List<Map<String, String>> getSelectedItems(ArticleListView view) {
        List<Map<String, String>> selectedItems = new ArrayList<>();
        for (ArticleListRow row : view.getRows()) {
            if (row.isIsSelected()) {
                Map<String, String> map = new HashMap<>();
                map.put("itemId", row.getItemId());
                map.put("itemType", row.getItemType());
                map.put("itemName", row.getItemName());
                selectedItems.add(map);
            }
        }
        return selectedItems;
    }

    @Function
    static void showList(ArticleListView view) {
        view.setVisible(true);
    }

    @Function
    static void hideList(ArticleListView view) {
        view.setVisible(false);
    }

    @Function
    static void save(final ArticleListView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("articlelist", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                runtimeViewAdjustmentByConfiguration(view);
                closeConfigurationPanel(view);
            }

            private void runtimeViewAdjustmentByConfiguration(ArticleListView view) {
                ArticleListConfiguration configuration = view.getConfiguration();
                // view
                String defaultitemview = configuration.getDefaultitemview();
                if (UtilValidate.isNotEmpty(defaultitemview) && defaultitemview.equalsIgnoreCase(GRID_VIEW)) {
                    view.setGridViewEnabled(true);
                } else {
                    view.setGridViewEnabled(false);
                }
                String visibleCreateButon = configuration.getVisibleCreateButon();
                if (UtilValidate.isNotEmpty(visibleCreateButon) && visibleCreateButon.equalsIgnoreCase(SHOW)) {
                    view.setIsVisibleCreateButon(true);
                } else {
                    view.setIsVisibleCreateButon(false);
                }
                // filters
                view.getConfiguredFilters().clear();
                List<FilterType> filtersInConfiguration = view.getConfiguration().getFilters();
                for (FilterType filter : filtersInConfiguration) {
                    if (filter.isIsSelected()) {
                        view.getConfiguredFilters().add(filter);
                    }
                }

                // columns
                List<ArticleListRow> rows = view.getRows();
                for (ArticleListRow row : rows) {
                    List<ArticleListColumn> columns = row.getColumns();
                    for (ArticleListColumn column : columns) {
                        updateCoulmn(view, column);
                    }
                }

                Logger.log("Filters: " + view.getConfiguredFilters());
            }

            private void updateCoulmn(ArticleListView view, ArticleListColumn column) {
                String columnId = column.getColumnId();
                List<ArticleListColumn> confCols = view.getConfiguration().getColumns();
                for (ArticleListColumn confCol : confCols) {
                    String confColId = confCol.getColumnId();
                    if (UtilValidate.isNotEmpty(columnId) && columnId.equalsIgnoreCase(confColId)) {
                        column.setColumnHeader(confCol.getColumnHeader());
                        column.setColumnPosition(confCol.getColumnPosition());
                        column.setColumnWidth(confCol.getColumnWidth());
                        column.setIsVisible(confCol.isIsVisible());
                        column.setIsSortable(confCol.isIsSortable());
                    }
                }
            }
        });
    }

    @Function
    static void resetConfiguration(ArticleListView view) {
        resetConfigurationModelFromJSON(view);
    }

    static void resetConfigurationModelFromJSON(final ArticleListView view) {

        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("articlelist", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                ArticleListConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    // view
                    String defaultitemview = configurationJson.getString("defaultitemview");
                    if (UtilValidate.isNotEmpty(defaultitemview) && defaultitemview.equalsIgnoreCase(GRID_VIEW)) {
                        configuration.setDefaultitemview(GRID_VIEW);
                    } else {
                        configuration.setDefaultitemview(LIST_VIEW);
                    }
                    String visibleCreateButon = configurationJson.getString("visibleCreateButon");
                    if (UtilValidate.isNotEmpty(visibleCreateButon) && visibleCreateButon.equalsIgnoreCase(SHOW)) {
                        configuration.setVisibleCreateButon(SHOW);
                    } else {
                        configuration.setVisibleCreateButon(HIDE);
                    }

                    // filters
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

                    // columns
                    if (!(configuration.getColumns().isEmpty())) {
                        configuration.getColumns().clear();
                    }
                    List<Object> columns = configurationJson.getJSONArray("columns").toList();
                    for (Object colObj : columns) {
                        MapBuilder builder = MapBuilder.query((Map) colObj);
                        ArticleListColumn column = new ArticleListColumn();
                        column.setColumnId(builder.getString("columnId"));
                        column.setColumnHeader(builder.getString("columnHeader"));
                        column.setColumnIndex(builder.getInt("columnIndex"));
                        column.setColumnPosition(builder.getString("columnPosition"));
                        column.setColumnWidth(builder.getString("columnWidth"));
                        column.setIsVisible(builder.getBoolean("isVisible"));
                        column.setIsSortable(builder.getBoolean("isSortable"));
                        configuration.getColumns().add(column);
                    }

                    // detail component
                    JSONObject detailComponentDefinition = configurationJson.getJSONObject("detailComponentDefinition");
                    String detailComponent = detailComponentDefinition.getString("component");
                    String detailComponentInstanceId = detailComponentDefinition.getString("instanceId");
                    ComponentDef def = new ComponentDef();
                    def.setComponent(detailComponent);
                    def.setInstanceId(detailComponentInstanceId);
                    configuration.setDetailComponentDefinition(def);

                    JSONObject actionMenuComponentDefinition = configurationJson.getJSONObject("actionMenuComponentDefinition");
                    configuration.getActionMenuComponentDefinition().setComponent(actionMenuComponentDefinition.getString("component"));
                    configuration.getActionMenuComponentDefinition().setInstanceId(actionMenuComponentDefinition.getString("instanceId"));

                    JSONObject collectionComponentDefinition = configurationJson.getJSONObject("collectionComponentDefinition");
                    configuration.getCollectionComponentDefinition().setComponent(collectionComponentDefinition.getString("component"));
                    configuration.getCollectionComponentDefinition().setInstanceId(collectionComponentDefinition.getString("instanceId"));

                    JSONObject searchBoxComponentDefinition = configurationJson.getJSONObject("searchBoxComponentDefinition");
                    configuration.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
                    configuration.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
                }
            }
        });
    }

    @Function
    static void loadInitialData(ArticleListView view) {
        view.setPageNumber(1);
        MapBuilder filtersList = getConfiguredFilters(view);
        if (!filtersList.toJSON().equalsIgnoreCase("{}")) {
            VirtualItemListAsyncRequest request = new VirtualItemListAsyncRequest(SEARCH_METHOD, new VirtualItemListAsyncRequestCallback(), view, filtersList.toJSON());
            request.call();
        }
    }
    
    @Function
    static void updateHeaderTitle(ArticleListView view, String data) {
        view.setHeaderTitle(data);
    }

    static MapBuilder getConfiguredFilters(ArticleListView view) {
        MapBuilder filtersList = MapBuilder.builder();
        List<String> filters = new ArrayList<>();
        List<FilterType> configuredFilters = view.getConfiguredFilters();
        for (FilterType filter : configuredFilters) {
            filters.add(filter.getItemType());
        }
        if (filters.size() > 0) {
            filtersList.addField("filters", filters);
        }
        return filtersList;
    }

    //public static final String SEARCH_METHOD = "\"/VirtualItem-portlet.searchitem/search\"";
    public static final String SEARCH_METHOD = "\"/VirtualItem-portlet.searchitem/searchItemLoadMore\"";

    public static class VirtualItemListAsyncRequest extends AsyncRequest<ArticleListView> {

        public VirtualItemListAsyncRequest(String endpoint, ServerCallback handler, ArticleListView view, String data) {
            super(endpoint, handler, view);
            showLoader(view);
            //prepareSearchQuery(view, data);
        }

        private void showLoader(ArticleListView view) {
            // show progress loader
            view.getLoader().setActive(true);
            // hide list item not available display
            view.setListnotavailablemessagedisplay(false);
        }

        private void prepareSearchQuery(ArticleListView view, String data) {
            Query query = new Query();
            MapBuilder builder = MapBuilder.query(data);
            String searchKey = builder.getString("searchKey");
            if (UtilValidate.isEmpty(searchKey)) {
                query.setPageNumber(view.getPageNumber());
                //prepareFromClause(view, query, data);
            } else {
                query.setPageNumber(1);
                prepareSearchKeyClause(query, data);
            }
            prepareArticleClause(query, data);

            List<Map<String, String>> relatedItems = builder.getList("relatedItems");
            if (null != relatedItems) {
                prepareSelectedOrClauseGroup(query, relatedItems);
            } else {
                prepareDefaultOrClauseGroup(query);
            }

            this.setQuery(query);
        }
        
        private void prepareArticleClause(Query query, String data) {
            Clause clause = new Clause();
            clause.getKey().add("BUSINESS_MODEL_NAME");
            clause.setValue("UDI_ARTICLE");
            clause.setLike(true);
            clause.setItemType(QueryMetaModel.USER_DEFINE);
            clause.setType("VIRTUAL");
            clause.setOccur(ClauseModel.Occur.MUST.name());
            query.getWhereClause().add(clause);
        }

        private void prepareSearchKeyClause(Query query, String data) {
            MapBuilder builder = MapBuilder.query(data);
            String searchKey = builder.getString("searchKey");
            List<String> filters = builder.getList("filters");
            String filterType = filters.get(0);

            Clause clause = new Clause();
            clause.getKey().add("description");
            clause.getKey().add("assetTagNames");
            clause.setValue(searchKey);
            clause.setLike(true);
            clause.setItemType(filterType);
            clause.setType("VIRTUAL");
            clause.setOccur(ClauseModel.Occur.MUST.name());
            query.getWhereClause().add(clause);
        }

        private void prepareFromClause(ArticleListView view, Query query, String data) {
            MapBuilder builder = MapBuilder.query(data);
            List<String> filters = builder.getList("filters");
            if (null != filters) {
                query.getFromClause().addAll(filters);
            } else {
                List<FilterType> configuredFilters = view.getConfiguredFilters();
                for (FilterType filter : configuredFilters) {
                    query.getFromClause().add(filter.getItemType());
                }
            }
        }

        private void prepareSelectedOrClauseGroup(Query query, List<Map<String, String>> relatedItems) {

            for (Map<String, String> relItem : relatedItems) {
                String itemId = relItem.get("itemId");
                String itemType = relItem.get("itemType");

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
            }

        }

        private void prepareDefaultOrClauseGroup(Query query) {

            MapBuilder company = Session.getCompany();
            String companyId = company.getString("itemId");

            ClauseGroup clauseGroup = new ClauseGroup();

            Clause clause = new Clause();
            clause.getKey().add("relatedItemId");
            clause.setValue(companyId);
            clause.setLike(false);
            clause.setItemType(QueryMetaModel.GROUP);
            clause.setType("VIRTUAL_RELATED");
            clause.setOccur(ClauseModel.Occur.MUST.name());
            clauseGroup.getClauses().add(clause);

            clause = new Clause();
            clause.getKey().add("relatedItemType");
            clause.setValue(QueryMetaModel.GROUP);
            clause.setItemType(QueryMetaModel.GROUP);
            clause.setType("RELATED");
            clause.setLike(false);
            clause.setOccur(ClauseModel.Occur.MUST.name());
            clauseGroup.getClauses().add(clause);

            query.getOrClauseGroups().add(clauseGroup);
        }
        
        private void prepareSearchQuery() {
            Map<String, Object> context = new HashMap<String, Object>();
            List<Map<String, Object>> filterItems = new ArrayList<Map<String, Object>>();
            
            Map<String, Object> filter = new HashMap<String, Object>();
            filter.put("itemId", "37");
            filter.put("itemType", "ITEM_TYPE");
            filter.put("itemName", "USER_DEFINE");
            filterItems.add(filter);
            
            filter = new HashMap<String, Object>();
            filter.put("itemId", "0");
            filter.put("itemType", "businessModelName");
            filter.put("itemName", "UDI_ARTICLE");
            filterItems.add(filter);
            
            filter = new HashMap<String, Object>();
            filter.put("itemId", "0");
            filter.put("itemType", "orderByDate");
            filter.put("itemName", "desc");
            filterItems.add(filter);
            
            List<String> scopeGroupId = new ArrayList<String>();
            MapBuilder company = Session.getCompany();
            String companyId = company.getString("itemId");
            scopeGroupId.add(companyId);
            filter = new HashMap<String, Object>();
            filter.put("SUB_GROUP_RELATED", scopeGroupId);
            String relatedItemTypes = "'" + Base64.encodeBase64(filter.toString()) + "'";
            
            filter = new HashMap<String, Object>();
            filter.put("relatedItemTypes", relatedItemTypes);
            filterItems.add(filter);
            
            context.put("searchKey", "\"\"");
            context.put("filterItems", filterItems);
            context.put("pageNumber", "1");
            context.put("itemNumber", "-1");

            put(getEndpoint(), context);
        }

        @Override
        public void preparePostData() {
            prepareSearchQuery();
        }

        @Override
        public boolean doValidate() {
            return true;
        }
    }

    public static class VirtualItemListAsyncRequestCallback extends ServerCallback<String> {

        @Override
        public void process(String data) {
            VirtualItemListAsyncRequest req = (VirtualItemListAsyncRequest) getRequest();
            ArticleListView view = (ArticleListView) req.getView();
            view.getItems().clear();
            view.getRows().clear();
            if (null != data) {
                processCallbackData(view, data);
            }
            controlDisplayLoader(view);
        }

        private void processCallbackData(ArticleListView view, String data) {
            List<Map<String, Object>> itemsFromResponse = MapBuilder.query(data, true).getArray();
            if (itemsFromResponse.size() > 0) {
                processResults(view, itemsFromResponse);
            }
        }

        private void controlDisplayLoader(ArticleListView view) {
            // progress loader
            view.getLoader().setActive(false);
            // list items not found message display
            if (view.getRows().size() > 0) {
                view.setListnotavailablemessagedisplay(false);
            } else {
                view.setListnotavailablemessagedisplay(true);
            }
        }

        private void processResults(ArticleListView view, List<Map<String, Object>> itemsFromResponse) {
            for (Map<String, Object> itemFromResponse : itemsFromResponse) {
                VirtualItemInfo item = new JSON2ObjectConvertor<VirtualItemInfo>().getObject(MapBuilder.query(itemFromResponse).toJSON(), new VirtualItemInfo());
                if (UtilValidate.isNotEmpty(item.getItemId())) {
                    if (item.getItemId().equalsIgnoreCase("-10")) {
                        processInfo(view, item);
                    } else {
                        ArticleListRow row = getRowWithConfiguredColumns(view, item);
                        view.getRows().add(0, row);
                    }
                }
            }
        }

        private ArticleListRow getRowWithConfiguredColumns(ArticleListView view, VirtualItemInfo item) {
            ArticleListRow row = new ArticleListRow();
            row.setItemId(item.getItemId());
            row.setItemType(item.getItemType());
            row.setItemName(item.getItemName());
            row.setThumbnail(item.getThumbnailURL());
            row.setHasOwnerPermission(item.isHasOwnerPermission());
            row.setHasAdminPermission(item.isHasAdminPermission());
            row.setHasWritePermission(item.isHasWritePermission());
            row.setHasReadPermission(item.isHasReadPermission());
            ArticleListColumn column = new ArticleListColumn();
            List<ArticleListColumn> configuredcolumns = view.getConfiguredColumns();
            for (ArticleListColumn col : configuredcolumns) {
                String colId = col.getColumnId();
                if (UtilValidate.isNotEmpty(col)) {
                    column = new ArticleListColumn();
                    if (colId.equalsIgnoreCase(COLUMN_NAME)) {
                        column.setItemText(item.getItemName());
                        column.setItemIconClass(IconModel.getItemTypeIconClass(item.getItemType(), item.getExtension()));
                        column.setItemIconColor(IconModel.getItemTypeIconColor(item.getItemType(), item.getExtension()));
                        column.setItemDescription(item.getDescription());
                        String description = item.getDescription();
                        if (description.length() > 600) {
                            column.setItemShortDescription(description.substring(0,600)+".....");
                        } else {
                            column.setItemShortDescription(item.getDescription());
                        }
                    } else if (colId.equalsIgnoreCase(COLUMN_CREATOR)) {
                        column.setItemText(item.getCreatedBy());
                        column.setItemIconClass("fa fa-user");
                    } else if (colId.equalsIgnoreCase(COLUMN_FILE_VIESION)) {
                        column.setItemText(item.getVersion());
                        column.setItemIconClass("fa fa-vimeo");
                    } else if (colId.equalsIgnoreCase(COLUMN_FILE_SIZE)) {
                        column.setItemText(item.getSizeToDisplay());
                        column.setItemIconClass("fa fa-cube");
                    } else if (colId.equalsIgnoreCase(COLUMN_EMAIL)) {
                        column.setItemIconClass("fa fa-envelope");
                    } else if (colId.equalsIgnoreCase(COLUMN_PHONE)) {
                        column.setItemIconClass("fa fa-phone");
                    }
                    column.setColumnId(col.getColumnId());
                    column.setColumnHeader(col.getColumnHeader());
                    column.setColumnIndex(col.getColumnIndex());
                    column.setColumnPosition(col.getColumnPosition());
                    column.setColumnWidth(col.getColumnWidth());
                    column.setIsVisible(col.isIsVisible());
                    column.setIsSortable(col.isIsSortable());
                    row.getColumns().add(column);
                }
            }
            return row;
        }

        private void processInfo(ArticleListView view, VirtualItemInfo item) {
            boolean hasMore = item.isHasMore();
            view.setHasMoreItemAvailable(hasMore);
            if (hasMore) {
                view.setCurrentItemCount(view.getPageNumber() * 10);
            } else {
                view.setCurrentItemCount(item.getTotalItem());
            }
            view.setTotalItems(item.getTotalItem());
        }
    }

    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            VIEW.renderView("articlelist", "articlelist", "articlelist");
            VIEW.renderView("articlelist", "articlelistview", "articlelistview");
            VIEW.renderView("articlelist", "articlegridview", "articlegridview");
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("articlelist", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    ArticleListView view = new ArticleListView();
                    view.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(view, jsondata);
                    view.setVisible(true);
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

    private class LoadInitialDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            invoke("loadInitialData");
        }
    }

    private class LoadListListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            MapBuilder data = (MapBuilder) signal.getPackets().get(0);
            if (null != data) {
                invoke("loadList", data.toJSON());
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
    
    private class ViewChangeListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            
            String action = signal.getAction();
            if(UtilValidate.isNotEmpty(action)){
                if(action.equalsIgnoreCase(EventConstants.UPDATE_HEADER_ACTION)){
                    MapBuilder data = (MapBuilder) signal.getPackets().get(0);
                    if (null != data) {
                        invoke("updateHeaderTitle", data.getString("title"));
                    }
                }
            }
        }
    }

    private void prepareConfigurationModelFromJSON(ArticleListView view, MapBuilder jsondata) {

        ArticleListConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
            // default view
            String defaultitemview = configurationJson.getString("defaultitemview");
            if (UtilValidate.isNotEmpty(defaultitemview) && defaultitemview.equalsIgnoreCase(GRID_VIEW)) {
                configuration.setDefaultitemview(GRID_VIEW);
                view.setGridViewEnabled(true);
            } else {
                configuration.setDefaultitemview(LIST_VIEW);
                view.setGridViewEnabled(false);
            }
            String visibleCreateButon = configurationJson.getString("visibleCreateButon");
            if (UtilValidate.isNotEmpty(visibleCreateButon) && visibleCreateButon.equalsIgnoreCase(SHOW)) {
                view.getConfiguration().setVisibleCreateButon(SHOW);
                view.setIsVisibleCreateButon(true);
            } else {
                view.getConfiguration().setVisibleCreateButon(HIDE);
                view.setIsVisibleCreateButon(false);
            }

            // filters
            if (!(view.getConfiguredFilters().isEmpty())) {
                view.getConfiguredFilters().clear();
            }
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
                    view.getConfiguredFilters().add(filter);
                }
                // add to configuration filter list
                configuration.getFilters().add(filter);
            }

            // columns
            if (!(configuration.getColumns().isEmpty())) {
                configuration.getColumns().clear();
            }
            if (!(view.getConfiguredColumns().isEmpty())) {
                view.getConfiguredColumns().clear();
            }

            List<Object> columns = configurationJson.getJSONArray("columns").toList();
            for (Object colObj : columns) {
                MapBuilder builder = MapBuilder.query((Map) colObj);
                ArticleListColumn column = new ArticleListColumn();
                column.setColumnId(builder.getString("columnId"));
                column.setColumnHeader(builder.getString("columnHeader"));
                column.setColumnIndex(builder.getInt("columnIndex"));
                column.setColumnPosition(builder.getString("columnPosition"));
                column.setColumnWidth(builder.getString("columnWidth"));
                column.setIsVisible(builder.getBoolean("isVisible"));
                column.setIsSortable(builder.getBoolean("isSortable"));
                configuration.getColumns().add(column);
                view.getConfiguredColumns().add(column);
            }

            // detail component
            JSONObject detailComponentDefinition = configurationJson.getJSONObject("detailComponentDefinition");
            String detailComponent = detailComponentDefinition.getString("component");
            String detailComponentInstanceId = detailComponentDefinition.getString("instanceId");
            ComponentDef def = new ComponentDef();
            def.setComponent(detailComponent);
            def.setInstanceId(detailComponentInstanceId);
            view.setDetailComponentDefinition(def);
            configuration.setDetailComponentDefinition(def);

            JSONObject actionMenuComponentDefinition = configurationJson.getJSONObject("actionMenuComponentDefinition");
            configuration.getActionMenuComponentDefinition().setComponent(actionMenuComponentDefinition.getString("component"));
            configuration.getActionMenuComponentDefinition().setInstanceId(actionMenuComponentDefinition.getString("instanceId"));
            view.getActionMenuComponentDefinition().setComponent(actionMenuComponentDefinition.getString("component"));
            view.getActionMenuComponentDefinition().setInstanceId(actionMenuComponentDefinition.getString("instanceId"));

            JSONObject collectionComponentDefinition = configurationJson.getJSONObject("collectionComponentDefinition");
            configuration.getCollectionComponentDefinition().setComponent(collectionComponentDefinition.getString("component"));
            configuration.getCollectionComponentDefinition().setInstanceId(collectionComponentDefinition.getString("instanceId"));
            view.getCollectionComponentDefinition().setComponent(collectionComponentDefinition.getString("component"));
            view.getCollectionComponentDefinition().setInstanceId(collectionComponentDefinition.getString("instanceId"));

            JSONObject searchBoxComponentDefinition = configurationJson.getJSONObject("searchBoxComponentDefinition");
            configuration.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
            configuration.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
            view.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
            view.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
        }
    }

    @Model(className = "VirtualItemInfo", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemUserId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "collectionType", type = String.class),
        @Property(name = "itemTypeIconClass", type = String.class),
        @Property(name = "itemTypeIconColor", type = String.class),
        @Property(name = "avatar", type = String.class),
        @Property(name = "createdBy", type = String.class),//name
        @Property(name = "createDate", type = String.class),
        @Property(name = "actualCreatedDate", type = String.class),
        @Property(name = "createDateInMS", type = long.class),
        @Property(name = "modifiedBy", type = String.class),//id
        @Property(name = "modified", type = String.class),
        @Property(name = "modifiedTime", type = String.class),
        @Property(name = "actualModifieddDate", type = long.class),// time in ms
        @Property(name = "mimType", type = String.class),
        @Property(name = "extension", type = String.class),
        @Property(name = "version", type = String.class),
        @Property(name = "sizeToDisplay", type = String.class),
        @Property(name = "hasOwnerPermission", type = boolean.class),
        @Property(name = "hasAdminPermission", type = boolean.class),
        @Property(name = "hasWritePermission", type = boolean.class),
        @Property(name = "hasReadPermission", type = boolean.class),
        @Property(name = "hasSubjectPermission", type = boolean.class),
        @Property(name = "totalItem", type = int.class),
        @Property(name = "nextPageNumber", type = int.class),
        @Property(name = "hasMore", type = boolean.class),
        @Property(name = "checked", type = boolean.class),
        @Property(name = "checkedTitle", type = String.class),
        @Property(name = "thumbnailURL", type = String.class),
        @Property(name = "description", type = String.class)
    })
    public static class VirtualItemInfoModel {

    }

    @Model(className = "ArticleListConfiguration", targetId = "", properties = {
        @Property(name = "visibleCreateButon", type = String.class),
        @Property(name = "defaultitemview", type = String.class),
        @Property(name = "filters", type = FilterType.class, array = true),
        @Property(name = "columns", type = ArticleListColumn.class, array = true),
        @Property(name = "detailComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "actionMenuComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "collectionComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class ArticleListManager {

    }

    @Model(className = "FilterType", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "filterType", type = String.class),
        @Property(name = "isSelected", type = boolean.class),})
    public static class FilterTypeManager {
    }

    @Model(className = "ArticleListRow", targetId = "", properties = {
        @Property(name = "index", type = int.class),
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "thumbnail", type = String.class),
        @Property(name = "isSelected", type = boolean.class),
        @Property(name = "columns", type = ArticleListColumn.class, array = true),
        @Property(name = "hasOwnerPermission", type = boolean.class),
        @Property(name = "hasAdminPermission", type = boolean.class),
        @Property(name = "hasWritePermission", type = boolean.class),
        @Property(name = "hasReadPermission", type = boolean.class)
    })
    public static class ArticleListRowManager {
    }

    @Model(className = "ArticleListColumn", targetId = "", properties = {
        @Property(name = "columnId", type = String.class),
        @Property(name = "columnHeader", type = String.class),
        @Property(name = "columnIndex", type = int.class),
        @Property(name = "columnPosition", type = String.class),
        @Property(name = "columnWidth", type = String.class),
        @Property(name = "isVisible", type = boolean.class),
        @Property(name = "isSortable", type = boolean.class),
        @Property(name = "itemIconClass", type = String.class),
        @Property(name = "itemIconColor", type = String.class),
        @Property(name = "itemText", type = String.class),
        @Property(name = "itemShortDescription", type = String.class),
        @Property(name = "itemDescription", type = String.class)
    })
    public static class ArticleListColumnManager {
    }
}
