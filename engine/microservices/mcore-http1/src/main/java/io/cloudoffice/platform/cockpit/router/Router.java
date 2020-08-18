/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.cloudoffice.platform.cockpit.router.hub.Hub;
import io.netty.channel.Channel;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;
import io.netty.util.DomainNameMapping;

public class Router extends AbstractRouter {

    private NioEventLoopGroup bossGroup = new NioEventLoopGroup(1);
    private NioEventLoopGroup workerGroup = new NioEventLoopGroup(1);
    private Hub hub = null;
    private boolean secure;
    private DomainNameMapping sslMap;
    private String host;
    private int port;
    private String baseDir;
    private Class<? extends WANPort> wanport;
    private Class[] microservices;
    private Context context;

    public Context context() {
        return context;
    }

    public void context(Context context) {
        this.context = context;
    }

    public Class<? extends WANPort> wanport() {
        return wanport;
    }

    public void wanport(Class<? extends WANPort> wantport) {
        this.wanport = wantport;
    }

    public Class[] microservices() {
        return microservices;
    }

    public void microservices(Class[] microservices) {
        this.microservices = microservices;
    }

    public String baseDir() {
        return baseDir;
    }

    public void baseDir(String baseDir) {
        this.baseDir = baseDir;
    }

    public DomainNameMapping sslMap() {
        return sslMap;
    }

    public void sslMap(DomainNameMapping sslMap) {
        this.sslMap = sslMap;
    }

    public int port() {
        return port;
    }

    public void port(int port) {
        this.port = port;
    }

    public String host() {
        return host;
    }

    public void host(String host) {
        this.host = host;
    }

    public boolean secure() {
        return secure;
    }

    public void secure(boolean secure) {
        this.secure = secure;
    }
    String[] origins;

    public String[] origins() {
        return origins;
    }

    public void origins(String[] origins) {
        this.origins = origins;
    }

    public Router(String host, int port, boolean secure, DomainNameMapping sslMap, String baseDir, String[] origins, Context context) {
        this.host = host;
        this.port = port;
        this.secure = secure;
        this.sslMap = sslMap;
        this.baseDir = baseDir;
        this.origins = origins;
        this.context = context;
        hub = new Hub(this);
    }

    public Router(String host, int port, String baseDir, Context context, Class... microservices) {
        this(host, port, false, null, baseDir, null, context);
        this.microservices = microservices;
    }

    public Router bindWANPort(Class<? extends WANPort> port) {
        this.wanport = port;
        return this;
    }

    public Hub hub() {
        return hub;
    }

    public NioEventLoopGroup workerGroup() {
        return workerGroup;
    }

    public void activate() throws Exception {
        try {
            group(bossGroup, workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .handler(new LoggingHandler(LogLevel.DEBUG));
            childHandler(new RouterActivator(this, wanport().newInstance().build(this)));

            Channel f = bind(host(), port())
                    .sync()
                    .channel();
            f.closeFuture().sync().awaitUninterruptibly();

        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public void asyncActivate() throws Exception {
        try {
            group(bossGroup, workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .handler(new LoggingHandler(LogLevel.DEBUG));
            childHandler(new RouterActivator(this, wanport().newInstance().build(this)));

            bind(host(), port());

            Runtime.getRuntime().addShutdownHook(new Thread() {

                @Override
                public void run() {
                    bossGroup.shutdownGracefully();
                    workerGroup.shutdownGracefully();
                }

            });
        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

}
