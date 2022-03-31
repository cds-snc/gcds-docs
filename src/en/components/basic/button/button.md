---
title: Button
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: buttonEN
  title: Button
  locale: en
  parent: basicEN
  order: 1
translationKey: "button"
onThisPage:
  0: Use the basic button component
  1: Customize a button
  2: Other button use cases
  3: Related components 
  4: Where to place a button
  5: How to write a good button label
  6: How to add an icon to your button


---

# Button

A button is an interactive object that highlights an important or common action for the person using your product.

## Use the basic button component

Use buttons for user-led actions like agreement or disagreement, change of location or state, and other directives about information.

Buttons have built in states that change when someone interacts with that button: default, hover, focus, active, disabled.

### Primary button

<gcds-button
  button-role="primary"
>
  Primary
</gcds-button>

Use a primary button for the most important action.

Use it for critical actions in a flow or as the default button.

Avoid more than one main call to action on the same page. It reduces impact and makes it harder for a person to know what to do next.

``` html
<gcds-button
  button-role="primary"
>
  Primary
</gcds-button>
```

### Secondary button

<gcds-button
  button-role="secondary"
>
  Secondary
</gcds-button>

Use a secondary button for supporting actions.

Use it to highlight an important, common action but not the most important one.

Use a secondary button more than once on a page for important alternative task options.

``` html
<gcds-button
  button-role="secondary"
>
  Secondary
</gcds-button>
```

### Destructive button

<gcds-button
  button-role="destructive"
>
  Destructive
</gcds-button>

Use a destructive button to flag serious actions like removing, clearing, or deleting information.

Use it for actions when changes may be difficult to reverse.  

Tip: For permanent actions, ask a second time so a person explicitly agrees before accepting. (Cognitive)  

``` html
<gcds-button
  button-role="destructive"
>
  Destructive
</gcds-button>
```

### Skip-to-content button

<gcds-button
  button-role="skip-to-content"
>
  Skip-to-content
</gcds-button>

Use a skip-to-content button (visible or hidden) to help a person jump to the main page content.

Use it to support task success. It offers a shortcut past page navigation links or other navigation elements.

Use it to help a person avoid tabbing or scrolling uneccesarily.

``` html
<gcds-button
  button-role="skip-to-content"
>
  Skip-to-content
</gcds-button>
```

## Customize a button

You can change the look and feel of the default settings to create a custom button.

### Button component type

Use type to set how the button will act, like a link (anchor or move to another page) or a button (activate a script or submit a form).

Type accepts the following options:
- button: For activating scripts
- submit: For submitting forms
- reset: For resetting interfaces
- link: For acting like a traditional link

### Colour

Select the colour from the colour foundations.

### Display

Set how the button is displayed

### Style

Set the visual style of the button.

## Other button use cases

Use a button for important actions like:

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

**Links** when an action is less important.  

**Radio buttons** or dropdowns when you can give someone a set of options for single selections. 

**Checkboxes** when you can give someone a set of options for multi selections. 

## Where to place a button

Place buttons in a regular and predictable way to help a person find the thing they want to do and take action. (Cognitive)

Avoid making a person needlessly scroll, tab, or type by providing the path to the next action early. (Physical)

Check the button border’s visibility against the surface where you’re placing it. (Visual)

### Adding skip-to-content buttons

Let a person skip a cluster of navigation links with the skip-to-content button. (Physical)

To avoid covering up content, configure the button to push down content so it’s not floating, For desktop, place skip-to-content button at top left of the page so it doesn’t interrupt the flow.

## How to write a good button label

### Make buttons readable

Keep label text visible by stating the button’s specific action in minimal words. (Visual)

Use sentence case. (Cognitive)

### Avoid confusing labels

Keep label text unique to a page. When you re-use labels, a person browsing buttons will hear the label text in rapid succession and won’t have cues to tell which button’s for which action. (Auditory)

Avoid closely resembling language constructions across buttons, like sign up and sign in. Labels that are vague or closely resemble other labels make it difficult for someone to acccomplish their task. (Cognitive)

Avoid using common verb phrases or expressions that may be unfamiliar to non-fluent speakers, like get: in touch, . (Cognitive)

## How to add an icon to your button

Icons can be a helpful visual aid when used sparingly and predictably.

Avoid using an icon without text. (Cognitive and Auditory)

When there’s an icon, align button text to the left. (Visual)
