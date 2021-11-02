<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >


<#--  Function that generates and returns linked document URL if available.
Otherwise, returns link URL -->
<#function link linkBean>
    <#if !linkBean.external>
        <#assign href>
            <@hst.link hippobean=linkBean.document/>
        </#assign>
    <#else>
        <#assign href="${linkBean.url}">
    </#if>
    <#return href>
</#function>

<#--  Function that returns anchor link 'target="_blank"' attribute for external links -->
<#function linkTarget link>
    <#if link.external>
        <#return 'target="_blank"'>
    </#if>

    <#return ''>
</#function>

<#--  Macro that generates ' (Opens in a new window)' link text suffix for external links -->
<#macro linkTextSuffix link>
    ${link.external?then(' (Opens in a new window)', '')}
</#macro>