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
import io.cloudoffice.platform.cockpit.util.UtilValidate;
import io.netty.handler.codec.http.HttpHeaderNames;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.DirectoryStream;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.imageio.ImageIO;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.apache.commons.io.FileUtils;
import org.glassfish.jersey.server.ContainerRequest;
import org.json.JSONObject;

@Path("content")
public class ContentMicroservice extends Microservice {

    @Context
    Configuration config;
    // Router router = (Router)config.getProperties().get("router");
    private final static String THEME_DIRECTORY = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + "theme";
    private final static String DEFAULT_COMPANY = "cloudoffice";
    private final static String ACTION_INSERT = "insert";
    private final static String ACTION_DELETE = "delete";
    private final static String ROW = "row";
    private final static String GENERAL_SCSS = "generalscss";
    private final static String VARIABLE_SCSS = "variablescss";


    /**
     * This service is used to copy a directory with children from source to the
     * destination
     *
     * @param request
     * @param source
     * @param destination
     */
    
    @GET
    @Path("directory/copy")
    @Produces(MediaType.WILDCARD)
    public void directorycopy(@Context ContainerRequest request, @QueryParam("source") String source, @QueryParam("destination") String destination) {
        String sourcedirectory = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + ContentUtils.hexToString(source);
        String destinationdirectory = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + ContentUtils.hexToString(destination);
        try {
            File srcDir = new File(sourcedirectory);
            File destDir = new File(destinationdirectory);
            FileUtils.copyDirectoryToDirectory(srcDir, destDir);
            publish(request, Response.ok().build());
        } catch (IOException ex) {
            Logger.getLogger(ContentMicroservice.class.getName()).log(Level.SEVERE, null, ex);
            publish(request, Response.serverError().build());
        }
    }

    /**
     * This service is used to delete a directory
     *
     * @param request
     * @param urlhex
     */
    
    @GET
    @Path("directory/delete")
    @Produces(MediaType.WILDCARD)
    public void directorydelete(@Context ContainerRequest request, @QueryParam("url") String urlhex) {
        String directory = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + ContentUtils.hexToString(urlhex);
        try {
            delete(directory);
            publish(request, Response.ok().build());
        } catch (IOException ex) {
            Logger.getLogger(ContentMicroservice.class.getName()).log(Level.SEVERE, null, ex);
            publish(request, Response.serverError().build());
        }
    }

    @GET
    @Path("directory/deletechild")
    @Produces(MediaType.WILDCARD)
    public void directorydeletechild(@Context ContainerRequest request, @QueryParam("url") String urlhex, @QueryParam("childname") String childnamehex) {
        String parentdirectory = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + ContentUtils.hexToString(urlhex);
        String childname = ContentUtils.hexToString(childnamehex);
        deletechild(request, parentdirectory, childname);
    }
    
    @GET
    @Path("setup")
    @Produces(MediaType.WILDCARD)
    public void setup(@Context ContainerRequest request, @QueryParam("input") String name) {
        if (!name.equalsIgnoreCase(DEFAULT_COMPANY)) {
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
        String mime = MediaType.WILDCARD_TYPE.getType();
        boolean sw = false;
        if (name.endsWith("app.js")||name.endsWith("server-agent.js")) {
            mime = "application/javascript";
            sw = true;
        }
        boolean cacheTag = false;
        if (null != cache && !cache.isEmpty()) {
            cacheTag = Boolean.valueOf(cache);
        }
        String filelocation = validateFile(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/" + name);
        if (!filelocation.isEmpty()) {
            try {
                java.nio.file.Path path = Paths.get(filelocation);
                if (sw) {
                    publish(request, Response.ok(new String(Files.readAllBytes(path), StandardCharsets.UTF_8))
                            .header("Service-Worker-Allowed", "/")
                            .header(HttpHeaderNames.CONTENT_TYPE.toString(), mime).build()
                    );
                } else {
                    publish(request, response(new String(Files.readAllBytes(path), StandardCharsets.UTF_8), mime, cacheTag));
                }
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
                publish(request, response(new String(Files.readAllBytes(path), StandardCharsets.UTF_8), "text/css", cacheTag));
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
//       / router.serverLogger().log(Level.CONFIG,"Serviing JS for::"+request.getRequestUri().getPath());
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

    @POST
    @Path("/{company}/{site}/{component}/{filename}")
    @Produces(MediaType.WILDCARD)
    public void data(@Context ContainerRequest request, @PathParam("company") String company, @PathParam("site") String site, @PathParam("component") String component, @PathParam("filename") String filename, String content) {
        String componentPath = Bootstrap.ROUTER.context().get(Keys.STORE_PATH)
                + File.separator + company
                + File.separator + site
                + File.separator + component;
        String filelocation = componentPath + File.separator + filename;
        writeAndPublish(request, filelocation, content);
    }

    @POST
    @Path("/{location}")
    @Produces(MediaType.WILDCARD)
    public void hexapath(@Context ContainerRequest request, @PathParam("location") String location, String content) {
        String filelocation = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + ContentUtils.hexToString(location);
        writeAndPublish(request, filelocation, content);
    }

    @POST
    @Path("/layout/{inputdirectory}/{inputparentid}/{inputchildid}/{inputchildtype}/{inputoperationtype}")
    @Produces(MediaType.WILDCARD)
    public void layout(@Context ContainerRequest request,
            @PathParam("inputdirectory") String inputdirectory,
            @PathParam("inputparentid") String inputparentid,
            @PathParam("inputchildid") String inputchildid,
            @PathParam("inputchildtype") String inputchildtype,
            @PathParam("inputoperationtype") String inputoperationtype,
            String content) {
        
        String layoutDirectory = Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + File.separator + ContentUtils.hexToString(inputdirectory);
        if (UtilValidate.isNotEmpty(layoutDirectory)) {
            String configDirectory = layoutDirectory.concat("/controller/conf/");
            String configFile = configDirectory.concat("layout.json");
            String styleDirectory = layoutDirectory.concat("/view/style/");
            String parentid = ContentUtils.hexToString(inputparentid);
            String childid = ContentUtils.hexToString(inputchildid);
            String childtype = ContentUtils.hexToString(inputchildtype);
            String operationtype = ContentUtils.hexToString(inputoperationtype);
            try {
                // update configuration
                writeFile(configFile, content);
                // update style
                if (UtilValidate.isNotEmpty(operationtype)) {
                    performStyleOperation(request, styleDirectory, parentid, childid, childtype, operationtype);
                }
            } catch (IOException ex) {
                publish(request, Response.serverError().build());
            }

        }
    }

    /**
     * Perform SCSS operation depending on operation type.
     *
     * @param request
     * @param styleDirectory
     * @param parentid [if row then id of layout / if column then id of row]
     * @param childid [id of row / id of column]
     * @param childtype [row / column]
     * @param operationtype [insert / delete]
     */
    private void performStyleOperation(ContainerRequest request, String styleDirectory, String parentid, String childid, String childtype, String operationtype) {
        if (operationtype.equalsIgnoreCase(ACTION_INSERT)) {
            performStyleInsertOperation(request, styleDirectory, parentid, childid, childtype);
        } else if (operationtype.equalsIgnoreCase(ACTION_DELETE)) {
            performStyleDeleteOperation(request, styleDirectory, parentid, childid, childtype);
        }

        // after performing style add/remove operation build the layout.scss and generate layout.css
        if (UtilValidate.isNotEmpty(styleDirectory)) {
            java.nio.file.Path sass = Paths.get(styleDirectory.concat("/layout.scss"));
            java.nio.file.Path css = Paths.get(styleDirectory.concat("/layout.css"));
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
    
    
    
    
    
    /**
     * Generate SCSS file on the style directory && if child type is column then
     * add this as import to the row scss file.
     *
     * @param request
     * @param styleDirectory
     * @param parentid [if row then id of layout / if column then id of row]
     * @param childid [id of row / id of column]
     * @param childtype [row / column]
     */
    private void performStyleInsertOperation(ContainerRequest request, String styleDirectory, String parentid, String childid, String childtype) {
        
        // generate general and variable scss
        String scssdirectory = styleDirectory.concat(childid + ".scss");
        String variablescssdirectory = styleDirectory.concat(childid + "-variables.scss");
        createAndwriteContentFromSource(scssdirectory, childid, GENERAL_SCSS);
        createAndwriteContentFromSource(variablescssdirectory, childid, VARIABLE_SCSS);
        
        addImportToParentScss(styleDirectory, parentid, childid);
        publish(request, Response.ok().build());
    }    
    
    /**
     * Generate SCSS and write content from the source file.
     *
     * @param fileDirectory
     * @param childid [id of row / id of column]
     * @param styleType [.scss and variable.scss]
     */
    private void createAndwriteContentFromSource(String fileDirectory, String childid, String styleType) {
        try {
            writeFile(fileDirectory, getLayoutContentCoppiedFromScoure(childid, styleType));
        } catch (IOException e) {
        }
    }  
    
    /**
     * @param childid [id of row / id of column]
     * @param styleType [.scss and variable.scss]
     * @return copy static scss content from source (cloudoffice)
     */
    private String getLayoutContentCoppiedFromScoure(String childid, String styleType) {
        String content = "";
        try {
            if (GENERAL_SCSS.equalsIgnoreCase(styleType)) {
                java.nio.file.Path stylepath = Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/cloudoffice/cockpit/layout/view/style/layoutchild.scss");
                content = new String(Files.readAllBytes(stylepath), StandardCharsets.UTF_8).replaceAll("layoutchild", childid);
            } else if (VARIABLE_SCSS.equalsIgnoreCase(styleType)) {
                java.nio.file.Path stylepath = Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/cloudoffice/cockpit/layout/view/style/layoutchild-variables.scss");
                content = new String(Files.readAllBytes(stylepath), StandardCharsets.UTF_8).replaceAll("layoutchild", childid);
            }
        } catch (IOException e) {
        }
        return content;
    }    
    
    /**
     * If child is a column then add this as an import to the parent(row) scss
     * file.
     *
     * @param styleDirectory
     * @param parentid [if row then id of layout / if column then id of row]
     * @param childid [id of row / id of column]
     */
    private void addImportToParentScss(String styleDirectory, String parentid, String childid) {
        String stylefiledirectory = styleDirectory + "/" + parentid + ".scss";
        try {
            java.nio.file.Path parentScssStylepath = Paths.get(stylefiledirectory);
            String content = new String(Files.readAllBytes(parentScssStylepath), StandardCharsets.UTF_8);
            String importString = "@import \'" + childid + ".scss\'";
            String updatedContent = ContentUtils.updateImport(content, importString, ACTION_INSERT);
            writeFile(stylefiledirectory, updatedContent);
        } catch (IOException e) {
        }
    }

    /**
     * Remove style of child by childid, If child is row then also delete all
     * attached childrens, If child is column then remove imports from the
     * parent(row) scss.
     *
     * @param request
     * @param styleDirectory
     * @param parentid [if row then id of layout / if column then id of row]
     * @param childid [id of row / id of column]
     * @param childtype [row / column]
     */
    private void performStyleDeleteOperation(ContainerRequest request, String styleDirectory, String parentid, String childid, String childtype) {
        String scss = styleDirectory.concat(childid + ".scss");
        String variablescss = styleDirectory.concat(childid + "-variables.scss");
        try {
            delete(scss);
            delete(variablescss);
            if (childtype.equalsIgnoreCase(ROW)) {
                // removed associated files related with row
                removeAttachedScssFromStyleDirectory(styleDirectory, childid);
            }
            // remove import from its parent.scss
            removeImportFromParentScss(styleDirectory, parentid, childid);
            publish(request, Response.ok().build());
        } catch (IOException ex) {
            publish(request, Response.serverError().build());
        }
    }

    /**
     * Remove attached scss files form the style directory.
     * @param styleDirectory
     * @param childId [id of row / id of column]
     */
    private void removeAttachedScssFromStyleDirectory(String styleDirectory, String childId) {
        List<String> files = getAvailableFileNamesOnDirectory(styleDirectory, childId);
        files.stream().map((filename) -> styleDirectory.concat(filename)).forEachOrdered((fileDirectory) -> {
            try {
                delete(fileDirectory);
            } catch (IOException e) {
            }
        });
    }
    
    /**
     * @param directory
     * @param prefix
     * @return available file names from input directory by file name prefix 
     */
    private List<String> getAvailableFileNamesOnDirectory(String directory, String prefix) {
        List<String> files = new ArrayList<>();
        File dir = new File(directory);
        for (File file : dir.listFiles()) {
            if (file.getName().startsWith(prefix)) {
                files.add(file.getName());
            }
        }
        return files;
    }

    /**
     * If child is a column then remove its link from it's parent(row).
     *
     * @param styleDirectory
     * @param parentid [if row then id of layout / if column then id of row]
     * @param childid [id of row / id of column]
     */
    private void removeImportFromParentScss(String styleDirectory, String parentid, String childid) {
        String stylefiledirectory = styleDirectory + "/" + parentid + ".scss";
        try {
            java.nio.file.Path parentScssStylepath = Paths.get(stylefiledirectory);
            String content = new String(Files.readAllBytes(parentScssStylepath), StandardCharsets.UTF_8);
            String importString = "@import \'" + childid + ".scss\'";
            String updatedContent = ContentUtils.updateImport(content, importString, ACTION_DELETE);
            writeFile(stylefiledirectory, updatedContent);
        } catch (IOException e) {
        }
    }

    
    
    
    
    
    
    
    
    
    private static void compileSass(java.nio.file.Path sass, java.nio.file.Path css) {
        SassContext ctx = buildSassContext(sass);
        try (FileOutputStream out = new FileOutputStream(css.toFile())) {
            ctx.compile(out);
        } catch (Exception ex) {
            Logger.getLogger(ContentMicroservice.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private static SassContext buildSassContext(java.nio.file.Path sassFilePath) {
        SassContext ctx = SassFileContext.create(sassFilePath);
        java.nio.file.Path sassDirectory = sassFilePath.getParent();
        SassOptions options = ctx.getOptions();
        options.setIncludePath(sassDirectory, Paths.get(THEME_DIRECTORY));
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
    
    private static void delete(String filelocation) throws IOException {
        File file = new File(filelocation);
        if (file.exists()) {
            if (file.isDirectory()) {

                java.nio.file.Path directory = Paths.get(filelocation);
                Files.walkFileTree(directory, new SimpleFileVisitor<java.nio.file.Path>() {

                    @Override
                    public FileVisitResult visitFile(java.nio.file.Path file, BasicFileAttributes attrs) throws IOException {
                        Files.delete(file);
                        return FileVisitResult.CONTINUE;
                    }

                    @Override
                    public FileVisitResult postVisitDirectory(java.nio.file.Path dir, IOException exc) throws IOException {
                        Files.delete(dir);
                        return FileVisitResult.CONTINUE;
                    }
                });
                Logger.getLogger(ContentMicroservice.class.getName()).log(Level.INFO, directory.toString());
            } else {
                file.delete();
                Logger.getLogger(ContentMicroservice.class.getName()).log(Level.INFO, filelocation);
            }
        }
    }
    
    private void deletechild(ContainerRequest request, String directory, String childname) {
        java.nio.file.Path dir = Paths.get(directory);
        try {
            DirectoryStream<java.nio.file.Path> childdirectories = Files.newDirectoryStream(dir);
            for (java.nio.file.Path path : childdirectories) {
                String absolutepath = (path.toAbsolutePath().toString()).concat(childname);
                delete(absolutepath);
            }
            publish(request, Response.ok().build());
        } catch (IOException ex) {
            Logger.getLogger(ContentMicroservice.class.getName()).log(Level.SEVERE, ex.getMessage());
            publish(request, Response.serverError().build());
        }
    }
    
    private void writeAndPublish(ContainerRequest request, String filelocation, String content) {
        try {
            writeFile(filelocation, content);
            publish(request, Response.ok().build());
        } catch (IOException ex) {
            publish(request, Response.serverError().build());
        }
    }
}
