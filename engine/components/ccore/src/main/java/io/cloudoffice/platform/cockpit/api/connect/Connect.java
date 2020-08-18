/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api.connect;

import io.cloudoffice.platform.cockpit.api.Application;
import io.cloudoffice.platform.cockpit.api.captain.Captain;
import java.util.HashMap;
import java.util.Map;
import net.java.html.json.Model;
import net.java.html.json.OnReceive;

@Model(className = "ConnectModel", targetId = "", properties = {})
public class Connect<T> {

    Mapper requestMapper;
    Mapper resultMapper;
    String result;
    String endpoint;
    T data;

    public void data(T data) {
        this.data = data;
    }

    public String result() {
        return result;
    }

    private Connect(String endpoint, Mapper mapper) {
        this.requestMapper = mapper;
        this.endpoint = endpoint;
    }

    public static Connect send(String endpoint, Mapper mapper) {
        return new Connect(endpoint, mapper);
    }

    public void receive(Mapper mapper) {
        resultMapper = mapper;
        requestMapper.data(this);
        Captain.plan().begin((duty) -> {
            duty.asExpected((data instanceof String));
        }).whenUnexpected((duty) -> {
            Map post = new HashMap();
            post.put(endpoint, data);
            connect(post, endpoint);
            duty.captain().deliverAndCloseAssignment();
        }).then((duty) -> {
            connect((String) data, endpoint);
            duty.captain().deliverAndCloseAssignment();
        }).perform();
    }

    private void connect(Map map, String url) {
        new ConnectModel().doconnectWithMapData(url, map, this);
    }

    private void connect(String map, String url) {
        new ConnectModel().doconnectWithStringData(url, map, this);
    }

    @OnReceive(method = "POST", url = "{url}", data = java.util.Map.class, onError = "errorHandler")
    static void doconnectWithMapData(ConnectModel view, String data, Connect callback) {
        callback.result = data;
        callback.resultMapper.data(callback);
    }

    @OnReceive(method = "POST", url = "{url}", data = String.class, onError = "errorHandler")
    static void doconnectWithStringData(ConnectModel view, String data, Connect callback) {
        callback.result = data;
        callback.resultMapper.data(callback);
    }

    static void errorHandler(ConnectModel data, Exception e) {
        Application.notifyError(e, null);
    }

}
