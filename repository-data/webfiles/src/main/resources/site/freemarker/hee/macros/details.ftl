<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro details block>
    <#assign details = block.detailsContentBlock>

    <#if details.summary?? && details.richStatement?? >
        <details class="nhsuk-details">
            <summary class="nhsuk-details__summary">
            <span class="nhsuk-details__summary-text">
               ${details.summary}
            </span>
            </summary>
            <div class="nhsuk-details__text">
                <@hst.html hippohtml=details.richStatement/>
            </div>
        </details>
    </#if>
</#macro>