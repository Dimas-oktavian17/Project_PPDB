// For Css File
// import "./public/src/css/style.css";
// import "flowbite";

// form wali
const btnSkip = document.getElementById("btnSkip");
const formWali = document.querySelector(".formWali");
btnSkip.addEventListener("click", () => {
  formWali.classList.add("hidden");
});
// hamburger & active toggle
let hamburger = document.querySelector("#hamburger");
let menu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("hidden");
});
menu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("active");
});
// navbar fixed
let fixed = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    fixed.classList.add("shadow-lg");
  } else {
    fixed.classList.remove("shadow-lg");
  }
});
// Toggle dark mode
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
document
  .querySelector('[aria-label="toggle"]')
  .addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    moon.classList.toggle("hidden");
    sun.classList.toggle("hidden");
  });
//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
