---
title: Modèle de page de base
layout: 'layouts/page-templates-overview.njk'
eleventyNavigation:
  key: basicPageTemplateFR
  title: Page de base
  locale: fr
  parent: pageTemplatesFR
  description: Point de départ de toute page Web. Offre une structure et une hiérarchie basiques et accessibles, et comprend les éléments obligatoires pour la plupart des pages du GC.
  descriptionSecondaryText:
  state: published
  #  tag: Canada.ca required
  order: 1
translationKey: 'basicPageTemplate'
tags: ['templates']
date: 'git Last Modified'
github: https://github.com/cds-snc/gcds-examples/blob/feat/add-basic-page-templates/templates/english/basic-page-template.html
figma: https://www.figma.com/community/file/1369337721343886324
---

# Modèle de page de base

Le modèle de page de base offre l'essentiel pour structurer une page et hiérarchiser des titres de façon accessible. Les éléments de marque, comme l'en-tête et le pied de page, permettent de reconnaître que la page vient du gouvernement du Canada.

## Quand l'utiliser

À utiliser sur Canada.ca et sur d'autres sites du GC.

Le modèle de page de base est destiné aux pages non spécialisées de Canada.ca. Ce modèle est facultatif. Il contient les éléments de départ nécessaires pour créer une page simple et les éléments obligatoires pour la plupart des pages du GC. Vous pouvez l'utiliser comme canevas ou ajouter et agencer des <gcds-link href="{{ links.components }}">composants</gcds-link> de Système de design GC.

## Aperçu

<gcds-button class="mb-300" button-role="secondary" type="link" href="{{ links.pageTemplatesBasicPreview }}" target="_blank">Ouvrir demo dans un nouvel onglet</gcds-button>
<gcds-button  button-role="secondary" type="link" href="{{ links.pageTemplatesBasicCode }}" target="_blank">Obtenez code dans un nouvel onglet</gcds-button>

<img class="max-width-content b-sm b-default mb-300 p-300" src="/images/fr/templates/basic-page-preview.png" alt="Le modèle de page de base comprend l'en-tête et le pied de page du Gouvernement du Canada, ainsi que les sections titre H1, H2 et H3 accompagnées de texte sous chacune des sections."/>

## Comment procéder à la mise en œuvre

Pour utiliser un modèle de page dans votre projet ou réaliser un prototype en HTML, téléchargez le modèle dont vous avez besoin dans GitHub :

- <gcds-link external href="{{ links.pageTemplatesBasicGithubLink }}">Modèle de page de base</gcds-link>
- <gcds-link external href="{{ links.pageTemplatesBasicExtOTPGithubLink }}">Modèle de table des matières pour page de base</gcds-link>

Pour réaliser un prototype dans Figma, trouvez le <gcds-link external href="{{ links.figma }}">modèle de page de base</gcds-link> dans la bibliothèque Système de design GC.

## Considérations de conception

### Améliorer la navigation dans les longues pages

- Pour toute page ayant 4 sections ou plus, ajoutez une section « Sur cette page » comprenant une liste de liens (ancres) renvoyant aux autres sections.
- Ajouter des ancres afin d'améliorer la navigation et aident les gens à trouver le contenu dont ils ont besoin.

### Aperçu « Sur cette page »

<gcds-button class="mb-300" button-role="secondary" type="link" href="{{ links.pageTemplatesBasicExtOTPPreview }}" target="_blank">Ouvrir demo dans un nouvel onglet</gcds-button>
<gcds-button  button-role="secondary" type="link" href="{{ links.pageTemplatesBasicExtOTPCode }}" target="_blank">Obtenez code dans un nouvel onglet</gcds-button>

<img class="max-width-content b-sm b-default mb-300 p-300" src="/images/fr/templates/basic-page-on-this-page-preview.png" alt="Un modèle de page de base avec une section 'Sur cette page' inclut l'en-tête et le pied de page du gouvernement du Canada, une section 'Sur cette page' et trois sections listées en-dessous."/>

### Assurer la cohérence des niveaux de titres

- Suivez la logique hiérarchique du modèle de page pour structurer votre contenu de façon inclusive, y compris pour les personnes utilisant des technologies d'assistance.
- Utilisez les niveaux de titres appropriés (H1-H6) pour structurer votre contenu.
- Écrivez des titres clairs et cohérents en veillant à conserver une limite de caractères pour chacune de section afin d'assurer plus de confort lors de la lecture.
- Pour des raisons d'uniformité et d'accessibilité, utilisez les composants de Système de design GC comme le <gcds-link href="{{ links.heading }}">titre</gcds-link>, le <gcds-link href="{{ links.text }}">texte</gcds-link> et le <gcds-link href="{{ links.screenreaderOnly }}">masquage accessible</gcds-link>.
- Pour tout élément construit sur mesure, suivez la <gcds-link href="{{ links.tbsStandardsOnWebA11y }}" external>Norme sur l'accessibilité des sites Web</gcds-link> du gouvernement du Canada.

## Points notables sur l'accessibilité

Le modèle de page de base comprend les composants suivants qui respectent le niveau AA des Règles pour l'accessibilité des contenus Web (WCAG) 2.1 :

- Conteneur
- Date de modification
- En-tête (y compris les composants recherche et chemin de navigation)
- Lien
- Pied de page
- Texte
- Titre

Le modèle de page de base comprend :

- Une hiérarchie de titres claire qui vous permet, grâce aux directives sur les <gcds-link href="{{ links.heading }}">titres</gcds-link>, de structurer votre contenu de manière logique pour tout le monde, notamment les personnes utilisant des technologies d'assistance.
- Des unités de style de Système de design GC qui respectent le niveau AA des <gcds-link href="{{ links.wcag }}" external>Règles pour l'accessibilité des contenus Web (WCAG 2.1)</gcds-link> en matière de contraste des couleurs pour le texte et les éléments interactifs, et le niveau AAA en matière de cible tactile et de présentation visuelle.

