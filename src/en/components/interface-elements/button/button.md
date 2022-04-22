---
title: Button - Components
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: buttonsEN
  title: Button
  locale: en
  parent: basicEN
translationKey: "button"
onThisPage:
  0: The basic button component
  1: How to modify the button component
  2: What problems buttons solve
  3: Related components 
  4: Where to place a button
  5: How to write a good button label
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-button
---

<header>

# Button

`<gcds-button>`

A button is an interactive object that highlights an important or common action for the person using your product.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

## The basic button component

Use buttons for user-led actions.

Buttons have built in states that change when someone interacts with that button: default, hover, focus, active, disabled.

### Primary button

<gcds-button
  button-role="primary"
  button-type="button"
>
  Primary
</gcds-button>

Use a primary button for the most important action.

Use it for critical actions in a flow or as the default button.

Avoid more than one main call to action on the same page. It reduces impact and makes it harder for a person to know what to do next.

{% viewCode locale "primary" "Primary" %}

``` html
<gcds-button
  button-role="primary"
  button-type="button"
>
  Primary
</gcds-button>
```

{% endviewCode %}

### Secondary button

<gcds-button
  button-role="secondary"
  button-type="button"
>
  Secondary
</gcds-button>

Use a secondary button for supporting actions.

Use it to highlight an important, common action but not the most important one.

Use a secondary button more than once on a page for important alternative task options.

{% viewCode locale "secondary" "Secondary" %}

``` html
<gcds-button
  button-role="secondary"
  button-type="button"
>
  Secondary
</gcds-button>
```

{% endviewCode %}

### Destructive button

<gcds-button
  button-role="destructive"
  button-type="button"
>
  Destructive
</gcds-button>

Use a destructive button to flag serious actions like removing, clearing, or deleting information.

Use it for actions when changes may be difficult to reverse.  

Tip: For permanent actions, ask a second time so a person explicitly agrees before accepting.

{% viewCode locale "destructive" "Destructive" %}

``` html
<gcds-button
  button-role="destructive"
  button-type="button"
>
  Destructive
</gcds-button>
```

{% endviewCode %}

### Skip-to-content button

<gcds-button
  button-role="skip-to-content"
  button-type="button"
>
  Skip-to-content
</gcds-button>

Use a skip-to-content button (visible or hidden) to help a person jump to the main page content.

Use it to support task success. It offers a shortcut past page navigation links or other navigation elements.

Use it to help a person avoid tabbing or scrolling uneccesarily.

{% viewCode locale "skip-to-content" "Skip-to-content" %}

``` html
<gcds-button
  button-role="skip-to-content"
  button-type="button"
>
  Skip-to-content
</gcds-button>
```

{% endviewCode %}

## How to modify the button component

Occasionally, the default options may not meet the needs of the people using your product. You can modify the button component to create a custom button for a particular use case.

### Button component type, style, and role

#### Button type

Set the button type based on how the button will act.

The button-type attribute, accepts the following options:
- `button`
- `submit`
- `reset`
- `link`

#### Button role

The buttonRole property, button-role attribute, accepts the following options:
- `destructive`
- `primary`
- `secondary`
- `skip-to-content`

#### Button style

The buttonStyle property, button-style attribute, accepts the following options:
- `outline`
- `solid`
- `text-only`

### How to add an icon to your button

Icons can be a helpful visual aid when used sparingly and predictably. Avoid using an icon without text. When there’s an icon, align button text to the left.

### Apply design system foundations to buttons

Select typography tokens from the GC Design System [foundations]({{ "/en/foundations" | url }}). Colour and spacing tokens coming soon!

## What problems buttons solve

Use a button for important user-led actions like:

- saving, deleting, copying, or downloading
- clearing entered data
- sending a form or request
- giving consent or agreement
- making a binary choice
- entering or exiting a secure area login, a form, or tutorial
- skip-to-content link

In apps, buttons replace text links for things like:

- controlling movement, like going from one screen to another in a flow
- external links (in a way that lets someone know they’re external)

## Related components

**Radio buttons or dropdowns** when you can give someone a set of options for single selections.

**Checkboxes** when you can give someone a set of options for multi selections.

## Where to place a button

Place buttons in a regular and predictable way to help a person find the thing they want to do and take action.

Avoid making a person needlessly scroll, tab, or type by providing the path to the next action early.

Check the button border’s visibility against the surface where you’re placing it.

### Adding skip-to-content buttons

Let a person skip a cluster of navigation links with the skip-to-content button.

To avoid covering up content, configure the button to push down content so it’s not floating, For desktop, place skip-to-content button at top left of the page so it doesn’t interrupt the flow.

## How to write a good button label

### Make buttons readable

Keep label text visible by stating the button’s specific action in minimal words.

Use sentence case.

### Avoid confusing labels

Keep label text unique to each button on a page. When you re-use labels, a person browsing buttons will hear the label text in rapid succession and won’t have cues to tell which button’s for which action.

Avoid closely resembling language constructions across buttons, like sign up and sign in. Labels that are vague or closely resemble other labels make it difficult for someone to accomplish their task.

Avoid using common verb phrases or expressions that may be unfamiliar to non-fluent speakers.
