package uk.nhs.hee.web.repository.scheduling;

import com.onehippo.cms7.eforms.hst.util.mail.*;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.Pair;
import org.apache.jackrabbit.JcrConstants;
import org.hippoecm.repository.util.DateTools;
import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.repository.scheduling.RepositoryJob;
import org.onehippo.repository.scheduling.RepositoryJobExecutionContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.utils.DocumentUtils;
import uk.nhs.hee.web.utils.MailUtils;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.query.Query;
import javax.jcr.query.QueryManager;
import javax.mail.MessagingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

/**
 * The repository job class which sends email notification with documents to be reviewed in the next 14 to 21 days.
 */
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
    public static final String ATTRIBUTE_EMAIL_REPLY_TO_ADDRESS = "emailReplyToAddress";
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
                    "[@%s and @%s >= %s and @%s < %s]/../..";

    // Email content/body text placeholders
    public static final String EMAIL_CONTENT_PLACEHOLDER_DOCUMENTS_WITH_LINKS = "{{documents_with_links}}";

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
                LOGGER.info("Documents to be reviewed = {}", documentsToBeReviewed.stream()
                        .map(JcrUtils::getNodePathQuietly).collect(Collectors.toList()));

                if (!documentsToBeReviewed.isEmpty()) {
                    // Notify content or channel team
                    notify(context, documentsToBeReviewed);
                } else {
                    LOGGER.info("There are no documents to be reviewed in the next 14 to 21 days!");
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

    /**
     * Returns the list of published documents (of {@code documentTypes}) which requires reviewing
     * in the next 14 to 21 days.
     *
     * @param session       the {@link Session} instance.
     * @param documentTypes the comma separated list of document types whose documents require reviewing.
     * @return the list of published documents (of {@code documentTypes}) which requires reviewing
     * in the next 14 to 21 days.
     * @throws RepositoryException thrown when an error occurs during document search.
     */
    private List<Node> getDocumentsToBeReviewed(final Session session, final String documentTypes)
            throws RepositoryException {
        final QueryManager queryManager = session.getWorkspace().getQueryManager();
        final String nextReviewDateWithDayResolution =
                DateTools.getPropertyForResolution(PROPERTY_NEXT_REVIEWED, DateTools.Resolution.DAY);
        final String formattedQueryString = String.format(
                DOCUMENTS_TO_BE_NEXT_REVIEWED_XPATH_QUERY,
                getFormattedPrimaryDocumentTypes(documentTypes),
                PROPERTY_NEXT_REVIEWED,
                nextReviewDateWithDayResolution,
                DateTools.createXPathConstraint(session, getXDaysFromToday(14), DateTools.Resolution.DAY),
                nextReviewDateWithDayResolution,
                DateTools.createXPathConstraint(session, getXDaysFromToday(21), DateTools.Resolution.DAY));
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
        return uk.nhs.hee.web.utils.StringUtils.transformCommaSeparatedStringIntoStringList(documentTypes)
                .map(documentType -> String.format("@" + JcrConstants.JCR_PRIMARYTYPE + "='%s'", documentType.trim()))
                .collect(Collectors.joining(" or "));
    }

    /**
     * Returns a {@link Calendar} instance of X {@code amount} of days from today.
     *
     * @param amount the amount of days (DAY_OF_MONTH) to be added from today.
     * @return the {@link Calendar} instance of X {@code amount} of days from today.
     */
    private Calendar getXDaysFromToday(final int amount) {
        final Calendar xDaysFromToday = Calendar.getInstance();
        xDaysFromToday.add(Calendar.DATE, amount);
        return xDaysFromToday;
    }

    /**
     * Sends an email notification about the given list of documents to be reviewed {@code documentsToBeReviewed}
     * based on the configured email specific attributes.
     *
     * @param context               the {@link RepositoryJobExecutionContext} instance.
     * @param documentsToBeReviewed the list of documents to be reviewed.
     */
    private void notify(
            final RepositoryJobExecutionContext context,
            final List<Node> documentsToBeReviewed) {
        try {
            if (!areRequiredEmailAttributesAvailable(context)) {
                return;
            }

            // Get email configurations/attributes
            final String fromEmail = StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_FROM_ADDRESS));
            final String fromName = StringUtils.defaultString(context.getAttribute(ATTRIBUTE_EMAIL_FROM_NAME));
            final String replyToEmail = StringUtils.defaultString(context.getAttribute(ATTRIBUTE_EMAIL_REPLY_TO_ADDRESS));
            final String toEmails = StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_TO_ADDRESSES));
            final String subject = StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_SUBJECT));
            final String bodyHTMLTemplate = StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_BODY_HTML_TEMPLATE));
            final String bodyPlainTextTemplate =
                    StringUtils.trim(context.getAttribute(ATTRIBUTE_EMAIL_BODY_PLAIN_TEXT_TEMPLATE));

            // Create mail session
            final javax.mail.Session mailSession = MailUtils.getMailSession();
            if (mailSession == null) {
                LOGGER.warn("Email session isn't available. Halting the job for now!");
                return;
            }

            // Prepare email message
            final MailAddress fromMailAddress = new MailAddressImpl(fromName, fromEmail);
            final MailSender mailSender = new MailSenderImpl(mailSession, fromMailAddress, fromMailAddress);

            final Pair<String, String> formattedEmailBody =
                    formatEmailBody(bodyHTMLTemplate, bodyPlainTextTemplate, documentsToBeReviewed);

            final MailTemplate mail = new MailTemplate(
                    mailSender,
                    MailUtils.getAddresses(toEmails),
                    subject,
                    formattedEmailBody.getLeft(),
                    formattedEmailBody.getRight());

            if (StringUtils.isNotEmpty(replyToEmail)) {
                mail.setReplyTo(MailUtils.createAddress(StringUtils.EMPTY, replyToEmail));
            }

            // Finally, send the email message
            mail.sendMessage();
        } catch (final MessagingException e) {
            LOGGER.error("Caught error '{}' while preparing and sending the email message", e.getMessage(), e);
        }
    }

    /**
     * Returns the formatted email body HTML and plain text as a {@link Pair}
     * by substituting the placeholders (e.g. {{documents_with_links}}, etc.) with appropriate values.
     *
     * @param emailBodyHTML         the email body HTML which needs to be formatted.
     * @param emailBodyPlainText    the email body plain text which needs to be formatted.
     * @param documentsToBeReviewed the {@link List} of documents which needs to be reviewed.
     * @return the formatted email body HTML and plain text as a {@link Pair}
     * by substituting the placeholders (e.g. {{documents_with_links}}, etc.) with appropriate values.
     */
    private Pair<String, String> formatEmailBody(
            final String emailBodyHTML,
            final String emailBodyPlainText,
            final List<Node> documentsToBeReviewed) {
        // Build documents-to-be-reviewed as a list of links
        final StringBuilder documentsWithLinksForHTMLBody = new StringBuilder("<ul>");
        final StringBuilder documentsWithLinksForPlainTextBody = new StringBuilder();
        final String cmsBaseContentURL = DocumentUtils.getDocumentBaseURL();
        for (final Node documentToBeReviewed: documentsToBeReviewed) {
            try {
                documentsWithLinksForHTMLBody
                        .append("<li><a href=\"")
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
        if (documentsWithLinksForPlainTextBody.length() > 0 &&
                documentsWithLinksForPlainTextBody.charAt(documentsWithLinksForPlainTextBody.length() - 1) == '\n') {
            documentsWithLinksForPlainTextBody.setLength(documentsWithLinksForPlainTextBody.length() - 1);
        }

        // Finally, format/update '{{documents_with_links}}' placeholder with a list of document links to be reviewed.
        final String formattedEmailBodyHTML = emailBodyHTML.replace(
                EMAIL_CONTENT_PLACEHOLDER_DOCUMENTS_WITH_LINKS, documentsWithLinksForHTMLBody.toString());
        final String formattedEmailBodyPlainText = emailBodyPlainText.replace(
                EMAIL_CONTENT_PLACEHOLDER_DOCUMENTS_WITH_LINKS, documentsWithLinksForPlainTextBody.toString());

        LOGGER.debug("Formatted email body HTML: {}", formattedEmailBodyHTML);
        LOGGER.debug("Formatted email body plain text: {}", formattedEmailBodyPlainText);

        return Pair.of(formattedEmailBodyHTML, formattedEmailBodyPlainText);
    }

    /**
     * Returns {@code true} if all the email attributes listed in {@code REQUIRED_EMAIL_ATTRIBUTES} have values.
     * Otherwise, returns {@code false}.
     *
     * @param context the {@link RepositoryJobExecutionContext} instance.
     * @return {@code true} if all the email attributes listed in {@code REQUIRED_EMAIL_ATTRIBUTES} have values.
     * Otherwise, returns {@code false}.
     */
    private boolean areRequiredEmailAttributesAvailable(final RepositoryJobExecutionContext context) {
        final List<String> blankEmailAttributes = new ArrayList<>();
        for (final String attributeName : REQUIRED_EMAIL_ATTRIBUTES) {
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

    /**
     * Logs the given {@code attribute} and its {@code value} as a debug msg.
     *
     * @param attribute the attribute name.
     * @param value     the value of the attribute.
     */
    private void logConfiguredAttributeDebugMsg(final String attribute, final String value) {
        LOGGER.debug("Configured attribute: {}={}", attribute, value);
    }
}
