/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.mainlayout;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.componentprocessor.PluggableComponent;
import io.cloudoffice.platform.cockpit.js.ViewComponentFactory;
import java.util.Map;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

@Model(className = "MainLayoutView", targetId = "", properties = {
    @Property(name = "workspace", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "profilemenu", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "leftToolbar", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "searchbox", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "centercolumnlayout", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "recentsList", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
})
@PluggableComponent(name = "MAINLAYOUT", locator = "Components")
public class MainLayoutComponent extends AbstractComponent<MainLayoutView> {

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.LOAD_INITIAL_DATA, new LoadInitialDataListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(MainLayoutView.class.getName());
    }

    @Override
    public void setComponentName() {
        this.componentName = "main-component";
    }

    private class LoadInitialDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            Components.PROFILEMENU.listen(signal);
            Components.WORKSPACE.listen(signal);
            Components.SEARCHBOX.listen(new Event(EventConstants.FILTER_FROM_SESSION, EventConstants.FILTER_REQUEST, null));
        }

    }

    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
            //listen(new Event(EventConstants.LOAD_INITIAL_DATA, EventConstants.LOAD_INITIAL_DATA, null));
            talkTo(Components.MAINLAYOUT, new Event(EventConstants.LOAD_INITIAL_DATA, EventConstants.LOAD_INITIAL_DATA, null), 10);
        }

        void loadComponents(Signal signal) {
            ViewComponentFactory.init(new String[]{"main"});
            setView(new MainLayoutView());
            initChildren(signal, getView());
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(getView()));
            String applyBindings = "false";
            if (signal.getAction().equalsIgnoreCase(EventConstants.AUTO_LOGIN)) {
                applyBindings = "true";
            }
            invokeChange(applyBindings);
        }

        void initChildren(Signal signal, MainLayoutView view) {
            loadCenterColumnLayout(signal, view);
            loadWorkspace(signal, view);
            loadProfile(signal, view);
            loadSearhbox(signal, view);
            loadLeftToolbar(signal, view);
            loadRecentsList(signal, view);
        }

        void invokeChange(String applyBindings) {
            Map data = MapBuilder.builder()
                    .addField("name", getComponentName())
                    .addField("model", getDefaultViewName())
                    .addField("applyBindings", applyBindings).get();

            Event loadSignal = new Event(EventConstants.LOGIN_SUCCESS, EventConstants.LOGIN_SUCCESS, data);
            Components.WORKSPACE.listen(loadSignal);
            Components.SEARCHBOX.listen(loadSignal);
            Components.PROFILEMENU.listen(loadSignal);
            Components.LEFTTOOLBAR.listen(loadSignal);
            Components.RECENTSLIST.listen(loadSignal);
            Components.CENTERCOLUMNLAYOUT.listen(loadSignal);
            Event signal = new Event(EventConstants.INDEX_VIEW_CHANGE, EventConstants.INDEX_VIEW_CHANGE, data);
            Components.BOOT.listen(signal);
            Event wsconnect = new Event(EventConstants.WSCONNECT, EventConstants.WSCONNECT, null);
            Components.BOOT.listen(wsconnect);
        }

        void loadWorkspace(Signal signal, MainLayoutView view) {
            view.getWorkspace().setName(Components.WORKSPACE.getComponentName());
            view.getWorkspace().setModel(Components.WORKSPACE.getDefaultViewName());
        }

        void loadSearhbox(Signal signal, MainLayoutView view) {
            view.getSearchbox().setName(Components.SEARCHBOX.getComponentName());
            view.getSearchbox().setModel(Components.SEARCHBOX.getDefaultViewName());
        }

        void loadProfile(Signal signal, MainLayoutView view) {
            view.getProfilemenu().setName(Components.PROFILEMENU.getComponentName());
            view.getProfilemenu().setModel(Components.PROFILEMENU.getDefaultViewName());
        }

        void loadLeftToolbar(Signal signal, MainLayoutView view) {
            view.getLeftToolbar().setName(Components.LEFTTOOLBAR.getComponentName());
            view.getLeftToolbar().setModel(Components.LEFTTOOLBAR.getDefaultViewName());
        }

        void loadRecentsList(Signal signal, MainLayoutView view) {
            view.getRecentsList().setName(Components.RECENTSLIST.getComponentName());
            view.getRecentsList().setModel(Components.RECENTSLIST.getDefaultViewName());
        }

        void loadCenterColumnLayout(Signal signal, MainLayoutView view) {
            view.getCentercolumnlayout().setName(Components.CENTERCOLUMNLAYOUT.getComponentName());
            view.getCentercolumnlayout().setModel(Components.CENTERCOLUMNLAYOUT.getDefaultViewName());
        }
    }
}
