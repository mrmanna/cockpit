/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router;

import io.netty.handler.ssl.SslContext;

public class Subscriber {


    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public Subscriber(String host,String keyFile, String certFile) {
        this.host = host;
        this.certFile = certFile;
        this.keyFile = keyFile;
    }
    
    private String host;
    private String certFile;
    private String keyFile;
    private SslContext securityContext;

    public SslContext getSecurityContext() {
        return securityContext;
    }

    public void setSecurityContext(SslContext securityContext) {
        this.securityContext = securityContext;
    }
  
    public String getCertFile() {
        return certFile;
    }

    public void setCertFile(String certFile) {
        this.certFile = certFile;
    }

    public String getKeyFile() {
        return keyFile;
    }

    public void setKeyFile(String keyFile) {
        this.keyFile = keyFile;
    }
    
}
