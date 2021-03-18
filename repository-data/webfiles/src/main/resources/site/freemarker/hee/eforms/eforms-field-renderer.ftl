<#ftl output_format="HTML" encoding="UTF-8">
<#--
  Copyright 2015-2019 Hippo B.V. (http://www.onehippo.com)
-->

<#assign core=JspTaglibs ["http://java.sun.com/jsp/jstl/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro renderCss field>
    <#compress>
        <#assign cssClass="nhsuk-form-group">
        <#if field.extraCssClass?has_content>
            <#assign cssClass="nhsuk-form-group ${field.extraCssClass}">
        </#if>${cssClass}
    </#compress>
</#macro>

<#macro renderField field>
  <#if field.type == "simpletextfield">

    <div class="eforms-text<#if field.extraCssClass?has_content> ${field.extraCssClass!}</#if>" name="${field.formRelativeUniqueName}">
      <div class="${field.styleClass!}">${field.label!}</div>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
    </div>

  <#elseif field.type == "textfield">

    <div class="<@renderCss field=field />">
      <label class="nhsuk-label">${field.label!}</label>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
      <input type="text" id="${field.formRelativeUniqueName}" name="${field.formRelativeUniqueName}" class="nhsuk-input ${field.styleClass!}" value="${field.value!}"
             <#if (field.length > 0)>size="${field.length}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if>
             <#if (field.autocomplete??)> autocomplete="${field.autocomplete}"</#if> aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"/>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
    </div>

  <#elseif field.type == "passwordfield">

    <div class="<@renderCss field=field />">
      <label class="nhsuk-label">${field.label!}</label>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
      <input type="password" id="${field.formRelativeUniqueName}" name="${field.formRelativeUniqueName}" class="${field.styleClass!}"
             <#if (field.length > 0)>size="${field.length}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if>
             aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"/>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
    </div>

  <#elseif field.type == "textarea">

    <div class="<@renderCss field=field />">
      <label class="nhsuk-label">${field.label!}</label>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
      <textarea name="${field.formRelativeUniqueName}" class="nhsuk-textarea ${field.styleClass!}"
                cols="${field.cols}" rows="${field.rows}"
                aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"
                <#if (field.autocomplete??)> autocomplete="${field.autocomplete}"</#if>
                <#if (field.minLength > 0)>minlength="${field.minLength}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if>>${field.value!}</textarea>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
    </div>

  <#elseif field.type == "dropdown">

    <div class="<@renderCss field=field />">
      <label class="nhsuk-label">${field.label!}</label>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
      <select name="${field.formRelativeUniqueName}" aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error" class="${field.styleClass!}"<#if (field.autocomplete??)> autocomplete="${field.autocomplete}"</#if>>
        <#list field.options as option>
          <option value="${option.value!}" <#if option.selected>selected="selected"</#if>>${option.text!}</option>
        </#list>
      </select>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
    </div>

  <#elseif field.type == "fileuploadfield">

    <div class="<@renderCss field=field />">
      <label class="nhsuk-label">${field.label!}</label>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
      <input type="file" name="${field.formRelativeUniqueName}" class="${field.styleClass!}"
             data-validate="fileSizeAndExtension" data-max-size="${field.maxUploadSize}"
             data-allowed-extensions="<#if field.fileExtensions?? && (field.fileExtensions?size > 0)>${field.fileExtensions?join(",")}</#if>"
             aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"/>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
    </div>

  <#elseif field.type == "datefield">

    <div class="<@renderCss field=field />">
      <label class="nhsuk-label">${field.label!}</label>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
      <input type="text" name="${field.formRelativeUniqueName}" class="date ${field.styleClass!}" value="${field.value!}"
              <#if (field.autocomplete??)> autocomplete="${field.autocomplete}"</#if>
             aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"/>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
    </div>
    <script>
      $(document).ready(function() {
        $(function() {
          $('input[class*="date"][name="${field.formRelativeUniqueName}"]').datetimepicker({
            format:'${field.dateFormat!}'.replace(/m+/g,'i')
                                         .replace(/H+/g,'H')
                                         .replace(/d+/g,'d')
                                         .replace(/M+/g,'m')
                                         .replace(/y+/g,'Y'),
            step:10,
            timepicker:('${field.dateFormat!}'.indexOf('HH:mm') >= 0)
          });
        });
      });
    </script>

  <#elseif field.type == "radiogroup">

    <div class="<@renderCss field=field />">
      <label class="nhsuk-label">${field.label!}</label>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
      <ul class="radiogroup">
        <#list field.fields as radio>
          <li>
            <input type="radio" name="${field.formRelativeUniqueName}" class="${radio.styleClass!}" value="${radio.value!}"
                   <#if radio.checked>checked="true"</#if>
                   aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"/>
            ${radio.label!}
          </li>
        </#list>
        <#if field.allowOther>
          <li>
            <input type="radio" name="${field.formRelativeUniqueName}" class="${field.styleClass!}" value="${field.renderOtherValue!}"
              <#if field.otherValue>checked="true"</#if>
                   aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"/>
            Other:
            <span>
              <input type="text" value="<#if field.otherValue>${field.value!}</#if>" name="${field.otherFieldName!}" class="textfield-other"
                     <#if (field.length > 0)>size="${field.length}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if> />
            </span>
          </li>
        </#if>
      </ul>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
    </div>

  <#elseif field.type == "checkboxgroup">

    <div class="<@renderCss field=field />">
      <label class="nhsuk-label">${field.label!}</label>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
      <#list field.fields as checkbox>
        <p>
          <input type="checkbox" name="${checkbox.formRelativeUniqueName}" class="${checkbox.styleClass!}" value="${checkbox.value!}"
                 <#if checkbox.checked>checked="true"</#if>
                 aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"/>
          ${checkbox.label!}
        </p>
      </#list>
      <#if field.allowOther>
        <input type="checkbox" name="${field.formRelativeUniqueName}" class="${field.styleClass!}" value="${field.renderOtherValue!}"
          <#if field.otherValue>checked="true"</#if>
               aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"/>
        Other:
        <span>
          <input type="text" value="<#if field.otherValue>${field.value!}</#if>" name="${field.otherFieldName!}" class="textfield-other"
                 <#if (field.length > 0)>size="${field.length}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if>
          aria-describedby="${field.formRelativeUniqueName}-hint ${field.formRelativeUniqueName}-error"/>
        </span>
      </#if>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
    </div>

  <#elseif field.type == "likert">

    <div class="<@renderCss field=field />">
      <input type="hidden" name="${field.formRelativeUniqueName}"/>
      <label class="nhsuk-label">${field.label!}</label>
      <span class="nhsuk-error-message" id="${field.formRelativeUniqueName}-error"></span>
      <table class="eforms-likert-table">
        <tr>
          <td>&nbsp;</td>
          <#list field.options as option>
            <td>
              ${option!}
            </td>
          </#list>
        </tr>
        <#list field.optionsKeyValuePairs as pair>
          <tr>
            <td>${pair.key.label!}</td>
            <#list pair.value as radio>
              <td>
                <input type="radio" name="${radio.formRelativeUniqueName}" class="${radio.styleClass!}" value="${radio.value!}"
                       <#if radio.checked>checked="true"</#if> />
              </td>
            </#list>
          </tr>
        </#list>
      </table>
      <span class="nhsuk-hint" id="${field.formRelativeUniqueName}-hint">${field.hint!}</span>
    </div>

  <#elseif field.type == "antispam">

    <#if field.honeyPot>

      <div class=""<@renderCss field=field />"<#if !field.extraCssClass?has_content> style="display:none"</#if>>
      <label class="nhsuk-label">${field.label}<span class="eforms-req">${field.requiredMarker}</span></label>
        <input type="text" name="${field.formRelativeUniqueName}" class="nhsuk-input ${field.styleClass!}" value="${field.value!}"/>
      </div>

    <#elseif field.slider>

      <div class=""<@renderCss field=field />">
        <div id="slider"></div>
        <input type="hidden" id="sliderInput" name="${field.formRelativeUniqueName}" value=""/>
        <div id="notSlided" style="display:block">
          <p>Slide to be able to submit</p>
        </div>
        <div id="slided" style="display:none">
          <p>You may submit the form</p>
        </div>
      </div>
    <#else>
      ${field.antiSpamType}
    </#if>
  </#if>

</#macro>
