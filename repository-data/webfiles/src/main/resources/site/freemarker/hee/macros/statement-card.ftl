<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro statementCard block>
    <#if block.statementCardContentBlock.title?? && block.statementCardContentBlock.richStatement?? >
        <div class="nhsuk-card nhsuk-card--care nhsuk-card--care--non-urgent">
            <div class="nhsuk-card--care__heading-container">
                <h3 class="nhsuk-card--care__heading" data-anchorlinksignore="true">
                    <span role="text">
                        <span class="nhsuk-u-visually-hidden">Non-urgent advice: </span>
                        ${block.statementCardContentBlock.title}
                    </span>
                </h3>
                <span class="nhsuk-card--care__arrow" aria-hidden="true"></span>
            </div>
            <div class="nhsuk-card__content">
                <@hst.html hippohtml=block.statementCardContentBlock.richStatement/>
            </div>
        </div>
    </#if>
</#macro>