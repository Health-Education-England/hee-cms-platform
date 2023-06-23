package uk.nhs.hee.web.services;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoBeanIterator;
import org.hippoecm.hst.core.component.HstRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.FeaturedContent;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.services.enums.FeaturedContentMethod;
import uk.nhs.hee.web.utils.QueryAndFiltersUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

import javax.jcr.RepositoryException;
import java.util.*;

public class FeaturedContentBlockService {
    // Logger
    private static final Logger LOG = LoggerFactory.getLogger(FeaturedContentBlockService.class);

    // Publication landing page document type
    public static final String DOCUMENT_TYPE_PUBLICATION_LANDING_PAGE = "hee:publicationLandingPage";

    private static final Map<String, String> CONTENT_TYPE_TO_LISTING_TYPE_MAP =
            Collections.unmodifiableMap(new HashMap<String, String>() {
                private static final long serialVersionUID = 475609862051094917L;
                {
                    // Uncomment during the future iteration when we add support for the following content types
                    /*put("hee:blogPost", "blog");
                    put("hee:caseStudy", "casestudy");
                    put("hee:news", "news");*/
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
                            && !featuredContentBlock.getPublicationType().isEmpty()) {
                        baseFilter.addAndFilter(
                                queryAndFiltersUtils.createOrFilter(
                                        query,
                                        Collections.singletonList(featuredContentBlock.getPublicationType()),
                                        HEEField.PUBLICATION_TYPE_CLASSIFIABLE.getName()
                                )
                        );
                    }

                    if (featuredContentBlock.getTopics().length > 0) {
                        baseFilter.addAndFilter(
                                queryAndFiltersUtils.createOrFilter(
                                        query,
                                        Arrays.asList(featuredContentBlock.getTopics()),
                                        HEEField.PUBLICATION_TOPICS_CLASSIFIABLE.getName()
                                )
                        );
                    }

                    if (featuredContentBlock.getProfessions().length > 0) {
                        baseFilter.addAndFilter(
                                queryAndFiltersUtils.createOrFilter(
                                        query,
                                        Arrays.asList(featuredContentBlock.getProfessions()),
                                        HEEField.PUBLICATION_PROFESSIONS_CLASSIFIABLE.getName()
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
     * Returns the {@code value-list} map of {@code Publication types}.
     *
     * @return the {@code value-list} map of {@code Publication types}.
     */
    public Map<String, String> getPublicationTypesValueList() {
        return ValueListUtils.getValueListMap(ValueListIdentifier.PUBLICATION_TYPES.getName());
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
}
