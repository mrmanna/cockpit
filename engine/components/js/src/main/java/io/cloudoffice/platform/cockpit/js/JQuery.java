/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.js;

import net.java.html.js.JavaScriptBody;
import net.java.html.js.JavaScriptResource;

/**
 *
 * @author Administrator
 */
@JavaScriptResource("jquery.js")
public class JQuery {

    private JQuery() {
    }
      @JavaScriptBody(args = {  },body = "")
    public static native void init();
    
        @JavaScriptBody(args = {  },body = "")
    public static native void registerComponent();
}
