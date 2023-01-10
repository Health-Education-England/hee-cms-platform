<#ftl output_format="HTML">
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "internal-link.ftl">

<#macro bulletinListItem items categoriesMap>
    <#list items as item>
        <h3><a href="${item.websiteUrl}">${item.title}</a></h3>

        <dl class="nhsuk-summary-list">
            <#assign categories>${item.categories?map(category -> categoriesMap[category]!)?join(', ')}</#assign>
            <#if categories??>
                <@fmt.message key="category.text" var="categoryLabel"/>
                <@listItemRow key="${categoryLabel}">
                    ${categories}
                </@listItemRow>
            </#if>

            <#if item.overview??>
                <@fmt.message key="bulletin.overview" var="overviewLabel"/>
                <@listItemRow key="${overviewLabel}">
                    ${item.overview}
                </@listItemRow>
            </#if>

            <#if item.websiteUrl??>
                <#assign website>
                    <a href="${item.websiteUrl}"> ${item.websiteTitle}</a>
                </#assign>
                <@fmt.message key="bulletin.website" var="websiteLabel"/>
                <@listItemRow key="${websiteLabel}">
                    ${website}
                </@listItemRow>
            </#if>
        </dl>
    </#list>
</#macro>

<#macro blogListItem items categoriesMap>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if pageURL != pageNotFoundURL>
            <li>
                <span class="app-search-results-category">${item.categories?map(category -> categoriesMap[category]!)?join(', ')}</span>
                <h3><a href="${pageURL}">${item.title}</a></h3>
                <p class="nhsuk-body-s nhsuk-u-margin-top-1">${item.summary!}</p>
                <div class="nhsuk-review-date">
                    <p class="nhsuk-body-s">
                        <@fmt.message key="published_on.text"/> ${item.publicationDate.time?string['dd MMMM yyyy']}
                    </p>
                    <p class="nhsuk-body-s">
                        <@fmt.message key="by.text"/> ${item.author}
                    </p>
                </div>
            </li>
        </#if>
    </#list>
</#macro>

<#macro newsListItem items categoriesMap>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if pageURL != pageNotFoundURL>
            <li>
                <span class="app-search-results-category">${item.categories?map(category -> categoriesMap[category]!)?join(', ')}</span>
                <h3><a href="${pageURL}">${item.title}</a></h3>
                <p class="nhsuk-body-s nhsuk-u-margin-top-1">${item.summary!}</p>
                <div class="nhsuk-review-date">
                    <p class="nhsuk-body-s">
                        <@fmt.message key="published_on.text"/> ${item.publicationDate.time?string['dd MMMM yyyy']}
                    </p>
                    <#if item.author?has_content>
                        <p class="nhsuk-body-s">
                            <@fmt.message key="by.text"/> ${item.author}
                        </p>
                    </#if>
                </div>
            </li>
        </#if>
    </#list>
</#macro>

<#macro casestudyListItem items impactGroupMap impactTypesMap sectorMap regionMap providerMap>
    <#list items as item>
        <@hst.link var="casestudyDocumentURL" hippobean=item.document>
            <@hst.param name="forceDownload" value="true"/>
        </@hst.link>

        <h3><a href="${casestudyDocumentURL}" target="_blank">${item.title}</a></h3>

        <dl class="nhsuk-summary-list">
            <#if item.impactGroup?has_content>
                <@fmt.message key="casestudy.impact_group" var="impactGroupLabel"/>
                <@listItemRow key="${impactGroupLabel}">
                    ${impactGroupMap[item.impactGroup]}
                </@listItemRow>
            </#if>

            <#if item.impactTypes?size gt 0>
                <@fmt.message key="casestudy.impact_types" var="impactTypesLabel"/>
                <#assign impactTypes>${item.impactTypes?map(impactType -> impactTypesMap[impactType]!)?join(', ')}</#assign>
                <@listItemRow key="${impactTypesLabel}">
                    ${impactTypes}
                </@listItemRow>
            </#if>

            <#if casestudyDocumentURL??>
                <@fmt.message key="casestudy.document" var="documentLabel"/>
                <@listItemRow key="${documentLabel}">
                    <a href="${casestudyDocumentURL}" target="_blank"><@fmt.message key="searchbank.get_document"/></a>
                </@listItemRow>
            </#if>

            <#if item.sector?has_content>
                <@fmt.message key="casestudy.sector" var="sectorLabel"/>
                <@listItemRow key="${sectorLabel}">
                    ${sectorMap[item.sector]}
                </@listItemRow>
            </#if>

            <#if item.region?has_content>
                <@fmt.message key="casestudy.region" var="regionLabel"/>
                <@listItemRow key="${regionLabel}">
                    ${regionMap[item.region]}
                </@listItemRow>
            </#if>

            <#if item.provider?has_content>
                <@fmt.message key="casestudy.provider" var="providerLabel"/>
                <@listItemRow key="${providerLabel}">
                    ${providerMap[item.provider]}
                </@listItemRow>
            </#if>

            <#if item.submittedDate??>
                <@fmt.message key="casestudy.submitted_date" var="dateLabel"/>
                <@listItemRow key="${dateLabel}">
                    ${item.submittedDate.time?string['dd MMMM yyyy']}
                </@listItemRow>
            </#if>

        </dl>
    </#list>
</#macro>

<#macro eventListItem items>
    <#list items as item>
        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
        <p>${item.description}</p>

        <dl class="nhsuk-summary-list">
            <@fmt.message key="event.date" var="dateLabel"/>
            <@listItemRow key="${dateLabel}">
                ${item.date.time?string['dd MMMM yyyy']}
            </@listItemRow>

            <@fmt.message key="event.location" var="locationLabel"/>
            <@listItemRow key="${locationLabel}">
                ${item.location}
            </@listItemRow>
        </dl>
    </#list>
</#macro>

<#macro publicationListItem items publicationTypeMap>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>
    <@fmt.message key="publication.publish_date" var="publishDateLabel"/>
    <@fmt.message key="publication.type" var="publicationTypeLabel"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if pageURL != pageNotFoundURL>
            <h3><a href="${pageURL}">${item.title}</a></h3>

            <dl class="nhsuk-summary-list">
                <@listItemRow key="${publicationTypeLabel}">
                    ${publicationTypeMap[item.publicationType]}
                </@listItemRow>

                <@listItemRow key="${publishDateLabel}">
                    ${item.publicationDate.time?string['dd MMMM yyyy']}
                </@listItemRow>
            </dl>

            <p>${item.summary}</p>
        </#if>
    </#list>
</#macro>

<#macro searchbankListItem items topicMap keyTermMap providerMap>
    <#list items as item>
        <#if item.strategyDocument?? && item.strategyDocument.mimeType != 'application/vnd.hippo.blank'>
            <#assign strategyDocumentURL>
                <@hst.link hippobean=item.strategyDocument>
                    <@hst.param name="forceDownload" value="true"/>
                </@hst.link>
            </#assign>
        <#else>
            <#assign strategyDocumentURL=''/>
        </#if>

        <h3>
            <#if strategyDocumentURL?has_content>
                <a href="${strategyDocumentURL}" target="_blank">${item.title}</a>
            <#else>
                ${item.title}
            </#if>
        </h3>

        <dl class="nhsuk-summary-list">
            <#assign topics>${item.topics?map(topic -> topicMap[topic]!)?join(', ')}</#assign>
            <#if topics??>
                <@fmt.message key="searchbank.topics" var="topicLabel"/>
                <@listItemRow key="${topicLabel}">
                    ${topics}
                </@listItemRow>
            </#if>

            <#assign keyTerms>${item.keyTerms?map(keyTerm -> keyTermMap[keyTerm]!)?join(', ')}</#assign>
            <#if keyTerms??>
                <@fmt.message key="searchbank.key_terms" var="keyTermsLabel"/>
                <@listItemRow key="${keyTermsLabel}">
                    ${keyTerms}
                </@listItemRow>
            </#if>

            <#if strategyDocumentURL?has_content>
                <@fmt.message key="searchbank.strategies" var="strategiesLabel"/>
                <@listItemRow key="${strategiesLabel}">
                    <a href="${strategyDocumentURL}" target="_blank"><@fmt.message key="searchbank.get_strategy"/></a>
                </@listItemRow>
            </#if>

            <#if item.searchDocument?? && item.searchDocument.mimeType != 'application/vnd.hippo.blank'>
                <@hst.link var="searchDocumentURL" hippobean=item.searchDocument>
                    <@hst.param name="forceDownload" value="true"/>
                </@hst.link>

                <@fmt.message key="searchbank.search" var="searchLabel"/>
                <@listItemRow key="${searchLabel}">
                    <a href="${searchDocumentURL}" target="_blank"><@fmt.message key="searchbank.get_search"/></a>
                </@listItemRow>
            </#if>

            <#if item.completedDate??>
                <@fmt.message key="searchbank.completed_on" var="completedOnLabel"/>
                <@listItemRow key="${completedOnLabel}">
                    ${item.completedDate.time?string['dd MMMM yyyy']}
                </@listItemRow>
            </#if>

            <#if item.provider?has_content>
                <@fmt.message key="searchbank.provider" var="providerLabel"/>
                <@listItemRow key="${providerLabel}">
                    ${providerMap[item.provider]}
                </@listItemRow>
            </#if>
        </dl>
    </#list>
</#macro>

<#macro searchListItem items>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if ['Bulletin', 'CaseStudy', 'SearchBank', 'Event']?seq_contains(item.class.simpleName) || pageURL != pageNotFoundURL>
            <li>
                <#switch item.getClass().getName()>
                    <#case "uk.nhs.hee.web.beans.Event">
                        <h3><a href="${item.link}">${item.title}</a></h3>
                        <p class="nhsuk-body-s nhsuk-u-margin-top-1">${item.description!}</p>
                        <dl class="nhsuk-summary-list">
                            <@fmt.message key="event.date" var="dateLabel"/>
                            <@listItemRow key="${dateLabel}">
                                ${item.date.time?string['dd MMMM yyyy']}
                            </@listItemRow>
                            <@fmt.message key="event.location" var="locationLabel"/>
                            <@listItemRow key="${locationLabel}">
                                ${item.location}
                            </@listItemRow>
                        </dl>
                        <p class="nhsuk-body-s">
                            <@fmt.message key="published_on.text"/> ${item.publishedDate}
                        </p>
                        <#break>
                    <#case "uk.nhs.hee.web.beans.CaseStudy">
                        <@hst.link var="caseStudyDocumentURL" hippobean=item.document>
                            <@hst.param name="forceDownload" value="true"/>
                        </@hst.link>
                        <h3><a href="${caseStudyDocumentURL}" target="_blank">${item.title}</a></h3>
                        <div class="nhsuk-review-date">
                            <p class="nhsuk-body-s">
                                <@fmt.message key="published_on.text"/> ${item.publishedDate}
                            </p>
                        </div>
                        <#break>
                    <#case "uk.nhs.hee.web.beans.Bulletin">
                        <h3><a href="${item.websiteUrl}">${item.title}</a></h3>
                        <p class="nhsuk-body-s nhsuk-u-margin-top-1">${item.overview!}</p>
                        <#break>
                    <#case "uk.nhs.hee.web.beans.SearchBank">
                        <#if item.searchDocument?? && item.searchDocument.mimeType != 'application/vnd.hippo.blank'>
                            <@hst.link var="searchDocumentURL" hippobean=item.searchDocument>
                                <@hst.param name="forceDownload" value="true"/>
                            </@hst.link>
                            <h3><a href="${searchDocumentURL}">${item.title}</a></h3>

                            <#assign isStrategyDocumentAvailable=(item.strategyDocument?? && item.strategyDocument.mimeType != 'application/vnd.hippo.blank')?then(true, false)>
                            <#if isStrategyDocumentAvailable || item.completedDate??>
                                <dl class="nhsuk-summary-list">
                                    <#if isStrategyDocumentAvailable>
                                        <@hst.link var="strategyDocumentURL" hippobean=item.strategyDocument>
                                            <@hst.param name="forceDownload" value="true"/>
                                        </@hst.link>
                                        <@fmt.message key="searchbank.strategies" var="strategiesLabel"/>
                                        <@listItemRow key="${strategiesLabel}">
                                            <a href="${strategyDocumentURL}" target="_blank"><@fmt.message key="searchbank.get_strategy"/></a>
                                        </@listItemRow>
                                    </#if>

                                    <#if item.completedDate??>
                                        <@fmt.message key="searchbank.completed_on" var="completedOnLabel"/>
                                        <@listItemRow key="${completedOnLabel}">
                                            ${item.completedDate.time?string['dd MMMM yyyy']}
                                        </@listItemRow>
                                    </#if>
                                </dl>
                            </#if>
                            <div class="nhsuk-review-date">
                                <p class="nhsuk-body-s">
                                    <@fmt.message key="published_on.text"/> ${item.publishedDate}
                                </p>
                            </div>
                        </#if>
                        <#break>
                    <#default>
                        <h3><a href="${pageURL}">${item.title}</a></h3>
                        <p class="nhsuk-body-s nhsuk-u-margin-top-1">${item.summary!}</p>
                        <div class="nhsuk-review-date">
                            <p class="nhsuk-body-s">
                                <@fmt.message key="published_on.text"/> ${item.publishedDate}
                            </p>
                        </div>
                </#switch>
            </li>
        </#if>
    </#list>
</#macro>

<#macro listItemRow key>
    <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
            ${key}
        </dt>
        <dd class="nhsuk-summary-list__value">
            <#nested>
        </dd>
    </div>
</#macro>
