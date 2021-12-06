<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<@hst.setBundle basename="uk.nhs.hee.web.blogpost"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.BlogPost" -->
<#-- @ftlvariable name="categoriesValueListMap" type="java.util.Map" -->
<#-- @ftlvariable name="visibleComments" type="java.util.ArrayList<uk.nhs.hee.web.beans.BlogComment>" -->
<#-- @ftlvariable name="totalComments" type="java.lang.Integer" -->

<#if document??>

    <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <h1>${document.title}</h1>
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

                            ${publishedOnLabel} ${document.publicationDate.time?datetime?string['dd MMMM yyyy']}, ${byLabel} ${document.author}
                        </p>
                        <#-- End Author and published date -->

                        <#--Blog Categories -->
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
                        <#--End Blog Categories -->

                        <#--Blog Summary -->
                        <p class="nhsuk-body-l">
                            <@hst.html formattedText="${document.summary?replace('\n', '<br>')}"/>
                        </p>
                        <#-- End Blog Summary -->

                        <#-- Blog content -->
                        <#if document??>
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
                                    <#case "uk.nhs.hee.web.beans.TabsReference">
                                        <@hee.tabs tabs=block/>
                                        <#break>
                                    <#default>
                                </#switch>
                            </#list>
                        </#if>
                        <#-- End Blog content -->
                        <@hee.lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
                    </div>
                </section>
            </div>

            <#if document.rightHandBlocks??>
                <#list document.rightHandBlocks as block>
                    <#switch block.getClass().getName()>
                        <#case "uk.nhs.hee.web.beans.QuickLinks">
                                <@hee.quickLinks quickLinks=block/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.ContactCardReference">
                            <@hee.contactCard card=block.content/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.ExternalLinksCardReference">
                            <@hee.externalLinksCard card=block.externalLinksCard/>
                            <#break>
                        <#case "uk.nhs.hee.web.beans.FileLinksCardReference">
                            <@hee.fileLinksCard card=block.fileLinksCard/>
                            <#break>
                        <#default>
                    </#switch>
                </#list>
            </#if>
        </div>
    </article>

    <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <h2 data-anchorlinksignore="true">${document.comments?size} <@fmt.message key="comments"/></h2>

            <#if totalComments gt 0>
                <#assign datePattern = "d MMMM yyyy">
                <#list visibleComments as comment>
                    <div class="nhsuk-card nhsuk-u-padding-4 nhsuk-u-margin-bottom-3">
                        <h3 class="nhsuk-u-margin-bottom-3" data-anchorlinksignore="true">${comment.author.firstName} ${comment.author.lastName}</h3>
                        <div>
                            ${comment.message}
                        </div>
                        <div class="nhsuk-review-date nhsuk-u-margin-top-3">
                            <@fmt.message key="comment.posted_on"/> ${comment.postedDate.getTime()?date?string["${datePattern}"]}
                        </div>
                    </div>
                </#list>

                <#if totalComments gt 3>
                    <#if totalComments gt visibleComments?size>
                        <a href="?showAllComments=true"><@fmt.message key="comment.view_all"/> ${document.comments?size} <@fmt.message key="comments"/></a>
                    <#else>
                        <a href="?showAllComments=false"><@fmt.message key="comment.view_less"/> <@fmt.message key="comments"/></a>
                    </#if>
                </#if>
            </#if>
        </div>
    </div>
</#if>
