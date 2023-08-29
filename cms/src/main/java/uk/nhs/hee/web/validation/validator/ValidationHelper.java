package uk.nhs.hee.web.validation.validator;

import org.apache.commons.collections4.IteratorUtils;
import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.api.HippoNodeType;
import org.onehippo.repository.util.JcrConstants;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;

public class ValidationHelper {

    /**
     * Checks whether the given {@code nodeList} has duplicate nodes
     *
     * @param nodeList the {@link List < Node >} Nodes to be verified for duplicates.
     * @return {@code true} if the given {@code nodeList} has duplicate nodes, otherwise
     *              {@code false} if no duplicates found
     *
     * @throws RepositoryException thrown when an error occurs while getting {@code hippo:docbase}
     *                             from Web publication nodes.
     */
    public static boolean hasDuplicateNodes(final List<Node> nodeList) throws RepositoryException {
        final Set<String> pubPageDocIds = new HashSet<>();

        for (final Node webPubNode : nodeList) {
            final String docId = webPubNode.getProperty(HippoNodeType.HIPPO_DOCBASE).getString();

            if (!pubPageDocIds.add(docId)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Shortcut method to check for duplicates when given a node and its property name
     *
     * @param node the node that may have teh duplicates in a property
     * @param propertyName the property that we are checking for duplicates
     * @return true or false to indacate duplicates or not
     * @throws RepositoryException if we have an issue locating the properties
     */
    public static boolean hasDuplicateNodes(final Node node, final String propertyName) throws RepositoryException {
        final NodeIterator nodeIterator = node.getNodes(propertyName);
        final List<Node> nodeList = IteratorUtils.<Node>toList(nodeIterator);

        return hasDuplicateNodes(nodeList);
    }


    /**
     * Find docBases (i.e. links to other documents) for a specific property
     *
     * @param node is the document node
     * @param propertyName is the property in the node we are examining
     * @return the list of all docbases for those referenced nodes
     * @throws RepositoryException
     */
    public static List<String> getDocBases(final Node node, final String propertyName)
            throws RepositoryException {
        final NodeIterator docsNodeIterator = node.getNodes(propertyName);

        final List<String> docBases = new ArrayList<>();

        while (docsNodeIterator.hasNext()) {
            // Collect only non-null/root featured documents
            final String docNodeDocBase =
                    docsNodeIterator.nextNode().getProperty(HippoNodeType.HIPPO_DOCBASE).getString();

            if (StringUtils.isBlank(docNodeDocBase)
                    || docNodeDocBase.equals(JcrConstants.ROOT_NODE_ID)) {
                continue;
            }

            docBases.add(docNodeDocBase);
        }

        return docBases;
    }
}
