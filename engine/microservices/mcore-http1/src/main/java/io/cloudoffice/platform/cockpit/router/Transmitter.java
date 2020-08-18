/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.cloudoffice.platform.cockpit.router.hub.port.Port;
import io.netty.channel.ChannelHandlerContext;

public class Transmitter {

    Router router;

    public Transmitter(Router router) {
        this.router = router;
    }

    Port filterPort(String path) {
        if (router.hub().containsKey(path)) {
            return router.hub().get(path);
        }
        return router.hub().get("/");
    }

    void transmit(String path, Object msg, ChannelHandlerContext ctx, WANPort handler) {
            filterPort(path).listener().listen(msg, ctx);
    }
}
