/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.itemdetailmeta;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
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
import io.cloudoffice.platform.cockpit.componentprocessor.PluggableComponent;
import io.cloudoffice.platform.cockpit.js.ViewComponentFactory;
import java.util.List;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

/**
 *
 * @author imtiaz
 */
@Model(className = "ItemdetailMeta", targetId = "", properties = {
    @Property(name = "visible", type = boolean.class),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "itemName", type = String.class),
    @Property(name = "itemType", type = String.class),
    @Property(name = "itemIcon", type = String.class),
    @Property(name = "itemImage", type = String.class),
    @Property(name = "emailAddress", type = String.class),
    @Property(name = "persPhone", type = String.class),
    @Property(name = "persMobile", type = String.class),
    @Property(name = "tagList", type = Item.class, array = true),
    @Property(name = "relateList", type = Item.class, array = true),
    @Property(name = "shareList", type = Item.class, array = true)
})

@PluggableComponent(name = "ITEMDETAILMETA", locator = "Components")
public class ItemdetailMetaComponent extends AbstractComponent<ItemdetailMeta> {

    @Override
    public void setComponentName() {
        this.componentName = "itemdetailmeta-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(ItemdetailMeta.class.getName());
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.ITEM_DETAIL_META_COMPONENT, new LoadComponentListener());
        attachListener(EventConstants.ITEM_DETAIL_META_DATA, new LoadItemDetailMetaDataListener());
        attachListener(EventConstants.COMPONENT_LOADER, new ComponentLoaderListener());
        attachListener(EventConstants.NEW_ITEM_META_DATA, new LoadNewItemMetaDataListener());
    }

    @Override
    public void onError(Error message, Source source) {
    }

    @Function
    public static void showActionMenu(ItemdetailMeta view) {
        
        MapBuilder selectedItem = Session.getSelectedItem();
        Components.ACTIONMENU.listen(new Event(EventConstants.TOOGLE_ACTION_MENU, EventConstants.TOOGLE_ACTION_MENU, selectedItem));
    }
    
    @Function
    static void clearMetaData(ItemdetailMeta meta) {
        meta.setVisible(false);
        meta.setItemName("");
        meta.setItemType("");
        meta.setItemIcon("");
        meta.setItemImage("");
        meta.setEmailAddress("");
        meta.setPersPhone("");
        meta.setPersMobile("");
        meta.getTagList().clear();
        meta.getRelateList().clear();
        meta.getShareList().clear();
    }
    
    @Function
    static void loadNewItemMetaData(ItemdetailMeta meta, String data) {

        clearMetaData(meta);
        MapBuilder builder = MapBuilder.query(data);
        meta.setVisible(true);
        meta.setItemName(builder.getString("itemName"));
        String itemType = builder.getString("itemType");
        meta.setItemType(itemType);
        if (null != itemType && itemType.equalsIgnoreCase(QueryMetaModel.PERSON)) {
            meta.setItemImage("../../images/user_male_portrait.png");
        } else {
            meta.setItemIcon(builder.getString("itemIcon"));
        }
        meta.setItemIcon(builder.getString("itemIcon"));
    }
    
    public class LoadNewItemMetaDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            MapBuilder data = null;
            if (!signal.getPackets().isEmpty()) {
                data = (MapBuilder) signal.getPackets().get(0);
            }
            if (null!=data) {
                invoke("loadNewItemMetaData", data);
            }
        }
    }
    
    public class ComponentLoaderListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            String action = signal.getAction();
            if (null != action) {
                switch (action) {
                    case EventConstants.SHOW_LOADER_ACTION:
                        invoke("showComponentLoader");
                        break;
                    case EventConstants.HIDE_LOADER_ACTION:
                        invoke("hideComponentLoader");
                        break;
                    default:
                        invoke("hideComponentLoader");
                        break;
                }
            }
        }
    }

    @Function
    static void showComponentLoader(ItemdetailMeta meta) {
        meta.getLoader().setActive(true);
        meta.setVisible(false);
    }

    @Function
    static void hideComponentLoader(ItemdetailMeta meta) {
        meta.getLoader().setActive(false);
        meta.setVisible(true);
    }









    
    public class LoadItemDetailMetaDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            MapBuilder data = (MapBuilder) signal.getPackets().get(0);
            if (null != data) {
                invoke("loadMetaData", data.toJSON());
            }
        }
    }

    @Function
    static void loadMetaData(ItemdetailMeta meta, String data) {

        clearMetaData(meta);
        MapBuilder builder = MapBuilder.query(data);
        meta.setVisible(true);
        meta.setItemName(builder.getString("itemName"));
        String itemType = builder.getString("itemType");
        meta.setItemType(itemType);
        if (null != itemType && itemType.equalsIgnoreCase(QueryMetaModel.PERSON)) {
            meta.setItemImage(builder.getString("itemImage"));
            meta.setEmailAddress(builder.getString("emailAddress"));
        } else {
            meta.setItemIcon(builder.getString("itemIcon"));
        }
        meta.setPersPhone(builder.getValue("persPhone"));
        meta.setPersMobile(builder.getValue("persMobile"));
        setTagRelateShareMeta(meta, builder);
        
        // hide loader
        meta.getLoader().setActive(false);
    }
    
    static void setTagRelateShareMeta(ItemdetailMeta meta, MapBuilder builder) {
        
        List<Map<String, Object>> tagList = MapBuilder.query(builder.getValue("tagItemName"), true).getArray();
        List<Map<String, Object>> relateList = MapBuilder.query(builder.getValue("relatedItemName"), true).getArray();
        List<Map<String, Object>> shareList = MapBuilder.query(builder.getValue("shareItemName"), true).getArray();

        for (Map<String, Object> tag : tagList) {
            Item item = new Item();
            item.setItemId((String) tag.get("id"));
            item.setItemName((String) tag.get("name"));
            item.setItemType((String) tag.get("type"));
            meta.getTagList().add(item);
        }
        
        for (Map<String, Object> relate : relateList) {
            Item item = new Item();
            item.setItemId((String) relate.get("itemId"));
            item.setItemName((String) relate.get("itemName"));
            item.setItemType((String) relate.get("itemType"));
            meta.getRelateList().add(item);
        }
        
        for (Map<String, Object> share : shareList) {
            Item item = new Item();
            int id = (int) share.get("itemId");
            item.setItemId(String.valueOf(id));
            item.setItemName((String) share.get("itemName"));
            item.setItemType((String) share.get("itemType"));
            meta.getShareList().add(item);
        }
    }
    
    
    
    
    
    public class LoadComponentListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            String action = signal.getAction();
            if (null != action) {
                switch (action) {
                    case EventConstants.INIT_COMPONENT_ACTION:
                        loadComponents(signal);
                        break;
                    case EventConstants.DISPOSE_COMPONENT_ACTION:
                        break;
                    default:
                        break;
                }
            }
        }

        void loadComponents(Signal signal) {
            ViewComponentFactory.init(new String[]{"itemdetailmeta"});
            ItemdetailMeta itemdetailMeta = new ItemdetailMeta();
            setView(itemdetailMeta);
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(itemdetailMeta));
        }
    }
    
    @Model(className = "Item", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemType", type = String.class)
    })
    public class ItemModel {

    }
}
