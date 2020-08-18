/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import org.json.JSONObject;

public abstract class ConfigCallBack<T> implements CallBack {

    @Override
    public abstract void handle(String json);

    private void prepareTalkToComponent(T view, JSONObject configurationJson) {

    }

    private ComponentDef configureDef(ComponentDef def, JSONObject defData) {
        Logger.log(defData.getString("instanceId"));
        Logger.log(defData.getString("component"));

        def.setInstanceId(defData.getString("instanceId"));
        def.setComponent(defData.getString("component"));
        return def;
    }

}
