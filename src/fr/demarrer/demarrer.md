---
title: Démarrer
translationKey: getstarted
layout: 'layouts/base.njk'
eleventyNavigation:
  key: getstartedFR
  title: Démarrer
  locale: fr
  order: 2
date: 'git Last Modified'
---

# Démarrer

Que vous soyez à l’étape de la conception ou du codage, commencez à utiliser Système de Design GC.

<gcds-grid class="mb-300" tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
  <gcds-card
    card-title="Conception"
    href="#conception"
    description="Apprenez à concevoir des expériences du GC cohérentes en utilisant la bibliothèque d’éléments de conception dans Figma."
    img-src="/images/common/get-started/banner-design.svg"
    img-alt=""
    role="listitem"
  /></gcds-card>
  <gcds-card
    card-title="Développement"
    href="#developpement"
    description="Apprenez à prototyper et à développer des expériences accessibles du GC en code."
    img-src="/images/common/get-started/banner-develop.svg"
    img-alt=""
    role="listitem"
  ></gcds-card>
</gcds-grid>

## Conception

Utilisez la bibliothèque de Système de design GC dans Figma pour créer des expériences frontales cohérentes et accessibles pour les outils et services du gouvernement du Canada. Nos composants sont conçus pour les sites statiques et les applications dynamiques.

La bibliothèque comprend :

- Composants accessibles
- Modèles de page de démarrage rapide
- Éléments de marque obligatoires pour Canada.ca

### Fonctionnement

Système de design GC héberge ses composants dans Figma. Figma est un outil qui permet de créer des prototypes cliquables d’applications et de sites Web en utilisant la bibliothèque de Système de design GC.

<gcds-button button-role="secondary" type="link" href="{{ links.getStartedDesign }}">
  Commencer à concevoir
</gcds-button>

## Développement

- Que vous construisiez des pages HTML statiques ou des applications dynamiques faisant appel à un cadre JavaScript, Système de design GC peut vous aider. Simplifiez votre livraison numérique.
- Travaillez dans le cadre que vous souhaitez utiliser.
- Créez des expériences numériques reconnaissables et dignes de confiance du gouvernement du Canada.
- Construisez des produits qui <gcds-link href="{{links.accessibility}}">répondent aux normes d’accessibilité du GC ou qui les surpassent</gcds-link>.

### Fonctionnement

Système de design GC propose des composants Web réutilisables et personnalisables. Les composants sont autosuffisants, combinant leur propre HTML, CSS et JavaScript pour l’encapsulation et la réutilisation.

- Les composants sont agnostiques sur le plan technologique et peuvent être utilisés dans n’importe quel projet Web, quel que soit le cadre sous-jacent.
- Système de design GC utilise des <gcds-link href="{{links.designTokens}}">unités de style</gcds-link> pour capturer les décisions de marque et de design dans le code pour des éléments de style comme les couleurs, la typographie et l’espacement.
- Les changements y sont apportés dans le cadre de mises à jour uniques qui englobent les unités de style, les composants et les changements non rétrocompatibles.
- Système de design GC est indépendant de la Boîte à outils de l’expérience Web (BOEW) et de GCWeb.

<gcds-button button-role="secondary" type="link" href="{{ links.getStartedDevelop }}">
  Commencer à développer
</gcds-button>
