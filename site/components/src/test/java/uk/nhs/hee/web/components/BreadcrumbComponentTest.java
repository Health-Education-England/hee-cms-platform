package uk.nhs.hee.web.components;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.configuration.site.HstSite;
import org.hippoecm.hst.configuration.sitemap.HstSiteMap;
import org.hippoecm.hst.configuration.sitemap.HstSiteMapItem;
import org.hippoecm.hst.container.RequestContextProvider;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.container.ComponentManager;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.linking.HstLinkCreator;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.hst.core.request.ResolvedMount;
import org.hippoecm.hst.core.request.ResolvedSiteMapItem;
import org.hippoecm.hst.mock.core.component.MockHstRequest;
import org.hippoecm.hst.site.HstServices;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.onehippo.cms7.essentials.components.ext.DoBeforeRenderExtension;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import uk.nhs.hee.web.components.beans.BreadcrumbLinkTest;

import java.util.List;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.powermock.api.mockito.PowerMockito.mockStatic;

@RunWith(PowerMockRunner.class)
@PowerMockIgnore({"javax.management.*", "javax.script.*"})
@PrepareForTest({HstServices.class, RequestContextProvider.class})
public class BreadcrumbComponentTest {
    // Home Page Title and URL
    private static final String homePageTitle = "Home";
    private static final String homePageURL = "/site";

    // Mocks
    private final HstRequest hstRequest = spy(new MockHstRequest());
    @Mock
    private HstResponse hstResponse;
    @Mock
    private HstRequestContext hstRequestContext;
    @Mock
    private ComponentManager componentManager;
    @Mock
    private HstSiteMapItem hstSiteMapItem;
    @Mock
    private HstLinkCreator hstLinkCreator;
    @Mock
    private Mount mount;

    private BreadcrumbComponent systemUnderTest;

    @Before
    @Ignore
    public void setUp() {
        // Mocks & stubs
        final ResolvedSiteMapItem resolvedSiteMapItem = mock(ResolvedSiteMapItem.class);
        final ResolvedMount resolvedMount = mock(ResolvedMount.class);
        final HstSite hstSite = mock(HstSite.class);
        final HstSiteMap hstSiteMap = mock(HstSiteMap.class);

        when(hstRequest.getRequestContext()).thenReturn(hstRequestContext);
        when(hstRequestContext.getResolvedSiteMapItem()).thenReturn(resolvedSiteMapItem);
        when(resolvedSiteMapItem.getHstSiteMapItem()).thenReturn(hstSiteMapItem);
        when(resolvedSiteMapItem.getResolvedMount()).thenReturn(resolvedMount);
        when(resolvedMount.getMount()).thenReturn(mount);
        when(hstRequestContext.getHstLinkCreator()).thenReturn(hstLinkCreator);
        when(mount.getHstSite()).thenReturn(hstSite);
        when(hstSite.getSiteMap()).thenReturn(hstSiteMap);

        // Do nothing when org.onehippo.cms7.essentials.components.CommonComponent#doBeforeRender
        // has been called from BreadcrumbComponent via super.doBeforeRender(request, response).
        mockStatic(HstServices.class, RequestContextProvider.class);
        when(HstServices.getComponentManager()).thenReturn(componentManager);
        when(componentManager.getComponent(DoBeforeRenderExtension.class.getName())).thenReturn(null);
        when(RequestContextProvider.get()).thenReturn(hstRequestContext);
        when(hstRequestContext.isChannelManagerPreviewRequest()).thenReturn(false);

        // Home SiteMapItem
        final HstSiteMapItem homeHstSiteMapItem = getHstSiteMapItem(homePageTitle, homePageURL);
        when(hstSiteMap.getSiteMapItemByRefId("root")).thenReturn(homeHstSiteMapItem);

        systemUnderTest = spy(new BreadcrumbComponent());
    }

    @Test
    @Ignore
    public void doBeforeRender_WithNonHomePageRequest_AddsBreadcrumbLinksToModel() {
        // Mocks & stubs
        when(hstSiteMapItem.getRefId()).thenReturn("non-root");

        // Parent SiteMapItem one level up
        final String parentPageTitle = "Literature searching";
        final String parentPageURL = "/site/evidence-and-resources/literature-searching";
        final HstSiteMapItem parentHstSiteMapItem =
                getHstSiteMapItem(parentPageTitle, parentPageURL);
        when(hstSiteMapItem.getParentItem()).thenReturn(parentHstSiteMapItem);

        // Parent SiteMapItem two level up
        final String grandParentPageTitle = "Evidence and resources";
        final String grandParentPageURL = "/site/evidence-and-resources";
        final HstSiteMapItem grandParentHstSiteMapItem =
                getHstSiteMapItem(grandParentPageTitle, grandParentPageURL);
        when(parentHstSiteMapItem.getParentItem()).thenReturn(grandParentHstSiteMapItem);

        when(grandParentHstSiteMapItem.getParentItem()).thenReturn(null);

        // Execute the method to be tested
        systemUnderTest.doBeforeRender(hstRequest, hstResponse);

        // Verify
        assertThat(hstRequest.getModelNames()).contains("breadcrumbLinks");

        final List<BreadcrumbLinkTest> breadcrumbLinks = hstRequest.getModel("breadcrumbLinks");
        assertThat(breadcrumbLinks).isNotNull();
        assertThat(breadcrumbLinks)
                .extracting("text", "url")
                .contains(
                        tuple(homePageTitle, homePageURL),
                        tuple(parentPageTitle, parentPageURL),
                        tuple(grandParentPageTitle, grandParentPageURL)
                );
    }

    @Test
    @Ignore
    public void doBeforeRender_WithNonHomePageRequest_AddsNoBreadcrumbLinksToModel() {
        // Mocks & stubs
        when(hstSiteMapItem.getRefId()).thenReturn("root");

        // Execute the method to be tested
        systemUnderTest.doBeforeRender(hstRequest, hstResponse);

        // Verify
        assertThat(hstRequest.getModelNames()).doesNotContain("breadcrumbLinks");
    }

    private HstSiteMapItem getHstSiteMapItem(final String title, final String url) {
        final HstSiteMapItem siteMapItem = mock(HstSiteMapItem.class);
        final HstLink hstLink = mock(HstLink.class);
        when(siteMapItem.getPageTitle()).thenReturn(title);
        when(hstLinkCreator.create(siteMapItem, mount)).thenReturn(hstLink);
        when(hstLink.toUrlForm(eq(hstRequestContext), eq(false))).thenReturn(url);
        return siteMapItem;
    }

}
