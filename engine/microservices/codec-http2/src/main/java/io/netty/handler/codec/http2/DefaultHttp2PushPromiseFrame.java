/*
 * Copyright 2016 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
package io.netty.handler.codec.http2;

import io.netty.util.internal.StringUtil;
import io.netty.util.internal.UnstableApi;

/**
 * The default {@link Http2HeadersFrame} implementation.
 */
@UnstableApi
public final class DefaultHttp2PushPromiseFrame extends AbstractHttp2StreamFrame implements Http2PushPromiseFrame {

    private final Http2Headers headers;
    private final boolean endStream;
    private final int padding;
    //  private final int promisedStreamId;
//    public int getPromisedStreamId() {
//        return promisedStreamId;
//    }
//
//    public Http2PushPromiseFrame setPromisedStreamId(int promisedStreamId) {
//        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//    }

    /**
     * @param headers the non-{@code null} headers to send
     */
    public DefaultHttp2PushPromiseFrame(Http2Headers headers) {
        this.headers = headers;
        this.endStream = false;
        this.padding = 0;
    }

    @Override
    public DefaultHttp2PushPromiseFrame stream(Http2FrameStream stream) {
        super.stream(stream);
        return this;
    }

    @Override
    public String name() {
        return "HEADERS";
    }

    @Override
    public Http2Headers headers() {
        return headers;
    }

    @Override
    public boolean isEndStream() {
        return endStream;
    }

    @Override
    public int padding() {
        return padding;
    }

    @Override
    public String toString() {
        return StringUtil.simpleClassName(this) + "(stream=" + stream() + ", headers=" + headers
                + ", endStream=" + endStream + ", padding=" + padding + ')';
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof DefaultHttp2PushPromiseFrame)) {
            return false;
        }
        DefaultHttp2PushPromiseFrame other = (DefaultHttp2PushPromiseFrame) o;
        return super.equals(other) && headers.equals(other.headers)
                && endStream == other.endStream && padding == other.padding;
    }

    @Override
    public int hashCode() {
        int hash = super.hashCode();
        hash = hash * 31 + headers.hashCode();
        hash = hash * 31 + (endStream ? 0 : 1);
        hash = hash * 31 + padding;
        return hash;
    }

    public boolean isPushPromise() {
        return true;
    }

}
