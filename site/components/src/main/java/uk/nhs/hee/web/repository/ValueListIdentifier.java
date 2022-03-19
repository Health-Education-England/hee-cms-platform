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
     * {@code bulletinCategories} value-list identifier.
     */
    BULLETIN_CATEGORIES("bulletinCategories"),

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
     * {@code personTitles} value-list identifier.
     */
    PERSON_TITLES("personTitles"),

    /**
     * {@code personTitles} value-list identifier.
     */
    PERSON_PRONOUNS("personPronouns");

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
