/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.tabcontainer;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.Component;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.QueryMetaModel;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.api.UtilValidate;
import io.cloudoffice.platform.cockpit.componentprocessor.PluggableComponent;
import io.cloudoffice.platform.cockpit.js.ViewComponentFactory;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.ModelOperation;
import net.java.html.json.Models;
import net.java.html.json.OnPropertyChange;
import net.java.html.json.Property;

/**
 *
 * @author imtiaz
 */
@Model(className = "TabContainer", targetId = "", properties = {
    @Property(name = "visible", type = boolean.class),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "tabs", type = Tab.class, array = true),
    @Property(name = "selectedTab", type = Tab.class)
})

@PluggableComponent(name = "TABCONTAINER", locator = "Components")
public class TabcontainerComponent extends AbstractComponent<TabContainer>{
    
    @Override
    public void setComponentName() {
        this.componentName = "tabcontainer-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(TabContainer.class.getName());
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOAD_TAB_CONTAINER, new LoadTabContainerComponentListener());
        attachListener(EventConstants.PREPARE_TAB, new PrepareTabListener());
        attachListener(EventConstants.ACTIVATE_TAB, new ActivateTabListener());
        attachListener(EventConstants.NEW_ITEM_TAB_CONTAINER_LOAD, new LoadNewItemTabContainerComponentListener());
    }

    @Override
    public void onError(Error message, Source source) {
    }
    
    @Function
    public static void activateTab(TabContainer tabContainer, Tab data) {
        if (!tabContainer.getTabs().isEmpty()) {
            String selectedTabId = data.getId();
            for (Tab tab : tabContainer.getTabs()) {
                if (null != selectedTabId
                        && null != tab.getId()
                        && tab.getId().equalsIgnoreCase(selectedTabId)) {
                    tab.setActive(true);
                    tabContainer.setSelectedTab(tab);
                } else {
                    tab.setActive(false);
                }
            }
        }
    }
    
    @OnPropertyChange("selectedTab")
    public static void onChangeSelectedTab(TabContainer tabContainer) {
        Tab selectedTab = tabContainer.getSelectedTab();
        if (UtilValidate.isNotEmpty(selectedTab.getId())) {
            Components.get(selectedTab.getComponent().getModel()).listen(new Event(EventConstants.SHOW_LOADER_ACTION, EventConstants.COMPONENT_LOADER));
            Components.get(selectedTab.getComponent().getModel()).listen(new Event(EventConstants.LOAD_DATA, EventConstants.LOAD_DATA));
        }
    }

    
    
    
    
    
    
    
    
    @Function
    public static void activateTabByTabId(TabContainer tabContainer, String data) {
        if (!tabContainer.getTabs().isEmpty()) {
            MapBuilder builder = MapBuilder.query(data);
            String selectedTabId = builder.getString("id");
            for (Tab tab : tabContainer.getTabs()) {
                if (null != selectedTabId
                        && null != tab.getId()
                        && tab.getId().equalsIgnoreCase(selectedTabId)) {
                    tab.setActive(true);
                    tabContainer.setSelectedTab(tab);
                } else {
                    tab.setActive(false);
                }
            }
        }
    }
    public class ActivateTabListener implements EventListener{

        @Override
        public void onReceive(Signal signal) {
            Object data = signal.getPackets().get(0);
            invoke("activateTabByTabId", MapBuilder.query((Map) data));
        }
    }

    
    
    
    
    
    
    
    
    
    @Function
    public static void loadTab(TabContainer tabContainer, String data) {
        
        MapBuilder builder = MapBuilder.query(data);
        String tabId = builder.getString("id");
        String tabName = builder.getString("name");
        String conponentname = builder.getString("conponentname");
        String viewname = builder.getString("viewname");
        
        Tab tab = new Tab();
        tab.setId(null!=tabId?tabId:"");
        tab.setName(null!=tabName?tabName:"");
        tab.getComponent().setName(null!=conponentname?conponentname:"");
        tab.getComponent().setModel(null!=viewname?viewname:"");
        tab.setActive(false);
        tabContainer.getTabs().add(tab);
        
    }    
    public class PrepareTabListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            processAction(signal);
        }

        void processAction(Signal signal) {
            String action = signal.getAction();
            if (null != action) {
                if (action.equalsIgnoreCase(EventConstants.LOAD_DONE_ACTION)) {
                    Object data = signal.getPackets().get(0);
                    invoke("loadTab", MapBuilder.query((Map) data));
                }
            }
        }
    }

    
    
    
    
    
    
    
    
    
    @Function
    public static void initTabComponents(TabContainer tabContainer, String data) {
        tabContainer.getTabs().clear();
        MapBuilder builder = MapBuilder.query(data);
        String itemType = builder.getValue("itemType");
        if (UtilValidate.isNotEmpty(itemType)) {
            
            //detail
            Component component = QueryMetaModel.getComponentNameByItemType(itemType);
            if (UtilValidate.isNotEmpty(component)) {
                component.listen(new Event(EventConstants.LOGIN_SUCCESS, EventConstants.LOGIN_SUCCESS));
                component.listen(new Event(EventConstants.LOAD_ACTION, EventConstants.PROCESS_ACTION));
            }
            
            // message
            Components.MESSAGE.listen(new Event(EventConstants.LOGIN_SUCCESS, EventConstants.LOGIN_SUCCESS));
            Components.MESSAGE.listen(new Event(EventConstants.LOAD_ACTION, EventConstants.PROCESS_ACTION));

        }
    }
    public class LoadTabContainerComponentListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            String action = signal.getAction();
            if(null!=action){
                switch (action){
                    case EventConstants.LOAD_TAB_CONTAINER:
                        loadComponents(signal);
                        break;
                    case EventConstants.LOAD_TABS_ACTION:
                        decorateTabs(signal);
                        break;
                    default:
                        break;
                }
            }
        }

        void loadComponents(Signal signal) {
            ViewComponentFactory.init(new String[]{"tabcontainer"});
            TabContainer tabContainer = new TabContainer();
            tabContainer.setVisible(true);
            setView(tabContainer);
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(tabContainer));
        }
        
        void decorateTabs(Signal signal) {
            MapBuilder selectedItem = Session.getSelectedItem();
            if (null != selectedItem) {
                String itemId = selectedItem.getValue("itemId");
                String itemType = selectedItem.getValue("itemType");
                if (null != itemId && null != itemType) {
                    invoke("initTabComponents", selectedItem);
                }
            }
        }
    }





    
    @Function
    static void initNewItemTabComponents(TabContainer tabContainer, String data) {
        tabContainer.getTabs().clear();

        MapBuilder builder = MapBuilder.query(data);
        String itemType = builder.getString("itemType");
        
        if (UtilValidate.isNotEmpty(itemType)) {
            Component component = QueryMetaModel.getComponentNameByItemType(itemType);
            if (UtilValidate.isNotEmpty(component)) {
                component.listen(new Event(EventConstants.NEW_ITEM_INIT_COMPONENT, EventConstants.NEW_ITEM_INIT_COMPONENT));
                component.listen(new Event(EventConstants.NEW_ITEM_PROCESS_ACTION, EventConstants.NEW_ITEM_PROCESS_ACTION));
            }
        }
    }
    
    public class LoadNewItemTabContainerComponentListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            decorateNewItemTab(signal);
        }
        
        void decorateNewItemTab(Signal signal) {
            MapBuilder data = null;
            if (!signal.getPackets().isEmpty()) {
                data = (MapBuilder) signal.getPackets().get(0);
            }
            
            String itemType = data.getString("itemType");
            if (UtilValidate.isNotEmpty(itemType)) {
                invoke("initNewItemTabComponents", data);
            }
        }
    }
    
    

    
    
    
    @Model(className = "Tab", targetId = "", properties = {
        @Property(name = "id", type = String.class),
        @Property(name = "name", type = String.class),
        @Property(name = "active", type = boolean.class),
        @Property(name = "component", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    })
    public class TabModel {
        
    }
}
