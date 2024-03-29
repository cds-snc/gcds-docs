---
title: Carte
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: cardFR
  title: Carte
  locale: fr
  parent: componentsFR
  otherNames: tuile, carte de contenu.
  description: Un encadré contenant du contenu structuré et exploitable sur un sujet unique.
  thumbnail: /images/common/components/preview-card.svg
  alt: Le composant Carte montre un encadré contenant une image rectangulaire dans la moitié supérieure. Juste en dessous se trouve une barre bleue rectangulaire occupant les trois quarts de la largeur de l'encadré et représentant le titre de la carte. Encore en dessous, deux barres grises plus longues l'une au-dessus de l'autre représentent respectivement la zone consacrée au contexte et la zone consacrée aux métadonnées.
  state: published
translationKey: 'card'
tags: ['cardFR', 'usage']
permalink: /fr/composants/carte/
date: 'git Last Modified'
---

Examinez les cas d'utilisation des cartes pour déterminer si elles répondent à vos besoins.

## Problèmes résolus par les cartes

Les cartes permettent d'organiser des renseignements relatifs à un même sujet dans une boîte fixe ayant la forme d'une carte à jouer.

Utilisez une carte aux fins suivantes :

- Regrouper de petits éléments informatifs en un seul élément.
- Présenter des aperçus et résumés permettant d'obtenir davantage de renseignements ailleurs.
- Encourager la découverte de contenu en créant des éléments visuellement intéressants pour le lectorat.

Remarque : Pour Canada.ca, évitez d'utiliser des cartes au lieu des éléments de navigation thématique indiqués dans les gabarits pour la page d'accueil et les pages consacrées au thème et au sujet.

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">
  <h2 class="mt-0 mb-400">Composants connexes</h2>

<a href="{{ links.details }}" class="link-light">Détails</a> pour dissimuler des renseignements secondaires qu'une personne peut développer sur la même page.

<a href="{{ links.container }}" class="link-light">Boîte</a> pour des affichages simples à largeur définie.

</article>

## Types de composants

### Carte « Lien »

{% componentPreview "Aperçu de carte « Lien »" "px-300 py-400" "my-400" %}
<gcds-card card-title="Titre de la carte" tag="Balise" href="#" description="Description destinée à accompagner le titre. Les textes plus longs seront tronqués avec ...">

  <div slot="footer">Infos contextuelles • metadonnées</div>
</gcds-card>
{% endcomponentPreview %}

<p class="mb-400">Utilisez la carte « Lien » aux fins suivantes :</p>
<ul class="list-disc mb-400">
  <li>Structurer des renseignements relatifs à un même thème pour offrir au lectorat davantage de détails de manière progressive.</li>
  <li>Inclure un lien permettant d'accéder à davantage d'informations. Ajouter un lien rendant l'ensemble de la carte interactive et cliquable.</li>
  <li>Offrir une large cible cliquable permettant d'accéder à d'autres renseignements.</li>
</ul>

### Carte « Action »

{% componentPreview "Aperçu de carte « Action »" "px-300 py-400" "my-400" %}
<gcds-card card-title="Titre de la carte" href="#" type="action" tag="Balise" description="Description destinée à accompagner le titre. Les textes plus longs seront tronqués avec ..." img-alt="#">

  <div slot="footer">
    <gcds-button>Libellé du bouton</gcds-button>
  </div>
</gcds-card>
{% endcomponentPreview %}

<p class="mb-400">Utilisez la carte « Action » aux fins suivantes :</p>
<ul class="list-disc mb-400">
  <li>Regrouper des renseignements permettant d'accomplir une tâche. La carte action compte un bouton dans le pied de page. </li>
  <li>Souligner une action immédiate que peut entreprendre la personne à l'aide du bouton.</li>
  <li>Offrir à une personne la possibilité d'en savoir plus en sélectionnant le titre avant de passer à l'action.</li>
</ul>
<p>Remarque : Dans la carte « Action », seuls le lien du titre et le bouton sont interactifs. Le bouton est consacré à une action spécifique.</p>
