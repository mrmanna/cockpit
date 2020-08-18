/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Reader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import net.java.html.json.Models;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class JSON2ObjectConvertor<T> {

    /**
     *
     * @param data
     * @param result any empty expecting object to use the type
     * @return
     */
    public T getObject(String data, T result) {
        try {
            InputStream input = new ByteArrayInputStream(data.getBytes());
            Class claz = result.getClass();
            return (T) Models.parse(Application.getBrowserContext(), claz, input);
        } catch (Exception e) {
            Logger.log("Reuslt conversion failed for:" + result.getClass().getName());
        }
        return null;
    }

    public static Map getMap(String string) {
        Logger.log(JSON2ObjectConvertor.class.getName() + "::" + string);
        Map map = null;
        map = (Map) new JSONObject(string).toMap();
        return map;
    }

    public static Map<String, Object> getMap(Reader in) {
            JSONObject object = new JSONObject(in);
            Logger.log("Mapbuilder Stream convertor");
            return object.toMap();
       
    }

    public static String toJSON(Map in) {
        return new JSONObject(in).toString();
    }

    public static Map<String, Object> getMapFromObjectJSON(String string) {
      
        return new JSONObject(string).toMap();
    }
//    public static void main (String[] args){
//        String s="{\"1\":{\"2\":{\"3\":{\"4\":[5,{\"6\":7}]}}}}";
//		Map map = JSON2ObjectConvertor.getMap(s);
//		System.out.println(map.toString());
//    }

    public static Map<String, Object> jsonToMap(org.json.JSONObject json) throws JSONException {
        Map<String, Object> retMap = new HashMap<String, Object>();
        if (json != org.json.JSONObject.NULL) {
            retMap = toMap(json);
        }
        return retMap;
    }

    public static Map<String, Object> toMap(org.json.JSONObject object) throws JSONException {
        Map<String, Object> map = new HashMap<String, Object>();

        Iterator<String> keysItr = object.keys();
        while (keysItr.hasNext()) {
            String key = keysItr.next();
            Object value = object.get(key);

            if (value instanceof JSONArray) {
                value = toList((JSONArray) value);
            } else if (value instanceof JSONObject) {
                value = toMap((org.json.JSONObject) value);
            }
            map.put(key, value);
        }
        return map;
    }

    public static List<Object> toList(org.json.JSONArray array) throws JSONException {
        List<Object> list = new ArrayList<Object>();
        for (int i = 0; i < array.length(); i++) {
            Object value = array.get(i);
            if (value instanceof JSONArray) {
                value = toList((JSONArray) value);
            } else if (value instanceof JSONObject) {
                value = toMap((org.json.JSONObject) value);
            }
            list.add(value);
        }
        return list;
    }
}
