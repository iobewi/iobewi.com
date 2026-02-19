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
<div class="content-group animate-on-scroll fade-in" style="margin-top: var(--stack-3);">
<p class="eyebrow">Contributions :Cliquez pour voir les détails</p>
</div>
<div class="grid animate-on-scroll slide-up" style="margin-top: var(--stack-3);">
<details class="card">
<summary>
<h3>ROS 2 / ros2_control :Intégration MyActuator</h3>
<p>Intégration ros2_control pour piloter des actionneurs MyActuator dans un système ROS 2.</p>
</summary>
<div class="grid-2" style="margin-top: var(--stack-3);">
<div class="card">
<h4>Points techniques</h4>
<ul>
<li>Gestion de la communication série propriétaire des actionneurs</li>
<li>Respect des interfaces ros2_control (hardware_interface, controller_interface)</li>
<li>Intégration dans un pipeline de contrôle temps réel</li>
<li>Documentation et exemples d'utilisation</li>
</ul>
</div>
<div class="card">
<h4>Résultats</h4>
<p>Publiée sur GitHub avec documentation et exemples d'usage, conçue pour respecter les conventions ros2_control. Brique réutilisable et structurée, éprouvée sur les plateformes robotiques internes d'IOBEWI.</p>
</div>
</div>
<div class="section-link-end" style="margin-top: var(--stack-3);">
<a href="https://github.com/ioio2995/myactuator_ros2_control" class="card-link" target="_blank" rel="noopener">Explorer le projet <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
</div>
</details>
<details class="card">
<summary>
<h3>ROS 2 :Driver IMU WitMotion</h3>
<p>Driver C++ ROS 2 pour capteurs WitMotion avec communication série asynchrone.</p>
</summary>
<div class="grid-2" style="margin-top: var(--stack-3);">
<div class="card">
<h4>Points techniques</h4>
<ul>
<li>Communication série asynchrone (asio), indépendante de la plateforme</li>
<li>Publication de topics ROS 2 selon les messages activés sur le capteur</li>
<li>Configuration (port, débit, fréquence, frame)</li>
<li>Documentation et exemples de lancement</li>
</ul>
</div>
<div class="card">
<h4>Résultats</h4>
<p>Brique publiée, documentée et directement utilisable dans un projet ROS 2 standard. Signal de réutilisation par d'autres équipes (étoiles/forks).</p>
</div>
</div>
<div class="section-link-end" style="margin-top: var(--stack-3);">
<a href="https://github.com/ioio2995/witmotion_ros2" class="card-link" target="_blank" rel="noopener">Explorer le projet <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
</div>
</details>
<details class="card">
<summary>
<h3>micro-ROS :Support BMS Daly via ESP32</h3>
<p>Supervision batterie Daly dans ROS 2 via ESP32 et micro-ROS.</p>
</summary>
<div class="grid-2" style="margin-top: var(--stack-3);">
<div class="card">
<h4>Fonctionnalités</h4>
<ul>
<li>Lecture tension, courant, SoC</li>
<li>Publication des données dans ROS 2 via micro-ROS</li>
<li>Alertes et diagnostics en temps réel</li>
<li>Intégration supervision énergétique</li>
</ul>
</div>
<div class="card">
<h4>Contribution</h4>
<p>Publiée sur GitHub et documentée. Centralise les données batterie dans le graphe ROS 2 et simplifie la supervision énergétique.</p>
</div>
</div>
<div class="section-link-end" style="margin-top: var(--stack-3);">
<a href="https://github.com/ioio2995/uros_DalyBMS" class="card-link" target="_blank" rel="noopener">Explorer le projet <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
</div>
</details>
<details class="card">
<summary>
<h3>ESP-IDF :Librairie de composants</h3>
<p>Base modulaire pour structurer le développement de systèmes embarqués sous ESP-IDF.</p>
</summary>
<div class="grid-2" style="margin-top: var(--stack-3);">
<div class="card">
<h4>Organisation</h4>
<ul>
<li>Composants d'interfaçage matériel</li>
<li>Bibliothèques indépendantes du matériel</li>
<li>Modules d'intégration</li>
<li>Applications de référence</li>
</ul>
</div>
<div class="card">
<h4>Démarche</h4>
<p>Composants documentés, versionnés et pensés pour s'intégrer dans une architecture cohérente, orientée maintenabilité et reproductibilité.</p>
</div>
</div>
<div class="section-link-end" style="margin-top: var(--stack-3);">
<a href="https://github.com/iobewi/iobewi-idf-components" class="card-link" target="_blank" rel="noopener">Explorer le projet <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
</div>
</details>
<details class="card">
<summary>
<h3>ICF :Interactions tangibles & déclenchement physique</h3>
<p>Format et outillage NFC/RFID pour relier un objet physique à une action embarquée (ex : audio HLS).</p>
</summary>
<div class="grid-2" style="margin-top: var(--stack-3);">
<div class="card">
<h4>Points techniques</h4>
<ul>
<li>Format TLV compact + mécanisme d'authenticité (signature)</li>
<li>Interface CLI et bibliothèque Python réutilisable</li>
<li>Chaîne embarquée associée (ESP-IDF) pour lecture HLS M3U8</li>
</ul>
</div>
<div class="card">
<h4>Contribution</h4>
<p>Publié sous licence duale MPL 2.0 / CC-BY-SA 4.0 avec spécification complète. Composant HLS associé structuré et documenté.</p>
</div>
</div>
<div class="section-link-end" style="margin-top: var(--stack-3);">
<a href="https://github.com/iobewi/icf" class="card-link" target="_blank" rel="noopener">Explorer le projet ICF <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
<a href="https://github.com/iobewi/iobewi-idf-components/tree/iobewi_driver_max98357a/components/iobewi_apps_hls_player" class="card-link" target="_blank" rel="noopener">Explorer iobewi_apps_hls_player <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
</div>
</details>
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
