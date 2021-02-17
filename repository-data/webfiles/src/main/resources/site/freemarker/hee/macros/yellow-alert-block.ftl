<#include "../../include/imports.ftl">

<#macro yellowAlertBlock block>
    <#if block.title?? && block.richStatement?? >
        <div class="nhsuk-warning-callout">
            <h3 class="nhsuk-warning-callout__label">
            <span role="text">
              <span class="nhsuk-u-visually-hidden">Important: </span>
              ${block.title}
            </span>
            </h3>
            <@hst.html hippohtml=${block.richAlertText}>
        </div>
    </#if>
</#macro>