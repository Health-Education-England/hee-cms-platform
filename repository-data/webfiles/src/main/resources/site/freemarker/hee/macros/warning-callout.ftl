<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro warningCallout block>
    <#if block.warningCalloutContentBlock.title?? && block.warningCalloutContentBlock.richAlertText?? >
        <div class="nhsuk-warning-callout">
            <h3 class="nhsuk-warning-callout__label" data-anchorlinksignore="true">
            <span role="text">
              <span class="nhsuk-u-visually-hidden">Important: </span>
              ${block.warningCalloutContentBlock.title}
            </span>
            </h3>
            <@hst.html hippohtml=block.warningCalloutContentBlock.richAlertText/>
        </div>
    </#if>
</#macro>