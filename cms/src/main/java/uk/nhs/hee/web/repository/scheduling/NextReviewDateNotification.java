package uk.nhs.hee.web.repository.scheduling;

import com.sun.mail.smtp.SMTPMessage;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.Pair;
import org.apache.jackrabbit.JcrConstants;
import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.configuration.hosting.VirtualHosts;
import org.hippoecm.hst.platform.model.HstModel;
import org.hippoecm.hst.platform.model.HstModelRegistry;
import org.hippoecm.repository.util.DateTools;
import org.hippoecm.repository.util.JcrUtils;
import org.jsoup.Jsoup;
import org.onehippo.cms7.services.HippoServiceRegistry;
import org.onehippo.repository.scheduling.RepositoryJob;
import org.onehippo.repository.scheduling.RepositoryJobExecutionContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.query.Query;
import javax.jcr.query.QueryManager;
import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMultipart;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

public class NextReviewDateNotification implements RepositoryJob {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(NextReviewDateNotification.class);

    // 'hee:nextReviewed' property of 'hee:pageLastNextReview' type/node
    private static final String PROPERTY_NEXT_REVIEWED = "hee:nextReviewed";

    // 'documentTypes' attribute configured on the job
    private static final String ATTRIBUTE_DOCUMENT_TYPES = "documentTypes";

    // Email attributes configured on the job
    public static final String ATTRIBUTE_EMAIL_FROM_ADDRESS = "emailFromAddress";
    public static final String ATTRIBUTE_EMAIL_FROM_NAME = "emailFromName";
    public static final String ATTRIBUTE_EMAIL_TO_ADDRESSES = "emailToAddresses";
    public static final String ATTRIBUTE_EMAIL_SUBJECT = "emailSubject";
    public static final String ATTRIBUTE_EMAIL_BODY_PLAIN_TEXT_TEMPLATE = "emailBodyPlainTextTemplate";
    public static final String ATTRIBUTE_EMAIL_BODY_HTML_TEMPLATE = "emailBodyHTMLTemplate";

    // Mandatory/required email attributes for the job
    public static final List<String> REQUIRED_EMAIL_ATTRIBUTES = Arrays.asList(
            ATTRIBUTE_EMAIL_FROM_ADDRESS,
            ATTRIBUTE_EMAIL_TO_ADDRESSES,
            ATTRIBUTE_EMAIL_SUBJECT,
            ATTRIBUTE_EMAIL_BODY_HTML_TEMPLATE,
            ATTRIBUTE_EMAIL_BODY_PLAIN_TEXT_TEMPLATE);

    // XPath query template to query the list of documents to be next reviewed
    private static final String DOCUMENTS_TO_BE_NEXT_REVIEWED_XPATH_QUERY =
            "/jcr:root/content/documents//element(*, hippo:handle)" +
                    "/*[(%s) and @hippostd:state='published']/element(hee:pageLastNextReview, hee:pageLastNextReview)" +
                    "[@%s and @%s = %s]/../..";

    // CMS context path
    public static final String CMS_CONTEXT_PATH = "/cms";

    // Host groups
    public static final String HOST_GROUP_BR_CLOUD = "br-cloud";
    public static final String HOST_GROUP_DEV_LOCAL_HOST = "dev-localhost";

    // 'brc.environmentname' system property
    public static final String SYSTEM_PROPERTY_BRC_ENV_NAME = "brc.environmentname";

    // Email content/body text placeholders
    public static final String EMAIL_CONTENT_PLACEHOLDER_NEXT_REVIEW_DATE = "{{next_review_date}}";
    public static final String EMAIL_CONTENT_PLACEHOLDER_DOCUMENTS_WITH_LINKS = "{{documents_with_links}}";

    // Mail session bind/lookup name
    public static final String MAIL_SESSION_NAME = "mail/Session";

    // Regular expression to split comma separated values
    public static final String SPLIT_COMMA_SEPARATED_VALUES_REGEX = "\\s*,\\s*";

    @Override
    public void execute(final RepositoryJobExecutionContext context) throws RepositoryException {
        final Session session = context.createSystemSession();
        try {
            LOGGER.info("Running next-review-date-notification job");

            // Validate 'documentTypes' attribute
            final String documentTypes = context.getAttribute(ATTRIBUTE_DOCUMENT_TYPES);
            logConfiguredAttributeDebugMsg(ATTRIBUTE_DOCUMENT_TYPES, documentTypes);

            if (!StringUtils.isBlank(documentTypes)) {
                // Query documents to be next reviewed
                final List<Node> documentsToBeReviewed = getDocumentsToBeReviewed(session, documentTypes);
                LOGGER.info("Documents to be next reviewed = {}", documentsToBeReviewed);

                if (!documentsToBeReviewed.isEmpty()) {
                    // Notify content or channel team
                    notify(context, session, documentsToBeReviewed);
                } else {
                    LOGGER.info("There are no documents to be reviewed in the next 14 days!");
                }
            } else {
                LOGGER.warn("Attribute '{}' seems to be either not set or empty. " +
                                "Please make sure to add '{}' attribute with comma separated list of document types " +
                                "for which next-review-date notification needs to be sent. Halting the job for now!",
                        ATTRIBUTE_DOCUMENT_TYPES, ATTRIBUTE_DOCUMENT_TYPES);
            }

            LOGGER.info("Done executing next-review-date-notification job");
        } finally {
            session.logout();
        }
    }

    private List<Node> getDocumentsToBeReviewed(final Session session, final String documentTypes)
            throws RepositoryException {
        final QueryManager queryManager = session.getWorkspace().getQueryManager();
        final String formattedQueryString = String.format(
                DOCUMENTS_TO_BE_NEXT_REVIEWED_XPATH_QUERY,
                getFormattedPrimaryDocumentTypes(documentTypes),
                PROPERTY_NEXT_REVIEWED,
                DateTools.getPropertyForResolution(PROPERTY_NEXT_REVIEWED, DateTools.Resolution.DAY),
                DateTools.createXPathConstraint(session, get14DaysFromToday(), DateTools.Resolution.DAY));
        LOGGER.debug("Formatted documents-to-be-next-reviewed query: {}", formattedQueryString);

        final Query query = queryManager.createQuery(formattedQueryString, Query.XPATH);
        final NodeIterator nodes = query.execute().getNodes();

        final List<Node> documentsToBeReviewed = new ArrayList<>((int) nodes.getSize());
        while (nodes.hasNext()) {
            documentsToBeReviewed.add(nodes.nextNode());
        }

        return documentsToBeReviewed;
    }

    private String getFormattedPrimaryDocumentTypes(final String documentTypes) {
        return Arrays.stream(documentTypes.split(SPLIT_COMMA_SEPARATED_VALUES_REGEX))
                .map(documentType -> String.format("@" + JcrConstants.JCR_PRIMARYTYPE + "='%s'", documentType.trim()))
                .collect(Collectors.joining(" or "));
    }

    private Calendar get14DaysFromToday() {
        final Calendar fourteenDaysFromToday = Calendar.getInstance();
        fourteenDaysFromToday.add(Calendar.DATE, 14);
        return fourteenDaysFromToday;
    }

    private void notify(
            final RepositoryJobExecutionContext context,
            final Session session,
            final List<Node> documentsToBeReviewed) {
        try {
            if (!areRequiredEmailAttributesAvailable(context)) {
                return;
            }

            // Get email configurations/attributes
            final String fromEmail = StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_FROM_ADDRESS));
            final String fromName = StringUtils.defaultString(context.getAttribute(ATTRIBUTE_EMAIL_FROM_NAME));
            final String toEmails = StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_TO_ADDRESSES));
            final String subject = StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_SUBJECT));
            final String bodyHTMLTemplate = StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_BODY_HTML_TEMPLATE));
            final String bodyPlainTextTemplate =
                    StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_BODY_PLAIN_TEXT_TEMPLATE));

            // Create message
            final javax.mail.Session mailSession = getMailSession();
            if (mailSession == null) {
                LOGGER.warn("Email session '{}' isn't available. Halting the job for now!", MAIL_SESSION_NAME);
                return;
            }
            final SMTPMessage msg = new SMTPMessage(mailSession);

            // Set from address
            msg.setFrom(createAddress(fromName, fromEmail));

            // Set sender
            msg.setSender(createAddress(fromName, fromEmail));

            // Set reply to if needed
            // msg.setReplyTo();

            // Set envelope from
            msg.setEnvelopeFrom(fromEmail);

            // Set to/recipient
            final Address[] addresses = getAddresses(toEmails);
            msg.addRecipients(Message.RecipientType.TO, addresses);

            // Set subject
            msg.setSubject(subject);

            // Set content
            final MimeMultipart mimeAlternativePart = new MimeMultipart("alternative");
            final Pair<String, String> formattedEmailBody =
                    formatEmailBody(bodyHTMLTemplate, bodyPlainTextTemplate, documentsToBeReviewed);
            LOGGER.debug("Formatted email body HTML: {}", formattedEmailBody.getLeft());
            LOGGER.debug("Formatted email body plain text: {}", formattedEmailBody.getRight());

            // HTML body
            final BodyPart htmlBodyPart = new MimeBodyPart();
            htmlBodyPart.setContent(
                    formattedEmailBody.getLeft(),
                    "text/html; charset=" + StandardCharsets.UTF_8.name());
            mimeAlternativePart.addBodyPart(htmlBodyPart);

            // Plain text body
            final BodyPart textBodyPart = new MimeBodyPart();
            textBodyPart.setContent(
                    formattedEmailBody.getRight(),
                    "text/plain; charset=" + StandardCharsets.UTF_8.name());
            mimeAlternativePart.addBodyPart(textBodyPart);
            msg.setContent(mimeAlternativePart);

            // Finally, send
            Transport.send(msg);
        } catch(final MessagingException e) {
            LOGGER.error("Caught error '{}' while preparing and sending the email message", e.getMessage(), e);
        }
    }

    private Pair<String, String> formatEmailBody(
            final String emailBodyHTML,
            final String emailBodyPlainText,
            final List<Node> documentsToBeReviewed) {
        // Format/update '<next_review_date>' placeholder with 14 days from day in 'd MMMM yyyy' format
        final String formatted14DaysFromToday =
                new SimpleDateFormat("d MMMM yyyy").format(get14DaysFromToday().getTime());
        String formattedEmailBodyHTML = emailBodyHTML.replace(
                EMAIL_CONTENT_PLACEHOLDER_NEXT_REVIEW_DATE, formatted14DaysFromToday);
        String formattedEmailBodyPlainText = emailBodyPlainText.replace(
                EMAIL_CONTENT_PLACEHOLDER_NEXT_REVIEW_DATE, formatted14DaysFromToday);

        // Build documents-to-be-reviewed as a list of links
        final StringBuilder documentsWithLinksForHTMLBody = new StringBuilder("<ul>");
        final StringBuilder documentsWithLinksForPlainTextBody = new StringBuilder();
        final String cmsBaseContentURL = getCMSBaseContentURL();
        for (final Node documentToBeReviewed: documentsToBeReviewed) {
            try {
                documentsWithLinksForHTMLBody
                        .append("<li><a href=\">")
                        .append(cmsBaseContentURL.isEmpty() ? documentToBeReviewed.getPath() :
                                cmsBaseContentURL + documentToBeReviewed.getPath())
                        .append("\">")
                        .append(JcrUtils.getDisplayNameQuietly(documentToBeReviewed))
                        .append("</a></li>");
                documentsWithLinksForPlainTextBody
                        .append("  - ")
                        .append(JcrUtils.getDisplayNameQuietly(documentToBeReviewed))
                        .append(": ")
                        .append(cmsBaseContentURL.isEmpty() ? documentToBeReviewed.getPath() :
                                cmsBaseContentURL + documentToBeReviewed.getPath())
                        .append("\n");
            } catch (final RepositoryException e) {
                LOGGER.error("Caught error '{}' while trying to generate CMS link for the document '{}'",
                        e.getMessage(), JcrUtils.getNodePathQuietly(documentToBeReviewed), e);
            }
        }
        documentsWithLinksForHTMLBody.append("</ul>");
        // Remove the trailing new line (\n) from the built documents-to-be-reviewed
        if (documentsWithLinksForPlainTextBody.length() >  0 &&
                documentsWithLinksForPlainTextBody.charAt(documentsWithLinksForPlainTextBody.length() -  1) == '\n') {
            documentsWithLinksForPlainTextBody.setLength(documentsWithLinksForPlainTextBody.length() -  1);
        }

        // Finally, format/update '<documents_with_links>' placeholder with a list of document links to be reviewed.
        formattedEmailBodyHTML = formattedEmailBodyHTML.replace(
                EMAIL_CONTENT_PLACEHOLDER_DOCUMENTS_WITH_LINKS, documentsWithLinksForHTMLBody.toString());
        formattedEmailBodyPlainText = formattedEmailBodyPlainText.replace(
                EMAIL_CONTENT_PLACEHOLDER_DOCUMENTS_WITH_LINKS, documentsWithLinksForPlainTextBody.toString());

        return Pair.of(formattedEmailBodyHTML, formattedEmailBodyPlainText);
    }

    private String convertToEmailPlainBodyText(final String emailBodyHTML) {
        return Jsoup.parse(emailBodyHTML).wholeText();
    }

    private boolean areRequiredEmailAttributesAvailable(final RepositoryJobExecutionContext context) {
        final List<String> blankEmailAttributes = new ArrayList<>();
        for (final String attributeName: REQUIRED_EMAIL_ATTRIBUTES) {
            final String emailAttributeValue = context.getAttribute(attributeName);
            logConfiguredAttributeDebugMsg(attributeName, emailAttributeValue);

            if (StringUtils.isBlank(emailAttributeValue)) {
                blankEmailAttributes.add(attributeName);
            }
        }

        if (!blankEmailAttributes.isEmpty()) {
            LOGGER.warn("Email specific attributes {} seem to have been either not set or empty on the job. " +
                            "Please make sure to add {} email attributes with appropriate values on the job. " +
                            "Halting the job for now!",
                    blankEmailAttributes, blankEmailAttributes);
            return false;
        }

        return true;
    }

    private Address[] getAddresses(final String toEmails) {
        return Arrays.stream(toEmails.split(SPLIT_COMMA_SEPARATED_VALUES_REGEX))
                .map(address -> createAddress(null, address))
                .toArray(Address[]::new);
    }

    public static Address createAddress(final String name, final String email) {
        try {
            if (StringUtils.isEmpty(name)) {
                return new InternetAddress(email);
            }

            return new InternetAddress(email, name);
        } catch (final UnsupportedEncodingException | AddressException e) {
            LOGGER.error("Caught error '{}' while creating email address with name='{}' and email='{}'",
                    e.getMessage(), name, email, e);
        }

        return null;
    }

    private javax.mail.Session getMailSession() {
        Context initialContext = null;

        try {
            initialContext = new InitialContext();
            final Context context = (Context) initialContext.lookup("java:comp/env");
            return (javax.mail.Session) context.lookup(MAIL_SESSION_NAME);
        } catch (final NamingException e) {
            LOGGER.error("Error creating email session: {}", MAIL_SESSION_NAME, e);
            try {
                if (initialContext != null) {
                    initialContext.close();
                }
            } catch (final NamingException ignore) {
                // Silently ignore
            }
        }

        return null;
    }

    private void logConfiguredAttributeDebugMsg(final String attribute, final String value) {
        LOGGER.debug("Configured attribute: {}={}", attribute, value);
    }

    /**
     * Returns CMS/Platform base URL for the given {@code hostGroupName} and the mount alias {@code cms-mount}.
     *
     * @return the CMS/Platform base URL for the given  {@code hostGroupName} and the mount alias {@code cms-mount}.
     */
    private String getCMSBaseContentURL() {
        String cmsBaseURL = StringUtils.EMPTY;

        final HstModelRegistry hstModelRegistry = HippoServiceRegistry.getService(HstModelRegistry.class);
        for (final HstModel hstModel : hstModelRegistry.getHstModels()) {
            try {
                final VirtualHosts virtualHosts = hstModel.getVirtualHosts();
                if (CMS_CONTEXT_PATH.equals(virtualHosts.getContextPath())) {
                    final String hostGroupName =
                            StringUtils.isNotBlank(System.getProperty(SYSTEM_PROPERTY_BRC_ENV_NAME)) ?
                                    HOST_GROUP_BR_CLOUD : HOST_GROUP_DEV_LOCAL_HOST;
                    LOGGER.debug("'{}' virtual host group has been chosen to build the CMS base URL", hostGroupName);

                    final List<Mount> cmsMounts = hstModel.getVirtualHosts().getMountsByHostGroup(hostGroupName);
                    if (cmsMounts.isEmpty()) {
                        LOGGER.warn("Host group '{}' is either unavailable in the current instance " +
                                "or it doesn't have any mounts", hostGroupName);
                        return StringUtils.EMPTY;
                    }

                    final Optional<Mount> cmsMountOpt = cmsMounts.stream()
                            .filter(mount -> mount.isOfType(Mount.LIVE_NAME))
                            .findFirst();
                    final Mount cmsMount = cmsMountOpt.orElse(null);
                    if (cmsMount == null) {
                        LOGGER.warn("Host group '{}' doesn't seem to have any live mounts", hostGroupName);
                        return StringUtils.EMPTY;
                    }

                    cmsBaseURL = cmsMount.getScheme() +
                            "://" +
                            cmsMount.getVirtualHost().getHostName() +
                            (cmsMount.isPortInUrl() ? ":" + cmsMount.getPort() : StringUtils.EMPTY) +
                            "/cms/content/path";

                    LOGGER.debug("CMS base URL = {}", cmsBaseURL);
                }
            } catch (final Exception e) {
                LOGGER.error("Caught error '{}' while constructing CMS base URL", e.getMessage(), e);
            }
        }

        return cmsBaseURL;
    }
}
