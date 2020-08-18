/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port;

import io.cloudoffice.platform.cockpit.microservice.MicroChannelHandler;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelPromise;

public class Listener {

    private Port port;

    public Port port() {
        return port;
    }

    public Listener(Port control) {
        this.port = control;
    }

    public void listen(final Object msg, ChannelHandlerContext ctx) {
        final Writer writer = new Writer(ctx);
        port().handler(new Activator(writer));
        port().connect(port().server().serverHost(), port().server().serverPort()).addListener(new ChannelFutureListener() {
            @Override
            public void operationComplete(ChannelFuture f) throws Exception {
                if (f.isSuccess()) {
                    //  Logger.getLogger(Port.class.getName()).log(Level.INFO, "2.channelid:" + ctx.channel().id() + "::Connected::");
                    //Proxy pass
                    f.channel().pipeline().addLast(writer);
                    f.channel().writeAndFlush(msg).addListener(new ChannelFutureListener() {
                        @Override
                        public void operationComplete(ChannelFuture f) throws Exception {
                            if (f.isSuccess()) {
                                // Logger.getLogger(Port.class.getName()).log(Level.INFO, "3.channelid:" + ctx.channel().id() + "::Port Publised Request::");
                                //  f.channel().read();
                            }
                        }
                    }
                    );

                }
            }
        });

    }

    public void listen(final Object msg, final ChannelFutureListener listener) {
        port().handler(new Activator());
        ChannelFuture f = port().connect(port().server().serverHost(), port().server().serverPort());
        f.addListener(new ChannelFutureListener() {
            @Override
            public void operationComplete(ChannelFuture f) throws Exception {
                if (f.isSuccess()) {
                    f.channel().writeAndFlush(msg).addListener(listener);
                }
            }
        });
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
                }
            }
        });
        return promise;
    }
}
