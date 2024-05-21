---
title: Contactez-nous
layout: 'layouts/base.njk'
eleventyNavigation:
  key: contactusFR
  title: Contactez-nous
  locale: fr
  order: 3
translationKey: 'contactus'
contactForm: fr
date: 'git Last Modified'
---

# Contactez-nous

Système de design GC est en cours d'élaboration par le Service numérique canadien. En cette phase d'essai, les fonctionnaires y ont accès et peuvent l'utiliser.

Consultez notre page <gcds-link href="{{ links.about }}">À propos</gcds-link> pour en savoir plus.

## Collaborez avec nous

Nous nous engageons à construire avec les personnes qui utilisent nos produits. Nous améliorons notre produit en fonction de vos besoins et de ceux des personnes que vous servez.

<hr class="my-500" />

## Faites-nous part de vos commentaires pour nous aider à améliorer Système de design GC

Nous sommes à l'écoute. Contactez-nous pour demander une démonstration, poser une question ou nous rencontrer.

<form class="my-500 contact-us-form" name="contactFR" method="post" style="min-height: 32rem;" action="/api/submission">
  <input type="hidden" name="form-name" value="contactFR" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

<gcds-input type="text" name="name" input-id="name" label="Nom complet" size="30" autocomplete="name" required></gcds-input>
<gcds-input type="email" name="email" input-id="email" label="Adresse courriel" size="50" autocomplete="email" required></gcds-input>
<gcds-textarea name="message" label="Commentaires ou questions" textarea-id="message"></gcds-textarea>

  <gcds-fieldset fieldset-id="learnMore" legend="Apprenez-en plus sur Système de design GC" hint="Choisissez autant d'options que vous le souhaitez.">
    <gcds-checkbox checkbox-id="learnMoreMailingList" label="Ajoutez-moi à votre liste d'envoi." value="Ajoutez-moi à votre liste d'envoi." name="learnMore"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreDemo" label="Contactez-moi pour une démo." value="Contactez-moi pour une démo." name="learnMore"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreResearch" label="Contactez-moi pour les études sur l'utilisabilité." value="Contactez-moi pour les études sur l'utilisabilité." name="learnMore"></gcds-checkbox>
  </gcds-fieldset>

  <gcds-fieldset fieldset-id="familiarityGCDS" legend="Connaissance du produit" hint="Sélectionnez 1 option." required>
    <gcds-radio-group name="familiarityGCDS" options='{{ contactus[locale].options | stringify }}'>
    </gcds-radio-group>
  </gcds-fieldset>

  <div hidden>
    <gcds-input type="text" name="bot-field" input-id="bot-field" label="bot"></gcds-input>
  </div>

  <gcds-button button-role="primary" type="submit">
    Envoyer
  </gcds-button>
</form>
