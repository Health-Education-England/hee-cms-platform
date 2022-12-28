package uk.nhs.hee.web.repository;

/**
 * Provides an enumeration of HEE Fields/Properties.
 */
public enum HEEField {

    /**
     * {@code categories} field/property.
     */
    CATEGORIES("hee:categories"),

    /**
     * {@code completedDate} field/property.
     */
    COMPLETED_DATE("hee:completedDate"),

    /**
     * {@code date} field/property.
     */
    DATE("hee:date"),

    /**
     * {@code title} field/property.
     */
    DOCUMENT_TITLE("hee:title"),

    /**
     * {@code impactGroup} field/property.
     */
    IMPACT_GROUP("hee:impactGroup"),

    /**
     * {@code listingPageType} field/property.
     */
    LISTING_TYPE("hee:listingPageType"),

    /**
     * {@code publicationDate} field/property.
     */
    PUBLICATION_DATE("hee:publicationDate"),

    /**
     * {@code topics} field/property.
     */
    TOPICS("hee:topics"),

    /**
     * {@code submittedDate} field/property.
     */
    SUBMITTED_DATE("hee:submittedDate");

    private final String name;

    /**
     * Constructor that initialises the name of HEE fields/properties.
     *
     * @param name the name of HEE fields/properties.
     */
    HEEField(final String name) {
        this.name = name;
    }

    /**
     * Returns the name of HEE field/property.
     *
     * @return the name of HEE field/property.
     */
    public String getName() {
        return this.name;
    }
}
