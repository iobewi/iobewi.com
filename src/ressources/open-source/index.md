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
<p class="lead">IOBEWI contribue à l'écosystème de la robotique embarquée en publiant des briques réutilisables et documentées, construites sur des contraintes réelles de terrain.</p>
</div>
</div>
</div>

<section class="section container snap-item">
<div class="content-group animate-on-scroll fade-in delay-150">
<p><strong>Objectif :</strong> partager des briques réutilisables, structurées et maintenables, plutôt que des solutions clé en main.</p>
</div>
<div class="grid animate-on-scroll slide-up" style="margin-top: var(--stack-3);">
<button class="card" type="button" data-os-key="myactuator">
<h3>ROS 2 / ros2_control : Intégration MyActuator</h3>
<p>Intégration ros2_control pour piloter des actionneurs MyActuator dans un système ROS 2.</p>
<span class="pillar-link">Voir les détails →</span>
</button>
<button class="card" type="button" data-os-key="witmotion">
<h3>ROS 2 : Driver IMU WitMotion</h3>
<p>Driver C++ ROS 2 pour capteurs WitMotion avec communication série asynchrone.</p>
<span class="pillar-link">Voir les détails →</span>
</button>
<button class="card" type="button" data-os-key="daly">
<h3>micro-ROS : Support BMS Daly via ESP32</h3>
<p>Supervision batterie Daly dans ROS 2 via ESP32 et micro-ROS.</p>
<span class="pillar-link">Voir les détails →</span>
</button>
<button class="card" type="button" data-os-key="idf">
<h3>ESP-IDF : Librairie de composants</h3>
<p>Base modulaire pour structurer le développement de systèmes embarqués sous ESP-IDF.</p>
<span class="pillar-link">Voir les détails →</span>
</button>
<button class="card" type="button" data-os-key="icf">
<h3>ICF : Interactions tangibles & déclenchement physique</h3>
<p>Format et outillage NFC/RFID pour relier un objet physique à une action embarquée (ex : audio HLS).</p>
<span class="pillar-link">Voir les détails →</span>
</button>
</div>
<div class="modal" id="modal" aria-hidden="true">
<div class="modal-backdrop" data-os-close></div>
<div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
<button class="modal-close" type="button" aria-label="Fermer" data-os-close>×</button>
<div class="modal-content" id="modal-content">
<h2 id="modal-title">Titre</h2>
<p class="lead">Description</p>
</div>
</div>
</div>
</section>

<section class="section container snap-item">
<div class="section-title animate-on-scroll fade-in">
<h2>Méthodologie de contribution</h2>
</div>
<div class="animate-on-scroll slide-up delay-100">
<p class="lead">Les contributions sont publiées comme des briques réutilisables : structurées, documentées et exploitables dans un projet standard.</p>
</div>
<div class="grid-2 animate-on-scroll slide-up delay-200">
<div class="card">
<h3>Principes</h3>
<ul>
<li>Partager des briques réutilisables, pas des solutions complètes clé en main</li>
<li>Documenter les choix techniques et les contraintes</li>
<li>Respecter les conventions et les standards de l'écosystème</li>
<li>Capitaliser sur les retours de la communauté</li>
</ul>
</div>
<div class="card">
<h3>Bénéfices</h3>
<ul>
<li>Validation des choix techniques par des pairs</li>
<li>Amélioration continue via les retours utilisateurs</li>
<li>Visibilité et crédibilité technique</li>
<li>Contribution à l'écosystème robotique embarqué</li>
</ul>
</div>
</div>
</section>

<section class="section container snap-item">
<div class="cta-block animate-on-scroll scale-in">
<h2>Échanger autour de contributions techniques</h2>
<p><strong>Ces contributions illustrent la capacité d'IOBEWI à structurer des briques logicielles réutilisables et à documenter des choix techniques complexes.</strong></p>
<a class="btn btn-primary" href="/contact/">Prendre contact</a>
</div>
</section>

<script src="/assets/js/open-source-modal.js"></script>
