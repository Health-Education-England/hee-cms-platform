package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.News;
import uk.nhs.hee.web.components.info.NewsComponentInfo;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import uk.nhs.hee.web.utils.DocumentUtils;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ParametersInfo(type = NewsComponentInfo.class)
public class NewsComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        News news = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (news == null) {
            news = (News) request.getRequestContext().getContentBean();
            request.setModel(REQUEST_ATTR_DOCUMENT, news);
        }

        if (news != null) {
            addCategoriesValueListMapToModel(request, news);
            addNewsListingPageURLToModel(request);

            // the page content blocks needs valueLists to be set on the model
            List<HippoBean> pageContentBlocks = news.getContentBlocks();
            pageContentBlocks.addAll(news.getRightHandBlocks());

            Map<String, Map<String, String>> modelToValueListMap =
                    ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);

            request.setAttribute("tableComponentService", new TableComponentService());
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
            final News news) {
        final List<String> newsCategories = Arrays.asList(news.getCategories());

        if (newsCategories.isEmpty()) {
            return;
        }
        final Map<String, String> allNewsCategoriesValueListMap = ValueListUtils.getValueListMap(
                ValueListIdentifier.NEWS_CATEGORIES.getName(), DocumentUtils.getChannel(news.getPath()));

        request.setModel(
                Model.CATEGORIES_VALUE_LIST_MAP.getKey(),
                newsCategories.stream()
                        .filter(category -> allNewsCategoriesValueListMap.get(category) != null)
                        .collect(Collectors.toMap(category -> category, allNewsCategoriesValueListMap::get)));
    }
}
