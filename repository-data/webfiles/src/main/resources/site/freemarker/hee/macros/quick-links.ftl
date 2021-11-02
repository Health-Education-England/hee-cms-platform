<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<#import "./link.ftl" as hlink>

<#macro quickLinks quickLinks>
    <#if quickLinks?? && quickLinks.links?? && quickLinks.links?size != 0>
        <div class="nhsuk-grid-column-one-third">
            <#if quickLinks.title?has_content>
                <div class="nhsuk-card">
                    <div class="nhsuk-card__content">
                        <#if quickLinks.title?has_content>
                            <h3 class="nhsuk-card__heading">${quickLinks.title}</h3>
                        </#if>

                        <ul class="nhsuk-related-links-card__list">
                            <#list quickLinks.links as quickLink>
                                <#assign href="${hlink.link(quickLink)}"/>

                                <#if href?has_content>
                                    <li>
                                        <a class="nhsuk-related-links-card__link" href="${href}" ${hlink.linkTarget(quickLink)}>
                                            ${quickLink.text}<@hlink.linkTextSuffix link=quickLink/>
                                        </a>
                                    </li>
                                </#if>
                            </#list>
                        </ul>
                    </div>
                </div>
            </#if>
        </div>
    </#if>
</#macro>
