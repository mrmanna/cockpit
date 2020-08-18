/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.cloudoffice.platform.cockpit.router.security.SecurityLayer;
import io.netty.channel.Channel;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.handler.codec.http.HttpContentCompressor;
import io.netty.handler.codec.http.HttpMethod;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.cors.CorsConfig;
import io.netty.handler.codec.http.cors.CorsHandler;
import io.netty.handler.timeout.ReadTimeoutHandler;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

public class RouterActivator extends ChannelInitializer<Channel> {

    private static final int MESSAGE_BYTES_LIMIT = 20 * 1000 * 1024;

    public Router router() {
        return router;
    }

    public void router(Router router) {
        this.router = router;
    }

    public WANPort WANPort() {
        return wanport;
    }

    public void WANPort(WANPort port) {
        this.wanport = port;
    }

    Router router;
    WANPort wanport;

    public RouterActivator(Router router, WANPort port) {
        this.router = router;
        this.wanport = port;
    }

    @Override
    protected void initChannel(Channel ch) throws Exception {
        ChannelPipeline p = ch.pipeline();
      //  Logger.getLogger(RouterActivator.class.getName()).log(Level.INFO, "NEW CHANNEL::" + ch.id());
        if (router.secure()) {
            p.addLast(new SecurityLayer(router().sslMap()));
        //    Logger.getLogger(RouterActivator.class.getName()).log(Level.INFO, "SECURE CHANNEL ::" + ch.id());
        }
        p.addLast(new HttpServerCodec());
//        p.addLast(new HttpRequestDecoder());
        if (router.secure()) {
            p.addLast(new CorsHandler(
                    CorsConfig.withOrigins(router.origins())
                    .allowedRequestHeaders("Content-Type")
                    .allowedRequestMethods(HttpMethod.POST)
                    .allowedRequestMethods(HttpMethod.GET)
                    .allowedRequestMethods(HttpMethod.OPTIONS)
                            .build()));
        }
  
        p.addLast(new HttpObjectAggregator(MESSAGE_BYTES_LIMIT));
        if (router.secure()) {
        p.addLast(new HttpContentCompressor(9));
        }
        p.addLast(new ReadTimeoutHandler(55L, TimeUnit.SECONDS));
        p.addLast(WANPort());

    }

}
