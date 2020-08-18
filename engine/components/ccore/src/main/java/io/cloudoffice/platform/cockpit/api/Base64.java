/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.JSUIUtils;

/**
 *
 * @author toslim
 */
public class Base64 {
    
    public static String encodeBase64 (String newVal) {
        String qv = convertStandardJSONString(newVal);
        String base64Data = JSUIUtils.stringEncode(qv);
        return base64Data;
    }
    
    public static String convertStandardJSONString(String data_json) {
        data_json = data_json.replaceAll("\\\\r\\\\n", "");
        data_json = data_json.replace("\"{", "{");
        data_json = data_json.replace("}\",", "},");
        data_json = data_json.replace("}\"", "}");
        return data_json;
    }
}
