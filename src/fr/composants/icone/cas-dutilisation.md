---
title: Icône
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: iconFR
  title: Icône
  locale: fr
  parent: componentsFR
  otherNames: symbole, glyphe.
  description: Un symbole qui représente une action ou une idée.
  thumbnail: /images/common/components/preview-icon.svg
  alt: 'Quatre symboles : une enveloppe, une loupe, un téléphone, et une flèche pointant vers le bas en direction d’une ligne horizontale.'
  state: published
translationKey: 'icon'
tags: ['iconFR', 'usage']
permalink: /fr/composants/icone/
date: 'git Last Modified'
---

## Problèmes résolus par les icônes

Utilisez une icône pour :

- Clarifier l’information à l’aide d’une référence visuelle.
- Surligner les actions ou les états clés, comme une coche pour la validation.
- Parcourir le contenu plus rapidement et réduire la charge cognitive.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0">Composants connexes</h2>

<a href="{{ links.text }}" class="link-light">Texte</a> pour afficher le contenu écrit dans un paragraphe stylisé et formaté.

<a href="{{ links.notice }}" class="link-light">Avis</a> pour afficher un message court et visible.
</article>

## Cas d’utilisation des icônes

### Mettre en évidence une information

Choisissez une icône correspondant à l’information que vous souhaitez mettre en évidence.

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="info-circle" label="Un cercle rempli avec la lettre « i » au centre."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Cercle info <code>gcds-icon-info-circle</code></gcds-heading>
    <gcds-text>Information non critique, mais utile.</gcds-text>
  </div>

  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="warning-triangle" label="Un triangle rempli avec la lettre « i » au centre."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Triangle avertissement <code>gcds-icon-warning-triangle</code></gcds-heading>
    <gcds-text> Mise en garde sans action nécessaire.</gcds-text>
  </div>

  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="exclamation-circle" label="Un cercle rempli avec un point d’exclamation au centre."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Cercle exclamation <code>gcds-icon-exclamation-circle</code></gcds-heading>
    <gcds-text>Avertissement critique avant une action.</gcds-text>
  </div>

  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="checkmark-circle" label="Un cercle rempli avec un point d’exclamation au centre."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Cercle coche <code>gcds-icon-checkmark-circle</code></gcds-heading>
    <gcds-text>Confirmation de l’achèvement ou du succès d’une action.</gcds-text>
  </div>
</gcds-grid>
</div>

### Indiquer l’action à prendre

Choisissez une icône correspondant à l’action que vous souhaitez mettre en évidence.

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "" "px-50 py-400" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="chevron-left" label="Une flèche pointant vers la gauche." margin-right="150"></gcds-icon>
      <gcds-icon size="h2" name="chevron-right" label="Une flèche pointant vers la droite." margin-right="150"></gcds-icon>
      <gcds-icon size="h2" name="chevron-up" label="Une flèche pointant vers le haut." margin-right="150"></gcds-icon>
      <gcds-icon size="h2" name="chevron-down" label="Une flèche pointant vers le bas."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Chevron gauche/droite/haut/bas<br/>
      <code>gcds-icon-chevron-left</code><br/>
      <code>gcds-icon-chevron-right</code><br/>
      <code>gcds-icon-chevron-up</code><br/>
      <code>gcds-icon-chevron-down</code>
    </gcds-heading>
    <gcds-text>Développer / réduire le contenu ou indiquer une direction.</gcds-text>
  </div>

  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="close" label="Un « x »."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Fermer <code>gcds-icon-close</code></gcds-heading>
    <gcds-text>Annuler une action ou fermer un flux.</gcds-text>
  </div>

  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="download" label="Une flèche pointant vers le bas en direction d’une ligne horizontale."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Téléchargement <code>gcds-icon-download</code></gcds-heading>
    <gcds-text>Télécharger un fichier.</gcds-text>
  </div>

  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="email" label="Une enveloppe."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Courriel <code>gcds-icon-email</code></gcds-heading>
    <gcds-text>Envoyer un courriel.</gcds-text>
  </div>

  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="external-link" label="Une flèche pointant vers l’extérieur du coin supérieur droit d’un carré."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Lien externe <code>gcds-icon-external-link</code></gcds-heading>
    <gcds-text>Ouvrir un lien dans un nouvel onglet ou une nouvelle fenêtre.</gcds-text>
  </div>

  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="phone" label="Un téléphone."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Téléphone <code>gcds-icon-phone</code></gcds-heading>
    <gcds-text>Composer un numéro de téléphone.</gcds-text>
  </div>

  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="search" label="Une loupe."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Recherche <code>gcds-icon-search</code></gcds-heading>
    <gcds-text>Rechercher des renseignements précis.</gcds-text>
  </div>
</gcds-grid>
</div>
