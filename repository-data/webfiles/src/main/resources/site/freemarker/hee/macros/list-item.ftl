<#ftl output_format="HTML">
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro bulletinListItem title category overview websiteURL websiteText>
    <dl class="nhsuk-summary-list">
        <h3><a href="${websiteURL}"> ${title}</a></h3>
        <#if category??>
            <@fmt.message key="bulletin.category" var="categoryLabel"/>
            <@listItemRow key="${categoryLabel}" value="${category}" />
        </#if>
        <#if overview??>
            <@fmt.message key="bulletin.overview" var="overviewLabel"/>
            <@listItemRow key="${overviewLabel}" value="${overview}" />
        </#if>
        <#if websiteURL??>
            <#assign website>
                <a href="${websiteURL}"> ${websiteText}</a>
            </#assign>
            <@fmt.message key="bulletin.website" var="websiteLabel"/>
            <@listItemRow key="${websiteLabel}" value="${website}" />
        </#if>
    </dl>
</#macro>
<#macro listItem listItem>
    <li>
        <span class="app-search-results-category">${listItem.contentType}</span>
        <h3><a href="<@hst.link hippobean=listItem/>">${listItem.title}</a></h3>
        <p class="nhsuk-body-s nhsuk-u-margin-top-1">${listItem.summary}</p>
        <div class="nhsuk-review-date">
            <p class="nhsuk-body-s">
                ${listItem.publishedDate}
            </p>
        </div>
    </li>
</#macro>

<#macro listItemRow key value>
    <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">
            ${key}
        </dt>
        <dd class="nhsuk-summary-list__value">
            ${value}
        </dd>
    </div>
</#macro>
