<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign hstCustom=JspTaglibs["http://www.hippoecm.org/jsp/hst/custom"] >

<#--  Function which returns internal link for the document/content bean  -->
<#function getInternalLinkURL contentBean>
    <@hst.link hippobean=contentBean var="linkURL"/>

    <@hst.link siteMapItemRefId="pagenotfound" var="pageNotFoundURL"/>
    <#if linkURL == pageNotFoundURL && 'hee:guidance' == contentBean.contentType>
        <#--  Tries to generate Mini-Hub Guidance link (in case if any available)
              in case if the document/content is Guidance type
              i.e. if the documetn is of type 'hee:guidance'  -->
        <@hstCustom.getMiniHubGuidanceLink hippobean=contentBean var="linkURL"/>
    </#if>

    <#return linkURL>
</#function>

