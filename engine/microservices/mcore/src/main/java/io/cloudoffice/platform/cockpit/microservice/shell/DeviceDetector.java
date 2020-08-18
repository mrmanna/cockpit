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

    public enum Browser {
        CHROME,
        OTHER
    }

    public static Browser detect(String useragent) {
        boolean isFirefox = useragent.contains("Firefox");
        boolean isEdge = useragent.contains("Edge");
        boolean isChrome = (!isEdge && useragent.contains("Chrome"));
        boolean isSafari = (!isEdge && !isChrome && useragent.contains("Safari"));
        boolean isIE = !isSafari && !isEdge & !isChrome & !isFirefox;

        return (isChrome) ? Browser.CHROME : Browser.OTHER;
    }

    public boolean isMobile() {
        return this.useragent.contains("Mobi");
    }

    public Shell detect() {
        if (null != this.useragent && !this.useragent.contains("Mobi")) {
            if (!this.useragent.contains("JavaFX")) {
                return new WebShell();
            } else {
                return new WebShell();
            }
        } else {
            return new WebShell();
        }

    }
}
