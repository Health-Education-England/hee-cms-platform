package uk.nhs.hee.web.linkprocessor;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.linking.HstLinkProcessorTemplate;
import uk.nhs.hee.web.utils.PublicationConstants;
import uk.nhs.hee.web.utils.PublicationUtils;

/**
 * The LinkProcessor gives us access to links during specific parts opf their lifecycle.
 *
 * See https://xmdocumentation.bloomreach.com/library/concepts/links-and-urls/customize-link-processing.html
 * for a better explanation. Note that this class is wired through a Spring configuration file which will
 * add linkProcessors to a chain. See the file customlinkProcessors.xml elsewhere in the projcet
 */
public class PublicationHstLinkProcessor extends HstLinkProcessorTemplate {
    /**
     * This method is called when a link has been created but BEFORE it appears in a template
     *
     * We are only interested in publications pages that conform to a specific URL pattern. If that
     * is wheat we are presented with, we wil modify the URL to remove the original channel and add
     * a marker as part of the URL to indicate the origin.
     *
     * For example, we are given
     *  /dental/publications/pubdoctoview
     *
     *  and we will return
     *
     *  publications/d/pubdoctoview
     *
     * @param link is the {@link HstLink} object that we are presented with
     * @return is the potentially modfied {@link HstLink} object we return
     */
    @Override
    protected HstLink doPostProcess(HstLink link) {
        String path = link.getPath();
        String parts[] = path.split("/");
        if (parts != null && parts.length > 1) {
            if ("publications".equals(parts[1])) {
                String pattern = "(.+)/(publications/)(.+)+";
                Pattern r = Pattern.compile(pattern);
                Matcher m = r.matcher(path);
                if (m.find()) {
                    String marker = PublicationConstants.fromChannelToMarker(parts[0]);
                    path = m.replaceAll("!!PATHREF!!/$2"+ marker + "/$3");
                    link.setPath(path);
                }
            }
        }
        return link;
    }

    /**
     * This method is called when a publications link needs to be resolved to a sitemap entry. It's similar in function to a rewrite rule
     * in that it will take a URL, check it's a publications URL that we recognise, and then recode the URL by removing the 
     * marker and adding the origin hub name.
     * 
     * For example, if we are presented with 
     * 
     * kls/publications/d/pubdoctoview
     *
     * we will return
     * 
     * dental/publications/pubdoctoview
     * 
     * @param link is the link that is ready for resolution
     * @return is a possible change to the link such that it has our new decoded path in it
     */
    @Override
    protected HstLink doPreProcess(HstLink link) {
        PublicationUtils utils = new PublicationUtils();

        String possiblyModifiedPath = utils.getURLAfterPossibleMarkerRemoved(link.getPath());
        link.setPath(possiblyModifiedPath);

        return link;
    }
}
