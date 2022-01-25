<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#assign hasMultiOrgLogo=false>
<@hst.include var="topHTML" ref="top"/>
<@hst.include var="menuHTML" ref="menu"/>

<#if (topHTML?index_of('nhsuk-header__multi-logo')) != -1>
    <#assign hasMultiOrgLogo=true>
</#if>

<header class="nhsuk-header--white nhsuk-header nhsuk-header--organisation${hasMultiOrgLogo?then(' nhsuk-header__multi', '')}" role="banner">
    ${topHTML}
    ${hasMultiOrgLogo?then(menuHTML?replace('nhsuk-header__navigation-list', 'nhsuk-header__navigation-list nhsuk-header__multiLogo'), menuHTML)}
</header>
