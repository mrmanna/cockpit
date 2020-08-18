/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.layout;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.Application;
import io.cloudoffice.platform.cockpit.api.CallBack;
import io.cloudoffice.platform.cockpit.api.Component;
import io.cloudoffice.platform.cockpit.api.ComponentConfiguration;
import static io.cloudoffice.platform.cockpit.api.ComponentConfiguration.CONFIG;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.JSON2ObjectConvertor;
import io.cloudoffice.platform.cockpit.api.Logger;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.api.UtilValidate;
import io.cloudoffice.platform.cockpit.api.WebDB;
import io.cloudoffice.platform.cockpit.js.DelayCall;
import io.cloudoffice.platform.cockpit.js.JSUIUtils;
import io.cloudoffice.platform.cockpit.js.VIEW;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;
import org.json.JSONArray;

@Model(className = "Layout", targetId = "", properties = {
    @Property(name = "id", type = String.class),
    @Property(name = "name", type = String.class),
    @Property(name = "currentPath", type = String.class),
    @Property(name = "domain", type = Domain.class),
    @Property(name = "temppath", type = Path.class),
    @Property(name = "pathDrop", type = boolean.class),
    @Property(name = "newPathPanelDisplay", type = boolean.class),
    @Property(name = "themeId", type = String.class),
    @Property(name = "designerOn", type = boolean.class),
    @Property(name = "componentListDisplay", type = boolean.class),
    @Property(name = "componentListLoader", type = boolean.class),
    @Property(name = "subscribedComponents", type = io.cloudoffice.platform.cockpit.layout.ComponentDef.class, array = true),
    @Property(name = "subscribedComponentDropZone", type = io.cloudoffice.platform.cockpit.layout.Column.class),
    @Property(name = "layoutDrop", type = boolean.class),
    @Property(name = "props", type = Prop.class, array = true),
    @Property(name = "propOn", type = boolean.class),
    @Property(name = "propPanel", type = Properties.class),
    @Property(name = "rows", type = io.cloudoffice.platform.cockpit.layout.Row.class, array = true),
    @Property(name = "editable", type = boolean.class),
    @Property(name = "inputfieldvalue", type = String.class),
    @Property(name = "updateloader", type = boolean.class),
    @Property(name = "isLoggedInUserCompanyAdmin", type = boolean.class)
    
})
public class LayoutComponent extends AbstractComponent<Layout> {
    private final static String PROP_PANEL_COMPONENT = "proppanelcomponent";
    private final static String INSERT = "insert";
    private final static String DELETE = "delete";
    private final static String ROW = "row";
    private final static String COLUMN = "column";
    private final static String UPDATESUBSCRIBEDCOMPONENTLIST = "updatesubscribedcomponentlist";
    private final static String OPENSUBSCRIBEDCOMPONENTLIST = "opensubscribedcomponentlist";
    private final static String UPDATERENDEREDLAYOUT = "updaterenderedlayout";
    private final static String UPDATEDOMAIN = "updatedomain";
    private final static String PUTPATHONEDITPANEL = "putpathoneditpanel";

    /**
     * Initialize
     */
    private static Component defaultInstance = new LayoutComponent();

    public static Component getDefaultInstance() {
        return defaultInstance;
    }

    public LayoutComponent() {
        super();
    }
    
    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoadLayout());
        attachListener(EventConstants.DESIGNER_MODE, new DesignerModeListener());
        attachListener(EventConstants.INVOKE_FUNCTION, new InvokeFunctionListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setComponentName() {
        this.componentName = "layout-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(Layout.class.getName());
    }
    
    @Override
    public void initStorage() {
        setOfflineIndexedStorage(new WebDB.IndexTableManager(this));
        getOfflineIndexedStorage().createTable();
    }

     
    
    
    
    
    
    
//PATH: START-------------------------------------------------------------------
    public static Path getInitialPath() {
        Path path = new Path();
        path.setPath("");
        path.setLayout("");
        path.setMlayout("");
        path.setIsHome(false);
        path.setIsSecure(false);
        return path;
    }
    
    @Function
    static void showNewPathPanel(Layout layout) {
        layout.setTemppath(getInitialPath());
        layout.setNewPathPanelDisplay(true);
    }
    
    @Function
    static void hideNewPathPanel(Layout layout){
        layout.setNewPathPanelDisplay(false);
        layout.setTemppath(getInitialPath());
    }

    @Function
    static void showPaths(final Layout layout) {
        layout.setPathDrop(!layout.isPathDrop());
        if (layout.isPathDrop()) {
            CONFIG.fetch(ComponentConfiguration.pathsListFetchEndpoint(), null, new CallBack() {
                @Override
                public void handle(String json) {
                    Domain domain = new JSON2ObjectConvertor<Domain>().getObject(json, new Domain());
                    layout.setDomain(domain);
                }
            });
        }
    }
    
    @Function
    static void savePath(final Layout layout) {

        Path currentpathinfo = layout.getTemppath();
        String pathname = currentpathinfo.getPath();
        pathname = pathname.replaceAll("[\\s\\d(){}\\[\\]\\/\\-\\+\\\\%?'$&#@!~_,;:*^|=_<>]+", "");
        if (UtilValidate.isNotEmpty(pathname)) {
            currentpathinfo.setPath("/" + pathname.toLowerCase());
            currentpathinfo.setLayout("blanklayout");
            currentpathinfo.setMlayout("blanklayout");
            readDomainInformationAndWriteNewPath(currentpathinfo);
        }
    }

    public static void readDomainInformationAndWriteNewPath(final Path path) {
        CONFIG.fetch(ComponentConfiguration.pathsListFetchEndpoint(), null, new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> Get information from the domain json.");
                Domain domain = new JSON2ObjectConvertor<Domain>().getObject(json, new Domain());
                if (pathExistOnDomainPaths(domain, path.getPath())) {
                    // when path already exists on the domain path list
                } else {
                    // add as new path
                    if (path.isIsHome()) {
                        // make home status false for each path on domain 
                        makeHomeStatusFalseOnEachPath(domain);
                    }
                    // enlist the new path to the domain
                    domain.getPaths().add(path);
                    // write on the domain json
                    writeondomainJSON(domain);
                    copyrawlayoutfromtheplatformlayoutstore(path.getPath());
                }
            }
        });
    }
    
    public static void makeHomeStatusFalseOnEachPath(Domain domain) {
        for (Path curpath : domain.getPaths()) {
            curpath.setIsHome(false);
        }
    }
    
    public static void makeitselfhomepath(Domain domain, String newpathname) {
        for (Path curpath : domain.getPaths()) {
            if (UtilValidate.isNotEmpty(curpath.getPath())
                    && UtilValidate.isNotEmpty(newpathname)
                    && newpathname.equalsIgnoreCase(curpath.getPath())) {
                // if path found then make it as home path
                curpath.setIsHome(true);
            } else {
                // otherwise make home status false
                curpath.setIsHome(false);
            }
        }
    }
    
    public static boolean pathExistOnDomainPaths(Domain domain, String newpathname) {
        for (Path curpath : domain.getPaths()) {
            if (UtilValidate.isNotEmpty(curpath.getPath())
                    && UtilValidate.isNotEmpty(newpathname)
                    && newpathname.equalsIgnoreCase(curpath.getPath())) {
                return true;
            }
        }
        return false;
    }

    @Function
    public static void updatedomainJSON(Layout layout, String data) {
        Domain domain = new JSON2ObjectConvertor<Domain>().getObject(data, new Domain());
        writeondomainJSON(domain);
    }
        
    public static void writeondomainJSON(final Domain domain) {
        CONFIG.post(ComponentConfiguration.domainPostEndpoint(), domain.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> Successfully written on the domain json.");
                Signal updatedomainpostprocess = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "updatedomainpostprocess");
                getDefaultInstance().listen(updatedomainpostprocess);
                Signal reloadStyle = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "reloadStyle");
                getDefaultInstance().listen(reloadStyle);
            }
        });
    }

    public static void copyrawlayoutfromtheplatformlayoutstore(final String pathname) {
        CONFIG.fetch(ComponentConfiguration.rawlayoutcopyendpoint(pathname), null, new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> Layout copied.");
            }
        });
    }
    
    
    
    @Function
    static void updatedomainpostprocess(final Layout layout) {
        // hide new path create panel
        layout.setNewPathPanelDisplay(false);
        // clear the input field on new path panel
        layout.setTemppath(getInitialPath());
        // get the path list again read from the json
        CONFIG.fetch(ComponentConfiguration.pathsListFetchEndpoint(), null, new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> Get domain information and rerfesh the panel.");
                Domain domain = new JSON2ObjectConvertor<Domain>().getObject(json, new Domain());
                layout.setDomain(domain);
                // open the path list
                layout.setPathDrop(true);
            }
        });
    }
    
//PATH: END---------------------------------------------------------------------    
    


    
    
    
    
    
    
    
    @Function
    static void showLayouts(final Layout layout) {
        layout.setLayoutDrop(!layout.isLayoutDrop());
        if (layout.isLayoutDrop()) {
            CONFIG.fetch(ComponentConfiguration.layoutListFetchEndpoint(), null, new CallBack() {
                @Override
                public void handle(String json) {
                    layout.getProps().clear();
                    Object[] list = MapBuilder.query(json).getArray("layouts");
                    List<Prop> props = new ArrayList<Prop>();
                    for (Object string : list) {
                        props.add(new Prop("layout", String.valueOf(string)));
                    }
                    layout.getProps().addAll(props);
                }
            });
        }
    }

    @Function
    static void showThemes(final Layout layout) {
        layout.setLayoutDrop(!layout.isLayoutDrop());
        if (layout.isLayoutDrop()) {
            CONFIG.fetch(ComponentConfiguration.layoutListFetchEndpoint(), null, new CallBack() {
                @Override
                public void handle(String json) {
                    layout.getProps().clear();
                    Object[] list = MapBuilder.query(json).getArray("themes");
                    for (Object string : list) {
                        layout.getProps().add(new Prop("theme", String.valueOf(string)));
                    }
                }
            });
        }
    }

    @Function
    static void showSassVariables(Layout view) {
        MapBuilder data = MapBuilder.builder().addField("layout", view.getId()).addField("id", view.getId());
        Components.LAYOUT.listen(new Event(EventConstants.PROP_PANEL, EventConstants.DESIGNER_MODE, data));
    }

    @Function
    static void readSassVariables(final Layout view, String data) {
        MapBuilder dataMap = MapBuilder.query(data);
        final String id = dataMap.getString("id");
        CONFIG.fetch(ComponentConfiguration.layoutStyleConfigVariablesFetchEndpoint(id), null, new CallBack() {
            @Override
            public void handle(String json) {
                List<Prop> props = getVariablesAsPorp(json);
                view.setPropOn(true);
                Properties style = new Properties();
                style.setId(id);
                style.setTitle("Style Panel");
                view.setPropPanel(style);
                view.getPropPanel().getProps().clear();
                view.getPropPanel().getProps().addAll(props);
            }
        });
    }
    
    @Function
    static void showComponentStyle(final Layout view, String data) {
        MapBuilder dataMap = MapBuilder.query(data);
        final String component = dataMap.getString("component");
        final String instance = dataMap.getString("instance");
        CONFIG.fetch(ComponentConfiguration.componentStyleConfigVariablesFetchEndpoint(component, instance), null, new CallBack() {
            @Override
            public void handle(String json) {
                List<Prop> props = getVariablesAsPorp(json);
                view.setPropOn(true);
                Properties style = new Properties();
                style.setTitle(component + " " + instance + " Style");
                style.setId(instance);
                style.setComponent(true);
                style.setComponentName(component);
                style.setInstanceId(instance);
                view.setPropPanel(style);
                view.getPropPanel().getProps().clear();
                view.getPropPanel().getProps().addAll(props);
            }
        });

    }

    @Function
    static void showComponentConfig(final Layout view, String data) {
        MapBuilder dataMap = MapBuilder.query(data);
        final String component = dataMap.getString("component");
        final String instance = dataMap.getString("instance");
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint(component, instance), null, new CallBack() {
            @Override
            public void handle(String json) {
                List<Prop> props = getVariablesAsPorp(json);
                view.setPropOn(true);
                Properties config = new Properties();
                config.setTitle(component + " " + instance + " Config");
                config.setId(instance);
                config.setComponent(true);
                config.setConfig(true);
                config.setComponentName(component);
                config.setInstanceId(instance);
                view.setPropPanel(config);
                view.getPropPanel().getProps().clear();
                view.getPropPanel().getProps().addAll(props);
            }
        });

    }
    
    @Function
    static void showupdateloader(Layout view) {
        view.setUpdateloader(true);
    }

    @Function
    static void hideupdateloader(Layout view) {
        view.setUpdateloader(false);
    }
    
    @Function
    static void closePropPanel(Layout view) {
        view.setPropOn(!view.isPropOn());
    }

    @Function
    static void saveProperties(Layout view) {
        boolean isComponent = view.getPropPanel().isComponent();
        boolean isConfiguration = view.getPropPanel().isConfig();
        if (!isComponent) {
            saveLayoutProperties(view);
        } else if (isConfiguration) {
            saveComponentConfigProperties(view);
        } else {
            saveComponentStyleProperties(view);
        }
    }
    
    @Function
    static void opensubscribedcomponentlist(Layout view, String data) {
        // column information where the component will be dropped
        Column column = new JSON2ObjectConvertor<Column>().getObject(data, new Column());
        view.setSubscribedComponentDropZone(column);

        view.setComponentListDisplay(true);
        view.setComponentListLoader(true);

        // microservice calling for getting subscribed components from json
        getSubscribedComponentsFromJSON();
    }
    
    @Function
    static void updateSubscribedComponentList(Layout view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        JSONArray subscribedComponents = builder.getJsonArray("subscribedComponents");
        // Clear subscribed component list
        view.getSubscribedComponents().clear();
        // Add subscribed component to the subscribed component list read from json
        for (int i = 0; i < subscribedComponents.length(); i++) {
            ComponentDef componentDef = new JSON2ObjectConvertor<ComponentDef>().getObject(subscribedComponents.getJSONObject(i).toString(), new ComponentDef());
            view.getSubscribedComponents().add(componentDef);
        }
        // hide list loader
        view.setComponentListLoader(false);
    }
    
    @Function
    static void hideComponentList(Layout view){
        view.setComponentListDisplay(false);
        view.getSubscribedComponents().clear();
    }
    
    @Function
    static void hideStylePanel(Layout view){
        view.setPropOn(false);
    }
    
    @Function
    static void reloadStyle(Layout view){
        VIEW.invokeJSFunction("LayoutManager.styleReload(\"" + view.getId() + "\")");
    }
    
    @Function
    static void reloadComponentStyle(Layout view){
        String component = view.getPropPanel().getComponentName();
        String instance = view.getPropPanel().getInstanceId();
        VIEW.invokeJSFunction("LayoutManager.componentStyleReload(\""+component+"\",\""+instance+"\")");
    }

    @Function
    static void insertComponent(Layout view, ComponentDef data) {
        
        // show update loader
        showupdateloader(view);
        
        // Prepare component that will be dropped
        int nextInstanceIdNo = getNextInstanceIdNo(view, data.getName());
        String nextInstanceId = (Arrays.asList(data.getName().split("-")).get(0)).concat("instance").concat(String.valueOf(nextInstanceIdNo));
        data.setInstance(true);
        data.setInstanceName(data.getModel().concat(nextInstanceId));
        data.setInstanceId(nextInstanceId);
        // Drop component to the selected dropzone
        Column dropzone = view.getSubscribedComponentDropZone();
        // Call microservice to drop component to the layout json
        dropComponentToTheLayoutJSON(data.toString(), dropzone.toString());
    }
    
    @Function
    static void createRow(Layout layout) {
        // show update loader
        showupdateloader(layout);

        // prepare new row information
        int nextrownumber = getNextRowId(layout);
        String rowid = "row" + nextrownumber;
        String rowname = "Row " + nextrownumber;
        // update layout json
        MapBuilder builder = MapBuilder.builder();
        builder.addField("rowid", rowid);
        builder.addField("rowname", rowname);
        addNewRowToTheLayoutJSON(builder);
    }

    @Function
    static void toggleDesignMode(Layout layout) {
        layout.setDesignerOn(!layout.isDesignerOn());
        layout.setComponentListDisplay(false);
        Components.LAYOUT.getFlags().put("designMode", layout.isDesignerOn());
    }
    
    @Function
    static void enableLayoutEdit(Layout view) {
        view.setInputfieldvalue(view.getName());
        view.setEditable(true);
    }
        
    @Function
    static void disableLayoutEdit(Layout view) {
        view.setInputfieldvalue("");
        view.setEditable(false);
    }
        
    @Function
    static void updateLayoutName(Layout view) {
        view.setName(view.getInputfieldvalue());
        disableLayoutEdit(view);
        updateName(view);
    }

    @Function
    static void updatelayout(Layout layout) {
        Logger.log(">>> Start updating layout.");
        updateLayoutFromJSON();
        reloadStyle(layout);
    }
    
    @Function
    static void updaterenderedlayout(Layout layout, String data) {
        Layout layoutdata = new JSON2ObjectConvertor<Layout>().getObject(data, new Layout());
        layout.getRows().clear();
        layout.getRows().addAll(layoutdata.getRows());
        hideupdateloader(layout);
        Logger.log(">>> Layout updating done.");
    }
    
    public static int getNextInstanceIdNo(Layout layout, String componentName) {
        int nextInstanceIdNo = 0;
        for (Row row : layout.getRows()) {
            for (Column column : row.getColumns()) {
                for (ComponentDef component : column.getComponents()) {
                    if (component.getName().equalsIgnoreCase(componentName)) {
                        List<String> splitstringlist = Arrays.asList(component.getInstanceId().split("instance"));
                        int instanceIdOnComponent = Integer.valueOf(splitstringlist.get(1));
                        if (instanceIdOnComponent > nextInstanceIdNo) {
                            nextInstanceIdNo = instanceIdOnComponent;
                        }
                    }
                }
            }
        }
        return nextInstanceIdNo + 1;
    }
    
    public static void dropComponentToTheLayoutJSON(final String componentdetails, final String dropzonedetails) {
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
            @Override
            public void handle(String json) {
                Layout layout = new JSON2ObjectConvertor<Layout>().getObject(json, new Layout());
                dropComponentOnDropZone(layout, componentdetails, dropzonedetails);
            }
        });
    }
    
    public static void dropComponentOnDropZone(Layout layout, String componentdetails, String dropzonedetails) {

        // drop component on layout
        final ComponentDef component = new JSON2ObjectConvertor<ComponentDef>().getObject(componentdetails, new ComponentDef());
        Column dropzone = new JSON2ObjectConvertor<Column>().getObject(dropzonedetails, new Column());
        for (Row row : layout.getRows()) {
            for (Column column : row.getColumns()) {
                if (dropzone.getId().equalsIgnoreCase(column.getId())) {
                    column.getComponents().add(component);
                }
            }
        }

        // Update the json
        CONFIG.post(ComponentConfiguration.layoutConfigPostEndpoint(layout.getId()), layout.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> Component dropped successfully.");
                Signal loadSignal = new Event(EventConstants.LOGIN_SUCCESS, EventConstants.LOGIN_SUCCESS);
                Components.get(component.getComponent(), component.getInstanceId()).listen(loadSignal);
                Signal updaterenderedlayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "updatelayout");
                getDefaultInstance().listen(updaterenderedlayoutsignal);
            }
        });
    }
    
    /**
     * This method is used to fetch subscribed component list from the
     * subscribedcomponents.json by calling a microservice and return to the
     * callback
     */
    public static void getSubscribedComponentsFromJSON() {
        // fetch subscribedcomponents.json on layout folder
        CONFIG.fetch(ComponentConfiguration.layoutStaticFetchEndpoint("subscribedcomponents", "json"), null, new CallBack() {
            @Override
            public void handle(String json) {
                // send fetched data to the layout by updateSubscribedComponentList function
                Signal loadSignal = new Event(UPDATESUBSCRIBEDCOMPONENTLIST, EventConstants.INVOKE_FUNCTION, json);
                getDefaultInstance().listen(loadSignal);
            }
        });
    }   
    
    private static void saveComponentConfigProperties(Layout view) {
        String component = view.getPropPanel().getComponentName();
        String instance = view.getPropPanel().getInstanceId();

        MapBuilder jsonData = MapBuilder.builder();
        List<Prop> props = view.getPropPanel().getProps();
        for (Prop prop : props) {
            jsonData.addField(prop.getKey(), prop.getValue());
        }

        CONFIG.post(ComponentConfiguration.configPostEndpoint(component, instance, "conf"), jsonData.toJSON(), new CallBack() {
            @Override
            public void handle(String json) {
                Components.LAYOUT.getFlags().put("designMode", true);
                Components.BOOT.listen(new Event(EventConstants.BOOT, EventConstants.BOOT));
            }
        });
    }

    private static void saveComponentStyleProperties(Layout view) {
        String component = view.getPropPanel().getComponentName();
        String instance = view.getPropPanel().getInstanceId();
        StringBuilder sb = new StringBuilder();
        List<Prop> props = view.getPropPanel().getProps();
        for (Prop prop : props) {
            sb.append(prop.getKey()).append(":").append(prop.getValue()).append(";");
        }

        CONFIG.post(ComponentConfiguration.configPostEndpoint(component, instance, "style"), sb.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> Layout component style properties saved successfully.");
                Components.LAYOUT.getFlags().put("designMode", true);
                Signal hideStylePanel = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "hideStylePanel");
                getDefaultInstance().listen(hideStylePanel);
                Signal reloadStyle = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "reloadComponentStyle");
                getDefaultInstance().listen(reloadStyle);
            }
        });
    }

    private static void saveLayoutProperties(Layout view) {

        StringBuilder sb = new StringBuilder();
        List<Prop> props = view.getPropPanel().getProps();
        for (Prop prop : props) {
            sb.append(prop.getKey()).append(":").append(prop.getValue()).append(";");
        }

        CONFIG.post(ComponentConfiguration.layoutStyleConfigVariablesPostEndpoint(view.getPropPanel().getId()), sb.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> Layout style properties saved successfully.");
                Components.LAYOUT.getFlags().put("designMode", true);
                Signal hideStylePanel = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "hideStylePanel");
                getDefaultInstance().listen(hideStylePanel);
                Signal reloadStyle = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "reloadStyle");
                getDefaultInstance().listen(reloadStyle);
            }
        });
    }

    private static List<Prop> getVariablesAsPorp(String data) {
        Pattern p = Pattern.compile("([^\\;]+)");
        Matcher m = p.matcher(data);
        List<String> variableDecls = new ArrayList<String>();
        while (m.find()) {
            variableDecls.add(m.group());
        }
        List<Prop> props = new ArrayList<Prop>();
        for (String line : variableDecls) {
            Pattern pv = Pattern.compile("([^\\:]+):([^\\;]+)");
            Matcher mm = pv.matcher(line);
            while (mm.find()) {
                props.add(new Prop(mm.group(1), mm.group(2)));
            }
        }
        return props;
    }

    public static void initLayout(Layout layout) {
        LayoutComponent component = ((LayoutComponent) Components.LAYOUT);
        layout.setCurrentPath(JSUIUtils.getPath());

        if (null != Session.getUser()) {
            layout.setIsLoggedInUserCompanyAdmin(Session.getUser().getBoolean("isCompanyAdmin"));
        } else {
            layout.setIsLoggedInUserCompanyAdmin(false);
        }
        component.setView(layout);

        Map data = MapBuilder.builder()
                .addField("name", component.getComponentName())
                .addField("model", component.getDefaultViewName())
                .addField("applyBindings", true).get();
        Signal loadSignal = new Event(EventConstants.LOGIN_SUCCESS, EventConstants.LOGIN_SUCCESS);

        for (Row row : layout.getRows()) {
            for (Column column : row.getColumns()) {
                if (column.isHasLayout()) {
                    for (Row crow : column.getLayout().getRows()) {
                        for (Column ccolumn : crow.getColumns()) {
                            for (ComponentDef def : ccolumn.getComponents()) {
                                //adding instanceId with model for instance view binding not component binding
                                def.setInstanceName(def.getModel().concat(def.getInstanceId()));//
                                Components.get(def.getComponent(), def.getInstanceId()).listen(loadSignal);
                            }
                        }
                    }
                } else {
                    for (ComponentDef def : column.getComponents()) {
                        //adding instanceId with model for instance view binding not component binding
                        def.setInstanceName(def.getModel().concat(def.getInstanceId()));//
                        Components.get(def.getComponent(), def.getInstanceId()).listen(loadSignal);
                    }
                }
            }
        }
        if (null != component.getFlags().get("designMode")) {
            if (Boolean.valueOf(String.valueOf(component.getFlags().get("designMode")))) {
                component.invoke("toggleDesignMode");
            }
        }
        VIEW.bind(component.getDefaultViewName(), Models.toRaw(layout));
        Event signal1 = new Event(EventConstants.INDEX_VIEW_CHANGE, EventConstants.INDEX_VIEW_CHANGE, data);
        Components.BOOT.listen(signal1);
        DelayedLoadData loaddatajob = new DelayedLoadData(layout, component);
        loaddatajob.delay(2000);
    }
    
    private static class DelayedLoadData extends DelayCall {

        Layout layout;
        LayoutComponent component;

        public DelayedLoadData(Layout layout, LayoutComponent component) {
            this.layout = layout;
            this.component = component;
        }

        @Override
        public void run() {
            signalDataLoad(layout, component);
        }

    }

    private static void signalDataLoad(Layout layout, LayoutComponent component) {
        Event dataloadSignal = new Event(EventConstants.LOAD_INITIAL_DATA);
        for (Row row : layout.getRows()) {
            for (Column column : row.getColumns()) {
                if (column.isHasLayout()) {
                    for (Row crow : column.getLayout().getRows()) {
                        for (Column ccolumn : crow.getColumns()) {
                            for (ComponentDef def : ccolumn.getComponents()) {
                                def.setInstanceName(def.getModel().concat(def.getInstanceId()));//
                                Components.get(def.getComponent(), def.getInstanceId()).listen(dataloadSignal);
                            }
                        }
                    }
                } else {
                    for (ComponentDef def : column.getComponents()) {
                        def.setInstanceName(def.getModel().concat(def.getInstanceId()));//
                        Components.get(def.getComponent(), def.getInstanceId()).listen(dataloadSignal);
                    }
                }
            }
        }
        Event wsconnect = new Event(EventConstants.WSCONNECT, EventConstants.WSCONNECT, null);
        Components.BOOT.listen(wsconnect);
    }

    static void errorHandler(Layout data, Exception e) {
        Application.notifyError(e, null);
    }

    public static void getLayout(MapBuilder mapbuilder) {
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
            @Override
            public void handle(String json) {
                Layout layout1 = new JSON2ObjectConvertor<Layout>().getObject(json, new Layout());
                // Components.LAYOUT.getOfflineIndexedStorage().save(company + "-" + layout1.getId(), layout1.toString());
                initLayout(layout1);
            }
        });
    }
    
    static int getNextRowId(Layout layout) {
        int rowId = 0;
        for (Row row : layout.getRows()) {
            String[] columnIdarray = row.getId().split("row");
            rowId = Integer.valueOf(columnIdarray[1].trim());
        }
        return rowId+1;
    }  
    
    public static void addNewRowToTheLayoutJSON(final MapBuilder builder) {
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
            @Override
            public void handle(String json) {
                Layout layout = new JSON2ObjectConvertor<Layout>().getObject(json, new Layout());
                insertRow(layout, builder.toJSON());
            }
        });
    }
    
    public static void insertRow(Layout layout, String rowinfo){
        MapBuilder builder = MapBuilder.query(rowinfo);
        String rowid = builder.getString("rowid");
        String rowname = builder.getString("rowname");
        // create new row according to the info
        Row newRow = new Row();
        newRow.setId(rowid);
        newRow.setName(rowname);
        layout.getRows().add(newRow);
        
        CONFIG.post(ComponentConfiguration.layoutStylePostEndpoint(layout.getId(), "layout", rowid, ROW, INSERT), layout.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> New row created.");
                Signal updaterenderedlayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "updatelayout");
                getDefaultInstance().listen(updaterenderedlayoutsignal);
            }
        });
    }
    
    public static void updateLayoutFromJSON() {
        CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> Successfully fetch layout details from json.");
                Signal updaterenderedlayoutsignal = new Event(UPDATERENDEREDLAYOUT, EventConstants.INVOKE_FUNCTION, json);
                getDefaultInstance().listen(updaterenderedlayoutsignal);
            }
        });
    }
    
    public class LayoutWidthControlListener implements EventListener {

        public LayoutWidthControlListener() {
        }

        @Override
        public void onReceive(Signal signal) {
            processAction(signal);
        }

        private void processAction(Signal signal) {
            String action = signal.getAction();
            if (UtilValidate.isNotEmpty(action)) {
                MapBuilder data = (MapBuilder) signal.getPackets().get(0);
                data.addField("action", action);
                invoke("reshapeLayoutRow", data.toJSON());
            }
        }
    }

    private class DesignerModeListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            if (signal.getAction().equalsIgnoreCase(EventConstants.DESIGNER_MODE)) {
                invoke("toggleDesignMode");
            }
            if (signal.getAction().equalsIgnoreCase(EventConstants.PROP_PANEL)) {
                MapBuilder data = (MapBuilder) signal.getPackets().get(0);
                data.addField("layout", getView().getId());
                if (null != data) {
                    invoke("readSassVariables", data.toJSON());
                }
            }
            if (signal.getAction().equalsIgnoreCase(PROP_PANEL_COMPONENT)) {
                MapBuilder data = (MapBuilder) signal.getPackets().get(0);
                if (null != data) {
                    invoke(data.getString("invoke"), data.toJSON());
                }
            }
        }
    }

    private class InvokeFunctionListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            String action = signal.getAction();
            if (UtilValidate.isNotEmpty(action)) {
                Object data = signal.getPackets().get(0);
                if (action.equalsIgnoreCase(EventConstants.INVOKE_FUNCTION)) {
                    if (null != data) {
                        Logger.log(">>> Handler process "+String.valueOf(data)+".");
                        invoke(String.valueOf(data));
                    }
                } else if (action.equalsIgnoreCase(UPDATESUBSCRIBEDCOMPONENTLIST)) {
                    if (null != data) {
                        Logger.log(">>> Handler process updateSubscribedComponentList.");
                        invoke("updateSubscribedComponentList", String.valueOf(data));
                    }
                } else if (action.equalsIgnoreCase(OPENSUBSCRIBEDCOMPONENTLIST)) {
                    if (null != data) {
                        Logger.log(">>> Handler process opensubscribedcomponentlist.");
                        invoke("opensubscribedcomponentlist", String.valueOf(data));
                    }
                } else if (action.equalsIgnoreCase(UPDATERENDEREDLAYOUT)) {
                    if (null != data) {
                        Logger.log(">>> Handler process updaterenderedlayout.");
                        invoke("updaterenderedlayout", String.valueOf(data));
                    }
                } else if (action.equalsIgnoreCase(UPDATEDOMAIN)) {
                    if (null != data) {
                        Logger.log(">>> Handler process updatedomain.");
                        invoke("updatedomainJSON", String.valueOf(data));
                    }
                } else if (action.equalsIgnoreCase(PUTPATHONEDITPANEL)) {
                    if (null != data) {
                        Logger.log(">>> Handler process putpathoneditpanel.");
                        invoke("putpathoneditpanel", String.valueOf(data));
                    }
                }
            }
        }
    }
        
    private class LoadLayout implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            VIEW.render(new String[]{"layout"});
            MapBuilder data = (MapBuilder) signal.getPackets().get(0);
            if (null != data) {
                getLayout(data);
            }
        }
    }
        
    public static void updateName(Layout layout) {
        CONFIG.post(ComponentConfiguration.layoutConfigPostEndpoint(layout.getId()), layout.toString(), new CallBack() {
            @Override
            public void handle(String json) {
                Logger.log(">>> Layout name updated.");
            }
        });
    } 
    
    
    
    
    
    
    
    
    
    
    @Model(className = "Row", targetId = "", properties = {
        @Property(name = "id", type = String.class),
        @Property(name = "name", type = String.class),
        @Property(name = "columns", type = io.cloudoffice.platform.cockpit.layout.Column.class, array = true),
        @Property(name = "editable", type = boolean.class),
        @Property(name = "inputfieldvalue", type = String.class)
    })
    public static class RowComponent {

        @Function
        static void enableRowEdit(Row view) {
            view.setInputfieldvalue(view.getName());
            view.setEditable(true);
        }
        
        @Function
        static void disableRowEdit(Row view) {
            view.setInputfieldvalue("");
            view.setEditable(false);
        }
        
        @Function
        static void updateRowName(Row view) {
            view.setName(view.getInputfieldvalue());
            disableRowEdit(view);
            updateRowNameOnLayoutJSON(view.toString());
        }

        @Function
        static void showSassVariables(Row view) {
            MapBuilder data = MapBuilder.builder().addField("id", view.getId());
            Components.LAYOUT.listen(new Event(EventConstants.PROP_PANEL, EventConstants.DESIGNER_MODE, data));
        }
        
        @Function
        static void deleteRow(Row row) {
            deleteRowFromLayoutJSON(row.toString());
            Signal updatelayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "showupdateloader");
            getDefaultInstance().listen(updatelayoutsignal);
        }

        @Function
        static void createColumn(Row row) {
            // prepare new row information
            int nextcolumnnumber = getNextColumnId(row) + 1;
            String columnid = row.getId().concat("column").concat(nextcolumnnumber + "");
            String columnname = "Column " + nextcolumnnumber;

            // update layout json
            MapBuilder builder = MapBuilder.builder();
            builder.addField("rowid", row.getId());
            builder.addField("columnid", columnid);
            builder.addField("columnname", columnname);
            addNewColumnToTheLayoutJSON(builder);

            Signal updatelayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "showupdateloader");
            getDefaultInstance().listen(updatelayoutsignal);
        }
        
        public static void updateRowNameOnLayoutJSON(final String rowString) {
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
                @Override
                public void handle(String json) {
                    Layout layout = new JSON2ObjectConvertor<Layout>().getObject(json, new Layout());
                    updateRowName(layout, rowString);
                }
            });
        }
        
        public static void updateRowName(Layout layout, String rowString) {
            Row inputrow = new JSON2ObjectConvertor<Row>().getObject(rowString, new Row());
            if (null != inputrow) {
                String rowId = inputrow.getId();
                for (Row r : layout.getRows()) {
                    if (rowId.equalsIgnoreCase(r.getId())) {
                        r.setName(inputrow.getName());
                        CONFIG.post(ComponentConfiguration.layoutConfigPostEndpoint(layout.getId()), layout.toString(), new CallBack() {
                            @Override
                            public void handle(String json) {
                                Logger.log(">>> Row name updated.");
                            }
                        });
                    }
                }
            } else {
                Logger.log(">>> Row information is invalid.");
            }
        }        
        
        public static void deleteRowFromLayoutJSON(final String rowString) {
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
                @Override
                public void handle(String json) {
                    Layout layout = new JSON2ObjectConvertor<Layout>().getObject(json, new Layout());
                    deleteRowFromLayout(layout, rowString);
                }
            });
        }
        
        public static void deleteRowFromLayout(Layout layout, String rowString) {
            
            Row row = new JSON2ObjectConvertor<Row>().getObject(rowString, new Row());
            if (null != row) {
                layout.getRows().remove(row);
                CONFIG.post(ComponentConfiguration.layoutStylePostEndpoint(layout.getId(), "layout", row.getId(), ROW, DELETE), layout.toString(), new CallBack() {
                    @Override
                    public void handle(String json) {
                        Logger.log(">>> Row deleted.");
                        Signal updaterenderedlayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "updatelayout");
                        getDefaultInstance().listen(updaterenderedlayoutsignal);
                    }
                });
            } else {
                Logger.log(">>> Row information is invalid.");
            }
        }
        
        static int getNextColumnId(Row row) {
            int columnId = 0;
            for (Column column : row.getColumns()) {
                String[] columnIdarray = column.getId().split(row.getId() + "column");
                columnId = Integer.valueOf(columnIdarray[1].trim());
            }
            return columnId;
        }
        
        static void addNewColumnToTheLayoutJSON(final MapBuilder builder) {
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
                @Override
                public void handle(String json) {
                    Layout layout = new JSON2ObjectConvertor<Layout>().getObject(json, new Layout());
                    insertColumn(layout, builder.toJSON());
                }
            });
        }
        
        static void insertColumn(Layout layout, String columnInfo) {
            MapBuilder builder = MapBuilder.query(columnInfo);
            String rowid = builder.getString("rowid");
            String columnid = builder.getString("columnid");
            String columnname = builder.getString("columnname");

            // create new row according to the info
            Column newColumn = new Column();
            newColumn.setId(columnid);
            newColumn.setName(columnname);

            // get selected row where the new column will be inserted
            Row row = getRowByRowId(layout, rowid);
            if (null != row) {
                row.getColumns().add(newColumn);
                CONFIG.post(ComponentConfiguration.layoutStylePostEndpoint(layout.getId(), rowid, columnid, COLUMN, INSERT), layout.toString(), new CallBack() {
                    @Override
                    public void handle(String json) {
                        Logger.log(">>> New column created.");
                        Signal updaterenderedlayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "updatelayout");
                        getDefaultInstance().listen(updaterenderedlayoutsignal);
                    }
                });
            } else {
                Logger.log(">>> Invalid row.");
            }
        }
        
        static Row getRowByRowId(Layout layout, String rowId) {
            Row result = null;
            for (Row row : layout.getRows()) {
                if (UtilValidate.isNotEmpty(rowId) && rowId.equalsIgnoreCase(row.getId())) {
                    result = row;
                }
            }
            return result;
        }
    }

    
    
    
    
    
    
    
    
    
    @Model(className = "Column", targetId = "", properties = {
        @Property(name = "id", type = String.class),
        @Property(name = "name", type = String.class),
        @Property(name = "hasLayout", type = boolean.class),
        @Property(name = "layout", type = io.cloudoffice.platform.cockpit.layout.Layout.class),
        @Property(name = "components", type = io.cloudoffice.platform.cockpit.layout.ComponentDef.class, array = true),
        @Property(name = "editable", type = boolean.class),
        @Property(name = "inputfieldvalue", type = String.class),
    })
    
    public static class ColumnComponent {

        @Function
        static void enableColumnEdit(Column view) {
            view.setInputfieldvalue(view.getName());
            view.setEditable(true);
        }

        @Function
        static void disableColumnEdit(Column view) {
            view.setInputfieldvalue("");
            view.setEditable(false);
        }

        @Function
        static void updateColumnName(Column view) {
            view.setName(view.getInputfieldvalue());
            disableColumnEdit(view);
            updateColumnNameOnLayoutJSON(view.toString());
            
        }

        @Function
        static void showSassVariables(Column view) {
            MapBuilder data = MapBuilder.builder().addField("id", view.getId());
            Components.LAYOUT.listen(new Event(EventConstants.PROP_PANEL, EventConstants.DESIGNER_MODE, data));
        }
        
        @Function
        static void hoverComponent(Column view) {
            VIEW.invokeJSFunction("LayoutManager.componentHover(\"" + view.getId() + "\")");
        }
        
        @Function
        static void deleteCoumn(Column column) {
            deleteColumnFromLayoutJSON(column.toString());
            
            Signal updatelayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "showupdateloader");
            getDefaultInstance().listen(updatelayoutsignal);
        }

        @Function
        static void showComponentList(Column column) {
            Signal loadSignal = new Event(OPENSUBSCRIBEDCOMPONENTLIST, EventConstants.INVOKE_FUNCTION, column.toString());
            getDefaultInstance().listen(loadSignal);
        }
        
        public static void updateColumnNameOnLayoutJSON(final String colString) {
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
                @Override
                public void handle(String json) {
                    Layout layout = new JSON2ObjectConvertor<Layout>().getObject(json, new Layout());
                    updateColumnName(layout, colString);
                }
            });
        }
        
        public static void updateColumnName(Layout layout, String colString) {
            Column inputcol = new JSON2ObjectConvertor<Column>().getObject(colString, new Column());
            if (null != inputcol) {
                String colId = inputcol.getId();
                for (Row r : layout.getRows()) {
                    for (Column col : r.getColumns()) {
                        if (colId.equalsIgnoreCase(col.getId())) {
                            col.setName(inputcol.getName());
                            CONFIG.post(ComponentConfiguration.layoutConfigPostEndpoint(layout.getId()), layout.toString(), new CallBack() {
                                @Override
                                public void handle(String json) {
                                    Logger.log(">>> Column name updated.");
                                }
                            });
                        } else {
                            Logger.log(">>> Column name not updated.");
                        }
                    }
                }
            }
        }
        
        public static void deleteColumnFromLayoutJSON(final String columnString) {
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
                @Override
                public void handle(String json) {
                    Layout layout = new JSON2ObjectConvertor<Layout>().getObject(json, new Layout());
                    deleteColumnFromRow(layout, columnString);
                }
            });
        }
        
        public static void deleteColumnFromRow(Layout layout, String columnString) {
            Column column = new JSON2ObjectConvertor<Column>().getObject(columnString, new Column());
            if (null != column) {
                Row row = getRowByColumnId(layout, column.getId());
                if (null != row) {
                    row.getColumns().remove(column);
                    CONFIG.post(ComponentConfiguration.layoutStylePostEndpoint(layout.getId(), row.getId(), column.getId(), COLUMN, DELETE), layout.toString(), new CallBack() {
                        @Override
                        public void handle(String json) {
                            Logger.log(">>> Column deleted.");
                            Signal updaterenderedlayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "updatelayout");
                            getDefaultInstance().listen(updaterenderedlayoutsignal);
                        }
                    });
                } else {
                    Logger.log(">>> Row not found.");
                }
            } else {
                Logger.log(">>> Column information is invalid.");
            }
        }
        
        public static Row getRowByColumnId(Layout layout, String columnId) {
            Row result = null;
            for (Row row : layout.getRows()) {
                for (Column column : row.getColumns()) {
                    if (UtilValidate.isNotEmpty(columnId) && columnId.equalsIgnoreCase(column.getId())) {
                        result = row;
                    }
                }
            }
            return result;
        }

    }

    
    
    
    
    
    
    
    
    
    @Model(className = "Properties", targetId = "", properties = {
        @Property(name = "id", type = String.class),
        @Property(name = "title", type = String.class),
        @Property(name = "component", type = boolean.class),
        @Property(name = "config", type = boolean.class),
        @Property(name = "componentName", type = String.class),
        @Property(name = "instanceId", type = String.class),
        @Property(name = "props", type = io.cloudoffice.platform.cockpit.layout.Prop.class, array = true)})
    public class PropertiesComponent {

    }

    @Model(className = "Prop", targetId = "", properties = {
        @Property(name = "key", type = String.class),
        @Property(name = "value", type = String.class)})
    public static class PropComponent {

        @Function
        static void layoutAction(Prop view) {
            if (view.getKey().equalsIgnoreCase("layout")) {
                if (!((LayoutComponent) Components.LAYOUT).getView().getId().equalsIgnoreCase(view.getValue())) {
                    MapBuilder map = MapBuilder.builder().addField("layout", view.getValue());
                    String company = Session.getCompany().getString("itemId");
                    //TODO: implement change
                }
            }
        }
    }

    

    
    
    
    
    
    
    
    
    
    @Model(className = "ComponentDef", targetId = "", properties = {
        @Property(name = "name", type = String.class),
        @Property(name = "model", type = String.class),
        @Property(name = "component", type = String.class),
        @Property(name = "instance", type = boolean.class),
        @Property(name = "instanceName", type = String.class),
        @Property(name = "instanceId", type = String.class),
        @Property(name = "icon", type = String.class),
        @Property(name = "color", type = String.class),
        @Property(name = "cPanel", type = boolean.class),
    })
    public static class ComponentDefComponent {
        @Function
        static void showConfiguration(ComponentDef componentDef) {
            Components.get(componentDef.getComponent(), componentDef.getInstanceId()).listen(new Event(EventConstants.DESIGNER_MODE, EventConstants.DESIGNER_MODE, "openConfig"));
        }
        
        @Function
        static void enableConfigurationPanel(ComponentDef view) {
            Object designModeObj = Components.LAYOUT.getFlags().get("designMode");
            if (null != designModeObj) {
                boolean inDesignMode = (Boolean) designModeObj;
                if (inDesignMode) {
                     VIEW.invokeJSFunction("LayoutManager.showConfig(\"" + view.getInstanceId() + "\")");
                    view.setCPanel(true);
                } else {
                    view.setCPanel(false);
                }
            } else {
                view.setCPanel(false);
            }
        }
        
        @Function
        static void disableConfigurationPanel(ComponentDef view) {
            VIEW.invokeJSFunction("LayoutManager.removeConfig(\"" + view.getInstanceId() + "-conf\")");
            view.setCPanel(false);
        }
        
        @Function
        static void showConfig(ComponentDef view) {
            Components.get(view.getComponent(), view.getInstanceId()).listen(new Event(EventConstants.DESIGNER_MODE,EventConstants.DESIGNER_MODE,"openConfig"));
        }

        @Function
        static void showStyle(ComponentDef view) {
            MapBuilder data = MapBuilder.builder().addField("component", view.getName().substring(0, view.getName().indexOf("-")))
                    .addField("instance", view.getInstanceId())
                    .addField("invoke", "showComponentStyle");
            Components.LAYOUT.listen(new Event(PROP_PANEL_COMPONENT, EventConstants.DESIGNER_MODE, data));
        }
        
        @Function
        static void removeComponent(ComponentDef view){
            removeComponentFromTheComponentPath(view.getName(), view.getInstanceId());
            removeComponentFromTheLayoutJSON(view.toString());
            Signal updatelayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "showupdateloader");
            getDefaultInstance().listen(updatelayoutsignal);
        }
        
        public static void removeComponentFromTheLayoutJSON(final String componentdetails) {
            CONFIG.fetch(ComponentConfiguration.configFetchEndpoint("layout", JSUIUtils.getLayout()), null, new CallBack() {
                @Override
                public void handle(String json) {
                    Layout layout = new JSON2ObjectConvertor<Layout>().getObject(json, new Layout());
                    removeComponentFromLayout(layout, componentdetails);
                }
            });
        }
        
        public static void removeComponentFromLayout(Layout layout, String componentdetails) {

            // findout component location
            int componentOnRowIndex = -1;
            int componentOnColumnIndex = -1;
            ComponentDef component = new JSON2ObjectConvertor<ComponentDef>().getObject(componentdetails, new ComponentDef());
            for (int rowIndex = 0; rowIndex < layout.getRows().size(); rowIndex++) {
                Row row = layout.getRows().get(rowIndex);
                for (int columnIndex = 0; columnIndex < row.getColumns().size(); columnIndex++) {
                    Column column = row.getColumns().get(columnIndex);
                    for (ComponentDef componentonlayout : column.getComponents()) {
                        if (componentonlayout.getInstanceId().equalsIgnoreCase(component.getInstanceId())) {
                            componentOnRowIndex = rowIndex;
                            componentOnColumnIndex = columnIndex;
                        }
                    }
                }
            }
            
            // remove component from already founded location
            if (componentOnRowIndex > -1 && componentOnColumnIndex > -1) {
                layout.getRows().get(componentOnRowIndex).getColumns().get(componentOnColumnIndex).getComponents().remove(component);
                // Update the json
                CONFIG.post(ComponentConfiguration.layoutConfigPostEndpoint(layout.getId()), layout.toString(), new CallBack() {
                    @Override
                    public void handle(String json) {
                        Logger.log(">>> Component removed successfully.");
                        Signal updaterenderedlayoutsignal = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "updatelayout");
                        getDefaultInstance().listen(updaterenderedlayoutsignal);
                    }
                });
            }
        }
        
        public static void removeComponentFromTheComponentPath(final String component, final String instance) {
            CONFIG.fetch(ComponentConfiguration.componentDirectoryDeleteEndpoint(component, instance), null, new CallBack() {
                @Override
                public void handle(String json) {
                    Logger.log(">>> Instance removed from the component directory.");
                }
            });
        }
    }
    
    
    
    
    
    
    
    
    @Model(className = "Domain", targetId = "", properties = {
        @Property(name = "workspace", type = Workspace.class),
        @Property(name = "site", type = Site.class),
        @Property(name = "paths", type = Path.class, array=true),
    })
    public static class DomainModel {
    }

    @Model(className = "Workspace", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class)
    })
    public static class WorkspaceModel {
    }

    @Model(className = "Site", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "authType", type = String.class),
        @Property(name = "subscribed", type = String.class, array=true)
    })
    public static class SiteModel {
    }

    @Model(className = "Path", targetId = "", properties = {
        @Property(name = "path", type = String.class),
        @Property(name = "layout", type = String.class),
        @Property(name = "mlayout", type = String.class),
        @Property(name = "isHome", type = boolean.class),
        @Property(name = "isSecure", type = boolean.class)
    })
    public static class PathModel {
        
        @Function
        static void togglesecuritystatus(Path path) {
            readDomainInformationAndTogglePathSecurity(path);
        }       

        public static void readDomainInformationAndTogglePathSecurity(final Path path) {

            CONFIG.fetch(ComponentConfiguration.pathsListFetchEndpoint(), null, new CallBack() {
                @Override
                public void handle(String json) {

                    Logger.log(">>> Get information from the domain json.");

                    // toggle security status of selected path
                    Domain domain = new JSON2ObjectConvertor<Domain>().getObject(json, new Domain());
                    togglepathsecurity(domain, path);

                    // Now update the domain.json
                    Signal updatedomain = new Event(UPDATEDOMAIN, EventConstants.INVOKE_FUNCTION, domain.toString());
                    getDefaultInstance().listen(updatedomain);
                }
            });
            
        }
        
        public static void togglepathsecurity(Domain domain, Path path) {
            for (Path curpath : domain.getPaths()) {
                if (UtilValidate.isNotEmpty(curpath.getPath())
                        && UtilValidate.isNotEmpty(path.getPath())
                        && path.getPath().equalsIgnoreCase(curpath.getPath())) {
                    // if path found then make it as home path
                    curpath.setIsSecure(!path.isIsSecure());
                }
            }
        }

        
        
        
        
        @Function
        static void makepathashomepath(Path path) {
            readDomainInformationAndSaveHomePath(path);
        }         
        
        public static void readDomainInformationAndSaveHomePath(final Path path) {

            CONFIG.fetch(ComponentConfiguration.pathsListFetchEndpoint(), null, new CallBack() {
                @Override
                public void handle(String json) {

                    Logger.log(">>> Get information from the domain json.");

                    // toggle security status of selected path
                    Domain domain = new JSON2ObjectConvertor<Domain>().getObject(json, new Domain());
                    makehomepath(domain, path);

                    // Now update the domain.json
                    Signal updatedomain = new Event(UPDATEDOMAIN, EventConstants.INVOKE_FUNCTION, domain.toString());
                    getDefaultInstance().listen(updatedomain);
                }
            });
            
        }        
        
        public static void makehomepath(Domain domain, Path path) {
            for (Path curpath : domain.getPaths()) {
                if (UtilValidate.isNotEmpty(curpath.getPath())
                        && UtilValidate.isNotEmpty(path.getPath())
                        && path.getPath().equalsIgnoreCase(curpath.getPath())) {
                    // if path found then make it as home path
                    curpath.setIsHome(true);
                } else {
                    // otherwise make home status false
                    curpath.setIsHome(false);
                }
            }
        }
        
        
        
        
        
        @Function
        static void removepath(Path path) {
            String currentpath = JSUIUtils.getPath();
            if (UtilValidate.isNotEmpty(currentpath)
                    && UtilValidate.isNotEmpty(path.getPath())
                    && !(currentpath.equalsIgnoreCase(path.getPath()))) {
                if(!path.isIsHome()){
                    readDomainInformationAndRemovePath(path);
                    deletePathAssociationFromLayout(path.getPath());
                } else {
                    Logger.log(">>> Current path is a home path, change home path and try again.");
                }
                
            } else {
                Logger.log(">>> This path is currently loaded, change path and try again.");
            }
        }
        
        public static void readDomainInformationAndRemovePath(final Path path) {

            CONFIG.fetch(ComponentConfiguration.pathsListFetchEndpoint(), null, new CallBack() {
                @Override
                public void handle(String json) {

                    Logger.log(">>> Get information from the domain json.");

                    // remove selected path from the domain paths
                    Domain domain = new JSON2ObjectConvertor<Domain>().getObject(json, new Domain());
                    domain.getPaths().remove(path);

                    // Now update the domain.json
                    Signal updatedomain = new Event(UPDATEDOMAIN, EventConstants.INVOKE_FUNCTION, domain.toString());
                    getDefaultInstance().listen(updatedomain);
                    
                    // Reload style of layout
                    Signal reloadStyle = new Event(EventConstants.INVOKE_FUNCTION, EventConstants.INVOKE_FUNCTION, "reloadStyle");
                    getDefaultInstance().listen(reloadStyle);
                }
            });
        }
        
        public static void deletePathAssociationFromLayout(final String pathname) {
            CONFIG.fetch(ComponentConfiguration.pathAssociationsDeleteEndpoint(pathname), null, new CallBack() {
                @Override
                public void handle(String json) {
                    Logger.log(">>> Path(" + pathname + ") association from layout deleted.");
                }
            });
        }
        
        
        
        
        @Function
        static void putpathoneditpanel(Path path) {
            Signal updaterenderedlayoutsignal = new Event(PUTPATHONEDITPANEL, EventConstants.INVOKE_FUNCTION, path.toString());
            getDefaultInstance().listen(updaterenderedlayoutsignal);
        }
        
        
        
        
        
    }   
}
