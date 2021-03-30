<#macro select label name optionsMap selectedValue="">
    <div class="nhsuk-form-group">
        <label class="nhsuk-label" for="${name}">
            ${label}
        </label>
        <select class="nhsuk-select" name="${name}">
            <#list optionsMap as optionValue, optionName>
                <#if selectedValue == optionValue>
                    <#assign  isSelected = 'selected'/>
                <#else>
                    <#assign  isSelected = ''/>
                </#if>
                <option value=${optionValue} ${isSelected}>${optionName}</option>
            </#list>
        </select>
    </div>
</#macro>