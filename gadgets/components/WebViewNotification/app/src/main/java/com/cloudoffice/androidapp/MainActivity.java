package com.cloudoffice.androidapp;

import android.Manifest;
import android.app.AlarmManager;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.res.AssetManager;
import android.graphics.Matrix;
import android.graphics.RectF;
import android.net.ConnectivityManager;
import android.net.Uri;
import android.net.http.SslError;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.LocalBroadcastManager;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.LinearInterpolator;
import android.view.animation.RotateAnimation;
import android.webkit.JsResult;
import android.webkit.ServiceWorkerClient;
import android.webkit.ServiceWorkerController;
import android.webkit.SslErrorHandler;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageView;
import android.widget.ProgressBar;

import com.cloudoffice.androidapp.jsinterfaces.WebAppInterface;
import com.cloudoffice.androidapp.mqtt.TCPWSConnectionManager;
import com.cloudoffice.androidapp.utils.NotificationUtil;

import org.eclipse.paho.client.mqttv3.internal.wire.MqttAck;

import java.io.IOException;
import java.io.InputStream;
import java.util.Calendar;
import java.util.concurrent.Executors;


public class MainActivity extends AppCompatActivity{

    public static final String TAG = "MainActivity";
    public static final String SITE_URL = "https://www.cloudoffice.io/chat";
    public static final String DEFAULT_DOMAIN = "www.cloudoffice.io";
    private static NotificationManager notificationManager;
    private static Context appcontext;
    private static WebView webView;
    private static View splash;
    private static ProgressBar progressBar;

    IntentFilter intentFilter = new IntentFilter("android.net.conn.CONNECTIVITY_CHANGE");


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ActivityCompat.requestPermissions(this,
                new String[]{
                        Manifest.permission.READ_EXTERNAL_STORAGE,
                        Manifest.permission.WRITE_EXTERNAL_STORAGE
                },
                0);
        registerReceiver(new NetworkChangeReceiver(), intentFilter);

        this.appcontext = getApplicationContext();
        this.notificationManager = (NotificationManager) this.getSystemService(NOTIFICATION_SERVICE);
        setContentView(R.layout.activity_main);


        // hide the support action bar
        if (null != getSupportActionBar()) {
            getSupportActionBar().hide();
        }
        splash = (View) findViewById(R.id.splash);
        splash.setVisibility(View.VISIBLE);
        imageView = (ImageView) findViewById(R.id.imageLoading1);
        imageView.setVisibility(View.VISIBLE);
        progressBar = (ProgressBar) findViewById(R.id.progressBar);
        progressBar.setIndeterminate(true);
        progressBar.setMax(100);
        progressBar.setProgress(10);
        createchannel();
        // create a wevbiew
        webView = findViewById(R.id.webview);

        // enable javascript
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);

        // binding javascript code to android code
        webView.addJavascriptInterface(new WebAppInterface(this), "Android");
        // load web url to the activity
        webView.loadUrl(SITE_URL);
        webView.setWebViewClient(new MyWebViewClient());
        webView.setWebChromeClient(new WebChromeClient() {

            @Override
            public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
                return super.onJsAlert(view, url, message, result);
            }
        });
        webView.setVisibility(View.INVISIBLE);



      //  Glide.with(this).load(R.drawable.ic_notification).into(imageView);




    }
    static ImageView imageView;

    // Handling page navigation
    public class MyWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            if (Uri.parse(url).getHost().equalsIgnoreCase(DEFAULT_DOMAIN)) {
                // This is my website, so do not override; let my WebView load the page
                return false;
            }
            // Otherwise, the link is not for a page on my site, so launch another Activity that handles URLs
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            startActivity(intent);
            return true;
        }

        @Override
        public void onPageFinished(WebView view, String url) {

            super.onPageFinished(view, url);
            webView.setVisibility(View.VISIBLE);
            imageView.setVisibility(View.INVISIBLE);
            progressBar.setVisibility(View.INVISIBLE);
            splash.setVisibility(View.INVISIBLE);
        }

        @Override
        public void onReceivedHttpError(WebView view, WebResourceRequest request, WebResourceResponse errorResponse) {
            Log.e(TAG, errorResponse.toString());
        }

        @Override
        public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
            handler.proceed();
        }

        @Override
        public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
            Log.e(TAG, error.toString());
            if(!networkAvailable()) {
                webView.loadUrl("file:///android_asset/request_failed.html");
                APP_NETWORK_STATE = 0;
            }
        }
    }
    public static int APP_NETWORK_STATE=1; //0 no_network
    public class NetworkChangeReceiver extends BroadcastReceiver {

        @Override
        public void onReceive(final Context context, final Intent intent) {


            if ("android.net.conn.CONNECTIVITY_CHANGE".equals(intent.getAction())) {
                if(networkAvailable()&&APP_NETWORK_STATE==0){
                    webView.loadUrl(SITE_URL);
                    APP_NETWORK_STATE = 1;
                }else if(!networkAvailable()&&APP_NETWORK_STATE==1){
                    webView.loadUrl("file:///android_asset/request_failed.html");
                    APP_NETWORK_STATE = 0;
                }
            }
        }
    }
    public static boolean networkAvailable() {

        ConnectivityManager con_manager = (ConnectivityManager)
                getContext().getSystemService(Context.CONNECTIVITY_SERVICE);

        return (con_manager.getActiveNetworkInfo() != null
                && con_manager.getActiveNetworkInfo().isAvailable()
                && con_manager.getActiveNetworkInfo().isConnected());
    }

    public static NotificationManager getNotificationManager() {
        return notificationManager;
    }

    public static Context getContext() {
        return appcontext;
    }

    public static WebView getWebView() {
        return webView;
    }

    // Prevent the back-button from closing the app
    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onResume() {
        TCPWSConnectionManager.LASTSLEEPTIME = System.currentTimeMillis();
        super.onResume();

    }

    @Override
    protected void onPause() {
        TCPWSConnectionManager.LASTSLEEPTIME = System.currentTimeMillis();
        super.onPause();

    }

    @Override
    protected void onStop() {
        TCPWSConnectionManager.LASTSLEEPTIME = System.currentTimeMillis();
        super.onStop();

    }

    private void createchannel() {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

            NotificationChannel mChannel = new NotificationChannel("test_channel_01",
                    "Message Channel",  //name of the channel
                    NotificationManager.IMPORTANCE_LOW);   //importance level
            //important level: default is is high on the phone.  high is urgent on the phone.  low is medium, so none is low?
            // Configure the notification channel.
            mChannel.setDescription("Digital Workspace Message Channel");
            mChannel.enableLights(true);
            // Sets the notification light color for notifications posted to this channel, if the device supports this feature.
            mChannel.setShowBadge(true);
            nm.createNotificationChannel(mChannel);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
//        TCPWSConnectionManager.LASTSLEEPTIME = System.currentTimeMillis();
//
//        Intent number5 = new Intent(MainActivity.getContext(), MQTTForeground.class);
//        number5.putExtra("times", 5);
//
//        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
//            MainActivity.getContext().startForegroundService(number5);
//        } else {
//            //lower then Oreo, just start the service.
//            MainActivity.getContext().startService(number5);
//        }
    }

    private void startMqttService() {
        sendBroadcast(new Intent("keepalive"));
    }


    private static void requestPermission(){
/*
// Here, thisActivity is the current activity
if (ContextCompat.checkSelfPermission(this,
Manifest.permission.WRITE_EXTERNAL_STORAGE)
!= PackageManager.PERMISSION_GRANTED) {

// Should we show an explanation?
if (ActivityCompat.shouldShowRequestPermissionRationale(this,
Manifest.permission.WRITE_EXTERNAL_STORAGE)) {

// Show an expanation to the user asynchronously -- don't block
// this thread waiting for the user's response! After the user
// sees the explanation, try again to request the permission.

} else {

// No explanation needed, we can request the permission.

ActivityCompat.requestPermissions(this,
new String[]{Manifest.permission.SEND_SMS,Manifest.permission.WRITE_EXTERNAL_STORAGE},
MY_PERMISSIONS_REQUEST_READ_CONTACTS);

// MY_PERMISSIONS_REQUEST_READ_CONTACTS is an
// app-defined int constant. The callback method gets the
// result of the request.
}
}
*/

//        ActivityCompat.requestPermissions(this,
//                new String[]{Manifest.permission.INTERNET,
//                        Manifest.permission.CAMERA,
//                        Manifest.permission.SEND_SMS,
//                        Manifest.permission.WRITE_EXTERNAL_STORAGE,
//                        Manifest.permission.READ_EXTERNAL_STORAGE},
//                0);

    }

}
