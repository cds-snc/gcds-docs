---
title: Contact us
layout: "layouts/base.njk"
eleventyNavigation:
  key: contactusEN
  title: Contact us
  locale: en
  order: 3
translationKey: "contactus"
contactForm: en
---

# Contact us

Ask the GC Design System team about a component in the design system or request a component you'd like to see.

Fill out the following form or submit an issue through GitHub for [tokens]({{ "https://github.com/cds-snc/gcds-tokens" | url}}), [components]({{ "https://github.com/cds-snc/gcds-components" | url}}), or [documentation]({{ "https://github.com/cds-snc/gcds-docs" | url}}).

<form class="mb-500 contact-us-form" name="contactEN" method="post">
  <input type="hidden" name="form-name" value="contactEN" />
  <gcds-input type="text" input-id="name" label="Full name" required></gcds-input>
  <gcds-input type="email" input-id="email" label="Email address" required></gcds-input>
  <gcds-textarea label="Message" textarea-id="message" required></gcds-textarea>
  <div hidden>
    <gcds-input type="text" input-id="bot-field" label="bot"></gcds-input>
  </div>
  <gcds-button button-role="primary" button-type="submit">
    Send message
  </gcds-button>
</form>
