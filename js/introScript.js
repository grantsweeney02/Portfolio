const text = "Welcome to Grant's Portfolio...";
const typingElement = document.getElementById("typingText");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150); // Speed of typing
    } else {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const context = canvas.getContext("2d");

// Set canvas to full browser width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Redirect after a set timeout
setTimeout(() => {
    window.location.href = "main.html"; // Change to your main content page
}, 12000); // 10 seconds before redirecting
