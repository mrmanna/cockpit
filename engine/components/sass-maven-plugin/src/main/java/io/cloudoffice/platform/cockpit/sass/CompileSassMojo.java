package io.cloudoffice.platform.cockpit.sass;

import com.cathive.sass.SassCompilationException;
import com.cathive.sass.SassContext;
import com.cathive.sass.SassFileContext;
import com.cathive.sass.SassOptions;
import com.cathive.sass.SassOutputStyle;
import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;
import org.apache.maven.plugins.annotations.LifecyclePhase;
import org.apache.maven.plugins.annotations.Mojo;
import org.apache.maven.plugins.annotations.Parameter;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import org.apache.commons.io.FilenameUtils;
import org.codehaus.plexus.util.DirectoryScanner;

/**
 * Compiles SASS into CSS.
 * <p>
 * This plugin scans for subdirectories of {@code sassSourceDirectory} called {@code sass} containing {@code .scss}
 * files. For each SASS file, an associated CSS file is created in a relative {@code css} directory under the
 * {@code cssTargetDirectory}.
 * <p>
 * For example, using the default parameters, if there is a SASS input file at {@code /src/main/sass/com/mycompany/sass/styles.scss},
 * then an associated CSS output file will be created at {@code /target/classes/com/mycompany/css/styles.css}.
 *
 * @since 1.0
 * @author Ben Zoller
 */
@Mojo(name = "compile", defaultPhase = LifecyclePhase.PROCESS_RESOURCES)
public class CompileSassMojo extends AbstractMojo {
    private static final SassFilenameFilter sassFilenameFilter = new SassFilenameFilter();

    /**
     * Source directory containing one or more {@code sass} sub-directories, which contain one or more {@code .scss} files.
     * @since 1.0
     */
    @Parameter(defaultValue = "${basedir}/src/main/webapp/pages/components/")
    private String sassSourceDirectory;

      @Parameter(defaultValue = "${basedir}/src/main/webapp/pages/css/")
    private String themeDirectory;
    /**
     * Target directory where CSS files will be generated under according to the relative path of the source SASS files.
     * @since 1.0
     */
//    @Parameter(defaultValue = "${project.build.outputDirectory}")
//    private String cssTargetDirectory;

    /**
     * Read-only parameter for the Maven project ${basedir} used for logging.
     * @since 1.0
     */
//    @Parameter(defaultValue = "${basedir}", readonly = true)
//    private String baseDirectory;

    /**
     * Compiles SASS into CSS.
     */
    public void execute() throws MojoExecutionException, MojoFailureException {
        getLog().info("Compiling SASS into CSS");
        Map<Path, Path> sassToCssMap = buildSassToCssMap();
        try {
            for (Map.Entry<Path, Path> entry : sassToCssMap.entrySet()) {
                Path sassFilePath = entry.getKey();
                Path cssFilePath = entry.getValue();
                compileSassToCss(sassFilePath, cssFilePath);
            }
        } catch (SassCompilationException | IOException e) {
            throw new MojoExecutionException("Failed to compile: " + e.getMessage(), e);
        }
    }

    /**
     * Compiles the specified SASS file into a CSS file according to the specified target file path.
     */
    private void compileSassToCss(Path sassFilePath, Path cssFilePath) throws IOException {
        logSassToCss(sassFilePath, cssFilePath);
        Files.createDirectories(cssFilePath.getParent());
        SassContext ctx = buildSassContext(sassFilePath);
        try (FileOutputStream out = new FileOutputStream(cssFilePath.toFile())) {
            ctx.compile(out);
        }
    }

    private void logSassToCss(Path sassFilePath, Path cssFilePath) {
        getLog().info(String.format(" %s => %s", sassFilePath, cssFilePath));
    }

    private SassContext buildSassContext(Path sassFilePath) {
        SassContext ctx = SassFileContext.create(sassFilePath);

        Path sassDirectory = sassFilePath.getParent();
        SassOptions options = ctx.getOptions();
        options.setIncludePath(sassDirectory,Paths.get(this.themeDirectory));
        options.setOutputStyle(SassOutputStyle.NESTED);
        return ctx;
    }

    /**
     * Builds a map of input SASS file path to generated output CSS file path
     * by scanning the input directory for SASS files.
     */
    private Map<Path, Path> buildSassToCssMap() {
        String[] includedDirectories = getSassDirectories();
        Map<Path, Path> sassToCssMap = new HashMap<>();
        for (String sassDirectoryRelativePath : includedDirectories) {
            addSassFilesInDirectoryToMap(sassDirectoryRelativePath, sassToCssMap);
        }
        return sassToCssMap;
    }

    private String[] getSassDirectories() {
        DirectoryScanner scanner = new DirectoryScanner();
        scanner.setBasedir(sassSourceDirectory);
        //scanner.setIncludes(new String[]{"**/sass"});
        scanner.addDefaultExcludes();
        scanner.scan();
        return scanner.getIncludedDirectories();
    }

    private void addSassFilesInDirectoryToMap(String sassDirectoryRelativePath, Map<Path, Path> sassToCssMap) {
        Path sassPath = getSassPath(sassDirectoryRelativePath);
        File[] sassFiles = sassPath.toFile().listFiles(sassFilenameFilter);
        for (File sassFile : sassFiles) {
             getLog().info("File found:"+sassFile.getAbsolutePath());
            addSassFileToMap(sassFile, sassPath, sassToCssMap);
        }
    }

    private Path getSassPath(String sassDirectoryRelativePath) {
        Path sourcePath = Paths.get(sassSourceDirectory);
        return sourcePath.resolve(sassDirectoryRelativePath);
    }

    private Path getCssPath(Path sassPath) {
        Path parentPath = sassPath.getParent();
        Path sourcePath = Paths.get(sassSourceDirectory);
        Path relativeParentPath = sourcePath.relativize(parentPath);
        return Paths.get(sassSourceDirectory).resolve(relativeParentPath).resolve("css");
    }

    private void addSassFileToMap(File sassFile, Path cssPath, Map<Path, Path> sassToCssMap) {
        String sassFilename = sassFile.getName();
        Path sassFilePath = sassFile.toPath();

        String name = FilenameUtils.removeExtension(sassFilename);
        String cssFilename = name + ".css";
        getLog().info("Css filename:"+cssFilename);
        Path cssFilePath = cssPath.resolve(cssFilename);

        sassToCssMap.put(sassFilePath, cssFilePath);
    }

    /**
     * Filename filter which accepts {@code .scss} files which do not start with {@code _}.
     */
    private static class SassFilenameFilter implements FilenameFilter {
        @Override
        public boolean accept(File dir, String name) {
            return !name.startsWith("_") && name.endsWith(".scss");
        }
    }
}
