/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.organization;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.js.VIEW;
import java.util.Map;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

/**
 *
 * @author toslim
 */

@Model(className = "OrganizationView", targetId = "", properties = {
    @Property(name = "visible", type = boolean.class),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class)
})

public class OrganizationComponent extends AbstractComponent<OrganizationView> {

    @Override
    public void setComponentName() {
        this.componentName = "organization-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(OrganizationView.class.getName());
        addViewName(EventConstants.CREATE_VIEW, OrganizationView.class.getName());
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.PROCESS_ACTION, new ProcessActionListener());
        attachListener(EventConstants.NEW_ITEM_INIT_COMPONENT, new InitNewItemComponentListener());
        attachListener(EventConstants.NEW_ITEM_PROCESS_ACTION, new NewItemProcessActionListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponent(signal);
        }

        void loadComponent(Signal signal) {
            VIEW.render(new String[]{"organization"});
            OrganizationView organizationView = new OrganizationView();
            organizationView.setVisible(true);
            setView(organizationView);
            VIEW.bind(getDefaultViewName(), Models.toRaw(organizationView));
        }
    }
    
    public class ProcessActionListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            String action = signal.getAction();
            if (null != action) {
                if (action.equalsIgnoreCase(EventConstants.LOAD_ACTION)) {
                    Map dataMap = MapBuilder.builder()
                            .addField("id", EventConstants.TAB_DETAIL)
                            .addField("name", EventConstants.TAB_DETAIL)
                            .addField("conponentname", getComponentName())
                            .addField("viewname", getDefaultViewName()).get();
                    Components.TABCONTAINER.listen(new Event(EventConstants.LOAD_DONE_ACTION, EventConstants.PREPARE_TAB, dataMap));
                }
            }
        }
    }
    
    public class InitNewItemComponentListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponent(signal);
        }

        void loadComponent(Signal signal) {
            VIEW.render(new String[]{"organization"});
            OrganizationView organizationView = new OrganizationView();
            organizationView.setVisible(true);
            setView(organizationView);
            VIEW.bind(getViewName(EventConstants.CREATE_VIEW), Models.toRaw(organizationView));
        }
    }
    
    public class NewItemProcessActionListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            String action = signal.getAction();
            if (null != action) {
                Map dataMap = MapBuilder.builder()
                        .addField("id", EventConstants.TAB_DETAIL)
                        .addField("name", EventConstants.TAB_DETAIL)
                        .addField("conponentname", getComponentName())
                        .addField("viewname", getViewName(EventConstants.CREATE_VIEW)).get();
                Components.TABCONTAINER.listen(new Event(EventConstants.LOAD_DONE_ACTION, EventConstants.PREPARE_TAB, dataMap));
            }
        }
    }
}
