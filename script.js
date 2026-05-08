const hamburger = document.querySelector(".hamburger-button");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
});