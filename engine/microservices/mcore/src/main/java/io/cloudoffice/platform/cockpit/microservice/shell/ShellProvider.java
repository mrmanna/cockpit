/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.shell;

public class ShellProvider {

    private PathResolver resolver = null;
    private Shell shell;

    public Shell shell() {
        return this.shell;
    }

    private ShellProvider( PathResolver resolver) {
        this.resolver = resolver;
        this.shell = resolver.detector().detect();

    }

    public static ShellProvider buildShell( PathResolver resolver) {
        return new ShellProvider(resolver);
    }

    public String result() {
        //  Shell shell = this.detector.detect();
        return shell().dispatch(this.resolver);

    }
     public String subscriptions() {
        return shell().subscriptions().toString();

    }
}
