---
title: Aperçu du composant de barre de navigation supérieure
layout: 'layouts/component-preview.njk'
tags: ['topnavigationFR', 'preview']
eleventyExcludeFromCollections: true
templateEngineOverride: njk
---

<gcds-top-nav label="Aperçu du composant de barre de navigation supérieure" alignment="end" lang="fr">
  <gcds-nav-link href="#red" slot="home">Notification GC</gcds-nav-link>
  <gcds-nav-link href="#red">Pourquoi Notification GC</gcds-nav-link>
  <gcds-nav-group menu-label="Fonctionnalités"  open-trigger="Fonctionnalités">
    <gcds-nav-link href="#red" current>Créer des gabarits réutilisables</gcds-nav-link>
    <gcds-nav-link href="#red">Personnaliser les messages</gcds-nav-link>
    <gcds-nav-link href="#red">Planifier la date et l’heure d’envoi</gcds-nav-link>
    <gcds-nav-link href="#red">Envoyer des messages automatiquement</gcds-nav-link>
  </gcds-nav-group>
  <gcds-nav-link href="#red">Nous joindre</gcds-nav-link>
</gcds-top-nav>
