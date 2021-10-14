<#macro anchorLinks anchor>
    <#if anchor.targetheadings??>
        <#assign targets>${anchor.targetheadings?join(',')}</#assign>
        <div class="nhsuk-anchor-links" data-headings="${targets}" hidden>
            <h2 data-anchorlinksignore="true">${anchor.title}</h2>
        </div>
    </#if>
</#macro>
