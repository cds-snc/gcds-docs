---
title: Contact us
layout: "layouts/base.njk"
eleventyNavigation:
  key: contactusEN
  title: Contact us
  locale: en
  order: 3
translationKey: "contactus"
---

# Contact us

<form action="/en/contact/thanks" method="post" data-netlify="true">
  <gcds-input type="text" input-id="name" label="Full name"></gcds-input>
  <gcds-input type="email" input-id="email" label="Email address"></gcds-input>
  <gcds-textarea label="Message" textarea-id="message"></gcds-textarea>
  <label for="name2">
    Name 2
  </label>
  <input type="text" id="name2" name="name2" />
  <label for="email2">
    Email 2
  </label>
  <input type="email" id="email2" name="email2" />
  <gcds-button type="submit">
    Submit
  </gcds-button>
</form>
