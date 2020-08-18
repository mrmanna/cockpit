/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.gateway;

import io.cloudoffice.platform.cockpit.microservice.Keys;
import io.cloudoffice.platform.cockpit.router.Context;
import io.cloudoffice.platform.cockpit.router.wan.RemoteSecureGatewayWANPort;
import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.Subscriber;
import io.cloudoffice.platform.cockpit.router.wan.LocalGatewayWANPort;
import io.cloudoffice.platform.cockpit.router.wan.RemoteNonSecureGatewayWANPort;
import io.netty.handler.codec.http2.Http2SecurityUtil;
import io.netty.handler.ssl.ApplicationProtocolConfig;
import io.netty.handler.ssl.ApplicationProtocolConfig.Protocol;
import io.netty.handler.ssl.ApplicationProtocolConfig.SelectedListenerFailureBehavior;
import io.netty.handler.ssl.ApplicationProtocolConfig.SelectorFailureBehavior;
import io.netty.handler.ssl.ApplicationProtocolNames;
import io.netty.handler.ssl.OpenSsl;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import io.netty.handler.ssl.SslProvider;
import io.netty.handler.ssl.SupportedCipherSuiteFilter;
import io.netty.util.CharsetUtil;
import io.netty.util.DomainNameMapping;
import io.netty.util.DomainNameMappingBuilder;
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
    public static Map DOMAIN_SSL_CONTEXT_MAP = new HashMap<String, SslContext>();

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
                SslProvider provider = OpenSsl.isAvailable() ? SslProvider.OPENSSL : SslProvider.JDK;
                Logger.getLogger(Boot.class.getName()).log(Level.INFO, "SSL PROVIDER::" + provider.name());
                SslContext sslctx = SslContextBuilder
                        .forServer(Paths.get(config.getCertFile()).toFile(), Paths.get(config.getKeyFile()).toFile())
                        .sslProvider(SslProvider.JDK)
                        .applicationProtocolConfig(new ApplicationProtocolConfig(
                                Protocol.ALPN,
                                SelectorFailureBehavior.NO_ADVERTISE,
                                SelectedListenerFailureBehavior.ACCEPT,
                                ApplicationProtocolNames.HTTP_2))
                        .ciphers(Http2SecurityUtil.CIPHERS, SupportedCipherSuiteFilter.INSTANCE)
                        .build();
   SslContext sslctx1 = SslContextBuilder
                        .forServer(Paths.get(config.getCertFile()).toFile(), Paths.get(config.getKeyFile()).toFile())
                        .sslProvider(SslProvider.JDK)
                        .build();
//                sslctx = SslContext.newServerContext(
//                        Paths.get(config.getCertFile()).toFile(), Paths.get(config.getKeyFile()).toFile(), null,
//                        Http2SecurityUtil.CIPHERS,
//                        /* NOTE: the following filter may not include all ciphers required by the HTTP/2 specification
//                     * Please refer to the HTTP/2 specification for cipher requirements. */
//                        SupportedCipherSuiteFilter.INSTANCE,
//                        new ApplicationProtocolConfig(
//                                Protocol.ALPN,
//                                SelectorFailureBehavior.NO_ADVERTISE,
//                                SelectedListenerFailureBehavior.ACCEPT,
//                                SelectedProtocol.HTTP_2.protocolName()),
//                        0, 0);
                DOMAIN_SSL_CONTEXT_MAP.put(name, sslctx);
                DOMAIN_SSL_CONTEXT_MAP.put(name, sslctx1);

//DOMAIN_SSL_CONTEXT_MAP.add(name,OpenSslServerContext.newServerContext(Paths.get(config.getCertFile()).toFile(), Paths.get(config.getKeyFile()).toFile()));
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
        DomainNameMappingBuilder<SslContext> builders = new DomainNameMappingBuilder<SslContext>((SslContext) DOMAIN_SSL_CONTEXT_MAP.values().toArray()[0]);
        DOMAIN_SSL_CONTEXT_MAP.forEach((k, v) -> {
            Logger.getLogger(Boot.class.getName()).log(Level.INFO, "key:" + (String) k);
            builders.add((String) k, (SslContext) v);
        });
        DomainNameMapping<SslContext> namemapping = builders.build();
        Router router = new Router(HOST_VALUE, PORT_VALUE, SECURE_VALUE, namemapping, BASEDIR, SUBSCRIBERS.keySet().toArray(new String[]{}), context,25);
        // router.bindWANPort(Http2InboundHandler.class).activateHttp2();
        // router.bindWANPort(DuplexGatewayWANPort.class).activateHttp2();
        router.bindWANPort(RemoteSecureGatewayWANPort.class)
                .bindWANPort(RemoteNonSecureGatewayWANPort.class, 80)
                .bindWANPort(LocalGatewayWANPort.class, 9191)
                .activateHttp2();

    }
}
