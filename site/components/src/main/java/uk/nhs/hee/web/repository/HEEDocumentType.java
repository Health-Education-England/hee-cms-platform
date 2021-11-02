package uk.nhs.hee.web.repository;

/**
 * Provides an enumeration of HEE Document/Compound Types.
 */
public enum HEEDocumentType {

    /**
     * {@code hee:blogPost} DocumentType.
     */
    BLOG_POST("hee:blogPost"),

    /**
     * {@code hee:bulletin} DocumentType.
     */
    BULLETIN("hee:bulletin"),

    /**
     * {@code hee:caseStudy} DocumentType.
     */
    CASE_STUDY("hee:caseStudy"),

    /**
     * {@code hee:event} DocumentType.
     */
    EVENT("hee:event"),

    /**
     * {@code hee:guidance} DocumentType.
     */
    GUIDANCE("hee:guidance"),

    /**
     * {@code hee:searchBank} DocumentType.
     */
    SEARCH_BANK("hee:searchBank");


    private final String name;

    /**
     * Constructor that initialises the name of HEE Document/Compound Types.
     *
     * @param name the name of HEE Document/Compound Types.
     */
    HEEDocumentType(final String name) {
        this.name = name;
    }

    /**
     * Returns the name of HEE Document/Compound Type.
     *
     * @return the name of HEE Document/Compound Type.
     */
    public String getName() {
        return this.name;
    }
}
