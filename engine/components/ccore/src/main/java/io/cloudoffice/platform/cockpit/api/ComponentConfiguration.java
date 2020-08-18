/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.JSUIUtils;
import java.util.Arrays;
import net.java.html.json.Model;
import net.java.html.json.OnReceive;
import net.java.html.json.Property;

@Model(className = "ComponentConfigLoader", targetId = "", properties = {
    @Property(name = "createdTime", type = long.class),
    @Property(name = "source", type = String.class)
})
public abstract class ComponentConfiguration {
    //repoURL = https://content.cloudoffice.io/content/
    public static ComponentConfigLoader CONFIG = new ComponentConfigLoader();
    
    private static final String ANOTHER_PARAMETER = "&";
    private static final String SEPERATOR = "/";
    
    private static final String POST_ENDPOINT = JSUIUtils.getREPOURL();
    private static final String POST_ENDPOINT_LAYOUT = JSUIUtils.getREPOURL() + "layout/";
    private static final String STYLE_FETCH_ENDPOINT = JSUIUtils.getREPOURL() + "css?input=";
    private static final String CONFIGURATION_FETCH_ENDPOINT = JSUIUtils.getREPOURL() + "json?input=";
    private static final String DIRECTORY_COPY_ENDPOINT = JSUIUtils.getREPOURL() + "directory/copy?";
    private static final String DIRECTORY_DELETE_ENDPOINT = JSUIUtils.getREPOURL() + "directory/delete?url=";
    private static final String PATH_ASSOCIATION_DELETE_ENDPOINT = JSUIUtils.getREPOURL() + "directory/deletechild?";
    


    @OnReceive(method = "GET", url = "{url}", data = java.util.Map.class, onError = "errorHandler")
    public static void fetch(ComponentConfigLoader view, String data, CallBack callback) {
        callback.handle(data);
    }

    @OnReceive(method = "POST", url = "{url}", data = String.class, headers = {"Accept:text/plain; charset=utf-8"}, onError = "errorHandler")
    public static void post(ComponentConfigLoader view, String data, CallBack callback) {
        callback.handle(data);
    }

    static void errorHandler(ComponentConfigLoader data, Exception e) {
        Application.notifyError(e, null);
    }

    
    

    /**
     * @param path
     * @return /directory/copy?source=source&destination=destination
     */
    public static String rawlayoutcopyendpoint(String path) {

        String source = JSUIUtils.getPlatformCompany().concat(SEPERATOR)
                .concat(JSUIUtils.getPlatformSite()).concat(SEPERATOR)
                .concat("layout").concat(SEPERATOR)
                .concat("store").concat(SEPERATOR)
                .concat("blanklayout");

        String destination = JSUIUtils.getCompany().concat(SEPERATOR)
                .concat(JSUIUtils.getSite()).concat(SEPERATOR)
                .concat("layout").concat(path);

        return DIRECTORY_COPY_ENDPOINT.concat("source=")
                .concat(HexStringConverter.stringToHex(source))
                .concat(ANOTHER_PARAMETER).concat("destination=")
                .concat(HexStringConverter.stringToHex(destination));
    }

    /**
     * @param path
     * @return /company/site/layout/path
     */
    public static String pathAssociationsDeleteEndpoint(String path) {
        String directory = JSUIUtils.getCompany().concat(SEPERATOR).concat(JSUIUtils.getSite());
        return PATH_ASSOCIATION_DELETE_ENDPOINT
                .concat("url=").concat(HexStringConverter.stringToHex(directory))
                .concat("&childname=").concat(HexStringConverter.stringToHex(path));
    }
    
    /**
     * @param path
     * @return /company/site/layout/path
     */
    public static String layoutDirectoryDeleteEndpoint(String path) {
        String directory = JSUIUtils.getCompany().concat(SEPERATOR)
                .concat(JSUIUtils.getSite()).concat(SEPERATOR)
                .concat("layout").concat(path);
        return DIRECTORY_DELETE_ENDPOINT.concat(HexStringConverter.stringToHex(directory));
    }
    
    /**
     * @param component
     * @param instance
     * @return /company/site/component/path/instance/
     */
    public static String componentDirectoryDeleteEndpoint(String component, String instance) {
        return DIRECTORY_DELETE_ENDPOINT.concat(HexStringConverter.stringToHex(JSUIUtils.getCompany().concat("/")
                .concat(JSUIUtils.getSite()).concat("/")
                .concat(Arrays.asList(component.split("-")).get(0))
                .concat(JSUIUtils.getPath()).concat("/")
                .concat(instance)));
    }
    
    
    /**
     * @param component
     * @param instance
     * @return /company/site/component/path/instance/conf/component.json
     */
    public static String configFetchEndpoint(String component, String instance) {
        return CONFIGURATION_FETCH_ENDPOINT.concat(JSUIUtils.getCompany()).concat("/")
                .concat(JSUIUtils.getSite()).concat("/")
                .concat(component)
                .concat(JSUIUtils.getPath()).concat("/")
                .concat(instance).concat("/")
                .concat("controller/conf").concat("/")
                .concat(component + ".json");
    }
            
    /**
     * @param component
     * @param instance
     * @param type
     * @return /company/site/component/path/instance/conf/component.json
     */
    public static String configPostEndpoint(String component, String instance, String type) {
        String ext = (type.equalsIgnoreCase("style")) ? "-variables.scss" : ".json";
        String endpoint = (type.equalsIgnoreCase("style")) ? "view/style" : "controller/conf";
        return POST_ENDPOINT.concat(HexStringConverter.stringToHex(JSUIUtils.getCompany().concat("/")
                .concat(JSUIUtils.getSite()).concat("/")
                .concat(component)
                .concat(JSUIUtils.getPath()).concat("/")
                .concat(instance).concat("/")
                .concat(endpoint).concat("/")
                .concat(component + ext)));
    }
    
    /**
     * @param filename
     * @param filetype
     * @return /company/site/layout/filename.ext
     */
    public static String layoutStaticFetchEndpoint(String filename, String filetype) {
        String ext = (filetype.equalsIgnoreCase("style")) ? ".scss" : ".json";
        return CONFIGURATION_FETCH_ENDPOINT.concat(JSUIUtils.getCompany()
                .concat("/")
                .concat(JSUIUtils.getSite()).concat("/layout/")
                .concat(filename).concat(ext)
        );
    }
    
    /**
     * @param layoutid
     * @return /company/site/layout/path/layoutid/controller/conf/layout.json
     */
    public static String layoutConfigPostEndpoint(String layoutid) {
        return POST_ENDPOINT.concat(HexStringConverter.stringToHex(JSUIUtils.getCompany().concat("/")
                .concat(JSUIUtils.getSite()).concat("/layout/")
                .concat(JSUIUtils.getPath()).concat("/")
                .concat(layoutid)
                .concat("/controller/conf/layout.json")
        ));
    }
    
    /**
     * @param layoutid
     * @param parentId
     * @param childid
     * @param childtype
     * @param operationtype
     * @return /company/site/layout/path/layoutid/
     */
    public static String layoutStylePostEndpoint(String layoutid, String parentId, String childid, String childtype, String operationtype) {

        return POST_ENDPOINT_LAYOUT.concat(HexStringConverter.stringToHex(JSUIUtils.getCompany().concat("/")
                .concat(JSUIUtils.getSite()).concat("/layout/")
                .concat(JSUIUtils.getPath()).concat("/")
                .concat(layoutid)))
                .concat("/").concat(HexStringConverter.stringToHex(parentId))
                .concat("/").concat(HexStringConverter.stringToHex(childid))
                .concat("/").concat(HexStringConverter.stringToHex(childtype))
                .concat("/").concat(HexStringConverter.stringToHex(operationtype));
    }
    
    public static String layoutStyleConfigVariablesFetchEndpoint(String id) {
        return CONFIGURATION_FETCH_ENDPOINT.concat(JSUIUtils.getCompany()).concat("/")
                .concat(JSUIUtils.getSite()).concat("/")
                .concat("layout")
                .concat(JSUIUtils.getPath()).concat("/")
                .concat(JSUIUtils.getLayout()).concat("/")
                .concat("view").concat("/")
                .concat("style").concat("/")
                .concat(id + "-variables.scss");
    }
    
    /**
     * @param component
     * @param instance
     * @return /company/site/layout/path/$layoutid/style/$id-variables.scss
     */
    public static String componentStyleConfigVariablesFetchEndpoint(String component, String instance) {
        return CONFIGURATION_FETCH_ENDPOINT.concat(JSUIUtils.getCompany()).concat("/")
                .concat(JSUIUtils.getSite()).concat("/")
                .concat(component)
                .concat(JSUIUtils.getPath()).concat("/")
                .concat(instance).concat("/")
                .concat("view").concat("/")
                .concat("style").concat("/")
                .concat(component + "-variables.scss");
    }

    public static String layoutStyleConfigVariablesPostEndpoint(String id) {
        return POST_ENDPOINT + HexStringConverter.stringToHex(JSUIUtils.getCompany().concat("/")
                .concat(JSUIUtils.getSite()).concat("/")
                .concat("layout")
                .concat(JSUIUtils.getPath()).concat("/")
                .concat(JSUIUtils.getLayout()).concat("/")
                .concat("view").concat("/")
                .concat("style").concat("/")
                .concat(id + "-variables.scss"));
    }

    public static String layoutListFetchEndpoint() {
        return CONFIGURATION_FETCH_ENDPOINT.concat("cloudoffice/cockpit/layout/layoutlist.json");
    }

    public static String themeListFetchEndpoint() {
        return CONFIGURATION_FETCH_ENDPOINT.concat("theme/themelist.json");
    }

    public static String pathsListFetchEndpoint() {
        return CONFIGURATION_FETCH_ENDPOINT.concat("domains/" + JSUIUtils.getHost() + ".json");
    }
    
    /**
     * @return /domains/host.json
     */
    public static String domainPostEndpoint() {
        return POST_ENDPOINT.concat(HexStringConverter.stringToHex("domains/" + JSUIUtils.getHost() + ".json"));
    }

}
