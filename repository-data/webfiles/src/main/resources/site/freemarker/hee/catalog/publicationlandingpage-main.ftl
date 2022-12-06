<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/internal-link.ftl">
<#include '../utils/date-util.ftl'>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#--  Returns document format by extension  -->
<#function getDocumentFormat extension>
    <#switch extension?upper_case>
        <#case 'PDF'>
            <#assign documentFormat='Adobe Portable Document Format (PDF)'/>
            <#break>
        <#case 'DOC'>
            <#assign documentFormat='Microsoft Word'/>
            <#break>
        <#case 'DOCX'>
            <#assign documentFormat='Microsoft Word (OpenXML)'/>
            <#break>
        <#case 'PPT'>
            <#assign documentFormat='Microsoft PowerPoint'/>
            <#break>
        <#case 'PPTX'>
            <#assign documentFormat='Microsoft PowerPoint (OpenXML)'/>
            <#break>
        <#case 'XLS'>
            <#assign documentFormat='Microsoft Excel'/>
            <#break>
        <#case 'XLSX'>
            <#assign documentFormat='Microsoft Excel (OpenXML)'/>
            <#break>
        <#case 'ODS'>
            <#assign documentFormat='OpenDocument Spreadsheet'/>
            <#break>
        <#case 'ODT'>
            <#assign documentFormat='OpenDocument Text'/>
            <#break>
        <#default>
            <#assign documentFormat=extension?upper_case/>
            <#break>
    </#switch>

    <#return documentFormat>
</#function>

<#--  Renders document detail block which renders title as well  -->
<#macro docDetailBlockForDocLink docLink readTime>
    <@hst.link var="fileURL" hippobean=docLink>
        <@hst.param name="forceDownload" value="true"/>
    </@hst.link>

    <li>
        <a class="nhsuk-resources__link" href="${fileURL}" title="${docLink.filename}  (opens in new window)">
            ${docLink.filename?keep_before_last(".")} - ${getDocumentFormat(docLink.filename?keep_after_last("."))}
        </a>

        <@docDetailBlock
            publishedDate=docLink.properties['jcr:created']
            updatedDate=docLink.lastModified
            readTime=readTime
            fileType=docLink.filename?keep_after_last(".")
            fileLengthInKB=docLink.lengthKB />
    </li>
</#macro>

<#--  Renders document detail block  -->
<#macro docDetailBlock publishedDate updatedDate readTime fileType fileLengthInKB=0>
    <div class="nhsuk-review-date" style="margin-top:0px">
        <p class="nhsuk-body-s">
            Published: ${getDefaultFormattedDate(publishedDate)}<br>
            Updated: ${getDefaultFormattedDate(updatedDate)}<br>
            ${fileType?upper_case}${(fileLengthInKB > 0)?then(', ' + fileLengthInKB + 'kB', '')}<br>
            ${readTime} min read
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
                                                                updatedDate=publication.pageLastNextReview.lastReviewed
                                                                readTime=document.readTime
                                                                fileType='WEB' />
                                                        </li>
                                                    </#list>
                                                </ul>
                                            </#if>

                                            <#if document.documentVersions?has_content && !(document.documentVersions?size == 1 && document.documentVersions[0].mimeType == 'application/vnd.hippo.blank')>
                                                <ul class="nhsuk-resources__list">
                                                    <#list document.documentVersions as link>
                                                        <@docDetailBlockForDocLink docLink=link readTime=document.readTime />
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
                                                            <@docDetailBlockForDocLink docLink=link readTime=document.readTime />
                                                        </#if>
                                                    </#list>
                                                </ul>
                                            </div>
                                        </div>
                                     </#if>

                                </div>
                            </section>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    </div>
</#if>