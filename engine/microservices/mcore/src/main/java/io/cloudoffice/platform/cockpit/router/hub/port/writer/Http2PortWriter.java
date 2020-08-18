/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port.writer;

import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.hub.port.Port;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http2.Http2ChannelDuplexHandler;
import io.netty.util.ReferenceCountUtil;
import java.util.logging.Level;
import java.util.logging.Logger;

public abstract class Http2PortWriter extends Http2ChannelDuplexHandler {

    public ChannelHandlerContext parentContext;

    Router router;

    public Router router() {
        return this.router;
    }

    public Http2PortWriter(ChannelHandlerContext basebandContext) {
        this.parentContext = basebandContext;
    }

    public Http2PortWriter(ChannelHandlerContext basebandContext, Router router) {
        this.parentContext = basebandContext;
        this.router = router;
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        if (msg instanceof FullHttpResponse) {
            messageReceived(parentContext, (FullHttpResponse) msg);
        }
    }

    protected void messageReceived(ChannelHandlerContext ctx, FullHttpResponse msg) throws Exception {
        Logger.getLogger(Port.class.getName()).log(Level.INFO, ctx.channel().id() + "PORT WRITER::Message Arrived::");
        ReferenceCountUtil.retain(msg);
        write(ctx, msg);
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        router().serverLogger().log(Level.FINER, "INACTIVE ACTIVE HANDLER");
        ctx.writeAndFlush(evt);

    }

    public abstract void write(final ChannelHandlerContext ctx, final FullHttpResponse msg);

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        // ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
        // parentContext.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
    }
}
