/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.gateway;

import io.cloudoffice.platform.cockpit.microservice.Keys;
import io.cloudoffice.platform.cockpit.router.Context;
import io.cloudoffice.platform.cockpit.router.GatewayWANPort;
import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.Subscriber;
import io.netty.handler.ssl.OpenSslServerContext;
import io.netty.util.CharsetUtil;
import io.netty.util.DomainNameMapping;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.JSONObject;

public class Boot {

    public static String SECURE_KEY = "secure";
    public static boolean SECURE_VALUE = true;
    public static String HOST_KEY = "host";
    public static String HOST_VALUE = "localhost";
    public static String PORT_KEY = "port";
    public static int PORT_VALUE = 443;

    public static String BASEDIR = ".";
    public static Map<String, Subscriber> SUBSCRIBERS = new HashMap<String, Subscriber>();
    public static DomainNameMapping DOMAIN_SSL_CONTEXT_MAP = new DomainNameMapping("app1.cloudoffice.io");

    static void loadProperties() {
        try {
            Properties prop = new Properties();
            File jarPath = new File(Boot.class.getProtectionDomain().getCodeSource().getLocation().getPath());
            BASEDIR = jarPath.getParentFile().getParentFile().getAbsolutePath();
            Logger.getLogger(Boot.class.getName()).info(" propertiesPath-" + BASEDIR);
            prop.load(new FileInputStream(BASEDIR + "/config.properties"));
            SECURE_VALUE = Boolean.valueOf(String.valueOf(prop.get(SECURE_KEY)));
            HOST_VALUE = String.valueOf(prop.get(HOST_KEY));
            PORT_VALUE = Integer.valueOf(String.valueOf(prop.get(PORT_KEY)));
        } catch (IOException ex) {
            Logger.getLogger(Boot.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    static void registerSubscribers() {
        try {
            String subscribersData = new String(Files.readAllBytes(Paths.get(BASEDIR + "/subscribers.json")), CharsetUtil.UTF_8);
            JSONObject sb = new JSONObject(subscribersData);
            for (String name : sb.keySet()) {
                JSONObject subcriber = sb.getJSONObject(name);
                Subscriber config = new Subscriber(
                        name, BASEDIR + "/"
                        + subcriber.getString("keyfile"),
                        BASEDIR + "/" + subcriber.getString("certfile")
                );

                DOMAIN_SSL_CONTEXT_MAP.add(name, OpenSslServerContext.newServerContext(Paths.get(config.getCertFile()).toFile(), Paths.get(config.getKeyFile()).toFile()));
                SUBSCRIBERS.put("https://" + name, config);
                Logger.getLogger(Boot.class.getName()).log(Level.INFO, "REGISTERED SUBSCRIBER::" + name);
            }
        } catch (IOException ex) {
            Logger.getLogger(Boot.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static void main(String[] args) throws Exception {
        loadProperties();
        registerSubscribers();
        Context context = new Context();
        context.put(Keys.BASEDIR, BASEDIR);
        Router router = new Router(HOST_VALUE, PORT_VALUE, SECURE_VALUE, DOMAIN_SSL_CONTEXT_MAP, BASEDIR, SUBSCRIBERS.keySet().toArray(new String[]{}), context);
        router.bindWANPort(GatewayWANPort.class).activate();
    }
}
