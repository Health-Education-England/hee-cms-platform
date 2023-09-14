<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro details block>
    <#assign detailsDocument = block.detailsContentBlock>

    <#if detailsDocument.summary?has_content && detailsDocument.richStatement?? >
        <details class="nhsuk-details">
            <summary class="nhsuk-details__summary">
            <span class="nhsuk-details__summary-text">
               ${detailsDocument.summary}
            </span>
            </summary>
            <div class="nhsuk-details__text">
                <@hst.html hippohtml=detailsDocument.richStatement/>

                <#if detailsDocument.contentBlocks??>
                    <#list detailsDocument.contentBlocks as block>
                        <#switch block.getClass().getName()>
                            <#case "uk.nhs.hee.web.beans.ImageBlock">
                                <@hee.imageBlock imageBlock=block/>
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
            </div>
        </details>
    </#if>
</#macro>