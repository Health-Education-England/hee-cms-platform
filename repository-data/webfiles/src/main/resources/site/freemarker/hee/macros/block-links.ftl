<#macro blockLinks block>
    <#if block??>
        <#if block.blockLinksContentBlock.blockLinks?size gt 0>
            <section class="nhsuk-section">
                <div class="nhsuk-width-container">
                    <div class="nhsuk-grid-row">
                        <div class="nhsuk-grid-column-full nhsuk-section__content">
                            <#if block.titleOverride?has_content || block.descOverride?has_content || block.blockLinksContentBlock.title?has_content || block.blockLinksContentBlock.desc?has_content>
                                <div class="nhsuk-u-reading-width">
                                    <#if block.titleOverride?has_content>
                                        <h2>${block.titleOverride}</h2>
                                    <#elseif block.blockLinksContentBlock.title?has_content>
                                        <h2>${block.blockLinksContentBlock.title}</h2>
                                    </#if>
                                    <#if block.descOverride?has_content>
                                        <p><@hst.html hippohtml=block.descOverride/></p>
                                    <#elseif block.blockLinksContentBlock.desc?has_content>
                                        <p><@hst.html hippohtml=block.blockLinksContentBlock.desc/></p>
                                    </#if>
                                </div>
                            </#if>

                            <ul class="nhsuk-list-signage nhsuk-list-signage--two-columns">
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
                    </div>
                </div>
            </section>
        </#if>
    </#if>
</#macro>
