package com.cloudoffice.androidapp.jsinterfaces;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import android.webkit.JavascriptInterface;

import com.cloudoffice.androidapp.MQTTThread;
import com.cloudoffice.androidapp.MainActivity;
import com.cloudoffice.androidapp.datamodel.Constants;
import com.cloudoffice.androidapp.media.FileChooser;
import com.cloudoffice.androidapp.mqtt.ConnectionManager;
import com.cloudoffice.androidapp.utils.NotificationUtil;

import java.util.Calendar;

public class WebAppInterface {

    private static final String TAG = "WebAppInterface#";
    private Context context;
    private static ConnectionManager manager;
    public static boolean serviceStarted = false;
    public static String id1 = "test_channel_01";

    public static ConnectionManager getManager() {
        return manager;
    }

    public WebAppInterface(Context context) {
        this.context = context;
    }

    @JavascriptInterface
    public void connecttomqtt(String url, String destination, String username, String password) {
        SharedPreferences shared = MainActivity.getContext().getSharedPreferences(Constants.PREF, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = shared.edit();
        editor.putString(Constants.USERNAME, username);
        editor.putString(Constants.PASSWORD, password);
        editor.putString(Constants.DESTINATION, destination);
        editor.commit();

        connectwithmqtt();
    }

    @JavascriptInterface
    public void fileAction() {
        Log.i(TAG, "MediaObject Chooser called");
        FileChooser.init();
    }
    private AlarmManager alarmMgr;
    private PendingIntent alarmIntent;

    private void connectwithmqtt() {

        if (!serviceStarted && !NotificationUtil.isServiceRunning(MQTTThread.class)) {
            Log.i(TAG, "onReceive");
            serviceStarted = true;
            Intent number5 = new Intent(MainActivity.getContext(), MQTTThread.class);
            number5.putExtra("times", 5);
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                MainActivity.getContext().startForegroundService(number5);
            } else {
                //lower then Oreo, just start the service.
                MainActivity.getContext().startService(number5);
            }

            alarmMgr = (AlarmManager)MainActivity.getContext().getSystemService(Context.ALARM_SERVICE);
            Intent intent = new Intent("keepalive");
            alarmIntent = PendingIntent.getBroadcast(MainActivity.getContext(), 0, intent, 0);
            Calendar calendar = Calendar.getInstance();
            calendar.setTimeInMillis(System.currentTimeMillis()+(1000 * 60 * 60 * 2));


            alarmMgr.setRepeating(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(),
                    1000 * 60 * 60 * 2, alarmIntent);
        }
    }

}

