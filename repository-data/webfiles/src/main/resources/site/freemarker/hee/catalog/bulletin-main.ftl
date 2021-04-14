<#ftl output_format="HTML">

<#include "../../include/imports.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/select.ftl">
<#include "../macros/checkbox-group.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.listing"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="categoriesMap" type="java.util.Map" -->
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.Bulletin" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="categoriesMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedCategories" type="java.util.List" -->

<#if document??>
    <main id="maincontent" role="main" class="nhsuk-main-wrapper" xmlns="http://www.w3.org/1999/html">
        <div class="nhsuk-width-container">
            <h1>
                ${document.title}
            </h1>
            <p class="nhsuk-lede-text">${document.summary}</p>
            <div class="nhsuk-listing">
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-one-third">
                        <#-- Filters -->
                        <@hst.renderURL var="pagelink"/>
                        <form class="nhsuk-filter" method="get" action="${pagelink}">
                            <@fmt.message key="filters.label" var="filtersLabel"/>
                            <p class="nhsuk-filter__title nhsuk-heading-l">${filtersLabel}</p>

                            <div class="nhsuk-filter__groups">
                                <@fmt.message key="filter.category.label" var="categoryLabel"/>
                                <div class="nhsuk-filter__group">
                                    <@checkboxGroup title=categoryLabel name="category" itemsMap=categoriesMap selectedItemsList=selectedCategories />
                                </div>
                            </div>
                            <input type="hidden" name="sortByDate" value="${selectedSortOrder}">
                        </form>
                        <#-- End Filters -->
                    </div>

                    <div class="nhsuk-listing__list nhsuk-grid-column-two-thirds">
                        <div class="nhsuk-listing__summary o-flex@tablet">
                            <#-- Results number -->
                            <@fmt.message key="bulletin.results.count.text" var="resultsCountText"/>
                            <h2 class="nhsuk-listing__title nhsuk-heading-l o-flex__grow">
                                ${pageable.total} ${resultsCountText}
                            </h2>
                            <#-- End Results number -->

                            <#-- Sort DropDown-->
                            <@hst.renderURL var="pagelink" />
                            <form method="get" class="nhsuk-listing__sort o-flex o-flex--align-center"
                                  action="${pagelink}">
                                <div class="o-flex__grow">
                                    <#list selectedCategories as category>
                                        <input type="hidden" name="category" value="${category}">
                                    </#list>

                                    <@fmt.message key="sort.label" var="sortLabel"/>
                                    <@fmt.message key="sort.option.oldest" var="sortByOldestLabel"/>
                                    <@fmt.message key="sort.option.newest" var="sortByNewestLabel"/>
                                    <#assign selectOptions= {"asc": "${sortByOldestLabel}", "desc":"${sortByNewestLabel}"} />

                                    <@select label="${sortLabel}" name="sortByDate" optionsMap=selectOptions selectedValue=selectedSortOrder/>
                                </div>
                            </form>
                            <#-- End Sort DropDown -->
                        </div>

                        <#-- Active Filters -->
                        <#if selectedCategories?has_content>
                            <div class="nhsuk-listing__active-filters">
                                <#list selectedCategories as categoryValue>
                                    <div class="nhsuk-filter-tag nhsuk-tag" data-filter="${categoryValue}">
                                        <span>${categoriesMap[categoryValue]}</span>
                                        <@hst.link path='/static/assets/icons/icon-close-white.svg' var="closeIcon"/>
                                        <img class="nhsuk-filter-tag__icon" src="${closeIcon}" alt="Remove" hidden/>
                                    </div>
                                </#list>
                            </div>
                        </#if>
                        <hr/>
                        <#-- End Active Filters -->

                        <#if pageable??>
                            <#list pageable.items as item>
                                <@bulletinListItem
                                title="${item.title}"
                                category="${categoriesValue(categoriesMap, item.category)}"
                                overview="${item.overview}"
                                websiteURL="${item.websiteUrl}"
                                websiteText="${item.websiteTitle}"
                                />
                            </#list>
                            <#include "../../include/pagination-nhs.ftl">
                        </#if>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <#function categoriesValue categoriesMap categories>
        <#local returnValue = ''>
        <#list categories as category>
            <#if category?has_content>
                <#local returnValue = returnValue + categoriesMap[category] + ', '>
            </#if>
        </#list>
        <#return returnValue?has_content?then(returnValue?remove_ending(', '), returnValue)>
    </#function>
</#if>
