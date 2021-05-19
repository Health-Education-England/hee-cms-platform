package uk.nhs.hee.web.components;

import org.apache.commons.lang.StringUtils;
import org.hippoecm.repository.HippoStdPubWfNodeType;
import uk.nhs.hee.web.constants.HeeNodeType;

/**
 * An enumeration of Listing Page Types and its document types, sort by date field & category value-list identifier.
 *
 * <p>Note that the listing types should be in sync
 * with the value-list {@code /content/documents/administration/valuelists/listingpagetypes}.</p>
 */
public enum ListingPageType {

    /**
     * Blog Listing
     */
    BLOG_LISTING(
            "blog",
            new String[]{"hee:blogPost"},
            HeeNodeType.PUBLICATION_DATE,
            "blogCategories"),

    /**
     * Bulletin Listing
     */
    BULLETIN_LISTING(
            "bulletin",
            new String[]{"hee:bulletin"},
            HippoStdPubWfNodeType.HIPPOSTDPUBWF_PUBLICATION_DATE,
            "bulletinCategories"),

    /**
     * Case Study Listing
     */
    CASE_STUDY_LISTING(
            "casestudy",
            new String[]{"hee:caseStudy"},
            HippoStdPubWfNodeType.HIPPOSTDPUBWF_PUBLICATION_DATE,
            "caseStudyCategories"),

    /**
     * Event Listing
     */
    EVENT_LISTING(
            "event",
            new String[]{"hee:event"},
            HeeNodeType.DATE,
            StringUtils.EMPTY),

    /**
     * Search Listing
     */
    SEARCH_LISTING(
            "search",
            new String[]{},
            HippoStdPubWfNodeType.HIPPOSTDPUBWF_PUBLICATION_DATE,
            StringUtils.EMPTY),

    /**
     * Search Bank Listing
     */
    SEARCH_BANK_LISTING(
            "searchbank",
            new String[]{"hee:searchBank"},
            HippoStdPubWfNodeType.HIPPOSTDPUBWF_PUBLICATION_DATE,
            "searchBankTopics");


    private final String type;
    private final String[] documentTypes;
    private final String sortByDateField;
    private final String categoryValueListIdentifier;

    /**
     * Constructor that initialises the Listing Type (Default) Information.
     *
     * @param type                        the listing type.
     * @param documentTypes               the document types which needs to be queried to list the results.
     * @param categoryValueListIdentifier the value-list identifier of the supported categories.
     */
    ListingPageType(
            final String type,
            final String[] documentTypes,
            final String sortByDateField,
            final String categoryValueListIdentifier
    ) {
        this.type = type;
        this.documentTypes = documentTypes;
        this.sortByDateField = sortByDateField;
        this.categoryValueListIdentifier = categoryValueListIdentifier;
    }

    /**
     * Returns {@link ListingPageType} instance for the given listing {@code type}.
     *
     * @param type the listing type.
     * @return the {@link ListingPageType} instance for the given listing {@code type}.
     */
    public static ListingPageType getByName(final String type) {
        for (final ListingPageType listingPageType : ListingPageType.values()) {

            if (listingPageType.getType().equals(type)) {
                return listingPageType;
            }

        }

        throw new IllegalArgumentException(
                ListingPageType.class.getSimpleName() +
                        " ENUM type has no constant with the specified type '" + type + "'"
        );
    }

    /**
     * Returns listing type.
     *
     * @return the listing type.
     */
    public String getType() {
        return type;
    }

    /**
     * Returns document types which needs to be queried to list the results.
     *
     * @return the document types which needs to be queried to list the results.
     */
    public String[] getDocumentTypes() {
        return documentTypes;
    }

    /**
     * Returns name of the field with which the results needs to be sorted.
     *
     * @return name of the field with which the results needs to be sorted.
     */
    public String getSortByDateField() {
        return sortByDateField;
    }

    /**
     * Returns value-list identifier of the supported categories.
     *
     * @return the value-list identifier of the supported categories.
     */
    public String getCategoryValueListIdentifier() {
        return categoryValueListIdentifier;
    }
}
