/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.registry;

import io.netty.channel.Channel;
import io.netty.handler.codec.http2.Http2Connection;

/**
 *
 */
public class SitePool {

    private ActiveStreams publicEventStreams;
    private UserActiveStreams userEventStreams;

    public SitePool() {
        this.publicEventStreams = new ActiveStreams();
    }

    public void publicEventStreams(Http2Connection connection, Channel channel) {
            publicEventStreams.put(connection, channel);
    }

    public Channel publicEventStreams(Http2Connection connection) {
        return publicEventStreams.get(connection);

    }
     public ActiveStreams publicEventStreams() {
        return publicEventStreams;

    }
}
