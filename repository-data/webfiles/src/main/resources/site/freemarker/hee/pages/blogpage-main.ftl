<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<div class="nhsuk-width-container">
    <main id="maincontent" role="main" class="nhsuk-main-wrapper">
        <@hst.include ref="blog"/>

        <#--  HEE-233: Temporarily switching off the ability to add comment(s) to blog posts
              while the moderation functionality is being developed  -->
        <#--  <div class="nhsuk-grid-row nhsuk-u-margin-top-4">
            <div class="nhsuk-grid-column-two-thirds">
                <@hst.include ref="comment"/>
            </div>
        </div>  -->
    </main>
</div>
