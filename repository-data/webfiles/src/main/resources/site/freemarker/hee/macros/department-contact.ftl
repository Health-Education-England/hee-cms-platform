<#include "../../include/imports.ftl">
<#include "../utils/phone-number-util.ftl">

<#macro departmentContact department description="" newCard=false>
    <div class="hee-card hee-card--department">
        <#--  Card header: START  -->
        <div class="hee-card--department__header">
            <#--  Name  -->
            <h2 class="nhsuk-heading-m hee-card__jobtitle" aria-label="Department name">${department.name}</h2>

            <#--  Organisation  -->
            <#if department.organisation?has_content>
                <p class="hee-card__organisation" aria-label="Organisation">${department.organisation}</p>
            </#if>
        </div>
        <#--  Card header: END  -->

        <#--  Card contact details: START  -->
        <ul class="hee-card__contact">
            <#--  Phone  -->
            <#if department.phoneNumber?has_content>
                <li class="hee-card__telephone hee-card__contact__item" aria-label="Telephone">
                    <a href="tel:${getUKCountryCodePrefixedPhoneNumber(department.phoneNumber)?replace(' ', '')}" title="Opens call">${getUKCountryCodePrefixedPhoneNumber(department.phoneNumber)}${department.phoneExtension?has_content?then(' (Ext: ' + department.phoneExtension + ')', '')}</a>
                </li>
            </#if>

            <#--  Email  -->
            <#if department.email?has_content>
                <li class="hee-card__email hee-card__contact__item" aria-label="Email">
                    <a href="mailto:${department.email}" title="Opens email">${department.email}</a>
                </li>
            </#if>

            <#--  Website  -->
            <#if department.website?has_content>
                <li class="hee-card__website hee-card__contact__item" aria-label="Website">
                    <a href="${department.website}" title="Opens website">${department.website}</a>
                </li>
            </#if>
        </ul>

        <#--  Address  -->
        <#if department.address?has_content>
            <p class="hee-card__address" aria-label="Address">${department.address?replace('\n', '<br>')}</p>
        </#if>

        <#if newCard && description?has_content>
            <#--  Renders contact card description for new contact cards  -->
            <p class="hee-card__description" aria-label="Description">${description}</p>
        <#elseif !newCard && department.description?has_content>
            <#--  Renders department description for old contact cards  -->
            <p class="hee-card__description" aria-label="Description">${department.description}</p>
        </#if>
        <#--  Card contact details: END  -->
    </div>
</#macro>