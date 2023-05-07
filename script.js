"use strict";

let carouselActive = 1;
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");

btnRight.addEventListener("click", function () {
  console.log(carouselActive);
  if (document.querySelector(`.carousel-img--${carouselActive + 1}`)) {
    document
      .querySelector(`.carousel-img--${carouselActive}`)
      .classList.add("hidden");
    document
      .querySelector(`.carousel-img--${carouselActive + 1}`)
      .classList.remove("hidden");
    document
      .querySelector(`.dot--${carouselActive}`)
      .classList.remove("dot--active");
    document
      .querySelector(`.carousel-text--${carouselActive}`)
      .classList.add("hidden");
    document
      .querySelector(`.carousel-text--${carouselActive + 1}`)
      .classList.remove("hidden");
    document
      .querySelector(`.dot--${carouselActive + 1}`)
      .classList.add("dot--active");
    carouselActive++;
  }
  console.log(carouselActive);
});

btnLeft.addEventListener("click", function () {
  if (carouselActive > 1) {
    document
      .querySelector(`.carousel-img--${carouselActive}`)
      .classList.add("hidden");
    document
      .querySelector(`.carousel-img--${carouselActive - 1}`)
      .classList.remove("hidden");
    document
      .querySelector(`.dot--${carouselActive}`)
      .classList.remove("dot--active");
    document
      .querySelector(`.carousel-text--${carouselActive}`)
      .classList.add("hidden");
    document
      .querySelector(`.carousel-text--${carouselActive - 1}`)
      .classList.remove("hidden");
    document
      .querySelector(`.dot--${carouselActive - 1}`)
      .classList.add("dot--active");
    carouselActive--;
  }
  console.log(carouselActive);
});
