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
    NAV_MAP_REGION_MAP("navMapRegionMap");

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
