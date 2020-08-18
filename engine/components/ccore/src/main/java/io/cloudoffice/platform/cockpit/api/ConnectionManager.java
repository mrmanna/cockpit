/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

public interface ConnectionManager {

    public static final String HANDLERTYPE_INBOXSIZE = "inboxSize";
    public static final String HANDLERTYPE_NOTE = "note";
    public static final String HANDLERTYPE_RECENTCONVERSATION = "recentWebConversation";
    public static final String HANDLERTYPE_INBOXCONVERSATION = "inboxConversation";
    public static final String HANDLERTYPE_READLATERCONVERSATION = "readLaterConversation";
    public static final String HANDLERTYPE_UNREAD_MESSEGE_SIZE = "unreadSize";

    public void connect();

    public void disconnect();

    public boolean isAlive();

    public void reconnect();

    public void setMessageHandler(WSMessageHandler handler);

    public WSMessageHandler getMessageHandler();
}
