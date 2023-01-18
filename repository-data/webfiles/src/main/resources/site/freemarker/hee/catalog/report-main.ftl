<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#import "../macros/back-link.ftl">
<#include "../utils/date-util.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#macro docDetailBlockForDocLink docLink>
    <@hst.link var="fileURL" hippobean=docLink>
        <@hst.param name="forceDownload" value="true"/>
    </@hst.link>
    <#assign docType>${docLink.filename?keep_after_last(".")}</#assign>
    <li>
        <a class="hee-resources__link" href="${fileURL}" title="${docLink.filename}">
            <span class="hee-resource__text">${docLink.filename?keep_before_last(".")}</span><span class="hee-resources__tag hee-resources__${docType}">${docType}</span>
        </a>
    </li>
</#macro>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Report" -->
<#-- @ftlvariable name="landingPage" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->

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
                        <div class="page__content">
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
                        </div>
                        <@hee.lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
                    </div>
                    <aside class="page__rightbar">
                        <div class="hee-card hee-card--details">
                            <h3 class="nhsuk-heading-m">Publication Info</h3>
                            <div class="hee-card--details__item">
                                <span>Published: </span> ${getDefaultFormattedDate(document.publicationDate)}
                            </div>

                            <#if document.pageLastNextReview.lastReviewed?has_content>
                                <div class="hee-card--details__item">
                                    <span>Updated: </span> ${getDefaultFormattedDate(document.pageLastNextReview.lastReviewed)}
                                </div>
                            </#if>


                            <#if landingPage??>
                                <div class="hee-card--details__item">
                                    <span>Publication Type: </span>
                                    <#if publicationListingPageURL?has_content>
                                        <a href=${publicationListingPageURL}?publicationType=${landingPage.publicationType}>${publicationTypeMap[landingPage.publicationType]}</a>
                                    <#else>
                                        ${publicationTypeMap[landingPage.publicationType]}
                                    </#if>
                                </div><br>
                                <#if landingPage.publicationProfessions?has_content>
                                    <div class="hee-card--details__item">
                                        <span>Professions: </span>
                                        <#if publicationListingPageURL?has_content>
                                            <#list landingPage.publicationProfessions as profession>
                                                <a href=${publicationListingPageURL}?publicationProfession=${profession}>${publicationProfessionMap[profession]}</a><#sep>, </#sep>
                                            </#list>
                                        <#else>
                                            <#list landingPage.publicationProfessions as profession>
                                                ${publicationProfessionMap[profession]}<#sep>, </#sep>
                                            </#list>
                                        </#if>
                                    </div><br>
                                </#if>
                                <#if landingPage.publicationTopics?has_content>
                                    <div class="hee-card--details__item">
                                        <span>Topics: </span>
                                        <#if publicationListingPageURL?has_content>
                                            <#list landingPage.publicationTopics as topic>
                                                <a href=${publicationListingPageURL}?publicationTopic=${topic}>${publicationTopicMap[topic]}</a><#sep>, </#sep>
                                            </#list>
                                        <#else>
                                            <#list landingPage.publicationTopics as topic>
                                                ${publicationTopicMap[topic]}<#sep>, </#sep>
                                            </#list>
                                        </#if>
                                    </div>
                                </#if>
                            </#if>
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
                                <div class="hee-card hee-card--details">
                                    <h3 class="nhsuk-heading-m">Alternative versions</h3>
                                    <ul class="hee-card--details__item">
                                        <#list landingPage.documentVersions as link>
                                            <#if link?? && link.mimeType != 'application/vnd.hippo.blank'>
                                                <@docDetailBlockForDocLink docLink=link/>
                                            </#if>
                                        </#list>
                                    </ul>
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
                                <div class="hee-card hee-card--details">
                                    <h3 class="nhsuk-heading-m">Languages</h3>
                                    <ul class="hee-card--details__item">
                                        <#list landingPage.languageVersions as link>
                                            <#if link?? && link.mimeType != 'application/vnd.hippo.blank'>
                                                <@docDetailBlockForDocLink docLink=link/>
                                            </#if>
                                        </#list>
                                    </ul>
                                </div>
                            </#if>
                        </#if>
                    </aside>
                </div>
            </div>
        </main>
</#if>