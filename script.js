let nav = document.querySelector(".nav-link");
let hamb = document.querySelector(".nav-click");

let lll = 0;

hamb.addEventListener("click", function () {

  if (lll == 0) {
    nav.style.visibility = "visible";
    nav.style.opacity = 1;
    lll = 1;
  }

  else {
    nav.style.visibility = "hidden";
    nav.style.opacity = 0;
    lll = 0;
  }


})



// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1700,
  }
});