/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import java.util.ArrayList;
import java.util.List;

public class Event implements Signal {

    public Event(String action, String filter, Object data) {
        this.action = action;
        this.filter = filter;
        this.packets.add(data);

    }

    public Event(String action, String filter) {
        this.action = action;
        this.filter = filter;
    }

    public Event(String filter) {
        this.action = filter;
        this.filter = filter;
    }

    public String action;
    public String filter;
    public List<Object> packets = new ArrayList<Object>();

    public void setAction(String action) {
        this.action = action;
    }

    public void setFilter(String filter) {
        this.filter = filter;
    }

    public void setPackets(List<Object> packets) {
        this.packets = packets;
    }

    @Override
    public String getFilter() {
        return filter;
    }

    @Override
    public List<Object> getPackets() {
        return packets;
    }

    @Override
    public String getAction() {
        return action;
    }

    private Source source;

    @Override
    public Source getSource() {
        return this.source;
    }

    public void setSource(Source source) {
        this.source = source;
    }

}
