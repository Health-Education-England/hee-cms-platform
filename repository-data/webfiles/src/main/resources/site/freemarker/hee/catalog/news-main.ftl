<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/micro-hero.ftl">
<#include "../macros/author-cards.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../utils/date-util.ftl">
<#include "../macros/blog-and-news-partial-info.ftl">
<#include "../macros/taxonomy-info.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.blogpost,uk.nhs.hee.web.global,uk.nhs.hee.web.contact"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.News" -->

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
                    <#if document.summary?has_content>
                        <p class="nhsuk-body-l">
                            <@hst.html formattedText="${document.summary?replace('\n', '<br>')}"/>
                        </p>
                    </#if>

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
                            <#case "uk.nhs.hee.web.beans.ActionLink">
                                <@hee.actionLink actionLink=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.StatementCardReference">
                                <@hee.statementCard block=block/>
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
			<aside class="page__rightbar">
				<#--  News info: START  -->
				<div class="hee-card hee-card--details">
					<h3>News info</h3>

					<#--  Published date  -->
					<div class="hee-card--details__item">
						<span>Published:</span> ${getDefaultFormattedDate(document.publicationDate)}
					</div>

					<#-- News info partial [professions, topics and tags] -->
					<@blogAndNewsPartialInfo
						professionTaxClass=document.globalTaxonomyProfessions!
						topicTaxClass=document.globalTaxonomyHealthcareTopics!
						tagTaxClass=document.globalTaxonomyTags!
						listingPageURL=newsListingPageURL!/>

                    <#--  News type  -->
                    <@taxonomyInfo
                        taxClass=document.globalTaxonomyNewsType!
                        collectionPageURL=newsListingPageURL/>
				</div>
				<#--  News info: END  -->
				<#if document.rightHandBlocks?? && document.rightHandBlocks?size gt 0>
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
								<@hee.externalLinksCard card=block.externalLinksCard!/>
								<#break>
							<#case "uk.nhs.hee.web.beans.FileLinksCardReference">
								<@hee.fileLinksCard card=block.fileLinksCard/>
								<#break>
							<#case "uk.nhs.hee.web.beans.CtaCardReference">
								<@hee.ctaCard ctaCard=block/>
								<#break>
							<#case "uk.nhs.hee.web.beans.InternalLinksCardReference">
								<@hee.internalLinksCard card=block.internalLinksCard/>
								<#break>
							<#default>
						</#switch>
					</#list>
					<#--  Right hand content blocks: END  -->
				</#if>
			</aside>

            <#--  Sidebar sections: END  -->
        </div>
        <#--  Main content: END  -->

        <#--  Main featured content: START  -->
        <#assign isRelatedContentAvailable=(document.relatedContent?? && (document.relatedContent.header?has_content || document.relatedContent.cardGroupSummary?has_content || document.relatedContent.cards?size gt 0))?then(true, false)>
        <#assign isFeaturedContentAvailable=(document.featuredContentBlock??)?then(true, false)>

        <#if isRelatedContentAvailable || isFeaturedContentAvailable>
            <section class="page__feature">
                <#--  Related content: START  -->
                <#if isRelatedContentAvailable>
                    <div class="nhsuk-width-container">
                        <@hee.contentCards contentCards=document.relatedContent/>
                    </div>
                </#if>
                <#--  Related content: END  -->

                <#--  Featured content: START  -->
                <#if isFeaturedContentAvailable>
                    <div class="nhsuk-width-container">
                        <@hee.featuredContent block=document maxCards=3/>
                    </div>
                </#if>
                <#--  Featured content: END  -->
            </section>
        </#if>
        <#--  Main featured content: END  -->
    </main>
</#if>
