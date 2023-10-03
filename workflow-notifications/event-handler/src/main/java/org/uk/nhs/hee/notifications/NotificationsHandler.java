package org.uk.nhs.hee.notifications;

//import org.uk.nhs.hee.notifications.util.HippoUtils;
//import org.uk.nhs.hee.notifications.util.HtmlDiffGenerator;
//import org.uk.nhs.hee.notifications.util.PreviewClient;
//import org.uk.nhs.hee.notifications.util.PreviewClientUtil;

import org.apache.commons.mail.EmailException;
import org.onehippo.cms7.services.HippoServiceRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.uk.nhs.hee.notifications.util.HippoUtils;
import org.uk.nhs.hee.notifications.util.HtmlDiffGenerator;
import org.uk.nhs.hee.notifications.util.PreviewClient;
import org.uk.nhs.hee.notifications.util.PreviewClientUtil;
import org.uk.nhs.hee.web.email.FreemarkerParser;
import org.uk.nhs.hee.web.email.MailService;
import org.uk.nhs.hee.web.email.TemplateService;
import org.xml.sax.SAXException;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.xml.transform.TransformerConfigurationException;

public class NotificationsHandler {

    private static final Logger log = LoggerFactory.getLogger(NotificationsHandler.class);

    public boolean sendNotification(final String notificationSenderFullName, final List<EmailAddress> notificationRecipients, Node node, String methodName) {
        final MailService mailService = HippoServiceRegistry.getService(MailService.class);
        final TemplateService templateService = HippoServiceRegistry.getService(TemplateService.class);
        final String textTemplate = templateService.getTemplateByName(methodName + "Text.ftl");
        final String htmlTemplate = templateService.getTemplateByName(methodName + "Html.ftl");
        final Map<String, Object> arguments = new HashMap<>();
        try {
            final String nodeName = node.getName();
            final String documentName = node.hasProperty("hippo:name") ? node.getProperty("hippo:name").getString() : nodeName;

            arguments.put("nodename", nodeName);
            arguments.put("documentname", documentName);
            arguments.put("path", node.getPath());
            arguments.put("cmsRoot", mailService.getCmsRoot());
            arguments.put("user", notificationSenderFullName);
//            arguments.put("diff", getDiffs(node, methodName));

            final String emailBodyText = FreemarkerParser.getBodyForTemplate(textTemplate, arguments, false);
            final String emailBodyHtml = FreemarkerParser.getBodyForTemplate(htmlTemplate, arguments, false);

            for (EmailAddress emailAddress : notificationRecipients) {

                simulateSendEmail(emailAddress, emailBodyText);

                try {
                    mailService.sendMail(emailAddress.getEmailAddress(), "no-reply@onehippo.com", "Moderation request for - " + documentName, emailBodyHtml, emailBodyText);
                } catch (EmailException e) {
                    log.error("Error sending email to", e);
                }
            }
            return true;

        } catch (Exception e) {
            log.error("Error sending notifications", e);
            return false;
        }
    }

    public boolean sendPreviewNotification(final String notificationSenderFullName, final List<EmailAddress> notificationRecipients, Node node, String uuid, String methodName) {
        final MailService mailService = HippoServiceRegistry.getService(MailService.class);
        final TemplateService templateService = HippoServiceRegistry.getService(TemplateService.class);
        final String textTemplate = templateService.getTemplateByName(methodName + "Text.ftl");
        final String htmlTemplate = templateService.getTemplateByName(methodName + "Html.ftl");
        final String baseUrl = templateService.getPropertyByName(methodName + "Html.ftl", "preview.link.base");
        final Map<String, Object> arguments = new HashMap<>();
        try {
            final String nodeName = node.getName();
            final String documentName = node.hasProperty("hippo:name") ? node.getProperty("hippo:name").getString() : nodeName;


            arguments.put("nodename", nodeName);
            arguments.put("documentname", documentName);

//            final PreviewClient previewClient = PreviewClientUtil.getPreviewClient(baseUrl);
//            final String identifier = node.getIdentifier();
            final String previewLink = getLocation(node); //previewClient.getDocumentUrl(identifier);

            arguments.put("previewLink", previewLink); // + "?workflowId=" + uuid);
            arguments.put("user", notificationSenderFullName);
            arguments.put("diff", getDiffs(node, methodName));

            final String emailBodyText = FreemarkerParser.getBodyForTemplate(textTemplate, arguments, false);
            final String emailBodyHtml = FreemarkerParser.getBodyForTemplate(htmlTemplate, arguments, false);

            for (EmailAddress emailAddress : notificationRecipients) {

                simulateSendEmail(emailAddress, emailBodyText);

                try {
                    mailService.sendMail(emailAddress.getEmailAddress(), "no-reply@onehippo.com", "Moderation request for - " + documentName, emailBodyHtml, emailBodyText);
                } catch (EmailException e) {
                    log.error("Error sending email to", e);
                }
            }
            return true;

        } catch (Exception e) {
            log.error("Error sending notifications", e);
            return false;
        }
    }

    private String getLocation (Node node) throws RepositoryException {
        String s = "";
        Node n = node;

        while (!(n.getPath().equals("/content/documents"))) {
            s = "/" + n.getProperty("hippo:name").getString() + s;
            n = n.getParent();
        }

        return s;
    }

    private String getDiffs(final Node node, String methodName) throws RepositoryException, SAXException, IOException, TransformerConfigurationException {
        Node publishedVariant = HippoUtils.getPublishedVariant(node);
        Node unpublishedVariant = HippoUtils.getUnpublishedVariant(node);

        if (publishedVariant == null) {
            if (NotificationsEventsListener.METHOD_NAME_REQUESTREVIEW.equals(methodName)) {
                return "None, document is new";
            } else if (NotificationsEventsListener.METHOD_NAME_IMPORTTRANSLATION.equals(methodName)) {
                publishedVariant = HippoUtils.getSourceDocumentHandle(node);
            }
        }
        return HtmlDiffGenerator.diff(publishedVariant, unpublishedVariant, Locale.US, "demo:*");
    }

    private void simulateSendEmail(final EmailAddress emailAddress, final String text) {
        System.out.println("\n\n\n******************************************************************");
        System.out.println("Sending the following email to " + emailAddress.getName() + " <" + emailAddress.getEmailAddress() + ">");
        System.out.println(text);
        System.out.println("******************************************************************\n\n");
    }

    public static class EmailAddress {

        private final String name;
        private final String emailAddress;

        public EmailAddress(String name, String emailAddress) {
            this.name = name;
            this.emailAddress = emailAddress;
        }

        public String getName() {
            return name;
        }

        public String getEmailAddress() {
            return emailAddress;
        }
    }


}
