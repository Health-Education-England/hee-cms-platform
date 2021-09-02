package uk.nhs.hee.web.utils;

/**
 * Class containing utility methods for brXM value-lists
 */
public class ValueListUtils {

    /**
     * Private constructor to hide the implicit public one.
     */
    private ValueListUtils() {
    }

    /**
     * Returns channel specific value-list identifier of the given {@code valueListIdentifier}
     * based on the given {@code channel}.
     *
     * @param valueListIdentifier the value-list identifier whose channel specific identifier needs to be constructed.
     * @param channel             the channel for which value-list identifier needs to be constructed.
     * @return channel specific value-list identifier of the given {@code valueListIdentifier}
     * based on the given {@code channel}.
     */
    public static String getChannelSpecificValueListIdentifier(final String valueListIdentifier, final String channel) {
        return String.format("%s_%s", valueListIdentifier, channel);
    }
}
