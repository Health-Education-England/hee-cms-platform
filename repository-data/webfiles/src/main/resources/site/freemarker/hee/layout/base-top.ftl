<#include "../../include/imports.ftl">
<@hst.defineObjects />

<div class="nhsuk-width-container nhsuk-header__container">
    <#--  Logo and org name & descriptor: START  -->
    <div class="nhsuk-header__multilogo">
        <span class="nhsuk-header__logo nhsuk-header__logo-home">
            <#--  Logo & org name: START  -->
            <a class="nhsuk-header__link" href="https://www.hee.nhs.uk" aria-label="${hstRequestContext.resolvedMount.mount.channelInfo.organisationName}">
                <span class="nhsuk-organisation-name nhse-global-menu-descriptor">${hstRequestContext.resolvedMount.mount.channelInfo.organisationName}</span>
            </a>
            <#--  Logo & org name: END  -->
            <#--  Org descriptor: START  -->
            <a class="nhsuk-header__link" href="<@hst.link siteMapItemRefId="root"/>" aria-label="${hstRequestContext.resolvedMount.mount.channelInfo.organisationDescriptor}">
                <span class="nhsuk-organisation-descriptor">${hstRequestContext.resolvedMount.mount.channelInfo.organisationDescriptor}</span>
            </a>
            <#--  Org descriptor: END  -->
        </span>

        <#--  Multi-org logos: START  -->
        <@hst.include ref="multi-org-logo" var="multiOrgLogoHTML"/>
        <#--  Workaround to remove additional wrapper div's introduced by 'multi-org-logo' container  -->
        ${multiOrgLogoHTML}
        <#--  Multi-org logos: END  -->
    </div>
    <#--  Logo and org name & descriptor: END  -->

    <#--  Header search : START  -->
    <@hst.link var="searchLink" siteMapItemRefId="search"/>

    <#--  Render header search on all pages other than search resutls page  -->
    <#if searchLink + '/results' != hstRequestContext.servletRequest.requestURI>
        <div class="nhsuk-header__content" id="content-header">
            <div class="nhsuk-header__menu">
                <button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-expanded="false">Menu</button>
            </div>
            <div class="nhsuk-header__search">
                <button class="nhsuk-header__search-toggle" id="toggle-search" aria-controls="search" aria-label="Open search">
                    <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="27" height="27">
                        <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
                    </svg>
                    <span class="nhsuk-u-visually-hidden">Search</span>
                </button>
                <div class="nhsuk-header__search-wrap" id="wrap-search">
                    <form class="nhsuk-header__search-form" id="search" action="${searchLink}" method="get" role="search">
                        <label class="nhsuk-u-visually-hidden" for="search-field">Search the HEE website</label>
                        <div class="autocomplete-container">
                            <div class="autocomplete__wrapper">
                                <input class="nhsuk-search__input" id="search-field" name="q" type="search" placeholder="Search" autocomplete="off">
                            </div>
                        </div>
                        <button class="nhsuk-search__submit" type="submit">
                            <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="27" height="27">
                                <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
                            </svg>
                            <span class="nhsuk-u-visually-hidden">Search</span>
                        </button>
                        <button class="nhsuk-search__close" id="close-search">
                            <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="27" height="27">
                                <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                            </svg>
                            <span class="nhsuk-u-visually-hidden">Close search</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </#if>
    <#--  Header search : END  -->
</div>
