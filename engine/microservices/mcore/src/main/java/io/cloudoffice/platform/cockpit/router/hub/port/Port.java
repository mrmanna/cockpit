/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub.port;

import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.server.Server;
import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelOption;
import io.netty.channel.socket.nio.NioSocketChannel;

public class Port extends Bootstrap {

    int id;
    boolean active;
    Server server;
    Router router;

    public int id() {
        return id;
    }

    public void id(int id) {
        this.id = id;
    }

    public Router router() {
        return this.router;
    }

    public void router(Router router) {
        this.router = router;
    }

    public Server server() {
        return this.server;
    }

    public void server(Server server) {
        this.server = server;
    }

    public Listener listener() {
        return inputport;
    }

    public void listener(Listener inputport) {
        this.inputport = inputport;
    }

    Listener inputport;

    public Port(Server server, Router router) {
        server(server);
        router(router);
        group(router.workerGroup()); // (2)
        channel(NioSocketChannel.class); // (3)
        option(ChannelOption.SO_KEEPALIVE, true); // (4)
        option(ChannelOption.AUTO_READ, true);
        option(ChannelOption.SO_REUSEADDR, true);
        option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 500);
        //remoteAddress(new InetSocketAddress(server().serverPort()));
        listener(new Listener(this));
    }
}
