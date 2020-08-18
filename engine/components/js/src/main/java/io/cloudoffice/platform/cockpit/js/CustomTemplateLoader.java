/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.js;

/**
 *
 * @author Administrator
 */
import net.java.html.js.JavaScriptBody;
import net.java.html.js.JavaScriptResource;

@JavaScriptResource(value = "kotemplateloader.js")
public class CustomTemplateLoader {

    private CustomTemplateLoader() {

    }

    @JavaScriptBody(args = {}, body = "")
    public static native void registerComponent();

    @JavaScriptBody(args = {}, body = "ko.bindingHandlers['keyPress'] = {\n"
            + "    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {\n"
            + "        var allBindings = allBindingsAccessor();\n"
            + "        $(element).keypress(function (event) {\n"
            + "            allBindings['keyPress'].call(viewModel,null, event);\n"
            + "            return false;\n"
            + "        });\n"
            + "    }\n"
            + "};")
    public static native void registerKeyEvents();
}
