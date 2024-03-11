package uk.nhs.hee.web.components;

import uk.nhs.hee.web.constants.HEETaxonomy;
import uk.nhs.hee.web.repository.HEEField;

/**
 * An enumeration of (taxonomy-based) listing filters with configurations like taxonomy name, type [flat/hierarchy],
 * field name and filter query parameter name that needs to be displayed on the listing pages.
 */
public enum ListingFilter {

    /**
     * {@code Clinical discipline} taxonomy filter.
     */
    CLINICAL_DISCIPLINE(
            HEEField.GLOBAL_TAXONOMY_CLINICAL_DISCIPLINE_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_CLINICAL_DISCIPLINE,
            Boolean.TRUE,
            "clinicalDiscipline"
    ),

    /**
     * {@code News type} filter.
     */
    NEWS_TYPE(
            HEEField.GLOBAL_TAXONOMY_NEWS_TYPE_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_NEWS_TYPES,
            Boolean.TRUE,
            "newsType"
    ),

    /**
     * {@code Profession} filter.
     */
    PROFESSION(
            HEEField.GLOBAL_TAXONOMY_PROFESSIONS_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_PROFESSIONS,
            Boolean.FALSE,
            "profession"
    ),

    /**
     * {@code Publication type} filter.
     */
    PUBLICATION_TYPE(
            HEEField.GLOBAL_TAXONOMY_PUBLICATION_TYPE_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_PUBLICATION_TYPES,
            Boolean.TRUE,
            "publicationType"
    ),

    /**
     * {@code Tag} taxonomy filter.
     */
    TAG(
            HEEField.GLOBAL_TAXONOMY_TAGS_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_TAGS,
            Boolean.TRUE,
            "tag"
    ),

    /**
     * {@code Topic} taxonomy filter.
     */
    TOPIC(
            HEEField.GLOBAL_TAXONOMY_HEALTHCARE_TOPICS_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_HEALTHCARE_TOPICS,
            Boolean.FALSE,
            "topic"
    ),

    /**
     * {@code Training type} taxonomy filter.
     */
    TRAINING_TYPE(
            HEEField.GLOBAL_TAXONOMY_TRAINING_TYPE_WITH_ANCESTORS,
            HEETaxonomy.HEE_GLOBAL_TRAINING_TYPES,
            Boolean.TRUE,
            "trainingType"
    );


    private final HEEField field;
    private final HEETaxonomy taxonomyName;
    private final boolean flatTaxonomy;
    private final String queryParameter;

    /**
     * Constructor that initialises the listing filter details.
     *
     * @param field          the {@link HEEField} instance indicating the taxonomy field being filtered.
     * @param taxonomyName   the name of the taxonomy that the {@code field} uses.
     * @param flatTaxonomy   boolean indicating whether the taxonomy (described by {@code taxonomyName}) is flat or not.
     * @param queryParameter the name of the query parameter with which the selected filter would be submitted.
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
