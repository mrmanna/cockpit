/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import net.java.html.json.Model;
import net.java.html.json.OnReceive;
import net.java.html.json.Property;

/**
 *
 * @author EUSIA
 */
@Model(className = "AsyncCall", targetId = "", properties = {
    @Property(name = "createdTime", type = long.class),
    @Property(name = "source", type = String.class),
})
public abstract class AsyncTask{

    static AsyncCall caller = null;
    
    public static void initAsyncCaller(){
        caller = new AsyncCall();
    }
    public static AsyncCall CALLER(){
        return caller;
    }
    
     @OnReceive(method = "POST", url = "{url}", data = java.util.Map.class, onError = "errorHandler")
    public static void call(AsyncCall view,String data,ServerCallback callback){
        callback.handle(data);
    }
    
    static void errorHandler(AsyncCall data, Exception e) {
        Application.notifyError(e,null);
    } 
   

}
