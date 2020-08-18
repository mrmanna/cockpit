/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.shell;

public class ShellProvider {

    private DeviceDetector detector = null;
    private PathResolver resolver = null;

  
    private ShellProvider(String useragent, PathResolver resolver) {
        this.detector = new DeviceDetector(useragent);
        this.resolver = resolver;

    }

    public static ShellProvider buildShell(String useragent,PathResolver resolver) {
        return new ShellProvider(useragent,resolver);
    }

    public String dispatch() {
      //  Shell shell = this.detector.detect();
        return this.detector.detect().dispatch(this.resolver);

    }
}
