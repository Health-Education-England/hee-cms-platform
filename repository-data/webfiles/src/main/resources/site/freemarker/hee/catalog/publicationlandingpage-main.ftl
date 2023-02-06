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

    <div class="hee-publication-doc">
        <@docIcon fileType=docLink.filename?keep_after_last(".")?upper_case/>
        <div class="hee-publication-doc__details">
            <h3>
                <a href="${fileURL}" title="${docLink.filename}">
                    ${docLink.filename?keep_before_last(".")} - ${getDocumentFormat(docLink.filename?keep_after_last("."))}
                </a>
            </h3>

            <@docDetailBlockPartial
                publishedDate=docLink.properties['jcr:created']
                updatedDate=docLink.lastModified
                fileType=docLink.filename?keep_after_last(".")
                fileLengthInKB=docLink.lengthKB />
        </div>
    </div>
</#macro>

<#--  Renders document detail block partial i.e. renders document published, updated, type and size  -->
<#macro docDetailBlockPartial publishedDate updatedDate fileType fileLengthInKB=0>
    <span>Published: ${getDefaultFormattedDate(publishedDate)}</span>
    <#if updatedDate?has_content><span>Updated: ${getDefaultFormattedDate(updatedDate)}</span></#if>
    <span>${fileType?upper_case}${(fileType = 'WEB')?then('',', ' + fileLengthInKB + 'kB')}</span>
</#macro>

<#--  Renders document icon block  -->
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
        <#--  Title & subtitle  -->
        <div class="page__header">
            <div class="nhsuk-width-container">
                <h1>${document.title}</h1>
                <span class="nhsuk-caption-xl">${document.subtitle!}</span>
            </div>
        </div>

        <div class="nhsuk-width-container">
            <div class="page__layout">
                <div class="page__main">
                    <#--  Summary  -->
                    <#if document.summary?has_content>
                        <p class="nhsuk-body-l"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                    </#if>

                    <#--  Documents section: START  -->
                    <h2>Documents</h2>

                    <#--  Publication pages [WEB versions]  -->
                    <#if document.webPublications?has_content>
                        <#list document.webPublications as publication>
                            <div class="hee-publication-doc">
                                <@docIcon fileType='WEB'/>
                                <div class="hee-publication-doc__details">
                                    <h3>
                                        <a href="${getInternalLinkURL(publication)}">${publication.title} - Web</a>
                                    </h3>
                                    <@docDetailBlockPartial
                                        publishedDate=publication.publicationDate
                                        updatedDate=publication.pageLastNextReview.lastReviewed!
                                        fileType='WEB' />
                                </div>
                            </div>
                        </#list>
                    </#if>

                    <#--  Document versions  -->
                    <#if document.documentVersions?has_content && !(document.documentVersions?size == 1 && document.documentVersions[0].mimeType == 'application/vnd.hippo.blank')>
                        <#list document.documentVersions as link>
                            <@docDetailBlockForDocLink docLink=link />
                        </#list>
                    </#if>

                    <#--  Language versions  -->
                    <#if document.languageVersions?has_content && !(document.languageVersions?size == 1 && document.languageVersions[0].mimeType == 'application/vnd.hippo.blank')>
                        <h2>Languages</h2>
                        <#list document.languageVersions as link>
                            <#if link?? && link.mimeType != 'application/vnd.hippo.blank'>
                                <@docDetailBlockForDocLink docLink=link />
                            </#if>
                        </#list>
                     </#if>
                     <#--  Documents section: END  -->

                    <#--  Author cards  -->
                    <@authorCards authors=document.authors hideAuthorContactDetails=document.hideAuthorContactDetails!false/>
                </div>

                <aside class="page__rightbar">
                    <div class="hee-card hee-card--details">
                        <h3>Publication Info</h3>

                        <#--  Published date  -->
                        <div class="hee-card--details__item">
                            <span>Published:</span> ${getDefaultFormattedDate(document.publicationDate)}
                        </div>

                        <#--  Updated date  -->
                        <div class="hee-card--details__item">
                            <span>Updated:</span> ${getDefaultFormattedDate(document.updatedDate)}
                        </div>

                        <#--  Publication type  -->
                        <div class="hee-card--details__item">
                            <span>Publication Type:</span>
                            <#if publicationListingPageURL?has_content>
                                <a href=${publicationListingPageURL}?publicationType=${document.publicationType}>${publicationTypeMap[document.publicationType]}</a>
                            <#else>
                                ${publicationTypeMap[document.publicationType]}
                            </#if>
                        </div>

                        <#--  Publication professions  -->
                        <#if document.publicationProfessions?has_content>
                            <div class="hee-card--details__item">
                                <span>Professions:</span>
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

                        <#--  Publication topics  -->
                        <#if document.publicationTopics?has_content>
                            <div class="hee-card--details__item">
                                <span>Topics:</span>
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
                        <div class="hee-card--details__item">
                            <span>Estimated reading time:</span> ${document.readTime} mins
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </main>
</#if>