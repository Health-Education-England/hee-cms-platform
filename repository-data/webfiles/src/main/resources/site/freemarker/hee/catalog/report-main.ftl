<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Report" -->
<#if document??>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <div class="nhsuk-width-container">
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-two-thirds">
                        <h1>
                            <span role="text">${document.title}
                                <span class="nhsuk-caption-xl nhsuk-caption--bottom">
                                    ${document.subtitle}
                                </span>
                            </span>
                        </h1>
                    </div>
                </div>

                <article>
                    <div class="nhsuk-grid-row">
                        <div class="nhsuk-grid-column-two-thirds">
                            <section class="nhsuk-page-content__section-one">
                                <div class="nhsuk-page-content">
                                    <#if document.summary??>
                                        <p class="nhsuk-body-l"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                                    </#if>
                                    <#if document.contentBlocks??>
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
                                                <#case "uk.nhs.hee.web.beans.InsetReference">
                                                    <@hee.inset inset=block/>
                                                    <#break>
                                                <#case "uk.nhs.hee.web.beans.ExpanderGroupReference">
                                                    <@hee.expander expander=block/>
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
                                    <@hee.lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    </div>
</#if>