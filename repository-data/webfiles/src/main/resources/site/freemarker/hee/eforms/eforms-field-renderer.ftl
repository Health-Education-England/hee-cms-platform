<#ftl encoding="UTF-8">
<#--
  Copyright 2015-2019 Hippo B.V. (http://www.onehippo.com)
-->

<#assign core=JspTaglibs ["http://java.sun.com/jsp/jstl/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro renderCss field>
    <#compress>
        <#assign cssClass="form-field">
        <#if field.extraCssClass?has_content>
            <#assign cssClass="eforms-field ${field.extraCssClass}">
        </#if>${cssClass}
    </#compress>
</#macro>

<#macro renderField field>
  <#if field.type == "simpletextfield">

    <div class="eforms-text<#if field.extraCssClass?has_content> ${field.extraCssClass!}</#if>" name="${field.formRelativeUniqueName}">
      <div class="${field.styleClass!}">${field.label!?html}</div>
      <span class="field-hint">${field.hint!?html}</span>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
    </div>

  <#elseif field.type == "textfield">

    <div class="<@renderCss field=field />">
      <label>${field.label!?html}</label>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
      <input type="text" name="${field.formRelativeUniqueName}" class="${field.styleClass!}" value="${field.value!}"
             <#if (field.length > 0)>size="${field.length}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if>
             <#if (field.autocomplete??)> autocomplete="${field.autocomplete}"</#if> />
      <span class="field-hint">${field.hint!?html}</span>
    </div>

  <#elseif field.type == "passwordfield">

    <div class="<@renderCss field=field />">
      <label>${field.label!?html}</label>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
      <input type="password" name="${field.formRelativeUniqueName}" class="${field.styleClass!}"
             <#if (field.length > 0)>size="${field.length}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if> />
      <span class="field-hint">${field.hint!?html}</span>
    </div>

  <#elseif field.type == "textarea">

    <div class="<@renderCss field=field />">
      <label>${field.label!?html}</label>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
      <textarea name="${field.formRelativeUniqueName}" class="${field.styleClass!}"
                cols="${field.cols}" rows="${field.rows}"
                <#if (field.autocomplete??)> autocomplete="${field.autocomplete}"</#if>
                <#if (field.minLength > 0)>minlength="${field.minLength}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if>>${field.value!}</textarea>
      <span class="field-hint">${field.hint!?html}</span>
    </div>

  <#elseif field.type == "dropdown">

    <div class="<@renderCss field=field />">
      <label>${field.label!?html}</label>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
      <select name="${field.formRelativeUniqueName}" class="${field.styleClass!}"<#if (field.autocomplete??)> autocomplete="${field.autocomplete}"</#if>>
        <#list field.options as option>
          <option value="${option.value!?html}" <#if option.selected>selected="selected"</#if>>${option.text!?html}</option>
        </#list>
      </select>
      <span class="field-hint">${field.hint!?html}</span>
    </div>

  <#elseif field.type == "fileuploadfield">

    <div class="<@renderCss field=field />">
      <label>${field.label!?html}</label>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
      <input type="file" name="${field.formRelativeUniqueName}" class="${field.styleClass!}"
             data-validate="fileSizeAndExtension" data-max-size="${field.maxUploadSize}"
             data-allowed-extensions="<#if field.fileExtensions?? && (field.fileExtensions?size > 0)>${field.fileExtensions?join(",")}</#if>" />
      <span class="field-hint">${field.hint!?html}</span>
    </div>

  <#elseif field.type == "datefield">

    <div class="<@renderCss field=field />">
      <label>${field.label!?html}</label>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
      <input type="text" name="${field.formRelativeUniqueName}" class="date ${field.styleClass!}" value="${field.value!}"
              <#if (field.autocomplete??)> autocomplete="${field.autocomplete}"</#if>/>
      <span class="field-hint">${field.hint!?html}</span>
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
      <label>${field.label!?html}</label>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
      <ul class="radiogroup">
        <#list field.fields as radio>
          <li>
            <input type="radio" name="${field.formRelativeUniqueName}" class="${radio.styleClass!}" value="${radio.value!?html}"
                   <#if radio.checked>checked="true"</#if> />
            ${radio.label!?html}
          </li>
        </#list>
        <#if field.allowOther>
          <li>
            <input type="radio" name="${field.formRelativeUniqueName}" class="${field.styleClass!}" value="${field.renderOtherValue!?html}"
              <#if field.otherValue>checked="true"</#if> />
            Other:
            <span>
              <input type="text" value="<#if field.otherValue>${field.value!}</#if>" name="${field.otherFieldName!}" class="textfield-other"
                     <#if (field.length > 0)>size="${field.length}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if> />
            </span>
          </li>
        </#if>
      </ul>
      <span class="field-hint">${field.hint!?html}</span>
    </div>

  <#elseif field.type == "checkboxgroup">

    <div class="<@renderCss field=field />">
      <label>${field.label!?html}</label>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
      <#list field.fields as checkbox>
        <p>
          <input type="checkbox" name="${checkbox.formRelativeUniqueName}" class="${checkbox.styleClass!}" value="${checkbox.value!?html}"
                 <#if checkbox.checked>checked="true"</#if> />
          ${checkbox.label!?html}
        </p>
      </#list>
      <#if field.allowOther>
        <input type="checkbox" name="${field.formRelativeUniqueName}" class="${field.styleClass!}" value="${field.renderOtherValue!}"
          <#if field.otherValue>checked="true"</#if> />
        Other:
        <span>
          <input type="text" value="<#if field.otherValue>${field.value!}</#if>" name="${field.otherFieldName!}" class="textfield-other"
                 <#if (field.length > 0)>size="${field.length}"</#if> <#if (field.maxLength > 0)>maxlength="${field.maxLength}"</#if> />
        </span>
      </#if>
      <span class="field-hint">${field.hint!?html}</span>
    </div>

  <#elseif field.type == "likert">

    <div class="<@renderCss field=field />">
      <input type="hidden" name="${field.formRelativeUniqueName}"/>
      <label>${field.label!?html}</label>
      <span class="field-error" id="field-${field.formRelativeUniqueName}"></span>
      <table class="eforms-likert-table">
        <tr>
          <td>&nbsp;</td>
          <#list field.options as option>
            <td>
              ${option!?html}
            </td>
          </#list>
        </tr>
        <#list field.optionsKeyValuePairs as pair>
          <tr>
            <td>${pair.key.label!?html}</td>
            <#list pair.value as radio>
              <td>
                <input type="radio" name="${radio.formRelativeUniqueName}" class="${radio.styleClass!}" value="${radio.value!}"
                       <#if radio.checked>checked="true"</#if> />
              </td>
            </#list>
          </tr>
        </#list>
      </table>
      <span class="field-hint">${field.hint!?html}</span>
    </div>

  <#elseif field.type == "antispam">

    <#if field.honeyPot>

      <div class=""<@renderCss field=field />"<#if !field.extraCssClass?has_content> style="display:none"</#if>>
      <label>${field.label?html}<span class="eforms-req">${field.requiredMarker?html}</span></label>
        <input type="text" name="${field.formRelativeUniqueName}" class="${field.styleClass!}" value="${field.value!}"/>
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
