<#ftl output_format="HTML">
<#--<@hst.setBundle basename="uk.nhs.hee.web.bulletin"/>-->

<#macro bulletinItem title category overview websiteURL websiteText>
    <dl class="nhsuk-summary-list">
        <h3><a href="${websiteURL}"> ${title}</a></h3>
        <#if category??>
            <@fmt.message key="bulletin.category" var="categoryLabel"/>
            <@bulletinItemRow key="${categoryLabel}" value="${category}" />
        </#if>
        <#if overview??>
            <@fmt.message key="bulletin.overview" var="overviewLabel"/>
            <@bulletinItemRow key="${overviewLabel}" value="${overview}" />
        </#if>
        <#if websiteURL??>
            <#assign website>
                <a href="${websiteURL}"> ${websiteText}</a>
            </#assign>
            <@fmt.message key="bulletin.website" var="websiteLabel"/>
            <@bulletinItemRow key="${websiteLabel}" value="${website}" />
        </#if>
    </dl>
</#macro>

<#macro bulletinItemRow key value>
    <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
            ${key}
        </dt>
        <dd class="nhsuk-summary-list__value">
            ${value}
        </dd>
    </div>
</#macro>