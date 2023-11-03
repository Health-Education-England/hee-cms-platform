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
     * Returns {@link TaxonomyClassification} for the given {@code taxonomyPropertyName} and {@code taxonomy}
     * if available. Otherwise, returns {@code null}.
     *
     * @param taxonomyPropertyName the taxonomy field name.
     * @param taxonomyEnum         the {@link HEETaxonomy} instance containing the taxonomy configured
     *                             for the {@code taxonomyPropertyName} field.
     * @return the {@link TaxonomyClassification} for the given {@code taxonomyPropertyName} and {@code taxonomy}
     * if available. Otherwise, returns {@code null}.
     * @throws RepositoryException thrown when an error occurs while reading the {@code taxonomyPropertyName}
     *                             from the repository.
     */
    public static TaxonomyClassification getTaxonomyClassification(
            final Node documentNode,
            final String taxonomyPropertyName,
            final HEETaxonomy taxonomyEnum) throws RepositoryException {
        if (!documentNode.hasProperty(taxonomyPropertyName)) {
            return null;
        }

        return new TaxonomyClassification(
                documentNode.getProperty(taxonomyPropertyName),
                getTaxonomy(taxonomyEnum)
        );
    }

    /**
     * This initiates the loading of a map from the named taxonomy
     *
     * @param taxonomyEnum the {@link HEETaxonomy} instance that we are reading
     * @return a {@link Map} with keys and values for use in the template
     */
    public static Map<String, String> getTaxonomyAsMap(final HEETaxonomy taxonomyEnum) {
        final Taxonomy taxonomy = getTaxonomy(taxonomyEnum);
        if (taxonomy == null) {
            return Collections.emptyMap();
        }

        final List<? extends Category> categories = taxonomy.getCategories();
        final Map<String, String> catsMap = new HashMap<>();

        getChildren(categories, catsMap);
        return sortByValue(catsMap);
    }

    /**
     * Returns a {@link Map} of root categories key/name pairs of the taxonomy identified by {@code taxonomyName}.
     *
     * @param taxonomyEnum the {@link HEETaxonomy} instance containing the name of taxonomy
     *                     whose root categories needs to be returned as a {@link Map}.
     * @return a {@link Map} of root categories key/name pairs of the taxonomy identified by {@code taxonomyName}.
     */
    public static Map<String, String> getRootCategoriesAsMap(final HEETaxonomy taxonomyEnum) {
        final Taxonomy taxonomy = getTaxonomy(taxonomyEnum);

        if (taxonomy == null) {
            return Collections.emptyMap();
        }

        return sortByValue(taxonomy.getCategories().stream().collect(Collectors.toMap(
                Category::getKey, category -> category.getInfo(Locale.ENGLISH).getName())));
    }

    /**
     * Returns a {@link Map} of root categories key/name pairs of the taxonomy identified by {@code taxonomyName}.
     *
     * @param taxonomyEnum the {@link HEETaxonomy} instance containing the name of taxonomy which needs to be loaded.
     * @return a {@link Map} of root categories key/name pairs of the taxonomy identified by {@code taxonomyName}.
     */
    public static Map<String, String> getSubCategoriesAsMap(
            final HEETaxonomy taxonomyEnum,
            final String rootCategoryName
    ) {
        final Taxonomy taxonomy = getTaxonomy(taxonomyEnum);

        if (taxonomy == null) {
            return Collections.emptyMap();
        }

        return sortByValue(taxonomy.getCategories().stream()
                .filter(category -> category.getKey().equals(rootCategoryName))
                .flatMap(category -> category.getChildren().stream())
                .collect(Collectors.toMap(
                        Category::getKey, category -> category.getInfo(Locale.ENGLISH).getName())
                ));
    }

    /**
     * Returns {@link Taxonomy} for the given taxonomy enumeration ({@code taxonomyEnum}).
     *
     * @param taxonomyEnum the {@link HEETaxonomy} instance containing the taxonomy name
     *                     whose {@link Taxonomy} needs to be returned.
     * @return {@link Taxonomy} for the given taxonomy enumeration ({@code taxonomyEnum}).
     */
    public static Taxonomy getTaxonomy(final HEETaxonomy taxonomyEnum) {
        final TaxonomyManager taxonomyManager = HstServices.getComponentManager().getComponent(
                TaxonomyManager.class.getSimpleName(), "org.onehippo.taxonomy.contentbean");
        return taxonomyManager.getTaxonomies().getTaxonomy(taxonomyEnum.getName());
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
            catsMap.put(category.getKey(), category.getInfo(Locale.ENGLISH).getName());
            final List<? extends Category> childCats = category.getChildren();

            if (!childCats.isEmpty()) {
                getChildren(childCats, catsMap);
            }
        }
    }

    /**
     * Sorts the given {@code map} by {@code value}.
     *
     * @param map the {@link Map} that needs to be sorted by {@code value}.
     * @return the map sorted by {@code value}.
     */
    private static Map<String, String> sortByValue(final Map<String, String> map) {
        return map
                .entrySet()
                .stream()
                .sorted(Map.Entry.comparingByValue())
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (oldValue, newValue) -> oldValue, LinkedHashMap::new));
    }
}