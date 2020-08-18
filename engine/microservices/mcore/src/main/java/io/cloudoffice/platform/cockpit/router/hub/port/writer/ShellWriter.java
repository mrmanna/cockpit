/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port.writer;

import io.cloudoffice.platform.cockpit.microservice.shell.Shell;
import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.hub.port.Port;
import io.netty.buffer.Unpooled;
import io.netty.channel.Channel;
import io.netty.channel.ChannelDuplexHandler;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.ChannelPromise;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.DefaultFullHttpRequest;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpClientCodec;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpHeaders;
import io.netty.handler.codec.http.HttpMethod;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpRequestDecoder;
import io.netty.handler.codec.http.HttpResponseDecoder;
import static io.netty.handler.codec.http.HttpResponseStatus.OK;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.handler.codec.http.cookie.Cookie;
import io.netty.handler.codec.http.cookie.DefaultCookie;
import io.netty.handler.codec.http.cookie.ServerCookieEncoder;
import io.netty.handler.codec.http2.DefaultHttp2DataFrame;
import io.netty.handler.codec.http2.DefaultHttp2HeadersFrame;
import io.netty.handler.codec.http2.DefaultHttp2PushPromiseFrame;
import io.netty.handler.codec.http2.Http2FrameCodecX;
import io.netty.handler.codec.http2.Http2Headers;
import io.netty.handler.codec.http2.Http2StreamChannel;
import io.netty.handler.codec.http2.Http2StreamXChannelBootstrap;
import io.netty.handler.codec.http2.HttpConversionUtil;
import io.netty.util.AttributeKey;
import io.netty.util.CharsetUtil;
import io.netty.util.ReferenceCountUtil;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.logging.Level;
import org.json.JSONArray;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

@ChannelHandler.Sharable
public class ShellWriter extends PortWriter {

    public ShellWriter(ChannelHandlerContext basebandContext, Router router) {
        super(basebandContext, router);
    }
    Http2FrameCodecX codec;

    Http2FrameCodecX codec() {
        return codec;
    }

    public void codec(Http2FrameCodecX codec) {
        this.codec = codec;
    }

    //  String html = "<html><head><link rel=\"stylesheet\" href=\"main.css\"></head><body><div class=\"test\">Test</div></body></html>";
    //String maincss = ".test{font-size:30px;}";
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        // ctx.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
        // basebandContext.channel().writeAndFlush(Unpooled.EMPTY_BUFFER).addListener(ChannelFutureListener.CLOSE);
    }

    private String addSubscriptions(String html, JSONArray subscriptionLinks) {
        Document document = Jsoup.parse(html);
        Element head = document.head();
        subscriptionLinks.forEach(tt -> {
            String scrpt = "<script src=\"" + tt + "\" type=\"text/javascript\"></script>";
            head.append(scrpt);
        });
        return document.html();
    }

    /**
     * Parse links from html
     *
     * @param html
     * @return
     */
    private Queue<String> getlinks(String html, JSONArray subscriptionLinks) {
        Document document = Jsoup.parse(html);
        Queue<String> list = new ArrayBlockingQueue(110);
//        subscriptionLinks.forEach(tt -> {
//            String scrpt = "<script src=\"" + tt + "\" type=\"text/javascript\"></script>";
//            head.append(scrpt);
//        });
        Elements css = document.select("link[href]");
        Elements js = document.select("script[src]");
        css.stream().forEach(t -> {
            String link = t.attr("href");
            if (link.startsWith("/content")) {
                list.offer(link);
            }
        });
        js.stream().forEach(t -> {
            String link = t.attr("src");
            if (link.startsWith("/content") && !link.endsWith("app.js")) {
                list.offer(link);
            }
        });
        return list;
    }
    Http2StreamXChannelBootstrap outbound = new Http2StreamXChannelBootstrap(parentContext.channel().parent()).handler(
            new ChannelInitializer() {
        @Override
        protected void initChannel(Channel c) throws Exception {
            c.pipeline().addLast(new HttpObjectAggregator(20 * 1000 * 1024));
            c.pipeline().addLast(new ChannelDuplexHandler() {
                @Override
                public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {

                    router().serverLogger().log(Level.CONFIG, "PUSH::" + ctx.channel().id());
                    //TODO: implement resource server call here with port
                    FullHttpResponse response = (FullHttpResponse) msg;
                    final HttpHeaders headers = response.headers();
                    String path = headers.get("path");
                    headers.remove("path");
                    headers.add("Connection", "keep-alive");
                    Http2Headers pushcss = HttpConversionUtil.toHttp2Headers(headers, false)
                            .path(path)
                            .status(OK.codeAsText())
                            .scheme("https")
                            .authority("cockpit.cloudoffice.io")
                            .method(HttpMethod.GET.name());
                    ctx.write(new DefaultHttp2PushPromiseFrame(pushcss), ctx.newPromise());
                    ctx.write(new DefaultHttp2HeadersFrame(pushcss), ctx.newPromise());
                    ctx.write(new DefaultHttp2DataFrame(response.content(), true), ctx.newPromise());
                    promise.setSuccess();

                    //.addListener((ChannelFuture r) -> {
                    counter = counter - 1;
                    if (counter <= 0) {
                        writeShellPromise.setSuccess();
                    }
                    //});

                }

            });
        }
    });

    private Http2StreamChannel pushChannel() {
        return outbound.open().syncUninterruptibly().getNow();
    }

    private void push(FullHttpResponse response) {
        Http2StreamChannel c = pushChannel();
        c.write(response);

    }
    Queue<String> links;
    Queue<FullHttpResponse> responses = new ArrayBlockingQueue(110);

    private ChannelPromise pull(String url, ChannelPromise promise) {
        DefaultFullHttpRequest request = new DefaultFullHttpRequest(HttpVersion.HTTP_1_1, HttpMethod.GET, url);
        Port port = router().hub().getFirst("/content");
        port.handler(new ChannelInitializer() {
            @Override
            protected void initChannel(Channel c) throws Exception {
                ChannelPipeline p = c.pipeline();
                p.addLast(new HttpClientCodec());
                p.addLast(new HttpObjectAggregator(20 * 1000 * 1024));
                p.addLast(new SimpleChannelInboundHandler<FullHttpResponse>() {
                    @Override
                    protected void channelRead0(ChannelHandlerContext chc, FullHttpResponse i) throws Exception {
                        // responses.offer(i);
                        router().serverLogger().log(Level.CONFIG, "PULL::" + chc.channel().id());
                        ReferenceCountUtil.retain(i);
                        AttributeKey<FullHttpResponse> response = AttributeKey.valueOf("response");
                        promise.channel().attr(response).set(i);
                        promise.setSuccess();
//.addListener(t -> {
//                            chc.channel().closeFuture().addListener(ChannelFutureListener.CLOSE);
//                        });

                    }
                });
            }
        });
        port.connect(port.server().serverHost(), port.server().serverPort())
                .addListener((ChannelFuture f) -> {
                    if (f.isSuccess()) {
                        f.channel().writeAndFlush(request);
                        request.release();
                    }
                });
        return promise;
    }

    FullHttpResponse shellResponse;
    int counter = 0;
    ChannelPromise writeShellPromise;

    @Override
    public void write(ChannelHandlerContext ctx, FullHttpResponse msg) {
        ctx.channel().eventLoop().execute(() -> {
        //    JSONArray subscriptionLinks = new JSONArray(msg.headers().get("subscriptions"));
            String html = msg.content().toString(CharsetUtil.UTF_8);
            links = getlinks(html, null);
          //  msg.headers().remove("subscriptions");
            FullHttpResponse modMsg = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, OK, Unpooled.wrappedBuffer(html.getBytes()));
            msg.headers().entries().stream().forEach(t -> {
                modMsg.headers().add(t.getKey(), t.getValue());
            });
            //Cache-Control: public, max-age=31536000
            modMsg.headers().add("Cache-Control", "no-cache, no-store, must-revalidate");
            Cookie cookie = new DefaultCookie("version", Shell.VERSION);
            modMsg.headers().set(HttpHeaderNames.COOKIE,ServerCookieEncoder.STRICT.encode(cookie));
            writeShellPromise = ctx.newPromise();
            shellResponse = modMsg;
            counter = links.size();
            router().serverLogger().log(Level.CONFIG, "SHELL WRITER::" + ctx.channel().id());
            links.forEach(t -> {
                pull(t, ctx.newPromise()).addListener((ChannelPromise f) -> {
                    if (f.isSuccess()) {
                        AttributeKey<FullHttpResponse> response = AttributeKey.valueOf("response");
                        FullHttpResponse res = f.channel().attr(response).get(); 
                        res.headers().add("path", t);
                        res.headers().add("Cache-Control", "public, max-age=31536000");
                        push(res);
                    }
                });
            });
            writeShellPromise.addListener((ChannelPromise f) -> {
                if (f.isSuccess()) {
                    ctx.writeAndFlush(shellResponse);
                    shellResponse.release();
                    ctx.flush();
                    ctx.channel().close();
                }
            });
        });
    }

}
