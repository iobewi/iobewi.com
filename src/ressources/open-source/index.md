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
<div class="modal__backdrop" data-os-close></div>
<div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
<button class="modal__close" type="button" aria-label="Fermer" data-os-close>×</button>
<div class="modal__content" id="modal-content">
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

<script>
(() => {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");
  const closeEls = modal ? modal.querySelectorAll("[data-os-close]") : [];
  const tiles = Array.from(document.querySelectorAll("button.card[data-os-key]"));
  if (!modal || !content || !tiles.length) return;
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
      rightText: "Publiée sur GitHub avec documentation et exemples. Brique réutilisable et structurée, éprouvée sur plateformes internes.",
      links: [{ label: "Explorer le projet", url: "https://github.com/ioio2995/myactuator_ros2_control" }]
    },
    witmotion: {
      title: "ROS 2 : Driver IMU WitMotion",
      lead: "Driver C++ ROS 2 pour capteurs WitMotion avec communication série asynchrone (asio).",
      leftTitle: "Points techniques",
      leftList: [
        "Communication série asynchrone (asio), indépendante de la plateforme",
        "Publication de topics ROS 2 selon les messages activés",
        "Configuration (port, débit, fréquence, frame)",
        "Documentation et exemples de lancement"
      ],
      rightTitle: "Résultats",
      rightText: "Brique publiée, documentée et directement utilisable dans un projet ROS 2 standard.",
      links: [{ label: "Explorer le projet", url: "https://github.com/ioio2995/witmotion_ros2" }]
    },
    daly: {
      title: "micro-ROS : Support BMS Daly via ESP32",
      lead: "Supervision batterie Daly dans ROS 2 via ESP32 et micro-ROS.",
      leftTitle: "Fonctionnalités",
      leftList: [
        "Lecture tension, courant, SoC",
        "Publication dans ROS 2 via micro-ROS",
        "Alertes et diagnostics",
        "Intégration supervision énergétique"
      ],
      rightTitle: "Contribution",
      rightText: "Publiée sur GitHub et documentée. Centralise les données batterie dans le graphe ROS 2.",
      links: [{ label: "Explorer le projet", url: "https://github.com/ioio2995/uros_DalyBMS" }]
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
      rightText: "Composants documentés, versionnés et pensés pour une architecture cohérente (maintenabilité, reproductibilité).",
      links: [{ label: "Explorer le projet", url: "https://github.com/iobewi/iobewi-idf-components" }]
    },
    icf: {
      title: "ICF : Interactions tangibles & déclenchement physique",
      lead: "Format et outillage NFC/RFID (TLV compact + authenticité) pour déclencher des actions embarquées (ex : audio HLS).",
      leftTitle: "Points techniques",
      leftList: [
        "Format TLV compact + mécanisme d'authenticité (signature)",
        "CLI + bibliothèque Python réutilisable",
        "Chaîne embarquée associée (ESP-IDF) pour lecture HLS M3U8"
      ],
      rightTitle: "Contribution",
      rightText: "Publié sous licence duale MPL 2.0 / CC-BY-SA 4.0 avec spécification. Composant HLS associé structuré et documenté.",
      links: [
        { label: "Explorer le projet ICF", url: "https://github.com/iobewi/icf" },
        { label: "Explorer iobewi_apps_hls_player", url: "https://github.com/iobewi/iobewi-idf-components/tree/iobewi_driver_max98357a/components/iobewi_apps_hls_player" }
      ]
    }
  };
  let lastFocus = null;
  function render(key){
    const d = data[key];
    if (!d) return;
    content.innerHTML = `
      <h2 id="modal-title">${d.title}</h2>
      <p class="lead">${d.lead}</p>
      <div class="grid-2" style="margin-top: var(--stack-3);">
        <div class="card">
          <h3>${d.leftTitle}</h3>
          <ul>${d.leftList.map(x => `<li>${x}</li>`).join("")}</ul>
        </div>
        <div class="card">
          <h3>${d.rightTitle}</h3>
          <p>${d.rightText}</p>
        </div>
      </div>
      <div class="section-link-end" style="margin-top: var(--stack-3);">
        ${d.links.map(l => `<a class="card-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
      </div>
    `;
  }
  function openModal(key, opener){
    render(key);
    lastFocus = opener || document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("is-modal-open");
    const closeBtn = modal.querySelector(".modal-close");
    closeBtn && closeBtn.focus();
  }
  function closeModal(){
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("is-modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }
  tiles.forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.osKey, btn));
  });
  closeEls.forEach(el => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
})();
</script>
