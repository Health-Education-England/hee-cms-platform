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
}
