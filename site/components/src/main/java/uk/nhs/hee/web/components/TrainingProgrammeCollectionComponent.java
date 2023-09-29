package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoFacetNavigationBean;
import org.hippoecm.hst.content.beans.standard.HippoFolderBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.site.HstServices;
import org.hippoecm.hst.util.ContentBeanUtils;
import org.onehippo.taxonomy.api.Taxonomies;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.api.TaxonomyManager;
import uk.nhs.hee.web.components.info.TrainingProgrammeCollectionComponentInfo;
import uk.nhs.hee.web.constants.HEETaxonomy;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.TaxonomyTemplateUtils;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.TreeMap;


/**
 * Base component for Training Collection.
 */
@ParametersInfo(type = TrainingProgrammeCollectionComponentInfo.class)
public class TrainingProgrammeCollectionComponent extends ListingPageComponent {
    // Query parameters
    private static final String QUERY_PARAM_TRAINING_TYPE = "trainingType";
    private static final String QUERY_PARAM_TRAINING_TOPIC = "trainingTopic";
    private static final String QUERY_PARAM_TRAINING_PROFESSION = "trainingProfession";

    private static final String QUERY_PARAM_CLINICAL_DISCIPLINE = "clinicalDiscipline";
    // training facet name
    private static final String TRAINING_FACET_NAVIGATION_RELATIVE_PATH = "trainingfacets";


    /* (non-Javadoc)
     * @see uk.nhs.hee.web.components.ListingPageComponent.doBeforeRender(final HstRequest request,
     * final HstResponse response)
     */
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        // Adds selected training filters
        request.setModel("selectedTrainingTypes",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_TRAINING_TYPE));
        request.setModel("selectedTrainingTopics",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_TRAINING_TOPIC));
        request.setModel("selectedTrainingProfessions",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_TRAINING_PROFESSION));
        request.setModel("selectedClinicalDiscipline",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_CLINICAL_DISCIPLINE));
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));

        loadTaxonomiesIntoKeyValueMaps(request);

        // Adds training filter facets
        addTrainingFilterFacetsToModel(request);
    }

    private void loadTaxonomiesIntoKeyValueMaps(HstRequest request) {
        final TaxonomyManager taxonomyManager = HstServices.getComponentManager()
                .getComponent(TaxonomyManager.class.getSimpleName(),"org.onehippo.taxonomy.contentbean");
        final Taxonomies taxonomies = taxonomyManager.getTaxonomies();
        final Locale locale = request.getLocale();

        request.setModel("trainingProfessionMap",
                getMapFor(taxonomies, HEETaxonomy.HEE_GLOBAL_PROFESSIONS.getName(), locale));
        request.setModel("trainingTopicMap",
                getMapFor(taxonomies, HEETaxonomy.HEE_GLOBAL_HEALTHCARE_TOPICS.getName(), locale));
        request.setModel("trainingTypeMap",
                getMapFor(taxonomies, HEETaxonomy.HEE_GLOBAL_TRAINING_TYPES.getName(), locale));
        request.setModel("clinicalDisciplineMap",
                getMapFor(taxonomies, HEETaxonomy.HEE_GLOBAL_CLINICAL_DISCIPLINE.getName(), locale));
    }

    private Map<String, String> getMapFor(Taxonomies taxonomies, String taxonomyName, Locale locale) {
        Taxonomy taxonomy = taxonomies.getTaxonomy(taxonomyName);

        if (taxonomy != null) {
            return new TreeMap<>(TaxonomyTemplateUtils.getTaxonomyAsMap(taxonomy, locale));
        } else {
            return new HashMap<>();
        }
    }


    /**
     * Builds Query {@link Filter} for training listing.
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the Query {@link Filter} for training listing.
     * @throws FilterException thrown when an error occurs while building Query {@link Filter}.
     */
    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        return createOrFilter(
                query,
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_TRAINING_TYPE),
                HEEField.HEE_GLOBAL_TAXONOMY_TRAINING_TYPE.getName()
        ).addAndFilter(
                createOrFilter(
                        query,
                        HstUtils.getQueryParameterValues(request, QUERY_PARAM_TRAINING_TOPIC),
                        HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS.getName()
                )
        ).addAndFilter(
                createOrFilter(
                        query,
                        HstUtils.getQueryParameterValues(request, QUERY_PARAM_TRAINING_PROFESSION),
                        HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS.getName()
                )
        ).addAndFilter(
                createOrFilter(
                        query,
                        HstUtils.getQueryParameterValues(request, QUERY_PARAM_CLINICAL_DISCIPLINE),
                        HEEField.HEE_GLOBAL_TAXONOMY_CLINICAL_DISCIPLINE.getName()
                )
        );
    }

    /**
     * Returns {@link ListingPageType} for training.
     *
     * @param request the {@link HstRequest} instance.
     * @return {@link ListingPageType} for training.
     */
    @Override
    protected ListingPageType getListing(final HstRequest request) {
        return ListingPageType.getByName("training");
    }

    /**
     * Adds channel-specific training filter facets to model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addTrainingFilterFacetsToModel(final HstRequest request) {
        final HippoFacetNavigationBean facetNavigation = getTrainingFacetedNavigation();

        if (facetNavigation == null) {
            return;
        }

        for (final HippoFolderBean folder : facetNavigation.getFolders()) {
            if (HEEField.HEE_GLOBAL_TAXONOMY_TRAINING_TYPE.getName().equals(folder.getName())) {
                request.setModel("trainingTypeFacet", folder);
            } else if (HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS.getName().equals(folder.getName())) {
                request.setModel("trainingTopicFacet", folder);
            } else if (HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS.getName().equals(folder.getName())) {
                request.setModel("trainingProfessionFacet", folder);
            } else if (HEEField.HEE_GLOBAL_TAXONOMY_CLINICAL_DISCIPLINE.getName().equals(folder.getName())) {
                request.setModel("trainingDisciplineFacet", folder);
            }
        }
    }

    /**
     * Returns channel-specific faceted navigation ({@link HippoFacetNavigationBean}) for training.
     *
     * It looks up for the faceted navigation node {@code trainingfacets} under the current channel content folder.
     * For instance, for {@code medical} channel, it would look up for {@code trainingfacets} node under
     * {@code /content/documents/medical} folder.
     *
     * @return the channel-specific faceted navigation ({@link HippoFacetNavigationBean}) for training.
     */
    private HippoFacetNavigationBean getTrainingFacetedNavigation() {
        return ContentBeanUtils.getFacetNavigationBean(
                TRAINING_FACET_NAVIGATION_RELATIVE_PATH,
                null);
    }

}
