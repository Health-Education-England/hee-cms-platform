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
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.TrainingProgrammePage" -->
<#-- @ftlvariable name="searchText" type="java.lang.String" -->
<#-- @ftlvariable name="selectedTrainingTypes" type="java.util.List" -->
<#-- @ftlvariable name="selectedTrainingTopics" type="java.util.List" -->
<#-- @ftlvariable name="selectedTrainingProfessions" type="java.util.List" -->
<#-- @ftlvariable name="selectedSortOrder" type="java.lang.String" -->
<#-- @ftlvariable name="trainingTypeMap" type="java.util.Map" -->
<#-- @ftlvariable name="trainingTopicMap" type="java.util.Map" -->
<#-- @ftlvariable name="trainingProfessionMap" type="java.util.Map" -->
<#-- @ftlvariable name="trainingTypeFacet" type="org.hippoecm.hst.content.beans.standard.HippoFolderBean" -->
<#-- @ftlvariable name="trainingTopicFacet" type="org.hippoecm.hst.content.beans.standard.HippoFolderBean" -->
<#-- @ftlvariable name="trainingProfessionFacet" type="org.hippoecm.hst.content.beans.standard.HippoFolderBean" -->

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
                        <#--  Training type filter  -->
                        <@renderCheckboxGroup name="trainingType" titleKey="training.type" itemMap=trainingTypeMap selectedItemList=selectedTrainingTypes facet=trainingTypeFacet! />

                        <#--  Training professions filter  -->
                        <@renderCheckboxGroup name="trainingProfession" titleKey="training.profession" itemMap=trainingProfessionMap selectedItemList=selectedTrainingProfessions facet=trainingProfessionFacet! />

                        <#--  Training topics filter  -->
                        <@renderCheckboxGroup name="trainingTopic" titleKey="training.topic" itemMap=trainingTopicMap selectedItemList=selectedTrainingTopics facet=trainingTopicFacet! />

                        <#--  Training topics filter  -->
                        <@renderCheckboxGroup name="trainingDiscipline" titleKey="training.discipline" itemMap=clinicalDisciplineMap selectedItemList=selectedClinicalDiscipline facet=trainingDisciplineFacet! />
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
                                    <#--  Training type hidden input  -->
                                    <#list selectedTrainingTypes as trainingType>
                                        <input type="hidden" name="trainingType" value="${trainingType}">
                                    </#list>

                                    <#--  Training topics hidden inputs  -->
                                    <#list selectedTrainingTopics as trainingTopic>
                                        <input type="hidden" name="trainingTopic" value="${trainingTopic}">
                                    </#list>

                                    <#--  Training professions hidden inputs  -->
                                    <#list selectedTrainingProfessions as trainingProfession>
                                        <input type="hidden" name="trainingProfession" value="${trainingProfession}">
                                    </#list>

                                    <#list selectedClinicalDiscipline as trainingDiscipline>
                                        <input type="hidden" name="trainingDiscipline" value="${trainingDiscipline}">
                                    </#list>

                                    <@fmt.message key="sort.label" var="sortLabel"/>
                                    <@fmt.message key="sort.option.oldest" var="sortByOldestLabel"/>
                                    <@fmt.message key="sort.option.newest" var="sortByNewestLabel"/>
                                    <@fmt.message key="sort.option.az" var="sortByAZ"/>
                                    <#assign selectOptions= { "az":"${sortByAZ}", "desc":"${sortByNewestLabel}", "asc":"${sortByOldestLabel}" } />
                                    <@select label="${sortLabel}" name="sortBy" optionsMap=selectOptions selectedValue=selectedSortOrder/>

                                    <button class="nhsuk-button hee-listing__filter__submit" data-module="nhsuk-button" type="submit" hidden> Update </button>
                                    <input data-update-flag="listing" name="results_updated" type="hidden" value="false">
                                </form>
                            </div>
                            <#--  Search sort dropdown: END  -->
                        </div>
                        <#--  Search result summary: END  -->

                        <#if pageable??>
                            <#--  Search results: START  -->
                            <div class="hee-listing__results">
                                <@trainingListItem items=pageable.items/>
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
