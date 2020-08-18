/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.cloudoffice.platform.cockpit.router.hub.port.writer.WANWriter;
import io.cloudoffice.platform.cockpit.router.wan.WANPort;
import io.cloudoffice.platform.cockpit.router.security.SecurityLayer;
import io.netty.channel.Channel;
import io.netty.channel.ChannelPipeline;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslHandler;

public class HttpDesktopActivator extends DefaultRouterActivator {

    public static final int MESSAGE_BYTES_LIMIT = 20*100 * 1024;

    public HttpDesktopActivator(Router router, WANPort port) {
        super(router, port);
    }

    public HttpDesktopActivator() {
    }
    

    @Override
    protected void initChannel(Channel ch) throws Exception {
        ChannelPipeline p = ch.pipeline();

        //  Logger.getLogger(DefaultRouterActivator.class.getName()).log(Level.INFO, "NEW CHANNEL::" + ch.id());
        if (router().secure()) {
            SslContext ss= (SslContext)router().sslMap().map("cockpit.cloudoffice.io");
            p.addLast(new SslHandler(ss.newEngine(ch.alloc())));
            p.addLast("multiplex-server-traffic", new TrafficLoggingHandler("multiplex-server-traffic", LogLevel.INFO));
            p.addLast("multiplex-server-codec", new HttpServerCodec());
            p.addLast("multiplex-server-chunk-aggregator", new HttpObjectAggregator(MESSAGE_BYTES_LIMIT));
            p.addLast("multiplex-server-request-handler", WANPort());
        }
    }

}
