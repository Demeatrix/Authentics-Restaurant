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

document.addEventListener("DOMContentLoaded", function () {
  const reviewContainer = document.getElementById("review-container");

  const reviewsWithRatingsAndNames = [
    {
      name: "John Doe",
      rating: 5,
      text: "Delicious food and excellent service. I highly recommend this place to everyone!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      text: "The variety of dishes is amazing. I keep coming back for more. Great atmosphere too!",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "I had a wonderful experience. The flavors are so rich, and the staff is friendly. Will be back soon!",
    },
    {
      name: "Emily Brown",
      rating: 5,
      text: "The menu has a great variety, and the presentation of dishes is top-notch. A must-visit place for food enthusiasts!",
    },
    {
      name: "Linda Martinez",
      rating: 4,
      text: "The ambiance is perfect for a cozy dinner. Tried their desserts, and they were heavenly. I'm impressed!",
    },
    {
      name: "Mark Wilson",
      rating: 5,
      text: "This place exceeded my expectations. The service is impeccable, and the food is a delightful culinary journey. Two thumbs up!",
    },
  ];

  reviewsWithRatingsAndNames.forEach(({ name, rating, text }) => {
    const review = document.createElement("div");
    review.className = "review";
    review.innerHTML = `
      <div class="star-rating">${generateStarRating(rating)}</div>
      <p class="name">${name}:</p>
      <p>${text}</p>`;
    reviewContainer.appendChild(review);
  });
});

function generateStarRating(rating) {
  const stars = '<i class="fas fa-star"></i>'.repeat(rating);
  const emptyStars = '<i class="far fa-star"></i>'.repeat(5 - rating);
  return stars + emptyStars;
}

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 1500) {
    toTop.classList.add("active");
  }
    else{
      toTop.classList.remove("active");
    }
})
