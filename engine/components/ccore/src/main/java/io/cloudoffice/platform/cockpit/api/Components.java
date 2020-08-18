/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class Components {

    public static Map<String, Component> components = new HashMap<String, Component>();

    public static Component get(String name) {
        return components.get(name);
    }

    public static Component get(String name, String instance) {
        return getInstance(name, instance);
    }

    public static void put(String name, Component value) {
        components.put(name, value);
    }

    private static Component getInstance(String name, String instance) {
        String bindName = name + instance;
        if (!components.containsKey(bindName)) {
            try {
                Class clz = Class.forName(name);
                Method method = clz.getMethod("getInstance", String.class);
                Component comp = (Component) method.invoke(null, instance);
                return comp;
            } catch (ClassNotFoundException ex) {
                Logger.log(Components.class.getName() + "::" + "initComponent::" + ex);
            } catch (IllegalAccessException ex) {
                Logger.log(Components.class.getName() + "::" + "initComponent::" + ex);
            } catch (NoSuchMethodException ex) {
                Logger.log(Components.class.getName() + "::" + "initComponent::" + ex);
            } catch (SecurityException ex) {
                Logger.log(Components.class.getName() + "::" + "initComponent::" + ex);
            } catch (IllegalArgumentException ex) {
                Logger.log(Components.class.getName() + "::" + "initComponent::" + ex);
            } catch (InvocationTargetException ex) {
                Logger.log(Components.class.getName() + "::" + "initComponent::" + ex);
            }
        } else {
            return components.get(bindName);
        }
        return null;
    }

    public static Component HELPER = null;

    public static Component SIGNIN = null;

    public static Component ADMINMENU = null;

    public static Component LEFTTOOLBAR = null;

    public static Component PROFILEMENU = null;

    public static Component WORKSPACE = null;

    public static Component SEARCHBOX = null;

    public static Component MAINLAYOUT = null;

    public static Component BOOT = null;

    public static Component RECENTSLIST = null;

    public static Component MIDDLECONTAINER = null;

    public static Component CENTERCOLUMNLAYOUT = null;

    public static Component ITEMDETAILMETA = null;

    public static Component NEWITEMMENU = null;

    public static Component TABCONTAINER = null;

    public static Component ITEMDETAILBODY = null;

    public static Component PERSON = null;

    public static Component ORGANIZATION = null;

    public static Component MESSAGE = null;

    public static Component LAYOUT = null;

    public static Component ACTIONMENU = null;

    public static Component RELATEDITEM = null;

    public static Component TAGITEM = null;

    public static Component SHAREITEM = null;

    public static Component MEDIA = null;

    public static Component TOGGLEMENU = null;

    public static Component COLLECTION = null;

    public static Component DOCUMENT = null;

    public static Component GENERICLIST = null;
}
