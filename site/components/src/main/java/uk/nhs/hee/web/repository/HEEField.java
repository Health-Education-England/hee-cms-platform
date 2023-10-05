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
     * {@code publicationType} field/property.
     *
     * This will need to change to the taxonomy variant once all refs are removed
     */
    @Deprecated
    PUBLICATION_TYPE("hee:publicationType"),

    /**
     * This is the taxonomy driven version of the field that will replace the one above
     */
    HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE("hee:globalTaxonomyPublicationType"),

    /**
     * {@code publicationTopics} field/property.
     *
     * This will need to change to the taxonomy variant once all refs are removed
     */
    @Deprecated
    PUBLICATION_TOPICS("hee:publicationTopics"),

    /**
     * This is the taxonomy driven version of the field that will replace the one above
     */
    HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS("hee:globalTaxonomyHealthcareTopics"),

    /**
     * {@code publicationProfessions} field/property.
     *
     * This will need to change to the taxonomy variant once all refs are removed
     */
    @Deprecated
    PUBLICATION_PROFESSIONS("hee:publicationProfessions"),

    /**
     * This is the taxonomy driven version of the field that will replace the one above
     */
    HEE_GLOBAL_TAXONOMY_PROFESSIONS ("hee:globalTaxonomyProfessions"),

    /**
     * {@code topics} field/property.
     */
    TOPICS("hee:topics"),

    /**
     * {@code submittedDate} field/property.
     */
    SUBMITTED_DATE("hee:submittedDate"),

    HEE_GLOBAL_TAXONOMY_TAGS("hee:globalTaxonomyTags");

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
