// Modal Open Source - Gestion d'affichage des détails projets
(() => {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");
  const closeEls = modal ? modal.querySelectorAll("[data-os-close]") : [];
  const tiles = Array.from(document.querySelectorAll("button.card[data-os-key]"));

  if (!modal || !content || !tiles.length) return;

  let projectsData = {};
  let lastFocus = null;

  // Charger les données depuis le JSON
  fetch("/assets/data/open-source-projects.json")
    .then((res) => res.json())
    .then((data) => {
      projectsData = data;
    })
    .catch((err) => {
      console.error("Erreur chargement données projets:", err);
    });

  function render(key) {
    const d = projectsData[key];
    if (!d) return;

    content.innerHTML = `
      <h2 id="modal-title">${d.title}</h2>
      <p class="lead">${d.lead}</p>
      <div class="grid-2" style="margin-top: var(--stack-3);">
        <div class="card">
          <h3>${d.leftTitle}</h3>
          <ul>${d.leftList.map((x) => `<li>${x}</li>`).join("")}</ul>
        </div>
        <div class="card">
          <h3>${d.rightTitle}</h3>
          <p>${d.rightText}</p>
        </div>
      </div>
      <div class="section-link-end" style="margin-top: var(--stack-3);">
        ${d.links.map((l) => `<a class="card-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
      </div>
    `;
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

  tiles.forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.osKey, btn));
  });

  closeEls.forEach((el) => el.addEventListener("click", closeModal));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
})();
