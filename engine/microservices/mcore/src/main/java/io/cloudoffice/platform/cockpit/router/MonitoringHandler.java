/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import com.codahale.metrics.Metric;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.net.MediaType;
import com.yammer.metrics.Clock;
import com.yammer.metrics.Gauge;
import com.yammer.metrics.JvmAttributeGaugeSet;
import com.yammer.metrics.MetricRegistry;
import com.yammer.metrics.health.HealthCheck;
import com.yammer.metrics.health.HealthCheckRegistry;
import com.yammer.metrics.json.HealthCheckModule;
import com.yammer.metrics.json.MetricsModule;
import io.cloudoffice.platform.cockpit.router.http2.MemoryUsageGaugeSet;
import io.cloudoffice.platform.cockpit.router.hub.port.Port;
import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.*;
import io.netty.util.ReferenceCountUtil;
import javax.inject.Inject;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;

import java.util.Date;

import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryPoolMXBean;

import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.Executors;

/**
 *
 * @author muntashir
 */
@ChannelHandler.Sharable
public class MonitoringHandler extends SimpleChannelInboundHandler<FullHttpRequest> {

    private static final String METRICS = "metrics";
    private static final String PING = "ping";
    private static final String HEALTH = "healthcheck";
    private static final String TEMPLATE
            = "<html lang=\"en\">\n"
            + "<head>\n"
            + "  <title>Operational Menu</title>\n"
            + "</head>\n"
            + "<body>\n"
            + "  <h1>Operational Menu</h1>\n"
            + "  <ul>\n"
            + "    <li><a href=\"/" + METRICS + "?pretty=true\">Metrics</a></li>\n"
            + "    <li><a href=\"/" + PING + "\">Ping</a></li>\n"
            + "    <li><a href=\"/" + HEALTH + "\">Healthcheck</a></li>\n"
            + "  </ul>\n"
            + "</body>\n"
            + "</html>";

    private final MetricRegistry metricRegistry;
    private final HealthCheckRegistry healthCheckRegistry;
    private final ObjectMapper mapper;
    private final MemoryMXBean mxBean = ManagementFactory.getMemoryMXBean();
    private final RuntimeMXBean runtime = ManagementFactory.getRuntimeMXBean();
    private final MemoryPoolMXBean memoryPool = ManagementFactory.getMemoryPoolMXBeans().get(0);
    private final MemoryPoolMXBean weirdMemoryPool = ManagementFactory.getMemoryPoolMXBeans().get(0);
    private final JvmAttributeGaugeSet jvmgauges = new JvmAttributeGaugeSet(runtime);
    private final MemoryUsageGaugeSet gaugess = new MemoryUsageGaugeSet(mxBean,
            Arrays.asList(memoryPool, weirdMemoryPool));

    private final Router router;

    @Inject
    public MonitoringHandler(MetricRegistry metricRegistry,
            HealthCheckRegistry healthCheckRegistry, Router router) {
        this.mapper = new ObjectMapper()
                .registerModule(new MetricsModule(TimeUnit.SECONDS, TimeUnit.SECONDS, false))
                .registerModule(new HealthCheckModule());
        this.metricRegistry = metricRegistry;
        this.healthCheckRegistry = healthCheckRegistry;
        this.router = router;
    }

    Queue<FullHttpRequest> queue= new ArrayBlockingQueue<FullHttpRequest>(100);
    @Override
    protected void channelRead0(ChannelHandlerContext ctx, FullHttpRequest msg) throws Exception {
       // FullHttpResponse response = handleMetrics(true);
        //  cpuTimeClock();
        ReferenceCountUtil.retain(msg);
        queue.offer(msg.copy());
       
        router.workerGroup().submit(new Runnable() {
            @Override
            public void run() {
                 memoryStatus(queue.poll());
            }
        });
        
          ctx.fireChannelRead(msg);
          
       
      
        //FullHttpResponse response = handleHealthcheck();
        // System.out.println(response);

    }

    private DefaultFullHttpResponse handleHealthcheck() throws Exception {
        Map<String, HealthCheck.Result> results = healthCheckRegistry.runHealthChecks();
        DefaultFullHttpResponse response;
        if (results.isEmpty()) {
            response = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1,
                    HttpResponseStatus.NOT_IMPLEMENTED);
        } else {
            String formatted = mapper.writeValueAsString(results);
            HttpResponseStatus status = isAllHealthy(results)
                    ? HttpResponseStatus.OK : HttpResponseStatus.INTERNAL_SERVER_ERROR;
            response = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, status,
                    Unpooled.copiedBuffer(formatted.getBytes()));

            response.headers().set(HttpHeaderNames.CONTENT_TYPE, "application/json");
        }

        return response;
    }

    private DefaultFullHttpResponse handleMetrics(boolean pretty) throws Exception {
        String formatted;
        if (pretty) {
            formatted = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(metricRegistry);

        } else {
            formatted = mapper.writeValueAsString(metricRegistry);

        }
        //System.out.println(formatted);
        DefaultFullHttpResponse response = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1,
                HttpResponseStatus.OK, Unpooled.copiedBuffer(formatted.getBytes()));
        response.headers().set(HttpHeaderNames.CONTENT_TYPE, "application/json");

        return response;
    }

    private static boolean isAllHealthy(Map<String, HealthCheck.Result> results) {
        for (HealthCheck.Result result : results.values()) {
            if (!result.isHealthy()) {
                return false;
            }
        }
        return true;
    }

    public void memoryStatus(FullHttpRequest msg) {

        MemoryUsageGaugeSet memoryStatusGauge = new MemoryUsageGaugeSet();
        Map<String, Metric> memorystatuss = memoryStatusGauge.getMetrics();
        final com.codahale.metrics.Gauge gaugeout = (com.codahale.metrics.Gauge) gaugess.getMetrics().get("heap.init");
        String I = memorystatuss.get("heap.init").toString();
        
        
        String heapinit = gaugeout.getValue().toString();
        ByteBuf buffcontnt = Unpooled.wrappedBuffer(heapinit.getBytes(Charset.forName("UTF-8")));
        //ByteBuf buffcontnt = Charset.forName("UTF-9").encode(heapinit);
        Port port = router.hub().getFirst("/metrics");
        port.handler(new ChannelInitializer() {
            @Override
            protected void initChannel(Channel ch) throws Exception {
                ChannelPipeline p = ch.pipeline();
                p.addLast(new HttpClientCodec());
                p.addLast(new HttpObjectAggregator(20 * 1000 * 1024));
//                p.addLast(new ChannelDuplexHandler() {
//                    @Override
//                    public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
//                        super.write(ctx, msg, promise); //To change body of generated methods, choose Tools | Templates.
//                    }
//
//                });
            }
        });
        port.connect(port.server().serverHost(), port.server().serverPort()).addListener(new ChannelFutureListener() {
            @Override
            public void operationComplete(ChannelFuture f) throws Exception {
                if (f.isSuccess()) {

                    //FullHttpRequest req = msg;
                    DefaultFullHttpRequest req = new DefaultFullHttpRequest(
                          HttpVersion.HTTP_1_1, HttpMethod.POST, "/metrics/health");
                    //req.setMethod(HttpMethod.POST);
                    //req.setUri("/metrics/health");
                    req.headers().set(HttpHeaderNames.CONTENT_LENGTH, Unpooled.wrappedBuffer(heapinit.getBytes()).readableBytes());

                    req.content().clear().writeBytes(Unpooled.wrappedBuffer(heapinit.getBytes()));
                    String agent = (null != msg.headers().get(HttpHeaderNames.USER_AGENT)) ? msg.headers().get(HttpHeaderNames.USER_AGENT) : "";

                    req.headers().set(HttpHeaderNames.HOST, msg.headers().get("HOST"));
                    req.headers().set(HttpHeaderNames.USER_AGENT, agent);

                    f.channel().writeAndFlush(req).addListener(CLOSE);
                }
            }
        });
        //System.out.println(heapinit);

//               .keySet())
//                .containsOnly(
//                        "heap.init",
//                        "heap.committed",
//                        "heap.used",
//                        "heap.usage",
//                        "heap.max",
//                        "non-heap.init",
//                        "non-heap.committed",
//                        "non-heap.used",
//                        "non-heap.usage",
//                        "non-heap.max",
//                        "total.init",
//                        "total.committed",
//                        "total.used",
//                        "total.max",
//                        "pools.Big-Pool.init",
//                        "pools.Big-Pool.committed",
//                        "pools.Big-Pool.used",
//                        "pools.Big-Pool.usage",
//                        "pools.Big-Pool.max",
//                        // skip in non-collected pools - "pools.Big-Pool.used-after-gc",
//                        "pools.Weird-Pool.init",
//                        "pools.Weird-Pool.committed",
//                        "pools.Weird-Pool.used",
//                        "pools.Weird-Pool.used-after-gc",
//                        "pools.Weird-Pool.usage",
//                        "pools.Weird-Pool.max");
    }

    public void cpuTimeClock() throws Exception {
        final Clock.CpuTimeClock clock = new Clock.CpuTimeClock();

        long currentTime = clock.getTime();
        Date d = new Date(currentTime);

        final Gauge gauge = (Gauge) new JvmAttributeGaugeSet().getMetrics().get("uptime");
        long gaug = (Long) gauge.getValue();
        String t = String.format("%02d:%02d:%02d",
                TimeUnit.MILLISECONDS.toHours(gaug),
                TimeUnit.MILLISECONDS.toMinutes(gaug)
                - TimeUnit.HOURS.toMinutes(TimeUnit.MILLISECONDS.toHours(gaug)), // The change is in this line
                TimeUnit.MILLISECONDS.toSeconds(gaug)
                - TimeUnit.MINUTES.toSeconds(TimeUnit.MILLISECONDS.toMinutes(gaug)));

        String vmSpec = runtime.getSpecVersion();

    }

}
