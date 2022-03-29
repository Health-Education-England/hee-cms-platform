<#import "contact-item.ftl" as contactItem>

<#macro contact block personTitlesMap personPronounsMap>
    <#if block??>
        <#if block.contactItems?size gt 1>
            <ul class="nhsuk-grid-row nhsuk-contact-group">
                <#list block.contactItems as item>
                    <li class="nhsuk-grid-column-one-half nhsuk-contact-group__item">
                        <@contactItem.contactItem
                        item=item
                        personTitlesMap=personTitlesMap
                        personPronounsMap=personPronounsMap
                        />
                    </li>
                </#list>
            </ul>
        <#else>
            <@contactItem.contactItem
            item=block.contactItems[0]
            personTitlesMap=personTitlesMap
            personPronounsMap=personPronounsMap
            />
        </#if>
    </#if>
</#macro>
