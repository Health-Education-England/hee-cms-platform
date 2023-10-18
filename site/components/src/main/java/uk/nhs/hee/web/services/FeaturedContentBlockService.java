package uk.nhs.hee.web.services;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoBeanIterator;
import org.hippoecm.hst.content.beans.standard.KeyLabelPathValue;
import org.hippoecm.hst.core.component.HstRequest;
import org.onehippo.taxonomy.contentbean.TaxonomyClassification;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.FeaturedContent;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.services.enums.FeaturedContentMethod;
import uk.nhs.hee.web.utils.QueryAndFiltersUtils;

import javax.jcr.RepositoryException;
import java.util.*;
import java.util.stream.Collectors;

public class FeaturedContentBlockService {
    // Logger
    private static final Logger LOG = LoggerFactory.getLogger(FeaturedContentBlockService.class);

    // Publication landing page document type
    public static final String DOCUMENT_TYPE_PUBLICATION_LANDING_PAGE = "hee:publicationLandingPage";

    private static final Map<String, String> CONTENT_TYPE_TO_LISTING_TYPE_MAP =
            Collections.unmodifiableMap(new HashMap<>() {
                private static final long serialVersionUID = 475609862051094917L;

                {
                    // Uncomment during the future iteration when we add support for the following content types
                    //put("hee:caseStudy", "casestudy");
                    put("hee:blogPost", "blog");
                    put("hee:news", "news");
                    put("hee:publicationLandingPage", "publication");
                }
            });

    /**
     * Returns featured content/documents of {@code maxDocuments} size
     * based on the data provided in the given {@code featuredContentBlock} document.
     *
     * @param request              the {@link HstRequest} instance.
     * @param featuredContentBlock is a content clock which will dictates the featured documents
     *                             that needs to be returned.
     * @param maxDocuments         the max. number of documents to be returned.
     * @return the featured content/documents of {@code maxDocuments} size based on the data provided
     * in the given {@code featuredContentBlock} document.
     */
    public List<HippoBean> getFeaturedContent(
            final HstRequest request,
            final FeaturedContent featuredContentBlock,
            final int maxDocuments) {
        List<HippoBean> featuredDocuments = null;

        final FeaturedContentMethod featuredContentMethod =
                FeaturedContentMethod.getByKey(featuredContentBlock.getMethod());

        if (featuredContentMethod == FeaturedContentMethod.MANUAL) {
            // Manual method
            featuredDocuments = featuredContentBlock.getFeaturedDocuments();
        } else {
            // Latest method
            try {
                final QueryAndFiltersUtils queryAndFiltersUtils = new QueryAndFiltersUtils();
                final HstQuery query = queryAndFiltersUtils.createQuery(
                        request.getRequestContext(),
                        maxDocuments,
                        CONTENT_TYPE_TO_LISTING_TYPE_MAP.get(featuredContentBlock.getFeaturedContentType()));

                if (featuredContentMethod == FeaturedContentMethod.RELATED) {
                    // Related method
                    final Filter baseFilter = query.createFilter();

                    if (DOCUMENT_TYPE_PUBLICATION_LANDING_PAGE.equals(featuredContentBlock.getFeaturedContentType())
                            && !isEmpty(featuredContentBlock.getGlobalTaxonomyPublicationType())) {
                        baseFilter.addAndFilter(
                                queryAndFiltersUtils.createOrFilter(
                                        query,
                                        getTaxonomyValueKeysAsList(featuredContentBlock
                                                .getGlobalTaxonomyPublicationType().getTaxonomyValues()),
                                        HEEField.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE_WITH_ANCESTORS.getName()
                                )
                        );
                    }

                    if (!isEmpty(featuredContentBlock.getGlobalTaxonomyHealthcareTopics())) {
                        baseFilter.addAndFilter(
                                queryAndFiltersUtils.createOrFilter(
                                        query,
                                        getTaxonomyValueKeysAsList(featuredContentBlock
                                                .getGlobalTaxonomyHealthcareTopics().getTaxonomyValues()),
                                        HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS_WITH_ANCESTORS.getName()
                                )
                        );
                    }

                    if (!isEmpty(featuredContentBlock.getGlobalTaxonomyProfessions())) {
                        baseFilter.addAndFilter(
                                queryAndFiltersUtils.createOrFilter(
                                        query,
                                        getTaxonomyValueKeysAsList(featuredContentBlock
                                                .getGlobalTaxonomyProfessions().getTaxonomyValues()),
                                        HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS_WITH_ANCESTORS.getName()
                                )
                        );
                    }

                    if (!DOCUMENT_TYPE_PUBLICATION_LANDING_PAGE.equals(featuredContentBlock.getFeaturedContentType())
                            && !isEmpty(featuredContentBlock.getGlobalTaxonomyTags())) {
                        baseFilter.addAndFilter(
                                queryAndFiltersUtils.createOrFilter(
                                        query,
                                        getTaxonomyValueKeysAsList(featuredContentBlock
                                                .getGlobalTaxonomyTags().getTaxonomyValues()),
                                        HEEField.HEE_GLOBAL_TAXONOMY_TAGS_WITH_ANCESTORS.getName()
                                )
                        );
                    }

                    query.setFilter(baseFilter);
                }

                LOG.debug("Execute query: {}", query.getQueryAsString(false));

                featuredDocuments = transformToList(query.execute().getHippoBeans());
            } catch (final QueryException | RepositoryException e) {
                LOG.error("Caught error '{}' while querying repository for latest/related documents of type {} ",
                        e.getMessage(), featuredContentBlock.getFeaturedContentType(), e);
            }
        }

        if (featuredDocuments == null) {
            return Collections.emptyList();
        }

        if (featuredDocuments.size() > maxDocuments) {
            return featuredDocuments.subList(0, maxDocuments);
        }

        return featuredDocuments;
    }

    /**
     * Transforms the given {@code beans} {@link HippoBeanIterator} into {@link List<HippoBean>} and returns it.
     *
     * @param beans the {@link HippoBeanIterator} which needs to be transformed into {@link List<HippoBean>}.
     * @return the {@link List<HippoBean>} transformed from the given {@code beans} {@link HippoBeanIterator}.
     */
    private List<HippoBean> transformToList(final HippoBeanIterator beans) {
        final List<HippoBean> beanList = new ArrayList<>();

        while (beans.hasNext()) {
            beanList.add(beans.nextHippoBean());
        }

        return beanList;
    }

    /**
     * Transforms the given {@link List<KeyLabelPathValue>} {@code taxonomyValues} into {@link List<String>}
     * and returns it.
     *
     * @param taxonomyValues the {@link List<KeyLabelPathValue>} instance containing taxonomy values.
     * @return {@link List<String>} transformed from the given {@link List<KeyLabelPathValue>} {@code taxonomyValues}.
     */
    private List<String> getTaxonomyValueKeysAsList(final List<KeyLabelPathValue> taxonomyValues) {
        return taxonomyValues.stream().map(KeyLabelPathValue::getKey).collect(Collectors.toList());
    }

    /**
     * Returns {@code true} if the given {@link TaxonomyClassification} is empty. Otherwise, returns {@code false}.
     *
     * @param taxonomyClassification the given {@link TaxonomyClassification} which needs to be verified if empty or not.
     * @return {@code true} if the given {@link TaxonomyClassification} is empty. Otherwise, returns {@code false}.
     */
    private boolean isEmpty(final TaxonomyClassification taxonomyClassification) {
        return taxonomyClassification == null || taxonomyClassification.getTaxonomyValues().isEmpty();
    }
}
