/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.wan;

import io.cloudoffice.platform.cockpit.microservice.shell.Shell;
import io.cloudoffice.platform.cockpit.registry.ActiveStreams;
import io.cloudoffice.platform.cockpit.registry.ClientLocator;
import io.cloudoffice.platform.cockpit.registry.StreamRegistry;
import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.TrafficLoggingHandler;
import io.cloudoffice.platform.cockpit.router.hub.port.writer.WANWriter;
import io.netty.buffer.Unpooled;
import io.netty.channel.Channel;
import io.netty.channel.ChannelDuplexHandler;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.ChannelPromise;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.QueryStringDecoder;
import io.netty.handler.codec.http2.Http2Connection;
import io.netty.handler.codec.http2.Http2FrameCodecX;
import io.netty.handler.codec.http2.Http2MultiplexCodecX;
import io.netty.handler.codec.http2.Http2MultiplexCodecXBuilder;
import io.netty.handler.codec.http2.Http2Settings;
import io.netty.handler.codec.http2.Http2StreamChannel;
import io.netty.handler.codec.http2.Http2StreamFrameToHttpObjectCodec;
import io.netty.handler.codec.http2.Http2StreamXChannelBootstrap;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.ssl.SslHandler;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.util.CharsetUtil;
import java.util.concurrent.TimeUnit;

@ChannelHandler.Sharable
public class LocalGatewayWANPort extends SimpleChannelInboundHandler<FullHttpRequest> implements WANPort {

    public LocalGatewayWANPort() {

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
        if (msg.uri().startsWith("/version")) {
            QueryStringDecoder decoder = new QueryStringDecoder(msg.uri());
            String host = decoder.parameters().get("host").get(0);
            ActiveStreams streams = ClientLocator.DEFAULT.get(host).publicEventStreams();
            streams.values().stream().forEach(t -> {
                StringBuilder sb = new StringBuilder();
                sb.append("event: udpateCache")
                        .append("\n")
                        .append("data: {\"version\":\"1\"}")
                        .append("\n")
                        .append("retry: 1000000")
                        .append("\n\n");

//                Http2StreamXChannelBootstrap outbound = new Http2StreamXChannelBootstrap(t.parent()).handler(
//                        new ChannelInitializer() {
//                    @Override
//                    protected void initChannel(Channel c) throws Exception {
//                        c.pipeline().addLast(new ChannelDuplexHandler() {
//                            @Override
//                            public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
//                            ctx.writeAndFlush(msg);
//                            }
//                        });
//                    }
//                });
//                outbound.open().syncUninterruptibly().getNow().write(StreamRegistry.connectEvent(sb.toString()));
                t.write(StreamRegistry.connectEvent(sb.toString()));
            });
            Shell.VERSION = msg.content().toString(CharsetUtil.UTF_8);
            ctx.close();
        }
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
