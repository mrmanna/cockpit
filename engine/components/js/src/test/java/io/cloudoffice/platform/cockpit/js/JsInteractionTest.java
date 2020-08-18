package io.cloudoffice.platform.cockpit.js;

import java.io.Closeable;
import net.java.html.boot.script.Scripts;
import org.netbeans.html.boot.spi.Fn;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

/** Tests for behavior of @JavaScriptBody methods. Set your JavaScript 
 * environment up (for example define <code>alert</code> or use some
 * emulation library like <em>env.js</em>), register script presenter 
 * and then you can call methods that deal with JavaScript in your tests.
 */
public class JsInteractionTest {
    private Closeable jsEngine;
    @BeforeMethod public void initializeJSEngine() throws Exception {
        jsEngine = Fn.activate(Scripts.createPresenter());
    }
    
    @AfterMethod public void shutdownJSEngine() throws Exception {
        jsEngine.close();
    }
}
