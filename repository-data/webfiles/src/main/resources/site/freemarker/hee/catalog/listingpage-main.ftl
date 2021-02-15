<#include "../../include/imports.ftl">
<#include "../macros/content-cards.ftl">
<#include "../macros/hero-section.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#if document??>
    <@heroSection heroSection=document.heroSection/>

    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-full">
                    <@contentCards contentCards=document.contentCards/>
                </div>
            </div>
        </main>
    </div>
</#if>