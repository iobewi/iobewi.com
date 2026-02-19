const header = document.querySelector(".site-header");
const footer = document.querySelector(".site-footer");
const hero = document.querySelector(".hero-band") || document.querySelector(".hero") || document.querySelector(".page-hero");
const hasHero = document.body.classList.contains("has-hero");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelectorAll(".nav-link:not(.nav-dropdown-toggle)");

document.documentElement.classList.add("js-enabled");

if (header) {
  if (hero && hasHero) {
    // Pages avec hero : gestion dynamique des états
    const updateHeaderFooterState = () => {
      const heroBottom = hero.offsetTop + hero.offsetHeight - header.offsetHeight;
      const scrollY = window.scrollY;
      const atTop = scrollY <= 4;
      const pastHero = scrollY > heroBottom;

      // Header states
      header.classList.toggle("is-top", atTop);
      header.classList.toggle("is-hero", !atTop && !pastHero);
      header.classList.toggle("is-scrolled", pastHero);

      // Footer states (même logique)
      if (footer) {
        footer.classList.toggle("is-top", atTop);
        footer.classList.toggle("is-hero", !atTop && !pastHero);
        footer.classList.toggle("is-scrolled", pastHero);
      }
    };

    updateHeaderFooterState();
    window.addEventListener("scroll", updateHeaderFooterState, { passive: true });
    window.addEventListener("resize", updateHeaderFooterState);
  } else {
    // Pages sans hero : forcer l'état scrolled pour texte lisible sur fond clair
    header.classList.add("is-scrolled");
    if (footer) {
      footer.classList.add("is-scrolled");
    }
  }
}

// =========================================================
// MENU MOBILE HAMBURGER
// =========================================================

if (mobileMenuToggle && header) {
  let scrollPosition = 0;
  const mobileViewport = window.matchMedia('(max-width: 768px)');

  // Fonction pour bloquer le scroll sans "jump"
  const lockScroll = () => {
    scrollPosition = window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  };

  // Fonction pour débloquer le scroll
  const unlockScroll = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
  };

  const closeMobileMenu = () => {
    header.classList.remove("is-menu-open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    unlockScroll();
  };

  // Toggle du menu mobile
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-menu-open");
    mobileMenuToggle.setAttribute("aria-expanded", isOpen);

    // Bloquer/débloquer le scroll sans jump
    if (isOpen) {
      lockScroll();
    } else {
      closeMobileMenu();
    }
  });

  // Fermer le menu quand on clique sur un lien (sauf dropdown toggles)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Fermer le menu quand on clique sur un item de dropdown
  const dropdownItems = document.querySelectorAll(".nav-dropdown-item");
  dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Fermer le menu avec la touche Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("is-menu-open")) {
      closeMobileMenu();
    }
  });

  const handleViewportChange = () => {
    if (!mobileViewport.matches && header.classList.contains("is-menu-open")) {
      closeMobileMenu();
    }
  };

  mobileViewport.addEventListener("change", handleViewportChange);
  window.addEventListener("resize", handleViewportChange);
}

