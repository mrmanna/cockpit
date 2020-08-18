package com.cloudoffice.androidapp.media;

import android.content.Intent;
import android.util.Base64;
import android.util.Log;
import android.webkit.WebView;

import com.cloudoffice.androidapp.MainActivity;
import org.json.JSONObject;

public class FileChooser {
    private static final String TAG = "##### FileChooser";

    public static void init() {
        Log.i(TAG, "FileChooser initializing..");
        Intent imageSelector = new Intent(MainActivity.getContext(), FileChooserActivity.class);
        imageSelector.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        MainActivity.getContext().startActivity(imageSelector);
    }

    public static void injectMediaObjectToDom(JSONObject mediaJson){
        WebView webView = MainActivity.getWebView();
        String base64Str = Base64.encodeToString(mediaJson.toString().getBytes(), Base64.NO_WRAP);
        webView.loadUrl("javascript:AndroidReceiver.uploadReceivedMedia('"+base64Str+"');");
    }
}
