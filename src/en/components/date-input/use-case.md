---
title: Date input
layout: "layouts/component-documentation.njk"
eleventyNavigation:
  key: dateinputEN
  title: Date input
  locale: en
  parent: componentsEN
  otherNames: dates, dateinput, date, memorable date.
  description: A date input is a space to enter a known date.
  thumbnail: /images/en/components/preview/preview-date-input.svg
  alt: Thick grey lines at the top represent the legend and hint text. A white box with a thin grey border and a grey line and grey arrow inside of it represents the select input for the month. Beside this are two smaller white boxes with thin grey outlines representing the text inputs for the day and year.
  state: published
translationKey: "dateinput"
tags: ['dateinputEN', 'usage']
permalink: /en/components/date-input/
date: "git Last Modified"
---

## Problems date inputs solves

Take a look at what date inputs do to see if they fit the problem you're solving for. Then select the best date input type for the use case you need to meet.

Use a date input to gather a date from a person when you're expecting them to write:
- A date they already know, like their date of birth.
- A date they can easily find, like a health card expiry date.
- A specific date, like the date they moved to a new home.
- A date that doesn’t include the specific day of the week.
- Avoid using a date input for the selection of an unknown date. Use a date picker instead.

<hr/>

## Related components

  <a href="{{ links.input }}">Input</a> when you want someone to input only a year or only a day of the month.

  <a href="{{ links.select }}">Select</a> when you want someone to input only a month.

  Date picker when you want someone to choose a not-yet-known date, like for appointment scheduling.

<hr class="mt-600"/>

## Component types

### Day, month, year format
- For a specific date the person will know or can easily find.

### Month, year format
- For a date that does not have a day, like a driver’s licence expiry date.
- For an approximate date, like the date they lost their ID card  (month and year).
- For a date the person may not know the exact day of.
