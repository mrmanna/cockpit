/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.content;

import com.cathive.sass.SassContext;
import com.cathive.sass.SassFileContext;
import com.cathive.sass.SassOptions;
import com.cathive.sass.SassOutputStyle;
import io.cloudoffice.platform.cockpit.microservice.Bootstrap;
import io.cloudoffice.platform.cockpit.microservice.Keys;
import io.cloudoffice.platform.cockpit.microservice.Microservice;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.imageio.ImageIO;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.apache.commons.io.FileUtils;
import org.glassfish.jersey.server.ContainerRequest;
import org.json.JSONObject;

@Path("content")
public class ContentMicroservice extends Microservice {

    public static String defaultCompany = "cloudoffice";

    @GET
    @Path("setup")
    @Produces(MediaType.WILDCARD)
    public void setup(@Context ContainerRequest request, @QueryParam("input") String name) {
        if (!name.equalsIgnoreCase(defaultCompany)) {
            File file = new File(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);
            if (!file.exists()) {
                java.nio.file.Path source = Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/cloudoffice");
                try {
                    FileUtils.copyDirectory(source.toFile(), file);
                } catch (IOException ex) {
                    publish(request, Response.serverError().build());
                }
            }
            String filelocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name + "/cockpit/layout/layout.json");
            java.nio.file.Path path = Paths.get(filelocation);
            try {
                publish(request, Response.ok(new String(Files.readAllBytes(path), StandardCharsets.UTF_8)).build());
            } catch (IOException ex) {
                publish(request, Response.serverError().build());
            }

        } else {
            JSONObject obj = new JSONObject();
            obj.put("layout", "basiclayout");
            publish(request, Response.ok(obj.toString()).build());
        }
    }

    @GET
    @Path("data")
    @Produces(MediaType.WILDCARD)
    public void file(@Context ContainerRequest request, @QueryParam("input") String name, @QueryParam("cache") String cache) {
        if (name.indexOf("?") != -1) {
            name = name.substring(0, name.indexOf("?"));
        }
        if (name.indexOf("&") != -1) {
            name = name.substring(0, name.indexOf("&"));
        }
        boolean cacheTag = false;
        if (null != cache && !cache.isEmpty()) {
            cacheTag = Boolean.valueOf(cache);
        }
        String filelocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);
        if (!filelocation.isEmpty()) {
            try {
                java.nio.file.Path path = Paths.get(filelocation);
                publish(request, response(new String(Files.readAllBytes(path), StandardCharsets.UTF_8), MediaType.MEDIA_TYPE_WILDCARD, cacheTag));
            } catch (FileNotFoundException ex) {
                publish(request, Response.ok("File not found").header("Access-Control-Allow-Origin", "*")
                        .build());
            } catch (IOException ex) {
                publish(request, Response.ok("Cannot Read the File").header("Access-Control-Allow-Origin", "*").build());
            }
        } else {
            publish(request, ContentUtils.processConfigSetup(name));
        }

    }
     @GET
    @Path("data/css")
    @Produces(MediaType.WILDCARD)
    public void staticCss(@Context ContainerRequest request, @QueryParam("input") String name, @QueryParam("cache") String cache) {
        if (name.indexOf("?") != -1) {
            name = name.substring(0, name.indexOf("?"));
        }
        if (name.indexOf("&") != -1) {
            name = name.substring(0, name.indexOf("&"));
        }
        boolean cacheTag = false;
        if (null != cache && !cache.isEmpty()) {
            cacheTag = Boolean.valueOf(cache);
        }
        String filelocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);
        if (!filelocation.isEmpty()) {
            try {
                java.nio.file.Path path = Paths.get(filelocation);
                publish(request, response(new String(Files.readAllBytes(path), StandardCharsets.UTF_8),"text/css", cacheTag));
            } catch (FileNotFoundException ex) {
                publish(request, Response.ok("File not found").header("Access-Control-Allow-Origin", "*")
                        .build());
            } catch (IOException ex) {
                publish(request, Response.ok("Cannot Read the File").header("Access-Control-Allow-Origin", "*").build());
            }
        } else {
            publish(request, ContentUtils.processConfigSetup(name));
        }

    }

    @GET
    @Path("json")
    @Produces(MediaType.APPLICATION_JSON)
    public void json(@Context ContainerRequest request, @QueryParam("input") String name) {
        if (name.indexOf("?") != -1) {
            name = name.substring(0, name.indexOf("?"));
        }
        if (name.indexOf("&") != -1) {
            name = name.substring(0, name.indexOf("&"));
        }
        String filelocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);
        if (!filelocation.isEmpty()) {
            try {
                java.nio.file.Path path = Paths.get(filelocation);
                publish(request, Response.ok(new String(Files.readAllBytes(path), StandardCharsets.UTF_8)).header("Access-Control-Allow-Origin", "*").build());
            } catch (FileNotFoundException ex) {
                publish(request, Response.ok("File not found").header("Access-Control-Allow-Origin", "*")
                        .build());
            } catch (IOException ex) {
                publish(request, Response.ok("Cannot Read the File").header("Access-Control-Allow-Origin", "*").build());
            }
        } else {
            publish(request, ContentUtils.processConfigSetup(name));
        }

    }

    @GET
    @Path("data/image")
    @Produces(MediaType.WILDCARD)
    public void image(@Context ContainerRequest request, @QueryParam("input") String name, @QueryParam("cache") String cache) {
        if (name.indexOf("?") != -1) {
            name = name.substring(0, name.indexOf("?"));
        }
        if (name.indexOf("&") != -1) {
            name = name.substring(0, name.indexOf("&"));
        }
        boolean cacheTag = false;
        if (null != cache && !cache.isEmpty()) {
            cacheTag = Boolean.valueOf(cache);
        }
        String filelocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);
        if (!filelocation.isEmpty()) {
            try {
                java.nio.file.Path path = Paths.get(filelocation);
                if (ContentUtils.isImage(name)) {
                    BufferedImage image = ImageIO.read(path.toFile());
                    ByteArrayOutputStream baos = new ByteArrayOutputStream();
                    ImageIO.write(image, "png", baos);
                    byte[] imageData = baos.toByteArray();
                    publish(request, response(Response.ok(imageData), cacheTag));
                } else {
                    publish(request, Response.ok(new String(Files.readAllBytes(path), StandardCharsets.UTF_8)).build());
                }
            } catch (FileNotFoundException ex) {
                publish(request, Response.ok("File not found").header("Access-Control-Allow-Origin", "*")
                        .build());
            } catch (IOException ex) {
                publish(request, Response.ok("Cannot Read the File").build());
            }
        }

    }

    @GET
    @Path("data/font")
    @Produces(MediaType.APPLICATION_SVG_XML)
    public void font(@Context ContainerRequest request, @QueryParam("input") String name) {
        if (name.indexOf("?") != -1) {
            name = name.substring(0, name.indexOf("?"));
        }
        if (name.indexOf("&") != -1) {
            name = name.substring(0, name.indexOf("&"));
        }
        String filelocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);
        if (!filelocation.isEmpty()) {
            try {
                java.nio.file.Path path = Paths.get(filelocation);
                if (ContentUtils.isFont(name)) {
                    publish(request, Response.ok(Files.readAllBytes(path)).build());
                } else {
                    publish(request, Response.ok(new String(Files.readAllBytes(path), StandardCharsets.UTF_8)).build());
                }
            } catch (FileNotFoundException ex) {
                publish(request, Response.ok("File not found").header("Access-Control-Allow-Origin", "*")
                        .build());
            } catch (IOException ex) {
                publish(request, Response.ok("Cannot Read the File").build());
            }
        }

    }

    @GET
    @Path("data/js")
    @Produces(MediaType.TEXT_PLAIN + ";charset=UTF-8")
    public void js(@Context ContainerRequest request, @QueryParam("input") String name, @QueryParam("cache") String cache) {
        boolean cacheTag = false;
        if (null != cache && !cache.isEmpty()) {
            cacheTag = Boolean.valueOf(cache);
        }
        String filelocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);
        if (!filelocation.isEmpty()) {
            try {
                java.nio.file.Path path = Paths.get(filelocation);
                publish(request, response(new String(Files.readAllBytes(path), StandardCharsets.UTF_8), "application/javascript", cacheTag));
            } catch (FileNotFoundException ex) {
                publish(request, Response.ok("File not found").header("Access-Control-Allow-Origin", "*")
                        .build());
            } catch (IOException ex) {
                publish(request, Response.ok("Cannot Read the File").build());
            }
        }

    }

    @GET
    @Path("data/html")
    @Produces(MediaType.TEXT_HTML + ";charset=UTF-8")
    public void html(@Context ContainerRequest request, @QueryParam("input") String name) {
        String filelocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);
        if (!filelocation.isEmpty()) {
            try {
                java.nio.file.Path path = Paths.get(filelocation);
                publish(request, Response.ok(new String(Files.readAllBytes(path), StandardCharsets.UTF_8)).build());
            } catch (FileNotFoundException ex) {
                publish(request, Response.ok("File not found").header("Access-Control-Allow-Origin", "*")
                        .build());
            } catch (IOException ex) {
                publish(request, Response.ok("Cannot Read the File").build());
            }
        }

    }

    @GET
    @Path("css")
    @Produces(MediaType.WILDCARD)
    public void css(@Context ContainerRequest request, @QueryParam("input") String name) {
        String sasslocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name + ".scss");
        String csslocation = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name + ".css";
        java.nio.file.Path sass = Paths.get(sasslocation);
        java.nio.file.Path css = Paths.get(csslocation);

        if (!sasslocation.isEmpty()) {
            try {
                compileSass(sass, css);
                publish(request, Response.ok(new String(Files.readAllBytes(css), StandardCharsets.UTF_8)).type("text/css").build());
            } catch (FileNotFoundException ex) {
                publish(request, Response.serverError().build());
            } catch (IOException ex) {
                publish(request, Response.serverError().build());
            }
        }

    }

    private static void compileSass(java.nio.file.Path sass, java.nio.file.Path css) {
        SassContext ctx = buildSassContext(sass);
        try (FileOutputStream out = new FileOutputStream(css.toFile())) {
            ctx.compile(out);
        } catch (IOException ex) {
            Logger.getLogger(ContentMicroservice.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    private static String themeDirectory = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + "theme";

    private static SassContext buildSassContext(java.nio.file.Path sassFilePath) {
        SassContext ctx = SassFileContext.create(sassFilePath);
        java.nio.file.Path sassDirectory = sassFilePath.getParent();
        SassOptions options = ctx.getOptions();
        options.setIncludePath(sassDirectory, Paths.get(themeDirectory));
        options.setOutputStyle(SassOutputStyle.NESTED);
        return ctx;
    }

    private String validateFile(String name) {
        boolean valid = false;
        File file = null;
        try {
            file = new File(name);

            valid = (file.exists()) ? true : file.createNewFile();
        } catch (Exception ex) {
            Logger.getLogger(ContentMicroservice.class.getName()).log(Level.SEVERE, ex.getMessage());
        }
        return (valid) ? file.getPath() : "";
    }

    private String validateDir(String name) {
        boolean valid = false;
        File file = new File(name);
        valid = (file.exists()) ? file.isDirectory() : file.mkdir();
        return (valid) ? file.getPath() : "";
    }

    private static void writeFile(String filelocation, String content) throws IOException {
        File file = new File(filelocation);
        if (!file.exists()) {
            file.createNewFile();
        }
        FileWriter fw = new FileWriter(file);
        fw.write(content);
        fw.close();
    }

    @POST
    @Path("/{company}/{site}/{component}/{filename}")
    @Produces(MediaType.WILDCARD)
    public void data(@Context ContainerRequest request, @PathParam("company") String company, @PathParam("site") String site, @PathParam("component") String component, @PathParam("filename") String filename, String content) {
        try {
            String componentPath = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + company
                    + File.separator + site + File.separator + component;
            String filelocation = componentPath + File.separator + filename;
            writeFile(filelocation, content);
            publish(request, Response.ok().build());

        } catch (IOException ex) {
            publish(request, Response.serverError().build());
        }
    }

    @POST
    @Path("/{location}")
    @Produces(MediaType.WILDCARD)
    public void hexapath(@Context ContainerRequest request, @PathParam("location") String location, String content) {
        String filelocation = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + ContentUtils.hexToString(location);
        try {
            writeFile(filelocation, content);
            publish(request, Response.ok().build());

        } catch (IOException ex) {
            publish(request, Response.serverError().build());
        }
    }

    @GET
    @Path("write")
    @Produces(MediaType.TEXT_PLAIN)
    public void write(@Context ContainerRequest request, @QueryParam("name") String name, @QueryParam("content") String content) {
        try {
            java.nio.file.Path path = Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH));
            if (!Files.exists(path)) {
                try {
                    Files.createDirectory(path);

                } catch (IOException ex) {
                    Logger.getLogger(ContentMicroservice.class
                            .getName()).log(Level.SEVERE, null, ex);
                    publish(request, Response.notModified().build());
                }
            }
            File file = new File(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);

            FileWriter fw = new FileWriter(file);
            fw.write(content);
            fw.close();
            publish(request, Response.ok().build());

        } catch (IOException ex) {
            Logger.getLogger(ContentMicroservice.class
                    .getName()).log(Level.SEVERE, null, ex);

            publish(request, Response.notModified().build());

        }

    }
}
