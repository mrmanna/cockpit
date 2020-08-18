/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.JSUIUtils;
import java.util.HashMap;
import java.util.Map;

public class ComponentListeners{

 
    public static  Map<String,EventListener> listeners = new HashMap<String, EventListener>();

    public static Map<String, EventListener> getListeners() {
        return ComponentListeners.listeners;
    }
    
    public static void registerListener(EventListener listener,String filter){
   
        JSUIUtils.console("registering listener: "+listener.getClass().getName());
        ComponentListeners.getListeners().put(filter, listener);
    }

    public static EventListener getListener(String filter) {
         
            EventListener listener =ComponentListeners.getListeners().get(filter);
            JSUIUtils.console(listener.getClass().getName());
            return listener;
    }
    
}
