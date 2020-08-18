/**
 * **************************************************************************
 * Copyright (c) 2012-2016, EUSIA BD LTD. and/or its affiliates. All rights
 * reserved. EUSIA PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 * **************************************************************************
 */
package io.cloudoffice.platform.cockpit.boot;

import io.cloudoffice.platform.cockpit.api.AbstractComponent;
import io.cloudoffice.platform.cockpit.api.Application;
import io.cloudoffice.platform.cockpit.api.AsyncRequestProcessor;
import io.cloudoffice.platform.cockpit.api.Components;
import io.cloudoffice.platform.cockpit.api.Event;
import io.cloudoffice.platform.cockpit.api.EventConstants;
import io.cloudoffice.platform.cockpit.api.HelperItemView;
import io.cloudoffice.platform.cockpit.api.WebSocketConnection;
import io.cloudoffice.platform.cockpit.js.CustomTemplateLoader;
import io.cloudoffice.platform.cockpit.js.FileUpload;
import io.cloudoffice.platform.cockpit.js.History;
import io.cloudoffice.platform.cockpit.js.JQuery;
import io.cloudoffice.platform.cockpit.js.JSUIUtils;
import io.cloudoffice.platform.cockpit.js.VIEW;
import net.java.html.BrwsrCtx;
import net.java.html.json.Models;

/**
 *
 */
public class Startup {

    private static BootContext bootContext;

    public static BootContext getBootContext() {
        return bootContext;
    }

    public static void fromWeb() throws Exception {
        Startup.setDevice(Startup.DEVICE.WEB);
        Startup.onPageLoad();
    }

    public static void fromDesktop() throws Exception {
        Startup.setDevice(Startup.DEVICE.DESKTOP);
        Startup.onPageLoad();
    }

    public static void onPageLoad() throws Exception {
        initKOContext();
        BrwsrCtx ctx = BrwsrCtx.findDefault(BootContext.class);
        initJavaContext(ctx);
        loadInitialComponents(ctx);
        //LocalStorage.remove("session");
        Components.BOOT.getFlags().put("start", true);
        Components.BOOT.listen(new Event(EventConstants.BOOT, EventConstants.BOOT));

        AsyncRequestProcessor.currentProcessor().start();
    }

    private static void initKOContext() {
        bootContext = new BootContext();
        Models.toRaw(bootContext);
        JQuery.init();
        JSUIUtils.init();
        History.init();
        VIEW.registerComponent();
        VIEW.globalComponentsValue();

    }

    public static void loadInitialComponents(BrwsrCtx ctx) {

        VIEW.render(new String[]{"messagebar", "mini-loader", "blank"});
    }

    public static DEVICE device;

    public static void initJavaContext(BrwsrCtx ctx) {
        String host=(Startup.device.getValue().equalsIgnoreCase(Application.DESKTOP))?JSUIUtils.getDHost():JSUIUtils.getHost();
        Application.createApplicationContext("https://" + host + "/api/jsonws/invoke", ctx);
        Startup.device.store();
        Components.BOOT = new io.cloudoffice.platform.cockpit.boot.BootComponent(getBootContext());

        VIEW.bind("ws", Models.toRaw(new WebSocketConnection()));
        VIEW.bind(HelperItemView.class.getName(), Models.toRaw(getBootContext().getMessagebar()));

        //MomentJS.locale();       
        FileUpload.registerComponent();
//        if(Startup.DEVICE.WEB == Startup.device){
//        CacheSync.sync();
//        }

    }

    static void setDevice(DEVICE device) {
        Startup.device = device;
    }

    enum DEVICE {
        DESKTOP(Application.DESKTOP),
        WEB(Application.WEB),
        ANDROID(Application.ANDROID),
        IOS(Application.IOS);

        private DEVICE(String value) {
            this.value = value;
        }

        String value;

        public String getValue() {
            return value;
        }

        public void store() {
            Application.getApplicationContext().setDevice(Startup.device.getValue());
            Application.store();
        }

    }

}
