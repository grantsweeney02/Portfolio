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

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const context = canvas.getContext('2d');

// Set canvas to full browser width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = canvas.width / 20; // Width of character
const drops = [];

// Initialize drops
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}


function draw() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Trail effect
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = '#0F0'; // Green color
    context.font = '20px monospace'; // Font and size

    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128);
        context.fillText(text, i * 20, drops[i] * 20); // Multiply by character width and height
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35); // Adjust speed as necessary

// Redirect after a set timeout
setTimeout(() => {
    window.location.href = 'main.html'; // Change to your main content page
},12000); // 10 seconds before redirecting