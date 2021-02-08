<#include "../../include/imports.ftl">
<#include "../macros/last-next-reviewed-date.ftl">
<#-- @ftlvariable name="categoriesMap" type="java.util.Map" -->
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.Bulletin" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->

<#if pageable??>
    <#list pageable.items as item>
        <!-- TODO check if we can't put a getter inside the uk.nhs.hee.web.beans.Link to get the linkUrl,
         so that we don't have to check if the link is internal or external -->
        <#if item.link??>
            <#if item.link.document??>
                <@hst.link hippobean=item.link.document var="linkURL"/>
                <#assign openInANewWindow=false />
            <#else>
                <#assign openInANewWindow=true />
                <#assign linkURL="${item.link.url}" />
            </#if>
        </#if>

        <dl class="nhsuk-summary-list">
            <h3><a href="${linkURL}"> ${item.title}</a></h3>
            <#if item.category??>
                <@bulletinItemRow key="Category" value="${categoriesMap[item.category]}" />
            </#if>
            <#if item.overview??>
                <@bulletinItemRow key="Overview" value="${item.overview}" />
            </#if>
            <#if item.link??>
                <#if item.link.document??>
                    <!-- TODO display internal link something like "Read more .." css is missing-->
                <#elseif item.link.url??>
                    <#assign hyperlink>
                        <a href="${linkURL}"> ${item.link.text}</a>
                    </#assign>
                    <@bulletinItemRow key="Website" value="${hyperlink}" />
                </#if>
            </#if>
            <#if item.pageLastNextReview??>
                <@lastNextReviewedDate lastNextReviewedDate=item.pageLastNextReview/>
            </#if>
        </dl>
    </#list>
    <#include "../../include/pagination-nhs.ftl">
</#if>

<#macro bulletinItemRow key value>
    <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
            ${key}
        </dt>
        <dd class="nhsuk-summary-list__value">
            ${value}
        </dd>
    </div>
</#macro>