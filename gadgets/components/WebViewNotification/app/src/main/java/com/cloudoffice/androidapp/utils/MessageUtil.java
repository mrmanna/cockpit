package com.cloudoffice.androidapp.utils;

import com.cloudoffice.androidapp.datamodel.Message;
import com.google.gson.Gson;

 public class MessageUtil {
     private static MessageUtil _instance = null;
     private MessageUtil(){
     }

    public String getMessageSenderName(){
        return (null!=getMessage())?getMessage().getCreatedBy():"";
    }

    public String getMessageText(){
        return (null!=getMessage())?getMessage().getItemName():"";
    }


     public static MessageUtil getInstance(String messageJSON) {
         if (null == _instance) {
             _instance = new MessageUtil();
         }
         if(null!=messageJSON){
             _instance.setMessage(new Gson().fromJson(messageJSON, Message.class));
         }
         return _instance;
     }

     private Message message;
     private Message getMessage() {
         return message;
     }

     private void setMessage(Message message) {
         this.message = message;
     }
 }
