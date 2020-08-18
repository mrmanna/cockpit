/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import net.java.html.json.Models;

/**
 *
 * @author EUSIA
 */
public abstract class ServerCallback<T> {

    
    public AsyncRequest request = null;

    public void setRequest(AsyncRequest<T> req) {
        this.request = req;
    }

    public AsyncRequest getRequest() {
        return this.request;
    }

   /**
    * 
    * @param data
    * @param result any empty expecting object to use the type
    * @return 
    */
    public T getObject(String data, T result) {
        try {
            InputStream input = new ByteArrayInputStream(data.getBytes());
            Class claz = result.getClass();
            return (T)Models.parse(Application.getBrowserContext(), claz, input);
        } catch (Exception e) {
            Logger.log("Reuslt conversion failed for:"+ result.getClass().getName());
        }
        return null;
    }

    /**
     * Please use the {@code  public T getObject(String data, T result)} for covert String to desired Object
     * @param data 
     */
    public abstract void process(String data);
   
/**
 * TODO: ERROR PRODUCE
 * {@code if data == "" || null > NO DATA FOUND}
 * and NETWORK CONNECTION CHECK
 * @param data 
 */
    void handle(String data) {
        
        process(data);
        if (null != getRequest()) {
            if (null != getRequest().getPostDecorator()) {
                getRequest().getPostDecorator().decorate();
            }

            getRequest().setActive(false);
            if (null != getRequest().getNestedRequest()) {
                AsyncRequestFactory.sendRequest(getRequest().getNestedRequest());
            }
        }

    }

}
