package uk.nhs.hee.web.utils;

import org.onehippo.taxonomy.api.Category;
import org.onehippo.taxonomy.api.Taxonomy;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

/**
 * A class to support the loaing oif taxonomy details into the display template
 */
public class TaxonomyTemplateUtils {
    /**
     * This initiates the loading of a map from the named taxonomy
     * @param taxonomy that we are reading
     * @param locale that we use to enable us to find the textual value for a key
     * @return a {@link Map} with keys and values for use in the template
     */
    public static Map<String, String> getTaxonomyAsMap(Taxonomy taxonomy, Locale locale) {
        List<? extends Category> categories = taxonomy.getCategories();
        Map<String, String> catsMap = new HashMap<>();

        getChildren(categories, catsMap, locale);
        return catsMap;
    }

    /**
     * This is a recursively called function that will iterate through a category's chiuldren and load all keys and values into the map
     * @param categories
     * @param catsMap
     * @param locale
     */
    private static void getChildren(List<? extends Category> categories, Map<String, String> catsMap, Locale locale) {
        for (Category category : categories) {
            String name = category.getInfo(locale).getName();
            String key = category.getKey();
            catsMap.put(key, name);
            List<? extends Category> childCats = category.getChildren();
            if (childCats != null && childCats.size() > 0) {
                getChildren(childCats, catsMap, locale);
            }
        }
    }
}
