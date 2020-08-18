/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.componentprocessor;

import com.github.javaparser.JavaParser;
import static com.github.javaparser.JavaParser.parseBodyDeclaration;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.BodyDeclaration;
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration;
import com.github.javaparser.ast.stmt.Statement;
import com.google.auto.service.AutoService;
import com.google.common.io.Files;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.Processor;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;
import org.apache.commons.io.FileUtils;
import org.apache.maven.shared.invoker.DefaultInvocationRequest;
import org.apache.maven.shared.invoker.DefaultInvoker;
import org.apache.maven.shared.invoker.InvocationRequest;
import org.apache.maven.shared.invoker.Invoker;
import org.apache.maven.shared.invoker.MavenInvocationException;

@AutoService(Processor.class)
@SupportedSourceVersion(SourceVersion.RELEASE_6)
@SupportedAnnotationTypes({
    "io.cloudoffice.platform.cockpit.componentprocessor.PluggableComponent"})
public class ComponentProcessor extends AbstractProcessor {

    PluggableComponent component;
    String rootDir = "cloudoffice";
    String locatorModule = "/api";
    String bootModule = "/boot";
    String initiazerClass = "ComponentInitializer";
    String componentClassName = "";
    String componentPkgsName = "";
    public List<String> ignorInvokeList = new ArrayList<String>();

    @Override
    public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
        // System.out.println("COMPONENT PROCESSOR");
        /* ignorInvokeList.add("HELPER");
        for (Element typeElement : roundEnv.getElementsAnnotatedWith(PluggableComponent.class)) {
            //   System.out.println("From the Annotation object:");
            PluggableComponent readingComponent = typeElement.getAnnotation(PluggableComponent.class);
            this.component = readingComponent;
            TypeElement te = findEnclosingTypeElement(typeElement);
            this.componentClassName = te.getQualifiedName().toString();
            try {
                registerComponent();
            } catch (FileNotFoundException ex) {
                System.err.println(ex);
            }
        }*/
        return false;
    }

    public static TypeElement findEnclosingTypeElement(Element e) {

        while (e != null && !(e instanceof TypeElement)) {

            e = e.getEnclosingElement();

        }
        return TypeElement.class.cast(e);

    }

    /**
     * not a standard way to get project path - should inherit a proper way
     *
     * @return
     */
    private String getProjectPath() {
        if (new File("").getAbsoluteFile().toString().endsWith(rootDir)) {
            return new File("").getAbsoluteFile().toPath().toString();
        } else {
            return new File("").getAbsoluteFile().getParentFile().toPath().toString();
        }

    }

    private File getLocatorModuleDir() {
        return new File(getProjectPath() + this.locatorModule);
    }

    private File getBootModuleDir() {
        return new File(getProjectPath() + this.bootModule);
    }

    private File getLocatorFile() {
        Collection<File> files = FileUtils.listFiles(getLocatorModuleDir(), new String[]{"java"}, true);
        for (File file : files) {
            if (file.getName().equalsIgnoreCase(this.component.locator() + ".java")) {
                return file;
            }
        }
        return null;
    }

    private File getLocatorInitializerFile() {
        Collection<File> files = FileUtils.listFiles(getBootModuleDir(), new String[]{"java"}, true);
        for (File file : files) {
            if (file.getName().equalsIgnoreCase(this.initiazerClass + ".java")) {
                return file;
            }
        }
        return null;
    }

    public void registerComponent() throws FileNotFoundException {
        File locatorSource = getLocatorFile();
        File initLocatorSource = getLocatorInitializerFile();
        if (modifyLocator(locatorSource)) {
            modifyInitializer(initLocatorSource);
            write(locator, locatorSource);
            write(initializer, initLocatorSource);
//           if(!ignorInvokeList.contains(this.component.name())){
//            invokeApiRebuild();
//            }
        }
    }

    void invokeApiRebuild() {
        try {
            System.out.println("API REBUILD");
            InvocationRequest request = new DefaultInvocationRequest();
            request.setPomFile(new File(getLocatorModuleDir() + "/pom.xml"));
            request.setGoals(Arrays.asList("install"));
            Invoker invoker = new DefaultInvoker();
            invoker.execute(request);
        } catch (MavenInvocationException ex) {
            System.out.println(ex);
        }
    }
    private CompilationUnit locator;
    private CompilationUnit initializer;

    private boolean modifyLocator(File locatorSource) {
        boolean modify = false;
        if (null != locatorSource) {
            try {
                CompilationUnit u = JavaParser.parse(locatorSource);
                ClassOrInterfaceDeclaration c = u.getClassByName(this.component.locator()).get();
                BodyDeclaration<?> decl = parseBodyDeclaration("public static Component " + this.component.name() + " = null;");
                if (!c.getMembers().contains(decl)) {
                    c.addMember(decl);
                    this.locator = u;
                    return true;
                }
            } catch (FileNotFoundException ex) {
                System.err.println(ex.getMessage());
            }
        }
        return modify;
    }

    private void write(CompilationUnit c, File source) {
        try {
            Files.write(c.toString().getBytes(), source);
        } catch (IOException ex) {
            System.err.println(ex.getMessage());
        }

    }

    private void modifyInitializer(File initLocatorSource) {
        if (null != initLocatorSource) {
            try {
                CompilationUnit u = JavaParser.parse(initLocatorSource);
                ClassOrInterfaceDeclaration c = u.getClassByName(initiazerClass).get();
                String left = new String(this.component.locator() + "." + this.component.name());
                String right = new String("new " + this.componentClassName + "()");
                Statement stmt = JavaParser.parseStatement(left + "=" + right + ";");
                c.getMethodsByName("init").get(0).getBody().get().addStatement(stmt);
                this.initializer = u;

            } catch (FileNotFoundException ex) {
                System.err.println(ex.getMessage());
            }
        }
    }

//    private void compile(File file) {
//        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
//        StandardJavaFileManager fileManager = compiler.getStandardFileManager(null, null, null);
//
//        Iterable<? extends JavaFileObject> compilationUnits1
//                = fileManager.getJavaFileObjectsFromFiles(Arrays.asList(file));
//        compiler.getTask(null, fileManager, null, null, null, compilationUnits1).call();
//    }
}
