package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.beans.MiniHub;
import uk.nhs.hee.web.beans.MinihubSection;
import uk.nhs.hee.web.components.info.MiniHubComponentInfo;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;

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
            if (!document.getParentBean().getChildBeans(MiniHub.class).isEmpty()
                    && !document.getParentBean().getChildBeans(MinihubSection.class).isEmpty()) {
                request.setModel(REQUEST_ATTR_DOCUMENT, getMiniHubDocument(document));

                final List<MinihubSection> miniHubSections = getMiniHubSections(document);
                request.setModel("miniHubSections", miniHubSections);

                final MinihubSection currentSection = getCurrentSection(document, miniHubSections);
                request.setModel("currentSection", currentSection);

                if (currentSection == null) {
                    return;
                }

                request.setModel("isFirstSection", isFirstSection(document.getName(), miniHubSections));

                // the guidance page contains content blocks that need valueLists to be set on the model
                final HippoBean currentSectionDocumentBean = currentSection.getDocument();

                if (currentSectionDocumentBean instanceof Guidance) {
                    final List<HippoBean> pageContentBlocks = ((Guidance) currentSectionDocumentBean).getContentBlocks();
                    pageContentBlocks.addAll(((Guidance) currentSectionDocumentBean).getRightHandBlocks());

                    final Map<String, Map<String, String>> modelToValueListMap =
                            ContentBlocksUtils.getValueListMaps(pageContentBlocks);
                    modelToValueListMap.forEach(request::setModel);

                    request.setAttribute("tableComponentService", new TableComponentService());
                }
            } else {
                LOGGER.warn("Check Minihub document exists, and at least one Minihub section " +
                        "in the same folder for: {}", document.getPath());
            }
        }
    }

    /**
     * Finds the relevant Minihub document if not already on request
     *
     * @param document the {@link HippoBean} instance.
     * @return the {@link HippoBean} instance of type hee:MiniHub
     */
    private HippoBean getMiniHubDocument(final HippoBean document) {
        if ("hee:MiniHub".equals(document.getContentType())) {
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
    private List<MinihubSection> getMiniHubSections(final HippoBean document) {
        final List<MinihubSection> miniHubSections = document.getParentBean().getChildBeans(MinihubSection.class);
        miniHubSections.sort(Comparator.comparing(MinihubSection::getDisplayName));
        return miniHubSections;
    }

    /**
     * Gets the current document of type MinihubSection
     *
     * @param document        the {@link HippoBean} instance.
     * @param miniHubSections the {@link List<MinihubSection>} instance.
     * @return the {@link MinihubSection} instance matching the current position
     */
    private MinihubSection getCurrentSection(final HippoBean document, final List<MinihubSection> miniHubSections) {
        MinihubSection currentSection = null;
        if (document.getContentType().equals("hee:MiniHub")) {
            currentSection = miniHubSections.get(0);
        } else {
            for (final MinihubSection miniHubSection : miniHubSections) {
                if (miniHubSection.getName().equalsIgnoreCase(document.getName())) {
                    currentSection = miniHubSection;
                }
            }
        }
        return currentSection;
    }

    /**
     * Returns {@code true} if the current section identified by {@code currentSectionName} is the first section
     * of the Mini-hub. Otherwise, returns {@code false}.
     *
     * @param currentSectionName the current section name.
     * @param miniHubSections    the {@link List<MinihubSection>} of Mini-hub sections.
     * @return {@code true} if the current section identified by {@code currentSectionName} is the first section
     * of the Mini-hub. Otherwise, returns {@code false}.
     */
    private boolean isFirstSection(final String currentSectionName, final List<MinihubSection> miniHubSections) {
        final int currentSectionIndex = IntStream.range(0, miniHubSections.size())
                .filter(i -> miniHubSections.get(i).getName().equals(currentSectionName))
                .findFirst()
                .orElse(-1);

        return currentSectionIndex == 0;
    }
}
