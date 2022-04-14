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

<form name="contact" data-netlify="true" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>

# Contact us

<form name="contact" action="/en/contact/thanks" method="post">
  <input type="hidden" name="form-name" value="contact" />
  <gcds-input type="text" input-id="name" label="Full name"></gcds-input>
  <gcds-input type="email" input-id="email" label="Email address"></gcds-input>
  <gcds-textarea label="Message" textarea-id="message"></gcds-textarea>
  <gcds-button type="submit">
    Submit
  </gcds-button>
</form>
