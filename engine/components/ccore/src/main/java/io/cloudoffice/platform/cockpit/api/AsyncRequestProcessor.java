/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.Timer;

/**
 *
 * @author Cloudoffice
 */
public class AsyncRequestProcessor {
    public boolean debug = false;

    public boolean isDebug() {
        return debug;
    }

    public void setDebug(boolean debug) {
        this.debug = debug;
    }
    
    private static AsyncRequestProcessor _instance = new AsyncRequestProcessor();
    public static AsyncRequestProcessor currentProcessor(){
        return _instance;
    }
    
    /**
     * 
     */
    private AsyncRequestProcessor(){
         
    }
    public static AsyncRequestQueue queue = new AsyncRequestQueue();
    public AsyncRequest currentRequest;

    public AsyncRequest getCurrentRequest() {
        return currentRequest;
    }

    public void setCurrentRequest(AsyncRequest currentRequest) {
        this.currentRequest = currentRequest;
    }
    
    public void start(){
        ProcessorThread th= new ProcessorThread();
        th.schedule(10);    
        
    }
    public static boolean lock(){
        
        if(null!=AsyncRequestProcessor.currentProcessor().getCurrentRequest()){
            return AsyncRequestProcessor.currentProcessor().getCurrentRequest().isActive();
        }
        return false;
    }
    public static void process() throws Exception{
        
        if(!AsyncRequestProcessor.queue.isEmpty()){
            //if(!lock()){
                AsyncRequest request=AsyncRequestProcessor.queue.dequeue();
                request.setActive(true);
                AsyncRequestProcessor.currentProcessor().setCurrentRequest(request);
                request.send();
           // }
         }
    }
    
    public class ProcessorThread extends Timer{

        @Override
        public void run() {
            try {
                AsyncRequestProcessor.process();
            } catch (Exception ex) {
               // EventBroadcaster.errorBroadcast(ex,AsyncRequestProcessor.currentProcessor().getCurrentRequest().getView().getClass().getName());
            }
        }
        
    }
    
}
