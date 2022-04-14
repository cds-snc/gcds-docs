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
  <gcds-input type="text" input-id="name" label="Full name" required></gcds-input>
  <gcds-input type="email" input-id="email" label="Email address" required></gcds-input>
  <gcds-textarea label="Message" textarea-id="message" required></gcds-textarea>
  <gcds-button button-type="submit">
    Submit
  </gcds-button>
</form>
