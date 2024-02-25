<#-- @ftlvariable name="labelKey" type="java.lang.String" -->
<#-- @ftlvariable name="selectedFilters" type="java.util.List" -->
<#-- @ftlvariable name="filterMap" type="java.util.Map" -->

<#--  Renders active/selected listing filter tags for checkbox-based filters  -->
<#macro activeFiltersForCheckboxGroup labelKey selectedFilters filterMap>
    <#if selectedFilters?has_content && doesFiltersContainsAnySelectedFilter(selectedFilters, filterMap)>
        <div class="hee-listing__tags">
            <div class="hee-listing__tags__group">
                <label><@fmt.message key="${labelKey}"/>:</label>
                <@filterTags selectedFilters=selectedFilters filterMap=filterMap />
            </div>
        </div>
    </#if>
</#macro>

<#--  Renders active/selected listing filter tags for selectbox-based filters  -->
<#macro activeFiltersForSelectboxGroup labelKey parentGroupSelectedFilters subGroupSelectedFilters parentGroupFilterMap subGroupFilterMap>
    <#if parentGroupSelectedFilters?has_content && (doesFiltersContainsAnySelectedFilter(parentGroupSelectedFilters, parentGroupFilterMap) || doesFiltersContainsAnySelectedFilter(subGroupSelectedFilters, subGroupFilterMap))>
        <div class="hee-listing__tags">
            <div class="hee-listing__tags__group">
                <label><@fmt.message key="${labelKey}"/>:</label>
                <@filterTags selectedFilters=parentGroupSelectedFilters filterMap=parentGroupFilterMap />
                <@filterTags selectedFilters=subGroupSelectedFilters filterMap=subGroupFilterMap />
            </div>
        </div>
    </#if>
</#macro>

<#--  Renders the given filters as active tags  -->
<#macro filterTags selectedFilters filterMap>
    <#list selectedFilters as tag>
        <#if filterMap[tag]??>
            <div class="nhsuk-filter-tag nhsuk-tag" data-filter="${tag}">
                <span>${filterMap[tag]}</span>
                <a class="nhsuk-filter-tag__icon">Remove</a>
            </div>
        </#if>
    </#list>
</#macro>

<#--  Returns true if the filters (filterMap) contains any of the selected filters (selectedFilters).
      Otherwise, returns false  -->
<#function doesFiltersContainsAnySelectedFilter selectedFilters filterMap>
    <#list selectedFilters as selectedFilter>
        <#if filterMap[selectedFilter]??>
            <#return true/>
        </#if>
    </#list>

    <#return false/>
</#function>