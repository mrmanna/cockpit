/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.shell;

import io.cloudoffice.platform.cockpit.microservice.Microservice;
import io.cloudoffice.platform.cockpit.router.Router;
import java.util.logging.Level;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.server.ContainerRequest;

@Path("/")
public class ShellMicroservice extends Microservice {

    @Context
    Configuration config;
    PathResolver resolver;

    @GET
    @Path("{any: .*}")
    @Produces(MediaType.WILDCARD)
    public void shell(final @Context ContainerRequest request) {
        Router router = (Router) config.getProperties().get("router");
        router.serverLogger().log(Level.CONFIG, "Serviing Shell for::" + request.getRequestUri().getHost());
        resolver = new PathResolver(request, authentic(request));
        publish(request, getResponse(request));

    }

    private Response getResponse(ContainerRequest request) {
        ShellProvider shellprovider = ShellProvider.buildShell(resolver);
        String result = shellprovider.result();
        Response.ResponseBuilder res = Response.ok(result).header("Access-Control-Allow-Origin", "*").header("Cache-Control", "no-cache");
        if (resolver.requester().authenticated()) {
            res.cookie(refreshToken(request));
        }
        if (resolver.requiresSignin()) {
            NewCookie layout = new NewCookie("layout", resolver.nextPathLayout(), "/", "cloudoffice.io", "login", -1, false, true);
            NewCookie path = new NewCookie("path", resolver.nextPathObject().getString("path"), "/", "cloudoffice.io", "login", -1, false, true);
            res.cookie(layout).cookie(path);
        }
        return res.build();

    }
}
