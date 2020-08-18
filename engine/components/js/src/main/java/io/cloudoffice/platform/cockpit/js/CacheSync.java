/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.js;

import net.java.html.js.JavaScriptBody;

public class CacheSync {

    @JavaScriptBody(
            args = {"interval","delay"}, body
            = " var timerId = setTimeout(function sync() {\n"
            + "  CacheSync.processCache();\n"
            + "  timerId = setTimeout(function(){CacheSync.processCache();}, interval);\n"
            + "}, delay);"
    )
    public static native void scheduleSync(long interval,long delay);
     @JavaScriptBody(
            args = {"name"}, body
            = "if(null!=Cloudoffice){Cloudoffice.io.Services.Sync.hasUpdate(name);}"
    )
    public static native boolean hasUpdate(String name);
     @JavaScriptBody(
            args = {}, body
            = "Cloudoffice.io.Services.Sync.processSync()"
    )
    public static native boolean sync();
}
