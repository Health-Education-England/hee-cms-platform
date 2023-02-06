<#ftl output_format="HTML">
<#include "../../include/imports.ftl">

<@hst.setBundle basename="essentials.pagenotfound"/>
<#include "../../include/page-meta-data.ftl">

<main class="page" id="maincontent" role="main">
    <div class="nhsuk-width-container">
        <div>
            <h1><@fmt.message key="pagenotfound.title" var="title"/>${title}</h1>
            <p><@fmt.message key="pagenotfound.text" var="text"/>${text}</p>
        </div>
        <div>
            <@hst.include ref="container"/>
        </div>
    </div>
</main>
