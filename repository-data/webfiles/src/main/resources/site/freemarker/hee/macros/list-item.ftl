<#ftl output_format="HTML">
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "internal-link.ftl">
<#include '../utils/author-util.ftl'>

<#--  Lists bulletin result items  -->
<#macro bulletinListItem items categoriesMap>
    <#list items as item>
        <div class="hee-listing-item">
            <#--  Title  -->
            <h3><a href="${item.websiteUrl}">${item.title}</a></h3>

            <#--  Bulletin details: START   -->
            <div class="hee-listing-item__details">
                <#--  Categories  -->
                <#assign categories>${item.categories?map(category -> categoriesMap[category]!)?join(', ')}</#assign>
                <#if categories?has_content>
                    <@fmt.message key="category.text" var="categoryLabel"/>
                    <@listItemRow key="${categoryLabel}">
                        ${categories}
                    </@listItemRow>
                </#if>

                <#--  Overview  -->
                <#if item.overview?has_content>
                    <@fmt.message key="bulletin.overview" var="overviewLabel"/>
                    <@listItemRow key="${overviewLabel}">
                        ${item.overview}
                    </@listItemRow>
                </#if>

                <#--  Website URL  -->
                <#if item.websiteUrl??>
                    <#assign website>
                        <a href="${item.websiteUrl}"> ${item.websiteTitle}</a>
                    </#assign>
                    <@fmt.message key="bulletin.website" var="websiteLabel"/>
                    <@listItemRow key="${websiteLabel}">
                        ${website}
                    </@listItemRow>
                </#if>
            </div>
            <#--  Bulletin details: END   -->
        </div>
    </#list>
</#macro>

<#--  Lists blog post result items  -->
<#macro blogListItem items>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if pageURL != pageNotFoundURL>
            <div class="hee-listing-item">
                <#--  Title  -->
                <h3><a href="${pageURL}">${item.title}</a></h3>

                <#--  Blog details: START  -->
                <div class="hee-listing-item__details">
                    <#--  Publication date  -->
                    <@fmt.message key="published_date.text" var="publishedDateLabel"/>
                    <@listItemRow key="${publishedDateLabel}">
                        ${item.publicationDate.time?string['dd MMMM yyyy']}
                    </@listItemRow>

                    <#--  Published by  -->
                    <#if item.authors?has_content>
                        <#assign commaSeparatedAuthorNames>${getCommaSeparatedAuthorNames(item.authors)}</#assign>
                    <#else>
                        <#assign commaSeparatedAuthorNames>${item.author!}</#assign>
                    </#if>
                    <#if commaSeparatedAuthorNames?has_content>
                        <@fmt.message key="authors.text" var="authorsLabel"/>
                        <@listItemRow key="${authorsLabel}">
                            ${commaSeparatedAuthorNames}
                        </@listItemRow>
                    </#if>
                </div>
                <#--  Blog details: END  -->

                <#--  Summary  -->
                <div class="hee-listing-item__summary">
                    <@hst.html formattedText="${item.summary!?replace('\n', '<br>')}"/>
                </div>
            </div>
        </#if>
    </#list>
</#macro>

<#--  Lists news article result items  -->
<#macro newsListItem items>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if pageURL != pageNotFoundURL>
            <div class="hee-listing-item">
                <#--  Title  -->
                <h3><a href="${pageURL}">${item.title}</a></h3>

                <#--  News details: START  -->
                <div class="hee-listing-item__details">
                    <#--  Publication date  -->
                    <@fmt.message key="published_date.text" var="publishedDateLabel"/>
                    <@listItemRow key="${publishedDateLabel}">
                        ${item.publicationDate.time?string['dd MMMM yyyy']}
                    </@listItemRow>
                </div>
                <#--  News details: END  -->

                <#--  Summary  -->
                <#if item.summary?has_content>
                    <div class="hee-listing-item__summary">
                        <@hst.html formattedText="${item.summary!?replace('\n', '<br>')}"/>
                    </div>
                </#if>
            </div>
        </#if>
    </#list>
</#macro>

<#--  Lists case study result items  -->
<#macro casestudyListItem items impactGroupMap impactTypesMap sectorMap regionMap providerMap>
    <#list items as item>
        <#--  Gets case study document URL  -->
        <@hst.link var="casestudyDocumentURL" hippobean=item.document>
            <@hst.param name="forceDownload" value="true"/>
        </@hst.link>

        <div class="hee-listing-item">
            <#--  Title  -->
            <h3><a href="${casestudyDocumentURL}">${item.title}</a></h3>

            <#--  Case study details: START  -->
            <div class="hee-listing-item__details">
                <#--  Group impacted  -->
                <#if item.impactGroup?has_content>
                    <@fmt.message key="casestudy.impact_group" var="impactGroupLabel"/>
                    <@listItemRow key="${impactGroupLabel}">
                        ${impactGroupMap[item.impactGroup]}
                    </@listItemRow>
                </#if>

                <#--  Impact types  -->
                <#if item.impactTypes?size gt 0>
                    <@fmt.message key="casestudy.impact_types" var="impactTypesLabel"/>
                    <#assign impactTypes>${item.impactTypes?map(impactType -> impactTypesMap[impactType]!)?join(', ')}</#assign>
                    <@listItemRow key="${impactTypesLabel}">
                        ${impactTypes}
                    </@listItemRow>
                </#if>

                <#--  Document  -->
                <#if casestudyDocumentURL??>
                    <@fmt.message key="casestudy.document" var="documentLabel"/>
                    <@listItemRow key="${documentLabel}">
                        <a href="${casestudyDocumentURL}"><@fmt.message key="searchbank.get_document"/></a>
                    </@listItemRow>
                </#if>

                <#--  Sector  -->
                <#if item.sector?has_content>
                    <@fmt.message key="casestudy.sector" var="sectorLabel"/>
                    <@listItemRow key="${sectorLabel}">
                        ${sectorMap[item.sector]}
                    </@listItemRow>
                </#if>

                <#--  Region  -->
                <#if item.region?has_content>
                    <@fmt.message key="casestudy.region" var="regionLabel"/>
                    <@listItemRow key="${regionLabel}">
                        ${regionMap[item.region]}
                    </@listItemRow>
                </#if>

                <#--  Organisation  -->
                <#if item.provider?has_content>
                    <@fmt.message key="casestudy.provider" var="providerLabel"/>
                    <@listItemRow key="${providerLabel}">
                        ${providerMap[item.provider]}
                    </@listItemRow>
                </#if>

                <#--  Date submitted  -->
                <#if item.submittedDate??>
                    <@fmt.message key="casestudy.submitted_date" var="dateLabel"/>
                    <@listItemRow key="${dateLabel}">
                        ${item.submittedDate.time?string['dd MMMM yyyy']}
                    </@listItemRow>
                </#if>
            </div>
            <#--  Case study details: END  -->
        </div>
    </#list>
</#macro>

<#--  Lists event result items  -->
<#macro eventListItem items>
    <#list items as item>
        <div class="hee-listing-item">
            <#--  Title  -->
            <h3><a href="${item.link}">${item.title}</a></h3>

            <#--  Event details: START   -->
            <div class="hee-listing-item__details">
                <#--  Date  -->
                <@fmt.message key="event.date" var="dateLabel"/>
                <@listItemRow key="${dateLabel}">
                    ${item.date.time?string['dd MMMM yyyy']}
                </@listItemRow>

                <#--  Location  -->
                <@fmt.message key="event.location" var="locationLabel"/>
                <@listItemRow key="${locationLabel}">
                    ${item.location}
                </@listItemRow>
            </div>
            <#--  Event details: END   -->

            <#--  Description  -->
            <div class="hee-listing-item__summary">
                <@hst.html formattedText="${item.description!?replace('\n', '<br>')}"/>
            </div>
        </div>
    </#list>
</#macro>

<#--  Lists publication (landing) result items  -->
<#macro publicationListItem items>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>
        <#if pageURL != pageNotFoundURL>
            <div class="hee-listing-item">
                <#--  Title  -->
                <h3><a href="${pageURL}">${item.title}</a></h3>

                <div class="hee-listing-item__details">
                    <#if item.globalTaxonomyPublicationType?? && item.globalTaxonomyPublicationType.taxonomyValues?has_content>
                        <@fmt.message key="publication.type" var="publicationTypeLabel"/>

                        <@listItemRow key="${publicationTypeLabel}">
                            ${item.globalTaxonomyPublicationType.taxonomyValues[0].label}
                        </@listItemRow>
                    </#if>

                    <@fmt.message key="publication.publish_date" var="publishDateLabel"/>
                    <@listItemRow key="${publishDateLabel}">
                        ${item.publicationDate.time?string['dd MMMM yyyy']}
                    </@listItemRow>
                </div>
                <#--  Publication details: END   -->

                <#--  Summary  -->
                <div class="hee-listing-item__summary">
                    <@hst.html formattedText="${item.summary!?replace('\n', '<br>')}"/>
                </div>
            </div>
        </#if>
    </#list>
</#macro>

<#--  Lists search bank result items  -->
<#macro searchbankListItem items topicMap keyTermMap providerMap>
    <#list items as item>
        <#--  Gets search bank strategy document URL  -->
        <#if item.strategyDocument?? && item.strategyDocument.mimeType != 'application/vnd.hippo.blank'>
            <#assign strategyDocumentURL>
                <@hst.link hippobean=item.strategyDocument>
                    <@hst.param name="forceDownload" value="true"/>
                </@hst.link>
            </#assign>
        <#else>
            <#assign strategyDocumentURL=''/>
        </#if>

        <div class="hee-listing-item">
            <#--  Title  -->
            <h3>
                <#if strategyDocumentURL?has_content>
                    <a href="${strategyDocumentURL}">${item.title}</a>
                <#else>
                    ${item.title}
                </#if>
            </h3>

            <#--  Search bank details: START  -->
            <div class="hee-listing-item__details">
                <#--  Topics  -->
                <#assign topics>${item.topics?map(topic -> topicMap[topic]!)?join(', ')}</#assign>
                <#if topics??>
                    <@fmt.message key="searchbank.topics" var="topicLabel"/>
                    <@listItemRow key="${topicLabel}">
                        ${topics}
                    </@listItemRow>
                </#if>

                <#--  Key terms  -->
                <#if item.keyTerms?size gt 0>
                    <@fmt.message key="searchbank.key_terms" var="keyTermsLabel"/>
                    <#assign keyTerms>${item.keyTerms?map(keyTerm -> keyTermMap[keyTerm]!)?join(', ')}</#assign>
                    <@listItemRow key="${keyTermsLabel}">
                        ${keyTerms}
                    </@listItemRow>
                </#if>

                <#--  Strings / Strategies  -->
                <#if strategyDocumentURL?has_content>
                    <@fmt.message key="searchbank.strategies" var="strategiesLabel"/>
                    <@listItemRow key="${strategiesLabel}">
                        <a href="${strategyDocumentURL}"><@fmt.message key="searchbank.get_strategy"/></a>
                    </@listItemRow>
                </#if>

                <#--  Search  -->
                <#if item.searchDocument?? && item.searchDocument.mimeType != 'application/vnd.hippo.blank'>
                    <@hst.link var="searchDocumentURL" hippobean=item.searchDocument>
                        <@hst.param name="forceDownload" value="true"/>
                    </@hst.link>

                    <@fmt.message key="searchbank.search" var="searchLabel"/>
                    <@listItemRow key="${searchLabel}">
                        <a href="${searchDocumentURL}"><@fmt.message key="searchbank.get_search"/></a>
                    </@listItemRow>
                </#if>

                <#--  Completed on  -->
                <#if item.completedDate??>
                    <@fmt.message key="searchbank.completed_on" var="completedOnLabel"/>
                    <@listItemRow key="${completedOnLabel}">
                        ${item.completedDate.time?string['dd MMMM yyyy']}
                    </@listItemRow>
                </#if>

                <#--  Provider  -->
                <#if item.provider?has_content>
                    <@fmt.message key="searchbank.provider" var="providerLabel"/>
                    <@listItemRow key="${providerLabel}">
                        ${providerMap[item.provider]}
                    </@listItemRow>
                </#if>
            </div>
            <#--  Search bank details: END  -->
        </div>
    </#list>
</#macro>

<#--  Lists search result items  -->
<#macro searchListItem items>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if ['Bulletin', 'CaseStudy', 'SearchBank', 'Event']?seq_contains(item.class.simpleName) || pageURL != pageNotFoundURL>
            <div class="hee-listing-item">
                <#switch item.getClass().getName()>
                    <#case "uk.nhs.hee.web.beans.Event">
                        <#--  Title  -->
                        <h3><a href="${item.link}">${item.title}</a></h3>

                        <#--  Event details: START   -->
                        <div class="hee-listing-item__details">
                            <#--  Date  -->
                            <@fmt.message key="event.date" var="dateLabel"/>
                            <@listItemRow key="${dateLabel}">
                                ${item.date.time?string['dd MMMM yyyy']}
                            </@listItemRow>

                            <#--  Location  -->
                            <@fmt.message key="event.location" var="locationLabel"/>
                            <@listItemRow key="${locationLabel}">
                                ${item.location}
                            </@listItemRow>

                            <#--  Published date  -->
                            <@fmt.message key="published_date.text" var="publishedDateLabel"/>
                            <@listItemRow key="${publishedDateLabel}">
                                ${item.publishedDate}
                            </@listItemRow>
                        </div>
                        <#--  Event details: END   -->

                        <#--  Description  -->
                        <div class="hee-listing-item__summary">
                            <@hst.html formattedText="${item.description!?replace('\n', '<br>')}"/>
                        </div>

                        <#break>
                    <#case "uk.nhs.hee.web.beans.CaseStudy">
                        <#--  Gets case study document URL  -->
                        <@hst.link var="caseStudyDocumentURL" hippobean=item.document>
                            <@hst.param name="forceDownload" value="true"/>
                        </@hst.link>

                        <#--  Title  -->
                        <h3><a href="${caseStudyDocumentURL}">${item.title}</a></h3>

                        <#--  Case study details: START   -->
                        <div class="hee-listing-item__details">
                            <#--  Published date  -->
                            <@fmt.message key="published_date.text" var="publishedDateLabel"/>
                            <@listItemRow key="${publishedDateLabel}">
                                ${item.publishedDate}
                            </@listItemRow>
                        </div>
                        <#--  Case study details: END   -->

                        <#break>
                    <#case "uk.nhs.hee.web.beans.Bulletin">
                        <#--  Title  -->
                        <h3><a href="${item.websiteUrl}">${item.title}</a></h3>

                        <#--  Bulletin details: START   -->
                        <div class="hee-listing-item__details">
                            <#--  Overview  -->
                            <#if item.overview?has_content>
                                <@fmt.message key="bulletin.overview" var="overviewLabel"/>
                                <@listItemRow key="${overviewLabel}">
                                    ${item.overview}
                                </@listItemRow>
                            </#if>
                        </div>
                        <#--  Bulletin details: END   -->

                        <#break>
                    <#case "uk.nhs.hee.web.beans.SearchBank">
                        <#--  Gets search bank strategy document URL  -->
                        <#if item.strategyDocument?? && item.strategyDocument.mimeType != 'application/vnd.hippo.blank'>
                            <#assign strategyDocumentURL>
                                <@hst.link hippobean=item.strategyDocument>
                                    <@hst.param name="forceDownload" value="true"/>
                                </@hst.link>
                            </#assign>
                        <#else>
                            <#assign strategyDocumentURL=''/>
                        </#if>

                        <#--  Title  -->
                        <h3>
                            <#if strategyDocumentURL?has_content>
                                <a href="${strategyDocumentURL}">${item.title}</a>
                            <#else>
                                ${item.title}
                            </#if>
                        </h3>

                        <#--  Search bank details: START  -->
                        <div class="hee-listing-item__details">
                            <#--  Strings / Strategies  -->
                            <#if strategyDocumentURL?has_content>
                                <@fmt.message key="searchbank.strategies" var="strategiesLabel"/>
                                <@listItemRow key="${strategiesLabel}">
                                    <a href="${strategyDocumentURL}"><@fmt.message key="searchbank.get_strategy"/></a>
                                </@listItemRow>
                            </#if>

                            <#--  Search  -->
                            <#if item.searchDocument?? && item.searchDocument.mimeType != 'application/vnd.hippo.blank'>
                                <@hst.link var="searchDocumentURL" hippobean=item.searchDocument>
                                    <@hst.param name="forceDownload" value="true"/>
                                </@hst.link>

                                <@fmt.message key="searchbank.search" var="searchLabel"/>
                                <@listItemRow key="${searchLabel}">
                                    <a href="${searchDocumentURL}"><@fmt.message key="searchbank.get_search"/></a>
                                </@listItemRow>
                            </#if>

                            <#--  Completed on  -->
                            <#if item.completedDate??>
                                <@fmt.message key="searchbank.completed_on" var="completedOnLabel"/>
                                <@listItemRow key="${completedOnLabel}">
                                    ${item.completedDate.time?string['dd MMMM yyyy']}
                                </@listItemRow>
                            </#if>

                            <#--  Published date  -->
                            <@fmt.message key="published_date.text" var="publishedDateLabel"/>
                            <@listItemRow key="${publishedDateLabel}">
                                ${item.publishedDate}
                            </@listItemRow>
                        </div>
                        <#--  Search bank details: END  -->

                        <#break>
                    <#default>
                        <#--  Title  -->
                        <h3><a href="${pageURL}">${item.title}</a></h3>

                        <#--  Item details: START  -->
                        <div class="hee-listing-item__details">
                            <#--  Published date  -->
                            <@fmt.message key="published_date.text" var="publishedDateLabel"/>
                            <@listItemRow key="${publishedDateLabel}">
                                ${item.publishedDate}
                            </@listItemRow>
                        </div>
                        <#--  Item details: END  -->

                        <#--  Summary  -->
                        <#if item.summary?has_content>
                            <div class="hee-listing-item__summary">
                                <@hst.html formattedText="${item.summary!?replace('\n', '<br>')}"/>
                            </div>
                        </#if>
                </#switch>
            </div>
        </#if>
    </#list>
</#macro>

<#--  Lists training programme result items  -->
<#macro trainingListItem items>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if pageURL != pageNotFoundURL>
            <div class="hee-listing-item${(item.cardImage?has_content)?then(' has-image', '')}">
                <#--  Card image  -->
                <@hst.link var="cardImgLink" hippobean=item.cardImage/>
                <div class="hee-listing-item__image" style="background-image:url('${cardImgLink}');"></div>

                <#--  Title  -->
                <h3><a href="${pageURL}">${item.title}</a></h3>

                <#--  Training details: START  -->
                <div class="hee-listing-item__details">
                    <#--  Professions  -->
                    <#if item.globalTaxonomyProfessions?? && item.globalTaxonomyProfessions.taxonomyValues?has_content>
                        <@fmt.message key="profession.label" var="professionLabel"/>

                        <@listItemRow key="${professionLabel}">
                            <#list item.globalTaxonomyProfessions.taxonomyValues as profession>
                                ${profession.label}<#sep>, </#sep>
                            </#list>
                        </@listItemRow>
                    </#if>

                    <#--  Topics  -->
                    <#if item.globalTaxonomyHealthcareTopics?? && item.globalTaxonomyHealthcareTopics.taxonomyValues?has_content>
                        <@fmt.message key="topic.label" var="topicLabel"/>

                        <@listItemRow key="${topicLabel}">
                            <#list item.globalTaxonomyHealthcareTopics.taxonomyValues as topic>
                                ${topic.label}<#sep>, </#sep>
                            </#list>
                        </@listItemRow>
                    </#if>

                    <#--  Discipline  -->
                    <#if item.globalTaxonomyClinicalDiscipline?? && item.globalTaxonomyClinicalDiscipline.taxonomyValues?has_content>
                        <@fmt.message key="discipline.label" var="disciplineLabel"/>

                        <@listItemRow key="${disciplineLabel}">
                            ${item.globalTaxonomyClinicalDiscipline.taxonomyValues[0].label}
                        </@listItemRow>
                    </#if>

                    <#--  Training type  -->
                    <#if item.globalTaxonomyTrainingType?? && item.globalTaxonomyTrainingType.taxonomyValues?has_content>
                        <@fmt.message key="training_type.label" var="trainingTypeLabel"/>

                        <@listItemRow key="${trainingTypeLabel}">
                            ${item.globalTaxonomyTrainingType.taxonomyValues[0].label}
                        </@listItemRow>
                    </#if>

                    <#--  Duration  -->
                    <@fmt.message key="duration.label" var="durationLabel"/>
                    <@listItemRow key="${durationLabel}">
                        ${item.duration}
                    </@listItemRow>
                </div>
                <#--  Training details: END   -->

                <#--  Summary  -->
                <div class="hee-listing-item__summary">
                    <@hst.html formattedText="${item.summary!?replace('\n', '<br>')}"/>
                </div>
            </div>
        </#if>
    </#list>
</#macro>

<#--  Renders a list item  -->
<#macro listItemRow key>
    <div class="hee-listing-item__details__row">
        <span class="hee-listing-item__details__label">
            ${key}:
        </span>
        <span><#nested></span>
    </div>
</#macro>
