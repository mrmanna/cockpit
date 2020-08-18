/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.cloudoffice.platform.cockpit.router.hub.port.writer.WANWriter;
import io.cloudoffice.platform.cockpit.router.wan.WANPort;
import io.netty.channel.Channel;
import io.netty.channel.ChannelPipeline;
import io.netty.handler.codec.http.HttpContentCompressor;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.timeout.ReadTimeoutHandler;
import java.util.concurrent.TimeUnit;

public class DefaultRouterActivator extends RouterActivator {

    public DefaultRouterActivator(Router router, WANPort port) {
        this.router = router;
        this.wanport = port;
    }

    public DefaultRouterActivator() {
    }

    @Override
    protected void initChannel(Channel ch) throws Exception {
        ChannelPipeline p = ch.pipeline();
        p.addLast(new HttpServerCodec());
        p.addLast(new HttpObjectAggregator(MESSAGE_BYTES_LIMIT));
        p.addLast(new HttpContentCompressor(9));
        p.addLast(new ReadTimeoutHandler(60L, TimeUnit.SECONDS));
        p.addLast(WANPort());
        p.addLast(new WANWriter(router()));

    }

}
