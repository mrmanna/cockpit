package com.cloudoffice.androidapp.utils;

import android.app.ActivityManager;
import android.app.Application;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.media.RingtoneManager;
import android.os.Build;
import android.os.PowerManager;
import android.support.v4.app.NotificationCompat;
import android.util.Log;

import com.cloudoffice.androidapp.MainActivity;
import com.cloudoffice.androidapp.R;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Iterator;
import java.util.List;

public class NotificationUtil extends Application {
    public static final String TAG = "NotificationUtil#";
    private static final String CHANNEL_ID = "personal_notification";
    private static int NOTIFICATION_ID = 002;
    private static NotificationUtil instacne = new NotificationUtil();

    public static NotificationUtil getInstacne(){
        return instacne;

    }
    public static void createNotificationChannel(String id) {

        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        Log.i(TAG, "Android build version - " + Build.VERSION.SDK_INT);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {

            CharSequence name = "Personal notification";
            String description = "Description of personal notification";
            int importance = NotificationManager.IMPORTANCE_DEFAULT;

            NotificationChannel channel = new NotificationChannel(id, name, importance);
            channel.setDescription(description);

            // Register the channel with the system; you can't change the importance
            // or other notification behaviors after this
            NotificationManager notificationManager = MainActivity.getContext().getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
            Log.i(TAG, "Notification channel " + id + " created.");
        }
    }



    public static boolean isAppIsInBackground(Context context) {
        boolean isInBackground = true;
        ActivityManager mActivityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        if (Build.VERSION.SDK_INT > Build.VERSION_CODES.O) {
            List<ActivityManager.RunningAppProcessInfo> runningProcesses = mActivityManager.getRunningAppProcesses();
            for (ActivityManager.RunningAppProcessInfo processInfo : runningProcesses) {
                if (processInfo.importance == ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND) {
                    for (String activeProcess : processInfo.pkgList) {
                        if (activeProcess.equals(context.getPackageName())) {
                            isInBackground = false;
                        }
                    }
                }
            }
        } else {
            List<ActivityManager.RunningTaskInfo> taskInfo = mActivityManager.getRunningTasks(1);
            ComponentName componentInfo = taskInfo.get(0).topActivity;
            if (componentInfo.getPackageName().equals(context.getPackageName())) {
                isInBackground = false;
            }
        }

        return isInBackground;
    }

    int summaryNotificationId=0;
    public void showNotification(String message,String channelId) {

        String title = MessageUtil.getInstance(message).getMessageSenderName();
        String text = MessageUtil.getInstance(message).getMessageText();

        Intent intent = new Intent(MainActivity.getContext(), MainActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);

        PendingIntent pendingIntent = PendingIntent.getActivity(MainActivity.getContext(), 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
        Bitmap icon = BitmapFactory.decodeResource(MainActivity.getContext().getResources(), R.mipmap.ic_launcher_round);


        NotificationCompat.Builder builder = new NotificationCompat.Builder(MainActivity.getContext(), channelId);
        builder.setLargeIcon(icon);
        builder.setSmallIcon(R.drawable.ic_notification);
        builder.setContentTitle(title);
        builder.setContentText(text);
        builder.setAutoCancel(true);
        builder.setGroup("Cloudoffice");
        builder.setPriority(NotificationCompat.PRIORITY_DEFAULT);
        builder.setContentIntent(pendingIntent);
        builder.setLights(Color.CYAN, 500, 1500);
        builder.setSound(RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION));
        long[] vibration_pattern = {1000, 1000, 1000};
        builder.setVibrate(vibration_pattern);


        Notification summaryNotification =
                new NotificationCompat.Builder(MainActivity.getContext(), channelId)
                        .setContentTitle("Digital Workspace")
                        //set content text to support devices running API level < 24
                        .setContentText("Your messages")
                        .setSmallIcon(R.drawable.ic_notification)
                        //build summary info into InboxStyle template
                        .setStyle(new NotificationCompat.InboxStyle()
                                .setBigContentTitle(title)
                                .setSummaryText("Notifications"))
                        //specify which group this notification belongs to
                        .setGroup("Cloudoffice")
                        //set this notification as the summary for the group
                        .setGroupSummary(true)
                        .build();
        if (isAppIsInBackground(MainActivity.getContext())) {
            MainActivity.getNotificationManager().notify(NOTIFICATION_ID, builder.build());
            MainActivity.getNotificationManager().notify(summaryNotificationId,summaryNotification);
            Log.i(TAG, "Notification send @ "+NOTIFICATION_ID);
            NOTIFICATION_ID=NOTIFICATION_ID+01;
        }
    }
    public static boolean isServiceRunning(Class<?> serviceClass) {
        ActivityManager manager = (ActivityManager) MainActivity.getContext().getSystemService(Context.ACTIVITY_SERVICE);
        for (ActivityManager.RunningServiceInfo service : manager.getRunningServices(Integer.MAX_VALUE)) {
            if (serviceClass.getName().equals(service.service.getClassName())) {
                return true;
            }
        }
        return false;
    }
    public static boolean isDeviceAwake(){
        PowerManager powerManager = (PowerManager)MainActivity.getContext().getSystemService(Context.POWER_SERVICE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT_WATCH) {
           return powerManager.isInteractive();
        } else {
            //noinspection deprecation
           return powerManager.isScreenOn();
        }
    }
}
