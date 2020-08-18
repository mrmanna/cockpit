/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import java.util.ArrayList;
/**
 *
 * @author EUSIA
 */
public class AsyncRequestQueue extends ArrayList<AsyncRequest>{
    
    AsyncRequest dequeue(){
        AsyncRequest req = this.remove(0);
        return req;
    }
}
