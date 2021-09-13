package uk.nhs.hee.web.utils;

import org.hippoecm.hst.container.RequestContextProvider;
import org.onehippo.forge.selection.hst.contentbean.ValueList;
import org.onehippo.forge.selection.hst.util.SelectionUtil;

import java.util.Collections;
import java.util.Map;

/**
 * Utility class for value-lists ({@code selection:valuelist}).
 */
public class ValueListUtils {

    /**
     * Private constructor to hide the implicit public one.
     */
    private ValueListUtils() {
    }

    /**
     * Returns {@link Map} of the given {@code channel} specific {@code valueListIdentifier}.
     *
     * @return the {@link Map} of the given {@code channel} specific {@code valueListIdentifier}.
     */
    public static Map<String, String> getValueListMap(final String valueListIdentifier, final String channel) {
        return getValueListMap(getChannelSpecificValueListIdentifier(valueListIdentifier, channel));
    }

    /**
     * Returns {@link Map} of the given {@code valueListIdentifier}.
     *
     * @return the {@link Map} of the given {@code valueListIdentifier}.
     */
    public static Map<String, String> getValueListMap(final String valueListIdentifier) {
        final ValueList valueList =
                SelectionUtil.getValueListByIdentifier(valueListIdentifier, RequestContextProvider.get());

        if (valueList == null) {
            return Collections.emptyMap();
        }

        return SelectionUtil.valueListAsMap(valueList);
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