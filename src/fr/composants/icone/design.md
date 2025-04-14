---
title: Icône
layout: 'layouts/component-documentation.njk'
translationKey: 'iconDesign'
tags: ['iconFR', 'design']
date: 'git Last Modified'
nocrawl: true
---

## Structure de l’icône

<ol class="anatomy-list">
  <li>Une <strong>icône</strong> est un symbole qui représente visuellement un objet, une action ou une idée.</li>
  <li>Le <strong>texte d’accompagnement</strong> est un mot ou une expression qui donne un contexte supplémentaire.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-icon-anatomy.svg" alt="Le diagramme montre une icône d’information à côté des mots « Texte d’accompagnement ». Le texte et l’icône ont la même couleur et la même taille." />

## Design et accessibilité de l’icône

### Utiliser l’icône de manière intentionnelle

- Utilisez les icônes pour aider les gens avec la fonctionnalité du site. 
- Utilisez les icônes judicieusement, car une utilisation excessive peut distraire et en réduire l’efficacité.

### Utiliser une icône avec du texte

- Associez l’icône à du texte d’accompagnement pour éliminer toute ambiguïté. 
- Les icônes universellement comprises, comme celle de la recherche, peuvent être utilisées seules. 
- Placez une icône avant le texte, à moins que vous n’indiquiez des informations secondaires, comme la flèche d’un menu déroulant.

### Rédiger une description significative

- Utilisez du texte d’accompagnement distinct et spécifique afin d’éviter les répétitions pour les lecteurs d’écran.
- Utilisez du texte de remplacement lorsqu’il n’y a pas de texte d’accompagnement.

### Faire correspondre l’icône et la taille du texte

- Faites correspondre la taille de l’icône au texte d’accompagnement, c’est-à-dire en utilisant une petite icône avec du petit texte.
- Alignez l’icône de manière à ce qu’elle soit à la même hauteur que le texte d’accompagnement.
- Utilisez notre échelle de taille pour vous assurer que la taille de l’icône correspond à la taille du texte.

<gcds-grid class="bg-light px-300 md:px-500 py-500 md:py-800 b-radius-lg" columns="1fr 1fr" columns-tablet="repeat(4, 1fr)" columns-desktop="repeat(8, 1fr)" gap="300" gap-tablet="450">
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>Texte petit (petit texte)</strong></gcds-text>
    <gcds-icon size="text-small" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>Texte</strong></gcds-text>
    <gcds-icon size="text" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H6</strong></gcds-text>
    <gcds-icon size="h6" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H5</strong></gcds-text>
    <gcds-icon size="h5" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H4</strong></gcds-text>
    <gcds-icon size="h4" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H3</strong></gcds-text>
    <gcds-icon size="h3" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H2</strong></gcds-text>
    <gcds-icon size="h2" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H1</strong></gcds-text>
    <gcds-icon size="h1" name="info-circle"></gcds-icon>
  </div>
</gcds-grid>

###  Choisir une couleur accessible

- Utilisez une couleur unie qui correspond au texte d’accompagnement.
- Vérifiez que la couleur respecte ou dépasse la norme WCAG 2.1 AA.
