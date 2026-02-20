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
Les réalisations présentées ici sont des démonstrateurs internes et des projets contributifs open source, utilisés comme terrain d'épreuve des patterns d'architecture et d'intégration au cœur de l'accompagnement IOBEWI. Elles valident la cohérence entre matériel, firmware et logiciel dans des conditions réelles.
</p>
</div>
</div>
</div>

<section class="section container snap-item">
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
<h2>Échanger autour d'une démarche de convergence technique</h2>
<p>Ces réalisations illustrent la démarche d'accompagnement d'IOBEWI : partir du terrain, structurer progressivement et rendre les projets exploitables.</p>
<div class="btn-wrapper animate-on-scroll fade-in delay-300">
<a class="btn btn-primary" href="/contact/">Discuter de la structuration de votre système</a>
</div>
</div>
</section>

<script src="/assets/js/modal.js"></script>
