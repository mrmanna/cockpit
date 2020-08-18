/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.router.hub;

import io.cloudoffice.platform.cockpit.microservice.Keys;
import io.cloudoffice.platform.cockpit.router.Router;
import io.cloudoffice.platform.cockpit.router.hub.port.Port;
import io.cloudoffice.platform.cockpit.server.Server;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.MultivaluedHashMap;
import org.json.JSONArray;
import org.json.JSONObject;

public class Hub extends MultivaluedHashMap<String, Port> {

    Router router;

    public void router(Router router) {
        this.router = router;
    }

    public Router router() {
        return this.router;
    }

    public Hub(Router router) {
        this.router = router;
        mountFromConfig();
    }

    private void mountFromConfig() {
        try {
            Path confFile = Paths.get(router.context().get(Keys.BASEDIR) + "/hub.json");
            String s = new String(Files.readAllBytes(confFile));
            JSONObject hub = new JSONObject(s);
            JSONArray array = hub.getJSONArray("ports");
            for (Object object : array) {
                JSONObject portInfo = (JSONObject) object;
                JSONObject serverInfo = portInfo.getJSONObject("server");
                JSONObject urls = null;
                if(serverInfo.has("urls")){
                    urls = portInfo.getJSONObject("urls");
                }
                Server server = new Server(
                        serverInfo.getString("name"),
                        serverInfo.getString("serverHost"),
                        serverInfo.getInt("serverPort"),
                        serverInfo.getString("domain"),
                        serverInfo.getString("path"),
                        serverInfo.getBoolean("secure"),
                        serverInfo.getBoolean("proxy"),
                        urls
                );
                Port p = new Port(server, router());
                this.add(server.path(), p);
                if(p.server().proxy()){
                    this.add(server.domain(), p);
                }

            }
        } catch (IOException ex) {
            Logger.getLogger(Hub.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
