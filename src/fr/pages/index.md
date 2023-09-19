---
title: Home
layout: 'layouts/home.njk'
permalink: /fr/
translationKey: 'index'
date: 'git Last Modified'
---

<h2 class="py-450">Bienvenue dans votre système de design</h2>

<article class="py-500 bg-primary text-light bg-full-width">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" gap="450">
    <li class="list-none md:mb-0 mb-500">
      <img class="mb-400" src="../../images/common/home/icon-design.svg" alt="" />
      <h3 class="mb-400">Concevoir des expériences</h3>
      <p class="mb-400">Visitez notre bibliothèque Figma pour explorer nos ressources de conception.</p>
      <a class="link-light" href="{{ links.figma }}" target="_blank">
        Commencer à concevoir
        <gcds-icon name="external-link" label="S'ouvre dans un nouvel onglet." margin-left="50" />
      </a>
    </li>
    <li class="list-none">
      <img class="mb-400" src="../../images/common/home/icon-develop.svg" alt="" />
      <h3 class="mb-400">Développer des produits</h3>
      <p class="mb-400">Installez l'ensemble de composants.</p>
      <a class="link-light" href="{{ links.installation }}">Commencer à développer</a>
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
    <li class="list-none bg-white px-250 py-450 b-radius-md">
      <h3 class="mb-400"><a class="link-inherit" href="{{ links.releaseNotes }}" target="_blank">Notes de publication <gcds-icon name="external-link" label="Opens in a new tab." margin-left="50" /></a></h3></a></h3>
      <p>Les derniers ajouts.</p>
    </li>
    <li class="list-none bg-white px-250 py-450 b-radius-md">
      <h3 class="mb-400"><a class="link-inherit" href="{{ links.comingSoon }}">Prochainement</a></h3>
      <p>Ce sur quoi nous travaillons.</p>
    </li>
  </gcds-grid>
</article>

<article class="py-450">
  <h2 class="mb-400">Composant vedette</h2>
  <h3 class="mb-400">Barre de navigation supérieure</h3>
  <p class="mb-450">Une barre de navigation supérieure est une liste horizontale de liens de page. Utilisez une barre de navigation supérieure pour aider une personne à se repérer sur votre page Web ou site Web.</p>
  <img class="d-block mb-450" src="../../images/common/components/preview-top-nav.svg" alt="Un aperçu du composant barre de navigation supérieure qui montre la navigation du site représentée par des boîtes grises alignés horizontalement. Une boîte bleue suivi de deux boîtes grises représentent les liens où la dernière boîte est surlignée afin de représenter le lien actif." />
  <a href="{{ links.topNav }}">En savoir plus sur la barre de navigation supérieure</a>
</article>
