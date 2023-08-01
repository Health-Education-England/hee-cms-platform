package uk.nhs.hee.web.validation.validator;

import com.google.common.collect.ImmutableMap;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.parser.Parser;
import org.jsoup.select.Elements;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.ValidationContextException;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.*;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.util.Arrays;
import java.util.Optional;

/**
 * Validator for embed code based document types like {@code hee:googleMap}, {@code hee:mediaEmbed}, etc.
 */
public class EmbedCodeIFrameValidator implements Validator<String> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(EmbedCodeIFrameValidator.class);

    // IFrame element name
    public static final String ELEMENT_IFRAME = "iframe";

    // 'embed.code.src.prefix' config property key
    private static final String EMBED_CODE_SRC_PREFIXES_KEY = "embed.code.src.prefix";

    // YouTube source prefix
    private static final String YOUTUBE_SOURCE_PREFIX = "https://www.youtube.com/embed/";

    // YouTube 'submessage' for valid embed codes
    private static final String YOUTUBE_VALID_EMBED_CODE_SUB_MESSAGE = "Try watching this video on www.youtube.com";

    private final String[] embedCodeSrcPrefixes;


    /**
     * Constructor that initialises {@code embedCodeSrcPrefixes}
     * based on the configured {@code embed.code.src.prefix} multi-valued string property.
     *
     * @param config the validator configuration {@link Node}.
     */
    public EmbedCodeIFrameValidator(final Node config) {
        try {
            final Property embedCodeSrcPrefixesProperty = config.getProperty(EMBED_CODE_SRC_PREFIXES_KEY);

            if (!embedCodeSrcPrefixesProperty.isMultiple()) {
                throw new ValidationContextException(
                        "'" + EMBED_CODE_SRC_PREFIXES_KEY + "' property must be multi-valued");
            }

            final Value[] embedCodeSrcPrefixValues = embedCodeSrcPrefixesProperty.getValues();

            embedCodeSrcPrefixes = new String[embedCodeSrcPrefixValues.length];
            for (int i = 0; i < embedCodeSrcPrefixValues.length; i++) {
                try {
                    embedCodeSrcPrefixes[i] = embedCodeSrcPrefixValues[i].getString();
                } catch (final ValueFormatException e) {
                    LOGGER.error("Caught error '{}' while reading '{}' config property values",
                            e.getMessage(), EMBED_CODE_SRC_PREFIXES_KEY, e);
                }
            }
        } catch (final RepositoryException e) {
            throw new ValidationContextException(
                    "Cannot read required multi-valued string config property '" + EMBED_CODE_SRC_PREFIXES_KEY + "'", e);
        }
    }

    @Override
    public Optional<Violation> validate(final ValidationContext context, final String value) {
        if (StringUtils.isBlank(value)) {
            return Optional.empty();
        }

        // Using XML parser here to avoid Jsoup wrapping embed code with default elements like html, head, body, etc
        final Document embedCodeDoc = Jsoup.parse(value, StringUtils.EMPTY, Parser.xmlParser());
        final Elements allEls = embedCodeDoc.getAllElements();
        final Elements iframeEls = embedCodeDoc.select(ELEMENT_IFRAME);

        // Validates if the embed code doesn't contain any element(s) other than iframe element
        // Deducting #root element (added by Jsoup by default) from 'allEls'
        if (iframeEls.size() == 0 || ((iframeEls.size() != allEls.size() - 1))) {
            return Optional.of(context.createViolation("non-iframe-elements-error"));
        }

        // Validates if the embed code doesn't contain more than one iframe element
        if (iframeEls.size() > 1) {
            return Optional.of(context.createViolation("multiple-iframe-elements-error"));
        }

        // Validates if the embed code iframe src matches
        // one of the configured embed code src prefixes (embed.code.src.prefix)
        final String embedCodeSrc = iframeEls.get(0).attr("src");
        final boolean embedCodeSrcPrefixesMatch = StringUtils.startsWithAny(embedCodeSrc, embedCodeSrcPrefixes);

        if (!embedCodeSrcPrefixesMatch) {
            return Optional.of(context.createViolation(
                    "does-not-match-embed-code-src-prefixes-error",
                    ImmutableMap.of(
                            "supportedEmbedSrcPrefixes",
                            Arrays.toString(embedCodeSrcPrefixes)
                    )
            ));
        }

        // Validates if the embed code iframe src is valid
        try {
            final Connection.Response embedCodeSrcResponse = getResponseCode(embedCodeSrc);
            LOGGER.debug("Received '{}' response code for the embed code src '{}'",
                    embedCodeSrcResponse.statusCode(), embedCodeSrc);

            if ((embedCodeSrcResponse.statusCode() != HttpURLConnection.HTTP_OK) ||
                    // YouTube doesn't respond with non-200 OK error for invalid embed codes
                    // and so checking the response text/html for the non occurrence of
                    // valid embed code response sub message
                    (embedCodeSrc.startsWith(YOUTUBE_SOURCE_PREFIX)
                            && !embedCodeSrcResponse.body().contains(YOUTUBE_VALID_EMBED_CODE_SUB_MESSAGE))) {
                return Optional.of(context.createViolation("invalid-embed-code-error"));
            }
        } catch (final IOException e) {
            // Logging the error in debug mode as it isn't an application error
            LOGGER.debug("Caught error '{}' while connecting to the URL '{}'", e.getMessage(), embedCodeSrc, e);
            return Optional.of(context.createViolation("invalid-embed-code-error"));
        }

        return Optional.empty();
    }

    /**
     * Returns {@link Connection.Response} of the given {@code url}.
     *
     * @param url the URL whose response needs to be returned.
     * @return {@link Connection.Response} of the given {@code url}.
     * @throws IOException thrown when an error occurs while trying to connect to the given {@code url}.
     */
    private Connection.Response getResponseCode(final String url) throws IOException {
        return Jsoup.connect(url).execute();
    }
}
