---
title: Raccourcis CSS
translationKey: shortcuts
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFR
  title: Raccourcis CSS
  locale: fr
  order: 2
date: 'git Last Modified'
---

# Raccourcis CSS

Chaque produit numérique a besoin de styles personnalisés. Nous avons fait le travail pour vous.

Les Raccourcis CSS sont un cadre utilitaire CSS conçu en conformité avec les styles de Système de design GC et les normes de Canada.ca. Ils fournissent des classes utilitaires CSS prédéfinies qui appliquent des éléments de conception de base, comme les couleurs, l’espacement et la typographie, à votre code HTML. Les classes s’alignent sur nos [unités de style de Système de design GC]({{ links.designTokens }}) pour assurer l’uniformité et la facilité d’utilisation.

## Comment utiliser les Raccourcis CSS

1. [Ajoutez la feuille de style CSS à votre projet]({{ links.getStartedDevelop }}). Celle-ci s’ajoute à différents endroits selon le cadre.
2. Explorez les différentes options de style dans le menu.
3. Ajoutez les classes au code HTML correspondant pour ajuster le style selon vos besoins.

## Avantages

### Cohérence des styles

Les Raccourcis CSS vous permettent d’appliquer des [unités de style prédéfinies]({{ links.designTokens }}) directement à vos éléments HTML. Ces unités de style sont utilisées dans l’ensemble de Système de design GC, faisant en sorte que votre code personnalisé correspond à nos composants.

### Développement plus rapide, moins de maintenance

Travaillez avec du code plus simple, plus clair et plus facile à entretenir. C’est nous qui gérons les mises à jour, pas vous.

### Aucune dépendance sur des infrastructures tierces

Les Raccourcis CSS sont conçus pour répondre aux besoins du gouvernement du Canada. Contrairement à d’autres cadres utilitaires courants, comme Bootstrap ou Tailwind, nous avons entièrement le contrôle des Raccourcis CSS.

### Accessible à la base

Ajoutez du code personnalisé pour répondre à vos besoins spécifiques, tout en sachant qu’il a été conçu pour répondre aux [normes d’accessibilité du GC]({{ links.accessibility }}).

## Parcourir les Raccourcis CSS

### Par défaut

<gcds-link href="{{ links.shortcutsResetStyles }}">Styles de réinitialisation</gcds-link>

### Styles conditionnels

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <gcds-link href="{{ links.shortcutsResponsiveLayout }}">Mise en page réactive</gcds-link>
  <gcds-link href="{{ links.shortcutsState }}">État</gcds-link>
</gcds-grid>

### Mise en page

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <gcds-link href="{{ links.shortcutsBoxSizing }}">Dimensionnement de la boîte</gcds-link>
  <gcds-link href="{{ links.shortcutsContainerSizing }}">Dimensionnement du conteneur</gcds-link>
  <gcds-link href="{{ links.shortcutsDisplay }}">Affichage</gcds-link>
  <gcds-link href="{{ links.shortcutsOverflow }}">Débordement</gcds-link>
  <gcds-link href="{{ links.shortcutsPosition }}">Position</gcds-link>
  <gcds-link href="{{ links.shortcutsVisibility }}">Visibilité</gcds-link>
</gcds-grid>

### Typographie

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <gcds-link href="{{ links.shortcutsFont }}">Police</gcds-link>
  <gcds-link href="{{ links.shortcutsFontFamily }}">Famille de polices</gcds-link>
  <gcds-link href="{{ links.shortcutsFontSize }}">Taille de police</gcds-link>
  <gcds-link href="{{ links.shortcutsFontStyle }}">Style de police</gcds-link>
  <gcds-link href="{{ links.shortcutsFontWeight }}">Épaisseur de police</gcds-link>
  <gcds-link href="{{ links.shortcutsLineHeight }}">Hauteur de ligne</gcds-link>
  <gcds-link href="{{ links.shortcutsLinkColour }}">Couleur de lien</gcds-link>
  <gcds-link href="{{ links.shortcutsLinkSize }}">Taille de lien</gcds-link>
  <gcds-link href="{{ links.shortcutsLinkDecoration }}">Décoration de texte de lien</gcds-link>
  <gcds-link href="{{ links.shortcutsListStyle }}">Style de liste</gcds-link>
  <gcds-link href="{{ links.shortcutsTextAlign }}">Alignement de texte</gcds-link>
  <gcds-link href="{{ links.shortcutsTextColour }}">Couleur de texte</gcds-link>
  <gcds-link href="{{ links.shortcutsTextOverflow }}">Débordement de texte</gcds-link>
  <gcds-link href="{{ links.shortcutsTextTransform }}">Transformation de texte</gcds-link>
  <gcds-link href="{{ links.shortcutsWordBreak }}">Saut de mot</gcds-link>
</gcds-grid>

### Espacement

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <gcds-link href="{{ links.shortcutsMargin }}">Marge</gcds-link>
  <gcds-link href="{{ links.shortcutsPadding }}">Marge intérieure</gcds-link>
</gcds-grid>

### Boîte d’élément flexible et grille

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <gcds-link href="{{ links.shortcutsFlex }}">Élément flexible</gcds-link>
  <gcds-link href="{{ links.shortcutsFlexDirection }}">Direction de l’élément flexible</gcds-link>
  <gcds-link href="{{ links.shortcutsFlexWrap }}">Habillage de l’élément flexible</gcds-link>
  <gcds-link href="{{ links.shortcutsFlexGrow }}">Élargissement de l’élément flexible</gcds-link>
  <gcds-link href="{{ links.shortcutsFlexShrink }}">Rétrécissement de l’élément flexible</gcds-link>
  <gcds-link href="{{ links.shortcutsGridColumns }}">Colonnes de grille</gcds-link>
  <gcds-link href="{{ links.shortcutsGridRows }}">Lignes de grille</gcds-link>
  <gcds-link href="{{ links.shortcutsGap }}">Écart</gcds-link>
  <gcds-link href="{{ links.shortcutsAlignContent }}">Alignement de contenu</gcds-link>
  <gcds-link href="{{ links.shortcutsAlignItems }}">Alignement des éléments</gcds-link>
  <gcds-link href="{{ links.shortcutsAlignSelf }}">Alignement individuel</gcds-link>
  <gcds-link href="{{ links.shortcutsJustifyContent }}">Justification de contenu</gcds-link>
  <gcds-link href="{{ links.shortcutsJustifyItems }}">Justification des éléments</gcds-link>
  <gcds-link href="{{ links.shortcutsJustifySelf }}">Justification individuelle</gcds-link>
  <gcds-link href="{{ links.shortcutsPlaceContent }}">Agencement de contenu</gcds-link>
  <gcds-link href="{{ links.shortcutsPlaceItems }}">Agencement des éléments</gcds-link>
  <gcds-link href="{{ links.shortcutsPlaceSelf }}">Agencement individuel</gcds-link>
  <gcds-link href="{{ links.shortcutsOrder }}">Ordre</gcds-link>
</gcds-grid>

### Arrière-plan et bordure

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <gcds-link href="{{ links.shortcutsBackgroundColour }}">Couleur de l’arrière-plan</gcds-link>
  <gcds-link href="{{ links.shortcutsBorderColour }}">Couleur de la bordure</gcds-link>
  <gcds-link href="{{ links.shortcutsBorderStyle }}">Style de la bordure</gcds-link>
  <gcds-link href="{{ links.shortcutsBorderWidth }}">Largeur de la bordure</gcds-link>
  <gcds-link href="{{ links.shortcutsBorderRadius }}">Rayon de la bordure</gcds-link>
</gcds-grid>

### Icône et image

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <gcds-link href="{{ links.shortcutsIconNames }}">Noms des icônes</gcds-link>
  <gcds-link href="{{ links.shortcutsIconSize }}">Taille de l’icône</gcds-link>
  <gcds-link href="{{ links.shortcutsImage }}">Image</gcds-link>
</gcds-grid>

### Interactif

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <gcds-link href="{{ links.shortcutsCursor }}">Curseur</gcds-link>
  <gcds-link href="{{ links.shortcutsPointerEvents }}">Pointeur</gcds-link>
  <gcds-link href="{{ links.shortcutsTransition }}">Transition</gcds-link>
</gcds-grid>

{% include "partials/helpus.njk" %}
