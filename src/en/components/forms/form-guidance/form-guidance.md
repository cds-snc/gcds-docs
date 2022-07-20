---
title: Form guidance - Components
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: formsguidanceEN
  title: Form guidance
  locale: en
  parent: formsEN
  order: 0
translationKey: "formsguidance"
onThisPage:
  0: Make forms less daunting
  1: Provide a clear path to completion
  2: Make the form easy to understand
  3: Give clear interaction feedback
---

<header>

# Form guidance

Forms collect information for things like file creation and records maintenance. They’re used for applications, feedback, and transactions, like purchases. And sometimes they’re used for formal requests, evaluations, or templates.

</header>

<section aria-label="Make forms less daunting">

## Make forms less daunting

Your goal is to make forms less intimidating and frustrating. Help a person achieve their goal without working too hard for it or getting stuck.

- Select form elements carefully
- Group them thoughtfully
- Communicate the information you need with words they’ll understand

<div class="comp-show">
  <form>
    <gcds-input
      label="Email address"
      input-type="email"
      input-id="email"
      size="45"
    ></gcds-input>
    <gcds-textarea
      label="Message"
      textarea-id="message"
    ></gcds-textarea>
  </form>
</div>

{% viewCode locale "daunting" "Make forms less daunting" %}

``` html
<form>
  <gcds-input
    label="Email address"
    input-type="email"
    input-id="email"
    size="45"
  ></gcds-input>

  <gcds-textarea
    label="Message"
    textarea-id="message"
  ></gcds-textarea>
</form>
```

{% endviewCode %}

</section>

<section aria-label="Provide a clear path to completion">

## Provide a clear path to completion

### Only select the form fields you need

Some questions to ask when you’re deciding which fields to include on a form:

- Who needs the data?
- What are they using it for?
- Is it essential or just nice to have?

Not a required field? Just remove it altogether. It’s probably not that important.

### Choose form elements that match your use case

Choose form components that fit the use case for your data needs. Prioritize the user experience.

Consider the mental models of someone completing your form. They might be familiar with answering questions a certain way. Try to do what would be most comfortable for them.

Tip: Does a person need to see the option to understand the question? A list of options in a checkbox or radio button list can help someone understand what to provide.

### Keep to one idea per page

Make your form elements work together so the person filling the form has a clear path to complete their task.

Group common elements together into categories and break the form up into steps. Understand the relationship and dependencies between form components.

Keep to one thing per page. One-page forms work well for a single task like a [contact us]({{ "/en/contact/" | url }}). For a longer form, allocate a page to each common category or sub-task.

</section>

<section aria-label="Make the form easy to understand">

## Make the form easy to understand

### Pick a good label

The label is the first thing that tells a person what goes in the field. Understand how person using your form will see, hear, interact with, and understand each label.

Keep your label text unique and short, to the essential minimum, using sentence case. Avoid repeating the same label text for a different field.

Tip: Reduce the number of words in your label by turning questions into titles.

### Give just-in time instructions

Use hint text to be more precise about formatting or missing info that will cause an [error message]({{ "/en/components/forms/error-message/" | url }}). Place hint text between the label and the field where a person will get the instructions at the moment they need them.

Avoid instructions the user will have to remember or record elsewhere. For example, a how-to guide outside of or at the top of the form or placeholder hint text that disappears when the user focuses on the field.

Avoid disabling interface elements, like [inputs]({{ "/en/components/forms/input/" | url }}), [text areas]({{ "/en/components/forms/textarea/" | url }}) and [buttons]({{ "/en/components/interface-elements/button/" | url }}). If you must disable, be sure the [input]({{ "/en/components/forms/input/" | url }}) or [button]({{ "/en/components/interface-elements/button/" | url }}) receives focus as soon as it's enabled and provide feedback to make it obvious.

<div class="comp-show">
  <gcds-input
    label="Full name"
    textarea-id="name"
    hint="For example: Taryn Li"
  ></gcds-input>
</div>

{% viewCode locale "instructions" "Give just-in time instructions" %}

``` html
<gcds-input
  label="Full name"
  textarea-id="name"
  hint="For example: Taryn Li"
></gcds-input>
```

{% endviewCode %}

### A note on ordering

Order fields to gradually introduce a more complex task. Order fields by easiest to most difficult to put people at ease when sharing sensitive information.

</section>

<section aria-label="Give clear interaction feedback">

## Give clear interaction feedback

### Reduce noise and distractions

Keep text, images, and distractions around the form field to a minimum. A short label, required text in the label, and hint text are all you need.

Align fields on the right. Keep [input]({{ "/en/components/forms/input/" | url }}) width and character number consistent.

### Offer feedback

Validate [inputs]({{ "/en/components/forms/input/" | url }}) in real-time. Make your field validations inline. (Display [errors]({{ "/en/components/forms/error-message/" | url }}) next to the field).

Place the label just above its corresponding form field so a person using screen magnification can find it without having to repeatedly scroll back and forth.

Match the form field name to the form label text. That way, people who use speech or voice commands can activate the right control.

Screen readers tend to only read form elements aloud such as [`<input>`]({{ "/en/components/forms/input/" | url }}), `<select>`, [`<textarea>`]({{ "/en/components/forms/textarea/" | url }}), `<label>` and `<legend>`. Include hint text with “aria-describedby”.

### Handling required fields

Place “required” at the end of the field label if information is required. Avoid red and additional symbols or punctuation, like the asterisk (*).

If left blank or incomplete, an [error message]({{ "/en/components/forms/error-message/" | url }}) will remind a person to fill a required field and give specific instructions about what they need to do.

Have a strong rationale for keeping an optional field on a form or remove it altogether.

<div class="comp-show">
  <gcds-input
    label="Input label"
    input-id="input-required"
    required
  ></gcds-input>
</div>

{% viewCode locale "required" "Handling required fields" %}

``` html
<gcds-input
  label="Input label "
  input-id="input-required"
  required
></gcds-input>
```

{% endviewCode %}

</section>
