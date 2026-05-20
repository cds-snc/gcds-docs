---
title: Barre de navigation supérieure
layout: 'layouts/component-documentation.njk'
translationKey: 'topnavigationCode'
tags: ['topnavigationFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de la barre de navigation supérieure](#codage-et-accessibilite-de-la-barre-de-navigation-superieure)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de la barre de navigation supérieure

### Ajoutez la barre de navigation supérieure à chaque page

- Mettez en œuvre la barre de navigation supérieure, de sorte qu'elle soit présente sur toutes les pages.
- Choisissez d'ajouter un groupe de navigation avec un deuxième niveau de navigation en plaçant le `<gcds-nav-link>` dans un `<gcds-nav-group>`.

### Utilisez la barre de navigation supérieure avec d'autres composants.

- Si vous utilisez un composant <gcds-link href="{{ links.breadcrumbs }}">chemin de navigation</gcds-link>, uniformisez la hiérarchie dans les deux ensembles sur le site.
- Si vous utilisez le composant <gcds-link href="{{ links.header }}">en-tête</gcds-link>, ajoutez la barre de navigation supérieure directement dans l'en-tête en insérant un élément enfant à l'aide de l'attribut `slot="menu"` dans l'en-tête. Cela placera la barre de navigation supérieure dans l'en-tête, après la bascule de langue, la signature et la barre de recherche.

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

#### `label`

L'attribut `label` définit le libellé du repère de navigation.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous joindre</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

#### `menu-label` (`gcds-nav-group`)

L'attribut `menu-label` du sous-composant `gcds-nav-group` définit le libellé du sous-menu de navigation.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous joindre</gcds-nav-link>
  <gcds-nav-group menu-label="Fonctionnalités" open-trigger="Fonctionnalités">
    <gcds-nav-link href="#">Personnaliser les messages</gcds-nav-link>
    <gcds-nav-link href="#">Planifier la date et l’heure d’envoi</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `open-trigger` (`gcds-nav-group`)

L'attribut `open-trigger` du sous-composant `gcds-nav-group` définit le libellé du bouton lorsque le sous-menu est réduit.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous joindre</gcds-nav-link>
  <gcds-nav-group menu-label="Fonctionnalités" open-trigger="Fonctionnalités">
    <gcds-nav-link href="#">Personnaliser les messages</gcds-nav-link>
    <gcds-nav-link href="#">Planifier la date et l’heure d’envoi</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `href` (`gcds-nav-link`)

L'attribut `href` du sous-composant gcds-nav-link définit l'URL de la page vers laquelle pointe le lien.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous joindre</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `alignment`

L'attribut `alignment` définit l'alignement de la navigation supérieure. Les options sont :

- `start` (par défaut)
- `end`

<!-- Force line break -->

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav alignment="end" label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous joindre</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

#### `close-trigger` (`gcds-nav-group`)

L'attribut `close-trigger` du sous-composant `gcds-nav-group` définit le libellé du bouton lorsque le sous-menu est développé.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous joindre</gcds-nav-link>
  <gcds-nav-group menu-label="Fonctionnalités" open-trigger="Fonctionnalités" close-trigger="Masquer les fonctionnalités">
    <gcds-nav-link href="#">Personnaliser les messages</gcds-nav-link>
    <gcds-nav-link href="#">Planifier la date et l’heure d’envoi</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `open` (`gcds-nav-group`)

L'attribut `open` du sous-composant `gcds-nav-group` contrôle si le sous-menu est développé ou non. Par défaut, il est défini à `false`.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous joindre</gcds-nav-link>
  <gcds-nav-group menu-label="Fonctionnalités" open-trigger="Fonctionnalités" open>
    <gcds-nav-link href="#">Personnaliser les messages</gcds-nav-link>
    <gcds-nav-link href="#">Planifier la date et l’heure d’envoi</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `current` (`gcds-nav-link`)

L'attribut `current` du sous-composant `gcds-nav-link` indique si la page est la page actuelle ou non.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-link current href="#">Nous joindre</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à ajouter des groupes de navigation et des liens de navigation.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous joindre</gcds-nav-link>
  <gcds-nav-group menu-label="Fonctionnalités" open-trigger="Fonctionnalités">
    <gcds-nav-link href="#">Personnaliser les messages</gcds-nav-link>
    <gcds-nav-link href="#">Planifier la date et l’heure d’envoi</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `home`

L'emplacement `home` sert à ajouter le lien de la page d'accueil ou le titre du site.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-link href="#" slot="home">Notification GC</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

#### `default` (`gcds-nav-group`)

L'emplacement par défaut du sous-composant `gcds-nav-group` sert à ajouter la liste des liens de navigation.

{% examplesPreview "120", "", "fr" %}
<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure">
  <gcds-nav-group menu-label="Fonctionnalités" open-trigger="Fonctionnalités">
    <gcds-nav-link href="#">Personnaliser les messages</gcds-nav-link>
    <gcds-nav-link href="#">Planifier la date et l’heure d’envoi</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `default` (`gcds-nav-link`)

L'emplacement par défaut du sous-composant `gcds-nav-link` sert à ajouter le contenu du lien de navigation.

{% examplesPreview "120", "", "fr" %}
<gcds-nav-link href="#">Notification GC</gcds-nav-link>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-top-nav."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-top-navigation--events-properties&lang=fr"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
