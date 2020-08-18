/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port;

import io.netty.channel.Channel;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.handler.codec.http.HttpClientCodec;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpRequestDecoder;
import io.netty.handler.codec.http.HttpResponseDecoder;
import io.netty.handler.timeout.ReadTimeoutHandler;
import java.util.concurrent.TimeUnit;

public class Activator extends ChannelInitializer<Channel> {

   Writer writer;

    public Activator(Writer outputPort) {
        this.writer = outputPort;
    }

    public Activator() {
    }
    
    
    @Override
    protected void initChannel(Channel c) throws Exception {
        ChannelPipeline p = c.pipeline();
        p.addLast(new HttpClientCodec());
        p.addLast(new HttpRequestDecoder());
        p.addLast(new HttpResponseDecoder());
        // Remove the following line if you don't want automatic content decompression.
        //p.addLast(new HttpContentDecompressor());
        // Uncomment the following line if you don't want to handle HttpContents.
        p.addLast(new HttpObjectAggregator(20*1000 * 1024));
        c.pipeline().addLast(new ReadTimeoutHandler(50L, TimeUnit.SECONDS));
     //   c.pipeline().addLast(writer);
       
    }

}
