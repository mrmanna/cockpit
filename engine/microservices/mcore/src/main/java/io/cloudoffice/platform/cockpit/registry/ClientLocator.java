/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.registry;

import java.util.concurrent.ConcurrentHashMap;

/**
 *
 */
public class ClientLocator extends ConcurrentHashMap<String, SitePool> {

    public static ClientLocator DEFAULT = new ClientLocator();
    
    public  SitePool locate(String host) {
        if (!containsKey(host)) {
            put(host, new SitePool());
            return get(host);
        } else {
            return get(host);
        }
    }
}
