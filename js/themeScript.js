function updateFaviconBasedOnColorScheme() {
    const faviconElement = document.querySelector('link[rel="icon"]');
    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    console.log("System in Dark Mode:", colorSchemeQuery.matches);
    faviconElement.href = colorSchemeQuery.matches
        ? "../assets/images/dark-mode-favicon.ico"
        : "../assets/images/light-mode-favicon.ico";
}

document.addEventListener("DOMContentLoaded", function () {
    updateFaviconBasedOnColorScheme();
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", updateFaviconBasedOnColorScheme);
});
