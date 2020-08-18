/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.DelayCall;
import io.cloudoffice.platform.cockpit.js.VIEW;
import java.util.HashMap;
import java.util.Map;

/**
 * Core implementation of Components
 *
 * @param <Model> View
 */
public abstract class AbstractComponent<Model> implements Component {

    @Override
    public String getInstanceId() {
        return instance;
    }

    public AbstractComponent(String instance) {
        this.init(instance);
    }

    void init(String instance) {
        this.listeners = new HashMap<String, EventListener>();
        this.bindEventListeners();
        this.bindViewNames();
        this.setComponentName();
        this.initStorage();
        this.flags = new HashMap<String, Object>();
        String bindName = this.getClass().getName() + instance;
        this.setInstanceId(instance);
        this.setDefaultViewName(this.getDefaultViewName() + this.getInstanceId());
        this.setDefaultConfigViewName(this.getDefaultConfigViewName() + this.getInstanceId());
        if (!Components.components.containsKey(bindName)) {
            Components.components.put(bindName, this);
        }
    }

    public AbstractComponent() {
        this.listeners = new HashMap<String, EventListener>();
        this.bindEventListeners();
        this.bindViewNames();
        this.setComponentName();
        this.initStorage();
        this.flags = new HashMap<String, Object>();
        if (!Components.components.containsKey(this.getClass().getName())) {
            Components.components.put(this.getClass().getName(), this);
        }
    }

    protected Component newInstance() {
        return null;
    }

    @Override
    public void setInstanceId(String instace) {
        this.instance = instace;
    }

    private String instance;

    @Override
    public Map<String, Object> getFlags() {
        return flags;
    }

    private Map<String, Object> flags;

    public WebDB.Table getOfflineStorage() {
        return offlineStorage;
    }

    public WebDB.IndexedTable getOfflineIndexedStorage() {
        return offlineIndexedStorage;
    }

    public void setOfflineStorage(WebDB.Table offlineStorage) {
        this.offlineStorage = offlineStorage;
    }

    public void setOfflineIndexedStorage(WebDB.IndexedTable offlineStorage) {
        this.offlineIndexedStorage = offlineStorage;
    }

    WebDB.Table offlineStorage;
    WebDB.IndexedTable offlineIndexedStorage;

    /**
     * This method need to be implemented on concrete level but to avoid code
     * refactoring not making it abstract
     */
    public void initStorage() {
    }

    public Model view;

    public Model getView() {
        return view;
    }

    public void setView(Model view) {
        this.view = view;
    }

    @Override
    public String getComponentName() {
        return componentName;
    }

    /**
     * set this.componentName
     *
     * @param componentName e.g. "login-component"
     */
    public abstract void setComponentName();

    public String componentName;

    private Map<String, String> viewNames = new HashMap<String, String>();

    public abstract void bindViewNames();

    @Override
    public String getViewName(String key) {
        return this.viewNames.get(key);
    }

    @Override
    public String getDefaultViewName() {
        return (!this.viewNames.isEmpty()) ? getViewName(Component.DEFAULT_VIEW) : "";
    }

    @Override
    public String getDefaultConfigViewName() {
        return (!this.viewNames.isEmpty()) ? getViewName(Component.DEFAULT_CONFIG_VIEW) : "";
    }

    public void addViewName(String key, String value) {
        this.viewNames.put(key, value);
    }

    @Override
    public void setDefaultViewName(String value) {
        this.viewNames.put(Component.DEFAULT_VIEW, value);
    }

    public void setDefaultConfigViewName(String value) {
        this.viewNames.put(Component.DEFAULT_CONFIG_VIEW, value);
    }

    public Map<String, EventListener> listeners;

    /**
     * It will invoke the model function from Component
     *
     * @param function - name of the Model Function
     */
    public void invoke(String function, MapBuilder data) {
        if (null != data && !getDefaultViewName().isEmpty()) {
            VIEW.call(getDefaultViewName(), function, data.toJSON());
        } else {
            VIEW.callWithouParameter(getDefaultViewName(), function);
        }
    }

    /**
     * It will invoke the model function from Component
     *
     * @param function - name of the Model Function
     */
    public void invoke(String function, String data) {
        if (null != data && !getDefaultViewName().isEmpty()) {
            VIEW.call(getDefaultViewName(), function, data);
        } else {
            VIEW.callWithouParameter(getDefaultViewName(), function);
        }
    }

    /**
     * It will invoke the model function from Component
     *
     * @param function - name of the Model Function
     */
    public void invoke(String function) {
        VIEW.callWithouParameter(getDefaultViewName(), function);
    }

    /**
     * USE if you have multiple views
     *
     * @param viewNameKey
     * @param function
     * @param data
     */
    public void invoke(String viewNameKey, String function, MapBuilder data) {
        if (null != data) {
            VIEW.call(getViewName(viewNameKey), function, data.toJSON());
        } else {
            VIEW.callWithouParameter(getViewName(viewNameKey), function);
        }
    }

    /**
     * Attach listeners of specific events with filters
     *
     * @param filter
     * @param listener
     */
    public void attachListener(String filter, EventListener listener) {
        this.listeners.put(filter, listener);
    }

    @Override
    public void listen(Signal signal) {
        EventListener listener = this.listeners.get(signal.getFilter());
        if (null != listener) {
            listener.onReceive(signal);

        }
    }

    /**
     *
     * @param component
     * @param signal
     * @param executionDelay milis to delay
     */
    @Override
    public void talkTo(Component component, Signal signal, int executionDelay) {
        FutureJob job = new FutureJob(component, signal);
        job.delay(executionDelay);
    }

    @Override
    public void talkTo(Component component, Signal signal) {
        FutureJob job = new FutureJob(component, signal);
        Application.getBrowserContext().execute(job);
    }

    public class FutureJob extends DelayCall {

        private Component component;
        private Signal signal;
        private String handler;

        public FutureJob(Component component, Signal signal) {
            this.component = component;
            this.signal = signal;
        }

        public FutureJob(String handler) {
            this.handler = handler;
        }

        @Override
        public void run() {
            this.component.listen(this.signal);
        }
    }

    public class FutureHanlder implements Runnable {

        private String handler;
        private String data;

        public FutureHanlder(String handler, String data) {
            this.handler = handler;
            this.data = data;
        }

        @Override
        public void run() {
            if (null != data || data != "") {
                invoke(handler, data);
            } else {
                invoke(handler);
            }
        }
    }

    @Override
    public void onMessage(String handler, String message) {
        FutureHanlder job = new FutureHanlder(handler, message);
        Application.getBrowserContext().execute(job);
    }

    @Override
    public void onMessage(String message) {
    }

}
