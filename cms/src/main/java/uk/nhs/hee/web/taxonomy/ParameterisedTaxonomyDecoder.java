package uk.nhs.hee.web.taxonomy;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Use this class to manage decoding of taxonomy names and replacing parameters with values
 *
 * Values are generally derived from a pathname (like channel and possibly can be extended
 * to use something like a region)
 */
public class ParameterisedTaxonomyDecoder {

    private final String taxonomyName;

    public ParameterisedTaxonomyDecoder(final String suppliedTaxonomyName) {
        this.taxonomyName = suppliedTaxonomyName;
    }

    public boolean isChannelParameterSupplied() {
        if (taxonomyName == null) {
            return false;
        }

        final Pattern channelRegex = Pattern.compile("\\$\\{channel\\}\\-(.*)?");
        final Matcher documentPathMatcher = channelRegex.matcher(taxonomyName);

        return documentPathMatcher.find();
    }

    public String replaceChannelParameter(String channel) {
        if (isChannelParameterSupplied()) {
            return taxonomyName.replace("${channel}", channel);
        }

        return taxonomyName;
    }
}
