/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port;

import io.cloudoffice.platform.cockpit.router.Router;
import io.netty.bootstrap.Bootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelDuplexHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.ChannelPromise;
import io.netty.channel.pool.ChannelPoolHandler;
import io.netty.channel.pool.FixedChannelPool;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.http.DefaultFullHttpRequest;
import io.netty.handler.codec.http.HttpMethod;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.util.concurrent.Future;
import io.netty.util.concurrent.FutureListener;
import java.net.SocketAddress;
import java.util.logging.Level;

public class Broadcaster extends Bootstrap {

    Router router;

    public Broadcaster(Router router) {
        this.router = router;
        group(router.workerGroup());
        channel(NioSocketChannel.class);

    }

    public void broadcast(SocketAddress address) {
        remoteAddress(address);
        fpool1 = new FixedChannelPool(this,
                new ChannelPoolHandler() {

            @Override
            public void channelCreated(Channel ch) throws Exception {
                ChannelPipeline pipeline = ch.pipeline();
                pipeline.addLast(new ChannelDuplexHandler() {
                    @Override
                    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
                        router.serverLogger().log(Level.CONFIG, "BROADCASTER WRITE");
                       // ctx.writeAndFlush(ping(""));
                    }

                    @Override
                    public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
                        router.serverLogger().log(Level.CONFIG, "BROADCASTER WRITE");
                        DefaultFullHttpRequest re = new DefaultFullHttpRequest(HttpVersion.HTTP_1_1, HttpMethod.GET, "/sse");
                        ctx.writeAndFlush(re);
                    }

                    @Override
                    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
                        cause.printStackTrace();
                    }

                });
            }

            @Override
            public void channelReleased(Channel chnl) throws Exception {
            }

            @Override
            public void channelAcquired(Channel chnl) throws Exception {
            }
        }, 10, 2);
        router.serverLogger().log(Level.CONFIG, "BROADCAST");
        fpool1.acquire().addListener(new FutureListener< Channel>() {
            public void operationComplete(Future< Channel> future) {
                if (future.isSuccess()) {

                    Channel channel = future.getNow();
                    if (channel.isWritable()) {
                        router.serverLogger().log(Level.CONFIG, "BROADCASTER READ");
                     //   channel.writeAndFlush(ping(""));

                    }
                    fpool1.release(channel);
                }else{
                    future.cause().printStackTrace();
                }
            }
        });
    }
    FixedChannelPool fpool1;
}
