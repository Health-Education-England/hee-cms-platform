<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro yellowAlertBlock block>
    <#if block.title?? && block.richAlertText?? >
        <div class="nhsuk-warning-callout">
            <h3 class="nhsuk-warning-callout__label">
            <span role="text">
              <span class="nhsuk-u-visually-hidden">Important: </span>
              ${block.title}
            </span>
            </h3>
            <@hst.html hippohtml=block.richAlertText/>
        </div>
    </#if>
</#macro>