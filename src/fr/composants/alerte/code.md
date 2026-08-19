---
title: Alerte
layout: 'layouts/component-documentation.njk'
translationKey: 'alertCode'
tags: ['alertFR', 'code']
date: 'git Last Modified'
nocrawl: true
---

## Sur cette page

- [Codage et accessibilité des alertes](#codage-et-accessibilite-des-alertes)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des alertes

### Définissez le rôle de l’alerte

Utilisez l’attribut `alert-role` pour définir le rôle de l’alerte comme information, succès, avertissement ou danger. Ce choix détermine l’apparence visuelle de l’alerte et communique aux personnes le degré d’importance ou d’urgence du message.

### Définissez le titre de l’alerte

Utilisez l’attribut `heading` pour créer un titre clair et informatif. Assurez-vous que le titre exprime clairement l’objectif du message.


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

#### `heading`

Utilisez `heading` pour définir le titre de l’alerte.

{% examplesPreview "250" %}
<gcds-alert heading="Vous avez déjà une demande en cours">
</gcds-alert>
{% endexamplesPreview %}


<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}


#### `alert-role`

Utilisez `alert-role` pour définir le style de l’alerte. Choisissez l’une des valeurs suivantes :

- `info`
- `success`
- `warning`
- `danger`
  
<!-- Force line break -->

{% examplesPreview "250" %}
<gcds-alert heading="Vos modifications ont été enregistrées" alert-role="success">
</gcds-alert>
{% endexamplesPreview %}

#### `container`

Utilisez `container` pour définir la largeur du conteneur du contenu de l’alerte.

{% examplesPreview "250" %}
<gcds-alert heading="Vous avez déjà une demande en cours" container="sm">
</gcds-alert>
{% endexamplesPreview %}


#### `hide-close-btn`

Définissez `hide-close-btn` à `true` pour masquer le bouton de fermeture. Par défaut, sa valeur est `false`, ce qui affiche le bouton de fermeture.

{% examplesPreview "250" %}
<gcds-alert heading="Vous avez déjà une demande en cours" hide-close-btn>
</gcds-alert>
{% endexamplesPreview %}


#### `hide-role-icon`

Définissez `hide-role-icon` à `true` pour masquer l’icône associée au rôle de l’alerte. Par défaut, sa valeur est `false`, ce qui affiche l’icône.

{% examplesPreview "250" %}
<gcds-alert heading="Vous avez déjà une demande en cours" hide-role-icon>
</gcds-alert>
{% endexamplesPreview %}

#### `is-fixed`

Définissez `is-fixed` à `true` pour fixer l’alerte en haut de la page. Par défaut, sa valeur est `false`.

{% examplesPreview "250" %}
<gcds-alert heading="Vous avez déjà une demande en cours" is-fixed>
</gcds-alert>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

### `default`

Utilisez l’emplacement par défaut pour ajouter tout type de contenu au message de l’alerte, comme du texte, des liens ou des boutons.

{% examplesPreview "300" %}
<gcds-alert heading="Vous avez déjà une demande en cours">
  <p>Message.</p>
</gcds-alert>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-alert."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-alert--events-properties&lang=en"
  width="1200"
  height="1500"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>

