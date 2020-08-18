/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.componentmanager;

import com.github.javaparser.JavaParser;
import static com.github.javaparser.JavaParser.parseBodyDeclaration;
import com.github.javaparser.Providers;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.BodyDeclaration;
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration;
import com.google.common.io.Files;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.tools.DiagnosticCollector;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;
import org.apache.commons.io.FileUtils;
import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;
import org.apache.maven.plugins.annotations.Component;
import org.apache.maven.plugins.annotations.LifecyclePhase;
import org.apache.maven.plugins.annotations.Mojo;
import org.apache.maven.project.MavenProject;
import org.apache.maven.shared.invoker.DefaultInvocationRequest;
import org.apache.maven.shared.invoker.DefaultInvoker;
import org.apache.maven.shared.invoker.InvocationRequest;
import org.apache.maven.shared.invoker.Invoker;
import org.apache.maven.shared.invoker.MavenInvocationException;

@Mojo(name = "exe", defaultPhase = LifecyclePhase.INSTALL)
public class ComponentMojo extends AbstractMojo {

    @Component
    private MavenProject prj;

    @Override
    public void execute() throws MojoExecutionException, MojoFailureException {
            try {
                System.out.println("API REBUILD");
                List<String> PUBLISH_GOALS = Arrays.asList("install" );
                InvocationRequest request = new DefaultInvocationRequest();
                request.setPomFile(new File(prj.getBasedir()+"/../api/pom.xml"));
                request.setGoals(PUBLISH_GOALS);
                Invoker invoker = new DefaultInvoker();
                invoker.execute(request);
            } catch (MavenInvocationException ex) {
               System.out.println(ex);
            }
    }

    public void something() {
        URLClassLoader cl = null;
        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
        DiagnosticCollector<JavaFileObject> diagnostics = new DiagnosticCollector<JavaFileObject>();
        StandardJavaFileManager jf = ToolProvider.getSystemDocumentationTool().getStandardFileManager(diagnostics, Locale.US, Providers.UTF8);
        File currentLocation = prj.getArtifact().getFile();
        try {
            cl = new URLClassLoader(new URL[]{currentLocation.toURI().toURL()
            });

            Collection<File> sources = FileUtils.listFiles(currentLocation, new String[]{"class"}, true);

//
//            Iterable<? extends JavaFileObject> compilationUnits = jf.getJavaFileObjectsFromFiles(sources);
//            CompilationTask task = compiler.getTask(null, null, diagnostics, null, null, compilationUnits);
//            if (task.call()) {
//
//            }
            for (Package p : Package.getPackages()) {
                System.out.println(p.getName());
                if (p.getName().contains("io.cloudoffice")) {
                    System.out.println("Found:" + p.getName());
//                    if (p.isAnnotationPresent(PluggableComponent.class)) {
//                        System.out.println(p.getName());
//                    }
                }
            }
            File dir = new File(prj.getParentFile().getParent() + "\\api");
            Collection<File> files = FileUtils.listFiles(dir, new String[]{"java"}, true);

            for (File matche : files) {
                if (matche.getName().equalsIgnoreCase("ComponentLocator.java")) {
                    try {
                        CompilationUnit u = JavaParser.parse(matche);
                        ClassOrInterfaceDeclaration c = u.getClassByName("ComponentLocator").get();
                        BodyDeclaration<?> decl = parseBodyDeclaration("public static Component MAIN = null;");
                        if (!c.getMembers().contains(decl)) {
                            c.addMember(decl);
                        }
                        try {
                            Files.write(u.toString().getBytes(), matche);
                        } catch (IOException ex) {
                            Logger.getLogger(ComponentMojo.class.getName()).log(Level.SEVERE, null, ex);
                        }

                    } catch (FileNotFoundException ex) {
                        Logger.getLogger(ComponentMojo.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
            }
        } catch (MalformedURLException ex) {
            Logger.getLogger(ComponentMojo.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
