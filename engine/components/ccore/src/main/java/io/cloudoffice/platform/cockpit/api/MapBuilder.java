/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import java.io.Reader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * Storage thinking
 */
public class MapBuilder {

    private JSONObject map;
    private JSONArray array;

    private MapBuilder(Map<String, Object> map) {
        this.map = new JSONObject(map);
    }
    
    private MapBuilder() {
        this.map = new JSONObject();
    }

    private MapBuilder(JSONObject map) {
        this.map = map;
    }

    private MapBuilder(String value) {
        this.map = new JSONObject(value);
    }

    private MapBuilder(List array) {
        this.array = new JSONArray(array);
    }

    private MapBuilder(String array, boolean isArray) {
        if (isArray) {
            this.array = new JSONArray(array);
        } else {
            this.map = new JSONObject(array);
        }
    }

    public MapBuilder addField(String key, String value) {
        this.map.put(key, value);
        return this;
    }

    public MapBuilder addField(String key, int value) {
        this.map.put(key, value);
        return this;
    }

    public MapBuilder addField(String key, long value) {
        this.map.put(key, value);
        return this;
    }

    public MapBuilder addField(String key, boolean value) {
        this.map.put(key, value);
        return this;
    }

    public MapBuilder addField(String key, Map value) {
        this.map.put(key, value);
        return this;
    }
    
    public MapBuilder addField(String key, List<String> list) {
        this.map.put(key, list);
        return this;
    }
    public MapBuilder addFieldMapList(String key, List<Map<String, String>> list) {
        this.map.put(key, list);
        return this;
    }

    public MapBuilder removeField(String key) {
        this.map.remove(key);
        return this;
    }

    public Map<String, Object> get() {
        return this.map.toMap();
    }

    /**
     * to get value of new map
     *
     * @param map
     * @return
     */
    public static MapBuilder query(Map<String, Object> map) {
        Logger.log(MapBuilder.class.getName() + ".query(Map)");
        return (null != map) ? new MapBuilder(map) : null;
    }

    public static MapBuilder query(JSONObject map) {
        Logger.log(MapBuilder.class.getName() + ".query(Map)");
        return (null != map) ? new MapBuilder(map) : null;
    }

    public boolean exists(String key) {
        return (null != key) ? this.map.keySet().contains(key) : false;
    }

    public String getValue(String key) {

        return (map.has(key) && null != map.get(key)) ? String.valueOf(this.map.get(key)) : null;
    }

    public JSONObject getJsonObject(String key) {

        return (map.has(key) && null != map.get(key)) ? this.map.getJSONObject(key) : null;
    }

    public JSONArray getJsonArray(String key) {

        return (map.has(key) && null != map.get(key)) ? this.map.getJSONArray(key) : null;
    }

    public String getString(String key) {
        return (map.has(key) && null != map.get(key)) ? String.valueOf(this.map.get(key)) : "";
    }

    public Object[] getArray(String key) {
        if (map.has(key) && null != map.get(key)) {
            Logger.log(MapBuilder.class.getName() + ".getArray(string)");
            return map.getJSONArray(key).toList().toArray();

        }
        return null;
    }

    public List getList(String key) {
        if (map.has(key) && null != map.get(key)) {
            Logger.log(MapBuilder.class.getName() + ".getArray(string)");

            return map.getJSONArray(key).toList();

        }
        return null;
    }

    public int getInt(String key) {
        return (map.has(key) && null != map.get(key)) ? this.map.getInt(key) : 0;
    }

    public long getLong(String key) {
        return (map.has(key) && null != map.get(key)) ? this.map.getLong(key) : 0;
    }

    public boolean getBoolean(String key) {
        return (map.has(key) && null != map.get(key)) ? this.map.getBoolean(key) : false;
    }

    public Map<String, Object> getMap(String key) {

        return (null != key && map.has(key)) ? this.map.getJSONObject(key).toMap() : null;
    }

    /**
     * to build a new map
     *
     * @return
     */
    public static MapBuilder builder() {
        return new MapBuilder();
    }

    public static MapBuilder arrayBuilder() {
        return new MapBuilder(new ArrayList<Map<String, Object>>());
    }

    public List getArray() {
        return this.array.toList();
    }

    public Object[] getObjectArray() {
        Logger.log(MapBuilder.class.getName() + ".getObjectArray");
        return this.array.toList().toArray();
    }

    public static boolean isArray(String value) {
        return value.subSequence(0, 1).toString().equalsIgnoreCase("[");
    }

    public static MapBuilder query(String value) {

        if (null != value && !value.isEmpty()) {

            return new MapBuilder(value);
        }
        return null;
    }

    public static MapBuilder query(String value, boolean typeNotSure) {

        if (null != value && !value.isEmpty()) {
            if (isArray(value)) {
                return new MapBuilder(value, true);
            } else {
                return new MapBuilder(value);
            }
        }
        return null;
    }

    @Deprecated
    public static MapBuilder query(Reader value) {
        Logger.log(MapBuilder.class.getName() + ".query(reader)");
        Logger.log("Mapbuilder Stream convertor");
        Map<String, Object> map = new JSONObject(value).toMap();
        if (null != map) {
            return new MapBuilder(map);
        }
        return null;
    }

    public String toJSON() {
        if (null != this.array) {

            return this.array.toString();
        } else {
            return this.map.toString();
        }
    }
}
