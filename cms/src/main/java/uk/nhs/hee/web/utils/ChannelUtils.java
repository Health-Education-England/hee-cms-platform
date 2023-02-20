package uk.nhs.hee.web.utils;

import org.apache.commons.lang3.StringUtils;

/**
 * Utility class for channels.
 */
public class ChannelUtils {

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

}
