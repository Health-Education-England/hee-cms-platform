package uk.nhs.hee.web.taxonomy;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class ParameterisedTaxonomyDecoderTest {

    public static final String PARAMETERISED_WITH_CHANNEL_NAME = "yellow-${channel}-blue";
    public static final String NON_PARAMETERISED_NAME = "yellow-blue";
    private static final String REPLACEMENT_CHANNEL = "chn";

    @Test
    public void canDetectParameterIsSuppliedInName() {
        ParameterisedTaxonomyDecoder decoder = new ParameterisedTaxonomyDecoder(PARAMETERISED_WITH_CHANNEL_NAME);
        assertTrue(decoder.isChannelParameterSupplied());
    }

    @Test
    public void canDetectThatParameterNotSuppliedInName() {
        ParameterisedTaxonomyDecoder decoder = new ParameterisedTaxonomyDecoder(NON_PARAMETERISED_NAME);
        assertFalse(decoder.isChannelParameterSupplied());
    }

    @Test
    public void canDetectParameterStringSuppliedAsNull() {
        ParameterisedTaxonomyDecoder decoder = new ParameterisedTaxonomyDecoder(null);
        assertFalse(decoder.isChannelParameterSupplied());
    }

    @Test
    public void canReplaceParameterStringWithSuppliedChannel() {
        ParameterisedTaxonomyDecoder decoder = new ParameterisedTaxonomyDecoder(PARAMETERISED_WITH_CHANNEL_NAME);
        assertEquals("yellow-chn-blue", decoder.replaceChannelParameter(REPLACEMENT_CHANNEL));
    }
}