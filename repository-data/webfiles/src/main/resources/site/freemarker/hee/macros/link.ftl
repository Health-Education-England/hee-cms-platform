<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro link link cssClassName>
    <#if link?? && (link.document?? || link.url?has_content)>
        <#if link.document??>
            <a class="${cssClassName}" href="<@hst.link hippobean=link.document/>"><#nested></a>
        <#else>
            <a class="${cssClassName}" href="${link.url}" target="_blank"><#nested></a>
        </#if>
    </#if>
</#macro>
