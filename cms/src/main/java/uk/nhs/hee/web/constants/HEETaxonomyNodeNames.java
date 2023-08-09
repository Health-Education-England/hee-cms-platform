package uk.nhs.hee.web.constants;

public enum HEETaxonomyNodeNames {

    HEE_GLOBAL_TAXONOMY_PROFESSIONS ("hee:globalTaxonomyProfessions"),

    HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS("hee:globalTaxonomyHealthcareTopics");

    private final String name;

    /**
     * Constructor that initialises the name of HEE taxonomies
     *
     * @param name the name of HEE taxonomy
     */
    HEETaxonomyNodeNames(final String name) {
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