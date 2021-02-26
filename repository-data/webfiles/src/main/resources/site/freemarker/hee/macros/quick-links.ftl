<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#import "./link.ftl" as hee>

<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#macro quickLinks quickLinks>
    <#if quickLinks?? && quickLinks?size != 0>
        <div class="nhsuk-grid-column-one-third">
            <div class="nhsuk-card">
                <div class="nhsuk-card__content">
                    <h3 class="nhsuk-card__heading"><@fmt.message key="quicklinks.header"/></h3>
                    <ul class="nhsuk-related-links-card__list">
                        <#list quickLinks as quickLink>
                            <li>
                                <@hee.link link=quickLink cssClassName="nhsuk-related-links-card__link"/>
                            </li>
                        </#list>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
</#macro>