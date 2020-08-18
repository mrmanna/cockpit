/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.workspace;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.AsyncRequest;
import io.cloudoffice.platform.cockpit.api.Component;
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
import io.cloudoffice.platform.cockpit.api.WebDB;
import io.cloudoffice.platform.cockpit.componentprocessor.PluggableComponent;
import io.cloudoffice.platform.cockpit.js.ViewComponentFactory;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;

@Model(className = "WorkspaceView", targetId = "", properties = {
    @Property(name = "showdrop", type = boolean.class),
    @Property(name = "selectedWorkspaceName", type = String.class),
    @Property(name = "workspaceList", type = WorkspaceListItem.class, array = true),
    @Property(name = "loader", type = io.cloudoffice.platform.cockpit.api.HelperItemView.class),
    @Property(name = "adminMenu", type = io.cloudoffice.platform.cockpit.api.ComponentDef.class)
})
@PluggableComponent(name = "WORKSPACE", locator = "Components")
public class WorkspaceComponent extends AbstractComponent<WorkspaceView> {

    public static final String WORKSPACELIST_TABLE = "workspaces";

    @Override
    protected Component newInstance() {
        return new WorkspaceComponent();
    }

    
    @Override
    public void initStorage() {
        setOfflineStorage(new WebDB.TableManager(this));
        getOfflineStorage().createTable(WORKSPACELIST_TABLE);
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
        attachListener(EventConstants.LOAD_INITIAL_DATA, new LoadInitialDataListener());
        attachListener(EventConstants.CHANGE_WORKSPACE, new WorkspaceChangeListener());
        attachListener(EventConstants.SYNC_OFFILINE_DATA, new OfflineSyncListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Function
    public static void toggle(WorkspaceView view) {
        if (!view.isShowdrop()) {
            showCompanyList(view);
        }
        view.setShowdrop(!view.isShowdrop());
    }

    @Function
    public static void selectWorkspace(WorkspaceView view, WorkspaceListItem data) {
        workspaceChange(view, data.toString());
        view.setShowdrop(false);

    }

    private static boolean hasChange(MapBuilder requestedCompany, MapBuilder sessionCompany) {
        if (null == sessionCompany && null != requestedCompany) {
            return true;
        } else if (null != requestedCompany && null != sessionCompany) {
            if (sessionCompany.getString("itemId").equalsIgnoreCase(requestedCompany.getString("itemId"))) {
                return false;
            }
        }
        return true;
    }

    private static void setInitialName(MapBuilder sessionCompany, WorkspaceView view) {
        if (null != sessionCompany) {
            String name = sessionCompany.getString("itemName");
            if (null != name) {
                view.setSelectedWorkspaceName(name);
            } else {
                view.setSelectedWorkspaceName("Select Company..");

            }
        }
    }

    @Function
    public static void workspaceChange(WorkspaceView view, String data) {
        Logger.log("WORKSPACE CHANGE CALL:" + data);
        MapBuilder requestedCompany = MapBuilder.query(data);
        MapBuilder sessionCompany = Session.getCompany();
        boolean fromHistory = requestedCompany.exists("history");
        boolean hasChange = hasChange(requestedCompany, sessionCompany);
        setInitialName(sessionCompany, view);
        if (hasChange) {
            view.setSelectedWorkspaceName(requestedCompany.getString("itemName"));
            requestedCompany.removeField("history");
            Session.setCompany(requestedCompany.get());
            Event event = null;
            if (fromHistory) {
                event = new Event(EventConstants.FILTER_CLEAN, EventConstants.FILTER_REQUEST, MapBuilder.builder().addField("history", true));
            } else {
                event = new Event(EventConstants.FILTER_CLEAN, EventConstants.FILTER_REQUEST);
            }
            Components.SEARCHBOX.listen(event);
            Map dataMap = MapBuilder.builder()
                    .addField("filter", "All")
                    .addField("requestViaLoadMoreMessege", false).get();
            Components.RECENTSLIST.listen(new Event(EventConstants.LOAD_RECENT_DATA, EventConstants.LOAD_RECENT_DATA, dataMap));
        }

        if (fromHistory) {
            Session.HistoryManager.replace();
        } else {
            Session.HistoryManager.update();
        }

    }

    @Function
    static void showCompanyList(WorkspaceView workspace) {
        workspace.getLoader().setActive(true);
        MapBuilder webDBworkspaces = Components.WORKSPACE.getOfflineStorage().getAll(WORKSPACELIST_TABLE);
        if (webDBworkspaces.getArray().isEmpty()) {
            fetchUserCompanyList(workspace);
        } else {
            populateWorkspaceDropDown(workspace, webDBworkspaces);
        }
    }

    public static void fetchUserCompanyList(WorkspaceView data) {
        new AsyncRequest<WorkspaceView>(userWiseCompanyListEndpoint, data) {
            @Override
            public void preparePostData() {
                String searchKey = "";
                Map<String, Object> queryMap = new HashMap<String, Object>();
                List<Map<String, Object>> filterItems = new ArrayList<Map<String, Object>>();
                Map<String, Object> filterItem = new HashMap<String, Object>();
                filterItem.put("itemId", QueryMetaModel.getItemTypeId(QueryMetaModel.GROUP));
                filterItem.put("itemType", QueryMetaModel.ITEM_TYPE);
                filterItems.add(filterItem);

                queryMap.put("searchKey", "'" + searchKey + "'");
                queryMap.put("filterItems", filterItems);
                queryMap.put("start", -1);
                queryMap.put("end", -1);

                put(getEndpoint(), queryMap);
            }

            @Override
            public boolean doValidate() {
                return true;
            }
        }.call(new ServerCallback< List<Map<String, String>>>() {

            @Override
            public void process(String data) {
                MapBuilder array = MapBuilder.query(data, true);
                populateWorkspaceDropDown((WorkspaceView) getRequest().getView(), array);
                Components.WORKSPACE.getOfflineStorage().updateTable(WORKSPACELIST_TABLE, data);
            }
        });
    }

    static void populateWorkspaceDropDown(WorkspaceView view, MapBuilder arrayBuilder) {
        List<Map<String, Object>> workspaceItems = arrayBuilder.getArray();
        view.getWorkspaceList().clear();
        for (Map<String, Object> workspaceItem : workspaceItems) {
            WorkspaceListItem item = new WorkspaceListItem();
            item.setItemId(MapBuilder.query(workspaceItem).getValue("itemId"));
            item.setItemName(MapBuilder.query(workspaceItem).getValue("itemName"));
            view.getWorkspaceList().add(item);
        }
        view.getLoader().setActive(false);
    }

    public static final String userWiseCompanyListEndpoint = "\"/VirtualItem-portlet.searchitem/searchForWorkspace\"";

    @Override
    public void setComponentName() {
        this.componentName = "workspace-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(WorkspaceView.class
                .getName());

    }

    private class OfflineSyncListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            fetchUserCompanyList(getView());
        }

    }

    private class WorkspaceChangeListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
             MapBuilder data = (MapBuilder) signal.getPackets().get(0);

            if (null != data) {
                invoke("workspaceChange", data.toJSON());
            }
        }

    }

    private class LoadInitialDataListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            MapBuilder sessionCompany = Session.getCompany();
            if (null != sessionCompany) {
                sessionCompany.addField("history", true);
                listen(new Event(EventConstants.CHANGE_WORKSPACE, EventConstants.CHANGE_WORKSPACE, sessionCompany));
            } else {
                invoke("toggle");
            }
        }

    }

    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            Logger.log(signal.getFilter() + " : Received");
            loadComponents(signal);
        }

        void loadComponents(Signal signal) {
            ViewComponentFactory.init(new String[]{
                "workspace"});
            WorkspaceView workspace = new WorkspaceView();
            setView(workspace);
            initChildren(signal, workspace);
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(workspace));

        }

        void initChildren(Signal signal, WorkspaceView view) {
            view.getAdminMenu().setName(Components.ADMINMENU.getComponentName());
            view.getAdminMenu().setModel(Components.ADMINMENU.getDefaultViewName());
            Components.ADMINMENU.listen(signal);
        }
    }

    @Model(className = "WorkspaceListItem", targetId = "mainlayout", properties = {
        @Property(name = "itemId", type = String.class),
        @Property(name = "itemName", type = String.class)
    })
    public class WorkspaceListItemModel {

    }
}
