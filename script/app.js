const accordions = document.querySelectorAll(".accordion");
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    accordions.forEach((accordion) => {
      if (accordion !== header.parentElement) {
        accordion.classList.remove("show-body");
      }
    });
    const accordion = header.parentElement;
    accordion.classList.toggle("show-body");
  });
});
