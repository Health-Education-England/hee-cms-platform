<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro link link cssClassName>
    <#if link??>
        <#if link.document??>
            <@hst.link hippobean=link.document var="linkURL"/>
            <#assign openInANewWindow=false />
        <#else>
            <#assign openInANewWindow=true />
            <#assign linkURL="${link.url}" />
        </#if>

        <#if linkURL?has_content>
            <a class="nhsuk-related-links-card__link" href="${linkURL}" ${openInANewWindow?then('target="_blank"', '')}>${link.text}</a>
        </#if>
    </#if>
</#macro>