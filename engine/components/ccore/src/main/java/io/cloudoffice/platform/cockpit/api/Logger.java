/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.JSUIUtils;

public class Logger {

    public static void log(String msg) {
        if (Application.getApplicationContext().getDevice().equalsIgnoreCase(Application.WEB)) {
            JSUIUtils.console(msg);
        }
    }
}
