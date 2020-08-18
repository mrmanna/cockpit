/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.person;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
import io.cloudoffice.platform.cockpit.api.Base64;
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
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;
import org.json.JSONObject;

@Model(className = "PersonView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = PersonConfiguration.class),
    @Property(name = "viewMode", type = String.class),
    @Property(name = "fullViewEnabled", type = boolean.class),
    @Property(name = "visible", type = boolean.class),
    @Property(name = "layoutColumnId", type = String.class),
    
    @Property(name = "itemId", type = String.class),
    @Property(name = "itemName", type = String.class),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "firstName", type = String.class),
    @Property(name = "initials", type = String.class),
    @Property(name = "surnamePrefix", type = String.class),
    @Property(name = "surname", type = String.class),
    @Property(name = "title", type = String.class),
    @Property(name = "genderList", type = Item.class, array = true),
    @Property(name = "selectedGender", type = String.class),
    @Property(name = "datePickerId", type = String.class),
    @Property(name = "dateOfBirth", type = String.class),
    @Property(name = "persPhone", type = String.class),
    @Property(name = "persMobile", type = String.class),
    @Property(name = "emailAddress", type = String.class),
    @Property(name = "primaryEmail", type = String.class),
    @Property(name = "itemImage", type = String.class),
    @Property(name = "fullName", type = String.class),
    @Property(name = "hasOwnerPermission", type = boolean.class),
    @Property(name = "hasAdminPermission", type = boolean.class),
    @Property(name = "hasWritePermission", type = boolean.class),
    @Property(name = "hasReadPermission", type = boolean.class),
    @Property(name = "hasSubjectPermission", type = boolean.class),
    @Property(name = "fileData", type = FileData.class),
    
    //social media
    @Property(name = "socialMediaUp", type = boolean.class),
    @Property(name = "socialMediaDown", type = boolean.class),
    @Property(name = "socialMedia", type = SocialMedia.class),

    // private address
    @Property(name = "privateAddress", type = Address.class),
    @Property(name = "visitAddressUp", type = boolean.class),
    @Property(name = "visitAddressDown", type = boolean.class),
    
    @Property(name = "relatedItemList", type = Item.class, array = true),
    @Property(name = "sharedItemList", type = Item.class, array = true),
    
    //system info
    @Property(name = "createdDate", type = String.class),
    @Property(name = "createdBy", type = String.class),
    @Property(name = "lastModifiedDate", type = String.class),
    @Property(name = "lastModifiedBy", type = String.class)
})

public class PersonComponent extends AbstractComponent<PersonView> {
    
    public static Component getInstance(String instance) {
        return new PersonComponent(instance);
    }
    
    public PersonComponent(String instance) {
        super(instance);
    }

    @Override
    public void setComponentName() {
        this.componentName = "person-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(PersonView.class.getName());
        setDefaultConfigViewName(PersonConfiguration.class.getName());
        addViewName(EventConstants.CREATE_VIEW, PersonView.class.getName());
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.NEW_ITEM_INIT_COMPONENT, new InitNewItemComponentListener());
        attachListener(EventConstants.ENABLE_DETAIL_FULL_VIEW, new EnableFullViewListener());
        attachListener(EventConstants.ENABLE_DETAIL_SPLIT_VIEW, new EnableSplitViewListener());
        attachListener(EventConstants.LOAD_ITEM_DETAIL, new LoadItemDetailListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new FunctionInvokeListener());
    }

    @Override
    public void onError(Error message, Source source) {
    }
    
    @Function
    static void openConfig(PersonView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(PersonView view) {
        view.setDesignerMode(false);
        resetConfiguration(view);
    }
    
    @Function
    static void save(final PersonView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("person", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                resetConfiguration(view);
                closeConfigurationPanel(view);
            }
        });
    }
    
    @Function
    static void resetConfiguration(PersonView view) {
        resetConfigurationModelFromJSON(view);
    }
    
    static void resetConfigurationModelFromJSON(final PersonView view) {
        
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("person", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                PersonConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    view.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
                    configuration.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
                    setComponentDefinition(view, jsondata);
                }
            }
        });
    }
    
    private void prepareConfigurationModelFromJSON(PersonView view, MapBuilder jsondata) {
        
        PersonConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
            view.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
            configuration.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
            setComponentDefinition(view, jsondata);
        }
    }
    
    private static void setComponentDefinition(PersonView view, MapBuilder jsondata) {
        PersonConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        
        configuration.setComponentWidth(configurationJson.getString("componentWidth"));
        JSONObject listComponentDefinition = configurationJson.getJSONObject("listComponentDefinition");
        configuration.getListComponentDefinition().setComponent(listComponentDefinition.getString("component"));
        configuration.getListComponentDefinition().setInstanceId(listComponentDefinition.getString("instanceId"));
        JSONObject actionMenuComponentDefinition = configurationJson.getJSONObject("actionMenuComponentDefinition");
        configuration.getActionMenuComponentDefinition().setComponent(actionMenuComponentDefinition.getString("component"));
        configuration.getActionMenuComponentDefinition().setInstanceId(actionMenuComponentDefinition.getString("instanceId"));
        JSONObject searchBoxComponentDefinition = configurationJson.getJSONObject("searchBoxComponentDefinition");
        configuration.getSearchBoxComponentDefinition().setComponent(searchBoxComponentDefinition.getString("component"));
        configuration.getSearchBoxComponentDefinition().setInstanceId(searchBoxComponentDefinition.getString("instanceId"));
    }
    
    //Added for email pattern validation
    public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);
    public static boolean validate(String emailStr) {
        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
        return matcher.find();
    }
    
    @Function
    public static void showDatePicker(PersonView personView) {
//        DatePicker.setDatePicker("#" + personView.getDatePickerId());
    }
    @Function
    static void socialMediaCollaps(PersonView personView) {
        if (personView.isSocialMediaDown()) {
            personView.setSocialMediaDown(false);
            personView.setSocialMediaUp(true);
        } else {
            personView.setSocialMediaDown(true);
            personView.setSocialMediaUp(false);
        }
    }
    
    @Function
    static void visitAddressCollaps(PersonView personView) {
        if (personView.isVisitAddressDown()) {
            personView.setVisitAddressDown(false);
            personView.setVisitAddressUp(true);
        } else {
            personView.setVisitAddressDown(true);
            personView.setVisitAddressUp(false);
        }
    }    
    
    @Function
    public static void initStaticData(PersonView personView) {

        personView.getGenderList().clear();

        Item item = new Item();
        item.setItemId("Male");
        item.setItemName("Male");
        personView.getGenderList().add(item);

        item = new Item();
        item.setItemId("Female");
        item.setItemName("Female");
        personView.getGenderList().add(item);
        
        // datepicker
        personView.setDatePickerId("person-dp");
        
        // country
        personView.getPrivateAddress().getCountries().clear();
        item = new Item();
        item.setItemId("BGD");
        item.setItemName("Bangladesh");
        personView.getPrivateAddress().getCountries().add(item);

        item = new Item();
        item.setItemId("NLD");
        item.setItemName("Netherlands");
        personView.getPrivateAddress().getCountries().add(item);

        personView.setFullViewEnabled(true);
    }
    
    @Function
    public static void clearPersonData(PersonView view) {
        view.setItemId("0");
        view.setFullName("");
        view.setItemName("");
        view.setFirstName("");
        view.setInitials("");
        view.setSurnamePrefix("");
        view.setSurname("");
        view.setTitle("");
        view.setItemImage("");
        view.setDateOfBirth("");
        view.setPersPhone("");
        view.setPersMobile("");
        view.setEmailAddress("");
        view.setPrimaryEmail("");
        view.getSocialMedia().setFacebook("");
        view.getSocialMedia().setTwitter("");
        view.getSocialMedia().setLinkedIn("");
        view.getPrivateAddress().setStreet("");
        view.getPrivateAddress().setNumber("");
        view.getPrivateAddress().setZipCode("");
        view.getPrivateAddress().setCity("");
        view.getRelatedItemList().clear();
        view.getSharedItemList().clear();
        view.setCreatedBy("");
        view.setCreatedDate("");
        view.setLastModifiedBy("");
        view.setLastModifiedDate("");
        initStaticData(view);
    }
    
    public static boolean checkRequiredData(PersonView view){
        if (UtilValidate.isEmpty(view.getFirstName())) {
            JSUIUtils.alert("Enter First Name");
        } else if (UtilValidate.isEmpty(view.getInitials())) {
            JSUIUtils.alert("Enter Initial Name");
        } else if (UtilValidate.isEmpty(view.getSurname())) {
            JSUIUtils.alert("Enter Surname");
        } else if (UtilValidate.isEmpty(view.getEmailAddress())) {
            JSUIUtils.alert("Enter Email Address");
        } else {
            boolean isEmailValidated = validate(view.getEmailAddress());
            if (isEmailValidated) {
                return true;
            } else {
                JSUIUtils.alert("Enter Valid Address");
            }
        }
        return false;
    }
    
    @Function
    public static void createPerson(PersonView view){
        if (checkRequiredData(view)) {
            createPersonMethod(view);
            JSUIUtils.console("PIC: "+view.getFileData());
        }
    }
    
    @Function
    public static void createPersonMethod(final PersonView view) {
        view.getLoader().setActive(true);
        final boolean isCreateMode = view.getItemId().equals("0");
        final String personItemId = view.getItemId();
        new AsyncRequest<PersonView>(createPerson, view) {
            @Override
            public void preparePostData() {
                
                Map<String, Object> data = new HashMap<String, Object>();
                data.put("itemId", Long.valueOf(view.getItemId()));
                data.put("firstName", "'"+(UtilValidate.isNotEmpty(view.getFirstName())?view.getFirstName():"")+"'");
                data.put("lastName", "'"+(UtilValidate.isNotEmpty(view.getSurname())?view.getSurname():"")+"'");
                data.put("emailAddress", "'"+(UtilValidate.isNotEmpty(view.getEmailAddress())?view.getEmailAddress():"")+"'");
                data.put("primaryEmail", "'"+(UtilValidate.isNotEmpty(view.getPrimaryEmail())?view.getPrimaryEmail():"")+"'");
                data.put("profileImage", "'"+(UtilValidate.isNotEmpty(view.getFileData().getBase64String())?view.getFileData().getBase64String():"")+"'");
                data.put("initials", "'"+(UtilValidate.isNotEmpty(view.getInitials())?view.getInitials():"")+"'");
                data.put("surnamePrefix", "'"+(UtilValidate.isNotEmpty(view.getSurnamePrefix())?view.getSurnamePrefix():"")+"'");
                data.put("surname", "'"+(UtilValidate.isNotEmpty(view.getSurname())?view.getSurname():"")+"'");
                data.put("title", "'"+(UtilValidate.isNotEmpty(view.getTitle())?view.getTitle():"")+"'");
                data.put("new_person_dob", "'"+(UtilValidate.isNotEmpty(view.getDateOfBirth())?view.getDateOfBirth():"")+"'");
                data.put("gender", "'"+(UtilValidate.isNotEmpty(view.getSelectedGender())?view.getSelectedGender():"")+"'");
                data.put("persPhone", "'"+(UtilValidate.isNotEmpty(view.getPersPhone())?view.getPersPhone():"")+"'");
                data.put("persMobile", "'"+(UtilValidate.isNotEmpty(view.getPersMobile())?view.getPersMobile():"")+"'");
                data.put("active", false);
                
                Map<String, Object> media = new HashMap<String, Object>();
                List<Map<String, Object>> socialMedia = new ArrayList<Map<String, Object>>();
                media.put("facebook", "'"+(UtilValidate.isNotEmpty(view.getSocialMedia().getFacebook())?view.getSocialMedia().getFacebook():"")+"'");
                media.put("twitter", "'"+(UtilValidate.isNotEmpty(view.getSocialMedia().getTwitter())?view.getSocialMedia().getTwitter():"")+"'");
                media.put("linkedIn", "'"+(UtilValidate.isNotEmpty(view.getSocialMedia().getLinkedIn())?view.getSocialMedia().getLinkedIn():"")+"'");
                socialMedia.add(media);
                data.put("socialMedia", socialMedia);
                
                Map<String, Object> address = new HashMap<String, Object>();
                List<Map<String, Object>> addresses = new ArrayList<Map<String, Object>>();
                address.put("street", "'"+(UtilValidate.isNotEmpty(view.getPrivateAddress().getStreet())?view.getPrivateAddress().getStreet():"")+"'");
                address.put("number", "'"+(UtilValidate.isNotEmpty(view.getPrivateAddress().getNumber())?view.getPrivateAddress().getNumber():"")+"'");
                address.put("zipCode", "'"+(UtilValidate.isNotEmpty(view.getPrivateAddress().getZipCode())?view.getPrivateAddress().getZipCode():"")+"'");
                address.put("city", "'"+(UtilValidate.isNotEmpty(view.getPrivateAddress().getCity())?view.getPrivateAddress().getCity():"")+"'");
                address.put("country", "'"+(UtilValidate.isNotEmpty(view.getPrivateAddress().getSelectedCountryId())?view.getPrivateAddress().getSelectedCountryId():"")+"'");
                addresses.add(address);
                data.put("addresses", addresses);
                
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("reqContext", "'" + Base64.encodeBase64(data.toString()) + "'");
                put(getEndpoint(), map);
            }
    
            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {
    
            @Override
            public void process(String data) {
                PersonView view = (PersonView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder builder = MapBuilder.query(data);
    
                    String itemId = builder.getString("itemId");
                    String firstName = builder.getString("firstName");
                    String lastName = builder.getString("lastName");
                    String emailAddress = builder.getString("emailAddress");
                    view.setItemName(firstName+" "+lastName);
                    view.getLoader().setActive(false);
                    if (!itemId.equalsIgnoreCase("0") && isCreateMode) {
                        view.setItemId(itemId);
                        saveRelatedItem(view, itemId);
                    } else if (!isCreateMode) {
                        view.setItemId(personItemId);
                    }
                    reloadSelectedPerson(view);
                }
            }
        });
    }
    public static final String createPerson = "\"/VirtualItem-portlet.virtualpersonitem/createPerson\"";
    
    @Function
    public static void reloadSelectedPerson(PersonView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getItemId())
                .addField("itemName", view.getItemName())
                .addField("itemType", QueryMetaModel.PERSON);

        addFilter(view, selectedItem);
        processPersonDetail(view, selectedItem.toJSON());
    }
    
    @Function
    public static void saveRelatedItem(PersonView view, String itemId) {
        new AsyncRequest<PersonView>(saveRelatedItem, view) {
            @Override
            public void preparePostData() {

                List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
                Map<String, Object> map = new HashMap<String, Object>();
                
                map.put("itemId", itemId);
                map.put("itemType", QueryMetaModel.PERSON);
                map.put("itemName", "''");
                map.put("relatedItemId", Session.getCompany().getString("itemId"));
                map.put("relatedItemType", QueryMetaModel.GROUP);
                map.put("searchKey", "''");
                map.put("description", "''");
                map.put("companyRelationTypeA", "''");
                map.put("companyRelationTypeB", "''");
                map.put("personCompanyRelation", "''");
                map.put("personCompanyPhone", "''");
                map.put("personCompanyMobile", "''");
                map.put("personCompanyEmail", "''");
                map.put("function", "''");
                map.put("personCompanyDepartment", "''");
                map.put("engagementEndDate", "''");
                map.put("projectRelationType", "''");
                map.put("isEmployee", false);
                map.put("businessModelName", "''");
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
                if (UtilValidate.isNotEmpty(data)) {
                    PersonView view = (PersonView) getRequest().getView();
                    MapBuilder result = MapBuilder.query(data);
                    String code = result.getString("code");
                    if (code.equalsIgnoreCase("200") && UtilValidate.isNotEmpty(view)) {
                        
                    }
                }
            }
        });
    }
    public static final String saveRelatedItem = "\"/VirtualItem-portlet.searchitem/saveRelatedItems\"";
    
    static void addFilter(PersonView view, MapBuilder selectedItem) {
        String componentName = view.getConfiguration().getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.ADD_FILTER, EventConstants.ADD_FILTER, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void enableCreateMode(PersonView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", "0")
                .addField("itemName", "Untitle")
                .addField("itemType", QueryMetaModel.PERSON);
        
        addFilter(view, selectedItem);
        clearPersonData(view);
        enableFullView(view);
        view.setViewMode("editMode");
    }
    
    @Function
    static void enableFullView(PersonView view) {
        view.setVisible(true);
        view.setFullViewEnabled(true);
        hideList(view);
        String width = "100";
        String layoutColumnId = view.getLayoutColumnId();
        VIEW.invokeJSFunction("LayoutManager.toggleListDetailView(\""+layoutColumnId+"\",\""+width+"\");");
    }
    
    @Function
    static void enableSplitView(PersonView view) {
        view.setVisible(true);
        view.setFullViewEnabled(false);
        showList(view);
        String layoutColumnId = view.getLayoutColumnId();
        String width = view.getConfiguration().getComponentWidth();
        VIEW.invokeJSFunction("LayoutManager.toggleListDetailView(\""+layoutColumnId+"\",\""+width+"\");");
    }
    
    @Function
    static void backToList(PersonView view) {
        enableFullView(view);
        view.setVisible(false);
        clearFilter(view);
        showList(view);
    }
    
    @Function
    static void hideList(PersonView view) {
        String componentName = view.getConfiguration().getListComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getListComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "hideList");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void showList(PersonView view) {
        String layoutColumnId = view.getLayoutColumnId();
        String componentName = view.getConfiguration().getListComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getListComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "showList");
        Components.get(componentName, instanceId).listen(loadSignal);
        String width = "0";
        VIEW.invokeJSFunction("LayoutManager.toggleListDetailView(\""+layoutColumnId+"\",\""+width+"\");");
    }
    
    @Function
    static void clearFilter(PersonView view) {
        String componentName = view.getConfiguration().getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "clearFilters");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void showActionMenu(PersonView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getItemId())
                .addField("itemName", view.getItemName())
                .addField("itemType", QueryMetaModel.PERSON)
                .addField("maximumPermission", getMaximumPermission(view));
        
        String componentName = view.getConfiguration().getActionMenuComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getActionMenuComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.TOOGLE_ACTION_MENU, EventConstants.TOOGLE_ACTION_MENU, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    static String getMaximumPermission(PersonView view) {
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
    
    public static void setViewType(PersonView view, MapBuilder builder) {
        String viewType = builder.getString("viewType");
        boolean isSplitView = builder.getBoolean("isSplitView");
        if (isSplitView) {
            enableSplitView(view);
        } else {
            enableFullView(view);
        }
        view.setViewMode(UtilValidate.isNotEmpty(viewType)?viewType:"editMode");
    }
    
    @Function
    public static void processPersonDetail(PersonView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        view.getLoader().setActive(true);
        clearPersonData(view);
        setViewType(view, builder);
        final String virtualPersonItemId = builder.getString("itemId");
        new AsyncRequest<PersonView>(personDetailMethod, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                map.put("virtualPersonItemId", virtualPersonItemId);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                PersonView view = (PersonView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder builder = MapBuilder.query(data);
                    setPersonDetailData(view, builder);
                    processTagShareRelate(view, builder);
                    getSystemData(view, virtualPersonItemId);
                    view.getLoader().setActive(false);
                }
            }
        });
    }
    public static final String personDetailMethod = "\"/VirtualItem-portlet.virtualpersonitem/getSingleVirtualPersonItem\"";

    static void setPersonDetailData(PersonView view, MapBuilder builder) {
        
        view.setFirstName(UtilValidate.isNotEmpty(builder.getValue("firstName"))?builder.getValue("firstName"):"");
        view.setInitials(UtilValidate.isNotEmpty(builder.getValue("initials"))?builder.getValue("initials"):"");
        view.setSurnamePrefix(UtilValidate.isNotEmpty(builder.getValue("surnamePrefix"))?builder.getValue("surnamePrefix"):"");
        view.setSurname(UtilValidate.isNotEmpty(builder.getValue("surname"))?builder.getValue("surname"):"");
        view.setTitle(UtilValidate.isNotEmpty(builder.getValue("title"))?builder.getValue("title"):"");
        view.setSelectedGender(UtilValidate.isNotEmpty(builder.getValue("gender"))?builder.getValue("gender"):"");
        view.setDateOfBirth(UtilValidate.isNotEmpty(builder.getValue("new_person_dob"))?builder.getValue("new_person_dob"):"");
        view.setPersPhone(UtilValidate.isNotEmpty(builder.getValue("persPhone"))?builder.getValue("persPhone"):"");
        view.setPersMobile(UtilValidate.isNotEmpty(builder.getValue("persMobile"))?builder.getValue("persMobile"):"");
        view.setEmailAddress(UtilValidate.isNotEmpty(builder.getValue("emailAddress"))?builder.getValue("emailAddress"):"");
        view.setPrimaryEmail(UtilValidate.isNotEmpty(builder.getValue("primaryEmail"))?builder.getValue("primaryEmail"):"");
        view.setItemImage(UtilValidate.isNotEmpty(builder.getValue("profileImage"))?builder.getValue("profileImage"):"");
        view.setFullName(UtilValidate.isNotEmpty(builder.getValue("fullName"))?builder.getValue("fullName"):"");
        view.setItemName(UtilValidate.isNotEmpty(builder.getValue("fullName"))?builder.getValue("fullName"):"");
        view.setItemId(UtilValidate.isNotEmpty(builder.getValue("itemId"))?builder.getValue("itemId"):"");
        view.setHasOwnerPermission(builder.getBoolean("hasOwnerPermission"));
        view.setHasAdminPermission(builder.getBoolean("hasAdminPermission"));
        view.setHasWritePermission(builder.getBoolean("hasWritePermission"));
        view.setHasReadPermission(builder.getBoolean("hasReadPermission"));
        
        List<Map<String, Object>> medias = builder.getList("socialMedia");
        if (UtilValidate.isNotEmpty(medias)) {
            Map<String, Object> media = medias.get(0);
            view.getSocialMedia().setFacebook((String) (UtilValidate.isNotEmpty(media.get("facebook"))?media.get("facebook"):""));
            view.getSocialMedia().setTwitter((String) (UtilValidate.isNotEmpty(media.get("twitter"))?media.get("twitter"):""));
            view.getSocialMedia().setLinkedIn((String) (UtilValidate.isNotEmpty(media.get("linkedIn"))?media.get("linkedIn"):""));
        }
        
        List<Map<String, Object>> addresses = builder.getList("addresses");
        if (UtilValidate.isNotEmpty(addresses)) {
            Map<String, Object> address = addresses.get(0);
            view.getPrivateAddress().setStreet((String) (UtilValidate.isNotEmpty(address.get("street"))?address.get("street"):""));
            view.getPrivateAddress().setNumber((String) (UtilValidate.isNotEmpty(address.get("number"))?address.get("number"):""));
            view.getPrivateAddress().setZipCode((String) (UtilValidate.isNotEmpty(address.get("zipCode"))?address.get("zipCode"):""));
            view.getPrivateAddress().setCity((String) (UtilValidate.isNotEmpty(address.get("city"))?address.get("city"):""));
            Item item = new Item();
            item.setItemId((String) (UtilValidate.isNotEmpty(address.get("country"))?address.get("country"):""));
            item.setItemName("Netherlands");
            view.getPrivateAddress().setSelectedCountry(item);
        }
        
        if (builder.getBoolean("hasOwnerPermission")) {
            view.setCreatedBy("me");
        }
    }
    
    public static void processTagShareRelate(PersonView view, MapBuilder builder) {
        view.getRelatedItemList().clear();
        view.getSharedItemList().clear();
        List<Map<String, Object>> relatedItemList = builder.getList("relatedItemName");
        for (Map<String, Object> map : relatedItemList) {
            String type = (String) map.get("itemType");
            if (!type.equalsIgnoreCase(QueryMetaModel.GROUP) && !type.equalsIgnoreCase(QueryMetaModel.NOTE)) {
                Item item = new Item();
                item.setItemId((String) map.get("itemId"));
                item.setItemName((String) map.get("itemName"));
                item.setItemType(type);
                item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss(type));
                view.getRelatedItemList().add(item);
            }
        }
        List<Map<String, Object>> shareItemList = builder.getList("shareItemName");
        for (Map<String, Object> map : shareItemList) {
            String type = (String) map.get("itemType");
            if (type.equalsIgnoreCase(QueryMetaModel.PERSON) || type.equalsIgnoreCase(QueryMetaModel.OWNER)) {
                Item item = new Item();
                int id = (int) map.get("itemId");
                item.setItemId(String.valueOf(id));
                item.setItemName((String) map.get("itemName"));
                item.setItemType(type);
                item.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss(type));
                view.getSharedItemList().add(item);
            }
        }
    }
    
    @Function
    public static void getSystemData(PersonView view, final String virtualPersonItemId) {
        new AsyncRequest<PersonView>(getSystemData, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                map.put("itemId", virtualPersonItemId);
                map.put("itemType", QueryMetaModel.PERSON);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                PersonView view = (PersonView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    setSystemData(view, data);
                }
            }
        });
    }
    public static final String getSystemData = "\"/VirtualItem-portlet.virtualsystemdataitem/getSystemData\"";
    
    public static void setSystemData(PersonView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
                    
        if (UtilValidate.isEmpty(view.getCreatedBy()) || !view.getCreatedBy().equalsIgnoreCase("me")) {
            view.setCreatedBy(builder.getString("createdBy"));
        }
        view.setCreatedDate(builder.getString("createdDate"));
        view.setLastModifiedBy(builder.getString("lastModifiedBy"));
        view.setLastModifiedDate(builder.getString("lastModifiedDate"));
    }
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            VIEW.renderView("person", "person", "person");
            VIEW.renderView("person", "personeditview", "personeditview");
            VIEW.renderView("person", "personmetaview", "personmetaview");
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("person", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    PersonView view = new PersonView();
                    view.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(view, jsondata);
                    initStaticData(view);
                    setView(view);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(view));
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
    
    public class EnableFullViewListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            invoke("enableFullView");
        }
    }
    
    public class EnableSplitViewListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            invoke("enableSplitView");
        }
    }
    
    public class LoadItemDetailListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            MapBuilder data = (MapBuilder) signal.getPackets().get(0);
            if (null != data) {
                invoke("processPersonDetail", data.toJSON());
            }
        }
    }
    
    public class InitNewItemComponentListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponent(signal);
            loadInitialStaticData();
        }

        void loadComponent(Signal signal) {
            VIEW.render(new String[]{"person"});
            PersonView personView = new PersonView();
            personView.setVisible(true);
            setView(personView);
            VIEW.bind(getViewName(EventConstants.CREATE_VIEW), Models.toRaw(personView));
        }
        
        void loadInitialStaticData(){
            invoke("initStaticData");
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

    
    @Model(className = "SocialMedia", targetId = "", properties = {
        @Property(name = "facebook", type = String.class),
        @Property(name = "twitter", type = String.class),
        @Property(name = "linkedIn", type = String.class),
    })
    public class SocialMediaModel {

    }
    
    @Model(className = "Address", targetId = "", properties = {
        @Property(name = "street", type = String.class),
        @Property(name = "number", type = String.class),
        @Property(name = "zipCode", type = String.class),
        @Property(name = "city", type = String.class),
        @Property(name = "countries", type = Item.class, array=true),
        @Property(name = "selectedCountry", type = Item.class),
        @Property(name = "selectedCountryId", type = String.class),
    })
    public class AddressModel {

    }
    
    @Model(className = "Item", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "itemTypeIconCss", type = String.class)
    })
    public class ItemModel {
    }
    
    @Model(className = "FileData", targetId = "", properties = {
        @Property(name = "dataURL", type = String.class),
        @Property(name = "base64String", type = String.class),
        @Property(name = "binaryString", type = String.class),
        @Property(name = "buttonText", type = String.class),
        @Property(name = "fileName", type = boolean.class),
        @Property(name = "userid", type = String.class)
    })
    public class FileDataModel {

    }
    
    @Model(className = "PersonConfiguration", targetId = "", properties = {
        @Property(name = "componentWidth", type = String.class),
        @Property(name = "layoutColumnId", type = String.class),
        @Property(name = "listComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "actionMenuComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class PersonManager {

    }
}
