/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port;

import io.cloudoffice.platform.cockpit.router.hub.port.writer.PortWriter;
import io.netty.channel.Channel;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.handler.codec.http.HttpClientCodec;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpRequestDecoder;
import io.netty.handler.codec.http.HttpResponseDecoder;

public class Activator extends ChannelInitializer<Channel> {

    PortWriter writer;

    public Activator(PortWriter outputPort) {
        this.writer = outputPort;
    }

    public Activator() {
    }

    @Override
    protected void initChannel(Channel c) throws Exception {
        ChannelPipeline p = c.pipeline();
        p.addLast(new HttpClientCodec());
//        p.addLast(new HttpRequestDecoder());
//        p.addLast(new HttpResponseDecoder());
        // Remove the following line if you don't want automatic content decompression.
        //p.addLast(new HttpContentDecompressor());
        // Uncomment the following line if you don't want to handle HttpContents.
        p.addLast(new HttpObjectAggregator(20 * 1000 * 1024));
           if (null != writer) {
            p.addLast(writer);
        }

    }

}
