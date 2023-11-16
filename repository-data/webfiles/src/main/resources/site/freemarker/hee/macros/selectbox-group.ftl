<#-- @ftlvariable name="parentGroupTitleKey" type="java.lang.String" -->
<#-- @ftlvariable name="subGroupTitleKey" type="java.lang.String" -->
<#-- @ftlvariable name="parentGroupName" type="java.lang.String" -->
<#-- @ftlvariable name="subGroupName" type="java.lang.String" -->
<#-- @ftlvariable name="parentGroupDefaultOptionLabel" type="java.lang.String" -->
<#-- @ftlvariable name="subGroupDefaultOptionLabel" type="java.lang.String" -->
<#-- @ftlvariable name="parentGroupMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedParentGroupItems" type="java.util.List" -->
<#-- @ftlvariable name="subGroupMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedSubGroupItems" type="java.util.List" -->

<#--  Renders the given parent and sub filters as one group  -->
<#macro selectboxGroup parentGroupTitleKey subGroupTitleKey parentGroupName subGroupName parentGroupDefaultOptionLabelKey subGroupDefaultOptionLabelKey parentGroupMap selectedParentGroupItems subGroupMap selectedSubGroupItems>
    <#if parentGroupMap?has_content>
        <div class="nhsuk-filter__group has-subgroup">
            <#--  Clear link  -->
            <a class="nhsuk-filter__group__clear" href="#"><@fmt.message key="filter.clear.label"/></a>

            <#--  Parent select box group  -->
            <div class="nhsuk-form-group parent-group">
                <fieldset class="nhsuk-fieldset">
                    <legend class="nhsuk-fieldset__legend"><@fmt.message key="${parentGroupTitleKey}"/></legend>
                    <@selectBox
                        titleKey=parentGroupTitleKey
                        name=parentGroupName
                        defaultOptionLabelKey=parentGroupDefaultOptionLabelKey
                        optionMap=parentGroupMap
                        selectedOptionItems=selectedParentGroupItems />
                </fieldset>
            </div>

            <#--  Sub select box group  -->
            <div class="nhsuk-form-group sub-group">
                <@selectBox
                    titleKey=subGroupTitleKey
                    name=subGroupName
                    defaultOptionLabelKey=subGroupDefaultOptionLabelKey
                    optionMap=subGroupMap
                    selectedOptionItems=selectedSubGroupItems />
            </div>
        </div>
    </#if>
</#macro>

<#--  Renders the given filter as a select box/dropdown  -->
<#macro selectBox titleKey name defaultOptionLabelKey optionMap selectedOptionItems>
    <div class="nhsuk-form-group">
        <label class="nhsuk-label" for="${name}"><@fmt.message key="${titleKey}"/></label>

        <select class="nhsuk-select" id="${name}" name="${name}" ${(optionMap?has_content)?then('', 'disabled')}>
            <option value="" selected><@fmt.message key="${defaultOptionLabelKey}"/></option>
            <#list optionMap as value, label>
                <option value="${value}"${(selectedOptionItems?seq_contains(value))?then('selected', '')}>${label}</option>
            </#list>
        </select>
    </div>
</#macro>
