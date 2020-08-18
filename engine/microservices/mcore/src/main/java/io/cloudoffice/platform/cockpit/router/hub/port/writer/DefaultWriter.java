/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port.writer;

import io.cloudoffice.platform.cockpit.router.Router;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpHeaders;
import io.netty.handler.codec.http.HttpStatusClass;
import java.util.logging.Level;

@ChannelHandler.Sharable
public class DefaultWriter extends PortWriter {

    public DefaultWriter(ChannelHandlerContext basebandContext, Router router) {
        super(basebandContext, router);
    }

    @Override
    public void write(final ChannelHandlerContext ctx, final FullHttpResponse msg) {
        FullHttpResponse response = (FullHttpResponse) msg;
        if (response.status().codeClass().SUCCESS == HttpStatusClass.SUCCESS) {
            router().serverLogger().log(Level.CONFIG, "DefaultWriter HANDLER");
            response.headers().set(HttpHeaderNames.CONTENT_LENGTH, response.content().readableBytes());
            response.headers().set(HttpHeaderNames.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
            response.headers().set(HttpHeaderNames.ACCESS_CONTROL_ALLOW_HEADERS, "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With,Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            //response.headers().set(HttpHeaderNames.ACCESS_CONTROL_ALLOW_HEADERS, "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            response.headers().set(HttpHeaderNames.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
            response.headers().set(HttpHeaderNames.ACCESS_CONTROL_ALLOW_METHODS, "GET,PUT,POST,DELETE,PATCH,OPTIONS");
            //response.headers().set(HttpHeaderNames.X_FRAME_OPTIONS, "ALLOWALL");
            
            ctx.writeAndFlush(response);
            response.release();
        }

    }

}
