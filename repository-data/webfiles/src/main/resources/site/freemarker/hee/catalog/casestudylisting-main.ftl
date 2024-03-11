<#ftl output_format="HTML">

<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/select.ftl">
<#include "../macros/checkbox-group.ftl">
<#include "../macros/micro-hero.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.listing"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.CaseStudy" -->
<#-- @ftlvariable name="impactGroupMap" type="java.util.Map" -->
<#-- @ftlvariable name="impactTypesMap" type="java.util.Map" -->
<#-- @ftlvariable name="sectorMap" type="java.util.Map" -->
<#-- @ftlvariable name="regionMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedImpactGroups" type="java.util.List" -->
<#-- @ftlvariable name="providerMap" type="java.util.List" -->
<#-- @ftlvariable name="submittedDate" type="uk.nhs.hee.web.beans.ListingPage" -->

<#if document??>
    <main class="page page--leftbar" id="maincontent" role="main">
        <#--  Main header: START  -->
        <div class="page__header${(document.microHero?has_content)?then(' has-microhero', '')}">
            <#--  Micro hero  -->
            <#if document.microHero??>
                <@microHero microHeroImage=document.microHero />
            </#if>

            <div class="nhsuk-width-container">
                <#--  Title  -->
                <h1>${document.title}</h1>

                <#--  Subtitle  -->
                <#if document.subtitle?has_content>
                    <span class="nhsuk-caption-xl">${document.subtitle}</span>
                </#if>

                <#--  Summary  -->
                <#if document.summary?has_content>
                    <p class="nhsuk-lede-text">
                        <@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/>
                    </p>
                </#if>
            </div>
        </div>
        <#--  Main header: END  -->

        <#--  Main content: START  -->
        <div class="page__layout nhsuk-width-container">
            <#--  Left bar: START  -->
            <aside class="page__leftbar">
                <#--  Search filters: START  -->
                <@hst.renderURL var="pageLink"/>
                <form class="nhsuk-filter" method="get" action="${pageLink}">
                    <@fmt.message key="filters.label" var="filtersLabel"/>
                    <p class="nhsuk-filter__title nhsuk-heading-l">${filtersLabel}</p>

                    <#--  Filter group: START  -->
                    <div class="nhsuk-filter__groups">
                        <#--  Group impacted filter: START  -->
                        <div class="nhsuk-filter__group">
                            <@fmt.message key="filter.clear.label" var="clearLabel"/>
                            <a class="nhsuk-filter__group__clear" href="#">${clearLabel}</a>

                            <@fmt.message key="casestudy.impact_group" var="impactGroupLabel"/>
                            <@checkboxGroup title=impactGroupLabel name="impactGroup" items=impactGroupMap selectedItemsList=selectedImpactGroups />
                        </div>
                        <#--  Group impacted filter: END  -->
                    </div>
                    <#--  Filter group: END  -->

                    <input type="hidden" name="sortBy" value="${selectedSortOrder}">
                    <button class="nhsuk-button nhsuk-filter__submit" data-module="nhsuk-button" type="submit" hidden> Update results </button>
                    <input data-update-flag="filter" name="results_updated" type="hidden" value="false">
                </form>
                <#--  Search filters: END  -->
            </aside>
            <#--  Left bar: END  -->

            <#--  Main sections: START  -->
            <div class="page__main">
                <div class="page__content">
                    <div class="hee-listing" id="results">
                        <#--  Search result summary: START  -->
                        <div class="hee-listing__summary">
                            <#--  Result count: START  -->
                            <div class="hee-listing__count">
                                <@fmt.message key="results.count.text" var="resultsCountText"/>
                                <h2 class="hee-listing__title nhsuk-heading-l">
                                    ${pageable.total} ${resultsCountText}
                                </h2>
                            </div>
                            <#--  Result count: END  -->

                            <#--  Search sort dropdown: START  -->
                            <div class="hee-listing__filter">
                                <@hst.renderURL var="pageLink" />
                                <form method="get" class="hee-listing__filter__sort" action="${pageLink}">
                                    <#list selectedImpactGroups as impactGroup>
                                        <input type="hidden" name="impactGroup" value="${impactGroup}">
                                    </#list>

                                    <@fmt.message key="sort.label" var="sortLabel"/>
                                    <@fmt.message key="sort.option.submitted_date_oldest" var="sortBySubmittedDateOldestLabel"/>
                                    <@fmt.message key="sort.option.submitted_date_newest" var="sortBySubmittedDateNewestLabel"/>
                                    <@fmt.message key="sort.option.az" var="sortByAZ"/>
                                    <#assign selectOptions= { "az":"${sortByAZ}", "desc":"${sortBySubmittedDateNewestLabel}", "asc":"${sortBySubmittedDateOldestLabel}" } />
                                    <@select label="${sortLabel}" name="sortBy" optionsMap=selectOptions selectedValue=selectedSortOrder/>

                                    <button class="nhsuk-button hee-listing__filter__submit" data-module="nhsuk-button" type="submit" hidden> Update </button>
                                    <input data-update-flag="listing" name="results_updated" type="hidden" value="false">
                                </form>
                            </div>
                            <#--  Search sort dropdown: END  -->

                            <#-- Active filters: START -->
                            <#if selectedImpactGroups?has_content>
                                <div class="hee-listing__tags">
                                    <#list selectedImpactGroups as impactGroup>
                                        <div class="nhsuk-filter-tag nhsuk-tag" data-filter="${impactGroup}">
                                            <span>${impactGroupMap[impactGroup]}</span>
                                            <a class="nhsuk-filter-tag__icon">Remove</a>
                                        </div>
                                    </#list>
                                </div>
                            </#if>
                            <#-- Active filters: END -->
                        </div>
                        <#--  Search result summary: END  -->

                        <#if pageable??>
                            <#--  Search results: START  -->
                            <div class="hee-listing__results">
                                <@.vars["${document.listingPageType}ListItem"]
                                    items=pageable.items
                                    impactGroupMap=impactGroupMap
                                    impactTypesMap=impactTypesMap
                                    sectorMap=sectorMap
                                    regionMap=regionMap
                                    providerMap=providerMap/>
                            </div>
                            <#--  Search results: END  -->

                            <#--  Pagination  -->
                            <#include "../../include/pagination-nhs.ftl">
                        </#if>
                    </div>
                </div>
            </div>
            <#--  Main sections: END  -->
        </div>
        <#--  Main content: END  -->
    </main>
</#if>
