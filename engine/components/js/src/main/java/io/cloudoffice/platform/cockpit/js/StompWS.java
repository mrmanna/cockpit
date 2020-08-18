/*
 * Copyright (c) 2015 EUSIA BD LTD.
 */
package io.cloudoffice.platform.cockpit.js;

import net.java.html.js.JavaScriptBody;
import net.java.html.js.JavaScriptResource;

/**
 * This a java class for Jquery sortable lib
 * {@link https://johnny.github.io/jquery-sortable/}
 *
 * @author manna
 */
@JavaScriptResource("stomp.js")
public class StompWS {

    private StompWS() {
    }

    @JavaScriptBody(args = {}, body = "client={}")
    public static native void init();

    @JavaScriptBody(args = {"url","dest","username","pass"}, body =  " WS.connect(url,dest,username,pass);")
    public static native void connect(String url,String dest,String username,String pass);
    
    @JavaScriptBody(args = {}, body =  " return WS.status();")
    public static native boolean connected();
    
     @JavaScriptBody(args = {}, body =  " return WS.disconnect();")
    public static native boolean disconnect();

}
