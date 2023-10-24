<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>

<#macro tabs tabs>
    <#if tabs?? && tabs.tabsContentBlock??>
        <#if tabs.tabsContentBlock.tabPanel?size gt 1>
            <#assign randPref = tabs.identifier?keep_before('-')>

            <div class="nhsuk-tabs">
                <#--  Tab title  -->
                <#if tabs.tabsContentBlock.title?has_content>
                    <h2 class="nhsuk-tabs__title">${tabs.tabsContentBlock.title}</h2>
                </#if>


                <#--  Tabs for desktop  -->
                <div class="nhsuk-tabs__desktop">
                    <div class="nhsuk-tabs__list" role="tablist" aria-label="${tabs.tabsContentBlock.title}" data-module="nhsuk-tabs">
                        <#list tabs.tabsContentBlock.tabPanel as tabPanel>
                            <button class="nhsuk-tabs__list-item${(tabPanel?is_first?then(' nhsuk-tabs__list-item--selected',''))}" role="tab" aria-selected="${(tabPanel?is_first?then('true','false'))}" aria-controls="td${randPref}-panel-${tabPanel?index}" id="td${randPref}-tab-${tabPanel?index}" tabindex="0">
                                ${tabPanel.tabTitle}
                            </button>
                        </#list>
                    </div>
                    <#list tabs.tabsContentBlock.tabPanel as tabPanel>
                        <div class="nhsuk-tabs__panel" id="td${randPref}-panel-${tabPanel?index}" role="tabpanel" tabindex="0" aria-labelledby="td${randPref}-tab-${tabPanel?index}"${tabPanel?is_first?then('',' hidden')}>
                            <@hst.html hippohtml=tabPanel.tabBody/>
                            <@contentBlocks panel=tabPanel/>
                        </div>
                    </#list>
                </div>

                <#--  Tabs for mobile  -->
                <div class="nhsuk-tabs__mobile">
                    <div class="nhsuk-tabs__list" role="tablist" aria-label="${tabs.tabsContentBlock.title}" data-module="nhsuk-tabs">
                        <#list tabs.tabsContentBlock.tabPanel as tabPanel>
                            <button class="nhsuk-tabs__list-item" role="tab" aria-selected="${(tabPanel?is_first?then('true','false'))}" aria-controls="tm${randPref}-panel-${tabPanel?index}" id="tm${randPref}-tab-${tabPanel?index}" tabindex="0">
                                ${tabPanel.tabTitle}
                            </button>
                            <div class="nhsuk-tabs__panel" id="tm${randPref}-panel-${tabPanel?index}" role="tabpanel" tabindex="0" aria-labelledby="tm${randPref}-tab-${tabPanel?index}" hidden>
                                <@hst.html hippohtml=tabPanel.tabBody/>
                                <@contentBlocks panel=tabPanel/>
                            </div>
                        </#list>
                    </div>
                </div>

            </div>
        </#if>
    </#if>
</#macro>

<#macro contentBlocks panel>
    <#if panel.contentBlocks??>
        <#list panel.contentBlocks as block>
            <#switch block.getClass().getName()>
                <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                    <@hst.html hippohtml=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.RichTextReference">
                    <@hst.html hippohtml=block.richTextBlock.html/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.ActionLink">
                    <@hee.actionLink actionLink=block/>
                    <#break>
                <#default>
            </#switch>
        </#list>
    </#if>
</#macro>