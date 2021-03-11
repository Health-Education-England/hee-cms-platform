# Emergency alert
Ported from [nhsuk/banner](https://github.com/nhsuk/banner)

## Quick start examples

### Emergency alert with heading and content

#### HTML markup

```html
<div class="nhsuk-global-alert" id="nhsuk-global-alert" role="complementary">
  <div class="nhsuk-width-container">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-full">
        <div class="nhsuk-global-alert__content">
          <div class="nhsuk-global-alert__message">
            <h2>Coronavirus (COVID-19)</h2>
            <p>
              <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/">Get the latest advice about coronavirus</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{%- from 'emergency-alert/macro.njk' import emergencyAlert %}

{{ emergencyAlert({
  "heading": "Coronavirus (COVID-19)",
  "HTML": "<p><a href=\"https://www.nhs.uk/conditions/coronavirus-covid-19/\">Get the latest advice about coronavirus</a></p>"
})}}
```

---

### Emergency alert with content ONLY

#### HTML markup

```html
<div class="nhsuk-global-alert" id="nhsuk-global-alert" role="complementary">
  <div class="nhsuk-width-container">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-full">
        <div class="nhsuk-global-alert__content">
          <div class="nhsuk-global-alert__message">
            <p>
              <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/">Get the latest advice about coronavirus</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{%- from 'emergency-alert/macro.njk' import emergencyAlert %}

{{ emergencyAlert({
  "HTML": "<p><a href=\"https://www.nhs.uk/conditions/coronavirus-covid-19/\">Get the latest advice about coronavirus</a></p>"
})}}
```

---

### Nunjucks arguments

The emergencyAlert macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **heading**                | string   | No        | Text heading of the emergency-alert component. |
| **HTML**                   | string   | Yes       | HTML content to be used within the emergency-alert component. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
