<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#if document??>
    <@hee.heroSection heroSection=document.heroSection/>

    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-full">
                    <@hee.contentCards contentCards=document.contentCards/>
                </div>
            </div>
        </main>
    </div>
</#if>