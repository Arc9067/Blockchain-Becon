const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");

const heroHeading = document.querySelector(".hero-heading");
const heroText = document.querySelector(".hero-text");
const heroBtn = document.querySelector(".hero-btn");

setTimeout(function () {
  heroHeading.classList.add("animate");
  heroText.classList.add("animate");
  heroBtn.classList.add("animate");
}, 1000);

mobileMenu.addEventListener("click", function () {
  nav.classList.toggle("open");
});
