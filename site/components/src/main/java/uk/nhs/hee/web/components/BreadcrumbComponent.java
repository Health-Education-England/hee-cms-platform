package uk.nhs.hee.web.components;

import org.hippoecm.hst.configuration.HstNodeTypes;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.hst.core.request.ResolvedSiteMapItem;
import org.onehippo.cms7.essentials.components.CommonComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.components.beans.BreadcrumbLink;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Component that adds Breadcrumb Links model to the request.
 */
public class BreadcrumbComponent extends CommonComponent {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(BreadcrumbComponent.class);
    /**
     * The name of the root content folder where all the experience pages are created.
     */
    public static final String HOME_BEAN_NAME = "pages";
    /**
     * The breadcrumb link display name for the root content folder.
     */
    public static final String HOME = "Home";

    /**
     * {@inheritDoc}
     */
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final List<BreadcrumbLink> breadcrumbLinks = buildBreadCrumbLinks(request);

        LOGGER.debug("Breadcrumb Links = {}", breadcrumbLinks);
        request.setModel("breadcrumbLinks", breadcrumbLinks);
    }

    /**
     * Build breadcrumb links by iterating upwards from the current content bean and upwards till the content base.
     *
     * @param request the {@link HstRequest} instance.
     * @return the {@link List<BreadcrumbLink>} built for the given {@code request}.
     */
    private List<BreadcrumbLink> buildBreadCrumbLinks(HstRequest request) {
        final List<BreadcrumbLink> items = new ArrayList<>();

        final ResolvedSiteMapItem currentSmi = request.getRequestContext().getResolvedSiteMapItem();
        final HippoBean currentBean = getBeanForResolvedSiteMapItem(request, currentSmi);

        if (currentBean != null) {
            addContentBasedItems(items, currentBean, request);
        }

        Collections.reverse(items);

        return items;
    }

    /**
     * Add breadcrumb items based on content, from current upwards to the content
     * base bean.
     *
     * @param items       list of breadcrumb items
     * @param currentBean bean described by URL
     * @param request     HST request
     */
    protected void addContentBasedItems(final List<BreadcrumbLink> items, HippoBean currentBean, final HstRequest request) {
        final HippoBean baseBean = request.getRequestContext().getSiteContentBaseBean();
        HippoBean bean = currentBean;

        // go up to until site content base bean
        while (!bean.getParentBean().isSelf(baseBean)) {
            bean = bean.getParentBean();

            final BreadcrumbLink item = getBreadcrumbLink(request, bean);
            if (item.getUrl() != null) {
                items.add(item);
            }
        }
    }


    private BreadcrumbLink getBreadcrumbLink(final HstRequest request, final HippoBean bean) {
        final HstRequestContext context = request.getRequestContext();

        final HstLink hstLink = context.getHstLinkCreator().create(bean, context);
        String link = hstLink != null ? hstLink.toUrlForm(request.getRequestContext(), false) : null;

        String linkDisplayName = isHome(bean) ? HOME : bean.getDisplayName();

        return new BreadcrumbLink(linkDisplayName, link);
    }

    @Override
    public HippoBean getBeanForResolvedSiteMapItem(final HstRequest request, final ResolvedSiteMapItem siteMapItem) {
        HippoBean bean = super.getBeanForResolvedSiteMapItem(request, siteMapItem);

        if (bean != null) {
            // correction: one level up if it's an _index_ item, to prevent doubles
            if (siteMapItem.getPathInfo().endsWith(HstNodeTypes.INDEX)) {
                bean = bean.getParentBean();
            }
        }

        return bean;
    }

    /**
     * Returns {@code true} if the given {@code hippoBean} belongs to {@code Home}
     * i.e. {@code @hst:name=pages}. Otherwise returns {@code false}.
     *
     * @return {@code true} if the given {@code hippoBean} belongs to {@code Home}.
     * Otherwise returns {@code false}.
     */
    private boolean isHome(final HippoBean hippoBean) {
        return HOME_BEAN_NAME.equals(hippoBean.getName());
    }
}
