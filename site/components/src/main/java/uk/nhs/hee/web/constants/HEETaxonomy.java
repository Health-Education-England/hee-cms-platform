package uk.nhs.hee.web.constants;

public enum HEETaxonomy {

    HEE_GLOBAL_PROFESSIONS ("GlobalProfessions"),

    HEE_GLOBAL_HEALTHCARE_TOPICS ("GlobalHealthcareTopics"),

    HEE_GLOBAL_PUBLICATION_TYPE ("GlobalPublicationType");

    private final String name;

    /**
     * Constructor that initialises the name of HEE taxonomies
     *
     * @param name the name of HEE taxonomy
     */
    HEETaxonomy(final String name) {
        this.name = name;
    }

    /**
     * Returns the name of HEE taxonomy
     *
     * @return the name of HEE taxonomy.
     */
    public String getName() {
        return this.name;
    }
}