/*
 * Copyright (C) 2012 Paul Burke
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.cloudoffice.androidapp.media;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.ContentResolver;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.provider.OpenableColumns;
import static android.util.Base64.NO_WRAP;
import android.util.Log;
import android.webkit.MimeTypeMap;
import android.widget.Toast;
import com.cloudoffice.androidapp.datamodel.MediaObject;
import com.cloudoffice.androidapp.utils.FileUtils;
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.InputStream;

/**
 * @author EUSIA
 */
public class FileChooserActivity extends Activity {

    private static final String TAG = "FileChooserActivity";

    private static final int REQUEST_CODE = 6384; // onActivityResult request

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.i(TAG, "MediaObject Chooser called");
        showChooser();
    }

    public void showChooser() {
        // Use the GET_CONTENT intent from the utility class
        Intent target = FileUtils.createGetContentIntent();
        // Create the chooser Intent
        Intent intent = Intent.createChooser(target, "MediaObject Chooser");
        try {
            startActivityForResult(intent, REQUEST_CODE);
        } catch (ActivityNotFoundException e) {
            // The reason for the existence of aFileChooser
        }
    }

    private String getName(final Uri uri) {
        Cursor returnCursor = getContentResolver().query(uri, null, null, null, null);
        /*
         * Get the column indexes of the data in the Cursor,
         * move to the first row in the Cursor, get the data, and display it.
         */
        int nameIndex = returnCursor.getColumnIndex(OpenableColumns.DISPLAY_NAME);
        returnCursor.moveToFirst();
        String fileName = returnCursor.getString(nameIndex);
        return fileName;

    }

    private String getSize(final Uri uri) {
        Cursor returnCursor = getContentResolver().query(uri, null, null, null, null);
        /*
         * Get the column indexes of the data in the Cursor,
         * move to the first row in the Cursor, get the data, and display it.
         */
        returnCursor.moveToFirst();
        int sizeIndex = returnCursor.getColumnIndex(OpenableColumns.SIZE);
        String fileSize = returnCursor.getString(sizeIndex);
        return fileSize;
    }

    public String getMimeType(Uri uri) {
        String mimeType = null;
        if (uri.getScheme().equals(ContentResolver.SCHEME_CONTENT)) {
            ContentResolver cr = this.getContentResolver();
            mimeType = cr.getType(uri);
        } else {
            String fileExtension = MimeTypeMap.getFileExtensionFromUrl(uri.toString());
            mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(fileExtension.toLowerCase());
        }
        return mimeType;
    }

    public String getContent(Uri uri) {

        String content = "";
        String[] filePathColumn = {MediaStore.Images.Media.DATA};
        Cursor cursor = getContentResolver().query(uri, filePathColumn, null, null, null);
        cursor.moveToFirst();
        int columnIndex = cursor.getColumnIndex(filePathColumn[0]);

        // prepare file location
        String fileLocation = cursor.getString(columnIndex);

        try {
            // read file content from file location
            InputStream in =getContentResolver().openInputStream(uri);
            BufferedInputStream initialStream = new BufferedInputStream(in);
            byte[] targetArray = new byte[initialStream.available()];
            initialStream.read(targetArray);
            // convert content to base64 string
            content = android.util.Base64.encodeToString(targetArray, NO_WRAP);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return content;
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case REQUEST_CODE:
                // If the file selection was successful
                if (resultCode == RESULT_OK) {
                    if (data != null) {
                        // Get the URI of the selected file
                        final Uri uri = data.getData();
                        try {
                            // Get the file path from the URI
                            final String name = getName(uri);
                            final String content = getContent(uri);
                            final String mimeType = getMimeType(uri);
                            final String size = getSize(uri);

                            if (null != name && null != content && !content.isEmpty() && null != mimeType && null != size) {
                                MediaObject media = new MediaObject(name, content, mimeType, size);
                                FileChooser.injectMediaObjectToDom(media.getMediaAsJson());
                            } else {
                                Log.e("#FileChooserActivity", "name:" + name
                                        + ", content:" + content
                                        + ", mimeType:" + mimeType
                                        + ", size:" + size);
                            }
                            Toast.makeText(FileChooserActivity.this, "MediaObject Selected: " + name, Toast.LENGTH_LONG).show();
                        } catch (Exception e) {
                            Log.e("FileSelectorTestAct", "MediaObject select error", e);
                        }
                    }
                }
                break;
        }
        FileChooserActivity.this.finish();
    }
}
