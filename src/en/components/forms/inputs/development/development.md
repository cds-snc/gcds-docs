---
title: Implementing an Input for Development
layout: "layouts/base.njk"
eleventyNavigation:
  key: inputDev
  title: Implementing an Input for Development
  locale: en
  parent: inputs
translationKey: "inputDev"
---

# Implementing an Input for Development

The various states and functionality of the gcds-input component

## Input properties


``` html
<gcds-input
  type="email | number | password | search | text | url"
  disabled="true | false"
  error-message="string"
  hide-label="true | false"
  hint="string"
  id="string"
  label="string"
  lang="en | fr"
  required="true | false"
  value="string"
/>
```

### Type property

<gcds-input
  label="Type: Email"
  type="email"
  id="input-email"
></gcds-input>

<gcds-input
  label="Type: Number"
  type="number"
  id="input-number"
></gcds-input>

<gcds-input
  label="Type: Password"
  type="password"
  id="input-password"
></gcds-input>

<gcds-input
  label="Type: Search"
  type="search"
  id="input-search"
></gcds-input>

<gcds-input
  label="Type: Text"
  type="text"
  id="input-text"
></gcds-input>

<gcds-input
  label="Type: URL"
  type="url"
  id="input-url"
></gcds-input>

``` html
<gcds-input
  label="Label"
  type="email"
  id="input-email"
/>

<gcds-input
  label="Label"
  type="number"
  id="input-number"
/>

<gcds-input
  label="Label"
  type="password"
  id="input-password"
/>

<gcds-input
  label="Label"
  type="search"
  id="input-search"
/>

<gcds-input
  label="Label"
  type="text"
  id="input-text"
/>

<gcds-input
  label="Label"
  type="url"
  id="input-url"
/>
```

### Input ID property

<gcds-input
  label="Label"
  id="input-id"
></gcds-input>

``` html
<gcds-input
  label="Label"
  id="input-id"
/>
```

### Label property

<gcds-input
  label="Label"
  id="input-label"
></gcds-input>

``` html
<gcds-input
  label="Label"
  id="input-label"
/>
```

### Disabled property (optional)

<gcds-input
  label="Label"
  id="input-disabled"
  disabled
></gcds-input>

``` html
<gcds-input
  label="Label"
  id="input-disabled"
  disabled
/>
```

### Error Message property (optional)

<gcds-input
  label="Label"
  id="input-error-message"
  error-message="Error message"
></gcds-input>

``` html
<gcds-input
  label="Label"
  id="input-error-message"
  error-message="Error message"
/>
```

### Hide Label property (optional)

<div style="display: flex">
  <gcds-input
    label="Label"
    id="input-hide-label"
    hide-label
  ></gcds-input>
  <gcds-button style="margin: 2px 0 2px 10px">Search</gcds-button>
</div>

``` html
<gcds-input
  label="Label"
  id="input-hide-label"
  hide-label
/>
```

### Input Hint property (optional)

<gcds-input
  label="Label"
  id="input-hint"
  hint="Hint text"
></gcds-input>

``` html
<gcds-input
  label="Label"
  id="input-hint"
  hint="Hint text"
/>
```

### Required property (optional)

<gcds-input
  label="Label"
  id="input-required"
  required
></gcds-input>

``` html
<gcds-input
  label="Label"
  id="input-required"
  required
/>
```

### Input Value property (optional)

<gcds-input
  label="Label"
  id="input-value"
  value="Value"
></gcds-input>

``` html
<gcds-input
  label="Label"
  id="input-value"
  value="Value"
/>
```
