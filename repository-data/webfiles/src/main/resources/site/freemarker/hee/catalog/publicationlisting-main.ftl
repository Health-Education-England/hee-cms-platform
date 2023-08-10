<#ftl output_format="HTML">

<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/select.ftl">
<#include "../macros/checkbox-group-with-filter-count.ftl">
<#include "../macros/micro-hero.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.listing"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->
<#-- @ftlvariable name="searchText" type="java.lang.String" -->
<#-- @ftlvariable name="selectedPublicationTypes" type="java.util.List" -->
<#-- @ftlvariable name="selectedPublicationTopics" type="java.util.List" -->
<#-- @ftlvariable name="selectedPublicationProfessions" type="java.util.List" -->
<#-- @ftlvariable name="selectedSortOrder" type="java.lang.String" -->
<#-- @ftlvariable name="publicationTypeMap" type="java.util.Map" -->
<#-- @ftlvariable name="publicationTopicMap" type="java.util.Map" -->
<#-- @ftlvariable name="publicationProfessionMap" type="java.util.Map" -->
<#-- @ftlvariable name="publicationTypeFacet" type="org.hippoecm.hst.content.beans.standard.HippoFolderBean" -->
<#-- @ftlvariable name="publicationTopicFacet" type="org.hippoecm.hst.content.beans.standard.HippoFolderBean" -->
<#-- @ftlvariable name="publicationProfessionFacet" type="org.hippoecm.hst.content.beans.standard.HippoFolderBean" -->

<#macro renderCheckboxGroup name titleKey itemMap selectedItemList facet>
    <div class="nhsuk-filter__group">
        <#--  Clear link  -->
        <@fmt.message key="filter.clear.label" var="clearLabel"/>
        <a class="nhsuk-filter__group__clear" href="#">${clearLabel}</a>

        <@fmt.message key="${titleKey}" var="filterTitle"/>
        <@checkboxGroup title="${filterTitle}" name="${name}" items=itemMap selectedItemsList=selectedItemList facet=facet! />
    </div>
</#macro>

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
                <span class="nhsuk-caption-xl">${document.subtitle}</span>

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
                        <#--  Publication type filter  -->
                        <@renderCheckboxGroup name="publicationType" titleKey="publication.type" itemMap=publicationTypeMap selectedItemList=selectedPublicationTypes facet=publicationTypeFacet! />

                        <#--  Publication professions filter  -->
                        <@renderCheckboxGroup name="publicationProfession" titleKey="publication.profession" itemMap=publicationProfessionMap selectedItemList=selectedPublicationProfessions facet=publicationProfessionFacet! />

                        <#--  Publication topics filter  -->
                        <@renderCheckboxGroup name="publicationTopic" titleKey="publication.topic" itemMap=publicationTopicMap selectedItemList=selectedPublicationTopics facet=publicationTopicFacet! />
                    </div>
                    <#--  Filter group: END  -->

                    <input type="hidden" name="sortBy" value="${selectedSortOrder}">
                    <button class="nhsuk-button nhsuk-filter__submit" data-module="nhsuk-button" type="submit" hidden> Update results </button>
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
                                    <#--  Publication type hidden input  -->
                                    <#list selectedPublicationTypes as publicationType>
                                        <input type="hidden" name="publicationType" value="${publicationType}">
                                    </#list>

                                    <#--  Publication topics hidden inputs  -->
                                    <#list selectedPublicationTopics as publicationTopic>
                                        <input type="hidden" name="publicationTopic" value="${publicationTopic}">
                                    </#list>

                                    <#--  Publication professions hidden inputs  -->
                                    <#list selectedPublicationProfessions as publicationProfession>
                                        <input type="hidden" name="publicationProfession" value="${publicationProfession}">
                                    </#list>

                                    <@fmt.message key="sort.label" var="sortLabel"/>
                                    <@fmt.message key="sort.option.oldest" var="sortByOldestLabel"/>
                                    <@fmt.message key="sort.option.newest" var="sortByNewestLabel"/>
                                    <@fmt.message key="sort.option.az" var="sortByAZ"/>
                                    <#assign selectOptions= { "az":"${sortByAZ}", "desc":"${sortByNewestLabel}", "asc":"${sortByOldestLabel}" } />
                                    <@select label="${sortLabel}" name="sortBy" optionsMap=selectOptions selectedValue=selectedSortOrder/>

                                    <button class="nhsuk-button hee-listing__filter__submit" data-module="nhsuk-button" type="submit" hidden> Update </button>
                                </form>
                            </div>
                            <#--  Search sort dropdown: END  -->
                        </div>
                        <#--  Search result summary: END  -->

                        <#if pageable??>
                            <#--  Search results: START  -->
                            <div class="hee-listing__results">
                                <@publicationListItem items=pageable.items publicationTypeMap=selectedPublicationTypes/>
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
