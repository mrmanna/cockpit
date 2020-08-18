/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.wan;

import io.cloudoffice.platform.cockpit.microservice.shell.DeviceDetector;
import io.cloudoffice.platform.cockpit.microservice.shell.DeviceDetector.Browser;
import io.cloudoffice.platform.cockpit.microservice.shell.Shell;
import io.cloudoffice.platform.cockpit.registry.StreamRegistry;
import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.Transmitter;
import io.cloudoffice.platform.cockpit.router.hub.port.Port;
import io.cloudoffice.platform.cockpit.router.hub.port.writer.ShellWriter;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.cookie.Cookie;
import io.netty.handler.codec.http.cookie.ServerCookieDecoder;
import io.netty.handler.codec.http2.Http2Connection;
import io.netty.handler.codec.http2.Http2FrameCodecX;
import io.netty.util.AttributeKey;
import io.netty.util.ReferenceCountUtil;
import java.util.Set;
import java.util.logging.Level;

@ChannelHandler.Sharable
public class RemoteSecureGatewayWANPort extends SimpleChannelInboundHandler<FullHttpRequest> implements WANPort {

    Transmitter transmitter = null;
    Http2Connection connection = null;

    public RemoteSecureGatewayWANPort() {

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
    Http2FrameCodecX codec;

    @Override
    public Http2FrameCodecX codec() {
        return codec;
    }

    @Override
    public void codec(Http2FrameCodecX codec) {
        this.codec = codec;
    }

    @Override
    public void connection(Http2Connection connection) {
        this.connection = connection;
    }

    @Override
    public Http2Connection connection() {
        return connection;
    }

    @Override
    public WANPort build(Router router) {
        this.transmitter = new Transmitter(router);
        this.router = router;
        return this;
    }

    public static final String SSE = "/sse";
    int loopcoutner = 0;

    //proxying
    protected void messageReceived(ChannelHandlerContext parentContext, FullHttpRequest msg) throws Exception {
        // router().serverLogger().log(Level.SEVERE, "GATEWAY SERVING...");
        ReferenceCountUtil.retain(msg);
        String domain = msg.headers().get(HttpHeaderNames.HOST);
        Port port = transmitter.filterPort(domain, transmitter.isProxy(domain));
        //proxy
        if (null != port) {
            if (null != port.server().urls()) {
                String android = (port.server().urls().has("androidVerifier")) ? port.server().urls().getString("androidVerifier") : "";
                  HttpRequest request = (HttpRequest) msg;
                  String uri = request.uri();
                  if(uri.endsWith("assetlinks.json")){
                  }
            }
            transmitter.transmitProxy(domain, msg, parentContext);
        } else {
            //pass the msg for next processing
            String path = requestPath(msg);
            Browser brwsr = injectBrowserInfo(msg, parentContext);
            proxyPass(brwsr, path, msg, parentContext);
        }
    }

    private Browser injectBrowserInfo(FullHttpRequest msg, ChannelHandlerContext parentContext) {
        Browser brwsr = DeviceDetector.detect(msg.headers().get(HttpHeaderNames.USER_AGENT));
        AttributeKey<Browser> browser = AttributeKey.valueOf("browser");
        parentContext.channel().attr(browser).set(brwsr);
        return brwsr;
    }

    private void proxyPass(Browser brwsr, String path, FullHttpRequest msg, ChannelHandlerContext parentContext) {
        if (path.equalsIgnoreCase(SSE)) {
         //   StreamRegistry.registerSSEventStream(msg.headers().get(HttpHeaderNames.HOST), parentContext, router(), codec(), brwsr);
        } else if (transmitter.isShell(path)) {
            shellStream(brwsr, path, msg, parentContext);
        } else {
            contentStream(brwsr, path, msg, parentContext);
        }
    }

    private void shellStream(Browser brwsr, String path, FullHttpRequest msg, ChannelHandlerContext parentContext) {
//            if (brwsr == DeviceDetector.Browser.CHROME) {
//                transmitter.transmit(path, msg, parentContext, new ShellWriter(parentContext, router));
//            } else {
        transmitter.transmit(path, msg, parentContext);
        //   }
    }

    private boolean serveLatestShell(FullHttpRequest msg) {
        boolean serveLatestShell = false;
        if (msg.headers().isEmpty() || null == msg.headers().get(HttpHeaderNames.COOKIE)) {
            return true;
        }
        String cookies = msg.headers().get(HttpHeaderNames.COOKIE);
        Set<Cookie> set = ServerCookieDecoder.STRICT.decode(cookies);
        for (Cookie k : set) {
            if (k.name().equalsIgnoreCase("version")) {
                serveLatestShell = !Shell.VERSION.equalsIgnoreCase(k.value());
            }
        };
        return serveLatestShell;
    }

    private void contentStream(Browser brwsr, String path, FullHttpRequest msg, ChannelHandlerContext parentContext) {
        //  if (brwsr != DeviceDetector.Browser.CHROME) {
        transmitter.transmit(path, msg, parentContext);
        // }
    }
    public static int counter = 1;

    protected String requestPath(FullHttpRequest msg) {

        HttpRequest request = (HttpRequest) msg;
        String uri = request.uri();
        if (!uri.isEmpty()) {
            String[] paths = uri.split("/");
            if (paths.length > 1) {
                return "/" + paths[1];
            } else {
                return "/";
            }

        } else {
            return "/";
        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).cancel(true);

    }

    @Override
    protected void channelRead0(ChannelHandlerContext chc, FullHttpRequest i) throws Exception {
        messageReceived(chc, i);
    }

}
