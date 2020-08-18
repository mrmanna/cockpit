/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.shell;

import io.cloudoffice.platform.cockpit.router.*;
import io.cloudoffice.platform.cockpit.router.hub.port.writer.WANWriter;
import io.netty.channel.Channel;
import io.netty.channel.ChannelPipeline;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;

public class ShellRouterActivator extends RouterActivator {

    @Override
    protected void initChannel(Channel ch) throws Exception {
        ChannelPipeline p = ch.pipeline();
        p.addLast(new HttpServerCodec());
        p.addLast(new HttpObjectAggregator(RouterActivator.MESSAGE_BYTES_LIMIT));
        p.addLast(WANPort());
        p.addLast(new WANWriter(router()));

    }

}
