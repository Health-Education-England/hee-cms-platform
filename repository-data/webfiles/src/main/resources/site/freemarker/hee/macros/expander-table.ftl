<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>

<#macro expanderTable table>
    <#--  To rewrite interal links, etc by the default content rewriter org.hippoecm.hst.content.rewriter.impl.SimpleContentRewriter  -->
    <#if table??>
        <#-- iteration of all expanders inside the Expander Table -->
        <#if table.expanderTableContentBlock.expanderTable?size gt 0>
            <div class="hee-table-expander">
                <#if table.expanderTableContentBlock.expanderTable?size gt 1>
                    <div class="hee-table-expander__toggle">
                        <a data-label-open="Expand all" data-label-close="Collapse all" href="#"></a>
                    </div>
                </#if>


                <#list table.expanderTableContentBlock.expanderTable as expander>
                    <#-- Title of the Expander -->
                    <details class="nhsuk-details nhsuk-expander">
                        <summary class="nhsuk-details__summary">
                            <span class="nhsuk-details__summary-text">
                                ${expander.expanderTitle}
                            </span>
                        </summary>

                        <#-- iteration of all ROWS inside an Expander -->
                        <#if expander.expanderRow?size gt 0>
                            <div class="nhsuk-details__text">
                                <div aria-rowcount="${expander.expanderRow?size}" class="hee-table-expander__container" role="table">
                                    <#list expander.expanderRow as row>
                                        <div class="hee-table-expander__row" role="row">
                                            <span class="hee-table-expander__row__heading" role="cell">
                                                ${row.dataTitle}
                                            </span>
                                            <span class="hee-table-expander__row__content" role="cell">
                                                <@hst.html hippohtml=row.data var="dataHTML"/>
                                                ${dataHTML?replace('<p>', '')?replace('</p>', '<br><br>')?keep_before_last('<br><br>')}
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