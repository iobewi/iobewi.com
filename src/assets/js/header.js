const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");

if (header && hero && document.body.classList.contains("has-hero")) {
  const updateHeaderState = () => {
    const heroBottom = hero.offsetTop + hero.offsetHeight - header.offsetHeight;
    const scrollY = window.scrollY;
    const atTop = scrollY <= 4;
    const pastHero = scrollY > heroBottom;

    header.classList.toggle("is-top", atTop);
    header.classList.toggle("is-hero", !atTop && !pastHero);
    header.classList.toggle("is-scrolled", pastHero);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
  window.addEventListener("resize", updateHeaderState);
}
