---
title: Accueil
layout: 'layouts/home.njk'
permalink: /fr/
translationKey: 'index'
date: 'git Last Modified'
---

<h2 class="my-450">Commencez à utiliser Système de design GC</h2>

<article class="py-600">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr">
    <li class="list-none md:mb-0 mb-600">
      <img class="mb-300" src="../../images/common/home/icon-design.svg" alt="" />
      <h3 class="mt-0">Concevoir des expériences</h3>
      <p>Explorez les ressources de conception dans notre bibliothèque Figma.</p>
      <a href="{{ links.startToUseDesignSection }}">
        Commencer à concevoir
      </a>
    </li>
    <li class="list-none">
      <img class="mb-300" src="../../images/common/home/icon-develop.svg" alt="" />
      <h3 class="mt-0">Développer des produits</h3>
      <p>Installez l'ensemble de composants.</p>
      <a href="{{ links.startToUseDevelopSection }}">Commencer à développer</a>
    </li>
  </gcds-grid>
</article>

<article class="pb-600">
  <h2>Un système de design rien que pour vous</h2>
  <p class="mb-600">Explorez notre outil de conception. <gcds-link href="{{ links.contact }}">Donnez-nous votre avis</gcds-link>.</p>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr">
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-components.svg" alt="" />
      <h3 class="mt-0">Composants</h3>
      <p>Les blocs de construction de l'interface utilisateur servent différents objectifs.</p>
      <p>Sélectionnez du code réutilisable pour les composants courants et obtenez des conseils relatifs aux meilleures pratiques pour l'infrastructure que vous utilisez.</p>
      <gcds-link href="{{ links.components }}">Découvrez les composants</gcds-link>
    </li>
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-template.svg" alt="" />
      <h3 class="mt-0">Modèles de page</h3>
      <p>Les mises en page réutilisables sont des agencements de composants propres à des types de page communs.</p>
      <p>Entamez votre projet à l'aide de pages de base préfabriquées pour offrir une expérience Canada.ca uniforme et reconnaissable.</p>
      <gcds-link href="{{ links.pageTemplates }}">Découvrez les modèle des page</gcds-link>
    </li>
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-tokens.svg" alt="" />
      <h3 class="mt-0">Unités de style</h3>
      <p>Des décisions en matière d'image de marque et de conception directement intégrées dans le code.</p>
      <p>Découvrez comment les décisions encodées façonnent la conception des services offerts par le gouvernement du Canada et permettent d'offrir une expérience visuelle uniforme.</p>
      <gcds-link href="{{ links.styles }}">Découvrez les unités de style</gcds-link>
    </li>
  </gcds-grid>
</article>

<article class="py-600">
  <h2 class="mt-0">Nouveautés</h2>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr">
    <gcds-card
      href="{{ links.shortcuts }}"
      card-title="Appliquer des styles avec les Raccourcis CSS "
      card-title-tag="h3"
      description="Ajoutez des raccourcis de style CSS pour Système de design GC à votre code personnalisé."
      role="listitem"
    ></gcds-card>
    <gcds-card
      href="{{ links.accessibility }}"
      card-title="S'informer sur l'accessibilité"
      card-title-tag="h3"
      description="Passez en revue les pratiques et les examens en matière d'accessibilité au sein du système de design."
      role="listitem"
    ></gcds-card>
    <gcds-card
      href="{{ links.registerDemo }}"
      card-title="Participer à une démo"
      card-title-tag="h3"
      description="Découvrir comment Système de design GC peut fonctionner pour vous et votre équipe."
      role="listitem"
    ></gcds-card>
    <gcds-card
      href="{{ links.releaseNotes }}"
      card-title="Découvrir les dernières versions"
      card-title-tag="h3"
      description="Découvrez les derniers ajouts et les nouvelles fonctionnalités."
      role="listitem"
    ></gcds-card>
  </gcds-grid>
</article>

<article class="pb-600">
  <h2>Composant vedette</h2>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr">
    <gcds-card
      href="{{ links.notice }}"
      card-title="Avis"
      card-title-tag="h3"
      img-src="/images/common/components/preview-notice.svg"
      img-alt="Une ligne bleue verticale tronquée par un cercle bleu, représentant la ligne guide et l'icône, se situe à gauche de deux épaisses lignes grises pâle alignées sous une ligne grise foncée représentant un titres et des lignes de texte."
      description="L'avis est un composant permettant de communiquer des mises à jour, des avertissements et des confirmations concernant la tâche principale relative à la page ou au service. C'est un message court et bien visible qui fait partie du contenu de la page."
      role="listitem"
    ></gcds-card>
    <gcds-card
      href="{{ links.card }}"
      card-title="Carte"
      card-title-tag="h3"
      img-src="/images/common/components/preview-card.svg"
      img-alt="Le composant Carte montre un encadré contenant une image rectangulaire dans la moitié supérieure. Juste en dessous se trouve une barre bleue rectangulaire occupant les trois quarts de la largeur de l'encadré et représentant le titre de la carte. Encore en dessous, deux barres grises plus longues l'une au-dessus de l'autre représentent respectivement la zone consacrée au contexte et la zone consacrée aux métadonnées."
      description="La carte est un composant de navigation pouvant être utilisé à la place d'un bouton ou d'un lien pour mettre en avant l'action la plus importante. C'est un encadré contenant du contenu structuré et pratique sur un sujet unique."
      role="listitem"
    ></gcds-card>
  </gcds-grid>
</article>
