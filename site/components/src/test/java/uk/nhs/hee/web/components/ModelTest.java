package uk.nhs.hee.web.components;

import org.junit.Test;

import static org.assertj.core.api.Assertions.*;

public class ModelTest {

    @Test
    public void model() {
        // Verify
        assertThat(Model.BLOG_LISTING_PAGE_URL.getKey()).isEqualTo("blogListingPageURL");
        assertThat(Model.CATEGORIES_VALUE_LIST_MAP.getKey()).isEqualTo("categoriesValueListMap");
        assertThat(Model.CANONICAL_URL.getKey()).isEqualTo("canonicalURL");
        assertThat(Model.NAV_MAP_REGION_MAP.getKey()).isEqualTo("navMapRegionMap");
    }

}
