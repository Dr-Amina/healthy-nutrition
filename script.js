document.addEventListener("DOMContentLoaded", () => {
/* ========================= MOBILE MENU ========================= */
const menuBtn = document.querySelector(".menu-btn"); const nav = document.querySelector(".nav");
if (menuBtn && nav) {
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});
}
/* ========================= FAQ ========================= */
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
const question = item.querySelector(".faq-question");

question.addEventListener("click", () => {

  const isActive = item.classList.contains("active");

  faqItems.forEach(otherItem => {
    otherItem.classList.remove("active");
  });

  if (!isActive) {
    item.classList.add("active");
  }

});
});
/* ========================= HEADER SCROLL ========================= */
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
  header.classList.add("scrolled");
} else {
  header.classList.remove("scrolled");
}
});
/* ========================= SMOOTH ANCHOR SCROLL ========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener("click", function(event) {

  const targetId = this.getAttribute("href");

  if (targetId === "#") return;

  const target = document.querySelector(targetId);

  if (!target) return;

  event.preventDefault();

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

});
});
/* ========================= SIMPLE REVEAL ANIMATION ========================= */
const animatedElements = document.querySelectorAll( ".approach-card, .service, .food-item, .about-content" );
const observer = new IntersectionObserver( entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }

  });

},
{
  threshold: 0.12
}
);
animatedElements.forEach(element => { element.classList.add("reveal"); observer.observe(element); });
});
