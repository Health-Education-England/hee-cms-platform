<#include "../../include/imports.ftl">
<#include "../utils/phone-number-util.ftl">

<#macro personContact person isAuthor=false description="" newCard=false>
    <div class="hee-card hee-card--person">
        <#--  Card header: START  -->
        <div class="hee-card--header">
            <#--  Card image/initial: START  -->
            <#assign nameArray = person.name?split(" ")>
            <#if nameArray?size gt 1 >
                <#assign initials = nameArray[0][0] + nameArray[nameArray?size-1][0] >
            <#else>
                <#assign initials = nameArray[0][0]>
            </#if>

            <#assign imgBgStyle=''>
            <#assign imgBgClass=''>
            <#if person.image??>
                <@hst.link var="personImage" hippobean=person.image/>
                <#assign imgBgStyle=' style="background-image: url(\'${personImage}\')"'>
                <#assign imgBgClass=' has-bg'>
            </#if>

            <div class="hee-card__image${imgBgClass}">
                <div class="hee-card__initials"${imgBgStyle}>
                    <span>${initials}</span>
                </div>
            </div>
            <#--  Card image/initial: END  -->

            <#--  Card details: START  -->
            <div class="hee-card--details">
                <#--  Name  -->
                <#if person.title?has_content>
                    <#assign nameWithTitle> ${person.title} ${person.name} </#assign>
                <#else>
                    <#assign nameWithTitle> ${person.name} </#assign>
                </#if>
                <h2 data-anchorlinksignore="true" class="hee-card__name" aria-label="Name">${nameWithTitle}</h2>

                <#--  Pronouns  -->
                <#if person.pronouns?has_content>
                    <span class="hee-card__pronouns" aria-label="Pronouns">${person.pronouns}</span>
                </#if>

                <#--  Job title  -->
                <#if person.jobTitle?has_content>
                    <h3 class="nhsuk-heading-m hee-card__jobtitle" aria-label="Job Title">${person.jobTitle}</h3>
                </#if>

                <#--  Department  -->
                <#if person.department??>
                    <p class="hee-card__department" aria-label="Department">${person.department.name}</p>
                <#elseif person.departmentName?has_content>
                    <p class="hee-card__department" aria-label="Department">${person.departmentName}</p>
                </#if>

                <#--  Organisation  -->
                <#if person.organisation?has_content>
                    <p class="hee-card__organisation" aria-label="Organisation">${person.organisation}</p>
                </#if>
            </div>
            <#--  Card details: END  -->
        </div>
        <#--  Card header: END  -->

        <#--  Card contact details: START  -->
        <ul class="hee-card__contact">
            <#--  Phone  -->
            <#if person.phoneNumber?has_content>
                <li class="hee-card__telephone hee-card__contact__item" aria-label="Telephone">
                    <a href="tel:${getUKCountryCodePrefixedPhoneNumber(person.phoneNumber)?replace(' ', '')}" title="Opens call">${getUKCountryCodePrefixedPhoneNumber(person.phoneNumber)}${person.phoneExtension?has_content?then(' (Ext: ' + person.phoneExtension + ')', '')}</a>
                </li>
            </#if>

            <#--  Email  -->
            <#if person.email?has_content>
                <li class="hee-card__email hee-card__contact__item" aria-label="Email">
                    <a href="mailto:${person.email}" title="Opens email">${person.email}</a>
                </li>
            </#if>

            <#--  Website  -->
            <#if person.website?has_content>
                <li class="hee-card__website hee-card__contact__item" aria-label="Website">
                    <a href="${person.website}" title="Opens website">${person.website}</a>
                </li>
            </#if>

            <#--  LinkedIn  -->
            <#if person.linkedIn?has_content>
                <li class="hee-card__linkedin hee-card__contact__item" aria-label="Linkedin">
                    <a href="https://www.linkedin.com/in/${person.linkedIn}" title="Opens LinkedIn">/${person.linkedIn}</a>
                </li>
            </#if>

            <#--  Twitter  -->
            <#if person.twitter?has_content>
                <li class="hee-card__twitter hee-card__contact__item" aria-label="Twitter">
                    <a href="https://twitter.com/${person.twitter}" title="Opens Twitter">@${person.twitter}</a>
                </li>
            </#if>
        </ul>

        <#--  Address  -->
        <#if person.address?has_content>
            <p class="hee-card__address" aria-label="Address">${person.address?replace('\n', '<br>')}</p>
        </#if>

        <#--  Description/[old] Bio  -->
        <#if newCard && description?has_content>
            <#--  Renders contact card description for new contact cards  -->
            <p class="hee-card__description" aria-label="Description">${description}</p>
        <#elseif !newCard && person.bio?has_content>
            <#--  Renders person bio for old contact cards  -->
            <p class="hee-card__description" aria-label="Description">${person.bio}</p>
        </#if>
        <#--  Card contact details: END  -->
    </div>
</#macro>