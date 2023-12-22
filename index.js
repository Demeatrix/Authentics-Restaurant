let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlide: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  centeredSlide: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
