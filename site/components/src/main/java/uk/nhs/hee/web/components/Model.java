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
     * Model key for Categories ValueList Map
     */
    CATEGORIES_VALUE_LIST_MAP("categoriesValueListMap"),

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
     * Model key for Global Profession Taxonomy Map
     */
    GLOBAL_PROFESSION_MAP("globalProfessionsMap"),

    /**
     * Model key for Global Publication Type Taxonomy Map
     */
    GLOBAL_PUBLICATION_TYPE_MAP("globalPublicationTypeMap"),

    /**
     * Model key for Global Publication Topics Taxonomy Map
     */
    GLOBAL_TOPICS_MAP("globalTopicsMap"),

    /**
     * Model key for Topic Valuelist map
     */
    TOPIC_MAP("topicMap"),

    /**
     * Model key for Profession Valuelist map
     */
    PROFESSION_MAP("professionMap");

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
