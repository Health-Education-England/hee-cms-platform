<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<@hst.setBundle basename="uk.nhs.hee.web.newsletter" scope="request"/>

<#macro newsletterSubscribeForm block>
    <#if block.newsletterSubscribeFormContentBlock.postSubmitUrl?? && block.newsletterSubscribeFormContentBlock.accName??
            && block.newsletterSubscribeFormContentBlock.listName?? && block.newsletterSubscribeFormContentBlock.consentText??>
        <div class="nhsuk-newsletter-form">
            <form id="newsletter-form" method="POST" action=${block.newsletterSubscribeFormContentBlock.postSubmitUrl}>
                <div id="error-summary" class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" style="display: none;">
                    <h2 class="nhsuk-error-summary__title" id="error-summary-title">
                        <@fmt.message key="error.title"/>
                    </h2>
                    <div class="nhsuk-error-summary__body">
                        <ul class="nhsuk-list nhsuk-error-summary__list">
                            <li id="error-summary-firstname" style="display: none;">
                                <a href="#errors-firstname"><@fmt.message key="error.firstname"/></a>
                            </li>
                            <li id="error-summary-lastname" style="display: none;">
                                <a href="#errors-lastname"><@fmt.message key="error.lastname"/></a>
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

                    <span class="nhsuk-error-message" id="errors-firstname" style="display: none;">
                        <span class="nhsuk-u-visually-hidden">Error:</span> <@fmt.message key="error.firstname"/>
                    </span>
                    <div class="nhsuk-form-group">
                        <label class="nhsuk-label" for="firstname">
                            <@fmt.message key="label.firstname"/>
                        </label>
                        <input class="nhsuk-input" id="firstname" name="firstname" type="text" required>
                    </div>

                    <span class="nhsuk-error-message" id="errors-lastname" style="display: none;">
                        <span class="nhsuk-u-visually-hidden">Error:</span> <@fmt.message key="error.lastname"/>
                    </span>
                    <div class="nhsuk-form-group">
                        <label class="nhsuk-label" for="lastname">
                            <@fmt.message key="label.lastname"/>
                        </label>
                        <input class="nhsuk-input" id="lastname" name="lastname" type="text" required>
                    </div>

                    <span class="nhsuk-error-message" id="errors-email" style="display: none;">
                        <span class="nhsuk-u-visually-hidden">Error:</span> <@fmt.message key="error.email"/>
                    </span>
                    <div class="nhsuk-form-group">
                        <label class="nhsuk-label" for="email">
                            <@fmt.message key="label.email"/>
                        </label>
                        <input class="nhsuk-input" id="email" name="email" type="email" required>
                    </div>

                    <#if block.newsletterSubscribeFormContentBlock.showRegionField>
                        <div class="nhsuk-form-group">
                            <label class="nhsuk-label" for="region">
                                <@fmt.message key="label.region"/>
                            </label>
                            <select class="nhsuk-select" id="region" name="region">
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
                            <select class="nhsuk-select" id="organisation" name="organisation">
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
                            <select class="nhsuk-select" id="profession" name="profession">
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
                                <input class="nhsuk-checkboxes__input" id="consent" name="consent" type="checkbox" required>
                                <label class="nhsuk-label nhsuk-checkboxes__label" for="consent">
                                    <@hst.html hippohtml=block.newsletterSubscribeFormContentBlock.consentText/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <#if block.newsletterSubscribeFormContentBlock.enableCaptcha>
                        <div class="nhsuk-form-group">
                            <script src=https://www.google.com/recaptcha/api.js></script>
                            <div class="g-recaptcha" data-sitekey="6Lda1BAUAAAAABeemGvQod8rVNQQUSM2y9pFK_gS"></div>
                        </div>
                    </#if>

                    <input type="hidden" name="accName" value="${block.newsletterSubscribeFormContentBlock.accName}"/>
                    <input type="hidden" name="listName" value="${block.newsletterSubscribeFormContentBlock.listName}"/>
                    <input type="hidden" name="successUrl" value="${block.newsletterSubscribeFormContentBlock.successUrl}"/>
                    <input type="hidden" name="errorUrl" value="${block.newsletterSubscribeFormContentBlock.errorUrl}"/>
                    <input type="hidden" name="doubleOptin" value="${block.newsletterSubscribeFormContentBlock.enableDoubleOptIn?c}" />
                </fieldset>

                <button class="nhsuk-button" type="submit">
                    ${block.newsletterSubscribeFormContentBlock.submitButtonText}
                </button>
            </form>
        </div>
    </#if>
</#macro>