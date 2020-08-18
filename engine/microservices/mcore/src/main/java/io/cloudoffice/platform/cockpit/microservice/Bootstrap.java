/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice;

import static io.cloudoffice.platform.cockpit.microservice.Keys.BASEDIR;
import io.cloudoffice.platform.cockpit.microservice.shell.ShellRouterActivator;
import io.cloudoffice.platform.cockpit.router.Context;
import io.cloudoffice.platform.cockpit.router.DefaultRouterActivator;
import io.cloudoffice.platform.cockpit.router.wan.RestWANPort;
import io.cloudoffice.platform.cockpit.router.Router;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Cloudoffice
 */
public abstract class Bootstrap {

    public static Router ROUTER;
    private Context context;

    public void context(Context context) {
        this.context = context;
    }

    public Bootstrap(int threadnum,Class... microservice) {
        this.context=new Context();
        initContext();
        Bootstrap.ROUTER = new Router(context().get(Keys.HOST), Integer.parseInt(context().get(Keys.PORT)), BASEDIR, context(),threadnum, microservice);
    }

    public Context context() {
        return context;
    }

    /**
     * read properties file here and set context values from properties
     * <code>this.context().put(key,value);</code>
     *
     * @return
     */
    public abstract void initContext();

    public static void start(Bootstrap boot) {
        try {
            Bootstrap.ROUTER.bindWANPort(RestWANPort.class).activate(DefaultRouterActivator.class);
        } catch (Exception ex) {
            Logger.getLogger(Bootstrap.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
      public static void startShell(Bootstrap boot) {
        try {
            Bootstrap.ROUTER.bindWANPort(RestWANPort.class).activate(ShellRouterActivator.class);
        } catch (Exception ex) {
            Logger.getLogger(Bootstrap.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
