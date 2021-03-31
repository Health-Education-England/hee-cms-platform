<#ftl output_format="HTML">
<#include "../../include/imports.ftl">

<@hst.setBundle basename="essentials.pagenotfound" scope="request"/>

<div class="nhsuk-width-container">
    <main id="maincontent" role="main" class="nhsuk-main-wrapper">
        <div>
            <h1><@fmt.message key="pagenotfound.title" var="title"/>${title}</h1>
            <p><@fmt.message key="pagenotfound.text" var="text"/>${text}</p>
        </div>
        <div>
            <@hst.include ref="container"/>
        </div>
    </main>
</div>

