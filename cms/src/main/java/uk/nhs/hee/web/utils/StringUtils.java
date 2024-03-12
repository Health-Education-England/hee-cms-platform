package uk.nhs.hee.web.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.stream.Stream;

/**
 * Class containing {@code String} utility methods.
 */
public class StringUtils {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(StringUtils.class);

    // Regular expression to split comma separated values
    private static final String SPLIT_COMMA_SEPARATED_VALUES_REGEX = "\\s*,\\s*";

    /**
     * Private constructor to hide the implicit public one.
     */
    private StringUtils() {
    }

    /**
     * Returns the given comma separated values {@code commaSeparatedValues} as a {@link Stream<String>}.
     *
     * @param commaSeparatedValues the comma separated values.
     * @return the {@link Stream<String>} extracted from the given comma separated string {@code commaSeparatedValues}.
     */
    public static Stream<String> transformCommaSeparatedStringIntoStringList(final String commaSeparatedValues) {
        return Stream.of(commaSeparatedValues.split(SPLIT_COMMA_SEPARATED_VALUES_REGEX));
    }

}
