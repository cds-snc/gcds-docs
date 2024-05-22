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

Système de design GC est en cours de développement par le Service numérique canadien. En cette phase d'essai, les fonctionnaires peuvent utiliser le système de design et obtenir un soutien pour résoudre des problèmes. Apprenez-en plus <gcds-link href="{{ links.about }}">à propos de nous</gcds-link>.

Envoyez-nous vos commentaires ou questions à l'aide du formulaire suivant, ou entrez en contact avec nous sur <gcds-link external href="{{ links.githubCompsIssues }}">GitHub</gcds-link>.

<hr class="my-500" />

## Contacter le soutien de Système de design GC

Nous offrons des démos personnalisées aux équipes qui souhaitent en savoir plus sur l'utilisation de Système de design GC.

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
