/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.registry;

import io.cloudoffice.platform.cockpit.microservice.shell.DeviceDetector;
import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.hub.port.writer.SSEventWriter;
import static io.cloudoffice.platform.cockpit.router.wan.RemoteSecureGatewayWANPort.SSE;
import io.netty.buffer.Unpooled;
import io.netty.channel.Channel;
import io.netty.channel.ChannelDuplexHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPromise;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpHeaderValues;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpResponseStatus;
import static io.netty.handler.codec.http.HttpResponseStatus.OK;
import static io.netty.handler.codec.http.HttpVersion.HTTP_1_1;
import io.netty.handler.codec.http2.DefaultHttp2DataFrame;
import io.netty.handler.codec.http2.DefaultHttp2HeadersFrame;
import io.netty.handler.codec.http2.Http2FrameCodecX;
import io.netty.handler.codec.http2.Http2Headers;
import io.netty.handler.codec.http2.Http2StreamXChannelBootstrap;
import io.netty.handler.codec.http2.HttpConversionUtil;
import io.netty.util.AttributeKey;

/**
 *
 */
public class StreamRegistry {

    public static void registerSSEventStream(String host, ChannelHandlerContext ctx, Router router, Http2FrameCodecX codec, DeviceDetector.Browser brwsr) {
        ctx.channel().pipeline().remove("multiplex-server-timeout-handler");
        ctx.channel().pipeline().addLast("sse-writer", new SSEventWriter(router, true, codec));
//        ClientLocator.DEFAULT.locate(host).publicEventStreams(codec.connection(), ctx.channel());
//        if (brwsr == DeviceDetector.Browser.CHROME) {
//            ctx.channel().write(connectEvent());
//        }
    }

    public static Http2StreamXChannelBootstrap outboundChannel(Channel channel) {
        return new Http2StreamXChannelBootstrap(channel).handler(
                new ChannelInitializer() {
            @Override
            protected void initChannel(Channel c) throws Exception {
                c.pipeline().addLast(new HttpObjectAggregator(5 * 1000 * 1024));
                c.pipeline().addLast(new ChannelDuplexHandler() {
                    @Override
                    public void channelActive(ChannelHandlerContext ctx) throws Exception {
                    }

                    @Override
                    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
                        write(ctx, msg, ctx.newPromise());
                    }

                    @Override
                    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
                        write(ctx, evt, ctx.newPromise());
                    }

                    @Override
                    public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
                        FullHttpResponse resp = (FullHttpResponse) msg;
                        resp.headers().add(HttpHeaderNames.CONNECTION, HttpHeaderValues.KEEP_ALIVE);
                        resp.headers().add(HttpHeaderNames.TRANSFER_ENCODING, HttpHeaderValues.CHUNKED);
                        resp.headers().add("Cache-Control", "no-cache");
                        resp.headers().add("Content-Type", "text/event-stream");
                        resp.headers().add(HttpHeaderNames.TRANSFER_ENCODING, HttpHeaderValues.CHUNKED);
                        resp.headers().add(HttpHeaderNames.CONTENT_LENGTH, resp.content().readableBytes());

                        AttributeKey<DeviceDetector.Browser> browser = AttributeKey.valueOf("browser");
                        DeviceDetector.Browser brwsr = ctx.channel().attr(browser).get();
                        if (brwsr == DeviceDetector.Browser.CHROME) {
                            Http2Headers headers = HttpConversionUtil.toHttp2Headers(resp.headers(), false).path(SSE)
                                    .status(OK.codeAsText())
                                    .authority("cockpit.cloudoffice.io")
                                    .scheme("https");
                            ctx.write(new DefaultHttp2HeadersFrame(headers, false));
                            ctx.writeAndFlush(new DefaultHttp2DataFrame(resp.content(), false));
                        } else {
                            //TODO:: FIREFOX CLOSES THE CHANNEL, NEED CONTRIBUTION HERE
                            ctx.writeAndFlush(resp);
                        }

                    }

                });
            }
        });
    }

    public static DefaultFullHttpResponse connectEvent() {
        StringBuilder sb = new StringBuilder();
        sb.append("event: connection")
                .append("\n")
                .append("data: Connect")
                .append("\n")
                .append("retry: 1000000")
                .append("\n\n");
        final DefaultFullHttpResponse resp = new DefaultFullHttpResponse(HTTP_1_1, HttpResponseStatus.OK, Unpooled.wrappedBuffer(sb.toString().getBytes()));
        //  Http2Util.addSSEHeaders(resp);
        return resp;
    }

    public static DefaultFullHttpResponse connectEvent(String data) {
        final DefaultFullHttpResponse resp = new DefaultFullHttpResponse(HTTP_1_1, HttpResponseStatus.OK, Unpooled.wrappedBuffer(data.getBytes()));
        return resp;
    }
}
