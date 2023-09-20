package uk.nhs.hee.web.utils;

import org.hippoecm.hst.content.beans.standard.KeyLabelValue;
import org.hippoecm.hst.site.HstServices;
import org.onehippo.taxonomy.api.Category;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.api.TaxonomyManager;
import org.onehippo.taxonomy.contentbean.TaxonomyClassification;
import uk.nhs.hee.web.constants.HEETaxonomy;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * A class to support the loading of taxonomy details into the display template.
 */
public class TaxonomyTemplateUtils {

    /**
     * Private constructor to restrict instantiating this utility class.
     */
    private TaxonomyTemplateUtils() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Returns {@link TaxonomyClassification} for the given {@code taxonomyPropertyName} and {@code taxonomyEnum}.
     *
     * @param documentNode         the document {@link Node} instance from which the property
     *                             identified by {@code taxonomyPropertyName} needs to be extracted.
     * @param taxonomyPropertyName the taxonomy field name.
     * @param taxonomyNameEnum     the taxonomy configured for the {@code taxonomyPropertyName} field.
     * @return the {@link TaxonomyClassification} for the given {@code taxonomyPropertyName} and {@code taxonomy}.
     * @throws RepositoryException thrown when an error occurs while reading the {@code taxonomyPropertyName}
     *                             from the repository.
     */
    public static TaxonomyClassification getTaxonomyClassification(
            final Node documentNode,
            final String taxonomyPropertyName,
            final HEETaxonomy taxonomyNameEnum) throws RepositoryException {
        if (documentNode.hasProperty(taxonomyPropertyName)) {
            return new TaxonomyClassification(
                    documentNode.getProperty(taxonomyPropertyName),
                    getTaxonomy(taxonomyNameEnum.getName())
            );
        } else {
            return null;
        }
    }

    /**
     * Returns a {@link Map} containing root categories (as key/name pairs) filtered
     * from the given {@code taxonomyPropertyName}.
     *
     * @param documentNode         the document {@link Node} instance from which the property
     *                             identified by {@code taxonomyPropertyName} needs to be extracted.
     * @param taxonomyPropertyName the taxonomy field name.
     * @param taxonomyNameEnum     the taxonomy configured for the {@code taxonomyPropertyName} field.
     * @return a {@link Map} containing root categories (as key/name pairs) filtered
     * from the given {@code taxonomyPropertyName}.
     * @throws RepositoryException thrown when an error occurs while reading the {@code taxonomyPropertyName}
     *                             from the repository.
     */
    public static Map<String, String> getSelectedRootCategoriesAsMap(
            final Node documentNode,
            final String taxonomyPropertyName,
            final HEETaxonomy taxonomyNameEnum) throws RepositoryException {
        if (documentNode.hasProperty(taxonomyPropertyName)) {
            final TaxonomyClassification taxonomyClassification = new TaxonomyClassification(
                    documentNode.getProperty(taxonomyPropertyName),
                    getTaxonomy(taxonomyNameEnum.getName())
            );

            final Map<String, String> taxonomyRootCategories = getRootCategoriesAsMap(taxonomyNameEnum.getName());

            return taxonomyClassification.getTaxonomyValues().stream()
                    .filter(keyLabelPathValue -> taxonomyRootCategories.containsKey(keyLabelPathValue.getKey()))
                    .collect(Collectors.toMap(
                            KeyLabelValue::getKey,
                            keyLabelPathValue -> taxonomyRootCategories.get(keyLabelPathValue.getKey()),
                            (v1, v2) -> v1,
                            LinkedHashMap::new));
        } else {
            return Collections.emptyMap();
        }
    }

    /**
     * Returns a {@link Map} of root categories key/name pairs of the taxonomy identified by {@code taxonomyName}.
     *
     * @param taxonomyName the name of the taxonomy whose root categories needs to be returned as a {@link Map}.
     * @return a {@link Map} of root categories key/name pairs of the taxonomy identified by {@code taxonomyName}.
     */
    public static Map<String, String> getRootCategoriesAsMap(final String taxonomyName) {
        final Taxonomy taxonomy = getTaxonomy(taxonomyName);
        if (taxonomy != null) {
            return taxonomy.getCategories().stream()
                    .collect(Collectors.toMap(
                            Category::getKey, category -> category.getInfo(Locale.ENGLISH).getName())
                    );
        }

        return Collections.emptyMap();
    }

    /**
     * Returns {@link Taxonomy} identified by the given {@code taxonomyName}.
     *
     * @param taxonomyName the name of the taxonomy whose {@link Taxonomy} instance needs to be returned.
     * @return the {@link Taxonomy} identified by the given {@code taxonomyName}.
     */
    private static Taxonomy getTaxonomy(final String taxonomyName) {
        final TaxonomyManager taxonomyManager = HstServices.getComponentManager().getComponent(
                TaxonomyManager.class.getSimpleName(), "org.onehippo.taxonomy.contentbean");
        return taxonomyManager.getTaxonomies().getTaxonomy(taxonomyName);
    }
}