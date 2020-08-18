/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

public class Source {
    Component identity;
    String occurPoint;

    public Source(Component identity,String occurPoint) {
        this.identity = identity;
        this.occurPoint= occurPoint;
                
    }

    public Component getIdentity() {
        return identity;
    }

    public void setIdentity(Component identity) {
        this.identity = identity;
    }
    
}
