<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<#macro guidance guidanceDocument showTitle=true showHero=false showCookiesButton=false>
<#-- @ftlvariable name="guidanceDocument" type="uk.nhs.hee.web.beans.Guidance" -->
    <#if guidanceDocument??>
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
                                <#if showHero=false && guidanceDocument.summary??>
                                    <p class="nhsuk-body-l"><@hst.html formattedText="${guidanceDocument.summary!?replace('\n', '<br>')}"/></p>
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
                                            <#case "uk.nhs.hee.web.beans.YellowAlertBlockReference">
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
                                            <#case "uk.nhs.hee.web.beans.InsetReference">
                                                <@hee.inset inset=block/>                                             
                                            <#case "uk.nhs.hee.web.beans.ButtonReference">
                                                <@hee.button button=block/>
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
                                </#if>
                                <#if showCookiesButton>
                                    <#include "../../include/cookie-button.ftl">
                                </#if>
                                <@hee.lastNextReviewedDate lastNextReviewedDate=guidanceDocument.pageLastNextReview/>
                            </div>
                        </section>
                    </div>

                    <#if guidanceDocument.rightHandBlocks??>
                        <div class="nhsuk-grid-column-one-third">
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
                                    <#case "uk.nhs.hee.web.beans.InternalLinksCardReference">
                                        <@hee.internalLinksCard card=block.internalLinksCard/>
                                        <#break>
                                    <#default>
                                </#switch>
                            </#list>
                        </div>
                    </#if>
                    <#if guidanceDocument.relatedContent??>
                        <div class="nhsuk-grid-column-full nhsuk-section__content">
                            <@hee.contentCards contentCards=guidanceDocument.relatedContent/>
                        </div>
                    </#if>
                </div>
            </article>
        </div>
    </#if>
</#macro>