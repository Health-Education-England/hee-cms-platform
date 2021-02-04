<#include "../../include/imports.ftl">
<#include "../macros/quick-links.ftl">
<#include "../macros/last-next-reviewed-date.ftl">
<#include "../macros/content-cards.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Guidance" -->
<#if document??>
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
                                <#if hst.isBeanType(block, 'uk.nhs.hee.web.beans.PageLastNextReview')>
                                    <@lastNextReviewedDate lastNextReviewedDate=block/>
                                <#elseif hst.isBeanType(block, 'org.hippoecm.hst.content.beans.standard.HippoMirror')>
                                    <@hst.link var="img" hippobean=block/>
                                    <img src="${img}" alt=""/>
                                <#elseif hst.isBeanType(block, 'org.hippoecm.hst.content.beans.standard.HippoHtml')>
                                    <@hst.html hippohtml=block/>
                                </#if>
                            </#list>
                        </#if>

                    </div>
                </section>
            </div>

            <@quickLinks quickLinks=document.quickLinks/>

            <@contentCards contentCards=document.relatedContent/>
        </div>
    </article>
</#if>