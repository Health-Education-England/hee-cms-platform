package uk.nhs.hee.web.components;

import org.junit.Test;

import static org.assertj.core.api.Assertions.*;

public class ModelTest {
    @Test
    public void model() {
        // Verify
        assertThat(Model.BLOG_LISTING_PAGE_URL.getKey()).isEqualTo("blogListingPageURL");
        assertThat(Model.CANONICAL_URL.getKey()).isEqualTo("canonicalURL");
        assertThat(Model.LOGO_TYPES.getKey()).isEqualTo("logoTypes");
        assertThat(Model.NAV_MAP_REGION_MAP.getKey()).isEqualTo("navMapRegionMap");
        assertThat(Model.NEWS_LISTING_PAGE_URL.getKey()).isEqualTo("newsListingPageURL");
        assertThat(Model.NEWSLETTER_REGION_MAP.getKey()).isEqualTo("newsletterRegionMap");
        assertThat(Model.NEWSLETTER_ORGANISATION_MAP.getKey()).isEqualTo("newsletterOrganisationMap");
        assertThat(Model.NEWSLETTER_PROFESSION_MAP.getKey()).isEqualTo("newsletterProfessionMap");
        assertThat(Model.PUBLICATION_LISTING_PAGE_URL.getKey()).isEqualTo("publicationListingPageURL");
        assertThat(Model.TRAINING_PROGRAMME_LISTING_PAGE_URL.getKey()).isEqualTo("trainingProgrammeListingPageURL");
    }
}
