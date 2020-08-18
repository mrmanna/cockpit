/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.cloudoffice.platform.cockpit.router.hub.port.Port;
import io.cloudoffice.platform.cockpit.router.hub.port.writer.PortWriter;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelHandlerContext;

public class Transmitter {

    Router router;

    public Transmitter(Router router) {
        this.router = router;
    }

    public Port filterPort(String path) {
        if (router.hub().containsKey(path)) {
            return router.hub().getFirst(path);
        }
        return router.hub().getFirst("/");
    }

    //for Proxying setup
    public Port filterPort(String domain, boolean proxy) {
        if (proxy) {
            return router.hub().getFirst(domain);
        }
        return null;
    }

    //for Proxying setup
    public boolean isProxy(String domain) {
        if (router.hub().containsKey(domain)) {
            if (null != router.hub().getFirst(domain)) {
                return router.hub().getFirst(domain).server().proxy();
            }
        }
        return false;
    }

    public boolean isShell(String path) {
        if (!path.equalsIgnoreCase("/") && router.hub().containsKey(path)) {
            return false;
        }
        return true;
    }

    public void transmit(String path, Object msg, ChannelHandlerContext ctx) {
        if (path.equalsIgnoreCase("/favicon.ico")) {
            ctx.close();
        }
        filterPort(path).listener().listen(msg, ctx);
    }

    //for Proxy setup
    public void transmitProxy(String domain, Object msg, ChannelHandlerContext ctx) {
        filterPort(domain, true).listener().listenProxy(msg, ctx);
    }

    //for Proxy setup
    public void transmitAndroidJson(String domain, Object msg, ChannelHandlerContext ctx) {
        ctx.writeAndFlush("[{\n"
                + "  \"relation\": [\"delegate_permission/common.handle_all_urls\"],\n"
                + "  \"target\": {\n"
                + "    \"namespace\": \"android_app\",\n"
                + "    \"package_name\": \"io.cloudoffice.dw\",\n"
                + "    \"sha256_cert_fingerprints\":\n"
                + "    [\"33:DB:70:F3:82:F1:30:44:E5:4D:14:FB:D0:88:80:2C:23:1F:55:68:75:00:91:1F:F3:EE:5F:83:7D:85:1C:ED\"]\n"
                + "  }\n"
                + "}]");
    }

    public Port shell(String path, ChannelHandlerContext ctx) {
        return filterPort(path);
    }

    public void transmit(String path, Object msg, ChannelHandlerContext ctx, PortWriter handler) {
        if (path.equalsIgnoreCase("/favicon.ico")) {
            ctx.close();
        }
        filterPort(path).listener().listen(msg, ctx, handler);
    }

    public ChannelFuture connect(String path) {
        return filterPort(path).listener().connect();
    }

    public ChannelFuture childChannel(String path, Channel parentChannel) {
        return filterPort(path).listener().childChannel(parentChannel);
    }
}
