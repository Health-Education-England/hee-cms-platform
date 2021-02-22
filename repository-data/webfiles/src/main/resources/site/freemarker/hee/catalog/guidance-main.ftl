<#include "../../include/imports.ftl">
<#include "../macros/quick-links.ftl">
<#include "../macros/last-next-reviewed-date.ftl">
<#include "../macros/content-cards.ftl">
<#include "../macros/statement-block.ftl">
<#include "../macros/image-with-caption.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Guidance" -->
<#if document??>
    <main id="maincontent" role="main" class="nhsuk-main-wrapper">
        <div class="nhsuk-width-container">
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
                                <p>${document.summary}</p>
                                <#if document.contentBlocks??>
                                    <#list document.contentBlocks as block>
                                        <#switch block.getClass().getName()>
                                            <#case "org.hippoecm.hst.content.beans.standard.HippoFacetSelect">
                                                <#if block.referencedBean?? && hst.isBeanType(block.referencedBean, 'uk.nhs.hee.web.beans.ImageSetWithCaption')>
                                                    <@imageWithCaption imageWithCaption=block.referencedBean/>
                                                </#if>
                                                <#break>
                                            <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                                <@hst.html hippohtml=block/>
                                                <#break>
                                            <#case "uk.nhs.hee.web.beans.StatementBlock">
                                                <@statementBlock block=block/>
                                                <#break>
                                            <#case "uk.nhs.hee.web.beans.YellowAlertBlock">
                                                <@yellowAlertBlock block=block/>
                                                <#break>
                                            <#default>
                                        </#switch>
                                    </#list>
                                </#if>

                                <@lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
                            </div>
                        </section>
                    </div>

                    <@quickLinks quickLinks=document.quickLinks/>

                    <div class="nhsuk-grid-column-full nhsuk-section__content">
                        <@contentCards contentCards=document.relatedContent/>
                    </div>
                </div>
            </article>
        </div>
    </main>
</#if>