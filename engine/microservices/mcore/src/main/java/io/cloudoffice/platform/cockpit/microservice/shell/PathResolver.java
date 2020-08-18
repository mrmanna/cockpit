/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.shell;

import io.cloudoffice.platform.cockpit.microservice.Bootstrap;
import io.cloudoffice.platform.cockpit.microservice.Keys;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.glassfish.jersey.server.ContainerRequest;
import org.json.JSONArray;
import org.json.JSONObject;

public class PathResolver {

    public JSONObject sitemap() {
        return sitemap;
    }

    public void sitemap(JSONObject sitemap) {
        this.sitemap = sitemap;
    }

    public Requester requester() {
        return requester;
    }

    public void requester(Requester requester) {
        this.requester = requester;
    }

    private JSONObject sitemap;
    private Requester requester;
    private JSONObject currentPathObject;
    private boolean secure;
    private DeviceDetector detector = null;

    public DeviceDetector detector() {
        return detector;
    }

    public PathResolver(ContainerRequest request, boolean authentic) {
        requester = new Requester(request);
        detector = new DeviceDetector(request.getHeaders().get("User-Agent").get(0));
        requester.authenticated(authentic);
        sitemap = getDomainData();
        currentPathObject = currentPathObject();

    }

    public boolean hasRequestPath() {
        return null != requester.getPath()
                && !requester.getPath().isEmpty()
                && !requester.getPath().equals("/");
    }

    private JSONObject currentPathObject() {
        JSONObject currentPath = requestPath();
        boolean userAuthentic = requester().authenticated();
        currentPath = (null != currentPath) ? currentPath : homePath();
        boolean isSigninPage = trimSlash(currentPath.getString("path")).equalsIgnoreCase("signin");
        secure = currentPath.getBoolean("isSecure");

        if (userAuthentic) {
            return (isSigninPage) ? homePath() : currentPath;
        } else {
            return (secure) ? pathObject("/signin") : currentPath;
        }
    }

    public String currentPath() {
        return currentPathObject.getString("path");
    }

    private JSONObject pathObject(String path) {
        JSONArray pathnames = sitemap.getJSONArray("paths");
        for (Object object : pathnames) {
            JSONObject item = (JSONObject) object;
            if (trimSlash(item.getString("path")).equalsIgnoreCase(trimSlash(path))) {
                return item;
            }
        }
        return null;
    }

    public String currentLayout() {
        String layout = currentPathObject.getString("layout");
        if (detector().isMobile() && currentPathObject.has("mlayout")) {
            layout = currentPathObject.getString("mlayout");
        }
        return layout;
    }

    private String trimSlash(String value) {
        return value.replace("/", "");
    }

    public List<Object> subscription() {
        return sitemap().getJSONObject("site").getJSONArray("subscribed").toList();
    }

    public JSONObject homePath() {
        JSONArray pathnames = sitemap.getJSONArray("paths");
        for (Object object : pathnames) {
            JSONObject item = (JSONObject) object;

            if (item.getBoolean("isHome")) {
                return item;
            }
        }
        return null;
    }

    public String signoutPath() {
        JSONArray pathnames = sitemap.getJSONArray("paths");
        for (Object object : pathnames) {
            JSONObject item = (JSONObject) object;

            if (trimSlash(item.getString("path")).equalsIgnoreCase("signin")) {
                return Base64.getEncoder().encodeToString(item.toString().getBytes());
            }
        }
        return null;
    }

    private JSONObject requestPath() {
        JSONArray pathnames = sitemap.getJSONArray("paths");
        if (null == requester.getPath() || requester.getPath().isEmpty() || requester.getPath().equalsIgnoreCase("/")) {
            return homePath();
        }
        for (Object object : pathnames) {
            JSONObject item = (JSONObject) object;

            if (trimSlash(item.getString("path")).equalsIgnoreCase(trimSlash(requester.getPath()))) {
                return item;
            }
        }
        return null;
    }

    private JSONObject getDomainData() {
        String contentHome = Bootstrap.ROUTER.context().get(Keys.STORE_PATH);
        java.nio.file.Path domainDetailPath = Paths.get(contentHome + "domains/" + requester.getHost() + ".json");
        try {
            return new JSONObject(new String(Files.readAllBytes(domainDetailPath)));
        } catch (IOException ex) {
            Logger.getLogger(this.getClass().getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

    public String storeId() {
        return sitemap.getJSONObject("workspace").getString("itemId");
    }

    public String nextPathLayout() {
        JSONObject obj = nextPathObject();
        String layout = obj.getString("layout");
        if (detector().isMobile() && obj.has("mlayout")) {
            layout = obj.getString("mlayout");
        }
        return layout;
    }

    public JSONObject nextPathObject() {
        JSONObject requestPath = requestPath();
        if (null != requestPath) {
            boolean isSigninPage = trimSlash(requestPath.getString("path")).equalsIgnoreCase("signin");
            if (null != requestPath && !isSigninPage) {
                return requestPath;
            } else {
                return homePath();
            }
        } else {
            return homePath();
        }
    }

    public boolean requiresSignin() {
        return (secure && !requester.authenticated());
    }

    public String company() {
        return sitemap().getJSONObject("workspace").toString();
    }
     public String companyId() {
        return sitemap().getJSONObject("workspace").getString("itemId");
    }

    public String siteId() {
        return sitemap().getJSONObject("site").getString("itemId");
    }
}
