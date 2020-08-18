package io.cloudoffice.platform.cockpit.js;

import java.util.HashMap;
import java.util.Map;
import net.java.html.js.JavaScriptBody;
import net.java.html.js.JavaScriptResource;

@JavaScriptResource("kocomponentloader.js")
public final class VIEW {

    public static Map<String, String> components = new HashMap<String, String>();

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

    @JavaScriptBody(
            args = {"name", "baseUrl"},
            body = "a(name,baseUrl);"
    )
    static native void fetch(String name, String baseUrl);

    @JavaScriptBody(
            args = {"componentName", "viewName", "model", "baseUrl"},
            body = "b(componentName,viewName,model,baseUrl);"
    )
    static native void fetchView(String componentName, String viewName, String model, String baseUrl);

    public static void render(String[] names) {
        for (String name : names) {
            if (!VIEW.hasAlreadyRegistered(name)) {
                VIEW.fetch(name, storeEndPoint());
                VIEW.components.put(name, name + "-component");
            }
        }
    }

    public static void renderView(String componentName, String viewName, String model) {
        if (!VIEW.hasAlreadyRegistered(viewName)) {
            VIEW.fetchView(componentName, viewName, model, storeEndPoint());
            VIEW.components.put(viewName, viewName + "-component");
        }
    }

    public static boolean hasAlreadyRegistered(String name) {
        return null != (components.get(name));
    }

    @JavaScriptBody(
            args = {"id", "data"}, javacall = true, body
            = "componentsValue[id]=data;\n"
    )
    public static native void addComponentData(String id, Object data);

    @JavaScriptBody(
            args = {}, javacall = true, body
            = "window.location.reload();\n"
    )
    public static native void windowReload();

    @JavaScriptBody(
            args = {}, javacall = true, body
            = "return repoGETURL;\n"
    )
    public static native String storeEndPoint();

    @JavaScriptBody(
            args = {"id", "data"}, javacall = true, body
            = "componentsValue[id]=data;\n"
    )
    public static native void bind(String id, Object data);

    @JavaScriptBody(
            args = {"id"}, javacall = true, body
            = "return componentsValue[id];\n"
    )
    public static native Object getComponentData(String id);

    @JavaScriptBody(
            args = {}, javacall = true, body
            = "return componentsValue={};\n"
    )
    public static native Object clear();

    @JavaScriptBody(
            args = {"id", "fh", "data"}, javacall = true, wait4js = false, body
            = "var view = componentsValue[id];view[fh](data);\n"
    )
    public static native void call(String id, String fh, String data);

    @JavaScriptBody(
            args = {"functionName"}, javacall = true, wait4js = false, body
            = "eval(functionName);\n"
    )
    public static native void invokeJSFunction(String functionName);

    @JavaScriptBody(
            args = {"id", "fh"}, javacall = true, wait4js = false, body
            = " var view = componentsValue[id];view[fh]();\n"
    )
    public static native void callWithouParameter(String id, String fh);

    @JavaScriptBody(
            args = {}, javacall = true, body
            = "componentsValue={};\n"
    )
    public static native void globalComponentsValue();

}
