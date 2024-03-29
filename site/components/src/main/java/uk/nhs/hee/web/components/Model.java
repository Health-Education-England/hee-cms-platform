package uk.nhs.hee.web.components;

/**
 * Provides an enumeration of Model Keys.
 */
public enum Model {

    /**
     * Model key for Blog Listing Page URL
     */
    BLOG_LISTING_PAGE_URL("blogListingPageURL"),

    /**
     * Model key for Canonical URL
     */
    CANONICAL_URL("canonicalURL"),

    /**
     * Model key for Logo Types
     */
    LOGO_TYPES("logoTypes"),

    /**
     * Model key for navMapRegions ValueList Map
     */
    NAV_MAP_REGION_MAP("navMapRegionMap"),

    /**
     * Model key for News Listing Page URL
     */
    NEWS_LISTING_PAGE_URL("newsListingPageURL"),

    /**
     * Model key for Newsletter Region ValueList Map
     */
    NEWSLETTER_REGION_MAP("newsletterRegionMap"),

    /**
     * Model key for Newsletter Organisation ValueList Map
     */
    NEWSLETTER_ORGANISATION_MAP("newsletterOrganisationMap"),

    /**
     * Model key for Newsletter Profession ValueList Map
     */
    NEWSLETTER_PROFESSION_MAP("newsletterProfessionMap"),

    /**
     * Model key for Publication Listing Page URL
     */
    PUBLICATION_LISTING_PAGE_URL("publicationListingPageURL"),

    /**
     * Model key for Training Programme Listing Page URL
     */
    TRAINING_PROGRAMME_LISTING_PAGE_URL("trainingProgrammeListingPageURL");


    private final String key;

    /**
     * Constructor that initialises the Model Key names.
     *
     * @param key the name of the Model Key.
     */
    Model(final String key) {
        this.key = key;
    }

    /**
     * Returns the name of Model Key.
     *
     * @return the name of Model Key.
     */
    public String getKey() {
        return key;
    }
}
