<#-- @ftlvariable name="title" type="java.lang.String" -->
<#-- @ftlvariable name="name" type="java.lang.String" -->
<#-- @ftlvariable name="items" type="[java.util.Map, java.util.List]" -->
<#-- @ftlvariable name="selectedItemsList" type="java.util.List" -->

<#--  Renders checkbox group filter based on the given parameters  -->
<#macro checkboxGroup name titleKey items selectedItemsList>
    <#if items?has_content>
        <div class="nhsuk-filter__group">
            <#--  Clear link  -->
            <a class="nhsuk-filter__group__clear" href="#"><@fmt.message key="filter.clear.label"/></a>

            <div class="nhsuk-form-group">
                <fieldset class="nhsuk-fieldset" aria-describedby="filter_${name}-hint">
                    <legend class="nhsuk-fieldset__legend"><@fmt.message key="${titleKey}"/></legend>
                    <div class="nhsuk-hint" id="filter_${name}-hint">${selectedItemsList?size} selected</div>
                    <div class="nhsuk-checkboxes">
                        <#if items?is_hash>
                            <#list items as value, text>
                                <@checkboxItem name=name value=value text=text selected=selectedItemsList?seq_contains("${value}") />
                            </#list>
                        <#elseif items?is_sequence>
                            <#list items?sort as value>
                                <#assign strValue="${(value?is_number)?then(value?c, value)}">

                                <@checkboxItem name=name value=strValue text=strValue selected=selectedItemsList?seq_contains("${strValue}") />
                            </#list>
                        </#if>
                    </div>
                </fieldset>
            </div>
        </div>
    </#if>
</#macro>

<#--  Renders a checkbox item based on the given parameters  -->
<#macro checkboxItem name value text selected>
    <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="${name}--${value}" name="${name}" type="checkbox" value="${value}" ${selected?then('checked', '')}>
        <label class="nhsuk-label nhsuk-checkboxes__label" for="${name}--${value}">${text}</label>
    </div>
</#macro>
