/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.shell;

import io.cloudoffice.platform.cockpit.microservice.Bootstrap;
import io.cloudoffice.platform.cockpit.microservice.Keys;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

public class DesktopShell extends Shell {

    public DesktopShell() {
        this.mainclass = "io.cloudoffice.platform.cockpit.web.BrowserMain";
        this.indexPageName = "desktop.html";
        this.securePageName = "securedesktop.html";
    }

    @Override
    public Shell getRawHtml() {
        String indexHome = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + bootDirectoryRelativePath;;
        java.nio.file.Path indexPath = Paths.get(indexHome + "desktop.html");
        try {
            this.homepage = new String(Files.readAllBytes(indexPath));
        } catch (IOException ex) {
            Logger.getLogger(this.getClass().getName()).log(Level.SEVERE, null, ex);
        }
        return this;
    }

    public String dispatch(PathResolver resolver) {
        this.resolver = resolver;
        return getRawHtml()
                .addSubscriptions()
                .setCurentPathAndLayout()
                .ensureResourceStore()
                .dispatch();
    }
}
