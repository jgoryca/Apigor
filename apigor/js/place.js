"use strict";

let currentImage = 1;
let placeImage;
let placeImageNext;
let placeImagePrevious;

const btnPlacesLeft = document.querySelector(`.btn-places--left`);
const btnPlacesRight = document.querySelector(`.btn-places--right`);

const setImage = function (currentImg) {
  placeImage = document.querySelector(`.place-image-${currentImage}`);
  if (currentImage === 3)
    placeImageNext = document.querySelector(`.place-image-1`);
  else
    placeImageNext = document.querySelector(`.place-image-${currentImage + 1}`);
  if (currentImg === 1)
    placeImagePrevious = document.querySelector(`.place-image-3`);
  else
    placeImagePrevious = document.querySelector(
      `.place-image-${currentImage - 1}`
    );
};
const slideImgRight = function () {
  setImage(currentImage);
  placeImage.classList.add("hidden");
  placeImageNext.classList.remove("hidden");
  if (currentImage === 3) currentImage = 1;
  else currentImage++;
};

const slideImgLeft = function () {
  setImage(currentImage);
  placeImage.classList.add("hidden");
  placeImagePrevious.classList.remove("hidden");
  if (currentImage === 1) currentImage = 3;
  else currentImage--;
};

btnPlacesRight.addEventListener("click", function () {
  slideImgRight();
});

btnPlacesLeft.addEventListener("click", function () {
  slideImgLeft();
});
