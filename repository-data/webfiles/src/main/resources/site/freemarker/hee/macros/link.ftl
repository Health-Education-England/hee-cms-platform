<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro link link cssClassName>
    <#if link??>
        <#if link.document??>
            <a class="${cssClassName}" href="<@hst.link hippobean=link.document/>">${link.text}</a>
        <#else>
            <a class="${cssClassName}" href="${link.url}" target="_blank">${link.text}</a>
        </#if>
    </#if>
</#macro>