<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/internal-link.ftl">
<#include '../macros/file-links-card.ftl'>

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#assign datePattern = "d MMMM yyyy">
<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->
<#if document??>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <div class="nhsuk-width-container">
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
                                    <#if document.summary??>
                                        <p class="nhsuk-body-l"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                                    </#if>

                                    <div class="nhsuk-card">
                                        <div class="nhsuk-card__content">
                                            <h3 class="nhsuk-card__heading">Documents</h3>


                                            <#if document.webPublication?has_content>
                                                <ul class="nhsuk-resources__list">
                                                    <#list document.webPublication as publication>
                                                        <a class="nhsuk-related-links-card__link" href="${getInternalLinkURL(publication)}">
                                                            ${publication.title} - Web Version
                                                        </a>
                                                        <p>
                                                            Published: ${publication.publicationDate.getTime()?date?string["${datePattern}"]}
                                                            </br>Updated: ${publication.pageLastNextReview.lastReviewed.getTime()?date?string["${datePattern}"]}
                                                            </br>WEB
                                                            </br>${document.readTime}
                                                        </p>
                                                    </#list>
                                                </ul>
                                            </#if>

                                            <#if document.documentVersions?has_content>
                                                <ul class="nhsuk-resources__list">
                                                    <#list document.documentVersions as link>
                                                        <@hst.link var="fileURL" hippobean=link>
                                                            <@hst.param name="forceDownload" value="true"/>
                                                        </@hst.link>

                                                        <#assign docType>${docTypeByMimeType(link.mimeType)}</#assign>

                                                        <li>
                                                            <a class="nhsuk-resources__link" href="${fileURL}" title="${link.filename}  (opens in new window)">
                                                                ${link.filename?keep_before_last(".")} - ${link.filename?keep_after_last(".")?upper_case} Version
                                                                <span class="nhsuk-resources__tag nhsuk-resources__${docType}">${docType}</span><span class="nhsuk-resources__docSize">${link.lengthMB}MB</span>
                                                            </a>
                                                            <p>
                                                                Published: ${link.properties['jcr:created'].getTime()?date?string["${datePattern}"]}
                                                                </br>Updated: ${link.lastModified.getTime()?date?string["${datePattern}"]}
                                                                </br>${document.readTime}
                                                            </p>
                                                        </li>
                                                    </#list>
                                                </ul>
                                            </#if>
                                        </div>
                                    </div>


                                    <#if document.languageVersions?has_content>
                                        <div class="nhsuk-card">
                                            <div class="nhsuk-card__content">
                                                <h3 class="nhsuk-card__heading">Languages</h3>

                                                <ul class="nhsuk-resources__list">
                                                    <#list document.languageVersions as link>
                                                        <@hst.link var="fileURL" hippobean=link>
                                                            <@hst.param name="forceDownload" value="true"/>
                                                        </@hst.link>

                                                        <#assign docType>${docTypeByMimeType(link.mimeType)}</#assign>

                                                        <li>
                                                            <a class="nhsuk-resources__link" href="${fileURL}" title="${link.filename}  (opens in new window)">
                                                                ${link.filename?keep_before_last(".")} - ${link.filename?keep_after_last(".")?upper_case} Version
                                                                <span class="nhsuk-resources__tag nhsuk-resources__${docType}">${docType}</span><span class="nhsuk-resources__docSize">${link.lengthMB}MB</span>
                                                            </a>
                                                            <p>
                                                                Published: ${link.properties['jcr:created'].getTime()?date?string["${datePattern}"]}
                                                                </br>Updated: ${link.lastModified.getTime()?date?string["${datePattern}"]}
                                                                </br>${document.readTime}
                                                            </p>
                                                        </li>
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