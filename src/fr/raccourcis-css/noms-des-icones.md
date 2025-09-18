---
title: Noms des icônes
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsIconNamesFR
  title: Noms des icônes
  locale: fr
  parent: shortcutsIconImageFR
  order: 1
shortcuts:
  - class: 'gcds-icon-info-circle'
    style: 'content: "\e90a";'
  - class: 'gcds-icon-warning-triangle'
    style: 'content: "\e90d";'
  - class: 'gcds-icon-exclamation-circle'
    style: 'content: "\e909";'
  - class: 'gcds-icon-checkmark-circle'
    style: 'content: "\e908";'
  - class: 'gcds-icon-chevron-left'
    style: 'content: "\e901";'
  - class: 'gcds-icon-chevron-right'
    style: 'content: "\e902";'
  - class: 'gcds-icon-chevron-up'
    style: 'content: "\e903";'
  - class: 'gcds-icon-chevron-down'
    style: 'content: "\e900";'
  - class: 'gcds-icon-close'
    style: 'content: "\e90b";'
  - class: 'gcds-icon-download'
    style: 'content: "\e906";'
  - class: 'gcds-icon-email'
    style: 'content: "\e905";'
  - class: 'gcds-icon-external'
    style: 'content: "\e904";'
  - class: 'gcds-icon-phone'
    style: 'content: "\e90c";'
  - class: 'gcds-icon-search'
    style: 'content: "\e907";'
shortcutsPartialClass: 'icon-close'
translationKey: 'shortcutsIconNames'
date: 'git Last Modified'
---

# Noms des icônes

La classe icône définit la propriété `content` et d'autres styles de base d'icône tels que la famille de polices d'icônes, le style et l'épaisseur. Elle détermine l'icône <gcds-link href="{{ links.icon }}">gcds-icon</gcds-link> à afficher.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Cercle info<br/>`gcds-icon-info-circle`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-info-circle"></span> Cet élément a une icône de cercle d'information.
</p>
{% endshortcutPreview %}

### Triangle avertissement<br/>`gcds-icon-warning-triangle`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-warning-triangle"></span> Cet élément a une icône de triangle d'avertissement.
</p>
{% endshortcutPreview %}

### Cercle exclamation<br/>`gcds-icon-exclamation-circle`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-exclamation-circle"></span> Cet élément a une icône de cercle d'exclamation.
</p>
{% endshortcutPreview %}

### Cercle coche<br/>`gcds-icon-checkmark-circle`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-checkmark-circle"></span> Cet élément a une icône de cercle de coche.
</p>
{% endshortcutPreview %}

### Chevron gauche<br/>`gcds-icon-chevron-left`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-chevron-left"></span> Cet élément a une icône de chevron pointant vers la gauche.
</p>
{% endshortcutPreview %}

### Chevron droite<br/>`gcds-icon-chevron-right`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-chevron-right"></span> Cet élément a une icône de chevron pointant vers la droite.
</p>
{% endshortcutPreview %}

### Chevron haut<br/>`gcds-icon-chevron-up`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-chevron-up"></span> Cet élément a une icône de chevron pointant vers le haut.
</p>
{% endshortcutPreview %}

### Chevron bas<br/>`gcds-icon-chevron-down`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-chevron-down"></span> Cet élément a une icône de chevron pointant vers le bas.
</p>
{% endshortcutPreview %}

### Fermer <br/>`gcds-icon-close`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-close"></span> Cet élément a une icône de fermeture.
</p>
{% endshortcutPreview %}

### Téléchargement <br/>`gcds-icon-download`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-download"></span> Cet élément a une icône de téléchargement.
</p>
{% endshortcutPreview %}

### Courriel <br/>`gcds-icon-email`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-email"></span> Cet élément a une icône de courriel.
</p>
{% endshortcutPreview %}

### Externe <br/>`gcds-icon-external`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-external"></span> Cet élément a une icône externe.
</p>
{% endshortcutPreview %}

### Téléphone <br/>`gcds-icon-phone`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-phone"></span> Cet élément a une icône de téléphone.
</p>
{% endshortcutPreview %}

### Recherche <br/>`gcds-icon-search`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-search"></span> Cet élément a une icône de recherche.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
