package uk.nhs.hee.web.repository;

/**
 * Provides an enumeration of HEE Fields/Properties.
 */
public enum ValueListIdentifier {

    /**
     * {@code blogCategories} value-list identifier.
     */
    BLOG_CATEGORIES("blogCategories"),

    /**
     * {@code caseStudyImpactGroups} value-list identifier.
     */
    CASE_STUDY_IMPACT_GROUPS("caseStudyImpactGroups"),

    /**
     * {@code caseStudyImpactTypes} value-list identifier.
     */
    CASE_STUDY_IMPACT_TYPES("caseStudyImpactTypes"),

    /**
     * {@code caseStudySectors} value-list identifier.
     */
    CASE_STUDY_SECTORS("caseStudySectors"),

    /**
     * {@code caseStudyRegions} value-list identifier.
     */
    CASE_STUDY_REGIONS("caseStudyRegions"),

    /**
     * {@code caseStudyRegions} value-list identifier.
     */
    CASE_STUDY_PROVIDERS("caseStudyProviders"),

    /**
     * {@code logoTypes} value-list identifier.
     */
    LOGO_TYPES("logoTypes"),

    /**
     * {@code navMapRegions} value-list identifier.
     */
    NAV_MAP_REGIONS("navMapRegions"),

    /**
     * {@code publicationTypes} value-list identifier.
     */
    PUBLICATION_TYPES("publicationTypes"),

    /**
     * {@code publicationTopics} value-list identifier.
     */
    PUBLICATION_TOPICS("publicationTopics"),

    /**
     * {@code publicationProfessions} value-list identifier.
     */
    PUBLICATION_PROFESSIONS("publicationProfessions"),

    /**
     * {@code searchBankKeyTerms} value-list identifier.
     */
    SEARCH_BANK_KEY_TERMS("searchBankKeyTerms"),

    /**
     * {@code searchBankProviders} value-list identifier.
     */
    SEARCH_BANK_PROVIDERS("searchBankProviders"),

    /**
     * {@code searchBankTopics} value-list identifier.
     */
    SEARCH_BANK_TOPICS("searchBankTopics"),

    /**
     * {@code newsCategories} value-list identifier.
     */
    NEWS_CATEGORIES("newsCategories"),

    /**
     * {@code newsletterRegions} value-list identifier.
     */
    NEWSLETTER_REGIONS("newsletterRegions"),

    /**
     * {@code newsletterOrganisations} value-list identifier.
     */
    NEWSLETTER_ORGANISATIONS("newsletterOrganisations"),

    /**
     * {@code newsletterProfessions} value-list identifier.
     */
    NEWSLETTER_PROFESSIONS("newsletterProfessions");


    private final String name;

    /**
     * Constructor that initialises the name of value-list identifiers.
     *
     * @param name the name of value-list identifier.
     */
    ValueListIdentifier(final String name) {
        this.name = name;
    }

    /**
     * Returns the name of value-list identifier.
     *
     * @return the name of value-list identifier.
     */
    public String getName() {
        return this.name;
    }
}
