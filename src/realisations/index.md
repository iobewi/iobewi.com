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
IOBEWI est une structure récente, construite sur un travail préparatoire de long terme autour des systèmes embarqués, de la robotique et de l'outillage technique. Les réalisations présentées ici reflètent cette phase continue de recherche, d'expérimentation et de structuration.
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
<p>
<strong>Ces réalisations illustrent la démarche d'accompagnement d'IOBEWI : partir du terrain, structurer progressivement et rendre les projets exploitables.</strong>
</p>
<a class="btn btn-primary" href="/contact/">Discuter de votre projet</a>
</div>
</section>

<script src="/assets/js/modal.js"></script>
<script>
// Fonction de rendu personnalisée pour les réalisations
function renderRealization(key, data) {
  if (!data) return "";

  let html = `
    <h2 id="modal-title">${data.title}</h2>
    <div class="lead-with-badges" style="margin-bottom: var(--stack-3);">
      <p class="lead">${data.lead}</p>
      ${data.techBadges ? `
        <div class="tech-badges">
          ${data.techBadges.map(badge =>
            `<img class="tech-badge" src="${badge.src}" alt="${badge.alt}">`
          ).join('')}
        </div>
      ` : ''}
    </div>
  `;

  // Sections
  if (data.sections) {
    data.sections.forEach(section => {
      html += `<div class="content-group"><h3>${section.title}</h3>`;
      if (section.content) {
        html += `<p>${section.content}</p>`;
      }
      if (section.list) {
        html += `<ul>${section.list.map(item => `<li>${item}</li>`).join('')}</ul>`;
      }
      html += `</div>`;
    });
  }

  // Projets liés
  if (data.relatedProjects) {
    html += `
      <div class="content-group">
        <h3>Origines : projets contributifs</h3>
        <p>Deux plateformes exploratoires dont les enseignements ont directement alimenté la conception de R2BEWI.</p>
      </div>
      <div class="grid" style="margin-top: var(--stack-2);">
        ${data.relatedProjects.map(project => `
          <div class="project-card-compact">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" class="card-link" target="_blank" rel="noopener">
              Explorer le projet
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            ${project.techBadges ? `
              <div class="tech-badges">
                ${project.techBadges.map(badge =>
                  `<img class="tech-badge" src="${badge.src}" alt="${badge.alt}">`
                ).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // Note
  if (data.note) {
    html += `
      <div class="note-block" style="margin-top: var(--stack-3);">
        <p>${data.note}</p>
      </div>
    `;
  }

  // Liens
  if (data.links) {
    html += `
      <div class="section-link-end" style="margin-top: var(--stack-3);">
        ${data.links.map(link =>
          `<a class="card-link" href="${link.url}" target="_blank" rel="noopener">
            ${link.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>`
        ).join('')}
      </div>
    `;
  }

  return html;
}

// Initialisation modal Réalisations
ModalHandler({
  modalId: "modal",
  contentId: "modal-content",
  gridContainerId: "projects-grid",
  triggerSelector: "button.card[data-modal-key]",
  closeSelector: "[data-modal-close]",
  dataUrl: "/assets/data/realizations-projects.json",
  dataAttr: "modalKey",
  renderContent: renderRealization
});
</script>
