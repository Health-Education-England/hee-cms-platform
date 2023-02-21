<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/micro-hero.ftl">
<#include "../macros/author-cards.ftl">
<#include '../utils/author-util.ftl'>
<#import "../macros/components.ftl" as hee>

<@hst.setBundle basename="uk.nhs.hee.web.blogpost,uk.nhs.hee.web.global,uk.nhs.hee.web.contact"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.News" -->
<#-- @ftlvariable name="categoriesValueListMap" type="java.util.Map" -->

<#if document??>
    <main class="page page--rightbar" id="maincontent" role="main">
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
                    <#--  Author and published date: START  -->
                    <p class="nhsuk-body-s nhsuk-u-secondary-text-color">
                        <@fmt.message key="publication.by" var="byLabel" />
                        <@fmt.message key="published.on" var="publishedOnLabel"/>

                        <#if document.authors?has_content>
                            <#assign commaSeparatedAuthorNames>${getCommaSeparatedAuthorNames(document.authors)}</#assign>
                        <#else>
                            <#assign commaSeparatedAuthorNames>${document.author!}</#assign>
                        </#if>

                        ${publishedOnLabel} ${document.publicationDate.time?datetime?string['dd MMMM yyyy']}<#if commaSeparatedAuthorNames?has_content>, ${byLabel} ${commaSeparatedAuthorNames}</#if>
                    </p>
                    <#--  Author and published date: END  -->

                    <#--  News categories collection link(s): START  -->
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
                    <#--  News categories collection link(s): END  -->

                    <#--  Summary  -->
                    <#if document.summary?has_content>
                        <p class="nhsuk-body-l">
                            <@hst.html formattedText="${document.summary?replace('\n', '<br>')}"/>
                        </p>
                    </#if>

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
                            <#case "uk.nhs.hee.web.beans.TableReference">
                                <@hee.table table=block/>
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
                    <#--  Main content blocks: END  -->

                    <#--  Author cards  -->
                    <@authorCards authors=document.authors hideAuthorContactDetails=document.hideAuthorContactDetails!false/>
                </div>
            </div>
            <#--  Main sections: END  -->

            <#--  Sidebar sections: START  -->
            <#if document.rightHandBlocks??>
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
                            <#case "uk.nhs.hee.web.beans.CtaCardReference">
                                <@hee.ctaCard ctaCard=block/>
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

        <#--  Main footer: START  -->
        <div class="page__footer">
            <#-- Last & next reviewed dates -->
            <div class="nhsuk-width-container">
                <@hee.lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
            </div>
        </div>
        <#--  Main footer: END  -->

        <#--  Main featured content: START  -->
        <section class="page__feature">
            <#--  Related content  -->
            <#if document.relatedContent??>
                <div class="nhsuk-width-container">
                    <@hee.contentCards contentCards=document.relatedContent/>
                </div>
            </#if>
        </section>
        <#--  Main featured content: END  -->
    </main>
</#if>
