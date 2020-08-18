/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.metrics;

import io.cloudoffice.platform.cockpit.microservice.Bootstrap;
import io.cloudoffice.platform.cockpit.microservice.Keys;
import io.cloudoffice.platform.cockpit.microservice.Microservice;
import io.cloudoffice.platform.cockpit.microservice.content.ContentMicroservice;
import static io.cloudoffice.platform.cockpit.microservice.content.ContentUtils.getComponentTargetConf;
import io.cloudoffice.platform.cockpit.microservice.shell.PathResolver;
import io.cloudoffice.platform.cockpit.router.Router;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.server.ContainerRequest;
import org.json.JSONArray;
import org.json.JSONObject;


/**
 *
 * @author sysadmin
 */
@Path("metrics")
public class MetricsMicroservice extends Microservice {

    @Context
    Configuration config;
    PathResolver resolver;

    @POST
    @Path("/health")
    @Produces(MediaType.WILDCARD)
    public void health(@Context ContainerRequest request, String content) {
        //request.getHeaders().get("Host");
        Router router = (Router) config.getProperties().get("router");
        router.serverLogger().log(Level.CONFIG, "Serviing Shell for::" + request.getRequestUri().getHost());
        resolver = new PathResolver(request, authentic(request));
        //resolver = new PathResolver(request, true);
        String companyId = resolver.companyId();

        metrixWriter(content, companyId, request);
        Logger.getLogger(this.getClass().getName()).log(Level.SEVERE, "=======Got the content", content);
        //System.out.println(content);
    }

    public void metrixWriter(String content, String companyId, ContainerRequest request) {
        String hostname = request.getHeaders().get("Host").get(0);
        //File file = new File(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + companyId + "/cockpit/metric/"+hostname+".json");
        Date date = new Date();
        SimpleDateFormat dateFormat1 = new SimpleDateFormat(("yyyy-MM-dd"));
        try {
            java.nio.file.Path path = Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + companyId + "/cockpit/metric");
            if (!Files.exists(path)) {

                createPath(path, request);
                //change this portion of code later

            }
            java.nio.file.Path path2 = Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + companyId + "/cockpit/metric/" + hostname);
            if (!Files.exists(path2)) {
                createPath(path2, request);
            }
            JSONObject obj = new JSONObject();
            obj.put("currentTime", currentTime());
            obj.put("siteName", hostname);
            obj.put("from", "health");
            JSONArray parameters = new JSONArray();
            JSONObject parametersObj = new JSONObject();
            parametersObj.put("initialHeapSize", content);
            parameters.put(parametersObj);
            obj.put("Health-Param", parameters);

            JSONArray finalArray = new JSONArray();
            finalArray.put(obj);

            //String dateFormatedFileName = fileNameModifier(date);
            File file = new File(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + companyId + "/cockpit/metric/" + hostname + "/" + dateFormat1.format(date) + ".json");

            if (!file.exists()) {
                FileWriter fw = new FileWriter(file);
                fw.write(finalArray.toString());
                fw.close();
                publish(request, Response.ok(finalArray.toString()).build());
            } else {

                JSONArray existingArray = getArray(file);
                existingArray.put(obj);
                FileWriter fw = new FileWriter(file);
                fw.write(existingArray.toString());
                fw.close();
                publish(request, Response.ok(existingArray.toString()).build());
            }

            //publish(request, Response.ok().build());
        } catch (IOException ex) {
            Logger.getLogger(ContentMicroservice.class
                    .getName()).log(Level.SEVERE, null, ex);

            publish(request, Response.notModified().build());

        }
    }

    public static String currentTime() {
        DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
        Date date = new Date();
        return dateFormat.format(date);

    }

    public static JSONArray getArray(File file) {
        try {
            String value = new String(Files.readAllBytes(file.toPath()));
            JSONArray jsonArray = new JSONArray(value);
            return jsonArray;
        } catch (FileNotFoundException ex) {
            Logger.getLogger(MetricsMicroservice.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(MetricsMicroservice.class.getName()).log(Level.SEVERE, null, ex);
        } 
        return null;
    }

    public static JSONObject getJsonObj(File file) {
        
        try {
            String value = new String(Files.readAllBytes(file.toPath()));
            JSONObject objfinal = new JSONObject(value);
            return objfinal;
        } catch (FileNotFoundException ex) {
            Logger.getLogger(MetricsMicroservice.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(MetricsMicroservice.class.getName()).log(Level.SEVERE, null, ex);
        } 
        return null;
    }

    public void createPath(java.nio.file.Path path, ContainerRequest request) {
        try {
            Files.createDirectory(path);

        } catch (IOException ex) {
            Logger.getLogger(ContentMicroservice.class
                    .getName()).log(Level.SEVERE, null, ex);
            publish(request, Response.notModified().build());
        }
    }

    public static String fileNameModifier(Date date) {
        SimpleDateFormat dateFormat1 = new SimpleDateFormat(("yyyy-MM-dd"));
        String fileNames = dateFormat1.format(date);
        fileNames = fileNames.replaceAll("-", "");
        return fileNames;
    }
}
