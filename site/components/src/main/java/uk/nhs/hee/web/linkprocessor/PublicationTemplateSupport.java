package uk.nhs.hee.web.linkprocessor;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PublicationTemplateSupport {
    private final String pubPathPrefix;

    /**
     * This constructor is passed a pubPath Prefix, which is the prefix for any sitemap item
     * that is referencing publications
     *
     * @param pubPathPrefix woudl be somethign like <code>/kls/publicatons</code>
     */
    public PublicationTemplateSupport(String pubPathPrefix) {
        this.pubPathPrefix = pubPathPrefix;
    }

    /**
     * Look for a substitutional parameter called !!PATHREF!! and replace it with the hub
     * name we have been given in the pubPathPrefix
     *
     * @param pageURL is the URL that may have !!PATHREF!! in it, for example <code>/site/main/!!PATHREF!!/publications/d/info-1</code>>
     * @return a possibly updated URL with the new path reference in it
     */
    public String managePublicationPathPrefix(String pageURL) {
        if (pubPathPrefix != null && (pubPathPrefix.contains("/publications/") || pubPathPrefix.endsWith("/publications"))) {
            String pattern = "(.+)/(publications)";
            Pattern r = Pattern.compile(pattern);
            Matcher m = r.matcher(pubPathPrefix);

            if (m.find()) {
                String replacer = m.group(1);
                try {
                    String decodedUrl = URLDecoder.decode(pageURL, StandardCharsets.UTF_8.toString());
                    return decodedUrl.replaceFirst("(/!!PATHREF!!)", replacer);
                } catch (UnsupportedEncodingException e) {
                }
            }
        }

        return pageURL;
    }
}
