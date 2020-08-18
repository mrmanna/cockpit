/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

public class WSMessageHandler implements WSMessageListener {

    @Override
    public void onMessage(String message) {
        boolean isArrayHanlder = MapBuilder.isArray(message);
        if (isArrayHanlder) {
            Components.MESSAGE.onMessage("updateMessageList", message);
        } else {
            MapBuilder map = MapBuilder.query(message, true);
            if (map.getString("handelarType").equalsIgnoreCase(ConnectionManager.HANDLERTYPE_NOTE)) {
                Components.RECENTSLIST.onMessage("updateRecentConversationList", message);
            } else if (map.getString("handelarType").equalsIgnoreCase(ConnectionManager.HANDLERTYPE_RECENTCONVERSATION)) {
                Components.RECENTSLIST.onMessage("setRecentConversationList", message);
            }
        }
    }

    @Override
    public void onMessage(String handler, String message) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
