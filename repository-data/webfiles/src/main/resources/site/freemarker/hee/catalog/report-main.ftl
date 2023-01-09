<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../utils/date-util.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#macro docDetailBlockForDocLink docLink>
    <@hst.link var="fileURL" hippobean=docLink>
        <@hst.param name="forceDownload" value="true"/>
    </@hst.link>
    <#assign docType>${docLink.filename?keep_after_last(".")}</#assign>
    <li>
        <a class="nhsuk-resources__link" href="${fileURL}" title="${docLink.filename}">
            ${docLink.filename?keep_before_last(".")}<span class="nhsuk-resources__tag nhsuk-resources__${docType}">${docType}</span>
        </a>
    </li>
</#macro>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Report" -->
<#-- @ftlvariable name="landingPage" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->

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
                                                <#case "uk.nhs.hee.web.beans.HeadingsTOC">
                                                    <@hee.headingsTOC block=block/>
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
                                        <strong>Published: </strong> ${getDefaultFormattedDate(document.publicationDate)}
                                    </div><br>

                                    <#if document.pageLastNextReview.lastReviewed?has_content>
                                        <div class="heeuk-link-inactive-state-s">
                                            <strong>Updated: </strong> ${getDefaultFormattedDate(document.pageLastNextReview.lastReviewed)}
                                        </div><br>
                                    </#if>

                                    <#if landingPage??>
                                        <div class="heeuk-link-inactive-state-s">
                                            <strong>Topics: </strong>

                                            <#--  Publication professions  -->
                                            <#if landingPage.publicationProfessions?has_content>
                                                <#if publicationListingPageURL?has_content>
                                                    <#list landingPage.publicationProfessions as profession>
                                                        <a href=${publicationListingPageURL}?publicationProfession=${profession}>${publicationProfessionMap[profession]}</a><#sep>, </#sep>
                                                    </#list>
                                                <#else>
                                                    <#list landingPage.publicationProfessions as profession>
                                                        ${publicationProfessionMap[profession]}<#sep>, </#sep>
                                                    </#list>
                                                </#if>
                                            </#if>

                                            <#--  Publication topics  -->
                                            <#if landingPage.publicationTopics?has_content>
                                                <#if publicationListingPageURL?has_content>
                                                    <#list landingPage.publicationTopics as topic>
                                                        <a href=${publicationListingPageURL}?publicationTopic=${topic}>${publicationTopicMap[topic]}</a><#sep>, </#sep>
                                                    </#list>
                                                <#else>
                                                    <#list landingPage.publicationTopics as topic>
                                                        ${publicationTopicMap[topic]}<#sep>, </#sep>
                                                    </#list>
                                                </#if>
                                            </#if>
                                        </div><br>

                                        <#--  Read time  -->
                                        <strong>Estimated reading time:</strong> ${landingPage.readTime} mins
                                    </#if>
                                </div>
                            </div>
                            <#assign has_documents =false>
                            <#if landingPage?? && landingPage.documentVersions?has_content>
                                <#list landingPage.documentVersions as link>
                                    <#if link?? && link.mimeType != 'application/vnd.hippo.blank'>
                                        <#assign has_documents=true>
                                        <#break>
                                    </#if>
                                </#list>
                                <#if has_documents!true>
                                    <div class="nhsuk-card">
                                        <div class="nhsuk-card__content">
                                            <h3 class="nhsuk-heading-m">Alternative versions</h3>
                                            <ul class="nhsuk-resources__list">
                                                <#list landingPage.documentVersions as link>
                                                    <#if link?? && link.mimeType != 'application/vnd.hippo.blank'>
                                                        <@docDetailBlockForDocLink docLink=link/>
                                                    </#if>
                                                </#list>
                                            </ul>
                                        </div>
                                    </div>
                                </#if>
                            </#if>
                            <#assign has_languages =false>
                            <#if landingPage?? && landingPage.languageVersions?has_content>
                                <#list landingPage.languageVersions as link>
                                    <#if link?? && link.mimeType != 'application/vnd.hippo.blank'>
                                        <#assign has_languages =true>
                                        <#break>
                                    </#if>
                                </#list>
                                <#if has_languages!true>
                                    <div class="nhsuk-card">
                                        <div class="nhsuk-card__content">
                                            <h3 class="nhsuk-heading-m">Languages</h3>
                                            <ul class="nhsuk-resources__list">
                                                <#list landingPage.languageVersions as link>
                                                    <#if link?? && link.mimeType != 'application/vnd.hippo.blank'>
                                                        <@docDetailBlockForDocLink docLink=link/>
                                                    </#if>
                                                </#list>
                                            </ul>
                                        </div>
                                    </div>
                                </#if>
                            </#if>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    </div>
</#if>