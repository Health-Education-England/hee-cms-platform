<#ftl output_format="HTML">

<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/select.ftl">
<#include "../macros/checkbox-group-updated.ftl">
<#include "../macros/selectbox-group.ftl">
<#include "../macros/active-filters.ftl">
<#include "../macros/micro-hero.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.listing"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->
<#-- @ftlvariable name="searchText" type="java.lang.String" -->
<#-- @ftlvariable name="listingFilters" type="java.util.List<uk.nhs.hee.web.components.ListingFilter>" -->
<#-- @ftlvariable name="selected{Filter}List" type="java.util.List" -->
<#-- @ftlvariable name="selectedSub{Filter}List" type="java.util.List" -->
<#-- @ftlvariable name="{filter}Map" type="java.util.Map" -->
<#-- @ftlvariable name="sub{Filter}Map" type="java.util.Map" -->
<#-- @ftlvariable name="selectedSortOrder" type="java.lang.String" -->


<#--  Adds the given 'selectedFilters' as hidden inputs  -->
<#macro addSelectedFiltersAsHiddenInput name selectedFilters>
    <#list selectedFilters as filter>
        <input type="hidden" name="${name}" value="${filter}">
    </#list>
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
                        <#list listingFilters as filter>
                            <#switch filter.queryParameter>
                                <#case "clinicalDiscipline">
                                    <#--  Clinical discipline filter  -->
                                    <@checkboxGroup
                                        name=filter.queryParameter
                                        titleKey="clinical_discipline.label"
                                        items=clinicalDisciplineMap!
                                        selectedItemsList=selectedClinicalDisciplineList />
                                    <#break>
                                <#case "newsType">
                                    <#--  News type filter  -->
                                    <@checkboxGroup
                                        name=filter.queryParameter
                                        titleKey="news_type.label"
                                        items=newsTypeMap!
                                        selectedItemsList=selectedNewsTypeList />
                                    <#break>
                                <#case "profession">
                                    <#--  Profession filter  -->
                                    <@selectboxGroup
                                        parentGroupTitleKey="profession.label"
                                        subGroupTitleKey="sub_profession.label"
                                        parentGroupName=filter.queryParameter
                                        subGroupName="subProfession"
                                        parentGroupDefaultOptionLabelKey="profession.filter.default.option.label"
                                        subGroupDefaultOptionLabelKey="sub_profession.filter.default.option.label"
                                        parentGroupMap=professionMap!
                                        selectedParentGroupItems=selectedProfessionList
                                        subGroupMap=subProfessionMap!
                                        selectedSubGroupItems=selectedSubProfessionList />
                                    <#break>
                                <#case "publicationType">
                                    <#--  Publication type filter  -->
                                    <@checkboxGroup
                                        name=filter.queryParameter
                                        titleKey="publication_type.label"
                                        items=publicationTypeMap!
                                        selectedItemsList=selectedPublicationTypeList />
                                    <#break>
                                <#case "tag">
                                    <#--  Tag filter  -->
                                    <@checkboxGroup
                                        name=filter.queryParameter
                                        titleKey="tag.label"
                                        items=tagMap!
                                        selectedItemsList=selectedTagList />
                                    <#break>
                                <#case "topic">
                                    <#--  Topic filter  -->
                                    <@selectboxGroup
                                        parentGroupTitleKey="topic.label"
                                        subGroupTitleKey="sub_topic.label"
                                        parentGroupName=filter.queryParameter
                                        subGroupName="subTopic"
                                        parentGroupDefaultOptionLabelKey="topic.filter.default.option.label"
                                        subGroupDefaultOptionLabelKey="sub_topic.filter.default.option.label"
                                        parentGroupMap=topicMap!
                                        selectedParentGroupItems=selectedTopicList
                                        subGroupMap=subTopicMap!
                                        selectedSubGroupItems=selectedSubTopicList />
                                    <#break>
                                <#case "trainingType">
                                    <#--  Training type filter  -->
                                    <@checkboxGroup
                                        name=filter.queryParameter
                                        titleKey="training_type.label"
                                        items=trainingTypeMap!
                                        selectedItemsList=selectedTrainingTypeList />
                                    <#break>
                                <#default>
                            </#switch>
                        </#list>
                    </div>
                    <#--  Filter group: END  -->

                    <#if listingType='trainingprogramme'>
                        <input type="hidden" name="sortBy" value="az">
                    <#else>
                        <input type="hidden" name="sortBy" value="${selectedSortOrder}">
                    </#if>

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
                            <div class="hee-listing__count${(listingType='trainingprogramme')?then(' no-sort-filter', '')}">
                                <h2 class="hee-listing__title nhsuk-heading-l">
                                    ${pageable.total} <@fmt.message key="results.count.text"/>
                                </h2>
                            </div>
                            <#--  Result count: END  -->

                            <#--  Search sort dropdown: START  -->
                            <#if listingType!='trainingprogramme'>
                                <div class="hee-listing__filter">
                                    <@hst.renderURL var="pageLink" />
                                    <form method="get" class="hee-listing__filter__sort" action="${pageLink}">
                                        <#--  Adds the selected filters as hidden inputs (to resubmit them during sort selection change)  -->
                                        <#list listingFilters as filter>
                                            <#switch filter.queryParameter>
                                                <#case "clinicalDiscipline">
                                                    <#--  Selected clinical disciplines  -->
                                                    <@addSelectedFiltersAsHiddenInput name=filter.queryParameter selectedFilters=selectedClinicalDisciplineList!/>
                                                    <#break>
                                                <#case "newsType">
                                                    <#--  Selected news type  -->
                                                    <@addSelectedFiltersAsHiddenInput name=filter.queryParameter selectedFilters=selectedNewsTypeList!/>
                                                    <#break>
                                                <#case "profession">
                                                    <#--  Selected professions  -->
                                                    <@addSelectedFiltersAsHiddenInput name=filter.queryParameter selectedFilters=selectedProfessionList!/>

                                                    <#--  Selected sub professions  -->
                                                    <#if selectedSubProfessionList?has_content>
                                                        <@addSelectedFiltersAsHiddenInput name="sub${filter.queryParameter?cap_first}" selectedFilters=selectedSubProfessionList!/>
                                                    </#if>
                                                    <#break>
                                                <#case "publicationType">
                                                    <#--  Selected publication types  -->
                                                    <@addSelectedFiltersAsHiddenInput name=filter.queryParameter selectedFilters=selectedPublicationTypeList!/>
                                                    <#break>
                                                <#case "tag">
                                                    <#--  Selected tags  -->
                                                    <@addSelectedFiltersAsHiddenInput name=filter.queryParameter selectedFilters=selectedTagList!/>
                                                    <#break>
                                                <#case "topic">
                                                    <#--  Selected topics  -->
                                                    <@addSelectedFiltersAsHiddenInput name=filter.queryParameter selectedFilters=selectedTopicList!/>

                                                    <#--  Selected sub topics  -->
                                                    <#if selectedSubTopicList?has_content>
                                                        <@addSelectedFiltersAsHiddenInput name="sub${filter.queryParameter?cap_first}" selectedFilters=selectedSubTopicList!/>
                                                    </#if>
                                                    <#break>
                                                <#case "trainingType">
                                                    <#--  Selected training types  -->
                                                    <@addSelectedFiltersAsHiddenInput name=filter.queryParameter selectedFilters=selectedTrainingTypeList!/>
                                                    <#break>
                                                <#default>
                                            </#switch>

                                            <#if selectedFilters?has_content>
                                                <#list selectedFilters as selectedFilter>
                                                    <input type="hidden" name="${filter.queryParameter}" value="${selectedFilter}">
                                                </#list>
                                            </#if>
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
                            </#if>
                            <#--  Search sort dropdown: END  -->

                            <#-- Active filters: START -->
                            <#list listingFilters as filter>
                                <#switch filter.queryParameter>
                                    <#case "clinicalDiscipline">
                                        <#-- Active clinical disciplines  -->
                                        <@activeFiltersForCheckboxGroup
                                            labelKey="clinical_discipline.label"
                                            selectedFilters=selectedClinicalDisciplineList
                                            filterMap=clinicalDisciplineMap! />
                                        <#break>
                                    <#case "newsType">
                                        <#-- Active news type  -->
                                        <@activeFiltersForCheckboxGroup
                                            labelKey="news_type.label"
                                            selectedFilters=selectedNewsTypeList
                                            filterMap=newsTypeMap! />
                                        <#break>
                                    <#case "profession">
                                        <#-- Active profession & sub-profession -->
                                        <@activeFiltersForSelectboxGroup
                                            labelKey="profession.label"
                                            parentGroupSelectedFilters=selectedProfessionList
                                            subGroupSelectedFilters=selectedSubProfessionList
                                            parentGroupFilterMap=professionMap!
                                            subGroupFilterMap=subProfessionMap! />
                                        <#break>
                                    <#case "publicationType">
                                        <#-- Active publication types  -->
                                        <@activeFiltersForCheckboxGroup
                                            labelKey="publication_type.label"
                                            selectedFilters=selectedPublicationTypeList
                                            filterMap=publicationTypeMap! />
                                        <#break>
                                    <#case "tag">
                                        <#-- Active tags  -->
                                        <@activeFiltersForCheckboxGroup
                                            labelKey="tag.label"
                                            selectedFilters=selectedTagList
                                            filterMap=tagMap! />
                                        <#break>
                                    <#case "topic">
                                        <#-- Active topic & sub-topic -->
                                        <@activeFiltersForSelectboxGroup
                                            labelKey="topic.label"
                                            parentGroupSelectedFilters=selectedTopicList
                                            subGroupSelectedFilters=selectedSubTopicList
                                            parentGroupFilterMap=topicMap!
                                            subGroupFilterMap=subTopicMap! />
                                        <#break>
                                    <#case "trainingType">
                                        <#-- Active training types  -->
                                        <@activeFiltersForCheckboxGroup
                                            labelKey="training_type.label"
                                            selectedFilters=selectedTrainingTypeList
                                            filterMap=trainingTypeMap! />
                                        <#break>
                                    <#default>
                                </#switch>
                            </#list>
                            <#-- Active filters: END -->
                        </div>
                        <#--  Search result summary: END  -->

                        <#if pageable??>
                            <#--  Collection/listing results: START  -->
                            <div class="hee-listing__results">
                                <#if pageable.total=0>
                                    <#--  No results found msg  -->
                                    <p><strong><@fmt.message key="no_results.text"/></strong></p>
                                <#else>
                                    <#--  Results cards  -->
                                    <@.vars["${listingType}ListItem"] items=pageable.items/>

                                    <#--  Pagination  -->
                                    <#include "../../include/pagination-nhs.ftl">
                                </#if>
                            </div>
                            <#--  Collection/listing results: END  -->
                        </#if>
                    </div>
                </div>
            </div>
            <#--  Main sections: END  -->
        </div>
        <#--  Main content: END  -->
    </main>
</#if>