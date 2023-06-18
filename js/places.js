"use strict";

let group = 4;
let currentImage = 1;
let placeImage;
let placeImageNext;
let placeImagePrevious;

let btnPlacesLeft = document.querySelector(`.btn-places-${group}--left`);
let btnPlacesRight = document.querySelector(`.btn-places-${group}--right`);

const setImage = function (group, currentImg) {
  placeImage = document.querySelector(`.place-image-${group}-${currentImage}`);
  if (currentImage === 3)
    placeImageNext = document.querySelector(`.place-image-${group}-1`);
  else
    placeImageNext = document.querySelector(
      `.place-image-${group}-${currentImage + 1}`
    );
  if (currentImg === 1)
    placeImagePrevious = document.querySelector(`.place-image-${group}-3`);
  else
    placeImagePrevious = document.querySelector(
      `.place-image-${group}-${currentImage - 1}`
    );
};

btnPlacesRight.addEventListener("click", function () {
  setImage(group, currentImage);
  placeImage.classList.add("hidden");
  placeImageNext.classList.remove("hidden");
  if (currentImage === 3) currentImage = 1;
  else currentImage++;
});

btnPlacesLeft.addEventListener("click", function () {
  setImage(group, currentImage);
  placeImage.classList.add("hidden");
  placeImagePrevious.classList.remove("hidden");
  if (currentImage === 1) currentImage = 3;
  else currentImage--;
});
