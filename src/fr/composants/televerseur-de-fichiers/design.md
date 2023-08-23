---
title: Téléverseur de fichiers
layout: "layouts/component-documentation.njk"
translationKey: "fileuploaderDesign"
tags: ['fileuploaderFR', 'design']
date: "git Last Modified"
---

## Structure du téléverseur de fichiers

<ol class="anatomy-list">
  <li>Le <strong>libellé</strong> fournit les instructions sur le composant.</li>
  <li>Le <strong>texte explicatif</strong> indique les types de fichiers acceptés et toute autre exigence, comme la taille maximum des fichiers.</li>
  <li>Le <strong>bouton</strong> lance l'interface pour la sélection des fichiers.</li>
  <li>L'<strong>élément de la liste des fichiers</strong> est une boîte affichant le fichier téléversé.</li>
  <li>Le <strong>nom du fichier</strong> affiche le nom du fichier qui a été ajouté.</li>
  <li>Le bouton <strong>supprimer</strong> permet de supprimer un fichier téléversé avant la soumission.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-file-uploader-anatomy.svg" alt="Une image de la structure du composant téléverseur de fichiers." />

## Design et accessibilité du téléverseur de fichiers

### Rédigez des libellés et des textes explicatifs clairs

- Utilisez le libellé de champ pour formuler des attentes claires sur le type de fichier qu'une personne peut ou doit télécharger.
- Utilisez le texte explicatif pour préciser toute limite de téléversement.
