<#ftl output_format="HTML">

<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "../../include/imports.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/select.ftl">
<#include "../macros/checkbox-group.ftl">
<#include "../macros/micro-hero.ftl">



<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="item" type="[uk.nhs.hee.web.beans.Bulletin, uk.nhs.hee.web.beans.BlogPost]" -->
<#-- @ftlvariable name="categoriesMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedCategories" type="java.util.List" -->

<#if pageable??>
    <ul class="nhsuk-list nhsuk-list--border">
        <#list pageable.items as result>
                <@hst.link var="link" hippobean=result />
            <li>
                <#if result.title?has_content>
                    <a href="${link}">${result.title}</a>
                <#else>
                    <a href="${link}">${result}</a>
                </#if>
                <#if result.publicationType?has_content>
                    <p>Publication Type: ${result.publicationType}</p>
                </#if>
                <#if result.summary?has_content>
                    <p>${result.summary}</p>
                </#if>
            </li>
        </#list>
    </ul>
<#else>
    <p>No hits found</p>
</#if>
<#if pageable??>
    <#include "../../include/pagination-nhs.ftl">
</#if>
