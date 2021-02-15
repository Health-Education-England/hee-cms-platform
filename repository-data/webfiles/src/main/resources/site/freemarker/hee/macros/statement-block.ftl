<#include "../../include/imports.ftl">

<#macro statementBlock block>
    <#if block.title?? && block.richStatement?? >
    <div class="nhsuk-care-card nhsuk-care-card--non-urgent">
        <div class="nhsuk-care-card__heading-container">
            <h3 class="nhsuk-care-card__heading">
                <span role="text">
                    <span class="nhsuk-u-visually-hidden">Non-urgent advice:</span>
                    ${block.title}
                </span>
            </h3>
            <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
        </div>
        <div class="nhsuk-care-card__content">
            <@hst.html hippohtml=block.richStatement/>
        </div>
    </div>
    </#if>
</#macro>