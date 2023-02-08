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

Renseignez-vous sur un composant du système auprès de l’équipe du système de design du GC ou informez-les d’un nouveau composant que vous aimeriez utiliser.

Remplissez les champs suivants ou ouvrez une issue sur GitHub dans le dépôt destiné aux [unités de style]({{ "https://github.com/cds-snc/gcds-tokens" | url}}), aux [composants]({{ "https://github.com/cds-snc/gcds-components" | url}}) ou à la [documentation]({{ "https://github.com/cds-snc/gcds-docs" | url}}).

<form class="my-500 contact-us-form" name="contactFR" method="post">
  <input type="hidden" name="form-name" value="contactFR" />
  <gcds-input type="text" input-id="name" label="Nom complet" required></gcds-input>
  <gcds-input type="email" input-id="email" label="Adresse courriel" required></gcds-input>
  <gcds-textarea label="Message" textarea-id="message" required></gcds-textarea>
  <div hidden>
    <gcds-input type="text" input-id="bot-field" label="bot"></gcds-input>
  </div>
  <gcds-button button-role="primary" button-type="submit">
    Envoyer le message
  </gcds-button>
</form>
