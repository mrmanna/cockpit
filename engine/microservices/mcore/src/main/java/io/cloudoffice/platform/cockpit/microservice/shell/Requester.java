/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.shell;

import org.glassfish.jersey.server.ContainerRequest;

public class Requester {

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    String host;
    String path;

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }
    String query;

    public boolean authenticated() {
        return authenticated;
    }

    public void authenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }
    boolean authenticated;
    
    public Requester(ContainerRequest request) {
        this.host = request.getHeaders().get("Host").get(0);
        this.path = request.getRequestUri().getPath();
        this.query = request.getRequestUri().getQuery();
    }

    public Requester(String host, String path, String query) {
        this.host = host;
        this.path = path;
        this.query = query;
    }

}
