/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.shell;

import io.cloudoffice.platform.cockpit.microservice.Bootstrap;
import io.cloudoffice.platform.cockpit.microservice.Keys;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.io.FileUtils;
import org.json.JSONArray;
import org.json.JSONObject;

public abstract class Shell {

    String[] defaultComponents = new String[]{
        "../../boot/controller/lib/html.js&cache=true",
        "../../boot/controller/lib/html.json.js&cache=true",
        "../../boot/controller/lib/html.boot.js&cache=true",
        "../../boot/controller/lib/emul-0.22-rt.js&cache=true",
        "../../boot/controller/lib/json-20180813.js&cache=true",
        "../../boot/controller/lib/ko4j.js&cache=true",
        "../../js/controller/js.js&cache=true",
        "../../ccore/controller/ccore.js&cache=true",
        "../../relateditem/controller/relateditem.js&cache=true",
        "../../layout/controller/layout.js&cache=true",
        "../../signin/controller/signin.js&cache=true",
        "../../boot/controller/boot.js&cache=true"
    };

    PathResolver resolver;

    public String dispatch(PathResolver resolver) {
        this.resolver = resolver;
        return getRawHtml()
                .addSubscriptions()
                .setCurentPathAndLayout()
                .ensureResourceStore()
                .dispatch();
    }

    private String dispatch() {
        return homepage.replaceAll("\\$\\{server}", servername)
                .replaceAll("\\$\\{serverImage}", imageEndpoint)
                .replaceAll("\\$\\{serverFont}", fontEndpoint)
                .replaceAll("\\$\\{serverJs}", jsEndpoint)
                .replaceAll("\\$\\{serverCss}", cssEndpoint)
                .replace("${mainclass}",mainclass)
                .replace("${companyJSON}", "'" + resolver.company() + "'")
                .replace("${company}", "\"" + resolver.storeId() + "\"")
                .replace("${site}", "\"" + resolver.siteId() + "\"")
                .replace("${path}", "\"" + currentPath + "\"")
                .replace("${layout}", "\"" + currentLayout + "\"")
                .replace("${componentClassPath}", subscribedComponents.toString());
    }

    Shell getRawHtml() {
        String indexHome = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + bootDirectoryRelativePath;
        java.nio.file.Path indexPath = null;
        indexPath = Paths.get(indexHome + indexPageName);
        try {
            homepage = new String(Files.readAllBytes(indexPath));
        } catch (IOException ex) {
            Logger.getLogger(this.getClass().getName()).log(Level.SEVERE, null, ex);
        }
        return this;
    }

    private Shell addSubscriptions() {
        List<Object> components = resolver.subscription();
        for (Object component : components) {
            subscribedComponents.put("../../" + component + "/controller/" + component + ".jar");
        }
        for (String defaultComponent : defaultComponents) {
            subscribedComponents.put(defaultComponent);
        }
        return this;

    }

    Shell setCurentPathAndLayout() {
        currentPath = resolver.currentPath();
        currentLayout = resolver.currentLayout();
        return this;
    }

    String useragent = "";
    String mainclass = "";
    String currentPath = "";
    String currentLayout = "";
    Requester requester = null;
    String bootDirectoryRelativePath = "cloudoffice/cockpit/boot/view/";
    String bootURLQuery = "?input=cloudoffice/cockpit/boot/view/";
    String servername = Bootstrap.ROUTER.context().get(Keys.STORE_URL) + bootURLQuery;
    String imageEndpoint = Bootstrap.ROUTER.context().get(Keys.IMAGE_URL);
    String fontEndpoint = Bootstrap.ROUTER.context().get(Keys.FONT_URL);
    String jsEndpoint = Bootstrap.ROUTER.context().get(Keys.JS_URL);
    String htmlEndpoint = Bootstrap.ROUTER.context().get(Keys.HTML_URL);
    String cssEndpoint = Bootstrap.ROUTER.context().get(Keys.CSS_URL);
    String homepage = "";
    String indexPageName = "index.html";
    String securePageName = "secure.html";
    JSONObject domain = null;
    JSONArray subscribedComponents = new JSONArray();

    public static String defaultCompany = "cloudoffice";

    Shell ensureResourceStore() {
        File file = new File(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + resolver.storeId());
        if (!file.exists()) {
            java.nio.file.Path source = Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "cloudoffice");
            try {
                FileUtils.copyDirectory(source.toFile(), file);

            } catch (IOException ex) {
            }
        }
        return this;
    }
}
