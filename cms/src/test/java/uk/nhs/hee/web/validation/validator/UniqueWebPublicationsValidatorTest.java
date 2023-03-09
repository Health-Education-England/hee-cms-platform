package uk.nhs.hee.web.validation.validator;

import org.hippoecm.repository.api.HippoNodeType;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.repository.util.JcrConstants;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import uk.nhs.hee.web.utils.DocumentUtils;

import javax.jcr.*;
import javax.jcr.query.Query;
import javax.jcr.query.QueryManager;
import javax.jcr.query.QueryResult;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.powermock.api.mockito.PowerMockito.mockStatic;

@RunWith(PowerMockRunner.class)
@PowerMockIgnore({"javax.management.*", "javax.script.*"})
@PrepareForTest({DocumentUtils.class})
public class UniqueWebPublicationsValidatorTest {

    // Publication landing page document node type
    private static final String NODE_TYPE_HEE_PUBLICATION_LANDING_PAGE = "hee:publicationLandingPage";

    // Web publication field node name
    private static final String NODE_NAME_HEE_WEB_PUBLICATIONS = "hee:webPublications";

    private static final String PUBLICATION_PAGE_HIPPO_NAME = "Reasonable Adjustments Policy - Publication 1";

    private static final String DUPLICATE_PUB_PAGE_VIOLATION_MSG =
            "Please remove duplicate Publication page document(s)";

    private static final String NON_UNIQUE_PUB_PAGE_VIOLATION_MSG = "'" + PUBLICATION_PAGE_HIPPO_NAME +
            "' already exists as a Web publication for another Publication landing page document in the CMS. " +
            "A Publication page cannot be multiple Web publications. Please select a different Publication page.";

    private static final String REUSED_PUB_PAGE_DOC_ID = "dec75cbc-43ed-468d-89f7-e6fd7cee024e";
    private static final String NON_REUSED_PUB_PAGE_DOC_ID = "c5ab67ca-b8b5-4802-9dd9-ee9b4c6b86f0";

    private final UniqueWebPublicationsValidator systemUnderTest = new UniqueWebPublicationsValidator();

    @Mock
    private ValidationContext mockValidationContext;
    @Mock
    private NodeIterator mockWebPubNodeIterator;
    @Mock
    private NodeIterator mockRefPubLandPageDocNodeIterator;
    @Mock
    private Node mockPubLandingPageDocNode;
    @Mock
    private Node mockNonUniqueWebPubNode;
    @Mock
    private Property mockNonUniqueWebPubNodeHippoBaseProperty;
    @Mock
    private Node mockUniqueWebPubNode;
    @Mock
    private Property mockUniqueWebPubNodeHippoBaseProperty;
    @Mock
    private Node mockRefPubLandPageDocNode;

    @Before
    public void setUp() throws Exception {
        // Mocks & stubs
        mockStatic(DocumentUtils.class);

        // Publication landing page doc node
        final Node mockPubLandingPageDocHandleNode = mock(Node.class);
        final String pubLandingPageDocHandleNodePath = "/content/documents/lks/publications/2022/careers" +
                "/higher-specialist-scientist-training---publication-landing";
        when(mockPubLandingPageDocNode.getParent()).thenReturn(mockPubLandingPageDocHandleNode);
        when(mockPubLandingPageDocHandleNode.getPath()).thenReturn(pubLandingPageDocHandleNodePath);
        when(mockPubLandingPageDocNode.getPath()).thenReturn(pubLandingPageDocHandleNodePath +
                "/higher-specialist-scientist-training---publication-landing");

        // JCR session and related JCR objects
        final Session mockSession = mock(Session.class);
        when(mockPubLandingPageDocNode.getSession()).thenReturn(mockSession);
        final Workspace mockWorkspace = mock(Workspace.class);
        when(mockSession.getWorkspace()).thenReturn(mockWorkspace);
        final QueryManager mockQueryManager = mock(QueryManager.class);
        when(mockWorkspace.getQueryManager()).thenReturn(mockQueryManager);

        // Publication landing page doc "hee:webPublications" nodes
        when(mockPubLandingPageDocNode.getNodes(NODE_NAME_HEE_WEB_PUBLICATIONS)).thenReturn(mockWebPubNodeIterator);

        when(mockWebPubNodeIterator.hasNext()).thenReturn(true, false);
        when(mockWebPubNodeIterator.next()).thenReturn(mockNonUniqueWebPubNode);

        when(mockNonUniqueWebPubNode.getProperty(HippoNodeType.HIPPO_DOCBASE))
                .thenReturn(mockNonUniqueWebPubNodeHippoBaseProperty);
        when(mockNonUniqueWebPubNodeHippoBaseProperty.getString()).thenReturn(REUSED_PUB_PAGE_DOC_ID);

        when(DocumentUtils.getDocumentDisplayName(mockSession, REUSED_PUB_PAGE_DOC_ID))
                .thenReturn(PUBLICATION_PAGE_HIPPO_NAME);

        // Referenced Publication landing page doc query
        final Query mockPubLandingBySinglePageFinderQuery = mock(Query.class);
        when(mockQueryManager.createQuery(anyString(), eq(Query.XPATH)))
                .thenReturn(mockPubLandingBySinglePageFinderQuery);
        final QueryResult mockRefPubLandPageDocQueryResult = mock(QueryResult.class);
        when(mockPubLandingBySinglePageFinderQuery.execute()).thenReturn(mockRefPubLandPageDocQueryResult);
        when(mockRefPubLandPageDocQueryResult.getNodes()).thenReturn(mockRefPubLandPageDocNodeIterator);

        when(mockRefPubLandPageDocNodeIterator.hasNext()).thenReturn(true, false);
        when(mockRefPubLandPageDocNodeIterator.nextNode()).thenReturn(mockRefPubLandPageDocNode);

        final String refPubLandingPageDocNodePath = "/content/documents/lks/publications/2022/policies" +
                "/reasonable-adjustments-policy---publication-landing";
        when(mockRefPubLandPageDocNode.getPath()).thenReturn(refPubLandingPageDocNodePath);

        // Violation
        final Violation mockDuplicatePubPageViolation = mock(Violation.class);
        when(mockValidationContext.createViolation("duplicate-publication-pages"))
                .thenReturn(mockDuplicatePubPageViolation);
        when(mockDuplicatePubPageViolation.getMessage()).thenReturn(DUPLICATE_PUB_PAGE_VIOLATION_MSG);

        final Violation mockNonUniquePubPageViolation = mock(Violation.class);
        when(mockValidationContext.createViolation(anyMap())).thenReturn(mockNonUniquePubPageViolation);
        when(mockNonUniquePubPageViolation.getMessage()).thenReturn(NON_UNIQUE_PUB_PAGE_VIOLATION_MSG);
    }

    @Test
    public void getCheckedNodeType() {
        // Verify
        assertThat(systemUnderTest.getCheckedNodeType()).isEqualTo(NODE_TYPE_HEE_PUBLICATION_LANDING_PAGE);
    }

    @Test
    public void checkNode_WithDuplicateWebPubs_ReturnsDuplicatePubPageViolation() throws Exception {
        // Mocks & stubs
        when(mockWebPubNodeIterator.hasNext()).thenReturn(true, true, false);
        when(mockWebPubNodeIterator.next()).thenReturn(mockNonUniqueWebPubNode, mockNonUniqueWebPubNode);

        // Execute the method to be tested
        final Optional<Violation> violation =
                systemUnderTest.checkNode(mockValidationContext, mockPubLandingPageDocNode);

        // Verify
        assertThat(violation).isNotEmpty();
        assertThat(violation.get().getMessage()).isEqualTo(DUPLICATE_PUB_PAGE_VIOLATION_MSG);
    }

    @Test
    public void checkNode_WithNonUniqueWebPub_ReturnsViolationForNonUniqueWebPub() throws Exception {
        // Execute the method to be tested
        final Optional<Violation> violation =
                systemUnderTest.checkNode(mockValidationContext, mockPubLandingPageDocNode);

        // Verify
        assertThat(violation).isNotEmpty();
        assertThat(violation.get().getMessage()).isEqualTo(NON_UNIQUE_PUB_PAGE_VIOLATION_MSG);
    }

    @Test
    public void checkNode_WithBothUniqueAndNonUniqueWebPub_ReturnsViolationForNonUniqueWebPub() throws Exception {
        // Mocks & stubs
        // Publication landing page doc "hee:webPublications" nodes
        when(mockWebPubNodeIterator.hasNext()).thenReturn(true, true, false);
        when(mockWebPubNodeIterator.next()).thenReturn(mockUniqueWebPubNode, mockNonUniqueWebPubNode);

        when(mockUniqueWebPubNode.getProperty(HippoNodeType.HIPPO_DOCBASE))
                .thenReturn(mockUniqueWebPubNodeHippoBaseProperty);
        when(mockUniqueWebPubNodeHippoBaseProperty.getString()).thenReturn(NON_REUSED_PUB_PAGE_DOC_ID);

        when(mockNonUniqueWebPubNode.getProperty(HippoNodeType.HIPPO_DOCBASE))
                .thenReturn(mockNonUniqueWebPubNodeHippoBaseProperty);
        when(mockNonUniqueWebPubNodeHippoBaseProperty.getString()).thenReturn(REUSED_PUB_PAGE_DOC_ID);

        // Referenced Publication landing page doc query
        when(mockRefPubLandPageDocNodeIterator.hasNext()).thenReturn(false, true, false);
        when(mockRefPubLandPageDocNodeIterator.nextNode()).thenReturn(mockRefPubLandPageDocNode);

        // Execute the method to be tested
        final Optional<Violation> violation =
                systemUnderTest.checkNode(mockValidationContext, mockPubLandingPageDocNode);

        // Verify
        assertThat(violation).isNotEmpty();
        assertThat(violation.get().getMessage()).isEqualTo(NON_UNIQUE_PUB_PAGE_VIOLATION_MSG);
    }

    @Test
    public void checkNode_WithNoWebPubs_ReturnsEmptyViolation() throws Exception {
        // Mocks & stubs
        when(mockWebPubNodeIterator.hasNext()).thenReturn(false);

        // Execute the method to be tested
        final Optional<Violation> violation =
                systemUnderTest.checkNode(mockValidationContext, mockPubLandingPageDocNode);

        // Verify
        assertThat(violation).isEmpty();
    }

    @Test
    public void checkNode_WithEmptyWebPub_ReturnsEmptyViolation() throws Exception {
        // Mocks & stubs
        when(mockNonUniqueWebPubNode.getProperty(HippoNodeType.HIPPO_DOCBASE).getString())
                .thenReturn(JcrConstants.ROOT_NODE_ID);

        // Execute the method to be tested
        final Optional<Violation> violation =
                systemUnderTest.checkNode(mockValidationContext, mockPubLandingPageDocNode);

        // Verify
        assertThat(violation).isEmpty();
    }

    @Test
    public void checkNode_WithNoRefPubLandingPageDocForWebPub_ReturnsEmptyViolation() throws Exception {
        // Mocks & stubs
        when(mockRefPubLandPageDocNodeIterator.hasNext()).thenReturn(false);

        // Execute the method to be tested
        final Optional<Violation> violation =
                systemUnderTest.checkNode(mockValidationContext, mockPubLandingPageDocNode);

        // Verify
        assertThat(violation).isEmpty();
    }

    @Test
    public void checkNode_WithRefPubLandingPageDocIsCurrentPubLandingPageDoc_ReturnsEmptyViolation() throws Exception {
        // Mocks & stubs
        when(mockRefPubLandPageDocNode.getPath()).thenReturn("/content/documents/lks/publications/2022/careers" +
                "/higher-specialist-scientist-training---publication-landing");

        // Execute the method to be tested
        final Optional<Violation> violation =
                systemUnderTest.checkNode(mockValidationContext, mockPubLandingPageDocNode);

        // Verify
        assertThat(violation).isEmpty();
    }

}
