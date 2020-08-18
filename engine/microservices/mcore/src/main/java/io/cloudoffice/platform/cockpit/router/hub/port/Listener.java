/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port;

import io.cloudoffice.platform.cockpit.router.hub.port.writer.WANWriter;
import io.cloudoffice.platform.cockpit.microservice.MicroChannelHandler;
import io.cloudoffice.platform.cockpit.router.hub.port.writer.DefaultWriter;
import io.cloudoffice.platform.cockpit.router.hub.port.writer.PortWriter;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPromise;
import io.netty.handler.codec.http2.Http2ChannelDuplexHandler;
import io.netty.handler.codec.http2.Http2MultiplexCodecBuilder;
import io.netty.handler.codec.http2.Http2StreamChannel;
import io.netty.handler.codec.http2.Http2StreamChannelBootstrap;
import java.net.InetSocketAddress;
import java.util.logging.Level;

public class Listener {

    private Port port;

    public Port port() {
        return port;
    }

    public Listener(Port control) {
        this.port = control;
    }

    public ChannelFuture shell(final ChannelHandlerContext ctx) {
        port().router().serverLogger().log(Level.CONFIG, "Proxying Request..");
        port().handler(new Activator(new DefaultWriter(ctx, port().router())));
        return port().connect(port().server().serverHost(), port().server().serverPort());
    }

    public void listen(final Object msg, final ChannelHandlerContext ctx, PortWriter ch) {
        port().router().serverLogger().log(Level.CONFIG, "Proxying Request..");
        port().handler(new Activator(ch));
        port().connect(port().server().serverHost(), port().server().serverPort()).addListener(new ChannelFutureListener() {
            @Override
            public void operationComplete(ChannelFuture f) throws Exception {
                if (f.isSuccess()) {
                    //Proxy pass
                    f.channel().writeAndFlush(msg);
                }
            }
        });
    }
    //for Proxying
    public void listenProxy(final Object msg, final ChannelHandlerContext ctx, PortWriter ch) {
        port().router().serverLogger().log(Level.CONFIG, "Proxying Request..");
        port().handler(new Activator(ch));
        port().connect(port().server().serverHost(), port().server().serverPort()).addListener(new ChannelFutureListener() {
            @Override
            public void operationComplete(ChannelFuture f) throws Exception {
                if (f.isSuccess()) {
                    //Proxy pass
                    f.channel().writeAndFlush(msg);
                }
            }
        });
    }
    
    public void listenProxy(final Object msg, final ChannelHandlerContext ctx) {
        listenProxy(msg, ctx, new DefaultWriter(ctx, port().router()));
    }

    public void listen(final Object msg, final ChannelHandlerContext ctx) {
        listen(msg, ctx, new DefaultWriter(ctx, port().router()));
    }

    public ChannelFuture connect() {
        port().handler(new Activator());
        return port().connect(port().server().serverHost(), port().server().serverPort());

    }

    public ChannelFuture childChannel(Channel parentChannel) {
        //Http2MultiplexCodec codec = Http2MultiplexCodecBuilder.forServer().build();
        Http2StreamChannel c;
        c = new Http2StreamChannelBootstrap(parentChannel)
                .handler(new ChannelInitializer<Channel>() {
                    @Override
                    protected void initChannel(Channel c) throws Exception {
                        c.pipeline().addLast(Http2MultiplexCodecBuilder.forClient(new Http2ChannelDuplexHandler() {
                        }).build());
                    }
                })
                .open().syncUninterruptibly().getNow();
        return c.connect(new InetSocketAddress(port().server().serverHost(), port().server().serverPort()));

    }

    public ChannelFuture listen(final Object msg, final MicroChannelHandler handler) {
        port().handler(new Activator());
        ChannelFuture f = port().connect(port().server().serverHost(), port().server().serverPort());
        ChannelPromise promise = f.channel().newPromise();
        handler.addPromise(promise);
        f.channel().pipeline().addLast(handler);
        f.addListener(new ChannelFutureListener() {
            @Override
            public void operationComplete(ChannelFuture f) throws Exception {
                if (f.isSuccess()) {
                    f.channel().writeAndFlush(msg);
                    f.channel().read();
                }
            }
        });
        return promise;
    }
}
