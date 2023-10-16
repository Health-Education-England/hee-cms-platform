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

<#macro selectboxGroup title name defaultOptionLabel items selectedItemsList facet level1Selectbox>
    <div class="nhsuk-form-group"${(level1Selectbox)?then(' style="margin-bottom: 16px;"', '')}>
        <fieldset class="nhsuk-fieldset">
            <legend class="nhsuk-fieldset__legend"${(!level1Selectbox)?then(' style="background-image: none; padding-left: 0;"', '')}>
                ${title}
            </legend>
            <select class="nhsuk-select" name="${name}" style="width: 250px;" ${(!items?has_content)?then(' disabled', '')}>
                <option value="" disabled selected>${defaultOptionLabel}</option>
                <#--  <option value="" selected>${defaultOptionLabel}</option>  -->
                <#if items?is_hash>
                    <#list items as value, text>
                        <@optionItem name=name value=value text=text selected=selectedItemsList?seq_contains("${value}") facet=facet />
                    </#list>
                <#elseif items?is_sequence>
                    <#list items?sort as value>
                        <#assign strValue="${(value?is_number)?then(value?c, value)}">

                        <@optionItem name=name value=strValue text=strValue selected=selectedItemsList?seq_contains("${strValue}") facet=facet />
                    </#list>
                </#if>
            </select>
        </fieldset>
    </div>
</#macro>

<#macro optionItem name value text selected facet>
    <#assign valueCountUpdatedText=text>
    <#if facet?? && facet.folders??>
        <#assign valueCount=getValueFacetCount(value, facet)>
        <#if valueCount == 0>
            <#return>
        </#if>

        <#assign valueCountUpdatedText="${text} [${valueCount}]">
    </#if>

    <option id="${name}--${value}" value="${value}" ${selected?then('selected', '')}>${valueCountUpdatedText}</option>
</#macro>
