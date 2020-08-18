/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.lefttoolbar;

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
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;

@Model(className = "LeftToolbarView", targetId = "", properties = {})
@PluggableComponent(name = "LEFTTOOLBAR", locator = "Components")
public class LeftToolbarComponent extends AbstractComponent<LeftToolbarView> {

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(LeftToolbarView.class.getName());
    }

    @Override
    public void setComponentName() {
        this.componentName = "left-toolbar-component";
    }

    @Function
    public static void activate(LeftToolbarView view, String data) {
        Map dataMap = MapBuilder.builder()
                    .addField("filter", data)
                    .addField("requestViaLoadMoreMessege", false).get();
        Event signal = new Event(EventConstants.LOAD_RECENT_DATA, EventConstants.LOAD_RECENT_DATA, dataMap);
        Components.RECENTSLIST.listen(signal);
    }
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);

        }

        void loadComponents(Signal signal) {
            ViewComponentFactory.init(new String[]{
                "left-toolbar"});
            LeftToolbarView leftToolbar = new LeftToolbarView();
            setView(leftToolbar);
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(leftToolbar));
        }
    }
}
