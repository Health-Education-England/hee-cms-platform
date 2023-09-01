<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>

<#macro expander expander>
    <#if expander??>
        <#if expander.expanderContentBlock.expanderPanel?size gt 0>
            <div class="nhsuk-expander-group">           	 	           	
                <#list expander.expanderContentBlock.expanderPanel as expanderPanel>
                   <details class="nhsuk-details nhsuk-expander">
           	 			<summary class="nhsuk-details__summary">
           	 				<span class="nhsuk-details__summary-text">
           	 					${expanderPanel.expanderSummary}
           	 				</span>
           	 			</summary> 
           	 			<div class="nhsuk-details__text">
           	 				 <@hst.html hippohtml=expanderPanel.expanderDetails/>
           	 			</div>
                       <#if expanderPanel.contentBlocks??>
                           <#list expanderPanel.contentBlocks as block>
                               <#switch block.getClass().getName()>
                                   <#case "org.hippoecm.hst.content.beans.standard.HippoFacetSelect">
                                       <#if block.referencedBean?? && hst.isBeanType(block.referencedBean, 'uk.nhs.hee.web.beans.ImageSetWithCaption')>
                                           <@hee.imageWithCaption imageWithCaption=block.referencedBean/>
                                       </#if>
                                       <#break>
                                   <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                       <@hst.html hippohtml=block/>
                                       <#break>
                                   <#case "uk.nhs.hee.web.beans.RichTextReference">
                                       <@hst.html hippohtml=block.richTextBlock.html/>
                                       <#break>
                                   <#case "uk.nhs.hee.web.beans.ActionLink">
                                       <@hee.actionLink actionLink=block/>
                                       <#break>
                                   <#case "uk.nhs.hee.web.beans.MediaEmbedReference">
                                       <@hee.media media=block/>
                                       <#break>
                                   <#case "uk.nhs.hee.web.beans.InsetReference">
                                       <@hee.inset inset=block/>
                                       <#break>
                                   <#default>
                               </#switch>
                           </#list>
                       </#if>
           	 		 </details>	
                </#list>
            </div>        
        </#if>
    </#if>
</#macro>