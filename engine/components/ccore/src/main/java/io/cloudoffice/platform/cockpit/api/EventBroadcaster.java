/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.JSUIUtils;


public class EventBroadcaster extends Broadcaster{

    @Override
    void broadcast(Signal signal) {
          //JSUIUtils.console(signal.getFilter()+": Broadcasting..");
       if (null != signal) {
            if (null!=ComponentListeners.getListener(signal.getFilter())) {
                JSUIUtils.console(ComponentListeners.getListener(signal.getFilter()).toString()+": Found");
                ComponentListeners.getListener(signal.getFilter()).onReceive(signal);
            }
        }
    }
}
