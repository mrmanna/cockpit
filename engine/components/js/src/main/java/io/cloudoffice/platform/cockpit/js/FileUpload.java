/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * Copyright (c) 2015 EUSIA BD LTD.
 */
package io.cloudoffice.platform.cockpit.js;

import net.java.html.js.JavaScriptBody;
import net.java.html.js.JavaScriptResource;

/**
 *
 * @author naib
 */
@JavaScriptResource("knockout-file-bindings.js")
public class FileUpload {
      @JavaScriptBody(args = {  },body = "")
    public static native void registerComponent();
}
