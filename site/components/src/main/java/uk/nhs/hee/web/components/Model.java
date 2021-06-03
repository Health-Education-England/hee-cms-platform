package uk.nhs.hee.web.components;

public enum Model {

    BLOG_LISTING_PAGE_URL("blogListingPageURL"),

    BLOG_CATEGORIES_VALUE_LIST_MAP("categoriesValueListMap");

    private final String key;

    Model(final String key) {
        this.key = key;
    }

    public String getKey() {
        return key;
    }
}
