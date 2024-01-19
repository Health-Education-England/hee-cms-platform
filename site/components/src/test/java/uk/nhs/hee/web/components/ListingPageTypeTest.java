package uk.nhs.hee.web.components;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.HippoStdPubWfNodeType;
import org.junit.Test;
import uk.nhs.hee.web.repository.HEEField;

import static org.assertj.core.api.Assertions.*;

public class ListingPageTypeTest {

    @Test
    public void aToZ() {
        // Verify
        final ListingPageType aToZListing = ListingPageType.ATOZ_LISTING;
        assertThat(aToZListing.getType()).isEqualTo("atoz");
        assertThat(aToZListing.getDocumentTypes())
                .isEqualTo(new String[]{"hee:guidance", "hee:landingPage", "hee:listingPage", "hee:MiniHub"});
        assertThat(aToZListing.isSortingEnabled()).isFalse();
        assertThat(aToZListing.getSortByDateField()).isEqualTo(HEEField.PUBLICATION_DATE.getName());
        assertThat(aToZListing.getFilterValueListIdentifier()).isEmpty();
        assertThat(aToZListing.isChannelSpecificValueListIdentifier()).isFalse();
    }

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
    public void caseStudy() {
        // Verify
        final ListingPageType caseStudyListing = ListingPageType.CASE_STUDY_LISTING;
        assertThat(caseStudyListing.getType()).isEqualTo("casestudy");
        assertThat(caseStudyListing.getDocumentTypes()).isEqualTo(new String[]{"hee:caseStudy"});
        assertThat(caseStudyListing.isSortingEnabled()).isTrue();
        assertThat(caseStudyListing.getSortByDateField()).isEqualTo(HEEField.SUBMITTED_DATE.getName());
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
    public void news() {
        // Verify
        final ListingPageType newsListing = ListingPageType.NEWS_LISTING;
        assertThat(newsListing.getType()).isEqualTo("news");
        assertThat(newsListing.getDocumentTypes()).isEqualTo(new String[]{"hee:news"});
        assertThat(newsListing.isSortingEnabled()).isTrue();
        assertThat(newsListing.getSortByDateField()).isEqualTo(HEEField.PUBLICATION_DATE.getName());
        assertThat(newsListing.getFilterValueListIdentifier()).isEqualTo("newsCategories");
        assertThat(newsListing.isChannelSpecificValueListIdentifier()).isTrue();
    }

    @Test
    public void publication() {
        // Verify
        final ListingPageType publicationListing = ListingPageType.PUBLICATION_LISTING;
        assertThat(publicationListing.getType()).isEqualTo("publication");
        assertThat(publicationListing.getDocumentTypes()).isEqualTo(new String[]{"hee:publicationLandingPage"});
        assertThat(publicationListing.isSortingEnabled()).isTrue();
        assertThat(publicationListing.getSortByDateField()).isEqualTo(HEEField.PUBLICATION_DATE.getName());
        assertThat(publicationListing.getFilterValueListIdentifier()).isEqualTo(StringUtils.EMPTY);
        assertThat(publicationListing.isChannelSpecificValueListIdentifier()).isFalse();
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
