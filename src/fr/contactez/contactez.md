---
title: Contactez-nous
layout: 'layouts/base.njk'
eleventyNavigation:
  key: contactusFR
  title: Contactez-nous
  locale: fr
  order: 3
  hideMain: true
translationKey: 'contactus'
contactForm: fr
date: 'git Last Modified'
---

# Contacter Système de design GC

<gcds-notice type="info" notice-title-tag="h2" notice-title="Formulaire de soutien sur GitHub">
  <gcds-text>Avec un <gcds-link external href="{{ links.githubGetStarted }}">compte</gcds-link>, utilisez notre <gcds-link external href="{{ links.githubCompsIssues }}">Formulaire de soutien GitHub</gcds-link> pour signaler des bogues et obtenir un soutien technique. Vous pourrez accéder aux réponses de l’équipe, suivre les progrès réalisés concernant votre problèmes et voir les problèmes signalés par d’autres personnes.></gcds-text>
</gcds-notice>

## Participez à une démo ou à un évènement

Vous souhaitez en savoir plus sur Système de design GC avant de vous lancer?

Les démos présentent le prototypage et le développement d’expériences Web à l’aide du système de design et sont suivies d’une séance de questions-réponses.

Nous aurons bientôt d’autres évènements à proposer à notre communauté grandissante.

<gcds-button type="link" button-role="secondary" href="{{ links.registerDemo }}">
  Trouver une démo à venir
</gcds-button>

<hr class="my-600" />

## Contactez l’équipe du système de design

Ce formulaire est destiné aux personnes qui bâtissent les sites Web et services numériques gouvernementaux. Vous pouvez nous faire part de vos commentaires, poser une question ou recevoir des communications de la part de l’équipe Système de design GC.

Pour obtenir de l’aide avec un service gouvernemental, aller à la page <gcds-link href="https://www.canada.ca/fr/contact.html" external>Coordonnées du Gouvernement du Canada</gcds-link>.

<form class="my-600 contact-us-form" name="contactFR" method="post" style="min-height: 32rem;" action="/api/submission" novalidate>
  <gcds-error-summary></gcds-error-summary>

  <input type="hidden" name="form-name" value="contactFR" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

  <gcds-input type="text" name="name" input-id="name" label="Nom complet" autocomplete="name" required></gcds-input>
  <gcds-input type="email" name="email" input-id="email" label="Adresse courriel" autocomplete="email" required></gcds-input>
  <gcds-textarea name="message" label="Fournissez vos commentaires ou posez une question si vous avez besoin d’aide" hint="Incluez jamais de renseignement personnel (Protégé)." textarea-id="message"></gcds-textarea>

  <gcds-fieldset legend="Recevez des communications de la part de Système de design GC" legend-size="h3" hint="Si vous souhaitez que nous vous contactions, choisissez une option ou les deux options.">
    <gcds-checkboxes name="learn-more-mailing-list" options="{{ contactus[locale].mailingcheck | stringify | encode-html }}"></gcds-checkboxes>
    <gcds-checkboxes name="learn-more-research" options="{{ contactus[locale].researchcheck | stringify | encode-html }}"></gcds-checkboxes>
  </gcds-fieldset>

  <gcds-radios legend="Indiquez votre expérience avec Système de design GC" hint="Sélectionnez 1 option." name="familiarityGCDS" options='{{ contactus[locale].radiooptions | stringify | encode-html}}'>
  </gcds-radios>

  <div hidden>
    <gcds-input type="text" name="bot-field" input-id="bot-field" label="bot"></gcds-input>
  </div>

  <gcds-button button-role="primary" type="submit">
    Envoyer
  </gcds-button>
</form>

<script defer src="/scripts/sanitize-pii.min.js"></script>
<script defer src="/scripts/sanitize-contact-form.js"></script>
