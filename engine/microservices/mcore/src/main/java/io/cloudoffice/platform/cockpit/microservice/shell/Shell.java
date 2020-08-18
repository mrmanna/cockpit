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
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

public abstract class Shell {

    public static String VERSION = "0";
    String[] defaultComponents = new String[]{
        "../../boot/controller/lib/html.js",
        "../../boot/controller/lib/html.json.js",
        "../../boot/controller/lib/html.boot.js",
        "../../boot/controller/lib/emul-rt.js",
        "../../boot/controller/lib/json-20180813.js",
        "../../boot/controller/lib/ko4j.js",
        "../../js/controller/js.js",
        "../../ccore/controller/ccore.js",
        "../../boot/controller/boot.js",
        "../../layout/controller/layout.js"
    };

    PathResolver resolver;

    public String dispatch(PathResolver resolver) {
        this.resolver = resolver;
        String html = getRawHtml()
                .addSubscriptions()
                .setCurentPathAndLayout()
                .ensureResourceStore()
                .dispatch();
        Document document = Jsoup.parse(html);
        Element head = document.body();
        subscriptions().forEach(tt -> {
            String scrpt = "<script src=\"" + tt + "\" type=\"text/javascript\"></script>";
            head.append(scrpt);
        });
        head.append(getBck2brwsr());
        return document.html();
    }

    public String dispatch() {
        return homepage.replaceAll("\\$\\{server}", servername)
                .replaceAll("\\$\\{serverImage}", imageEndpoint)
                .replaceAll("\\$\\{serverFont}", fontEndpoint)
                .replaceAll("\\$\\{serverJs}", jsEndpoint)
                .replaceAll("\\$\\{serverCss}", cssEndpoint)
                .replace("${mainclass}", mainclass)
                .replace("${companyJSON}", "'" + resolver.company() + "'")
                .replace("${company}", "\"" + resolver.storeId() + "\"")
                .replace("${site}", "\"" + resolver.siteId() + "\"")
                .replace("${path}", "\"" + currentPath + "\"")
                .replace("${layout}", "\"" + currentLayout + "\"")
                .replace("${componentClassPath}", subscribedComponents.toString());
    }

    public Shell getRawHtml() {
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

    public JSONArray subscriptions() {
        JSONArray temp = new JSONArray();
        List<Object> components = resolver.subscription();
        components.stream().forEach((component) -> {
            temp.put(jsEndpoint + "../../" + component + "/controller/" + component + ".js");
        });

        for (String defaultComponent : defaultComponents) {
            temp.put(jsEndpoint + defaultComponent);
        }
        return temp.put(initlink);
    }

    public Shell addSubscriptions() {
        subscribedComponents = new JSONArray();
        List<Object> components = resolver.subscription();
        for (Object component : components) {
            subscribedComponents.put("../../" + component + "/controller/" + component + ".js");
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
    JSONArray subscribedComponents;
    String vmlink = jsEndpoint + "../../boot/controller/vm.js";
    String initlink = jsEndpoint + "../../boot/controller/init.js";

    public static String defaultCompany = "cloudoffice";

    String getBck2brwsr() {
        return "<script>\n"
                + "            var vm = bck2brwsr();\n"
                + "            var cockpitBaseController = vm.loadClass('" + mainclass + "');\n"
                + "            cockpitBaseController.invoke('main');\n"
                + "        </script>";
    }

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
