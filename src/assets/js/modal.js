// Module Modal générique et réutilisable
window.ModalHandler = function (options) {
  const config = {
    modalId: options.modalId || "modal",
    contentId: options.contentId || "modal-content",
    gridContainerId: options.gridContainerId,
    triggerSelector: options.triggerSelector || "button.card[data-modal-key]",
    closeSelector: options.closeSelector || "[data-modal-close]",
    dataUrl: options.dataUrl,
    dataAttr: options.dataAttr || "modalKey",
    renderContent: options.renderContent || defaultRender,
  };

  const modal = document.getElementById(config.modalId);
  const content = document.getElementById(config.contentId);
  const closeEls = modal ? modal.querySelectorAll(config.closeSelector) : [];
  const gridContainer = config.gridContainerId ? document.getElementById(config.gridContainerId) : null;

  if (!modal || !content) {
    console.warn(`ModalHandler: éléments requis manquants (modal ou content)`);
    return;
  }

  let data = {};
  let lastFocus = null;
  let triggers = [];

  // Fonction pour générer les tuiles (cards) depuis les données
  function renderCards(jsonData) {
    if (!gridContainer) return;

    const cardsHTML = Object.values(jsonData).map((item) => `
      <button class="card" type="button" data-modal-key="${item.key}">
        <h3>${item.cardTitle}</h3>
        <p>${item.cardDescription}</p>
        <span class="pillar-link">Voir les détails →</span>
      </button>
    `).join("");

    gridContainer.innerHTML = cardsHTML;

    // Récupérer les nouveaux triggers après génération
    triggers = Array.from(document.querySelectorAll(config.triggerSelector));
    attachTriggerEvents();
  }

  // Attacher les événements aux triggers
  function attachTriggerEvents() {
    triggers.forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset[config.dataAttr];
        openModal(key, btn);
      });
    });
  }

  // Charger les données depuis le JSON
  if (config.dataUrl) {
    fetch(config.dataUrl)
      .then((res) => res.json())
      .then((jsonData) => {
        data = jsonData;
        // Générer les tuiles si un conteneur est spécifié
        if (gridContainer) {
          renderCards(jsonData);
        } else {
          // Sinon, récupérer les triggers existants dans le HTML
          triggers = Array.from(document.querySelectorAll(config.triggerSelector));
          attachTriggerEvents();
        }
      })
      .catch((err) => {
        console.error("ModalHandler: erreur chargement données:", err);
      });
  }

  // Render par défaut (open-source format)
  function defaultRender(key, itemData) {
    if (!itemData) return "";

    return `
      <h2 id="modal-title">${itemData.title}</h2>
      <p class="lead">${itemData.lead}</p>
      <div class="grid" style="margin-top: var(--stack-3);">
        <div class="card">
          <h3>${itemData.leftTitle}</h3>
          <ul>${itemData.leftList.map((x) => `<li>${x}</li>`).join("")}</ul>
        </div>
        <div class="card">
          <h3>${itemData.rightTitle}</h3>
          <p>${itemData.rightText}</p>
        </div>
      </div>
      <div class="section-link-end" style="margin-top: var(--stack-3);">
        ${itemData.links.map((l) => `<a class="card-link" href="${l.url}" target="_blank" rel="noopener">${l.label} <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>`).join("")}
      </div>
    `;
  }

  function render(key) {
    const itemData = data[key];
    if (!itemData) return;
    content.innerHTML = config.renderContent(key, itemData);
  }

  function openModal(key, opener) {
    render(key);
    lastFocus = opener || document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("is-modal-open");
    const closeBtn = modal.querySelector(".modal-close");
    closeBtn && closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("is-modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  // Attacher les événements de fermeture
  closeEls.forEach((el) => el.addEventListener("click", closeModal));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  // API publique
  return {
    open: openModal,
    close: closeModal,
  };
};
