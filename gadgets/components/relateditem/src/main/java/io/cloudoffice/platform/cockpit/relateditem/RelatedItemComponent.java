/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.relateditem;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
import io.cloudoffice.platform.cockpit.api.CallBack;
import io.cloudoffice.platform.cockpit.api.Clause;
import io.cloudoffice.platform.cockpit.api.ClauseGroup;
import io.cloudoffice.platform.cockpit.api.ClauseModel;
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
import net.java.html.json.ComputedProperty;
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
@Model(className = "RelatedItemView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = RelatedItemConfiguration.class),
    @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    
    @Property(name = "selectedItemId", type = String.class),
    @Property(name = "selectedItemName", type = String.class),
    @Property(name = "selectedItemType", type = String.class),
    @Property(name = "relatedItemId", type = String.class),
    @Property(name = "relatedItemName", type = String.class),
    @Property(name = "relatedItemType", type = String.class),
    @Property(name = "relatedItemTypeIcon", type = String.class),
    @Property(name = "businessModelName", type = String.class),
    @Property(name = "autocompletePlaceholderText", type = String.class),
    @Property(name = "visible", type = boolean.class),
    @Property(name = "showRelatedItemList", type = boolean.class),
    @Property(name = "relatedItemList", type = ListItemView.class, array = true),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    
    @Property(name = "inputBoxText", type = String.class),
    @Property(name = "showItemList", type = boolean.class),
    @Property(name = "itemList", type = ListItemView.class, array = true),
    @Property(name = "itemListLoader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    
    @Property(name = "showRelationForm", type = boolean.class),
    @Property(name = "isEmployee", type = boolean.class),
    @Property(name = "employeeClass", type = String.class),
    @Property(name = "isOrgOrgRelation", type = boolean.class),
    @Property(name = "isPersonOrgRelation", type = boolean.class),
    @Property(name = "isPersonProjectRelation", type = boolean.class),
    @Property(name = "datePickerId", type = String.class),
    
    @Property(name = "title", type = String.class),
    @Property(name = "labelText", type = String.class),
    @Property(name = "description", type = String.class),
    @Property(name = "companyRelationTypeA", type = String.class),
    @Property(name = "personCompanyPhone", type = String.class),
    @Property(name = "personCompanyMobile", type = String.class),
    @Property(name = "personCompanyEmail", type = String.class),
    @Property(name = "personCompanyFunction", type = String.class),
    @Property(name = "personCompanyDepartment", type = String.class),
    @Property(name = "engagementEndDate", type = String.class),
    @Property(name = "personCompanyRelation", type = String.class),
    @Property(name = "projectRelationType", type = String.class),
    
    @Property(name = "orgOrgRelationList", type = Item.class, array = true),
    @Property(name = "personCompanyRelationList", type = Item.class, array = true),
    @Property(name = "projectRelationTypeList", type = Item.class, array = true)
})

public class RelatedItemComponent extends AbstractComponent<RelatedItemView> {

    public static Component getInstance() {
        return new RelatedItemComponent();
    }

    public RelatedItemComponent() {
        super();
    }
    
    public static Component getInstance(String instance) {
        return new RelatedItemComponent(instance);
    }

    public RelatedItemComponent(String instance) {
        super(instance);
    }
    
    @Override
    public void setComponentName() {
        this.componentName = "relateditem-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(RelatedItemView.class.getName());
        setDefaultConfigViewName(RelatedItemView.class.getName());
    }
    
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.TOOGLE_ITEM_ACTION, new ToogleRelatedItemListener());
        attachListener(EventConstants.SAVE_RELATED_ITEM, new SaveRelatedItemListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new FunctionInvokeListener());
        attachListener(EventConstants.GET_RELATED_ITEMS, new GetRelatedItemListListener());
        attachListener(EventConstants.REMOVE_RELATED_ITEM, new RemoveRelatedItemListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Function
    static void openConfig(RelatedItemView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(RelatedItemView view) {
        view.setDesignerMode(false);
    }
    
    @Function
    static void save(final RelatedItemView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("relateditem", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                resetConfiguration(view);
                closeConfigurationPanel(view);
            }
        });
    }
    
    @Function
    static void resetConfiguration(RelatedItemView view) {
        resetConfigurationModelFromJSON(view);
    }
    
    static void resetConfigurationModelFromJSON(final RelatedItemView view) {
        
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("relateditem", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                RelatedItemConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    setComponentDefinition(view, jsondata);
                }
            }
        });
    }
    
    private void prepareConfigurationModelFromJSON(RelatedItemView view, MapBuilder jsondata) {
        
        RelatedItemConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
            setComponentDefinition(view, jsondata);
        }
    }
    
    private static void setComponentDefinition(RelatedItemView view, MapBuilder jsondata) {
        RelatedItemConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        
        JSONObject searchBoxComponentDefinition = configurationJson.getJSONObject("searchBoxComponentDefinition");
        configuration.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
        configuration.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
        view.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
        view.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
    }
    
    @Function
    static void clearFilter(RelatedItemView view) {
        String componentName = view.getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "clearFilters");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    public static void toogleRelateItem(RelatedItemView view) {
        defaultInitialData(view);
        if (view.isVisible()) {
            view.setVisible(false);
            //clearFilter(view);
        } else {
            view.setVisible(true);
        }
    }
    
    @Function
    public static void closeRelatedItem(RelatedItemView view) {
        view.setVisible(false);
    }
    
    @Function
    public static void activate(RelatedItemView view, String data) {
        view.setRelatedItemType(data);
        view.getRelatedItemList().clear();
        view.getLoader().setActive(true);
        view.setShowRelatedItemList(false);
        view.setAutocompletePlaceholderText("+ enter "+data.toLowerCase()+" name ...");

        MapBuilder reqParam = MapBuilder.builder();
        reqParam.addField("itemId", view.getSelectedItemId());
        reqParam.addField("itemType", view.getSelectedItemType());
        List<String> relatedItemTypes = new ArrayList<>();
        relatedItemTypes.add(view.getRelatedItemType());
        reqParam.addField("relatedItemTypes", relatedItemTypes);
        processRelatedItemList(view, reqParam.toJSON());
    }
    
    @Function
    public static void toggleRelatedItemList(RelatedItemView view) {
        view.setInputBoxText("");
        view.setShowRelatedItemList(!view.isShowRelatedItemList());
    }
    
    @Function
    public static void processRelatedItem(RelatedItemView view, String data) {
        view.getRelatedItemList().clear();
        toogleRelateItem(view);
        view.getLoader().setActive(true);
        MapBuilder builder = MapBuilder.query(data);
        view.setSelectedItemId(builder.getString("itemId"));
        view.setSelectedItemName(builder.getString("itemName"));
        view.setSelectedItemType(builder.getString("itemType"));
        view.setBusinessModelName(builder.getString("businessModelName"));
        
        MapBuilder reqParam = MapBuilder.builder();
        reqParam.addField("itemId", view.getSelectedItemId());
        reqParam.addField("itemType", view.getSelectedItemType());
        List<String> relatedItemTypes = new ArrayList<>();
        relatedItemTypes.add(view.getRelatedItemType());
        reqParam.addField("relatedItemTypes", relatedItemTypes);
        processRelatedItemList(view, reqParam.toJSON());
    }
    
    @Function
    public static void processRelatedItemList(RelatedItemView view, String data) {

        MapBuilder reqParam = MapBuilder.query(data);
        final String itemId = reqParam.getString("itemId");
        final String itemType = reqParam.getString("itemType");
        final List<String> relatedItemTypes = reqParam.getList("relatedItemTypes");
        final String component = reqParam.getString("component");
        final String instanceId = reqParam.getString("instanceId");

        new AsyncRequest<RelatedItemView>(getRelatedItemList, view) {
            @Override
            public void preparePostData() {

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

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                RelatedItemView view = (RelatedItemView) getRequest().getView();
                if (null != data) {
                    view.getRelatedItemList().clear();
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    for (Map<String, Object> result : results) {
                        if (!result.get("itemId").equals("-10")) {
                            ListItemView item = new ListItemView();
                            item.setItemId((String) result.get("itemId"));
                            item.setItemName((String) result.get("itemName"));
                            item.setItemType((String) result.get("itemType"));
                            item.setAvatar((String) result.get("avatar"));
                            item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss((String) result.get("itemType")));
                            item.setHasReadPermission((boolean) result.get("hasReadPermission"));
                            item.setHasWritePermission((boolean) result.get("hasWritePermission"));
                            item.setHasAdminPermission((boolean) result.get("hasAdminPermission"));
                            item.setHasOwnerPermission((boolean) result.get("hasOwnerPermission"));
                            view.getRelatedItemList().add(item);
                        }
                    }
                }
                view.getLoader().setActive(false);
                if (UtilValidate.isNotEmpty(component) && UtilValidate.isNotEmpty(instanceId)) {
                    // talk to component
                    Signal signal = new Event(EventConstants.RELATED_LIST_ACTION, EventConstants.RECEIVE_COMPONENT_DATA, data);
                    Components.get(component, instanceId).listen(signal);
                }
            }
        });
    }
    public static final String getRelatedItemList = "\"/VirtualItem-portlet.searchitem/search\"";

    @OnPropertyChange("inputBoxText")
    public static void itemSearchAutocomplete(RelatedItemView view) {
        view.setShowRelatedItemList(false);
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
    public static void getItemList(RelatedItemView view) {
        final String itemId = view.getSelectedItemId();
        final String itemType = view.getSelectedItemType();
        final String relatedItemType = view.getRelatedItemType();
        final String searchKey = view.getInputBoxText();
        final List<ListItemView> relatedItems = view.getRelatedItemList();
        new AsyncRequest<RelatedItemView>(getItemList, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                List<Map<String, Object>> existingItems = new ArrayList<Map<String, Object>>();
                Map<String, Object> attributes = new HashMap<String, Object>();
                List<String> fromClause = new ArrayList<String>();
                fromClause.add(relatedItemType);
                
                attributes.put("scopeGroup", Session.getCompany().getString("itemId"));
                if (relatedItemType.equalsIgnoreCase(QueryMetaModel.COLLECTION) || relatedItemType.equalsIgnoreCase(QueryMetaModel.CHANNEL)) {
                    String collectionType = relatedItemType.equalsIgnoreCase(QueryMetaModel.COLLECTION)?QueryMetaModel.COLLECTION_TYPE_GENERIC:QueryMetaModel.COLLECTION_TYPE_MESSAGE;
                    attributes.put("collectionType", collectionType);
                }
                
                if (itemType.equalsIgnoreCase(relatedItemType)) {
                    Map<String, Object> item = new HashMap<String, Object>();
                    item.put("itemId", itemId);
                    item.put("itemType", itemType);
                    existingItems.add(item);
                }
                for (ListItemView relatedItem : relatedItems) {
                    Map<String, Object> existingItem = new HashMap<String, Object>();
                    existingItem.put("itemId", relatedItem.getItemId());
                    existingItem.put("itemType", relatedItem.getItemType());
                    existingItems.add(existingItem);
                }
                
                map.put("searchKey", searchKey);
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
                RelatedItemView view = (RelatedItemView) getRequest().getView();
                view.getItemList().clear();
                view.getItemListLoader().setActive(false);
                if (null != data) {
                    List<Map<String, Object>> results = MapBuilder.query(data, true).getArray();
                    for (Map<String, Object> result : results) {
                        ListItemView item = new ListItemView();
                        item.setItemId((String) result.get("itemId"));
                        item.setItemName((String) result.get("itemName"));
                        item.setItemType((String) result.get("itemType"));
                        item.setAvatar((String) result.get("avatar"));
                        item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss((String) result.get("itemType")));
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
    public static void selectItem(RelatedItemView view, ListItemView data) {
        openRelationForm(view);
        view.setInputBoxText("");
        
        view.setTitle("Relate with "+view.getSelectedItemName());
        view.setLabelText("Selected "+data.getItemType().toLowerCase());
        view.setRelatedItemName(data.getItemName());
        view.setRelatedItemId(data.getItemId());
        view.setRelatedItemTypeIcon(QueryMetaModel.getItemTypeIconCss(data.getItemType()));
    }
    
    @Function
    public static void openRelationForm(RelatedItemView view) {
        initRelationFormStaticData(view);
        view.setShowRelationForm(true);
    }
    
    @Function
    public static void hideRelationForm(RelatedItemView view) {
        view.setShowRelationForm(false);
        clearRelationForm(view);
    }
    
    @Function
    public static void toggleEmplyee(RelatedItemView view) {
        if (view.isIsEmployee()) {
            view.setIsEmployee(false);
            view.setEmployeeClass("");
        } else {
            view.setIsEmployee(true);
            view.setEmployeeClass("active");
        }
    }
    
    @Function
    public static void showDatePicker(RelatedItemView view) {
//        DatePicker.setDatePicker("#" + view.getDatePickerId());
    }
    
    @Function
    public static void initRelationFormStaticData(RelatedItemView view) {
        view.setDatePickerId("relation-dp");
        view.setProjectRelationType("Project Lead");
        initOrgOrgRelationStaticData(view);
        initPersonOrgRelationStaticData(view);
        initProjectRelationStaticData(view);
        checkRelationType(view);
    }
    
    @Function
    public static void initOrgOrgRelationStaticData(RelatedItemView view) {
        view.getOrgOrgRelationList().clear();

        Item item = new Item("Parent", "Parent");
        view.getOrgOrgRelationList().add(item);

        item = new Item("Child", "Child");
        view.getOrgOrgRelationList().add(item);
        
        item = new Item("Sister", "Sister");
        view.getOrgOrgRelationList().add(item);
        
        item = new Item("Network", "Network");
        view.getOrgOrgRelationList().add(item);
    }
    
    @Function
    public static void initPersonOrgRelationStaticData(RelatedItemView view) {
        view.getPersonCompanyRelationList().clear();

        Item item = new Item("Nutral", "Nutral");
        view.getPersonCompanyRelationList().add(item);

        item = new Item("Negative", "Negative");
        view.getPersonCompanyRelationList().add(item);
        
        item = new Item("Active", "Active");
        view.getPersonCompanyRelationList().add(item);
        
        item = new Item("3", "3");
        view.getPersonCompanyRelationList().add(item);
        
        item = new Item("1", "1");
        view.getPersonCompanyRelationList().add(item);
        
        item = new Item("DEBITOR", "DEBITOR");
        view.getPersonCompanyRelationList().add(item);
        
        item = new Item("CREDITOR", "CREDITOR");
        view.getPersonCompanyRelationList().add(item);
    }
    
    @Function
    public static void initProjectRelationStaticData(RelatedItemView view) {
        view.getProjectRelationTypeList().clear();

        Item item = new Item("Project Lead", "Project Lead");
        view.getProjectRelationTypeList().add(item);

        item = new Item("Project Admin", "Project Admin");
        view.getProjectRelationTypeList().add(item);
        
        item = new Item("Project Member", "Project Member");
        view.getProjectRelationTypeList().add(item);
        
        item = new Item("Project Client", "Project Client");
        view.getProjectRelationTypeList().add(item);
        
        item = new Item("None", "None");
        view.getProjectRelationTypeList().add(item);
    }
    
    @Function
    public static void checkRelationType(RelatedItemView view) {
        String itemType = UtilValidate.isNotEmpty(view.getSelectedItemType())?view.getSelectedItemType():"";
        String relatedItemType = UtilValidate.isNotEmpty(view.getRelatedItemType())?view.getRelatedItemType():"";
        if ((itemType.equalsIgnoreCase(QueryMetaModel.PERSON) && relatedItemType.equalsIgnoreCase(QueryMetaModel.ORGANIZATION))
                || (itemType.equalsIgnoreCase(QueryMetaModel.ORGANIZATION) && relatedItemType.equalsIgnoreCase(QueryMetaModel.PERSON))) {
            view.setIsPersonOrgRelation(true);
        }
        if (itemType.equalsIgnoreCase(QueryMetaModel.ORGANIZATION) && relatedItemType.equalsIgnoreCase(QueryMetaModel.ORGANIZATION)) {
            view.setIsOrgOrgRelation(true);
        }
        if ((itemType.equalsIgnoreCase(QueryMetaModel.PERSON) && relatedItemType.equalsIgnoreCase(QueryMetaModel.PROJECT))
                || (itemType.equalsIgnoreCase(QueryMetaModel.PROJECT) && relatedItemType.equalsIgnoreCase(QueryMetaModel.PERSON))) {
            view.setIsPersonProjectRelation(true);
        }
    }
    
    @Function
    public static void clearRelationForm(RelatedItemView view) {
        view.setRelatedItemId("");
        view.setRelatedItemName("");
        view.setIsEmployee(false);
        view.setCompanyRelationTypeA("");
        view.setDescription("");
        view.setEmployeeClass("");
        view.setEngagementEndDate("");
        view.setPersonCompanyFunction("");
        view.setIsOrgOrgRelation(false);
        view.setIsPersonOrgRelation(false);
        view.setIsPersonProjectRelation(false);
        view.setLabelText("");
        view.setPersonCompanyDepartment("");
        view.setPersonCompanyEmail("");
        view.setPersonCompanyMobile("");
        view.setPersonCompanyPhone("");
        view.setPersonCompanyRelation("");
        view.setProjectRelationType("");
        view.setTitle("");
        view.setRelatedItemTypeIcon("");
    }
    
    @ComputedProperty
    static String companyRelationTypeB(String companyRelationTypeA) {

        if (UtilValidate.isEmpty(companyRelationTypeA)) {
            return "";
        }

        if (companyRelationTypeA.equalsIgnoreCase("Parent")) {
            return "Child";
        } else if (companyRelationTypeA.equalsIgnoreCase("Child")) {
            return "Parent";
        } else if (companyRelationTypeA.equalsIgnoreCase("Sister")) {
            return "Sister";
        } else if (companyRelationTypeA.equalsIgnoreCase("Network")) {
            return "Network";
        }
        
        return "";
    }
    
    @Function
    public static void addRelatedItem(RelatedItemView view) {
        if (view.isIsPersonOrgRelation() && view.isIsEmployee()) {
           // view.setEngagementEndDate(DatePicker.getValue("#" + view.getDatePickerId()));
        }
        
        String map = MapBuilder.builder()
                .addField("itemId", view.getSelectedItemId())
                .addField("itemType", view.getSelectedItemType())
                .addField("itemName", view.getSelectedItemName())
                .addField("relatedItemId", view.getRelatedItemId())
                .addField("relatedItemType", view.getRelatedItemType())
                .addField("description", view.getDescription())
                .addField("companyRelationTypeA", view.getCompanyRelationTypeA())
                .addField("companyRelationTypeB", companyRelationTypeB(view.getCompanyRelationTypeA()))
                .addField("personCompanyRelation", view.getPersonCompanyRelation())
                .addField("personCompanyPhone", view.getPersonCompanyPhone())
                .addField("personCompanyMobile", view.getPersonCompanyMobile())
                .addField("personCompanyEmail", view.getPersonCompanyEmail())
                .addField("function", view.getPersonCompanyFunction())
                .addField("personCompanyDepartment", view.getPersonCompanyDepartment())
                .addField("engagementEndDate", view.getEngagementEndDate())
                .addField("projectRelationType", view.getProjectRelationType())
                .addField("isEmployee", view.isIsEmployee())
                .addField("businessModelName", view.getBusinessModelName()).toJSON();
        
        saveRelatedItem(view, map);
    }

    @Override
    public RelatedItemView getView() {
        return super.getView(); //To change body of generated methods, choose Tools | Templates.
    }
    
    @Function
    public static void saveRelatedItem(RelatedItemView view, String data) {
        final MapBuilder builder = MapBuilder.query(data);
        final String component = builder.getString("component");
        final String instanceId = builder.getString("instanceId");
        
        new AsyncRequest<RelatedItemView>(saveRelatedItem, view) {
            @Override
            public void preparePostData() {

                List<Map<String, Object>> list = new ArrayList<>();
                Map<String, Object> map = new HashMap<>();
                
                map.put("itemId", UtilValidate.isNotEmpty(builder.getString("itemId"))?builder.getString("itemId"):"''");
                map.put("itemType", UtilValidate.isNotEmpty(builder.getString("itemType"))?builder.getString("itemType"):"''");
                map.put("itemName", UtilValidate.isNotEmpty(builder.getString("itemName"))?builder.getString("itemName"):"''");
                map.put("relatedItemId", UtilValidate.isNotEmpty(builder.getString("relatedItemId"))?builder.getString("relatedItemId"):"''");
                map.put("relatedItemType", UtilValidate.isNotEmpty(builder.getString("relatedItemType"))?builder.getString("relatedItemType"):"''");
                map.put("searchKey", "''");
                map.put("description", UtilValidate.isNotEmpty(builder.getString("description"))?builder.getString("description"):"''");
                map.put("companyRelationTypeA", UtilValidate.isNotEmpty(builder.getString("companyRelationTypeA"))?builder.getString("companyRelationTypeA"):"''");
                map.put("companyRelationTypeB", UtilValidate.isNotEmpty(builder.getString("companyRelationTypeB"))?builder.getString("companyRelationTypeB"):"''");
                map.put("personCompanyRelation", UtilValidate.isNotEmpty(builder.getString("personCompanyRelation"))?builder.getString("personCompanyRelation"):"''");
                map.put("personCompanyPhone", UtilValidate.isNotEmpty(builder.getString("personCompanyPhone"))?builder.getString("personCompanyPhone"):"''");
                map.put("personCompanyMobile", UtilValidate.isNotEmpty(builder.getString("personCompanyMobile"))?builder.getString("personCompanyMobile"):"''");
                map.put("personCompanyEmail", UtilValidate.isNotEmpty(builder.getString("personCompanyEmail"))?builder.getString("personCompanyEmail"):"''");
                map.put("function", UtilValidate.isNotEmpty(builder.getString("function"))?builder.getString("function"):"''");
                map.put("personCompanyDepartment", UtilValidate.isNotEmpty(builder.getString("personCompanyDepartment"))?builder.getString("personCompanyDepartment"):"''");
                map.put("engagementEndDate", UtilValidate.isNotEmpty(builder.getString("engagementEndDate"))?builder.getString("engagementEndDate"):"''");
                map.put("projectRelationType", UtilValidate.isNotEmpty(builder.getString("projectRelationType"))?builder.getString("projectRelationType"):"''");
                map.put("isEmployee", builder.getBoolean("isEmployee"));
                map.put("businessModelName", UtilValidate.isNotEmpty(builder.getString("businessModelName"))?builder.getString("businessModelName"):"''");
                map.put("selectedCampaignTypeList", list);
                map.put("items", list);

                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                
                MapBuilder result = MapBuilder.builder();
                if (UtilValidate.isNotEmpty(data)) {
                    RelatedItemView view = (RelatedItemView) getRequest().getView();
                    result = MapBuilder.query(data);
                    String code = result.getString("code");
                    if (code.equalsIgnoreCase("200") && UtilValidate.isNotEmpty(view)) {
                        ListItemView item = new ListItemView();
                        item.setItemId(view.getRelatedItemId());
                        item.setItemName(view.getRelatedItemName());
                        item.setItemType(view.getRelatedItemType());
                        item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss(view.getRelatedItemType()));
                        view.getRelatedItemList().add(0,item);
                        hideRelationForm(view);
                    }
                }
                if (UtilValidate.isNotEmpty(component) && UtilValidate.isNotEmpty(instanceId)) {
                    // talk to component
                    Signal signal = new Event(EventConstants.MAKE_RELATION_ACTION, EventConstants.RECEIVE_COMPONENT_DATA, result.toJSON());
                    Components.get(component, instanceId).listen(signal);
                }
            }
        });
    }
    public static final String saveRelatedItem = "\"/VirtualItem-portlet.searchitem/saveRelatedItems\"";
    
    @Function
    public static void deleteRelatedItemFromList(RelatedItemView view, ListItemView data) {
        view.getLoader().setActive(true);
        MapBuilder builder = MapBuilder.builder();
        builder.addField("itemId", view.getSelectedItemId());
        builder.addField("itemType", view.getSelectedItemType());
        builder.addField("relatedItemId", data.getItemId());
        builder.addField("relatedItemType", data.getItemType());
        deleteRelatedItem(view, builder.toJSON());
    }
    
    
    @Function
    public static void deleteRelatedItem(RelatedItemView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        final String component = builder.getString("component");
        final String instanceId = builder.getString("instanceId");
        
        final String itemId = builder.getString("itemId");
        final String itemType = builder.getString("itemType");
        final String relatedItemId = builder.getString("relatedItemId");
        final String relatedItemType = builder.getString("relatedItemType");
        new AsyncRequest<RelatedItemView>(deleteRelatedItem, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<>();
                Map<String, Object> relatedItemData = new HashMap<>();
                relatedItemData.put("itemId", itemId);
                relatedItemData.put("itemType", itemType);
                relatedItemData.put("relatedItemId", relatedItemId);
                relatedItemData.put("relatedItemType", relatedItemType);

                map.put("relatedItemData", relatedItemData);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                RelatedItemView view = (RelatedItemView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder result = MapBuilder.query(data);
                    String code = result.getString("code");
                    if (code.equalsIgnoreCase("200")) {
                        removeItemFromRelatedList(view, relatedItemId);
                    }
                }
                view.getLoader().setActive(false);
                if (UtilValidate.isNotEmpty(component) && UtilValidate.isNotEmpty(instanceId)) {
                    // talk to component
                    Signal signal = new Event(EventConstants.BREAKUP_RELATION_ACTION, EventConstants.RECEIVE_COMPONENT_DATA, data);
                    Components.get(component, instanceId).listen(signal);
                }
            }
            
            private void removeItemFromRelatedList(RelatedItemView view, String itemId){
                ListItemView selectedItemView = null;
                List<ListItemView> relatedItems = view.getRelatedItemList();
                for (ListItemView itemView : relatedItems) {
                    String id = itemView.getItemId();
                    if (UtilValidate.isNotEmpty(id)
                            && UtilValidate.isNotEmpty(itemId)
                            && id.equalsIgnoreCase(itemId)) {
                        selectedItemView = itemView;
                    }
                }
                if (null != selectedItemView) {
                    view.getRelatedItemList().remove(selectedItemView);
                }
            }
            
        });
    }
    public static final String deleteRelatedItem = "\"/VirtualItem-portlet.searchitem/deleteRelatedItem\"";
    
    @Function
    public static void defaultInitialData(RelatedItemView view) {
        view.getLoader().setActive(false);
        view.setShowRelatedItemList(false);
        view.setShowItemList(false);
        view.getItemListLoader().setActive(false);
        view.getItemList().clear();
        view.getRelatedItemList().clear();
        view.setRelatedItemType(QueryMetaModel.PERSON);
        view.setInputBoxText("");
        view.setAutocompletePlaceholderText("+ enter person name ...");
    }
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            VIEW.render(new String[]{"relateditem"});
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("relateditem", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    RelatedItemView view = new RelatedItemView();
                    view.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(view, jsondata);
                    defaultInitialData(view);
                    setView(view);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(view));
                }
            });
        }
    }
    
    public class ToogleRelatedItemListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            toogleRelatedItem(signal);
        }

        void toogleRelatedItem(Signal signal) {
            MapBuilder data = (MapBuilder) signal.getPackets().get(0);
            if (UtilValidate.isNotEmpty(data)) {
                invoke("processRelatedItem", data);
            }
        }
    }
    
    public class SaveRelatedItemListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            if (UtilValidate.isNotEmpty(signal.getPackets().get(0))) {
                saveRelatedItem(getView(), (String) signal.getPackets().get(0));
            }
        }
    }
    
    public class RemoveRelatedItemListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            if (UtilValidate.isNotEmpty(signal.getPackets().get(0))) {
                deleteRelatedItem(getView(), (String) signal.getPackets().get(0));
            }
        }
    }
    
    public class GetRelatedItemListListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            if (UtilValidate.isNotEmpty(signal.getPackets().get(0))) {
                processRelatedItemList(getView(), (String) signal.getPackets().get(0));
            }
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
        @Property(name = "itemTypeIconCss", type = String.class),
        @Property(name = "avatar", type = String.class),
        @Property(name = "hasOwnerPermission", type = boolean.class),
        @Property(name = "hasAdminPermission", type = boolean.class),
        @Property(name = "hasWritePermission", type = boolean.class),
        @Property(name = "hasReadPermission", type = boolean.class)
    })
    public class ListItemViewModel {
        
    }
    
    @Model(className = "Item", targetId = "", properties = {
        @Property(name = "id", type = String.class),
        @Property(name = "name", type = String.class)
    })
    public class ItemModel {

    }
    
    @Model(className = "RelatedItemConfiguration", targetId = "", properties = {
        @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class RelatedItemManager {

    }
}
