package uk.nhs.hee.web.repository;

import org.junit.Test;

import static org.assertj.core.api.Assertions.*;

public class HEEDocumentTypeTest {

    @Test
    public void heeDocumentTypes() {
        // Verify
        assertThat(HEEDocumentType.BLOG_POST.getName()).isEqualTo("hee:blogPost");
        assertThat(HEEDocumentType.BULLETIN.getName()).isEqualTo("hee:bulletin");
        assertThat(HEEDocumentType.CASE_STUDY.getName()).isEqualTo("hee:caseStudy");
        assertThat(HEEDocumentType.EVENT.getName()).isEqualTo("hee:event");
        assertThat(HEEDocumentType.GUIDANCE.getName()).isEqualTo("hee:guidance");
        assertThat(HEEDocumentType.SEARCH_BANK.getName()).isEqualTo("hee:searchBank");
    }
}
