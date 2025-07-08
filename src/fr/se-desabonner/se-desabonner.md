---
title: Se désabonner
layout: 'layouts/base.njk'
eleventyExcludeFromCollections: true
date: 'git Last Modified'
---

# Se désabonner

Unsubscribe from the GC Design System mailing list to stop receiving all English and French emails. 

It may take up to 48 hours to take effect.

<form class="my-600 unsubscribe-form" name="unsubscribeFR" method="post" action="/api/submission">
  <input type="hidden" name="form-name" value="unsubscribeFR" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>
  <input type="hidden" name="unsubscribe" value="true" />

  <gcds-input type="email" name="email" input-id="email" label="Adresse courriel" hint="Enter the adresse courriel you want to remove from the mailing list." autocomplete="email" required></gcds-input>

  <gcds-button button-role="primary" type="submit">
    Se désabonner
  </gcds-button>
</form>