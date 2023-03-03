<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/micro-hero.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.LandingPage" -->
<#if document??>
    <script src="<@hst.webfile path='/js/${document.script}.js'/>"></script>

    <#if document.microHero??>
        <@microHero microHeroImage=document.microHero />
    </#if>

    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper" style="padding-top: 0px">
            <h1 style="margin-bottom: 10px">
                ${document.title}
            </h1>
            <div>
                <div class="nhsuk-newsletter-form">
                    <form onsubmit="return mySubmitFunction(event)">
                        <fieldset class="nhsuk-fieldset">
                            <div class="nhsuk-form-group" style="margin-bottom: 10px">
                                <label class="nhsuk-label" for="search-keyword">
                                    Keyword*
                                </label>
                                <input class="nhsuk-input" id="search-field__keyword" name="search-keyword" type="text" required>
                            </div>
                            <div class="nhsuk-form-group">
                                <label class="nhsuk-label" for="search-location">
                                    Location or postcode (enter at least three characters)*
                                </label>
                                <input class="nhsuk-input" id="search-field__location" name="search-location" type="text" required>
                            </div>
                            <div class="nhsuk-form-group nhsuk-u-visually-hidden">
                                <label class="nhsuk-label" for="search-distance">
                                    Distance (miles)
                                </label>
                                <select class="nhsuk-select" name="search-distance" id="search-field__distance">
                                    <option value=""></option>
                                    <option value="1" selected>1</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                            <div class="nhsuk-form-group">
                                <div class="nhsuk-checkboxes">
                                    <div class="nhsuk-checkboxes__item">
                                        <input class="nhsuk-checkboxes__input" id="search-field__simple_view" name="search-simple_view" type="checkbox">
                                        <label class="nhsuk-label nhsuk-checkboxes__label" for="search-simple_view">
                                            Short description
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </fieldset>
                        <button class="nhsuk-button" aria-controls="search" aria-label="Open search">
                            Search
                        </button>

                    </form>
                </div>
            </div>
            <div id="nhsuk-job-results">

            </div>
        </main>
    </div>
</#if>
