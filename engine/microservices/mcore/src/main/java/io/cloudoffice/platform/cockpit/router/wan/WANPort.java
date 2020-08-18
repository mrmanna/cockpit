/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.wan;

import io.cloudoffice.platform.cockpit.router.Router;
import io.netty.channel.ChannelHandler;
import io.netty.handler.codec.http2.Http2Connection;
import io.netty.handler.codec.http2.Http2FrameCodecX;

public interface WANPort extends ChannelHandler {

    public Router router();

    public void router(Router router);

    public WANPort build(Router router);

    public void connection(Http2Connection connection);

    public Http2Connection connection();
    public Http2FrameCodecX codec() ;

    public void codec(Http2FrameCodecX codec);
    /**
     *
     * @param router
     * @return
     */
   
}
