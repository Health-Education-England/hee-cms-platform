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
           	 		 </details>	
                </#list>
            </div>        
        </#if>
    </#if>
</#macro>