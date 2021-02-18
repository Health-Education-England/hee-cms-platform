<#include "../../include/imports.ftl">
<#include "../macros/quick-links.ftl">
<#include "../macros/last-next-reviewed-date.ftl">
<#include "../macros/content-cards.ftl">
<#include "../macros/statement-block.ftl">
<#include "../macros/yellow-alert-block.ftl">

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
                                        className = ${block.getClass().getName()}
                                        <#if hst.isBeanType(block, 'org.hippoecm.hst.content.beans.standard.HippoMirror')>
                                            <@hst.link var="img" hippobean=block/>
                                            <img src="${img}" alt=""/>
                                        <#elseif hst.isBeanType(block, 'org.hippoecm.hst.content.beans.standard.HippoHtml')>
                                            <@hst.html hippohtml=block/>
                                        <#elseif hst.isBeanType(block, 'uk.nhs.hee.web.beans.StatementBlock')>
                                            <@statementBlock block=block/>
                                        <#elseif hst.isBeanType(block, 'uk.nhs.hee.web.beans.YellowAlertBlock')>
                                            <@yellowAlertBlock block=block/>
                                        </#if>
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