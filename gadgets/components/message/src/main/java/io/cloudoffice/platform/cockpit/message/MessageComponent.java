/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.message;

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
import io.cloudoffice.platform.cockpit.api.UtilValidate;
import io.cloudoffice.platform.cockpit.componentprocessor.PluggableComponent;
import io.cloudoffice.platform.cockpit.js.Moment;
import io.cloudoffice.platform.cockpit.js.ViewComponentFactory;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
@Model(className = "Message", targetId = "", properties = {
    @Property(name = "visible", type = boolean.class),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "message", type = String.class),
    @Property(name = "enterpressed", type = boolean.class),
    @Property(name = "attachment", type = Attachment.class),
    @Property(name = "messageList", type = MessageData.class, array=true),
    @Property(name = "hasMoreMessage", type = boolean.class),
    @Property(name = "nextPageNumber", type = String.class)
})

@PluggableComponent(name = "MESSAGE", locator = "Components")
public class MessageComponent extends AbstractComponent<Message> {
    
    private static MessageFilterProcessor filterProcessor = null;

    @Override
    public void setComponentName() {
        this.componentName = "message-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(Message.class.getName());
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.PROCESS_ACTION, new ProcessActionListener());
        attachListener(EventConstants.COMPONENT_LOADER, new ComponentLoaderListener());
        attachListener(EventConstants.LOAD_DATA, new LoadDataListener());
    }

    @Override
    public void onError(Error message, Source source) {
    }

    
    @OnPropertyChange(value = "enterpressed")
    static void enterPressedAction(Message message) {
        if (message.isEnterpressed()) {
        }
        message.setEnterpressed(false);
    }
    
    @ModelOperation
    public static void clearMessageBox(Message message) {
        message.setMessage("");
    }
    
    
    @Function
    public static void sendMessage(Message message) {
        // message
        String messageText = message.getMessage();
        MessageData messageData = getNewlyCreatedMessageData(messageText);
        if (UtilValidate.isNotEmpty(messageText) && UtilValidate.isNotEmpty(messageData.getMessageCreatorId())) {
            message.getMessageList().add(messageData);
            clearMessageBox(message);

        } else {

            // TODO: handle error while sending message but no message there
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
    static void showComponentLoader(Message message) {
        if(!message.getLoader().isActive()){
            message.getLoader().setActive(true);
        }
    }

    @Function
    static void hideComponentLoader(Message message) {
        message.getLoader().setActive(false);
    }
    
    
    
    
    
    
    
    
    
    
    public class LoadDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            getAllMessages();
        }

        void getAllMessages() {
            invoke("configureComponentInitData");
            invoke("getAllMessages");
        }
    }

    @Function
    public static void getAllMessages(Message message) {
        MapBuilder selectedItem = Session.getSelectedItem();
        if (null != selectedItem) {
            String itemId = selectedItem.getValue("itemId");
            String itemType = selectedItem.getValue("itemType");
            if (null != itemId && null != itemType) {
                showComponentLoader(message);
                GetAllMessagesAsyncRequest asyncRequest = new GetAllMessagesAsyncRequest(ENDPOINT, new GetAllMessagesServerCallback(), message, selectedItem.toJSON());
                asyncRequest.call();
            } else {
                // TODO : no session available alert
            }
        }
    }
    
    public static final String ENDPOINT = "\"/VirtualItem-portlet.virtualnoteitem/getAllMsssages\"";

    public static class GetAllMessagesAsyncRequest extends AsyncRequest<Message> {

        public GetAllMessagesAsyncRequest(String invokeMethod, ServerCallback handler, Message view, String data) {
            super(invokeMethod, handler, view);
            prepareAsyncRequestRequiredData(view, data);
        }

        private void prepareAsyncRequestRequiredData(Message view, String data) {
            MapBuilder builder = MapBuilder.query(data);
            // add an extra filter named "nextPageNumber" to the mapbuilder
            String nextPageNumber = (null != view.getNextPageNumber() && !view.getNextPageNumber().isEmpty()) ? view.getNextPageNumber() : "1";
            builder.addField("nextPageNumber", nextPageNumber);
            filterProcessor = new MessageFilterProcessor(builder.toJSON());
        }

        @Override
        public void preparePostData() {
            put(getEndpoint(), filterProcessor.getDatamap());
        }

        @Override
        public boolean doValidate() {
            return filterProcessor.isValidate();
        }
    }

    public static class GetAllMessagesServerCallback extends ServerCallback<String> {

        @Override
        public void process(String data) {
        }

    }

    public static class MessageFilterProcessor {

        private String selectedVirtualItemId;
        private String selectedVirtualItemType;
        private String selectedVirtualItemName;
        private long selectedCompanyId;
        private String messageDestination;
        private long nextPageNumber;
        private Map<String, Object> datamap;

        public MessageFilterProcessor(String data) {
            saveMessageQueryInfo(data);
        }

        private void saveMessageQueryInfo(String data) {
            MapBuilder builder = MapBuilder.query(data);
            String itemId = null != builder.getValue("itemId") ? builder.getValue("itemId") : "";
            String itemType = null != builder.getValue("itemType") ? builder.getValue("itemType") : "";
            String itemName = null != builder.getValue("itemName") ? builder.getValue("itemName") : "";
            String pageNumber = null != builder.getValue("nextPageNumber") ? builder.getValue("nextPageNumber") : "1";

            // save selected virtual item info
            setSelectedVirtualItemId(null != itemId ? itemId : "");
            setSelectedVirtualItemType(null != itemType ? itemType : "");
            setSelectedVirtualItemName(null != itemName ? itemName : "");

            // save selected company
            MapBuilder selectedCompany = Session.getCompany();
            if (null != selectedCompany) {
                String companyId = selectedCompany.getValue("itemId");
                setSelectedCompanyId((null != companyId && !companyId.isEmpty()) ? Long.valueOf(companyId) : 0);
            }

            // save mqtt destination
            MapBuilder user = Session.getUser();
            if (null != user) {
                setMessageDestination(user.getValue("mqDestination"));
            }

            // save next page number
            setNextPageNumber(Long.valueOf(pageNumber));

            // prepare post data
            saveAsyncRequestPostData();
        }

        private void saveAsyncRequestPostData() {

            Map<String, Object> map = new HashMap<>();
            if (null != getSelectedVirtualItemType()) {
                String searchKey = "";
                map.put("searchKey", "'" + searchKey + "'");
                map.put("selectedItemId", getSelectedVirtualItemId());
                map.put("scopeGroupId", getSelectedCompanyId());
                map.put("dest", getMessageDestination());
                map.put("pageNumber", getNextPageNumber());

                List<Map<String, Object>> listitems = new ArrayList<>();
                Map<String, Object> filter = new HashMap<>();
                // general filter
                filter.put("itemId", QueryMetaModel.getItemTypeId(QueryMetaModel.CHAT));
                filter.put("itemType", "ITEM_TYPE");
                filter.put("itemName", QueryMetaModel.NOTE);
                listitems.add(filter);

                if (getSelectedVirtualItemType().equalsIgnoreCase(QueryMetaModel.CHANNEL)) {
                    map.put("selectedItemType", QueryMetaModel.COLLECTION);
                    // collection filter
                    filter = new HashMap<>();
                    filter.put("itemId", Long.valueOf(getSelectedVirtualItemId()));
                    filter.put("itemType", QueryMetaModel.COLLECTION_CHAT);
                    filter.put("itemName", getSelectedVirtualItemName());
                    listitems.add(filter);
                    // related filter
                    filter = new HashMap<>();
                    filter.put("itemId", Long.valueOf(getSelectedVirtualItemId()));
                    filter.put("itemType", QueryMetaModel.COLLECTION);
                    filter.put("itemName", QueryMetaModel.COLLECTION);
                    filter.put("relatedItemType", QueryMetaModel.COLLECTION);
                    listitems.add(filter);
                } else {
                    map.put("selectedItemType", getSelectedVirtualItemType());
                    // related filter
                    filter = new HashMap<>();
                    filter.put("itemId", Long.valueOf(getSelectedVirtualItemId()));
                    filter.put("itemType", getSelectedVirtualItemType());
                    filter.put("itemName", getSelectedVirtualItemType());
                    filter.put("relatedItemType", getSelectedVirtualItemType());
                    listitems.add(filter);
                    // shared filter
                    filter = new HashMap<>();
                    filter.put("itemId", Long.valueOf(getSelectedVirtualItemId()));
                    filter.put("sharedWithItemType", getSelectedVirtualItemType());
                    listitems.add(filter);
                }
                map.put("filterItems", listitems);
                setDatamap(map);
            }
        }

        public boolean isValidate() {
            return getSelectedCompanyId() > 0
                    && null != getSelectedVirtualItemId() && !getSelectedVirtualItemId().isEmpty()
                    && null != getSelectedVirtualItemType() && !getSelectedVirtualItemType().isEmpty()
                    && null != getMessageDestination() && !getMessageDestination().isEmpty()
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

        public String getSelectedVirtualItemName() {
            return selectedVirtualItemName;
        }

        public void setSelectedVirtualItemName(String selectedVirtualItemName) {
            this.selectedVirtualItemName = selectedVirtualItemName;
        }

        public long getSelectedCompanyId() {
            return selectedCompanyId;
        }

        public void setSelectedCompanyId(long selectedCompanyId) {
            this.selectedCompanyId = selectedCompanyId;
        }

        public String getMessageDestination() {
            return messageDestination;
        }

        public void setMessageDestination(String messageDestination) {
            this.messageDestination = messageDestination;
        }

        public long getNextPageNumber() {
            return nextPageNumber;
        }

        public void setNextPageNumber(long nextPageNumber) {
            this.nextPageNumber = nextPageNumber;
        }

        public Map<String, Object> getDatamap() {
            return datamap;
        }

        public void setDatamap(Map<String, Object> datamap) {
            this.datamap = datamap;
        }
    }

    @Function
    public static void updateMessageList(Message message, String data) {

        List<Map<String, Object>> messages = MapBuilder.query(data, true).getArray();
        if (!messages.isEmpty()) {
            MapBuilder builder;
            List<MessageData> messagList = new ArrayList<>();
            for (Map<String, Object> obj : messages) {
                builder = MapBuilder.query(obj);
                String itemId = builder.getString("itemId");
                if (UtilValidate.isNotEmpty(itemId)) {
                    if (itemId.equalsIgnoreCase("-10")) {
                        if (UtilValidate.isNotEmpty(builder.getBoolean("hasMore"))) {
                            message.setHasMoreMessage(builder.getBoolean("hasMore"));
                        }
                        if (UtilValidate.isNotEmpty(builder.getString("nextPageNumber"))) {
                            message.setNextPageNumber(builder.getString("nextPageNumber"));
                        }
                    } else {
                        MessageData messageData = getMessageDataFromObject(builder);
                        messagList.add(messageData);
                    }
                }
            }
            if (messagList.size() > 0) {
                message.getMessageList().addAll(messagList);
            }
        }
        message.getLoader().setActive(false);
    }

    private static MessageData getMessageDataFromObject(MapBuilder builder) {
        MessageData message = new MessageData();
        message.setMessageId(builder.getString("itemId"));
        message.setMessageBody(builder.getString("itemName"));
        message.setMessageCreatorName(builder.getString("createdBy"));
        message.setMessageCreatorImage(builder.getString("avatarURL"));
        message.setMessageCreatorId(builder.getString("itemCreatedById"));
        message.setMyMessage(isMessageCreatedByMe(builder.getString("itemCreatedById")));
        message.setMessageCreateDateTime(Moment.formatAndGetFullDateTimeFromMilliSecond(builder.getString("createDateMS")));
        message.setMessageCreateDateTimeInMS(builder.getLong("createDateMS"));

        return message;
    }

    private static boolean isMessageCreatedByMe(String messageCreateById) {
        boolean byMe = false;
        if (!messageCreateById.isEmpty()) {
            MapBuilder loggedInUser = Session.getUser();
            if (null != loggedInUser) {
                String loggedInUserId = loggedInUser.getString("itemId");
                if (UtilValidate.isNotEmpty(loggedInUserId)
                        && UtilValidate.isNotEmpty(messageCreateById)
                        && messageCreateById.equalsIgnoreCase(loggedInUserId)) {
                    byMe = true;
                }
            }
        }
        return byMe;
    }

        

    




    
    public class ProcessActionListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            String action = signal.getAction();
            if (null != action) {
                if (action.equalsIgnoreCase(EventConstants.LOAD_ACTION)) {
                    Map dataMap = MapBuilder.builder()
                            .addField("id", EventConstants.TAB_MESSAGE)
                            .addField("name", EventConstants.TAB_MESSAGE)
                            .addField("conponentname", getComponentName())
                            .addField("viewname", getDefaultViewName()).get();
                    Components.TABCONTAINER.listen(new Event(EventConstants.LOAD_DONE_ACTION, EventConstants.PREPARE_TAB, dataMap));
                }
            }
        }
    }

    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponent(signal);
            configuringComponentInitializationData();
        }

        void loadComponent(Signal signal) {
            ViewComponentFactory.init(new String[]{"message"});
            Message message = new Message();
            message.setVisible(true);
            setView(message);
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(message));
        }

        void configuringComponentInitializationData() {
            invoke("configureComponentInitData");
        }
    }

    @Function
    public static void configureComponentInitData(Message message) {
        message.setNextPageNumber("1");
        message.getMessageList().clear();
    }








    
    
    @Model(className = "Attachment", targetId = "", properties = {
        @Property(name = "fileName", type = String.class),
        @Property(name = "fileContent", type = String.class),
        @Property(name = "mimeType", type = String.class),
        @Property(name = "fileSize", type = String.class),
    })
    public static class AttachmentModel {


    }
    
    @Model(className = "MessageData", targetId = "", properties = {
        @Property(name = "messageId", type = String.class),
        @Property(name = "messageBody", type = String.class),
        @Property(name = "messageCreateDateTime", type = String.class),
        @Property(name = "messageCreateDateTimeInMS", type = long.class),
        @Property(name = "messageCreatorId", type = String.class),
        @Property(name = "messageCreatorName", type = String.class),
        @Property(name = "messageCreatorImage", type = String.class),
        @Property(name = "myMessage", type = boolean.class),
        @Property(name = "messageInQueqe", type = boolean.class),
    })
    public static class MessageDataModel {


    }

    public static MessageData getNewlyCreatedMessageData(String messageText){
        
        MessageData pendingMessage = new MessageData();
        
        // message info
        pendingMessage.setMessageBody(messageText);
        pendingMessage.setMessageCreateDateTimeInMS(Moment.getCurrentDateTimeInMS());
        pendingMessage.setMessageCreateDateTime(Moment.formatAndGetFullDateTimeFromMilliSecond(String.valueOf(Moment.getCurrentDateTimeInMS())));
        pendingMessage.setMyMessage(true);
        pendingMessage.setMessageInQueqe(true);
        
        // sender info
        MapBuilder user = Session.getUser();
        String senderId = user.getString("itemId");
        String senderName = user.getString("fullName");
        String senderImage = user.getString("profileImage");
        pendingMessage.setMessageCreatorId(senderId);
        pendingMessage.setMessageCreatorName(senderName);
        pendingMessage.setMessageCreatorImage(senderImage);

        return pendingMessage;
    }
    
    
    
}
