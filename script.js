const preload = document.querySelector("[data-preload]");

window.addEventListener("load", function() {
    preload.classList.add("loaded");
    document.body.classList.add("loaded");
});


let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};


const header = document.querySelector('.header');
const stick = header.offsetTop;

function stick_nav() {
  if (window.pageYOffset >= stick) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function() {
  stick_nav();
};


document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
});