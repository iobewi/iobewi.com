---
title: "Réalisations"
description: "Réalisations et travaux de recherche appliquée autour des systèmes embarqués."
layout: layouts/base.njk
permalink: "/realisations/"
bodyClass: "has-hero"
---

<div class="page-hero snap-item">
<div class="container">
<div class="page-hero-content">
<h1>Réalisations et recherche appliquée</h1>
<p class="lead">
Ces réalisations sont des démonstrateurs internes et des projets contributifs open source. Elles servent de terrain d’épreuve pour valider des patterns d’architecture et d’intégration : découpage des responsabilités, cohérence matériel-firmware-logiciel, reproductibilité et traçabilité.
L’objectif n’est pas de “montrer des objets”, mais de prouver une démarche : faire converger un système réel vers une base exploitable et durable.
</p>
</div>
</div>
</div>



<section class="section container snap-item">
<p class="eyebrow">Des démonstrateurs pour éprouver la méthode</p>
<div class="lead" style="max-width: 72ch;">
<p>Ces réalisations ne sont pas des vitrines technologiques.</p>
<p>Elles constituent des plateformes construites pour valider, en conditions réelles, les principes d’architecture, d’intégration et d’évolution décrits dans les axes d’intervention.
</p>
</div>

<div class="grid animate-on-scroll slide-up" style="margin-top: var(--stack-3);" id="projects-grid">
<!-- Tuiles générées dynamiquement depuis /assets/data/realizations-projects.json -->
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
</section>

<section class="section container section-major snap-item">
<div class="cta-block animate-on-scroll scale-in">
<h2>Une réalisation n’est pas une vitrine. C’est une preuve.</h2>
<p>Ces projets existent pour valider une démarche de convergence : clarifier l’architecture, stabiliser les interfaces, intégrer le réel et rendre l’évolution traçable. L’objectif : passer d’un système qui fonctionne “aujourd’hui” à une base exploitable et durable.</p>
<div class="btn-wrapper animate-on-scroll fade-in delay-300">
<a class="btn btn-primary" href="/contact/">Discuter de la structuration de votre plateforme</a>
</div>
</div>
</section>

<script src="/assets/js/modal.js"></script>
