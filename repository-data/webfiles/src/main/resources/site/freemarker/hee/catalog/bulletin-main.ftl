<#include "../../include/imports.ftl">
<#include "../macros/bulletin-item.ftl">

<#-- @ftlvariable name="categoriesMap" type="java.util.Map" -->
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.Bulletin" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->

<div class="nhsuk-listing__summary o-flex@tablet">
    <h2 class="nhsuk-listing__title nhsuk-heading-l o-flex__grow">
        ${pageable.total} results
    </h2>

    <form method="get" class="nhsuk-listing__sort o-flex o-flex--align-center">
        <div class="o-flex__grow">
            <div class="nhsuk-form-group">
                <label class="nhsuk-label" for="select-1">
                    Sort By
                </label>
                <select class="nhsuk-select" id="select-1" name="select-1">
                    <option value="1">Newest</option>
                    <option value="2" selected>Relevance</option>
                </select>
            </div>
        </div>
    </form>
</div>

<#if pageable??>
    <#list pageable.items as item>
        <@bulletinItem
          title="${item.title}"
          category="${categoriesMap[item.category]}"
          overview="${item.overview}"
          websiteURL="${item.websiteUrl}"
          websiteText="${item.websiteTitle}"
        />
    </#list>
    <#if cparam.showPagination>
        <#include "../../include/pagination-nhs.ftl">
    </#if>
</#if>

