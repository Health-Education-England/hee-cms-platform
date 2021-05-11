package uk.nhs.hee.web.components;

import org.apache.commons.lang.StringUtils;

/**
 * An enumeration of Listing Page Types and its document types & category value-list identifier.
 *
 * <p>Note that the listing types should be in sync
 * with the value-list {@code /content/documents/administration/valuelists/listingpagetypes}.</p>
 */
public enum ListingPageType {

    /**
     * Blog Listing
     */
    BLOG_LISTING("blog", new String[]{"hee:blogPost"}, "blogCategories"),

    /**
     * Bulletin Listing
     */
    BULLETIN_LISTING("bulletin", new String[]{"hee:bulletin"}, "bulletinCategories"),

    /**
     * Case Study Listing
     */
    CASE_STUDY_LISTING("casestudy", new String[]{"hee:caseStudy"}, "caseStudyCategories"),

    /**
     * Search Listing
     */
    SEARCH_LISTING("search", new String[]{}, StringUtils.EMPTY),

    /**
     * Search Bank Listing
     */
    SEARCH_BANK_LISTING("searchbank", new String[]{"hee:searchBank"}, "searchBankTopics");


    private final String type;
    private final String[] documentTypes;
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
            final String categoryValueListIdentifier
    ) {
        this.type = type;
        this.documentTypes = documentTypes;
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
     * Returns value-list identifier of the supported categories.
     *
     * @return the value-list identifier of the supported categories.
     */
    public String getCategoryValueListIdentifier() {
        return categoryValueListIdentifier;
    }
}
