export default () => {
  const scrollToLink = document.querySelectorAll("[data-scrollto]");
  const headerOffset = 45;

  scrollToLink.forEach((link) => {
    const val = link.dataset.scrollto;
    const destination = document.getElementById(val);
    const elementPosition = destination.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      // destination?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
};
