package io.cloudoffice.platform.cockpit.api;

import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.Property;

/**
 *
 * @author Cloudoffice
 */
@Model(className = "HelperItemView", targetId = "messagebar", properties = {
    @Property(name = "headerText", type = String.class),
    @Property(name = "info", type = String.class),
    @Property(name = "icon", type = String.class),
    @Property(name = "active", type = boolean.class),
    @Property(name = "cssClass", type = String.class)
})

public class HelperItemComponent extends AbstractComponent<HelperItemView> {
    /**
     * Initialize
     */
    public static Component defaultInstance = new HelperItemComponent();
    @Override
    public void bindEventListeners() {
    }
    
    @Override
    public void onError(Error message, Source source) {
        invoke("show", MapBuilder.builder().addField("active", "true"));
    }
    
    @Function
    static void show(HelperItemView view, String data) {
        String active = MapBuilder.query(data).getValue("active");
        view.setActive(Boolean.parseBoolean(active));
        view.setInfo("Testing");
    }
    
    @Function
    static void close(HelperItemView view) {
        view.setActive(false);
    }
    
    @Override
    public void bindViewNames() {
        setDefaultViewName(HelperItemView.class.getName());
    }
    
    @Override
    public void setComponentName() {
    }
    
}
