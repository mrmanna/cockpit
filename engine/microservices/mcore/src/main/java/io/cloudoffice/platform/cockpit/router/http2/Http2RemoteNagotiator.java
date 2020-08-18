/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.http2;

import io.cloudoffice.platform.cockpit.router.Router;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.ssl.ApplicationProtocolNames;
import io.netty.handler.ssl.ApplicationProtocolNegotiationHandler;

/**
 *
 */
public class Http2RemoteNagotiator extends ApplicationProtocolNegotiationHandler {

    private static final int MAX_CONTENT_LENGTH = 1024 * 1000 * 20;

    Router router;

    public Http2RemoteNagotiator(Router router) {
        super(ApplicationProtocolNames.HTTP_1_1);
        this.router = router;
    }

    @Override
    protected void configurePipeline(ChannelHandlerContext ctx, String protocol) throws Exception {
        if (ApplicationProtocolNames.HTTP_2.equals(protocol)) {
            //    DefaultHttp2Connection connection = new DefaultHttp2Connection(true);
//            InboundHttp2ToHttpAdapter listener = new InboundHttp2ToHttpAdapterBuilder(connection)
//                    .propagateSettings(false)
//                    .validateHttpHeaders(false)
//                    .maxContentLength(MAX_CONTENT_LENGTH)
//                    .build();

//            HttpToHttp2ConnectionHandler http2handler = new HttpToHttp2ConnectionHandlerBuilder()
//                    .frameListener(listener)
//                    .frameLogger(new Http2FrameLogger(LogLevel.DEBUG))
//                    .connection(connection)
//                    .build();
//
//            DuplexGatewayWANPort writer = new DuplexGatewayWANPort();
//            writer.connection(connection);
            // Http2MultiplexCodec codec = Http2Mul tiplexCodecBuilder.forServer(writer).build();
            Http2InboundHandler inboundHandler = new Http2InboundHandlerBuilder().build();
           // ctx.pipeline().addLast(inboundHandler.build(router));
            //writer.connection(connection);
            // Logger.getLogger(Http2Nagotiator.class.getName()).log(Level.INFO, "Connections::" + connection.hashCode());

            return;
        }

        if (ApplicationProtocolNames.HTTP_1_1.equals(protocol)) {
            ctx.pipeline().addLast(new HttpServerCodec(),
                    new HttpObjectAggregator(MAX_CONTENT_LENGTH),
                    new Http1RequestHandler("ALP NEGOTIATION"));
            return;
        }

        throw new IllegalStateException("unknown protocol: " + protocol);
    }

}
