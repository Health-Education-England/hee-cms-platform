<#include "../../include/imports.ftl">
<#-- @ftlvariable name="categoriesMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedCategories" type="java.util.List" -->

<@hst.renderURL var="pagelink">
</@hst.renderURL>
<form class="nhsuk-filter" method="get" action="${pagelink}">
    <@fmt.message key="filters.label" var="filtersLabel"/>
    <p class="nhsuk-filter__title nhsuk-heading-l">${filtersLabel}</p>

    <div class="nhsuk-filter__groups">
        <@fmt.message key="filter.category.label" var="categoryLabel"/>
        <div class="nhsuk-filter__group">
            <@checkboxes title=categoryLabel?html name="category" itemsMap=categoriesMap selectedItemsList=selectedCategories />
        </div>
    </div>
    <input type="hidden" name="sortByDate" value="${selectedSortOrder}">

    <button class="nhsuk-filter__submit" type="submit">
        Update results
    </button>
</form>

<#macro checkboxes title name itemsMap selectedItemsList>
    <div class="nhsuk-form-group">
        <fieldset class="nhsuk-fieldset">
            <legend class="nhsuk-fieldset__legend">
                ${title}
            </legend>
            <div class="nhsuk-checkboxes">
                <#list itemsMap as value, text >
                    <div class="nhsuk-checkboxes__item">
                        <#if selectedItemsList?seq_contains("${value}")>
                            <#assign  isSelected = 'checked'/>
                        <#else>
                            <#assign  isSelected = ''/>
                        </#if>
                        <input class="nhsuk-checkboxes__input" name="${name}"
                               type="checkbox"
                               value="${value}" ${isSelected}>
                        <label class="nhsuk-label nhsuk-checkboxes__label"
                               for="${name}">
                            ${text?html}
                        </label>
                    </div>
                </#list>
            </div>
        </fieldset>
    </div>
</#macro>
