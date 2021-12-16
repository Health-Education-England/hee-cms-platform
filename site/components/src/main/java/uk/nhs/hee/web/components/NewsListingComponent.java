package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.NewsItem;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.components.info.NewsComponentInfo;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.utils.DocumentUtils;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ParametersInfo(type = ListingPageComponentInfo.class)
public class NewsListingComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final NewsItem newsItem = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (newsItem != null) {
            addCategoriesValueListMapToModel(request, newsItem);
            addNewsListingPageURLToModel(request);
        }
    }

    /**
     * Adds News Listing Page URL to model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addNewsListingPageURLToModel(final HstRequest request) {
        final HstRequestContext hstRequestContext = request.getRequestContext();
        final HippoBean newsListingPageBean =
                HstUtils.getListingPageBeanByType(hstRequestContext, ListingPageType.NEWS_LISTING.getType());

        if (newsListingPageBean == null) {
            return;
        }

        request.setModel(
                Model.NEWS_LISTING_PAGE_URL.getKey(),
                HstUtils.getURLByBean(hstRequestContext, newsListingPageBean, false));
    }

    /**
     * Creates a Map that has as the key the name of the news category and as the value the URL path
     * to the News Overview page filtered by category.
     *
     * <p>
     * Example: given the categories = ["data_search"],
     * the response will be [{"Data Search", "/news?category=data_search" }]
     * </p>
     */
    private void addCategoriesValueListMapToModel(
            final HstRequest request,
            final NewsItem newsItem) {
        final List<String> newsCategories = Arrays.asList(newsItem.getCategories());

        if (newsCategories.isEmpty()) {
            return;
        }
        final Map<String, String> allNewsCategoriesValueListMap = ValueListUtils.getValueListMap(
                ValueListIdentifier.NEWS_CATEGORIES.getName(), DocumentUtils.getChannel(newsItem.getPath()));

        request.setModel(
                Model.CATEGORIES_VALUE_LIST_MAP.getKey(),
                newsCategories.stream()
                        .filter(category -> allNewsCategoriesValueListMap.get(category) != null)
                        .collect(Collectors.toMap(category -> category, allNewsCategoriesValueListMap::get)));
    }
}
