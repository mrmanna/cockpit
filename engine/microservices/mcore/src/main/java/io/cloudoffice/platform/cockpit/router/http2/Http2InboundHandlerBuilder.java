/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.http2;

import io.netty.handler.codec.http2.AbstractHttp2ConnectionHandlerBuilder;
import io.netty.handler.codec.http2.Http2ConnectionDecoder;
import io.netty.handler.codec.http2.Http2ConnectionEncoder;
import io.netty.handler.codec.http2.Http2FrameLogger;
import io.netty.handler.codec.http2.Http2Settings;
import io.netty.handler.logging.LogLevel;

/**
 *
 */
public class Http2InboundHandlerBuilder
        extends AbstractHttp2ConnectionHandlerBuilder<Http2InboundHandler, Http2InboundHandlerBuilder> {

    private static final Http2FrameLogger logger = new Http2FrameLogger(LogLevel.DEBUG);

    public Http2InboundHandlerBuilder() {
        frameLogger(logger);
    }

    @Override
    public Http2InboundHandler build() {
        return super.build();
    }

    @Override
    protected Http2InboundHandler build(Http2ConnectionDecoder decoder, Http2ConnectionEncoder encoder,
            Http2Settings initialSettings) {
        //Logger.getLogger(this.getClass().getName()).log(Level.INFO,initialSettings.);
        Http2InboundHandler handler = new Http2InboundHandler(decoder, encoder, initialSettings);
        frameListener(handler);
        return handler;
    }
}
