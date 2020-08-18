package io.cloudoffice.platform.cockpit.web;

import io.cloudoffice.platform.cockpit.boot.Startup;


public class BrowserMain {
    private BrowserMain() {
    }

    public static void main(String... args) throws Exception {
       Startup.fromWeb();
    }
}
