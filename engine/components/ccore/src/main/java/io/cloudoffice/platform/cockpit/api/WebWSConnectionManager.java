/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.JSUIUtils;
import io.cloudoffice.platform.cockpit.js.StompWS;
import net.java.html.json.Function;
import net.java.html.json.Model;

@Model(className = "WebSocketConnection", targetId = "", properties = {})
public class WebWSConnectionManager implements ConnectionManager {
    
    WSMessageHandler handler = null;
    
    public String getDestination() {
        return destination;
    }
    
    public String getUsername() {
        return username;
    }
    
    public String getPassword() {
        return password;
    }
    private String destination;
    private String username = "";
    private String password = "";
    
    public WebWSConnectionManager(String url, String destination, String username, String password, WSMessageHandler handler) {
        this.destination = destination;
        this.username = username;
        this.password = password;
        this.setMessageHandler(handler);
    }
    
    @Override
    public void setMessageHandler(WSMessageHandler handler) {
        this.handler = handler;
        
    }
    
    @Override
    public WSMessageHandler getMessageHandler() {
        return this.handler;
    }
    
    public WSMessageHandler getHandler() {
        return handler;
    }

    /**
     * WS message receive from browser
     *
     * @param view
     * @param data
     */
    @Function
    public static void receive(WebSocketConnection view, String data) {
      //  JSUIUtils.console("Data in WebWSConnectionManager: " + data);
        Application.getWsConnectionManager().getMessageHandler().onMessage(data);
    }
    
    @Override
    public void connect() {
        StompWS.init();
        StompWS.connect(JSUIUtils.getWsUrl(), getDestination(), getUsername(), getPassword());
    }
    
    @Override
    public void disconnect() {
        StompWS.disconnect();
    }
    
    @Override
    public boolean isAlive() {
        return StompWS.connected();
    }
    
    @Override
    public void reconnect() {
        if (!isAlive()) {
            StompWS.connect(JSUIUtils.getWsUrl(), getDestination(), getUsername(), getPassword());
        }
    }
    
    @Function
    public static void connectionFailedCallback(WebSocketConnection view) {
    }
    
    @Function
    public static void connectionSuccessCallback(WebSocketConnection view) {
        Components.BOOT.listen(new Event(EventConstants.WSCONNECT_SUCCESS, EventConstants.WSCONNECT));
    }
    
}
