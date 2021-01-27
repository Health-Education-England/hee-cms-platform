<#include "../../include/imports.ftl">

<#-- @ftlvariable name="menu" type="org.hippoecm.hst.core.sitemenu.HstSiteMenu" -->
<#if menu??>
    <nav class="nhsuk-header__navigation" id="header-navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="label-navigation">
        <div class="nhsuk-width-container has-edit-button">
            <p class="nhsuk-header__navigation-title">
                <span id="label-navigation">Menu</span>
                <button class="nhsuk-header__navigation-close" id="close-menu">
                    <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                    </svg>
                    <span class="nhsuk-u-visually-hidden">Close menu</span>
                </button>
            </p>
            <#if menu.siteMenuItems??>
                <ul class="nhsuk-header__navigation-list">
                    <#list menu.siteMenuItems as item>
                        <#if !item.hstLink?? && !item.externalLink??>
                            <#if item.selected || item.expanded>
                                <li class="nhsuk-header__navigation-item active"><div style="padding: 10px 15px;">${item.name?html}</div></li>
                            <#else>
                                <li class="nhsuk-header__navigation-item"><div style="padding: 10px 15px;">${item.name?html}</div></li>
                            </#if>
                        <#else>
                            <#if item.hstLink??>
                                <#assign href><@hst.link link=item.hstLink/></#assign>
                            <#elseif item.externalLink??>
                                <#assign href>${item.externalLink?replace("\"", "")}</#assign>
                            </#if>
                            <#if  item.selected || item.expanded>
                                <li class="nhsuk-header__navigation-item active"><a class="nhsuk-header__navigation-link" href="${href}">${item.name?html}</a></li>
                            <#else>
                                <li class="nhsuk-header__navigation-item"><a class="nhsuk-header__navigation-link" href="${href}">${item.name?html}</a></li>
                            </#if>
                        </#if>
                    </#list>
                </ul>
            </#if>
            <@hst.cmseditmenu menu=menu/>
        </div>
    </nav>
</#if>