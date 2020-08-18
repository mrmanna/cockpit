/**
 * **************************************************************************
 * Copyright (c) 2012-2016, EUSIA BD LTD. and/or its affiliates. All rights
 * reserved. EUSIA PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 * **************************************************************************
 */
package io.cloudoffice.platform.cockpit.mqtt;

import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.ConnectionManager;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.WSMessageHandler;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;

/**
 * This name should be changed to MqttPublisherAdapter
 *
 */
public class TCPWSConnectionManager implements ConnectionManager {

    private String brokerUrl = "";
    private String destination;
    private String username = "";
    private String password = "";
    private static MqttClient client;
    private MqttMessageListener mqttMessageListener;

    //url, dest, username, pass
    public TCPWSConnectionManager(String url, String destination, String username, String password, WSMessageHandler handler) {
        this.destination = destination;
        this.brokerUrl = url;
        this.username = username;
        this.password = password;
        this.setMessageHandler(handler);
    }

    public TCPWSConnectionManager() {
    }

    public void createClient() {

        MemoryPersistence persistence = new MemoryPersistence();
        String random = String.valueOf(Math.random());
        try {
            MqttClient c = new MqttClient(getBrokerUrl(), "CoExchenger Server-" + random, persistence);
            setClient(c);
            connectImpl();
            connectionSuccessCallBack();
            mqttMessageListener = new MqttMessageListener();
            mqttMessageListener.setListener(handler);
            c.subscribe(getDestination(), mqttMessageListener);
        } catch (MqttException e) {
           
        }
    }

    public void connectImpl() {

        MqttConnectOptions connOpts = new MqttConnectOptions();
        connOpts.setUserName(getUsername());
        connOpts.setPassword(getPassword().toCharArray());
        connOpts.setCleanSession(true);
        try {
            getClient().connect(connOpts);
        } catch (MqttException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @Override
    public void connect() {
        createClient();
    }

    public void disconnect() {
        try {
            getClient().disconnect();
        } catch (MqttException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public String getBrokerUrl() {
        return brokerUrl;
    }

    public void setBrokerUrl(String brokerUrl) {
        this.brokerUrl = brokerUrl;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public static MqttClient getClient() {
        return client;
    }

    public void setClient(MqttClient client) {
        this.client = client;
    }

//   public static void main(String args[]) throws MqttException{
//       StompController s = new StompController("tcp://95.170.83.247:1884", "A", "admin", "admin123");
//          s.createClient();
//          s.getClient().subscribe("A", new IMqttMessageListener() {
//           @Override
//           public void messageArrived(String topic, MqttMessage message) throws Exception {
//                System.out.println("a");
//           }
//       });
//   }
    @Override
    public boolean isAlive() {
        return getClient().isConnected();
    }

    @Override
    public void reconnect() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    WSMessageHandler handler = null;

    @Override
    public void setMessageHandler(WSMessageHandler handler) {
        this.handler = handler;
    }

    @Override
    public WSMessageHandler getMessageHandler() {
        return this.handler;
    }

    public static boolean firsttime = true;

    private void connectionSuccessCallBack() {
        if (firsttime) {
            Components.BOOT.listen(new Event(EventConstants.WSCONNECT_SUCCESS, EventConstants.WSCONNECT));
            firsttime = false;
        }
    }
}
