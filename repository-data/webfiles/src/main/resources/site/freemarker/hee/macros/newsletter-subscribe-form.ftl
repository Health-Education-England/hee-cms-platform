<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<@hst.setBundle basename="uk.nhs.hee.web.newsletter" scope="request"/>

<#macro newsletterSubscribeForm block>
    <#if block.newsletterSubscribeFormContentBlock.postSubmitUrl?? && block.newsletterSubscribeFormContentBlock.dataId??>
        <div class="nhsuk-newsletter-form">
            <form id="newsletter-form"  class="js-cm-form" method="POST" action=${block.newsletterSubscribeFormContentBlock.postSubmitUrl} data-id=${block.newsletterSubscribeFormContentBlock.dataId}>
                <div id="error-summary" class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" style="display: none;">
                    <h2 class="nhsuk-error-summary__title" id="error-summary-title">
                        <@fmt.message key="error.title"/>
                    </h2>
                    <div class="nhsuk-error-summary__body">
                        <ul class="nhsuk-list nhsuk-error-summary__list">
                            <li id="error-summary-name" style="display: none;">
                                <a href="#errors-name"><@fmt.message key="error.name"/></a>
                            </li>
                            <li id="error-summary-email" style="display: none;">
                                <a href="#errors-email"><@fmt.message key="error.email"/></a>
                            </li>
                            <li id="error-summary-consent" style="display: none;">
                                <a href="#errors-consent"><@fmt.message key="error.consent"/></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <fieldset class="nhsuk-fieldset">

                    <span class="nhsuk-error-message" id="errors-name" style="display: none;">
                        <span class="nhsuk-u-visually-hidden">Error:</span> <@fmt.message key="error.name"/>
                    </span>
                    <div class="nhsuk-form-group">
                        <label class="nhsuk-label" for="name">
                            <@fmt.message key="label.name"/>
                        </label>
                        <input class="nhsuk-input" id="name" name="cm-name" type="text" required>
                    </div>

                    <span class="nhsuk-error-message" id="errors-email" style="display: none;">
                        <span class="nhsuk-u-visually-hidden">Error:</span> <@fmt.message key="error.email"/>
                    </span>
                    <div class="nhsuk-form-group">
                        <label class="nhsuk-label" for="email">
                            <@fmt.message key="label.email"/>
                        </label>
                        <input class="nhsuk-input js-cm-email-input" id="email" name="cm-ttjturl-ttjturl" type="email" required>
                    </div>

                    <#if block.newsletterSubscribeFormContentBlock.showRegionField>
                        <div class="nhsuk-form-group">
                            <label class="nhsuk-label" for="region">
                                <@fmt.message key="label.region"/>
                            </label>
                            <select class="nhsuk-select" id="region" name="cm-f-tdhjkdy">
                                <option selected="selected" value=""><@fmt.message key="select.region"/></option>
                                <#list newsletterRegionMap?keys as region>
                                    <option value="${newsletterRegionMap[region]}">${newsletterRegionMap[region]}</option>
                                </#list>
                            </select>
                        </div>
                    </#if>

                    <#if block.newsletterSubscribeFormContentBlock.showOrganisationField>
                        <div class="nhsuk-form-group">
                            <label class="nhsuk-label" for="organisation">
                                <@fmt.message key="label.organisation"/>
                            </label>
                            <select class="nhsuk-select" id="organisation" name="cm-f-tdhjkdr">
                                <option selected="selected" value=""><@fmt.message key="select.organisation"/></option>
                                <#list newsletterOrganisationMap?keys as organisation>
                                    <option value="${newsletterOrganisationMap[organisation]}">${newsletterOrganisationMap[organisation]}</option>
                                </#list>
                            </select>
                        </div>
                    </#if>

                    <#if block.newsletterSubscribeFormContentBlock.showProfessionField>
                        <div class="nhsuk-form-group">
                            <label class="nhsuk-label" for="profession">
                                <@fmt.message key="label.profession"/>
                            </label>
                            <select class="nhsuk-select" id="profession" name="cm-f-tdhjkdl">
                                <option selected="selected" value=""><@fmt.message key="select.profession"/></option>
                                <#list newsletterProfessionMap?keys as profession>
                                    <#if newsletterProfessionMap[profession]?starts_with("~~")>
                                        <#assign shortName1='${newsletterProfessionMap[profession]}'?split("~~")[1]>
                                        <option value="${shortName1}">&nbsp;&nbsp;&nbsp;${shortName1}</option>
                                    <#elseif newsletterProfessionMap[profession]?starts_with("~")>
                                        <#assign shortName='${newsletterProfessionMap[profession]}'?split("~")[1]>
                                        <optgroup label="${shortName}"></optgroup>
                                    <#else>
                                        <option value="${newsletterProfessionMap[profession]}">${newsletterProfessionMap[profession]}</option>
                                    </#if>
                                </#list>
                            </select>
                        </div>
                    </#if>

                    <span class="nhsuk-error-message" id="errors-consent" style="display: none;">
                        <span class="nhsuk-u-visually-hidden">Error:</span> <@fmt.message key="error.consent"/>
                    </span>
                    <div class="nhsuk-form-group">
                        <div class="nhsuk-checkboxes">
                            <div class="nhsuk-checkboxes__item">
                                <input class="nhsuk-checkboxes__input" id="consent" name="cm-privacy-email" type="checkbox">
                                <label class="nhsuk-label nhsuk-checkboxes__label" for="consent">
                                    <@hst.html hippohtml=block.newsletterSubscribeFormContentBlock.consentText/>
                                </label>
                            </div>
                            <p>
                                <input id="cm-privacy-email-hidden" name="cm-privacy-email-hidden" type="hidden" value="true">
                            </p>
                        </div>
                    </div>
                </fieldset>

                <button class="nhsuk-button" type="submit" data-module="nhsuk-button">
                    ${block.newsletterSubscribeFormContentBlock.submitButtonText}
                </button>
            </form>
        </div>
        <script type="text/javascript" src=https://js.createsend1.com/javascript/copypastesubscribeformlogic.js></script>
    </#if>
</#macro>