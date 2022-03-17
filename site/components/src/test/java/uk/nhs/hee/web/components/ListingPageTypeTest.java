package uk.nhs.hee.web.components;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.HippoStdPubWfNodeType;
import org.junit.Test;
import uk.nhs.hee.web.repository.HEEField;

import static org.assertj.core.api.Assertions.*;

public class ListingPageTypeTest {

    @Test
    public void blog() {
        // Verify
        final ListingPageType blogListing = ListingPageType.BLOG_LISTING;
        assertThat(blogListing.getType()).isEqualTo("blog");
        assertThat(blogListing.getDocumentTypes()).isEqualTo(new String[]{"hee:blogPost"});
        assertThat(blogListing.isSortingEnabled()).isTrue();
        assertThat(blogListing.getSortByDateField()).isEqualTo(HEEField.PUBLICATION_DATE.getName());
        assertThat(blogListing.getFilterValueListIdentifier()).isEqualTo("blogCategories");
        assertThat(blogListing.isChannelSpecificValueListIdentifier()).isTrue();
    }

    @Test
    public void bulletin() {
        // Verify
        final ListingPageType bulletinListing = ListingPageType.BULLETIN_LISTING;
        assertThat(bulletinListing.getType()).isEqualTo("bulletin");
        assertThat(bulletinListing.getDocumentTypes()).isEqualTo(new String[]{"hee:bulletin"});
        assertThat(bulletinListing.isSortingEnabled()).isTrue();
        assertThat(bulletinListing.getSortByDateField()).isEqualTo(HippoStdPubWfNodeType.HIPPOSTDPUBWF_PUBLICATION_DATE);
        assertThat(bulletinListing.getFilterValueListIdentifier()).isEqualTo("bulletinCategories");
        assertThat(bulletinListing.isChannelSpecificValueListIdentifier()).isFalse();
    }

    @Test
    public void caseStudy() {
        // Verify
        final ListingPageType caseStudyListing = ListingPageType.CASE_STUDY_LISTING;
        assertThat(caseStudyListing.getType()).isEqualTo("casestudy");
        assertThat(caseStudyListing.getDocumentTypes()).isEqualTo(new String[]{"hee:caseStudy"});
        assertThat(caseStudyListing.isSortingEnabled()).isTrue();
        assertThat(caseStudyListing.getSortByDateField()).isEqualTo(HippoStdPubWfNodeType.HIPPOSTDPUBWF_CREATION_DATE);
        assertThat(caseStudyListing.getFilterValueListIdentifier()).isEqualTo("caseStudyImpactGroups");
        assertThat(caseStudyListing.isChannelSpecificValueListIdentifier()).isFalse();
    }

    @Test
    public void event() {
        // Verify
        final ListingPageType eventListing = ListingPageType.EVENT_LISTING;
        assertThat(eventListing.getType()).isEqualTo("event");
        assertThat(eventListing.getDocumentTypes()).isEqualTo(new String[]{"hee:event"});
        assertThat(eventListing.isSortingEnabled()).isTrue();
        assertThat(eventListing.getSortByDateField()).isEqualTo(HEEField.DATE.getName());
        assertThat(eventListing.getFilterValueListIdentifier()).isEqualTo(StringUtils.EMPTY);
        assertThat(eventListing.isChannelSpecificValueListIdentifier()).isFalse();
    }

    @Test
    public void search() {
        // Verify
        final ListingPageType searchListing = ListingPageType.SEARCH_LISTING;
        assertThat(searchListing.getType()).isEqualTo("search");
        assertThat(searchListing.getDocumentTypes()).isEmpty();
        assertThat(searchListing.isSortingEnabled()).isFalse();
        assertThat(searchListing.getSortByDateField()).isEqualTo(HippoStdPubWfNodeType.HIPPOSTDPUBWF_PUBLICATION_DATE);
        assertThat(searchListing.getFilterValueListIdentifier()).isEqualTo(StringUtils.EMPTY);
        assertThat(searchListing.isChannelSpecificValueListIdentifier()).isFalse();
    }

    @Test
    public void searchBank() {
        // Verify
        final ListingPageType searchBankListing = ListingPageType.SEARCH_BANK_LISTING;
        assertThat(searchBankListing.getType()).isEqualTo("searchbank");
        assertThat(searchBankListing.getDocumentTypes()).isEqualTo(new String[]{"hee:searchBank"});
        assertThat(searchBankListing.isSortingEnabled()).isTrue();
        assertThat(searchBankListing.getSortByDateField())
                .isEqualTo(HEEField.COMPLETED_DATE.getName());
        assertThat(searchBankListing.getFilterValueListIdentifier()).isEqualTo("searchBankTopics");
        assertThat(searchBankListing.isChannelSpecificValueListIdentifier()).isFalse();
    }

    @Test
    public void getByName_WithValidType_ReturnsListingPageType() {
        // Verify
        assertThat(ListingPageType.getByName("blog")).isEqualTo(ListingPageType.BLOG_LISTING);
        assertThat(ListingPageType.getByName("bulletin")).isEqualTo(ListingPageType.BULLETIN_LISTING);
        assertThat(ListingPageType.getByName("casestudy")).isEqualTo(ListingPageType.CASE_STUDY_LISTING);
        assertThat(ListingPageType.getByName("event")).isEqualTo(ListingPageType.EVENT_LISTING);
        assertThat(ListingPageType.getByName("search")).isEqualTo(ListingPageType.SEARCH_LISTING);
        assertThat(ListingPageType.getByName("searchbank")).isEqualTo(ListingPageType.SEARCH_BANK_LISTING);
    }

    @Test(expected = IllegalArgumentException.class)
    public void getByName_WithInValidName_ThrowsIllegalArgumentException() {
        // Execute the method to be tested
        ListingPageType.getByName("invalid_listing_type");
    }

}
