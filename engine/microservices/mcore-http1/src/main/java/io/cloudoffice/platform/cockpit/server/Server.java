/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.server;

public class Server {

    String id;
    String name;
    String description;
    String serverHost;
    String domain;
    String path;
    String domainAlias[];
    int serverPort;
    boolean secure;
    boolean local;
    boolean authRequired;

    public Server(String name, String serverHost, int serverPort,String domain,String path,boolean secure) {
        this.name = name;
        this.serverHost = serverHost;
        this.serverPort = serverPort;
        this.domain = domain;
        this.secure =secure;
        this.path=path;
    }

    public String id() {
        return id;
    }

    public void id(String id) {
        this.id = id;
    }

    public String name() {
        return name;
    }

    public void name(String name) {
        this.name = name;
    }

    public String description() {
        return description;
    }

    public void description(String description) {
        this.description = description;
    }

    public String serverHost() {
        return serverHost;
    }

    public void serverHost(String serverHost) {
        this.serverHost = serverHost;
    }

    public int serverPort() {
        return serverPort;
    }

    public void serverPort(int serverPort) {
        this.serverPort = serverPort;
    }

    public boolean isSecure() {
        return secure;
    }

    public void secure(boolean isSecure) {
        this.secure = isSecure;
    }

    public boolean local() {
        return local;
    }

    public void local(boolean isLocal) {
        this.local = isLocal;
    }

    public boolean authRequired() {
        return authRequired;
    }

    public void authRequired(boolean authRequired) {
        this.authRequired = authRequired;
    }

    public void domain(String domain) {
        this.domain = domain;
    }

    public String domain() {
        return this.domain;
    }

    public String path() {
        return path;
    }

    public void path(String path) {
        this.path = path;
    }
    

}
