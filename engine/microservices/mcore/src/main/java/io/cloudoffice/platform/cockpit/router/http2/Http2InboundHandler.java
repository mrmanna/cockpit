/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.http2;

import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.Transmitter;
import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import static io.netty.buffer.Unpooled.copiedBuffer;
import static io.netty.buffer.Unpooled.unreleasableBuffer;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpMethod;
import static io.netty.handler.codec.http.HttpResponseStatus.OK;
import io.netty.handler.codec.http.HttpScheme;
import io.netty.handler.codec.http.HttpServerUpgradeHandler;
import io.netty.handler.codec.http2.DefaultHttp2Headers;
import io.netty.handler.codec.http2.Http2ConnectionDecoder;
import io.netty.handler.codec.http2.Http2ConnectionEncoder;
import io.netty.handler.codec.http2.Http2ConnectionHandler;
import io.netty.handler.codec.http2.Http2Flags;
import io.netty.handler.codec.http2.Http2FrameListener;
import io.netty.handler.codec.http2.Http2Headers;
import io.netty.handler.codec.http2.Http2Settings;
import io.netty.util.CharsetUtil;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 */
public class Http2InboundHandler extends Http2ConnectionHandler implements Http2FrameListener {

    Router router;
    Transmitter transmitter = null;

    public void router(Router router) {
        this.router = router;
    }

    public Router router() {
        return router;
    }

    static final ByteBuf RESPONSE_BYTES = unreleasableBuffer(copiedBuffer("ok", CharsetUtil.UTF_8));

    Http2InboundHandler(Http2ConnectionDecoder decoder, Http2ConnectionEncoder encoder,
            Http2Settings initialSettings) {
        super(decoder, encoder, initialSettings);
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        router().serverLogger().log(Level.CONFIG,"INBOUD HANDLER");
    }

    private static Http2Headers http1HeadersToHttp2Headers(FullHttpRequest request) {
        CharSequence host = request.headers().get(HttpHeaderNames.HOST);
        Http2Headers http2Headers = new DefaultHttp2Headers()
                .method(HttpMethod.GET.asciiName())
                .path(request.uri())
                .scheme(HttpScheme.HTTP.name());
        if (host != null) {
            http2Headers.authority(host);
        }
        return http2Headers;
    }

    /**
     * Handles the cleartext HTTP upgrade event. If an upgrade occurred, sends a
     * simple response via HTTP/2 on stream 1 (the stream specifically reserved
     * for cleartext HTTP upgrade).
     */
    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        if (evt instanceof HttpServerUpgradeHandler.UpgradeEvent) {
            HttpServerUpgradeHandler.UpgradeEvent upgradeEvent
                    = (HttpServerUpgradeHandler.UpgradeEvent) evt;
            onHeadersRead(ctx, 1, http1HeadersToHttp2Headers(upgradeEvent.upgradeRequest()), 0, true);
        }
        super.userEventTriggered(ctx, evt);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        super.exceptionCaught(ctx, cause);
        cause.printStackTrace();
        ctx.close();
    }

    /**
     * Sends a "Hello World" DATA frame to the client.
     */
    private void sendResponse(ChannelHandlerContext ctx, int streamId, ByteBuf payload) {
        // Send a frame for the response status
         router().serverLogger().log(Level.CONFIG,"INBOUD HANDLER");
        Http2Headers headers = new DefaultHttp2Headers().status(OK.codeAsText());
        encoder().writeHeaders(ctx, streamId, headers, 0, false, ctx.newPromise());
        encoder().writeData(ctx, streamId, payload, 0, true, ctx.newPromise());

        // no need to call flush as channelReadComplete(...) will take care of it.
    }

    @Override
    public int onDataRead(ChannelHandlerContext ctx, int streamId, ByteBuf data, int padding, boolean endOfStream) {
        int processed = data.readableBytes() + padding;
         router().serverLogger().log(Level.CONFIG,"INBOUD HANDLER");

        if (endOfStream) {
            sendResponse(ctx, streamId, data.retain());
        }
        return processed;
    }

    Queue<String> prioritylist = new ArrayBlockingQueue<String>(50);

    @Override
    public void onHeadersRead(ChannelHandlerContext ctx, int streamId,
            Http2Headers headers, int padding, boolean endOfStream) {
         router().serverLogger().log(Level.CONFIG,"INBOUD HANDLER");
        if (counter == 1) {
            prioritylist.offer("-Data");
        }
        if (endOfStream) {
            try {
                if (!prioritylist.isEmpty()) {

                    Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onHeadersRead::stream state:" + streamId);
                    Http2Headers headers2 = new DefaultHttp2Headers().status(OK.codeAsText());
                    encoder().writeHeaders(ctx, streamId, headers2, 0, false, ctx.newPromise());
                    encoder().writeData(ctx, streamId, Unpooled.copiedBuffer(prioritylist.poll().getBytes()), 0, true, ctx.newPromise());
                    ctx.channel().eventLoop().schedule(new Runnable() {
                        @Override
                        public void run() {
                            counter = counter + 1;
                            prioritylist.offer("- DATA NUMBER " + counter);
                            Http2Headers headers2 = new DefaultHttp2Headers().status(OK.codeAsText());
                            encoder().writeHeaders(ctx, streamId, headers2, 0, false, ctx.newPromise());
                            encoder().writeData(ctx, streamId, Unpooled.copiedBuffer(prioritylist.poll().getBytes()), 0, true, ctx.newPromise());
                            try {
                                encoder().flowController().writePendingBytes();
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                            Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onHeadersRead::schdule data:" + streamId);

                            prioritylist.offer("- DATA NUMBER " + counter + 1);
                        }

                    }, 1000, TimeUnit.MILLISECONDS);

                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    int counter = 1;

    private void prepareData(ChannelHandlerContext ctx, int streamId) {

        if (counter < 10) {
            try {
                Logger.getLogger(this.getClass().getName()).log(Level.INFO, "else prepare:" + counter);
                prioritylist.offer("- DATA NUMBER " + counter);
                counter = counter + 1;
                //  int next = connection().local().incrementAndGetNextStreamId();
                //connection().local().createStream(next, false);
                Http2Headers headers2 = new DefaultHttp2Headers().status(OK.codeAsText());
                encoder().writeHeaders(ctx, streamId, headers2, 0, false, ctx.newPromise());
                encoder().writeData(ctx, streamId, Unpooled.copiedBuffer(prioritylist.poll().getBytes()), 0, true, ctx.newPromise());

                Logger.getLogger(this.getClass().getName()).log(Level.INFO, "prepare::stream state:" + streamId);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public void onHeadersRead(ChannelHandlerContext ctx, int streamId, Http2Headers headers, int streamDependency,
            short weight, boolean exclusive, int padding, boolean endOfStream
    ) {
         router().serverLogger().log(Level.CONFIG,"INBOUD HANDLER");
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onHeadersRead::" + endOfStream);
        onHeadersRead(ctx, streamId, headers, padding, endOfStream);
    }

    @Override
    public void onPriorityRead(ChannelHandlerContext ctx, int streamId, int streamDependency,
            short weight, boolean exclusive
    ) {
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onPriorityRead::StreamId:" + streamId);

    }

    @Override
    public void onRstStreamRead(ChannelHandlerContext ctx, int streamId, long errorCode
    ) {
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onRstStreamRead::2");
    }

    @Override
    public void onSettingsAckRead(ChannelHandlerContext ctx
    ) {
         router().serverLogger().log(Level.CONFIG,"INBOUD HANDLER");
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onSettingsAckRead::2");
    }

    @Override
    public void onSettingsRead(ChannelHandlerContext ctx, Http2Settings settings
    ) {

        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onSettingsRead::2");
        settings.maxConcurrentStreams(0xFFFFFFFFL);
        settings.maxFrameSize(16384);
        settings.initialWindowSize(65535);
        settings.pushEnabled(true);
    }

    @Override
    public void onPingRead(ChannelHandlerContext ctx, long data
    ) {
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onPingRead::2");
    }

    @Override
    public void onPingAckRead(ChannelHandlerContext ctx, long data
    ) {
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onPingAckRead::2");
    }

    @Override
    public void onPushPromiseRead(ChannelHandlerContext ctx, int streamId, int promisedStreamId,
            Http2Headers headers, int padding
    ) {
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onPushPromiseRead::1");
    }

    @Override
    public void onGoAwayRead(ChannelHandlerContext ctx, int lastStreamId, long errorCode, ByteBuf debugData
    ) {
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onGoAwayRead::1");
    }

    @Override
    public void onWindowUpdateRead(ChannelHandlerContext ctx, int streamId, int windowSizeIncrement
    ) {
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onWindowUpdateRead::1");
    }

    @Override
    public void onUnknownFrame(ChannelHandlerContext ctx, byte frameType, int streamId,
            Http2Flags flags, ByteBuf payload
    ) {
        Logger.getLogger(this.getClass().getName()).log(Level.INFO, "onUnknownFrame::1");
    }

}
