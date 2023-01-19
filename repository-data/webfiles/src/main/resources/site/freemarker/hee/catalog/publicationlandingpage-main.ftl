<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/author-cards.ftl">
<#include "../macros/internal-link.ftl">
<#include '../utils/author-util.ftl'>
<#include '../utils/date-util.ftl'>
<#include "../utils/document-formats.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->

<@hst.setBundle basename="uk.nhs.hee.web.global,uk.nhs.hee.web.blogpost"/>

<#--  Renders document detail block which renders title as well  -->
<#macro docDetailBlockForDocLink docLink>
    <@hst.link var="fileURL" hippobean=docLink>
        <@hst.param name="forceDownload" value="true"/>
    </@hst.link>

    <@docIcon fileType=docLink.filename?keep_after_last(".")/>
    <div class="hee-publication-doc">
        <div class="hee-publication-doc__details">
            <h3>
                <a class="nhsuk-resources__link" href="${fileURL}" title="${docLink.filename}">
                    ${docLink.filename?keep_before_last(".")} - ${getDocumentFormat(docLink.filename?keep_after_last("."))}
                </a>
            </h3>

            <@docDetailBlock
                publishedDate=docLink.properties['jcr:created']
                updatedDate=docLink.lastModified
                fileType=docLink.filename?keep_after_last(".")
                fileLengthInKB=docLink.lengthKB />
        </div>
    </div>
</#macro>

<#--  Renders document detail block  -->
<#macro docDetailBlock publishedDate updatedDate fileType fileLengthInKB=0>
    <span>Published: ${getDefaultFormattedDate(publishedDate)}</span>
    <#if updatedDate?has_content><span>Updated: ${getDefaultFormattedDate(updatedDate)}</span></#if>
    <span>${fileType?upper_case}${(fileType = 'WEB')?then('',', ' + fileLengthInKB + 'kB')}</span>

</#macro>

<#macro docIcon fileType>
    <div class="hee-publication-doc__wrapper">
        <div class="hee-publication-doc__icon">
            <div class="hee-publication-doc__icon__page"></div>
            <div class="hee-publication-doc__icon__corner"></div>
        </div>
        <div class="hee-publication-doc__icon__title">${fileType}</div>

    </div>
</#macro>

<#if document??>
    <main id="maincontent" role="main" class="page page--rightbar">
        <#--  Renders title & subtitle  -->
        <div class="page__header">
            <div class="nhsuk-width-container">
                <h1>${document.title}</h1>
                <span class="nhsuk-caption-xl">${document.subtitle!}</span>
            </div>
        </div>

        <div class="nhsuk-width-container">
            <div class="page__layout">
                <div class="page__main">
                    <#-- Author and published date -->
                    <p class="nhsuk-body-s nhsuk-u-secondary-text-color">
                        <@fmt.message key="publication.by" var="byLabel" />
                        <@fmt.message key="published.on" var="publishedOnLabel"/>

                        <#assign commaSeparatedAuthorNames>${getCommaSeparatedAuthorNames(document.authors)}</#assign>

                        ${publishedOnLabel} ${document.publicationDate.time?datetime?string['dd MMMM yyyy']}<#if commaSeparatedAuthorNames?has_content>, ${byLabel} ${commaSeparatedAuthorNames}</#if>
                    </p>
                    <#-- End Author and published date -->

                    <#--  Renders summary  -->
                    <#if document.summary??>
                        <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                    </#if>

                    <#--  Renders documents  -->
                    <h2 class="nhsuk-card__heading">Documents</h2>

                    <#if document.webPublications?has_content>
                        <#list document.webPublications as publication>
                            <@docIcon fileType='WEB'/>
                            <div class="hee-publication-doc">
                                <div class="hee-publication-doc__details">
                                    <h3>
                                        <a class="nhsuk-resources__link" href="${getInternalLinkURL(publication)}">
                                            ${publication.title} - Web
                                        </a>
                                    </h3>
                                    <@docDetailBlock
                                        publishedDate=publication.publicationDate
                                        updatedDate=publication.pageLastNextReview.lastReviewed!
                                        fileType='WEB' />
                                </div>
                            </div>
                        </#list>
                    </#if>

                    <#if document.documentVersions?has_content && !(document.documentVersions?size == 1 && document.documentVersions[0].mimeType == 'application/vnd.hippo.blank')>
                        <#list document.documentVersions as link>
                            <@docDetailBlockForDocLink docLink=link />
                        </#list>
                    </#if>

                    <#--  Renders language documents  -->
                    <#if document.languageVersions?has_content && !(document.languageVersions?size == 1 && document.languageVersions[0].mimeType == 'application/vnd.hippo.blank')>
                        <h2 class="nhsuk-card__heading">Languages</h2>
                        <#list document.languageVersions as link>
                            <#if link?? && link.mimeType != 'application/vnd.hippo.blank'>
                                <@docDetailBlockForDocLink docLink=link />
                            </#if>
                        </#list>
                     </#if>
                    <#--  Author cards  -->
                    <@authorCards authors=document.authors/>
                </div>

                <aside class="page__rightbar">
                    <div class="hee-card hee-card--details">
                        <h3 class="nhsuk-heading-m">Publication Info</h3>
                        <div class="hee-card--details__item">
                            <span>Published: </span> ${getDefaultFormattedDate(document.publicationDate)}
                        </div>

                        <div class="hee-card--details__item">
                            <span>Updated: </span> ${getDefaultFormattedDate(document.updatedDate)}
                        </div>

                        <div class="hee-card--details__item">
                            <span>Publication Type: </span>
                            <#if publicationListingPageURL?has_content>
                                <a href=${publicationListingPageURL}?publicationType=${document.publicationType}>${publicationTypeMap[document.publicationType]}</a>
                            <#else>
                                ${publicationTypeMap[document.publicationType]}
                            </#if>
                        </div>

                        <#if document.publicationProfessions?has_content>
                            <div class="hee-card--details__item">
                                <span>Professions: </span>
                                <#if publicationListingPageURL?has_content>
                                    <#list document.publicationProfessions as profession>
                                        <a href=${publicationListingPageURL}?publicationProfession=${profession}>${publicationProfessionMap[profession]}</a><#sep>, </#sep>
                                    </#list>
                                <#else>
                                    <#list document.publicationProfessions as profession>
                                        ${publicationProfessionMap[profession]}<#sep>, </#sep>
                                    </#list>
                                </#if>
                            </div>
                         </#if>

                        <#if document.publicationTopics?has_content>
                            <div class="hee-card--details__item">
                                <span>Topics: </span>
                                <#if publicationListingPageURL?has_content>
                                    <#list document.publicationTopics as topic>
                                        <a href=${publicationListingPageURL}?publicationTopic=${topic}>${publicationTopicMap[topic]}</a><#sep>, </#sep>
                                    </#list>
                                <#else>
                                    <#list document.publicationTopics as topic>
                                        ${publicationTopicMap[topic]}<#sep>, </#sep>
                                    </#list>
                                </#if>
                            </div>
                        </#if>

                        <#--  Read time  -->
                        <span>Estimated reading time:</span> ${document.readTime} mins
                    </div>
                </aside>
            </div>
        </div>
    </main>
</#if>