<#include "../../include/imports.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.components.GuidanceComponent" -->
<#if document??>
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">
    <#--  Title  -->
    <h1>${document.title}</h1>
  </div>
</div>

<article>
  <div class="nhsuk-grid-row">
    <div class="nhsuk-grid-column-two-thirds">
      <section class="nhsuk-page-content__section-one">
        <div class="nhsuk-page-content">
          <#--  Summary  -->
          <p>${document.summary}</p>

          <#--  Last and/or Next Reviewed  -->
          <#if document.lastReviewed?? || document.nextReviewed??>
            <div class="nhsuk-review-date">
              <p class="nhsuk-body-s">
                <#if document.lastReviewed??>
                  Page last reviewed: ${document.lastReviewed.getTime()?date?string["dd MMM yyyy"]}
                </#if>
                <#if document.nextReviewed??>
                  <#if document.lastReviewed??>
                    <br/>
                  </#if>
                  Next review due: ${document.nextReviewed.getTime()?date?string["dd MMM yyyy"]}
                </#if>
              </p>
            </div>
          </#if>

          <#--  Body  -->
          <#if document.contentBlocks??>
            <#list document.contentBlocks as block>
              <#if hst.isBeanType(block, 'org.hippoecm.hst.content.beans.standard.HippoMirror')>
                <@hst.link var="img" hippobean=block/>
                <img src="${img}" alt="" />
                <!-- render image -->
              <#elseif hst.isBeanType(block, 'org.hippoecm.hst.content.beans.standard.HippoHtml')>
                  <@hst.html hippohtml=block/>
                <!-- render bean -->
              </#if>
            </#list>
          </#if>

        </div>
      </section>
    </div>

    <#--  Quick Links  -->
    <#--  TODO: Can be moved out as a separate freemarker macro so that it can included from multiple templates  -->
    <#if document.quickLinks?? && document.quickLinks?size != 0>
      <div class="nhsuk-grid-column-one-third">
        <div class="nhsuk-related-nav">
          <#--  TODO: Content manage the heading unless it is always called as `Quick Links` ?  -->
          <h2 class="nhsuk-related-nav__heading">Quick Links</h2>
          <nav role="navigation" class="nhsuk-related-nav__nav-section">
            <ul class="nhsuk-related-nav__list nhsuk-related-nav__list--sub">
              <#list document.quickLinks as link>
                <#if link.document??>
                  <@hst.link hippobean=link.document var="linkURL"/>
                <#else>
                  <#assign openInANewWindow=true />
                  <#assign linkURL="${link.url}" />
                </#if>

                <#if !(linkURL?has_content)>
                  <#continue>
                </#if>

                <li class="nhsuk-related-nav__item">
                  <a class="nhsuk-related-nav__link" href="${linkURL}" ${openInANewWindow?then('target="_blank"', '')}>${link.text}</a>
                </li>
              </#list>
            </ul>
          </nav>
        </div>
      </div>
    </#if>
  </div>
</article>
</#if>