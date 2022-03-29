<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro statementCard block>
    <#if block.statementCardContentBlock.title?? && block.statementCardContentBlock.richStatement?? >
        <div class="nhsuk-care-card nhsuk-care-card--non-urgent">
            <div class="nhsuk-care-card__heading-container">
                <h3 class="nhsuk-care-card__heading" data-anchorlinksignore="true">
                <span role="text">
                    <span class="nhsuk-u-visually-hidden">Non-urgent advice:</span>
                    ${block.statementCardContentBlock.title}
                </span>
                </h3>
                <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
            </div>
            <div class="nhsuk-care-card__content">
                <@hst.html hippohtml=block.statementCardContentBlock.richStatement/>
            </div>
        </div>
    </#if>
</#macro>