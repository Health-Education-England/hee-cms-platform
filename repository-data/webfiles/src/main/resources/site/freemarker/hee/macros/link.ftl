<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "internal-link.ftl">

<#macro link link cssClassName>
    <#if link?? && (link.document?? || link.url?has_content)>
        <#if link.document??>
            <a class="${cssClassName}" href="${getInternalLinkURL(link.document)}"><#nested></a>
        <#else>
            <a class="${cssClassName}" href="${link.url}"${link.openLinkUrlNewWindow?then(' target="_blank"','')}><#nested></a>
        </#if>
    </#if>
</#macro>
