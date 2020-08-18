/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpObject;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.util.ReferenceCountUtil;

@ChannelHandler.Sharable
public class GatewayWANPort extends WANPort {

    Transmitter transmitter = null;

    public GatewayWANPort() {

    }

    @Override
    public WANPort build(Router router) {
        this.transmitter = new Transmitter(router);
        return this;
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        ctx.flush();
    }

    @Override
    protected void messageReceived(ChannelHandlerContext ctx, FullHttpRequest msg) throws Exception {
        if (msg instanceof FullHttpRequest) {
            transmitter.transmit(requestPath(msg), msg, ctx, this);
        }
    }

    protected String requestPath(HttpObject msg) {
        ReferenceCountUtil.retain(msg);
        HttpRequest request = (HttpRequest) msg;
        String uri = request.uri();
        if (!uri.isEmpty()) {
            String[] paths = uri.split("/");
            if (paths.length > 1) {
                return "/" + paths[1];
            } else {
                return "/";
            }

        } else {
            return "/";
        }
//           // Logger.getLogger(WANPort.class.getName()).log(Level.INFO, "1.channelid:" + ctx.channel().id() + "::to process::" + hostname + request.uri());
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
              ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).cancel(true);

    }

}
