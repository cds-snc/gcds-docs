---
title: Unsubscribe
layout: 'layouts/base.njk'
translationKey: 'unsubscribe'
eleventyExcludeFromCollections: true
date: 'git Last Modified'
---

# Unsubscribe

Unsubscribe from the GC Design System mailing list to stop receiving all English and French emails. 

It may take up to 48 hours to take effect.

<form class="my-600 unsubscribe-form" name="unsubscribeEN" method="post" action="/api/submission">
  <input type="hidden" name="form-name" value="unsubscribeEN" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>
  <input type="hidden" name="unsubscribe" value="true" />

  <gcds-input type="email" name="email" input-id="email" label="Email address" hint="Enter the email address you want to remove from the mailing list." autocomplete="email" required></gcds-input>

  <gcds-button button-role="primary" type="submit">
    Unsubscribe
  </gcds-button>
</form>