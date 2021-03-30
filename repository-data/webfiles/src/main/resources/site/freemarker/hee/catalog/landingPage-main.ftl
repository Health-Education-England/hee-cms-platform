<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.LandingPage" -->
<#if document??>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <h1>
                ${document.title}
            </h1>
            <p class="nhsuk-lede-text">${document.summary}</p>
            <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-full">
                    <@hee.contentCards contentCards=document.contentCards/>
                </div>
            </div>
        </main>
    </div>
</#if>
