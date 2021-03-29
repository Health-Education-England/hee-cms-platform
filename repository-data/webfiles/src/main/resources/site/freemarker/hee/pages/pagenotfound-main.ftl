<#include "../../include/imports.ftl">

<@hst.setBundle basename="essentials.pagenotfound"/>

<div class="nhsuk-width-container">
    <main id="maincontent" role="main" class="nhsuk-main-wrapper">
        <div>
            <h1><@fmt.message key="pagenotfound.title" var="title"/>${title?html}</h1>
            <p><@fmt.message key="pagenotfound.text" var="text"/>${text?html}</p>
        </div>
        <div>
            <@hst.include ref="container"/>
        </div>
    </main>
</div>

