<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#macro quickLinks quickLinks>
    <#if quickLinks?? && quickLinks?size != 0>
        <div class="nhsuk-grid-column-one-third">
            <div class="nhsuk-card">
                <div class="nhsuk-card__content">
                    <h3 class="nhsuk-card__heading"><@fmt.message key="quicklinks.header"/></h3>
                    <ul class="nhsuk-related-links-card__list">
                        <#list document.quickLinks as link>
                            <#if link.document??>
                                <@hst.link hippobean=link.document var="linkURL"/>
                            <#else>
                                <#assign openInANewWindow=true />
                                <#assign linkURL="${link.url}" />
                            </#if>

                            <#if !(linkURL?has_content)>
                                <#continue>
                            </#if>

                            <li>
                                <a class="nhsuk-related-links-card__link"
                                   href="${linkURL}" ${openInANewWindow?then('target="_blank"', '')}>${link.text}</a>
                            </li>
                        </#list>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
</#macro>