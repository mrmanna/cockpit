/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.newitemmenu;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Error;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.EventListener;
import io.cloudoffice.platform.cockpit.api.MapBuilder;
import io.cloudoffice.platform.cockpit.api.QueryMetaModel;
import io.cloudoffice.platform.cockpit.api.Signal;
import io.cloudoffice.platform.cockpit.api.Source;
import io.cloudoffice.platform.cockpit.componentprocessor.PluggableComponent;
import io.cloudoffice.platform.cockpit.js.ViewComponentFactory;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;


@Model(className = "NewItemMenuView", targetId = "", properties = {
    @Property(name = "showNewItemMenu", type = boolean.class)
})

@PluggableComponent(name = "NEWITEMMENU", locator = "Components")
public class NewItemMenuComponent extends AbstractComponent<NewItemMenuView> {

    @Override
    public void setComponentName() {
        this.componentName = "new-item-menu-component";
    }

    @Override
    public void bindViewNames() {
        setDefaultViewName(NewItemMenuView.class.getName());
    }

    @Override
    public void bindEventListeners() {
        attachListener(EventConstants.LOGIN_SUCCESS, new LoginEventListener());
    }

    @Override
    public void onError(Error message, Source source) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    @Function
    public static void toggleNewItemMenu(NewItemMenuView view) {
        view.setShowNewItemMenu(!view.isShowNewItemMenu());
    }
    
    @Function
    public static void newItemCreateForm(NewItemMenuView view, String data) {
        MapBuilder newItem = MapBuilder.builder()
                    .addField("itemId", "0")
                    .addField("itemType", data)
                    .addField("itemName", "Untitled")
                    .addField("itemIcon", QueryMetaModel.getItemTypeIconCss(data));
            Event signal = new Event(EventConstants.NEW_ITEM_FILTER_REQUEST, EventConstants.NEW_ITEM_FILTER_REQUEST, newItem);
            Components.SEARCHBOX.listen(signal);
    }
    
    public class LoginEventListener implements EventListener {

        @Override
        public void onReceive(Signal signal) {
            loadComponents(signal);

        }

        void loadComponents(Signal signal) {
            ViewComponentFactory.init(new String[]{
                "new-item-menu"});
            NewItemMenuView itemMenuView = new NewItemMenuView();
            setView(itemMenuView);
            ViewComponentFactory.addComponentData(getDefaultViewName(), Models.toRaw(itemMenuView));
        }
    }
}
