package uk.nhs.hee.web.repository;

import org.junit.Test;

import static org.assertj.core.api.Assertions.*;

public class HEEFieldTest {

    @Test
    public void heeFields() {
        // Verify
        assertThat(HEEField.LISTING_TYPE.getName()).isEqualTo("hee:listingPageType");
        assertThat(HEEField.IMPACT_GROUP.getName()).isEqualTo("hee:impactGroup");
        assertThat(HEEField.TOPICS.getName()).isEqualTo("hee:topics");
        assertThat(HEEField.CATEGORIES.getName()).isEqualTo("hee:categories");
        assertThat(HEEField.PUBLICATION_DATE.getName()).isEqualTo("hee:publicationDate");
        assertThat(HEEField.DATE.getName()).isEqualTo("hee:date");
    }
}
