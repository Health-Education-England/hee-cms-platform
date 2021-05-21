<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#function docTypeSnippet mimeType>
    <#switch mimeType>
        <#case 'application/pdf'>
            <#assign tagClass='nhsuk-tag nhsuk-tag--red' docType='PDF'/>
            <#break>
        <#case 'application/msword'>
            <#assign tagClass='nhsuk-tag' docType='DOC'/>
            <#break>
        <#default>
    </#switch>

    <#assign docTypeHTML><strong class="${tagClass}">${docType}</strong></#assign>
    <#return docTypeHTML>
</#function>

<#macro fileLinksCard card>
    <#if card??>
        <div class="nhsuk-grid-column-one-third">
            <div class="nhsuk-card">
                <div class="nhsuk-card__content">
                    <h3 class="nhsuk-card__heading">${card.title}</h3>

                    <ul class="nhsuk-related-links-card__list">
                        <#list card.fileLinks as link>
                            <@hst.link var="fileURL" hippobean=link.file>
                                <@hst.param name="forceDownload" value="true"/>
                            </@hst.link>

                            <li>
                                <a class="nhsuk-related-links-card__link" href="${fileURL}">
                                    ${link.text}
                                </a> ${docTypeSnippet(link.file.mimeType)} ${link.file.lengthKB}kB
                            </li>
                        </#list>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
</#macro>
