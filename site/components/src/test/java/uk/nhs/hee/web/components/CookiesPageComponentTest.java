package uk.nhs.hee.web.components;

import org.hippoecm.hst.container.RequestContextProvider;
import org.hippoecm.hst.content.beans.manager.ObjectBeanManager;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.container.ComponentManager;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.hst.mock.core.component.MockHstRequest;
import org.hippoecm.hst.site.HstServices;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.onehippo.cms7.essentials.components.ext.DoBeforeRenderExtension;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.utils.ContentBlocksUtils;

import java.util.Collections;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.powermock.api.mockito.PowerMockito.mockStatic;

@RunWith(PowerMockRunner.class)
@PowerMockIgnore({"javax.management.*", "javax.script.*"})
@PrepareForTest({HstServices.class, RequestContextProvider.class, ContentBlocksUtils.class})
public class CookiesPageComponentTest {

    private static final String COMPONENT_PARAMETER_NAME_DOCUMENT = "document";
    private static final String COMPONENT_PARAMETER_NAME_FALLBACK_SITE_CONTENT_BASE_PATH = "fallbackSiteContentBasePath";

    private static final String COMPONENT_PARAMETER_VALUE_DOCUMENT = "cookies";
    private static final String COMPONENT_PARAMETER_VALUE_FALLBACK_SITE_CONTENT_BASE_PATH = "/content/documents/lks";

    private static final String MODEL_NAME_DOCUMENT = "document";

    // Mocks
    private final HstRequest mockHstRequest = spy(new MockHstRequest());
    @Mock
    private HstResponse mockHstResponse;
    @Mock
    private HstRequestContext mockHstRequestContext;
    @Mock
    private ComponentManager mockComponentManager;
    @Mock
    private ObjectBeanManager mockObjectBeanManager;
    @Mock
    private EssentialsDocumentComponentInfo mockEssentialsDocumentComponentInfo;
    @Mock
    private HippoBean mockSiteContentBaseBean;
    @Mock
    private Guidance mockChannelCookieGuidance;
    @Mock
    private HippoBean mockFallbackSiteContentBaseBean;
    @Mock
    private Guidance mockFallbackChannelCookieGuidance;

    private CookiesPageComponent systemUnderTest;

    @Before
    public void setUp() {
        // Mocks & stubs
        // Do nothing when org.onehippo.cms7.essentials.components.CommonComponent#doBeforeRender
        // has been called from CookiesPageComponent via super.doBeforeRender(request, response).
        mockStatic(HstServices.class, RequestContextProvider.class);
        when(HstServices.getComponentManager()).thenReturn(mockComponentManager);
        when(mockComponentManager.getComponent(DoBeforeRenderExtension.class.getName())).thenReturn(null);
        when(RequestContextProvider.get()).thenReturn(mockHstRequestContext);
        when(mockHstRequestContext.isChannelManagerPreviewRequest()).thenReturn(false);

        mockStatic(ContentBlocksUtils.class);
        when(ContentBlocksUtils.getValueListMaps(Mockito.anyList())).thenReturn(Collections.emptyMap());

        // Stubbing for org.onehippo.cms7.essentials.components.EssentialsDocumentComponent.doBeforeRender call
        when(mockEssentialsDocumentComponentInfo.getDocument()).thenReturn(COMPONENT_PARAMETER_VALUE_DOCUMENT);
        when(mockHstRequest.getRequestContext()).thenReturn(mockHstRequestContext);
        when(mockHstRequestContext.getSiteContentBaseBean()).thenReturn(mockSiteContentBaseBean);
        when(mockHstRequestContext.getObjectBeanManager()).thenReturn(mockObjectBeanManager);

        systemUnderTest = spy(new CookiesPageComponent() {
            @Override
            protected <T> T getComponentParametersInfo(final HstRequest request) {
                return (T) mockEssentialsDocumentComponentInfo;
            }

            @Override
            public String getComponentParameter(final String name) {
                if (COMPONENT_PARAMETER_NAME_FALLBACK_SITE_CONTENT_BASE_PATH.equals(name)) {
                    return COMPONENT_PARAMETER_VALUE_FALLBACK_SITE_CONTENT_BASE_PATH;
                }

                if (COMPONENT_PARAMETER_NAME_DOCUMENT.equals(name)) {
                    return COMPONENT_PARAMETER_VALUE_DOCUMENT;
                }

                return null;
            }
        });
    }

    @Test
    public void doBeforeRender_WithChannelCookiesDocExists_AddsChannelCookieGuidanceToModel() {
        // Mocks & stubs
        when(mockSiteContentBaseBean.getBean(COMPONENT_PARAMETER_VALUE_DOCUMENT)).thenReturn(mockChannelCookieGuidance);

        // Execute the method to be tested
        systemUnderTest.doBeforeRender(mockHstRequest, mockHstResponse);

        // Verify
        assertThat((Guidance) mockHstRequest.getModel(MODEL_NAME_DOCUMENT)).isEqualTo(mockChannelCookieGuidance);
        verify(systemUnderTest, never()).pageNotFound(mockHstResponse);
    }

    @Test
    public void doBeforeRender_WithChannelCookiesDocNotExistsButOneExistsOnFallbackChannel_AddsFallbackChannelCookieGuidanceToModel()
            throws Exception {
        // Mocks & stubs
        when(mockObjectBeanManager.getObject(COMPONENT_PARAMETER_VALUE_FALLBACK_SITE_CONTENT_BASE_PATH))
                .thenReturn(mockFallbackSiteContentBaseBean);
        when(mockFallbackSiteContentBaseBean.getBean(COMPONENT_PARAMETER_VALUE_DOCUMENT, Guidance.class))
                .thenReturn(mockFallbackChannelCookieGuidance);

        // fallbackSiteContentBean.getBean(getComponentParameter("document"), Guidance.class)
        // Execute the method to be tested
        systemUnderTest.doBeforeRender(mockHstRequest, mockHstResponse);

        // Verify
        assertThat((Guidance) mockHstRequest.getModel(MODEL_NAME_DOCUMENT))
                .isEqualTo(mockFallbackChannelCookieGuidance);
        verify(systemUnderTest, never()).pageNotFound(mockHstResponse);
    }

    @Test
    public void doBeforeRender_WithChannelCookiesDocNotExistsAndOneNotExistsOnFallbackChannel_AddsNoCookieGuidanceToModel()
            throws Exception {
        // Mocks & stubs
        when(mockObjectBeanManager.getObject(COMPONENT_PARAMETER_VALUE_FALLBACK_SITE_CONTENT_BASE_PATH))
                .thenReturn(mockFallbackSiteContentBaseBean);

        // fallbackSiteContentBean.getBean(getComponentParameter("document"), Guidance.class)
        // Execute the method to be tested
        systemUnderTest.doBeforeRender(mockHstRequest, mockHstResponse);

        // Verify
        assertThat((Guidance) mockHstRequest.getModel(MODEL_NAME_DOCUMENT)).isNull();
        verify(systemUnderTest, times(1)).pageNotFound(mockHstResponse);
    }
}
