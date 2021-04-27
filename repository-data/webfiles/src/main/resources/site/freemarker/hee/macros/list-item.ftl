<#ftl output_format="HTML">
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro bulletinListItem items categoriesMap>
    <#list items as item>
        <dl class="nhsuk-summary-list">
            <h3><a href="${item.websiteUrl}">${item.title}</a></h3>
            <#assign categories>${item.categories?map(category -> categoriesMap[category])?join(', ')}</#assign>
            <#if categories??>
                <@fmt.message key="bulletin.category" var="categoryLabel"/>
                <@listItemRow key="${categoryLabel}" value="${categories}" />
            </#if>
            <#if item.overview??>
                <@fmt.message key="bulletin.overview" var="overviewLabel"/>
                <@listItemRow key="${overviewLabel}" value="${item.overview}" />
            </#if>
            <#if item.websiteUrl??>
                <#assign website>
                    <a href="${item.websiteUrl}"> ${item.websiteTitle}</a>
                </#assign>
                <@fmt.message key="bulletin.website" var="websiteLabel"/>
                <@listItemRow key="${websiteLabel}" value="${website}" />
            </#if>
        </dl>
    </#list>
</#macro>
<#macro blogListItem items categoriesMap>
    <#list items as item>
        <li>
            <span class="app-search-results-category">${item.categories?map(category -> categoriesMap[category])?join(', ')}</span>
            <h3><a href="<@hst.link hippobean=item/>">${item.title}</a></h3>
            <p class="nhsuk-body-s nhsuk-u-margin-top-1">${item.summary}</p>
            <div class="nhsuk-review-date">
                <p class="nhsuk-body-s">
                    <@fmt.message key="published_on.text"/> ${item.publicationDate.time?string['dd MMMM yyyy']}
                </p>
                <p class="nhsuk-body-s">
                    <@fmt.message key="by.text"/> ${item.author}
                </p>
            </div>
        </li>
    </#list>
</#macro>
<#macro searchListItem items>
    <#list items as item>
        <li>
            <span class="app-search-results-category">${item.contentType}</span>
            <h3><a href="<@hst.link hippobean=item/>">${item.title}</a></h3>
            <p class="nhsuk-body-s nhsuk-u-margin-top-1">${item.summary}</p>
            <div class="nhsuk-review-date">
                <p class="nhsuk-body-s">
                    <@fmt.message key="published_on.text"/> ${item.publishedDate}
                </p>
            </div>
        </li>
    </#list>
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
