<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<#import "./link.ftl" as hlink>

<#macro quickLinks quickLinks>
    <#if quickLinks?? && quickLinks.links?? && quickLinks.links?size != 0>
        <#assign hasQuickLinkContent=quickLinks.links?filter(link -> link.text?has_content)?has_content>
        <div class="nhsuk-grid-column-one-third">
            <#if quickLinks.title?has_content || hasQuickLinkContent>
                <div class="nhsuk-card">
                    <div class="nhsuk-card__content">
                        <#if quickLinks.title?has_content>
                            <h3 class="nhsuk-card__heading">${quickLinks.title}</h3>
                        </#if>

                        <#if hasQuickLinkContent>
                            <ul class="nhsuk-related-links-card__list">
                                <#list quickLinks.links as quickLink>
                                    <#if quickLink.text?has_content>
                                        <li>
                                            <@hlink.link link=quickLink cssClassName="nhsuk-related-links-card__link">
                                                ${quickLink.text}
                                            </@hlink.link>
                                        </li>
                                    </#if>
                                </#list>
                            </ul>
                        </#if>
                    </div>
                </div>
            </#if>
        </div>
    </#if>
</#macro>
