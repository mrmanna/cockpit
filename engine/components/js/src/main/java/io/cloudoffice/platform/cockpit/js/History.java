/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.js;

import net.java.html.js.JavaScriptBody;

public class History {

    @JavaScriptBody(
            args = {"path", "data"}, javacall = true, body
            = "window.history.pushState(data,path,path);\n"
    )
    public static native void update(String path, String data);

    @JavaScriptBody(
            args = {"path", "data"}, javacall = true, body
            = "window.history.replaceState(data,path,path);\n"
    )
    public static native void replace(String path, String data);

    @JavaScriptBody(
            args = {}, javacall = true, body
            = "return new String(window.history.state).toString();\n"
    )
    public static native String getState();

    @JavaScriptBody(args = {}, body = "")
    public static native void init();

    @JavaScriptBody(args = {"trackerName", "trackerFunction"}, body = ""
            + "window.addEventListener('popstate',function(event) {"
            + "var view = componentsValue[trackerName];"
            + "view[trackerFunction](event.state);})")
    public static native void installTracker(String trackerName, String trackerFunction);
}
