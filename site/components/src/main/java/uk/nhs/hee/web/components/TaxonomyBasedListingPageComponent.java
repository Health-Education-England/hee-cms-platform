package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.site.HstServices;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.api.TaxonomyManager;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.HstUtils;

import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Extended component for all Taxonomy based Listing Pages. This provides a new implementation of the method
 * that creates the list of categories as well as the method that finds all possible values for categories
 * that are being displayed
 */
@ParametersInfo(type = ListingPageComponentInfo.class)
public class TaxonomyBasedListingPageComponent extends CategoryBasedListingPageComponent {

    protected Map<String, String> getFilterValueListMap(final HstRequest request) {
        final TaxonomyManager taxonomyManager = HstServices.getComponentManager()
                .getComponent(TaxonomyManager.class.getSimpleName(), "org.onehippo.taxonomy.contentbean");
        Taxonomy taxonomy = taxonomyManager.getTaxonomies().getTaxonomy("blog-category-classification");
        Locale thisLocale = request.getLocale();

        return taxonomy.getCategories()
                    .stream()
                    .collect(Collectors.toMap(category -> category.getKey(),
                                    category -> category.getInfo(thisLocale).getName()));
    }

    /**
     * Returns Query Filters built based on the requested categories (identified by {@code category} query parameter).
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the {@link Filter} instance built based on the requested categories.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    @Override
    protected Filter createCategoryFilter(final HstRequest request, final HstQuery query) throws FilterException {
        final List<String> categoriesFilter = HstUtils.getQueryParameterValues(request, CATEGORY_QUERY_PARAM);
        return createOrFilter(query, categoriesFilter, HEEField.CATEGORY_CLASSIFICATION.getName());
    }
}
