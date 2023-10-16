<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/publication-partial-info.ftl">
<#include "../utils/date-util.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#macro docDetailBlockForDocLink assetLink>
    <#--  Builds file URL  -->
    <@hst.link var="fileURL" hippobean=assetLink.assetData>
        <@hst.param name="forceDownload" value="true"/>
    </@hst.link>

    <div class="hee-card--details__item">
        <a class="hee-resources__link" href="${fileURL}" title="${assetLink.title}">
            <div class="hee-resources__wrapper">
                <#--  File name  -->
                <span class="hee-resources__text">${assetLink.title}</span>

                <#--  File size: START  -->
                <#if (assetLink.assetData.asset.lengthMB > 1)>
                    <#assign docSize="${assetLink.assetData.asset.lengthMB?string('0.00')}MB">
                <#else>
                    <#assign docSize="${assetLink.assetData.asset.lengthKB?string('0')}KB">
                </#if>
                <span class="hee-resources__docSize">${docSize}</span>
                <#--  File size: END  -->
            </div>

            <#--  File type/format: START  -->
            <#assign fileExtn="${assetLink.assetData.asset.filename?keep_after_last('.')?lower_case}">
            <span class="hee-resources__tag hee-resources__${fileExtn}">${fileExtn?upper_case}</span>
            <#--  File type/format: END  -->
        </a>
    </div>
</#macro>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Report" -->
<#-- @ftlvariable name="landingPage" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->
<#if document??>
    <main id="maincontent" role="main" class="page page--rightbar">
        <#--  Main header: START  -->
        <div class="page__header">
            <div class="nhsuk-width-container">
                <#--  Title  -->
                <h1 id="publication-title">${document.title}</h1>
                <#--  Subtitle  -->
                <span class="nhsuk-caption-xl">${document.subtitle!}</span>
            </div>
        </div>
        <#--  Main header: END  -->

        <#--  Main content: START  -->
        <div class="page__layout nhsuk-width-container">
            <#--  Main sections: START  -->
            <div class="page__main">
                <div class="page__content">
                    <#--  Summary  -->
                    <#if document.summary?has_content>
                        <p class="nhsuk-body-l"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                    </#if>

                    <#--  Main content blocks: START  -->
                    <#if document.contentBlocks??>
                        <#list document.contentBlocks as block>
                            <#switch block.getClass().getName()>
                                <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                    <@hst.html hippohtml=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.ImageBlock">
                                    <@hee.imageBlock imageBlock=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.RichTextReference">
                                    <@hst.html hippohtml=block.richTextBlock.html/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.MediaEmbedReference">
                                    <@hee.media media=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.QuoteReference">
                                    <@hee.quote block=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.TableReference">
                                    <@hee.table table=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.ExpanderTableReference">
                                    <@hee.expanderTable table=block/>
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
                                <#case "uk.nhs.hee.web.beans.GoogleMapReference">
                                    <@hee.googleMap block=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.FeaturedContentReference">
                                    <@hee.featuredContent block=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.DetailsReference">
                                    <@hee.details block=block/>
                                    <#break>
                                <#default>
                            </#switch>
                        </#list>
                    </#if>
                    <#--  Main content blocks: END  -->
                </div>
            </div>
            <#--  Main sections: END  -->

            <#--  Right hand content blocks: START  -->
            <aside class="page__rightbar">
                <#--  TOC section: START  -->
                <div class="nhsuk-anchor-links hee-anchorlinks" data-toc-js="true" data-headings>
                    <h2 data-anchorlinksignore="true">Table of Contents</h2>
                </div>
                <#--  TOC section: END  -->

                <#--  Publication Info: START  -->
                <div class="hee-card hee-card--details">
                    <h3>Publication info</h3>

                    <#--  Published date  -->
                    <div class="hee-card--details__item">
                        <span>Published:</span> ${getDefaultFormattedDate(document.publicationDate)}
                    </div>

                    <#--  Updated date  -->
                    <#if document.pageLastNextReview.lastReviewed?has_content>
                        <div class="hee-card--details__item">
                            <span>Updated:</span> ${getDefaultFormattedDate(document.pageLastNextReview.lastReviewed)}
                        </div>
                    </#if>


                    <#if landingPage??>
                        <#-- Publication info partial [publication type, professions and topics] -->
                        <@publicationPartialInfo publicationListingPageURL=publicationListingPageURL!
                            publicationTypeTaxClass=landingPage.globalTaxonomyPublicationType!
                            professionTaxClass=landingPage.globalTaxonomyProfessions!
                            topicTaxClass=landingPage.globalTaxonomyHealthcareTopics!/>
                    </#if>
                </div>
                <#--  Publication Info: END  -->

                <#--  Alternative and language document versions: START  -->

                <#--  Alternative document versions  -->
                <#if landingPage?? && landingPage.assetVersionsContent?has_content>
                    <div class="hee-card hee-card--details">
                        <h3>Alternative versions</h3>
                        <#list landingPage.assetVersionsContent as assetLink>
                            <@docDetailBlockForDocLink assetLink=assetLink/>
                        </#list>
                    </div>
                </#if>

                <#assign has_languages =false>
                <#if landingPage?? && landingPage.languageVersionsContent?has_content>
                    <div class="hee-card hee-card--details">
                        <h3>Languages</h3>
                        <#list landingPage.languageVersionsContent as asset>
                                <@docDetailBlockForDocLink assetLink=asset/>
                        </#list>
                    </div>
                </#if>
                <#--  Alternative and language document versions: END  -->
            </aside>
            <#--  Right hand content blocks: END  -->
        </div>
        <#--  Main content: END  -->
        <@hee.stickyTOC active="true"/>
    </main>
</#if>