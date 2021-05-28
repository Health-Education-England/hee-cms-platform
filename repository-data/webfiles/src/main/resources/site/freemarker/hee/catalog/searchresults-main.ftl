<#ftl output_format="HTML">

<#include "../../include/imports.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/select.ftl">
<#include "../macros/checkbox-group.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.listing"/>

<#-- @ftlvariable name="searchText" type="java.lang.String" -->
<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="contentTypesMap" type="java.util.Map" -->
<#-- @ftlvariable name="item" type="[uk.nhs.hee.web.beans.Guidance, uk.nhs.hee.web.beans.LandingPage,...]" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="selectedContentTypes" type="java.util.List" -->

<#if document??>
    <main id="maincontent" role="main" class="nhsuk-main-wrapper" xmlns="http://www.w3.org/1999/html"
          xmlns="http://www.w3.org/1999/html">
        <div class="nhsuk-width-container">
            <h1>
                ${document.title}
            </h1>
            <p class="nhsuk-lede-text">${document.summary}</p>
            <form method="get" action="">
                <div class="nhsuk-form-group nhsuk-header__search-form--search-results">
                    <label class="nhsuk-label nhsuk-u-visually-hidden" for="search-field">Enter a search term</label>
                    <#list selectedContentTypes as contentType>
                        <input type="hidden" name="contentTypes" value="${contentType}">
                    </#list>
                    <input class="nhsuk-input nhsuk-search__input--search-results" type="search" name="q" autocomplete="off" id="search-field" value="${searchText!''}">
                    <button class="nhsuk-search__submit--search-results" type="submit">
                        <span class="nhsuk-u-visually-hidden">Submit</span>
                        <svg class="nhsuk-icon nhsuk-icon__search--search-results" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
                        </svg>
                    </button>
                </div>
            </form>
            <div class="nhsuk-listing">
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-one-third">
                        <#-- Filters -->
                        <@hst.renderURL var="pagelink"/>
                        <form class="nhsuk-filter" method="get" action="${pagelink}">
                            <@fmt.message key="filters.label" var="filtersLabel"/>
                            <p class="nhsuk-filter__title nhsuk-heading-l">${filtersLabel}</p>

                            <div class="nhsuk-filter__groups">
                                <@fmt.message key="filter.content_type.label" var="contentTypeLabel"/>
                                <@fmt.message key="filter.date.label" var="dateLabel"/>
                                <div class="nhsuk-filter__group">
                                    <@checkboxGroup title=contentTypeLabel name="contentTypes" items=contentTypesMap selectedItemsList=selectedContentTypes />
                                </div>
                            </div>
                            <input type="hidden" name="q" value="${searchText!''}">
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
                        </div>

                        <#-- Active Filters -->
                        <#if selectedContentTypes?has_content>
                            <div class="nhsuk-listing__active-filters nhsuk-u-margin-bottom-5">
                                <#list selectedContentTypes as contentType>
                                    <div class="nhsuk-filter-tag nhsuk-tag" data-filter="${contentType}">
                                        <span>${contentTypesMap[contentType]}</span>
                                        <@hst.link path='/static/assets/icons/icon-close-white.svg' var="closeIcon"/>
                                        <img class="nhsuk-filter-tag__icon" src="${closeIcon}" alt="Remove" hidden/>
                                    </div>
                                </#list>
                            </div>
                        </#if>
                        <#-- End Active Filters -->

                        <#if pageable??>
                            <ul class="nhsuk-list nhsuk-list--border">
                                <@searchListItem items=pageable.items/>
                            </ul>
                            <#include "../../include/pagination-nhs.ftl">
                        </#if>
                    </div>
                </div>
            </div>
        </div>
    </main>
</#if>
