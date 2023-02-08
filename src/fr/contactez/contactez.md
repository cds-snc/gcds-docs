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

<h1 class="mb-400 contact-us-heading">Contactez-nous</h1>

<p class="mb-400">Renseignez-vous sur un composant du système auprès de l’équipe du système de design du GC ou informez-les d’un nouveau composant que vous aimeriez utiliser.</p>

<p class="mb-400">Remplissez les champs suivants ou ouvrez une issue sur GitHub dans le dépôt destiné aux <a href="https://github.com/cds-snc/gcds-tokens" target="_blank">unités de style</a>, aux <a href="https://github.com/cds-snc/gcds-components" target="_blank">composants</a> ou à la <A href="https://github.com/cds-snc/gcds-docs" target="_blank">documentation</a>.</p>

<form class="mb-500 contact-us-form" name="contactFR" method="post">
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
