package uk.nhs.hee.web.repository;

import org.junit.Test;

import static org.assertj.core.api.Assertions.*;

public class HEEFieldTest {

    @Test
    public void heeFields() {
        // Verify
        assertThat(HEEField.CATEGORIES.getName()).isEqualTo("hee:categories");
        assertThat(HEEField.COMPLETED_DATE.getName()).isEqualTo("hee:completedDate");
        assertThat(HEEField.DATE.getName()).isEqualTo("hee:date");
        assertThat(HEEField.DOCUMENT_TITLE.getName()).isEqualTo("hee:title");
        assertThat(HEEField.IMPACT_GROUP.getName()).isEqualTo("hee:impactGroup");
        assertThat(HEEField.LISTING_TYPE.getName()).isEqualTo("hee:listingPageType");
        assertThat(HEEField.PUBLICATION_DATE.getName()).isEqualTo("hee:publicationDate");
        assertThat(HEEField.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE.getName())
                .isEqualTo("hee:globalTaxonomyPublicationType");
        assertThat(HEEField.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE_WITH_ANCESTORS.getName())
                .isEqualTo("hee:globalTaxonomyPublicationType__with_ancestors");
        assertThat(HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS.getName())
                .isEqualTo("hee:globalTaxonomyHealthcareTopics");
        assertThat(HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS_WITH_ANCESTORS.getName())
                .isEqualTo("hee:globalTaxonomyHealthcareTopics__with_ancestors");
        assertThat(HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS.getName())
                .isEqualTo("hee:globalTaxonomyProfessions");
        assertThat(HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS_WITH_ANCESTORS.getName())
                .isEqualTo("hee:globalTaxonomyProfessions__with_ancestors");
        assertThat(HEEField.TOPICS.getName()).isEqualTo("hee:topics");
    }
}
