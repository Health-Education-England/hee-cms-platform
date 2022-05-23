<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>

<#macro table table>
    <#assign tableData = tableComponentService.getTableCellsFromTableMarkup(table.tabledataContentBlock.content.content)>
    <table role="table" class="nhsuk-table-responsive">
        <caption class="nhsuk-table__caption">${table.tabledataContentBlock.caption}</caption>
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