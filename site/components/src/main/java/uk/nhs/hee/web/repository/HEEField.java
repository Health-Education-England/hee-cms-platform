package uk.nhs.hee.web.repository;

public enum HEEField {

    LISTING_TYPE("hee:listingPageType");

    private final String name;

    HEEField(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
