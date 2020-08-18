/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.microservice.content;

import io.cloudoffice.platform.cockpit.microservice.Bootstrap;
import io.cloudoffice.platform.cockpit.microservice.Keys;
import io.cloudoffice.platform.cockpit.util.UtilValidate;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.ws.rs.core.Response;
import org.apache.commons.io.FileUtils;
import org.json.JSONObject;

public class ContentUtils {

    public static String SEPARATOR = "/";
    private final static String ACTION_INSERT = "insert";
    private final static String ACTION_DELETE = "delete";

    public static Response processConfigSetup(String name) {
        Map<String, String> location = parsePath(name);
        java.nio.file.Path source = getComponentSource(location);
        java.nio.file.Path file = getComponentTargetDirectory(location);
        try {
            FileUtils.copyDirectory(source.toFile(), file.toFile());
            convertConfigId(location);
            convertStyleId(location);
            // FileUtils.moveFile(getComponentConfTemplateFile(location).toFile(), getComponentConfTargetFile(location).toFile());
            return Response.ok(new String(Files.readAllBytes(getComponentTargetConf(location)))).header("Access-Control-Allow-Origin", "*").build();
        } catch (IOException ex) {
            return Response.serverError().build();
        }

    }

    public static void convertConfigId(Map<String, String> location) {
        try {
            String value = new String(Files.readAllBytes(getComponentTargetConf(location)));
            JSONObject object = new JSONObject(value);
            if (object.has("instance")) {
                object.put("instance", location.get("instance"));
                Files.write(getComponentTargetConf(location), object.toString().getBytes());
            }

        } catch (IOException ex) {
            Logger.getLogger(ContentUtils.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static void convertStyleId(Map<String, String> location) {
        try {
            String value = new String(Files.readAllBytes(getComponentStyleVaraibleTargetFile(location)));
            Map<String, String> props = getVariablesAsPorp(value);
            if (props.containsKey("$id")) {
                props.put("$id", location.get("instance"));
            }
            StringBuilder sb = new StringBuilder();
            Set<Map.Entry<String, String>> entries = props.entrySet();
            for (Map.Entry<String, String> prop : entries) {
                sb.append(prop.getKey()).append(":").append(prop.getValue()).append(";");
            }
            Files.write(getComponentStyleVaraibleTargetFile(location), sb.toString().getBytes());
        } catch (IOException ex) {
            Logger.getLogger(ContentUtils.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static Map<String, String> parsePath(String path) {
        String pattern = "(?:(\\w*[^/])[/](\\w*[^/])[/](\\w*[^/])[/](\\w*[^/])[/](\\w*[^/])[/](\\w*[^/]\\w+))";
        Pattern p = Pattern.compile(pattern);
        Matcher m = p.matcher(path);
        Map<String, String> location = new HashMap<String, String>();
        while (m.find()) {
            location.put("company", m.group(1));
            location.put("site", m.group(2));
            location.put("component", m.group(3));
            location.put("path", m.group(4));
            location.put("instance", m.group(5));
            location.put("mvc", m.group(6));
        }
        return location;
    }

    /**
     * @param location
     * @return /cloudoffice/cockpit/
     */
    public static java.nio.file.Path getComponentSource(Map<String, String> location) {
        String endpoint = (location.get("component").equalsIgnoreCase("layout")) ? "layout/" + location.get("instance") : location.get("component");
        return Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH) + "/cloudoffice/cockpit/" + endpoint);
    }

    
    
    
    
    
    
    
    
    
    /**
     * @param location
     * @return /company/site/component/path/instance
     */
    public static java.nio.file.Path getComponentTargetDirectory(Map<String, String> location) {
        return Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH)
                + SEPARATOR + location.get("company")
                + SEPARATOR + location.get("site")
                + SEPARATOR + location.get("component")
                + SEPARATOR + location.get("path")
                + SEPARATOR + location.get("instance")
        );
    }

    /**
     * @param location
     * @return /company/site/layout/path/layoutid
     */
    public static java.nio.file.Path getLayoutTargetDirectory(Map<String, String> location) {
        return Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH)
                + SEPARATOR + location.get("company")
                + SEPARATOR + location.get("site")
                + SEPARATOR + "layout"
                + SEPARATOR + location.get("path")
                + SEPARATOR + location.get("layoutid")
        );
    }  
    
    
    
    
    
    
    
    
    
    
    /**
     * @param location
     * @return /company/site/component/path/instance/controller/conf/component.json
     */
    public static java.nio.file.Path getComponentTargetConf(Map<String, String> location) {
        return Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH)
                + SEPARATOR + location.get("company")
                + SEPARATOR + location.get("site")
                + SEPARATOR + location.get("component")
                + SEPARATOR + location.get("path")
                + SEPARATOR + location.get("instance")
                + SEPARATOR + "/controller/conf"
                + SEPARATOR + location.get("component") + ".json"
        );
    }

    /**
     * @param location
     * @return /company/site/layout/path/layoutid/controller/conf/layout.json
     */
    public static java.nio.file.Path getLayoutTargetConf(Map<String, String> location) {
        return Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH)
                + SEPARATOR + location.get("company")
                + SEPARATOR + location.get("site")
                + SEPARATOR + "layout"
                + SEPARATOR + location.get("path")
                + SEPARATOR + location.get("layoutid")
                + SEPARATOR + "/controller/conf/layout.json"
        );
    }









    /**
     * @param location
     * @return /company/site/component/path/instance/view/style/component-variables.scss
     */
    public static java.nio.file.Path getComponentStyleVaraibleTargetFile(Map<String, String> location) {
        return Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH)
                + SEPARATOR + location.get("company")
                + SEPARATOR + location.get("site")
                + SEPARATOR + location.get("component")
                + SEPARATOR + location.get("path")
                + SEPARATOR + location.get("instance")
                + SEPARATOR + "/view/style"
                + SEPARATOR + location.get("component") + "-variables.scss"
        );
    }
    
    /**
     * @param location
     * @return /company/site/layout/path/layoutid/view/style/filename-variables.scss
     */
    public static java.nio.file.Path getLayoutStyleVaraibleTargetFile(Map<String, String> location) {
        return Paths.get(Bootstrap.ROUTER.context().get(Keys.STORE_PATH)
                + SEPARATOR + location.get("company")
                + SEPARATOR + location.get("site")
                + SEPARATOR + "layout"
                + SEPARATOR + location.get("path")
                + SEPARATOR + location.get("layoutid")
                + SEPARATOR + "/view/style"
                + SEPARATOR + location.get("filename") + "-variables.scss"
        );
    }

    
    
    
    
    
    
    
    

    public static boolean isImage(String file) {

        if (file.endsWith(".png")) {
            return true;
        }
        return false;
    }

    public static boolean isFont(String file) {

        if (file.startsWith("cloudoffice/cockpit/boot/view/css/fonts/")) {
            return true;
        }
        return false;
    }

    private static Map<String, String> getVariablesAsPorp(String data) {
        Pattern p = Pattern.compile("([^\\;]+)");
        Matcher m = p.matcher(data);
        List<String> variableDecls = new ArrayList<String>();
        while (m.find()) {
            variableDecls.add(m.group());
        }
        Map<String, String> props = new HashMap<String, String>();
        for (String line : variableDecls) {
            Pattern pv = Pattern.compile("([^\\:]+):([^\\;]+)");
            Matcher mm = pv.matcher(line);
            while (mm.find()) {
                props.put(mm.group(1), mm.group(2));
            }
        }
        return props;
    }
    private static final char[] HEX_CHARS = "0123456789abcdef".toCharArray();

    public static String stringToHex(String input) {
        if (input == null) {
            throw new NullPointerException();
        }
        return asHex(input.getBytes());
    }

    public static String hexToString(String txtInHex) {
        byte[] txtInByte = new byte[txtInHex.length() / 2];
        int j = 0;
        for (int i = 0; i < txtInHex.length(); i += 2) {
            txtInByte[j++] = Byte.parseByte(txtInHex.substring(i, i + 2), 16);
        }
        return new String(txtInByte);
    }

    private static String asHex(byte[] buf) {
        char[] chars = new char[2 * buf.length];
        for (int i = 0; i < buf.length; ++i) {
            chars[2 * i] = HEX_CHARS[(buf[i] & 0xF0) >>> 4];
            chars[2 * i + 1] = HEX_CHARS[buf[i] & 0x0F];
        }
        return new String(chars);
    }
    
    
    public static String updateImport(String scssContent, String importString, String action) {
        String resultScss = "";
        String seperator = "##";
        String[] contentArray = scssContent.split(seperator);
        if (null != contentArray && contentArray.length > 0) {
            String[] importArray = contentArray[0].replaceAll("\n", "").trim().split(";");
            List<String> imports = new ArrayList<>();
            imports.addAll(Arrays.asList(importArray));
            if (UtilValidate.isNotEmpty(action)) {
                if (action.equalsIgnoreCase(ACTION_INSERT)) {
                    imports.add(importString);
                } else if (action.equalsIgnoreCase(ACTION_DELETE)) {
                    imports.remove(importString);
                }
            }

            String bodyString = contentArray[1];
            for (String imp : imports) {
                resultScss = resultScss.concat(imp).concat(";").concat(System.lineSeparator());
            }
            resultScss = resultScss.concat(seperator).concat(bodyString);
        } else {
            resultScss = scssContent;
        }
        return resultScss;
    }
    
}
