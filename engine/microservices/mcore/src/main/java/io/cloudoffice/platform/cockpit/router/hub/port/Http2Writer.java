/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port;

import io.cloudoffice.platform.cockpit.router.Router;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelDuplexHandler;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.ChannelGroupFuture;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpObject;
import io.netty.handler.codec.http.HttpStatusClass;
import io.netty.handler.codec.http2.DefaultHttp2DataFrame;
import io.netty.handler.codec.http2.DefaultHttp2HeadersFrame;
import io.netty.handler.codec.http2.Http2MultiplexCodec;
import io.netty.handler.codec.http2.HttpConversionUtil;
import io.netty.util.AttributeKey;
import io.netty.util.ReferenceCountUtil;
import java.util.logging.Level;
import java.util.logging.Logger;

@ChannelHandler.Sharable
public class Http2Writer extends SimpleChannelInboundHandler<HttpObject> {

    int attempt = 0;
    public ChannelHandlerContext basebandContext;

    Router router;

    public Router router() {
        return this.router;
    }

    public Http2Writer(ChannelHandlerContext basebandContext) {
        this.basebandContext = basebandContext;
    }

    public Http2Writer(ChannelHandlerContext basebandContext, Router router) {
        this.basebandContext = basebandContext;
        this.router = router;
    }

    @Override
    public void channelRead0(ChannelHandlerContext ctx, HttpObject msg) throws Exception {
        messageReceived(ctx, msg);
    }

    protected void messageReceived(ChannelHandlerContext ctx, HttpObject msg) throws Exception {
        // Logger.getLogger(Port.class.getName()).log(Level.INFO, "4.channelid:" + basebandContext.channel().id() + "::Message Arrived::");
        ReferenceCountUtil.retain(msg);
        write(ctx, msg);
    }

    private void write(final ChannelHandlerContext ctx, final HttpObject msg) {
        if (msg instanceof FullHttpResponse) {
            FullHttpResponse response = (FullHttpResponse) msg;
            // response.headers().set(HttpHeaderNames.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
            AttributeKey<String> id = AttributeKey.valueOf("streamId");
            String streamId = basebandContext.channel().attr(id).get();
            if(null!=streamId){
                Logger.getLogger(Http2Writer.class.getName()).log(Level.INFO, "Hello Writer EXECUTED!!"+streamId);
                response.headers().add(HttpConversionUtil.ExtensionHeaderNames.STREAM_ID.text(),streamId);
            }
            if (response.status().codeClass().SUCCESS == HttpStatusClass.SUCCESS) {
                    basebandContext.fireChannelRead(response);
            } else {
                Logger.getLogger(Http2Writer.class.getName()).log(Level.INFO, "Hello Writer EXECUTED!!");

            }
        }

    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        if (null != ctx.channel()) {
            ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
        }
    }

}
