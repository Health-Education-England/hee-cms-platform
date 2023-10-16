package uk.nhs.hee.web.utils;

import org.hippoecm.hst.site.HstServices;
import org.onehippo.taxonomy.api.Category;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.api.TaxonomyManager;
import org.onehippo.taxonomy.contentbean.TaxonomyClassification;
import uk.nhs.hee.web.constants.HEETaxonomy;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.*;
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
     * Returns {@link TaxonomyClassification} for the given {@code taxonomyPropertyName} and {@code taxonomy}.
     *
     * @param taxonomyPropertyName the taxonomy field name.
     * @param taxonomy             the taxonomy configured for the {@code taxonomyPropertyName} field.
     * @return the {@link TaxonomyClassification} for the given {@code taxonomyPropertyName} and {@code taxonomy}.
     * @throws RepositoryException thrown when an error occurs while reading the {@code taxonomyPropertyName}
     *                             from the repository.
     */
    public static TaxonomyClassification getTaxonomyClassification(
            final Node documentNode,
            final String taxonomyPropertyName,
            final HEETaxonomy taxonomy) throws RepositoryException {
        if (documentNode.hasProperty(taxonomyPropertyName)) {
            return new TaxonomyClassification(
                    documentNode.getProperty(taxonomyPropertyName),
                    getTaxonomy(taxonomy.getName())
            );
        } else {
            return null;
        }
    }

    /**
     * This initiates the loading of a map from the named taxonomy
     *
     * @param taxonomyName that we are reading
     * @return a {@link Map} with keys and values for use in the template
     */
    public static Map<String, String> getTaxonomyAsMap(final String taxonomyName) {
        final Taxonomy taxonomy = getTaxonomy(taxonomyName);
        if (taxonomy != null) {
            final List<? extends Category> categories = taxonomy.getCategories();
            final Map<String, String> catsMap = new HashMap<>();

            getChildren(categories, catsMap);
            return catsMap;
        }

        return Collections.emptyMap();
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
     * Returns a {@link Map} of root categories key/name pairs of the taxonomy identified by {@code taxonomyName}.
     *
     * @param taxonomyName the name of the taxonomy whose root categories needs to be returned as a {@link Map}.
     * @return a {@link Map} of root categories key/name pairs of the taxonomy identified by {@code taxonomyName}.
     */
    public static Map<String, String> getSubCategoriesAsMap(final String taxonomyName, final String rootCategoryName) {
        final Taxonomy taxonomy = getTaxonomy(taxonomyName);
        if (taxonomy != null) {
            return taxonomy.getCategories().stream()
                    .filter(category -> category.getKey().equals(rootCategoryName))
                    .flatMap(category -> category.getChildren().stream())
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

    /**
     * This is a recursively called function that will iterate through a category's children
     * and load all keys and values into the map.
     *
     * @param categories the list of {@link Category} whose children needs to be loaded into {@code catsMap}.
     * @param catsMap    the {@link Map} to which the categories will be loaded.
     */
    private static void getChildren(final List<? extends Category> categories, final Map<String, String> catsMap) {
        for (final Category category : categories) {
            final String name = category.getInfo(Locale.ENGLISH).getName();
            final String key = category.getKey();
            catsMap.put(key, name);
            final List<? extends Category> childCats = category.getChildren();
            if (childCats != null && childCats.size() > 0) {
                getChildren(childCats, catsMap);
            }
        }
    }
}