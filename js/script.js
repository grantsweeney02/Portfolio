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


const logos = document.querySelectorAll(".company-logo");
  const descriptions = document.querySelectorAll(".job-description");

  logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      descriptions.forEach((description) => {
        description.classList.add("hidden");
      });
      const target = logo.getAttribute("data-target");
      const targetDescription = document.getElementById(target);

      if (targetDescription) {
        targetDescription.classList.remove("hidden");
      }
    });
  });

