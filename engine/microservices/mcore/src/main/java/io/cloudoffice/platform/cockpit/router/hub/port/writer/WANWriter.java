/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port.writer;

import io.cloudoffice.platform.cockpit.router.Router;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelDuplexHandler;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpHeaders;
import io.netty.handler.codec.http.HttpObject;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.HttpStatusClass;
import static io.netty.handler.codec.http.HttpVersion.HTTP_1_1;
import io.netty.util.ReferenceCountUtil;
import java.util.logging.Level;

@ChannelHandler.Sharable
public class WANWriter extends ChannelDuplexHandler {

    Router router;

    public Router router() {
        return this.router;
    }


    public WANWriter(Router router) {
        this.router = router;
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        if (msg instanceof FullHttpResponse) {
            messageReceived(ctx, (FullHttpResponse) msg);
        }
    }

    protected void messageReceived(ChannelHandlerContext ctx, HttpObject msg) throws Exception {
        router.serverLogger().log(Level.CONFIG, ctx.channel().id() + "::Message Arrived::");
        ReferenceCountUtil.retain(msg);
        write(ctx, msg);
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        router().serverLogger().log(Level.FINER, "INACTIVE ACTIVE HANDLER");
        ctx.writeAndFlush(evt);

    }



    private void write(final ChannelHandlerContext ctx, final HttpObject msg) {

        if (msg instanceof FullHttpResponse) {
            FullHttpResponse response = (FullHttpResponse) msg;
            if (response.status().codeClass().SUCCESS == HttpStatusClass.SUCCESS) {
                router().serverLogger().log(Level.CONFIG, "WRITER HANDLER");
                response.headers().set(HttpHeaderNames.CONTENT_LENGTH, response.content().readableBytes());
                ctx.writeAndFlush(response);
            }
        }

    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
        // basebandContext.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
    }
}
