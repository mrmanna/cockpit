package com.cloudoffice.androidapp;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.os.Binder;
import android.os.Bundle;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.IBinder;
import android.os.Looper;
import android.os.Message;
import android.os.SystemClock;
import android.support.v4.app.NotificationCompat;
import android.util.Log;
import android.widget.Toast;

import com.cloudoffice.androidapp.datamodel.Constants;
import com.cloudoffice.androidapp.jsinterfaces.WebAppInterface;
import com.cloudoffice.androidapp.mqtt.TCPWSConnectionManager;
import com.cloudoffice.androidapp.utils.NotificationUtil;

import org.eclipse.paho.client.mqttv3.MqttException;

import java.util.Random;
import java.util.concurrent.Executors;


public class MQTTThread extends Service {
    public MQTTThread() {
    }

    private Looper mServiceLooper;
    private ServiceHandler mServiceHandler;
    private final static String TAG = "MyForegroundService";
    @Override
    public void onCreate() {
        r = new Random();

        HandlerThread thread = new HandlerThread("ServiceStartArguments", android.os.Process.THREAD_PRIORITY_BACKGROUND);
        thread.start();

        // Get the HandlerThread's Looper and use it for our Handler
        mServiceLooper = thread.getLooper();
        mServiceHandler = new ServiceHandler(mServiceLooper);
        binder = new BGServiceBinder(this);
        registerReceiver(new RestartServiceReceiver(),new IntentFilter("keepalive"));
    }
    BGServiceBinder binder;
    class BGServiceBinder extends Binder {

        private MQTTThread mqttService;
        private String activityToken;

        BGServiceBinder(MQTTThread mqttService) {
            this.mqttService = mqttService;
        }

        /**
         * @return a reference to the Service
         */
        public MQTTThread getService() {
            return mqttService;
        }

    }



    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Message msg = mServiceHandler.obtainMessage();
        msg.arg1 = startId;//needed for stop.

        if (intent != null) {
            msg.setData(intent.getExtras());
            mServiceHandler.sendMessage(msg);

        } else {
            Toast.makeText(MQTTThread.this, "The Intent to start is null?!", Toast.LENGTH_SHORT).show();
        }
        return START_STICKY;

    }
    Random r;
    // Handler that receives messages from the thread
    private final class ServiceHandler extends Handler {
        public ServiceHandler(Looper looper) {
            super(looper);
        }

        @Override
        public void handleMessage(Message msg) {
             Log.d("MESSAGE>>", "should be foreground now.");
             SharedPreferences shared = MainActivity.getContext().getSharedPreferences(Constants.PREF, MODE_PRIVATE);
             if(null!=manager&&manager.getClient().isConnected()){
                 try {
                     manager.getClient().disconnect();
                     manager=null;
                 } catch (MqttException e) {
                     e.printStackTrace();
                 }
             }
            startForeground(1,getNotification("Cloudoffice is active."));

             manager = new TCPWSConnectionManager(shared.getString(Constants.DESTINATION, ""), shared.getString(Constants.USERNAME, ""), shared.getString(Constants.PASSWORD, ""));
             Log.i(">>", "Start connecting with mqtt");
             manager.connect();
           }
    }

    final Handler mHandler = new Handler();

    // Helper for showing tests
    void toast(final CharSequence text) {
        mHandler.post(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(MQTTThread.this, text, Toast.LENGTH_SHORT).show();
            }
        });
    }

   static TCPWSConnectionManager manager;

    @Override
    public IBinder onBind(Intent intent) {
        return binder;
    }

    // build a persistent notification and return it.
    public Notification getNotification(String message) {

        return new NotificationCompat.Builder(getApplicationContext(), WebAppInterface.id1)
                .setSmallIcon(R.drawable.ic_notification)
               // .setOngoing(false)  //persistent notification!
                .setChannelId(WebAppInterface.id1)
                .setAutoCancel(true)
                .setGroup("Cloudoffice")
                .setContentTitle("Cloudoffice")   //Title message top row.
                .setContentText(message)  //message when looking at the notification, second row
                .build();  //finally build and return a Notification.
    }
}
