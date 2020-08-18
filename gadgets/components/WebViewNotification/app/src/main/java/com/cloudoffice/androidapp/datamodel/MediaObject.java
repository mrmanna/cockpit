package com.cloudoffice.androidapp.datamodel;

import org.json.JSONException;
import org.json.JSONObject;

public class MediaObject {

    private String fileName;
    private String fileContent;
    private String mimeType;
    private String size;

    public MediaObject(String fileName, String fileContent, String mimeType, String size){
        this.fileName = fileName;
        this.fileContent = fileContent;
        this.mimeType = mimeType;
        this.size = size;
    }

    public JSONObject getMediaAsJson(){

        JSONObject mediajson = new JSONObject();
        try {
            mediajson.put("fileName", fileName);
            mediajson.put("fileContent", fileContent);
            mediajson.put("mimeType", mimeType);
            mediajson.put("size", size);

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return mediajson;
    }

    public String getFileName() {
        return (null != fileName) ? fileName : "";
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileContent() {
        return (null != fileContent) ? fileContent : "";
    }

    public void setFileContent(String fileContent) {
        this.fileContent = fileContent;
    }

    public String getMimeType() {
        return (null != mimeType) ? mimeType : "";
    }

    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }

    public String getSize() {
        return (null != size) ? size : "";
    }

    public void setSize(String size) {
        this.size = size;
    }
}
