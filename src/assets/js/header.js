const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");

if (header && hero && document.body.classList.contains("has-hero")) {
  const updateHeaderState = () => {
    const heroBottom = hero.offsetTop + hero.offsetHeight - header.offsetHeight;
    header.classList.toggle("is-scrolled", window.scrollY > heroBottom);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
  window.addEventListener("resize", updateHeaderState);
}
