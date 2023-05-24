<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

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

                    <a class="hee-resources__link" href="${fileURL}" title="${link.text}">
                        <div class="hee-resources__wrapper">
                            <#--  File link text  -->
                            <span class="hee-resources__text">${link.text}</span>

                            <#--  File size: START  -->
                            <#if (link.file.lengthMB > 1)>
                                <#assign docSize="${link.file.lengthMB?string('0.00')}MB">
                            <#else>
                                <#assign docSize="${link.file.lengthKB?string('0')}KB">
                            </#if>
                            <span class="hee-resources__docSize">${docSize}</span>
                            <#--  File size: END  -->
                        </div>

                        <#--  File type/format: START  -->
                        <#assign fileExtn="${link.file.filename?keep_after_last('.')?lower_case}">
                        <span class="hee-resources__tag hee-resources__${fileExtn}">${fileExtn?upper_case}</span>
                        <#--  File type/format: END  -->
                    </a>
                </div>
            </#list>
            <#--  Download/File/Resource links: END  -->
        </div>
    </#if>
</#macro>
