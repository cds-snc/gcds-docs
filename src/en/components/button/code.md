---
title: Button
layout: "layouts/component-documentation.njk"
translationKey: "buttonCode"
tags: ['buttonEN', 'code']
date: "git Last Modified"
---

## Build a button

Use a button for important actions a person using a product can initiate.

## Coding and accessibility for buttons

### Make your buttons accessible

- Check the button border's visibility against the surface where you're placing it.
- Make the button's action obvious with a short, specific label in a call to action format, like "Start application" or "Save a copy".
- Avoid re-using label text on the same page or using labels that sound a lot alike. A person browsing buttons with assistive technology will hear the label text repeated in rapid succession without cues to tell which button's for which action.

### Add a skip-to-content button

- A skip-to-content button lets a person skip a cluster of navigation links and jump to the main content.
- To avoid covering up content, configure the button to push down content so it's not floating.
- For desktop, place skip-to-content button at top left of the page so it doesn't interrupt the flow.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-button properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-button--default"
  width="1200"
  height="1920"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>