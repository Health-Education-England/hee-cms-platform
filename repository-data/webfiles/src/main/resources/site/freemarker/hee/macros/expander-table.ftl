<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>
<#macro expanderTable table>
<#--  To rewrite interal links, etc by the default content rewriter org.hippoecm.hst.content.rewriter.impl.SimpleContentRewriter  -->
    <#if table??>
        <#-- iteration of all expanders inside the Expander Table -->
        <#if table.expanderTableContentBlock.expanderTable?size gt 0>
            <div class="hee-table-expander">
                <div class="hee-table-expander__toggle">
                    <a href="#">Expand all</a>
                </div>
                <#list table.expanderTableContentBlock.expanderTable as expander>
                    <#-- Title of the Expander -->
                    <details class="nhsuk-details nhsuk-expander" nhsuk-polyfilled="true">
                        <summary class="nhsuk-details__summary" role="button" >
                            <span class="nhsuk-details__summary-text">
                                ${expander.expanderTitle}
                            </span>
                        </summary>

                    <#-- iteration of all ROWS inside an Expander -->
                    <#if expander.expanderRow?size gt 0>
                        <div class="nhsuk-details__text" aria-hidden="true">
                            <div aria-rowcount="3" class="hee-table-expander__container" role="table">
                                <#list expander.expanderRow as row>
                                    <div class="hee-table-expander__row" role="row">
                                        <span class="hee-table-expander__row__heading" role="cell">
                                            ${row.dataTitle}
                                        </span>
                                        <span class="hee-table-expander__row__content" role="cell">
                                            <@hst.html hippohtml=row.data/>
                                        </span>
                                    </div>
                                </#list>
                            </div>
                        </div>
                    </#if>
                    </details>
                </#list>
            </div>
        </#if>
    </#if>
</#macro>