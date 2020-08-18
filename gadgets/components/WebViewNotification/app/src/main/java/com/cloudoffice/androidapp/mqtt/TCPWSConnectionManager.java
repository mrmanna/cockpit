package com.cloudoffice.androidapp.mqtt;

import android.util.Log;

import com.cloudoffice.androidapp.MainActivity;
import com.cloudoffice.androidapp.datamodel.Constants;
import com.cloudoffice.androidapp.utils.NotificationUtil;

import org.eclipse.paho.android.service.MqttAndroidClient;
import org.eclipse.paho.client.mqttv3.IMqttActionListener;
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.IMqttToken;
import org.eclipse.paho.client.mqttv3.MqttCallbackExtended;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Calendar;

/**
 * This name should be changed to MqttPublisherAdapter
 */
public class TCPWSConnectionManager implements ConnectionManager {

    private static final String TAG = "TCPWSConnectionManager#";

    private String brokerUrl = "tcp://37.97.221.77:1884";
    private String destination = "";
    private String username = "";
    private String password = "";
    private static MqttAndroidClient client;
    public static boolean instantiated = false;
    public static long LASTSLEEPTIME = 0l;
    private static TCPWSConnectionManager instance= null;

    public static TCPWSConnectionManager getInstance(){
        return instance;
    }
    //url, dest, username, pass
    public TCPWSConnectionManager(String destination, String username, String password) {
        this.destination = destination;
        this.username = username;
        this.password = password;
        createClient();
        TCPWSConnectionManager.instance = this;
        TCPWSConnectionManager.instantiated = true;
    }

    private MqttCallbackExtended mqttCallbackExtended = new MqttCallbackExtended() {

        @Override
        public void connectComplete(boolean b, String s) {
            Log.i(TAG, "Successfully connected.");
            try {
                getClient().subscribe(getDestination(),0);
            } catch (MqttException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void connectionLost(Throwable throwable) {
            Log.e(TAG, "Connection failed - " + throwable);
               connectImpl();
        }

        @Override
        public void messageArrived(String topic, MqttMessage mqttMessage) throws Exception {
           // Log.i(TAG, "Message arrived");
            if(NotificationUtil.isAppIsInBackground(MainActivity.getContext())||!NotificationUtil.isDeviceAwake()) {

                String message = new String(mqttMessage.getPayload());
                boolean isArray = message.subSequence(0, 1).toString().equalsIgnoreCase("[");
                if (!isArray) {
                    try {
                        JSONObject msgobj = new JSONObject(message);
                        String handlerType = msgobj.getString("handelarType");
                        if (null != handlerType && handlerType.equalsIgnoreCase("note")) {
                            if(isNotifiableMessage(msgobj.getLong("createDateMS"))) {
                                String channelId= msgobj.getString("itemCreatedById");
                                NotificationUtil notificationUtil = NotificationUtil.getInstacne();
                                notificationUtil.createNotificationChannel(channelId);
                                notificationUtil.showNotification(message,channelId);
                            }
                        }
                    } catch (JSONException e) {
                        Log.e(TAG, "JSON - " + e);
                    }
                }
            }else{
                TCPWSConnectionManager.LASTSLEEPTIME=System.currentTimeMillis();
            }
        }

        private boolean isNotifiableMessage(long time){
            return time>LASTSLEEPTIME;
        }
        @Override
        public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {
            Log.i(TAG, "Delivery complete with token - " + iMqttDeliveryToken);
        }
    };

    private void createClient() {

        MemoryPersistence persistence = new MemoryPersistence();
        String random = String.valueOf(Math.random());
        MqttAndroidClient c = new MqttAndroidClient(MainActivity.getContext(), getBrokerUrl(), "Cloudoffice  -" +getDestination(),persistence);
        setClient(c);
        getClient().setCallback(mqttCallbackExtended);

    }

    private void connectImpl() {

        MqttConnectOptions connOpts = new MqttConnectOptions();
        connOpts.setUserName(getUsername());
        connOpts.setPassword(getPassword().toCharArray());
        connOpts.setCleanSession(true);
        connOpts.setAutomaticReconnect(true);

        try {
            getClient().connect(connOpts).setActionCallback(new IMqttActionListener() {
                @Override
                public void onSuccess(IMqttToken asyncActionToken) {
                    Log.d("MESSAGE>>", "CONNECTION SUCCESS");
                }

                @Override
                public void onFailure(IMqttToken asyncActionToken, Throwable exception) {

                    Log.d("MESSAGE>>", "CONNECTION FAILED");
                }
            });
        } catch (MqttException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void connect() {
       connectImpl();
    }

    @Override
    public boolean isAlive() {
        if (null != getClient()) {
            return getClient().isConnected();
        }
        return false;
    }

    @Override
    public void reconnect() {

    }

    public void disconnect() {
        try {
            getClient().disconnect().waitForCompletion();
        } catch (MqttException e) {
            e.printStackTrace();
        }
    }

    private String getBrokerUrl() {
        return brokerUrl;
    }

    public void setBrokerUrl(String brokerUrl) {
        this.brokerUrl = brokerUrl;
    }

    private String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    private String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    private String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public  MqttAndroidClient getClient() {
        return client;
    }

    private void setClient(MqttAndroidClient client) {
        this.client = client;
    }
}
