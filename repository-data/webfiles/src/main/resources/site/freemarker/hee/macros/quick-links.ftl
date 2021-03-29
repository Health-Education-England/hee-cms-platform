<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<#import "./link.ftl" as hlink>

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#macro quickLinks quickLinks>
    <#if quickLinks?? && quickLinks?size != 0>
        <div class="nhsuk-grid-column-one-third">
            <div class="nhsuk-card">
                <div class="nhsuk-card__content">
                    <h3 class="nhsuk-card__heading">${quickLinks.title}</h3>
                    <ul class="nhsuk-related-links-card__list">
                        <#list quickLinks.links as quickLink>
                            <li>
                                <@hlink.link link=quickLink cssClassName="nhsuk-related-links-card__link">
                                    ${quickLink.text}
                                </@hlink.link>
                            </li>
                        </#list>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
</#macro>
