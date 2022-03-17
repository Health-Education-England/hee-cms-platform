<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro details block>
    <#assign detailsDocument = block.detailsContentBlock>

    <#if detailsDocument.summary?? && detailsDocument.richStatement?? >
        <details class="nhsuk-details">
            <summary class="nhsuk-details__summary">
            <span class="nhsuk-details__summary-text">
               ${detailsDocument.summary}
            </span>
            </summary>
            <div class="nhsuk-details__text">
                <@hst.html hippohtml=detailsDocument.richStatement/>
            </div>
        </details>
    </#if>
</#macro>