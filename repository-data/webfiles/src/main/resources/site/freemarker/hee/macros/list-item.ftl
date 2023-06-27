<#ftl output_format="HTML">
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "internal-link.ftl">
<#include '../utils/author-util.ftl'>

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
                    <@newListItemRow key="${categoryLabel}">
                        ${categories}
                    </@newListItemRow>
                </#if>

                <#--  Overview  -->
                <#if item.overview?has_content>
                    <@fmt.message key="bulletin.overview" var="overviewLabel"/>
                    <@newListItemRow key="${overviewLabel}">
                        ${item.overview}
                    </@newListItemRow>
                </#if>

                <#--  Website URL  -->
                <#if item.websiteUrl??>
                    <#assign website>
                        <a href="${item.websiteUrl}"> ${item.websiteTitle}</a>
                    </#assign>
                    <@fmt.message key="bulletin.website" var="websiteLabel"/>
                    <@newListItemRow key="${websiteLabel}">
                        ${website}
                    </@newListItemRow>
                </#if>
            </div>
            <#--  Bulletin details: END   -->
        </div>
    </#list>
</#macro>

<#macro blogListItem items categoriesMap>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if pageURL != pageNotFoundURL>
            <div class="hee-listing-item">
                <#--  Title  -->
                <h3><a href="${pageURL}">${item.title}</a></h3>

                <#--  Blog details: START  -->
                <div class="hee-listing-item__details">
                    <#--  Categories  -->
                    <#assign categories="${item.categories?map(category -> categoriesMap[category]!)?join(', ')}">

                    <#if categories?has_content>
                        <@fmt.message key="categories.text" var="categoriesLabel"/>
                        <@newListItemRow key="${categoriesLabel}">
                            ${categories}
                        </@newListItemRow>
                    </#if>

                    <#--  Publish date  -->
                    <@fmt.message key="published_date.text" var="publishedDateLabel"/>
                    <@newListItemRow key="${publishedDateLabel}">
                        ${item.publicationDate.time?string['dd MMMM yyyy']}
                    </@newListItemRow>

                    <#--  Published by  -->
                    <#if item.authors?has_content>
                        <#assign commaSeparatedAuthorNames>${getCommaSeparatedAuthorNames(item.authors)}</#assign>
                    <#else>
                        <#assign commaSeparatedAuthorNames>${item.author!}</#assign>
                    </#if>
                    <#if commaSeparatedAuthorNames?has_content>
                        <@fmt.message key="authors.text" var="authorsLabel"/>
                        <@newListItemRow key="${authorsLabel}">
                            ${commaSeparatedAuthorNames}
                        </@newListItemRow>
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

<#macro newsListItem items categoriesMap>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if pageURL != pageNotFoundURL>
            <div class="hee-listing-item">
                <#--  Title  -->
                <h3><a href="${pageURL}">${item.title}</a></h3>

                <#--  News details: START  -->
                <div class="hee-listing-item__details">
                    <#--  Categories  -->
                    <#assign categories="${item.categories?map(category -> categoriesMap[category]!)?join(', ')}">

                    <#if categories?has_content>
                        <@fmt.message key="categories.text" var="categoriesLabel"/>
                        <@newListItemRow key="${categoriesLabel}">
                            ${categories}
                        </@newListItemRow>
                    </#if>

                    <#--  Publish date  -->
                    <@fmt.message key="published_date.text" var="publishedDateLabel"/>
                    <@newListItemRow key="${publishedDateLabel}">
                        ${item.publicationDate.time?string['dd MMMM yyyy']}
                    </@newListItemRow>

                    <#--  Published by  -->
                    <#if item.authors?has_content>
                        <#assign commaSeparatedAuthorNames>${getCommaSeparatedAuthorNames(item.authors)}</#assign>
                    <#else>
                        <#assign commaSeparatedAuthorNames>${item.author!}</#assign>
                    </#if>
                    <#if commaSeparatedAuthorNames?has_content>
                        <@fmt.message key="authors.text" var="authorsLabel"/>
                        <@newListItemRow key="${authorsLabel}">
                            ${commaSeparatedAuthorNames}
                        </@newListItemRow>
                    </#if>
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

<#macro casestudyListItem items impactGroupMap impactTypesMap sectorMap regionMap providerMap>
    <#list items as item>
        <#--  Gets case study document URL  -->
        <@hst.link var="casestudyDocumentURL" hippobean=item.document>
            <@hst.param name="forceDownload" value="true"/>
        </@hst.link>

        <div class="hee-listing-item">
            <#--  Title  -->
            <h3><a href="${casestudyDocumentURL}" target="_blank">${item.title}</a></h3>

            <#--  Case study details: START  -->
            <div class="hee-listing-item__details">
                <#--  Group impacted  -->
                <#if item.impactGroup?has_content>
                    <@fmt.message key="casestudy.impact_group" var="impactGroupLabel"/>
                    <@newListItemRow key="${impactGroupLabel}">
                        ${impactGroupMap[item.impactGroup]}
                    </@newListItemRow>
                </#if>

                <#--  Impact types  -->
                <#if item.impactTypes?size gt 0>
                    <@fmt.message key="casestudy.impact_types" var="impactTypesLabel"/>
                    <#assign impactTypes>${item.impactTypes?map(impactType -> impactTypesMap[impactType]!)?join(', ')}</#assign>
                    <@newListItemRow key="${impactTypesLabel}">
                        ${impactTypes}
                    </@newListItemRow>
                </#if>

                <#--  Document  -->
                <#if casestudyDocumentURL??>
                    <@fmt.message key="casestudy.document" var="documentLabel"/>
                    <@newListItemRow key="${documentLabel}">
                        <a href="${casestudyDocumentURL}" target="_blank"><@fmt.message key="searchbank.get_document"/></a>
                    </@newListItemRow>
                </#if>

                <#--  Sector  -->
                <#if item.sector?has_content>
                    <@fmt.message key="casestudy.sector" var="sectorLabel"/>
                    <@newListItemRow key="${sectorLabel}">
                        ${sectorMap[item.sector]}
                    </@newListItemRow>
                </#if>

                <#--  Region  -->
                <#if item.region?has_content>
                    <@fmt.message key="casestudy.region" var="regionLabel"/>
                    <@newListItemRow key="${regionLabel}">
                        ${regionMap[item.region]}
                    </@newListItemRow>
                </#if>

                <#--  Organisation  -->
                <#if item.provider?has_content>
                    <@fmt.message key="casestudy.provider" var="providerLabel"/>
                    <@newListItemRow key="${providerLabel}">
                        ${providerMap[item.provider]}
                    </@newListItemRow>
                </#if>

                <#--  Date submitted  -->
                <#if item.submittedDate??>
                    <@fmt.message key="casestudy.submitted_date" var="dateLabel"/>
                    <@newListItemRow key="${dateLabel}">
                        ${item.submittedDate.time?string['dd MMMM yyyy']}
                    </@newListItemRow>
                </#if>
            </div>
            <#--  Case study details: END  -->
        </div>
    </#list>
</#macro>

<#macro eventListItem items>
    <#list items as item>
        <div class="hee-listing-item">
            <#--  Title  -->
            <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>

            <#--  Event details: START   -->
            <div class="hee-listing-item__details">
                <#--  Date  -->
                <@fmt.message key="event.date" var="dateLabel"/>
                <@newListItemRow key="${dateLabel}">
                    ${item.date.time?string['dd MMMM yyyy']}
                </@newListItemRow>

                <#--  Location  -->
                <@fmt.message key="event.location" var="locationLabel"/>
                <@newListItemRow key="${locationLabel}">
                    ${item.location}
                </@newListItemRow>
            </div>
            <#--  Event details: END   -->

            <#--  Description  -->
            <div class="hee-listing-item__summary">
                <@hst.html formattedText="${item.description!?replace('\n', '<br>')}"/>
            </div>
        </div>
    </#list>
</#macro>

<#macro publicationListItem items publicationTypeMap>
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound"/>
    <@fmt.message key="publication.publish_date" var="publishDateLabel"/>
    <@fmt.message key="publication.type" var="publicationTypeLabel"/>

    <#list items as item>
        <#assign pageURL=getInternalLinkURL(item)>

        <#if pageURL != pageNotFoundURL>
            <div class="hee-listing-item">
                <#--  Title  -->
                <h3><a href="${pageURL}">${item.title}</a></h3>

                <#--  Publication details: START   -->
                <div class="hee-listing-item__details">
                    <@newListItemRow key="${publicationTypeLabel}">
                        ${publicationTypeMap[item.publicationType]}
                    </@newListItemRow>

                    <@newListItemRow key="${publishDateLabel}">
                        ${item.publicationDate.time?string['dd MMMM yyyy']}
                    </@newListItemRow>
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
                    <a href="${strategyDocumentURL}" target="_blank">${item.title}</a>
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
                    <@newListItemRow key="${topicLabel}">
                        ${topics}
                    </@newListItemRow>
                </#if>

                <#--  Key terms  -->
                <#if item.keyTerms?size gt 0>
                    <@fmt.message key="searchbank.key_terms" var="keyTermsLabel"/>
                    <#assign keyTerms>${item.keyTerms?map(keyTerm -> keyTermMap[keyTerm]!)?join(', ')}</#assign>
                    <@newListItemRow key="${keyTermsLabel}">
                        ${keyTerms}
                    </@newListItemRow>
                </#if>

                <#--  Strings / Strategies  -->
                <#if strategyDocumentURL?has_content>
                    <@fmt.message key="searchbank.strategies" var="strategiesLabel"/>
                    <@newListItemRow key="${strategiesLabel}">
                        <a href="${strategyDocumentURL}" target="_blank"><@fmt.message key="searchbank.get_strategy"/></a>
                    </@newListItemRow>
                </#if>

                <#--  Search  -->
                <#if item.searchDocument?? && item.searchDocument.mimeType != 'application/vnd.hippo.blank'>
                    <@hst.link var="searchDocumentURL" hippobean=item.searchDocument>
                        <@hst.param name="forceDownload" value="true"/>
                    </@hst.link>

                    <@fmt.message key="searchbank.search" var="searchLabel"/>
                    <@newListItemRow key="${searchLabel}">
                        <a href="${searchDocumentURL}" target="_blank"><@fmt.message key="searchbank.get_search"/></a>
                    </@newListItemRow>
                </#if>

                <#--  Completed on  -->
                <#if item.completedDate??>
                    <@fmt.message key="searchbank.completed_on" var="completedOnLabel"/>
                    <@newListItemRow key="${completedOnLabel}">
                        ${item.completedDate.time?string['dd MMMM yyyy']}
                    </@newListItemRow>
                </#if>

                <#--  Provider  -->
                <#if item.provider?has_content>
                    <@fmt.message key="searchbank.provider" var="providerLabel"/>
                    <@newListItemRow key="${providerLabel}">
                        ${providerMap[item.provider]}
                    </@newListItemRow>
                </#if>
            </div>
            <#--  Search bank details: END  -->
        </div>
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

<#macro newListItemRow key>
    <div class="hee-listing-item__details__row">
        <span class="hee-listing-item__details__label">
            ${key}:
        </span>
        <span><#nested></span>
    </div>
</#macro>
