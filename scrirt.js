document.addEventListener("DOMContentLoaded", () => {

  /* =========================

     ACCORDIONS

  ========================= */

  const accordionButtons =

    document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

      const item = button.closest(".accordion-item");

      if (!item) return;

      const isActive = item.classList.contains("active");

      const parentAccordion = item.parentElement;

      if (parentAccordion) {

        parentAccordion

          .querySelectorAll(".accordion-item.active")

          .forEach(activeItem => {

            if (activeItem !== item) {

              activeItem.classList.remove("active");

            }

          });

      }

      item.classList.toggle("active", !isActive);

    });

  });

  /* =========================

     HEADER SCROLL

  ========================= */

  const header = document.querySelector(".top-header");

  window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 20) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  });

  /* =========================

     IMAGE FALLBACK

  ========================= */

  const images = document.querySelectorAll("img");

  images.forEach(image => {

    image.addEventListener("error", () => {

      image.style.background =

        "#e9e0d8";

      image.style.minHeight =

        "180px";

    });

  });

  /* =========================

     SMOOTH ANCHOR LINKS

  ========================= */

  document

    .querySelectorAll('a[href^="#"]')

    .forEach(link => {

      link.addEventListener("click", event => {

        const targetId =

          link.getAttribute("href");

        const target =

          document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

          behavior: "smooth",

          block: "start"

        });

      });

    });

  /* =========================

     ESC — CLOSE ACCORDION

  ========================= */

  document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    document

      .querySelectorAll(".accordion-item.active")

      .forEach(item => {

        item.classList.remove("active");

      });

  });

});
