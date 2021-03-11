# Filter Tag
Custom component to display a filter tag.
Clicking the filter tag removes the selected filter from the list of currently active filters.

## Nunjucks macro

```
{%- from 'filterTag/macro.njk' import filterTag %}

{{ filterTag({
  text: 'Text to appear on the tag',
  value: 'value-of-associated-filter'
}) }}
```

---

### Nunjucks arguments

The filter macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **text**                   | string   | Yes       | Text to appear on the tag |
| **value**                  | string   | Yes       | Value of the associated filter, use for the look-up for deselecting of the filter |