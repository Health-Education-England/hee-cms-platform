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

    <li>
        <a class="nhsuk-resources__link" href="${fileURL}" title="${docLink.filename}">
            ${docLink.filename?keep_before_last(".")} - ${getDocumentFormat(docLink.filename?keep_after_last("."))}
        </a>

        <@docDetailBlock
            publishedDate=docLink.properties['jcr:created']
            updatedDate=docLink.lastModified
            fileType=docLink.filename?keep_after_last(".")
            fileLengthInKB=docLink.lengthKB />
    </li>
</#macro>

<#--  Renders document detail block  -->
<#macro docDetailBlock publishedDate updatedDate fileType fileLengthInKB=0>
    <div class="nhsuk-review-date" style="margin-top:0px">
        <p class="nhsuk-body-s">
            Published: ${getDefaultFormattedDate(publishedDate)}<br>
            <#if updatedDate?has_content>Updated: ${getDefaultFormattedDate(updatedDate)}<br></#if>
            ${fileType?upper_case}${(fileType = 'WEB')?then('',', ' + fileLengthInKB + 'kB')}
        </p>
    </div>
</#macro>

<#if document??>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <div class="nhsuk-width-container">

                <#--  Renders title & subtitle  -->
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-two-thirds">
                        <h1>
                            <span role="text">${document.title}
                                <span class="nhsuk-caption-xl nhsuk-caption--bottom">
                                    ${document.subtitle!}
                                </span>
                            </span>
                        </h1>
                    </div>
                </div>

                <article>
                    <div class="nhsuk-grid-row">
                        <div class="nhsuk-grid-column-two-thirds">
                            <section class="nhsuk-page-content__section-one">
                                <div class="nhsuk-page-content">

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
                                        <p class="nhsuk-body-l"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                                    </#if>

                                    <#--  Renders documents  -->
                                    <div class="nhsuk-card">
                                        <div class="nhsuk-card__content">
                                            <h3 class="nhsuk-card__heading">Documents</h3>

                                            <#if document.webPublications?has_content>
                                                <ul class="nhsuk-resources__list">
                                                    <#list document.webPublications as publication>
                                                        <li>
                                                            <a class="nhsuk-resources__link" href="${getInternalLinkURL(publication)}">
                                                                ${publication.title} - Web
                                                            </a>
                                                            <@docDetailBlock
                                                                publishedDate=publication.publicationDate
                                                                updatedDate=publication.pageLastNextReview.lastReviewed!
                                                                fileType='WEB' />
                                                        </li>
                                                    </#list>
                                                </ul>
                                            </#if>

                                            <#if document.documentVersions?has_content && !(document.documentVersions?size == 1 && document.documentVersions[0].mimeType == 'application/vnd.hippo.blank')>
                                                <ul class="nhsuk-resources__list">
                                                    <#list document.documentVersions as link>
                                                        <@docDetailBlockForDocLink docLink=link />
                                                    </#list>
                                                </ul>
                                            </#if>
                                        </div>
                                    </div>

                                    <#--  Renders language documents  -->
                                    <#if document.languageVersions?has_content && !(document.languageVersions?size == 1 && document.languageVersions[0].mimeType == 'application/vnd.hippo.blank')>
                                        <div class="nhsuk-card">
                                            <div class="nhsuk-card__content">
                                                <h3 class="nhsuk-card__heading">Languages</h3>

                                                <ul class="nhsuk-resources__list">
                                                    <#list document.languageVersions as link>
                                                        <#if link?? && link.mimeType != 'application/vnd.hippo.blank'>
                                                            <@docDetailBlockForDocLink docLink=link />
                                                        </#if>
                                                    </#list>
                                                </ul>
                                            </div>
                                        </div>
                                     </#if>

                                    <#--  Author cards  -->
                                    <@authorCards authors=document.authors/>
                                </div>
                            </section>
                        </div>
                        <div class="nhsuk-grid-column-one-third">
                            <div class="nhsuk-card">
                                <div class="nhsuk-card__content">
                                    <h3 class="nhsuk-heading-m">Publication Info</h3>
                                    <div class="heeuk-link-inactive-state-s">
                                        <strong>Published: </strong> ${getDefaultFormattedDate(document.publicationDate)}
                                    </div><br>

                                    <div class="heeuk-link-inactive-state-s">
                                        <strong>Updated: </strong> ${getDefaultFormattedDate(document.updatedDate)}
                                    </div><br>

                                    <div class="heeuk-link-inactive-state-s">
                                        <strong>Publication Type: </strong>
                                        <#if publicationListingPageURL?has_content>
                                            <a href=${publicationListingPageURL}?publicationType=${document.publicationType}>${publicationTypeMap[document.publicationType]}</a>
                                        <#else>
                                            ${publicationTypeMap[document.publicationType]}
                                        </#if>
                                    </div><br>

                                    <#if document.publicationProfessions?has_content>
                                        <div class="heeuk-link-inactive-state-s">
                                            <strong>Professions: </strong>
                                            <#if publicationListingPageURL?has_content>
                                                <#list document.publicationProfessions as profession>
                                                    <a href=${publicationListingPageURL}?publicationProfession=${profession}>${publicationProfessionMap[profession]}</a><#sep>, </#sep>
                                                </#list>
                                            <#else>
                                                <#list document.publicationProfessions as profession>
                                                    ${publicationProfessionMap[profession]}<#sep>, </#sep>
                                                </#list>
                                            </#if>
                                        </div><br>
                                     </#if>

                                    <#if document.publicationTopics?has_content>
                                        <div class="heeuk-link-inactive-state-s">
                                            <strong>Topics: </strong>
                                            <#if publicationListingPageURL?has_content>
                                                <#list document.publicationTopics as topic>
                                                    <a href=${publicationListingPageURL}?publicationTopic=${topic}>${publicationTopicMap[topic]}</a><#sep>, </#sep>
                                                </#list>
                                            <#else>
                                                <#list document.publicationTopics as topic>
                                                    ${publicationTopicMap[topic]}<#sep>, </#sep>
                                                </#list>
                                            </#if>
                                        </div><br>
                                    </#if>

                                    <#--  Read time  -->
                                    <strong>Estimated reading time:</strong> ${document.readTime} mins
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    </div>
</#if>