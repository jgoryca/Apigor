"use strict";

let thumbnails = document.querySelectorAll(".thumbnail-1");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
const galleryImg = document.querySelector(".gallery-img");
const btnPopupLeft = document.querySelector(".btn-popup--left");
const btnPopupRight = document.querySelector(".btn-popup--right");

let currentImg;

const showNextImg = function () {
  if (currentImg === thumbnails.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }
  galleryImg.src = thumbnails[currentImg].src;
};

const showPreviousImg = function () {
  if (currentImg === 0) {
    currentImg = thumbnails.length - 1;
  } else {
    currentImg--;
  }
  galleryImg.src = thumbnails[currentImg].src;
};

const closePopup = function () {
  popup.classList.add("fade-out");
  setTimeout(function () {
    popup.classList.add("hidden");
    popup.classList.remove("fade-out");
  }, 300);
};

thumbnails.forEach(function (thumbnail, index) {
  const showPopup = function (e) {
    popup.classList.remove("hidden");
    galleryImg.src = e.target.src;
    currentImg = index;
  };
  thumbnail.addEventListener("click", showPopup);

  thumbnail.addEventListener("keydown", function (e) {
    if (e.code === "Enter" || e.keyCode === 13) showPopup(e);
  });
});

popupClose.addEventListener("click", closePopup);

btnPopupRight.addEventListener("click", showNextImg);

btnPopupLeft.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", function (e) {
  if (!popup.classList.contains("hidden")) {
    if (e.code === "ArrowRight" || e.keyCode === 39) showNextImg();
    if (e.code === "ArrowLeft" || e.keyCode === 37) showPreviousImg();
    if (e.code === "Escape" || e.keyCode === 27) closePopup();
  }
});
