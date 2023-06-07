package uk.nhs.hee.web.content.rewriter.impl;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.repository.api.HippoNodeType;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Spy;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.MiniHubGuidanceLinkUtils;

import javax.jcr.*;
import javax.jcr.nodetype.NodeType;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyBoolean;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;
import static org.powermock.api.mockito.PowerMockito.mockStatic;

@RunWith(PowerMockRunner.class)
@PrepareForTest({
        MiniHubGuidanceLinkUtils.class,
        HstUtils.class
})
@PowerMockIgnore({"javax.management.*", "com.sun.org.apache.xerces.*", "javax.xml.*", "org.xml.*", "org.w3c.dom.*", "javax.script.*"})
public class MiniHubGuidanceLinkRewriterTest {
    @Mock
    private Session mockJCRSession;
    @Mock
    private HstRequestContext mockHstRequestContext;
    @Mock
    private HstLink mockSuperClassLink;
    @Spy
    private final MiniHubGuidanceLinkRewriter systemUnderTest = new MiniHubGuidanceLinkRewriter() {
        @Override
        protected HstLink createInternalLink(
                final Node referencedNode,
                final HstRequestContext requestContext,
                final Mount targetMount) {

            return mockSuperClassLink;
        }
    };

    @Mock
    private HstLink mockMiniHubGuidanceLink;
    @Mock
    private Node mockHtmlNode;
    @Mock
    private Node mockMirrorNode;
    @Mock
    private Node mockReferencedNode;
    @Mock
    private Node mockMiniHubNode;
    @Mock
    private Node mockDocumentNode;
    @Mock
    private NodeType mockMirrorNodeType;
    @Mock
    private NodeIterator mockMiniHubNodeIterator;

    @Before
    public void setUp() throws Exception {
        mockStatic(MiniHubGuidanceLinkUtils.class, HstUtils.class);
        when(HstUtils.isPageNotFound(any(HstLink.class), anyBoolean(), eq(mockHstRequestContext), any(Mount.class)))
                .thenReturn(true);

        when(mockSuperClassLink.getPath()).thenReturn("pagenotfound");

        when(mockHtmlNode.getNode(anyString())).thenReturn(mockMirrorNode);
        when(mockMirrorNode.getPath()).thenReturn(
                "/content/documents/lks/guidance-pages/copyright/copyright[3]/hee:contentBlocks/copyright");
        when(mockMirrorNode.getPrimaryNodeType()).thenReturn(mockMirrorNodeType);
        when(mockMirrorNode.hasProperty(HippoNodeType.HIPPO_DOCBASE)).thenReturn(true);

        final String refDocUUID = "9071bfc1-35e4-4cb8-852c-c91f97fb43f0";
        final Property mockDockBaseProperty = mock(Property.class);
        when(mockMirrorNode.getProperty(HippoNodeType.HIPPO_DOCBASE)).thenReturn(mockDockBaseProperty);
        when(mockDockBaseProperty.getString()).thenReturn(refDocUUID);

        when(mockMirrorNode.getSession()).thenReturn(mockJCRSession);
        when(mockJCRSession.getNodeByIdentifier(refDocUUID)).thenReturn(mockReferencedNode);
        when(mockReferencedNode.getPath()).thenReturn("/content/documents/lks/guidance-pages/introduction");

        when(mockReferencedNode.isNodeType(HippoNodeType.NT_HANDLE)).thenReturn(true);

        final String referencedNodeName = "introduction";
        when(mockReferencedNode.getName()).thenReturn(referencedNodeName);
        when(mockReferencedNode.hasNode(referencedNodeName)).thenReturn(true);
    }

    @Test
    public void getLink_WithLinkFromSuperClassIsNotPageNotFound_ReturnsLinkFromSuperClass() {
        // Mocks & stubs
        when(mockSuperClassLink.getPath()).thenReturn("copyright");
        when(HstUtils.isPageNotFound(any(HstLink.class), anyBoolean(), eq(mockHstRequestContext), any(Mount.class)))
                .thenReturn(false);

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "copyright", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).satisfiesAnyOf(
                link -> assertThat(link).isNull(),
                link -> assertThat(link).isEqualTo(mockSuperClassLink)
        );
    }

    @Test
    public void getLink_WithBinaryPath_ReturnsLinkFromSuperClass() {
        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "image.png/{_document}/hippogallery:original",
                mockHtmlNode,
                mockHstRequestContext,
                mock(Mount.class));

        // Verify
        assertThat(hstLink).satisfiesAnyOf(
                link -> assertThat(link).isNull(),
                link -> assertThat(link).isEqualTo(mockSuperClassLink)
        );
    }

    @Test
    public void getLink_WithDocumentPathDoesNotHaveDocBaseProperty_ReturnsLinkFromSuperClass()
            throws RepositoryException {
        // Mocks & stubs
        when(mockMirrorNode.hasProperty(HippoNodeType.HIPPO_DOCBASE)).thenReturn(false);

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "path_without_docbase", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).satisfiesAnyOf(
                link -> assertThat(link).isNull(),
                link -> assertThat(link).isEqualTo(mockSuperClassLink)
        );
    }

    @Test
    public void getLink_WithReferencedNodeNotAHandleNode_ReturnsLinkFromSuperClass()
            throws RepositoryException {
        // Mocks & stubs
        when(mockReferencedNode.isNodeType(HippoNodeType.NT_HANDLE)).thenReturn(false);

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "path_with_non_handle_node", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).satisfiesAnyOf(
                link -> assertThat(link).isNull(),
                link -> assertThat(link).isEqualTo(mockSuperClassLink)
        );
    }

    @Test
    public void getLink_WithReferencedNodeNotHaveAChildNodeWithSameName_ReturnsLinkFromSuperClass()
            throws RepositoryException {
        // Mocks & stubs
        when(mockReferencedNode.hasNode(anyString())).thenReturn(false);

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "path_with_valid_handle_node", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).satisfiesAnyOf(
                link -> assertThat(link).isNull(),
                link -> assertThat(link).isEqualTo(mockSuperClassLink)
        );
    }

    @Test
    public void getLink_WithReferencedNodeChildIsANonGuidanceDocumentNode_ReturnsLinkFromSuperClass()
            throws RepositoryException {
        // Mocks & stubs
        when(mockDocumentNode.isNodeType("hee:guidance")).thenReturn(false);
        when(MiniHubGuidanceLinkUtils.getLink(eq(mockReferencedNode), anyBoolean(), eq(mockHstRequestContext),
                any(Mount.class))).thenReturn(null);

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "path_with_valid_handle_node", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).satisfiesAnyOf(
                link -> assertThat(link).isNull(),
                link -> assertThat(link).isEqualTo(mockSuperClassLink)
        );
    }

    @Test
    public void getLink_WithReferencedGuidanceNodeNotAssociatedToAnyMiniHubDocument_ReturnsLinkFromSuperClass() {
        // Mocks & stubs
        when(mockMiniHubNodeIterator.hasNext()).thenReturn(false);
        when(MiniHubGuidanceLinkUtils.getLink(eq(mockReferencedNode), anyBoolean(), eq(mockHstRequestContext),
                any(Mount.class))).thenReturn(null);

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "path_with_valid_handle_node", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).satisfiesAnyOf(
                link -> assertThat(link).isNull(),
                link -> assertThat(link).isEqualTo(mockSuperClassLink)
        );
    }

    @Test
    public void getLink_WithReferencedGuidanceNodeAssociatedToAMiniHubDocument_ReturnsLinkFromSuperClass() {
        // Mocks & stubs
        when(MiniHubGuidanceLinkUtils.getLink(eq(mockReferencedNode), anyBoolean(), eq(mockHstRequestContext),
                any(Mount.class))).thenReturn(mockMiniHubGuidanceLink);

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "path_with_valid_handle_node", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).isEqualTo(mockMiniHubGuidanceLink);
    }

}
