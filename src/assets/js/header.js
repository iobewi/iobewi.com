const header = document.querySelector(".site-header");
const footer = document.querySelector(".site-footer");
const hero = document.querySelector(".hero-band") || document.querySelector(".hero") || document.querySelector(".page-hero");
const hasHero = document.body.classList.contains("has-hero");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelectorAll(".nav-link");

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

  // Fermer le menu quand on clique sur un lien
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
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

// =========================================================
// DROPDOWN NAVIGATION
// =========================================================

const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');

dropdownToggles.forEach(toggle => {
  // Gestion du clic sur le bouton dropdown
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    // Fermer tous les autres dropdowns
    dropdownToggles.forEach(otherToggle => {
      if (otherToggle !== toggle) {
        otherToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle le dropdown courant
    toggle.setAttribute('aria-expanded', !isExpanded);
  });
});

// Fermer les dropdowns quand on clique à l'extérieur
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item-dropdown')) {
    dropdownToggles.forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false');
    });
  }
});

// Fermer les dropdowns avec la touche Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    dropdownToggles.forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false');
    });
  }
});

// Sur desktop, gérer le hover (en plus du clic)
const mobileBreakpoint = window.matchMedia('(min-width: 769px)');

if (mobileBreakpoint.matches) {
  document.querySelectorAll('.nav-item-dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
