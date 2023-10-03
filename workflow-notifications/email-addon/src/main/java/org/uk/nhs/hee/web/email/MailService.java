package org.uk.nhs.hee.web.email;

import org.apache.commons.mail.EmailException;

public interface MailService {

    void sendMail(String to, String from, String subject, String html, String text) throws EmailException;

    void sendMail(String to[], String from, String subject, String html, String text) throws EmailException;

    void setCmsRoot(String cmsRoot);

    String getCmsRoot();

}
