"use strict";

let carouselActive = 1;
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
/////////////////////////////////////
document.querySelector(".dot--1").addEventListener("click", function () {
  document
    .querySelector(`.carousel-img--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-img--1`).classList.remove("hidden");
  document
    .querySelector(`.dot--${carouselActive}`)
    .classList.remove("dot--active");
  document.querySelector(`.dot--1`).classList.add("dot--active");
  document
    .querySelector(`.carousel-text--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-text--1`).classList.remove("hidden");
  carouselActive = 1;
});
/////////////////////////////////////
document.querySelector(".dot--2").addEventListener("click", function () {
  document
    .querySelector(`.carousel-img--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-img--2`).classList.remove("hidden");
  document
    .querySelector(`.dot--${carouselActive}`)
    .classList.remove("dot--active");
  document.querySelector(`.dot--2`).classList.add("dot--active");
  document
    .querySelector(`.carousel-text--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-text--2`).classList.remove("hidden");
  carouselActive = 2;
});
/////////////////////////////////////
document.querySelector(".dot--3").addEventListener("click", function () {
  document
    .querySelector(`.carousel-img--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-img--3`).classList.remove("hidden");
  document
    .querySelector(`.dot--${carouselActive}`)
    .classList.remove("dot--active");
  document.querySelector(`.dot--3`).classList.add("dot--active");
  document
    .querySelector(`.carousel-text--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-text--3`).classList.remove("hidden");
  carouselActive = 3;
});
/////////////////////////////////////
document.querySelector(".dot--4").addEventListener("click", function () {
  document
    .querySelector(`.carousel-img--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-img--4`).classList.remove("hidden");
  document
    .querySelector(`.dot--${carouselActive}`)
    .classList.remove("dot--active");
  document.querySelector(`.dot--4`).classList.add("dot--active");
  document
    .querySelector(`.carousel-text--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-text--4`).classList.remove("hidden");
  carouselActive = 4;
});
/////////////////////////////////////
document.querySelector(".dot--5").addEventListener("click", function () {
  document
    .querySelector(`.carousel-img--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-img--5`).classList.remove("hidden");
  document
    .querySelector(`.dot--${carouselActive}`)
    .classList.remove("dot--active");
  document.querySelector(`.dot--5`).classList.add("dot--active");
  document
    .querySelector(`.carousel-text--${carouselActive}`)
    .classList.add("hidden");
  document.querySelector(`.carousel-text--5`).classList.remove("hidden");
  carouselActive = 5;
});
/////////////////////////////////////
btnRight.addEventListener("click", function () {
  if (carouselActive < 5) {
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
  } else {
    carouselActive = 1;
    document.querySelector(`.carousel-img--5`).classList.add("hidden");
    document.querySelector(`.carousel-img--1`).classList.remove("hidden");
    document.querySelector(`.dot--5`).classList.remove("dot--active");
    document.querySelector(`.carousel-text--5`).classList.add("hidden");
    document.querySelector(`.carousel-text--1`).classList.remove("hidden");
    document.querySelector(`.dot--1`).classList.add("dot--active");
  }
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
  } else {
    carouselActive = 5;
    document.querySelector(`.carousel-img--1`).classList.add("hidden");
    document.querySelector(`.carousel-img--5`).classList.remove("hidden");
    document.querySelector(`.dot--1`).classList.remove("dot--active");
    document.querySelector(`.carousel-text--1`).classList.add("hidden");
    document.querySelector(`.carousel-text--5`).classList.remove("hidden");
    document.querySelector(`.dot--5`).classList.add("dot--active");
  }
});
