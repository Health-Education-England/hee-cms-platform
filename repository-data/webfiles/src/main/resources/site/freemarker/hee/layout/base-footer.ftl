<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<@hst.setBundle basename="uk.nhs.hee.web.global"/>
<#-- @ftlvariable name="menu" type="org.hippoecm.hst.core.sitemenu.HstSiteMenu" -->
<#if menu??>
    <footer>
        <div class="nhsuk-footer has-edit-button">
            <div class="nhsuk-width-container">
                <#if menu.siteMenuItems??>
                    <ul class="nhsuk-footer__list nhsuk-footer__list--three-columns">
                        <#list menu.siteMenuItems as item>
                            <#if !item.hstLink?? && !item.externalLink??>
                                <li class="nhsuk-footer__list-item">${item.name}</li>
                            <#else>
                                <#if item.hstLink??>
                                    <#assign href><@hst.link link=item.hstLink/></#assign>
                                <#elseif item.externalLink??>
                                    <#assign href>${item.externalLink?replace("\"", "")}</#assign>
                                </#if>
                                <li class="nhsuk-footer__list-item">
                                    <a class="nhsuk-footer__list-item-link" href="${href}">${item.name}</a>
                                </li>
                            </#if>
                        </#list>
                    </ul>
                </#if>
                <p class="nhsuk-footer__copyright"><@fmt.message key="footer.copyright"/></p></div>
            <@hst.cmseditmenu menu=menu/>
        </div>
    </footer>
</#if>