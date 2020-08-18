/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice;

import io.cloudoffice.platform.cockpit.router.Router;
import io.netty.buffer.Unpooled;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelPromise;
import io.netty.handler.codec.http.DefaultFullHttpRequest;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.handler.codec.http.cookie.ServerCookieDecoder;
import io.netty.handler.codec.http.cookie.ServerCookieEncoder;
import io.netty.util.AttributeKey;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.CacheControl;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.server.ContainerRequest;

public abstract class Microservice {

    Router router;

    public void router(Router router) {
        this.router = router;
    }

    public Router router() {
        return router;
    }

    public static String Etag = "MQ==";

    public Response response(String value, String mime, boolean cache) {
        if (cache) {
            CacheControl cacheControl = new CacheControl();
            cacheControl.setMaxAge(365 * 24 * 60 * 60);
            cacheControl.setNoCache(false);
            cacheControl.setPrivate(false);
            return Response.ok(value).header(HttpHeaderNames.CONTENT_TYPE.toString(), mime).cacheControl(cacheControl).header("Access-Control-Allow-Origin", "*").build();
        } else {
            return Response.ok(value).header(HttpHeaderNames.CONTENT_TYPE.toString(), mime).header("Access-Control-Allow-Origin", "*").build();
        }
    }


    public Response response(Response.ResponseBuilder value, boolean cache) {
        if (cache) {
            CacheControl cacheControl = new CacheControl();
            cacheControl.setMaxAge(365 * 24 * 60 * 60);
            cacheControl.setNoCache(false);
            cacheControl.setPrivate(false);
            return value.cacheControl(cacheControl).header("Access-Control-Allow-Origin", "*").build();
        } else {
            return value.header("Access-Control-Allow-Origin", "*").build();
        }
    }

    public void put(Channel channel, String name, Object value) {
        AttributeKey<Object> key = AttributeKey.valueOf(name);
        channel.attr(key).set(value);
    }

    public Object get(Channel channel, String name) {
        return channel.attr(AttributeKey.valueOf(name)).get();
    }

    public ChannelPromise permit(ContainerRequest request) {
        ChannelHandlerContext ctx = (ChannelHandlerContext) request.getProperty("channel");
        return ctx.channel().newPromise();
    }

    public Channel channel(ContainerRequest request) {
        ChannelHandlerContext ctx = (ChannelHandlerContext) request.getProperty("channel");
        return ctx.channel();
    }

    public void publish(ContainerRequest request, Response response) {
        ChannelHandlerContext ctx = (ChannelHandlerContext) request.getProperty("channel");
        ctx.writeAndFlush(nettyResponse(response)).addListener(ChannelFutureListener.CLOSE);

    }

    private FullHttpResponse nettyResponse(Response response) {
        Object data = response.getEntity();

        FullHttpResponse nettyresponse = new DefaultFullHttpResponse(
                HttpVersion.HTTP_1_1,
                HttpResponseStatus.valueOf(response.getStatus()), Unpooled.wrappedBuffer((data instanceof byte[]) ? (byte[]) data : String.valueOf(data).getBytes()));

        for (final Map.Entry<String, List<String>> e : response.getStringHeaders().entrySet()) {
            for (final String value : e.getValue()) {
                if (!e.getKey().equals(HttpHeaderNames.COOKIE)) {
                    nettyresponse.headers().add(e.getKey(), value);
                } else {
                    Set<io.netty.handler.codec.http.cookie.Cookie> cookies = ServerCookieDecoder.STRICT.decode(value);
                    if (!cookies.isEmpty()) {
                        // Reset the cookies if necessary.
                        nettyresponse.headers().set(HttpHeaderNames.SET_COOKIE, ServerCookieEncoder.STRICT.encode(cookies));
                    }

                }
            }

        }
        return nettyresponse;
    }

    private byte[] getBytes(Object object) {
        if (object instanceof String) {
            String string = (String) object;
            return string.getBytes();
            // return new String(string.getBytes(), StandardCharsets.UTF_8).getBytes();
        } else {
            byte[] bytes = null;
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            ObjectOutput out = null;
            try {
                out = new ObjectOutputStream(bos);
                out.writeObject(object);
                out.flush();
                bytes = bos.toByteArray();
            } catch (IOException ex) {
                Logger.getLogger(Microservice.class.getName()).log(Level.SEVERE, null, ex);
            } finally {
                try {
                    bos.close();
                } catch (IOException ex) {
                    // ignore close exception
                }
            }
            return bytes;
        }
    }

    public HttpRequest ask(String path, ContainerRequest containerReqeust) {
        // Prepare the HTTP request.
        HttpRequest request = new DefaultFullHttpRequest(
                HttpVersion.HTTP_1_1, io.netty.handler.codec.http.HttpMethod.GET, path);
        MultivaluedMap<String, String> headers = containerReqeust.getHeaders();
        for (String object : headers.keySet()) {
            request.headers().set(object, headers.get(object));
        }
        // Set some example cookies.

        return request;
    }

    public boolean authentic(ContainerRequest containerReqeust) {
        try {
            Cookie token = containerReqeust.getCookies().get(TOKEN_KEY);
            if (null == token) {
                return false;
            }
            if (token.getValue().isEmpty()) {
                return false;
            }
            String value = new String(Base64.getDecoder().decode(token.getValue()));
            String username = (null != value.split(":")) ? value.split(":")[0] : null;
            if (null == username && username.isEmpty()) {
                return false;
            }
            long time = Long.valueOf(value.split(":")[1]);
            LocalDate cookieDate = new Date(time).toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            if (cookieDate.isBefore(LocalDate.now().minusDays(7))) {
                return false;
            }

        } catch (Exception e) {
            return false;
        }
        return true;
    }
    public static final String TOKEN_KEY = "_ycbc";
    public static final String TOKEN_KEY_1 = "_ycac";
    public static final String TOKEN_KEY_2 = "_token";

    public NewCookie refreshToken(ContainerRequest containerReqeust) {
        Cookie token = containerReqeust.getCookies().get(TOKEN_KEY);
        String value = new String(Base64.getDecoder().decode(token.getValue()));
        String username = value.split(":")[0];
        String tokenValue = username + ":" + String.valueOf(new Date().getTime());
        return new NewCookie(TOKEN_KEY, Base64.getEncoder().encodeToString(tokenValue.getBytes()), "/", "cloudoffice.io", "login", -1, false, true);
    }
}
