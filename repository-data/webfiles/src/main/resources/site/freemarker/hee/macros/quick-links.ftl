<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<#import "./link.ftl" as hlink>

<#macro quickLinks quickLinks>
    <#if quickLinks?? && quickLinks.links?? && quickLinks.links?size != 0>
        <div class="nhsuk-card">
            <div class="nhsuk-card__content">
                <#if quickLinks.title?has_content>
                    <h3 class="nhsuk-card__heading">${quickLinks.title}</h3>
                </#if>

                <ul class="nhsuk-related-links-card__list">
                    <#list quickLinks.links as quickLink>
                        <#--  The following condition has been added to not to print empty lists when both link document and URL aren't available  -->
                        <#if quickLink.document?? || quickLink.url?has_content>
                            <li>
                                <@hlink.link link=quickLink cssClassName="nhsuk-related-links-card__link">
                                    ${quickLink.text}
                                </@hlink.link>
                            </li>
                        </#if>
                    </#list>
                </ul>
            </div>
        </div>
    </#if>
</#macro>
