/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port;

import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpObject;
import io.netty.handler.codec.http.HttpStatusClass;
import io.netty.util.ReferenceCountUtil;
import java.util.logging.Level;
import java.util.logging.Logger;

@ChannelHandler.Sharable
public class Writer extends SimpleChannelInboundHandler<HttpObject> {

    int attempt = 0;
    public ChannelHandlerContext basebandContext;

    public Writer(ChannelHandlerContext basebandContext) {
        this.basebandContext = basebandContext;
    }
    @Override
    protected void messageReceived(ChannelHandlerContext ctx, HttpObject msg) throws Exception {
       // Logger.getLogger(Port.class.getName()).log(Level.INFO, "4.channelid:" + basebandContext.channel().id() + "::Message Arrived::");
        ReferenceCountUtil.retain(msg);
        write(ctx, msg);
    }
    public void channelRead0(ChannelHandlerContext ctx, HttpObject msg) {
   
    }

    private void write(final ChannelHandlerContext ctx,final HttpObject msg) {

        if (msg instanceof FullHttpResponse) {
            FullHttpResponse response = (FullHttpResponse) msg;
            // response.headers().set(HttpHeaderNames.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
            if (response.status().codeClass().SUCCESS == HttpStatusClass.SUCCESS) {

                ChannelFuture f = basebandContext.writeAndFlush(response);
                f.addListener(new ChannelFutureListener() {
                    @Override
                    public void operationComplete(ChannelFuture f) throws Exception {
                        if (f.isSuccess()) {
                       //     Logger.getLogger(Writer.class.getName()).log(Level.INFO, "5.channelid:" + basebandContext.channel().id() + "Broadcast SEUCCEEDED");
                            close(ctx);
                        } else {
                         //   Logger.getLogger(Writer.class.getName()).log(Level.INFO, "5.channelid:" + basebandContext.channel().id() + "Broadcast FAILED");
                            close(ctx);
                        }
                    }
                }
                );
            } else {
               // Logger.getLogger(Writer.class.getName()).log(Level.INFO, "5.channelid:" + basebandContext.channel().id() + "SERVER ERROR");
                close(ctx);
            }
        }

    }

    private void close(ChannelHandlerContext ctx) {
        ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
        basebandContext.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
        basebandContext.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        if (null != ctx.channel()) {
            ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
        }
    }



}
