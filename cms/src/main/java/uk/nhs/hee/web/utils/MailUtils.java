package uk.nhs.hee.web.utils;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.mail.Address;
import javax.mail.Session;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Class containing mail utility methods.
 */
public class MailUtils {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(MailUtils.class);

    // Mail session bind/lookup name
    private static final String MAIL_SESSION_NAME = "mail/Session";

    /**
     * Private constructor to hide the implicit public one.
     */
    private MailUtils() {
    }

    /**
     * Returns the given comma separated email addresses {@code commaSeparatedEmails} as {@link List<Address>}.
     *
     * @param commaSeparatedEmails the comma separated email addresses.
     * @return the {@link List<Address>} built from the given comma separated email addresses
     * {@code commaSeparatedEmails}.
     */
    public static List<Address> getAddresses(final String commaSeparatedEmails) {
        return uk.nhs.hee.web.utils.StringUtils.transformCommaSeparatedStringIntoStringList(commaSeparatedEmails)
                .map(address -> createAddress(null, address))
                .collect(Collectors.toList());
    }

    /**
     * Return {@link Address} for the given personal {@code name} and {@code email} address.
     *
     * @param name the personal name for the email address.
     * @param email the email address.
     * @return the {@link Address} for the given personal {@code name} and {@code email} address.
     */
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

    /**
     * Returns the mail {@link Session} from the JNDI lookup.
     *
     * @return the mail {@link Session} from the JNDI lookup.
     */
    public static Session getMailSession() {
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

        LOGGER.warn("Email session '{}' isn't available", MAIL_SESSION_NAME);
        return null;
    }
}
