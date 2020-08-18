/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.FullHttpRequest;

public abstract class WANPort extends SimpleChannelInboundHandler<FullHttpRequest> {

    private Router router;

    public Router router() {
        return router;
    }

    public void router(Router router) {
        this.router = router;
    }

    public WANPort build(Router router) {
        this.router = router;
        return this;
    }

}
