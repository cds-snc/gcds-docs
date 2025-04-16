---
title: Lien
layout: 'layouts/component-documentation.njk'
translationKey: 'linkDesign'
tags: ['linkFR', 'design']
date: 'git Last Modified'
---

## Structure du lien

<ol class="anatomy-list">
  <li>Le <strong>texte du lien</strong> mène à une nouvelle page, à une section de la page actuelle ou à un autre site Web. Le texte indique la destination du lien ou, pour les téléchargements, le type et la taille du fichier. Remarque : L'ouverture de liens dans un nouvel onglet ou une nouvelle fenêtre peut être désorientant et causer des problèmes d'accessibilité. </li>
  <li>
    L'<strong>icône du lien</strong> est liée à certains types de liens, comme les liens de téléchargement, téléphoniques et courriels.
    <ul class="mt-300">
      <li>L'icône de téléchargement, ainsi que le texte du lien de téléchargement, informe une personne que sélectionner le lien déclenchera un téléchargement.</li>
      <li>Le lien téléphonique identifie le numéro de téléphone et le sélectionner déclenche un appel téléphonique.</li>
      <li>Le lien courriel identifie l'adresse courriel et lance un message à partir de l'application de messagerie par défaut.</li>
    </ul>
  </li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-link-anatomy.svg" alt="Une étiquette soulignée pour indiquer qu'il s'agit d'un lien interactif que l'on peut suivre. Une icône avec une flèche pointant vers le bas se trouve à droite du lien." />

## Accessibilité et design des liens

### Rédigez du texte de lien descriptif et précis

- Faites en sorte que le texte du lien soit clair, descriptif et précis pour aider une personne à prévoir où le lien la mènera et ce qu'elle y trouvera.
- Évitez d'utiliser du texte générique ou vague pour les liens, comme « Cliquez ici », « En savoir plus » ou encore « Accueil ».
- Placez l'information la plus importante au début du texte du lien afin de faciliter la lecture pour les personnes utilisant des technologies d'assistance.
- Fournissez dans le texte du lien suffisamment d'information sur son but, plutôt que de vous fier au contexte. Certaines technologies d'assistance présentent les liens de façon distincte.
- Gardez le texte des liens court et précis afin qu'une personne puisse parcourir les liens et trouver ce qu'elle cherche. En règle générale, limitez le texte à 60 caractères et évitez de dépasser 80 caractères.

Conseil : Utilisez des éléments de navigation comme le [chemin de navigation]({{ links.breadcrumbs }}) ou la [barre de navigation supérieure]({{ links.topNav }}) pour qu'une personne puisse revenir à leur emplacement original.

### Limitez le nombre et la densité de liens dans un texte

- Limitez le nombre de liens informatifs dans votre texte. Une surabondance d'information peut augmenter la charge cognitive, et rendre la navigation difficile pour certain·e·s lecteur·rice·s.
- Envisagez de séparer les liens dans une liste ou un autre format lorsque vous devez en partager plusieurs dans une même section. Si les liens sont informatifs, il est possible qu'ils ne soient pas essentiels à la tâche.
- Évitez que les liens ne soient trop denses dans un texte non structuré. Les liens multiples dans un paragraphe interrompent le flux de lecture et peuvent être gênants et répétitifs lorsqu'ils sont interprétés par certaines technologies d'assistance.

### Fournissez des informations pour télécharger des fichiers

- Fournissez dans le texte du lien des renseignements sur le type et la taille des fichiers à télécharger.
- Évitez de placer le lien de téléchargement dans le texte du paragraphe.

### Ajoutez un lien « Passer au contenu »

- Un lien « Passer au contenu » permet à une personne de sauter un ensemble de liens de navigation pour passer au contenu principal.
- Pour éviter de dissimuler le contenu, configurez le lien de manière à ce qu'il pousse le contenu vers le bas et ne flotte pas. Pour la version bureau, placez le lien « Passer au contenu » en haut à gauche de la page afin qu'il n'interrompe pas le flux.

### Évitez les liens externes dans la mesure du possible

- Évitez d'ajouter des liens externes dans les cas suivants :
  - Au milieu de la progression d'une personne, par exemple lorsqu'une personne remplit un formulaire.
  - Si changer de page cause une perte de progression non enregistrée.
  - Si le fait de suivre un lien met fin à un processus entamé, par exemple lorsqu'une personne regarde une vidéo ou effectue une tâche principale.
  - **Lorsqu'un lien est envahissant et perturberait le flux de la page.**
  - Lorsqu'une personne serait surprise de se retrouver ailleurs de manière inattendue.
- Indiquez clairement où mène le lien, afin qu'une personne puisse décider si elle doit quitter la page actuelle.
- Communiquez clairement lorsque les liens sont assortis de conditions particulières. Par exemple, lorsqu'ils sont uniquement accessibles à l'intérieur d'un réseau fermé en raison d'un pare-feu.

### Quand utiliser des boutons plutôt que des liens

- Choisissez des liens pour la plupart des activités de navigation, y compris au sein d'une application, pour les sites externes, pour passer aux éléments d'une page et pour les adresses courriel ou les numéros de téléphone.
- Choisissez des boutons pour les actions qui modifient des données, changent d'état ou lancent des actions, comme l'envoi d'un formulaire, la lecture d'une vidéo ou l'enregistrement.
