<#macro headingsTOC block>
    <#if block??>
        <#assign headingTag="${block.headingType?lower_case}">

        <${headingTag} class="toc_${headingTag}"${(block.shortTitle?has_content)?then(' data-short-title="${block.shortTitle}"', '')}>${block.headingTitle}</${headingTag}>
    </#if>
</#macro>