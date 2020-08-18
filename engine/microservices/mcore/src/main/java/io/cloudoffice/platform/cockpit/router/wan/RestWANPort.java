package io.cloudoffice.platform.cockpit.router.wan;

import io.cloudoffice.platform.cockpit.router.Router;
import io.netty.buffer.ByteBufInputStream;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.cookie.Cookie;
import io.netty.handler.codec.http.cookie.ServerCookieDecoder;
import io.netty.handler.codec.http2.Http2Connection;
import io.netty.handler.codec.http2.Http2FrameCodec;
import io.netty.handler.codec.http2.Http2FrameCodecX;
import io.netty.handler.codec.http2.Http2MultiplexCodec;
import org.glassfish.jersey.internal.MapPropertiesDelegate;
import org.glassfish.jersey.server.ApplicationHandler;
import org.glassfish.jersey.server.ContainerRequest;

import javax.ws.rs.core.SecurityContext;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.glassfish.jersey.server.ResourceConfig;

@ChannelHandler.Sharable
public class RestWANPort extends SimpleChannelInboundHandler<FullHttpRequest> implements WANPort {

    private volatile ApplicationHandler applicationHandler;

    public RestWANPort() {

    }

    @Override
    public WANPort build(Router router) {
        router(router);
        ResourceConfig resourceConfig = new ResourceConfig().registerClasses(router.microservices());
        Map<String,Object> prop= new HashMap<String,Object>();
        prop.put("router", router);
        resourceConfig.addProperties(prop);
        this.applicationHandler = new ApplicationHandler(resourceConfig);
        return this;
    }

    protected void messageReceived(ChannelHandlerContext context, FullHttpRequest request) throws Exception {
        URI applicationURI = createAppURI(
                request.protocolVersion().protocolName().toString().toLowerCase(),
                context.channel().localAddress().toString()
        );

        URI fullRequestUri = createFullURI(
                request.protocolVersion().protocolName().toString().toLowerCase(),
                context.channel().localAddress().toString(),
                request.uri()
        );

        ContainerRequest containerRequest = new ContainerRequest(
                applicationURI,
                fullRequestUri,
                request.method().name().toString(),
                getSecurityContext(),
                new MapPropertiesDelegate());

        for (CharSequence key : request.headers().names()) {
            if (!key.equals(HttpHeaderNames.COOKIE)) {
                List<String> values = request.headers().getAll(key);
                containerRequest.headers(key.toString(), values);
            } else {
                String cookieString = request.headers().get(key);
                Set<Cookie> cookies = ServerCookieDecoder.STRICT.decode(cookieString);
                for (Cookie cooky : cookies) {
                    containerRequest.getCookies().put(cooky.name(), new javax.ws.rs.core.Cookie(cooky.name(), cooky.value(), cooky.path(), cooky.domain()));
                }
            }
        }
        containerRequest.setEntityStream(new ByteBufInputStream(request.content()));
        containerRequest.setProperty("channel", context);

        applicationHandler.apply(containerRequest);

    }

    private URI createAppURI(String protocolName, String address) throws URISyntaxException {
        return new URI(String.format("%s:/%s", protocolName, address));
    }

    private URI createFullURI(String protocolName, String address, String path) throws URISyntaxException {
        return new URI(String.format("%s:/%s%s", protocolName, address, path));
    }

    private SecurityContext getSecurityContext() {
        return new SecurityContext() {

            @Override
            public boolean isUserInRole(String role) {
                return false;
            }

            @Override
            public boolean isSecure() {
                return false;
            }

            @Override
            public Principal getUserPrincipal() {
                return null;
            }

            @Override
            public String getAuthenticationScheme() {
                return null;
            }
        };
    }

    private void close(ChannelHandlerContext ctx) {
        ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).cancel(true);

    }

    @Override
    protected void channelRead0(ChannelHandlerContext chc, FullHttpRequest i) throws Exception {
        messageReceived(chc, i);
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
    public Http2FrameCodecX codec() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void codec(Http2FrameCodecX codec) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }



}
