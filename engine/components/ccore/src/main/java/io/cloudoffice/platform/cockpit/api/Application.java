/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.LocalStorage;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import net.java.html.BrwsrCtx;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

/**
 *
 * @author Administrator
 */
@Model(className = "ApplicationContext", targetId = "", properties = {
    @Property(name = "createdTime", type = long.class),
    @Property(name = "className", type = String.class),
    @Property(name = "device", type = String.class),
    @Property(name = "serverBasePostURL", type = String.class)})
public final class Application {

    public static String DESKTOP = "desktop";
    public static String WEB = "web";
    public static String ANDROID = "android";
    public static String IOS = "ios";
    private static ApplicationContext applicationContext = null;
    private static BrwsrCtx browserContext = null;
    private static ConnectionManager wsConnectionManager = null;
    public static ScheduledExecutorService SCHEDULER = Executors.newSingleThreadScheduledExecutor();

    public static ConnectionManager getWsConnectionManager() {
        return wsConnectionManager;
    }

    public static void setWsConnectionManager(ConnectionManager wsConnectionManager) {
        Application.wsConnectionManager = wsConnectionManager;
    }

    public static void createApplicationContext(String serverUrl, BrwsrCtx ctx) {
        Application.browserContext = ctx;
        AsyncTask.initAsyncCaller();
        if (null != LocalStorage.getBean("application")) {
            String data = LocalStorage.getBean("application");
            try {
                InputStream input = new ByteArrayInputStream(data.getBytes());
                //fake object to make availabe in context
                new ApplicationContext();
                applicationContext = Models.parse(ctx, ApplicationContext.class, input);
                applicationContext.setServerBasePostURL(serverUrl);
            } catch (Exception e) {
                initApplicationContext(serverUrl);
            }
        } else {
            initApplicationContext(serverUrl);
        }
//     JSUIUtils.console("Application Context Created");
    }

    private static void initApplicationContext(String serverUrl) {
        applicationContext = new ApplicationContext();
        applicationContext.setServerBasePostURL(serverUrl);
        String data = applicationContext.toString();
        LocalStorage.setBean("application", data);
    }

    public static void store() {
        LocalStorage.setBean("application", Application.getApplicationContext().toString());
    }

    public static void setCompany(MapBuilder company) {
        LocalStorage.setBean("company", company.toJSON());
    }

  

    public static ApplicationContext getApplicationContext() {
        return applicationContext;
    }

    public static BrwsrCtx getBrowserContext() {
        return browserContext;
    }

    public static void notifyError(Exception e, Source source) {
        Components.BOOT.onError(new Error(e), source);
    }

}
