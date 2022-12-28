<#-- @ftlvariable name="title" type="java.lang.String" -->
<#-- @ftlvariable name="name" type="java.lang.String" -->
<#-- @ftlvariable name="items" type="[java.util.Map, java.util.List]" -->
<#-- @ftlvariable name="selectedItemsList" type="java.util.List" -->
<#-- @ftlvariable name="facet" type="org.hippoecm.hst.content.beans.standard.HippoFolderBean" -->

<#--  Returns the facet count for the given value  -->
<#function getValueFacetCount value facet>
    <#assign valueCount=0>
    <#list facet.folders as valueFacet>
        <#if valueFacet.name=value>
            <#assign valueCount=valueFacet.count>
            <#break>
        </#if>
    </#list>

    <#return valueCount>
</#function>

<#macro checkboxGroup title name items selectedItemsList facet>
    <div class="nhsuk-form-group">
        <fieldset class="nhsuk-fieldset">
            <legend class="nhsuk-fieldset__legend">
                ${title}
            </legend>
            <div class="nhsuk-checkboxes">
                <#if items?is_hash>
                    <#list items as value, text>
                        <@checkboxItem name=name value=value text=text selected=selectedItemsList?seq_contains("${value}") facet=facet />
                    </#list>
                <#elseif items?is_sequence>
                    <#list items as value>
                        <#assign strValue="${(value?is_number)?then(value?c, value)}">

                        <@checkboxItem name=name value=strValue text=strValue selected=selectedItemsList?seq_contains("${strValue}") facet=facet />
                    </#list>
                </#if>
            </div>
        </fieldset>
    </div>
</#macro>

<#macro checkboxItem name value text selected facet>
    <#assign valueCountUpdatedText=text>
    <#if facet?? && facet.folders??>
        <#assign valueCount=getValueFacetCount(value, facet)>
        <#if valueCount == 0>
            <#return>
        </#if>

        <#assign valueCountUpdatedText="${text} [${valueCount}]">
    </#if>

    <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="${name}--${value}" name="${name}" type="checkbox" value="${value}" ${selected?then('checked', '')}>
        <label class="nhsuk-label nhsuk-checkboxes__label" for="${name}--${value}">${valueCountUpdatedText}</label>
    </div>
</#macro>
