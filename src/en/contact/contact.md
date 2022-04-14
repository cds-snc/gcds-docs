---
title: Get in contact
layout: "layouts/base.njk"
eleventyNavigation:
  key: contactusEN
  title: Contact us
  locale: en
  order: 3
translationKey: "contactus"
contactForm: en
---

# Get in contact

Ask the GC Design System team about a component in the design system or request a component you'd like to see.

Fill out the following form or submit an issue through GitHub for [tokens]({{ "https://github.com/cds-snc/gcds-tokens" | url}}), [components]({{ "https://github.com/cds-snc/gcds-components" | url}}), or [documentation]({{ "https://github.com/cds-snc/gcds-docs" | url}}).

<form name="contact" method="post">
  <input type="hidden" name="form-name" value="contact" />
  <gcds-input type="text" input-id="name" label="Full name"></gcds-input>
  <gcds-input type="email" input-id="email" label="Email address"></gcds-input>
  <gcds-textarea label="Message" textarea-id="message"></gcds-textarea>
  <gcds-button button-type="submit">
    Send message
  </gcds-button>
</form>
