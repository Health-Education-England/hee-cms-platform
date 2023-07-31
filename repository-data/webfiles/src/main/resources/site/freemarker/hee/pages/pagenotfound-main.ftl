<#ftl output_format="HTML">
<#include "../../include/imports.ftl">

<@hst.setBundle basename="essentials.pagenotfound"/>
<#include "../../include/page-meta-data.ftl">

<main class="page page--fullwidth" id="maincontent" role="main">
    <div class="page__header">
        <div class="nhsuk-width-container">
            <h1><@fmt.message key="pagenotfound.title"/></h1>
            <p class="nhsuk-lede-text"><@fmt.message key="pagenotfound.text"/></p>
        </div>
    </div>
</main>
