---
title: Avis
layout: "layouts/component-documentation.njk"
eleventyNavigation:
  key: noticeFR
  title: Avis
  locale: fr
  parent: componentsFR
  otherNames: Alerte contextuelle
  description: Un message court et bien visible qui fait partie du contenu de la page
  thumbnail: /images/common/components/preview-notice.svg
  alt: Une ligne bleue verticale tronquée par un cercle bleu, représentant la ligne guide et l’icône, se situe à gauche de deux épaisses lignes grises pâle alignées sous une ligne grise foncée représentant un titres et des lignes de texte.
  state: published
translationKey: "notice"
tags: ['noticeFR', 'usage']
permalink: /fr/composants/avis/
date: "git Last Modified"
---

## Problèmes résolus par les avis

Utilisez les avis pour :

- Communiquer des mises à jour, des avertissements et des confirmations concernant les tâches d’une page ou concernant une activité ou un évènement pouvant affecter les personnes utilisant le service.
- Mettre en avant des messages clés au sein du contenu d’une page, grâce à une utilisation modérée.
- Fournir du contexte ou des renseignements supplémentaires concernant le contenu de la page pour une meilleure compréhension.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0 mb-300">Composants connexes</h2>

<a href="{{ links.errorMessage }}" class="link-light">Message d’erreur</a> ou <a href="{{ links.errorSummary }}" class="link-light">résumé des erreurs</a> pour des erreurs au sein d’un champ de formulaire, d’une page ou d’un flux. 
 
Bannière pour un message s’appliquant à une partie ou à l’ensemble du site ou du produit.  

</article>

## Types d’avis

Définissez le type d’avis selon le contexte du message et l’apparence visuelle correspondante.

### Information

Utilisez le type d’avis « Information » pour :

- Fournir des renseignements supplémentaires pour mieux faire comprendre au lectorat le contenu environnant.
- Offrir des conseils ou davantage de contexte pour aider le lectorat à réaliser les principales tâches de la page.
- Communiquer des renseignements non essentiels importants pour la réalisation de la tâche qu’une personne pourrait chercher à accomplir.

<gcds-notice
  notice-title="État actuel de l’appel de candidatures : Fermé"
  notice-title-tag="h4"
  type="info"
>
  <gcds-text margin-bottom="0">Nous vous remercions de votre intérêt à l’égard du programme Emplois d’été Canada. L’appel de candidatures est maintenant fermé.</gcds-text>
</gcds-notice>

### Succès

Utilisez le type d’avis « Succès » pour :

- Indiquer la réussite d’une tâche.
- Renforcer les résultats positifs ou les confirmations au sein du contenu.

<gcds-notice
  notice-title="Votre demande de données accessibles au public à partir de la liste des organismes de bienfaisance a été acceptée."
  notice-title-tag="h4"
  type="success"
>
  <gcds-text margin-bottom="0">Le traitement de votre demande peut prendre jusqu’à quatre (4) semaines. Nous communiquerons avec vous si nous avons besoin de plus amples renseignements.</gcds-text>
</gcds-notice>

### Avertissement

Utilisez les avis de type « Avertissement » pour :

- Avertir les gens de problèmes ou de considérations dans des cas où il n’est pas nécessaire d’agir immédiatement.
- Informer les gens de changements, de modifications apportées aux services ou d’autres mises à jour importantes, mais non critiques.
- Attirer l’attention sur des renseignements concernant de futurs changements ou sur des répercussions possibles sur la santé, la sécurité et les lois.

<gcds-notice
  notice-title="Modifications aux lois sur la conduite avec facultés affaiblies et la criminalité liée au cannabis"
  notice-title-tag="h4"
  type="warning"
>
  <gcds-text margin-bottom="0">Les nouvelles peines pour conduite avec facultés affaiblies et infractions liées au cannabis pourraient avoir une incidence sur votre statut d’immigrant au Canada. Si vous commettez l’un de ces crimes, vous ne pourrez peut-être pas venir au Canada ou y rester.</gcds-text>
</gcds-notice>

### Danger

Utilisez le type d’avis « Danger » pour :

- Mettre en évidence du contenu dont les gens doivent prendre connaissance compte tenu de sa gravité, sous peine de s’exposer à des incidences négatives majeures.
- Mettre l’accent sur une question ou des nouvelles ayant de graves répercussions dans les domaines de la santé, de la sécurité et de la loi. Inclure un lien vers les renseignements les plus récents.  
- Signaler à une personne qu’elle doit agir immédiatement et lui donner les moyens de le faire, par exemple en lui fournissant un lien.

<gcds-notice
  notice-title="Si vous êtes enceinte ou envisagez de concevoir un enfant – Avis concernant les deux partenaires"
  notice-title-tag="h4"
  type="danger"
>
  <gcds-text margin-bottom="0">Évitez de voyager au Costa Rica si vous êtes enceinte ou prévoyez de concevoir un enfant au cours des trois prochains mois.</gcds-text>
</gcds-notice>
