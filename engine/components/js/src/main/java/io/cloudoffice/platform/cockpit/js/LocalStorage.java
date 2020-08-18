/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.js;

import net.java.html.js.JavaScriptBody;

public class LocalStorage {
    
    @JavaScriptBody(
            args = {"id","bean"}, body
            =  "if (!window.localStorage) return;\n" +
                     "window.localStorage.setItem(id,JSON.stringify(bean));"
    )
     public static native void setBean(String id,String bean);
         @JavaScriptBody(
            args = {"id"}, body
            =  "if (!window.localStorage) return;\n" +
                     "window.localStorage.removeItem(id);"
    )
     public static native void remove(String id);
     @JavaScriptBody(
            args = {"id"}, body
            =  "if (!window.localStorage) return;\n"
                    + "if(null!==window.localStorage.getItem(id)){" +
             "\n return JSON.parse(window.localStorage.getItem(id))}"
                    + "else{return null;};"
    )
    public static native String getBean(String id);
    
    
}
