<#ftl output_format="HTML">
<#include "../../include/imports.ftl">

<#-- @ftlvariable name="breadcrumbLinks" type="java.util.List<uk.nhs.hee.web.components.beans.BreadcrumbLink>" -->
<#if breadcrumbLinks?? && breadcrumbLinks?has_content>
    <@hst.setBundle basename="uk.nhs.hee.web.global"/>

    <nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
        <div class="nhsuk-width-container">
            <#-- For Desktop -->
            <ol class="nhsuk-breadcrumb__list">
                <#list breadcrumbLinks as breadcrumbLink>
                    <li class="nhsuk-breadcrumb__item">
                        <a class="nhsuk-breadcrumb__link" href="${breadcrumbLink.url}">${breadcrumbLink.text}</a>
                    </li>
                </#list>
            </ol>

            <#-- For Mobile -->
            <#assign parentBreadcrumbLink=breadcrumbLinks[breadcrumbLinks?size - 1] />
            <p class="nhsuk-breadcrumb__back">
                <a class="nhsuk-breadcrumb__backlink" href="${parentBreadcrumbLink.url}">
                    <span class="nhsuk-u-visually-hidden"><@fmt.message key="breadcrumb.backto"/> &nbsp;</span>${parentBreadcrumbLink.text}
                </a>
            </p>
        </div>
    </nav>
</#if>