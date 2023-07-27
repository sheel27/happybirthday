// An interactive element: clicking the cake will display a birthday message
const cakeImage = document.getElementById("cake");
const modal = document.getElementById("modal");

cakeImage.addEventListener("click", () => {
  modal.style.display = "block";
});

function closeModal() {
  modal.style.display = "none";
}

function playBirthdayMusic() {
  const birthdayMusic = document.getElementById("birthday-music");
  birthdayMusic.play();
}
