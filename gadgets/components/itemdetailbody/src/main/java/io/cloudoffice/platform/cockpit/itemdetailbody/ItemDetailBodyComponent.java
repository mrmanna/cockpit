/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.itemdetailbody;

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
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

/**
 *
 * @author imtiaz
 */
@Model(className = "ItemdetailBody", targetId = "", properties = {
    @Property(name = "visible", type = boolean.class),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "tabcontainer", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
})
@PluggableComponent(name = "ITEMDETAILBODY", locator = "Components")
public class ItemDetailBodyComponent extends AbstractComponent<ItemdetailBody>{

    @Override
    public void setComponentName() {
        this.componentName = "itemdetailbody-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(ItemdetailBody.class.getName());
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.ITEM_DETAIL_BODY_COMPONENT, new LoadComponentListener());
        attachListener(EventConstants.ITEM_DETAIL_BODY_DATA, new LoadDetailDataListener());
    }

    @Override
    public void onError(Error message, Source source) {
    }

    public class LoadComponentListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            ViewComponentFactory.init(new String[]{"itemdetailbody"});
            ItemdetailBody itemdetailBody = new ItemdetailBody();
            itemdetailBody.setVisible(true);
            setView(itemdetailBody);
            initChildren(itemdetailBody);
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(itemdetailBody));
        }
        
        void initChildren(ItemdetailBody itemdetailBody){
            Event tabContainerloadSignal = new Event(EventConstants.LOAD_TAB_CONTAINER, EventConstants.LOAD_TAB_CONTAINER);
            itemdetailBody.getTabcontainer().setName(Components.TABCONTAINER.getComponentName());
            itemdetailBody.getTabcontainer().setModel(Components.TABCONTAINER.getDefaultViewName());
            Components.TABCONTAINER.listen(tabContainerloadSignal);
        }
    }
    
    public class LoadDetailDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadDetailData(signal);
        }

        void loadDetailData(Signal signal) {
            Components.TABCONTAINER.listen(new Event(EventConstants.LOAD_TABS_ACTION, EventConstants.LOAD_TAB_CONTAINER));
            Map selectedTab = MapBuilder.builder().addField("id", EventConstants.TAB_DETAIL).get();
            Components.TABCONTAINER.listen(new Event(EventConstants.ACTIVATE_TAB, EventConstants.ACTIVATE_TAB, selectedTab));
            String selectedItemType = Session.getSelectedItem().getValue("itemType");
            if (UtilValidate.isNotEmpty(selectedItemType)) {
                String data = (String) signal.getPackets().get(0);
                MapBuilder map = MapBuilder.query(data);
                Component component = QueryMetaModel.getComponentNameByItemType(selectedItemType);
                if (UtilValidate.isNotEmpty(component)) {
                    component.listen(new Event(EventConstants.PROCESS_DETAIL_DATA, EventConstants.PROCESS_DETAIL_DATA, map));
                }
            }
        }
    }
}
