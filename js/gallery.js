"use strict";

const thumbnails = document.querySelectorAll(".thumbnail");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
const galleryImg = document.querySelector(".gallery-img");

thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function (e) {
    popup.classList.remove("hidden");
    galleryImg.src = e.target.src;
  });
});

popupClose.addEventListener("click", function () {
  popup.classList.add("hidden");
});
