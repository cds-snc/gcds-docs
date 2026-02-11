---
title: Unités de style de couleur
layout: 'layouts/base.njk'
translationKey: 'colour'
eleventyNavigation:
  key: colourFR
  title: Couleur
  locale: fr
  parent: foundationsFR
  order: 1
  description: Les unités de style de couleur comprennent les valeurs nécessaires pour les composants de style.
  thumbnail: /images/en/foundations/preview/preview-colour.svg
  alt: Des carrés colorés répartis en quatre colonnes de trois carrés, la première colonne étant de teinte pâle, et les suivantes devenant progressivement plus foncées. La première rangée montre des carrés bleus, la deuxième montre des carrés gris et la troisième montre des carrés rouges.
  state: published
permalink: /fr/styles/couleur/
tokenTable:
  headers:
    color-preview: Aperçu
    token-name: Nom de l'unité de style
    contrast: Rapport de contraste
    value: Valeur hex
    use-case: Utilisation
  useCases:
    text-light: Couleur claire principale du texte. À utiliser sur un arrière-plan de nuance 700 ou plus foncé (comme --gcds-bg-dark).
    text-primary: Couleur principale du texte. À utiliser sur un arrière-plan de nuance 50 ou plus clair (comme --gcds-bg-white).
    text-secondary: Couleur de texte contrastante (alternative à --gcds-text-primary). À utiliser sur un arrière-plan de nuance 50 ou plus clair (comme --gcds-bg-white).
    link-default: Couleur de lien par défaut pour les hyperliens sur un arrière-plan blanc.
    link-hover: Couleur de lien pointé pour les hyperliens sur un arrière-plan blanc.
    link-light: Couleur d'hyperlien pâle par défaut pour les arrière-plans à valeur 700 ou plus sombres (p. ex. --gcds-color-blue-700).
    bg-dark: Couleur foncée principale de l'arrière-plan. À utiliser avec du texte de nuance 100 ou plus clair (comme --gcds-text-light).
    bg-light: Couleur claire d'arrière plan (alternative à --gcds-bg-white). À utiliser avec du texte de nuance 700 ou plus foncé (comme --gcds-text-primary).
    bg-primary: Couleur de surbrillance de l'arrière-plan. À utiliser avec du texte de nuance 100 ou plus clair (comme --gcds-text-light).
    bg-white: Couleur principale de l'arrière-plan. À utiliser avec du texte de nuance 700 ou plus foncé (comme --gcds-text-primary).
    border-default: Couleur par défaut pour les bordures et les icônes sur un arrière-plan blanc.
    danger-background: La couleur de l'arrière-plan de danger pour accentuer une action destructrice ou un retour d'expérience critique en arrière-plan.
    danger-border: La couleur de la bordure de danger sur blanc ou sur arrière-plans de danger pour accentuer une action destructrice ou un retour d'expérience critique.
    danger-text: La couleur du texte de danger sur blanc ou arrière-plans de danger pour accentuer une action destructrice ou un retour d'expérience critique.
    disabled-background: Couleur d'arrière-plan désactivé. Utiliser judicieusement pour un élément interactif désactivé.
    disabled-text: Couleur du texte désactivé. Utiliser judicieusement pour un élément interactif désactivé.
    focus-background: Couleur du texte ciblé, exclusivement pour les éléments interactifs ciblés.
    focus-text: Couleur du texte ciblé, exclusivement pour les éléments interactifs ciblés.
    focus-textForm: Couleur du texte de formulaire ciblé, exclusivement pour les éléments interactifs ciblés dans un formulaire. Évitez d'utiliser cette unité de style pour des éléments autres que ceux d'un formulaire.
# date: "git Last Modified"
---

# {{ title }}

Les unités de style de couleur définissent les couleurs pour les composants et les styles globaux.

## Unités de style de couleur et accessibilité

Les composants de Système de design GC sont conformes <gcds-link external href="{{ links.wcag }}" target="_blank">au niveau AA des Règles pour l'accessibilité des contenus Web 2.1 (WCAG 2.1)</gcds-link> (site anglais) en matière de contraste des couleurs des éléments texte et des éléments interactifs.

Lorsque vous utilisez des unités de style de couleur globales, vérifiez si vos combinaisons de couleurs satisfont aux normes en matière d'accessibilité du contraste des couleurs à l'aide de l'outil <gcds-link external href="{{ links.wcag }}" target="_blank">Web Aim Contrast Checker</gcds-link> (site anglais).

## Soyez judicieux dans votre choix d'unités de style de couleur

Sélectionnez les unités de style globales en fonction de leur utilisation prévue et de vos besoins.

Remplacez les valeurs codées en dur dans votre code par les unités de style de couleur proposées par Système de design GC, comme `var(--gcds-text-primary)` plutôt que #333333.

## Unités de style de couleur globales

Utilisez les unités de style de couleur globales pour :

- Concevoir des maquettes, des couleurs de texte et des styles globaux (ou de site).
- Communiquer le sens associé à l'unité de style. Les unités de style globales suivent des règles sémantiques.
- Créer de nouvelles unités de style pour vos composants.

Utilisez les unités de style d'état global pour :

- Appliquer un style uniforme aux états de vos composants.

### Texte

{% include "partials/token_table.njk", token: 'text', type: 'color' %}

### Lien

{% include "partials/token_table.njk", token: 'link', type: 'color' %}

### Arrière-plan

{% include "partials/token_table.njk", token: 'bg', type: 'color' %}

### Bordure

{% include "partials/token_table.njk", token: 'border', type: 'color' %}

### État danger

{% include "partials/token_table.njk", token: 'danger', type: 'color' %}

### État désactivé

{% include "partials/token_table.njk", token: 'disabled', type: 'color' %}

### État ciblé

{% include "partials/token_table.njk", token: 'focus', type: 'color' %}

## Unités de style de couleur de base

Utilisez les unités de style de base lorsqu'il vous faut quelque chose de précis pour construire vos propres composants, unités de style ou images, mais vérifiez d'abord s'il existe des unités de style globales.

Utilisez les unités de style de couleur de base pour :

- Combler les lacunes lorsqu'il n'existe aucune unité de style globale.
- Concevoir un visuel personnalisé en faisant appel à la gamme de couleurs complète.
- Prendre en charge vos propres composants.
- Fournir une base pour construire (et potentiellement publier) vos propres unités de style.

<div class="table-base-colors">
{% include "partials/token_table.njk", token: 'color.grayscale color.blue color.red color.green color.yellow', type: 'color' %}
</div>

Remarque : Les éléments de code utilisent l'orthographe américaine pour «&nbsp;colour&nbsp;» et «&nbsp;grey&nbsp;».

{% include "partials/helpus.njk" %}
