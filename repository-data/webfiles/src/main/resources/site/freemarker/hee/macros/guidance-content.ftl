<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<#macro guidance guidanceDocument showTitle=true>
<#-- @ftlvariable name="guidanceDocument" type="uk.nhs.hee.web.beans.Guidance" -->
    <#if guidanceDocument??>
        <@hst.link var="heroImage" hippobean=guidanceDocument.heroImage />
        <#assign showHero=false>
        <#if heroImage??>
            <#assign showHero=true>
            <section class="nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description" style="background-image: url('${heroImage}');">
                <div class="nhsuk-hero__overlay">
                    <div class="nhsuk-width-container">
                        <div class="nhsuk-grid-row">
                            <div class="nhsuk-grid-column-two-thirds">
                                <div class="nhsuk-hero-content">
                                    <h1 class="nhsuk-u-margin-bottom-3">${guidanceDocument.title}</h1>
                                    <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">${guidanceDocument.summary}</p>
                                    <span class="nhsuk-hero__arrow" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </#if>
        <div class="nhsuk-width-container">
            <#if showTitle && showHero=false>
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-two-thirds">
                        <h1>${guidanceDocument.title}</h1>
                    </div>
                </div>
            </#if>

            <article>
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-two-thirds">
                        <section class="nhsuk-page-content__section-one">
                            <div class="nhsuk-page-content">
                                <#if showHero=false>
                                    <p>${guidanceDocument.summary}</p>
                                </#if>
                                <#if guidanceDocument.contentBlocks??>
                                    <#list guidanceDocument.contentBlocks as block>
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
                                            <#case "uk.nhs.hee.web.beans.StatementBlock">
                                                <@hee.statementBlock block=block/>
                                                <#break>
                                            <#case "uk.nhs.hee.web.beans.ActionLink">
                                                <@hee.actionLink actionLink=block/>
                                                <#break>
                                            <#case "uk.nhs.hee.web.beans.YellowAlertBlock">
                                                <@hee.yellowAlertBlock block=block/>
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

                                <@hee.lastNextReviewedDate lastNextReviewedDate=guidanceDocument.pageLastNextReview/>
                            </div>
                        </section>
                    </div>

                    <#if guidanceDocument.rightHandBlocks??>
                        <#list guidanceDocument.rightHandBlocks as block>
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
                                <#case "uk.nhs.hee.web.beans.ContentCards">
                                    <@hee.contentCards contentCards=block size="half" />
                                    <#break>
                                <#default>
                            </#switch>
                        </#list>
                    </#if>
                </div>
            </article>
        </div>
    </#if>
</#macro>
