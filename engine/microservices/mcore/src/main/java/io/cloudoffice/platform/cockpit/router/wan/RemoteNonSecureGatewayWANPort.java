/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.wan;

import io.cloudoffice.platform.cockpit.router.Router;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.handler.codec.http2.Http2Connection;
import io.netty.handler.codec.http2.Http2FrameCodec;
import io.netty.handler.codec.http2.Http2FrameCodecX;
import io.netty.handler.codec.http2.Http2MultiplexCodec;
import java.util.logging.Level;
import java.util.logging.Logger;

@ChannelHandler.Sharable
public class RemoteNonSecureGatewayWANPort extends SimpleChannelInboundHandler<FullHttpRequest> implements WANPort {
    
    public RemoteNonSecureGatewayWANPort() {
        
    }
    Router router;
    
    @Override
    public Router router() {
        return router;
    }
    
    @Override
    public void router(Router router) {
        this.router = router;
    }
    
    @Override
    public void connection(Http2Connection connection) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    @Override
    public Http2Connection connection() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    @Override
    public WANPort build(Router router) {
        this.router = router;
        return this;
    }
    
    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        ctx.flush();
    }
    
    protected void messageReceived(ChannelHandlerContext ctx, FullHttpRequest msg) throws Exception {
        String scheme = "https://";
        FullHttpResponse response = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.PERMANENT_REDIRECT);
        String location = scheme + msg.headers().get(HttpHeaderNames.HOST);
        response.headers().add(HttpHeaderNames.LOCATION, location);
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "Redirecting::" + location);
        ctx.writeAndFlush(response).addListener(ChannelFutureListener.CLOSE);
        
    }
    
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).cancel(true);
        
    }
    
    @Override
    protected void channelRead0(ChannelHandlerContext chc, FullHttpRequest i) throws Exception {
        messageReceived(chc, i);
    }

    @Override
    public Http2FrameCodecX codec() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void codec(Http2FrameCodecX codec) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }


    
}
