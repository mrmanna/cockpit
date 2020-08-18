package com.cloudoffice.androidapp;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.cloudoffice.androidapp.utils.NotificationUtil;

import org.eclipse.paho.android.service.MqttService;


public class RestartServiceReceiver extends BroadcastReceiver
{


    private static final String TAG = "ServiceStart>>";

    @Override
    public void onReceive(Context context, Intent intent) {
        Log.i(TAG, "onReceive>>KEEPALIVE");

        Intent number5 = new Intent(MainActivity.getContext(), MQTTThread.class);
        number5.putExtra("times", 5);


        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            MainActivity.getContext().startForegroundService(number5);
        } else {
            //lower then Oreo, just start the service.
            MainActivity.getContext().startService(number5);
        }

    }

}