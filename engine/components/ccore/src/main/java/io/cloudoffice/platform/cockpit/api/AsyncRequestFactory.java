/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author EUSIA
 */
public class AsyncRequestFactory {

    public static Map<String,AsyncRequest> requestFactory = new HashMap<String,AsyncRequest>();

    public static void createRequest(String name,AsyncRequest request){
        requestFactory.put(name,request);
    }
    
    public static void sendRequest(String requestName){
        AsyncRequestProcessor.queue.add(requestFactory.get(requestName));
      
    }
     public static void sendRequest(AsyncRequest request){
        AsyncRequestProcessor.queue.add(request);
      
    }

}
