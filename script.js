
const TELEGRAM_LINK = "https://t.me/dokAmina";
/* ========================================= ВСЕ КНОПКИ ЗАПИСИ ========================================= */
document.querySelectorAll(".js-booking").forEach(button => {
button.addEventListener("click", function(event) {

    event.preventDefault();

    if (TELEGRAM_LINK !== "https://t.me/") {
        window.open(
            TELEGRAM_LINK,
            "_blank",
            "noopener,noreferrer"
        );
    } else {
        alert("Добавьте Telegram-ссылку Амины в script.js");
    }

});
});
/* ========================================= АККОРДЕОНЫ ========================================= */
document.querySelectorAll(".accordion-header").forEach(header => {
header.addEventListener("click", function() {

    const item = this.parentElement;
    const content = item.querySelector(".accordion-content");

    const isOpen = item.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach(otherItem => {

        if (otherItem !== item) {

            otherItem.classList.remove("active");

            const otherContent =
                otherItem.querySelector(".accordion-content");

            otherContent.style.maxHeight = null;

        }

    });


    if (isOpen) {

        item.classList.remove("active");
        content.style.maxHeight = null;

    } else {

        item.classList.add("active");
        content.style.maxHeight =
            content.scrollHeight + "px";

    }

});
});
/* ========================================= АНИМАЦИЯ ПОЯВЛЕНИЯ ========================================= */
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver( entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.12
    }
);
revealElements.forEach(element => {
revealObserver.observe(element);
});
/* ========================================= ПЛАВНАЯ ПОЯВЛЯЮЩАЯСЯ ШАПКА ========================================= */
const header = document.querySelector(".site-header");
let lastScroll = 0;
window.addEventListener("scroll", () => {
const currentScroll = window.scrollY;

if (currentScroll > 100) {

    header.classList.add("scrolled");

} else {

    header.classList.remove("scrolled");

}

lastScroll = currentScroll;
});
