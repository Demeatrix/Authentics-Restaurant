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

document.getElementById('menu-btn').addEventListener('click', function() {
  var navbar = document.querySelector('.header .navbar');
  navbar.classList.toggle('active');
});

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