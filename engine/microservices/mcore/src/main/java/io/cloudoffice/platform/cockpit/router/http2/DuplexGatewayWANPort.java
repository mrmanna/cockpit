/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.http2;

import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.Transmitter;
import io.cloudoffice.platform.cockpit.router.wan.WANPort;
import io.netty.buffer.ByteBuf;
import static io.netty.buffer.Unpooled.unreleasableBuffer;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http2.DefaultHttp2DataFrame;
import io.netty.handler.codec.http2.DefaultHttp2Headers;
import io.netty.handler.codec.http2.DefaultHttp2HeadersFrame;
import io.netty.handler.codec.http2.Http2Headers;
import io.netty.util.CharsetUtil;
import static io.netty.buffer.Unpooled.copiedBuffer;
import io.netty.channel.ChannelDuplexHandler;
import static io.netty.handler.codec.http.HttpResponseStatus.OK;
import io.netty.handler.codec.http2.Http2Connection;
import io.netty.handler.codec.http2.Http2FrameCodec;
import io.netty.handler.codec.http2.Http2FrameCodecX;
import io.netty.handler.codec.http2.Http2FrameStream;
import io.netty.handler.codec.http2.Http2MultiplexCodec;

@ChannelHandler.Sharable
public class DuplexGatewayWANPort extends ChannelDuplexHandler implements WANPort {

    static final ByteBuf RESPONSE_BYTES = unreleasableBuffer(copiedBuffer("Hello World", CharsetUtil.UTF_8));
    private Router router;

    @Override
    public Router router() {
        return router;
    }

    @Override
    public void router(Router router) {
        this.router = router;
    }

    @Override
    public WANPort build(Router router) {
        this.transmitter = new Transmitter(router);
        this.router = router;
        return this;
    }

    Transmitter transmitter = null;

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        super.exceptionCaught(ctx, cause);
        cause.printStackTrace();
        ctx.close();
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {

        
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.flush();
    }

    private static void sendResponse(ChannelHandlerContext ctx, Http2FrameStream stream, ByteBuf payload) {
        // Send a frame for the response status
        Http2Headers headers = new DefaultHttp2Headers().status(OK.codeAsText());
        ctx.write(new DefaultHttp2HeadersFrame(headers).stream(stream));
        ctx.write(new DefaultHttp2DataFrame(payload, true).stream(stream));
    }

    Http2Connection connection;

    @Override
    public void connection(Http2Connection connection) {
        this.connection = connection;
    }

    @Override
    public Http2Connection connection() {
        return connection;
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
