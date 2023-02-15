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
        <@fmt.message key="${titleKey}" var="filterTitle"/>
        <a class="nhsuk-filter__group__clear " href="#">Clear</a>
        <@checkboxGroup title="${filterTitle}" name="${name}" items=itemMap selectedItemsList=selectedItemList facet=facet! />
    </div>
</#macro>

<#if document??>
    <#if document.microHero??>
        <@microHero microHeroImage=document.microHero />
    </#if>
    <main id="maincontent" role="main" class="page page--leftbar">
        <div class="page__header">
            <div class="nhsuk-width-container">
                <#--  Title & subtitle  -->
                <h1>${document.title}</h1>
                <span class="nhsuk-caption-xl">${document.subtitle}</span>
                <#--  Summary  -->
                <#if document.summary??>
                    <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                </#if>
            </div>
        </div>

            <#--  Filters  -->
        <div class="nhsuk-width-container">
            <div class="page__layout">
                <aside class="page__leftbar">
                    <#-- Filters -->
                    <@hst.renderURL var="pagelink"/>
                    <form class="nhsuk-filter nhsuk-filter--js" method="get" action="${pagelink}">
                        <@fmt.message key="filters.label" var="filtersLabel"/>
                        <p class="nhsuk-filter__title nhsuk-heading-l">${filtersLabel}</p>

                        <div class="nhsuk-filter__groups">
                            <#--  Renders Publication type checkbox filter  -->
                            <@renderCheckboxGroup name="publicationType" titleKey="publication.type" itemMap=publicationTypeMap selectedItemList=selectedPublicationTypes facet=publicationTypeFacet! />

                            <#--  Renders Publication professions checkbox filter  -->
                            <@renderCheckboxGroup name="publicationProfession" titleKey="publication.profession" itemMap=publicationProfessionMap selectedItemList=selectedPublicationProfessions facet=publicationProfessionFacet! />

                            <#--  Renders Publication topics checkbox filter  -->
                            <@renderCheckboxGroup name="publicationTopic" titleKey="publication.topic" itemMap=publicationTopicMap selectedItemList=selectedPublicationTopics facet=publicationTopicFacet! />
                        </div>
                        <input type="hidden" name="sortBy" value="${selectedSortOrder}">
                    </form>
                    <#-- End Filters -->
                </aside>

                <div class="page__main">
                    <div class="hee-listing">
                        <div class="hee-listing__summary">
                            <#-- Results number -->
                            <div class="hee-listing__count">
                                <@fmt.message key="results.count.text" var="resultsCountText"/>
                                <h2 class="nhsuk-listing__title nhsuk-heading-l">
                                    ${pageable.total} ${resultsCountText}
                                </h2>
                            </div>
                            <#-- End Results number -->

                            <#-- Sort DropDown-->
                            <div class="hee-listing__filter">
                                <@hst.renderURL var="pagelink" />
                                <form method="get" class="hee-listing__filter__sort" action="${pagelink}">

                                    <#list selectedPublicationTypes as publicationType>
                                        <input type="hidden" name="publicationType" value="${publicationType}">
                                    </#list>

                                    <#list selectedPublicationTopics as publicationTopic>
                                        <input type="hidden" name="publicationTopic" value="${publicationTopic}">
                                    </#list>

                                    <#list selectedPublicationProfessions as publicationProfession>
                                        <input type="hidden" name="publicationProfession" value="${publicationProfession}">
                                    </#list>

                                    <@fmt.message key="sort.label" var="sortLabel"/>
                                    <@fmt.message key="sort.option.oldest" var="sortByOldestLabel"/>
                                    <@fmt.message key="sort.option.newest" var="sortByNewestLabel"/>
                                    <@fmt.message key="sort.option.az" var="sortByAZ"/>
                                    <#assign selectOptions= { "az":"${sortByAZ}", "desc":"${sortByNewestLabel}", "asc":"${sortByOldestLabel}" } />
                                    <@select label="${sortLabel}" name="sortBy" optionsMap=selectOptions selectedValue=selectedSortOrder/>
                                </form>
                            </div>
                            <#-- End Sort DropDown -->
                        </div>
                    </div>

                    <#if pageable??>
                        <#--  Search results  -->
                        <div class="hee-listing__results">
                            <@publicationListItem items=pageable.items publicationTypeMap=publicationTypeMap/>
                        </div>

                        <#--  Pagination  -->
                        <#include "../../include/pagination-nhs.ftl">
                    </#if>
                </div>
            </div>
        </div>
    </main>
</#if>
