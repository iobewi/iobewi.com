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
<p class="eyebrow">Contributions : sélectionnez un projet pour voir les détails</p>
</div>
<div class="os-layout animate-on-scroll slide-up" style="margin-top: var(--stack-3);">
<div class="os-list" role="list">
<button class="card os-item is-active" type="button" role="listitem" data-os-key="myactuator" aria-controls="os-detail" aria-selected="true">
<h3>ROS 2 / ros2_control : Intégration MyActuator</h3>
<p>Intégration ros2_control pour piloter des actionneurs MyActuator dans un système ROS 2.</p>
</button>
<button class="card os-item" type="button" role="listitem" data-os-key="witmotion" aria-controls="os-detail" aria-selected="false">
<h3>ROS 2 : Driver IMU WitMotion</h3>
<p>Driver C++ ROS 2 pour capteurs WitMotion avec communication série asynchrone.</p>
</button>
<button class="card os-item" type="button" role="listitem" data-os-key="daly" aria-controls="os-detail" aria-selected="false">
<h3>micro-ROS : Support BMS Daly via ESP32</h3>
<p>Supervision batterie Daly dans ROS 2 via ESP32 et micro-ROS.</p>
</button>
<button class="card os-item" type="button" role="listitem" data-os-key="idf" aria-controls="os-detail" aria-selected="false">
<h3>ESP-IDF : Librairie de composants</h3>
<p>Base modulaire pour structurer le développement de systèmes embarqués sous ESP-IDF.</p>
</button>
<button class="card os-item" type="button" role="listitem" data-os-key="icf" aria-controls="os-detail" aria-selected="false">
<h3>ICF : Interactions tangibles & déclenchement physique</h3>
<p>Format et outillage NFC/RFID pour relier un objet physique à une action embarquée (ex : audio HLS).</p>
</button>
</div>
<aside id="os-detail" class="card os-detail" aria-live="polite">
<h3 class="os-detail-title">Chargement...</h3>
<p class="os-detail-lead">Sélectionnez une contribution dans la liste.</p>
</aside>
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

<script>
(() => {
  const data = {
    myactuator: {
      title: "ROS 2 / ros2_control : Intégration MyActuator",
      lead: "Intégration ros2_control pour piloter des actionneurs MyActuator dans un système ROS 2.",
      leftTitle: "Points techniques",
      leftList: [
        "Gestion de la communication série propriétaire des actionneurs",
        "Respect des interfaces ros2_control (hardware_interface, controller_interface)",
        "Intégration dans un pipeline de contrôle temps réel",
        "Documentation et exemples d'utilisation"
      ],
      rightTitle: "Résultats",
      rightText: "Publiée sur GitHub avec documentation et exemples d'usage, conçue pour respecter les conventions ros2_control. Brique réutilisable et structurée, éprouvée sur les plateformes robotiques internes d'IOBEWI.",
      links: [
        { label: "Explorer le projet", url: "https://github.com/ioio2995/myactuator_ros2_control" }
      ]
    },
    witmotion: {
      title: "ROS 2 : Driver IMU WitMotion",
      lead: "Driver C++ ROS 2 pour capteurs WitMotion avec communication série asynchrone.",
      leftTitle: "Points techniques",
      leftList: [
        "Communication série asynchrone (asio), indépendante de la plateforme",
        "Publication de topics ROS 2 selon les messages activés sur le capteur",
        "Configuration (port, débit, fréquence, frame)",
        "Documentation et exemples de lancement"
      ],
      rightTitle: "Résultats",
      rightText: "Brique publiée, documentée et directement utilisable dans un projet ROS 2 standard. Signal de réutilisation par d'autres équipes (étoiles/forks).",
      links: [
        { label: "Explorer le projet", url: "https://github.com/ioio2995/witmotion_ros2" }
      ]
    },
    daly: {
      title: "micro-ROS : Support BMS Daly via ESP32",
      lead: "Supervision batterie Daly dans ROS 2 via ESP32 et micro-ROS.",
      leftTitle: "Fonctionnalités",
      leftList: [
        "Lecture tension, courant, SoC",
        "Publication des données dans ROS 2 via micro-ROS",
        "Alertes et diagnostics en temps réel",
        "Intégration supervision énergétique"
      ],
      rightTitle: "Contribution",
      rightText: "Publiée sur GitHub et documentée. Centralise les données batterie dans le graphe ROS 2 et simplifie la supervision énergétique.",
      links: [
        { label: "Explorer le projet", url: "https://github.com/ioio2995/uros_DalyBMS" }
      ]
    },
    idf: {
      title: "ESP-IDF : Librairie de composants",
      lead: "Base modulaire pour structurer le développement de systèmes embarqués sous ESP-IDF.",
      leftTitle: "Organisation",
      leftList: [
        "Composants d'interfaçage matériel",
        "Bibliothèques indépendantes du matériel",
        "Modules d'intégration",
        "Applications de référence"
      ],
      rightTitle: "Démarche",
      rightText: "Composants documentés, versionnés et pensés pour s'intégrer dans une architecture cohérente, orientée maintenabilité et reproductibilité.",
      links: [
        { label: "Explorer le projet", url: "https://github.com/iobewi/iobewi-idf-components" }
      ]
    },
    icf: {
      title: "ICF : Interactions tangibles & déclenchement physique",
      lead: "Format et outillage NFC/RFID pour relier un objet physique à une action embarquée (ex : audio HLS).",
      leftTitle: "Points techniques",
      leftList: [
        "Format TLV compact + mécanisme d'authenticité (signature)",
        "Interface CLI et bibliothèque Python réutilisable",
        "Chaîne embarquée associée (ESP-IDF) pour lecture HLS M3U8"
      ],
      rightTitle: "Contribution",
      rightText: "Publié sous licence duale MPL 2.0 / CC-BY-SA 4.0 avec spécification complète. Composant HLS associé structuré et documenté.",
      links: [
        { label: "Explorer le projet ICF", url: "https://github.com/iobewi/icf" },
        { label: "Explorer iobewi_apps_hls_player", url: "https://github.com/iobewi/iobewi-idf-components/tree/iobewi_driver_max98357a/components/iobewi_apps_hls_player" }
      ]
    }
  };
  const items = Array.from(document.querySelectorAll(".os-item"));
  const detail = document.getElementById("os-detail");
  if (!items.length || !detail) return;
  function render(key) {
    const d = data[key];
    if (!d) return;
    detail.innerHTML = `
      <h3 class="os-detail-title">${d.title}</h3>
      <p class="os-detail-lead">${d.lead}</p>
      <div class="grid-2" style="margin-top: var(--stack-3);">
        <div class="card">
          <h4>${d.leftTitle}</h4>
          <ul>${d.leftList.map(li => `<li>${li}</li>`).join("")}</ul>
        </div>
        <div class="card">
          <h4>${d.rightTitle}</h4>
          <p>${d.rightText}</p>
        </div>
      </div>
      <div class="section-link-end" style="margin-top: var(--stack-3);">
        ${d.links.map(l => `<a href="${l.url}" class="card-link" target="_blank" rel="noopener">${l.label} <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>`).join("")}
      </div>
    `;
  }
  function setActive(btn) {
    items.forEach(b => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });
    render(btn.dataset.osKey);
  }
  items.forEach(btn => btn.addEventListener("click", () => setActive(btn)));
  const initial = items.find(b => b.classList.contains("is-active")) || items[0];
  setActive(initial);
})();
</script>
