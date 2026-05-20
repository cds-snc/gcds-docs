---
title: Barre de navigation latérale
layout: 'layouts/component-documentation.njk'
translationKey: 'sidenavigationCode'
tags: ['sidenavigationFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de la barre de navigation latérale](#codage-et-accessibilite-de-la-barre-de-navigation-laterale)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de la barre de navigation latérale

### Placez la barre de navigation latérale dans votre mise en page

Mettez en œuvre la barre de navigation latérale, de sorte qu’elle soit présente sur toutes les pages.

### Utilisez la barre de navigation latérale avec d’autres composants

Si vous utilisez un composant Chemin de navigation, uniformisez la hiérarchie dans les deux ensembles de liens afin que chaque composant reflète le même cheminement sur le site.

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
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-link href="#" slot="home">Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous contacter</gcds-nav-link>
</gcds-side-nav>
{% endexamplesPreview %}

#### `menu-label` (`gcds-nav-group`)

L'attribut `menu-label` du sous-composant `gcds-nav-group` définit le libellé du sous-menu de navigation.

{% examplesPreview "120", "", "fr" %}
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-link href="#" slot="home">Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous contacter</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features">
    <gcds-nav-link href="#">Révisez dans les deux langues officielles côte à côte</gcds-nav-link>
    <gcds-nav-link href="#">Obtenez les réponses aux formulaires en toute sécurité</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `open-trigger` (`gcds-nav-group`)

L'attribut `open-trigger` du sous-composant `gcds-nav-group` définit le libellé du bouton lorsque le sous-menu est réduit.

{% examplesPreview "120", "", "fr" %}
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-link href="#" slot="home">Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous contacter</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features">
    <gcds-nav-link href="#">Révisez dans les deux langues officielles côte à côte</gcds-nav-link>
    <gcds-nav-link href="#">Obtenez les réponses aux formulaires en toute sécurité</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `href` (`gcds-nav-link`)

L'attribut `href` du sous-composant gcds-nav-link définit l'URL de la page vers laquelle pointe le lien.

{% examplesPreview "120", "", "fr" %}
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-link href="#" slot="home">Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous contacter</gcds-nav-link>
</gcds-side-nav>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `close-trigger` (`gcds-nav-group`)

L'attribut `close-trigger` du sous-composant `gcds-nav-group` définit le libellé du bouton lorsque le sous-menu est développé.

{% examplesPreview "120", "", "fr" %}
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-link href="#" slot="home">Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous contacter</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features" close-trigger="Close Features">
    <gcds-nav-link href="#">Révisez dans les deux langues officielles côte à côte</gcds-nav-link>
    <gcds-nav-link href="#">Obtenez les réponses aux formulaires en toute sécurité</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `open` (`gcds-nav-group`)

L'attribut `open` du sous-composant `gcds-nav-group` contrôle si le sous-menu est développé ou non. Par défaut, il est défini à `false`.

{% examplesPreview "120", "", "fr" %}
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-link href="#" slot="home">Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous contacter</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features" open>
    <gcds-nav-link href="#">Révisez dans les deux langues officielles côte à côte</gcds-nav-link>
    <gcds-nav-link href="#">Obtenez les réponses aux formulaires en toute sécurité</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `current` (`gcds-nav-link`)

L'attribut `current` du sous-composant `gcds-nav-link` indique si la page est la page actuelle ou non.

{% examplesPreview "120", "", "fr" %}
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-link href="#" slot="home">Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Formulaires GC</gcds-nav-link>
  <gcds-nav-link current href="#">Nous contacter</gcds-nav-link>
</gcds-side-nav>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à ajouter des groupes de navigation et des liens de navigation.

{% examplesPreview "120", "", "fr" %}
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-link href="#" slot="home">Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Pourquoi Formulaires GC</gcds-nav-link>
  <gcds-nav-link href="#">Nous contacter</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features">
    <gcds-nav-link href="#">Révisez dans les deux langues officielles côte à côte</gcds-nav-link>
    <gcds-nav-link href="#">Obtenez les réponses aux formulaires en toute sécurité</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `home`

L'emplacement `home` sert à ajouter le lien de la page d'accueil ou le titre du site.

{% examplesPreview "120", "", "fr" %}
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-link href="#" slot="home">Formulaires GC</gcds-nav-link>
</gcds-side-nav>
{% endexamplesPreview %}

#### `default` (`gcds-nav-group`)

L'emplacement par défaut du sous-composant `gcds-nav-group` sert à ajouter la liste des liens de navigation.

{% examplesPreview "120", "", "fr" %}
<gcds-side-nav label="Aperçu du composant de barre de navigation latérale">
  <gcds-nav-group menu-label="Features" open-trigger="Features">
    <gcds-nav-link href="#">Révisez dans les deux langues officielles côte à côte</gcds-nav-link>
    <gcds-nav-link href="#">Obtenez les réponses aux formulaires en toute sécurité</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `default` (`gcds-nav-link`)

L'emplacement par défaut du sous-composant `gcds-nav-link` sert à ajouter le contenu du lien de navigation.

{% examplesPreview "120", "", "fr" %}
<gcds-nav-link href="#">Formulaires GC</gcds-nav-link>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-side-nav."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-side-navigation--events-properties&lang=fr"
  width="1200"
  height="1800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
