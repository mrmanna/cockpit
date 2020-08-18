/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.security;

import io.netty.handler.ssl.SniHandler;
import io.netty.handler.ssl.SslContext;
import io.netty.util.DomainNameMapping;
import io.netty.util.Mapping;

public class SecurityLayer extends SniHandler{
     
    public SecurityLayer(DomainNameMapping<? extends SslContext> mapping) {
        super(mapping);
    }
     
}
