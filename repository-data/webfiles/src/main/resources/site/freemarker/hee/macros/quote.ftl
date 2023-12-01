<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro quote block>
    <div class="hee-quote">
        <h2 class="nhsuk-u-visually-hidden">Quote</h2>

        <#--  Copy  -->
        <div class="hee-quote__text">
            <@hst.html formattedText="${block.quoteContentBlock.quoteCopy?replace('\n', '<br>')}"/>
        </div>

        <#--  Source  -->
        <#if block.quoteContentBlock.source?has_content>
            <div class="hee-quote__source">${block.quoteContentBlock.source}</div>
        </#if>
    </div>
</#macro>