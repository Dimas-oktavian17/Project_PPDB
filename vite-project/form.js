// For Css File
import "./public/src/css/style.css";
import "flowbite";

// svg active dropdown
const icondropdown = document.querySelector('[aria-label="dropdown"]');
const dropdown = document.getElementById("dropdownDefault");
dropdown.addEventListener("click", () => {
  icondropdown.classList.toggle("on");
});
// hamburger & active toggle
let hamburger = document.querySelector("#hamburger");
let menu = document.getElementById("mobile-menu-3");
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

// function klik dropdown
let navdropdown = document.querySelector(".dropdownbtn");
let navdropdownm = document.querySelector(".dropdownbtnm");
let navdropdowne = document.querySelector(".dropdownbtne");
let wrapperdropdown = document.getElementById("dropdown");
navdropdown.addEventListener("click", () => {
  wrapperdropdown.classList.toggle("hidden");
});
navdropdownm.addEventListener("click", () => {
  wrapperdropdown.classList.toggle("hidden");
});
navdropdowne.addEventListener("click", () => {
  wrapperdropdown.classList.toggle("hidden");
});

// Form section
// dom section
// header form
let formA = document.getElementById("formA");
let formB = document.getElementById("formB");
let formC = document.getElementById("formC");
// pagination
let paginationOne = document.querySelector('[aria-label="paginationOne"]');
let paginationTwo = document.querySelector('[aria-label="paginationTwo"]');
let paginationThree = document.querySelector('[aria-label="paginationThree"]');
// pagination
// paginationOne.addEventListener("click", () => {
//   formA.classList.remove("hidden");
//   formB.classList.add("hidden");
//   formC.classList.add("hidden");
// });
// // pagination two
// paginationTwo.addEventListener("click", () => {
//   formA.classList.add("hidden");
//   formB.classList.remove("hidden");
//   formC.classList.add("hidden");
// });
// // pagination three
// paginationThree.addEventListener("click", () => {
//   formA.classList.add("hidden");
//   formB.classList.add("hidden");
//   formC.classList.remove("hidden");
// });
//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
