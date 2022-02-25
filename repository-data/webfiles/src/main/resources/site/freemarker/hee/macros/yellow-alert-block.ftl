<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro yellowAlertBlock block>
    <#if block.yellowAlertBlock.title?? && block.yellowAlertBlock.richAlertText?? >
        <div class="nhsuk-warning-callout">
            <h3 class="nhsuk-warning-callout__label" data-anchorlinksignore="true">
            <span role="text">
              <span class="nhsuk-u-visually-hidden">Important: </span>
              ${block.yellowAlertBlock.title}
            </span>
            </h3>
            <@hst.html hippohtml=block.yellowAlertBlock.richAlertText/>
        </div>
    </#if>
</#macro>