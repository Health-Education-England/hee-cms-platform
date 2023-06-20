package uk.nhs.hee.web.utils;

import uk.nhs.hee.web.taxonomy.ParameterisedTaxonomyDecoder;

/**
 * Manage a taxonomy name by applying any substitutions to the name that are required
 *
 * The default value is to use the originally supplied name
 */
public class TaxonomyUtils {
    public static String getTaxonomyName(String contextPath, String taxonomyName) {
        String resolvedTaxonomyName = taxonomyName;

        ParameterisedTaxonomyDecoder decoder = new ParameterisedTaxonomyDecoder(taxonomyName);

        if (decoder.isChannelParameterSupplied()) {
            String channel = ChannelUtils.findChannelUsingPattern(contextPath);
            resolvedTaxonomyName = getTaxonomyNameUsingChannel(taxonomyName, channel);
        }

        return resolvedTaxonomyName;
    }

    private static String getTaxonomyNameUsingChannel(String taxonomyName, String channel) {
        ParameterisedTaxonomyDecoder decoder = new ParameterisedTaxonomyDecoder(taxonomyName);
        taxonomyName = decoder.replaceChannelParameter(channel);

        return taxonomyName;
    }

}
