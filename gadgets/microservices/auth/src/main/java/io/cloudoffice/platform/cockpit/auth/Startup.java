/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.auth;

import io.cloudoffice.platform.cockpit.microservice.auth.AuthMicroservice;
import io.cloudoffice.platform.cockpit.microservice.Bootstrap;
import io.cloudoffice.platform.cockpit.microservice.Keys;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Startup extends Bootstrap {

   public Startup(int threadnum ,Class... claz){
       super(threadnum,claz);
   }

     @Override
    public void initContext() {
        
        try {
            Properties prop = new Properties();
            File jarPath = new File(Startup.class.getProtectionDomain().getCodeSource().getLocation().getPath());
            context().put(Keys.BASEDIR, jarPath.getParentFile().getParentFile().getAbsolutePath());
            Logger.getLogger(Startup.class.getName()).info(" propertiesPath-" + context().get(Keys.BASEDIR));
            prop.load(new FileInputStream(context().get(Keys.BASEDIR) + "/config.properties"));
            // prop.load(Startup.class.getResourceAsStream("./config.properties"));
            context().put(Keys.PORT, String.valueOf(prop.get(Keys.PORT)));
            context().put(Keys.HOST, String.valueOf(prop.get(Keys.HOST )));
            context().put(Keys.STORE_URL, String.valueOf(prop.get(Keys.STORE_URL)));
             context().put(Keys.STORE_PATH, context().get(Keys.BASEDIR) + "/../../../store/");

        } catch (IOException ex) {
            Logger.getLogger(Startup.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    public static void main(String[] args) throws Exception {
        Bootstrap.start(new Startup(0,AuthMicroservice.class));
    }

}
