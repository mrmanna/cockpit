/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.MomentJS;
import java.util.HashMap;

/**
 *
 * @author EUSIA
 *
 */
public abstract class AsyncRequest<T> {

    String endpoint;
    private T view;

    public String getOriginViewModel() {
        return originViewModel;
    }

    public void setOriginViewModel(String originViewModel) {
        this.originViewModel = originViewModel;
    }
    private String originViewModel;

    public T getView() {
        return view;
    }

    public void setView(T view) {
        this.view = view;
    }

    public Query getQuery() {
        return query;
    }

    public void setQuery(Query query) {
        this.query = query;
    }

    Query query;
    ServerCallback dataHandler;
    UIDecorator preDecorator;
    UIDecorator postDecorator;
    AsyncRequest forward;
    AsyncRequest nestedRequest;

    public void setTempToken(String tempToken) {
        this.tempToken = tempToken;
    }
    String tempToken;
    boolean map;
    boolean active;

    public AsyncRequest getNestedRequest() {
        return nestedRequest;
    }

    public void setNestedRequest(AsyncRequest nestedRequest) {
        this.nestedRequest = nestedRequest;
    }

    public AsyncRequest(String invokeMethod, ServerCallback handler, T view) {
        this.view = view;
        init(invokeMethod, handler);
    }

    public AsyncRequest(String endpoint, T view) {
        this.view = view;
        this.endpoint = endpoint;
    }

    private void init(String invokeMethod, ServerCallback handler) {

        this.setEndpoint(invokeMethod);
        if (null != handler) {
            handler.setRequest(this);
        }
        this.setDataHandler(handler);

    }

    public UIDecorator getPostDecorator() {
        return postDecorator;
    }

    public void setPostDecorator(UIDecorator postDecorator) {
        this.postDecorator = postDecorator;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public void setMap(boolean flag) {
        this.map = flag;
    }

    public AsyncRequest getForward() {
        return forward;
    }

    public void setForward(AsyncRequest forward) {
        this.forward = forward;
    }

    public String getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(String endpoint) {
        this.endpoint = endpoint;
    }

    public ServerCallback getDataHandler() {
        return dataHandler;
    }

    public void setDataHandler(ServerCallback dataHandler) {
        dataHandler.setRequest(this);
        this.dataHandler = dataHandler;
    }

    public UIDecorator getPreDecorator() {
        return preDecorator;
    }

    public void setPreDecorator(UIDecorator decorator) {
        this.preDecorator = decorator;
    }

    /**
     * This executes the request
     */
    public void send() throws Exception {
        boolean debugOn = AsyncRequestProcessor.currentProcessor().isDebug();
        if (debugOn) {
            Logger.log(this.getEndpoint() + ":" + "Predocarting...");
            Logger.log(this.getEndpoint() + ":" + MomentJS.getCurrentUnixTime());
        }
        if (null != getPreDecorator()) {
            getPreDecorator().decorate();
        }
        if (debugOn) {
            Logger.log(this.getEndpoint() + ":" + "Predocarting Done");
            Logger.log(this.getEndpoint() + ":" + "Request Send");
            Logger.log(this.getEndpoint() + ":" + MomentJS.getCurrentUnixTime());
        }
        doPerform();
        if (debugOn) {
            Logger.log(this.getEndpoint() + ":" + "Request Done");
            Logger.log(this.getEndpoint() + ":" + MomentJS.getCurrentUnixTime());
        }

        if (debugOn) {

        }
    }

    private String getToken() throws InvalidSessionException {
        if (null == Session.getSession()) {
            if (null == tempToken) {
                throw new InvalidSessionException();
            }
            return tempToken;
        } else {
            return Session.getSession().getToken();
        }
    }

    public void doPerform() throws Exception {
        if (null == this.getForward()) {
            java.util.Map<String, Object> data = getPostData();
           // String auth = getToken();
            // AsyncTask.CALLER().setSource(this.getOriginViewModel());
            AsyncTask.CALLER().call(Application.getApplicationContext().getServerBasePostURL(),data, getDataHandler());
            this.setActive(false);
        } else {
            this.setActive(false);
            AsyncRequestFactory.sendRequest(this.getForward());
        }
    }

    public abstract void preparePostData();

    /**
     * EACH DATA MUST BE VALIDATED
     *
     * @return boolean
     */
    public abstract boolean doValidate();

    java.util.Map<String, Object> dataPost = new HashMap<String, Object>();

    public void put(String string, Object object) {
        dataPost.put(string, object);
    }

    public void put(java.util.Map<String, Object> map) {
        this.dataPost = map;
    }

    public java.util.Map<String, Object> getPostData() {
        if (doValidate()) {
            dataPost.clear();
            preparePostData();
        }
        return dataPost;
    }

    /**
     * Every AsyncRequest has something to clear or change before call and after
     * call This method must get overridden on concrete class to set if this
     * request has any pre or post or both decorators e.g.      <code>
     *
     * @Override public void setDecorators() { this.setPreDecorator(new
     * DashboardDecorator()); this.setPostDecorator(null); }</code>
     */
    public void setDecorators() {
    }

    private boolean isMap() {
        return this.map;
    }

    public void call(ServerCallback callback) {
        if (doValidate()) {
            this.setDataHandler(callback);
            AsyncRequestFactory.sendRequest(this);
        }
    }

    public void call() {
        if (doValidate()) {
            AsyncRequestFactory.sendRequest(this);
        }
    }
}
