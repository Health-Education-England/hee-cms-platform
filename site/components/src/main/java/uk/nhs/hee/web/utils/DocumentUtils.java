package uk.nhs.hee.web.utils;

import org.apache.commons.lang3.StringUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Class containing utility methods for brXM documents
 */
public class DocumentUtils {
    /**
     * Document path REGEX pattern
     */
    private static final Pattern DOCUMENT_PATH_REGEX_PATTERN = Pattern.compile("/content/documents/(.*?)/.*");

    /**
     * Private constructor to hide the implicit public one.
     */
    private DocumentUtils() {
    }

    /**
     * <p>Extracts channel from the given {@code documentPath} and returns it. Otherwise, returns an Empty String
     * if channel can't be extracted from the given {@code documentPath} .</p>
     *
     * <p>It extracts channel from the document path using {@code /content/documents/<channel>/.*}</p> pattern.</p>
     *
     * @return the channel extracted from the given {@code documentPath}.
     * Otherwise, returns an Empty String if channel can't be extracted from the given {@code documentPath}.
     */
    public static String getChannel(final String documentPath) {
        final Matcher documentPathMatcher = DOCUMENT_PATH_REGEX_PATTERN.matcher(documentPath);

        if (documentPathMatcher.find()) {
            return documentPathMatcher.group(1);
        }

        return StringUtils.EMPTY;
    }
}
