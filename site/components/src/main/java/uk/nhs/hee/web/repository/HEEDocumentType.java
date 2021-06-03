package uk.nhs.hee.web.repository;

public enum HEEDocumentType {

    LISTING_PAGE("hee:listingPage");

    private final String nodeType;

    HEEDocumentType(final String nodeType) {
        this.nodeType = nodeType;
    }

    public String getNodeType() {
        return nodeType;
    }
}
