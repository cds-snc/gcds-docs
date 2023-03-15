---
title: Home
layout: "layouts/home.njk"
permalink: /fr/
translationKey: "index"
date: "git Last Modified"
---

<h2 class="py-450">Bienvenue dans votre système de design</h2>

<article class="py-500 bg-dark bg-full-width">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" gap="450">
    <li class="list-none md:mb-0 mb-500">
      <img class="mb-400" src="../../images/common/home/icon-design.svg" alt="" />
      <h3 class="mb-400">Concevoir des expériences</h3>
      <p class="mb-400">Visitez notre bibliothèque Figma pour explorer nos ressources de conception.</p>
      <a class="link-inherit" href="{{ links.figma }}" target="_blank">
        Commencer à concevoir
        <gcds-icon name="external-link" label="S'ouvre dans un nouvel onglet." margin-left="50" />
      </a>
    </li>
    <li class="list-none">
      <img class="mb-400" src="../../images/common/home/icon-develop.svg" alt="" />
      <h3 class="mb-400">Développer des produits</h3>
      <p class="mb-400">Installez l'ensemble de composants.</p>
      <a class="link-inherit" href="{{ links.installation }}">Commencer à développer</a>
    </li>
  </gcds-grid>
</article>

<article class="py-450">
  <h2 class="mb-400">Un système de design rien que pour vous</h2>
  <p class="mb-500">Explorez notre outil de conception. <a class="link-default" href="/fr/contactez/">Donnez-nous votre avis</a>.</p>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr" gap="450">
    <li class="list-none">
      <img class="mb-200" src="../../images/common/home/icon-components.svg" alt="" />
      <h3 class="mb-400">Composants</h3>
      <p class="mb-400">Les blocs de construction de l'interface utilisateur servent différents objectifs.</p>
      <p class="mb-400">Sélectionnez du code réutilisable pour les composants courants et obtenez des conseils relatifs aux meilleures pratiques pour l'infrastructure que vous utilisez.</p>
      <a class="link-default" href="{{ links.components }}">Découvrez les composants</a>
    </li>
    <li class="list-none">
      <img class="mb-200" src="../../images/common/home/icon-patterns.svg" alt="" />
      <h3 class="mb-400">Configurations</h3>
      <p class="mb-400">Des conseils pour associer les composants afin de résoudre un problème et d'améliorer votre service.</p>
      <p class="mb-400">Commencez à concevoir des produits pour le GC et découvrez comment les mots et les interactions s'associent pour créer du sens.</p>
      <p>Développement en cours</p>
    </li>
    <li class="list-none">
      <img class="mb-200" src="../../images/common/home/icon-tokens.svg" alt="" />
      <h3 class="mb-400">Unités de style</h3>
      <p class="mb-400">Des décisions en matière d'image de marque et de conception directement intégrées dans le code.</p>
      <p class="mb-400">Découvrez comment les décisions encodées façonnent la conception des services offerts par le gouvernement du Canada et permettent d'offrir une expérience visuelle uniforme.</p>
      <a class="link-default" href="{{ links.foundations }}">Découvrez les unités de style</a>
    </li>
  </gcds-grid>
</article>

<article class="py-500 bg-light bg-full-width">
  <h2 class="mb-400">Nouveautés</h2>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr" gap="450">
    <li class="list-none bg-white px-250 py-450 radius-xs">
      <h3 class="mb-400"><a class="link-inherit" href="{{ links.releaseNotes }}">Notes de publication</a></h3>
      <p>Les derniers ajouts.</p>
    </li>
    <li class="list-none bg-white px-250 py-450 radius-xs">
      <h3 class="mb-400"><a class="link-inherit" href="{{ links.comingSoon }}">Prochainement</a></h3>
      <p>Ce sur quoi nous travaillons.</p>
    </li>
  </gcds-grid>
</article>

<article class="py-450">
  <h2 class="mb-400">Composant vedette</h2>
  <h3 class="mb-400">Jeu de champs</h3>
  <p class="mb-450">Le jeu de champs permet aux utilisateur·rice·s de percevoir un groupe d'éléments de formulaire connexes. Les éléments ainsi groupés, soit de façon logique et accessible, sont plus faciles à utiliser et comprendre.</p>
  <img class="mb-450" src="../../images/common/components/preview-fieldset.svg" alt="UI preview of fieldset component using an input and a select field." alt="Un aperçu du composant jeu de champ qui montre une suite de plusieurs éléments. Une boîte grise foncée représentant le titre du groupe suivi d'une boîte grise représentant du texte. On voit ensuite une boîte de texte vide avec le curseur à l'intérieur suivi d'une boîte grise représentatn du texte et une boîte de sélection avec une boîte grise à l'intérieur représentant du texte." />
  <a href="{{ links.fieldset }}" class="d-block link-default">En savoir plus sur le jeu de champs</a>
</article>
