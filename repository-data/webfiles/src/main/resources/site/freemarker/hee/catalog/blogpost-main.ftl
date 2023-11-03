<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/author-cards.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/micro-hero.ftl">
<#include "../utils/date-util.ftl">
<#include "../macros/blog-and-news-partial-info.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.global,uk.nhs.hee.web.blogpost,uk.nhs.hee.web.contact"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.BlogPost" -->

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
                    <#--  Summary  -->
                    <p class="nhsuk-body-l">
                        <@hst.html formattedText="${document.summary?replace('\n', '<br>')}"/>
                    </p>

                    <#--  Main content blocks: START  -->
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
                            <#case "uk.nhs.hee.web.beans.DetailsReference">
                                <@hee.details block=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.ExpanderGroupReference">
                                <@hee.expander expander=block/>
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
                <aside class="page__rightbar">
                    <#--  Blog info: START  -->
                    <div class="hee-card hee-card--details">
                        <h3>Blog info</h3>

                        <#--  Published date  -->
                        <div class="hee-card--details__item">
                            <span>Published:</span> ${getDefaultFormattedDate(document.publicationDate)}
                        </div>

                        <#-- Blog info partial [professions, topics and tags] -->
                        <@blogAndNewsPartialInfo
                            professionTaxClass=document.globalTaxonomyProfessions!
                            topicTaxClass=document.globalTaxonomyHealthcareTopics!
                            tagTaxClass=document.globalTaxonomyTags!
                            listingPageURL=blogListingPageURL!/>
                    </div>
                    <#--  Blog info: END  -->

                    <#--  Right hand content blocks: START  -->
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
                    <#--  Right hand content blocks: END  -->
                </aside>
            </#if>
            <#--  Sidebar sections: END  -->
        </div>
        <#--  Main content: END  -->
    </main>
</#if>