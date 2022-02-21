package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.MiniHub;
import uk.nhs.hee.web.beans.MinihubSection;
import uk.nhs.hee.web.components.info.MiniHubComponentInfo;

import java.util.Comparator;
import java.util.List;

/**
 * Base component for the MiniHub Page.
 */
@ParametersInfo(type = MiniHubComponentInfo.class)
public class MiniHubComponent extends EssentialsDocumentComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(MiniHubComponent.class);

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        HippoBean document = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (document == null) {
            document = (HippoBean) request.getRequestContext().getContentBean();
        }
        if (document.getParentBean() != null) {
            if (document.getParentBean().getChildBeans(MiniHub.class).size() > 0
                && document.getParentBean().getChildBeans(MinihubSection.class).size() > 0) {
                request.setModel(REQUEST_ATTR_DOCUMENT, getMiniHubDocument(document));

                List<MinihubSection> miniHubSections = getMiniHubSections(document);
                request.setModel("miniHubSections", miniHubSections);

                MinihubSection currentSection = getCurrentSection(document, miniHubSections);
                request.setModel("currentSection", currentSection);
            }
            else {
                LOGGER.warn("Check Minihub document exists, and at least one Minihub section in the same folder for: " + document.getPath());
            }
        }
    }

    /**
     * Finds the relevant Minihub document if not already on request
     *
     * @param document the {@link HippoBean} instance.
     * @return the {@link HippoBean} instance of type hee:MiniHub
     */
    private HippoBean getMiniHubDocument(HippoBean document) {
        if(document.getContentType().equals("hee:MiniHub")) {
            return document;
        }
        return document.getParentBean().getChildBeans(MiniHub.class).get(0);
    }

    /**
     * Gets siblings of current document of type MinihubSection
     *
     * @param document the {@link HippoBean} instance.
     * @return the {@link List <MinihubSection>} instance sorted by Display Name
     */
    private List<MinihubSection> getMiniHubSections(HippoBean document) {
        List<MinihubSection> miniHubSections = document.getParentBean().getChildBeans(MinihubSection.class);
        miniHubSections.sort(Comparator.comparing(MinihubSection::getDisplayName));
        return miniHubSections;
    }

    /**
     * Gets the current document of type MinihubSection
     *
     * @param document the {@link HippoBean} instance.
     * @param miniHubSections the {@link List<MinihubSection>} instance.
     * @return the {@link MinihubSection} instance matching the current position
     */
    private MinihubSection getCurrentSection(final HippoBean document, List<MinihubSection> miniHubSections) {
        MinihubSection currentSection = null;
        if(document.getContentType().equals("hee:MiniHub")) {
            currentSection = miniHubSections.get(0);
        }
        else {
            for (int i=0; i<miniHubSections.size(); i++) {
                if(miniHubSections.get(i).getName().equalsIgnoreCase(document.getName())){
                    currentSection = miniHubSections.get(i);
                }
            }
        }
        return currentSection;
    }
}
