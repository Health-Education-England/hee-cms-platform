package uk.nhs.hee.web.components;

import uk.nhs.hee.web.constants.HEETaxonomy;
import uk.nhs.hee.web.repository.HEEField;

/**
 * An enumeration of (taxonomy-based) listing filters with configurations like taxonomy name, type [flat/hierarchy],
 * field name and filter query parameter name that needs to be displayed on the listing pages.
 */
public enum ListingFilter {

    /**
     * {@code Profession} filter.
     */
    PROFESSION(
            HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_PROFESSIONS,
            Boolean.FALSE,
            "profession"
    ),

    /**
     * {@code Publication type} filter.
     */
    PUBLICATION_TYPE(
            HEEField.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_PUBLICATION_TYPES,
            Boolean.TRUE,
            "publicationType"
    ),

    /**
     * {@code Tag} taxonomy filter.
     */
    TAG(
            HEEField.HEE_GLOBAL_TAXONOMY_TAGS_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_TAGS,
            Boolean.TRUE,
            "tag"
    ),

    /**
     * {@code Topic} taxonomy filter.
     */
    TOPIC(
            HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_HEALTHCARE_TOPICS,
            Boolean.FALSE,
            "topic"
    );


    private final HEEField field;
    private final HEETaxonomy taxonomyName;
    private final boolean flatTaxonomy;
    private final String queryParameter;

    /**
     * @param field
     * @param taxonomyName
     * @param flatTaxonomy
     * @param queryParameter
     */
    ListingFilter(
            final HEEField field,
            final HEETaxonomy taxonomyName,
            final boolean flatTaxonomy,
            final String queryParameter
    ) {
        this.field = field;
        this.taxonomyName = taxonomyName;
        this.flatTaxonomy = flatTaxonomy;
        this.queryParameter = queryParameter;
    }

    /**
     * Returns the filter (taxonomy) field name.
     *
     * @return the filter (taxonomy) field name.
     */
    public HEEField getField() {
        return field;
    }

    /**
     * Returns {@link HEETaxonomy} the name of the taxonomy configured on the {@code field}.
     *
     * @return the name of the taxonomy configured on the {@code field}.
     */
    public HEETaxonomy getTaxonomyName() {
        return taxonomyName;
    }

    /**
     * Returns {@code true} if the taxonomy identified by {@code taxonomyName} is a flat one.
     * Otherwise, returns {@code false}.
     *
     * @return {@code true} if the taxonomy identified by {@code taxonomyName} is a flat one.
     * Otherwise, returns {@code false}.
     */
    public boolean isFlatTaxonomy() {
        return flatTaxonomy;
    }

    /**
     * Returns the filter query parameter name.
     *
     * @return the filter query parameter name.
     */
    public String getQueryParameter() {
        return queryParameter;
    }
}
