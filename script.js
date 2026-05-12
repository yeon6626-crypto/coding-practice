(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function revealOnLoad() {
    const items = document.querySelectorAll("[data-animate]");
    if (prefersReducedMotion) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    items.forEach((el, i) => {
      window.setTimeout(() => {
        el.classList.add("is-visible");
      }, 80 + i * 70);
    });
  }

  document.addEventListener("DOMContentLoaded", revealOnLoad);

  document.querySelectorAll("[data-smooth-scroll]").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });
})();
