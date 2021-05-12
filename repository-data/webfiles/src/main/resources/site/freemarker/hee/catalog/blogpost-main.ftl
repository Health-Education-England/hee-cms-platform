<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<@hst.setBundle basename="uk.nhs.hee.web.blogpost"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.BlogPost" -->
<#-- @ftlvariable name="categoriesToFilteredURLMap" type="java.util.Map" -->
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

                            ${publishedOnLabel} ${document.publicationDate.time?datetime?string['dd MMMM yyyy']}
                            ,
                            ${byLabel} ${document.author}
                        </p>
                        <#-- End Author and published date -->

                        <#--Blog Categories -->
                        <p class="nhsuk-body-s nhsuk-u-secondary-text-color nhsuk-u-margin-bottom-7">
                            <#list categoriesToFilteredURLMap as category, filteredURL>
                                <a href=${filteredURL}>
                                    ${category} <#sep>, </#sep>
                                </a>
                            </#list>
                        </p>
                        <#--End Blog Categories -->

                        <#--Blog Summary -->
                        <p class="nhsuk-body-l">
                            ${document.summary!}
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
                                    <#default>
                                </#switch>
                            </#list>
                        </#if>
                        <#-- End Blog content -->
                        <@hee.lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
                    </div>
                </section>
            </div>
            <@hee.quickLinks quickLinks=document.quickLinks/>
        </div>
    </article>

    <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <h2>${document.comments?size} <@fmt.message key="comments"/></h2>

            <#assign datePattern = "d MMMM yyyy">
            <#list visibleComments as comment>
                <div class="nhsuk-card nhsuk-u-padding-4 nhsuk-u-margin-bottom-3">
                    <h3 class="nhsuk-u-margin-bottom-3">${comment.author.firstName} ${comment.author.lastName}</h3>
                    <div>
                        ${comment.message}
                    </div>
                    <div class="nhsuk-review-date nhsuk-u-margin-top-3">
                        <@fmt.message key="comment.posted_on"/> ${comment.postedDate.getTime()?date?string["${datePattern}"]}
                    </div>
                </div>
            </#list>

            <#if totalComments gt visibleComments?size>
                <a href="?showAllComments=true"><@fmt.message key="comment.view_all"/> ${document.comments?size} <@fmt.message key="comments"/></a>
            <#else>
                <a href="?showAllComments=false"><@fmt.message key="comment.view_less"/> <@fmt.message key="comments"/></a>
            </#if>
        </div>
    </div>
</#if>
