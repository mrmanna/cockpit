/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

/**
 *
 * @author Administrator
 */
public class EventConstants {

    public static final String INDEX_VIEW_CHANGE = "indexviewchange";
    public static final String LOAD_LOGIN = "loadlogin";
    public static final String LOGIN_SUCCESS = "loginsuccess";
    public static final String LOGOUT = "logout";
    public static final String AUTO_LOGIN = "autologin";
    public static final String BOOT = "boot";
    public static final String REBOOT = "reboot";
    public static final String FILTER_REQUEST = "filterrequest";
    public static final String FILTER_DEFAULT = "filterdefault";
    public static final String FILTER_CLEAN = "filterclean";
    public static final String FILTER_FROM_SESSION = "filterfromsession";
    public static final String ITEM_DETAIL_META_COMPONENT = "itemdetailmetacomponent";
    public static final String ITEM_DETAIL_META_DATA = "itemdetailmetadata";
    public static final String LOAD_ITEM_DETAIL = "loaditemdetail";
    public static final String ITEM_DETAIL_BODY_COMPONENT = "itemdetailbodycomponent";
    public static final String ITEM_DETAIL_BODY_DATA = "itemdetailbodydata";
    public static final String CHANGE_WORKSPACE = "changeworkspace";
    public static final String WSCONNECT = "wsconnect";
    public static final String WSCONNECT_SUCCESS = "wsconnectsuccess";
    public static final String LOAD_RECENT_DATA = "loadrecentdata";
    public static final String LOAD_INITIAL_DATA = "loadintialdata";
    public static final String SYNC_OFFILINE_DATA = "syncofflinedata";
    public static final String LOAD_TAB_CONTAINER = "loadtabcontainer";
    public static final String LOAD_TABS_ACTION = "loadtabs";
    public static final String LOAD_DATA = "loaddata";

    public static final String LOAD_PERSON_DETAIL_TAB_ACTION = "loadpersondetailtabaction";
    public static final String INIT_COMPONENT = "initcomponent";
    public static final String PREPARE_TAB = "preparetab";
    public static final String ACTIVATE_TAB = "activatetab";
    public static final String PROCESS_DETAIL_DATA = "processdetaildata";
    public static final String COMPONENT_LOADER = "componentloader";

    // New Item
    public static final String CREATE_VIEW = "createview";
    public static final String NEW_ITEM_FILTER_REQUEST = "newitemfilterrequest";
    public static final String NEW_ITEM_META_DATA = "newitemmetadata";
    public static final String NEW_ITEM_LOAD = "newitemload";
    public static final String NEW_ITEM_TAB_CONTAINER_LOAD = "newitemtabcontainerload";
    public static final String NEW_ITEM_INIT_COMPONENT = "newiteminitcomponent";
    public static final String NEW_ITEM_PROCESS_ACTION = "newitemprocessaction";

    // actions
    public static final String INIT_COMPONENT_ACTION = "initcomponentaction";
    public static final String DISPOSE_COMPONENT_ACTION = "disposecomponentaction";
    public static final String PROCESS_ACTION = "processaction";
    public static final String LOAD_ACTION = "loadaction";
    public static final String LOAD_DONE_ACTION = "loaddone";
    public static final String LOAD_GENDER_LIST_ACTION = "loadgenderlist";
    public static final String SHOW_LOADER_ACTION = "showloaderaction";
    public static final String HIDE_LOADER_ACTION = "hideloaderaction";
    public static final String TOOGLE_ACTION_MENU = "toogleactionmenu";
    public static final String TOOGLE_ITEM_ACTION = "toogleitemaction";

    public static final String SAVE_RELATED_ITEM = "saverelateditem";
    public static final String GET_RELATED_ITEMS = "getrelateditems";
    public static final String REMOVE_RELATED_ITEM = "removerelateditem";
    public static final String ENABLE_DETAIL_FULL_VIEW = "enabledetailfullview";
    public static final String ENABLE_DETAIL_SPLIT_VIEW = "enabledetailsplitview";

    public static final String LOAD_LIST = "loadlist";
    public static final String CLEAR_BEFORE_LOAD_LIST = "clearbeforeloadlist";
    public static final String ADD_FILTER = "addfilter";
    public static final String INVOKE_FUNCTION = "invokefunction";
    public static final String RECEIVE_COMPONENT_DATA = "receivecomponentdata";
    public static final String RELATED_LIST_ACTION = "relateddataaction";
    public static final String MAKE_RELATION_ACTION = "makerelation";
    public static final String BREAKUP_RELATION_ACTION = "breakuprelation";
    // TABCONTAINER TABS
    public static final String TAB_DETAIL = "Detail";
    public static final String TAB_MESSAGE = "Message";

    public static final String DESIGNER_MODE = "designermode";
    public static final String PROP_PANEL = "proppanel";
    public static final String TOGGLE = "toggle";
    public static final String HOVER = "hover";
    public static final String ADD_TO_COLLECTION_ACTION = "addtocollectionaction";
    public static final String CREATE_NEW_COL_ACT = "createnewcollectionaction";
    public static final String CREATE_NEW_COL_WITH_CHILDREN_ACT = "createnewcollectionwithchildrenaction";
    public static final String LIST_DATA_ADD_TO_COLLECTION_ACTION = "listdataaddtocollectionaction";
    public static final String VIEW_CHANGE = "viewchange";
    public static final String UPDATE_HEADER_ACTION = "updateheaderaction";
}
