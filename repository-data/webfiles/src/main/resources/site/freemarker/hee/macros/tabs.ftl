<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>

<#macro tabs tabs>
    <#if tabs??>
        <#if tabs.tabsContentBlock.tabPanel?size gt 1>
            <#assign randPref = tabs.tabsContentBlock.randomPrefix>
            <div class="nhsuk-tabs" data-module="nhsuk-tabs">
                <h2 class="nhsuk-tabs__title">${tabs.tabsContentBlock.title}</h2>
                <div class="nhsuk-tabs__list" role="tablist" aria-label="${tabs.tabsContentBlock.title}" data-module="nhsuk-tabs">
                    <#list tabs.tabsContentBlock.tabPanel as tabPanel>
                        <button class="nhsuk-tabs__list-item${(tabPanel?is_first?then(' nhsuk-tabs__list-item--selected',''))}" role="tab" aria-selected="${(tabPanel?is_first?then('true','false'))}"
                                aria-controls="${randPref}-panel-${tabPanel?index}" id="${randPref}-tab-${tabPanel?index}" tabindex="0">
                            ${tabPanel.tabTitle}
                        </button>
                    </#list>
                </div>
                <#list tabs.tabsContentBlock.tabPanel as tabPanel>
                    <div class="nhsuk-tabs__panel" id="${randPref}-panel-${tabPanel?index}" role="tabpanel" tabindex="0" aria-labelledby="${randPref}-tab-${tabPanel?index}"${tabPanel?is_first?then('',' hidden')}>
                        <@hst.html hippohtml=tabPanel.tabBody/>
                    </div>
                </#list>
            </div>
        </#if>
    </#if>
</#macro>