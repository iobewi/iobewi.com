---
title: "Open Source"
description: "Contributions et travaux open source d'IOBEWI autour de ROS 2, micro-ROS et des systèmes embarqués."
layout: layouts/base.njk
permalink: "/ressources/open-source/"
bodyClass: "has-hero"
breadcrumb:
  - label: "Accueil"
    url: "/"
  - label: "Ressources"
    url: "/ressources/"
  - label: "Open Source"
    url: "/ressources/open-source/"
---

<div class="page-hero snap-item">
<div class="container">
<div class="page-hero-content">
<p class="eyebrow"><a href="/ressources/">← Ressources</a></p>
<h1>Contributions et travaux open source</h1>
<p class="lead">IOBEWI publie des briques open source issues de contraintes réelles : drivers, bibliothèques et patterns d’intégration pensés pour rester lisibles, testables et maintenables dans la durée.</p>
</div>
</div>
</div>

<section class="section container snap-item">
<p class="eyebrow">Open source comme cadre d’expérimentation structuré</p>

<div class="lead" style="max-width: 72ch;">
  <p>Chaque contribution vise à clarifier une interface, stabiliser un découpage ou formaliser un pattern d’intégration.</p>
  <p>
    L’objectif n’est pas de livrer un produit fini,
    mais de produire des briques reproductibles
    servant de base saine à des architectures embarquées complexes.
  </p>
</div>
<div class="grid animate-on-scroll slide-up" style="margin-top: var(--stack-3);" id="projects-grid">
<!-- Tuiles générées dynamiquement depuis /assets/data/open-source-projects.json -->
</div>
<div class="modal" id="modal" aria-hidden="true">
<div class="modal-backdrop" data-modal-close></div>
<div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
<div class="modal-header">
<button class="modal-close" type="button" aria-label="Fermer" data-modal-close>
<span class="close-icon">
<span></span>
<span></span>
<span></span>
</span>
</button>
</div>
<div class="modal-content" id="modal-content">
<h2 id="modal-title">Titre</h2>
<p class="lead">Description</p>
</div>
</div>
</div>

<p class="eyebrow" style="margin-top: var(--stack-4);" >Méthodologie de contribution</p>
<p class="lead" style="margin-bottom: var(--stack-2);">Clarifier les responsabilités, stabiliser les interfaces, documenter les décisions, livrer des exemples reproductibles.</p>

<div class="card card--note card--split">
<div class="card-split-col">
<p class="card-eyebrow">Principes</p>
<ul class="card-bullets">
<li>Publier des briques ciblées (drivers, librairies, middleware), pas des démonstrations isolées</li>
<li>Stabiliser les interfaces avant d’ajouter des fonctionnalités</li>
<li>Documenter les choix d’architecture, les contraintes et les limites connues</li>
<li>Fournir des exemples reproductibles et un minimum de validation</li>
<li>Maintenir une traçabilité claire (versions, évolutions, breaking changes)</li>
</ul>
</div>

<div class="card-split-col">
<p class="card-eyebrow">Bénéfices</p>
<ul class="card-bullets">
<li>Réduction de la dette technique via des briques éprouvées</li>
<li>Validation des choix par retours terrain et pairs</li>
<li>Accélération de l’intégration dans des architectures réelles</li>
<li>Capitalisation durable au service des projets accompagnés</li>
</ul>
</div>
</div>
</section>

<section class="section container section-major snap-item">
<div class="cta-block animate-on-scroll scale-in">
<h2>Échanger autour d’une contribution ou d’un besoin similaire</h2>
<p><strong>Ces briques montrent une capacité à structurer, documenter et faire évoluer des composants techniques sans perte de cohérence.</strong></p>
<div class="btn-wrapper animate-on-scroll fade-in delay-300">
<a class="btn btn-primary" href="/contact/">Discuter de votre contexte</a>
</div>
</div>
</section>

<script src="/assets/js/modal.js"></script>
<script>
// Initialisation modal Open Source
ModalHandler({
  modalId: "modal",
  contentId: "modal-content",
  gridContainerId: "projects-grid",
  triggerSelector: "button.card[data-modal-key]",
  closeSelector: "[data-modal-close]",
  dataUrl: "/assets/data/open-source-projects.json",
  dataAttr: "modalKey"
});
</script>
