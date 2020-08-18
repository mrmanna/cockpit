package io.cloudoffice.platform.cockpit.router;

import io.netty.buffer.ByteBufInputStream;
import io.netty.buffer.ByteBufOutputStream;
import io.netty.buffer.Unpooled;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.Cookie;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.handler.codec.http.ServerCookieDecoder;
import io.netty.handler.codec.http.ServerCookieEncoder;
import org.glassfish.jersey.internal.MapPropertiesDelegate;
import org.glassfish.jersey.server.ApplicationHandler;
import org.glassfish.jersey.server.ContainerException;
import org.glassfish.jersey.server.ContainerRequest;
import org.glassfish.jersey.server.ContainerResponse;
import org.glassfish.jersey.server.spi.ContainerResponseWriter;

import javax.ws.rs.core.SecurityContext;
import java.io.OutputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.spi.ContainerResponseWriter.TimeoutHandler;

@ChannelHandler.Sharable
public class RestWANPort extends WANPort {

    private volatile ApplicationHandler applicationHandler;

    public RestWANPort() {

    }

    @Override
    public WANPort build(Router router) {
        ResourceConfig resourceConfig = new ResourceConfig().registerClasses(router.microservices());
        this.applicationHandler = new ApplicationHandler(resourceConfig);
        return this; //To change body of generated methods, choose Tools | Templates.
    }

    @Override
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
                List<String> values = request.headers().getAllAndConvert(key);
                containerRequest.headers(key.toString(), values);
            } else {
                String cookieString = request.headers().getAndConvert(key);
                Set<Cookie> cookies = ServerCookieDecoder.decode(cookieString);
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


}
