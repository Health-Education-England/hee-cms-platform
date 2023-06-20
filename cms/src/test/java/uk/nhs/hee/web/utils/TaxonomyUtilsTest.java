package uk.nhs.hee.web.utils;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TaxonomyUtilsTest {
    @Test
    public void nonParameterisedNameShouldReturnSameAsSupplied () {
        assertEquals("my-taxonomy-test", TaxonomyUtils.getTaxonomyName("/content/documents/yellow/blue", "my-taxonomy-test"));
    }

    @Test
    public void parameterisedNameShouldReturnReplacedValue () {
        assertEquals("my-yellow-test", TaxonomyUtils.getTaxonomyName("/content/documents/yellow/blue", "my-${channel}-test"));
    }
}