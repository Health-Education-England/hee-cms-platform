package uk.nhs.hee.web.repository.scheduling;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.platform.api.DocumentService;
import org.hippoecm.hst.platform.api.PlatformServices;
import org.hippoecm.repository.api.HippoWorkspace;
import org.hippoecm.repository.api.Workflow;
import org.hippoecm.repository.api.WorkflowException;
import org.hippoecm.repository.api.WorkflowManager;
import org.hippoecm.repository.util.WorkflowUtils;
import org.onehippo.cms7.services.HippoServiceRegistry;
import org.onehippo.cms7.services.hst.Channel;
import org.onehippo.repository.documentworkflow.DocumentWorkflow;
import org.onehippo.repository.scheduling.RepositoryJob;
import org.onehippo.repository.scheduling.RepositoryJobExecutionContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.query.Query;
import javax.jcr.query.QueryResult;
import java.rmi.RemoteException;
import java.util.*;
import java.util.stream.Collectors;

public class DePublishNonChannelPageDocuments implements RepositoryJob {
    private static final Logger LOGGER = LoggerFactory.getLogger(DePublishNonChannelPageDocuments.class);

    public static final String ATTRIBUTE_PAGE_DOCUMENT_TYPES = "pageDocumentTypes";
    public static final String ATTRIBUTE_EXCLUDED_PAGE_DOCUMENT_PATHS = "excludedPageDocumentPaths";
    public static final String ATTRIBUTE_HOST_GROUP = "hostGroup";
    public static final String ATTRIBUTE_RUN_ONLY_ON_PROD = "runOnlyOnProd";

    public static final String SYSTEM_PROPERTY_BRC_ENVIRONMENT_NAME = "brc.environmentname";

    public static final String ENV_NAME_PRODUCTION = "production";

    public static final String DOCUMENT_TYPE_GUIDANCE = "hee:guidance";
    public static final String DOCUMENT_TYPE_MINI_HUB = "hee:MiniHub";

    @Override
    public void execute(final RepositoryJobExecutionContext context) throws RepositoryException {
        final Session session = context.createSystemSession();

        try {
            LOGGER.info("Started running 'DePublishNonChannelPageDocuments' job");

            final boolean runOnlyOnProd = Boolean.parseBoolean(context.getAttribute(ATTRIBUTE_RUN_ONLY_ON_PROD));
            LOGGER.debug("Value of '{}' attribute = {}", ATTRIBUTE_RUN_ONLY_ON_PROD, runOnlyOnProd);

            // Run the job only on prod env if 'runOnlyOnProd' attribute is true
            if (runOnlyOnProd &&
                    !ENV_NAME_PRODUCTION.equals(System.getProperty(SYSTEM_PROPERTY_BRC_ENVIRONMENT_NAME))) {
                LOGGER.debug("Not running the job as the environment isn't production");
                return;
            }

            final List<String> pageDocTypes = getCSAttributeValueAsStringList(context, ATTRIBUTE_PAGE_DOCUMENT_TYPES);

            LOGGER.debug("List of provided Page DocumentTypes (via '{}' attribute) = {}",
                    ATTRIBUTE_PAGE_DOCUMENT_TYPES, pageDocTypes);

            // Halt the job if 'pageDocumentTypes' attribute hasn't been provided
            if (pageDocTypes == null || pageDocTypes.isEmpty()) {
                LOGGER.warn("Either '{}' attribute hasn't been configured (or) empty", ATTRIBUTE_PAGE_DOCUMENT_TYPES);
                return;
            }

            // Get all published page documents from all channels
            final List<Node> publishedPageDocNodes = getPublishedPageDocuments(session, pageDocTypes);

            // De-publish the published non-channel page documents
            dePublishNonChannelPageDocs(context, session, publishedPageDocNodes);

            LOGGER.info("Completed running 'DePublishNonChannelPageDocuments' job");
        } catch (final RepositoryException | WorkflowException | RemoteException e) {
            e.printStackTrace();
        } finally {
            session.logout();
        }
    }

    private List<Node> getPublishedPageDocuments(final Session session, final List<String> pageDocumentTypes)
            throws RepositoryException {
        final List<Node> publishedPageDocNodes = new ArrayList<>();
        final String pageDocumentTypeOrCondition = pageDocumentTypes.stream()
                .map(item -> "@jcr:primaryType = '" + item + "'")
                .collect(Collectors.joining(" or "));

        final String publishedPageDocumentsFormattedQuery = String.format(
                "/jcr:root/content/documents//*[(%s) and (@hippo:availability = 'live') " +
                        "and not(@jcr:primaryType = 'nt:frozenNode')]",
                pageDocumentTypeOrCondition);

        LOGGER.debug("Published page documents XPath query = {}", publishedPageDocumentsFormattedQuery);

        final Query query = session.getWorkspace().getQueryManager()
                .createQuery(publishedPageDocumentsFormattedQuery, Query.XPATH);
        final QueryResult results = query.execute();
        final NodeIterator nodeIterator = results.getNodes();

        while (nodeIterator.hasNext()) {
            publishedPageDocNodes.add(nodeIterator.nextNode());
        }

        return publishedPageDocNodes;
    }

    private void dePublishNonChannelPageDocs(
            final RepositoryJobExecutionContext context,
            final Session session,
            final List<Node> publishedPageDocNodes) throws RepositoryException, WorkflowException, RemoteException {
        // Get the list of excluded document paths which are directly configured in the sitemap, page components, etc.
        // (via 'excludedPageDocumentPaths' attribute)
        // Returns an empty list and so null check will be required in case if there are no 'excludedPageDocumentPaths'
        final List<String> absoluteExcludedPageDocPaths = getAbsoluteExcludedPagDocPaths(context);

        final DocumentService documentService =
                HippoServiceRegistry.getService(PlatformServices.class).getDocumentService();

        for (final Node publishedDocNode : publishedPageDocNodes) {
            final Node publishedDocHandleNode = publishedDocNode.getParent();
            LOGGER.debug("Processing '{}'", publishedDocHandleNode.getPath());

            // Skip if 'publishedHandleNode' one of the paths configured in 'excludedPageDocumentPaths'
            if (absoluteExcludedPageDocPaths.contains(publishedDocHandleNode.getPath())) {
                LOGGER.debug("Skipping '{}' as it is one of the excluded page document paths (configured via '{}')",
                        publishedDocHandleNode.getPath(), ATTRIBUTE_EXCLUDED_PAGE_DOCUMENT_PATHS);
                continue;
            }

            // Skip if 'publishedHandleNode' has a channel page i.e. has a sitemap
            final String docURL = documentService.getUrl(
                    session,
                    context.getAttribute(ATTRIBUTE_HOST_GROUP),
                    publishedDocHandleNode.getIdentifier(),
                    null);
            LOGGER.debug("Document URL for '{}' = {}", publishedDocHandleNode.getPath(), docURL);

            if (StringUtils.isNotEmpty(docURL)) {
                LOGGER.debug("Skipping '{}' as channel page/sitemap exists for it", publishedDocHandleNode.getPath());
                continue;
            }

            // Skip if 'publishedDocNode' is a Guidance ('hee:guidance') and a Mini-hub (hee:MiniHub) is referring it.
            if (publishedDocNode.isNodeType(DOCUMENT_TYPE_GUIDANCE) &&
                    referredByMiniHub(publishedDocHandleNode)) {
                LOGGER.debug("Skipping '{}' as it has been referred by a Mini-hub document",
                        publishedDocHandleNode.getPath());
                continue;
            }

            LOGGER.info("The published page document with path '{}' doesn't have a channel page " +
                            "and will be taken offline.", publishedDocHandleNode.getPath());

            dePublish(session, publishedDocHandleNode);
        }

        if (session.hasPendingChanges()) {
            session.save();
        }
    }

    private void dePublish(final Session session, final Node node)
            throws RepositoryException, WorkflowException, RemoteException {
        final WorkflowManager wfMgr = ((HippoWorkspace) session.getWorkspace()).getWorkflowManager();
        final Workflow workflow = wfMgr.getWorkflow("default", node);

        if (!(workflow instanceof DocumentWorkflow)) {
            LOGGER.warn("Node with path '{}' doesn't have a DocumentWorkflow (and perhaps it isn't a document node) " +
                    "and so can't be de-published", node.getPath());
            return;
        }

        final DocumentWorkflow documentWorkflow = (DocumentWorkflow) workflow;
        // documentWorkflow.depublish();
    }


    private List<String> getAbsoluteExcludedPagDocPaths(final RepositoryJobExecutionContext context) {
        final List<String> excludedPageDocPaths =
                getCSAttributeValueAsStringList(context, ATTRIBUTE_EXCLUDED_PAGE_DOCUMENT_PATHS);
        LOGGER.debug("List of provided excluded page document paths (via '{}' attribute) = {}",
                ATTRIBUTE_EXCLUDED_PAGE_DOCUMENT_PATHS, excludedPageDocPaths);

        if (excludedPageDocPaths == null || excludedPageDocPaths.isEmpty()) {
            return excludedPageDocPaths;
        }

        final List<Channel> liveChannels = getLiveChannels(context);
        LOGGER.debug("Live channels for which 'excludedPageDocumentPaths' needs to be skipped: {}", liveChannels);

        final List<String> absoluteExcludedPageDocPaths = new ArrayList<>();

        for (final String excludedPageDocPath: excludedPageDocPaths) {
            for (final Channel liveChannel: liveChannels) {
                absoluteExcludedPageDocPaths.add(liveChannel.getContentRoot() + "/" + excludedPageDocPath);
            }
        }

        LOGGER.debug("List of channel specific 'excludedPageDocumentPaths' = {}", absoluteExcludedPageDocPaths);

        return absoluteExcludedPageDocPaths;
    }

    private boolean referredByMiniHub(final Node node) throws RepositoryException {
        final Map<String, Node> referringDocuments =
                WorkflowUtils.getReferringDocuments(node, true);

        for (final Map.Entry<String, Node> entry : referringDocuments.entrySet()) {
            if (entry.getValue().isNodeType(DOCUMENT_TYPE_MINI_HUB)) {
                return true;
            }
        }

        return false;
    }
    private List<Channel> getLiveChannels(final RepositoryJobExecutionContext context) {
        final String hostGroup = context.getAttribute(ATTRIBUTE_HOST_GROUP);

        LOGGER.debug("Host group provided (via '{}' attribute) = '{}'", ATTRIBUTE_HOST_GROUP, hostGroup);

        if (StringUtils.isEmpty(hostGroup)) {
            return Collections.emptyList();
        }

        return HippoServiceRegistry.getService(PlatformServices.class)
                .getChannelService().getLiveChannels(hostGroup);
    }

    private List<String> getCSAttributeValueAsStringList(
            final RepositoryJobExecutionContext context, final String attributeName) {
        final String attributeValue = context.getAttribute(attributeName);

        if (StringUtils.isEmpty(attributeValue)) {
            return Collections.emptyList();
        }

        return Arrays.asList(attributeValue.split("\\s*,\\s*"));
    }
}
