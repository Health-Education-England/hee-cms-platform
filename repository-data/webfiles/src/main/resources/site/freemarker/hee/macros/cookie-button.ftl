<#macro cookieButton>
    <div class="nhsuk__cookieStatus">
        <h2>
            <@fmt.message key="cookie.toggle.text"/>
        </h2>
        <button id="acceptCookies" class="nhsuk-button nhsuk__cookiesOut"><@fmt.message key="cookie.button.accept"/></button>
        <button id="rejectCookies" class="nhsuk-button nhsuk__cookiesIn"><@fmt.message key="cookie.button.reject"/></button>
    </div>
</#macro>
