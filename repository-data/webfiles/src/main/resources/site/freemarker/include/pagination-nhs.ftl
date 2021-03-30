<#ftl output_format="HTML">
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#include "../include/imports.ftl">
<@hst.setBundle basename="uk.nhs.hee.web.pagination"/>

<#if pageable??>
    <#if pageable.totalPages gt 1>
        <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
            <ul class="nhsuk-list nhsuk-pagination__list">
                <#if pageable.previousPage??>
                    <@hst.renderURL var="pageUrlPrevious">
                        <@hst.param name="page" value="${pageable.previousPage}"/>
                        <@hst.param name="pageSize" value="${pageable.pageSize}"/>
                    </@hst.renderURL>
                    <li class="nhsuk-pagination-item--previous">
                        <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href="${pageUrlPrevious}">
                            <@fmt.message key="page.previous" var="prev"/>
                            <span class="nhsuk-pagination__title">${prev}</span>
                            <span class="nhsuk-u-visually-hidden">:</span>
                            <span class="nhsuk-pagination__page">${pageable.previousPage} out of ${pageable.totalPages}</span>
                            <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
                            </svg>
                        </a>
                    </li>
                </#if>
                <#if pageable.nextPage??>
                    <@hst.renderURL var="pageUrlNext">
                        <@hst.param name="page" value="${pageable.nextPage}"/>
                        <@hst.param name="pageSize" value="${pageable.pageSize}"/>
                    </@hst.renderURL>
                    <li class="nhsuk-pagination-item--next">
                        <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="${pageUrlNext}">
                            <@fmt.message key="page.next" var="next"/>
                            <span class="nhsuk-pagination__title">${next}</span>
                            <span class="nhsuk-u-visually-hidden">:</span>
                            <span class="nhsuk-pagination__page">${pageable.nextPage} out of ${pageable.totalPages}</span>
                            <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
                            </svg>
                        </a>
                    </li>
                </#if>
            </ul>
        </nav>
    </#if>
</#if>
