---
title: Button
layout: "layouts/component-documentation.njk"
translationKey: "buttonDesign"
tags: ['buttonEN', 'design']
date: "git Last Modified"
---

## Button anatomy

**The label** states the action that will follow when the user interacts with the button. Label text is left aligned, with any icon at the left-most point. Text is in sentence case (initial letter-only capitalized).

**The icon** is optional and can be a helpful visual aid when used sparingly and predictably. When there's an icon, align button text to the left.  Avoid using an icon without text.

**The container** can be omitted for styling a button as a link.

<img class="b-sm b-gray p-400" src="/images/en/anatomy/gcds-button-anatomy.svg" alt=""/>

## Accessibility and design for buttons

### Make the button findable

- Place buttons in a regular and predictable way.
- Avoid making a person needlessly scroll, tab, or type by providing the path to the next action early.
- Check the button border's visibility against the surface where you're placing it.

### Make the button readable

- Keep label text visible by stating the button's specific action in minimal words, using sentence case.
- Make the button's action obvious with a short, specific label in a call to action format, like "Start application" or "Save a copy".
- Avoid re-using label text on the same page or using labels that sound a lot alike. A person browsing buttons using assistive technology will hear the label text repeated in rapid succession without cues to tell which button's for which action.
- Stay away from verb phrases or expressions that may be unfamiliar to non-fluent speakers.

Tip: Language constructions like "sign up" and "sign in" can be confusing because the "up" and "in" add little meaning and alongside each other they can be hard to tell apart.

### Write specific link text for the link type

- Make link text clear, specific to help a person predict where the link will take them and what they'll find. Make it obvious where the link will lead, so a person can decide if they should leave the current page.
- Keep link text short and distinctive so a person is able to scan the links on your page. Generally limit text to 60 characters and avoid going over 80 characters.
- Avoid generic or vague link text, like "click here" or "read more" or "home".
- Limit the number of links in your text. Too much information increases cognitive load and can be overwhelming to some readers.

### Add a skip-to-content button

- A skip-to-content button lets a person skip a cluster of navigation links and jump to the main content.
- To avoid covering up content, configure the button to push down content so it's not floating.
- For desktop, place the skip-to-content button at top left of the page so it doesn't interrupt the flow.
