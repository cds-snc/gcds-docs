---
title: Se désabonner
layout: 'layouts/base.njk'
eleventyExcludeFromCollections: true
date: 'git Last Modified'
---

Désabonnez-vous de la liste de diffusion de GC Design System pour ne plus recevoir de courriels en anglais et en français.

Cela peut prendre jusqu'à 48 heures.

<form class="my-600 unsubscribe-form" name="unsubscribeFR" method="post" action="/api/submission">
  <input type="hidden" name="form-name" value="unsubscribeFR" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>
  <input type="hidden" name="unsubscribe" value="true" />

  <gcds-input type="email" name="email" input-id="email" label="Adresse courriel" hint="Saisissez l'adresse courriel que vous souhaitez supprimer de la liste de diffusion." autocomplete="email" required></gcds-input>

  <gcds-button button-role="primary" type="submit">
    Se désabonner
  </gcds-button>
</form>