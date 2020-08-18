package io.cloudoffice.platform.cockpit.api;

import java.lang.reflect.InvocationTargetException;
import java.util.Map;
import org.netbeans.html.json.spi.FunctionBinding;
import org.netbeans.html.json.spi.PropertyBinding;

public interface Component extends ErrorListener, WSMessageListener {

    public static final String DEFAULT_VIEW = "defaultview";
    public static final String DEFAULT_CONFIG_VIEW = "defaultconfigview";

    public void setDefaultViewName(String value);
    public void setDefaultConfigViewName(String value);

    public void bindEventListeners();

    public Map<String, Object> getFlags();

    public WebDB.Table getOfflineStorage();

    public WebDB.IndexedTable getOfflineIndexedStorage();

    public void listen(Signal signal);

    public void talkTo(Component component, Signal signal);

    public void talkTo(Component component, Signal signal, int executionDelay);

    public String getViewName(String key);

    public String getDefaultViewName();

    public String getDefaultConfigViewName();

    public String getComponentName();

    /**
     * First implement setDefaultViewName() if extra view needed use
     * addViewName()
     */
    public void bindViewNames();

    public void setInstanceId(String instance);

    public String getInstanceId();

    /**
     * NOT USED
     */
    static final class JSObject {

        int changes;
        final PropertyBinding propertyBinding;
        final FunctionBinding functionBinding;

        JSObject(Object m, PropertyBinding pb) throws NoSuchMethodException {
            this.propertyBinding = pb;
            this.functionBinding = null;
        }

        JSObject(Object m, FunctionBinding fb) throws NoSuchMethodException {
            this.propertyBinding = null;
            this.functionBinding = fb;
        }

        Object get() throws IllegalAccessException, IllegalArgumentException, InvocationTargetException {
            return propertyBinding.getValue();
        }

        void set(Object v) throws IllegalAccessException, IllegalArgumentException, InvocationTargetException {
            propertyBinding.setValue(v);
        }
    }
}
