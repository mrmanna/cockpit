/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author toslim
 */
public class QueryMetaModel {
    
    long itemTypeId;
    String itemTypeName;
    String itemTypeDisplayName;
    String itemTypeIconCss;
    String itemTypeIconColor;
    String itemTypeActionId;
    boolean virtualItem;
    String virtualItemTypeName;
    String itemTypeComponentName;
    String itemTypeDataName;
    String businessModelName;
    List<String> subtypes;
    private String itemDetailEndpoint;
    
    public static final String ALL = "ALL";
    public static final String PERSON = "PERSON";
    public static final String GROUP = "GROUP";
    public static final String DOCUMENTS = "FILE";
    public static final String ORGANIZATION = "ORGANIZATION";
    public static final String REPORT = "REPORT";
    public static final String NOTE = "NOTE";
    public static final String CHAT = "CHAT";
    public static final String TASK = "TASK";
    public static final String CONTEXT = "CONTEXT";
    public static final String NEWCHATWITH = "NEWCHATWITH";
    public static final String CAMPAIGN = "CAMPAIGN";
    public static final String MEMBERINVITATION = "INVITATION";
    public static final String PROJECT = "PROJECT";
    public static final String SITE = "SITE";
    public static final String TEMPLATE = "TEMPLATE";
    public static final String CALENDAR = "CALENDAR_EVENT";
    public static final String COLLECTION = "COLLECTION";
    public static final String RELATED = "RELATED";
    public static final String MEMBERS = "MEMBER";
    public static final String INBOX = "INBOX";
    public static final String TAG = "TAG";
    public static final String PERMISSION = "PERMISSION";
    public static final String ACTIVITY = "ACTIVITY_LOG";
    public static final String CONTENTLIST = "CONTENTLIST";
    public static final String DETAILS = "DETAILS";
    public static final String DOCUMENTS_VIEW = "DOCUMENTSVIEW";
    public static final String EMPLOYEE = "EMPLOYEE";
    public static final String SHARED = "SHARED";
    public static final String VERSION = "VERSION";
    public static final String SUBJECT = "SUBJECT";
    public static final String OWNER = "OWNER";
    public static final String COLLECTION_CHAT = "COLLECTION_CHAT";
    public static final String TITLED_CHAT = "Channel";
    public static final String PAGE = "PAGE";
    public static final String COMPONENT = "COMPONENT";
    public static final String WEB_TEXT = "WEB_TEXT";
    public static  final String WEEKVIEW = "WEEK_VIEW";
    public static final String PRODUCT = "PRODUCT";
    public static final String SUPPLIER = "SUPPLIER";
    public static final String PAGELIST = "PAGELIST";
    public static final String SETTING = "SETTING";
    public static final String WEBCONTENTS = "WEBCONTENTS";
    public static final String WEBCONTENTEDIT = "WEBCONTENTEDIT";
    public static final String MAIL_TEMPLATE = "MAIL_TEMPLATE";
    public static final String MAIL_LIST = "MAIL_LIST";
    public static final String MAIL_SENT = "MAIL_SENT";
    
    public static final String CHANNEL = "CHANNEL";
    public static final String COLLECTION_TYPE_GENERIC = "generic";
    public static final String COLLECTION_TYPE_MESSAGE = "message";
    
    public static final String ITEM_TYPE = "ITEM_TYPE";
    public static final String USER_DEFINE = "USER_DEFINE";
    public static final long USER_DEFINE_ITEM_ID = 37;
    
    public static final String FILTER_TYPE_ALL_TAG = "ALL TAGS";
    public static final String FILTER_TYPE_MY_TAG = "MY TAGS";
    public static final String FILTER_TYPE_OTHERS_TAGS = "OTHERS TAGS";
    public static final String FILTER_TYPE_SYSTEM_TAGS = "SYSTEM TAGS";
    
    public static final String PERMISSION_OWNER = "Owner";
    public static final String PERMISSION_ADMIN = "Admin";
    public static final String PERMISSION_WRITE = "Write";
    public static final String PERMISSION_READ = "Read";
    public static final String PERMISSION_NONE = "None";
    public static final String PERMISSION_MEMBER = "Member";
    public static final String PERMISSION_CLIENT = "Client";
    
    public static final String PERMISSION_OWNER_COLOR = "#8A0868";
    public static final String PERMISSION_ADMIN_COLOR = "#FF5733";
    public static final String PERMISSION_WRITE_COLOR = "#00aacd";
    public static final String PERMISSION_READ_COLOR = "#04980F";
    public static final String PERMISSION_NONE_COLOR = "#58595b";
    
    public static final String personItemDetailEndpoint = "\"/VirtualItem-portlet.virtualpersonitem/getSingleVirtualPersonItem\"";
    public static final String organizationItemDetailEndpoint = "\"/VirtualItem-portlet.virtualorganizationitem/getOrganizationIfo\"";
    public static final String documentsItemDetailEndpoint = "\"/VirtualItem-portlet.virtualdocumentitem/getDocument\"";
    public static final String channelItemDetailEndpoint = "\"/VirtualItem-portlet.virtualcollectionitem/getCollectionItem\"";
    
    public static Map<String,QueryMetaModel> itemTypeFactory = new HashMap<String, QueryMetaModel>();
    static{
        QueryMetaModel meta = new QueryMetaModel();
        meta.setItemTypeId(0);
        meta.setItemTypeName(ALL);
        meta.setItemTypeActionId(ALL);
        meta.setItemTypeDisplayName("ALL");
        meta.setItemTypeIconCss("fa fa-connectdevelop");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(ALL);
        itemTypeFactory.put(ALL, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(1);
        meta.setItemTypeName(PERSON);
        meta.setItemTypeActionId(PERSON);
        meta.setItemTypeDisplayName("Person");
        meta.setItemTypeIconCss("fa fa-user-circle-o");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(PERSON);
        meta.setItemDetailEndpoint(personItemDetailEndpoint);
        itemTypeFactory.put(PERSON, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(2);
        meta.setItemTypeName(GROUP);
        meta.setItemTypeActionId(GROUP);
        meta.setItemTypeDisplayName("Group");
        meta.setItemTypeIconCss("fa fa-superpowers");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(GROUP);
        itemTypeFactory.put(GROUP, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(3);
        meta.setItemTypeName(DOCUMENTS);
        meta.setItemTypeActionId(DOCUMENTS);
        meta.setItemTypeDisplayName("Documents");
        meta.setItemTypeIconCss("fa fa-file");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(DOCUMENTS);
        meta.setItemDetailEndpoint(documentsItemDetailEndpoint);
        itemTypeFactory.put(DOCUMENTS, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(4);
        meta.setItemTypeName(ORGANIZATION);
        meta.setItemTypeActionId(ORGANIZATION);
        meta.setItemTypeDisplayName("Organization");
        meta.setItemTypeIconCss("fa fa-building-o");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(ORGANIZATION);
        meta.setItemDetailEndpoint(organizationItemDetailEndpoint);
        itemTypeFactory.put(ORGANIZATION, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(5);
        meta.setItemTypeName(REPORT);
        meta.setItemTypeActionId(REPORT);
        meta.setItemTypeDisplayName("Report");
        meta.setItemTypeIconCss("fa fa-pencil-square-o");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(REPORT);
        itemTypeFactory.put(REPORT, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(6);
        meta.setItemTypeName(CHAT);
        meta.setItemTypeActionId(CHAT);
        meta.setItemTypeDisplayName("Chat");
        meta.setItemTypeIconCss("fa fa-commenting");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(NOTE);
        itemTypeFactory.put(CHAT, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(7);
        meta.setItemTypeName(TASK);
        meta.setItemTypeActionId(TASK);
        meta.setItemTypeDisplayName("Task");
        meta.setItemTypeIconCss("fa fa-check-square-o");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(TASK);
        itemTypeFactory.put(TASK, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(8);
        meta.setItemTypeName(CAMPAIGN);
        meta.setItemTypeActionId(CAMPAIGN);
        meta.setItemTypeDisplayName("Campaign");
        meta.setItemTypeIconCss("fa fa-paper-plane");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(CAMPAIGN);
        itemTypeFactory.put(CAMPAIGN, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(9);
        meta.setItemTypeName(PROJECT);
        meta.setItemTypeActionId(PROJECT);
        meta.setItemTypeDisplayName("Project");
        meta.setItemTypeIconCss("fa fa-tasks");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(PROJECT);
        itemTypeFactory.put(PROJECT, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(10);
        meta.setItemTypeName(SITE);
        meta.setItemTypeActionId(SITE);
        meta.setItemTypeDisplayName("Site");
        meta.setItemTypeIconCss("fa fa-cloud");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(SITE);
        itemTypeFactory.put(SITE, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(11);
        meta.setItemTypeName(TEMPLATE);
        meta.setItemTypeActionId(TEMPLATE);
        meta.setItemTypeDisplayName("Template");
        meta.setItemTypeIconCss("fa fa-envelope-o");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(TEMPLATE);
        itemTypeFactory.put(TEMPLATE, meta);
        //
        meta = new QueryMetaModel();
        meta.setItemTypeId(12);
        meta.setItemTypeName(CALENDAR);
        meta.setItemTypeActionId(CALENDAR);
        meta.setItemTypeDisplayName("Event");
        meta.setItemTypeIconCss("fa fa-calendar");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(CALENDAR);
        itemTypeFactory.put(CALENDAR, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(13);
        meta.setItemTypeName(COLLECTION);
        meta.setItemTypeActionId(COLLECTION);
        meta.setItemTypeDisplayName("Collection");
        meta.setItemTypeIconCss("fa fa-circle-o-notch");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(COLLECTION);
        meta.setItemTypeComponentName("dynamic-collection-component");
        meta.setItemTypeDataName("dynamic-collection-component");
        itemTypeFactory.put(COLLECTION, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(14);
        meta.setItemTypeName(RELATED);
        meta.setItemTypeActionId(RELATED);
        meta.setItemTypeDisplayName("Related");
        meta.setItemTypeIconCss("fa fa-link");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(RELATED);
        itemTypeFactory.put(RELATED, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(15);
        meta.setItemTypeName(MEMBERS);
        meta.setItemTypeActionId(MEMBERS);
        meta.setItemTypeDisplayName("Members");
        meta.setItemTypeIconCss("fa fa-user-circle-o");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(MEMBERS);
        itemTypeFactory.put(MEMBERS, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(16);
        meta.setItemTypeName(INBOX);
        meta.setItemTypeActionId(INBOX);
        meta.setItemTypeDisplayName("Inbox");
        meta.setItemTypeIconCss("fa fa-inbox");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(NOTE);
        itemTypeFactory.put(INBOX, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(17);
        meta.setItemTypeName(TAG);
        meta.setItemTypeActionId(TAG);
        meta.setItemTypeDisplayName("Tag");
        meta.setItemTypeIconCss("fa fa-tags");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(TAG);
        itemTypeFactory.put(TAG, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(18);
        meta.setItemTypeName(PERMISSION);
        meta.setItemTypeActionId(PERMISSION);
        meta.setItemTypeDisplayName("Permission");
        meta.setItemTypeIconCss("fa fa-lock");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(PERMISSION);
        itemTypeFactory.put(PERMISSION, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(19);
        meta.setItemTypeName(ACTIVITY);
        meta.setItemTypeActionId(ACTIVITY);
        meta.setItemTypeDisplayName("Activity");
        meta.setItemTypeIconCss("fa fa-random");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(ACTIVITY);
        itemTypeFactory.put(ACTIVITY, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(20);
        meta.setItemTypeName(CONTENTLIST);
        meta.setItemTypeActionId(CONTENTLIST);
        meta.setItemTypeDisplayName("Content");
        meta.setItemTypeIconCss("fa fa-th-list");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(CONTENTLIST);
        itemTypeFactory.put(CONTENTLIST, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(21);
        meta.setItemTypeName(DETAILS);
        meta.setItemTypeActionId(DETAILS);
        meta.setItemTypeDisplayName("Details");
        meta.setItemTypeIconCss("fa fa-id-card-o");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(DETAILS);
        itemTypeFactory.put(DETAILS, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(22);
        meta.setItemTypeName(DOCUMENTS_VIEW);
        meta.setItemTypeActionId(DOCUMENTS_VIEW);
        meta.setItemTypeDisplayName("View");
        meta.setItemTypeIconCss(QueryMetaModel.getItemTypeIconCss(QueryMetaModel.DOCUMENTS));
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(DOCUMENTS_VIEW);
        itemTypeFactory.put(DOCUMENTS_VIEW, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(23);
        meta.setItemTypeName(EMPLOYEE);
        meta.setItemTypeActionId(EMPLOYEE);
        meta.setItemTypeDisplayName("Employee");
        meta.setItemTypeIconCss("fa fa-user-circle-o");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(EMPLOYEE);
        itemTypeFactory.put(EMPLOYEE, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(24);
        meta.setItemTypeName(SHARED);
        meta.setItemTypeActionId(SHARED);
        meta.setItemTypeDisplayName("Shared");
        meta.setItemTypeIconCss("fa fa-lock");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(SHARED);
        itemTypeFactory.put(SHARED, meta);

        meta = new QueryMetaModel();
        meta.setItemTypeId(25);
        meta.setItemTypeName(VERSION);
        meta.setItemTypeActionId(VERSION);
        meta.setItemTypeDisplayName("Version");
        meta.setItemTypeIconCss("fa fa-vimeo-square");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(VERSION);
        itemTypeFactory.put(VERSION, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(26);
        meta.setItemTypeName(SUBJECT);
        meta.setItemTypeActionId(SUBJECT);
        meta.setItemTypeDisplayName("Subject");
        meta.setItemTypeIconCss("fa fa-vimeo-square");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(SUBJECT);
        itemTypeFactory.put(SUBJECT, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(27);
        meta.setItemTypeName(OWNER);
        meta.setItemTypeActionId(OWNER);
        meta.setItemTypeDisplayName("Owner");
        meta.setItemTypeIconCss("fa fa-user-circle-o");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(PERSON);
        itemTypeFactory.put(OWNER, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(28);
        meta.setItemTypeName(COLLECTION_CHAT);
        meta.setItemTypeActionId(COLLECTION_CHAT);
        meta.setItemTypeDisplayName(TITLED_CHAT);
        meta.setItemTypeIconCss("fa fa-users");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(COLLECTION_CHAT);
        meta.setItemTypeComponentName("channel-item-component");
        meta.setItemTypeDataName("channel-item-component");
        itemTypeFactory.put(COLLECTION_CHAT, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(29);
        meta.setItemTypeName(CONTEXT);
        meta.setItemTypeActionId(CONTEXT);
        meta.setItemTypeDisplayName("Context");
        meta.setItemTypeIconCss("fa fa-comments");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(CONTEXT);
        itemTypeFactory.put(CONTEXT, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(30);
        meta.setItemTypeName(WEEKVIEW);
        meta.setItemTypeActionId(WEEKVIEW);
        meta.setItemTypeDisplayName("Week View");
        meta.setItemTypeIconCss("fa fa-calendar");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(WEEKVIEW);
        itemTypeFactory.put(WEEKVIEW, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(31);
        meta.setItemTypeName(PAGELIST);
        meta.setItemTypeActionId(PAGELIST);
        meta.setItemTypeDisplayName("Pages");
        meta.setItemTypeIconCss("fa fa-vimeo-square");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(PAGELIST);
        itemTypeFactory.put(PAGELIST, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(32);
        meta.setItemTypeName(SETTING);
        meta.setItemTypeActionId(SETTING);
        meta.setItemTypeDisplayName("Settings");
        meta.setItemTypeIconCss("fa fa-vimeo-square");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(SETTING);
        itemTypeFactory.put(SETTING, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(33);
        meta.setItemTypeName(WEBCONTENTS);
        meta.setItemTypeActionId(WEBCONTENTS);
        meta.setItemTypeDisplayName("Web Contents");
        meta.setItemTypeIconCss("fa fa-th-list");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(WEBCONTENTS);
        itemTypeFactory.put(WEBCONTENTS, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(34);
        meta.setItemTypeName(WEBCONTENTEDIT);
        meta.setItemTypeActionId(WEBCONTENTEDIT);
        meta.setItemTypeDisplayName("Web Content Edit");
        meta.setItemTypeIconCss("fa fa-th-list");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(WEBCONTENTEDIT);
        itemTypeFactory.put(WEBCONTENTEDIT, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(35);
        meta.setItemTypeName(WEB_TEXT);
        meta.setItemTypeActionId(WEB_TEXT);
        meta.setItemTypeDisplayName("Web Text");
        meta.setItemTypeIconCss("fa fa-file");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(WEB_TEXT);
        itemTypeFactory.put(WEB_TEXT, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(36);
        meta.setItemTypeName(COMPONENT);
        meta.setItemTypeActionId(COMPONENT);
        meta.setItemTypeDisplayName("Site Component");
        meta.setItemTypeIconCss("fa fa-suitcase");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(COMPONENT);
        itemTypeFactory.put(COMPONENT, meta);
        
        // Id 37 is used for User defined item see@DataSchemaNameAction
        meta = new QueryMetaModel();
        meta.setItemTypeId(37);
        meta.setItemTypeName(USER_DEFINE);
        meta.setItemTypeActionId(USER_DEFINE);
        meta.setItemTypeDisplayName("USER_DEFINE");
        meta.setItemTypeIconCss("fa fa-hashtag");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(USER_DEFINE);
        itemTypeFactory.put(USER_DEFINE, meta);
    
        meta = new QueryMetaModel();
        meta.setItemTypeId(38);
        meta.setItemTypeName(MAIL_TEMPLATE);
        meta.setItemTypeActionId(MAIL_TEMPLATE);
        meta.setItemTypeDisplayName("Mail Template");
        meta.setItemTypeIconCss("fa fa-paper-plane");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(MAIL_TEMPLATE);
        itemTypeFactory.put(MAIL_TEMPLATE, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(39);
        meta.setItemTypeName(MAIL_LIST);
        meta.setItemTypeActionId(MAIL_LIST);
        meta.setItemTypeDisplayName("Mail List");
        meta.setItemTypeIconCss("fa fa-paper-plane");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(MAIL_LIST);
        itemTypeFactory.put(MAIL_LIST, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(40);
        meta.setItemTypeName(MAIL_SENT);
        meta.setItemTypeActionId(MAIL_SENT);
        meta.setItemTypeDisplayName("Sent");
        meta.setItemTypeIconCss("fa fa-paper-plane");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(MAIL_SENT);
        itemTypeFactory.put(MAIL_SENT, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(41);
        meta.setItemTypeName(PAGE);
        meta.setItemTypeActionId(PAGE);
        meta.setItemTypeDisplayName("Page");
        meta.setItemTypeIconCss("fa fa-envelope-o");
        meta.setVirtualItem(false);
        meta.setVirtualItemTypeName(PAGE);
        itemTypeFactory.put(PAGE, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(42);
        meta.setItemTypeName(PRODUCT);
        meta.setItemTypeActionId(PRODUCT);
        meta.setItemTypeDisplayName("Product");
        meta.setItemTypeIconCss("fa fa-cube");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(PRODUCT);
        itemTypeFactory.put(PRODUCT, meta);
        
        meta = new QueryMetaModel();
        meta.setItemTypeId(43);
        meta.setItemTypeName(CHANNEL);
        meta.setItemTypeActionId(CHANNEL);
        meta.setItemTypeDisplayName(CHANNEL);
        meta.setItemTypeIconCss("fa fa-users");
        meta.setVirtualItem(true);
        meta.setVirtualItemTypeName(COLLECTION);
        meta.setItemTypeComponentName("channel-item-component");
        meta.setItemTypeDataName("channel-item-component");
        meta.setItemDetailEndpoint(channelItemDetailEndpoint);
        itemTypeFactory.put(CHANNEL, meta);
        
        
    }
    
    
    public static final List<String> VIRTUAL_ITEM_TYPES = new ArrayList<String>() {
        {
            add(PERSON);
            add(DOCUMENTS);
            add(GROUP);
            add(SITE);
            add(TEMPLATE);
            add(ORGANIZATION);
            add(REPORT);
            add(NOTE);
            add(TASK);
            add(CAMPAIGN);
            add(PROJECT);
            add(CALENDAR);
            add(COLLECTION);
            add(WEB_TEXT);
        }
    };
    
    public static final List<String> COLLECTION_SEARCH_ITEM_TYPES = new ArrayList<String>() {
        {
            add(PERSON);
            add(DOCUMENTS);
            add(SITE);
            add(TEMPLATE);
            add(ORGANIZATION);
            add(REPORT);
            add(NOTE);
            add(TASK);
            add(CAMPAIGN);
            add(PROJECT);
            add(CALENDAR);
            add(COLLECTION);
            add(USER_DEFINE);
        }
    };
    
    /* ITEM TYPE ID */
    public Long getItemTypeId() {
        return itemTypeId;
    }
    public void setItemTypeId(long itemTypeId) {
        this.itemTypeId = itemTypeId;
    }
    // get item type id directly from outside
    public static Long getItemTypeId(String itemTypeName) {
        
        for (String key : itemTypeFactory.keySet()) {
            QueryMetaModel meta = itemTypeFactory.get(key);
            if (meta.getItemTypeDisplayName().equalsIgnoreCase(itemTypeName)) {
                return meta.getItemTypeId();
            }
        }
        
        
        if(null!=itemTypeName)
        {
            if (QueryMetaModel.NOTE.equalsIgnoreCase(itemTypeName))
            {
                itemTypeName = QueryMetaModel.CHAT;
            }
            QueryMetaModel queryMeta = itemTypeFactory.get(itemTypeName);
            if(null !=queryMeta ){
                 return queryMeta.getItemTypeId();
            }
        }
        return 0L;
    }

    
    
    
    /* ITEM TYPE NAME */
    public String getItemTypeName() {
        return itemTypeName;
    }
    public void setItemTypeName(String itemTypeName) {
        this.itemTypeName = itemTypeName;
    }
    // get item type name directly from outside
    public static String getItemTypeNameById(long itemTypeId) {
        String itemTypeName="";
        List<QueryMetaModel> list = new ArrayList<>(itemTypeFactory.values());
        for (QueryMetaModel queryMeta : list)
        {
            if(queryMeta.getItemTypeId() == itemTypeId)
            {
                itemTypeName = queryMeta.getItemTypeName();
                return itemTypeName;
            }
        }
        return itemTypeName;
    }    
    
    
    
    
    /* ITEM TYPE DISPLAY NAME */
    public String getItemTypeDisplayName() {
        return itemTypeDisplayName;
    }
    public void setItemTypeDisplayName(String itemTypeDisplayName) {
        this.itemTypeDisplayName = itemTypeDisplayName;
    }
    // get item type display name directly from outside
    public static String getItemTypeDisplayName(String itemTypeName) {
        String itemTypeDisplayName = "";
        if(null != itemTypeName)
        {
            QueryMetaModel queryMeta = itemTypeFactory.get(itemTypeName);
            if(null != queryMeta)
            {
                itemTypeDisplayName = queryMeta.getItemTypeDisplayName();
            }
        }
        return itemTypeDisplayName;
    }
    
    
    
    // get item type name directly from outside
    public static String getItemTypeName(String itemTypeDisplayName) {
        String itemTypeName = "";
        if(null != itemTypeDisplayName)
        {
            QueryMetaModel queryMeta = itemTypeFactory.get(itemTypeDisplayName);
            if(null != queryMeta)
            {
                itemTypeName = queryMeta.getItemTypeName();
            }
        }
        return itemTypeName;
    }
    
    
    
    /* ITEM TYPE ICON CSS */
    public String getItemTypeIconCss() {
        return itemTypeIconCss;
    }

    public void setItemTypeIconCss(String itemTypeIconCss) {
        this.itemTypeIconCss = itemTypeIconCss;
    }
    // get item type icon css directly from outside
    public static String getItemTypeIconCss(String itemTypeName) {
        
        // By display name
        for (String key : itemTypeFactory.keySet()) {
            QueryMetaModel meta = itemTypeFactory.get(key);
            if (meta.getItemTypeDisplayName().equalsIgnoreCase(itemTypeName) && meta.getItemTypeId().equals(QueryMetaModel.USER_DEFINE_ITEM_ID)) {
                return meta.getItemTypeIconCss();
            }
        }
        
        // by item type
        if(null != itemTypeName)
        {
            QueryMetaModel queryMeta = itemTypeFactory.get(itemTypeName);
            if(null != queryMeta)
            {
                return queryMeta.getItemTypeIconCss();
            }
        }
        return "";
    }    

    
    
    /* ITEM TYPE ICON COLOR */
    public String getItemTypeIconColor() {
        return itemTypeIconColor;
    }

    public void setItemTypeIconColor(String itemTypeIconColor) {
        this.itemTypeIconColor = itemTypeIconColor;
    }
    // get item type icon color name directly from outside
    public static String getItemTypeIconColor(String itemTypeName) {
        String itemTypeIconColor = "";
        if(null != itemTypeName)
        {
            QueryMetaModel queryMeta = itemTypeFactory.get(itemTypeName);
            if(null != queryMeta)
            {
                itemTypeIconColor = queryMeta.getItemTypeIconColor();
            }
        }

        return itemTypeIconColor;
    }     
    
    
    
    
    /* ITEM TYPE ACTION ID */
    public String getItemTypeActionId() {
        return itemTypeActionId;
    }

    public void setItemTypeActionId(String itemTypeActionId) {
        this.itemTypeActionId = itemTypeActionId;
    }
   
    
    
    
    /* VIRTUAL ITEM TYPE */ 
    public boolean isVirtualItem() {
        return virtualItem;
    }

    public void setVirtualItem(boolean virtualItem) {
        this.virtualItem = virtualItem;
    }
  
    public String getVirtualItemTypeName() {
        return virtualItemTypeName;
    }

    public void setVirtualItemTypeName(String virtualItemTypeName) {
        this.virtualItemTypeName = virtualItemTypeName;
    }
    // get item type virtual item name directly from outside
    public static String getVirtualItemTypeName(String itemTypeName) {
        
        // By display name
        for (String key : itemTypeFactory.keySet()) {
            QueryMetaModel meta = itemTypeFactory.get(key);
            if (meta.getItemTypeDisplayName().equalsIgnoreCase(itemTypeName) 
                    || itemTypeName.equals(meta.getVirtualItemTypeName())
                    ) {
                return meta.getVirtualItemTypeName();
            }
        }
        
        // By type
        if(null != itemTypeName)
        {
            QueryMetaModel queryMeta = itemTypeFactory.get(itemTypeName);
            if(null != queryMeta)
            {
                return queryMeta.getVirtualItemTypeName();
            }
        }
        return "";
    }
    
    
    
    
    /* ITEM TYPE COMPONENT NAME */
    public String getItemTypeComponentName() {
    return itemTypeComponentName;
    }

    public void setItemTypeComponentName(String itemTypeComponentName) {
        this.itemTypeComponentName = itemTypeComponentName;
    }
    // get item type component name directly from outside
    public static String getItemTypeComponentName(String itemTypeName) {
        String itemTypeComponentName = "";
        if(null != itemTypeName)
        {
            QueryMetaModel queryMeta = itemTypeFactory.get(itemTypeName);
            if(null != queryMeta)
            {
                itemTypeComponentName = queryMeta.getItemTypeComponentName();
            }
        }
        return itemTypeComponentName;
    }
    
    
    
    /* ITEM TYPE DATA NAME */
    public String getItemTypeDataName() {
        return itemTypeDataName;
    }

    public void setItemTypeDataName(String itemTypeDataName) {
        this.itemTypeDataName = itemTypeDataName;
    }
    // get item type data name directly from outside
    public static String getItemTypeDataName(String itemTypeName) {
        String itemTypeDataName = "";
        if(null != itemTypeName)
        {
            QueryMetaModel queryMeta = itemTypeFactory.get(itemTypeName);
            if(null != queryMeta)
            {
                itemTypeDataName = queryMeta.getItemTypeDataName();
            }
        }
        return itemTypeDataName;
    }    
    
    /* BUSINESS MODEL NAME */
    public String getBusinessModelName() {
        return businessModelName;
    }

    public void setBusinessModelName(String businessModelName) {
        this.businessModelName = businessModelName;
    }
    
    public static String getBusinessModelName(String itemTypeName)
    {
        for (String key : itemTypeFactory.keySet()) {
            QueryMetaModel meta = itemTypeFactory.get(key); 
            if (meta.getItemTypeName().equalsIgnoreCase(itemTypeName)
                    || meta.getItemTypeDisplayName().equalsIgnoreCase(itemTypeName)
                    ) {               
                return meta.getBusinessModelName();       
            }               
        }             
        return "";
    }
    
    /* SUB-TYPES of Item*/
    public List<String> getSubtypes() {
        return subtypes;
    }

    public void setSubtypes(List<String> subtypes) {
        this.subtypes = subtypes;
    }
    
    public static List<String> getSubTypesByBusinessModelName(String itemTypeName) {
        List<String> subTypes = new ArrayList<>();
        if (null != itemTypeName) {
            QueryMetaModel queryMeta = itemTypeFactory.get(itemTypeName);
            if (null != queryMeta) {
                subTypes = queryMeta.getSubtypes();
            }
        }
        return subTypes;
    }
    
    public static String getItemTypeIconClass(String itemType) {
        if (null != itemType) {
            if (itemType.equalsIgnoreCase(PERSON) || itemType.equalsIgnoreCase(OWNER)) {
                return getItemTypeIconCss(PERSON);
            } else if (itemType.equalsIgnoreCase(DOCUMENTS)) {
                return getItemTypeIconCss(DOCUMENTS);
            } else if (itemType.equalsIgnoreCase(GROUP)) {
                return getItemTypeIconCss(GROUP);
            } else if (itemType.equalsIgnoreCase(ORGANIZATION)) {
                return getItemTypeIconCss(ORGANIZATION);
            } else if (itemType.equalsIgnoreCase(PRODUCT)) {
                return getItemTypeIconCss(PRODUCT);
            } else if (itemType.equalsIgnoreCase(REPORT)) {
                return getItemTypeIconCss(REPORT);
            } else if (itemType.equalsIgnoreCase(NOTE)) {
                return getItemTypeIconCss(CHAT);
            } else if (itemType.equalsIgnoreCase(TASK)) {
                return getItemTypeIconCss(TASK);
            } else if (itemType.equalsIgnoreCase(CAMPAIGN)) {
                return getItemTypeIconCss(CAMPAIGN);
            } else if (itemType.equalsIgnoreCase(PROJECT)) {
                return getItemTypeIconCss(PROJECT);
            } else if (itemType.equalsIgnoreCase(SITE)) {
                return getItemTypeIconCss(SITE);
            } else if (itemType.equalsIgnoreCase(TEMPLATE)) {
                return getItemTypeIconCss(TEMPLATE);
            } else if (itemType.equalsIgnoreCase(CALENDAR) || itemType.equalsIgnoreCase("CALENDAR EVENT")) {
                return getItemTypeIconCss(CALENDAR);
            } else if (itemType.equalsIgnoreCase(RELATED)) {
                return getItemTypeIconCss(RELATED);
            } else if (itemType.equalsIgnoreCase(COLLECTION)) {
                return "fa fa-users";
            } else if (itemType.equalsIgnoreCase(getItemTypeDisplayName(COLLECTION_CHAT))) {
                return getItemTypeIconCss(COLLECTION_CHAT);
            } else if (itemType.equalsIgnoreCase(CHANNEL)) {
                return getItemTypeIconCss(CHANNEL);
            } else if (itemType.equalsIgnoreCase(FILTER_TYPE_MY_TAG)
                    || itemType.equalsIgnoreCase(FILTER_TYPE_OTHERS_TAGS)
                    || itemType.equalsIgnoreCase(FILTER_TYPE_SYSTEM_TAGS)) {
                return "fa fa-tags";
            } else if (itemType.equalsIgnoreCase(TAG)) {
                return "fa fa-tag";
            } else if (itemType.equalsIgnoreCase(PAGE)) {
                return "fa fa-trello";
            } else if (itemType.equalsIgnoreCase(COMPONENT)) {
                return "fa fa-suitcase";
            } else if (itemType.equalsIgnoreCase(USER_DEFINE)) {
                return "fa fa-hashtag";
            } else {
                return "";
            }
        }

        return "";
    }

    
    
    /* ITEM DETAIL DATA POST */

    public String getItemDetailEndpoint() {
        return (null != itemDetailEndpoint) ? itemDetailEndpoint : "";
    }

    public void setItemDetailEndpoint(String itemDetailEndpoint) {
        this.itemDetailEndpoint = itemDetailEndpoint;
    }
    

    public static Map<String, Object> getItemDetailDataPost(String itemId, String itemType) {
        Map<String, Object> dataPost = new HashMap<>();
        Map<String, Object> postData = new HashMap<>();
        QueryMetaModel meta = itemTypeFactory.get(itemType);
        if (null != meta) {
            switch (itemType) {
                case QueryMetaModel.PERSON:
                    postData.put("virtualPersonItemId", itemId);
                    dataPost.put(meta.getItemDetailEndpoint(), postData);
                    break;
                case QueryMetaModel.ORGANIZATION:
                    long orgId = (null != itemId && !itemId.isEmpty()) ? Long.valueOf(itemId) : 0;
                    postData.put("itemId", orgId);
                    dataPost.put(meta.getItemDetailEndpoint(), postData);
                    break;
                case QueryMetaModel.DOCUMENTS:
                    postData.put("virtualDocumentItemId", itemId);
                    dataPost.put(meta.getItemDetailEndpoint(), postData);
                    break;
                case QueryMetaModel.CHANNEL:
                    postData.put("collectionItemId", itemId);
                    dataPost.put(meta.getItemDetailEndpoint(), postData);
                    break;
                default:
                    break;
            }
        }
        return dataPost;
    }   






















    
    public static MapBuilder processMetaDataByItemType(String itemType, String data) {
        // read input data
        //Reader in = new StringReader(data);
        MapBuilder input = MapBuilder.query(data);
        
        // prepare output data
        MapBuilder output = MapBuilder.builder();
        if (UtilValidate.isNotEmpty(itemType)) {
            String itemName = "";
            if (itemType.equalsIgnoreCase(PERSON)) {
                itemName = input.getString("fullName");
                String emailAddress = input.getString("emailAddress");
                String itemImage = input.getString("profileImageLink");
                String persPhone = input.getString("persPhone");
                String persMobile = input.getString("persMobile");
                output.addField("itemImage", itemImage);
                output.addField("emailAddress", emailAddress);
                output.addField("persPhone", persPhone);
                output.addField("persMobile", persMobile);
            } else if (itemType.equalsIgnoreCase(ORGANIZATION)) {
                itemName = input.getString("organizationName");
            } else if (itemType.equalsIgnoreCase(DOCUMENTS)) {
                itemName = input.getString("fileName");
            } else if (itemType.equalsIgnoreCase(CHANNEL)) {
                itemName = input.getString("name");
            }
            output = processCommonMetaData(output, itemName, itemType);
            
            output.addField("tagItemName", input.getValue("tagItemName"));
            output.addField("relatedItemName", input.getValue("relatedItemName"));
            output.addField("shareItemName", input.getValue("shareItemName"));
        }
        return output;
    }
    
    public static MapBuilder processCommonMetaData(MapBuilder result, String itemName, String itemType) {
        result.addField("itemName", itemName);
        result.addField("itemType", itemType);
        result.addField("itemIcon", getItemTypeIconClass(itemType));
        return result;
    }
    
    
    public static Component getComponentNameByItemType (String itemType) {
        
        return itemComponentFactory.get(itemType);
    }
    
    public static Map<String, Component> itemComponentFactory = new HashMap<String, Component>();
    static{
        
        itemComponentFactory.put(PERSON, Components.PERSON);
        itemComponentFactory.put(ORGANIZATION, Components.ORGANIZATION);
    }
    
    
    public static final List<String> COLLECTION_SEARCH_ITEM = new ArrayList<String>() {
        {
            add(PERSON);
            add(ORGANIZATION);
            add(DOCUMENTS);
            add(SITE);
            add(REPORT);
            add(TASK);
            add(PROJECT);
            add(CAMPAIGN);
            add(COLLECTION);
            add(USER_DEFINE);
        }
    };
}
