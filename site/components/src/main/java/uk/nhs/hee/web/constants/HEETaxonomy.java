package uk.nhs.hee.web.constants;

public enum HEETaxonomy {

    HEE_GLOBAL_PROFESSIONS ("hee-global-professions"),

    HEE_GLOBAL_TOPICS ("hee-global-topics"),

    HEE_GLOBAL_PUBLICATION_TYPES ("hee-global-publication-types");

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
