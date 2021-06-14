<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#function docTypeByMimeType mimeType>
    <#switch mimeType>
        <#case 'application/pdf'>
            <#assign docType='pdf'/>
            <#break>
        <#case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'>
            <#assign docType='docx'/>
            <#break>
        <#case 'application/msword'>
            <#assign docType='doc'/>
            <#break>
        <#case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'>
            <#assign docType='xlsx'/>
            <#break>
        <#case 'application/vnd.ms-excel'>
            <#assign docType='xls'/>
            <#break>
        <#default>
    </#switch>

    <#return docType>
</#function>

<#macro fileLinksCard card>
    <#if card??>
        <div class="nhsuk-grid-column-one-third">
            <div class="nhsuk-card">
                <div class="nhsuk-card__content">
                    <h3 class="nhsuk-card__heading">${card.title}</h3>

                    <ul class="nhsuk-resources__list">
                        <#list card.fileLinks as link>
                            <@hst.link var="fileURL" hippobean=link.file>
                                <@hst.param name="forceDownload" value="true"/>
                            </@hst.link>

                            <#assign docType>${docTypeByMimeType(link.file.mimeType)}</#assign>

                            <li>
                                <a class="nhsuk-resources__link" href="${fileURL}" title="${link.text}  (opens in new window)">
                                ${link.text}
                                <span class="nhsuk-resources__tag nhsuk-resources__${docType}">${docType?upper_case}</span><span class="nhsuk-resources__docSize">${link.file.lengthKB}kB</span>
                                </a>
                            </li>
                        </#list>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
</#macro>
