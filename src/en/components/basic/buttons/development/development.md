---
title: Implementing a Button for Development
layout: "layouts/base.njk"
translationKey: "buttonDev"
---

# Implementing a Button for Development

The various states and functionality of the gcds-button component

## Button properties

``` html
<gcds-button
  type="button | submit | reset | link"
  task="primary | secondary | danger | skip-to-content"
  variant="solid | outline | text-only"
  state="default | hover | focus | active | disabled"
  lang="en | fr"
>
  Button Label
</gcds-button>
```

### Type property

<gcds-button
  type="button"
>
  This button has type: button
</gcds-button>

<gcds-button
  type="submit"
>
  This button has type: submit
</gcds-button>

<gcds-button
  type="reset"
>
  This button has type: reset
</gcds-button>

<gcds-button
  type="link"
  href
>
  This button has type: link
</gcds-button>

``` html
<gcds-button
  type="button"
>
  This button has type: button
</gcds-button>

<gcds-button
  type="submit"
>
  This button has type: submit
</gcds-button>

<gcds-button
  type="reset"
>
  This button has type: reset
</gcds-button>

<gcds-button
  type="link"
  href
>
  This button has type: link
</gcds-button>
```

### Task property

<gcds-button
  task="primary"
>
  This button has task: primary
</gcds-button>

<gcds-button
  task="secondary"
>
  This button has task: secondary
</gcds-button>

<gcds-button
  task="danger"
>
  This button has task: danger
</gcds-button>

<gcds-button
  type="link"
  task="skip-to-content"
  href="#main"
  >
  Skip to main content
</gcds-button>

``` html
<gcds-button
  task="primary"
>
  This button has task: primary
</gcds-button>

<gcds-button
  task="secondary"
>
  This button has task: secondary
</gcds-button>

<gcds-button
  task="danger"
>
  This button has task: danger
</gcds-button>

<gcds-button
  type="link"
  task="skip-to-content"
  href="#main"
  >
  Skip to main content
</gcds-button>
```

### State property

<gcds-button
  state="default"
>
  This button has state: default
</gcds-button>

<gcds-button
  state="disabled"
>
  This button has state: disabled
</gcds-button>


```html
<gcds-button
  state="default"
>
  This button has state: default
</gcds-button>

<gcds-button
  state="disabled"
>
  This button has state: disabled
</gcds-button>
```