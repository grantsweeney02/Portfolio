const text = "Accessing Grant's Portfolio...";
const typingElement = document.getElementById("typingText");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Speed of typing
    } else {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
