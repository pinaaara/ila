const messages = [
  "Kamu selalu membuat dunia lebih indah!",
  "Semangat hari ini, sahabat terbaikku! 🌸",
  "Aku bersyukur memiliki kamu dalam hidupku. ❤️",
  "Hari ini adalah waktu yang tepat untuk bersinar!",
  "Tetaplah menjadi dirimu yang luar biasa! 🌟"
];

const messageElement = document.querySelector(".message");
const changeMessageButton = document.getElementById("change-message");

changeMessageButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
});