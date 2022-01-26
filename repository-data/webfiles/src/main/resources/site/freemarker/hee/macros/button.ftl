<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#function buttonTypeBySelection buttontype>
    <#switch buttontype>
        <#case 'primary'>
            <#assign cssname='nhsuk-button'/>
            <#break>
       <#case 'secondary'>
            <#assign cssname='nhsuk-button nhsuk-button--secondary'/>
            <#break>
        <#case 'reverse'>
            <#assign cssname='nhsuk-button nhsuk-button--reverse'/>
            <#break>    
        <#default>
            <#assign cssname='nhsuk-button'/>
            <#break> 
    </#switch>
    <#return cssname>
</#function>

<#macro button button>
    <#if button??>
        <#if button.buttonContentBlock.document??>
            <#assign link>
                <@hst.link hippobean=button.buttonContentBlock.document/>
            </#assign>
        <#else>
            <#assign link = "${button.buttonContentBlock.url}">
        </#if>
            <#assign cssname>${buttonTypeBySelection(button.buttonContentBlock.buttontype)}</#assign>
        <#if link?has_content>
			<a class="${cssname}" href="${link}" >
				${button.buttonContentBlock.label}
			</a>
        <#else>
            <a class="${cssname}" >
				${button.buttonContentBlock.label}
			</a>
        </#if>
    </#if>
</#macro>