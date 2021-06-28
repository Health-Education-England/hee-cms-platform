package uk.nhs.hee.web.yaml;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.text.StringSubstitutor;
import org.apache.jackrabbit.commons.JcrUtils;
import org.onehippo.cm.ConfigurationService;
import org.onehippo.cms7.services.HippoServiceRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.security.CodeSource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * Imports YAML into JCR repository.
 */
public class YAMLImporter {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(YAMLImporter.class);

    // YAML placeholder prefix and suffix
    private static final String PLACEHOLDER_PREFIX = "{{ ";
    private static final String PLACEHOLDER_SUFFIX = " }}";

    private static final ConfigurationService configurationService;

    static {
        configurationService = HippoServiceRegistry.getService(ConfigurationService.class);
    }

    private final Session jcrSession;
    private final String yamlArchiveDirectory;
    private final Map<String, String> placeHolderValueMap;

    /**
     * Creates an {@link YAMLImporter} instance with {@code jcrSession}, {@code yamlArchiveDirectory}
     * and {@code placeHolderValueMap}.
     *
     * @param jcrSession           the {@link Session} instance.
     * @param yamlArchiveDirectory the directory in the JAR archive under which YAML files
     *                             that needs to be imported are available.
     * @param placeHolderValueMap  the {@link Map} containing placeholders which needs to be substituted
     *                             on the YAML file content.
     */
    public YAMLImporter(
            final Session jcrSession,
            final String yamlArchiveDirectory,
            final Map<String, String> placeHolderValueMap) {
        this.jcrSession = jcrSession;
        this.yamlArchiveDirectory = yamlArchiveDirectory;
        this.placeHolderValueMap = placeHolderValueMap;
    }

    /**
     * Imports the content of the YAML files available under the given {@code yamlArchiveDirectory}.
     *
     * <p>It essentially performs the following:</p>
     * <ul>
     *     <li>Gets the YAML files available under the given {@code yamlArchiveDirectory}.</li>
     *     <li>Gets the content of each of the YAML files
     *     and substitutes the placeholders (in case if any) based on the given {@code placeHolderValueMap}.</li>
     *     <li>Imports the placeholders updated YAML into JCR repository.</li>
     *     <li>And finally saves the JCR session to persist the imported nodes.</li>
     * <ul/>
     *
     * @throws RepositoryException thrown when an error occurs when interacting with JCR repository.
     * @throws IOException         thrown when an error occurs when processing YAML files.
     */
    public void importFiles() throws RepositoryException, IOException {
        final List<String> yamlFilePaths = getYamlFilePaths();

        if (yamlFilePaths.isEmpty()) {
            LOGGER.debug("No YAML files to import from the '{}' archive directory", yamlArchiveDirectory);
            return;
        }

        for (final String yamlFilePath : yamlFilePaths) {
            try {
                final String yaml = getPlaceholderUpdatedYAMLString(yamlFilePath);

                if (StringUtils.isEmpty(yaml)) {
                    return;
                }

                importYAML(yaml, getParentNodePath(yaml));
            } catch (final RepositoryException | IOException e) {
                LOGGER.error(
                        "Caught error '{}' while importing the Yaml file '{}'",
                        e.getMessage(),
                        yamlFilePath,
                        e);
                throw e;
            }
        }

        jcrSession.save();
    }

    /**
     * Imports the given {@code yaml} into the JCR repository.
     *
     * @param yaml           the YAML which needs to be imported onto JCR repository.
     * @param parentNodePath the parent node path under which the {@code yaml} needs to be imported.
     * @throws RepositoryException thrown when an error occurs during the given {@code yaml} import.
     */
    private void importYAML(
            final String yaml,
            final String parentNodePath) throws RepositoryException {
        final Node parentNode = JcrUtils.getNodeIfExists(parentNodePath, jcrSession);
        if (parentNode == null) {
            throw new RepositoryException("Node with path " + parentNodePath + " doesn't exists");
        }

        configurationService.importPlainYaml(
                new ByteArrayInputStream(yaml.getBytes(StandardCharsets.UTF_8)),
                parentNode);
    }

    private String getParentNodePath(final String plainYaml) {
        // Get the first line of the YAML which should essentially contain the node path.
        final String nodePath = plainYaml.split(System.lineSeparator())[0];

        // Returns parent node path of the node
        return nodePath.substring(0, nodePath.lastIndexOf('/'));
    }

    /**
     * Returns the (YAML) content of the given {@code yamlFilePath}.
     *
     * @param yamlFilePath the path of the YAML file whose placeholder updated content needs to be returned.
     * @return the (YAML) content of the given {@code yamlFilePath}.
     * @throws IOException thrown when an error occurs during YAML file content extraction.
     */
    private String getPlaceholderUpdatedYAMLString(final String yamlFilePath)
            throws IOException {
        final String yaml;

        final InputStream yamlInputStream = this.getClass().getClassLoader().getResourceAsStream(yamlFilePath);

        if (yamlInputStream == null) {
            return StringUtils.EMPTY;
        }

        try {
            yaml = IOUtils.toString(yamlInputStream, StandardCharsets.UTF_8);
        } catch (final IOException e) {
            LOGGER.error(
                    "Caught error {} while extracting content from the YAML file {}",
                    e.getMessage(),
                    yamlFilePath,
                    e);
            throw e;
        }

        LOGGER.debug("'{}' file content => {}", yamlFilePath, yaml);

        if (StringUtils.isEmpty(yaml)) {
            LOGGER.debug("'{}' file is empty", yamlFilePath);
            return StringUtils.EMPTY;
        }

        final String placeholderUpdatedYAML = substitutePlaceholders(yaml);

        LOGGER.debug(
                "'{}' file content after placeholders update => {}",
                yamlFilePath,
                placeholderUpdatedYAML);

        return placeholderUpdatedYAML;
    }

    /**
     * Returns YAML file paths available under the given archive directory {@code yamlArchiveDirectory}.
     *
     * @return the YAML file paths available under the given archive directory {@code yamlArchiveDirectory}.
     */
    private List<String> getYamlFilePaths() {
        final CodeSource codeSrc =
                YAMLImporter.class.getProtectionDomain().getCodeSource();
        final List<String> yamlFilePaths = new ArrayList<>();

        if (codeSrc != null) {
            final URL jar = codeSrc.getLocation();

            try (final ZipInputStream zipInputStream = new ZipInputStream(jar.openStream())) {
                ZipEntry zipEntry;

                while ((zipEntry = zipInputStream.getNextEntry()) != null) {
                    final String entryName = zipEntry.getName();

                    if (entryName.startsWith(yamlArchiveDirectory) && isYAML(entryName)) {
                        yamlFilePaths.add(entryName);
                    }
                }
            } catch (final IOException e) {
                LOGGER.error(
                        "Caught error '{}' while reading Yaml file(s) under the archive directory '{}'",
                        e.getMessage(),
                        yamlArchiveDirectory,
                        e);
            }
        }

        LOGGER.debug("Found {} Yaml files under the archive directory '{}/'", yamlFilePaths, yamlArchiveDirectory);

        return yamlFilePaths;
    }

    /**
     * Returns {@code true} if the given {@code filePath} ends either with {@code .yaml} or {@code .yml}.
     *
     * @param filePath the (fully qualified) file path which needs to be checked if it is an YAML file or not.
     * @return {@code true} if the given {@code filePath} ends either with {@code .yaml} or {@code .yml}.
     */
    private boolean isYAML(final String filePath) {
        final String lowerCasedFilePath = filePath.toLowerCase();
        return lowerCasedFilePath.toLowerCase().endsWith(".yaml") || lowerCasedFilePath.endsWith(".yml");
    }

    /**
     * Returns updated YAML string ({@code yaml}) with channel placeholders substituted
     * based on {@code placeHolderValueMap}.
     *
     * @param yaml the YAML string containing channel placeholders.
     * @return the updated YAML string ({@code yaml}) with channel placeholders substituted
     * based on {@code channelPlaceholderValueMap}.
     */
    private String substitutePlaceholders(final String yaml) {
        final StringSubstitutor strSubstitutor = new StringSubstitutor(
                placeHolderValueMap, PLACEHOLDER_PREFIX, PLACEHOLDER_SUFFIX);
        return strSubstitutor.replace(yaml);
    }
}