---
title: Contactez-nous
layout: "layouts/base.njk"
eleventyNavigation:
  key: contactusFR
  title: Nous joindre
  locale: fr
  order: 3
translationKey: "contactus"
contactForm: fr
---

# Contactez-nous

<form name="contactFR" method="post">
  <input type="hidden" name="form-name" value="contactFR" />
  <gcds-input type="text" input-id="name" label="Nom complet"></gcds-input>
  <gcds-input type="email" input-id="email" label="Adresse courriel"></gcds-input>
  <gcds-textarea label="Message" textarea-id="message"></gcds-textarea>
  <gcds-button button-type="submit">
    Envoyer
  </gcds-button>
</form>
