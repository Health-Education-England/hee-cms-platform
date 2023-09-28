<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>
<#macro table table>
    <#--  To rewrite interal links, etc by the default content rewriter org.hippoecm.hst.content.rewriter.impl.SimpleContentRewriter  -->
    <@hst.html hippohtml=table.tabledataContentBlock.content var="contentRewrittenTable"/>
    <#assign tableData = tableComponentService.getTableCellsFromTableMarkup(contentRewrittenTable)>
    <#if tableData.headerCount gt 3>
        <#assign cssname='nhsuk-table nhsuk-hee-table nhsuk-table-responsive nhsuk-hee-table--multicols'/>
    <#else>
        <#assign cssname='nhsuk-table nhsuk-hee-table nhsuk-table-responsive'/>
    </#if>
    <table role="table" class="${cssname}${(table.tabledataContentBlock.caption?has_content)?then(' has-caption', '')}">
        <#if table.tabledataContentBlock.caption?has_content>
            <caption class="nhsuk-table__caption">${table.tabledataContentBlock.caption}</caption>
        </#if>
        <#if tableData.headerCount gt 0>
            <thead role="rowgroup" class="nhsuk-table__head">
            <tr role="row">
                <#list tableData.headers as header>
                    <th scope="col" role="columnheader">${header}</th>
                </#list>
            </tr>
            </thead>
        </#if>
        <#if tableData.rowCount gt 0>
            <tbody class="nhsuk-table__body">
            <#list tableData.rows as row>
                <tr role="row" class="nhsuk-table__row">
                    <#list row as cell>
                        <td role="cell" class="nhsuk-table__cell">
                            <span class="nhsuk-table-responsive__heading">${tableData.getHeaderAt(cell?index)}</span>
                            ${cell}
                        </td>
                    </#list>
                </tr>
            </#list>
            </tbody>
        </#if>
    </table>
</#macro>