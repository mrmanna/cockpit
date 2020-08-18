/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.auth;

import io.cloudoffice.platform.cockpit.captain.Captain;
import io.cloudoffice.platform.cockpit.captain.Duty;
import io.cloudoffice.platform.cockpit.microservice.Bootstrap;
import io.cloudoffice.platform.cockpit.microservice.Microservice;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelPromise;
import io.netty.util.AttributeKey;
import java.net.URI;
import java.text.MessageFormat;
import java.util.Base64;
import java.util.Date;
import java.util.logging.Logger;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.server.ContainerRequest;
import org.json.JSONObject;

@Path("o")
public class AuthMicroservice extends Microservice {

    @GET
    @Path("signinui")
    @Produces(MediaType.WILDCARD)
    public void signinForm(@Context ContainerRequest httpRequest) {
        if (!authentic(httpRequest)) {
            URI uri = httpRequest.getRequestUri();
            NewCookie cookie = new NewCookie("service", uri.getQuery().split("=")[1], "/", "cloudoffice.io", "login", -1, false, true);
            Response result = Response.ok().cookie(cookie).header("Pragma", "no-cache").header("Cache-Control", "no-cache").header("LOCATION", "https://accounts.cloudoffice.io/signin").status(Response.Status.MOVED_PERMANENTLY).build();
            publish(httpRequest, result);
        }
    }

    private final static String VALID_SESSION = "alreadyLoggedIn";

    @GET
    @Path("validate")
    @Produces(MediaType.WILDCARD)
    public void validate(@Context ContainerRequest httpRequest) {
        publish(httpRequest, Response.ok(String.valueOf(authentic(httpRequest))).header("Cache-Control", "no-cache").build());
    }
    public static final String signinEndpoint = "/api/jsonws/VirtualItem-portlet.virtualpersonitem/login/username/{0}/password/{1}";

    private boolean validSession(ContainerRequest httpRequest) {
        return authentic(httpRequest);
    }
    public static String INVALID_SESSION = "C0010001";

    @POST
    @Path("signout")
    public void signout(final @Context ContainerRequest request, final String content) {
        ChannelPromise promise = permit(request);
        promise.addListener((ChannelFuture f) -> {
            publish(request, (Response) get(f.channel(), "result"));
        }).addListener(ChannelFutureListener.CLOSE);

        Captain
                .plan(promise)
                .begin((duty) -> {
                    duty.comment("1.VALIDATE SESSION");
                    duty.asExpected(validSession(request));
                }
                ).whenUnexpected((duty) -> {
                    duty.comment("2. WHEN SESSION IS INVALID RETURN WITH MESSAGE");
                    JSONObject result = new JSONObject();
                    result.put("error", INVALID_SESSION);
                    put(duty.captain().assignment().channel(), "result", Response.ok(result)
                            .header("Cache-Control", "no-cache").build());
                    duty.captain().deliverAndCloseAssignment();
                }
                ).then((duty) -> {
                    duty.comment("3. CLEAR SIGNING TOKEN AND SEND BACK THE RESULT");
                    NewCookie signinCookie = new NewCookie(Microservice.TOKEN_KEY, Base64.getEncoder().encodeToString("".getBytes()), "/", "cloudoffice.io", "login", -1, false, true);
                    JSONObject result = new JSONObject();
                    result.put("layout", "layout33");
                    result.put("path", "/signin");
                    Response res = Response.ok(result)
                            .cookie(signinCookie)
                            .header("Cache-Control", "no-cache").build();
                    put(duty.captain().assignment().channel(), "result", res);
                    duty.captain().deliverAndCloseAssignment();
                }).catchError((error) -> {
            error.captain().deliverAndCloseAssignment();
        }).perform();

    }

    @POST
    @Path("signin")
    public void signin(final @Context ContainerRequest httpRequest, String content) {

        if (!validSession(httpRequest)) {
            JSONObject login = null;
            try {
                login = new JSONObject(content);
            } catch (Exception e) {
                noContent(httpRequest);
            }
            if (validSigninRequest(login)) {
                final String username = login.getString("username");
                String path = MessageFormat.format(signinEndpoint, login.getString("username"), login.getString("password"));
                String userCredentials = username + ":" + login.getString("password");
                String basicAuth = "Basic " + new String(Base64.getEncoder().encode(userCredentials.getBytes()));
                httpRequest.getHeaders().add("Authorization", basicAuth);
                Bootstrap.ROUTER.hub().get("/api").listener().listen(ask(path, httpRequest), new AuthValidator()).addListener((ChannelFuture f) -> {
                    if (f.isSuccess()) {
                        Logger.getLogger(AuthMicroservice.class.getName()).info("==LOGGED IN SUCCESSFULLY===");
                        JSONObject obj = new JSONObject(String.valueOf(f.channel().attr(AttributeKey.valueOf("result")).get()));
                        Cookie layout = httpRequest.getCookies().get("layout");
                        Cookie cookiepath = httpRequest.getCookies().get("path");
                        if (null != layout) {
                            obj.put("layout", layout.getValue());
                        }
                        if (null != cookiepath) {
                            obj.put("path", cookiepath.getValue());
                        }
                        String token = username + ":" + String.valueOf(new Date().getTime());
                        final NewCookie cookie = new NewCookie(Microservice.TOKEN_KEY, Base64.getEncoder().encodeToString(token.getBytes()), "/", "cloudoffice.io", "login", -1, false, true);
                        Response result = Response.ok(obj.toString()).cookie(cookie).header("Cache-Control", "no-cache").build();
                        publish(httpRequest, result);
                    } else {
                        noContent(httpRequest);
                    }
                }
                );
            } else {
                noContent(httpRequest);
            }
        } else {
            publish(httpRequest, Response.ok(VALID_SESSION).header("Cache-Control", "no-cache").build());
        }
    }

    void noContent(ContainerRequest httpRequest) {
        Response result = Response.noContent().header("Cache-Control", "no-cache").build();
        publish(httpRequest, result);
    }

    boolean validSigninRequest(JSONObject data) {
        return null != data
                && null != data.getString("username")
                && !data.getString("username").isEmpty()
                && null != data.getString("password")
                && !data.getString("password").isEmpty();
    }
}
