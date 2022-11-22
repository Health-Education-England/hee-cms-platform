<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/internal-link.ftl">
<#include '../macros/file-links-card.ftl'>

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#assign datePattern = "d MMMM yyyy">
<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Report" -->
<#-- @ftlvariable name="landingPage" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->
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
                                    <#if document.contentBlocks??>
                                        <#list document.contentBlocks as block>
                                            <#switch block.getClass().getName()>
                                                <#case "org.hippoecm.hst.content.beans.standard.HippoFacetSelect">
                                                    <#if block.referencedBean?? && hst.isBeanType(block.referencedBean, 'uk.nhs.hee.web.beans.ImageSetWithCaption')>
                                                        <@hee.imageWithCaption imageWithCaption=block.referencedBean/>
                                                    </#if>
                                                    <#break>
                                                <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                                    <@hst.html hippohtml=block/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.RichTextReference">
                                                    <@hst.html hippohtml=block.richTextBlock.html/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.AnchorLinks">
                                                    <@hee.anchorLinks anchor=block/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.MediaEmbedReference">
                                                    <@hee.media media=block/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.TableReference">
                                                    <@hee.table table=block/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.TabsReference">
                                                    <@hee.tabs tabs=block/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.InsetReference">
                                                    <@hee.inset inset=block/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.ExpanderGroupReference">
                                                    <@hee.expander expander=block/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.WarningCalloutReference">
                                                    <@hee.warningCallout block=block/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.StatementCardReference">
                                                    <@hee.statementCard block=block/>
                                                    <#break>
                                                <#default>
                                            </#switch>
                                        </#list>
                                    </#if>
                                    <@hee.lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
                                </div>
                            </section>
                        </div>
                        <div class="nhsuk-grid-column-one-third">
                            <div class="nhsuk-card">
                                <div class="nhsuk-card__content">
                                    <h3 class="nhsuk-heading-m">Publication Info</h3>
                                    <div class="heeuk-link-inactive-state-s">
                                        Published: ${document.publicationDate.getTime()?date?string["${datePattern}"]}
                                    </div>

                                    <div class="heeuk-link-inactive-state-s">Updated: ${document.properties['hippostdpubwf:lastModificationDate'].getTime()?date?string["${datePattern}"]}</div>
                                    <#if landingPage??>
                                        <div class="heeuk-link-inactive-state-s">${landingPage.publicationType}</div>
                                        <#if landingPage.publicationProfessions?has_content>
                                            <div class="heeuk-link-inactive-state-s">
                                                <#list landingPage.publicationProfessions as profession>
                                                    <#if (profession?index > 0)>&nbsp;-&nbsp;</#if>
                                                    ${profession}
                                                </#list>
                                            </div>
                                        </#if>
                                        <#if landingPage.publicationTopics?has_content>
                                            <div class="heeuk-link-inactive-state-s">
                                                <#list landingPage.publicationTopics as topic>
                                                    <#if (topic?index > 0)>&nbsp;-&nbsp;</#if>
                                                    ${topic}
                                                </#list>
                                            </div>
                                        </#if>
                                    </#if>
                                </div>
                            </div>
                            <#if landingPage?? && landingPage.documentVersions?has_content>
                                <div class="nhsuk-card">
                                    <div class="nhsuk-card__content">

                                        <ul class="nhsuk-resources__list">
                                    <#list landingPage.documentVersions as link>
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
                                                <br/>Updated: ${link.lastModified.getTime()?date?string["${datePattern}"]}
                                                <br/>${landingPage.readTime}
                                            </p>
                                        </li>
                                    </#list>
                                </ul>
                                    </div>
                                </div>
                            </#if>

                            <#if landingPage?? && landingPage.languageVersions?has_content>
                                <div class="nhsuk-card">
                                    <div class="nhsuk-card__content">

                                        <ul class="nhsuk-resources__list">
                                    <#list landingPage.languageVersions as link>
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
                                                <br/>Updated: ${link.lastModified.getTime()?date?string["${datePattern}"]}
                                                <br/>${landingPage.readTime}
                                            </p>
                                        </li>
                                    </#list>
                                </ul>
                                    </div>
                                </div>
                            </#if>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    </div>
</#if>