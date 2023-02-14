package uk.nhs.hee.web.utils;

import org.hippoecm.repository.api.HippoNodeType;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import javax.jcr.Node;
import javax.jcr.Property;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class DocumentUtilsTest {

    private static final String DOCUMENT_ID = "59641c99-1cfd-4fa1-be66-e938fde31333";

    @Mock
    private Session mockSession;

    @Mock
    private Node mockDocumentNode;

    @Mock
    private Property mockHippoNameProperty;

    @Mock
    private RepositoryException mockRepositoryException;

    @Test
    public void getDocumentDisplayName_WithDocumentExists_ReturnsDocumentHippoNamePropertyValue() throws Exception {
        // Mocks & stubs
        final String DOCUMENT_HIPPO_NAME_PROP_VALUE = "document_hippo_name_prop_value";
        when(mockSession.getNodeByIdentifier(DOCUMENT_ID)).thenReturn(mockDocumentNode);
        when(mockDocumentNode.getProperty(HippoNodeType.HIPPO_NAME)).thenReturn(mockHippoNameProperty);
        when(mockHippoNameProperty.getString()).thenReturn(DOCUMENT_HIPPO_NAME_PROP_VALUE);

        // Execute the method to be tested
        final String documentDisplayName = DocumentUtils.getDocumentDisplayName(mockSession, DOCUMENT_ID);

        // Verify
        assertThat(documentDisplayName).isEqualTo(DOCUMENT_HIPPO_NAME_PROP_VALUE);
    }

    @Test(expected = RepositoryException.class)
    public void getDocumentDisplayName_WithDocumentDoesNotExists_ThrowsRepositoryException() throws Exception {
        // Mocks & stubs
        when(mockSession.getNodeByIdentifier(DOCUMENT_ID)).thenThrow(mockRepositoryException);

        // Execute the method to be tested
        final String documentDisplayName = DocumentUtils.getDocumentDisplayName(mockSession, DOCUMENT_ID);
    }

    @Test(expected = RepositoryException.class)
    public void getDocumentDisplayName_WithDocumentHippoNamePropertyDoesNotExists_ThrowsRepositoryException()
            throws Exception {
        // Mocks & stubs
        when(mockSession.getNodeByIdentifier(DOCUMENT_ID)).thenReturn(mockDocumentNode);
        when(mockDocumentNode.getProperty(HippoNodeType.HIPPO_NAME)).thenThrow(mockRepositoryException);

        // Execute the method to be tested
        final String documentDisplayName = DocumentUtils.getDocumentDisplayName(mockSession, DOCUMENT_ID);
    }

}
