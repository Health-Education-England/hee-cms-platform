<#include "../../include/imports.ftl">

<#--  Renders Person for Author card  -->
<#macro personAuthor person bioSummary hideAuthorContactDetails>
    <div class="hee-card hee-card--author">

        <#--  Author header  -->
        <div class="hee-card--author__header">
            <#-- Get Person Initials -->
            <#assign nameArray = person.name?split(" ")>
            <#if nameArray?size gt 1 >
                <#assign initials = nameArray[0][0] + nameArray[nameArray?size-1][0] >
            <#else>
                <#assign initials = nameArray[0][0]>
            </#if>
            <#-- End Get Person Initials -->

            <#--  Image/initial  -->
            <#assign imgBgStyle=''>
            <#assign imgBgClass=''>
            <#assign imgBgAltTxt=''>
            <#assign ariaHideInitials=''>
            <#if person.image??>
                <@hst.link var="personImage" hippobean=person.image/>
                <#assign imgBgStyle=' style="background-image: url(\'${personImage}\')"'>
                <#assign imgBgClass=' has-bg'>
                <#assign imgBgAltTxt=' role="img" aria-label="${person.image.description!}"'>
                <#ariaHideInitials=' aria-hidden="true"'>
            </#if>
            <div class="hee-card__image${imgBgClass}">
                <div class="hee-card__initials"${imgBgStyle}${imgBgAltTxt}>
                    <span ${ariaHideInitials}>${initials}</span>
                </div>
            </div>

            <div class="hee-card--author__details">
                <#--  Name  -->
                <#if person.title?has_content>
                    <#assign nameWithTitle> ${person.title} ${person.name} </#assign>
                <#else>
                    <#assign nameWithTitle> ${person.name} </#assign>
                </#if>
                <h2 data-anchorlinksignore="true" class="hee-card__name" aria-label="Name ${nameWithTitle}">${nameWithTitle}</h2>

                <#--  Pronouns  -->
                <#if person.pronouns?has_content>
                    <span class="hee-card__pronouns" aria-label="Pronouns">${person.pronouns}</span>
                </#if>

                <#--  Job title  -->
                <#if person.jobTitle?has_content>
                    <h3 class="nhsuk-heading-m hee-card__jobtitle" aria-label="Job Title ${person.jobTitle}">${person.jobTitle}</h3>
                </#if>

                <#--  Department  -->
                <#if person.department??>
                    <p class="hee-card__department" aria-label="Department ${person.department.name}">${person.department.name}</p>
                <#elseif person.departmentName?has_content>
                    <p class="hee-card__department" aria-label="Department ${person.departmentName}">${person.departmentName}</p>
                </#if>

                <#--  Organisation  -->
                <#if person.organisation?has_content>
                    <p class="hee-card__organisation" aria-label="Organisation">${person.organisation}</p>
                </#if>
            </div>
        </div>

        <#--  Author contact details  -->
        <ul class="hee-card__contact">
            <#if !hideAuthorContactDetails>
                <#--  Email  -->
                <#if person.email?has_content>
                    <li class="hee-card__email hee-card__contact__item" aria-label="Email">
                        <a href="mailto:${person.email}" title="Opens email">${person.email}</a>
                    </li>
                </#if>
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

        <#if !hideAuthorContactDetails>
            <#--  Address  -->
            <#if person.address?has_content>
                <p class="hee-card__address" aria-label="Address">${person.address?replace('\n', '<br>')}</p>
            </#if>
        </#if>

        <#--  Bio summary  -->
        <#if bioSummary?has_content>
            <p class="hee-card__bio" aria-label="Bio">${bioSummary}</p>
        </#if>
    </div>
</#macro>