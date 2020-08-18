/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port.writer;

import io.cloudoffice.platform.cockpit.microservice.shell.DeviceDetector;
import io.cloudoffice.platform.cockpit.registry.StreamRegistry;
import io.cloudoffice.platform.cockpit.router.Router;
import static io.cloudoffice.platform.cockpit.router.wan.RemoteSecureGatewayWANPort.SSE;
import io.netty.buffer.Unpooled;
import io.netty.channel.Channel;
import io.netty.channel.ChannelDuplexHandler;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPromise;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpHeaderValues;
import io.netty.handler.codec.http.HttpHeaders;
import io.netty.handler.codec.http.HttpResponseStatus;
import static io.netty.handler.codec.http.HttpResponseStatus.OK;
import static io.netty.handler.codec.http.HttpVersion.HTTP_1_1;
import io.netty.handler.codec.http2.DefaultHttp2DataFrame;
import io.netty.handler.codec.http2.DefaultHttp2HeadersFrame;
import io.netty.handler.codec.http2.Http2Connection;
import io.netty.handler.codec.http2.Http2FrameCodecX;
import io.netty.handler.codec.http2.Http2Headers;
import io.netty.handler.codec.http2.Http2StreamXChannelBootstrap;
import io.netty.handler.codec.http2.HttpConversionUtil;
import io.netty.handler.codec.http2.HttpToHttp2ConnectionHandler;
import io.netty.handler.codec.http2.HttpToHttp2ConnectionHandlerBuilder;
import io.netty.handler.codec.http2.InboundHttp2ToHttpAdapter;
import io.netty.handler.codec.http2.InboundHttp2ToHttpAdapterBuilder;
import io.netty.util.AttributeKey;
import java.util.logging.Level;

/**
 *
 */
@ChannelHandler.Sharable
public class SSEventWriter extends ChannelDuplexHandler {

    private Router router;
    private boolean endstream;
    Http2FrameCodecX codec;

    public SSEventWriter(Router router, boolean endstream, Http2FrameCodecX connection) {
        this.router = router;
        this.endstream = endstream;
        this.codec = connection;
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        if (msg instanceof FullHttpResponse) {
            doSend(ctx, (FullHttpResponse) msg);
        }
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object msg) throws Exception {
        if (msg instanceof FullHttpResponse) {
            doSend(ctx, (FullHttpResponse) msg);
        }
    }

    private void doSend(ChannelHandlerContext ctx, FullHttpResponse resp) {
        router.serverLogger().log(Level.CONFIG, "...SENDING..PING:" + ctx.channel().id());
        resp.headers().add("Cache-Control", "no-cache");
        resp.headers().add("Content-Type", "text/event-stream");
        resp.headers().add(HttpHeaderNames.TRANSFER_ENCODING, HttpHeaderValues.CHUNKED);

        resp.headers().add(HttpHeaderNames.CONTENT_LENGTH, resp.content().readableBytes());

        AttributeKey<DeviceDetector.Browser> browser = AttributeKey.valueOf("browser");
        DeviceDetector.Browser brwsr = ctx.channel().attr(browser).get();
        if (brwsr == DeviceDetector.Browser.CHROME) {
            if (endstream) {
                Http2Headers headers = HttpConversionUtil.toHttp2Headers(resp.headers(), false).path(SSE)
                        .status(OK.codeAsText())
                        .authority("cockpit.cloudoffice.io")
                        .scheme("https");
                ctx.write(new DefaultHttp2HeadersFrame(headers, false));
                endstream = false;
            }
            ctx.writeAndFlush(new DefaultHttp2DataFrame(resp.content(), false));
        } else {
            //TODO:: FIREFOX CLOSES THE CHANNEL, NEED CONTRIBUTION HERE
            ctx.write(resp);
//            Http2StreamXChannelBootstrap outbound = new Http2StreamXChannelBootstrap(ctx.channel().parent()).handler(
//                    new ChannelInitializer() {
//                @Override
//                protected void initChannel(Channel c) throws Exception {
//                    c.pipeline().addLast(new ChannelDuplexHandler() {
//                        @Override
//                        public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
//                           // ctx.writeAndFlush(msg);
//                            ctx.channel().parent().writeAndFlush(msg);
//                        }
//                    });
//                }
//            });
//
//            outbound.open().syncUninterruptibly().getNow().write(resp);
        }

    }
        public static DefaultFullHttpResponse ping(String host) {
        StringBuilder sb = new StringBuilder();
        sb
                .append("data: " + host)
                .append("\n\n");
        final DefaultFullHttpResponse resp = new DefaultFullHttpResponse(HTTP_1_1, HttpResponseStatus.OK, Unpooled.wrappedBuffer(sb.toString().getBytes()));
//        final HttpHeaders headers = resp.headers();
//        headers.add("Connection", "keep-alive");
//        headers.add("Cache-Control", "no-cache");
//        headers.add("Content-Type", "text/event-stream");
//        headers.add("Transfer-Encoding", "chunked");
        return resp;
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
      //  ctx.write(StreamRegistry.connectEvent());
    }


    @Override
    public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
        if (msg instanceof FullHttpResponse) {
            doSend(ctx, (FullHttpResponse) msg);
        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();
        ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
    }

}
