// =====================================
// CONFIG - EDIT YOUR MESSAGE HERE
// =====================================

const CONFIG = {
  message: "I Love You ❤️\nআমার হয়ে যান,\nপরে আমার মতো পাবেন না! 🥺",
  typingSpeed: 110,
  heartInterval: 450
};

// =====================================
// ELEMENTS
// =====================================

const startBtn = document.getElementById("startBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const messageScreen = document.getElementById("messageScreen");
const typewriter = document.getElementById("typewriter");
const heartsContainer = document.getElementById("hearts");
const smallHearts = document.querySelector(".small-hearts");

// =====================================
// FLOATING HEARTS
// =====================================

const emojis = ["❤️", "💕", "💗", "💖", "💘", "🥰", "💝"];

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.textContent = emojis[
    Math.floor(Math.random() * emojis.length)
  ];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (15 + Math.random() * 25) + "px";

  const duration = 5 + Math.random() * 5;
  heart.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Start background animation
setInterval(createHeart, CONFIG.heartInterval);

// =====================================
// TYPEWRITER EFFECT
// =====================================

let isStarted = false;

function typeMessage() {
  const letters = Array.from(CONFIG.message);
  let index = 0;

  typewriter.textContent = "";

  function writeNext() {
    if (index < letters.length) {
      typewriter.textContent += letters[index];
      index++;

      setTimeout(writeNext, CONFIG.typingSpeed);
    } else {
      smallHearts.classList.add("show");
    }
  }

  writeNext();
}

// =====================================
// START BUTTON
// =====================================

startBtn.addEventListener("click", () => {

  if (isStarted) return;
  isStarted = true;

  welcomeScreen.classList.remove("active");

  setTimeout(() => {
    messageScreen.classList.add("active");
    typeMessage();
  }, 500);

  // Extra hearts when button is clicked
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }

});
