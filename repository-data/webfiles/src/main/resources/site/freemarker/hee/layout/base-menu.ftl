<#ftl output_format="HTML">
<#include "../../include/imports.ftl">

<#-- @ftlvariable name="menu" type="org.hippoecm.hst.core.sitemenu.HstSiteMenu" -->
<#if menu??>

    <#--  Returns link for the given 'siteMenuItem' [HstSiteMenuItem]  -->
    <#--  Defaults to # if the link isn't available  -->
    <#function getLink siteMenuItem>
        <#if siteMenuItem.externalLink??>
            <#assign link>${siteMenuItem.externalLink?replace("\"", "")}</#assign>
        <#elseif siteMenuItem.hstLink??>
            <#assign link><@hst.link link=siteMenuItem.hstLink/></#assign>
        <#else>
            <#assign link=""/>
        </#if>

        <#return link>
    </#function>

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
                        <#assign itemHref>${getLink(item)}</#assign>

                        <#if item.childMenuItems?? && item.childMenuItems?size gt 0>
                            <#--  Renders navs with sub-navs  -->
                            <li class="nhsuk-header__navigation-item nhsuk-subheader" aria-haspopup="true" aria-expanded="false">
                                <#--  The following <a> tag is mainly meant to get default nav functionality like focus, etc
                                      and not meant for user navigation. David confirmed that the default action on the following <a> tag has already been prevented via script and so this is being left with an href of '#'.  -->
                                <a class="nhsuk-header__navigation-link" href="#">
                                    <span class="nhsuk-header__link-text">${item.name}</span>
                                    <span class="nhsuk-header__back-text">Back</span>
                                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                                    </svg>
                                    <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
                                    </svg>
                                </a>

                                <ul class="nhsuk-subheader__list">
                                    <#if itemHref?has_content>
                                        <#--  Renders [main] nav as the first item in case if it has a link  -->
                                        <li class="nhsuk-subheader-item">
                                            <a class="nhsuk-subheader-link" href="${itemHref}" ${(item.externalLink??)?then('target="_blank"', '')}>${item.name}</a>
                                        </li>
                                    </#if>

                                    <#list item.childMenuItems as childItem>
                                        <#assign childItemHref>${getLink(childItem)}</#assign>

                                        <#--  Renders sub-nav  -->
                                        <li class="nhsuk-subheader-item">
                                            <#--  Adds a 'no-link' class for sub-navs containing no links  -->
                                            <a class="nhsuk-subheader-link ${(childItemHref?has_content)?then('', 'no-link')}" href="${(childItemHref?has_content)?then(childItemHref, '#')}" ${(childItem.externalLink??)?then('target="_blank"', '')}>
                                                ${childItem.name}
                                            </a>
                                        </li>
                                    </#list>
                                </ul>
                            </li>
                        <#else>
                            <#--  Renders non-sub-nav navigations  -->
                            <li class="nhsuk-header__navigation-item">
                                <a class="nhsuk-header__navigation-link" href="${itemHref}" ${(item.externalLink??)?then('target="_blank"', '')}>
                                    ${item.name}
                                    <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                                    </svg>
                                </a>
                            </li>
                        </#if>
                    </#list>
                </ul>
            </#if>
            <@hst.cmseditmenu menu=menu/>
        </div>
    </nav>
</#if>