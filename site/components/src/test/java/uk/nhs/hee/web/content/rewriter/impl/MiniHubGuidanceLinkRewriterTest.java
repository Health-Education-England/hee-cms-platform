package uk.nhs.hee.web.content.rewriter.impl;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.content.beans.query.HstQueryManager;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.repository.api.HippoNodeType;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Spy;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.modules.junit4.PowerMockRunner;

import javax.jcr.*;
import javax.jcr.nodetype.NodeType;
import javax.jcr.query.Query;
import javax.jcr.query.QueryManager;
import javax.jcr.query.QueryResult;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@RunWith(PowerMockRunner.class)
@PowerMockIgnore({"javax.management.*", "javax.script.*"})
public class MiniHubGuidanceLinkRewriterTest {
    @Mock
    private Session mockJCRSession;
    @Mock
    private HstRequestContext mockHstRequestContext;
    @Mock
    private HstLink mockSuperClassLink;
    @Mock
    private HstLink mockMiniHubLink;
    @Mock
    private Node mockHtmlNode;
    @Mock
    private Node mockMirrorNode;
    @Mock
    private Node mockReferencedNode;
    @Mock
    private Node mockMiniHubNode;
    @Spy
    private final MiniHubGuidanceLinkRewriter systemUnderTest = new MiniHubGuidanceLinkRewriter() {
        @Override
        protected HstLink createInternalLink(
                final Node referencedNode,
                final HstRequestContext requestContext,
                final Mount targetMount) {
            if (referencedNode == mockMiniHubNode) {
                return mockMiniHubLink;
            }

            return mockSuperClassLink;
        }
    };
    @Mock
    private Node mockDocumentNode;
    @Mock
    private NodeType mockMirrorNodeType;
    @Mock
    private NodeIterator mockMiniHubNodeIterator;

    @Before
    public void setUp() throws Exception {
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

        final NodeIterator mockChildNodeIterator = mock(NodeIterator.class);
        when(mockReferencedNode.getNodes()).thenReturn(mockChildNodeIterator);
        when(mockChildNodeIterator.hasNext()).thenReturn(true);
        when(mockChildNodeIterator.nextNode()).thenReturn(mockDocumentNode);
        when(mockDocumentNode.isNodeType("hee:guidance")).thenReturn(true);

        when(mockHstRequestContext.getSiteContentBasePath()).thenReturn("/content/documents/lks");
        when(mockHstRequestContext.isChannelManagerPreviewRequest()).thenReturn(false);
        final HstQueryManager mockHstQueryManager = mock(HstQueryManager.class);
        when(mockHstRequestContext.getQueryManager()).thenReturn(mockHstQueryManager);
        when(mockHstQueryManager.getSession()).thenReturn(mockJCRSession);
        final Workspace mockWorkspace = mock(Workspace.class);
        when(mockJCRSession.getWorkspace()).thenReturn(mockWorkspace);
        final QueryManager mockQueryManager = mock(QueryManager.class);
        when(mockWorkspace.getQueryManager()).thenReturn(mockQueryManager);
        final Query mockQuery = mock(Query.class);
        when(mockQueryManager.createQuery(anyString(), eq(Query.XPATH))).thenReturn(mockQuery);
        final QueryResult mockQueryResult = mock(QueryResult.class);
        when(mockQuery.execute()).thenReturn(mockQueryResult);
        when(mockQueryResult.getNodes()).thenReturn(mockMiniHubNodeIterator);
        when(mockMiniHubNodeIterator.hasNext()).thenReturn(true);
        when(mockMiniHubNodeIterator.nextNode()).thenReturn(mockMiniHubNode);
        when(mockMiniHubLink.getPath()).thenReturn("patient-and-public-information");
    }

    @Test
    public void getLink_WithLinkFromSuperClassIsNotPageNotFound_ReturnsLinkFromSuperClass() {
        // Mocks & stubs
        when(mockSuperClassLink.getPath()).thenReturn("copyright");

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "copyright", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).isEqualTo(mockSuperClassLink);
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
                link -> assertThat(link.getPath()).isEqualTo("pagenotfound")
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
                link -> assertThat(link.getPath()).isEqualTo("pagenotfound")
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
                link -> assertThat(link.getPath()).isEqualTo("pagenotfound")
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
                link -> assertThat(link.getPath()).isEqualTo("pagenotfound")
        );
    }

    @Test
    public void getLink_WithReferencedNodeChildIsANonGuidanceDocumentNode_ReturnsLinkFromSuperClass()
            throws RepositoryException {
        // Mocks & stubs
        when(mockDocumentNode.isNodeType("hee:guidance")).thenReturn(false);

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "path_with_valid_handle_node", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).satisfiesAnyOf(
                link -> assertThat(link).isNull(),
                link -> assertThat(link.getPath()).isEqualTo("pagenotfound")
        );
    }

    @Test
    public void getLink_WithReferencedGuidanceNodeNotAssociatedToAnyMiniHubDocument_ReturnsLinkFromSuperClass() {
        // Mocks & stubs
        when(mockMiniHubNodeIterator.hasNext()).thenReturn(false);

        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "path_with_valid_handle_node", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).satisfiesAnyOf(
                link -> assertThat(link).isNull(),
                link -> assertThat(link.getPath()).isEqualTo("pagenotfound")
        );
    }

    @Test
    public void getLink_WithReferencedGuidanceNodeAssociatedToAMiniHubDocument_ReturnsLinkFromSuperClass() {
        // Execute the method to be tested
        final HstLink hstLink = systemUnderTest.getLink(
                "path_with_valid_handle_node", mockHtmlNode, mockHstRequestContext, mock(Mount.class));

        // Verify
        assertThat(hstLink).isEqualTo(mockMiniHubLink);
        verify(hstLink, times(1)).setPath("patient-and-public-information/introduction");
    }

}
