<#ftl output_format="HTML">

<#include "../../include/imports.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/select.ftl">
<#include "../macros/checkbox-group.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.listing"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.CaseStudy" -->
<#-- @ftlvariable name="impactGroupMap" type="java.util.Map" -->
<#-- @ftlvariable name="impactTypesMap" type="java.util.Map" -->
<#-- @ftlvariable name="sectorMap" type="java.util.Map" -->
<#-- @ftlvariable name="regionMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedImpactGroups" type="java.util.List" -->

<#if document??>
    <main id="maincontent" role="main" class="nhsuk-main-wrapper" xmlns="http://www.w3.org/1999/html">
        <div class="nhsuk-width-container">
            <@hst.link var="heroImage" hippobean=document.heroImage />
            <#if heroImage??>
                <section class="nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description" style="background-image: url('${heroImage}');">
                    <div class="nhsuk-hero__overlay">
                        <div class="nhsuk-width-container">
                            <div class="nhsuk-grid-row">
                                <div class="nhsuk-grid-column-two-thirds">
                                    <div class="nhsuk-hero-content">
                                        <h1 class="nhsuk-u-margin-bottom-3">${document.title}</h1>
                                        <p class="nhsuk-body-l nhsuk-u-margin-bottom-0"><@hst.html formattedText="${document.summary?replace('\n', '<br>')}"/></p>
                                        <span class="nhsuk-hero__arrow" aria-hidden="true"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <#else>
                <h1>
                    ${document.title}
                </h1>
                <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary?replace('\n', '<br>')}"/></p>
            </#if>
            <div class="nhsuk-listing">
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-one-third">
                        <#-- Filters -->
                        <@hst.renderURL var="pagelink"/>
                        <form class="nhsuk-filter" method="get" action="${pagelink}">
                            <@fmt.message key="filters.label" var="filtersLabel"/>
                            <p class="nhsuk-filter__title nhsuk-heading-l">${filtersLabel}</p>

                            <div class="nhsuk-filter__groups">
                                <@fmt.message key="casestudy.impact_group" var="impactGroupLabel"/>

                                <div class="nhsuk-filter__group">
                                    <@checkboxGroup title=impactGroupLabel name="impactGroup" items=impactGroupMap selectedItemsList=selectedImpactGroups />
                                </div>
                            </div>
                            <input type="hidden" name="sortBy" value="${selectedSortOrder}">
                        </form>
                        <#-- End Filters -->
                    </div>

                    <div class="nhsuk-listing__list nhsuk-grid-column-two-thirds">
                        <div class="nhsuk-listing__summary o-flex@tablet">
                            <#-- Results number -->
                            <@fmt.message key="results.count.text" var="resultsCountText"/>
                            <h2 class="nhsuk-listing__title nhsuk-heading-l o-flex__grow">
                                ${pageable.total} ${resultsCountText}
                            </h2>
                            <#-- End Results number -->

                            <#-- Sort DropDown-->
                            <@hst.renderURL var="pagelink" />
                            <form method="get" class="nhsuk-listing__sort o-flex o-flex--align-center"
                                  action="${pagelink}">
                                <div class="o-flex__grow">
                                    <#list selectedImpactGroups as impactGroup>
                                        <input type="hidden" name="impactGroup" value="${impactGroup}">
                                    </#list>
                                    <@fmt.message key="sort.label" var="sortLabel"/>
                                    <@fmt.message key="sort.option.oldest" var="sortByOldestLabel"/>
                                    <@fmt.message key="sort.option.newest" var="sortByNewestLabel"/>
                                    <@fmt.message key="sort.option.az" var="sortByAZ"/>
                                    <#assign selectOptions= {"asc": "${sortByOldestLabel}", "desc":"${sortByNewestLabel}", "az":"${sortByAZ}"} />
                                    <@select label="${sortLabel}" name="sortBy" optionsMap=selectOptions selectedValue=selectedSortOrder/>
                                </div>
                            </form>
                            <#-- End Sort DropDown -->
                        </div>

                        <#-- Active Filters -->
                        <#if selectedImpactGroups?has_content>
                            <div class="nhsuk-listing__active-filters nhsuk-u-margin-bottom-5">
                                <#list selectedImpactGroups as impactGroup>
                                    <div class="nhsuk-filter-tag nhsuk-tag" data-filter="${impactGroup}">
                                        <span>${impactGroupMap[impactGroup]}</span>
                                        <@hst.link path='/static/assets/icons/icon-close-white.svg' var="closeIcon"/>
                                        <img class="nhsuk-filter-tag__icon" src="${closeIcon}" alt="Remove" hidden/>
                                    </div>
                                </#list>
                            </div>
                        </#if>
                        <#-- End Active Filters -->

                        <#if pageable??>
                            <ul class="nhsuk-list nhsuk-list--border">
                                <@.vars["${document.listingPageType}ListItem"]
                                    items=pageable.items
                                    impactGroupMap=impactGroupMap
                                    impactTypesMap=impactTypesMap
                                    sectorMap=sectorMap
                                    regionMap=regionMap/>
                            </ul>
                            <#include "../../include/pagination-nhs.ftl">
                        </#if>
                    </div>
                </div>
            </div>
        </div>
    </main>
</#if>
