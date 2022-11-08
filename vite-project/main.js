// For Css File
import "./public/src/css/style.css";
// import "./public/src/css/animate.css";
// import "./public/src/css/style.css";
// import "./public/src/css/swiper-bundle.min.css";
// For JS File
// import "./public/src/js/swiper-bundle.min.js";

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

// Alur Pendaftaran section
// select btn opsi preview
let btnOnline = document.querySelector('[aria-label="btnOnline"]');
let btnOffline = document.querySelector('[aria-label="btnOffline"]');
// end btn opsi preview
// select head title pendaftaran
let headTitle = document.querySelector('[aria-label="headPendaftaran"]');
headTitle.textContent = "Pendaftaran Online";
let headTitleof = "Pendaftaran Offline";
// end head title pendaftaran
// select box number
let boxOne = document.querySelector('[aria-label="boxOne"]');
let boxTwo = document.querySelector('[aria-label="boxTwo"]');
let boxThree = document.querySelector('[aria-label="boxThree"]');
boxOne.textContent = 1;
boxTwo.textContent = 2;
boxThree.textContent = 3;
// end box number
// select title langkah pendaftaran
let titleOne = document.querySelector('[aria-label="titleOne"]');
let titleTwo = document.querySelector('[aria-label="titleTwo"]');
let titleThree = document.querySelector('[aria-label="titleThree"]');
titleOne.textContent = "Langkah Kedua";
titleTwo.textContent = "Langkah Ketiga";
titleThree.textContent = "Langkah Keempat";
// end title langkah pendaftaran
// select deskripsi pendaftaran
let deskripsiOne = document.querySelector('[aria-label="deskripsiOne"]');
let deskripsiTwo = document.querySelector('[aria-label="deskripsiTwo"]');
let deskripsiThree = document.querySelector('[aria-label="deskripsiThree"]');
deskripsiOne.textContent = "Lorem ipsum dolor sit amet conscectur blabla";
deskripsiTwo.textContent = "Lorem ipsum dolor sit amet conscectur blabla";
deskripsiThree.textContent = "Lorem ipsum dolor sit amet conscectur blabla";
// end deskripsi pendaftaran
let boxOnebf = 1;
let boxTwobf = 2;
let boxThreebf = 3;
// end box number
// select title langkah pendaftaran
let titleOnebf = "Langkah Pertama";
let titleTwobf = "Langkah Kedua";
let titleThreebf = "Langkah Ketiga";
// end title langkah pendaftaran
// select deskripsi pendaftaran
let deskripsiOnebf = "Lorem ipsum dolor sit amet conscectur blabla";
let deskripsiTwobf = "Lorem ipsum dolor sit amet conscectur blabla";
let deskripsiThreebf = "Lorem ipsum dolor sit amet conscectur blabla";
// pagination
let paginationBefore = document.querySelector(
  '[aria-label="paginationBefore"]'
);
let paginationAfter = document.querySelector('[aria-label="paginationAfter"]');
// end pagination
// variabel isi
// box number
let boxFour = "4";
let boxFive = "5";
let boxSix = "6";
// end box number
// title pendaftaran
let titleFour = "Langkah Keempat";
let titleFive = "Langkah Kelima";
let titleSix = "Langkah Keenam";
// end title
// deskripsi pendaftaran
let deskripsiFour =
  "Fusce faucibus ex vitae condimentum vehicula. Sed sed lectus sed urna interdum sodales.";
let deskripsiFive =
  "Fusce faucibus ex vitae condimentum vehicula. Sed sed lectus sed urna interdum sodales.";
let deskripsiSix =
  "Fusce faucibus ex vitae condimentum vehicula. Sed sed lectus sed urna interdum sodales. ";
// click funtion for alur pendaftaran section
// pagination for online pendaftaran
// after pagination
paginationAfter.addEventListener("click", () => {
  // box number
  [boxOne.textContent, boxTwo.textContent, boxThree.textContent] = [
    boxFour,
    boxFive,
    boxSix,
  ];
  // end box number
  // title pendaftaran
  [titleOne.textContent, titleTwo.textContent, titleThree.textContent] = [
    titleFour,
    titleFive,
    titleSix,
  ];
  // end title pendaftaran
  // deskripsi pendaftaran
  [
    deskripsiOne.textContent,
    deskripsiTwo.textContent,
    deskripsiThree.textContent,
  ] = [deskripsiFour, deskripsiFive, deskripsiSix];
  // end deskripsi pendaftaran
});
// before pagination
paginationBefore.addEventListener("click", () => {
  // box number
  [boxOne.textContent, boxTwo.textContent, boxThree.textContent] = [
    boxOnebf,
    boxTwobf,
    boxThreebf,
  ];
  // end box number
  // title pendaftaran
  [titleOne.textContent, titleTwo.textContent, titleThree.textContent] = [
    titleOnebf,
    titleTwobf,
    titleThreebf,
  ];
  // end title pendaftaran
  // deskripsi pendaftaran
  [
    deskripsiOne.textContent,
    deskripsiTwo.textContent,
    deskripsiThree.textContent,
  ] = [deskripsiOnebf, deskripsiTwobf, deskripsiThreebf];
  // end deskripsi pendaftaran
});
// btn offline
btnOffline.addEventListener("click", () => {
  // Head title
  [headTitle.textContent] = [headTitleof];
  // box number
  [boxOne.textContent, boxTwo.textContent, boxThree.textContent] = [
    boxOnebf,
    boxTwobf,
    boxThreebf,
  ];
  // end box number
  // title pendaftaran
  [titleOne.textContent, titleTwo.textContent, titleThree.textContent] = [
    titleOnebf,
    titleTwobf,
    titleThreebf,
  ];
  // end title pendaftaran
  // deskripsi pendaftaran
  [
    deskripsiOne.textContent,
    deskripsiTwo.textContent,
    deskripsiThree.textContent,
  ] = [deskripsiOnebf, deskripsiTwobf, deskripsiThreebf];
  // end deskripsi pendaftaran
});
// btn online
btnOnline.addEventListener("click", () => {
  // Head title
  headTitle.textContent = "Pendaftaran Online";
  // box number
  [boxOne.textContent, boxTwo.textContent, boxThree.textContent] = [
    boxOnebf,
    boxTwobf,
    boxThreebf,
  ];
  // end box number
  // title pendaftaran
  [titleOne.textContent, titleTwo.textContent, titleThree.textContent] = [
    titleOnebf,
    titleTwobf,
    titleThreebf,
  ];
  // end title pendaftaran
  // deskripsi pendaftaran
  [
    deskripsiOne.textContent,
    deskripsiTwo.textContent,
    deskripsiThree.textContent,
  ] = [deskripsiOnebf, deskripsiTwobf, deskripsiThreebf];
  // end deskripsi pendaftaran
});
// swipper init
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
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
