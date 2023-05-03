<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>
<#macro expanderTable table>
<#--  To rewrite interal links, etc by the default content rewriter org.hippoecm.hst.content.rewriter.impl.SimpleContentRewriter  -->
    <#if table??>
        <#-- iteration of all expanders inside the Expander Table -->
        <#if table.expanderTableContentBlock.expanderTable?size gt 0>
            <div class="nhsuk-expander-group">
                <#list table.expanderTableContentBlock.expanderTable as expander>
                    <#-- Title of the Expander -->
                    <span class="nhsuk-details__summary-text">
                        ${expander.expanderTitle}
                    </span>

                    <#-- iteration of all ROWS inside an Expander -->
                    <#if expander.expanderRow?size gt 0>
                        <#list expander.expanderRow as row>
                            <details class="nhsuk-details nhsuk-expander">
                                <summary class="nhsuk-details__summary">
                                    <span class="nhsuk-details__summary-text">
                                        ${row.dataTitle}
                                    </span>
                                </summary>
                                <#-- If URL then data is showed as a hyperlink if not as a normal text -->
                                <div class="nhsuk-details__text">
                                    <@hst.html hippohtml=row.data/>
                                </div>
                            </details>
                        </#list>
                    </#if>
                </#list>
            </div>
        </#if>
    </#if>
</#macro>