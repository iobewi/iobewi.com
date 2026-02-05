const header = document.querySelector(".site-header");
const footer = document.querySelector(".site-footer");
const hero = document.querySelector(".hero-band") || document.querySelector(".hero") || document.querySelector(".page-hero");
const hasHero = document.body.classList.contains("has-hero");

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
