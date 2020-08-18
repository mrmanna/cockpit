/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.shell;

public class DeviceDetector {

    String useragent;

    public DeviceDetector(String useragent) {
        this.useragent = useragent;
    }

    public Shell detect() {
        if (null!=this.useragent&&!this.useragent.contains("Mobi")) {
            if (!this.useragent.contains("JavaFX")) {
                return new WebShell();
            } else {
                return new DesktopShell();
            }
        } else {
            return new WebShell();
        }

    }
}
