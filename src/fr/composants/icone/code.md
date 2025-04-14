---
title: Icône
layout: 'layouts/component-documentation.njk'
translationKey: 'iconCode'
tags: ['iconFR', 'code']
date: 'git Last Modified'
nocrawl: true
---

## Créer une icône

Utilisez une icône pour mettre l’accent sur une action ou une idée.

## Codage et accessibilité des icônes

### Sélectionner une icône pertinente

Obtenez l’icône de votre choix en remplaçant l’attribut `name` par le nom de l’icône correspondant.

**Remarque** : Conformément à la pratique courante, on utilise l'anglais pour tous les éléments de code.

<gcds-grid class="bg-light px-300 md:px-500 py-500 md:py-800 b-radius-lg" columns-desktop="repeat(4, 1fr)" columns-tablet="repeat(3, 1fr)" columns="1fr 1fr" tag="ul" gap="300" gap-tablet="450">
  <li class="list-none text-center">
    <gcds-icon name="info-circle" size="h2" label="Un cercle rempli avec la lettre « i » au centre."></gcds-icon>
    <p class="mb-0"><code>info-circle</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="warning-triangle" size="h2" label="Un triangle rempli avec la lettre « i » au centre."></gcds-icon>
    <p class="mb-0"><code>warning-triangle</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="exclamation-circle" size="h2" label="Un cercle rempli avec un point d’exclamation au centre."></gcds-icon>
    <p class="mb-0"><code>exclamation-circle</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="checkmark-circle" size="h2" label="Un cercle rempli avec un point d’exclamation au centre."></gcds-icon>
    <p class="mb-0"><code>checkmark-circle</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="chevron-left" size="h2" label="Une flèche pointant vers la gauche."></gcds-icon>
    <p class="mb-0"><code>chevron-left</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="chevron-right" size="h2" label="Une flèche pointant vers la droite."></gcds-icon>
    <p class="mb-0"><code>chevron-right</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="chevron-up" size="h2" label="Une flèche pointant vers le haut."></gcds-icon>
    <p class="mb-0"><code>chevron-up</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="chevron-down" size="h2" label="Une flèche pointant vers le bas."></gcds-icon>
    <p class="mb-0"><code>chevron-down</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="close" size="h2" label="Un « x »."></gcds-icon>
    <p class="mb-0"><code>close</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="download" size="h2" label="Une flèche pointant vers le bas en direction d’une ligne horizontale."></gcds-icon>
    <p class="mb-0"><code>download</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="email" size="h2" label="Une enveloppe."></gcds-icon>
    <p class="mb-0"><code>email</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="external" size="h2" label="Une flèche pointant vers l’extérieur du coin supérieur droit d’un carré."></gcds-icon>
    <p class="mb-0"><code>external</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="phone" size="h2" label="Un téléphone."></gcds-icon>
    <p class="mb-0"><code>phone</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="search" size="h2" label="Une loupe."></gcds-icon>
    <p class="mb-0"><code>search</code></p>
  </li>
</gcds-grid>

### Choisir l’échelle de l’icône

- Modifiez la taille d’une icône en définissant l’attribut `size` à une taille de police spécifique, comme `text-small` | `text` |  `h1` | `h2` | `h3` | `h4` | `h5` | `h6`.
- Faites correspondre la taille de l’icône au texte d’accompagnement en définissant l’attribut `size` à `inherit`.
- Fixez une hauteur/largeur minimale de 24 x 24 pixels pour une icône interactive sans texte. Si vous pouvez augmenter la taille, 44 x 44 pixels dépasse les normes d’accessibilité, mais est plus accessible.

### Ajuster le positionnement

Ajoutez une marge à la gauche ou à la droite d’une icône en définissant l’attribut `margin-left` ou `margin-right` à l’aide d’une valeur d’espacement comme `0` | `25` | `50` | `75` | `100` | `125` | `150` | `175`| `200` | `225`| `250` | `300` | `350`| `400` | `450` | `500` | `550` | `600` | `650` | `700` | `750` | `800` | `850` | `900` | `950` | `1000` | `1050` | `1100` | `1150` | `1200` | `1250`.

### Définir le texte du libellé

- Utilisez la propriété "label" pour une icône sans texte d’accompagnement.
- Vous n’avez pas besoin d’utiliser la propriété "label" si une icône est décorative.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-icon."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-icon--events-properties&lang=en"
  width="1200"
  height="950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
