/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.gateway;

import io.cloudoffice.platform.cockpit.router.hub.port.Activator;
import io.cloudoffice.platform.cockpit.router.hub.port.writer.DefaultWriter;
import io.netty.bootstrap.Bootstrap;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFuture;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.http.DefaultFullHttpRequest;
import io.netty.handler.codec.http.HttpMethod;
import io.netty.handler.codec.http.HttpVersion;

/**
 *
 */
public class VersionUpdater {

    public static void main(String[] args) {
        
        
        NioEventLoopGroup worker = new NioEventLoopGroup();
        
        Bootstrap b = new Bootstrap()
                .group(worker) // (2)
                .channel(NioSocketChannel.class); // (3)
        b.handler(new Activator(new DefaultWriter(null, null)));
        b.connect("localhost", 9191).addListener((ChannelFuture t) -> {
            if (t.isSuccess()) {
                DefaultFullHttpRequest r = new DefaultFullHttpRequest(HttpVersion.HTTP_1_1, HttpMethod.GET, "/version", Unpooled.wrappedBuffer("1".getBytes()));
                t.channel().writeAndFlush(r);
                System.out.println("DONE");
                worker.shutdownGracefully();
            }
        });
    }
}
