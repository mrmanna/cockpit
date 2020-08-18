/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.shell;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import io.cloudoffice.platform.cockpit.microservice.Bootstrap;
import io.cloudoffice.platform.cockpit.microservice.Keys;
import io.cloudoffice.platform.cockpit.microservice.shell.ShellMicroservice;

public class Startup extends Bootstrap {

    @Override
    public void initContext() {
        try {
            Properties prop = new Properties();
            File jarPath = new File(Startup.class.getProtectionDomain().getCodeSource().getLocation().getPath());
            context().put(Keys.BASEDIR, jarPath.getParentFile().getParentFile().getAbsolutePath());
            Logger.getLogger(Startup.class.getName()).info("propertiesPath-" + context().get(Keys.BASEDIR));
            prop.load(new FileInputStream(context().get(Keys.BASEDIR) + "/config.properties"));
            context().put(Keys.HOST, String.valueOf(prop.get(Keys.HOST)));
            context().put(Keys.PORT, String.valueOf(prop.get(Keys.PORT)));
            context().put(Keys.BOOT_DIRECTORY, String.valueOf(prop.get(Keys.BOOT_DIRECTORY)));
            context().put(Keys.SSOHOST, String.valueOf(prop.get(Keys.SSOHOST)));
            context().put(Keys.BOOT_URL, String.valueOf(prop.get(Keys.BOOT_URL)));
            context().put(Keys.STORE_IS_REMOTE, String.valueOf(prop.get(Keys.STORE_IS_REMOTE)));
            context().put(Keys.STORE_PATH, context().get(Keys.BASEDIR) + "/../../../store/");
            Logger.getLogger(Startup.class.getName()).info("Store Path::" + context().get(Keys.STORE_PATH));
            context().put(Keys.STORE_URL, String.valueOf(prop.get(Keys.STORE_URL)));
            context().put(Keys.DATA_URL, context().get(Keys.STORE_URL) + "?input=cloudoffice/cockpit/boot/view/");
            context().put(Keys.IMAGE_URL, context().get(Keys.STORE_URL) + "/image?input=cloudoffice/cockpit/boot/view/");
            context().put(Keys.JS_URL, context().get(Keys.STORE_URL) + "/js?input=cloudoffice/cockpit/boot/view/");
            context().put(Keys.FONT_URL, context().get(Keys.STORE_URL) + "/font?input=cloudoffice/cockpit/boot/view/");
            context().put(Keys.HTML_URL, context().get(Keys.STORE_URL) + "/html?input=cloudoffice/cockpit/boot/view/");
            context().put(Keys.CSS_URL, context().get(Keys.STORE_URL) + "/css?input=cloudoffice/cockpit/boot/view/");

        } catch (IOException ex) {
            Logger.getLogger(Startup.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public Startup(int threadnum,Class... claz) {
        super(threadnum,claz);
    }

    public static void main(String[] args) throws Exception {
        Bootstrap.startShell(new Startup(10,ShellMicroservice.class));
    }

}
