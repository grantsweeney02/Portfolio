document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

function changeFaviconForColorScheme() {
    const faviconElement = document.querySelector('link[rel="icon"]');
    const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );

    if (darkModeMediaQuery.matches) {
        faviconElement.href = "../assests/images/dark-mode-favicon.ico";
    } else {
        faviconElement.href = "../assests/images/light-mode-favicon.ico";
    }
    console.log("Changing favicon to:", faviconElement.href);
}

document.addEventListener('DOMContentLoaded', function() {
    changeFaviconForColorScheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeFaviconForColorScheme);
  });
