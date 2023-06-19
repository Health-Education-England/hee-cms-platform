package uk.nhs.hee.web.utils;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Utility class for channels.
 */
public class ChannelUtils {
    private static final Logger log = LoggerFactory.getLogger(ChannelUtils.class);

    /**
     * Document path REGEX pattern
     */
    private static final Pattern DOCUMENT_PATH_REGEX_PATTERN = Pattern.compile("/content/documents/(.*?)/.*");

    /**
     * Private constructor to hide the implicit public one.
     */
    private ChannelUtils() {
    }

    /**
     * Returns channel name extracted from the given {@code nodePath}.
     *
     * <p>If {@code /content/documents/lks/common/people/james-smith} is the node path, then it extracts
     * and returns {@code lks} as the channel name.</p>
     *
     * @param nodePath the node path from which channel name needs to be extracted.
     * @return the channel name extracted from the given {@code nodePath}.
     */
    public static String getChannelName(final String nodePath) {
        final String[] nodePathSegments = nodePath.split("/");
        if (nodePathSegments.length >= 4) {
            return nodePath.split("/")[3];
        }

        return StringUtils.EMPTY;
    }

    public static String findChannelUsingPattern(final String documentNodePath) {
        log.debug("Document node path = {}", documentNodePath);

        if (documentNodePath != null) {
            final Matcher documentPathMatcher = DOCUMENT_PATH_REGEX_PATTERN.matcher(documentNodePath);

            if (documentPathMatcher.find()) {
                final String channel = documentPathMatcher.group(1);
                log.debug("Document channel = {}", channel);

                return channel;
            }
        }
        return StringUtils.EMPTY;
    }
}
