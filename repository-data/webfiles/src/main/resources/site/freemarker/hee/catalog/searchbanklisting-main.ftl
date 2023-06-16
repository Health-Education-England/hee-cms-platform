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
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.SearchBank" -->
<#-- @ftlvariable name="topicMap" type="java.util.Map" -->
<#-- @ftlvariable name="keyTermMap" type="java.util.Map" -->
<#-- @ftlvariable name="providerMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedTopics" type="java.util.List" -->

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
                        <#--  Topics filter: START  -->
                        <div class="nhsuk-filter__group">
                            <@fmt.message key="filter.topic.label" var="topicLabel"/>
                            <@fmt.message key="filter.clear.label" var="clearLabel"/>

                            <a class="nhsuk-filter__group__clear" href="#">${clearLabel}</a>
                            <@checkboxGroup title=topicLabel name="topic" items=topicMap selectedItemsList=selectedTopics />
                        </div>
                        <#--  Topics filter: END  -->
                    </div>
                    <#--  Filter group: END  -->

                    <input type="hidden" name="sortBy" value="${selectedSortOrder}">
                    <button class="nhsuk-button nhsuk-filter__submit" type="submit" hidden>Update results</button>
                </form>
                <#--  Search filters: END  -->
            </aside>
            <#--  Left bar: END  -->

            <#--  Main sections: START  -->
            <div class="page__main">
                <div class="page__content">
                    <div class="hee-listing">
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
                                    <#list selectedTopics as topic>
                                        <input type="hidden" name="topic" value="${topic}">
                                    </#list>
                                    <@fmt.message key="sort.label" var="sortLabel"/>
                                    <@fmt.message key="sort.option.oldest" var="sortByOldestLabel"/>
                                    <@fmt.message key="sort.option.newest" var="sortByNewestLabel"/>
                                    <@fmt.message key="sort.option.az" var="sortByAZ"/>
                                    <#assign selectOptions= {"asc": "${sortByOldestLabel}", "desc":"${sortByNewestLabel}", "az":"${sortByAZ}"} />
                                    <@select label="${sortLabel}" name="sortBy" optionsMap=selectOptions selectedValue=selectedSortOrder/>
                                    <button class="nhsuk-button hee-listing__filter__submit" type="submit" hidden>Update</button>
                                </form>
                            </div>
                            <#--  Search sort dropdown: END  -->
                        </div>
                        <#--  Search result summary: END  -->

                        <#-- Active Filters -->
                        <#if selectedTopics?has_content>
                            <div class="nhsuk-listing__active-filters nhsuk-u-margin-bottom-5">
                                <#list selectedTopics as topic>
                                    <div class="nhsuk-filter-tag nhsuk-tag" data-filter="${topic
                                    }">
                                        <span>${topicMap[topic]}</span>
                                        <@hst.link path='/static/assets/icons/icon-close-white.svg' var="closeIcon"/>
                                        <img class="nhsuk-filter-tag__icon" src="${closeIcon}" alt="Remove" hidden/>
                                    </div>
                                </#list>
                            </div>
                        </#if>
                        <#-- End Active Filters -->

                        <#if pageable??>
                            <#--  Search results: START  -->
                            <div class="hee-listing__results">
                                <@.vars["${document.listingPageType}ListItem"]
                                    items=pageable.items
                                    topicMap=topicMap
                                    keyTermMap=keyTermMap
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
