---
title: En-tête
layout: 'layouts/component-documentation.njk'
translationKey: 'headerCode'
tags: ['headerFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de en-tête](#codage-et-accessibilite-de-entete)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de en-tête

Les composants de Système de design du GC sont conçus pour s'adapter à la taille de l'écran ou du cadre où ils sont visualisés. À titre d'exception, la taille du texte dans l'en-tête et le pied de page est fixe.

### Préserver l'élément signature dans l'en-tête pour les sites Web du GC

- Conservez la [signature]({{ links.signature }}) pour tous les sites du GC.
- Utilisez l'attribut `signature-variant` pour paramétrer la signature du gouvernement du Canada à `colour` ou `white`. Pour les arrière-plans blancs, conservez le paramètre `colour` par défaut pour la signature.
- Assurez toujours l'intégrité de la signature du gouvernement du Canada. Évitez de la modifier de quelque manière que ce soit, de l'étirer ou d'en modifier les couleurs ou le texte.
- Sur les pages Canada.ca, paramétrez l'attribut `signature-has-link` à `true` pour définir le lien de la signature à Canada.ca.

### Inclure la bascule de langue sur tous les sites du GC

- Ajoutez la [bascule de langue]({{ links.langToggle }}) en définissant l'attribut `lang-href`. L'attribut `lang-href` définit également l'élément «&nbsp;href&nbsp;» de la bascule de langue.
- Utilisez l'attribut `lang` pour définir la langue du site; le bouton à bascule proposera l'autre langue officielle.

### Configurer un lien «&nbsp;passer au contenu&nbsp;» (`skip-to-content`) pour améliorer l'accessibilité

- Configurez un [lien]({{ links.link }}) `skip-to-content` comme raccourci pour les personnes utilisant une technologie d'assistance et améliorer la navigation au clavier.
- Définissez l'élément «&nbsp;href&nbsp;» du lien `skip-to-content` dans la navigation supérieure de l'en-tête à l'aide de l'attribut `skip-to-href`.
- Utilisez l'emplacement `skip-to-nav` pour remplacer la navigation supérieure par défaut par le lien `skip-to-content`.
- Passez un élément enfant avec l'attribut `slot="skip-to-nav"` pour placer l'élément en première position dans l'en-tête.

### Inclure le chemin d'accès et la recherche sur les sites Canada.ca

- Sur les pages de Canada.ca, conservez le paramètre par défaut de `hide-canada-link` à `false`.
- Ajoutez le composant [chemin de navigation]({{ links.breadcrumbs }}) en passant un élément enfant avec l'attribut `slot="breadcrumb"`. Cela placera le chemin de navigation dans l'en-tête sous les emplacements de la bascule de langue, la signature et la recherche.
- Ajoutez un nouveau lien au chemin de navigation en utilisant le composant `gcds-breadcrumbs-item`. Le lien peut être ajouté à l'aide de la propriété `href`.
- Ajoutez l'élément [recherche]({{ links.search }}) en ajoutant `<gcds-search slot="search"></gcds-search>` ou en passant un élément enfant avec l'attribut `slot="search"`. Cela placera l'élément sous la bascule de langue et à côté de la signature dans l'en-tête.
- Paramétrez la recherche de sorte à effectuer une recherche locale ou globale. Par défaut, le composant est configuré pour la recherche dans Canada.ca.

### Configurer une barre de navigation supérieure

- Ajoutez une [barre de navigation supérieure]({{ links.topNav }}) en passant un élément enfant à l'aide de l'attribut `slot="menu"`. Cela placera l'élément dans l'en-tête, sous les emplacements du bouton de bascule de langue, de la signature et de la barre de recherche.
- Vous avez le choix d'ajouter une bannière en faisant passer un élément enfant avec l'attribut `slot="banner"`. Cela placera l'élément en haut de l'en-tête sous l'élément `skip-to-nav`.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `lang-href`

L'attribut `lang-href` définit l'URL de la même page dans une autre langue, généralement l'anglais ou le français. Utilisez cet attribut pour fournir un lien permettant aux utilisateurs de basculer entre les versions linguistiques disponibles.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
</gcds-header>
{% endexamplesPreview %}

#### `skip-to-href`

L'attribut `skip-to-href` spécifie l'URL ou l'ancre du lien « Passer au contenu ». Ce lien permet aux utilisateurs, notamment ceux qui utilisent des technologies d'assistance, d'accéder rapidement au contenu principal de la page, améliorant ainsi l'accessibilité.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
</gcds-header>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `signature-has-link`

L'attribut `signature-has-link` contrôle si la signature de l'en-tête est cliquable et pointe vers Canada.ca. Par défaut, il est défini à `true`, ce qui rend la signature cliquable.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
</gcds-header>
{% endexamplesPreview %}

Lorsqu'il est défini à `false`, la signature s'affiche sans lien.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here" signature-has-link="false">
</gcds-header>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `banner`

L'emplacement `banner` sert à ajouter une bannière en haut de l'en-tête. Utilisez-le pour afficher des alertes à l'échelle du site ou des messages promotionnels.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
  <div slot="banner">Banner slot</div>
</gcds-header>
{% endexamplesPreview %}

#### `breadcrumb`

L'emplacement `breadcrumbs` sert à ajouter un [chemin de navigation]({{links.breadcrumbs}}) sous l'en-tête. Utilisez-le pour indiquer où se trouve l'utilisateur dans le site et comment il y est arrivé.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
  <gcds-breadcrumbs slot="breadcrumb">
    <gcds-breadcrumbs-item href="#">Page d'accueil</gcds-breadcrumbs-item>
    <gcds-breadcrumbs-item href="#">Lien vers la page parent</gcds-breadcrumbs-item>
  </gcds-breadcrumbs>
</gcds-header>
{% endexamplesPreview %}

#### `menu`

L'emplacement `menu` sert à ajouter un menu de navigation sous la ligne de séparation. Par exemple, vous pouvez y placer le composant [top-nav]({{links.topNav}}) pour fournir les liens de navigation principaux du site.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
  <gcds-top-nav label="Top navigation" alignment="right" slot="menu">
    <gcds-nav-link href="#home" slot="home">Notification GC</gcds-nav-link>
    <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
    <gcds-nav-link href="#">Nous joindre</gcds-nav-link>
  </gcds-top-nav>
</gcds-header>
{% endexamplesPreview %}

#### `search`

L'emplacement `search` sert à ajouter un [champ de recherche]({{links.search}}) à l'en-tête. Utilisez-le pour permettre aux utilisateurs de chercher du contenu directement depuis l'en-tête.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
  <gcds-search slot="search"></gcds-search>
</gcds-header>
{% endexamplesPreview %}

#### `signature`

L'emplacement `signature` sert à remplacer la [signature par défaut du gouvernement du Canada]({{links.signature}}). Utilisez-le pour afficher une signature ou un logo personnalisé.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
  <gcds-signature slot="signature"></gcds-signature>
</gcds-header>
{% endexamplesPreview %}

#### `skip-to-nav`

L'emplacement `skip-to-nav` sert à ajouter un lien « Passer au contenu » en haut de l'en-tête. Par défaut, l'en-tête inclut déjà un lien « Passer au contenu principal » dont la cible peut être définie à l'aide de la propriété [`skip-to-href`](/fr/composants/en-tete/code#skiptohref). Utilisez cet emplacement pour ajouter des liens de saut supplémentaires ou un lien « Passer au contenu » personnalisé.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
  <gcds-link href="#main-content" slot="skip-to-nav">
    Passer au contentu principal
  </gcds-link>
</gcds-header>
{% endexamplesPreview %}

#### `toggle`

L'emplacement `toggle` sert à ajouter un bouton de [basculement de langue]({{links.langToggle}}) personnalisé dans l'en-tête. Par défaut, l'en-tête inclut déjà un bouton pour basculer entre l'anglais et le français, dont la cible peut être définie avec la propriété [`lang-href`](/fr/composants/en-tete/code#langhref). Utilisez cet emplacement pour prendre en charge des langues supplémentaires.

{% examplesPreview %}
<gcds-header lang-href="en-url-here" skip-to-href="#id-main-content-here">
  <gcds-lang-toggle href="url-here" slot="toggle">
  </gcds-lang-toggle>
</gcds-header>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-header."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-header--events-properties&lang=fr&externalLinks=true"
  width="1200"
  height="1600"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
