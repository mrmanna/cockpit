/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.centercolumnlayout;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.QueryMetaModel;
import io.cloudoffice.platform.cockpit.api.ServerCallback;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.componentprocessor.PluggableComponent;
import io.cloudoffice.platform.cockpit.js.ViewComponentFactory;
import java.util.HashMap;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

/**
 *
 * @author imtiaz
 */
@Model(className = "CenterColumnLayout", targetId = "", properties = {
    @Property(name = "topcomponent", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "bottomcomponent", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class),
    @Property(name = "actionMenu", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
})

@PluggableComponent(name = "CENTERCOLUMNLAYOUT", locator = "Components")
public class CenterColumnLayoutComponent extends AbstractComponent<CenterColumnLayout> {

    @Override
    public void setComponentName() {
        this.componentName = "centercolumnlayout-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(CenterColumnLayout.class.getName());
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoadComponentListener());
        attachListener(EventConstants.LOAD_DATA, new LoadDataListener());
        attachListener(EventConstants.NEW_ITEM_LOAD, new LoadNewItemListener());
    }

    @Override
    public void onError(Error message, Source source) {
    }


    public static class SingleVirtualItemAsyncRequest extends AsyncRequest<CenterColumnLayout> {

        private String selectedVirtualItemId;
        private String selectedVirtualItemType;
        private Map<String, Object> datamap;

        public SingleVirtualItemAsyncRequest(String invokeMethod, ServerCallback handler, CenterColumnLayout view, String data) {
            super(invokeMethod, handler, view);
            prepareAsyncRequestRequiredData(data);
        }
        
        private void prepareAsyncRequestRequiredData(String data) {
            MapBuilder builder = MapBuilder.query(data);
            String itemId = builder.getValue("itemId");
            String itemType = builder.getValue("itemType");
            setSelectedVirtualItemId(itemId);
            setSelectedVirtualItemType(itemType);
            setDatamap(QueryMetaModel.getItemDetailDataPost(itemId, itemType));
        }

        @Override
        public void preparePostData() {
            put(getDatamap());
        }

        @Override
        public boolean doValidate() {
            return null != getSelectedVirtualItemId() && !getSelectedVirtualItemId().isEmpty()
                    && null != getSelectedVirtualItemType() && !getSelectedVirtualItemType().isEmpty()
                    && null != getDatamap() && !getDatamap().isEmpty();
        }

        public String getSelectedVirtualItemId() {
            return selectedVirtualItemId;
        }

        public void setSelectedVirtualItemId(String selectedVirtualItemId) {
            this.selectedVirtualItemId = selectedVirtualItemId;
        }

        public String getSelectedVirtualItemType() {
            return selectedVirtualItemType;
        }

        public void setSelectedVirtualItemType(String selectedVirtualItemType) {
            this.selectedVirtualItemType = selectedVirtualItemType;
        }

        public Map<String, Object> getDatamap() {
            return datamap;
        }

        public void setDatamap(Map<String, Object> datamap) {
            this.datamap = datamap;
        }
    }

    public static class SingleVirtualItemServerCallback extends ServerCallback<String> {
        
        @Override
        public void process(String data) {
            if (null != data) {
                processVirtualItemData(data);
            }
            hideLoaders();
        }

        private void processVirtualItemData(String data) {

            SingleVirtualItemAsyncRequest req = (SingleVirtualItemAsyncRequest) getRequest();
            String selectedItemType = req.getSelectedVirtualItemType();
            if (null != selectedItemType) {
                processSignalDataForMetaSection(selectedItemType, data);
                processSignalDataForDetailSection(data);
            }
        }
        
        private void hideLoaders() {
            Components.ITEMDETAILMETA.listen(new Event(EventConstants.HIDE_LOADER_ACTION, EventConstants.COMPONENT_LOADER));
        }

        private void processSignalDataForMetaSection(String itemType, String data) {
            Components.ITEMDETAILMETA.listen(new Event(EventConstants.ITEM_DETAIL_META_DATA, EventConstants.ITEM_DETAIL_META_DATA, QueryMetaModel.processMetaDataByItemType(itemType, data)));
        }
        
        private void processSignalDataForDetailSection(String data) {
            Components.ITEMDETAILBODY.listen(new Event(EventConstants.ITEM_DETAIL_BODY_DATA, EventConstants.ITEM_DETAIL_BODY_DATA, data));
        }
    }

    @Function
    public static void loadSelectedItemDetail(CenterColumnLayout columnLayout, String data) {

        SingleVirtualItemAsyncRequest asyncRequest = new SingleVirtualItemAsyncRequest("", new SingleVirtualItemServerCallback(), columnLayout, data);
        asyncRequest.call();
    }
    
    @Function
    public static void loadNewItem(CenterColumnLayout view, String data) {
        MapBuilder builder = MapBuilder.query(data);
        
        Components.ITEMDETAILMETA.listen(new Event(EventConstants.NEW_ITEM_META_DATA, EventConstants.NEW_ITEM_META_DATA, builder));
        Components.TABCONTAINER.listen(new Event(EventConstants.NEW_ITEM_TAB_CONTAINER_LOAD, EventConstants.NEW_ITEM_TAB_CONTAINER_LOAD, builder));
        Map selectedTab = MapBuilder.builder().addField("id", EventConstants.TAB_DETAIL).get();
        Components.TABCONTAINER.listen(new Event(EventConstants.ACTIVATE_TAB, EventConstants.ACTIVATE_TAB, selectedTab));
    }
    
    public class LoadNewItemListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            MapBuilder builder = null;
            if (!signal.getPackets().isEmpty()) {
                String data = (String) signal.getPackets().get(0);
                builder = MapBuilder.query(data);
            }
            if (null != builder) {
                invoke("loadNewItem", builder.toJSON());
            }
        }
    }
    
    public class LoadDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadItemDetail();
        }

        void loadItemDetail() {
            MapBuilder selectedItem = Session.getSelectedItem();
            if (null != selectedItem) {
                String itemId = selectedItem.getValue("itemId");
                String itemType = selectedItem.getValue("itemType");
                if (null != itemId && null != itemType) {
                    invoke("loadSelectedItemDetail", selectedItem);
                }
            }
        }
    }

    public class LoadComponentListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            ViewComponentFactory.init(new String[]{"centercolumnlayout"});
            CenterColumnLayout centerColumnLayout = new CenterColumnLayout();
            setView(centerColumnLayout);
            initChildren(signal, centerColumnLayout);
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(centerColumnLayout));
        }

        void initChildren(Signal signal, CenterColumnLayout layout) {
            loadTopComponent(layout);
            loadBottomComponent(layout);
            loadActionMenuComponent(layout);
        }

        void loadTopComponent(CenterColumnLayout layout) {

            // TOP : item detail meta
            Event signalTop = new Event(EventConstants.INIT_COMPONENT_ACTION, EventConstants.ITEM_DETAIL_META_COMPONENT);
            layout.getTopcomponent().setName(Components.ITEMDETAILMETA.getComponentName());
            layout.getTopcomponent().setModel(Components.ITEMDETAILMETA.getDefaultViewName());
            Components.ITEMDETAILMETA.listen(signalTop);
        }
        
        void loadBottomComponent(CenterColumnLayout layout) {

            // BOTTOM : item detail meta
            Event signalBottom = new Event(EventConstants.ITEM_DETAIL_BODY_COMPONENT, EventConstants.ITEM_DETAIL_BODY_COMPONENT);
            layout.getBottomcomponent().setName(Components.ITEMDETAILBODY.getComponentName());
            layout.getBottomcomponent().setModel(Components.ITEMDETAILBODY.getDefaultViewName());
            Components.ITEMDETAILBODY.listen(signalBottom);
        }
        
        void loadActionMenuComponent(CenterColumnLayout layout) {
            layout.getActionMenu().setName(Components.ACTIONMENU.getComponentName());
            layout.getActionMenu().setModel(Components.ACTIONMENU.getDefaultViewName());
            Components.ACTIONMENU.listen(new Event(EventConstants.LOGIN_SUCCESS, EventConstants.LOGIN_SUCCESS));
        }
    }
}
