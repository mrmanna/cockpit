/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.recentslist;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.Logger;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.QueryMetaModel;
import io.cloudoffice.platform.cockpit.api.ServerCallback;
import io.cloudoffice.platform.cockpit.api.Session;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.api.UtilValidate;
import io.cloudoffice.platform.cockpit.componentprocessor.PluggableComponent;
import io.cloudoffice.platform.cockpit.js.MomentJS;
import io.cloudoffice.platform.cockpit.js.MomentTimeZoneWithData;
import io.cloudoffice.platform.cockpit.js.ViewComponentFactory;
import java.io.Reader;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

@Model(className = "RecentsListView", targetId = "", properties = {
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "selectedFilterType", type = String.class),
    @Property(name = "hasMoreConversation", type = boolean.class),
    @Property(name = "conversationNextPageNumber", type = int.class),
    @Property(name = "recentConversationList", type = io.cloudoffice.platform.cockpit.recentslist.RecentsListData.class, array = true),
    @Property(name = "newItemMenu", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
})

@PluggableComponent(name = "RECENTSLIST", locator = "Components")
public class RecentsListComponent extends AbstractComponent<RecentsListView> {

    @Override
    public void setComponentName() {
        this.componentName = "recents-list-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(RecentsListView.class.getName());
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.LOAD_RECENT_DATA, new LoadRecentDataListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Function
    public static void selectConversation(RecentsListView view, RecentsListData data) {
        String itemId = data.getItemId();
        String itemType = data.getItemType();
        String itemName = data.getItemName();
        if (null != itemId && null != itemType && null != itemName) {
            MapBuilder conversation = MapBuilder.builder()
                    .addField("itemId", itemId)
                    .addField("itemType", itemType)
                    .addField("itemName", itemName);
            Event signal = new Event(EventConstants.FILTER_DEFAULT, EventConstants.FILTER_REQUEST, conversation);
            Components.SEARCHBOX.listen(signal);
        } else {
            Logger.log("Conversation data not available.");
        }
    }

    @Function
    public static void loadMoreConversation(RecentsListView view) {
        Map dataMap = MapBuilder.builder()
                .addField("filter", view.getSelectedFilterType())
                .addField("requestViaLoadMoreMessege", true).get();
        Event signal = new Event(EventConstants.LOAD_RECENT_DATA, EventConstants.LOAD_RECENT_DATA, dataMap);
        Components.RECENTSLIST.listen(signal);
    }

    private static boolean isTargetedTabSelected(RecentsListView view, String relatedItemType) {
        String selectedTabName = view.getSelectedFilterType();
        if (UtilValidate.isNotEmpty(relatedItemType) && UtilValidate.isNotEmpty(selectedTabName)) {
            if (selectedTabName.equalsIgnoreCase("All")
                    || selectedTabName.equalsIgnoreCase(relatedItemType)) {
                return true;
            }
        }

        return false;
    }

    public static boolean isTargetedWorkspaceSelected(MapBuilder message) {

        String workspaceItemId = Session.getCompany().getValue("companyId");
        String relatedItems = message.getString("relatedItemName");
        List<Map<String, Object>> relatedItemList = MapBuilder.query(relatedItems, true).getArray();
        for (Map<String, Object> relatedItem : relatedItemList) {
            String relatedItemId = (String) relatedItem.get("itemId");
            String relatedItemType = (String) relatedItem.get("itemType");
            boolean isScopeGroup = (boolean) relatedItem.get("scopeGroup");

            if (isScopeGroup && relatedItemId.equalsIgnoreCase(workspaceItemId)
                    && relatedItemType.equalsIgnoreCase(QueryMetaModel.GROUP)) {

                return true;
            }
        }

        return false;
    }

    public static void updateItemMessageOnRecentList(RecentsListView view, String relatedItemId,
            String relatedItemType, String relatedItemName, MapBuilder message) {

        List<RecentsListData> conversationList = view.getRecentConversationList();
        RecentsListData selectedItem = null;

        boolean isFoundOnList = false;
        String lastMessage = message.getString("itemName");
        String lastMessageCreator = message.getString("createdBy");
        String lastMessageCreatorAvatar = message.getString("avatar");
        String lastMessageCreatedTimeInMS = message.getString("createDateInMS");
        String lastMessageCreatedTime = MomentTimeZoneWithData.formatTimeWithClientZone(lastMessageCreatedTimeInMS, "hh:mm:ss A");

        String currentSelectedItemId = Session.getSelectedItem().getValue("itemId");
        String currentSelectedItemType = Session.getSelectedItem().getValue("itemType");
        int index = 0;

        if (conversationList.size() > 0) {
            for (RecentsListData recentData : conversationList) {
                String itemId = recentData.getItemId();
                String itemType = recentData.getItemType();

                if (itemId.equalsIgnoreCase(relatedItemId) && itemType.equalsIgnoreCase(relatedItemType)) {
                    isFoundOnList = true;
                    //TODO: Update message here
                    break;
                }
                selectedItem = recentData.clone();
                index++;
            }
            if (UtilValidate.isNotEmpty(selectedItem)) {
                conversationList.remove(index);
                conversationList.add(0, selectedItem);
            }
        }

        if (!isFoundOnList && isTargetedWorkspaceSelected(message) && isTargetedTabSelected(view, relatedItemType)) {

            RecentsListData addnew = new RecentsListData();
            addnew.setItemId(relatedItemId);
            addnew.setItemName(relatedItemName);
            addnew.setItemType(relatedItemType);
            addnew.setAvatar(lastMessageCreatorAvatar);
            addnew.setLastMessage(lastMessage);
            addnew.setLastMessageCreator(lastMessageCreator);
            addnew.setLastMessageCreatorAvatar(lastMessageCreatorAvatar);
            addnew.setLastMessageCreateTime(lastMessageCreatedTime);
            if (!(currentSelectedItemId.equalsIgnoreCase(relatedItemId) && currentSelectedItemType.equalsIgnoreCase(relatedItemType))) {
                addnew.setUnreadMessageSize(addnew.getUnreadMessageSize() + 1);
            }

            conversationList.add(0, addnew);
        }
    }

    @Function
    public static void updateRecentConversationList(RecentsListView view, String data) {

        // Reader reader = new StringReader(data);
        MapBuilder map = MapBuilder.query(data);

        // String relatedItems = map.getString("relatedItemName");
        List<Map<String, Object>> relatedItemList = map.getList("relatedItemName");
        for (Map<String, Object> relatedItem : relatedItemList) {
            String relatedItemId = (String) relatedItem.get("itemId");
            String relatedItemName = (String) relatedItem.get("itemName");
            String relatedItemType = (String) relatedItem.get("itemType");
            boolean isScopeGroup = (boolean) relatedItem.get("scopeGroup");
            if (!isScopeGroup) {
                updateItemMessageOnRecentList(view, relatedItemId, relatedItemType, relatedItemName, map);
            }
        }
    }

    @Function
    public static void setRecentConversationList(RecentsListView view, String data) {
        view.getRecentConversationList().clear();
        List<RecentsListData> list = new ArrayList<RecentsListData>();
        List<Map<String, Object>> result = MapBuilder.query(data).getList("result");

        for (Map<String, Object> map : result) {
            String itemId = (String) map.get("itemId");
            if (itemId.equalsIgnoreCase("-10")) {
                view.setHasMoreConversation((boolean) map.get("hasMore"));
                long number = Long.valueOf(String.valueOf(map.get("nextPageNumber")));
                view.setConversationNextPageNumber(Integer.valueOf(String.valueOf(number)));
            } else {
                RecentsListData item = new RecentsListData();
                item.setItemId(itemId);
                String itemType = (String) map.get("itemType");
                itemType = (itemType.equalsIgnoreCase(QueryMetaModel.COLLECTION)) ? QueryMetaModel.CHANNEL : itemType;
                item.setItemType(itemType);
                item.setItemName((String) map.get("itemName"));
                item.setItemShortName((String) map.get("itemShortName"));
                item.setAvatar((String) map.get("avatar"));
                item.setLastMessage((String) map.get("lastMessage"));
                item.setLastMessageCreator((String) map.get("lastMessageCreator"));
                item.setLastMessageCreatorAvatar((String) map.get("lastMessageCreatorAvatar"));
                long unreadMessageSize = map.get("unreadMessageSize") != null ? Long.valueOf(String.valueOf(map.get("unreadMessageSize"))) : 0;
                item.setUnreadMessageSize(Integer.valueOf(String.valueOf(unreadMessageSize)));
                item.setItemTypeIconClass(QueryMetaModel.getItemTypeIconClass((String) map.get("itemType")));

                String lastMessageCreateTimeMS = (String) map.get("lastMessageCreateTimeMS");
                item.setLastMessageCreateTimeMS(Long.valueOf(lastMessageCreateTimeMS));
                boolean isSameDay = MomentJS.isToday(lastMessageCreateTimeMS);
                if (isSameDay) {
                    String time = MomentTimeZoneWithData.formatTimeWithClientZone(lastMessageCreateTimeMS, "hh:mm:ss A");
                    item.setLastMessageCreateTime(time);
                } else {
                    String date = MomentTimeZoneWithData.formatTimeWithClientZone(lastMessageCreateTimeMS, "DD-MM-YYYY");
                    item.setLastMessageCreateTime(date);
                }

                list.add(item);
            }
        }
        sortRecentConversationList(view, list);
        view.getLoader().setActive(false);
    }

    public static void sortRecentConversationList(RecentsListView view, List<RecentsListData> list) {

        if (list.size() > 0) {
            Collections.sort(list, new Comparator<RecentsListData>() {
                @Override
                public int compare(RecentsListData m1, RecentsListData m2) {
                    if (m1.getLastMessageCreateTimeMS() == m2.getLastMessageCreateTimeMS()) {
                        return 0;
                    }
                    return (m1.getLastMessageCreateTimeMS() > m2.getLastMessageCreateTimeMS()) ? -1 : 1;
                }
            });
            view.getRecentConversationList().addAll(list);
        }
    }

    /**
     * Sends server a request to publish conversation list in message queue
     *
     * @param view
     * @param data
     */
    @Function
    public static void publishConversation(RecentsListView view, String data) {
        MapBuilder filterbuilder = MapBuilder.query(data);
        final String filterType = filterbuilder.getString("filter");
        new AsyncRequest<RecentsListView>(fetchRecentConversationListEndpoint, view) {
            @Override
            public void preparePostData() {

                MapBuilder user = Session.getUser();
                MapBuilder company = Session.getCompany();

                Map<String, Object> map = new HashMap<String, Object>();
                map.put("personItemId", user.getValue("itemId"));
                map.put("pageNumber", getView().getConversationNextPageNumber());
                map.put("dest", user.getValue("mqDestination"));
                map.put("loadMore", getView().isHasMoreConversation());
                map.put("scopeGroupId", company.getValue("itemId"));
                map.put("filterType", filterType);

                put(getEndpoint(), map);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, String>>>() {

            @Override
            public void process(String data) {
                //  System.out.print(data);
                // JSUIUtils.console("RECENT DATA Requested: ");
            }
        });
    }
    public static final String fetchRecentConversationListEndpoint = "\"/VirtualItem-portlet.virtualnoteitem/getMessengerRecentConversation\"";

    private class LoadRecentDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            view.getLoader().setActive(true);
            Object data = signal.getPackets().get(0);
            MapBuilder map = MapBuilder.query((Map) data);

            String filter = "All";
            if (UtilValidate.isNotEmpty(map)) {
                filter = map.getString("filter");
            }

            boolean requestViaLoadMoreMessege = map.getBoolean("requestViaLoadMoreMessege");
            if (!requestViaLoadMoreMessege) {
                view.setConversationNextPageNumber(1);
            }

            view.setSelectedFilterType(filter);
            invoke("publishConversation", MapBuilder.builder().addField("filter", filter).toJSON());
        }
    }

    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            ViewComponentFactory.init(new String[]{
                "recents-list"});
            RecentsListView recentsList = new RecentsListView();
            setView(recentsList);
            initChildren(signal, getView());
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(recentsList));
        }
    }

    void initChildren(Signal signal, RecentsListView view) {
        loadNewItemMenu(signal, view);
    }

    void loadNewItemMenu(Signal signal, RecentsListView view) {
        view.getNewItemMenu().setName(Components.NEWITEMMENU.getComponentName());
        view.getNewItemMenu().setModel(Components.NEWITEMMENU.getDefaultViewName());
        Components.NEWITEMMENU.listen(signal);
    }

    @Model(className = "RecentsListData", targetId = "", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemType", type = String.class),
        @Property(name = "itemName", type = String.class),
        @Property(name = "itemShortName", type = String.class),
        @Property(name = "avatar", type = String.class),
        @Property(name = "active", type = boolean.class),
        @Property(name = "actionStatusBackground", type = String.class),
        @Property(name = "actionNameClass", type = String.class),
        @Property(name = "lastMessageCreateTime", type = String.class),
        @Property(name = "lastMessageCreateTimeMS", type = long.class),
        @Property(name = "lastMessage", type = String.class),
        @Property(name = "lastMessageCreatorAvatar", type = String.class),
        @Property(name = "lastMessageCreator", type = String.class),
        @Property(name = "unreadMessageSize", type = int.class),
        @Property(name = "itemTypeIconClass", type = String.class)
    })

    public class RecentsListDataModel {

    }
}
