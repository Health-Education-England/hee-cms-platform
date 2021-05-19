<#-- @ftlvariable name="items" type="[java.util.Map, java.util.List]" -->
<#-- @ftlvariable name="selectedItemsList" type="java.util.List" -->

<#macro checkboxGroup title name items selectedItemsList>
    <div class="nhsuk-form-group">
        <fieldset class="nhsuk-fieldset">
            <legend class="nhsuk-fieldset__legend">
                ${title}
            </legend>
            <div class="nhsuk-checkboxes">
                <#if items?is_hash>
                    <#list items as value, text>
                        <@checkboxItem name=name value=value text=text selected=selectedItemsList?seq_contains("${value}") />
                    </#list>
                <#elseif items?is_sequence>
                    <#list items as value>
                        <#assign strValue="${(value?is_number)?then(value?c, value)}">

                        <@checkboxItem name=name value=strValue text=strValue selected=selectedItemsList?seq_contains("${strValue}") />
                    </#list>
                </#if>
            </div>
        </fieldset>
    </div>
</#macro>

<#macro checkboxItem name value text selected>
    <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="${name}--${value}" name="${name}" type="checkbox" value="${value}" ${selected?then('checked', '')}>
        <label class="nhsuk-label nhsuk-checkboxes__label" for="${name}--${value}">${text}</label>
    </div>
</#macro>