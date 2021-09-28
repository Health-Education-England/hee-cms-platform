<#ftl output_format="HTML">
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.PhaseBanner" -->

<#if document??>
    <div class="nhsuk-phase-banner">
        <div class="nhsuk-width-container">
            <p class="nhsuk-phase-banner__content">
                <strong class="nhsuk-tag nhsuk-phase-banner__content__tag">${document.tag}</strong>
                <span class="nhsuk-phase-banner__text">
                    <@hst.html hippohtml=document.copy/>
                    <#--  This is a new service – your <a class="nhsuk-link" href="https://forms.office.com/Pages/ResponsePage.aspx?id=K5Gn_5ewMUGcD9DoB1Wyq62_imvDlFpPhawBoObID1NUQTNENlpXMlNZVjJBS0JCUVVLUlQxSkJVUyQlQCN0PWcu" target="_blank" title="Opens in New Window">feedback</a> will help us to improve it.  -->
                </span>
            </p>
        </div>
    </div>
</#if>