# Filter
Custom component with groups of values to filter results by

## Nunjucks macro

```
{%- from 'filter/macro.njk' import filter %}

{{ filter({
  groups: [
    {
      title: "Category",
      items: [
        {
          text: "Item one"
        },
        {
          text: "Item two"
        }
      ]
    },
    {
      title: "Organisation",
      items: [
        {
          text: "Item one"
        },
        {
          text: "Item two"
        },
        {
          text: "Item three"
        }
      ]
    }
  ]
}) }}
```

---

### Nunjucks arguments

The filter macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **groups**                 | array    | Yes       | An array of filter types, containing title and items properties as exampled above |