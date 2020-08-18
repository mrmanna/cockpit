/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.http2;

import com.yammer.metrics.MetricRegistry;
import com.yammer.metrics.health.HealthCheckRegistry;
import io.cloudoffice.platform.cockpit.router.MonitoringHandler;
import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.TrafficLoggingHandler;
import io.cloudoffice.platform.cockpit.router.hub.port.writer.WANWriter;
import io.cloudoffice.platform.cockpit.router.wan.WANPort;
import io.netty.channel.Channel;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.cors.CorsConfigBuilder;
import io.netty.handler.codec.http.cors.CorsHandler;
import io.netty.handler.codec.http2.DefaultHttp2Connection;
import io.netty.handler.codec.http2.Http2Connection;
import io.netty.handler.codec.http2.Http2FrameLogger;
import io.netty.handler.codec.http2.Http2MultiplexCodecX;
import io.netty.handler.codec.http2.Http2MultiplexCodecXBuilder;
import io.netty.handler.codec.http2.Http2Settings;
import io.netty.handler.codec.http2.Http2StreamFrameToHttpObjectCodec;
import io.netty.handler.codec.http2.HttpToHttp2ConnectionHandler;
import io.netty.handler.codec.http2.HttpToHttp2ConnectionHandlerBuilder;
import io.netty.handler.codec.http2.InboundHttp2ToHttpAdapter;
import io.netty.handler.codec.http2.InboundHttp2ToHttpAdapterBuilder;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.ssl.ApplicationProtocolNames;
import io.netty.handler.ssl.ApplicationProtocolNegotiationHandler;
import io.netty.handler.timeout.ReadTimeoutHandler;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;

public class Http2Nagotiator extends ApplicationProtocolNegotiationHandler {

    private static final int MAX_CONTENT_LENGTH = 20 * 1024 * 1000;
    WANPort gatewayWANPort;

    public Http2Nagotiator(WANPort wantport) {
        super(ApplicationProtocolNames.HTTP_1_1);
        gatewayWANPort = wantport;

    }

    @Override
    protected void configurePipeline(ChannelHandlerContext chc, String string) throws Exception {
        configurePipeline1(chc, string);
    }

    protected void configurePipeline1(ChannelHandlerContext ctx, String protocol) throws Exception {
        gatewayWANPort.router().serverLogger().log(Level.CONFIG, "GATEWAY CONFIGURING CHANNEL...");
        ChannelPipeline p = ctx.channel().pipeline();
        if (ApplicationProtocolNames.HTTP_2.equals(protocol)) {

            Http2Settings settings = Http2Settings.defaultSettings();
            // settings.pushEnabled(true);
            Http2MultiplexCodecX serverMultiplexCodec = Http2MultiplexCodecXBuilder.forServer(new ChannelInitializer<Channel>() {
                @Override
                protected void initChannel(Channel channel) {
                    ChannelPipeline p = channel.pipeline();
                    p.addLast("multiplex-server-traffic", new TrafficLoggingHandler("multiplex-server-traffic", LogLevel.INFO));
                    p.addLast("multiplex-server-frame-converter", new Http2StreamFrameToHttpObjectCodec(true, true));
                    p.addLast("multiplex-server-chunk-aggregator", new HttpObjectAggregator(MAX_CONTENT_LENGTH));               
                    //p.addLast("monitorig-server", new MonitoringHandler(new MetricRegistry("server"), new HealthCheckRegistry(), gatewayWANPort.router()));
                    p.addLast("multiplex-server-timeout-handler", new ReadTimeoutHandler(120L, TimeUnit.SECONDS));
                    p.addLast("cors",new CorsHandler(CorsConfigBuilder
                            .forAnyOrigin().noPreflightResponseHeaders().allowedRequestHeaders("authorization").allowedRequestHeaders("content-type").allowCredentials().build()));
                    p.addLast("multiplex-server-request-handler", gatewayWANPort);
                    p.addLast("multiplex-server-outbound-handler", new WANWriter(gatewayWANPort.router()));
                }
            })
                    .initialSettings(settings)
                    .frameLogger(gatewayWANPort.router().serverFrameLogger())
                    .build();
            gatewayWANPort.codec(serverMultiplexCodec);
            p.addLast("server-codec", serverMultiplexCodec);
            gatewayWANPort.router().serverLogger().log(Level.FINER, settings.toString());
            return;
        }

        if (ApplicationProtocolNames.HTTP_1_1.equals(protocol)) {
            p.addLast("multiplex-server-codec", new HttpServerCodec());
            p.addLast("multiplex-server-chunk-aggregator", new HttpObjectAggregator(MAX_CONTENT_LENGTH));
            p.addLast("multiplex-server-request-handler", gatewayWANPort);
            return;
        }

        throw new IllegalStateException("unknown protocol: " + protocol);
    }

    private void configurePipeline0(ChannelHandlerContext ctx, String protocol) {
        gatewayWANPort.router().serverLogger().log(Level.CONFIG, "GATEWAY CONFIGURING CHANNEL...");
        ChannelPipeline p = ctx.channel().pipeline();
        if (ApplicationProtocolNames.HTTP_2.equals(protocol)) {

            Http2Connection connection = new DefaultHttp2Connection(true);
            InboundHttp2ToHttpAdapter listener = new InboundHttp2ToHttpAdapterBuilder(connection)
                    .propagateSettings(false)
                    .validateHttpHeaders(false)
                    .maxContentLength(20 * 1000 * 1024)
                    .build();

            HttpToHttp2ConnectionHandler http2handler = new HttpToHttp2ConnectionHandlerBuilder()
                    .frameListener(listener)
                    .frameLogger(gatewayWANPort.router().serverFrameLogger())
                    .connection(connection)
                    .build();
            gatewayWANPort.connection(connection);
            p.addLast("server-codec", http2handler);
            p.addLast(gatewayWANPort);
            return;
        }
        if (ApplicationProtocolNames.HTTP_1_1.equals(protocol)) {
            p.addLast("multiplex-server-codec", new HttpServerCodec());
            p.addLast("multiplex-server-chunk-aggregator", new HttpObjectAggregator(MAX_CONTENT_LENGTH));
            p.addLast("multiplex-server-request-handler", gatewayWANPort);
            return;
        }

        throw new IllegalStateException("unknown protocol: " + protocol);
    }
}
