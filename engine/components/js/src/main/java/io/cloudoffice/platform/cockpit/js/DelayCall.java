package io.cloudoffice.platform.cockpit.js;

import net.java.html.js.JavaScriptBody;

public class DelayCall implements Runnable {

    Object jsTimer = null;

    public void cancel() {
        close(jsTimer);
        jsTimer = null;
    }

    @Override
    public void run() {
    }

    @JavaScriptBody(args = {"r", "millis"}, javacall = true, body
            = "return window.setTimeout(function() { r.@java.lang.Runnable::run()(); }, millis);"
    )
    private static native Object delay(Runnable r, int millis);

    public void delay(int millis) {
        if (jsTimer != null) {
            cancel();
        }
        jsTimer = delay(this, millis);
    }

    @JavaScriptBody(args = {"timer"}, body
            = "window.clearTimeout(timer);"
    )
    private static native void close(Object timer);
}
