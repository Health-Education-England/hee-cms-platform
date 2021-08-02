<#macro blockLinks block>
    <#if block??>
        <#if block.blockLinksContentBlock.blockLinks?size gt 0>
            <div class="nhsuk-blocklinks">
                <div class="nhsuk-u-reading-width">
                    <h2>${block.blockLinksContentBlock.title}</h2>
                    <p><@hst.html hippohtml=block.blockLinksContentBlock.description/></p>
                </div>
                <#if block.blockLinksContentBlock.columns == "One">
                    <#assign colClass = " nhsuk-list-blocklinks--one-column">
                <#elseif  block.blockLinksContentBlock.columns == "Two">
                    <#assign colClass = " nhsuk-list-blocklinks--two-columns">
                </#if>
                <ul class="nhsuk-list-blocklinks${colClass}">
                    <#list block.blockLinksContentBlock.blockLinks as linkBlock>
                        <li>
                            <a href="<@hst.link hippobean=linkBlock.blockLink/>">
                                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z">
                                    </path>
                                </svg>
                                ${linkBlock.blockTitle}
                            </a>
                        </li>
                    </#list>
                </ul>
            </div>
        </#if>
    </#if>
</#macro>
