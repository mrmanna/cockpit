/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.auth;

import io.cloudoffice.platform.cockpit.microservice.MicroChannelHandler;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpStatusClass;
import io.netty.util.ReferenceCountUtil;
import java.nio.charset.StandardCharsets;

public class SessionValidator extends MicroChannelHandler {

    protected void messageReceived(ChannelHandlerContext chc, FullHttpResponse msg) throws Exception {
        ReferenceCountUtil.retain(msg);
        if (msg instanceof FullHttpResponse) {
            FullHttpResponse response = (FullHttpResponse) msg;
            // response.headers().set(HttpHeaderNames.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
            if (response.status().codeClass().SUCCESS == HttpStatusClass.SUCCESS) {
                String s = StandardCharsets.UTF_8.decode(response.content().nioBuffer()).toString();
                boolean success = Boolean.valueOf(s);
                if (success) {
                    promise().setSuccess().addListener(ChannelFutureListener.CLOSE);
                } else {
                    promise().cancel(true);
                }

            }
        }

    }

    @Override
    protected void channelRead0(ChannelHandlerContext chc, FullHttpResponse i) throws Exception {
        messageReceived(chc, i);
    }

}
