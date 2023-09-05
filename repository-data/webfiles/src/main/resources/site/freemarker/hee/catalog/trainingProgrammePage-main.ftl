<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "../macros/internal-link.ftl">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/micro-hero.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#--  Macro to create the Prerequisites or Optional Routes part for the Training Journey Component -->
<#macro trainingGroup list title>
    <div class="hee-training-journey__group ">
        <h4>${title}</h4>
        <div class="hee-training-journey__group__container">
            <#assign className = "hee-training-journey__item">
            <#list list as item>
                <#if item?is_first><#assign className> ${className} first </#assign></#if>
                <#if item?is_last><#assign className> ${className} last </#assign></#if>
                <div class="${className}" >
                    <a class="hee-training-journey__item__link" href="${getInternalLinkURL(item)}">${item.title}</a>
                </div>
            </#list>
        </div>
    </div>
</#macro>

<#--  Macro that renders rows of the Programme summary section  -->
<#macro programmeSummaryRow rowTitle>
    <li class="hee-card--summary__item">
        <span class="hee-card--summary__item__label">${rowTitle}</span>
        <span class="hee-card--summary__item__value"><#nested></span>
    </li>
</#macro>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.TrainingProgrammePage" -->
<#if document??>
    <main class="page page--rightbar" id="maincontent" role="main" xmlns="http://www.w3.org/1999/html">
        <#--  Main header: START  -->
        <div class="page__header${(document.microHero?has_content)?then(' has-microhero', '')}">
            <#--  Micro hero  -->
            <#if document.microHero??>
                <@microHero microHeroImage=document.microHero />
            </#if>

            <div class="nhsuk-width-container">
                <#--  Title  -->
                <h1>${document.title}</h1>

                <#if !currentGuidance??>
                    <#--  Summary  -->
                    <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                </#if>
            </div>
        </div>
        <#--  Main header: END  -->

        <#--  Main content: START  -->
        <div class="page__layout nhsuk-width-container">
            <#--  Main sections: START  -->
            <div class="page__main">
                <div class="page__content">

                    <#if isOverview>
                        <div class="hee-card hee-card--summary default">
                            <a aria-label="Toggle Programme summary" class="hee-card--summary__toggle" href="#">
                                <span class="nhsuk-u-visually-hidden">Toggle Programme summary</span>
                            </a>
                            <h3 class="hee-card--summary__heading">Programme summary</h3>
                            <ul class="hee-card--summary__list">
                                <#--  Training programme  -->
                                <@programmeSummaryRow rowTitle="Training programme">
                                    ${document.title}
                                </@programmeSummaryRow>

                                <#--  Training type  -->
                                <#if document.globalTaxonomyTrainingType?? && document.globalTaxonomyTrainingType.taxonomyValues?has_content>
                                    <@programmeSummaryRow rowTitle="Training type">
                                        <#--  The following block can be used when training listing page is available  -->
                                        <#--  <a class="hee-card--summary__item__link" href="${trainingListingPageURL}?trainingType=${document.globalTaxonomyTrainingType.taxonomyValues[0].key}">
                                            ${document.globalTaxonomyTrainingType.taxonomyValues[0].label}
                                        </a>  -->
                                        ${document.globalTaxonomyTrainingType.taxonomyValues[0].label}
                                    </@programmeSummaryRow>
                                </#if>

                                <#--  Professions  -->
                                <#if document.globalTaxonomyProfessions?? && document.globalTaxonomyProfessions.taxonomyValues?has_content>
                                    <@programmeSummaryRow rowTitle="Professions">
                                        <#--  The following block can be used when training listing page is available  -->
                                        <#--  <#list document.globalTaxonomyProfessions.taxonomyValues as category>
                                            <a href=${publicationListingPageURL}?profession=${category.key}>${category.label}</a><#sep>, </#sep>
                                        </#list>  -->
                                        <#list document.globalTaxonomyProfessions.taxonomyValues as category>
                                            ${category.label}<#sep>, </#sep>
                                        </#list>
                                    </@programmeSummaryRow>
                                </#if>

                                <#--  Healthcare topics  -->
                                <#if document.globalTaxonomyHealthcareTopics?? && document.globalTaxonomyHealthcareTopics.taxonomyValues?has_content>
                                    <@programmeSummaryRow rowTitle="Healthcare topics">
                                        <#--  The following block can be used when training listing page is available  -->
                                        <#--  <#list document.globalTaxonomyHealthcareTopics.taxonomyValues as category>
                                            <a href=${publicationListingPageURL}?topic=${category.key}>${category.label}</a><#sep>, </#sep>
                                        </#list>  -->
                                        <#list document.globalTaxonomyHealthcareTopics.taxonomyValues as category>
                                            ${category.label}<#sep>, </#sep>
                                        </#list>
                                    </@programmeSummaryRow>
                                </#if>

                                <#--  Discipline  -->
                                <#if clinicalDiscipline?has_content>
                                    <@programmeSummaryRow rowTitle="Discipline">
                                        <#--  The following block can be used when training listing page is available  -->
                                        <#--  <a class="hee-card--summary__item__link" href="${trainingListingPageURL}?discipline=${document.discipline}">
                                            ${clinicalDiscipline}
                                        </a>  -->
                                        ${clinicalDiscipline}
                                    </@programmeSummaryRow>
                                </#if>

                                <#--  Recruitment format  -->
                                <#if recruitmentFormat?has_content>
                                    <@programmeSummaryRow rowTitle="Recruitment format">
                                        ${recruitmentFormat}
                                    </@programmeSummaryRow>
                                </#if>

                                <#--  Duration  -->
                                <#if recruitmentFormat?has_content>
                                    <@programmeSummaryRow rowTitle="Duration">
                                        ${document.duration} months
                                    </@programmeSummaryRow>
                                </#if>

                                <#--  Competition ratio  -->
                                <#if document.competitionRatio?has_content>
                                    <@programmeSummaryRow rowTitle="Competition ratio">
                                        ${document.competitionRatio}
                                    </@programmeSummaryRow>
                                </#if>

                                <#--  Fill rate  -->
                                <#if document.fillRate?has_content>
                                    <@programmeSummaryRow rowTitle="Fill rate">
                                        ${document.fillRate}%
                                    </@programmeSummaryRow>
                                </#if>

                                <#--  Opening date  -->
                                <#if document.opening?has_content>
                                    <@programmeSummaryRow rowTitle="Opening">
                                        ${document.opening.time?string['EEE dd/MM/yyyy']}
                                    </@programmeSummaryRow>
                                </#if>

                                <#--  Closing date  -->
                                <#if document.closing?has_content>
                                    <@programmeSummaryRow rowTitle="Closing">
                                        ${document.closing.time?string['EEE dd/MM/yyyy']}
                                    </@programmeSummaryRow>
                                </#if>
                            </ul>
                        </div>
                    </#if>

                    <#if currentGuidance??>
                        <h2  class="toc_h2" id="overview">${currentGuidance.title}</h2>

                        <#--  Guidance content: START  -->
                        <@hee.guidanceDetail guidanceDocument=currentGuidance/>

                        <#--  Related content: START  -->
                        <#if currentGuidance.relatedContent??>
                            <@hee.contentCards contentCards=currentGuidance.relatedContent size="half"/>
                        </#if>
                        <#--  Related content: END  -->

                        <#-- Last & next reviewed dates -->
                        <@hee.lastNextReviewedDate lastNextReviewedDate=currentGuidance.pageLastNextReview/>
                        <#--  Guidance content: END  -->
                    <#else>
                        <#--  Main content blocks: START  -->
                        <#if document.overviewBlocks??>
                            <h2  class="toc_h2" id="overview">Overview</h2>
                            <#list document.overviewBlocks as block>
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
                                    <#case "uk.nhs.hee.web.beans.MediaEmbedReference">
                                        <@hee.media media=block/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.InsetReference">
                                        <@hee.inset inset=block/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.AppliesToBoxReference">
                                        <@hee.appliesToBox box=block/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.WarningCalloutReference">
                                        <@hee.warningCallout block=block/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.StatementCardReference">
                                        <@hee.statementCard block=block/>
                                        <#break>
                                    <#default>
                                </#switch>
                            </#list>
                        </#if>

                        <#--  Training journey component: START  -->
                        <#if document.trainingJourneySummary?has_content || document.trainingJourneyPrerequisites?has_content>

                            <h2>Your training journey</h2>
                            <#if document.trainingJourneySummary?has_content>
                                <p class="nhsuk-lede-text"><@hst.html formattedText="${document.trainingJourneySummary!?replace('\n', '<br>')}"/></p>
                            </#if>
                            <div class="hee-training-journey">
                                <#--  Prerequisites  -->
                                <#if document.trainingJourneyPrerequisites?has_content>
                                    <@trainingGroup list=document.trainingJourneyPrerequisites title="Prerequisites"/>
                                </#if>
                                <#--  Your are here  -->
                                <div class="hee-training-journey__group ">
                                    <h4>You are here</h4>
                                    <div class="hee-training-journey__group__container">
                                        <div class="hee-training-journey__item first last active">
                                            <a class="hee-training-journey__item__link" href="#">${document.title}</a>
                                        </div>
                                    </div>
                                </div>
                                <#--  Optional Routes -->
                                <#if document.trainingJourneyOptions?has_content>
                                    <@trainingGroup list=document.trainingJourneyOptions title="Optional routes"/>
                                </#if>

                            </div>
                        </#if>
                    </#if>
                </div>
            </div>

            <#--  Sidebar sections: START  -->
            <#--  Right hand content blocks: Table of content and content blocks   -->
            <aside class="page__rightbar">

                <#--  Table of content  -->
                <div class="hee-card hee-card--related-links theme__item-border">
                    <div class="hee-card--related-links__content">
                        <h3 class="hee-card--related-links__heading">Pages related to this programme</h3>
                        <ul class="hee-card--related-links__list">
                            <#assign accessWithEndSlash=hstRequestContext.servletRequest.requestURI?ends_with("/")/>
                            <#--  Overview link  -->
                            <#if isOverview>
                                <li aria-current="page">
                                    <span aria-current="page" class="hee-card--related-links__link active">Overview</span>
                                </li>
                            <#else>
                                <li>
                                    <a class="hee-card--related-links__link" href="${(accessFromRootHub && !accessWithEndSlash)?then(tppSiteMapItemName + '/overview', 'overview')}">Overview</a>
                                </li>
                            </#if>

                            <#--  Application information (guidance) page links  -->
                            <#list document.applicationInformation as guidance>
                                <#if currentGuidance?? && guidance == currentGuidance>
                                    <li aria-current="page">
                                        <span aria-current="page" class="hee-card--related-links__link active">${guidance.title}</span>
                                    </li>
                                <#else>
                                    <li>
                                        <a class="hee-card--related-links__link" href="${(accessFromRootHub && !accessWithEndSlash)?then(tppSiteMapItemName + '/' + guidance.name, guidance.name)}">${guidance.title}</a>
                                    </li>
                                </#if>
                            </#list>
                        </ul>
                    </div>
                </div>

                <#if document.applicationButtonLink?has_content>
                    <div class="nhsuk-card nhsuk-card--clickable">
                        <div class="nhsuk-card__content">
                            <h3 class="nhsuk-card__heading">Apply now</h3>
                            <a class="nhsuk-button" href="${document.applicationButtonLink}" draggable="false">
                                ${document.applicationButtonTitle}
                            </a>
                        </div>
                    </div>
                </#if>
                <#--  Right hand content blocks: START  -->
                <#if document.rightHandBlocks??>
                    <#list document.rightHandBlocks as block>
                        <#switch block.getClass().getName()>
                            <#case "uk.nhs.hee.web.beans.QuickLinks">
                                <@hee.quickLinks quickLinks=block/>
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
                </#if>
                <#--  Right hand content blocks: END  -->
            </aside>
            <#--  Sidebar sections: END  -->
        </div>
        <#--  Main content: END  -->

        <#--  Feature section will be a future work, not implemented yet  -->
        <#if document.featuredContentBlock??>
            <section class="page__feature">
                <div class="nhsuk-width-container">
                    <@hee.featuredContent block=document maxCards=3/>
                </div>
            </section>
        </#if>
    </main>
</#if>