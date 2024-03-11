document.addEventListener("DOMContentLoaded", (event) => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    changeLinkState();
    window.addEventListener("scroll", changeLinkState);
});


// work experience card carousel
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards-container");
    const cards = container.querySelectorAll(".card");
    const cardWidth = cards[0].offsetWidth + 20;
    const visibleCards = 3;
    let maxScroll = (cards.length - visibleCards) * cardWidth;
    let currentScroll = 0;

    document.querySelector(".next").addEventListener("click", () => {
        if (currentScroll < maxScroll) {
            currentScroll += cardWidth * visibleCards;
            container.scrollBy({ left: cardWidth * visibleCards, top: 0, behavior: "smooth" });
        }
    });

    document.querySelector(".prev").addEventListener("click", () => {
        if (currentScroll > 0) {
            currentScroll -= cardWidth * visibleCards;
            container.scrollBy({ left: -cardWidth * visibleCards, top: 0, behavior: "smooth" });
        }
    });
});
