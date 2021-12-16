<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../macros/hero-section.ftl">
<#import "../macros/components.ftl" as hee>

<@hst.setBundle basename="uk.nhs.hee.web.blogpost"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.News" -->
<#-- @ftlvariable name="categoriesValueListMap" type="java.util.Map" -->

<#if document??>
    <#assign showHero=false>
    <#if document.heroImage??>
        <#assign showHero=true>
        <@heroSection document=document />
    </#if>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <#if showHero=false>
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-full">
                        <h1>${document.title}</h1>
                    </div>
                </div>
            </#if>
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

                                <#--News Categories -->
                                <#if categoriesValueListMap?has_content>
                                    <p class="nhsuk-body-s nhsuk-u-secondary-text-color nhsuk-u-margin-bottom-7">
                                        <#if newsListingPageURL?has_content>
                                            <#list categoriesValueListMap as key, value>
                                                <a href=${newsListingPageURL}?category=${key}>${value}</a><#sep>, </#sep>
                                            </#list>
                                            <#else>
                                                <#list categoriesValueListMap?values as value>
                                                ${value}<#sep>, </#sep>
                                            </#list>
                                        </#if>
                                    </p>
                                </#if>
                                <#--End News Categories -->

                                <#--News Summary -->
                                <#if showHero=false>
                                    <#if document.summary??>
                                        <p class="nhsuk-body-l">
                                            <@hst.html formattedText="${document.summary?replace('\n', '<br>')}"/>
                                        </p>
                                    </#if>
                                </#if>
                                <#-- End News Summary -->

                                <#-- News content -->
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
                                            <#case "uk.nhs.hee.web.beans.ContentCards">
                                                <@hee.contentCards contentCards=block size="half"/>
                                                <#break>
                                            <#default>
                                        </#switch>
                                    </#list>
                                </#if>
                                <#-- End News content -->
                                <@hee.lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
                            </div>
                        </section>
                    </div>

                    <#if document.rightHandBlocks??>
                        <div class="nhsuk-grid-column-one-third">
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
                                    <#case "uk.nhs.hee.web.beans.CtaCardReference">
                                        <@hee.ctaCard ctaCard=block/>
                                        <#break>
                                    <#default>
                                </#switch>
                            </#list>
                        </div>
                    </#if>
                </div>
            </article>
        </main>
    </div>
</#if>
