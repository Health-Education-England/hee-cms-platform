<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/author-cards.ftl">
<#include '../utils/author-util.ftl'>
<#import "../macros/components.ftl" as hee>
<#include "../macros/micro-hero.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.global,uk.nhs.hee.web.blogpost,uk.nhs.hee.web.contact"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.BlogPost" -->
<#-- @ftlvariable name="categoriesValueListMap" type="java.util.Map" -->
<#-- @ftlvariable name="visibleComments" type="java.util.ArrayList<uk.nhs.hee.web.beans.BlogComment>" -->
<#-- @ftlvariable name="totalComments" type="java.lang.Integer" -->

<#if document??>
    <#--  Main header: START  -->
    <div class="page__header${(document.microHero?has_content)?then(' has-microhero', '')}">
        <#--  Micro hero  -->
        <#if document.microHero??>
            <@microHero microHeroImage=document.microHero />
        </#if>

        <div class="nhsuk-width-container">
            <#--  Title  -->
            <h1>${document.title}</h1>
        </div>
    </div>
    <#--  Main header: END  -->

    <#--  Main content: START  -->
    <div class="page__layout nhsuk-width-container">
        <#--  Main sections: START  -->
        <div class="page__main">
            <div class="page__content">
                <#-- Author and published date: START -->
                <p class="nhsuk-body-s nhsuk-u-secondary-text-color">
                    <@fmt.message key="publication.by" var="byLabel" />
                    <@fmt.message key="published.on" var="publishedOnLabel"/>

                    <#if document.authors?has_content>
                        <#assign commaSeparatedAuthorNames>${getCommaSeparatedAuthorNames(document.authors)}</#assign>
                    <#else>
                        <#assign commaSeparatedAuthorNames>${document.author!}</#assign>
                    </#if>

                    ${publishedOnLabel} ${document.publicationDate.time?datetime?string['dd MMMM yyyy']}, ${byLabel} ${commaSeparatedAuthorNames}
                </p>
                <#-- Author and published date: END -->

                <#--  Blog categories collection link(s): START  -->
                <#if categoriesValueListMap?has_content>
                    <p class="nhsuk-body-s nhsuk-u-secondary-text-color nhsuk-u-margin-bottom-7">
                        <#if blogListingPageURL?has_content>
                            <#list categoriesValueListMap as key, value>
                                <a href=${blogListingPageURL}?category=${key}>${value}</a><#sep>, </#sep>
                            </#list>
                        <#else>
                            <#list categoriesValueListMap?values as value>
                                ${value}<#sep>, </#sep>
                            </#list>
                        </#if>
                    </p>
                </#if>
                <#--  Blog categories collection link(s): END  -->

                <#--  Summary  -->
                <p class="nhsuk-body-l">
                    <@hst.html formattedText="${document.summary?replace('\n', '<br>')}"/>
                </p>

                <#--  Main content blocks: START  -->
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
                        <#case "uk.nhs.hee.web.beans.InsetReference">
                            <@hee.inset inset=block/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.Contact">
                            <@hee.contact block=block/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.BlockLinksReference">
                            <@hee.blockLinks block=block/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.AnchorLinks">
                            <@hee.anchorLinks anchor=block/>
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
                        <#case "uk.nhs.hee.web.beans.ContentCards">
                            <@hee.contentCards contentCards=block size="half"/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.GoogleMapReference">
                            <@hee.googleMap block=block/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.WarningCalloutReference">
                            <@hee.warningCallout block=block/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.FeaturedContentReference">
                            <@hee.featuredContent block=block/>
                            <#break>
                        <#default>
                    </#switch>
                </#list>
                <#--  Main content blocks: END  -->

                <#--  Author cards  -->
                <@authorCards authors=document.authors hideAuthorContactDetails=document.hideAuthorContactDetails!false/>

                <#-- Last & next reviewed dates -->
                <@hee.lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
            </div>
        </div>
        <#--  Main sections: END  -->

        <#--  Sidebar sections: START  -->
        <#if document.rightHandBlocks?? && document.rightHandBlocks?size gt 0>
            <#--  Right hand content blocks: START  -->
            <aside class="page__rightbar">
                <#list document.rightHandBlocks as block>
                    <#switch block.getClass().getName()>
                        <#case "uk.nhs.hee.web.beans.QuickLinks">
                            <@hee.quickLinks quickLinks=block/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.ContactCardReference">
                            <@hee.contactCard contact=block.content/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.ContactCardWithDescriptionReference">
                            <@hee.contactCardWithDescription contactWithDescription=block.contactCardWithDescription/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.ExternalLinksCardReference">
                            <@hee.externalLinksCard card=block.externalLinksCard/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.FileLinksCardReference">
                            <@hee.fileLinksCard card=block.fileLinksCard/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.InternalLinksCardReference">
                            <@hee.internalLinksCard card=block.internalLinksCard/>
                            <#break>
                        <#default>
                    </#switch>
                </#list>
            </aside>
            <#--  Right hand content blocks: END  -->
        </#if>
        <#--  Sidebar sections: END  -->
    </div>
    <#--  Main content: END  -->

    <#--  <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <h2 data-anchorlinksignore="true">${totalComments} <@fmt.message key="comments"/></h2>

            <#if totalComments gt 0>
                <#assign datePattern = "d MMMM yyyy">
                <#list visibleComments as comment>
                    <div class="nhsuk-card nhsuk-u-padding-4 nhsuk-u-margin-bottom-3">
                        <h3 class="nhsuk-u-margin-bottom-3" data-anchorlinksignore="true">${comment.author.firstName} ${comment.author.lastName}</h3>
                        <div>
                            ${comment.message}
                        </div>
                        <div class="hee-review-date nhsuk-u-margin-top-3">
                            <@fmt.message key="comment.posted_on"/> ${comment.postedDate.getTime()?date?string["${datePattern}"]}
                        </div>
                    </div>
                </#list>

                <#if totalComments gt 3>
                    <#if totalComments gt visibleComments?size>
                        <a href="?showAllComments=true"><@fmt.message key="comment.view_all"/> ${totalComments} <@fmt.message key="comments"/></a>
                    <#else>
                        <a href="?showAllComments=false"><@fmt.message key="comment.view_less"/> <@fmt.message key="comments"/></a>
                    </#if>
                </#if>
            </#if>
        </div>
    </div>  -->
</#if>
