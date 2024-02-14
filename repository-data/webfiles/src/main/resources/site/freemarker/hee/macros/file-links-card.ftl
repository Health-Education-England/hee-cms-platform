<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<#include "../utils/doc-util.ftl">

<#macro fileLinksCard card>
    <#if card??>
        <div class="hee-card hee-card--details hee-card--downloads">
            <#--  Title  -->
            <h3>${card.title}</h3>

            <#--  Download/File/Resource links: START  -->
            <#list card.fileLinks as link>
                <div class="hee-card--details__item">
                    <#--  Builds file URL  -->
                    <@hst.link var="fileURL" hippobean=link.file>
                        <@hst.param name="forceDownload" value="true"/>
                    </@hst.link>
                    <#assign docExtn="${getDocExtn(link.file)}">
                    <#assign docSize="${getDocSize(link.file)}">

                    <a class="hee-resources__link" href="${fileURL}" title="${link.text}" aria-label="${getDocAriaLabel(link.text, docExtn, docSize)}">
                        <div class="hee-resources__wrapper">
                            <#--  File link text  -->
                            <span class="hee-resources__text">${link.text}</span>

                            <#--  File size  -->
                            <span class="hee-resources__docSize">${docSize}</span>
                        </div>

                        <#--  File type/format  -->
                        <span class="hee-resources__tag hee-resources__${docExtn}">${docExtn?upper_case}</span>
                    </a>
                </div>
            </#list>
            <#--  Download/File/Resource links: END  -->
        </div>
    </#if>
</#macro>
