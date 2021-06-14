<#import "contact-item.ftl" as contactItem>

<#macro contact block>
    <#if block??>
        <#if block.contentItems?size gt 1>
            <div class="nhsuk-page-content">
                <h2>${block.title}</h2>
            </div>

            <ul class="nhsuk-grid-row nhsuk-contact-group">
                <#list block.contentItems as item>
                    <li class="nhsuk-grid-column-one-half nhsuk-contact-group__item">
                        <@contactItem.contactItem item=item block=block/>
                    </li>
                </#list>
            </ul>
        <#else>
            <@contactItem.contactItem item=block.contentItems[0] block=block singleContact=true/>
        </#if>
    </#if>
</#macro>
