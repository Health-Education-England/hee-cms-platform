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
    <div class="nhsuk-filter__groups">
        <@fmt.message key="${titleKey}" var="filterTitle"/>

        <div class="nhsuk-filter__group">
            <@checkboxGroup title="${filterTitle}" name="${name}" items=itemMap selectedItemsList=selectedItemList facet=facet! />
        </div>
    </div>
</#macro>

<#if document??>
    <#if document.microHero??>
        <@microHero microHeroImage=document.microHero />
    </#if>
    <main id="maincontent" role="main" class="nhsuk-main-wrapper" xmlns="http://www.w3.org/1999/html">
        <div class="nhsuk-width-container">
            <#--  Title & subtitle  -->
            <h1>
                <span role="text">${document.title}
                    <span class="nhsuk-caption-xl nhsuk-caption--bottom">
                        ${document.subtitle}
                    </span>
                </span>
            </h1>

            <#--  Summary  -->
            <#if document.summary??>
                <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
            </#if>

            <#--  Filters  -->
            <div class="nhsuk-listing">
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-one-third">
                        <#-- Filters -->
                        <@hst.renderURL var="pagelink"/>
                        <form class="nhsuk-filter" method="get" action="${pagelink}">
                            <@fmt.message key="filters.label" var="filtersLabel"/>
                            <p class="nhsuk-filter__title nhsuk-heading-l">${filtersLabel}</p>

                            <#--  Renders Publication type checkbox filter  -->
                            <@renderCheckboxGroup name="publicationType" titleKey="publication.type" itemMap=publicationTypeMap selectedItemList=selectedPublicationTypes facet=publicationTypeFacet! />

                            <#--  Renders Publication professions checkbox filter  -->
                            <@renderCheckboxGroup name="publicationProfession" titleKey="publication.profession" itemMap=publicationProfessionMap selectedItemList=selectedPublicationProfessions facet=publicationProfessionFacet! />

                            <#--  Renders Publication topics checkbox filter  -->
                            <@renderCheckboxGroup name="publicationTopic" titleKey="publication.topic" itemMap=publicationTopicMap selectedItemList=selectedPublicationTopics facet=publicationTopicFacet! />

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
                            <form method="get" class="nhsuk-listing__sort o-flex o-flex--align-center" action="${pagelink}">
                                <div class="o-flex__grow">
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
                                </div>
                            </form>
                            <#-- End Sort DropDown -->
                        </div>

                        <#if pageable??>
                            <#--  Search results  -->
                            <ul class="nhsuk-list nhsuk-list--border">
                                <@publicationListItem items=pageable.items publicationTypeMap=publicationTypeMap/>
                            </ul>

                            <#--  Pagination  -->
                            <#include "../../include/pagination-nhs.ftl">
                        </#if>
                    </div>
                </div>
            </div>
        </div>
    </main>
</#if>
