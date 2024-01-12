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
        assertThat(aToZListing.getRelativeFacetPath()).isEmpty();
        assertThat(aToZListing.getListingFilters()).isEmpty();
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
        assertThat(blogListing.getRelativeFacetPath()).isEqualTo("blogfacets");
        assertThat(blogListing.getListingFilters()).containsExactly(
                ListingFilter.PROFESSION,
                ListingFilter.TOPIC,
                ListingFilter.TAG
        );
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
        assertThat(bulletinListing.getRelativeFacetPath()).isEmpty();
        assertThat(bulletinListing.getListingFilters()).isEmpty();
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
        assertThat(caseStudyListing.getRelativeFacetPath()).isEmpty();
        assertThat(caseStudyListing.getListingFilters()).isEmpty();
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
        assertThat(eventListing.getRelativeFacetPath()).isEmpty();
        assertThat(eventListing.getListingFilters()).isEmpty();
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
        assertThat(newsListing.getRelativeFacetPath()).isEqualTo("newsfacets");
        assertThat(newsListing.getListingFilters()).containsExactly(
                ListingFilter.PROFESSION,
                ListingFilter.TOPIC,
                ListingFilter.TAG
        );
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
        assertThat(publicationListing.getRelativeFacetPath()).isEqualTo("publicationfacets");
        assertThat(publicationListing.getListingFilters()).containsExactly(
                ListingFilter.PUBLICATION_TYPE,
                ListingFilter.PROFESSION,
                ListingFilter.TOPIC
        );
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
        assertThat(searchListing.getRelativeFacetPath()).isEmpty();
        assertThat(searchListing.getListingFilters()).isEmpty();
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
        assertThat(searchBankListing.getRelativeFacetPath()).isEmpty();
        assertThat(searchBankListing.getListingFilters()).isEmpty();
    }

    @Test
    public void trainingProgramme() {
        // Verify
        final ListingPageType trainingtrainingProgrammeListingListing = ListingPageType.TRAINING_PROGRAMME_LISTING;
        assertThat(trainingtrainingProgrammeListingListing.getType()).isEqualTo("trainingprogramme");
        assertThat(trainingtrainingProgrammeListingListing.getDocumentTypes())
                .isEqualTo(new String[]{"hee:trainingProgrammePage"});
        assertThat(trainingtrainingProgrammeListingListing.isSortingEnabled()).isTrue();
        assertThat(trainingtrainingProgrammeListingListing.getSortByDateField())
                .isEqualTo(HippoStdPubWfNodeType.HIPPOSTDPUBWF_PUBLICATION_DATE);
        assertThat(trainingtrainingProgrammeListingListing.getFilterValueListIdentifier()).isEqualTo(StringUtils.EMPTY);
        assertThat(trainingtrainingProgrammeListingListing.isChannelSpecificValueListIdentifier()).isFalse();
        assertThat(trainingtrainingProgrammeListingListing.getRelativeFacetPath()).isEqualTo("trainingprogrammefacets");
        assertThat(trainingtrainingProgrammeListingListing.getListingFilters()).containsExactly(
                ListingFilter.PROFESSION,
                ListingFilter.TOPIC,
                ListingFilter.CLINICAL_DISCIPLINE,
                ListingFilter.TRAINING_TYPE
        );
    }

    @Test
    public void getByName_WithValidType_ReturnsListingPageType() {
        // Verify
        assertThat(ListingPageType.getByName("atoz")).isEqualTo(ListingPageType.ATOZ_LISTING);
        assertThat(ListingPageType.getByName("blog")).isEqualTo(ListingPageType.BLOG_LISTING);
        assertThat(ListingPageType.getByName("bulletin")).isEqualTo(ListingPageType.BULLETIN_LISTING);
        assertThat(ListingPageType.getByName("casestudy")).isEqualTo(ListingPageType.CASE_STUDY_LISTING);
        assertThat(ListingPageType.getByName("event")).isEqualTo(ListingPageType.EVENT_LISTING);
        assertThat(ListingPageType.getByName("news")).isEqualTo(ListingPageType.NEWS_LISTING);
        assertThat(ListingPageType.getByName("publication")).isEqualTo(ListingPageType.PUBLICATION_LISTING);
        assertThat(ListingPageType.getByName("search")).isEqualTo(ListingPageType.SEARCH_LISTING);
        assertThat(ListingPageType.getByName("searchbank")).isEqualTo(ListingPageType.SEARCH_BANK_LISTING);
        assertThat(ListingPageType.getByName("trainingprogramme")).isEqualTo(ListingPageType.TRAINING_PROGRAMME_LISTING);
    }

    @Test(expected = IllegalArgumentException.class)
    public void getByName_WithInValidName_ThrowsIllegalArgumentException() {
        // Execute the method to be tested
        ListingPageType.getByName("invalid_listing_type");
    }

}
