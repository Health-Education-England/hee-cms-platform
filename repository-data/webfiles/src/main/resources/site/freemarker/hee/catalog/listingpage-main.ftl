<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#if document??>
    <h1>
        ${document.title}
    </h1>
    <p class="nhsuk-lede-text">${document.summary}</p>
    <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-full">
            <@hee.contentCards contentCards=document.contentCards/>
        </div>
    </div>
</#if>
