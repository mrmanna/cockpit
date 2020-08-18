/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.document;

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
import io.cloudoffice.platform.cockpit.api.IconModel;
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
import net.java.html.json.ComputedProperty;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;
import org.json.JSONObject;

@Model(className = "DocumentView", targetId = "", properties = {
    @Property(name = "instance", type = String.class),
    @Property(name = "designerMode", type = boolean.class),
    @Property(name = "configuration", type = DocumentConfiguration.class),
    @Property(name = "viewMode", type = String.class),
    @Property(name = "fullViewEnabled", type = boolean.class),
    @Property(name = "visible", type = boolean.class),
    @Property(name = "layoutColumnId", type = String.class),
    
    @Property(name = "itemId", type = String.class),
    @Property(name = "itemName", type = String.class),
    @Property(name = "fileTypeIcon", type = String.class),
    @Property(name = "fileTypeIconColor", type = String.class),
    @Property(name = "fileName", type = String.class),
    @Property(name = "fileContent", type = String.class),
    @Property(name = "fileType", type = String.class),
    @Property(name = "fileSize", type = String.class),
    @Property(name = "isImage", type = boolean.class),
    @Property(name = "viewerHeight", type = String.class),
    @Property(name = "viewerWidth", type = String.class),
    @Property(name = "dataURL", type = String.class),
    @Property(name = "title", type = String.class),
    @Property(name = "version", type = String.class),
    @Property(name = "versionList", type = FileVersion.class, array = true),
    @Property(name = "formatList", type = FileFormat.class, array = true),
    @Property(name = "relatedItemList", type = Item.class, array = true),
    @Property(name = "sharedItemList", type = Item.class, array = true),
    @Property(name = "fileData", type = FileView.class),
    
    //system info
    @Property(name = "createdDate", type = String.class),
    @Property(name = "createdBy", type = String.class),
    @Property(name = "lastModifiedDate", type = String.class),
    @Property(name = "lastModifiedBy", type = String.class),
    
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "hasOwnerPermission", type = boolean.class),
    @Property(name = "hasAdminPermission", type = boolean.class),
    @Property(name = "hasWritePermission", type = boolean.class),
    @Property(name = "hasReadPermission", type = boolean.class)
})

public class DocumentComponent extends AbstractComponent<DocumentView> {

    public static Component getInstance(String instance) {
        return new DocumentComponent(instance);
    }
    
    public DocumentComponent(String instance) {
        super(instance);
    }
    
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.DESIGNER_MODE, new DesignModeListener());
        attachListener(EventConstants.ENABLE_DETAIL_FULL_VIEW, new EnableFullViewListener());
        attachListener(EventConstants.ENABLE_DETAIL_SPLIT_VIEW, new EnableSplitViewListener());
        attachListener(EventConstants.LOAD_ITEM_DETAIL, new LoadItemDetailListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new FunctionInvokeListener());
        attachListener(EventConstants.NEW_ITEM_INIT_COMPONENT, new InitNewItemComponentListener());
    }
    
    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    @Override
    public void bindViewNames() {
        setDefaultViewName(DocumentView.class.getName());
        setDefaultConfigViewName(DocumentConfiguration.class.getName());
        addViewName(EventConstants.CREATE_VIEW, DocumentView.class.getName());
    }
    
    @Override
    public void setComponentName() {
        this.componentName = "document-component";
    }
    
    @ComputedProperty
    public static boolean isBrowserIE() {
        return JSUIUtils.isBrowserIE();
    }
    
    @Function
    static void openConfig(DocumentView view) {
        view.setDesignerMode(true);
    }
    
    @Function
    static void closeConfigurationPanel(DocumentView view) {
        view.setDesignerMode(false);
        resetConfiguration(view);
    }
    
    @Function
    static void save(final DocumentView view) {
        CONFIG.post(ComponentConfiguration.configPostEndpoint("document", view.getInstance(), ""), view.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log("Save Callback");
                resetConfiguration(view);
                closeConfigurationPanel(view);
            }
        });
    }
    
    @Function
    static void resetConfiguration(DocumentView view) {
        resetConfigurationModelFromJSON(view);
    }
    
    static void resetConfigurationModelFromJSON(final DocumentView view) {
        
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("document", view.getInstance()), null, new CallBack() {
            @Override
            public void handle(String json) {
                MapBuilder jsondata = MapBuilder.query(json);
                DocumentConfiguration configuration = view.getConfiguration();
                JSONObject configurationJson = jsondata.getJsonObject("configuration");
                if (UtilValidate.isNotEmpty(configurationJson)) {
                    view.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
                    configuration.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
                    setComponentDefinition(view, jsondata);
                }
            }
        });
    }
    
    private void prepareConfigurationModelFromJSON(DocumentView view, MapBuilder jsondata) {
        
        DocumentConfiguration configuration = view.getConfiguration();
        JSONObject configurationJson = jsondata.getJsonObject("configuration");
        if (UtilValidate.isNotEmpty(configurationJson)) {
            view.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
            configuration.setLayoutColumnId(configurationJson.getString("layoutColumnId"));
            setComponentDefinition(view, jsondata);
        }
    }
    
    private static void setComponentDefinition(DocumentView view, MapBuilder jsondata) {
        DocumentConfiguration configuration = view.getConfiguration();
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
    
    @Function
    static void enableFullView(DocumentView view) {
        view.setVisible(true);
        view.setFullViewEnabled(true);
        hideList(view);
        String width = "100";
        String layoutColumnId = view.getLayoutColumnId();
        VIEW.invokeJSFunction("LayoutManager.toggleListDetailView(\""+layoutColumnId+"\",\""+width+"\");");
    }
    
    @Function
    static void enableSplitView(DocumentView view) {
        view.setVisible(true);
        view.setFullViewEnabled(false);
        showList(view);
        String layoutColumnId = view.getLayoutColumnId();
        String width = view.getConfiguration().getComponentWidth();
        VIEW.invokeJSFunction("LayoutManager.toggleListDetailView(\""+layoutColumnId+"\",\""+width+"\");");
    }
    
    @Function
    static void backToList(DocumentView view) {
        enableFullView(view);
        view.setVisible(false);
        clearFilter(view);
        showList(view);
    }
    
    @Function
    static void hideList(DocumentView view) {
        String componentName = view.getConfiguration().getListComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getListComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "hideList");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void showList(DocumentView view) {
        String layoutColumnId = view.getLayoutColumnId();
        String componentName = view.getConfiguration().getListComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getListComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "showList");
        Components.get(componentName, instanceId).listen(loadSignal);
        String width = "0";
        VIEW.invokeJSFunction("LayoutManager.toggleListDetailView(\""+layoutColumnId+"\",\""+width+"\");");
    }
    
    @Function
    static void clearFilter(DocumentView view) {
        String componentName = view.getConfiguration().getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "clearFilters");
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    static void addFilter(DocumentView view, MapBuilder selectedItem) {
        String componentName = view.getConfiguration().getSearchBoxComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getSearchBoxComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.ADD_FILTER, EventConstants.ADD_FILTER, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    @Function
    static void enableEditMode(DocumentView view) {
        enableFullView(view);
        view.setViewMode("createMode");
    }
    
    @Function
    static void enableCreateMode(DocumentView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", "0")
                .addField("itemName", "Untitle")
                .addField("itemType", QueryMetaModel.DOCUMENTS);
        
        addFilter(view, selectedItem);
        clearDocumentData(view);
        enableFullView(view);
        view.setViewMode("createMode");
    }
    
    public static boolean checkRequiredData(DocumentView view){
        boolean isCreateMode = view.getItemId().equals("0");
        if (isCreateMode && UtilValidate.isEmpty(view.getFileData().getFileList())) {
            JSUIUtils.alert("Select a File");
        } else if ((isCreateMode && view.getFileData().getFileList().size()==1 && UtilValidate.isEmpty(view.getTitle()))
                || (!isCreateMode && UtilValidate.isEmpty(view.getTitle()))) {
            JSUIUtils.alert("Enter File Title");
        } else {
            return true;
        }
        return false;
    }
    
    @Function
    static void createDocument(DocumentView view) {
        if (checkRequiredData(view)) {
            view.getLoader().setActive(true);
            boolean isCreateMode = view.getItemId().equals("0");
            if (isCreateMode) {
                saveFile(view);
            } else {
                updateFile(view);
            }
        }
    }
    
    @Function
    public static void saveFile(DocumentView view) {
        new AsyncRequest<DocumentView>(createDocumentMethod, view) {
            @Override
            public void preparePostData() {
                List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("fileList", view.getFileData().getFileList());
                map.put("tagList", list);
                map.put("shareList", list);
                map.put("title", view.getFileData().getFileList().size()>1?"''":view.getTitle());
                map.put("showAll", false);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<Map<String, Object>>() {

            @Override
            public void process(String data) {
                DocumentView view = (DocumentView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder builder = MapBuilder.query(data);
                    int code = builder.getInt("code");
                    if (code == 200) {
                        String fileName = builder.getString("fileName");
                        List<Long> ids = new ArrayList<Long>();
                        ids = builder.getList("virtualDocumentItemIds");
                        view.setItemId(String.valueOf(ids.get(ids.size()-1)));
                        view.setItemName(fileName);
                        view.getLoader().setActive(false);
                        reloadSelectedDocument(view);
                        saveRelatedItem(view, ids);
                    }
                }
            }
        });
    }
    public static final String createDocumentMethod = "\"/VirtualItem-portlet.virtualdocumentitem/createDocument\"";
    
    @Function
    public static void updateFile(DocumentView view) {
        new AsyncRequest<DocumentView>(updateDocumentMethod, view) {
            @Override
            public void preparePostData() {
                List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("fileList", view.getFileData().getFileList());
                map.put("tagList", list);
                map.put("shareList", list);
                map.put("itemId", view.getItemId());
                map.put("itemType", QueryMetaModel.DOCUMENTS);
                map.put("title", view.getTitle());
                map.put("showAll", false);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<Map<String, Object>>() {

            @Override
            public void process(String data) {
                DocumentView view = (DocumentView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder builder = MapBuilder.query(data);
                    int code = builder.getInt("code");
                    if (code == 200) {
                        String title = builder.getString("title");
                        view.setItemName(title);
                        reloadSelectedDocument(view);
                    }
                }
            }
        });
    }
    public static final String updateDocumentMethod = "\"/VirtualItem-portlet.virtualdocumentitem/updateDocument\"";
    
    @Function
    public static void reloadSelectedDocument(DocumentView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getItemId())
                .addField("itemName", view.getItemName())
                .addField("itemType", QueryMetaModel.DOCUMENTS);

        addFilter(view, selectedItem);
        processDocumentDetail(view, selectedItem.toJSON());
    }
    
    public static void saveRelatedItem(DocumentView view, List<Long> itemIds) {
        new AsyncRequest<DocumentView>(saveRelatedItem, view) {
            @Override
            public void preparePostData() {

                List<Map<String, Object>> items = new ArrayList<Map<String, Object>>();
                List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
                Map<String, Object> map = new HashMap<String, Object>();
                
                for (int i = 0; i < itemIds.size(); i++) {
                    Map<String, Object> item = new HashMap<String, Object>();
                    item.put("itemId", String.valueOf(itemIds.get(i)));
                    item.put("itemType", QueryMetaModel.DOCUMENTS);
                    items.add(item);
                }

                map.put("items", items);
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
                    DocumentView view = (DocumentView) getRequest().getView();
                    MapBuilder result = MapBuilder.query(data);
                    String code = result.getString("code");
                    if (code.equalsIgnoreCase("200") && UtilValidate.isNotEmpty(view)) {
                        
                    }
                }
            }
        });
    }
    public static final String saveRelatedItem = "\"/VirtualItem-portlet.searchitem/batchSaveRelatedItems\"";
    
    @Function
    static void showActionMenu(DocumentView view) {
        MapBuilder selectedItem = MapBuilder.builder()
                .addField("itemId", view.getItemId())
                .addField("itemName", view.getItemName())
                .addField("itemType", QueryMetaModel.DOCUMENTS)
                .addField("maximumPermission", getMaximumPermission(view));
        
        String componentName = view.getConfiguration().getActionMenuComponentDefinition().getComponent();
        String instanceId = view.getConfiguration().getActionMenuComponentDefinition().getInstanceId();
        Signal loadSignal = new Event(EventConstants.TOOGLE_ACTION_MENU, EventConstants.TOOGLE_ACTION_MENU, selectedItem);
        Components.get(componentName, instanceId).listen(loadSignal);
    }
    
    static String getMaximumPermission(DocumentView view) {
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
    static void clearDocumentData(DocumentView view) {
        view.setDataURL("");
        view.setViewerWidth("");
        view.setViewerHeight("");
        view.setFileTypeIcon("");
        view.setFileTypeIconColor("");
        view.setTitle("");
        view.setItemId("0");
        view.setItemName("");
        view.setFileType("");
        view.setFileSize("");
        view.setVersion("");
        view.setTitle("");
        view.getRelatedItemList().clear();
        view.getSharedItemList().clear();
        view.setCreatedBy("");
        view.setCreatedDate("");
        view.setLastModifiedBy("");
        view.setLastModifiedDate("");
        view.getFileData().setFileContent("");
        view.getFileData().setFileName("");
        view.getFileData().setFileSize("");
        view.getFileData().setItemId("");
        view.getFileData().setItemType("");
        view.getFileData().setMimeType("");
        view.getFileData().getFileList().clear();
        view.getFileData().getFilesName().clear();
    }
    
    public static void setViewType(DocumentView view, MapBuilder builder) {
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
    public static void processDocumentDetail(DocumentView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        view.getLoader().setActive(true);
        clearDocumentData(view);
        setViewType(view, builder);
        final String virtualDocumentItemId = builder.getString("itemId");
        new AsyncRequest<DocumentView>(documentDetailMethod, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                map.put("virtualDocumentItemId", virtualDocumentItemId);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                DocumentView view = (DocumentView) getRequest().getView();
                view.getVersionList().clear();
                view.getFormatList().clear();
                if (UtilValidate.isNotEmpty(data)) {
                    MapBuilder builder = MapBuilder.query(data);
                    processDetailData(view, builder);
                    processTagShareRelate(view, builder);
                    getSystemData(view, virtualDocumentItemId);
                    view.getLoader().setActive(false);
                }
            }
        });
    }
    public static final String documentDetailMethod = "\"/VirtualItem-portlet.virtualdocumentitem/getDocument\"";
    
    public static void processDetailData(DocumentView view, MapBuilder builder) {
        
        String virtualDocumentItemId = builder.getString("virtualDocumentItemId");
        String documentId = builder.getString("documentId");
        String title = builder.getString("title");
        String fileName = builder.getString("fileName");
        String fileType = builder.getString("fileType");
        String fileSize = builder.getString("fileSize");
        String formats = builder.getString("formats");
        String fileContent = builder.getString("fileContent");
        String version = builder.getString("version");
        List<Map<String, Object>> versions = builder.getList("versions");
        String dataUrl = "data:" + fileType + ";base64," + fileContent;

        view.setItemId(virtualDocumentItemId);
        view.setItemName(title);
        view.setTitle(title);
        view.setVersion(version);
        view.setDataURL(dataUrl);
        view.setFileName(fileName);
        view.setFileType(fileType);
        view.setFileSize(fileSize);
        view.setFileTypeIcon(IconModel.getFileTypeIconClass(fileType));
        view.setFileTypeIconColor(IconModel.getFileTypeIconColor(fileType));
        view.setHasOwnerPermission(builder.getBoolean("hasOwnerPermission"));
        view.setHasAdminPermission(builder.getBoolean("hasAdminPermission"));
        view.setHasWritePermission(builder.getBoolean("hasWritePermission"));
        view.setHasReadPermission(builder.getBoolean("hasReadPermission"));

        if (fileType.contains("image")) {
            view.setIsImage(true);
            view.setViewerWidth("100%");
        } else {
            view.setIsImage(false);
            view.setViewerWidth("100%");
            if (view.isFullViewEnabled()) {
                view.setViewerHeight("88vh");
            } else {
                view.setViewerHeight("40vh");
            }
        }

      
        if (builder.getBoolean("hasOwnerPermission")) {
            view.setCreatedBy("me");
        }
    }
    
    public static void processTagShareRelate(DocumentView view, MapBuilder builder) {
        view.getRelatedItemList().clear();
        view.getSharedItemList().clear();
        List<Map<String, Object>> relatedItemList = builder.getList("relatedItemName");
        for (Map<String, Object> map : relatedItemList) {
            String type = (String) map.get("itemType");
            if (!type.equalsIgnoreCase(QueryMetaModel.GROUP)) {
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
    public static void getSystemData(DocumentView view, final String virtualDocumentItemId) {
        new AsyncRequest<DocumentView>(getSystemData, view) {
            @Override
            public void preparePostData() {

                Map<String, Object> map = new HashMap<String, Object>();
                map.put("itemId", virtualDocumentItemId);
                map.put("itemType", QueryMetaModel.DOCUMENTS);
                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback<List<Map<String, Object>>>() {

            @Override
            public void process(String data) {
                DocumentView view = (DocumentView) getRequest().getView();
                if (UtilValidate.isNotEmpty(data)) {
                    setSystemData(view, data);
                }
            }
        });
    }
    public static final String getSystemData = "\"/VirtualItem-portlet.virtualsystemdataitem/getSystemData\"";
    
    public static void setSystemData(DocumentView view, String data) {
        MapBuilder builder = MapBuilder.query(data);
                    
        if (UtilValidate.isEmpty(view.getCreatedBy()) || !view.getCreatedBy().equalsIgnoreCase("me")) {
            view.setCreatedBy(builder.getString("createdBy"));
        }
        view.setCreatedDate(builder.getString("createdDate"));
        view.setLastModifiedBy(builder.getString("lastModifiedBy"));
        view.setLastModifiedDate(builder.getString("lastModifiedDate"));
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
                invoke("processDocumentDetail", data.toJSON());
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
    
    private class DesignModeListener implements EventListener {
        
        @Override
        public void onReceive(Signal signal) {
            Object data = signal.getPackets().get(0);
            if (null != data) {
                invoke(String.valueOf(data));
            }
        }
    }

    public class LoginEventListener implements EventListener {
        
        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }
        
        void loadComponents(Signal signal) {
            VIEW.renderView("document", "document", "document");
            VIEW.renderView("document", "documentcontentview", "documentcontentview");
            VIEW.renderView("document", "documentmetaview", "documentmetaview");
            VIEW.renderView("document", "documenteditview", "documenteditview");
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("document", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    DocumentView view = new DocumentView();
                    view.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(view, jsondata);
                    view.setFullViewEnabled(true);
                    setView(view);
                    VIEW.bind(getDefaultViewName(), Models.toRaw(view));
                }
            });
        }
    }
    
    
    public class InitNewItemComponentListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }
        
        void loadComponents(Signal signal) {
            String instance = getInstanceId();
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("document", instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    MapBuilder jsondata = MapBuilder.query(json);
                    DocumentView view = new DocumentView();
                    view.setInstance(jsondata.getString("instance"));
                    prepareConfigurationModelFromJSON(view, jsondata);
                    view.setVisible(true);
                    view.setFullViewEnabled(true);
                    enableCreateMode(view);
                    setView(view);
                    JSUIUtils.alert("VIEW: "+view);
                    VIEW.bind(getViewName(EventConstants.CREATE_VIEW), Models.toRaw(view));
                }
            });
        }
    }
    
    @Model(className = "FileVersion", targetId = "", properties = {
        @Property(name = "version", type = String.class),
        @Property(name = "fileName", type = String.class),
        @Property(name = "versionURL", type = String.class),
        @Property(name = "formatList", type = FileFormat.class,array = true),
        @Property(name = "selectedFormat", type = FileFormat.class),
        @Property(name = "formatListDisplay",type = String.class),
    })
    public class FileVersionModel {
    }
    
    @Model(className = "FileFormat", targetId = "", properties = {
        @Property(name = "format", type = String.class),
        @Property(name = "formatURL", type = String.class)
    })
    public class FileFormatModel {
    }
    
    @Model(className = "Item", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "itemTypeIconCss", type = String.class)
    })
    public class ItemModel {
    }
    
    @Model(className = "FileView", targetId = "", properties = {
        @Property(name = "fileName", type = String.class),
        @Property(name = "fileContent", type = String.class),
        @Property(name = "mimeType", type = String.class),
        @Property(name = "fileSize", type = String.class),
        @Property(name = "filesName", type = String.class,array=true),
        @Property(name = "fileList", type = File.class,array=true),
        @Property(name = "itemId", type = String.class),
        @Property(name = "single", type = boolean.class),
        @Property(name = "itemType", type = String.class)

    })
    public static class FileViewModel {
        
        @Function
        static void removeFileItem(FileView file, File data) {
            if (file.getFileList().contains(data)) {
                String fileName = data.getFileName();
                file.getFileList().remove(data);
                file.getFilesName().remove(fileName);
            }
        }

        @Function
        static void clearFile(FileView file) {
            file.setFileContent("");
            file.setFileName("");
            file.setFileSize("");
            file.setMimeType("");
            file.getFileList().clear();
            file.getFilesName().clear();
        }

        @Function
        static void selectFile(FileView fileView) {
            String fileName = fileView.getFileName();
            String fileContent = fileView.getFileContent();
            boolean single = fileView.isSingle();
            if(single){
                 fileView.getFilesName().clear();
                 fileView.getFileList().clear();
                 if(fileName!=null && !fileName.isEmpty()){
                    if(!fileView.getFilesName().contains(fileName)){
                        fileView.getFilesName().add(fileName);
                        String mimeType = fileView.getMimeType();
                        String fileSize = fileView.getFileSize();
                        File file = new File();
                        file.setFileName(fileName);
                        file.setFileContent(fileContent);
                        file.setMimeType(mimeType);
                        file.setSize(fileSize);
                        fileView.getFileList().add(file);
                        fileView.setFileName("");
                    } else {
                        JSUIUtils.alert("This file already selected.");
                    }
                }
            } else {
                if(fileName!=null && !fileName.isEmpty()){
                    if(!fileView.getFilesName().contains(fileName)){

                        JSUIUtils.console("fileName :"+fileName); 
                        fileView.getFilesName().add(fileName);
                        String mimeType = fileView.getMimeType();
                        String fileSize = fileView.getFileSize();
                        File file = new File();
                        file.setFileName(fileName);
                        file.setFileContent(fileContent);
                        file.setMimeType(mimeType);
                        file.setSize(fileSize);
                        fileView.getFileList().add(file);
                        fileView.setFileName("");
                    } else {
                        JSUIUtils.alert("This file already selected.");
                    }
                }
            }
        }
    }
    
    @Model(className = "File", targetId = "", properties = {
        @Property(name = "fileName", type = String.class),
        @Property(name = "fileContent", type = String.class),
        @Property(name = "mimeType", type = String.class),
        @Property(name = "size", type = String.class),
    })
    public class FileModel {

        public File prepareFileFromInfo(String fileName, String fileContent, String mimeType, String size) {
            File file = new File();
            file.setFileName(fileName);
            file.setFileContent(fileContent);
            file.setMimeType(mimeType);
            file.setSize(size);
            return file;
        }

    }
    
    @Model(className = "DocumentConfiguration", targetId = "", properties = {
        @Property(name = "componentWidth", type = String.class),
        @Property(name = "layoutColumnId", type = String.class),
        @Property(name = "listComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "actionMenuComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
        @Property(name = "searchBoxComponentDefinition", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
    })
    public static class DocumentManager {
    }
}
