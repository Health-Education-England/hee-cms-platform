<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

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
                                                    <@hee.imageWithCaption imageWithCaption=block.referencedBean/>
                                                </#if>
                                                <#break>
                                            <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                                <@hst.html hippohtml=block/>
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
                                            <#default>
                                        </#switch>
                                    </#list>
                                </#if>

                                <@hee.lastNextReviewedDate lastNextReviewedDate=document.pageLastNextReview/>
                            </div>
                        </section>
                    </div>

                    <@hee.quickLinks quickLinks=document.quickLinks/>

                    <div class="nhsuk-grid-column-full nhsuk-section__content">
                        <@hee.contentCards contentCards=document.relatedContent/>
                    </div>
                </div>
            </article>
        </div>
    </main>
</#if>