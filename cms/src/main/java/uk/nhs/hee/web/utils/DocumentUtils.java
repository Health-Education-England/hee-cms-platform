package uk.nhs.hee.web.utils;

import org.hippoecm.repository.api.HippoNodeType;

import javax.jcr.RepositoryException;
import javax.jcr.Session;

/**
 * Utility class for documents.
 */
public class DocumentUtils {

    /**
     * Private constructor to hide the implicit public one.
     */
    private DocumentUtils() {
    }

    /**
     * Returns display name (i.e. {@code hippo:name}) of the document identified by {@code documentId}.
     *
     * @param session    the {@link Session} instance.
     * @param documentId the document Identifier/UUID whose display name (i.e. {@code hippo:name}) needs to be returned.
     * @return the display name (i.e. {@code hippo:name}) of the document identified by {@code documentId}.
     * @throws RepositoryException thrown when an error occurs while querying the display name (i.e. {@code hippo:name})
     *                             of the given document identified by {@code documentId}.
     */
    public static String getDocumentDisplayName(final Session session, final String documentId)
            throws RepositoryException {
        return session.getNodeByIdentifier(documentId).getProperty(HippoNodeType.HIPPO_NAME).getString();
    }

}
