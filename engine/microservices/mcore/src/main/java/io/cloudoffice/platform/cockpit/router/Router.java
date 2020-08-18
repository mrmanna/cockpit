/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.cloudoffice.platform.cockpit.router.wan.WANPort;
import io.cloudoffice.platform.cockpit.router.http2.Http2Activator;
import io.cloudoffice.platform.cockpit.router.hub.Hub;
import io.netty.channel.Channel;
import io.netty.channel.ChannelOption;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http2.Http2FrameLogger;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;
import io.netty.util.DomainNameMapping;
import io.netty.util.concurrent.GlobalEventExecutor;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.logging.ConsoleHandler;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.LogManager;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

public class Router extends AbstractRouter {

    private NioEventLoopGroup bossGroup;
    private NioEventLoopGroup workerGroup;
    private Hub hub = null;
    private boolean secure;
    private DomainNameMapping sslMap;
    private String host;
    private int port;
    private String baseDir;
    private Class<? extends WANPort> wanport;
    private Class[] microservices;
    private Context context;
    public ChannelGroup group = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
    private static final Logger serverLogger = Logger.getLogger("server");
    Http2FrameLogger serverFrameLogger = new Http2FrameLogger(LogLevel.INFO, "server");

    static {
        System.setProperty("io.netty.noUnsafe", Boolean.toString(true));
        System.setProperty("io.netty.noKeySetOptimization", Boolean.toString(true));
        System.setProperty("io.netty.recycler.maxCapacity", Integer.toString(0));
        System.setProperty("io.netty.leakDetection.level", "paranoid");

        // expand Java logging to full level
        System.setProperty("java.util.logging.SimpleFormatter.format",
                "%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS.%1$tL %4$-7s [%3$s] %2$s %5$s %6$s%n");
        LogManager.getLogManager().reset();
        Logger rootLogger = LogManager.getLogManager().getLogger("");
        Handler handler = new ConsoleHandler();
        handler.setFormatter(new SimpleFormatter());
        rootLogger.addHandler(handler);
        rootLogger.setLevel(Level.SEVERE);
        for (Handler h : rootLogger.getHandlers()) {
            handler.setFormatter(new SimpleFormatter());
            h.setLevel(Level.SEVERE);
        }
    }

    public Http2FrameLogger serverFrameLogger() {
        return serverFrameLogger;
    }

    public Logger serverLogger() {
        return serverLogger;
    }

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

    public ConcurrentMap<Class, Router> additionalWanports = new ConcurrentHashMap<Class, Router>();

    public Router bindWANPort(Class wan, int port) {
        Router arouter = new Router(host(), port, hub());
        additionalWanports.put(wan, arouter);
        try {
            arouter.bindWANPort(wan);
        } catch (Exception ex) {
            Logger.getLogger(Router.class.getName()).log(Level.SEVERE, null, ex);
        }
        return this;
    }

    public Router(String host, int port, Hub hub) {
        this.host = host;
        this.port = port;
        this.secure = false;
        this.sslMap = null;
        this.baseDir = ".";
        this.origins = null;
        this.context = null;
        this.hub = hub;
    }

    public Router(String host, int port, boolean secure, DomainNameMapping sslMap, String baseDir, String[] origins, Context context, int threadnum) {
        this.host = host;
        this.port = port;
        if (threadnum == 0) {
            bossGroup = new NioEventLoopGroup(2);
            workerGroup = new NioEventLoopGroup(1);
        } else {
            bossGroup = new NioEventLoopGroup(2);
            workerGroup = new NioEventLoopGroup(100);
        }
        this.secure = secure;
        this.sslMap = sslMap;
        this.baseDir = baseDir;
        this.origins = origins;
        this.context = context;
        hub = new Hub(this);

        // groups = new ConcurrentHashMap<Integer, ChannelGroup>();
    }

    public Router(String host, int port, String baseDir, Context context, int threadnum, Class... microservices) {
        this(host, port, false, null, baseDir, null, context, threadnum);
        this.microservices = microservices;
    }

    public Router bindWANPort(Class port) {
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
            this.group(bossGroup, workerGroup);
            this.channel(NioServerSocketChannel.class);
            if (!secure()) {
                this.handler(new LoggingHandler(LogLevel.INFO));
            } else {
                this.handler(serverFrameLogger);
            }
            this.childHandler(new DefaultRouterActivator(this, this.wanport().newInstance().build(this)));
            childOption(ChannelOption.SO_KEEPALIVE, true);
            Channel f = this.bind(this.host(), this.port())
                    .sync()
                    .channel();
            serverLogger().log(Level.CONFIG, "SERVER STARTED LISTENING ON:" + host() + ":" + port());
            f.closeFuture().sync().awaitUninterruptibly();

        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public void activate(NioEventLoopGroup boss, NioEventLoopGroup worker) throws Exception {
        try {
            this.group(boss, worker);
            this.channel(NioServerSocketChannel.class);
            if (!secure()) {
                this.handler(new LoggingHandler(LogLevel.INFO));
            } else {
                this.handler(serverFrameLogger);
            }
            this.childHandler(new DefaultRouterActivator(this, this.wanport().newInstance().build(this)));
            childOption(ChannelOption.SO_KEEPALIVE, true);
            Channel f = this.bind(this.host(), this.port())
                    .sync()
                    .channel();
            serverLogger().log(Level.SEVERE, "SERVER STARTED LISTENING ON:" + host() + ":" + port());
            f.closeFuture().sync().awaitUninterruptibly();

        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public void activate(Class<? extends RouterActivator> activatorClass) throws Exception {
        try {
            this.group(bossGroup, workerGroup);
            this.channel(NioServerSocketChannel.class);
            if (!secure()) {
                this.handler(new LoggingHandler(LogLevel.DEBUG));
            } else {
                this.handler(serverFrameLogger);
            }
            RouterActivator activator = activatorClass.newInstance();
            activator.router(this);
            activator.WANPort(this.wanport().newInstance().build(this));
            this.childHandler(activator);
            this.childOption(ChannelOption.SO_KEEPALIVE, true);
            Channel f = this.bind(this.host(), this.port())
                    .sync()
                    .channel();
            serverLogger().log(Level.CONFIG, "SERVER STARTED LISTENING ON:" + host() + ":" + port());
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
            childHandler(new DefaultRouterActivator(this, wanport().newInstance().build(this)));

            bind(host(), port());
            serverLogger().log(Level.CONFIG, "SERVER STARTED LISTENING ON:" + host() + ":" + port());

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

    public void activateHttp2() throws Exception {
        try {
            group(bossGroup, workerGroup)
                    .channel(NioServerSocketChannel.class);
            if (!secure()) {
                handler(new LoggingHandler(LogLevel.DEBUG));
            } else {
                handler(serverFrameLogger);
            }

            // childHandler(new Http2Activator(this,wanport().newInstance().build(this)));
            childHandler(new Http2Activator(this, wanport().newInstance().build(this)));
            // localAddress(new InetSocketAddress("localhost", port()));
            childOption(ChannelOption.SO_KEEPALIVE, true);
            additionalWanports.forEach((t, u) -> {

                Executors.newCachedThreadPool().execute(() -> {
                    try {
                        u.activate(bossGroup,workerGroup);
                        u.handler(serverFrameLogger);
                    } catch (Exception ex) {
                        Logger.getLogger(Router.class.getName()).log(Level.CONFIG, null, ex);
                    }
                });

            });

            Channel https = bind(host(), port())
                    .sync()
                    .channel();
            https.closeFuture().sync().awaitUninterruptibly();

        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
            bossGroup.awaitTermination(2, TimeUnit.SECONDS);
            serverLogger.log(Level.CONFIG, "server shutdown");
        }
    }

}
