---
title: Alerte
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: alertFR
  title: Alerte
  locale: fr
  parent: componentsFR
  otherNames: message, message ciblé.
  description: L’alerte est un message déclenché par un événement qui communique une rétroaction contextuelle sans interrompre la tâche en cours.
  thumbnail: /images/common/components/preview-alert.svg
  alt: Le composant Alerte affiche une boîte bleu clair avec une bordure bleue foncée sur le côté gauche. À côté de la bordure se trouve un « i » dans un cercle qui représente une icône d'information. Sous la bordure se trouvent deux boîtes bleu foncé affichant du texte.
  state: published
translationKey: 'alert'
tags: ['alertFR', 'usage']
permalink: /fr/composants/alerte/
date: 'git Last Modified'
---

Jetez un coup d’œil à ce que font les alertes pour vérifier si elles permettent de résoudre votre problème. Choisissez ensuite le rôle d’alerte le mieux adapté à votre cas d’utilisation.

## Problèmes résolus par les alertes

Utilisez une alerte pour :

- Communiquer des renseignements qui apparaissent dynamiquement à la suite d’un événement, par exemple :
  - une action initiée par une personne, comme soumettre une demande ou enregistrer sa progression.
  - un événement système, comme un rapport prêt à être téléchargé ou un mot de passe sur le point d’expirer.
- Communiquer des renseignements importants ou qui doivent être communiqués rapidement.
- Afficher des messages sans interrompre la tâche en cours.

Évitez d’utiliser une alerte pour les messages qui font déjà partie du contenu de la page dès son chargement. Utilisez plutôt un <gcds-link href="{{ links.notice }}">avis</gcds-link>.

<hr class="mt-600"/>

## Composants connexes

Bannière pour des messages à l’échelle d’un site ou d’un produit.

<gcds-link href="{{ links.errorMessage }}">Message d’erreur</gcds-link> ou <gcds-link href="{{ links.errorSummary }}">résumé des erreurs</gcds-link> pour les erreurs dans des champs de formulaire.

<gcds-link href="{{ links.notice }}">Avis</gcds-link> pour les messages importants faisant partie du contenu de la page.

Boîte de dialogue d’alerte pour les messages qui interrompent la tâche en cours.

<hr class="mt-600"/>

## Rôles de l’alerte

Le rôle de l’alerte modifie l’apparence de l’alerte afin d’indiquer visuellement sa nature. Choisissez le rôle le mieux adapté à votre cas d’utilisation.

### Information

Utilisez le rôle « information » pour :

- Informer les personnes de l’état actuel de leur tâche, de leur accès ou de leur admissibilité.
- Fournir des mises à jour sur l’état d’une tâche ou d’un processus en arrière-plan.
- Communiquer des renseignements contextuels qui aident les personnes à comprendre pourquoi une action n’est pas disponible ou n’est plus nécessaire.
- Informer les personnes de renseignements non critiques qui sont pertinents pour leur tâche ou leur situation actuelle.


<gcds-alert heading="Vous avez déjà une demande en cours" alert-role="info">
  <p>Vous ne pouvez avoir qu’une seule demande en cours à la fois. Terminez ou retirez votre demande en cours avant d’en commencer une autre.</p>
</gcds-alert>

### Succès

Utilisez le rôle « succès » pour :

- Confirmer qu’une action a été réalisée avec succès.
- Informer les personnes qu’un processus ou une tâche qu’elles ont demandé est terminé avec succès.


<gcds-alert heading="Vos modifications ont été enregistrées" alert-role="success">
  <p>Vous pouvez modifier vos préférences en tout temps dans les <a href="#">Paramètres</a>.</p>
</gcds-alert>

### Avertissement

Utilisez le rôle « avertissement » pour :

- Informer les personnes de conditions pouvant avoir une incidence sur leur tâche en cours.
- Expliquer les conséquences possibles de la poursuite d’une action.

<gcds-alert heading="Votre mot de passe expire dans 7 jours" alert-role="warning">
  <p>Changez votre mot de passe pour conserver l’accès à votre compte.</p>
</gcds-alert>

### Danger

Utilisez le rôle « danger » pour :

- Communiquer qu’une action n’a pas pu être réalisée avec succès.
- Expliquer un problème qui empêche une personne de terminer sa tâche en cours.

<gcds-alert heading="Nous n’avons pas pu vérifier votre identité" alert-role="danger">
  <p>Vérifiez vos renseignements et réessayez.</p>
</gcds-alert>
