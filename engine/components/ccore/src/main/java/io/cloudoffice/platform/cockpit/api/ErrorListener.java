/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

/**
 *
 * @author Administrator
 */
public interface ErrorListener {
    
     void onError(Error message,Source source);
        
    }

