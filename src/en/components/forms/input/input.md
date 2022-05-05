---
title: Input - Components
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: inputsEN
  title: Input
  locale: en
  parent: formsEN
  order: 1
translationKey: "inputs"
onThisPage:
  0: The basic input component
  1: How to modify the input component
  2: What problems inputs solve
  3: Related components
  4: Size and placement of inputs
  5: How to write a good input label
  6: When to use hint text and error messages
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-input
---

<header>

# Input

`<gcds-input>`

An input is a space, usually a form field, for a person to enter short-form information in response to a question or instruction.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

<section aria-label="The basic input component">

## The basic input component

Use an input to collect single-line information from a person. 

Inputs have built in states that change when someone interacts with that field: hover, focus, active, disabled. 

### Text input

<div class="comp-show">
  <gcds-input
    type="text"
    input-id="postalcode"
    label="Postal code"
    hint="6 character limit"
    size="6"
  ></gcds-input>
  <gcds-input
    type="text"
    input-id="firstname"
    label="First name"
    hint="50 character limit"
    size="50"
  ></gcds-input>
</div>

Use for short, single-line, text response collection.

Use when no other specfic input type is available for single-line entry.

Use to collect a person’s name, in most cases by full name.  

Use instead of the number input for things like estimates that may include non-numerical values.

{% viewCode locale "view-text" "Text input" %}

``` html
<gcds-input
  type="text"
  input-id="postalcode"
  label="Postal code"
  hint="6 character limit"
  size="6"
></gcds-input>

<gcds-input
  type="text"
  input-id="firstname"
  label="First name"
  hint="50 character limit"
  size="50"
></gcds-input>
```

{% endviewCode %}

### Email input

<div class="comp-show">
  <gcds-input
    type="email"
    input-id="email"
    label="Email address"
    hint="Example: hello@email.com"
    size="50"
  ></gcds-input>
</div>

Use for email address collection.

{% viewCode locale "view-email" "Email input" %}

``` html
<gcds-input
  type="email"
  input-id=""
  label="Email address"
  hint="Example: hello@email.com"
  size="50"
></gcds-input>
```

{% endviewCode %}

### Password input

<div class="comp-show">
  <gcds-input
    type="password"
    input-id="password"
    label="Password"
    size="50"
  ></gcds-input>
</div>

Use for password collection and validation.

{% viewCode locale "view-password" "Password input" %}

``` html
<gcds-input
  type="password"
  input-id="password"
  label="Password"
  size="50"
></gcds-input>
```

{% endviewCode %}

### Number input

<div class="comp-show">
  <gcds-input
    type="number"
    input-id="number"
    label="Phone number"
    hint="10 character limit"
    size="10"
  ></gcds-input>
</div>

Use to reject values that are not numerical.

Tip: When you set a constraint, like a numerical range, use hint text to relay an instruction.

{% viewCode locale "view-number" "Number input" %}

``` html
<gcds-input
  type="number"
  input-id="number"
  label="Phone number"
  hint="10 character limit"
  size="10"
></gcds-input>
```

{% endviewCode %}

### Search input

<div class="comp-show">
  <gcds-input
    type="search"
    input-id="search"
    label="Search input"
  ></gcds-input>
</div>

Use to collect search queries.

{% viewCode locale "view-search" "Search input" %}

``` html
<gcds-input
  type="search"
  input-id="search"
  label="Search input"
></gcds-input>
```

{% endviewCode %}

### URL input

<div class="comp-show">
  <gcds-input
    type="url"
    input-id="url"
    label="URL input"
    hint="Example: https://design.alpha.canada.ca/en"
  ></gcds-input>
</div>

Use to collect a URL, like a web address.

{% viewCode locale "view-url" "URL input" %}

``` html
<gcds-input
  type="url"
  input-id="url"
  label="URL input"
  hint="Example: https://design.alpha.canada.ca/en"
></gcds-input>
```

{% endviewCode %}

</section>

<section aria-label="How to modify the input component">

## How to modify the input component

Occasionally, the default options may not meet the needs of the people using your product. You can modify the input component to create a custom input for a particular use case.

### Input component type

Set the input type based on how the input will validate the values a person enters.

The input-type attribute accepts the following options:

- `text`
- `email`
- `password`
- `number`
- `search`
- `url`

### Apply design system foundations to inputs

Select typography tokens from the GC Design System [foundations]({{ "/en/foundations" | url }}). Colour and spacing tokens coming soon!

</section>

<section aria-label="What problems inputs solve">

## What problems inputs solve

Use an input field to gather information by:

- capturing a freeform response to a single-line question
- collecting a person’s full name for reference in the product or personalized communications
- collecting a date when it is known to the person completing the field
- collecting a numeric-only response
- collecting an email address or URL

</section>

<section aria-label="Related components">

## Related components

**Radio buttons or dropdowns** when you can give someone a set of options for single selections.

**Checkboxes** when you can give someone a set of options for multi selections.

**Buttons** when you’re asking consent or agreement or offering a binary choice.

**Date selectors** when you want someone to choose a date, like for appointment scheduling.

</section>

<section aria-label="Size and placement of inputs">

## Size and placement of inputs

### Input width

Use fixed width inputs for content you know has a specific length. For example, 6 characters for a postal code has 6 characters or 10 characters for a telephone number. An easy way to set this is by using the `size` attribute of the input (`size="50"` would be 50 characters).

If you don’t know the character count of the response, set the input to span almost the entire container, like at 90%.

Use the maximum, 75 characters for responses without a fixed length.

### Visibility of input

Check the visibility of both the label text and entry field line or border against the surface where you’re placing them.

Use built in or custom hover state to ensure good colour contrast.  

Avoid placing hint text or error messages below the field where they might be hidden.

</section>

<section aria-label="How to write a good input label">

## How to write a good input label

Group input fields by related category so it’s easier for a person to understand what information you’re asking them for.

Write labels as short and specific requests for information. Phrasing as a question can make a label unnecessarily long. Use descriptive text for any icons or images.

Avoid repeating input label text within the same page. A person browsing fields will hear the label text in rapid succession without cues to tell which label is for which context.

Avoid using technical jargon, like “subject email address” or “account ID”. Instead be specific and personal, “full name”, “child’s age”.

Avoid using colloquialisms and common verb phrases that are unfamiliar to non-fluent speakers. Explain a term that may not be clear: “handle (name you’d like to go by)”.

When creating inputs, only ask for the information you need. Using a question protocol can help you choose what you need to ask for on a form.

</section>

<section aria-label="When to use hint text and error messages">

## When to use hint text and error messages

### Handling hint text

Add hint text to help a person filling in a field to provide a complete value.

Write hint text to be instructional, brief and specific.

Make sure your hint text is static, so it does not disappear.

### Error messages for all required fields

Use error messages to address missing and invalid entries for all required fields.

Tell the person what the problem is so they can accomplish their goals. Avoid blaming the person using the product. Let them know what they need to do to move forward.

Consider affirmations like confirming valid entries instead when you can validate a correct input field entry instead of flagging an error.

</section>
