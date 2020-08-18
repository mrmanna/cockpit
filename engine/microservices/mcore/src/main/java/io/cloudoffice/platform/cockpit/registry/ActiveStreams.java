package io.cloudoffice.platform.cockpit.registry;

import io.netty.channel.Channel;
import io.netty.handler.codec.http2.Http2Connection;
import java.util.concurrent.ConcurrentHashMap;

public class ActiveStreams extends ConcurrentHashMap<Http2Connection, Channel> {
}
