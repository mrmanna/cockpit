/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.cloudoffice.platform.cockpit.router.wan.WANPort;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInitializer;

public abstract class RouterActivator extends ChannelInitializer {

    public static final int MESSAGE_BYTES_LIMIT = 20 * 1000 * 1024;

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

    public RouterActivator() {
    }

   @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
        // basebandContext.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
    }

}
